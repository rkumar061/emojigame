'use client';

import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { IconItem, IconType } from '@/types/game';
import { IconRenderer } from './IconRenderer';

interface IconPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (icon: IconItem) => void;
  title?: string;
}

const POPULAR_LUCIDE_ICONS = [
  'DoorClosed', 'Home', 'Building', 'Building2', 'Landmark', 'Key', 'Shield', 'ShieldCheck', 'Lock',
  'Palette', 'PenTool', 'Layers', 'Image', 'Sparkles', 'Wand2', 'Brush',
  'Stethoscope', 'HeartPulse', 'Activity', 'Smile', 'Syringe', 'Pill', 'Thermometer',
  'Calculator', 'Receipt', 'DollarSign', 'CreditCard', 'PieChart', 'TrendingUp', 'Briefcase',
  'Sun', 'Zap', 'BatteryCharging', 'Lightbulb', 'Cpu', 'Cog', 'Wrench', 'Flame',
  'Award', 'Trophy', 'Crown', 'Target', 'Star', 'Flame', 'Rocket', 'Search', 'Music', 'Coffee'
];

const POPULAR_EMOJIS = [
  '🚪', '🪟', '🏠', '🔑', '🔒', '🛠️', '🧱', '🎨', '🖌️', '✨', '🖼️', '📐', '✏️',
  '🦷', '🩺', '🪥', '😁', '🏥', '💊', '🏢', '🏗️', '🏙️', '🏬', '🗝️', '📊', '📈',
  '💰', '💵', '🧾', '🏛️', '☀️', '⚡', '🔋', '🔌', '💡', '🏆', '🥇', '👑', '🚀', '🎯'
];

export const IconPickerModal: React.FC<IconPickerModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  title = 'Pick an Icon or Emoji',
}) => {
  const [tab, setTab] = useState<IconType>('emoji');
  const [searchTerm, setSearchTerm] = useState('');
  const [customEmoji, setCustomEmoji] = useState('');

  if (!isOpen) return null;

  const filteredLucide = POPULAR_LUCIDE_ICONS.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEmojis = POPULAR_EMOJIS.filter((e) =>
    searchTerm ? e.includes(searchTerm) : true
  );

  const handleCustomEmojiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customEmoji.trim()) {
      onSelect({
        id: `custom_${Date.now()}`,
        type: 'emoji',
        value: customEmoji.trim(),
        label: 'Custom Emoji',
      });
      setCustomEmoji('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-purple-500/30 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-500/20 bg-slate-900/80">
          <h3 className="text-lg font-bold text-purple-200">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-purple-500/20 bg-slate-950/60 p-2 gap-2">
          <button
            onClick={() => setTab('emoji')}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition ${
              tab === 'emoji'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            😊 Emojis Library
          </button>
          <button
            onClick={() => setTab('lucide')}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition ${
              tab === 'lucide'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            ✨ Lucide Icons Library
          </button>
        </div>

        {/* Search & Custom Input */}
        <div className="p-4 border-b border-purple-500/10 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input
              type="text"
              placeholder={tab === 'emoji' ? 'Filter emojis...' : 'Search Lucide icons (e.g. Shield, Door)...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          {tab === 'emoji' && (
            <form onSubmit={handleCustomEmojiSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="Or paste any custom emoji character..."
                value={customEmoji}
                onChange={(e) => setCustomEmoji(e.target.value)}
                className="flex-1 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-purple-600/80 hover:bg-purple-600 text-white text-sm font-semibold rounded-xl transition"
              >
                Add
              </button>
            </form>
          )}
        </div>

        {/* Content Grid */}
        <div className="p-4 overflow-y-auto flex-1 custom-scrollbar">
          {tab === 'emoji' ? (
            <div className="grid grid-cols-6 sm:grid-cols-8 gap-3">
              {filteredEmojis.map((emojiStr, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onSelect({
                      id: `emoji_${Date.now()}_${idx}`,
                      type: 'emoji',
                      value: emojiStr,
                    });
                    onClose();
                  }}
                  className="h-12 flex items-center justify-center text-2xl bg-slate-800/60 hover:bg-purple-600/30 border border-slate-700/50 hover:border-purple-500 rounded-xl transition transform hover:scale-110 active:scale-95"
                >
                  {emojiStr}
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
              {filteredLucide.map((iconName, idx) => {
                const item: IconItem = {
                  id: `lucide_${Date.now()}_${idx}`,
                  type: 'lucide',
                  value: iconName,
                  label: iconName,
                };
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      onSelect(item);
                      onClose();
                    }}
                    className="flex flex-col items-center justify-center p-3 bg-slate-800/60 hover:bg-purple-600/30 border border-slate-700/50 hover:border-purple-500 rounded-xl transition transform hover:scale-105 active:scale-95 group text-center gap-1.5"
                  >
                    <IconRenderer icon={item} size={24} className="text-purple-300 group-hover:text-white" />
                    <span className="text-[10px] font-medium text-slate-400 group-hover:text-slate-200 truncate max-w-full">
                      {iconName}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
