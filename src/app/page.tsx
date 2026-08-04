'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, Tv, Sparkles, ArrowRight, Zap, Users } from 'lucide-react';

export default function LandingPage() {
  const [pin, setPin] = useState('GD8492');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin.trim()) {
      setError('Please enter a valid 6-Digit Room PIN');
      return;
    }

    const cleanPin = pin.trim().toUpperCase();
    localStorage.setItem('gd_room_pin', cleanPin);
    router.push(`/join?pin=${cleanPin}`);
  };

  return (
    <div className="min-h-screen bg-[#0b0517] text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="w-full py-4 px-6 border-b border-purple-500/20 bg-slate-950/60 backdrop-blur-md flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-horizental.png"
            alt="Grape Dawn Logo"
            width={180}
            height={50}
            className="object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            priority
          />
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/lobby?pin=GD8492&host=true"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition shadow-lg shadow-amber-500/20"
          >
            <Users size={16} /> Create Lobby
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 transition shadow-lg"
          >
            <Shield size={14} /> Admin Setup
          </Link>
          <Link
            href="/host"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-amber-300 transition shadow-lg hidden sm:flex"
          >
            <Tv size={14} /> TV Screen
          </Link>
        </div>
      </header>

      {/* Main Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 z-10 max-w-4xl mx-auto w-full text-center">
        {/* Title Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wide uppercase mb-6 shadow-inner">
          <Sparkles size={14} className="text-amber-400 animate-pulse" />
          BNI Nexora Live Member Race
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-300 to-amber-200 drop-shadow-sm">
          Grape Dawn Icon Arena
        </h1>
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mb-8 leading-relaxed">
          Spot and click the 10 business icons matching your claimed member while avoiding 30 distractors!
        </p>

        {/* Player Join Card */}
        <div className="w-full max-w-md bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-300 pointer-events-none" />

          <div className="relative">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <Zap size={20} className="text-amber-400" /> Enter Game Room
            </h2>

            <form onSubmit={handleJoin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider text-left mb-1.5">
                  6-Digit Room PIN
                </label>
                <input
                  type="text"
                  placeholder="e.g. GD8492"
                  value={pin}
                  onChange={(e) => setPin(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-purple-500/30 rounded-2xl text-amber-300 placeholder-slate-500 font-mono tracking-widest text-2xl text-center font-extrabold focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition uppercase"
                  maxLength={8}
                  required
                />
              </div>

              {error && <p className="text-rose-400 text-xs font-semibold text-left">{error}</p>}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-lg rounded-2xl shadow-xl shadow-purple-950/50 flex items-center justify-center gap-2 transform active:scale-98 transition duration-150"
              >
                Join Room <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* How to Play Teaser */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-purple-500/20 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">1</div>
            <h3 className="font-bold text-slate-200 text-sm">Claim Member Profile</h3>
            <p className="text-slate-400 text-xs">Simply tap your member name from the list. Your claimed name becomes your in-game identity!</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-purple-500/20 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-300 font-bold">2</div>
            <h3 className="font-bold text-slate-200 text-sm">Spot 10 Target Icons</h3>
            <p className="text-slate-400 text-xs">Click the 10 target emojis/icons while skipping 30 distractors in the 40-tile grid.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-purple-500/20 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 font-bold">3</div>
            <h3 className="font-bold text-slate-200 text-sm">Build Combos & Win</h3>
            <p className="text-slate-400 text-xs">Build up 2x, 3x, 5x combos to dominate the Gold Victory Podium!</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center border-t border-purple-500/10 text-xs text-slate-500">
        Grape Dawn BNI Nexora Icon Arena • Next.js & Web Audio Engine
      </footer>
    </div>
  );
}
