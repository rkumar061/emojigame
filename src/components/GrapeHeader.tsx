'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GrapeHeaderProps {
  subtitle?: string;
  compact?: boolean;
}

export const GrapeHeader: React.FC<GrapeHeaderProps> = ({
  subtitle = 'Icon Arena',
  compact = false,
}) => {
  return (
    <header className={`w-full flex items-center justify-between border-b border-purple-500/20 bg-slate-950/80 backdrop-blur-md ${compact ? 'py-2 px-4' : 'py-3 px-6'}`}>
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative flex items-center">
          <Image
            src="/logo-horizental.png"
            alt="Grape Dawn"
            width={compact ? 130 : 170}
            height={compact ? 36 : 48}
            className="object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] group-hover:scale-105 transition transform duration-200"
            priority
          />
        </div>
        <div className="h-6 w-px bg-purple-500/30 hidden sm:block" />
        <span className={`font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-amber-300 ${compact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}>
          {subtitle}
        </span>
      </Link>

      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/admin"
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 transition"
        >
          Admin Panel
        </Link>
        <Link
          href="/host"
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 transition hidden xs:inline-block"
        >
          Big Screen TV
        </Link>
      </div>
    </header>
  );
};
