export type IconType = 'emoji' | 'lucide';

export interface IconItem {
  id: string;
  type: IconType;
  value: string; // Emoji character OR Lucide icon component name (e.g., 'DoorClosed', 'Palette')
  label?: string; // Optional human-readable description
}

export interface MemberProfile {
  id: string;
  name: string;
  category: string; // Business category (e.g. "UPVC Doors", "Branding", "Dentist")
  company?: string;
  targetIcons: IconItem[]; // 10 target relevant icons (emojis + Lucide icons)
  distractorIcons: IconItem[]; // 30 distractor icons (emojis + Lucide icons)
  claimedBy?: string; // Player ID who claimed this name
  claimedByName?: string;
}

export interface GameConfig {
  timerSeconds: number; // e.g. 30 seconds
  correctPoints: number; // e.g. 100 base points
  wrongPenalty: number; // e.g. 25 penalty points
  comboEnabled: boolean;
}

export type RoomStatus = 'LOBBY' | 'COUNTDOWN' | 'PLAYING' | 'FINISHED';

export interface PlayerProgress {
  id: string;
  name: string;
  claimedMemberId: string;
  claimedMemberName: string;
  claimedCategory: string;
  score: number;
  correctCount: number;
  wrongCount: number;
  totalClicks: number;
  accuracy: number; // percentage 0-100
  timeSec: number;
  comboStreak: number;
  maxCombo: number;
  finished: boolean;
  foundTargetValues?: string[];
}

export interface RoomState {
  pin: string;
  status: RoomStatus;
  config: GameConfig;
  members: MemberProfile[];
  players: Record<string, PlayerProgress>;
  countdownSeconds: number;
  startedAt?: number;
  endedAt?: number;
}

export interface IconGridTile {
  id: string;
  icon: IconItem;
  isTarget: boolean;
  clicked: boolean;
  isCorrect?: boolean;
}
