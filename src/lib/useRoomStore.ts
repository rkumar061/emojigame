'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { RoomState } from '@/types/game';

export function useRoomStore(pin: string = 'GD8492') {
  const [roomState, setRoomState] = useState<RoomState | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const fallbackIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch current room state via REST GET (used on initial load or emergency fallback)
  const fetchRoomState = useCallback(async () => {
    try {
      const res = await fetch(`/api/room?pin=${pin}`);
      const data = await res.json();
      if (data.room) {
        setRoomState(data.room);
      }
    } catch {
      // ignore
    }
  }, [pin]);

  useEffect(() => {
    // 1. Initial snapshot load
    fetchRoomState();

    let isSubscribed = true;

    // 2. Try WebSocket connection first if available
    if (typeof window !== 'undefined') {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/api/ws?pin=${pin}`;

      try {
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

        ws.onopen = () => {
          if (isSubscribed) {
            setIsConnected(true);
            if (fallbackIntervalRef.current) {
              clearInterval(fallbackIntervalRef.current);
              fallbackIntervalRef.current = null;
            }
          }
        };

        ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.room && isSubscribed) {
              setRoomState(data.room);
            }
          } catch {
            // ignore
          }
        };

        ws.onerror = () => {
          ws.close();
        };

        ws.onclose = () => {
          if (isSubscribed) {
            setIsConnected(false);
          }
        };
      } catch {
        // Fallback to EventSource
      }
    }

    // 3. Real-Time Server-Sent Events (SSE) stream connection
    const streamUrl = `/api/room/stream?pin=${pin}`;
    const es = new EventSource(streamUrl);
    eventSourceRef.current = es;

    es.onopen = () => {
      if (isSubscribed) {
        setIsConnected(true);
        // Clear any emergency polling intervals when real-time stream is live
        if (fallbackIntervalRef.current) {
          clearInterval(fallbackIntervalRef.current);
          fallbackIntervalRef.current = null;
        }
      }
    };

    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.room && isSubscribed) {
          setRoomState(data.room);
        }
      } catch {
        // ignore
      }
    };

    es.onerror = () => {
      if (isSubscribed) {
        setIsConnected(false);
        // Only start emergency low-frequency fallback if real-time stream fails
        if (!fallbackIntervalRef.current) {
          fallbackIntervalRef.current = setInterval(fetchRoomState, 10000);
        }
      }
    };

    return () => {
      isSubscribed = false;
      if (fallbackIntervalRef.current) {
        clearInterval(fallbackIntervalRef.current);
        fallbackIntervalRef.current = null;
      }
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [pin, fetchRoomState]);

  return { roomState, isConnected, fetchRoomState, setRoomState };
}
