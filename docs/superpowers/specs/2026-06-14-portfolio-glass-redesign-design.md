# Portfolio Glass Redesign — Design Spec

## Overview & Goals

This redesign replaces the dark "rust/editorial" look (shipped in the previous redesign) with a soft, spacious, "bubbly" minimalism: a single flat periwinkle background, white glassmorphism cards/pills, the Outfit typeface throughout, and a purple accent. No gradients, no pink/peach hues, generous whitespace, heavily rounded shapes.

This was converged on through an extended visual-companion brainstorming session (see conversation history). The decisions below are final — this document specifies how to apply them to the existing Next.js component structure.

## Design Tokens

### Colors

| Token | Value | Usage |
|---|---|---|
| `bg` | `#c9d4ee` | Page background — one flat tone, used for every section, no gradients |
| `glass-fill` | `rgba(255,255,255,0.55)` | Fill for glass cards |
| `glass-fill-pill` | `rgba(255,255,255,0.45)` | Fill for glass nav/pills (slightly more transparent than cards) |
| `glass-border` | `rgba(255,255,255,0.7)` | Border for glass cards |
| `glass-border-pill` | `rgba(255,255,255,0.6)` | Border for glass nav/pills |
| `glass-shadow` | `0 8px 24px rgba(90,100,160,0.14)` | Box-shadow for glass cards |
| `glass-blur` | `blur(14px)` (cards) / `blur(12px)` (pills) | `backdrop-filter` |
| `divider` | `rgba(255,255,255,0.5)` | 1px `border-top` between stacked sections |
| `accent` | `#6c5ce7` | Purple — solid CTA buttons, section labels, tag text, numbered list digits, active states |
| `accent-soft` | `#b8c4ff` | Secondary flat accent block (used for project visual placeholders, alternating with `accent`) |
| `text-heading` | `#2b2b40` | Headlines, card titles, active pill text |
| `text-body` | `#4d5780` | Body copy, sublines, descriptions, inactive pill text |
| `text-body-strong` | `#3b3f5c` | Slightly stronger body text inside glass cards (e.g. Work quote) |
| `white` | `#ffffff` | Active pill fill, solid tag-pill background, CTA text on accent |

No pink, peach, or blush anywhere. No gradients anywhere — `accent` and `accent-soft` are flat solid fills.

**Contrast check:** `text-heading` on `bg` ≈ 9.3:1. `text-body` on `bg` ≈ 4.5:1+ (verified against `#c9d4ee`, which is darker than the earlier `#e3ecff` candidate, so contrast is comfortable). `accent` on `white`/`glass-fill` ≈ 4.6:1 — fine for bold/uppercase labels ≥11px.

### Typography

- **Font:** Outfit, for everything (headings and body). Weights needed: 400, 500, 600, 700, 800.
- Remove Playfair Display, Instrument Serif, and DM Sans entirely — they are no longer used anywhere.
- **Type scale:**
  - Hero headline: `text-5xl sm:text-7xl` (≈48px/72px), weight 800, `tracking-tight` (-1.5px), `leading-[1.05]`
  - Section title (`<h2>`, e.g. "Toolbox", "Things I've built"): `text-3xl sm:text-4xl` (≈32px), weight 800, `tracking-tight` (-1px)
  - Section label (e.g. "Projects", "Skills"): `text-xs`, `tracking-[0.2em]` uppercase, weight 700, color `accent`
  - Card title: `text-base sm:text-lg`, weight 700
  - Body/description: `text-sm`, weight 400, `leading-relaxed`, color `text-body`
  - Tag pill text: `text-[11px]`, weight 700, color `accent`

### Shape & Glass Tokens

- **Pills** (nav, buttons, tags, badges): `rounded-full` (border-radius 999px)
- **Cards**: `rounded-2xl` to `rounded-[22px]` (16–22px)
- **Glass card class** (apply to: project cards, skill cards, work card, about cards, contact card):
  ```css
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.7);
  box-shadow: 0 8px 24px rgba(90,100,160,0.14);
  ```
