'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, ArrowRight, Search, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { RoomState, MemberProfile } from '@/types/game';
import { useRoomStore } from '@/lib/useRoomStore';

function JoinContent() {
  const searchParams = useSearchParams();
  const pin = searchParams.get('pin') || 'GD8492';
  const router = useRouter();

  const { roomState, isConnected } = useRoomStore(pin);
  const [searchTerm, setSearchTerm] = useState('');
  const [claimingMemberId, setClaimingMemberId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [playerId, setPlayerId] = useState('');

  useEffect(() => {
    let pId = localStorage.getItem('gd_player_id');
    if (!pId) {
      pId = `p_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      localStorage.setItem('gd_player_id', pId);
    }
    setPlayerId(pId);
  }, []);

  // Synchronized Room Status Listener for Join page
  useEffect(() => {
    if (!roomState) return;

    const pId = localStorage.getItem('gd_player_id');
    const cMemberId = localStorage.getItem('gd_claimed_member_id');

    if (pId && cMemberId && roomState.players[pId]) {
      if (roomState.status === 'PLAYING') {
        router.push(`/lobby?pin=${pin}`);
      }
    }
  }, [roomState, pin, router]);

  const handleClaimName = async (member: MemberProfile) => {
    if (claimingMemberId) return;
    setClaimingMemberId(member.id);
    setError('');

    // Automatic player name = Member's name! No manual typing required.
    const playerName = member.name;

    try {
      const res = await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'CLAIM_NAME',
          pin,
          playerId,
          playerName,
          memberId: member.id,
        }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setClaimingMemberId(null);
      } else {
        localStorage.setItem('gd_player_name', member.name);
        localStorage.setItem('gd_claimed_member_id', member.id);
        localStorage.setItem('gd_claimed_member_name', member.name);
        router.push(`/lobby?pin=${pin}`);
      }
    } catch {
      setError('Failed to claim member name. Please try again.');
      setClaimingMemberId(null);
    }
  };

  const members = roomState?.members || [];
  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0517] text-slate-100 flex flex-col font-sans relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="py-4 px-6 border-b border-purple-500/20 bg-slate-950/60 flex items-center justify-between z-10">
        <Image src="/logo-horizental.png?v=2" alt="Grape Dawn" width={140} height={40} className="object-contain" />
        <div className="flex items-center gap-2 bg-slate-900 border border-purple-500/30 px-3 py-1.5 rounded-xl">
          <span className="text-xs text-slate-400 font-semibold">ROOM PIN:</span>
          <span className="font-mono text-amber-300 font-extrabold text-base">{pin}</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 flex flex-col z-10 space-y-5">
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase">
            <Sparkles size={14} className="text-amber-400" /> BNI Nexora Visual Self-Evaluation ({members.length} Members)
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-300 to-amber-200">
            Select Yourself to Begin Evaluation
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Tap your member name below to start. During the game, identify your own 10 business referral icons as fast as possible!
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-md mx-auto w-full">
          <Search className="absolute left-4 top-3.5 text-purple-400" size={18} />
          <input
            type="text"
            placeholder="Search member name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-purple-500/30 rounded-2xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 shadow-xl"
          />
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 overflow-y-auto max-h-[65vh] custom-scrollbar p-1">
          {filteredMembers.map((member) => {
            const isClaimedByMe = member.claimedBy === playerId;
            const isClaimedByOther = !!member.claimedBy && !isClaimedByMe;
            const isPending = claimingMemberId === member.id;

            return (
              <button
                key={member.id}
                disabled={isClaimedByOther || !!claimingMemberId}
                onClick={() => handleClaimName(member)}
                className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between relative group ${
                  isClaimedByMe
                    ? 'bg-purple-950/90 border-purple-400 text-white shadow-xl shadow-purple-900/30'
                    : isClaimedByOther
                    ? 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60 cursor-not-allowed'
                    : 'bg-slate-900/80 hover:bg-slate-850 border-purple-500/30 hover:border-purple-400 text-slate-200 shadow-lg transform hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-base text-purple-100 group-hover:text-white transition">
                      {member.name}
                    </h3>
                    {isClaimedByOther ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        <Lock size={10} /> Claimed
                      </span>
                    ) : isClaimedByMe ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                        <CheckCircle2 size={10} /> You
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                        Available
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-amber-300/90">{member.category}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-purple-500/10 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 text-[11px]">{member.targetIcons.length} target icons</span>
                  {!isClaimedByOther && (
                    <span className="text-purple-300 flex items-center gap-1 group-hover:translate-x-1 transition font-bold">
                      {isPending ? 'Claiming...' : 'Tap to Join'} <ArrowRight size={12} />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0517] flex items-center justify-center text-purple-300">Loading Member Directory...</div>}>
      <JoinContent />
    </Suspense>
  );
}
