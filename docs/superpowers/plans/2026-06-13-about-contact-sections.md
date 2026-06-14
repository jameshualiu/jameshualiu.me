# About & Contact Sections + Nav/CTA Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build out placeholder `About` and `Contact` sections matching the existing visual language, render them on the page, and fix the dead `#about`/`#contact` nav links and "Say hello" CTA.

**Architecture:** Two new section components (`About.tsx`, `Contact.tsx`) following the existing pattern used by `Work.tsx`/`Projects.tsx` (section + `max-w-5xl` container + `FadeUp` animations). `GitHubIcon`/`LinkedInIcon` are extracted from `Hero.tsx` into a shared `components/icons.tsx` module so `Contact.tsx` can reuse them without duplication. `app/page.tsx` renders the two new sections after `Projects`.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, framer-motion. No test framework is configured — verification is via `npm run lint`, `npx tsc --noEmit`, and a manual check with `npm run dev`.

---

### Task 1: Extract shared icons into `components/icons.tsx`

**Files:**
- Create: `components/icons.tsx`
- Modify: `components/Hero.tsx:1-22`

- [ ] **Step 1: Create the shared icons file**

Create `components/icons.tsx` with the exact content below (this is `GitHubIcon` and `LinkedInIcon` copied verbatim from `Hero.tsx`, made exportable):

```tsx
export function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
```

- [ ] **Step 2: Update `Hero.tsx` to import the shared icons instead of defining them**

In `components/Hero.tsx`, the file currently starts with:

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ResumeIcon() {
```

Replace lines 1-22 (everything from `"use client";` through the closing `}` of `LinkedInIcon`, i.e. up to but not including `function ResumeIcon() {`) with:

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./icons";

const MotionLink = motion(Link);

function ResumeIcon() {
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors (specifically no "duplicate identifier" or "cannot find name" errors for `GitHubIcon`/`LinkedInIcon`)

- [ ] **Step 4: Commit**

```bash
git add components/icons.tsx components/Hero.tsx
git commit -m "refactor: extract GitHubIcon/LinkedInIcon into shared icons module"
```

---

### Task 2: Build the About section

**Files:**
- Modify: `components/About.tsx` (currently an empty stub)

- [ ] **Step 1: Replace the contents of `components/About.tsx`**

The file currently contains:

```tsx
import Link from "next/link";

export default function About() {}
```

Replace the entire file with:

```tsx
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#4a6ef5] text-xs tracking-[0.16em] uppercase font-medium mb-3">
            About
          </p>
          <h2 className="text-[#e8ecf8] text-4xl font-light tracking-tight mb-8">
            About me
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-[#8890b0] text-sm leading-[1.8] max-w-2xl font-light tracking-wide">
            <span className="text-[#b8bdd4] font-normal">
              [Placeholder bio — replace with your own introduction.]
            </span>{" "}
            Write a few sentences about who you are, what you're studying,
            and the kinds of problems, teams, or roles you're looking for.
            Mention the areas you care about most and anything that makes
            your story memorable to a reader.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
```

This matches the `Work.tsx`/`Projects.tsx` section pattern (label + `font-playfair`-free `h2` heading at `text-4xl font-light tracking-tight`, wrapped in `FadeUp`, inside a `max-w-5xl mx-auto px-6 sm:px-12` container) but intentionally has no card wrapper, keeping it as flowing text per the design spec.

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add components/About.tsx
git commit -m "feat: add About section with placeholder bio copy"
```

---

### Task 3: Build the Contact section

**Files:**
- Modify: `components/Contact.tsx` (currently an empty stub)

- [ ] **Step 1: Replace the contents of `components/Contact.tsx`**

The file currently contains:

```tsx
import Link from "next/link";

export default function Contact() {}
```

Replace the entire file with:

```tsx
"use client";
import Link from "next/link";
import FadeUp from "./FadeUp";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col items-center text-center">
        <FadeUp>
          <p className="text-[#4a6ef5] text-xs tracking-[0.16em] uppercase font-medium mb-3">
            Get in touch
          </p>
          <h2 className="text-[#e8ecf8] text-4xl font-light tracking-tight mb-5">
            Let&apos;s talk.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-[#8890b0] text-sm leading-[1.8] max-w-md font-light tracking-wide mb-9">
            [Placeholder — replace with a short note on what kind of
            opportunities you&apos;re open to and the best way to reach you.]
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <Link
            href="mailto:placeholder@example.com"
            className="inline-block bg-[#4a6ef5] text-white text-sm font-medium px-6 py-[11px] rounded-full hover:opacity-85 transition-opacity duration-200 tracking-wide"
          >
            placeholder@example.com
          </Link>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex items-center gap-4 mt-8">
            <Link
              href="https://github.com/jameshualiu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a6080] hover:text-[#e8ecf8] transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </Link>
            <Link
              href="https://linkedin.com/in/jameshualiu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a6080] hover:text-[#e8ecf8] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add components/Contact.tsx
git commit -m "feat: add Contact section with mailto CTA and social links"
```

---

### Task 4: Render the new sections on the page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update `app/page.tsx` to import and render `About` and `Contact`**

The file currently is:

```tsx
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-[#080a10] overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.055] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      {/* Blue ambient glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(74,110,245,0.07) 0%, transparent 65%)",
        }}
      />
      <Hero />
      <Work />
      <Projects />
    </main>
  );
}
```

Replace the import block and the final JSX block as follows:

Change:
```tsx
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
```
to:
```tsx
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
```

Change:
```tsx
      <Hero />
      <Work />
      <Projects />
    </main>
```
to:
```tsx
      <Hero />
      <Work />
      <Projects />
      <About />
      <Contact />
    </main>
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: render About and Contact sections on the home page"
```

---

### Task 5: Lint, build, and manual verification

**Files:** none (verification only)

- [ ] **Step 1: Run lint**

Run: `npm run lint`
Expected: no errors (warnings about unused `Link` import in `About.tsx`/`Contact.tsx` should not occur since both files use `Link` — `About.tsx` does not import `Link` at all per Task 2)

- [ ] **Step 2: Run a production build**

Run: `npm run build`
Expected: build completes successfully with no type or lint errors

- [ ] **Step 3: Manually verify in the browser**

Run: `npm run dev`, open `http://localhost:3000`

Check:
- Clicking "About" and "Contact" in the nav scrolls to the new sections
- Clicking "Say hello" in the hero scrolls to the Contact section
- The About section shows the placeholder bio text
- The Contact section shows the heading, placeholder paragraph, mailto button, and GitHub/LinkedIn icons
- No console errors

Stop the dev server when done (Ctrl+C).

- [ ] **Step 4: No commit needed for this task** (verification only — if any issues were found and fixed, commit those fixes with an appropriate message before moving on)

---

## Notes for the user

- Placeholder bio text in `About.tsx` and placeholder paragraph + email in `Contact.tsx` are marked with `[Placeholder ...]` — search for `Placeholder` to find everything that needs to be replaced with real content and your real email address.
- This plan deliberately does not touch `app/layout.tsx` metadata, `/public` assets, fonts, or add a skills section — those were identified separately as part of the upcoming broader redesign discussion.
