# JB Digital Consulting — Design System

Design tokens, Tailwind config, and CSS for all JB Digital products.

## Brand Identity

**Personality:** Sophisticated silence — institutional B2B, premium, no noise.  
**Colors:** Deep navy + gold. No bright colors, no gradients on UI elements.  
**Typography:** DM Serif Display (headings) + Inter (body/UI).  
**Target:** Brazilian B2B professionals 35–55, desktop-primary.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Navy 900 | `hsl(212 58% 10%)` | Primary background |
| Navy 800 | `hsl(212 45% 13%)` | Card backgrounds |
| Gold | `hsl(43 53% 54%)` | CTAs, headings, icons, accents |
| Gold Light | `hsl(40 45% 62%)` | Hover states, gradients |
| Off-white | `hsl(40 20% 95%)` | Text on dark, light section bg |

## Key Files

- `tokens.json` — all brand tokens as JSON (for AI tools and design tools)
- `tailwind.config.ts` — Tailwind v3 config with JB color tokens
- `src/index.css` — CSS custom properties + utility classes

## Products Using This System

- [jb-digital-os](https://github.com/julijbs/jb-digital-os) — brand OS + admin
- [decision-architect-ai](https://github.com/julijbs/decision-architect-ai) — AI Decision Sprint product
- [arc-blueprint](https://github.com/julijbs/arc-blueprint) — ARC™ funnel

## Component Rules

**Buttons:** Gold fill (`#C9A055` bg, navy text) as primary. Gold outline as secondary.  
**Cards:** Dark navy bg + 1px gold border at 12% opacity. Blur backdrop on overlays.  
**Sections:** Alternate dark navy ↔ off-white. Never two dark or two light in a row.  
**Icons:** Line-style only. Gold on dark, navy on light.  
**No:** drop shadows, bright gradients, rounded blobs, illustration-heavy UI.
