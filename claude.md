# Mobile Optimization Plan: About & Contact Pages

> **CRITICAL RULE**: Do NOT change any `md:`, `lg:`, or `sm:` prefixed classes. Only modify base (unprefixed) classes. Desktop view must remain EXACTLY the same.

> **Pattern used on Live Stalls & Buffets pages**: Base classes = mobile styles, `md:` prefix = desktop styles.

---

## File 1: `src/pages/about.astro`

### Section 1: Hero Banner (Lines 40–97)

**Line 40** — Change the section padding and min-height for mobile:
```
FIND:    class="relative bg-charcoal text-ivory pt-28 pb-16 overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-center"
REPLACE: class="relative bg-charcoal text-ivory pt-16 pb-8 md:pt-28 md:pb-16 overflow-hidden min-h-[280px] md:min-h-[500px] flex flex-col justify-center"
```

**Line 54** — Compact spacing for mobile:
```
FIND:    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center"
REPLACE: class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3 md:space-y-6 text-center"
```

**Lines 57–63** — Ornate tagline: smaller line widths and text on mobile:
```
FIND:    class="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold/60 to-gold"
REPLACE: class="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent via-gold/60 to-gold"
```
```
FIND:    class="text-[10px] uppercase tracking-[0.32em] text-gold font-bold flex items-center gap-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
REPLACE: class="text-[8px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.32em] text-gold font-bold flex items-center gap-1 md:gap-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
```
```
FIND:    class="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold/60 to-gold"
REPLACE: class="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent via-gold/60 to-gold"
```

**Line 65** — Page title: smaller on mobile:
```
FIND:    class="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,1)]"
REPLACE: class="font-editorial text-2xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,1)]"
```

**Line 69** — Subtitle paragraph: already uses `text-xs sm:text-base` which is fine.

**Line 74** — Stats ribbon: compact padding on mobile, keep 2x2 grid:
```
FIND:    class="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-3xl mx-auto"
REPLACE: class="pt-3 md:pt-4 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3.5 max-w-3xl mx-auto"
```

**Lines 75, 80, 85, 90** — Each stat card: smaller padding and text on mobile. Apply to ALL FOUR stat card divs:
```
FIND:    class="p-3.5 rounded-2xl bg-black/75 border border-gold/40 backdrop-blur-md shadow-2xl"
REPLACE: class="p-2.5 md:p-3.5 rounded-xl md:rounded-2xl bg-black/75 border border-gold/40 backdrop-blur-md shadow-2xl"
```
(This appears 4 times — apply to ALL four)

**Lines 76, 81, 86, 91** — Stat numbers: smaller on mobile. Apply to ALL FOUR:
```
FIND:    class="font-editorial text-2xl sm:text-3xl text-gold font-normal block drop-shadow"
REPLACE: class="font-editorial text-lg md:text-3xl text-gold font-normal block drop-shadow"
```
(This appears 4 times — apply to ALL four)

**Lines 77, 82, 87, 92** — Stat labels: already `text-[9px]` which is fine, no change needed.

---

### Section 2: Philosophy Section (Lines 100–198)

**Line 100** — Section padding:
```
FIND:    class="bg-[#F8F5EE] py-12 sm:py-16 border-y border-gold/30 relative overflow-hidden"
REPLACE: class="bg-[#F8F5EE] py-8 md:py-16 border-y border-gold/30 relative overflow-hidden"
```

**Line 105** — Inner spacing:
```
FIND:    class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10"
REPLACE: class="max-w-6xl mx-auto px-3 md:px-6 lg:px-8 space-y-6 md:space-y-10 relative z-10"
```

**Line 117** — Philosophy heading:
```
FIND:    class="font-editorial text-3xl sm:text-5xl font-light text-charcoal leading-tight"
REPLACE: class="font-editorial text-2xl md:text-5xl font-light text-charcoal leading-tight"
```

**Line 123** — Grid gap:
```
FIND:    class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-2 items-start"
REPLACE: class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 pt-1 md:pt-2 items-start"
```

**Line 163** — CTA buttons row:
```
FIND:    class="pt-4 flex flex-wrap justify-center gap-4"
REPLACE: class="pt-3 md:pt-4 flex flex-wrap justify-center gap-2.5 md:gap-4"
```

**Line 168** — Reserve Date button (make compact on mobile):
```
FIND:    class="bg-gradient-to-r from-[#70121F] via-[#8B1A2B] to-[#5C0E19] text-white py-3.5 px-6 rounded-full font-bold shadow-2xl flex items-center gap-3 border border-gold/40 hover:scale-[1.03] transition-all text-left"
REPLACE: class="bg-gradient-to-r from-[#70121F] via-[#8B1A2B] to-[#5C0E19] text-white py-2.5 px-4 md:py-3.5 md:px-6 rounded-full font-bold shadow-2xl flex items-center gap-2 md:gap-3 border border-gold/40 hover:scale-[1.03] transition-all text-left"
```

