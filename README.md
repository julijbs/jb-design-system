# JB Digital Consulting — Design System

> Institutional B2B design system for JB Digital Consulting. "Sophisticated silence" — premium, navy + gold, no noise.

---

## Company & Product Context

**JB Digital Consulting** is a one-person boutique B2B strategy consultancy serving Brazilian service businesses and independent professionals. The brand positions itself as a premium institutional authority — not an agency, not a freelancer.

### Products

| Product | Description | Price |
|---|---|---|
| **JB AI Decision Sprint™** | AI decision architecture sprint for business owners | R$ 12.000 (fixed) |
| **JB Digital System** | Full digital infrastructure: site + Google Business Profile + positioning | Recurring |
| **ARC™** | Recurring revenue system / funnel architecture | Recurring |
| **Protocolo Autoridade** | Instagram authority content packs for professionals | R$ 600–1.200/mês |
| **Presença Google Essencial** | SEO + Google Business Profile presence for local service businesses | — |

### Target Audience
Brazilian B2B professionals and decision-makers, ages 35–55. Desktop-primary. High-trust, high-ticket buyers.

---

## Sources

| Resource | Location | Notes |
|---|---|---|
| Design token repo | `github.com/julijbs/jb-design-system` (public, branch `master`) | Tailwind config, CSS vars, tokens.json |
| Live website | `github.com/julijbs/jb-digital-site` (private, branch `main`) | HTML/CSS marketing site |
| Logo (horizontal) | `assets/logo-horizontal.png` | Dark navy bg, gold treatment |
| Logo (stacked) | `assets/logo-stacked.png` | Dark navy bg, gold treatment |
| Design system CSS | `src/index.css` (imported from repo) | CSS custom properties + utilities |
| Design tokens | `tokens.json` (imported from repo) | JSON source of truth |
| Tailwind config | `tailwind.config.ts` (imported from repo) | Tailwind v3 setup |

---

## CONTENT FUNDAMENTALS

### Language
- **Portuguese (pt-BR)** exclusively. All copy, labels, CTAs.
- Formal register — "você" (not "tu"). Direct, confident, never casual.

### Tone
- **Authoritative and concise.** No filler, no padding.
- "Sophisticated silence" — the brand speaks once, with weight. No repetition.
- Never enthusiastic. No exclamation marks. No emoji in brand materials.
- Headlines diagnose a problem or state a transformation. No questions in headlines.

### Casing
- Headlines: Title Case for product names, sentence case for descriptive copy.
- Labels/overlines: ALL CAPS with wide letter-spacing (0.12em). Short — 2–4 words max.
- CTAs: Verb-first. Active, present tense. e.g. "Iniciar Sprint", "Conhecer Serviços", "Falar com JB".

### Copy Examples (from live site)
- Hero: *"Infraestrutura Digital & Autoridade Real."*
- Subhead: *"Do Google ao Instagram: posicionamento estratégico para quem não tem tempo a perder com amadorismo."*
- Service page: *"Não somos uma 'agência de postinhos'. Somos especialistas em Posicionamento de Alta Autoridade."*
- Pain diagnosis: *"Seu feed não reflete a excelência do seu trabalho técnico, afastando clientes qualificados."*

### What to Avoid
- Exclamation marks
- Emoji (in brand/institutional materials — website uses some, design system discourages)
- "Nós fazemos tudo!" energy
- Superlatives without substance ("o melhor", "incrível")
- Padding phrases ("Hoje em dia...", "É fato que...")

---

## VISUAL FOUNDATIONS

### Color
| Role | Token | Hex | HSL |
|---|---|---|---|
| Primary background | `--navy` | `#0C1F3A` | `hsl(212 58% 10%)` |
| Card background | `--card-dark` | `#122845` | `hsl(212 45% 13%)` |
| Secondary surface | — | — | `hsl(212 30% 17%)` |
| Gold accent | `--gold` | `#C9A055` | `hsl(43 53% 54%)` |
| Gold hover | `--gold-light` | `#D4B07A` | `hsl(40 45% 62%)` |
| Off-white / light bg | `--off-white` | `#F5F0E8` | `hsl(40 20% 95%)` |
| Secondary text | `--muted` | — | `hsl(215 16% 62%)` |

Sections alternate **dark navy ↔ off-white**. Never two dark or two light in a row. No gradients on UI elements (a subtle gold gradient is allowed on text as a highlight only).

### Typography
- **Display / Headings (h1–h4):** DM Serif Display — serif, gold on dark, navy on light
- **Body / UI:** Inter — sans-serif, off-white on dark, navy on light
- **Labels / Overlines:** Inter, uppercase, `letter-spacing: 0.12em`, weight 500
- Minimum body size: 16px. Section headings: 2–3.5rem on desktop.
- Line-height body: 1.6. Headings: 1.1–1.2.

