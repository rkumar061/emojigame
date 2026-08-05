import { MemberProfile, IconItem } from '@/types/game';

// Master pool of 90 diverse, non-business distractor items (food, sports, animals, space, music, weather, toys)
export const MASTER_DISTRACTOR_ITEMS: IconItem[] = [
  // Foods & Fruits (20)
  { id: 'md1', type: 'emoji', value: '🍎', label: 'Apple' },
  { id: 'md2', type: 'emoji', value: '🍌', label: 'Banana' },
  { id: 'md3', type: 'emoji', value: '🍉', label: 'Watermelon' },
  { id: 'md4', type: 'emoji', value: '🍇', label: 'Grapes' },
  { id: 'md5', type: 'emoji', value: '🍓', label: 'Strawberry' },
  { id: 'md6', type: 'emoji', value: '🍒', label: 'Cherries' },
  { id: 'md7', type: 'emoji', value: '🍍', label: 'Pineapple' },
  { id: 'md8', type: 'emoji', value: '🥑', label: 'Avocado' },
  { id: 'md9', type: 'emoji', value: '🍑', label: 'Peach' },
  { id: 'md10', type: 'emoji', value: '🍋', label: 'Lemon' },
  { id: 'md11', type: 'emoji', value: '🍕', label: 'Pizza' },
  { id: 'md12', type: 'emoji', value: '🍔', label: 'Burger' },
  { id: 'md13', type: 'emoji', value: '🍟', label: 'Fries' },
  { id: 'md14', type: 'emoji', value: '🌭', label: 'Hotdog' },
  { id: 'md15', type: 'emoji', value: '🍿', label: 'Popcorn' },
  { id: 'md16', type: 'emoji', value: '🥨', label: 'Pretzel' },
  { id: 'md17', type: 'emoji', value: '🌮', label: 'Taco' },
  { id: 'md18', type: 'emoji', value: '🍩', label: 'Donut' },
  { id: 'md19', type: 'emoji', value: '🍦', label: 'Ice Cream' },
  { id: 'md20', type: 'emoji', value: '🧁', label: 'Cupcake' },

  // Sports & Games (15)
  { id: 'md21', type: 'emoji', value: '⚽', label: 'Soccer' },
  { id: 'md22', type: 'emoji', value: '🏀', label: 'Basketball' },
  { id: 'md23', type: 'emoji', value: '🏈', label: 'Football' },
  { id: 'md24', type: 'emoji', value: '⚾', label: 'Baseball' },
  { id: 'md25', type: 'emoji', value: '🎾', label: 'Tennis' },
  { id: 'md26', type: 'emoji', value: '🏐', label: 'Volleyball' },
  { id: 'md27', type: 'emoji', value: '🎳', label: 'Bowling' },
  { id: 'md28', type: 'emoji', value: '🏓', label: 'Ping Pong' },
  { id: 'md29', type: 'emoji', value: '🛹', label: 'Skateboard' },
  { id: 'md30', type: 'emoji', value: '🎯', label: 'Darts' },
  { id: 'md31', type: 'emoji', value: '🎲', label: 'Dice' },
  { id: 'md32', type: 'lucide', value: 'Gamepad2', label: 'Gamepad' },
  { id: 'md33', type: 'emoji', value: '🧩', label: 'Puzzle' },
  { id: 'md34', type: 'emoji', value: '🪁', label: 'Kite' },
  { id: 'md35', type: 'emoji', value: '🪀', label: 'Yo-Yo' },

  // Animals & Wildlife (20)
  { id: 'md36', type: 'emoji', value: '🐶', label: 'Dog' },
  { id: 'md37', type: 'emoji', value: '🐱', label: 'Cat' },
  { id: 'md38', type: 'emoji', value: '🦁', label: 'Lion' },
  { id: 'md39', type: 'emoji', value: '🐯', label: 'Tiger' },
  { id: 'md40', type: 'emoji', value: '🐻', label: 'Bear' },
  { id: 'md41', type: 'emoji', value: '🐼', label: 'Panda' },
  { id: 'md42', type: 'emoji', value: '🦊', label: 'Fox' },
  { id: 'md43', type: 'emoji', value: '🐰', label: 'Rabbit' },
  { id: 'md44', type: 'emoji', value: '🐸', label: 'Frog' },
  { id: 'md45', type: 'emoji', value: '🐙', label: 'Octopus' },
  { id: 'md46', type: 'emoji', value: '🐬', label: 'Dolphin' },
  { id: 'md47', type: 'emoji', value: '🐢', label: 'Turtle' },
  { id: 'md48', type: 'emoji', value: '🦉', label: 'Owl' },
  { id: 'md49', type: 'emoji', value: '🦋', label: 'Butterfly' },
  { id: 'md50', type: 'emoji', value: '🐝', label: 'Bee' },
  { id: 'md51', type: 'lucide', value: 'Cat', label: 'Pet Cat' },
  { id: 'md52', type: 'lucide', value: 'Dog', label: 'Pet Dog' },
  { id: 'md53', type: 'lucide', value: 'Fish', label: 'Fish' },
  { id: 'md54', type: 'lucide', value: 'Bug', label: 'Bug' },
  { id: 'md55', type: 'lucide', value: 'Bird', label: 'Bird' },

  // Space & Fantasy (15)
  { id: 'md56', type: 'emoji', value: '🚀', label: 'Rocket' },
  { id: 'md57', type: 'emoji', value: '🛸', label: 'UFO' },
  { id: 'md58', type: 'emoji', value: '👾', label: 'Alien' },
  { id: 'md59', type: 'emoji', value: '🤖', label: 'Robot' },
  { id: 'md60', type: 'emoji', value: '🔮', label: 'Orb' },
  { id: 'md61', type: 'emoji', value: '👻', label: 'Ghost' },
  { id: 'md62', type: 'emoji', value: '🦄', label: 'Unicorn' },
  { id: 'md63', type: 'emoji', value: '🪐', label: 'Planet' },
  { id: 'md64', type: 'emoji', value: '🌕', label: 'Full Moon' },
  { id: 'md65', type: 'emoji', value: '☄️', label: 'Comet' },
  { id: 'md66', type: 'lucide', value: 'Ghost', label: 'Ghost Character' },
  { id: 'md67', type: 'lucide', value: 'Anchor', label: 'Anchor' },
  { id: 'md68', type: 'lucide', value: 'Rocket', label: 'Space Rocket' },
  { id: 'md69', type: 'lucide', value: 'Sparkle', label: 'Sparkle' },
  { id: 'md70', type: 'emoji', value: '🎈', label: 'Balloon' },

  // Music, Nature & Weather (20)
  { id: 'md71', type: 'emoji', value: '🎸', label: 'Guitar' },
  { id: 'md72', type: 'emoji', value: '🥁', label: 'Drums' },
  { id: 'md73', type: 'emoji', value: '🎷', label: 'Saxophone' },
  { id: 'md74', type: 'emoji', value: '🎺', label: 'Trumpet' },
  { id: 'md75', type: 'emoji', value: '🎧', label: 'Headphones' },
  { id: 'md76', type: 'emoji', value: '🎤', label: 'Microphone' },
  { id: 'md77', type: 'lucide', value: 'Headphones', label: 'Audio' },
  { id: 'md78', type: 'emoji', value: '🌵', label: 'Cactus' },
  { id: 'md79', type: 'emoji', value: '🍄', label: 'Mushroom' },
  { id: 'md80', type: 'emoji', value: '🌻', label: 'Sunflower' },
  { id: 'md81', type: 'emoji', value: '🌈', label: 'Rainbow' },
  { id: 'md82', type: 'emoji', value: '⚡', label: 'Lightning' },
  { id: 'md83', type: 'emoji', value: '❄️', label: 'Snowflake' },
  { id: 'md84', type: 'emoji', value: '🏕️', label: 'Camping' },
  { id: 'md85', type: 'emoji', value: '🌲', label: 'Pine Tree' },
  { id: 'md86', type: 'emoji', value: '🏔️', label: 'Mountain' },
  { id: 'md87', type: 'lucide', value: 'Cookie', label: 'Cookie' },
  { id: 'md88', type: 'lucide', value: 'Tent', label: 'Tent' },
  { id: 'md89', type: 'lucide', value: 'Sun', label: 'Sunlight' },
  { id: 'md90', type: 'lucide', value: 'CloudRain', label: 'Rain Cloud' },
];

export const DEFAULT_DISTRACTOR_POOL: IconItem[] = MASTER_DISTRACTOR_ITEMS.slice(0, 30);

// Generates a 100% unique 30-item distractor array for each member based on their index offset
export function getMemberUniqueDistractors(memberIndex: number, targetIcons: IconItem[]): IconItem[] {
  const targetValues = new Set(targetIcons.map((t) => t.value.toLowerCase()));
  const targetLabels = new Set(targetIcons.map((t) => (t.label || '').toLowerCase()));

  const result: IconItem[] = [];
  const total = MASTER_DISTRACTOR_ITEMS.length;

  // Prime step rotation so every member gets a unique selection & order of distractors
  const prime = 13;
  const startOffset = (memberIndex * prime) % total;

  for (let i = 0; i < total * 2 && result.length < 30; i++) {
    const item = MASTER_DISTRACTOR_ITEMS[(startOffset + i) % total];
    const val = item.value.toLowerCase();
    const lbl = (item.label || '').toLowerCase();

    if (
      !targetValues.has(val) &&
      !targetLabels.has(lbl) &&
      !result.some((r) => r.value === item.value)
    ) {
      result.push({
        ...item,
        id: `dist_${memberIndex + 1}_${result.length + 1}`,
      });
    }
  }

  return result;
}

