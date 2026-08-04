'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Flame, Check, X, Clock } from 'lucide-react';
import { RoomState, MemberProfile, IconGridTile } from '@/types/game';
import { INITIAL_MEMBERS, DEFAULT_DISTRACTOR_POOL } from '@/lib/defaultData';
import { IconRenderer } from '@/components/IconRenderer';
import { sound } from '@/lib/sound';

function GameContent() {
  const searchParams = useSearchParams();
  const pin = searchParams.get('pin') || 'GD8492';
  const router = useRouter();

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

  return (
    <div className="h-screen max-h-[100dvh] w-screen overflow-hidden bg-[#0b0517] text-slate-100 flex flex-col justify-between p-2 sm:p-3 select-none font-sans">
      {/* COMPACT TOP HEADER BAR */}
      <header className="h-14 sm:h-16 w-full rounded-2xl bg-slate-950/80 border border-purple-500/30 px-3 sm:px-5 flex items-center justify-between shadow-xl backdrop-blur-md gap-2 shrink-0">
        {/* Assigned Member Target Name */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 font-extrabold text-xs shrink-0">
            🎯
          </div>
          <div className="min-w-0">
            <div className="text-[10px] sm:text-xs font-semibold text-purple-300 uppercase tracking-wider truncate">
              Find 10 Items For:
            </div>
            <div className="font-extrabold text-xs sm:text-base text-amber-300 truncate">
              {member.name} <span className="text-slate-400 font-normal text-xs">({member.category})</span>
            </div>
          </div>
        </div>

        {/* Center Timer & Match Counter */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-900 border border-purple-500/30 px-2.5 py-1 rounded-xl">
            <Clock size={16} className="text-amber-400 animate-pulse" />
            <span className="font-mono text-sm sm:text-lg font-extrabold text-amber-300">{timeLeft}s</span>
          </div>

          <div className="hidden xs:flex items-center gap-1.5 bg-purple-950/80 border border-purple-500/40 px-2.5 py-1 rounded-xl">
            <span className="text-xs font-bold text-emerald-400">{correctCount} / 10</span>
            <span className="text-[10px] text-slate-400 uppercase">Found</span>
          </div>
        </div>

        {/* Right Score & Combo Streak Multiplier */}
        <div className="flex items-center gap-2">
          {comboStreak >= 2 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 text-white font-extrabold text-xs animate-bounce shadow-lg">
              <Flame size={14} /> {comboMultiplier}x COMBO
            </div>
          )}

          <div className="flex flex-col items-end">
            <span className="text-[10px] text-purple-300 uppercase font-semibold">Score</span>
            <span className="font-mono text-base sm:text-xl font-black text-emerald-400 drop-shadow">
              {score}
            </span>
          </div>
        </div>
      </header>

      {/* FULL-PAGE ZERO-SCROLL 40-TILE GRID CONTAINER */}
      <main className="flex-1 w-full max-h-[calc(100dvh-75px)] my-1 grid grid-cols-5 grid-rows-8 sm:grid-cols-8 sm:grid-rows-5 md:grid-cols-10 md:grid-rows-4 gap-1.5 sm:gap-2 justify-center items-center overflow-hidden">
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
              className={`w-full h-full min-h-0 flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border backdrop-blur-md transition-all duration-150 transform active:scale-95 select-none relative group overflow-hidden ${tileBg}`}
            >
              <IconRenderer
                icon={tile.icon}
                size="clamp(1.4rem, 3.5vh, 2.4rem)"
                className={tile.clicked && tile.isCorrect ? 'text-emerald-300 scale-110' : ''}
              />

              {/* Status Indicators overlay */}
              {tile.clicked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
                  {tile.isCorrect ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg">
                      <X size={14} strokeWidth={3} />
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
