'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { QRCodeSVG } from 'qrcode.react';
import { Users, Play, Copy, Check, QrCode, Loader2, RotateCcw, Shield, Tv, ArrowLeft } from 'lucide-react';
import { RoomState } from '@/types/game';
import { sound } from '@/lib/sound';
import { useRoomStore } from '@/lib/useRoomStore';

function LobbyContent() {
  const searchParams = useSearchParams();
  const pin = searchParams.get('pin') || 'GD8492';
  const isHostView = searchParams.get('host') === 'true';
  const router = useRouter();

  const { roomState, isConnected, fetchRoomState } = useRoomStore(pin);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [originUrl, setOriginUrl] = useState('');
  const [claimedName, setClaimedName] = useState('');
  const [claimedCategory, setClaimedCategory] = useState('');
  const [playerId, setPlayerId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOriginUrl(window.location.origin);
    }

    const pId = localStorage.getItem('gd_player_id') || '';
    const cName = localStorage.getItem('gd_claimed_member_name') || '';
    setPlayerId(pId);
    setClaimedName(cName);
  }, []);

  // Real-time synchronization reaction
  useEffect(() => {
    if (!roomState) return;

    const pId = localStorage.getItem('gd_player_id');

    // PLAYER CHECK: If player is NOT in host view and player was kicked by host
    if (!isHostView && pId) {
      const myPlayer = roomState.players[pId];
      if (!myPlayer) {
        // Player was removed/kicked by host -> redirect to name selection
        localStorage.removeItem('gd_claimed_member_id');
        localStorage.removeItem('gd_claimed_member_name');
        router.push(`/join?pin=${pin}`);
        return;
      } else {
        setClaimedCategory(myPlayer.claimedCategory || '');
      }
    }

    // GAME START TRIGGER: Check if game status changed to PLAYING
    if (roomState.status === 'PLAYING' && countdown === null) {
      triggerCountdownSequence();
    }
  }, [roomState, isHostView, pin, countdown, router]);

  const handleStartGame = async () => {
    try {
      await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'SET_STATUS', pin, status: 'PLAYING' }),
      });
      fetchRoomState();
    } catch {
      // ignore
    }
  };

  const handleReleaseName = async () => {
    try {
      if (playerId) {
        await fetch('/api/room', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'KICK', pin, playerId }),
        });
      }
    } catch {
      // ignore
    }
    localStorage.removeItem('gd_claimed_member_id');
    localStorage.removeItem('gd_claimed_member_name');
    router.push(`/join?pin=${pin}`);
  };

  const triggerCountdownSequence = () => {
    setCountdown(3);
    sound.playTick();

    setTimeout(() => {
      setCountdown(2);
      sound.playTick();
    }, 1000);

    setTimeout(() => {
      setCountdown(1);
      sound.playTick();
    }, 2000);

    setTimeout(() => {
      setCountdown(0);
      sound.playGo();
    }, 3000);

    setTimeout(() => {
      router.push(`/game?pin=${pin}`);
    }, 3500);
  };

  const joinUrl = `${originUrl}/join?pin=${pin}`;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(joinUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const players = Object.values(roomState?.players || {});

  return (
    <div className="min-h-screen bg-[#0b0517] text-slate-100 flex flex-col font-sans relative overflow-hidden">
      {/* Synchronized 3-2-1 Countdown Overlay */}
      {countdown !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center animate-fade-in">
          <div className="text-amber-400 font-extrabold text-9xl animate-bounce">
            {countdown === 0 ? 'GO!' : countdown}
          </div>
          <p className="text-purple-200 text-xl font-bold mt-4 tracking-wider uppercase">
            {countdown === 0 ? 'Find Your 10 Target Icons!' : 'Get Ready...'}
          </p>
        </div>
      )}

      {/* Header */}
      <header className="py-3 px-4 border-b border-purple-500/20 bg-slate-950/80 flex items-center justify-between z-10 shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-horizental.png" alt="Grape Dawn" width={130} height={36} className="object-contain" priority />
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-900 border border-purple-500/30 px-2.5 py-1 rounded-xl">
            <span className="text-[10px] text-slate-400 font-semibold uppercase">PIN:</span>
            <span className="font-mono text-amber-300 font-extrabold text-sm sm:text-base">{pin}</span>
          </div>

          {isHostView && (
            <Link
              href="/admin"
              className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-purple-900/40 border border-purple-500/30 text-purple-200"
            >
              Admin
            </Link>
          )}
        </div>
      </header>

      {/* Main Container - Mobile Optimized */}
      <main className="flex-1 max-w-md md:max-w-4xl w-full mx-auto p-4 flex flex-col justify-center items-center text-center z-10 space-y-6">
        {/* HOST VIEW LAYOUT */}
        {isHostView ? (
          <div className="w-full space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-purple-500/20 pb-4">
              <div className="text-left space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                  <Loader2 size={14} className="animate-spin text-amber-400" /> Host Control Lobby
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-300 to-amber-200">
                  Game Lobby
                </h1>
              </div>

              <button
                onClick={handleStartGame}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-lg rounded-2xl shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-2.5 transform active:scale-95 transition"
              >
                <Play size={22} /> START GAME NOW!
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* QR CODE CARD */}
              <div className="bg-slate-900/90 border border-purple-500/30 rounded-3xl p-5 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center space-y-3">
                <h2 className="text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                  <QrCode size={18} /> Join Room QR Code
                </h2>
                <div className="p-3 bg-white rounded-2xl shadow-xl border-4 border-purple-500/30">
                  <QRCodeSVG value={joinUrl} size={160} bgColor="#ffffff" fgColor="#2d0b5a" level="H" />
                </div>
                <button
                  onClick={handleCopyLink}
                  className="w-full py-2 bg-purple-600 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1"
                >
                  {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                  {copiedLink ? 'Copied Link!' : 'Copy Join Link'}
                </button>
              </div>

              {/* ROSTER */}
              <div className="md:col-span-2 bg-slate-900/90 border border-purple-500/30 rounded-3xl p-5 shadow-2xl backdrop-blur-xl space-y-3 text-left">
                <h2 className="text-sm font-bold text-purple-200 uppercase tracking-wider flex items-center gap-2">
                  <Users size={18} /> Active Players ({players.length})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-60 overflow-y-auto custom-scrollbar">
                  {players.map((p) => (
                    <div key={p.id} className="p-3 rounded-2xl bg-slate-950 border border-purple-500/20 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-extrabold text-white text-xs">
                        {p.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-xs text-white truncate">{p.name}</p>
                        <p className="text-[10px] text-amber-300 truncate">{p.claimedCategory}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* PLAYER VIEW LAYOUT (Strict Mobile-First centered card) */
          <div className="w-full max-w-sm sm:max-w-md bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-6 relative group">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Loader2 size={14} className="animate-spin text-amber-400" /> Waiting Room
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                You are Ready!
              </h1>
              <p className="text-xs text-slate-400">
                Playing as:
              </p>
              <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-amber-500/40 text-center space-y-0.5">
                <p className="font-black text-lg text-amber-300">{claimedName || 'BNI Member'}</p>
                {claimedCategory && <p className="text-xs font-medium text-purple-300">{claimedCategory}</p>}
              </div>
            </div>

            {/* Status Message */}
            <div className="p-4 rounded-2xl bg-purple-950/60 border border-purple-500/30 space-y-2 text-center">
              <p className="text-sm font-bold text-emerald-400 animate-pulse flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                Game will start shortly...
              </p>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Please hold tight! The host will launch the 3-2-1 countdown on your screen.
              </p>
            </div>

            {/* CHANGE NAME / MEMBER BUTTON */}
            <button
              onClick={handleReleaseName}
              className="w-full py-3 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-purple-500/40 text-slate-200 text-xs font-bold rounded-2xl transition flex items-center justify-center gap-2 shadow-lg"
            >
              <RotateCcw size={14} className="text-amber-400" /> Change Name / Member
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default function LobbyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0517] flex items-center justify-center text-purple-300">Loading Game Lobby...</div>}>
      <LobbyContent />
    </Suspense>
  );
}