### Backgrounds & Texture
- Flat color only — no photographic backgrounds, no patterns, no grain.
- The hexagonal logo motif can appear as a watermark/badge shape at very low opacity.
- No full-bleed imagery unless the image is dark-toned and navy-compatible.

### Spacing & Layout
- Section vertical padding: `6rem` (96px) top and bottom.
- Container max-width: `1200px`, horizontal padding: `2rem`.
- Single-column or 2-column max. Dense = low trust.
- Generous whitespace is intentional — it signals premium.

### Cards
- Background: `hsl(212 45% 13% / 0.6)` with `backdrop-filter: blur(20px)`
- Border: `1px solid hsl(43 53% 54% / 0.12)` — very subtle gold
- Hover: border upgrades to `hsl(43 53% 54% / 0.25)` + wider gold glow
- No drop shadows. Subtle `box-shadow: 0 0 40px hsl(43 53% 54% / 0.05)` gold glow only.
- Corner radius: `6px` (md) to `12px` (lg). Never pill-shaped.

### Borders & Dividers
- 1px thin gold lines — `hsl(43 53% 54% / 0.1)` default, `/ 0.25` on hover
- Section dividers: horizontal gradient `transparent → gold/20% → transparent`
- Never heavy fills, never thick borders.

### Buttons
- **Primary:** Gold fill `#C9A055`, navy text `#0C1F3A`, `border-radius: 6px`, `padding: 12px 28px`, Inter 500
- **Secondary / Outline:** Gold border, gold text, transparent fill; hover: `gold/8%` fill
- Hover transition: `0.2s ease`. No translateY lifts on premium buttons (reserved for lighter contexts).
- CTA labels: uppercase or title case, never sentence case.

### Icons
- Line-style only. Stroke weight: regular (1.5–2px visual weight).
- Gold on dark backgrounds. Navy on light backgrounds.
- Preferred library: Lucide (CDN). No filled/solid icons.
- Hexagonal badge shape from logo used for structural dividers/accents.

### Animation
- Subtle entrance only: `fade-up` (opacity 0→1 + translateY 24px→0, 0.6s ease-out) and `fade-in` (0.5s).
- Shimmer effect on gold elements (3s infinite, used sparingly).
- No bounces, no spring physics, no complex motion.
- Hover states: color transition `0.2s ease`. No scale transforms in institutional contexts.

### Press / Active States
- Buttons: slightly darker gold (`hsl(40 45% 48%)`) on active.
- Cards: border brightens to `/0.4` opacity gold.

### Corner Radii
- `sm`: 4px (tags, small chips)
- `md`: 6px (buttons, inputs)
- `lg`: 12px (cards, panels)

### Imagery
- When used: dark-toned, desaturated, professional. No stock-photo brightness.
- Color vibe: cool-to-neutral, not warm. Navy-compatible.
- No illustrations, no hand-drawn elements.

---

## ICONOGRAPHY

Icons are **line-style only** using **Lucide Icons** via CDN.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

- Gold stroke on dark backgrounds: `color: var(--gold)` or `stroke: #C9A055`
- Navy stroke on light backgrounds: `stroke: #0C1F3A`
- Stroke width: 1.5px standard
- Size: 20–24px inline, 32–40px for feature icons
- No emoji used in brand/institutional materials
- No PNG icon packs — SVG/Lucide only
- The hexagonal motif from the logo can be used as a structural shape (section markers, badges) — not as a decorative illustration

**Common icons used:**
- Navigation/compass theme (mirrors logo)
- `target`, `trending-up`, `layers`, `shield`, `zap` for service features
- `check` for feature lists (gold, not ✅)
- `arrow-right` for CTAs

---

## File Index

```
README.md                   ← This file
SKILL.md                    ← Agent skill descriptor
colors_and_type.css         ← CSS custom properties (source of truth for HTML work)
tokens.json                 ← Design tokens as JSON
tailwind.config.ts          ← Tailwind v3 config
src/index.css               ← Utility classes (Tailwind-based)

assets/
  logo-horizontal.png       ← Primary logo, dark bg, landscape
  logo-stacked.png          ← Stacked/square logo variant, dark bg

preview/                    ← Design System card previews (registered in asset tab)
  colors-core.html
  colors-semantic.html
  type-display.html
  type-body.html
  type-labels.html
  spacing-tokens.html
  components-buttons.html
  components-cards.html
  components-badges.html
  components-dividers.html
  brand-logos.html
  brand-motif.html

ui_kits/
  website/                  ← Marketing website UI kit
    README.md
    index.html              ← Interactive click-thru prototype
    Header.jsx
    Hero.jsx
    ServiceCard.jsx
    PricingCard.jsx
    Footer.jsx
```
