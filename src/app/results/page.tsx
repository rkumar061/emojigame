'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import confetti from 'canvas-confetti';
import { Trophy, Crown, Home, Award } from 'lucide-react';
import { RoomState } from '@/types/game';

function ResultsContent() {
  const searchParams = useSearchParams();
  const pin = searchParams.get('pin') || 'GD8492';

  const [roomState, setRoomState] = useState<RoomState | null>(null);

  useEffect(() => {
    // Launch celebratory confetti burst
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#eab308', '#22c55e'],
      });
    } catch {
      // ignore
    }

    fetchRoomState();
    const interval = setInterval(fetchRoomState, 2000);
    return () => clearInterval(interval);
  }, [pin]);

  const fetchRoomState = async () => {
    try {
      const res = await fetch(`/api/room?pin=${pin}`);
      const data = await res.json();
      if (data.room) {
        setRoomState(data.room);
      }
    } catch {
      // ignore
    }
  };

  const playersList = Object.values(roomState?.players || {});
  // Sort leaderboard by Accuracy % desc, then Score desc
  const sortedPlayers = [...playersList].sort((a, b) => {
    if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
    return b.score - a.score;
  });

  const top1 = sortedPlayers[0];
  const top2 = sortedPlayers[1];
  const top3 = sortedPlayers[2];

  return (
    <div className="min-h-screen bg-[#0b0517] text-slate-100 flex flex-col font-sans relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="py-4 px-6 border-b border-purple-500/20 bg-slate-950/60 flex items-center justify-between z-10">
        <Image src="/logo-horizental.png" alt="Grape Dawn" width={150} height={40} className="object-contain" />
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 transition"
        >
          <Home size={14} /> Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 flex flex-col items-center z-10 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Trophy size={14} className="text-amber-400" /> Leaderboard & Victory Podium
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-purple-200 to-pink-300">
            Grape Dawn Champions!
          </h1>
        </div>

        {/* 3D VICTORY PODIUM */}
        <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 items-end max-w-2xl pt-8 pb-4">
          {/* 2nd Place Podium */}
          <div className="flex flex-col items-center">
            {top2 ? (
              <div className="flex flex-col items-center mb-2 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-slate-400 text-slate-900 flex items-center justify-center font-extrabold text-lg shadow-lg mb-1">
                  🥈
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-200 text-center truncate max-w-[100px]">
                  {top2.name}
                </div>
                <div className="text-[10px] text-slate-400">{top2.score} pts</div>
              </div>
            ) : null}
            <div className="w-full h-28 sm:h-36 bg-gradient-to-t from-slate-800 to-slate-700 rounded-t-2xl border-t-4 border-slate-400 flex flex-col items-center justify-center shadow-2xl">
              <span className="font-black text-2xl sm:text-3xl text-slate-300">2nd</span>
            </div>
          </div>

          {/* 1st Place GOLD Podium */}
          <div className="flex flex-col items-center -mt-6">
            {top1 ? (
              <div className="flex flex-col items-center mb-2 animate-bounce">
                <Crown size={32} className="text-amber-400 filter drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                <div className="w-16 h-16 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center font-black text-2xl shadow-xl border-2 border-amber-200 mb-1">
                  🥇
                </div>
                <div className="font-black text-sm sm:text-base text-amber-300 text-center truncate max-w-[120px]">
                  {top1.name}
                </div>
                <div className="text-xs font-bold text-emerald-400">{top1.score} pts • {top1.accuracy}% Acc</div>
              </div>
            ) : null}
            <div className="w-full h-36 sm:h-48 bg-gradient-to-t from-amber-600 via-amber-500 to-amber-400 rounded-t-2xl border-t-4 border-amber-200 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <span className="font-black text-3xl sm:text-4xl text-amber-950">1st</span>
            </div>
          </div>

          {/* 3rd Place Podium */}
          <div className="flex flex-col items-center">
            {top3 ? (
              <div className="flex flex-col items-center mb-2 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-amber-800 text-amber-200 flex items-center justify-center font-extrabold text-lg shadow-lg mb-1">
                  🥉
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-200 text-center truncate max-w-[100px]">
                  {top3.name}
                </div>
                <div className="text-[10px] text-slate-400">{top3.score} pts</div>
              </div>
            ) : null}
            <div className="w-full h-24 sm:h-28 bg-gradient-to-t from-amber-900 to-amber-800 rounded-t-2xl border-t-4 border-amber-700 flex flex-col items-center justify-center shadow-2xl">
              <span className="font-black text-xl sm:text-2xl text-amber-300">3rd</span>
            </div>
          </div>
        </div>

        {/* Detailed Leaderboard Table */}
        <div className="w-full bg-slate-900/90 border border-purple-500/30 rounded-3xl p-5 shadow-2xl backdrop-blur-xl space-y-4">
          <h2 className="text-sm font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
            <Award size={16} /> All Players Ranking
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-purple-500/20 text-slate-400 font-semibold uppercase text-[10px]">
                  <th className="pb-3 px-2">Rank</th>
                  <th className="pb-3 px-2">Player</th>
                  <th className="pb-3 px-2">Assigned Member</th>
                  <th className="pb-3 px-2 text-right">Score</th>
                  <th className="pb-3 px-2 text-right">Accuracy</th>
                  <th className="pb-3 px-2 text-right">Max Combo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/10">
                {sortedPlayers.map((player, idx) => (
                  <tr key={player.id} className="hover:bg-purple-950/30 transition">
                    <td className="py-3 px-2 font-bold text-slate-300">
                      {idx === 0 ? '🥇 1st' : idx === 1 ? '🥈 2nd' : idx === 2 ? '🥉 3rd' : `#${idx + 1}`}
                    </td>
                    <td className="py-3 px-2 font-bold text-white">{player.name}</td>
                    <td className="py-3 px-2 text-amber-300">{player.claimedMemberName}</td>
                    <td className="py-3 px-2 text-right font-mono font-extrabold text-emerald-400">
                      {player.score}
                    </td>
                    <td className="py-3 px-2 text-right font-bold text-purple-300">
                      {player.accuracy}%
                    </td>
                    <td className="py-3 px-2 text-right font-bold text-amber-400">
                      🔥 {player.maxCombo}x
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0517] flex items-center justify-center text-purple-300">Loading Results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
