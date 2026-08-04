const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { WebSocketServer } = require('ws');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Import roomStore helpers lazily after app prepares
let subscribeRoom, getRoom;

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  });

  // Attach WebSocket server to the same HTTP server
  const wss = new WebSocketServer({ noServer: true });

  // Dynamically require roomStore
  try {
    const roomStore = require('./src/lib/roomStore');
    subscribeRoom = roomStore.subscribeRoom;
    getRoom = roomStore.getRoom;
  } catch {
    // If TypeScript resolution requires build, roomStore will handle runtime stream route
  }

  server.on('upgrade', (request, socket, head) => {
    const { pathname, query } = parse(request.url, true);

    if (pathname === '/api/ws') {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request, query);
      });
    } else {
      socket.destroy();
    }
  });

  wss.on('connection', (ws, request, query) => {
    const pin = (query && query.pin) || 'GD8492';
    console.log(`[WebSocket] Client connected to room ${pin}`);

    if (getRoom) {
      const initialRoom = getRoom(pin);
      if (initialRoom) {
        ws.send(JSON.stringify({ type: 'ROOM_UPDATE', room: initialRoom }));
      }
    }

    let unsubscribe;
    if (subscribeRoom) {
      unsubscribe = subscribeRoom(pin, (updatedRoom) => {
        if (ws.readyState === ws.OPEN) {
          ws.send(JSON.stringify({ type: 'ROOM_UPDATE', room: updatedRoom }));
        }
      });
    }

    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());
        if (data.type === 'PING') {
          ws.send(JSON.stringify({ type: 'PONG' }));
        }
      } catch {
        // ignore
      }
    });

    ws.on('close', () => {
      console.log(`[WebSocket] Client disconnected from room ${pin}`);
      if (unsubscribe) unsubscribe();
    });
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port} with WebSockets enabled on ws://${hostname}:${port}/api/ws`);
  });
});
