'use client';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';
import { Trophy, Crown, Share2, Sparkles, X, Check, Award, Zap, Download, Loader2 } from 'lucide-react';
import { toBlob } from 'html-to-image';
import { RoomState } from '@/types/game';
import { useRoomStore } from '@/lib/useRoomStore';

function ResultsContent() {
  const searchParams = useSearchParams();
  const pin = searchParams.get('pin') || 'GD8492';
  const router = useRouter();

  const { roomState } = useRoomStore(pin);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [myPlayerId, setMyPlayerId] = useState('');

  const storyCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pId = localStorage.getItem('gd_player_id') || '';
      setMyPlayerId(pId);
    }

    // Launch celebratory confetti burst
    try {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#a855f7', '#ec4899', '#eab308', '#22c55e', '#3b82f6'],
      });
    } catch {
      // ignore
    }
  }, []);

  // Real-time Global Room Status & Kick Listener
  useEffect(() => {
    if (!roomState) return;

    const pId = localStorage.getItem('gd_player_id');

    // 1. Kicked Check
    if (pId && !roomState.players[pId]) {
      localStorage.removeItem('gd_claimed_member_id');
      localStorage.removeItem('gd_claimed_member_name');
      router.push(`/join?pin=${pin}`);
      return;
    }

    // 2. Host started new game while player was on results screen!
    if (roomState.status === 'PLAYING') {
      router.push(`/lobby?pin=${pin}`);
      return;
    }

    // 3. Host reset room to lobby
    if (roomState.status === 'LOBBY') {
      router.push(`/lobby?pin=${pin}`);
      return;
    }
  }, [roomState, pin, router]);

  const playersList = Object.values(roomState?.players || {});
  // Sort leaderboard by Score desc, Accuracy % desc, Time asc
  const sortedPlayers = [...playersList].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
    return (a.timeSec || 99) - (b.timeSec || 99);
  });

  const top1 = sortedPlayers[0];
  const top2 = sortedPlayers[1];
  const top3 = sortedPlayers[2];

  // Find current player's rank and stats
  const myRankIndex = sortedPlayers.findIndex((p) => p.id === myPlayerId);
  const myPlayer = myRankIndex >= 0 ? sortedPlayers[myRankIndex] : sortedPlayers[0];
  const myRank = myRankIndex >= 0 ? myRankIndex + 1 : 1;

  // Convert Instagram Story DOM element into PNG Image Blob and Share/Download
  const handleShareStoryImage = async (forceDownload = false) => {
    if (!storyCardRef.current || isGeneratingImage) return;
    setIsGeneratingImage(true);

    try {
      const blob = await toBlob(storyCardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        quality: 0.95,
      });

      if (!blob) throw new Error('Failed to generate image blob');

      const fileName = `Grape-Dawn-Victory-Rank-${myRank}.png`;
      const imageFile = new File([blob], fileName, { type: 'image/png' });

      // 1. Native Mobile Image File Sharing (Instagram, WhatsApp, iMessage, etc.)
      if (!forceDownload && navigator.canShare && navigator.canShare({ files: [imageFile] })) {
        await navigator.share({
          title: 'Grape Dawn Self-Evaluation Victory Card',
          text: `🏆 I scored ${myPlayer?.score || 0} PTS in my Grape Dawn Visual Business Self-Evaluation! 🍇 Play at game.grapedawn.tech`,
          files: [imageFile],
        });
        setIsGeneratingImage(false);
        return;
      }

      // 2. Direct Download Fallback
      const a = document.createElement('a');
      a.href = URL.createObjectURL(imageFile);
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(a.href);
      setIsGeneratingImage(false);
    } catch {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0517] text-slate-100 flex flex-col font-sans relative overflow-hidden select-none">
      {/* Background blur effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar (No Back to Home button for player) */}
      <header className="py-3 px-4 sm:px-6 border-b border-purple-500/20 bg-slate-950/70 flex items-center justify-between z-10">
        <Image
          src="/logo-horizental.png?v=2"
          alt="Grape Dawn"
          width={160}
          height={42}
          className="object-contain filter drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"
          priority
        />

        {/* Share Story Button */}
        <button
          onClick={() => setShowShareModal(true)}
          className="flex items-center gap-2 text-xs sm:text-sm font-extrabold px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 text-white shadow-lg hover:brightness-110 active:scale-95 transition"
        >
          <Share2 size={16} className="text-white animate-pulse" /> Share Story Image
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 flex flex-col items-center z-10 space-y-8 pb-12">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Trophy size={14} className="text-amber-400" /> Visual Self-Evaluation Standings
          </div>
          <h1 className="text-3xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-purple-200 to-pink-300">
            Self-Evaluation Champions!
          </h1>
        </div>

        {/* 3D VICTORY PODIUM */}
        <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 items-end max-w-2xl pt-6 pb-2">
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
                <div className="text-[10px] text-slate-400 font-mono">{top2.score} pts</div>
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
                <div className="text-xs font-bold text-emerald-400 font-mono">{top1.score} pts • {top1.accuracy}% Acc</div>
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
                <div className="text-[10px] text-slate-400 font-mono">{top3.score} pts</div>
              </div>
            ) : null}
            <div className="w-full h-24 sm:h-28 bg-gradient-to-t from-amber-900 to-amber-800 rounded-t-2xl border-t-4 border-amber-700 flex flex-col items-center justify-center shadow-2xl">
              <span className="font-black text-xl sm:text-2xl text-amber-300">3rd</span>
            </div>
          </div>
        </div>

        {/* PERSONAL PLAYER PERFORMANCE BANNER */}
        {myPlayer && (
          <div className="w-full max-w-2xl bg-gradient-to-r from-amber-500/20 via-purple-600/30 to-pink-500/20 border-2 border-amber-400/50 rounded-3xl p-4 sm:p-5 shadow-[0_0_30px_rgba(245,158,11,0.25)] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center font-black text-xl shadow-lg shrink-0">
                {myRank === 1 ? '🥇' : myRank === 2 ? '🥈' : myRank === 3 ? '🥉' : `#${myRank}`}
              </div>
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-start">
                  Your Visual Self-Evaluation <span className="px-1.5 py-0.5 rounded bg-amber-400 text-amber-950 text-[9px] font-black">YOU</span>
                </div>
                <div className="text-lg sm:text-xl font-black text-white">{myPlayer.name}</div>
                <div className="text-xs text-purple-200">Business Target: <span className="text-amber-300 font-bold">{myPlayer.claimedMemberName}</span></div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-purple-500/30 pt-2 sm:pt-0 sm:pl-4">
              <div className="text-center font-mono">
                <div className="text-[10px] text-slate-400 uppercase font-sans">Score</div>
                <div className="text-base sm:text-xl font-black text-emerald-400">{myPlayer.score}</div>
              </div>
              <div className="text-center font-mono">
                <div className="text-[10px] text-slate-400 uppercase font-sans">Accuracy</div>
                <div className="text-base sm:text-xl font-black text-cyan-300">{myPlayer.accuracy}%</div>
              </div>
              <div className="text-center font-mono">
                <div className="text-[10px] text-slate-400 uppercase font-sans">Time</div>
                <div className="text-base sm:text-xl font-black text-amber-300">{myPlayer.timeSec ? `${myPlayer.timeSec}s` : '-'}</div>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Leaderboard Table */}
        <div className="w-full bg-slate-900/90 border border-purple-500/30 rounded-3xl p-5 shadow-2xl backdrop-blur-xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
              <Award size={16} /> All Members Self-Evaluation Rankings
            </h2>

            <button
              onClick={() => setShowShareModal(true)}
              className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 bg-purple-950/80 border border-purple-500/40 px-3 py-1 rounded-xl transition"
            >
              <Share2 size={13} /> Share Story Card
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-purple-500/20 text-slate-400 font-semibold uppercase text-[10px]">
                  <th className="pb-3 px-2">Rank</th>
                  <th className="pb-3 px-2">Member</th>
                  <th className="pb-3 px-2">Target Profile</th>
                  <th className="pb-3 px-2 text-center">Progress</th>
                  <th className="pb-3 px-2 text-right">Time</th>
                  <th className="pb-3 px-2 text-right">Score</th>
                  <th className="pb-3 px-2 text-right">Accuracy</th>
                  <th className="pb-3 px-2 text-right">Max Combo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/10">
                {sortedPlayers.map((player, idx) => {
                  const isSelf = player.id === myPlayerId;
                  return (
                    <tr
                      key={player.id}
                      className={`transition ${
                        isSelf
                          ? 'bg-gradient-to-r from-amber-500/25 via-purple-600/30 to-pink-500/25 border-l-4 border-amber-400 font-extrabold shadow-lg'
                          : 'hover:bg-purple-950/30'
                      }`}
                    >
                      <td className="py-3 px-2 font-bold text-slate-300">
                        {idx === 0 ? '🥇 1st' : idx === 1 ? '🥈 2nd' : idx === 2 ? '🥉 3rd' : `#${idx + 1}`}
                      </td>
                      <td className="py-3 px-2 font-bold text-white flex items-center gap-1.5">
                        {player.name}
                        {isSelf && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-400 text-amber-950 text-[10px] font-black uppercase tracking-wider shadow">
                            YOU
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-amber-300">{player.claimedMemberName}</td>
                      <td className="py-3 px-2 text-center font-bold text-emerald-300 font-mono">
                        {player.correctCount || 0}/10
                      </td>
                      <td className="py-3 px-2 text-right font-mono font-bold text-cyan-300">
                        {player.timeSec ? `${player.timeSec}s` : '-'}
                      </td>
                      <td className="py-3 px-2 text-right font-mono font-extrabold text-emerald-400 text-base">
                        {player.score}
                      </td>
                      <td className="py-3 px-2 text-right font-bold text-purple-300 font-mono">
                        {player.accuracy}%
                      </td>
                      <td className="py-3 px-2 text-right font-bold text-amber-400">
                        🔥 {player.maxCombo}x
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* VERTICAL INSTAGRAM STORY STYLED SHARE MODAL */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 overflow-y-auto">
          <div className="relative flex flex-col items-center max-w-sm w-full space-y-3">
            {/* Modal Header Actions */}
            <div className="w-full flex items-center justify-between text-white">
              <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                <Sparkles size={16} className="text-amber-400" /> Instagram Story Image Card
              </span>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* 9:16 INSTAGRAM STORY CARD CANVAS (CONVERTED DIRECTLY TO PNG) */}
            <div
              ref={storyCardRef}
              className="w-[310px] sm:w-[330px] aspect-[9/16] rounded-3xl bg-gradient-to-b from-[#1e0938] via-[#0c051a] to-[#2a0b4d] border-2 border-purple-500/50 p-5 flex flex-col justify-between shadow-[0_0_50px_rgba(168,85,247,0.4)] relative overflow-hidden select-none"
            >
              {/* Card Decorative Flares */}
              <div className="absolute -top-16 -left-16 w-44 h-44 bg-purple-600/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-amber-500/30 rounded-full blur-2xl" />

              {/* Story Header */}
              <div className="flex flex-col items-center text-center space-y-1 z-10">
                <Image
                  src="/logo-horizental.png?v=2"
                  alt="Grape Dawn"
                  width={150}
                  height={40}
                  className="object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
                  priority
                />
                <div className="text-[10px] font-bold text-amber-300 uppercase tracking-widest flex items-center gap-1">
                  <Zap size={11} className="text-amber-400" /> Visual Business Self-Evaluation
                </div>
                <p className="text-[10px] text-slate-300 leading-tight max-w-[240px] pt-0.5">
                  An interactive visual self-evaluation & business referral target showcase by Grape Dawn for BNI Nexora.
                </p>
              </div>

              {/* Player Victory Card Badge */}
              <div className="z-10 bg-slate-950/80 border border-amber-400/40 rounded-2xl p-3 flex flex-col items-center text-center space-y-2 backdrop-blur-md shadow-xl">
                <div className="px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 text-amber-950 font-black text-xs uppercase tracking-wider shadow">
                  {myRank === 1 ? '🥇 CHAMPION' : myRank === 2 ? '🥈 2ND PLACE' : myRank === 3 ? '🥉 3RD PLACE' : `RANK #${myRank}`}
                </div>

                <div>
                  <div className="text-lg font-black text-white">{myPlayer?.name || 'Player'}</div>
                  <div className="text-xs text-amber-300 font-bold">
                    Target Profile: {myPlayer?.claimedMemberName || 'Member'}
                  </div>
                </div>

                <div className="w-full grid grid-cols-3 gap-1 pt-1 border-t border-purple-500/20 text-center font-mono">
                  <div className="bg-purple-950/60 p-1.5 rounded-xl">
                    <div className="text-[9px] text-slate-400 uppercase font-sans">Score</div>
                    <div className="text-xs font-black text-emerald-400">{myPlayer?.score || 0}</div>
                  </div>
                  <div className="bg-purple-950/60 p-1.5 rounded-xl">
                    <div className="text-[9px] text-slate-400 uppercase font-sans">Acc</div>
                    <div className="text-xs font-black text-cyan-300">{myPlayer?.accuracy || 100}%</div>
                  </div>
                  <div className="bg-purple-950/60 p-1.5 rounded-xl">
                    <div className="text-[9px] text-slate-400 uppercase font-sans">Time</div>
                    <div className="text-xs font-black text-amber-300">{myPlayer?.timeSec ? `${myPlayer.timeSec}s` : '-'}</div>
                  </div>
                </div>
              </div>

              {/* Story Live Leaderboard Standings Snapshot */}
              <div className="z-10 bg-slate-950/70 border border-purple-500/20 rounded-2xl p-2.5 space-y-1.5 backdrop-blur-md">
                <div className="text-[10px] font-extrabold text-purple-300 uppercase tracking-wider flex items-center justify-between">
                  <span>🏆 Live Standings</span>
                  <span className="text-slate-400">{sortedPlayers.length} Players</span>
                </div>

                <div className="space-y-1">
                  {sortedPlayers.slice(0, 3).map((p, idx) => (
                    <div
                      key={p.id}
                      className={`flex items-center justify-between px-2 py-1 rounded-xl text-xs font-medium ${
                        p.id === myPlayerId ? 'bg-amber-500/20 border border-amber-400/50 font-bold' : 'bg-slate-900/60'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate min-w-0">
                        <span>{idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}</span>
                        <span className="truncate text-white text-[11px]">{p.name}</span>
                      </div>
                      <span className="font-mono text-emerald-400 text-[11px] font-bold shrink-0">{p.score} pts</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Story Card Footer Branding */}
              <div className="z-10 flex items-center justify-between border-t border-purple-500/30 pt-2 text-[10px] text-purple-300">
                <span className="font-extrabold tracking-wide text-white">GRAPE DAWN</span>
                <span className="text-amber-300 font-mono font-bold">game.grapedawn.tech</span>
              </div>
            </div>

            {/* Share & Download Image Actions */}
            <div className="w-full flex flex-col gap-2">
              <button
                onClick={() => handleShareStoryImage(false)}
                disabled={isGeneratingImage}
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition disabled:opacity-50"
              >
                {isGeneratingImage ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Generating Story Image...
                  </>
                ) : (
                  <>
                    <Share2 size={18} /> Share Story Image
                  </>
                )}
              </button>

              <button
                onClick={() => handleShareStoryImage(true)}
                disabled={isGeneratingImage}
                className="w-full py-2.5 px-4 rounded-2xl bg-slate-900 border border-purple-500/40 text-purple-200 font-bold text-xs shadow flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-95 transition disabled:opacity-50"
              >
                {copiedLink ? (
                  <>
                    <Check size={16} className="text-emerald-400" /> Story PNG Saved!
                  </>
                ) : (
                  <>
                    <Download size={16} /> Save Image (PNG)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
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
