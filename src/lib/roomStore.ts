import fs from 'fs';
import path from 'path';
import { RoomState, MemberProfile, GameConfig } from '@/types/game';
import { INITIAL_MEMBERS } from './defaultData';

// Global room state registry (in-memory per server process)
const rooms: Record<string, RoomState> = {};

// Listener registry for real-time WebSockets and SSE push streams
type RoomListener = (room: RoomState) => void;
const roomListeners: Record<string, Set<RoomListener>> = {};

const STORE_PATH = path.join(process.cwd(), 'data', 'members_store.json');

function loadPersistedMembers(): MemberProfile[] {
  try {
    if (fs.existsSync(STORE_PATH)) {
      const data = fs.readFileSync(STORE_PATH, 'utf8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // ignore load errors
  }
  return JSON.parse(JSON.stringify(INITIAL_MEMBERS));
}

function savePersistedMembers(members: MemberProfile[]): void {
  try {
    const dir = path.dirname(STORE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(STORE_PATH, JSON.stringify(members, null, 2), 'utf8');
  } catch {
    // ignore save errors
  }
}

export function subscribeRoom(pin: string, listener: RoomListener): () => void {
  const cleanPin = pin.trim().toUpperCase();
  if (!roomListeners[cleanPin]) {
    roomListeners[cleanPin] = new Set();
  }
  roomListeners[cleanPin].add(listener);

  return () => {
    if (roomListeners[cleanPin]) {
      roomListeners[cleanPin].delete(listener);
    }
  };
}

export function notifyRoomListeners(pin: string): void {
  const cleanPin = pin.trim().toUpperCase();
  const room = rooms[cleanPin];
  if (room && roomListeners[cleanPin]) {
    roomListeners[cleanPin].forEach((callback) => {
      try {
        callback(room);
      } catch {
        // ignore listener error
      }
    });
  }
}

// Helper to generate a default room state
export function createDefaultRoom(pin = 'GD8492'): RoomState {
  const defaultConfig: GameConfig = {
    timerSeconds: 30,
    correctPoints: 100,
    wrongPenalty: 25,
    comboEnabled: true,
  };

  return {
    pin,
    status: 'LOBBY',
    config: defaultConfig,
    members: loadPersistedMembers(),
    players: {},
    countdownSeconds: 3,
  };
}

// Ensure default room exists
if (!rooms['GD8492']) {
  rooms['GD8492'] = createDefaultRoom('GD8492');
}

export function getRoom(pin: string): RoomState | undefined {
  const cleanPin = pin.trim().toUpperCase();
  if (!rooms[cleanPin] && cleanPin === 'GD8492') {
    rooms[cleanPin] = createDefaultRoom(cleanPin);
  }
  return rooms[cleanPin];
}

export function createRoom(pin: string, config?: Partial<GameConfig>, members?: MemberProfile[]): RoomState {
  const cleanPin = pin.trim().toUpperCase();
  const room = createDefaultRoom(cleanPin);
  if (config) {
    room.config = { ...room.config, ...config };
  }
  if (members && members.length > 0) {
    room.members = members;
  }
  rooms[cleanPin] = room;
  notifyRoomListeners(cleanPin);
  return room;
}

export function updateRoomConfig(pin: string, config: Partial<GameConfig>): RoomState | undefined {
  const cleanPin = pin.trim().toUpperCase();
  const room = getRoom(cleanPin);
  if (!room) return undefined;
  room.config = { ...room.config, ...config };
  notifyRoomListeners(cleanPin);
  return room;
}

export function updateRoomMembers(pin: string, members: MemberProfile[]): RoomState | undefined {
  const cleanPin = pin.trim().toUpperCase();
  const room = getRoom(cleanPin);
  if (!room) return undefined;
  room.members = members;
  savePersistedMembers(members);
  notifyRoomListeners(cleanPin);
  return room;
}

export function claimMemberName(
  pin: string,
  playerId: string,
  playerName: string,
  memberId: string
): { success: boolean; error?: string; room?: RoomState } {
  const cleanPin = pin.trim().toUpperCase();
  const room = getRoom(cleanPin);
  if (!room) return { success: false, error: 'Room not found' };

  const member = room.members.find((m) => m.id === memberId);
  if (!member) return { success: false, error: 'Member not found' };

  if (member.claimedBy && member.claimedBy !== playerId) {
    return { success: false, error: `This name is already claimed by ${member.claimedByName || 'another player'}` };
  }

  // Release any previously claimed member by this player
  room.members.forEach((m) => {
    if (m.claimedBy === playerId) {
      m.claimedBy = undefined;
      m.claimedByName = undefined;
    }
  });

  // Claim target member
  member.claimedBy = playerId;
  member.claimedByName = playerName;

  // Add/Update player progress
  room.players[playerId] = {
    id: playerId,
    name: playerName,
    claimedMemberId: member.id,
    claimedMemberName: member.name,
    claimedCategory: member.category,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    totalClicks: 0,
    accuracy: 100,
    timeSec: 0,
    comboStreak: 0,
    maxCombo: 0,
    finished: false,
  };

  notifyRoomListeners(cleanPin);
  return { success: true, room };
}

export function kickPlayer(pin: string, playerId: string): RoomState | undefined {
  const cleanPin = pin.trim().toUpperCase();
  const room = getRoom(cleanPin);
  if (!room) return undefined;

  // Free claimed member name
  room.members.forEach((m) => {
    if (m.claimedBy === playerId) {
      m.claimedBy = undefined;
      m.claimedByName = undefined;
    }
  });

  delete room.players[playerId];
  notifyRoomListeners(cleanPin);
  return room;
}

export function updatePlayerScore(
  pin: string,
  playerId: string,
  stats: Partial<RoomState['players'][string]>
): RoomState | undefined {
  const cleanPin = pin.trim().toUpperCase();
  const room = getRoom(cleanPin);
  if (!room) return undefined;

  const player = room.players[playerId];
  if (player) {
    Object.assign(player, stats);
    if (player.totalClicks > 0) {
      player.accuracy = Math.round((player.correctCount / player.totalClicks) * 100);
    }
  }

  // Auto-finish room when EVERY active player in the room has completed
  if (room.status === 'PLAYING') {
    const playersArr = Object.values(room.players);
    if (playersArr.length > 0 && playersArr.every((p) => p.finished)) {
      room.status = 'FINISHED';
      room.endedAt = Date.now();
    }
  }

  notifyRoomListeners(cleanPin);
  return room;
}

export function setRoomStatus(pin: string, status: RoomState['status']): RoomState | undefined {
  const cleanPin = pin.trim().toUpperCase();
  const room = getRoom(cleanPin);
  if (!room) return undefined;
  room.status = status;
  if (status === 'PLAYING') {
    room.startedAt = Date.now();
    // Reset player scores for new round
    Object.values(room.players).forEach((p) => {
      p.score = 0;
      p.correctCount = 0;
      p.wrongCount = 0;
      p.totalClicks = 0;
      p.accuracy = 100;
      p.comboStreak = 0;
      p.maxCombo = 0;
      p.finished = false;
    });
  } else if (status === 'FINISHED') {
    room.endedAt = Date.now();
  }
  notifyRoomListeners(cleanPin);
  return room;
}
