# GrapeDawn Quiz Platform — Design & Style Guidelines

This document defines the official design system, visual aesthetics, color palettes, component specifications, and UI guidelines for the **GrapeDawn Quiz Platform** and similar real-time interactive web applications.

---

## 🎨 1. Core Visual Identity & Design Philosophy

The GrapeDawn visual identity is built around a **Sovereign Dark Tech** aesthetic—combining ultra-dark cosmic purple surfaces, energetic violet radial lighting, subtle geometric tech grids, and a signature **Metallic Slanted Golden Logo Banner**.

### Design Principles:
1. **Rich & Immersive Darkness**: Base background is deep dark violet-black (`#06040a`), avoiding flat gray or standard black.
2. **Ambient Radial Glows**: Soft violet, purple, and indigo lighting highlights give depth without distracting from interactive quiz elements.
3. **High-Contrast Brand Accents**: Warm metallic gold accents draw immediate focal attention to brand branding and high-priority room codes.
4. **Glassmorphism & Depth**: Translucent violet-tinted glass panels with fine borders (`rgba(168, 85, 247, 0.18)`).

---

## 🖌️ 2. Color Palette & Tokens

### Base & Backgrounds
| Token Name | Color Hex / Value | Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `#06040a` | Primary body background |
| **Header Backdrop** | `#07040d` / 85% opacity | Sticky top navigation bar |
| **Glass Panel BG** | `rgba(18, 12, 30, 0.75)` | Cards, join boxes, modal dialogs |
| **Subtle Grid Line** | `rgba(168, 85, 247, 0.06)` | 50px geometric grid pattern |

### GrapeDawn Metallic Gold Gradient (Signature Logo Banner)
| Color | Hex Code | Position |
| :--- | :--- | :--- |
| **Warm White Gold** | `#fffbeb` | 0% (Light entry) |
| **Bright Gold** | `#fef08a` | 35% |
| **Vibrant Yellow Gold**| `#fde047` | 70% |
| **Deep Amber Gold** | `#eab308` | 100% (Dark edge) |

### Accent Colors
- **Primary Purple/Violet**: `#a855f7` (Borders, active badges, glowing pulse effects)
- **Success Emerald**: `#10b981` (Correct answer, ready state, start quiz action)
- **Alert Amber**: `#f59e0b` (Self-paced room mode, warnings, countdown timers)
- **Destructive Rose**: `#f43f5e` (Incorrect answer, delete action)

---

## 📐 3. Header & Slanted Golden Logo Banner

The hallmark branding element on GrapeDawn platforms is the **Slanted Golden Logo Banner** positioned on the far-left of the sticky header.

### Specification & CSS
```css
/* GrapeDawn Slanted Golden Banner Header Logo */
.grapedawn-gold-banner {
  background: linear-gradient(135deg, #fffbeb 0%, #fef08a 35%, #fde047 70%, #eab308 100%);
  clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
}
```

### Layout Structure (Flush Left Edge):
> [!IMPORTANT]
> The `<header>` element must use `pl-0 m-0` (zero left padding and margin) so the golden banner touches the absolute left edge of the viewport with **0px gap**.

```tsx
<header className="sticky top-0 z-50 w-full bg-[#07040d]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl flex items-center justify-between overflow-hidden h-16 sm:h-20 p-0 m-0 pl-0">
  {/* Slanted Golden Banner Logo (Flushed to Left Edge) */}
  <Link href="/" className="h-full grapedawn-gold-banner flex items-center pl-4 sm:pl-8 pr-12 sm:pr-16 py-2 transition-all hover:brightness-105">
    <img src="/logo-horizental.png" alt="GrapeDawn" className="h-8 sm:h-11 w-auto object-contain drop-shadow-sm" />
  </Link>

  {/* Header Right Actions */}
  <div className="flex items-center gap-4 pr-6">
    {/* Navigation Links / Action Buttons */}
  </div>
</header>
```


---

## 🌐 4. Global Background System

To achieve the signature `grapedawn.tech` atmosphere, every view should incorporate the background layer stack:

```css
/* GrapeDawn Background Grid & Ambient Glows */
.grapedawn-body {
  background-color: #06040a;
  background-image: 
    radial-gradient(circle at 50% 10%, rgba(168, 85, 247, 0.18) 0%, rgba(109, 40, 217, 0.08) 45%, rgba(6, 4, 10, 0) 80%),
    radial-gradient(circle at 90% 70%, rgba(147, 51, 234, 0.12) 0%, rgba(6, 4, 10, 0) 60%),
    radial-gradient(circle at 10% 80%, rgba(99, 102, 241, 0.12) 0%, rgba(6, 4, 10, 0) 60%);
  background-attachment: fixed;
}

.grapedawn-grid-overlay {
  background-size: 50px 50px;
  background-image: 
    linear-gradient(to right, rgba(168, 85, 247, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(168, 85, 247, 0.06) 1px, transparent 1px);
}
```

---

## 🧩 5. UI Components & Patterns

### 5.1 Glassmorphism Panel (`.glass-panel`)
Use for main participant cards, question boxes, and modal dialogs.
```css
.glass-panel {
  background: rgba(18, 12, 30, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(168, 85, 247, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 1.5rem; /* 24px */
}
```

### 5.2 Room Code Badge
Display room codes in high-legibility uppercase monospace font with subtle violet glow:
```tsx
<span className="font-mono text-sm font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 tracking-wider">
  ROOM: {roomCode}
</span>
```

### 5.3 Interactive Quiz Buttons
- **Primary Call-to-Action (Start / Join)**:
  `bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20`
- **Success / Submit Button**:
  `bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/20`
- **Option Selection Card (Unselected)**:
  `bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/30 text-slate-100 rounded-2xl transition-all`
- **Option Selection Card (Selected)**:
  `bg-purple-600/30 border-2 border-purple-400 text-white shadow-lg shadow-purple-500/20 rounded-2xl`

---

## 📱 6. Responsive Viewport Guidelines

- **Mobile Viewports (< 640px)**:
  - Header height compacts to `h-16`.
  - Slanted Golden Logo Banner scales logo height to `h-7 sm:h-9` and reduces padding (`pl-4 pr-10`).
  - Text labels inside badges shorten (e.g. `ROOM: ABC123` -> `ABC123`).
- **Desktop Viewports (>= 1024px)**:
  - Full height header `h-20`.
  - Grid overlays remain fixed and non-interfering (`pointer-events-none`).

---

## 🚀 7. Checklist for Implementing in Similar Apps

- [x] Set body background color to `#06040a` with fixed radial glow gradients.
- [x] Add 50px geometric grid pattern overlay.
- [x] Apply `.grapedawn-gold-banner` class to header logo container with polygon clip path (`polygon(0 0, 85% 0, 100% 100%, 0 100%)`).
- [x] Ensure `<header>` has zero left padding (`pl-0 m-0`) so the golden logo banner spans flush to the absolute left edge of the screen.
- [x] Enforce dark translucent backdrop (`backdrop-blur-xl`) on sticky headers.
- [x] Wrap content boxes in `.glass-panel` with purple border highlights (`rgba(168, 85, 247, 0.18)`).
- [x] Use monospace tracking for room codes and countdown timers.
