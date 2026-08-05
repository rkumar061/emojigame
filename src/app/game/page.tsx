'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Flame, Check, X, Clock, Trophy, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { RoomState, MemberProfile, IconGridTile } from '@/types/game';
import { INITIAL_MEMBERS, DEFAULT_DISTRACTOR_POOL } from '@/lib/defaultData';
import { IconRenderer } from '@/components/IconRenderer';
import { sound } from '@/lib/sound';
import { useRoomStore } from '@/lib/useRoomStore';

function GameContent() {
  const searchParams = useSearchParams();
  const pin = searchParams.get('pin') || 'GD8492';
  const router = useRouter();

  const { roomState } = useRoomStore(pin);

  // State
  const [member, setMember] = useState<MemberProfile>(INITIAL_MEMBERS[0]);
  const [tiles, setTiles] = useState<IconGridTile[]>([]);
  const [score, setScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [totalClicks, setTotalClicks] = useState<number>(0);
  const [comboStreak, setComboStreak] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [playerId, setPlayerId] = useState<string>('');
  const [playerName, setPlayerName] = useState<string>('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const initialTimerRef = useRef<number>(30);
  const timeLeftRef = useRef<number>(30);
  const scoreRef = useRef<number>(0);
  const correctCountRef = useRef<number>(0);
  const wrongCountRef = useRef<number>(0);
  const totalClicksRef = useRef<number>(0);
  const comboStreakRef = useRef<number>(0);
  const maxComboRef = useRef<number>(0);

  // Sync refs with state for atomic calculations
  useEffect(() => { timeLeftRef.current = timeLeft; }, [timeLeft]);
  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { correctCountRef.current = correctCount; }, [correctCount]);
  useEffect(() => { wrongCountRef.current = wrongCount; }, [wrongCount]);
  useEffect(() => { totalClicksRef.current = totalClicks; }, [totalClicks]);
  useEffect(() => { comboStreakRef.current = comboStreak; }, [comboStreak]);
  useEffect(() => { maxComboRef.current = maxCombo; }, [maxCombo]);

  // Real-time live score update sender (pushes score changes to Host TV & Leaderboard)
  const sendLiveScoreUpdate = (stats: Record<string, any>) => {
    const pId = playerId || localStorage.getItem('gd_player_id');
    if (!pId || !pin) return;

    fetch('/api/room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'UPDATE_SCORE',
        pin,
        playerId: pId,
        stats,
      }),
    }).catch(() => {});
  };

  useEffect(() => {
    const pId = localStorage.getItem('gd_player_id') || `p_${Date.now()}`;
    const pName = localStorage.getItem('gd_player_name') || 'Player';
    const cMemberId = localStorage.getItem('gd_claimed_member_id');

    setPlayerId(pId);
    setPlayerName(pName);

    // Fetch room state to get assigned member icons
    fetch(`/api/room?pin=${pin}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.room) {
          const room: RoomState = data.room;
          const tSec = room.config.timerSeconds || 30;
          setTimeLeft(tSec);
          initialTimerRef.current = tSec;
          timeLeftRef.current = tSec;

          let currentMember = room.members.find((m) => m.id === cMemberId);
          if (!currentMember) {
            currentMember = room.members[0];
          }
          setMember(currentMember);
          setupGrid(currentMember);
        } else {
          setupGrid(INITIAL_MEMBERS[0]);
        }
      })
      .catch(() => {
        setupGrid(INITIAL_MEMBERS[0]);
      });
  }, [pin]);

  // Synchronized Global Room Status & Kick Listener
  useEffect(() => {
    if (!roomState) return;

    const pId = localStorage.getItem('gd_player_id');

    // 1. Kicked Check
    if (pId && !roomState.players[pId]) {
      if (timerRef.current) clearInterval(timerRef.current);
      localStorage.removeItem('gd_claimed_member_id');
      localStorage.removeItem('gd_claimed_member_name');
      router.push(`/join?pin=${pin}`);
      return;
    }

    // 2. Host ended game -> Redirect all players to results
    if (roomState.status === 'FINISHED' && !gameEnded) {
      if (timerRef.current) clearInterval(timerRef.current);
      finishGame();
      return;
    }

    // 3. Host reset room -> Redirect all players to lobby
    if (roomState.status === 'LOBBY') {
      if (timerRef.current) clearInterval(timerRef.current);
      router.push(`/lobby?pin=${pin}`);
      return;
    }
  }, [roomState, gameEnded, pin, router]);

  // Setup the 40-icon shuffled grid (10 Target Icons + 30 Distractors)
  const setupGrid = (targetMember: MemberProfile) => {
    const targets = targetMember.targetIcons.map((icon, idx) => ({
      id: `target_${idx}_${Date.now()}`,
      icon,
      isTarget: true,
      clicked: false,
    }));

    // Fill distractors up to 30 items, filtering out any icon that matches target values or labels
    const targetValues = new Set(targetMember.targetIcons.map((t) => t.value.toLowerCase()));
    const targetLabels = new Set(targetMember.targetIcons.map((t) => (t.label || '').toLowerCase()));

    const rawPool =
      targetMember.distractorIcons.length >= 30
        ? targetMember.distractorIcons
        : [...targetMember.distractorIcons, ...DEFAULT_DISTRACTOR_POOL];

    const filteredPool = rawPool.filter(
      (d) => !targetValues.has(d.value.toLowerCase()) && !targetLabels.has((d.label || '').toLowerCase())
    );

    const distractors = filteredPool.slice(0, 30).map((icon, idx) => ({
      id: `distractor_${idx}_${Date.now()}`,
      icon,
      isTarget: false,
      clicked: false,
    }));

    // Combine and shuffle array
    const combined: IconGridTile[] = [...targets, ...distractors];
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }

    setTiles(combined);
  };

  // Game Countdown Timer
  useEffect(() => {
    if (gameEnded) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          finishGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameEnded]);

  // Tile Click Handler with Real-Time Push & Time-Weighted Speed Scoring
  const handleTileClick = (tileId: string) => {
    if (gameEnded) return;

    setTiles((prevTiles) => {
      const targetTile = prevTiles.find((t) => t.id === tileId);
      if (!targetTile || targetTile.clicked) return prevTiles;

      const isCorrect = targetTile.isTarget;
      const newTotalClicks = totalClicksRef.current + 1;
      totalClicksRef.current = newTotalClicks;
      setTotalClicks(newTotalClicks);

      const currentTimeLeft = timeLeftRef.current;
      const currentElapsedSec = Math.max(0, initialTimerRef.current - currentTimeLeft);

      if (isCorrect) {
        const newCombo = comboStreakRef.current + 1;
        const newMaxCombo = Math.max(maxComboRef.current, newCombo);
        comboStreakRef.current = newCombo;
        maxComboRef.current = newMaxCombo;
        setComboStreak(newCombo);
        setMaxCombo(newMaxCombo);

        const newCorrectCount = correctCountRef.current + 1;
        correctCountRef.current = newCorrectCount;
        setCorrectCount(newCorrectCount);

        // TIME-WEIGHTED SCORING:
        // Base points: 100
        // Speed Bonus: 5 points * remaining seconds
        // Combo Multiplier: 1x to 5x
        const multiplier = newCombo >= 5 ? 5 : newCombo >= 3 ? 3 : newCombo >= 2 ? 2 : 1;
        const speedBonus = currentTimeLeft * 5;
        const pointsEarned = (100 + speedBonus) * multiplier;

        let newScore = scoreRef.current + pointsEarned;
        let isFinished = false;

        // Completion bonus if all 10 targets found!
        if (newCorrectCount >= 10) {
          isFinished = true;
          const completionBonus = currentTimeLeft * 50;
          newScore += completionBonus;
        }

        scoreRef.current = newScore;
        setScore(newScore);

        const newAccuracy = Math.round((newCorrectCount / newTotalClicks) * 100);

        // Audio
        if (newCombo >= 3) {
          sound.playCombo(newCombo);
        } else {
          sound.playCorrect(newCombo);
        }

        // Send instant real-time score update to Host TV & Leaderboard
        sendLiveScoreUpdate({
          score: newScore,
          correctCount: newCorrectCount,
          wrongCount: wrongCountRef.current,
          totalClicks: newTotalClicks,
          accuracy: newAccuracy,
          comboStreak: newCombo,
          maxCombo: newMaxCombo,
          timeSec: currentElapsedSec,
          finished: isFinished,
        });

        if (isFinished) {
          setTimeout(() => {
            finishGame(newScore, newCorrectCount, wrongCountRef.current, newTotalClicks, newAccuracy, newCombo, newMaxCombo, currentElapsedSec);
          }, 300);
        }

        return prevTiles.map((t) => (t.id === tileId ? { ...t, clicked: true, isCorrect: true } : t));
      } else {
        // Wrong click penalty (-25 pts & reset combo)
        comboStreakRef.current = 0;
        setComboStreak(0);

        const newWrongCount = wrongCountRef.current + 1;
        wrongCountRef.current = newWrongCount;
        setWrongCount(newWrongCount);

        const newScore = Math.max(0, scoreRef.current - 25);
        scoreRef.current = newScore;
        setScore(newScore);

        sound.playWrong();

        const newAccuracy = Math.round((correctCountRef.current / newTotalClicks) * 100);

        // Send instant real-time update
        sendLiveScoreUpdate({
          score: newScore,
          correctCount: correctCountRef.current,
          wrongCount: newWrongCount,
          totalClicks: newTotalClicks,
          accuracy: newAccuracy,
          comboStreak: 0,
          maxCombo: maxComboRef.current,
          timeSec: currentElapsedSec,
          finished: false,
        });

        return prevTiles.map((t) => (t.id === tileId ? { ...t, clicked: true, isCorrect: false } : t));
      }
    });
  };

  // Finish Game handler
  const finishGame = async (
    finalScore?: number,
    finalCorrect?: number,
    finalWrong?: number,
    finalClicks?: number,
    finalAcc?: number,
    finalCombo?: number,
    finalMaxC?: number,
    elapsed?: number
  ) => {
    if (gameEnded) return;
    setGameEnded(true);
    sound.playFanfare();

    const actualScore = finalScore !== undefined ? finalScore : scoreRef.current;
    const actualCorrect = finalCorrect !== undefined ? finalCorrect : correctCountRef.current;
    const actualWrong = finalWrong !== undefined ? finalWrong : wrongCountRef.current;
    const actualClicks = finalClicks !== undefined ? finalClicks : totalClicksRef.current;
    const actualAcc = finalAcc !== undefined ? finalAcc : (actualClicks > 0 ? Math.round((actualCorrect / actualClicks) * 100) : 100);
    const actualMaxCombo = finalMaxC !== undefined ? finalMaxC : maxComboRef.current;
    const actualElapsed = elapsed !== undefined ? elapsed : Math.max(0, initialTimerRef.current - timeLeftRef.current);

    const finalStats = {
      score: actualScore,
      correctCount: actualCorrect,
      wrongCount: actualWrong,
      totalClicks: actualClicks,
      accuracy: actualAcc,
      comboStreak: 0,
      maxCombo: actualMaxCombo,
      timeSec: actualElapsed,
      finished: true,
    };

    sendLiveScoreUpdate(finalStats);

    setTimeout(() => {
      router.push(`/results?pin=${pin}`);
    }, 1500);
  };

  const comboMultiplier = comboStreak >= 5 ? 5 : comboStreak >= 3 ? 3 : comboStreak >= 2 ? 2 : 1;

  const playersList = Object.values(roomState?.players || {});
  const sortedPlayers = [...playersList].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
    return (a.timeSec || 99) - (b.timeSec || 99);
  });
  const myRankIndex = sortedPlayers.findIndex((p) => p.id === playerId);
  const myRank = myRankIndex >= 0 ? myRankIndex + 1 : 1;
  const totalPlayers = sortedPlayers.length || 1;

  const currentAcc = totalClicks > 0 ? Math.round((correctCount / totalClicks) * 100) : 100;

  return (
    <div className="h-screen max-h-[100dvh] w-screen overflow-hidden bg-[#0b0517] text-slate-100 flex flex-col justify-between p-1.5 sm:p-3 select-none font-sans gap-1.5">
      {/* HIGH-DENSITY COMPACT LIVE ANALYTICS HUD */}
      <header className="w-full bg-slate-950/90 border border-purple-500/30 rounded-2xl p-2 sm:p-2.5 shadow-2xl backdrop-blur-xl flex flex-col gap-1.5 shrink-0">
        {/* Row 1: Target Member & Live Rank Badge */}
        <div className="flex items-center justify-between gap-2 border-b border-purple-500/20 pb-1">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 font-black text-xs shrink-0">
              🎯
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-purple-300 font-bold uppercase tracking-wider">Visual Self-Evaluation: </span>
              <span className="font-extrabold text-xs sm:text-sm text-amber-300 truncate">Find Your 10 Business Icons ({member.name})</span>
              <span className="text-[11px] text-slate-400 font-medium hidden xs:inline"> - {member.category}</span>
            </div>
          </div>

          {/* Live Rank Badge */}
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-purple-600/20 border border-amber-400/40 px-2.5 py-0.5 sm:py-1 rounded-xl shrink-0">
            <Trophy size={14} className="text-amber-400" />
            <span className="text-xs font-black text-amber-300">
              {myRank === 1 ? '🥇 1st' : myRank === 2 ? '🥈 2nd' : myRank === 3 ? '🥉 3rd' : `#${myRank}`}
            </span>
            <span className="text-[10px] font-semibold text-slate-400">/ {totalPlayers}</span>
          </div>
        </div>

        {/* Row 2: Analytics Cards Grid (Time, Found, Score, Accuracy, Combo) */}
        <div className="grid grid-cols-5 gap-1 text-center items-center">
          <div className="bg-slate-900/90 border border-purple-500/20 rounded-xl p-1 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase">
              <Clock size={10} className="text-amber-400 animate-pulse" /> Time
            </div>
            <span className="font-mono text-xs sm:text-base font-black text-amber-300">{timeLeft}s</span>
          </div>

          <div className="bg-slate-900/90 border border-purple-500/20 rounded-xl p-1 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase">
              <CheckCircle2 size={10} className="text-emerald-400" /> Found
            </div>
            <span className="font-mono text-xs sm:text-base font-black text-emerald-300">{correctCount}/10</span>
          </div>

          <div className="bg-slate-900/90 border border-purple-500/20 rounded-xl p-1 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase">
              <Sparkles size={10} className="text-purple-400" /> Score
            </div>
            <span className="font-mono text-xs sm:text-base font-black text-emerald-400">{score}</span>
          </div>

          <div className="bg-slate-900/90 border border-purple-500/20 rounded-xl p-1 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase">
              <Target size={10} className="text-cyan-400" /> Acc
            </div>
            <span className="font-mono text-xs sm:text-base font-black text-cyan-300">{currentAcc}%</span>
          </div>

          <div className="bg-slate-900/90 border border-purple-500/20 rounded-xl p-1 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase">
              <Flame size={10} className="text-rose-400" /> Combo
            </div>
            <span className="font-mono text-xs sm:text-base font-black text-amber-400">
              {comboStreak >= 2 ? `🔥 ${comboMultiplier}x` : '1x'}
            </span>
          </div>
        </div>
      </header>

      {/* FULL-PAGE ZERO-SCROLL 40-TILE GRID CONTAINER */}
      <main className="flex-1 w-full max-h-[calc(100dvh-105px)] grid grid-cols-5 grid-rows-8 sm:grid-cols-8 sm:grid-rows-5 md:grid-cols-10 md:grid-rows-4 gap-1 sm:gap-1.5 justify-center items-center overflow-hidden">
        {tiles.map((tile) => {
          let tileBg = 'bg-slate-900/80 border-purple-500/25 hover:border-purple-400/60 text-slate-200';
          if (tile.clicked) {
            if (tile.isCorrect) {
              tileBg = 'animate-correct bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(34,197,94,0.6)]';
            } else {
              tileBg = 'animate-wrong bg-rose-950/90 border-rose-500 text-rose-400';
            }
          }

          return (
            <button
              key={tile.id}
              onClick={() => handleTileClick(tile.id)}
              disabled={tile.clicked || gameEnded}
              className={`w-full h-full min-h-0 flex flex-col items-center justify-center rounded-lg sm:rounded-xl border backdrop-blur-md transition-all duration-150 transform active:scale-95 select-none relative group overflow-hidden ${tileBg}`}
            >
              <IconRenderer
                icon={tile.icon}
                size="clamp(1.2rem, 3.2vh, 2.2rem)"
                className={tile.clicked && tile.isCorrect ? 'text-emerald-300 scale-110' : ''}
              />

              {/* Status Indicators overlay */}
              {tile.clicked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
                  {tile.isCorrect ? (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg">
                      <X size={12} strokeWidth={3} />
                    </div>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </main>
    </div>
  );
}

export default function GamePage() {
  return (
    <Suspense fallback={<div className="h-screen bg-[#0b0517] flex items-center justify-center text-purple-300">Loading Game Arena...</div>}>
      <GameContent />
    </Suspense>
  );
}
