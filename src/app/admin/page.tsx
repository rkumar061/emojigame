'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Plus,
  Trash2,
  Play,
  RotateCcw,
  Sparkles,
  Search,
  CheckCircle2,
  Tv,
  Settings,
  HelpCircle,
  Eye,
  Shield,
  Layers,
  ArrowRight,
  UserX,
} from 'lucide-react';
import { MemberProfile, IconItem, RoomState } from '@/types/game';
import { INITIAL_MEMBERS, DEFAULT_DISTRACTOR_POOL } from '@/lib/defaultData';
import { IconPickerModal } from '@/components/IconPickerModal';
import { IconRenderer } from '@/components/IconRenderer';
import { useRoomStore } from '@/lib/useRoomStore';

export default function AdminPage() {
  const [pin, setPin] = useState('GD8492');

  // Room state via real-time WebSocket/EventSource stream (zero polling)
  const { roomState, isConnected, fetchRoomState } = useRoomStore(pin);
  const [timerSetting, setTimerSetting] = useState<number>(30);

  // Members edit state
  const [members, setMembers] = useState<MemberProfile[]>(INITIAL_MEMBERS);
  const [selectedMemberId, setSelectedMemberId] = useState<string>('m1');
  const [searchTerm, setSearchTerm] = useState('');

  // Icon Picker Modal state
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerTargetType, setPickerTargetType] = useState<'target' | 'distractor'>('target');

  useEffect(() => {
    if (roomState?.members) {
      setMembers(roomState.members);
      setTimerSetting(roomState.config?.timerSeconds || 30);
    }
  }, [roomState]);

  const selectedMember = members.find((m) => m.id === selectedMemberId) || members[0];

  // Save changes to backend
  const syncMembersToBackend = async (newMembers: MemberProfile[]) => {
    setMembers(newMembers);
    try {
      await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'UPDATE_MEMBERS', pin, members: newMembers }),
      });
    } catch {
      // ignore
    }
  };

  const handleAddMember = () => {
    const newId = `m_${Date.now()}`;
    const newMember: MemberProfile = {
      id: newId,
      name: 'New Member',
      category: 'Business Category',
      company: 'Company Name',
      targetIcons: [
        { id: `t_${Date.now()}_1`, type: 'emoji', value: '⭐', label: 'Star' },
        { id: `t_${Date.now()}_2`, type: 'lucide', value: 'Sparkles', label: 'Sparkles' },
      ],
      distractorIcons: DEFAULT_DISTRACTOR_POOL,
    };
    const updated = [...members, newMember];
    syncMembersToBackend(updated);
    setSelectedMemberId(newId);
  };

  const handleDeleteMember = (id: string) => {
    if (members.length <= 1) return;
    const updated = members.filter((m) => m.id !== id);
    syncMembersToBackend(updated);
    if (selectedMemberId === id) {
      setSelectedMemberId(updated[0].id);
    }
  };

  const handleUpdateMemberField = (field: keyof MemberProfile, val: string) => {
    const updated = members.map((m) => {
      if (m.id === selectedMember.id) {
        return { ...m, [field]: val };
      }
      return m;
    });
    syncMembersToBackend(updated);
  };

  const handleRemoveIcon = (iconId: string, isTarget: boolean) => {
    const updated = members.map((m) => {
      if (m.id === selectedMember.id) {
        if (isTarget) {
          return { ...m, targetIcons: m.targetIcons.filter((i) => i.id !== iconId) };
        } else {
          return { ...m, distractorIcons: m.distractorIcons.filter((i) => i.id !== iconId) };
        }
      }
      return m;
    });
    syncMembersToBackend(updated);
  };

  const handleIconSelected = (icon: IconItem) => {
    const updated = members.map((m) => {
      if (m.id === selectedMember.id) {
        if (pickerTargetType === 'target') {
          return { ...m, targetIcons: [...m.targetIcons, icon] };
        } else {
          return { ...m, distractorIcons: [...m.distractorIcons, icon] };
        }
      }
      return m;
    });
    syncMembersToBackend(updated);
  };

  const handleStartGame = async () => {
    await fetch('/api/room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'SET_STATUS', pin, status: 'PLAYING' }),
    });
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

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0517] text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="h-16 border-b border-purple-500/20 bg-slate-950/80 px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-horizental.png?v=2"
              alt="Grape Dawn"
              width={150}
              height={40}
              className="object-contain filter drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"
            />
          </Link>
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-900/60 border border-purple-500/30 text-purple-300">
            ADMIN PANEL
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Room PIN Display */}
          <div className="flex items-center gap-2 bg-slate-900 border border-purple-500/30 px-3 py-1.5 rounded-xl">
            <span className="text-xs text-slate-400 font-semibold">PIN:</span>
            <span className="font-mono text-amber-300 font-extrabold text-lg">{pin}</span>
          </div>

          <button
            onClick={handleStartGame}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg transition"
          >
            <Play size={16} /> Start Game
          </button>

          <Link
            href="/host"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 font-semibold text-xs transition"
          >
            <Tv size={16} /> Live Host Screen
          </Link>
        </div>
      </header>

      {/* Main Admin Workspace with Left Side Panel */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDE PANEL: Member Directory */}
        <aside className="w-80 border-r border-purple-500/20 bg-slate-950/70 flex flex-col">
          <div className="p-4 border-b border-purple-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-purple-200 uppercase tracking-wider flex items-center gap-2">
                <Users size={16} className="text-purple-400" /> BNI Members ({members.length})
              </h2>
              <button
                onClick={handleAddMember}
                className="p-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600/60 border border-purple-500/40 text-purple-200 transition"
                title="Add New Member"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Search filter */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-500" size={14} />
              <input
                type="text"
                placeholder="Search member name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Members List */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
            {filteredMembers.map((m) => {
              const isSelected = m.id === selectedMember?.id;
              const isClaimed = !!m.claimedBy;

              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedMemberId(m.id)}
                  className={`p-3 rounded-xl cursor-pointer transition flex items-center justify-between border ${
                    isSelected
                      ? 'bg-purple-950/80 border-purple-500 text-white shadow-lg'
                      : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/60 text-slate-300'
                  }`}
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="font-bold text-sm truncate flex items-center gap-2">
                      {m.name}
                      {isClaimed && (
                        <span
                          className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"
                          title={`Claimed by ${m.claimedByName}`}
                        />
                      )}
                    </div>
                    <div className="text-xs text-slate-400 truncate">{m.category}</div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isClaimed && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (m.claimedBy) handleKickPlayer(m.claimedBy);
                        }}
                        className="p-1 rounded bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 transition"
                        title={`Kick player ${m.claimedByName} and reset name`}
                      >
                        <UserX size={14} />
                      </button>
                    )}
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-900/50 text-purple-300">
                      {m.targetIcons.length} targets
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* MAIN CANVAS: Selected Member Editor & Icons Page */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-slate-900/20 space-y-6">
          {selectedMember ? (
            <>
              {/* Member Basic Info Card */}
              <div className="bg-slate-900/80 border border-purple-500/30 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-3 flex-1 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                      Editing Selected Member
                    </span>
                    <button
                      onClick={() => handleDeleteMember(selectedMember.id)}
                      className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 px-2.5 py-1 rounded-lg transition"
                    >
                      <Trash2 size={14} /> Delete Member
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Member Name
                      </label>
                      <input
                        type="text"
                        value={selectedMember.name}
                        onChange={(e) => handleUpdateMemberField('name', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm font-bold text-purple-200 focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Business Category
                      </label>
                      <input
                        type="text"
                        value={selectedMember.category}
                        onChange={(e) => handleUpdateMemberField('category', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={selectedMember.company || ''}
                        onChange={(e) => handleUpdateMemberField('company', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 1: Target Relevant Icons & Emojis (10 items) */}
              <div className="bg-slate-900/80 border border-purple-500/30 rounded-2xl p-5 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-purple-200 flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      Target Relevant Icons & Emojis ({selectedMember.targetIcons.length} / 10)
                    </h3>
                    <p className="text-xs text-slate-400">
                      These are the correct icons the player must spot & click to gain points!
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setPickerTargetType('target');
                      setPickerOpen(true);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition shadow-lg"
                  >
                    <Plus size={14} /> Add Target Icon/Emoji
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3">
                  {selectedMember.targetIcons.map((icon) => (
                    <div
                      key={icon.id}
                      className="relative group bg-slate-950 border border-emerald-500/30 hover:border-emerald-400 rounded-2xl p-3 flex flex-col items-center justify-center gap-1 transition shadow-lg"
                    >
                      <IconRenderer icon={icon} size={32} className="text-emerald-400" />
                      <span className="text-[10px] font-medium text-slate-400 truncate max-w-full">
                        {icon.type === 'lucide' ? icon.value : icon.label || 'Emoji'}
                      </span>

                      <button
                        onClick={() => handleRemoveIcon(icon.id, true)}
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-rose-600 hover:bg-rose-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow"
                      >
                        <Trash2 size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 2: Distractor Icons & Emojis (30 items) */}
              <div className="bg-slate-900/80 border border-purple-500/30 rounded-2xl p-5 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-purple-200 flex items-center gap-2">
                      <Layers size={18} className="text-amber-400" />
                      Distractor Icons & Emojis ({selectedMember.distractorIcons.length} items)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Wrong items to trick players. Penalizes score on incorrect click.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setPickerTargetType('distractor');
                      setPickerOpen(true);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-purple-900/50 border border-purple-500/30 text-purple-200 rounded-xl text-xs font-bold transition"
                  >
                    <Plus size={14} /> Add Distractor Icon
                  </button>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-2">
                  {selectedMember.distractorIcons.map((icon) => (
                    <div
                      key={icon.id}
                      className="relative group bg-slate-950/60 border border-slate-800 hover:border-amber-500/50 rounded-xl p-2 flex flex-col items-center justify-center gap-1 transition"
                    >
                      <IconRenderer icon={icon} size={22} className="text-slate-300" />
                      <button
                        onClick={() => handleRemoveIcon(icon.id, false)}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-[9px]"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500">
              Select a member from the left sidepanel to edit.
            </div>
          )}
        </main>
      </div>

      {/* Icon Picker Modal */}
      <IconPickerModal
        isOpen={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={handleIconSelected}
        title={pickerTargetType === 'target' ? 'Add Target Relevant Icon' : 'Add Distractor Icon'}
      />
    </div>
  );
}
