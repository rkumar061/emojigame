'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { QRCodeSVG } from 'qrcode.react';
import {
  Tv,
  Play,
  Square,
  Settings,
  Share2,
  UserX,
  Trophy,
  Crown,
  Users,
  Copy,
  Check,
  X,
  Award,
  Clock,
  Sparkles,
  Flame,
  Shield,
  RotateCcw,
} from 'lucide-react';
import { RoomState, GameConfig } from '@/types/game';

function HostContent() {
  const searchParams = useSearchParams();
  const pin = searchParams.get('pin') || 'GD8492';

  // Room State
  const [roomState, setRoomState] = useState<RoomState | null>(null);

  // Modals
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showKickModal, setShowKickModal] = useState(false);

  // Form states
  const [copiedLink, setCopiedLink] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(30);
  const [originUrl, setOriginUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOriginUrl(window.location.origin);
    }
    fetchRoomState();
    const interval = setInterval(fetchRoomState, 1500);
    return () => clearInterval(interval);
  }, [pin]);

  const fetchRoomState = async () => {
    try {
      const res = await fetch(`/api/room?pin=${pin}`);
      const data = await res.json();
      if (data.room) {
        setRoomState(data.room);
        if (data.room.config?.timerSeconds) {
          setTimerSeconds(data.room.config.timerSeconds);
        }
      }
    } catch {
      // ignore
    }
  };

  const handleStartGame = async () => {
    await fetch('/api/room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'SET_STATUS', pin, status: 'PLAYING' }),
    });
    fetchRoomState();
  };

  const handleStopGame = async () => {
    await fetch('/api/room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'SET_STATUS', pin, status: 'LOBBY' }),
    });
    fetchRoomState();
  };

  const handleSaveSettings = async () => {
    await fetch('/api/room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'UPDATE_CONFIG',
        pin,
        config: { timerSeconds },
      }),
    });
    setShowSettingsModal(false);
    fetchRoomState();
  };

  const handleKickPlayer = async (playerId: string) => {
    await fetch('/api/room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'KICK', pin, playerId }),
    });
    fetchRoomState();
  };

  const joinUrl = `${originUrl}/join?pin=${pin}`;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(joinUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const playersList = Object.values(roomState?.players || {});
  const sortedPlayers = [...playersList].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.accuracy - a.accuracy;
  });

  const top1 = sortedPlayers[0];
  const top2 = sortedPlayers[1];
  const top3 = sortedPlayers[2];

  const isPlaying = roomState?.status === 'PLAYING' || roomState?.status === 'FINISHED';

  return (
    <div className="min-h-screen bg-[#0b0517] text-slate-100 flex flex-col font-sans relative overflow-hidden">
      {/* Top TV Screen Control Bar */}
      <header className="h-20 border-b border-purple-500/20 bg-slate-950/80 px-6 sm:px-8 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-horizental.png"
              alt="Grape Dawn"
              width={200}
              height={55}
              className="object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
              priority
            />
          </Link>
          <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-purple-500/30 px-3.5 py-1.5 rounded-xl">
            <span className="text-xs text-slate-400 font-semibold">PIN:</span>
            <span className="font-mono text-amber-300 font-extrabold text-xl">{pin}</span>
          </div>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Share Lobby Button */}
          <button
            onClick={() => setShowShareModal(true)}
            className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-purple-900/50 hover:bg-purple-800/70 border border-purple-500/30 text-purple-200 transition shadow-md"
            title="Share Lobby & QR Code"
          >
            <Share2 size={16} /> <span className="hidden sm:inline">Share Lobby</span>
          </button>

          {/* Game Settings Button */}
          <button
            onClick={() => setShowSettingsModal(true)}
            className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-purple-950/60 border border-purple-500/30 text-purple-300 transition shadow-md"
            title="Game Settings"
          >
            <Settings size={16} /> <span className="hidden sm:inline">Settings</span>
          </button>

          {/* Reset / Kick Player Button */}
          <button
            onClick={() => setShowKickModal(true)}
            className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 border border-rose-500/40 text-rose-300 transition shadow-md"
            title="Send Player to Name Selection"
          >
            <UserX size={16} /> <span className="hidden sm:inline">Reset Player</span>
          </button>

          {/* START / STOP GAME CONTROL */}
          {isPlaying ? (
            <button
              onClick={handleStopGame}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-extrabold text-sm shadow-xl shadow-rose-950/50 transition transform active:scale-95"
            >
              <Square size={16} /> STOP GAME
            </button>
          ) : (
            <button
              onClick={handleStartGame}
              className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-950/50 transition transform active:scale-95"
            >
              <Play size={16} /> START GAME
            </button>
          )}
        </div>
      </header>

      {/* Main TV Display Canvas */}
      <main className="flex-1 p-6 sm:p-8 flex flex-col z-10 max-w-7xl mx-auto w-full space-y-6">
        {/* Header Title Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-purple-500/20 pb-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-300 to-amber-200 uppercase tracking-tight">
              Grape Dawn Icon Arena
            </h1>
            <p className="text-sm text-purple-300 font-semibold">
              Live Room: <span className="font-mono text-amber-300 font-bold">{pin}</span> • Timer: {timerSeconds}s
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Room Status:</span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase ${
                isPlaying
                  ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 animate-pulse'
                  : 'bg-purple-500/20 border border-purple-500/40 text-purple-300'
              }`}
            >
              {roomState?.status || 'LOBBY'}
            </span>
          </div>
        </div>

        {/* LOBBY VIEW (Before Game Starts) */}
        {!isPlaying && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* QR CODE CARD */}
            <div className="bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center space-y-4">
              <h2 className="text-base font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                <Share2 size={18} /> Join Room QR Code
              </h2>

              <div className="p-4 bg-white rounded-2xl shadow-2xl border-4 border-purple-500/30">
                <QRCodeSVG
                  value={joinUrl}
                  size={190}
                  bgColor="#ffffff"
                  fgColor="#2d0b5a"
                  level="H"
                />
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Scan with phone camera to select member name!
              </p>

              <div className="w-full pt-3 border-t border-purple-500/20">
                <button
                  onClick={handleCopyLink}
                  className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-extrabold transition flex items-center justify-center gap-2 shadow-lg"
                >
                  {copiedLink ? <Check size={16} /> : <Copy size={16} />}
                  {copiedLink ? 'Join Link Copied!' : 'Copy Join Link'}
                </button>
              </div>
            </div>

            {/* JOINED PLAYERS ROSTER */}
            <div className="md:col-span-2 bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                <h2 className="text-base font-bold text-purple-200 uppercase tracking-wider flex items-center gap-2">
                  <Users size={20} className="text-purple-400" /> Active Joined Members ({playersList.length})
                </h2>
                <span className="text-xs text-slate-400 font-semibold">
                  Waiting for Host to click Start Game
                </span>
              </div>

              {playersList.length === 0 ? (
                <div className="py-16 flex flex-col items-center justify-center text-center text-slate-500 space-y-3">
                  <Users size={48} className="text-purple-500/30 animate-pulse" />
                  <p className="text-base font-bold text-slate-400">No players joined yet</p>
                  <p className="text-xs text-slate-500 max-w-sm">
                    Players scan the QR code or visit <strong className="text-amber-300">{joinUrl}</strong> to claim their member name!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[55vh] overflow-y-auto custom-scrollbar p-1">
                  {playersList.map((player) => (
                    <div
                      key={player.id}
                      className="p-3.5 rounded-2xl bg-slate-950/80 border border-purple-500/30 flex items-center justify-between shadow-lg"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-black text-white text-base shadow shrink-0">
                          {player.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-sm text-white truncate">{player.name}</p>
                          <p className="text-xs text-amber-300 truncate">{player.claimedCategory}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleKickPlayer(player.id)}
                        className="p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 transition text-xs font-semibold"
                        title="Send back to name selection"
                      >
                        <UserX size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ONCE GAME STARTED: HIGH-IMPACT LEADERBOARD STYLED LAYOUT */}
        {isPlaying && (
          <div className="space-y-8 animate-fade-in">
            {/* Top 3 Victory Podium Header */}
            <div className="w-full grid grid-cols-3 gap-3 sm:gap-6 items-end max-w-4xl mx-auto pt-4">
              {/* 2nd Place */}
              <div className="flex flex-col items-center">
                {top2 ? (
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-slate-400 text-slate-950 flex items-center justify-center font-extrabold text-xl shadow-lg mb-1">
                      🥈
                    </div>
                    <div className="font-extrabold text-sm sm:text-base text-slate-200 text-center truncate max-w-[120px]">
                      {top2.name}
                    </div>
                    <div className="text-xs font-bold text-emerald-400">{top2.score} pts</div>
                  </div>
                ) : null}
                <div className="w-full h-32 sm:h-40 bg-gradient-to-t from-slate-800 to-slate-700 rounded-t-3xl border-t-4 border-slate-400 flex flex-col items-center justify-center shadow-2xl">
                  <span className="font-black text-2xl sm:text-3xl text-slate-300">2nd</span>
                </div>
              </div>

              {/* 1st Place GOLD */}
              <div className="flex flex-col items-center -mt-8">
                {top1 ? (
                  <div className="flex flex-col items-center mb-2 animate-bounce">
                    <Crown size={36} className="text-amber-400 filter drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
                    <div className="w-16 h-16 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center font-black text-3xl shadow-2xl border-2 border-amber-200 mb-1">
                      🥇
                    </div>
                    <div className="font-black text-base sm:text-lg text-amber-300 text-center truncate max-w-[140px]">
                      {top1.name}
                    </div>
                    <div className="text-xs font-extrabold text-emerald-400">
                      {top1.score} pts • {top1.accuracy}% Acc
                    </div>
                  </div>
                ) : null}
                <div className="w-full h-40 sm:h-52 bg-gradient-to-t from-amber-600 via-amber-500 to-amber-400 rounded-t-3xl border-t-4 border-amber-200 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                  <span className="font-black text-3xl sm:text-5xl text-amber-950">1st</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="flex flex-col items-center">
                {top3 ? (
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-amber-800 text-amber-200 flex items-center justify-center font-extrabold text-xl shadow-lg mb-1">
                      🥉
                    </div>
                    <div className="font-extrabold text-sm sm:text-base text-slate-200 text-center truncate max-w-[120px]">
                      {top3.name}
                    </div>
                    <div className="text-xs font-bold text-emerald-400">{top3.score} pts</div>
                  </div>
                ) : null}
                <div className="w-full h-28 sm:h-32 bg-gradient-to-t from-amber-900 to-amber-800 rounded-t-3xl border-t-4 border-amber-700 flex flex-col items-center justify-center shadow-2xl">
                  <span className="font-black text-xl sm:text-2xl text-amber-300">3rd</span>
                </div>
              </div>
            </div>

            {/* LIVE LEADERBOARD STYLED TABLE */}
            <div className="bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                <h2 className="text-lg font-bold text-purple-200 uppercase tracking-wider flex items-center gap-2">
                  <Trophy size={20} className="text-amber-400" /> Live Leaderboard Rankings
                </h2>
                <span className="text-xs font-bold text-emerald-400 animate-pulse">
                  ● Real-time Updates Active
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-purple-500/20 text-purple-300 font-bold uppercase text-xs tracking-wider">
                      <th className="pb-3 px-3">Rank</th>
                      <th className="pb-3 px-3">Player Name</th>
                      <th className="pb-3 px-3">Category</th>
                      <th className="pb-3 px-3 text-right">Score</th>
                      <th className="pb-3 px-3 text-right">Accuracy</th>
                      <th className="pb-3 px-3 text-right">Max Combo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-500/10">
                    {sortedPlayers.map((player, idx) => (
                      <tr
                        key={player.id}
                        className={`hover:bg-purple-950/40 transition font-medium ${
                          idx === 0 ? 'bg-amber-500/10 font-bold' : ''
                        }`}
                      >
                        <td className="py-3.5 px-3 font-extrabold text-slate-200">
                          {idx === 0 ? '🥇 1st' : idx === 1 ? '🥈 2nd' : idx === 2 ? '🥉 3rd' : `#${idx + 1}`}
                        </td>
                        <td className="py-3.5 px-3 font-extrabold text-white">{player.name}</td>
                        <td className="py-3.5 px-3 text-amber-300">{player.claimedCategory}</td>
                        <td className="py-3.5 px-3 text-right font-mono font-black text-emerald-400 text-lg">
                          {player.score}
                        </td>
                        <td className="py-3.5 px-3 text-right font-bold text-purple-300">
                          {player.accuracy}%
                        </td>
                        <td className="py-3.5 px-3 text-right font-extrabold text-amber-400">
                          {player.maxCombo >= 2 ? `🔥 ${player.maxCombo}x` : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* SHARE LOBBY MODAL */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-500/30 rounded-3xl p-6 max-w-md w-full shadow-2xl flex flex-col items-center text-center space-y-4">
            <div className="w-full flex items-center justify-between border-b border-purple-500/20 pb-3">
              <h3 className="text-base font-bold text-purple-200 flex items-center gap-2">
                <Share2 size={18} className="text-amber-400" /> Share Lobby & QR Code
              </h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 bg-white rounded-2xl shadow-xl border-4 border-purple-500/30">
              <QRCodeSVG value={joinUrl} size={180} bgColor="#ffffff" fgColor="#2d0b5a" level="H" />
            </div>

            <div className="w-full space-y-2 text-left">
              <label className="block text-xs font-semibold text-purple-300">Direct Join URL</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={joinUrl}
                  className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-amber-300 font-mono truncate"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1"
                >
                  {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                  {copiedLink ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GAME SETTINGS MODAL */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-500/30 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
              <h3 className="text-base font-bold text-purple-200 flex items-center gap-2">
                <Settings size={18} className="text-purple-400" /> Host Game Settings
              </h3>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-purple-300 mb-1.5">
                  Game Timer Duration
                </label>
                <select
                  value={timerSeconds}
                  onChange={(e) => setTimerSeconds(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm font-bold text-amber-300 focus:outline-none focus:border-purple-500"
                >
                  <option value={15}>15 Seconds (Fast Blitz)</option>
                  <option value={30}>30 Seconds (Standard)</option>
                  <option value={45}>45 Seconds (Extended)</option>
                  <option value={60}>60 Seconds (Long Race)</option>
                </select>
              </div>

              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-slate-300 space-y-1">
                <p className="font-bold text-amber-300">Scoring Rules:</p>
                <p>• Correct Click: +100 Base Points</p>
                <p>• Wrong Click: -25 Penalty Points</p>
                <p>• Combo Multiplier: 2x, 3x, 5x Bonus Multipliers</p>
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-2">
              <button
                onClick={() => setShowSettingsModal(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl shadow-lg"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESET / KICK PLAYER MODAL */}
      {showKickModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-500/30 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
              <h3 className="text-base font-bold text-rose-300 flex items-center gap-2">
                <UserX size={18} /> Reset Player to Name Selection
              </h3>
              <button
                onClick={() => setShowKickModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Tap any member below to send them back to the name selection screen and free up their claimed name:
            </p>

            <div className="max-h-60 overflow-y-auto custom-scrollbar space-y-2 p-1">
              {playersList.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500">No active players joined.</div>
              ) : (
                playersList.map((player) => (
                  <div
                    key={player.id}
                    className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-xs text-white">{player.name}</p>
                      <p className="text-[11px] text-amber-300">{player.claimedCategory}</p>
                    </div>
                    <button
                      onClick={() => handleKickPlayer(player.id)}
                      className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition"
                    >
                      Reset Name
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HostPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0517] flex items-center justify-center text-purple-300">Loading Host Screen...</div>}>
      <HostContent />
    </Suspense>
  );
}
