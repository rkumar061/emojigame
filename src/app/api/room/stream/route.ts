import { NextRequest, NextResponse } from 'next/server';
import { getRoom, subscribeRoom } from '@/lib/roomStore';
import { RoomState } from '@/types/game';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pin = searchParams.get('pin') || 'GD8492';
  const initialRoom = getRoom(pin);

  if (!initialRoom) {
    return NextResponse.json({ error: 'Room not found' }, { status: 404 });
  }

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      // Helper to push room updates to client
      const pushRoomUpdate = (roomState: RoomState) => {
        try {
          const payload = `data: ${JSON.stringify({ room: roomState })}\n\n`;
          controller.enqueue(encoder.encode(payload));
        } catch {
          // Controller might be closed
        }
      };

      // Send initial room snapshot immediately
      pushRoomUpdate(initialRoom);

      // Subscribe to real-time room state updates
      const unsubscribe = subscribeRoom(pin, (updatedRoom) => {
        pushRoomUpdate(updatedRoom);
      });

      // Keep-alive heartbeat every 15 seconds to keep connection open
      const interval = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(': heartbeat\n\n'));
        } catch {
          clearInterval(interval);
        }
      }, 15000);

      // Clean up when client disconnects
      req.signal.addEventListener('abort', () => {
        clearInterval(interval);
        unsubscribe();
        try {
          controller.close();
        } catch {
          // ignore
        }
      });
    },
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no', // Disables proxy buffering for Nginx
    },
  });
}