- **Glass pill class** (apply to: nav pill group, logo pill, secondary/"Say hello" CTA, social icon pills):
  ```css
  background: rgba(255,255,255,0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.6);
  ```
- **Active pill** (e.g. current nav item): solid `white` fill, `text-heading` color, `box-shadow: 0 4px 12px rgba(100,100,160,0.18)`, no border needed.
- **Solid CTA** (primary buttons): `background: accent`, `color: white`, `box-shadow: 0 8px 20px rgba(108,92,231,0.32)`.
- **Tag pill**: `background: rgba(255,255,255,0.7)`, `border: 1px solid rgba(108,92,231,0.25)`, `color: accent`.

### Spacing & Layout

- Page background (`<main>`) is a single flat `bg` (`#c9d4ee`) — no noise texture, no radial glow (both removed from `page.tsx`).
- Each section keeps its existing `py-28` vertical padding and `max-w-5xl mx-auto px-6 sm:px-12` container.
- Add `border-top: 1px solid rgba(255,255,255,0.5)` to every section except the first (Hero), to create the subtle divider rhythm validated in mockups. In Tailwind: `border-t border-white/50` on all sections after Hero.

## Global File Changes

### `app/layout.tsx`
- Remove `Playfair_Display`, `Instrument_Serif`, `DM_Sans` imports and their font instances.
- Keep `Outfit`, expand `weight` to `["400", "500", "600", "700", "800"]`.
- `<html className={outfit.variable}>`, `<body className="font-outfit">` (drop the playfair variable).

### `app/globals.css`
- Remove the commented-out `@theme inline` block (dead code referencing old font vars).
- Add CSS custom properties for the glass tokens so components don't repeat raw rgba strings:
  ```css
  @import "tailwindcss";

  :root {
    --glass-bg: rgba(255, 255, 255, 0.55);
    --glass-bg-pill: rgba(255, 255, 255, 0.45);
    --glass-border: rgba(255, 255, 255, 0.7);
    --glass-border-pill: rgba(255, 255, 255, 0.6);
    --glass-shadow: 0 8px 24px rgba(90, 100, 160, 0.14);
  }

  html {
    scroll-behavior: smooth;
  }

  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
  }

  .glass-pill {
    background: var(--glass-bg-pill);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border-pill);
  }

  .no-scrollbar {
    scrollbar-width: none;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  ```
- Components use `className="glass-card ..."` or `className="glass-pill ..."` plus Tailwind utilities for layout/spacing/typography. Color values (`#c9d4ee`, `#6c5ce7`, `#2b2b40`, `#4d5780`, `#3b3f5c`, `#b8c4ff`) are applied via Tailwind arbitrary-value classes (e.g. `bg-[#c9d4ee]`, `text-[#6c5ce7]`) directly on elements, consistent with the existing codebase convention of inline hex values.

### `app/page.tsx`
- Change `<main className="relative bg-[#080a10] overflow-hidden">` to `<main className="relative bg-[#c9d4ee] overflow-hidden">`.
- Delete the noise-texture `<div>` and the rust radial-glow `<div>` entirely — flat background only, no ambient effects.
- Section order unchanged: `Hero, Skills, Work, Projects, About, Contact`.
- Add `border-t border-white/50` to `Skills`, `Work`, `Projects`, `About`, `Contact` sections' outer `<section>` element (Hero has no top border, being first).

## Section-by-Section Specs

### Hero (`components/Hero.tsx`)

