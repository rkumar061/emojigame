'use client';

import React from 'react';
import Link from 'next/link';

interface GrapeHeaderProps {
  subtitle?: string;
  roomCode?: string;
  rightActions?: React.ReactNode;
}

export const GrapeHeader: React.FC<GrapeHeaderProps> = ({
  subtitle,
  roomCode,
  rightActions,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#07040d]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl flex items-center justify-between overflow-hidden h-16 sm:h-20 p-0 m-0 pl-0 shrink-0">
      {/* Slanted Golden Banner Logo (Flushed to Left Edge with 0px gap) */}
      <div className="flex items-center h-full">
        <Link
          href="/"
          className="h-full grapedawn-gold-banner flex items-center pl-4 sm:pl-8 pr-12 sm:pr-16 py-2 transition-all hover:brightness-105"
        >
          <img
            src="/logo-horizental.png"
            alt="GrapeDawn"
            className="h-8 sm:h-11 w-auto object-contain drop-shadow-sm"
          />
        </Link>
        {subtitle && (
          <span className="hidden md:inline-block font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-amber-300 text-xs sm:text-sm ml-4">
            {subtitle}
          </span>
        )}
      </div>

      {/* Header Right Actions / Room Code */}
      <div className="flex items-center gap-3 sm:gap-4 pr-4 sm:pr-6">
        {roomCode && (
          <span className="font-mono text-xs sm:text-sm font-bold px-3 sm:px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 tracking-wider">
            ROOM: {roomCode}
          </span>
        )}
        {rightActions ? (
          rightActions
        ) : (
          <>
            <Link
              href="/admin"
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 transition shadow-md"
            >
              Admin
            </Link>
            <Link
              href="/host"
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 transition hidden xs:inline-block shadow-md"
            >
              Big Screen TV
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
