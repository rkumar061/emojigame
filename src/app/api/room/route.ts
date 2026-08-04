import { NextRequest, NextResponse } from 'next/server';
import {
  getRoom,
  createRoom,
  claimMemberName,
  kickPlayer,
  updatePlayerScore,
  setRoomStatus,
  updateRoomMembers,
  updateRoomConfig,
} from '@/lib/roomStore';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pin = searchParams.get('pin') || 'GD8492';
  const room = getRoom(pin);

  if (!room) {
    return NextResponse.json({ error: 'Room not found' }, { status: 404 });
  }

  return NextResponse.json({ room });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, pin = 'GD8492' } = body;

    if (action === 'CREATE') {
      const room = createRoom(pin, body.config, body.members);
      return NextResponse.json({ room });
    }

    if (action === 'UPDATE_CONFIG') {
      const room = updateRoomConfig(pin, body.config);
      return NextResponse.json({ room });
    }

    if (action === 'CLAIM_NAME') {
      const result = claimMemberName(pin, body.playerId, body.playerName, body.memberId);
      if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 400 });
      }
      return NextResponse.json({ room: result.room });
    }

    if (action === 'KICK') {
      const room = kickPlayer(pin, body.playerId);
      return NextResponse.json({ room });
    }

    if (action === 'UPDATE_MEMBERS') {
      const room = updateRoomMembers(pin, body.members);
      return NextResponse.json({ room });
    }

    if (action === 'UPDATE_SCORE') {
      const room = updatePlayerScore(pin, body.playerId, body.stats);
      return NextResponse.json({ room });
    }

    if (action === 'SET_STATUS') {
      const room = setRoomStatus(pin, body.status);
      return NextResponse.json({ room });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