- **Nav**: Replace the current plain-text nav with a glass pill group, matching the mockups:
  - Left: logo/name as a `glass-pill` pill, e.g. "JL" or "James Liu", `rounded-full px-[18px] py-2`, weight 700.
  - Center/right: nav links (Skills, Work, Projects, About, Contact) inside a single `glass-pill` container (`rounded-full p-1.5 flex gap-1.5`); each link is its own pill (`rounded-full px-[18px] py-2 text-sm`). The link matching the current scroll section gets the **active pill** treatment (solid white, `text-heading`, shadow) — reuse `useInView`/scroll-spy logic if straightforward, otherwise default to no active state on load (acceptable for v1; don't over-engineer scroll-spy if it adds significant complexity).
  - Far right: GitHub, LinkedIn, and Resume — keep as icon links but recolor icons to `text-body` (`#4d5780`) with hover to `text-heading`; Resume becomes a small `glass-pill` pill with the existing resume icon + "Resume" label, `text-[#6c5ce7]`.
  - Remove the decorative SVG curve/dot (`stroke="#c0392b"`) — it belongs to the old rust aesthetic and has no equivalent in the new flat/glass language.
- **Headline**: Keep "James" / "Liu" as two stacked lines (existing content), recolor to `text-[#2b2b40]`, weight 800, Outfit (drop `font-playfair`), `text-5xl sm:text-7xl leading-[1.05] tracking-tight`. Keep the existing framer-motion stagger (`headlineVariants`/`lineVariants`) — animation logic is unchanged, only colors/font/sizes change.
- **"Open to SWE internships" label**: restyle from plain colored text to a small `glass-pill` (`rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.16em]`, text color `#6c5ce7`).
- **Subline**: "CS @ UMass — computer vision & machine learning. I build software for the people using it, not the metrics watching them." — recolor to `text-[#4d5780]`, keep `text-sm leading-[1.8] max-w-xs`. The "CS @ UMass..." span keeps slightly stronger weight via `text-[#2b2b40]` or `font-medium` instead of the old `text-[#b8bdd4]`.
- **CTA row**: "See my work" becomes the **solid CTA** (`bg-[#6c5ce7] text-white rounded-full px-6 py-[11px] shadow-[0_8px_20px_rgba(108,92,231,0.32)]`). "Say hello" becomes a **glass pill** (`glass-pill rounded-full px-6 py-[11px] text-[#2b2b40]`). Keep `whileTap={{ scale: 0.96 }}`.
- **"Scroll to explore"**: recolor the line and label to `#4d5780` / the line to `rgba(255,255,255,0.6)`; keep the bobbing animation.
- **Featured project cards** (Badminton AI Analyst / Lectro, shown as horizontal scroll on mobile / stacked on desktop): convert both from dark cards (`bg-[#0b0e20]`/`bg-[#0d0f18]`, `border-[#1a1e30]`) to `glass-card rounded-[18px] p-5`. "Featured project" / "HackUMass XIII" labels become `text-[10px] uppercase tracking-[0.13em] text-[#6c5ce7] font-bold`. Titles `text-[#2b2b40]`, descriptions `text-[#4d5780]`. The "Live" pulsing dot stays green (`#4dbd78]`) — color is functional, not part of the rust palette, no change needed.

### Skills (`components/Skills.tsx`)

- Section label "Skills" → `text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold`.
- Section title "Toolbox" → `text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight` (drop `font-light`, this is now bold/Outfit).
- Grid of category cards: each becomes `glass-card rounded-[18px] px-5 py-5`. Category name (`Languages`, etc.) → `text-[10px] tracking-[0.2em] uppercase text-[#6c5ce7] font-bold mb-3`.
- Tags: convert from outlined pills (`border-[#c0392b]/20`, `text-[#c0392b]`) to **tag pills**: `bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[11px] font-bold rounded-full px-3 py-1`.
- Grid layout (`grid-cols-1 sm:grid-cols-2 gap-4`) and `FadeUp` stagger unchanged.

### Projects (`components/Projects.tsx`)

This section gets restructured from a single detailed project breakdown into **a horizontal-scrolling row of project cards** (the chosen layout). Show three projects:

1. **Badminton AI Analyst** (featured/live) — existing project, currently the only one detailed.
2. **Lectro** — HackUMass XIII project, currently only referenced in Hero's featured-project card.
3. **Portfolio site** — this site itself (Next.js + glassmorphism), as a lightweight third card.

- Section label "Projects" / title "Things I've built" — same treatment as Skills (label: `text-[#6c5ce7]` uppercase tracking-wide bold; title: `text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight`).
- Card row: `flex gap-4 overflow-x-auto pb-2 no-scrollbar` (uses the `.no-scrollbar` utility from `globals.css`). On mobile this scrolls naturally via touch; on desktop, mouse-wheel horizontal scroll is not required — trackpad/shift-scroll is sufficient for v1.
- Each card: `glass-card rounded-[18px] p-5 min-w-[260px] sm:min-w-[280px] flex-shrink-0` containing:
  - **Visual placeholder block**: `h-[90px] rounded-[12px] flex items-center justify-center text-white text-[10px] font-bold tracking-widest mb-3`. Background alternates between `bg-[#6c5ce7]` (text `text-white`) and `bg-[#b8c4ff]` (text `text-[#2b2b40]`) per card — card 1 uses `#6c5ce7`, card 2 uses `#b8c4ff`, card 3 uses `#6c5ce7`. Label text: `"DEMO"` / `"PREVIEW"` / `"PREVIEW"` respectively (placeholder text until real screenshots/GIFs are added — replacing this `<div>` with an `<img>`/`<video>` later is a drop-in change, no layout restructure needed).
  - **Title row**: card title (`text-[15px] font-bold text-[#2b2b40]`) + for Badminton AI Analyst only, a "Live" pill (`flex items-center gap-1.5 text-[10px] uppercase tracking-[0.08em] text-[#4dbd78]` with the existing pulsing dot).
  - **Description**: `text-[11px] text-[#4d5780] leading-relaxed mb-3`, 2 lines max (use `line-clamp-2`):
    - Badminton AI Analyst: "Computer vision platform tracking players, shuttlecock, and court zones in real time, with Gemini AI generating tactical match analysis."
    - Lectro: "Accessibility-focused lecture tool built at HackUMass XIII — live captioning and structured note generation for lecture audio."
    - Portfolio site: "This site — Next.js, glassmorphism, and way too many design revisions."
  - **Tag pills** (same style as Skills): Badminton AI Analyst → `YOLOv8`, `OpenCV`, `Gemini AI`; Lectro → `Python`, `Gemini AI`; Portfolio site → `Next.js`, `React`.
  - **Links** (Badminton AI Analyst and Lectro only, if repos/demos exist): small text links below tags, `text-[11px] text-[#6c5ce7] underline-offset-2 hover:underline`, e.g. "GitHub" / "View live". Portfolio site card can omit links or link "View source" to the repo.
- The previous detailed "What I built" 4-item breakdown grid is **removed** from Projects — that level of detail doesn't fit the compact card format. (If a deeper case-study page is wanted later, that's a separate future feature, out of scope here.)
- `FadeUp` wraps the whole row (single fade-in), not each card individually — staggering isn't needed for a horizontal scroller.