const RAW_INITIAL_MEMBERS: MemberProfile[] = [
  {
    "id": "m1",
    "name": "Amit Chang",
    "category": "UPVC Doors & Windows",
    "company": "Fenestra Solutions",
    "targetIcons": [
      {
        "id": "t1_1",
        "type": "emoji",
        "value": "🚪",
        "label": "Door"
      },
      {
        "id": "t1_2",
        "type": "emoji",
        "value": "🪟",
        "label": "Window"
      },
      {
        "id": "t1_3",
        "type": "emoji",
        "value": "🏠",
        "label": "House"
      },
      {
        "id": "t1_5",
        "type": "lucide",
        "value": "DoorClosed",
        "label": "UPVC Door"
      },
      {
        "id": "t1_6",
        "type": "lucide",
        "value": "DoorOpen",
        "label": "Open Door"
      },
      {
        "id": "t1_7",
        "type": "lucide",
        "value": "Home",
        "label": "Home & Property"
      },
      {
        "id": "t1_10",
        "type": "lucide",
        "value": "Lock",
        "label": "Multi-Point Locking"
      },
      {
        "id": "emoji_1785920871097_11",
        "type": "emoji",
        "value": "📐"
      },
      {
        "id": "emoji_1785920926966_5",
        "type": "emoji",
        "value": "🛠️"
      },
      {
        "id": "emoji_1785920982162_19",
        "type": "emoji",
        "value": "🏢"
      }
    ],
    "distractorIcons": [
      {
        "id": "ad1",
        "type": "emoji",
        "value": "🍕",
        "label": "Pizza"
      },
      {
        "id": "ad2",
        "type": "emoji",
        "value": "🍔",
        "label": "Burger"
      },
      {
        "id": "ad3",
        "type": "emoji",
        "value": "🍿",
        "label": "Popcorn"
      },
      {
        "id": "ad4",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      },
      {
        "id": "ad5",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "ad6",
        "type": "emoji",
        "value": "🍎",
        "label": "Apple"
      },
      {
        "id": "ad7",
        "type": "emoji",
        "value": "💰",
        "label": "Money Bag"
      },
      {
        "id": "ad8",
        "type": "emoji",
        "value": "💳",
        "label": "Credit Card"
      },
      {
        "id": "ad9",
        "type": "lucide",
        "value": "Banknote",
        "label": "Banknote"
      },
      {
        "id": "ad10",
        "type": "lucide",
        "value": "TrendingUp",
        "label": "Stock Chart"
      },
      {
        "id": "ad12",
        "type": "emoji",
        "value": "🪙",
        "label": "Gold Coin"
      },
      {
        "id": "ad13",
        "type": "emoji",
        "value": "⚖️",
        "label": "Scales of Justice"
      },
      {
        "id": "ad14",
        "type": "lucide",
        "value": "Scale",
        "label": "Justice Scale"
      },
      {
        "id": "ad15",
        "type": "lucide",
        "value": "Gavel",
        "label": "Judge Gavel"
      },
      {
        "id": "ad16",
        "type": "lucide",
        "value": "Briefcase",
        "label": "Law Briefcase"
      },
      {
        "id": "ad17",
        "type": "emoji",
        "value": "📜",
        "label": "Legal Scroll"
      },
      {
        "id": "ad19",
        "type": "emoji",
        "value": "🎬",
        "label": "Movie Clapper"
      },
      {
        "id": "ad20",
        "type": "lucide",
        "value": "Clapperboard",
        "label": "Cinema"
      },
      {
        "id": "ad21",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "ad22",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "ad23",
        "type": "lucide",
        "value": "Ticket",
        "label": "Movie Ticket"
      },
      {
        "id": "ad24",
        "type": "emoji",
        "value": "🎮",
        "label": "Gaming"
      },
      {
        "id": "ad25",
        "type": "emoji",
        "value": "🏔️",
        "label": "Snow Mountain"
      },
      {
        "id": "ad26",
        "type": "lucide",
        "value": "Mountain",
        "label": "Mountain Peak"
      },
      {
        "id": "ad27",
        "type": "lucide",
        "value": "MountainSnow",
        "label": "Alpine Peak"
      },
      {
        "id": "ad28",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping Tent"
      },
      {
        "id": "ad29",
        "type": "lucide",
        "value": "Tent",
        "label": "Camp Site"
      },
      {
        "id": "ad30",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Forest"
      },
      {
        "id": "emoji_1785920894633_13",
        "type": "emoji",
        "value": "🦷"
      },
      {
        "id": "emoji_1785920901057_14",
        "type": "emoji",
        "value": "🩺"
      }
    ]
  },
  {
    "id": "m2",
    "name": "Manthan Pawar",
    "category": "Branding Consultant",
    "company": "Creative Spectrum",
    "targetIcons": [
      {
        "id": "t2_1",
        "type": "emoji",
        "value": "🎨",
        "label": "Palette"
      },
      {
        "id": "t2_2",
        "type": "emoji",
        "value": "🖌️",
        "label": "Brush"
      },
      {
        "id": "t2_4",
        "type": "lucide",
        "value": "Palette",
        "label": "Lucide Palette"
      },
      {
        "id": "t2_5",
        "type": "lucide",
        "value": "PenTool",
        "label": "Pen Tool"
      },
      {
        "id": "t2_6",
        "type": "lucide",
        "value": "Stamp",
        "label": "Brand Logo & Seal"
      },
      {
        "id": "t2_7",
        "type": "emoji",
        "value": "📐",
        "label": "Ruler"
      },
      {
        "id": "t2_8",
        "type": "lucide",
        "value": "Image",
        "label": "Image"
      },
      {
        "id": "t2_9",
        "type": "emoji",
        "value": "🖼️",
        "label": "Picture"
      },
      {
        "id": "t2_10",
        "type": "lucide",
        "value": "Layers",
        "label": "Layers"
      },
      {
        "id": "emoji_1785921158566_12",
        "type": "emoji",
        "value": "✏️"
      }
    ],
    "distractorIcons": [
      { "id": "dist_2_1", "type": "emoji", "value": "🌭", "label": "Hotdog" },
      { "id": "dist_2_2", "type": "emoji", "value": "🍿", "label": "Popcorn" },
      { "id": "dist_2_3", "type": "emoji", "value": "🥨", "label": "Pretzel" },
      { "id": "dist_2_4", "type": "emoji", "value": "🌮", "label": "Taco" },
      { "id": "dist_2_5", "type": "emoji", "value": "🍩", "label": "Donut" },
      { "id": "dist_2_6", "type": "emoji", "value": "🍦", "label": "Ice Cream" },
      { "id": "dist_2_7", "type": "emoji", "value": "🧁", "label": "Cupcake" },
      { "id": "dist_2_8", "type": "emoji", "value": "⚽", "label": "Soccer" },
      { "id": "dist_2_9", "type": "emoji", "value": "🏀", "label": "Basketball" },
      { "id": "dist_2_10", "type": "emoji", "value": "🏈", "label": "Football" },
      { "id": "dist_2_11", "type": "emoji", "value": "⚾", "label": "Baseball" },
      { "id": "dist_2_12", "type": "emoji", "value": "🎾", "label": "Tennis" },
      { "id": "dist_2_13", "type": "emoji", "value": "🏐", "label": "Volleyball" },
      { "id": "dist_2_14", "type": "emoji", "value": "🎳", "label": "Bowling" },
      { "id": "dist_2_15", "type": "emoji", "value": "🏓", "label": "Ping Pong" },
      { "id": "dist_2_16", "type": "emoji", "value": "🛹", "label": "Skateboard" },
      { "id": "dist_2_17", "type": "emoji", "value": "🎲", "label": "Dice" },
      { "id": "dist_2_18", "type": "emoji", "value": "🪁", "label": "Kite" },
      { "id": "dist_2_19", "type": "emoji", "value": "🪀", "label": "Yo-Yo" },
      { "id": "dist_2_20", "type": "emoji", "value": "🐶", "label": "Dog" },
      { "id": "dist_2_21", "type": "emoji", "value": "🐱", "label": "Cat" },
      { "id": "dist_2_22", "type": "emoji", "value": "🦁", "label": "Lion" },
      { "id": "dist_2_23", "type": "emoji", "value": "🐯", "label": "Tiger" },
      { "id": "dist_2_24", "type": "emoji", "value": "🐻", "label": "Bear" },
      { "id": "dist_2_25", "type": "emoji", "value": "🐼", "label": "Panda" },
      { "id": "dist_2_26", "type": "emoji", "value": "🦊", "label": "Fox" },
      { "id": "dist_2_27", "type": "emoji", "value": "🐰", "label": "Rabbit" },
      { "id": "dist_2_28", "type": "emoji", "value": "🚀", "label": "Rocket" },
      { "id": "dist_2_29", "type": "emoji", "value": "🛸", "label": "UFO" },
      { "id": "dist_2_30", "type": "emoji", "value": "🎸", "label": "Guitar" }
    ]
  },
  {
    "id": "m3",
    "name": "Parth Shah",
    "category": "Plywood & Laminates",
    "company": "Shah Plywoods",
    "targetIcons": [
      {
        "id": "t3_1",
        "type": "emoji",
        "value": "🪵",
        "label": "Wood"
      },
      {
        "id": "t3_2",
        "type": "emoji",
        "value": "🪑",
        "label": "Chair"
      },
      {
        "id": "t3_3",
        "type": "emoji",
        "value": "🪓",
        "label": "Timber & Lumber"
      },
      {
        "id": "t3_5",
        "type": "lucide",
        "value": "Ruler",
        "label": "Sheet Measurement"
      },
      {
        "id": "t3_6",
        "type": "emoji",
        "value": "🔨",
        "label": "Hammer"
      },
      {
        "id": "t3_8",
        "type": "emoji",
        "value": "🛋️",
        "label": "Couch"
      },
      {
        "id": "t3_10",
        "type": "emoji",
        "value": "🪚",
        "label": "Saw"
      },
      {
        "id": "custom_1785921382513",
        "type": "emoji",
        "value": "🌳",
        "label": "Custom Emoji"
      },
      {
        "id": "emoji_1785921409751_2",
        "type": "emoji",
        "value": "🏠"
      },
      {
        "id": "emoji_1785921456332_19",
        "type": "emoji",
        "value": "🏢"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_3_1",
        "type": "emoji",
        "value": "🎳",
        "label": "Bowling"
      },
      {
        "id": "dist_3_2",
        "type": "emoji",
        "value": "🏓",
        "label": "Ping Pong"
      },
      {
        "id": "dist_3_3",
        "type": "emoji",
        "value": "🛹",
        "label": "Skateboard"
      },
      {
        "id": "dist_3_4",
        "type": "emoji",
        "value": "🎯",
        "label": "Darts"
      },
      {
        "id": "dist_3_5",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      },
      {
        "id": "dist_3_6",
        "type": "lucide",
        "value": "Gamepad2",
        "label": "Gamepad"
      },
      {
        "id": "dist_3_7",
        "type": "emoji",
        "value": "🧩",
        "label": "Puzzle"
      },
      {
        "id": "dist_3_8",
        "type": "emoji",
        "value": "🪁",
        "label": "Kite"
      },
      {
        "id": "dist_3_9",
        "type": "emoji",
        "value": "🪀",
        "label": "Yo-Yo"
      },
      {
        "id": "dist_3_10",
        "type": "emoji",
        "value": "🐶",
        "label": "Dog"
      },
      {
        "id": "dist_3_11",
        "type": "emoji",
        "value": "🐱",
        "label": "Cat"
      },
      {
        "id": "dist_3_12",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion"
      },
      {
        "id": "dist_3_13",
        "type": "emoji",
        "value": "🐯",
        "label": "Tiger"
      },
      {
        "id": "dist_3_14",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_3_15",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_3_16",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_3_17",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_3_18",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_3_19",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_3_20",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_3_21",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_3_22",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_3_23",
        "type": "emoji",
        "value": "🦋",
        "label": "Butterfly"
      },
      {
        "id": "dist_3_24",
        "type": "emoji",
        "value": "🐝",
        "label": "Bee"
      },
      {
        "id": "dist_3_25",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_3_26",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_3_27",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_3_28",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_3_29",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_3_30",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      }
    ]
  },
  {
    "id": "m4",
    "name": "Mohit Kapoor",
    "category": "Mutual Funds",
    "company": "Kapoor Investments",
    "targetIcons": [
      {
        "id": "t4_1",
        "type": "emoji",
        "value": "📈",
        "label": "Growth"
      },
      {
        "id": "t4_2",
        "type": "emoji",
        "value": "💰",
        "label": "Money"
      },
      {
        "id": "t4_3",
        "type": "emoji",
        "value": "💵",
        "label": "Cash"
      },
      {
        "id": "t4_4",
        "type": "lucide",
        "value": "TrendingUp",
        "label": "Trend"
      },
      {
        "id": "t4_5",
        "type": "lucide",
        "value": "PiggyBank",
        "label": "Savings"
      },
      {
        "id": "t4_6",
        "type": "lucide",
        "value": "DollarSign",
        "label": "Dollar"
      },
      {
        "id": "t4_7",
        "type": "emoji",
        "value": "🏦",
        "label": "Bank"
      },
      {
        "id": "t4_10",
        "type": "lucide",
        "value": "Wallet",
        "label": "Wallet"
      },
      {
        "id": "custom_1785921534100",
        "type": "emoji",
        "value": "🪙",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785921576888",
        "type": "emoji",
        "value": "💸",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_4_1",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_4_2",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_4_3",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_4_4",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_4_5",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_4_6",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_4_7",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_4_8",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_4_9",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_4_10",
        "type": "emoji",
        "value": "🦋",
        "label": "Butterfly"
      },
      {
        "id": "dist_4_11",
        "type": "emoji",
        "value": "🐝",
        "label": "Bee"
      },
      {
        "id": "dist_4_12",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_4_13",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_4_14",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_4_15",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_4_16",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_4_17",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_4_18",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_4_19",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_4_20",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_4_21",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "dist_4_22",
        "type": "emoji",
        "value": "👻",
        "label": "Ghost"
      },
      {
        "id": "dist_4_23",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_4_24",
        "type": "emoji",
        "value": "🪐",
        "label": "Planet"
      },
      {
        "id": "dist_4_25",
        "type": "emoji",
        "value": "🌕",
        "label": "Full Moon"
      },
      {
        "id": "dist_4_26",
        "type": "emoji",
        "value": "☄️",
        "label": "Comet"
      },
      {
        "id": "dist_4_27",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_4_28",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_4_29",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_4_30",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      }
    ]
  },
  {
    "id": "m5",
    "name": "Gireesh Vispute",
    "category": "Interior Designer – Residential",
    "company": "Vispute Design Studio",
    "targetIcons": [
      {
        "id": "t5_1",
        "type": "emoji",
        "value": "🛋️",
        "label": "Sofa"
      },
      {
        "id": "t5_2",
        "type": "emoji",
        "value": "🏠",
        "label": "Home"
      },
      {
        "id": "t5_3",
        "type": "emoji",
        "value": "🛏️",
        "label": "Bed"
      },
      {
        "id": "t5_4",
        "type": "lucide",
        "value": "Home",
        "label": "Home"
      },
      {
        "id": "t5_5",
        "type": "lucide",
        "value": "Paintbrush",
        "label": "Paint"
      },
      {
        "id": "t5_6",
        "type": "lucide",
        "value": "Lamp",
        "label": "Lighting"
      },
      {
        "id": "t5_7",
        "type": "emoji",
        "value": "🖼️",
        "label": "Decor"
      },
      {
        "id": "t5_9",
        "type": "emoji",
        "value": "🪴",
        "label": "Plant"
      },
      {
        "id": "emoji_1785921625005_6",
        "type": "emoji",
        "value": "🧱"
      },
      {
        "id": "custom_1785921660716",
        "type": "emoji",
        "value": "🪑",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_5_1",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_5_2",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_5_3",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_5_4",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_5_5",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_5_6",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_5_7",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_5_8",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "dist_5_9",
        "type": "emoji",
        "value": "👻",
        "label": "Ghost"
      },
      {
        "id": "dist_5_10",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_5_11",
        "type": "emoji",
        "value": "🪐",
        "label": "Planet"
      },
      {
        "id": "dist_5_12",
        "type": "emoji",
        "value": "🌕",
        "label": "Full Moon"
      },
      {
        "id": "dist_5_13",
        "type": "emoji",
        "value": "☄️",
        "label": "Comet"
      },
      {
        "id": "dist_5_14",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_5_15",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_5_16",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_5_17",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_5_18",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_5_19",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_5_20",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_5_21",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      },
      {
        "id": "dist_5_22",
        "type": "emoji",
        "value": "🎺",
        "label": "Trumpet"
      },
      {
        "id": "dist_5_23",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "dist_5_24",
        "type": "emoji",
        "value": "🎤",
        "label": "Microphone"
      },
      {
        "id": "dist_5_25",
        "type": "lucide",
        "value": "Headphones",
        "label": "Audio"
      },
      {
        "id": "dist_5_26",
        "type": "emoji",
        "value": "🌵",
        "label": "Cactus"
      },
      {
        "id": "dist_5_27",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_5_28",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_5_29",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_5_30",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      }
    ]
  },
  {
    "id": "m6",
    "name": "KD Gaikwad",
    "category": "Advocate – Conveyance",
    "company": "Gaikwad Legal",
    "targetIcons": [
      {
        "id": "t6_1",
        "type": "emoji",
        "value": "⚖️",
        "label": "Scales"
      },
      {
        "id": "t6_2",
        "type": "emoji",
        "value": "📜",
        "label": "Deed"
      },
      {
        "id": "t6_3",
        "type": "emoji",
        "value": "🏛️",
        "label": "Court"
      },
      {
        "id": "t6_4",
        "type": "lucide",
        "value": "Scale",
        "label": "Law"
      },
      {
        "id": "t6_5",
        "type": "lucide",
        "value": "FileText",
        "label": "Document"
      },
      {
        "id": "t6_6",
        "type": "lucide",
        "value": "Stamp",
        "label": "Registration"
      },
      {
        "id": "t6_7",
        "type": "emoji",
        "value": "✒️",
        "label": "Signature"
      },
      {
        "id": "t6_8",
        "type": "lucide",
        "value": "Shield",
        "label": "Protection"
      },
      {
        "id": "t6_9",
        "type": "emoji",
        "value": "🔑",
        "label": "Property Title"
      },
      {
        "id": "t6_10",
        "type": "lucide",
        "value": "Key",
        "label": "Key"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_6_1",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_6_2",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_6_3",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_6_4",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_6_5",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_6_6",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_6_7",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_6_8",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      },
      {
        "id": "dist_6_9",
        "type": "emoji",
        "value": "🎺",
        "label": "Trumpet"
      },
      {
        "id": "dist_6_10",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "dist_6_11",
        "type": "emoji",
        "value": "🎤",
        "label": "Microphone"
      },
      {
        "id": "dist_6_12",
        "type": "lucide",
        "value": "Headphones",
        "label": "Audio"
      },
      {
        "id": "dist_6_13",
        "type": "emoji",
        "value": "🌵",
        "label": "Cactus"
      },
      {
        "id": "dist_6_14",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_6_15",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_6_16",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_6_17",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_6_18",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "dist_6_19",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_6_20",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      },
      {
        "id": "dist_6_21",
        "type": "emoji",
        "value": "🏔️",
        "label": "Mountain"
      },
      {
        "id": "dist_6_22",
        "type": "lucide",
        "value": "Cookie",
        "label": "Cookie"
      },
      {
        "id": "dist_6_23",
        "type": "lucide",
        "value": "Tent",
        "label": "Tent"
      },
      {
        "id": "dist_6_24",
        "type": "lucide",
        "value": "Sun",
        "label": "Sunlight"
      },
      {
        "id": "dist_6_25",
        "type": "lucide",
        "value": "CloudRain",
        "label": "Rain Cloud"
      },
      {
        "id": "dist_6_26",
        "type": "emoji",
        "value": "🍎",
        "label": "Apple"
      },
      {
        "id": "dist_6_27",
        "type": "emoji",
        "value": "🍌",
        "label": "Banana"
      },
      {
        "id": "dist_6_28",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_6_29",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_6_30",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      }
    ]
  },
  {
    "id": "m7",
    "name": "Shraddha More",
    "category": "Architect – Residential",
    "company": "More Architects",
    "targetIcons": [
      {
        "id": "t7_1",
        "type": "emoji",
        "value": "📐",
        "label": "Blueprint"
      },
      {
        "id": "t7_2",
        "type": "emoji",
        "value": "🏡",
        "label": "Bungalow"
      },
      {
        "id": "t7_3",
        "type": "emoji",
        "value": "🏢",
        "label": "Architecture"
      },
      {
        "id": "t7_4",
        "type": "lucide",
        "value": "Ruler",
        "label": "Ruler"
      },
      {
        "id": "t7_5",
        "type": "lucide",
        "value": "Compass",
        "label": "Plan"
      },
      {
        "id": "t7_7",
        "type": "emoji",
        "value": "✏️",
        "label": "Pencil"
      },
      {
        "id": "t7_8",
        "type": "lucide",
        "value": "PenTool",
        "label": "Draft"
      },
      {
        "id": "t7_9",
        "type": "emoji",
        "value": "🏛️",
        "label": "Design"
      },
      {
        "id": "t7_10",
        "type": "lucide",
        "value": "Home",
        "label": "Residence"
      },
      {
        "id": "emoji_1785921755150_6",
        "type": "emoji",
        "value": "🧱"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_7_1",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_7_2",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_7_3",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_7_4",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_7_5",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "dist_7_6",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_7_7",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      },
      {
        "id": "dist_7_8",
        "type": "emoji",
        "value": "🏔️",
        "label": "Mountain"
      },
      {
        "id": "dist_7_9",
        "type": "lucide",
        "value": "Cookie",
        "label": "Cookie"
      },
      {
        "id": "dist_7_10",
        "type": "lucide",
        "value": "Tent",
        "label": "Tent"
      },
      {
        "id": "dist_7_11",
        "type": "lucide",
        "value": "Sun",
        "label": "Sunlight"
      },
      {
        "id": "dist_7_12",
        "type": "lucide",
        "value": "CloudRain",
        "label": "Rain Cloud"
      },
      {
        "id": "dist_7_13",
        "type": "emoji",
        "value": "🍎",
        "label": "Apple"
      },
      {
        "id": "dist_7_14",
        "type": "emoji",
        "value": "🍌",
        "label": "Banana"
      },
      {
        "id": "dist_7_15",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_7_16",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_7_17",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_7_18",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      },
      {
        "id": "dist_7_19",
        "type": "emoji",
        "value": "🍍",
        "label": "Pineapple"
      },
      {
        "id": "dist_7_20",
        "type": "emoji",
        "value": "🥑",
        "label": "Avocado"
      },
      {
        "id": "dist_7_21",
        "type": "emoji",
        "value": "🍑",
        "label": "Peach"
      },
      {
        "id": "dist_7_22",
        "type": "emoji",
        "value": "🍋",
        "label": "Lemon"
      },
      {
        "id": "dist_7_23",
        "type": "emoji",
        "value": "🍕",
        "label": "Pizza"
      },
      {
        "id": "dist_7_24",
        "type": "emoji",
        "value": "🍔",
        "label": "Burger"
      },
      {
        "id": "dist_7_25",
        "type": "emoji",
        "value": "🍟",
        "label": "Fries"
      },
      {
        "id": "dist_7_26",
        "type": "emoji",
        "value": "🌭",
        "label": "Hotdog"
      },
      {
        "id": "dist_7_27",
        "type": "emoji",
        "value": "🍿",
        "label": "Popcorn"
      },
      {
        "id": "dist_7_28",
        "type": "emoji",
        "value": "🥨",
        "label": "Pretzel"
      },
      {
        "id": "dist_7_29",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_7_30",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      }
    ]
  },
  {
    "id": "m8",
    "name": "Bhushan Suthar",
    "category": "Modular Furniture",
    "company": "Suthar Modulars",
    "targetIcons": [
      {
        "id": "t8_1",
        "type": "emoji",
        "value": "🪑",
        "label": "Modular Chair"
      },
      {
        "id": "t8_2",
        "type": "emoji",
        "value": "🛋️",
        "label": "Modular Sofa"
      },
      {
        "id": "t8_3",
        "type": "emoji",
        "value": "🗄️",
        "label": "Cabinet"
      },
      {
        "id": "t8_4",
        "type": "lucide",
        "value": "Box",
        "label": "Modular Unit"
      },
      {
        "id": "t8_5",
        "type": "lucide",
        "value": "Grid",
        "label": "Grid"
      },
      {
        "id": "t8_7",
        "type": "emoji",
        "value": "🚪",
        "label": "Wardrobe"
      },
      {
        "id": "t8_8",
        "type": "lucide",
        "value": "Wrench",
        "label": "Setup"
      },
      {
        "id": "t8_9",
        "type": "emoji",
        "value": "🛏️",
        "label": "Modular Bed"
      },
      {
        "id": "emoji_1785921857540_5",
        "type": "emoji",
        "value": "🛠️"
      },
      {
        "id": "emoji_1785921874392_11",
        "type": "emoji",
        "value": "📐"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_8_1",
        "type": "emoji",
        "value": "🍌",
        "label": "Banana"
      },
      {
        "id": "dist_8_2",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_8_3",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_8_4",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_8_5",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      },
      {
        "id": "dist_8_6",
        "type": "emoji",
        "value": "🍍",
        "label": "Pineapple"
      },
      {
        "id": "dist_8_7",
        "type": "emoji",
        "value": "🥑",
        "label": "Avocado"
      },
      {
        "id": "dist_8_8",
        "type": "emoji",
        "value": "🍑",
        "label": "Peach"
      },
      {
        "id": "dist_8_9",
        "type": "emoji",
        "value": "🍋",
        "label": "Lemon"
      },
      {
        "id": "dist_8_10",
        "type": "emoji",
        "value": "🍕",
        "label": "Pizza"
      },
      {
        "id": "dist_8_11",
        "type": "emoji",
        "value": "🍔",
        "label": "Burger"
      },
      {
        "id": "dist_8_12",
        "type": "emoji",
        "value": "🍟",
        "label": "Fries"
      },
      {
        "id": "dist_8_13",
        "type": "emoji",
        "value": "🌭",
        "label": "Hotdog"
      },
      {
        "id": "dist_8_14",
        "type": "emoji",
        "value": "🍿",
        "label": "Popcorn"
      },
      {
        "id": "dist_8_15",
        "type": "emoji",
        "value": "🥨",
        "label": "Pretzel"
      },
      {
        "id": "dist_8_16",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_8_17",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "dist_8_18",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      },
      {
        "id": "dist_8_19",
        "type": "emoji",
        "value": "🧁",
        "label": "Cupcake"
      },
      {
        "id": "dist_8_20",
        "type": "emoji",
        "value": "⚽",
        "label": "Soccer"
      },
      {
        "id": "dist_8_21",
        "type": "emoji",
        "value": "🏀",
        "label": "Basketball"
      },
      {
        "id": "dist_8_22",
        "type": "emoji",
        "value": "🏈",
        "label": "Football"
      },
      {
        "id": "dist_8_23",
        "type": "emoji",
        "value": "⚾",
        "label": "Baseball"
      },
      {
        "id": "dist_8_24",
        "type": "emoji",
        "value": "🎾",
        "label": "Tennis"
      },
      {
        "id": "dist_8_25",
        "type": "emoji",
        "value": "🏐",
        "label": "Volleyball"
      },
      {
        "id": "dist_8_26",
        "type": "emoji",
        "value": "🎳",
        "label": "Bowling"
      },
      {
        "id": "dist_8_27",
        "type": "emoji",
        "value": "🏓",
        "label": "Ping Pong"
      },
      {
        "id": "dist_8_28",
        "type": "emoji",
        "value": "🛹",
        "label": "Skateboard"
      },
      {
        "id": "dist_8_29",
        "type": "emoji",
        "value": "🎯",
        "label": "Darts"
      },
      {
        "id": "dist_8_30",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      }
    ]
  },
  {
    "id": "m9",
    "name": "Sidharth Gokhale",
    "category": "Vintage Furniture",
    "company": "Gokhale Antiques",
    "targetIcons": [
      {
        "id": "t9_1",
        "type": "emoji",
        "value": "🕰️",
        "label": "Vintage Clock"
      },
      {
        "id": "t9_2",
        "type": "emoji",
        "value": "🏺",
        "label": "Antique Vase"
      },
      {
        "id": "t9_3",
        "type": "emoji",
        "value": "🛋️",
        "label": "Classic Sofa"
      },
      {
        "id": "t9_4",
        "type": "lucide",
        "value": "Clock",
        "label": "Antique"
      },
      {
        "id": "t9_6",
        "type": "emoji",
        "value": "🗝️",
        "label": "Old Key"
      },
      {
        "id": "t9_10",
        "type": "emoji",
        "value": "🖼️",
        "label": "Vintage Frame"
      },
      {
        "id": "custom_1785921987007",
        "type": "emoji",
        "value": "🪑",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785922177176",
        "type": "emoji",
        "value": "🪞",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785922204878",
        "type": "emoji",
        "value": "🪵",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785922315071",
        "type": "emoji",
        "value": "🛏️",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_9_1",
        "type": "emoji",
        "value": "🍿",
        "label": "Popcorn"
      },
      {
        "id": "dist_9_2",
        "type": "emoji",
        "value": "🥨",
        "label": "Pretzel"
      },
      {
        "id": "dist_9_3",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_9_4",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "dist_9_5",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      },
      {
        "id": "dist_9_6",
        "type": "emoji",
        "value": "🧁",
        "label": "Cupcake"
      },
      {
        "id": "dist_9_7",
        "type": "emoji",
        "value": "⚽",
        "label": "Soccer"
      },
      {
        "id": "dist_9_8",
        "type": "emoji",
        "value": "🏀",
        "label": "Basketball"
      },
      {
        "id": "dist_9_9",
        "type": "emoji",
        "value": "🏈",
        "label": "Football"
      },
      {
        "id": "dist_9_10",
        "type": "emoji",
        "value": "⚾",
        "label": "Baseball"
      },
      {
        "id": "dist_9_11",
        "type": "emoji",
        "value": "🎾",
        "label": "Tennis"
      },
      {
        "id": "dist_9_12",
        "type": "emoji",
        "value": "🏐",
        "label": "Volleyball"
      },
      {
        "id": "dist_9_13",
        "type": "emoji",
        "value": "🎳",
        "label": "Bowling"
      },
      {
        "id": "dist_9_14",
        "type": "emoji",
        "value": "🏓",
        "label": "Ping Pong"
      },
      {
        "id": "dist_9_15",
        "type": "emoji",
        "value": "🛹",
        "label": "Skateboard"
      },
      {
        "id": "dist_9_16",
        "type": "emoji",
        "value": "🎯",
        "label": "Darts"
      },
      {
        "id": "dist_9_17",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      },
      {
        "id": "dist_9_18",
        "type": "lucide",
        "value": "Gamepad2",
        "label": "Gamepad"
      },
      {
        "id": "dist_9_19",
        "type": "emoji",
        "value": "🧩",
        "label": "Puzzle"
      },
      {
        "id": "dist_9_20",
        "type": "emoji",
        "value": "🪁",
        "label": "Kite"
      },
      {
        "id": "dist_9_21",
        "type": "emoji",
        "value": "🪀",
        "label": "Yo-Yo"
      },
      {
        "id": "dist_9_22",
        "type": "emoji",
        "value": "🐶",
        "label": "Dog"
      },
      {
        "id": "dist_9_23",
        "type": "emoji",
        "value": "🐱",
        "label": "Cat"
      },
      {
        "id": "dist_9_24",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion"
      },
      {
        "id": "dist_9_25",
        "type": "emoji",
        "value": "🐯",
        "label": "Tiger"
      },
      {
        "id": "dist_9_26",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_9_27",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_9_28",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_9_29",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_9_30",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      }
    ]
  },
  {
    "id": "m10",
    "name": "Rushikesh Shukale",
    "category": "Glass Facades",
    "company": "Shukale Glass",
    "targetIcons": [
      {
        "id": "t10_1",
        "type": "emoji",
        "value": "🪟",
        "label": "Glass Window"
      },
      {
        "id": "t10_2",
        "type": "emoji",
        "value": "🏙️",
        "label": "Glass Skyscraper"
      },
      {
        "id": "t10_3",
        "type": "emoji",
        "value": "🏢",
        "label": "Commercial Complex"
      },
      {
        "id": "t10_4",
        "type": "lucide",
        "value": "Building2",
        "label": "Facade"
      },
      {
        "id": "t10_6",
        "type": "lucide",
        "value": "Shield",
        "label": "Safety Glass"
      },
      {
        "id": "t10_7",
        "type": "emoji",
        "value": "✨",
        "label": "Reflective"
      },
      {
        "id": "t10_9",
        "type": "emoji",
        "value": "💎",
        "label": "Crystal Glass"
      },
      {
        "id": "custom_1785922511604",
        "type": "emoji",
        "value": "📐",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785922537149",
        "type": "emoji",
        "value": "📏",
        "label": "Custom Emoji"
      },
      {
        "id": "emoji_1785922647826_22",
        "type": "emoji",
        "value": "🏬"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_10_1",
        "type": "emoji",
        "value": "🏓",
        "label": "Ping Pong"
      },
      {
        "id": "dist_10_2",
        "type": "emoji",
        "value": "🛹",
        "label": "Skateboard"
      },
      {
        "id": "dist_10_3",
        "type": "emoji",
        "value": "🎯",
        "label": "Darts"
      },
      {
        "id": "dist_10_4",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      },
      {
        "id": "dist_10_5",
        "type": "lucide",
        "value": "Gamepad2",
        "label": "Gamepad"
      },
      {
        "id": "dist_10_6",
        "type": "emoji",
        "value": "🧩",
        "label": "Puzzle"
      },
      {
        "id": "dist_10_7",
        "type": "emoji",
        "value": "🪁",
        "label": "Kite"
      },
      {
        "id": "dist_10_8",
        "type": "emoji",
        "value": "🪀",
        "label": "Yo-Yo"
      },
      {
        "id": "dist_10_9",
        "type": "emoji",
        "value": "🐶",
        "label": "Dog"
      },
      {
        "id": "dist_10_10",
        "type": "emoji",
        "value": "🐱",
        "label": "Cat"
      },
      {
        "id": "dist_10_11",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion"
      },
      {
        "id": "dist_10_12",
        "type": "emoji",
        "value": "🐯",
        "label": "Tiger"
      },
      {
        "id": "dist_10_13",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_10_14",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_10_15",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_10_16",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_10_17",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_10_18",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_10_19",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_10_20",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_10_21",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_10_22",
        "type": "emoji",
        "value": "🦋",
        "label": "Butterfly"
      },
      {
        "id": "dist_10_23",
        "type": "emoji",
        "value": "🐝",
        "label": "Bee"
      },
      {
        "id": "dist_10_24",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_10_25",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_10_26",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_10_27",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_10_28",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_10_29",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_10_30",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      }
    ]
  },
  {
    "id": "m11",
    "name": "Sachin Palke",
    "category": "Virtual CFO",
    "company": "Palke Advisory",
    "targetIcons": [
      {
        "id": "t11_1",
        "type": "emoji",
        "value": "💼",
        "label": "Executive CFO"
      },
      {
        "id": "t11_2",
        "type": "emoji",
        "value": "📊",
        "label": "Financial Analytics"
      },
      {
        "id": "t11_3",
        "type": "emoji",
        "value": "💻",
        "label": "Virtual CFO"
      },
      {
        "id": "t11_4",
        "type": "lucide",
        "value": "Calculator",
        "label": "Financial Planning"
      },
      {
        "id": "t11_5",
        "type": "lucide",
        "value": "TrendingUp",
        "label": "Corporate Growth"
      },
      {
        "id": "t11_6",
        "type": "lucide",
        "value": "Briefcase",
        "label": "Corporate"
      },
      {
        "id": "t11_7",
        "type": "emoji",
        "value": "💰",
        "label": "Capital Control"
      },
      {
        "id": "t11_8",
        "type": "lucide",
        "value": "PieChart",
        "label": "Budget"
      },
      {
        "id": "t11_9",
        "type": "emoji",
        "value": "🧠",
        "label": "Strategy"
      },
      {
        "id": "t11_10",
        "type": "lucide",
        "value": "ShieldCheck",
        "label": "Compliance"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_11_1",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_11_2",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_11_3",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_11_4",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_11_5",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_11_6",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_11_7",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_11_8",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_11_9",
        "type": "emoji",
        "value": "🦋",
        "label": "Butterfly"
      },
      {
        "id": "dist_11_10",
        "type": "emoji",
        "value": "🐝",
        "label": "Bee"
      },
      {
        "id": "dist_11_11",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_11_12",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_11_13",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_11_14",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_11_15",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_11_16",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_11_17",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_11_18",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_11_19",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_11_20",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "dist_11_21",
        "type": "emoji",
        "value": "👻",
        "label": "Ghost"
      },
      {
        "id": "dist_11_22",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_11_23",
        "type": "emoji",
        "value": "🪐",
        "label": "Planet"
      },
      {
        "id": "dist_11_24",
        "type": "emoji",
        "value": "🌕",
        "label": "Full Moon"
      },
      {
        "id": "dist_11_25",
        "type": "emoji",
        "value": "☄️",
        "label": "Comet"
      },
      {
        "id": "dist_11_26",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_11_27",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_11_28",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_11_29",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_11_30",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      }
    ]
  },
  {
    "id": "m12",
    "name": "Nupur Thakur",
    "category": "Soft Furnishings",
    "company": "Thakur Drapes",
    "targetIcons": [
      {
        "id": "t12_1",
        "type": "emoji",
        "value": "🪟",
        "label": "Curtain"
      },
      {
        "id": "t12_2",
        "type": "emoji",
        "value": "🛏️",
        "label": "Linens"
      },
      {
        "id": "t12_3",
        "type": "emoji",
        "value": "🛋️",
        "label": "Cushions"
      },
      {
        "id": "t12_5",
        "type": "lucide",
        "value": "Scissors",
        "label": "Custom Tailor"
      },
      {
        "id": "t12_6",
        "type": "lucide",
        "value": "Sparkles",
        "label": "Elegance"
      },
      {
        "id": "t12_7",
        "type": "emoji",
        "value": "🎨",
        "label": "Textile Pattern"
      },
      {
        "id": "t12_9",
        "type": "emoji",
        "value": "🧵",
        "label": "Thread"
      },
      {
        "id": "custom_1785922735427",
        "type": "emoji",
        "value": "🪡",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785922864615",
        "type": "emoji",
        "value": "✂️",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785923458654",
        "type": "emoji",
        "value": "🏠",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_12_1",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_12_2",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_12_3",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_12_4",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_12_5",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_12_6",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_12_7",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "dist_12_8",
        "type": "emoji",
        "value": "👻",
        "label": "Ghost"
      },
      {
        "id": "dist_12_9",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_12_10",
        "type": "emoji",
        "value": "🪐",
        "label": "Planet"
      },
      {
        "id": "dist_12_12",
        "type": "emoji",
        "value": "☄️",
        "label": "Comet"
      },
      {
        "id": "dist_12_13",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_12_14",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_12_15",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_12_17",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_12_18",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_12_19",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_12_20",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      },
      {
        "id": "dist_12_21",
        "type": "emoji",
        "value": "🎺",
        "label": "Trumpet"
      },
      {
        "id": "dist_12_22",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "dist_12_23",
        "type": "emoji",
        "value": "🎤",
        "label": "Microphone"
      },
      {
        "id": "dist_12_24",
        "type": "lucide",
        "value": "Headphones",
        "label": "Audio"
      },
      {
        "id": "dist_12_25",
        "type": "emoji",
        "value": "🌵",
        "label": "Cactus"
      },
      {
        "id": "dist_12_26",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_12_27",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_12_29",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_12_30",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "custom_1785923507979",
        "type": "emoji",
        "value": "🍇",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785923545959",
        "type": "emoji",
        "value": "🍉",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785923587190",
        "type": "emoji",
        "value": "🐒",
        "label": "Custom Emoji"
      }
    ]
  },
  {
    "id": "m13",
    "name": "Yash Jagtap",
    "category": "General Insurance",
    "company": "Jagtap Risk Advisors",
    "targetIcons": [
      {
        "id": "t13_1",
        "type": "emoji",
        "value": "🛡️",
        "label": "Protection Shield"
      },
      {
        "id": "t13_2",
        "type": "emoji",
        "value": "🚗",
        "label": "Motor Insurance"
      },
      {
        "id": "t13_3",
        "type": "emoji",
        "value": "🏢",
        "label": "Business Insurance"
      },
      {
        "id": "t13_4",
        "type": "lucide",
        "value": "ShieldCheck",
        "label": "Covered"
      },
      {
        "id": "t13_5",
        "type": "lucide",
        "value": "Car",
        "label": "Auto Insurance"
      },
      {
        "id": "t13_9",
        "type": "emoji",
        "value": "🏠",
        "label": "Property Policy"
      },
      {
        "id": "custom_1785923675428",
        "type": "emoji",
        "value": "📋",
        "label": "Custom Emoji"
      },
      {
        "id": "lucide_1785923692131_1",
        "type": "lucide",
        "value": "Home",
        "label": "Home"
      },
      {
        "id": "emoji_1785923716287_27",
        "type": "emoji",
        "value": "💵"
      },
      {
        "id": "emoji_1785923738650_29",
        "type": "emoji",
        "value": "🏛️"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_13_1",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_13_2",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_13_3",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_13_4",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_13_5",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_13_6",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_13_7",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      },
      {
        "id": "dist_13_8",
        "type": "emoji",
        "value": "🎺",
        "label": "Trumpet"
      },
      {
        "id": "dist_13_9",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "dist_13_10",
        "type": "emoji",
        "value": "🎤",
        "label": "Microphone"
      },
      {
        "id": "dist_13_11",
        "type": "lucide",
        "value": "Headphones",
        "label": "Audio"
      },
      {
        "id": "dist_13_12",
        "type": "emoji",
        "value": "🌵",
        "label": "Cactus"
      },
      {
        "id": "dist_13_13",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_13_14",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_13_15",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_13_16",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_13_17",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "dist_13_18",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_13_19",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      },
      {
        "id": "dist_13_20",
        "type": "emoji",
        "value": "🏔️",
        "label": "Mountain"
      },
      {
        "id": "dist_13_21",
        "type": "lucide",
        "value": "Cookie",
        "label": "Cookie"
      },
      {
        "id": "dist_13_22",
        "type": "lucide",
        "value": "Tent",
        "label": "Tent"
      },
      {
        "id": "dist_13_23",
        "type": "lucide",
        "value": "Sun",
        "label": "Sunlight"
      },
      {
        "id": "dist_13_24",
        "type": "lucide",
        "value": "CloudRain",
        "label": "Rain Cloud"
      },
      {
        "id": "dist_13_25",
        "type": "emoji",
        "value": "🍎",
        "label": "Apple"
      },
      {
        "id": "dist_13_26",
        "type": "emoji",
        "value": "🍌",
        "label": "Banana"
      },
      {
        "id": "dist_13_27",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_13_28",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_13_29",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_13_30",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      }
    ]
  },
  {
    "id": "m14",
    "name": "Chaitanya Gadre",
    "category": "Advocate – Civil Law",
    "company": "Gadre Legal Chambers",
    "targetIcons": [
      {
        "id": "t14_1",
        "type": "emoji",
        "value": "⚖️",
        "label": "Civil Law"
      },
      {
        "id": "t14_2",
        "type": "emoji",
        "value": "📜",
        "label": "Contract"
      },
      {
        "id": "t14_3",
        "type": "emoji",
        "value": "🏛️",
        "label": "High Court"
      },
      {
        "id": "t14_4",
        "type": "lucide",
        "value": "Scale",
        "label": "Justice"
      },
      {
        "id": "t14_5",
        "type": "lucide",
        "value": "FileText",
        "label": "Litigation"
      },
      {
        "id": "t14_6",
        "type": "lucide",
        "value": "Gavel",
        "label": "Gavel"
      },
      {
        "id": "t14_7",
        "type": "emoji",
        "value": "🖊️",
        "label": "Legal Agreement"
      },
      {
        "id": "t14_8",
        "type": "lucide",
        "value": "Shield",
        "label": "Advocate"
      },
      {
        "id": "t14_9",
        "type": "emoji",
        "value": "💼",
        "label": "Chambers"
      },
      {
        "id": "t14_10",
        "type": "lucide",
        "value": "BookOpen",
        "label": "Law Book"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_14_1",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_14_2",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_14_3",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_14_4",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "dist_14_5",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_14_6",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      },
      {
        "id": "dist_14_7",
        "type": "emoji",
        "value": "🏔️",
        "label": "Mountain"
      },
      {
        "id": "dist_14_8",
        "type": "lucide",
        "value": "Cookie",
        "label": "Cookie"
      },
      {
        "id": "dist_14_9",
        "type": "lucide",
        "value": "Tent",
        "label": "Tent"
      },
      {
        "id": "dist_14_10",
        "type": "lucide",
        "value": "Sun",
        "label": "Sunlight"
      },
      {
        "id": "dist_14_11",
        "type": "lucide",
        "value": "CloudRain",
        "label": "Rain Cloud"
      },
      {
        "id": "dist_14_12",
        "type": "emoji",
        "value": "🍎",
        "label": "Apple"
      },
      {
        "id": "dist_14_13",
        "type": "emoji",
        "value": "🍌",
        "label": "Banana"
      },
      {
        "id": "dist_14_14",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_14_15",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_14_16",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_14_17",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      },
      {
        "id": "dist_14_18",
        "type": "emoji",
        "value": "🍍",
        "label": "Pineapple"
      },
      {
        "id": "dist_14_19",
        "type": "emoji",
        "value": "🥑",
        "label": "Avocado"
      },
      {
        "id": "dist_14_20",
        "type": "emoji",
        "value": "🍑",
        "label": "Peach"
      },
      {
        "id": "dist_14_21",
        "type": "emoji",
        "value": "🍋",
        "label": "Lemon"
      },
      {
        "id": "dist_14_22",
        "type": "emoji",
        "value": "🍕",
        "label": "Pizza"
      },
      {
        "id": "dist_14_23",
        "type": "emoji",
        "value": "🍔",
        "label": "Burger"
      },
      {
        "id": "dist_14_24",
        "type": "emoji",
        "value": "🍟",
        "label": "Fries"
      },
      {
        "id": "dist_14_25",
        "type": "emoji",
        "value": "🌭",
        "label": "Hotdog"
      },
      {
        "id": "dist_14_26",
        "type": "emoji",
        "value": "🍿",
        "label": "Popcorn"
      },
      {
        "id": "dist_14_27",
        "type": "emoji",
        "value": "🥨",
        "label": "Pretzel"
      },
      {
        "id": "dist_14_28",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_14_29",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "dist_14_30",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      }
    ]
  },
  {
    "id": "m15",
    "name": "Pandurang Jorvekar",
    "category": "CA – Audits & Tax",
    "company": "Jorvekar & Associates",
    "targetIcons": [
      {
        "id": "t15_1",
        "type": "emoji",
        "value": "🧾",
        "label": "Tax Audit"
      },
      {
        "id": "t15_2",
        "type": "emoji",
        "value": "📊",
        "label": "Compliance Audit"
      },
      {
        "id": "t15_3",
        "type": "emoji",
        "value": "🏛️",
        "label": "Financial Compliance"
      },
      {
        "id": "t15_4",
        "type": "lucide",
        "value": "Calculator",
        "label": "Tax Calculation"
      },
      {
        "id": "t15_5",
        "type": "lucide",
        "value": "FileCheck",
        "label": "Audit Passed"
      },
      {
        "id": "t15_6",
        "type": "lucide",
        "value": "Receipt",
        "label": "Tax Form"
      },
      {
        "id": "t15_7",
        "type": "emoji",
        "value": "💵",
        "label": "Income Tax"
      },
      {
        "id": "t15_8",
        "type": "lucide",
        "value": "DollarSign",
        "label": "Revenue"
      },
      {
        "id": "t15_9",
        "type": "emoji",
        "value": "🖊️",
        "label": "CA Sign"
      },
      {
        "id": "t15_10",
        "type": "lucide",
        "value": "PieChart",
        "label": "Balances"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_15_1",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_15_2",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_15_3",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_15_4",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      },
      {
        "id": "dist_15_5",
        "type": "emoji",
        "value": "🍍",
        "label": "Pineapple"
      },
      {
        "id": "dist_15_6",
        "type": "emoji",
        "value": "🥑",
        "label": "Avocado"
      },
      {
        "id": "dist_15_7",
        "type": "emoji",
        "value": "🍑",
        "label": "Peach"
      },
      {
        "id": "dist_15_8",
        "type": "emoji",
        "value": "🍋",
        "label": "Lemon"
      },
      {
        "id": "dist_15_9",
        "type": "emoji",
        "value": "🍕",
        "label": "Pizza"
      },
      {
        "id": "dist_15_10",
        "type": "emoji",
        "value": "🍔",
        "label": "Burger"
      },
      {
        "id": "dist_15_11",
        "type": "emoji",
        "value": "🍟",
        "label": "Fries"
      },
      {
        "id": "dist_15_12",
        "type": "emoji",
        "value": "🌭",
        "label": "Hotdog"
      },
      {
        "id": "dist_15_13",
        "type": "emoji",
        "value": "🍿",
        "label": "Popcorn"
      },
      {
        "id": "dist_15_14",
        "type": "emoji",
        "value": "🥨",
        "label": "Pretzel"
      },
      {
        "id": "dist_15_15",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_15_16",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "dist_15_17",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      },
      {
        "id": "dist_15_18",
        "type": "emoji",
        "value": "🧁",
        "label": "Cupcake"
      },
      {
        "id": "dist_15_19",
        "type": "emoji",
        "value": "⚽",
        "label": "Soccer"
      },
      {
        "id": "dist_15_20",
        "type": "emoji",
        "value": "🏀",
        "label": "Basketball"
      },
      {
        "id": "dist_15_21",
        "type": "emoji",
        "value": "🏈",
        "label": "Football"
      },
      {
        "id": "dist_15_22",
        "type": "emoji",
        "value": "⚾",
        "label": "Baseball"
      },
      {
        "id": "dist_15_23",
        "type": "emoji",
        "value": "🎾",
        "label": "Tennis"
      },
      {
        "id": "dist_15_24",
        "type": "emoji",
        "value": "🏐",
        "label": "Volleyball"
      },
      {
        "id": "dist_15_25",
        "type": "emoji",
        "value": "🎳",
        "label": "Bowling"
      },
      {
        "id": "dist_15_26",
        "type": "emoji",
        "value": "🏓",
        "label": "Ping Pong"
      },
      {
        "id": "dist_15_27",
        "type": "emoji",
        "value": "🛹",
        "label": "Skateboard"
      },
      {
        "id": "dist_15_28",
        "type": "emoji",
        "value": "🎯",
        "label": "Darts"
      },
      {
        "id": "dist_15_29",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      },
      {
        "id": "dist_15_30",
        "type": "lucide",
        "value": "Gamepad2",
        "label": "Gamepad"
      }
    ]
  },
  {
    "id": "m16",
    "name": "Pratyoosh Pradhan",
    "category": "Architect – Commercial",
    "company": "Pradhan Commercial Studio",
    "targetIcons": [
      {
        "id": "t16_1",
        "type": "emoji",
        "value": "🏢",
        "label": "Commercial Complex"
      },
      {
        "id": "t16_2",
        "type": "emoji",
        "value": "🏙️",
        "label": "Office Campus"
      },
      {
        "id": "t16_3",
        "type": "emoji",
        "value": "🏗️",
        "label": "Construction"
      },
      {
        "id": "t16_4",
        "type": "lucide",
        "value": "Building2",
        "label": "Corporate Tower"
      },
      {
        "id": "t16_5",
        "type": "lucide",
        "value": "Compass",
        "label": "Masterplan"
      },
      {
        "id": "t16_7",
        "type": "emoji",
        "value": "📐",
        "label": "Commercial Layout"
      },
      {
        "id": "t16_8",
        "type": "lucide",
        "value": "Ruler",
        "label": "Elevation"
      },
      {
        "id": "t16_9",
        "type": "emoji",
        "value": "🏬",
        "label": "Mall Architecture"
      },
      {
        "id": "emoji_1785923846738_29",
        "type": "emoji",
        "value": "🏛️"
      },
      {
        "id": "emoji_1785923866939_6",
        "type": "emoji",
        "value": "🧱"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_16_1",
        "type": "emoji",
        "value": "🥨",
        "label": "Pretzel"
      },
      {
        "id": "dist_16_2",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_16_3",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "dist_16_4",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      },
      {
        "id": "dist_16_5",
        "type": "emoji",
        "value": "🧁",
        "label": "Cupcake"
      },
      {
        "id": "dist_16_6",
        "type": "emoji",
        "value": "⚽",
        "label": "Soccer"
      },
      {
        "id": "dist_16_7",
        "type": "emoji",
        "value": "🏀",
        "label": "Basketball"
      },
      {
        "id": "dist_16_8",
        "type": "emoji",
        "value": "🏈",
        "label": "Football"
      },
      {
        "id": "dist_16_9",
        "type": "emoji",
        "value": "⚾",
        "label": "Baseball"
      },
      {
        "id": "dist_16_10",
        "type": "emoji",
        "value": "🎾",
        "label": "Tennis"
      },
      {
        "id": "dist_16_11",
        "type": "emoji",
        "value": "🏐",
        "label": "Volleyball"
      },
      {
        "id": "dist_16_12",
        "type": "emoji",
        "value": "🎳",
        "label": "Bowling"
      },
      {
        "id": "dist_16_13",
        "type": "emoji",
        "value": "🏓",
        "label": "Ping Pong"
      },
      {
        "id": "dist_16_14",
        "type": "emoji",
        "value": "🛹",
        "label": "Skateboard"
      },
      {
        "id": "dist_16_15",
        "type": "emoji",
        "value": "🎯",
        "label": "Darts"
      },
      {
        "id": "dist_16_16",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      },
      {
        "id": "dist_16_17",
        "type": "lucide",
        "value": "Gamepad2",
        "label": "Gamepad"
      },
      {
        "id": "dist_16_18",
        "type": "emoji",
        "value": "🧩",
        "label": "Puzzle"
      },
      {
        "id": "dist_16_19",
        "type": "emoji",
        "value": "🪁",
        "label": "Kite"
      },
      {
        "id": "dist_16_20",
        "type": "emoji",
        "value": "🪀",
        "label": "Yo-Yo"
      },
      {
        "id": "dist_16_21",
        "type": "emoji",
        "value": "🐶",
        "label": "Dog"
      },
      {
        "id": "dist_16_22",
        "type": "emoji",
        "value": "🐱",
        "label": "Cat"
      },
      {
        "id": "dist_16_23",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion"
      },
      {
        "id": "dist_16_24",
        "type": "emoji",
        "value": "🐯",
        "label": "Tiger"
      },
      {
        "id": "dist_16_25",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_16_26",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_16_27",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_16_28",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_16_29",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_16_30",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      }
    ]
  },
  {
    "id": "m17",
    "name": "Hrithik Kumbhar",
    "category": "Digital Marketing & Ads",
    "company": "Kumbhar Media",
    "targetIcons": [
      {
        "id": "t17_1",
        "type": "emoji",
        "value": "📱",
        "label": "Social Media"
      },
      {
        "id": "t17_2",
        "type": "emoji",
        "value": "🎯",
        "label": "Targeted Ads"
      },
      {
        "id": "t17_3",
        "type": "emoji",
        "value": "🚀",
        "label": "Viral Growth"
      },
      {
        "id": "t17_4",
        "type": "lucide",
        "value": "Target",
        "label": "Lead Gen"
      },
      {
        "id": "t17_5",
        "type": "lucide",
        "value": "Megaphone",
        "label": "Digital Ads"
      },
      {
        "id": "t17_7",
        "type": "emoji",
        "value": "💻",
        "label": "Online Funnel"
      },
      {
        "id": "t17_8",
        "type": "lucide",
        "value": "Globe",
        "label": "Web Campaign"
      },
      {
        "id": "t17_9",
        "type": "emoji",
        "value": "🔥",
        "label": "Hot Leads"
      },
      {
        "id": "custom_1785923980588",
        "type": "emoji",
        "value": "👍",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785924099029",
        "type": "emoji",
        "value": "📈",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_17_1",
        "type": "emoji",
        "value": "🛹",
        "label": "Skateboard"
      },
      {
        "id": "dist_17_5",
        "type": "emoji",
        "value": "🪁",
        "label": "Kite"
      },
      {
        "id": "dist_17_6",
        "type": "emoji",
        "value": "🪀",
        "label": "Yo-Yo"
      },
      {
        "id": "dist_17_7",
        "type": "emoji",
        "value": "🐶",
        "label": "Dog"
      },
      {
        "id": "dist_17_8",
        "type": "emoji",
        "value": "🐱",
        "label": "Cat"
      },
      {
        "id": "dist_17_9",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion"
      },
      {
        "id": "dist_17_10",
        "type": "emoji",
        "value": "🐯",
        "label": "Tiger"
      },
      {
        "id": "dist_17_11",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_17_12",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_17_13",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_17_14",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_17_15",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_17_16",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_17_17",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_17_18",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_17_19",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_17_20",
        "type": "emoji",
        "value": "🦋",
        "label": "Butterfly"
      },
      {
        "id": "dist_17_21",
        "type": "emoji",
        "value": "🐝",
        "label": "Bee"
      },
      {
        "id": "dist_17_22",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_17_23",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_17_25",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_17_26",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_17_27",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_17_28",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_17_29",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_17_30",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "emoji_1785924120428_13",
        "type": "emoji",
        "value": "🦷"
      },
      {
        "id": "emoji_1785924125705_14",
        "type": "emoji",
        "value": "🩺"
      },
      {
        "id": "emoji_1785924130547_20",
        "type": "emoji",
        "value": "🏗️"
      },
      {
        "id": "emoji_1785924155310_15",
        "type": "emoji",
        "value": "🪥"
      }
    ]
  },
  {
    "id": "m18",
    "name": "Archana Devkate",
    "category": "Life Insurance Advisor",
    "company": "Devkate Financial Care",
    "targetIcons": [
      {
        "id": "t18_1",
        "type": "emoji",
        "value": "👨‍👩‍👧‍👦",
        "label": "Family Protection"
      },
      {
        "id": "t18_2",
        "type": "emoji",
        "value": "❤️",
        "label": "Life Care"
      },
      {
        "id": "t18_3",
        "type": "emoji",
        "value": "🛡️",
        "label": "Term Plan"
      },
      {
        "id": "t18_4",
        "type": "lucide",
        "value": "Heart",
        "label": "Family Life"
      },
      {
        "id": "t18_5",
        "type": "lucide",
        "value": "ShieldCheck",
        "label": "Secure Future"
      },
      {
        "id": "t18_6",
        "type": "lucide",
        "value": "PiggyBank",
        "label": "Child Education"
      },
      {
        "id": "t18_9",
        "type": "emoji",
        "value": "💵",
        "label": "Guaranteed Return"
      },
      {
        "id": "t18_10",
        "type": "lucide",
        "value": "Umbrella",
        "label": "Family Umbrella"
      },
      {
        "id": "custom_1785924232662",
        "type": "emoji",
        "value": "🤝",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785924289654",
        "type": "emoji",
        "value": "💰",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_18_1",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_18_2",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_18_3",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_18_4",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_18_5",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_18_6",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_18_7",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_18_8",
        "type": "emoji",
        "value": "🦋",
        "label": "Butterfly"
      },
      {
        "id": "dist_18_9",
        "type": "emoji",
        "value": "🐝",
        "label": "Bee"
      },
      {
        "id": "dist_18_10",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_18_11",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_18_12",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_18_13",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_18_14",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_18_16",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_18_17",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_18_18",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_18_19",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "dist_18_20",
        "type": "emoji",
        "value": "👻",
        "label": "Ghost"
      },
      {
        "id": "dist_18_21",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_18_22",
        "type": "emoji",
        "value": "🪐",
        "label": "Planet"
      },
      {
        "id": "dist_18_23",
        "type": "emoji",
        "value": "🌕",
        "label": "Full Moon"
      },
      {
        "id": "dist_18_24",
        "type": "emoji",
        "value": "☄️",
        "label": "Comet"
      },
      {
        "id": "dist_18_25",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_18_26",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_18_28",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_18_29",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_18_30",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "custom_1785924364145",
        "type": "emoji",
        "value": "🍕",
        "label": "Custom Emoji"
      },
      {
        "id": "emoji_1785924369812_20",
        "type": "emoji",
        "value": "🏗️"
      }
    ]
  },
  {
    "id": "m19",
    "name": "Srinath Gilda",
    "category": "Home Loans & Mortgage",
    "company": "Gilda Capital",
    "targetIcons": [
      {
        "id": "t19_1",
        "type": "emoji",
        "value": "🏡",
        "label": "Dream Home"
      },
      {
        "id": "t19_2",
        "type": "emoji",
        "value": "🔑",
        "label": "Home Key"
      },
      {
        "id": "t19_3",
        "type": "emoji",
        "value": "🏦",
        "label": "Housing Bank"
      },
      {
        "id": "t19_4",
        "type": "lucide",
        "value": "Home",
        "label": "Property Purchase"
      },
      {
        "id": "t19_5",
        "type": "lucide",
        "value": "KeyRound",
        "label": "Loan Approval"
      },
      {
        "id": "t19_6",
        "type": "lucide",
        "value": "Percent",
        "label": "Lowest Interest"
      },
      {
        "id": "t19_8",
        "type": "lucide",
        "value": "DollarSign",
        "label": "Mortgage Capital"
      },
      {
        "id": "t19_9",
        "type": "emoji",
        "value": "🧱",
        "label": "Construction Loan"
      },
      {
        "id": "emoji_1785924427533_27",
        "type": "emoji",
        "value": "💵"
      },
      {
        "id": "custom_1785924487983",
        "type": "emoji",
        "value": "📑",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_19_1",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_19_3",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_19_4",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_19_5",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_19_6",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "dist_19_7",
        "type": "emoji",
        "value": "👻",
        "label": "Ghost"
      },
      {
        "id": "dist_19_8",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_19_9",
        "type": "emoji",
        "value": "🪐",
        "label": "Planet"
      },
      {
        "id": "dist_19_10",
        "type": "emoji",
        "value": "🌕",
        "label": "Full Moon"
      },
      {
        "id": "dist_19_11",
        "type": "emoji",
        "value": "☄️",
        "label": "Comet"
      },
      {
        "id": "dist_19_12",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_19_13",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_19_15",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_19_16",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_19_17",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_19_18",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_19_19",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      },
      {
        "id": "dist_19_20",
        "type": "emoji",
        "value": "🎺",
        "label": "Trumpet"
      },
      {
        "id": "dist_19_21",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "dist_19_22",
        "type": "emoji",
        "value": "🎤",
        "label": "Microphone"
      },
      {
        "id": "dist_19_23",
        "type": "lucide",
        "value": "Headphones",
        "label": "Audio"
      },
      {
        "id": "dist_19_24",
        "type": "emoji",
        "value": "🌵",
        "label": "Cactus"
      },
      {
        "id": "dist_19_25",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_19_26",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_19_27",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_19_28",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_19_29",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "emoji_1785924518784_13",
        "type": "emoji",
        "value": "🦷"
      },
      {
        "id": "emoji_1785924527649_20",
        "type": "emoji",
        "value": "🏗️"
      },
      {
        "id": "emoji_1785924540469_14",
        "type": "emoji",
        "value": "🩺"
      }
    ]
  },
  {
    "id": "m20",
    "name": "Amol Kale",
    "category": "Fire Safety & Alarms",
    "company": "Kale Fire Systems",
    "targetIcons": [
      {
        "id": "t20_1",
        "type": "emoji",
        "value": "🔥",
        "label": "Fire Extinguisher"
      },
      {
        "id": "t20_3",
        "type": "emoji",
        "value": "🧯",
        "label": "Extinguisher Bottle"
      },
      {
        "id": "t20_4",
        "type": "lucide",
        "value": "Flame",
        "label": "Fire Protection"
      },
      {
        "id": "t20_5",
        "type": "lucide",
        "value": "ShieldAlert",
        "label": "Hazard Safety"
      },
      {
        "id": "t20_6",
        "type": "lucide",
        "value": "Bell",
        "label": "Fire Bell"
      },
      {
        "id": "t20_7",
        "type": "emoji",
        "value": "💧",
        "label": "Sprinkler System"
      },
      {
        "id": "custom_1785924745024",
        "type": "emoji",
        "value": "🚨",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785924834021",
        "type": "emoji",
        "value": "🚒",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785925150413",
        "type": "emoji",
        "value": "🏡",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785925164681",
        "type": "emoji",
        "value": "🚿",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_20_1",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_20_2",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_20_3",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_20_4",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_20_5",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_20_6",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      },
      {
        "id": "dist_20_7",
        "type": "emoji",
        "value": "🎺",
        "label": "Trumpet"
      },
      {
        "id": "dist_20_8",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "dist_20_9",
        "type": "emoji",
        "value": "🎤",
        "label": "Microphone"
      },
      {
        "id": "dist_20_10",
        "type": "lucide",
        "value": "Headphones",
        "label": "Audio"
      },
      {
        "id": "dist_20_11",
        "type": "emoji",
        "value": "🌵",
        "label": "Cactus"
      },
      {
        "id": "dist_20_12",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_20_13",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_20_14",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_20_16",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_20_17",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      },
      {
        "id": "dist_20_18",
        "type": "emoji",
        "value": "🏔️",
        "label": "Mountain"
      },
      {
        "id": "dist_20_19",
        "type": "lucide",
        "value": "Cookie",
        "label": "Cookie"
      },
      {
        "id": "dist_20_20",
        "type": "lucide",
        "value": "Tent",
        "label": "Tent"
      },
      {
        "id": "dist_20_21",
        "type": "lucide",
        "value": "Sun",
        "label": "Sunlight"
      },
      {
        "id": "dist_20_23",
        "type": "emoji",
        "value": "🍎",
        "label": "Apple"
      },
      {
        "id": "dist_20_24",
        "type": "emoji",
        "value": "🍌",
        "label": "Banana"
      },
      {
        "id": "dist_20_25",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_20_26",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_20_27",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_20_28",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      },
      {
        "id": "dist_20_29",
        "type": "emoji",
        "value": "🍍",
        "label": "Pineapple"
      },
      {
        "id": "dist_20_30",
        "type": "emoji",
        "value": "🥑",
        "label": "Avocado"
      },
      {
        "id": "emoji_1785925185081_13",
        "type": "emoji",
        "value": "🦷"
      },
      {
        "id": "emoji_1785925188815_15",
        "type": "emoji",
        "value": "🪥"
      }
    ]
  },
  {
    "id": "m21",
    "name": "Dr. Seema Rathod",
    "category": "Dentist & Smile Care",
    "company": "Smile Dental Clinic",
    "targetIcons": [
      {
        "id": "t21_1",
        "type": "emoji",
        "value": "🦷",
        "label": "Tooth"
      },
      {
        "id": "t21_2",
        "type": "emoji",
        "value": "🩺",
        "label": "Stethoscope"
      },
      {
        "id": "t21_3",
        "type": "emoji",
        "value": "🪥",
        "label": "Toothbrush"
      },
      {
        "id": "t21_4",
        "type": "emoji",
        "value": "😁",
        "label": "Grin"
      },
      {
        "id": "t21_5",
        "type": "lucide",
        "value": "Stethoscope",
        "label": "Doctor"
      },
      {
        "id": "t21_6",
        "type": "lucide",
        "value": "HeartPulse",
        "label": "Health"
      },
      {
        "id": "t21_7",
        "type": "emoji",
        "value": "💊",
        "label": "Dental Care"
      },
      {
        "id": "t21_9",
        "type": "emoji",
        "value": "🏥",
        "label": "Hospital"
      },
      {
        "id": "t21_10",
        "type": "lucide",
        "value": "Smile",
        "label": "Perfect Smile"
      },
      {
        "id": "custom_1785925295000",
        "type": "emoji",
        "value": "😷",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_21_1",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_21_2",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_21_3",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "dist_21_4",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_21_5",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      },
      {
        "id": "dist_21_6",
        "type": "emoji",
        "value": "🏔️",
        "label": "Mountain"
      },
      {
        "id": "dist_21_8",
        "type": "lucide",
        "value": "Tent",
        "label": "Tent"
      },
      {
        "id": "dist_21_9",
        "type": "lucide",
        "value": "Sun",
        "label": "Sunlight"
      },
      {
        "id": "dist_21_10",
        "type": "lucide",
        "value": "CloudRain",
        "label": "Rain Cloud"
      },
      {
        "id": "dist_21_11",
        "type": "emoji",
        "value": "🍎",
        "label": "Apple"
      },
      {
        "id": "dist_21_12",
        "type": "emoji",
        "value": "🍌",
        "label": "Banana"
      },
      {
        "id": "dist_21_13",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_21_14",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_21_15",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_21_16",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      },
      {
        "id": "dist_21_17",
        "type": "emoji",
        "value": "🍍",
        "label": "Pineapple"
      },
      {
        "id": "dist_21_18",
        "type": "emoji",
        "value": "🥑",
        "label": "Avocado"
      },
      {
        "id": "dist_21_19",
        "type": "emoji",
        "value": "🍑",
        "label": "Peach"
      },
      {
        "id": "dist_21_20",
        "type": "emoji",
        "value": "🍋",
        "label": "Lemon"
      },
      {
        "id": "dist_21_21",
        "type": "emoji",
        "value": "🍕",
        "label": "Pizza"
      },
      {
        "id": "dist_21_22",
        "type": "emoji",
        "value": "🍔",
        "label": "Burger"
      },
      {
        "id": "dist_21_23",
        "type": "emoji",
        "value": "🍟",
        "label": "Fries"
      },
      {
        "id": "dist_21_24",
        "type": "emoji",
        "value": "🌭",
        "label": "Hotdog"
      },
      {
        "id": "dist_21_25",
        "type": "emoji",
        "value": "🍿",
        "label": "Popcorn"
      },
      {
        "id": "dist_21_26",
        "type": "emoji",
        "value": "🥨",
        "label": "Pretzel"
      },
      {
        "id": "dist_21_27",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_21_28",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "dist_21_29",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      },
      {
        "id": "dist_21_30",
        "type": "emoji",
        "value": "🧁",
        "label": "Cupcake"
      }
    ]
  },
  {
    "id": "m22",
    "name": "Vijay Rasote",
    "category": "Commercial Loans",
    "company": "Rasote Financial Solutions",
    "targetIcons": [
      {
        "id": "t22_1",
        "type": "emoji",
        "value": "🏭",
        "label": "Factory Expansion"
      },
      {
        "id": "t22_2",
        "type": "emoji",
        "value": "💰",
        "label": "Capital Finance"
      },
      {
        "id": "t22_3",
        "type": "emoji",
        "value": "🏢",
        "label": "Business Working Capital"
      },
      {
        "id": "t22_5",
        "type": "lucide",
        "value": "DollarSign",
        "label": "Business Loan"
      },
      {
        "id": "t22_6",
        "type": "lucide",
        "value": "Briefcase",
        "label": "Commercial Credit"
      },
      {
        "id": "t22_7",
        "type": "emoji",
        "value": "📈",
        "label": "Scaling Capital"
      },
      {
        "id": "t22_9",
        "type": "emoji",
        "value": "📑",
        "label": "Loan Approval"
      },
      {
        "id": "emoji_1785925382133_22",
        "type": "emoji",
        "value": "🏬"
      },
      {
        "id": "custom_1785925401509",
        "type": "emoji",
        "value": "💵",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785925515736",
        "type": "emoji",
        "value": "🏦",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_22_1",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_22_2",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_22_3",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      },
      {
        "id": "dist_22_4",
        "type": "emoji",
        "value": "🍍",
        "label": "Pineapple"
      },
      {
        "id": "dist_22_5",
        "type": "emoji",
        "value": "🥑",
        "label": "Avocado"
      },
      {
        "id": "dist_22_6",
        "type": "emoji",
        "value": "🍑",
        "label": "Peach"
      },
      {
        "id": "dist_22_7",
        "type": "emoji",
        "value": "🍋",
        "label": "Lemon"
      },
      {
        "id": "dist_22_8",
        "type": "emoji",
        "value": "🍕",
        "label": "Pizza"
      },
      {
        "id": "dist_22_9",
        "type": "emoji",
        "value": "🍔",
        "label": "Burger"
      },
      {
        "id": "dist_22_10",
        "type": "emoji",
        "value": "🍟",
        "label": "Fries"
      },
      {
        "id": "dist_22_11",
        "type": "emoji",
        "value": "🌭",
        "label": "Hotdog"
      },
      {
        "id": "dist_22_12",
        "type": "emoji",
        "value": "🍿",
        "label": "Popcorn"
      },
      {
        "id": "dist_22_13",
        "type": "emoji",
        "value": "🥨",
        "label": "Pretzel"
      },
      {
        "id": "dist_22_14",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_22_15",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "dist_22_16",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      },
      {
        "id": "dist_22_17",
        "type": "emoji",
        "value": "🧁",
        "label": "Cupcake"
      },
      {
        "id": "dist_22_18",
        "type": "emoji",
        "value": "⚽",
        "label": "Soccer"
      },
      {
        "id": "dist_22_19",
        "type": "emoji",
        "value": "🏀",
        "label": "Basketball"
      },
      {
        "id": "dist_22_20",
        "type": "emoji",
        "value": "🏈",
        "label": "Football"
      },
      {
        "id": "dist_22_21",
        "type": "emoji",
        "value": "⚾",
        "label": "Baseball"
      },
      {
        "id": "dist_22_22",
        "type": "emoji",
        "value": "🎾",
        "label": "Tennis"
      },
      {
        "id": "dist_22_23",
        "type": "emoji",
        "value": "🏐",
        "label": "Volleyball"
      },
      {
        "id": "dist_22_24",
        "type": "emoji",
        "value": "🎳",
        "label": "Bowling"
      },
      {
        "id": "dist_22_25",
        "type": "emoji",
        "value": "🏓",
        "label": "Ping Pong"
      },
      {
        "id": "dist_22_26",
        "type": "emoji",
        "value": "🛹",
        "label": "Skateboard"
      },
      {
        "id": "dist_22_27",
        "type": "emoji",
        "value": "🎯",
        "label": "Darts"
      },
      {
        "id": "dist_22_28",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      },
      {
        "id": "dist_22_29",
        "type": "lucide",
        "value": "Gamepad2",
        "label": "Gamepad"
      },
      {
        "id": "dist_22_30",
        "type": "emoji",
        "value": "🧩",
        "label": "Puzzle"
      }
    ]
  },
  {
    "id": "m23",
    "name": "Rajesh Kumawat",
    "category": "App Developer – Mobile",
    "company": "Kumawat Tech",
    "targetIcons": [
      {
        "id": "t23_1",
        "type": "emoji",
        "value": "📲",
        "label": "Mobile App"
      },
      {
        "id": "t23_2",
        "type": "emoji",
        "value": "💻",
        "label": "Coding"
      },
      {
        "id": "t23_3",
        "type": "emoji",
        "value": "🤖",
        "label": "Android App"
      },
      {
        "id": "t23_4",
        "type": "lucide",
        "value": "Smartphone",
        "label": "iOS & Android"
      },
      {
        "id": "t23_5",
        "type": "lucide",
        "value": "Code",
        "label": "Code"
      },
      {
        "id": "t23_6",
        "type": "lucide",
        "value": "Cpu",
        "label": "Software Engine"
      },
      {
        "id": "t23_7",
        "type": "emoji",
        "value": "⚡",
        "label": "Fast App"
      },
      {
        "id": "t23_8",
        "type": "lucide",
        "value": "Globe",
        "label": "API Backend"
      },
      {
        "id": "t23_9",
        "type": "emoji",
        "value": "🍏",
        "label": "Apple iOS"
      },
      {
        "id": "t23_10",
        "type": "lucide",
        "value": "Layers",
        "label": "UI/UX Mobile"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_23_1",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_23_2",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "dist_23_3",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      },
      {
        "id": "dist_23_4",
        "type": "emoji",
        "value": "🧁",
        "label": "Cupcake"
      },
      {
        "id": "dist_23_5",
        "type": "emoji",
        "value": "⚽",
        "label": "Soccer"
      },
      {
        "id": "dist_23_6",
        "type": "emoji",
        "value": "🏀",
        "label": "Basketball"
      },
      {
        "id": "dist_23_7",
        "type": "emoji",
        "value": "🏈",
        "label": "Football"
      },
      {
        "id": "dist_23_8",
        "type": "emoji",
        "value": "⚾",
        "label": "Baseball"
      },
      {
        "id": "dist_23_9",
        "type": "emoji",
        "value": "🎾",
        "label": "Tennis"
      },
      {
        "id": "dist_23_10",
        "type": "emoji",
        "value": "🏐",
        "label": "Volleyball"
      },
      {
        "id": "dist_23_11",
        "type": "emoji",
        "value": "🎳",
        "label": "Bowling"
      },
      {
        "id": "dist_23_12",
        "type": "emoji",
        "value": "🏓",
        "label": "Ping Pong"
      },
      {
        "id": "dist_23_13",
        "type": "emoji",
        "value": "🛹",
        "label": "Skateboard"
      },
      {
        "id": "dist_23_14",
        "type": "emoji",
        "value": "🎯",
        "label": "Darts"
      },
      {
        "id": "dist_23_15",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      },
      {
        "id": "dist_23_16",
        "type": "lucide",
        "value": "Gamepad2",
        "label": "Gamepad"
      },
      {
        "id": "dist_23_17",
        "type": "emoji",
        "value": "🧩",
        "label": "Puzzle"
      },
      {
        "id": "dist_23_18",
        "type": "emoji",
        "value": "🪁",
        "label": "Kite"
      },
      {
        "id": "dist_23_19",
        "type": "emoji",
        "value": "🪀",
        "label": "Yo-Yo"
      },
      {
        "id": "dist_23_20",
        "type": "emoji",
        "value": "🐶",
        "label": "Dog"
      },
      {
        "id": "dist_23_21",
        "type": "emoji",
        "value": "🐱",
        "label": "Cat"
      },
      {
        "id": "dist_23_22",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion"
      },
      {
        "id": "dist_23_23",
        "type": "emoji",
        "value": "🐯",
        "label": "Tiger"
      },
      {
        "id": "dist_23_24",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_23_25",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_23_26",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_23_27",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_23_28",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_23_29",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_23_30",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      }
    ]
  },
  {
    "id": "m24",
    "name": "Vijendra Wayal",
    "category": "Interior Turnkey Contracting",
    "company": "Wayal Turnkey Projects",
    "targetIcons": [
      {
        "id": "t24_1",
        "type": "emoji",
        "value": "🔨",
        "label": "Turnkey Execution"
      },
      {
        "id": "t24_2",
        "type": "emoji",
        "value": "🏗️",
        "label": "Interior Fitouts"
      },
      {
        "id": "t24_3",
        "type": "emoji",
        "value": "🛠️",
        "label": "Contractor Tools"
      },
      {
        "id": "t24_4",
        "type": "lucide",
        "value": "Wrench",
        "label": "Site Execution"
      },
      {
        "id": "t24_5",
        "type": "lucide",
        "value": "HardHat",
        "label": "Site Safety"
      },
      {
        "id": "t24_7",
        "type": "emoji",
        "value": "🏠",
        "label": "Turnkey Flat"
      },
      {
        "id": "t24_8",
        "type": "lucide",
        "value": "Home",
        "label": "Interior Project"
      },
      {
        "id": "t24_9",
        "type": "emoji",
        "value": "📦",
        "label": "Material Supply"
      },
      {
        "id": "custom_1785925801458",
        "type": "emoji",
        "value": "🛠️",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785925883379",
        "type": "emoji",
        "value": "🧱",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_24_1",
        "type": "emoji",
        "value": "🎯",
        "label": "Darts"
      },
      {
        "id": "dist_24_2",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      },
      {
        "id": "dist_24_3",
        "type": "lucide",
        "value": "Gamepad2",
        "label": "Gamepad"
      },
      {
        "id": "dist_24_4",
        "type": "emoji",
        "value": "🧩",
        "label": "Puzzle"
      },
      {
        "id": "dist_24_5",
        "type": "emoji",
        "value": "🪁",
        "label": "Kite"
      },
      {
        "id": "dist_24_6",
        "type": "emoji",
        "value": "🪀",
        "label": "Yo-Yo"
      },
      {
        "id": "dist_24_7",
        "type": "emoji",
        "value": "🐶",
        "label": "Dog"
      },
      {
        "id": "dist_24_8",
        "type": "emoji",
        "value": "🐱",
        "label": "Cat"
      },
      {
        "id": "dist_24_9",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion"
      },
      {
        "id": "dist_24_10",
        "type": "emoji",
        "value": "🐯",
        "label": "Tiger"
      },
      {
        "id": "dist_24_11",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_24_12",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_24_13",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_24_14",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_24_15",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_24_16",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_24_17",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_24_18",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_24_19",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_24_20",
        "type": "emoji",
        "value": "🦋",
        "label": "Butterfly"
      },
      {
        "id": "dist_24_21",
        "type": "emoji",
        "value": "🐝",
        "label": "Bee"
      },
      {
        "id": "dist_24_22",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_24_23",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_24_24",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_24_25",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_24_26",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_24_27",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_24_28",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_24_29",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_24_30",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      }
    ]
  },
  {
    "id": "m25",
    "name": "Dr. Vitthal Bhosale",
    "category": "Horticulture & Landscape",
    "company": "Bhosale Landscaping",
    "targetIcons": [
      {
        "id": "t25_1",
        "type": "emoji",
        "value": "🌱",
        "label": "Plantation"
      },
      {
        "id": "t25_2",
        "type": "emoji",
        "value": "🌳",
        "label": "Trees"
      },
      {
        "id": "t25_3",
        "type": "emoji",
        "value": "🪴",
        "label": "Landscaping"
      },
      {
        "id": "t25_4",
        "type": "lucide",
        "value": "Flower2",
        "label": "Garden"
      },
      {
        "id": "t25_5",
        "type": "lucide",
        "value": "Trees",
        "label": "Landscape Plan"
      },
      {
        "id": "t25_6",
        "type": "lucide",
        "value": "Sun",
        "label": "Horticulture"
      },
      {
        "id": "t25_7",
        "type": "emoji",
        "value": "🌾",
        "label": "Organic Soil"
      },
      {
        "id": "t25_9",
        "type": "emoji",
        "value": "🌺",
        "label": "Flowers"
      },
      {
        "id": "emoji_1785926181550_30",
        "type": "emoji",
        "value": "☀️"
      },
      {
        "id": "custom_1785926339038",
        "type": "emoji",
        "value": "🎍",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_25_3",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_25_4",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_25_6",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_25_9",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_25_10",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_25_11",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_25_12",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_25_13",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_25_14",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_25_15",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_25_16",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_25_17",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_25_18",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "dist_25_19",
        "type": "emoji",
        "value": "👻",
        "label": "Ghost"
      },
      {
        "id": "dist_25_20",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_25_21",
        "type": "emoji",
        "value": "🪐",
        "label": "Planet"
      },
      {
        "id": "dist_25_22",
        "type": "emoji",
        "value": "🌕",
        "label": "Full Moon"
      },
      {
        "id": "dist_25_23",
        "type": "emoji",
        "value": "☄️",
        "label": "Comet"
      },
      {
        "id": "dist_25_24",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_25_25",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_25_26",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_25_27",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_25_28",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_25_29",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_25_30",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "emoji_1785926113766_14",
        "type": "emoji",
        "value": "🩺"
      },
      {
        "id": "emoji_1785926116317_13",
        "type": "emoji",
        "value": "🦷"
      },
      {
        "id": "emoji_1785926124283_18",
        "type": "emoji",
        "value": "💊"
      },
      {
        "id": "emoji_1785926127113_15",
        "type": "emoji",
        "value": "🪥"
      },
      {
        "id": "custom_1785926144730",
        "type": "emoji",
        "value": "🍕",
        "label": "Custom Emoji"
      }
    ]
  },
  {
    "id": "m26",
    "name": "Hinendra Surana",
    "category": "Custom Product Packaging",
    "company": "Surana Packaging",
    "targetIcons": [
      {
        "id": "t26_1",
        "type": "emoji",
        "value": "📦",
        "label": "Custom Box"
      },
      {
        "id": "t26_2",
        "type": "emoji",
        "value": "🛍️",
        "label": "Branded Bag"
      },
      {
        "id": "t26_4",
        "type": "lucide",
        "value": "Box",
        "label": "Corrugated Box"
      },
      {
        "id": "t26_5",
        "type": "lucide",
        "value": "Package",
        "label": "Shipment Package"
      },
      {
        "id": "t26_6",
        "type": "lucide",
        "value": "Tag",
        "label": "Branded Label"
      },
      {
        "id": "t26_7",
        "type": "emoji",
        "value": "🎁",
        "label": "Gift Box"
      },
      {
        "id": "t26_8",
        "type": "lucide",
        "value": "Shield",
        "label": "Durable Packing"
      },
      {
        "id": "t26_9",
        "type": "emoji",
        "value": "✉️",
        "label": "Custom Mailer"
      },
      {
        "id": "t26_10",
        "type": "lucide",
        "value": "Layers",
        "label": "Packaging Foils"
      },
      {
        "id": "custom_1785926406331",
        "type": "emoji",
        "value": "🏷️",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_26_1",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_26_2",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_26_3",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_26_4",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_26_5",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "dist_26_6",
        "type": "emoji",
        "value": "👻",
        "label": "Ghost"
      },
      {
        "id": "dist_26_7",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_26_8",
        "type": "emoji",
        "value": "🪐",
        "label": "Planet"
      },
      {
        "id": "dist_26_9",
        "type": "emoji",
        "value": "🌕",
        "label": "Full Moon"
      },
      {
        "id": "dist_26_10",
        "type": "emoji",
        "value": "☄️",
        "label": "Comet"
      },
      {
        "id": "dist_26_11",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_26_12",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_26_13",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_26_14",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_26_15",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_26_16",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_26_17",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_26_18",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      },
      {
        "id": "dist_26_19",
        "type": "emoji",
        "value": "🎺",
        "label": "Trumpet"
      },
      {
        "id": "dist_26_20",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "dist_26_21",
        "type": "emoji",
        "value": "🎤",
        "label": "Microphone"
      },
      {
        "id": "dist_26_22",
        "type": "lucide",
        "value": "Headphones",
        "label": "Audio"
      },
      {
        "id": "dist_26_23",
        "type": "emoji",
        "value": "🌵",
        "label": "Cactus"
      },
      {
        "id": "dist_26_24",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_26_25",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_26_26",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_26_27",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_26_28",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "dist_26_29",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_26_30",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      }
    ]
  },
  {
    "id": "m27",
    "name": "Siddharth Sonawane",
    "category": "Leisure Travel & Holidays",
    "company": "Sonawane Travel Club",
    "targetIcons": [
      {
        "id": "t27_1",
        "type": "emoji",
        "value": "✈️",
        "label": "Flight"
      },
      {
        "id": "t27_2",
        "type": "emoji",
        "value": "🏖️",
        "label": "Beach Vacation"
      },
      {
        "id": "t27_3",
        "type": "emoji",
        "value": "🧳",
        "label": "Luggage"
      },
      {
        "id": "t27_6",
        "type": "lucide",
        "value": "Compass",
        "label": "Travel Guide"
      },
      {
        "id": "t27_7",
        "type": "emoji",
        "value": "🗽",
        "label": "Sightseeing"
      },
      {
        "id": "t27_8",
        "type": "lucide",
        "value": "MapPin",
        "label": "Destination"
      },
      {
        "id": "t27_9",
        "type": "emoji",
        "value": "🎫",
        "label": "Tour Tickets"
      },
      {
        "id": "custom_1785926818484",
        "type": "emoji",
        "value": "🏝️",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785926835900",
        "type": "emoji",
        "value": "🏔️",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785926856379",
        "type": "emoji",
        "value": "🏨",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_27_law1",
        "type": "emoji",
        "value": "⚖️",
        "label": "Scales of Justice"
      },
      {
        "id": "dist_27_law2",
        "type": "emoji",
        "value": "📜",
        "label": "Legal Document"
      },
      {
        "id": "dist_27_law3",
        "type": "emoji",
        "value": "🏛️",
        "label": "Court"
      },
      {
        "id": "dist_27_law4",
        "type": "lucide",
        "value": "Scale",
        "label": "Justice Scale"
      },
      {
        "id": "dist_27_law5",
        "type": "lucide",
        "value": "Gavel",
        "label": "Gavel"
      },
      {
        "id": "dist_27_law6",
        "type": "lucide",
        "value": "FileText",
        "label": "Legal File"
      },
      {
        "id": "dist_27_law7",
        "type": "lucide",
        "value": "BookOpen",
        "label": "Law Book"
      },
      {
        "id": "dist_27_doc1",
        "type": "emoji",
        "value": "🩺",
        "label": "Stethoscope"
      },
      {
        "id": "dist_27_doc2",
        "type": "emoji",
        "value": "🦷",
        "label": "Tooth"
      },
      {
        "id": "dist_27_doc3",
        "type": "emoji",
        "value": "🪥",
        "label": "Toothbrush"
      },
      {
        "id": "dist_27_doc4",
        "type": "emoji",
        "value": "💊",
        "label": "Medicine Pill"
      },
      {
        "id": "dist_27_doc5",
        "type": "emoji",
        "value": "🏥",
        "label": "Hospital"
      },
      {
        "id": "dist_27_doc6",
        "type": "lucide",
        "value": "Stethoscope",
        "label": "Medical Stethoscope"
      },
      {
        "id": "dist_27_doc7",
        "type": "lucide",
        "value": "Syringe",
        "label": "Syringe Injection"
      },
      {
        "id": "dist_27_doc8",
        "type": "lucide",
        "value": "HeartPulse",
        "label": "Pulse Monitor"
      },
      {
        "id": "dist_27_paint1",
        "type": "emoji",
        "value": "🎨",
        "label": "Art Palette"
      },
      {
        "id": "dist_27_paint2",
        "type": "emoji",
        "value": "🖌️",
        "label": "Paint Brush"
      },
      {
        "id": "dist_27_paint3",
        "type": "emoji",
        "value": "🖼️",
        "label": "Picture Frame"
      },
      {
        "id": "dist_27_paint4",
        "type": "emoji",
        "value": "✏️",
        "label": "Pencil Draft"
      },
      {
        "id": "dist_27_paint5",
        "type": "lucide",
        "value": "Palette",
        "label": "Color Palette"
      },
      {
        "id": "dist_27_paint6",
        "type": "lucide",
        "value": "Paintbrush",
        "label": "Paint Brush Tool"
      },
      {
        "id": "dist_27_paint7",
        "type": "lucide",
        "value": "PenTool",
        "label": "Pen Tool"
      },
      {
        "id": "dist_27_const1",
        "type": "emoji",
        "value": "🏗️",
        "label": "Construction Crane"
      },
      {
        "id": "dist_27_const2",
        "type": "emoji",
        "value": "🔨",
        "label": "Hammer"
      },
      {
        "id": "dist_27_const3",
        "type": "emoji",
        "value": "🛠️",
        "label": "Work Tools"
      },
      {
        "id": "dist_27_const4",
        "type": "emoji",
        "value": "🧱",
        "label": "Brick Wall"
      },
      {
        "id": "dist_27_const5",
        "type": "emoji",
        "value": "📐",
        "label": "Ruler Blueprint"
      },
      {
        "id": "dist_27_const6",
        "type": "lucide",
        "value": "HardHat",
        "label": "Safety Hard Hat"
      },
      {
        "id": "dist_27_const7",
        "type": "lucide",
        "value": "Wrench",
        "label": "Wrench Tool"
      },
      {
        "id": "dist_27_const8",
        "type": "lucide",
        "value": "Building2",
        "label": "Building Facade"
      }
    ]
  },
  {
    "id": "m28",
    "name": "Kajal Agarwal",
    "category": "Bespoke Fashion Designer",
    "company": "Kajal Couture",
    "targetIcons": [
      {
        "id": "t28_1",
        "type": "emoji",
        "value": "👗",
        "label": "Designer Gown"
      },
      {
        "id": "t28_2",
        "type": "emoji",
        "value": "🥻",
        "label": "Bridal Saree"
      },
      {
        "id": "t28_4",
        "type": "lucide",
        "value": "Shirt",
        "label": "Bespoke Outfit"
      },
      {
        "id": "t28_5",
        "type": "lucide",
        "value": "Scissors",
        "label": "Tailoring"
      },
      {
        "id": "t28_7",
        "type": "emoji",
        "value": "🧵",
        "label": "Embroidery"
      },
      {
        "id": "t28_9",
        "type": "emoji",
        "value": "👠",
        "label": "Fashion Show"
      },
      {
        "id": "custom_1785927110652",
        "type": "emoji",
        "value": "👔",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785927166071",
        "type": "emoji",
        "value": "🧥",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785927192249",
        "type": "emoji",
        "value": "💃",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785927275257",
        "type": "emoji",
        "value": "🏆",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_28_1",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_28_2",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "dist_28_3",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_28_4",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      },
      {
        "id": "dist_28_5",
        "type": "emoji",
        "value": "🏔️",
        "label": "Mountain"
      },
      {
        "id": "dist_28_6",
        "type": "lucide",
        "value": "Cookie",
        "label": "Cookie"
      },
      {
        "id": "dist_28_7",
        "type": "lucide",
        "value": "Tent",
        "label": "Tent"
      },
      {
        "id": "dist_28_8",
        "type": "lucide",
        "value": "Sun",
        "label": "Sunlight"
      },
      {
        "id": "dist_28_9",
        "type": "lucide",
        "value": "CloudRain",
        "label": "Rain Cloud"
      },
      {
        "id": "dist_28_10",
        "type": "emoji",
        "value": "🍎",
        "label": "Apple"
      },
      {
        "id": "dist_28_11",
        "type": "emoji",
        "value": "🍌",
        "label": "Banana"
      },
      {
        "id": "dist_28_12",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_28_13",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_28_14",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_28_15",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      },
      {
        "id": "dist_28_16",
        "type": "emoji",
        "value": "🍍",
        "label": "Pineapple"
      },
      {
        "id": "dist_28_17",
        "type": "emoji",
        "value": "🥑",
        "label": "Avocado"
      },
      {
        "id": "dist_28_18",
        "type": "emoji",
        "value": "🍑",
        "label": "Peach"
      },
      {
        "id": "dist_28_19",
        "type": "emoji",
        "value": "🍋",
        "label": "Lemon"
      },
      {
        "id": "dist_28_20",
        "type": "emoji",
        "value": "🍕",
        "label": "Pizza"
      },
      {
        "id": "dist_28_22",
        "type": "emoji",
        "value": "🍟",
        "label": "Fries"
      },
      {
        "id": "dist_28_24",
        "type": "emoji",
        "value": "🍿",
        "label": "Popcorn"
      },
      {
        "id": "dist_28_25",
        "type": "emoji",
        "value": "🥨",
        "label": "Pretzel"
      },
      {
        "id": "dist_28_26",
        "type": "emoji",
        "value": "🌮",
        "label": "Taco"
      },
      {
        "id": "dist_28_27",
        "type": "emoji",
        "value": "🍩",
        "label": "Donut"
      },
      {
        "id": "dist_28_28",
        "type": "emoji",
        "value": "🍦",
        "label": "Ice Cream"
      },
      {
        "id": "dist_28_29",
        "type": "emoji",
        "value": "🧁",
        "label": "Cupcake"
      },
      {
        "id": "dist_28_30",
        "type": "emoji",
        "value": "⚽",
        "label": "Soccer"
      },
      {
        "id": "lucide_1785927315255_47",
        "type": "lucide",
        "value": "Coffee",
        "label": "Coffee"
      },
      {
        "id": "lucide_1785927328290_46",
        "type": "lucide",
        "value": "Music",
        "label": "Music"
      }
    ]
  },
  {
    "id": "m29",
    "name": "Rohit Chavan",
    "category": "Modular Kitchen Studio",
    "company": "Chavan Kitchens",
    "targetIcons": [
      {
        "id": "t29_1",
        "type": "emoji",
        "value": "🍳",
        "label": "Modular Kitchen"
      },
      {
        "id": "t29_2",
        "type": "emoji",
        "value": "🥘",
        "label": "Ergonomic Cooking"
      },
      {
        "id": "t29_3",
        "type": "emoji",
        "value": "🍽️",
        "label": "Kitchenware"
      },
      {
        "id": "t29_4",
        "type": "lucide",
        "value": "Utensils",
        "label": "Modern Kitchen"
      },
      {
        "id": "t29_5",
        "type": "lucide",
        "value": "Box",
        "label": "Modular Cabinets"
      },
      {
        "id": "t29_6",
        "type": "lucide",
        "value": "Flame",
        "label": "Stove Top"
      },
      {
        "id": "t29_7",
        "type": "emoji",
        "value": "🗄️",
        "label": "Pullout Drawers"
      },
      {
        "id": "emoji_1785927522278_5",
        "type": "emoji",
        "value": "🛠️"
      },
      {
        "id": "custom_1785927552713",
        "type": "emoji",
        "value": "🪛",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785927630347",
        "type": "emoji",
        "value": "🔨",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_29_anim1",
        "type": "emoji",
        "value": "🐶",
        "label": "Dog"
      },
      {
        "id": "dist_29_anim2",
        "type": "emoji",
        "value": "🐱",
        "label": "Cat"
      },
      {
        "id": "dist_29_anim3",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion"
      },
      {
        "id": "dist_29_anim4",
        "type": "emoji",
        "value": "🐯",
        "label": "Tiger"
      },
      {
        "id": "dist_29_anim5",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_29_anim6",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_29_anim7",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_29_anim8",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_29_anim9",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_29_anim10",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_29_anim11",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_29_anim12",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_29_anim13",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_29_anim14",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_29_anim15",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_29_hosp1",
        "type": "emoji",
        "value": "🏥",
        "label": "Hospital"
      },
      {
        "id": "dist_29_hosp2",
        "type": "emoji",
        "value": "🩺",
        "label": "Stethoscope"
      },
      {
        "id": "dist_29_hosp3",
        "type": "emoji",
        "value": "💉",
        "label": "Syringe"
      },
      {
        "id": "dist_29_hosp4",
        "type": "emoji",
        "value": "💊",
        "label": "Medicine Pill"
      },
      {
        "id": "dist_29_hosp5",
        "type": "emoji",
        "value": "🩸",
        "label": "Blood Drop"
      },
      {
        "id": "dist_29_hosp6",
        "type": "emoji",
        "value": "🩹",
        "label": "Adhesive Bandage"
      },
      {
        "id": "dist_29_hosp7",
        "type": "emoji",
        "value": "🚑",
        "label": "Ambulance"
      },
      {
        "id": "dist_29_hosp8",
        "type": "emoji",
        "value": "😷",
        "label": "Medical Mask"
      },
      {
        "id": "dist_29_hosp9",
        "type": "emoji",
        "value": "🦷",
        "label": "Tooth Care"
      },
      {
        "id": "dist_29_hosp10",
        "type": "emoji",
        "value": "🪥",
        "label": "Toothbrush"
      },
      {
        "id": "dist_29_hosp11",
        "type": "lucide",
        "value": "Stethoscope",
        "label": "Medical Stethoscope"
      },
      {
        "id": "dist_29_hosp12",
        "type": "lucide",
        "value": "Syringe",
        "label": "Injection Syringe"
      },
      {
        "id": "dist_29_hosp13",
        "type": "lucide",
        "value": "HeartPulse",
        "label": "Heart Pulse Monitor"
      },
      {
        "id": "dist_29_hosp14",
        "type": "lucide",
        "value": "Activity",
        "label": "ECG Activity"
      },
      {
        "id": "dist_29_hosp15",
        "type": "lucide",
        "value": "Hospital",
        "label": "Hospital Clinic"
      }
    ]
  },
  {
    "id": "m30",
    "name": "Ameya Tarde",
    "category": "Wildlife Safaris & Tours",
    "company": "Tarde Expeditions",
    "targetIcons": [
      {
        "id": "t30_1",
        "type": "emoji",
        "value": "🐅",
        "label": "Tiger Safari"
      },
      {
        "id": "t30_2",
        "type": "emoji",
        "value": "🐘",
        "label": "Elephant Tour"
      },
      {
        "id": "t30_3",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion Safari"
      },
      {
        "id": "t30_4",
        "type": "emoji",
        "value": "🐆",
        "label": "Leopard"
      },
      {
        "id": "t30_5",
        "type": "emoji",
        "value": "🦒",
        "label": "Giraffe"
      },
      {
        "id": "t30_6",
        "type": "emoji",
        "value": "🦓",
        "label": "Zebra"
      },
      {
        "id": "t30_7",
        "type": "emoji",
        "value": "🦍",
        "label": "Gorilla"
      },
      {
        "id": "t30_8",
        "type": "emoji",
        "value": "🦏",
        "label": "Rhino"
      },
      {
        "id": "t30_9",
        "type": "emoji",
        "value": "🦜",
        "label": "Exotic Birds"
      },
      {
        "id": "t30_10",
        "type": "emoji",
        "value": "🐊",
        "label": "Crocodile"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_30_law1",
        "type": "emoji",
        "value": "⚖️",
        "label": "Scales of Justice"
      },
      {
        "id": "dist_30_law2",
        "type": "emoji",
        "value": "📜",
        "label": "Legal Document"
      },
      {
        "id": "dist_30_law3",
        "type": "emoji",
        "value": "🏛️",
        "label": "Court House"
      },
      {
        "id": "dist_30_law4",
        "type": "emoji",
        "value": "💼",
        "label": "Law Briefcase"
      },
      {
        "id": "dist_30_law5",
        "type": "emoji",
        "value": "✒️",
        "label": "Legal Signature"
      },
      {
        "id": "dist_30_law6",
        "type": "lucide",
        "value": "Scale",
        "label": "Justice Scale"
      },
      {
        "id": "dist_30_law7",
        "type": "lucide",
        "value": "Gavel",
        "label": "Judge Gavel"
      },
      {
        "id": "dist_30_law8",
        "type": "lucide",
        "value": "FileText",
        "label": "Litigation Record"
      },
      {
        "id": "dist_30_law9",
        "type": "lucide",
        "value": "BookOpen",
        "label": "Law Codex"
      },
      {
        "id": "dist_30_law10",
        "type": "lucide",
        "value": "Shield",
        "label": "Legal Protection"
      },
      {
        "id": "dist_30_const1",
        "type": "emoji",
        "value": "🏗️",
        "label": "Construction Crane"
      },
      {
        "id": "dist_30_const2",
        "type": "emoji",
        "value": "🔨",
        "label": "Hammer"
      },
      {
        "id": "dist_30_const3",
        "type": "emoji",
        "value": "🛠️",
        "label": "Construction Tools"
      },
      {
        "id": "dist_30_const4",
        "type": "emoji",
        "value": "🧱",
        "label": "Brick Wall"
      },
      {
        "id": "dist_30_const5",
        "type": "emoji",
        "value": "📐",
        "label": "Architect Blueprint"
      },
      {
        "id": "dist_30_const6",
        "type": "emoji",
        "value": "🏢",
        "label": "Building Structure"
      },
      {
        "id": "dist_30_const7",
        "type": "lucide",
        "value": "HardHat",
        "label": "Safety Helmet"
      },
      {
        "id": "dist_30_const8",
        "type": "lucide",
        "value": "Wrench",
        "label": "Site Wrench"
      },
      {
        "id": "dist_30_const9",
        "type": "lucide",
        "value": "Ruler",
        "label": "Measurement Ruler"
      },
      {
        "id": "dist_30_const10",
        "type": "lucide",
        "value": "Building2",
        "label": "Corporate Facade"
      },
      {
        "id": "dist_30_doc1",
        "type": "emoji",
        "value": "🩺",
        "label": "Stethoscope"
      },
      {
        "id": "dist_30_doc2",
        "type": "emoji",
        "value": "💉",
        "label": "Syringe"
      },
      {
        "id": "dist_30_doc3",
        "type": "emoji",
        "value": "💊",
        "label": "Medicine Pill"
      },
      {
        "id": "dist_30_doc4",
        "type": "emoji",
        "value": "🏥",
        "label": "Hospital Clinic"
      },
      {
        "id": "dist_30_doc5",
        "type": "emoji",
        "value": "🚑",
        "label": "Ambulance"
      },
      {
        "id": "dist_30_doc6",
        "type": "emoji",
        "value": "😷",
        "label": "Medical Mask"
      },
      {
        "id": "dist_30_doc7",
        "type": "lucide",
        "value": "Stethoscope",
        "label": "Doctor Stethoscope"
      },
      {
        "id": "dist_30_doc8",
        "type": "lucide",
        "value": "Syringe",
        "label": "Injection Tool"
      },
      {
        "id": "dist_30_doc9",
        "type": "lucide",
        "value": "HeartPulse",
        "label": "Pulse Monitor"
      },
      {
        "id": "dist_30_doc10",
        "type": "lucide",
        "value": "Activity",
        "label": "Health Activity"
      }
    ]
  },
  {
    "id": "m31",
    "name": "Abhishek Dhandekar",
    "category": "Sanitary Fittings & Bath",
    "company": "Dhandekar Bath Studio",
    "targetIcons": [
      {
        "id": "t31_1",
        "type": "emoji",
        "value": "🚿",
        "label": "Shower"
      },
      {
        "id": "t31_2",
        "type": "emoji",
        "value": "🛁",
        "label": "Bathtub"
      },
      {
        "id": "t31_3",
        "type": "emoji",
        "value": "🚰",
        "label": "Faucet"
      },
      {
        "id": "custom_1785927885318",
        "type": "emoji",
        "value": "💧",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785927900868",
        "type": "emoji",
        "value": "🚽",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785927928134",
        "type": "emoji",
        "value": "💦",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785927949402",
        "type": "emoji",
        "value": "🛀",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785928588581",
        "type": "emoji",
        "value": "🪟",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785929181525",
        "type": "emoji",
        "value": "🌊",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785929238052",
        "type": "emoji",
        "value": "🤽‍♂️",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_31_1",
        "type": "emoji",
        "value": "🎲",
        "label": "Dice"
      },
      {
        "id": "dist_31_2",
        "type": "lucide",
        "value": "Gamepad2",
        "label": "Gamepad"
      },
      {
        "id": "dist_31_3",
        "type": "emoji",
        "value": "🧩",
        "label": "Puzzle"
      },
      {
        "id": "dist_31_4",
        "type": "emoji",
        "value": "🪁",
        "label": "Kite"
      },
      {
        "id": "dist_31_5",
        "type": "emoji",
        "value": "🪀",
        "label": "Yo-Yo"
      },
      {
        "id": "dist_31_6",
        "type": "emoji",
        "value": "🐶",
        "label": "Dog"
      },
      {
        "id": "dist_31_7",
        "type": "emoji",
        "value": "🐱",
        "label": "Cat"
      },
      {
        "id": "dist_31_8",
        "type": "emoji",
        "value": "🦁",
        "label": "Lion"
      },
      {
        "id": "dist_31_9",
        "type": "emoji",
        "value": "🐯",
        "label": "Tiger"
      },
      {
        "id": "dist_31_10",
        "type": "emoji",
        "value": "🐻",
        "label": "Bear"
      },
      {
        "id": "dist_31_11",
        "type": "emoji",
        "value": "🐼",
        "label": "Panda"
      },
      {
        "id": "dist_31_12",
        "type": "emoji",
        "value": "🦊",
        "label": "Fox"
      },
      {
        "id": "dist_31_13",
        "type": "emoji",
        "value": "🐰",
        "label": "Rabbit"
      },
      {
        "id": "dist_31_14",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_31_15",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_31_16",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_31_17",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_31_18",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_31_19",
        "type": "emoji",
        "value": "🦋",
        "label": "Butterfly"
      },
      {
        "id": "dist_31_20",
        "type": "emoji",
        "value": "🐝",
        "label": "Bee"
      },
      {
        "id": "dist_31_21",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_31_22",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_31_23",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_31_24",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_31_25",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_31_26",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_31_27",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_31_28",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_31_29",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_31_30",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      }
    ]
  },
  {
    "id": "m32",
    "name": "Ketan Bhosale",
    "category": "Interior Designer – Commercial",
    "company": "Bhosale Commercial Interiors",
    "targetIcons": [
      {
        "id": "t32_1",
        "type": "emoji",
        "value": "🏬",
        "label": "Store Interior"
      },
      {
        "id": "t32_2",
        "type": "emoji",
        "value": "🏢",
        "label": "Office Fitout"
      },
      {
        "id": "t32_3",
        "type": "emoji",
        "value": "🛋️",
        "label": "Reception Lounge"
      },
      {
        "id": "t32_4",
        "type": "lucide",
        "value": "Building2",
        "label": "Showroom Design"
      },
      {
        "id": "t32_7",
        "type": "emoji",
        "value": "💼",
        "label": "Corporate Interior"
      },
      {
        "id": "t32_9",
        "type": "emoji",
        "value": "🖥️",
        "label": "Workstations"
      },
      {
        "id": "t32_10",
        "type": "lucide",
        "value": "Layers",
        "label": "Acoustic Panels"
      },
      {
        "id": "custom_1785929357340",
        "type": "emoji",
        "value": "🛠️",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785929370913",
        "type": "emoji",
        "value": "📏",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785929481964",
        "type": "emoji",
        "value": "🪑",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_32_1",
        "type": "emoji",
        "value": "🐸",
        "label": "Frog"
      },
      {
        "id": "dist_32_2",
        "type": "emoji",
        "value": "🐙",
        "label": "Octopus"
      },
      {
        "id": "dist_32_3",
        "type": "emoji",
        "value": "🐬",
        "label": "Dolphin"
      },
      {
        "id": "dist_32_4",
        "type": "emoji",
        "value": "🐢",
        "label": "Turtle"
      },
      {
        "id": "dist_32_5",
        "type": "emoji",
        "value": "🦉",
        "label": "Owl"
      },
      {
        "id": "dist_32_6",
        "type": "emoji",
        "value": "🦋",
        "label": "Butterfly"
      },
      {
        "id": "dist_32_7",
        "type": "emoji",
        "value": "🐝",
        "label": "Bee"
      },
      {
        "id": "dist_32_8",
        "type": "lucide",
        "value": "Cat",
        "label": "Pet Cat"
      },
      {
        "id": "dist_32_9",
        "type": "lucide",
        "value": "Dog",
        "label": "Pet Dog"
      },
      {
        "id": "dist_32_10",
        "type": "lucide",
        "value": "Fish",
        "label": "Fish"
      },
      {
        "id": "dist_32_11",
        "type": "lucide",
        "value": "Bug",
        "label": "Bug"
      },
      {
        "id": "dist_32_12",
        "type": "lucide",
        "value": "Bird",
        "label": "Bird"
      },
      {
        "id": "dist_32_13",
        "type": "emoji",
        "value": "🚀",
        "label": "Rocket"
      },
      {
        "id": "dist_32_14",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_32_15",
        "type": "emoji",
        "value": "👾",
        "label": "Alien"
      },
      {
        "id": "dist_32_16",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_32_17",
        "type": "emoji",
        "value": "🔮",
        "label": "Orb"
      },
      {
        "id": "dist_32_18",
        "type": "emoji",
        "value": "👻",
        "label": "Ghost"
      },
      {
        "id": "dist_32_19",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_32_20",
        "type": "emoji",
        "value": "🪐",
        "label": "Planet"
      },
      {
        "id": "dist_32_21",
        "type": "emoji",
        "value": "🌕",
        "label": "Full Moon"
      },
      {
        "id": "dist_32_22",
        "type": "emoji",
        "value": "☄️",
        "label": "Comet"
      },
      {
        "id": "dist_32_23",
        "type": "lucide",
        "value": "Ghost",
        "label": "Ghost Character"
      },
      {
        "id": "dist_32_24",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_32_25",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_32_26",
        "type": "lucide",
        "value": "Sparkle",
        "label": "Sparkle"
      },
      {
        "id": "dist_32_27",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_32_28",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_32_29",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_32_30",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      }
    ]
  },
  {
    "id": "m33",
    "name": "Nikita Gurav",
    "category": "Tarot Card Reader & Guidance",
    "company": "Gurav Intuitive Clarity",
    "targetIcons": [
      {
        "id": "t33_1",
        "type": "emoji",
        "value": "🔮",
        "label": "Crystal Ball"
      },
      {
        "id": "t33_3",
        "type": "emoji",
        "value": "✨",
        "label": "Intuition"
      },
      {
        "id": "t33_4",
        "type": "lucide",
        "value": "Sparkles",
        "label": "Cosmic Energy"
      },
      {
        "id": "t33_5",
        "type": "lucide",
        "value": "Moon",
        "label": "Guidance"
      },
      {
        "id": "t33_7",
        "type": "emoji",
        "value": "🌙",
        "label": "Moon Energy"
      },
      {
        "id": "t33_9",
        "type": "emoji",
        "value": "⭐",
        "label": "Destiny"
      },
      {
        "id": "t33_10",
        "type": "lucide",
        "value": "Wand2",
        "label": "Tarot Reading"
      },
      {
        "id": "custom_1785929541162",
        "type": "emoji",
        "value": "🪬",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785929565331",
        "type": "emoji",
        "value": "🧿",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785929751209",
        "type": "emoji",
        "value": "🌟",
        "label": "Custom Emoji"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_33_1",
        "type": "emoji",
        "value": "🛸",
        "label": "UFO"
      },
      {
        "id": "dist_33_3",
        "type": "emoji",
        "value": "🤖",
        "label": "Robot"
      },
      {
        "id": "dist_33_5",
        "type": "emoji",
        "value": "🦄",
        "label": "Unicorn"
      },
      {
        "id": "dist_33_10",
        "type": "lucide",
        "value": "Anchor",
        "label": "Anchor"
      },
      {
        "id": "dist_33_11",
        "type": "lucide",
        "value": "Rocket",
        "label": "Space Rocket"
      },
      {
        "id": "dist_33_13",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_33_14",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_33_15",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_33_16",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      },
      {
        "id": "dist_33_17",
        "type": "emoji",
        "value": "🎺",
        "label": "Trumpet"
      },
      {
        "id": "dist_33_18",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "dist_33_19",
        "type": "emoji",
        "value": "🎤",
        "label": "Microphone"
      },
      {
        "id": "dist_33_20",
        "type": "lucide",
        "value": "Headphones",
        "label": "Audio"
      },
      {
        "id": "dist_33_21",
        "type": "emoji",
        "value": "🌵",
        "label": "Cactus"
      },
      {
        "id": "dist_33_22",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_33_23",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_33_24",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_33_25",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_33_26",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "dist_33_27",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_33_28",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      },
      {
        "id": "dist_33_29",
        "type": "emoji",
        "value": "🏔️",
        "label": "Mountain"
      },
      {
        "id": "dist_33_30",
        "type": "lucide",
        "value": "Cookie",
        "label": "Cookie"
      },
      {
        "id": "emoji_1785929797787_6",
        "type": "emoji",
        "value": "🧱"
      },
      {
        "id": "emoji_1785929800587_5",
        "type": "emoji",
        "value": "🛠️"
      },
      {
        "id": "emoji_1785929806286_18",
        "type": "emoji",
        "value": "💊"
      },
      {
        "id": "emoji_1785929809253_15",
        "type": "emoji",
        "value": "🪥"
      },
      {
        "id": "emoji_1785929812002_14",
        "type": "emoji",
        "value": "🩺"
      },
      {
        "id": "emoji_1785929824122_20",
        "type": "emoji",
        "value": "🏗️"
      },
      {
        "id": "lucide_1785929856445_15",
        "type": "lucide",
        "value": "Brush",
        "label": "Brush"
      }
    ]
  },
  {
    "id": "m34",
    "name": "Rati Oke",
    "category": "Wealth Management",
    "company": "Oke Wealth Partners",
    "targetIcons": [
      {
        "id": "t34_2",
        "type": "emoji",
        "value": "📊",
        "label": "Wealth Portfolio"
      },
      {
        "id": "t34_3",
        "type": "emoji",
        "value": "💰",
        "label": "Asset Management"
      },
      {
        "id": "t34_4",
        "type": "lucide",
        "value": "TrendingUp",
        "label": "Capital Growth"
      },
      {
        "id": "t34_10",
        "type": "lucide",
        "value": "DollarSign",
        "label": "Financial Freedom"
      },
      {
        "id": "emoji_1785929901494_27",
        "type": "emoji",
        "value": "💵"
      },
      {
        "id": "custom_1785929975722",
        "type": "emoji",
        "value": "🏦",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785930013718",
        "type": "emoji",
        "value": "🪙",
        "label": "Custom Emoji"
      },
      {
        "id": "custom_1785930042540",
        "type": "emoji",
        "value": "💸",
        "label": "Custom Emoji"
      },
      {
        "id": "emoji_1785930220402_25",
        "type": "emoji",
        "value": "📈"
      },
      {
        "id": "lucide_1785930225692_24",
        "type": "lucide",
        "value": "Receipt",
        "label": "Receipt"
      }
    ],
    "distractorIcons": [
      {
        "id": "dist_34_1",
        "type": "emoji",
        "value": "🎈",
        "label": "Balloon"
      },
      {
        "id": "dist_34_2",
        "type": "emoji",
        "value": "🎸",
        "label": "Guitar"
      },
      {
        "id": "dist_34_3",
        "type": "emoji",
        "value": "🥁",
        "label": "Drums"
      },
      {
        "id": "dist_34_4",
        "type": "emoji",
        "value": "🎷",
        "label": "Saxophone"
      },
      {
        "id": "dist_34_5",
        "type": "emoji",
        "value": "🎺",
        "label": "Trumpet"
      },
      {
        "id": "dist_34_6",
        "type": "emoji",
        "value": "🎧",
        "label": "Headphones"
      },
      {
        "id": "dist_34_7",
        "type": "emoji",
        "value": "🎤",
        "label": "Microphone"
      },
      {
        "id": "dist_34_8",
        "type": "lucide",
        "value": "Headphones",
        "label": "Audio"
      },
      {
        "id": "dist_34_9",
        "type": "emoji",
        "value": "🌵",
        "label": "Cactus"
      },
      {
        "id": "dist_34_10",
        "type": "emoji",
        "value": "🍄",
        "label": "Mushroom"
      },
      {
        "id": "dist_34_11",
        "type": "emoji",
        "value": "🌻",
        "label": "Sunflower"
      },
      {
        "id": "dist_34_12",
        "type": "emoji",
        "value": "🌈",
        "label": "Rainbow"
      },
      {
        "id": "dist_34_13",
        "type": "emoji",
        "value": "⚡",
        "label": "Lightning"
      },
      {
        "id": "dist_34_14",
        "type": "emoji",
        "value": "❄️",
        "label": "Snowflake"
      },
      {
        "id": "dist_34_15",
        "type": "emoji",
        "value": "🏕️",
        "label": "Camping"
      },
      {
        "id": "dist_34_16",
        "type": "emoji",
        "value": "🌲",
        "label": "Pine Tree"
      },
      {
        "id": "dist_34_17",
        "type": "emoji",
        "value": "🏔️",
        "label": "Mountain"
      },
      {
        "id": "dist_34_18",
        "type": "lucide",
        "value": "Cookie",
        "label": "Cookie"
      },
      {
        "id": "dist_34_19",
        "type": "lucide",
        "value": "Tent",
        "label": "Tent"
      },
      {
        "id": "dist_34_20",
        "type": "lucide",
        "value": "Sun",
        "label": "Sunlight"
      },
      {
        "id": "dist_34_21",
        "type": "lucide",
        "value": "CloudRain",
        "label": "Rain Cloud"
      },
      {
        "id": "dist_34_22",
        "type": "emoji",
        "value": "🍎",
        "label": "Apple"
      },
      {
        "id": "dist_34_23",
        "type": "emoji",
        "value": "🍌",
        "label": "Banana"
      },
      {
        "id": "dist_34_24",
        "type": "emoji",
        "value": "🍉",
        "label": "Watermelon"
      },
      {
        "id": "dist_34_25",
        "type": "emoji",
        "value": "🍇",
        "label": "Grapes"
      },
      {
        "id": "dist_34_26",
        "type": "emoji",
        "value": "🍓",
        "label": "Strawberry"
      },
      {
        "id": "dist_34_27",
        "type": "emoji",
        "value": "🍒",
        "label": "Cherries"
      },
      {
        "id": "dist_34_28",
        "type": "emoji",
        "value": "🍍",
        "label": "Pineapple"
      },
      {
        "id": "dist_34_29",
        "type": "emoji",
        "value": "🥑",
        "label": "Avocado"
      },
      {
        "id": "dist_34_30",
        "type": "emoji",
        "value": "🍑",
        "label": "Peach"
      }
    ]
  }
];

export const INITIAL_MEMBERS: MemberProfile[] = RAW_INITIAL_MEMBERS;