**Line 170** — Icon circle (FIRST occurrence, inside Reserve Date button):
```
FIND:    class="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center shrink-0"
REPLACE: class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-black/20 flex items-center justify-center shrink-0"
```
(This appears 2 times — apply to BOTH)

**Line 171** — Phone icon SVG:
```
FIND:    class="w-4 h-4 text-gold fill-current"
REPLACE: class="w-3 h-3 md:w-4 md:h-4 text-gold fill-current"
```

**Line 174** — Button label text:
```
FIND:    class="text-xs uppercase tracking-wider font-bold block leading-tight">RESERVE YOUR DATE
REPLACE: class="text-[10px] md:text-xs uppercase tracking-wider font-bold block leading-tight">RESERVE YOUR DATE
```

**Line 175** — Button sublabel:
```
FIND:    class="text-[10px] text-gold/90 font-light block pt-0.5"
REPLACE: class="text-[9px] md:text-[10px] text-gold/90 font-light block pt-0.5"
```

**Line 184** — WhatsApp button:
```
FIND:    class="bg-gradient-to-r from-[#1B8A44] via-[#25D366] to-[#126932] text-white py-3.5 px-6 rounded-full font-bold shadow-2xl flex items-center gap-3 border border-emerald-300/40 hover:scale-[1.03] transition-all text-left"
REPLACE: class="bg-gradient-to-r from-[#1B8A44] via-[#25D366] to-[#126932] text-white py-2.5 px-4 md:py-3.5 md:px-6 rounded-full font-bold shadow-2xl flex items-center gap-2 md:gap-3 border border-emerald-300/40 hover:scale-[1.03] transition-all text-left"
```

**Line 187** — WhatsApp icon SVG:
```
FIND:    class="w-4 h-4 text-white fill-current"
REPLACE: class="w-3 h-3 md:w-4 md:h-4 text-white fill-current"
```

**Line 190** — WhatsApp label:
```
FIND:    class="text-xs uppercase tracking-wider font-bold block leading-tight">WHATSAPP DISCUSSION
REPLACE: class="text-[10px] md:text-xs uppercase tracking-wider font-bold block leading-tight">WHATSAPP DISCUSSION
```

**Line 191** — WhatsApp sublabel:
```
FIND:    class="text-[10px] text-white/90 font-light block pt-0.5"
REPLACE: class="text-[9px] md:text-[10px] text-white/90 font-light block pt-0.5"
```

---

### Section 3: Timeline Section (Lines 200–250)

**Line 201** — Section padding:
```
FIND:    class="bg-charcoal text-ivory py-24 relative overflow-hidden"
REPLACE: class="bg-charcoal text-ivory py-12 md:py-24 relative overflow-hidden"
```

**Line 202** — Inner spacing:
```
FIND:    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10"
REPLACE: class="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 space-y-6 md:space-y-10 relative z-10"
```

**Line 208** — Timeline heading:
```
FIND:    class="font-editorial text-3xl sm:text-5xl font-light text-ivory"
REPLACE: class="font-editorial text-2xl md:text-5xl font-light text-ivory"
```

**Line 220** — Left gradient mask width:
```
FIND:    class="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent z-20 pointer-events-none"
REPLACE: class="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent z-20 pointer-events-none"
```

**Line 221** — Right gradient mask width:
```
FIND:    class="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-charcoal via-charcoal/80 to-transparent z-20 pointer-events-none"
REPLACE: class="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-charcoal via-charcoal/80 to-transparent z-20 pointer-events-none"
```

**Line 226** — Timeline milestone cards: narrower on mobile:
```
FIND:    class="w-[290px] sm:w-[320px] shrink-0 p-6 sm:p-7 rounded-3xl bg-charcoal-card border border-gold/30 space-y-3 relative hover:border-gold hover:-translate-y-2 hover:bg-gold/10 transition-all duration-300 group/card shadow-xl backdrop-blur-lg cursor-pointer"
REPLACE: class="w-[230px] md:w-[320px] shrink-0 p-4 md:p-7 rounded-2xl md:rounded-3xl bg-charcoal-card border border-gold/30 space-y-2 md:space-y-3 relative hover:border-gold hover:-translate-y-2 hover:bg-gold/10 transition-all duration-300 group/card shadow-xl backdrop-blur-lg cursor-pointer"
```

**Line 236** — Milestone card title:
```
FIND:    class="font-editorial text-xl sm:text-2xl text-ivory font-normal group-hover/card:text-gold transition-colors leading-snug"
REPLACE: class="font-editorial text-base md:text-2xl text-ivory font-normal group-hover/card:text-gold transition-colors leading-snug"
```

---

## File 2: `src/pages/contact.astro`

### Section 1: Hero Banner (Lines 47–62)