### Work (`components/Work.tsx`)

- Section label/title: same treatment as Skills/Projects (`text-[#6c5ce7]` label, `text-[#2b2b40]` extrabold title).
- The GridRaster card becomes one `glass-card rounded-[20px] p-6 sm:p-8` (replacing the current two-tone bordered box with separate header/body backgrounds).
- **Header row**: company name "GridRaster Inc." (`text-lg font-bold text-[#2b2b40]`) + role/dates as a tag-pill-style badge on the right: `bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[10px] uppercase tracking-wide font-bold rounded-full px-3.5 py-1.5`, text "Software Engineering Contractor · Jul–Aug 2025".
- **Quote**: existing summary paragraph, restyled as `text-sm text-[#3b3f5c] leading-[1.75] border-l-[3px] border-[#6c5ce7] pl-4 mb-6`.
- **"What I shipped" label**: `text-[10px] tracking-[0.2em] uppercase text-[#6c5ce7] font-bold mb-3`.
- **Shipped items**: convert the 2x2 grid of bordered boxes into the **numbered-list pattern** from Projects' earlier exploration — `grid grid-cols-1 sm:grid-cols-2 gap-3`, each item is `flex gap-3`:
  - Number: `text-lg font-extrabold text-[#6c5ce7]/40` (e.g. "01"–"04")
  - Content: title `text-xs font-bold text-[#2b2b40] mb-0.5`, description `text-[11px] text-[#4d5780] leading-relaxed`
  - No card border/background per item — these sit directly on the glass card's surface (avoids "card inside a card").
