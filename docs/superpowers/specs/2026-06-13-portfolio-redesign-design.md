# Portfolio Visual Refresh + Skills Section — Design

## Context

The portfolio currently uses a dark, editorial style with a generic blue accent (`#4a6ef5`). Following research into SWE/tech portfolio trends and a round of visual exploration (including reference images provided by the user), we're moving to a more distinctive identity: a warm rust/red signature accent and a subtle motion-trail motif, paired with hero copy that's calm and factual rather than a slogan. We're also adding a Skills section, identified by research as a common recruiter expectation that's currently missing.

This redesign is scoped as: **visual identity refresh + new Skills section**. It does not change overall page structure beyond inserting the Skills section, and does not rewrite existing section content beyond the hero.

## 1. Visual Identity Refresh

**Accent color swap:** Replace the blue accent `#4a6ef5` (and its opacity variants, e.g. `#4a6ef5/20`, `#4a6ef5/25`) with a rust/red accent `#c0392b` (and matching opacity variants) everywhere it currently appears. This includes:
- Section eyebrow labels ("Experience", "Projects", "About", "Contact")
- CTA buttons and their backgrounds
- Link/hover states
- Card accent borders and quote-style left borders
- Tag/pill borders and text in Work and Projects sections
- The ambient background glow in `app/page.tsx`

**What stays the same:**
- Dark backgrounds (`#080a10`, `#0d0f18`, `#0b0e20`)
- Body/heading text colors (`#e8ecf8`, `#b8bdd4`, `#8890b0`, `#5a6080`)
- Borders (`#1a1e30`)
- The success/live indicator color (`#4dbd78`) — stays green, it's semantically "live," not part of the brand accent
- Fonts (Playfair Display for headings, Outfit for body)
- Overall layout, spacing, and section structure of Work, Projects, About, Contact

**Motion-trail motif:** A subtle SVG accent — a sweeping curved line with a small dot at one end, in the rust accent color at low opacity (~0.4–0.5) — is added as a background decoration behind the Hero headline. The same motif may be reused sparingly (low opacity, small scale) behind section headers in Work/Projects/About/Contact/Skills to tie sections together, but should not be repeated so often that it becomes visual noise — once per section maximum, and only if it doesn't compete with foreground content.

## 2. Hero Content Update

Changes to `components/Hero.tsx`:

- **Eyebrow label:** changes from "CS · ML · Vision" to **"Open to SWE internships"**, styled in the rust accent color.
- **Headline:** changes from "Building things that matter." to **"James Liu"** — large serif (Playfair Display), same weight/size treatment as the current headline.
- **Subline:** new line below the headline (currently there isn't one) — **"CS @ UMass — computer vision & machine learning. I build software for the people using it, not the metrics watching them."** Styled similar to body copy elsewhere (`#8890b0` or `#b8bdd4`, light weight).
- **CTAs:** "See my work" (→ `#work`) and "Say hello" (→ `#contact`) remain unchanged in text and links, restyled with the rust accent instead of blue.
- **Featured project teaser cards:** remain unchanged in content, restyled with rust accents.
- **Motion-trail SVG:** added as a background element behind the headline, per Section 1.

## 3. New Skills Section

**New file:** `components/Skills.tsx`, following the same structural pattern as `components/About.tsx` and `components/Contact.tsx` (a `<section>` with `id="skills"`, eyebrow label + heading via `FadeUp`, max-width container consistent with other sections).

**Placement:** Inserted into `app/page.tsx` between `<Hero />` and `<Work />`.

**Visual style:** Matches the existing tag-pill pattern from Work/Projects — each category is a card (`#0d0f18` background, `#1a1e30` border, rounded corners) containing a category label and a row of rust-accent pill tags (`#c0392b` text, `#c0392b/20` border, rounded-full), consistent with the tag rows already used in `components/Work.tsx` and `components/Projects.tsx`.

**Content** (grouped into 4 categories, using tags already established in Work/Projects so the content is accurate):

| Category | Tags |
|---|---|
| Languages | Python, C++, TypeScript |
| ML / Computer Vision | PyTorch, YOLOv8, OpenCV, Gemini AI |
| Web | React, Next.js |
| Platforms | VisionOS, iOS, Git |

**Heading:** Eyebrow label "Skills" (rust accent, matching the style of other section eyebrows), heading text "Toolbox" (matches the calm, factual tone established for the hero — avoids a generic "My Skills" heading).

**Nav:** The site nav (in `components/Hero.tsx`) gains a `#skills` link, positioned between the logo and `#work` in the existing nav link order (`#skills`, `#work`, `#projects`, `#about`, `#contact`).

## Out of Scope

- Rewriting About/Contact placeholder copy (separate task, already flagged previously)
- Unused font cleanup (`Instrument_Serif`, `DM_Sans` in `app/layout.tsx`)
- SEO/metadata changes
- Favicon/public asset cleanup
- Any restructuring of Work/Projects/About/Contact content or layout beyond the color swap
