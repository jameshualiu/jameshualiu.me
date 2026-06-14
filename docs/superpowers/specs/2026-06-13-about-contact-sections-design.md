# About & Contact Sections + Nav/CTA Fix

## Problem

The nav bar and hero CTA in `Hero.tsx` link to `#about` and `#contact`, but `About.tsx` and `Contact.tsx` are empty stub components that aren't rendered in `page.tsx`. This makes "About", "Contact" (nav) and "Say hello" (hero CTA) dead links.

## Goal

Build out `About` and `Contact` as real sections matching the existing visual language, render them on the page, and ensure the existing anchor links resolve correctly. Content will be placeholder text for the user to fill in later. No broader redesign in this pass — that's a separate follow-up.

## Design

### About section (`components/About.tsx`)
- `<section id="about" className="py-28">` matching `Work`/`Projects` spacing (`max-w-5xl mx-auto px-6 sm:px-12`)
- `FadeUp`-wrapped uppercase label ("About") + `font-playfair text-4xl font-light tracking-tight` heading ("About me")
- Below: a short placeholder bio paragraph using existing text styling (`text-[#8890b0] text-sm leading-[1.8] font-light`, with a `text-[#b8bdd4] font-normal` lead-in span, same pattern as the Hero intro paragraph)
- No card wrapper — flowing text only, to avoid "everything is a card" repetition
- Placeholder copy: 2-3 generic sentences (CS @ UMass, ML/CV interest, what kind of role/work the user is looking for) clearly marked as placeholder via content, not via comments

### Contact section (`components/Contact.tsx`)
- `<section id="contact" className="py-28">` same container pattern
- Centered content: `FadeUp`-wrapped uppercase label ("Get in touch") + `font-playfair text-4xl font-light tracking-tight` heading ("Let's talk.")
- One short supporting line of placeholder text
- Primary CTA: `mailto:` link styled like the Hero's "See my work" button (`bg-[#4a6ef5] text-white rounded-full px-6 py-[11px]`), placeholder email address
- Secondary row: reuse `GitHubIcon`/`LinkedInIcon` from `Hero.tsx` as repeated links below the CTA

### Icon reuse
`GitHubIcon` and `LinkedInIcon` are currently defined inline in `Hero.tsx`. Extract them into a small shared module (`components/icons.tsx`) so both `Hero` and `Contact` can import them without duplication.

### Wiring
- `app/page.tsx`: import and render `<About />` and `<Contact />` after `<Projects />`
- No changes needed to `Hero.tsx` nav/CTA — links already point to `#about`/`#contact`, they'll now resolve

## Out of scope
- Bio/contact copywriting (user will fill in)
- Page metadata, favicon, unused font cleanup, skills section — discussed separately as part of the upcoming redesign