- **Tags row**: same tag-pill style as Skills/Projects.
- `FadeUp` stagger on shipped items preserved.

### About (`components/About.tsx`)

Replace the single placeholder paragraph with **two glass cards side-by-side** (stack on mobile), per the full-page mockup:

- Section label/title: same treatment as other sections ("About" / "About me").
- Layout: `grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6`.
- Card 1 (`glass-card rounded-[18px] p-6`, `text-sm text-[#3b3f5c] leading-[1.8]`):
  > "CS student at UMass Amherst focused on computer vision and machine learning. I like building things that feel good to use — fast, simple, and a little delightful. Currently looking for SWE internships for Summer 2026."
- Card 2 (same styling):
  > "I've shipped a real-time CV platform (Badminton AI Analyst), cross-compiled C++ libraries for Apple Vision Pro at GridRaster, and built accessibility tools at HackUMass. Outside of code: hackathons, the gym, and whatever new model just dropped."
- `FadeUp` wraps each card with a small stagger delay, consistent with other grids.

### Contact (`components/Contact.tsx`)

- Section label/title: "Get in touch" / "Let's talk." — same treatment, centered (existing `flex flex-col items-center text-center` layout retained).
- Subline replaces the placeholder:
  > "Open to SWE internships and interesting projects — feel free to reach out. Email is the best way to find me."
  Styled `text-sm text-[#4d5780] leading-[1.8] max-w-md mb-8`.
- Wrap the email CTA + social icons in one centered `glass-card rounded-[22px] px-10 py-9 inline-flex flex-col items-center gap-5`:
  - Email becomes the **solid CTA** pill: `bg-[#6c5ce7] text-white text-sm font-semibold rounded-full px-6 py-[11px] shadow-[0_8px_20px_rgba(108,92,231,0.32)]`, `href="mailto:james.hua.liu@gmail.com"`, label `james.hua.liu@gmail.com` (replacing `placeholder@example.com`).
  - Social row below: GitHub + LinkedIn icons, each inside a small `glass-pill` circle (`w-10 h-10 rounded-full flex items-center justify-center`), icon color `text-[#4d5780]` hover `text-[#2b2b40]`. Links unchanged (`github.com/jameshualiu`, `linkedin.com/in/jameshualiu`).
- `FadeUp` staggers (label/title → subline → card) preserved from existing structure.

## Responsive Behavior

- All glass-card grids (Skills, About) already use `grid-cols-1 sm:grid-cols-2` — unchanged, this naturally stacks on mobile.
- Projects' horizontal scroll row works identically on mobile (touch scroll) and desktop (trackpad/shift-scroll); `min-w-[260px]` cards ensure ~1.3 cards visible on a 375px viewport, inviting the scroll affordance.
- Hero's existing mobile (`flex gap-3 overflow-x-auto sm:hidden`) vs. desktop (`hidden sm:flex sm:flex-col`) split for featured project cards is unchanged structurally — only the card styling (glass instead of dark) changes.
- Section divider (`border-t border-white/50`) and `py-28` vertical rhythm apply at all breakpoints.

## Animation Notes

- All existing `framer-motion`/`FadeUp` usage is preserved as-is — this is a visual restyle, not an animation change. Hero's staggered headline reveal, nav fade-in, and "scroll to explore" bob all keep their current timing/easing.
- New: Projects' horizontal scroll row needs `overflow-x-auto` + the `.no-scrollbar` utility (added to `globals.css`) to hide the scrollbar while remaining scrollable.

## Out of Scope

- Scroll-spy active-nav-pill logic is a nice-to-have; if implementing it adds meaningful complexity, ship without it (default: no pill marked active) rather than blocking the redesign.
- Real project screenshots/GIFs/videos for the Projects visual placeholders — solid color blocks with placeholder labels (`DEMO`/`PREVIEW`) ship for now; swapping in real media is a future content task.
- Dark mode — not part of this redesign; site is single-theme (light/periwinkle).
- Resume link URL, GitHub/LinkedIn URLs, and the contact email address are carried over from existing code/placeholders with the one noted change (contact email); further content edits are out of scope.