**Line 47** — Section padding:
```
FIND:    class="bg-charcoal text-ivory pt-24 pb-10 relative overflow-hidden"
REPLACE: class="bg-charcoal text-ivory pt-14 pb-5 md:pt-24 md:pb-10 relative overflow-hidden"
```

**Line 51** — Inner spacing:
```
FIND:    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-2 text-center"
REPLACE: class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-1.5 md:space-y-2 text-center"
```

**Line 55** — Contact heading:
```
FIND:    class="font-editorial text-3xl sm:text-5xl font-light"
REPLACE: class="font-editorial text-2xl md:text-5xl font-light"
```

---

### Section 2: Two-Card Layout (Lines 65–214)

**Line 65** — Section padding:
```
FIND:    class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
REPLACE: class="max-w-5xl mx-auto px-3 md:px-6 lg:px-8 py-5 md:py-12"
```

**Line 66** — Grid gap:
```
FIND:    class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
REPLACE: class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch"
```

**Line 69** — Left card (HQ card) padding:
```
FIND:    class="bg-ivory-card border border-gold/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl flex flex-col justify-between"
REPLACE: class="bg-ivory-card border border-gold/30 p-4 md:p-8 rounded-2xl md:rounded-3xl space-y-4 md:space-y-6 shadow-xl flex flex-col justify-between"
```

**Line 75** — HQ heading:
```
FIND:    class="font-editorial text-2xl sm:text-3xl text-charcoal font-light leading-tight"
REPLACE: class="font-editorial text-xl md:text-3xl text-charcoal font-light leading-tight"
```

**Line 83** — Contact details list:
```
FIND:    class="space-y-4 text-xs text-charcoal-light font-light border-y border-gold/20 py-4"
REPLACE: class="space-y-3 md:space-y-4 text-xs text-charcoal-light font-light border-y border-gold/20 py-3 md:py-4"
```

**Line 127** — Action buttons row:
```
FIND:    class="flex flex-row items-center gap-2 pt-1"
REPLACE: class="flex flex-row items-center gap-1.5 md:gap-2 pt-1"
```

**Line 130** — Call Hotline button:
```
FIND:    class="flex-1 bg-crimson hover:bg-crimson-hover text-white text-[10px] uppercase tracking-widest py-3 px-3 rounded-xl font-bold transition-all shadow-md text-center flex items-center justify-center gap-1.5"
REPLACE: class="flex-1 bg-crimson hover:bg-crimson-hover text-white text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-widest py-2.5 px-2 md:py-3 md:px-3 rounded-lg md:rounded-xl font-bold transition-all shadow-md text-center flex items-center justify-center gap-1"
```

**Line 140** — WhatsApp button:
```
FIND:    class="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[10px] uppercase tracking-widest py-3 px-3 rounded-xl font-bold transition-all shadow-md text-center flex items-center justify-center gap-1.5"
REPLACE: class="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-widest py-2.5 px-2 md:py-3 md:px-3 rounded-lg md:rounded-xl font-bold transition-all shadow-md text-center flex items-center justify-center gap-1"
```

**Line 150** — Right card (Network Directory) padding:
```
FIND:    class="bg-charcoal text-ivory p-6 sm:p-8 rounded-3xl border border-gold/30 space-y-5 shadow-2xl flex flex-col justify-between"
REPLACE: class="bg-charcoal text-ivory p-4 md:p-8 rounded-2xl md:rounded-3xl border border-gold/30 space-y-4 md:space-y-5 shadow-2xl flex flex-col justify-between"
```

**Line 157** — Network Directory heading:
```
FIND:    class="font-editorial text-2xl font-light leading-tight"
REPLACE: class="font-editorial text-xl md:text-2xl font-light leading-tight"
```

**Line 166** — Branch cards grid:
```
FIND:    class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1"
REPLACE: class="grid grid-cols-2 gap-1.5 md:gap-2.5 pt-1"
```
> This makes the branch selector cards display as a 2x2 grid on mobile instead of stacked.

---

## Verification

After making ALL changes, run:
```bash
npm run build
```

Confirm:
- Build completes with 0 errors.
- Desktop view (resize browser to 1280px+) looks EXACTLY the same as before.
- Mobile view (resize to 375px) shows compact, well-spaced layouts on both pages.

---

## Summary of the Pattern

| Mobile (base) | Desktop (md:) |
|---|---|
| `pt-14 pb-5` | `md:pt-24 md:pb-10` |
| `text-2xl` | `md:text-5xl` |
| `p-4` | `md:p-8` |
| `rounded-2xl` | `md:rounded-3xl` |
| `gap-2` | `md:gap-6` |
| `space-y-3` | `md:space-y-6` |
| `px-3` | `md:px-6` |
| `w-[230px]` | `md:w-[320px]` |

> The rule is simple: shrink padding, text, gaps, and widths for mobile base classes, then add `md:` prefix with the original desktop values.
