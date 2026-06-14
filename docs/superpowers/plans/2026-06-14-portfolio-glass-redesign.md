# Portfolio Glass Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dark rust/editorial visual style with the flat-periwinkle (`#c9d4ee`) glassmorphism design from `docs/superpowers/specs/2026-06-14-portfolio-glass-redesign-design.md` — white glass cards/pills, Outfit-only typography, `#6c5ce7` purple accent, and real-ish copy for About/Contact.

**Architecture:** Each task fully replaces one file's contents with the new design. Shared glass-effect CSS lives in `app/globals.css` as Tailwind utilities (`.glass-card`, `.glass-pill`, `.no-scrollbar`) so components reference them directly. No new dependencies, no new files — this is a styling/content pass over the existing component set.

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS v4, framer-motion.

**Verification:** This project has no automated test suite. Verification per task is `npm run lint` (must pass with no errors) and a final `npm run build` (Task 10) plus a manual visual check via `npm run dev`.

---

### Task 1: Global glass tokens and utilities

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace the entire contents of `app/globals.css`**

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

@layer utilities {
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
}
```

This removes the dead commented-out `@theme inline` block (referenced fonts that this redesign removes) and adds the glass tokens/utilities used by every component below. Wrapping `.glass-card`/`.glass-pill`/`.no-scrollbar` in `@layer utilities` ensures Tailwind's own utilities (e.g. `hover:bg-white/60`) can still override them via normal specificity — unlayered custom CSS would otherwise always win over layered Tailwind utilities in Tailwind v4.

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: No errors (CSS isn't linted by ESLint, but this confirms the project config is still healthy).

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: add glass-card/glass-pill/no-scrollbar utilities for redesign"
```

---

### Task 2: Drop unused fonts, expand Outfit weights

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace the entire contents of `app/layout.tsx`**

```tsx
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit">{children}</body>
    </html>
  );
}
```

This removes `Playfair_Display`, `Instrument_Serif`, and `DM_Sans` (no longer used anywhere after this redesign) and expands the `Outfit` weight range to cover the new typography scale (400–800).

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "refactor: drop unused fonts, expand Outfit weight range"
```

---

### Task 3: Flat periwinkle page background

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace the entire contents of `app/page.tsx`**

```tsx
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#c9d4ee] overflow-hidden">
      <Hero />
      <Skills />
      <Work />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
```

This removes the noise-texture overlay and the rust ambient glow, and switches the page background from `#080a10` to the flat `#c9d4ee`. Section order is unchanged.

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "style: switch page background to flat periwinkle, remove dark texture/glow"
```

---

### Task 4: Restyle Skills section

**Files:**
- Modify: `components/Skills.tsx`

- [ ] **Step 1: Replace the entire contents of `components/Skills.tsx`**

```tsx
import FadeUp from "./FadeUp";

const categories = [
  { name: "Languages", tags: ["Python", "C++", "TypeScript"] },
  { name: "ML / Computer Vision", tags: ["PyTorch", "YOLOv8", "OpenCV", "Gemini AI"] },
  { name: "Web", tags: ["React", "Next.js"] },
  { name: "Platforms", tags: ["VisionOS", "iOS", "Git"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            Skills
          </p>
          <h2 className="text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight mb-16">
            Toolbox
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {categories.map((category, i) => (
            <FadeUp key={category.name} delay={i * 0.07}>
              <div className="glass-card rounded-[18px] px-5 py-5 h-full">
                <p className="text-[#6c5ce7] text-[10px] tracking-[0.2em] uppercase font-bold mb-3">
                  {category.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[11px] font-bold rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/Skills.tsx
git commit -m "style: restyle Skills section with glass cards"
```

---

### Task 5: Restyle Work section with numbered shipped list

**Files:**
- Modify: `components/Work.tsx`

- [ ] **Step 1: Replace the entire contents of `components/Work.tsx`**

```tsx
"use client";
import FadeUp from "./FadeUp";

const shipped = [
  { title: "C++ Library Ports", desc: "Cross-compiled Open3D & LAPACKE on Linux toolchains for VisionOS/iOS targets" },
  { title: "XCFramework Packages", desc: "Production-ready frameworks that cut mixed-reality platform integration time" },
  { title: "Two PoC Apps", desc: "Technical demos with native library integration presented to the software team" },
  { title: "Developer Docs", desc: "Authored cross-platform integration documentation for future use" },
];

export default function Work() {
  return (
    <section id="work" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            Experience
          </p>
          <h2 className="text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight mb-16">
            Work
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="glass-card rounded-[20px] p-6 sm:p-8 max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <span className="text-[#2b2b40] text-lg font-bold">
                GridRaster Inc.
              </span>
              <span className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[10px] uppercase tracking-wide font-bold rounded-full px-3.5 py-1.5">
                Software Engineering Contractor · Jul–Aug 2025
              </span>
            </div>

            <p className="text-[#3b3f5c] text-sm leading-[1.75] border-l-[3px] border-[#6c5ce7] pl-4 mb-6">
              Enabled native 3D processing on Apple&apos;s mixed-reality platform by
              cross-compiling C++ libraries that had never been built for
              VisionOS — unblocking a core part of the product roadmap.
            </p>

            <p className="text-[#6c5ce7] text-[10px] tracking-[0.2em] uppercase font-bold mb-3">
              What I shipped
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {shipped.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.07}>
                  <div className="flex gap-3">
                    <span className="text-lg font-extrabold text-[#6c5ce7]/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[#2b2b40] text-xs font-bold mb-0.5">{item.title}</p>
                      <p className="text-[#4d5780] text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.15}>
              <div className="flex flex-wrap gap-2">
                {["C++", "VisionOS", "iOS", "XCFramework", "Open3D", "LAPACKE"].map((tag) => (
                  <span key={tag} className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[11px] font-bold rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/Work.tsx
git commit -m "style: restyle Work section with glass card and numbered shipped list"
```

---

### Task 6: Restructure Projects into horizontal-scroll glass card row

**Files:**
- Modify: `components/Projects.tsx`

- [ ] **Step 1: Replace the entire contents of `components/Projects.tsx`**

```tsx
"use client";
import Link from "next/link";
import FadeUp from "./FadeUp";

const projects = [
  {
    title: "Badminton AI Analyst",
    live: true,
    visual: { label: "DEMO", bg: "bg-[#6c5ce7]", text: "text-white" },
    desc: "Computer vision platform tracking players, shuttlecock, and court zones in real time, with Gemini AI generating tactical match analysis.",
    tags: ["YOLOv8", "OpenCV", "Gemini AI"],
    links: [
      { label: "GitHub", href: "https://github.com/jameshualiu/badminton-ai-analyst" },
      { label: "View live", href: "https://badminton-ai-analyst.vercel.app/" },
    ],
  },
  {
    title: "Lectro",
    live: false,
    visual: { label: "PREVIEW", bg: "bg-[#b8c4ff]", text: "text-[#2b2b40]" },
    desc: "Accessibility-focused lecture tool built at HackUMass XIII — live captioning and structured note generation for lecture audio.",
    tags: ["Python", "Gemini AI"],
    links: [] as { label: string; href: string }[],
  },
  {
    title: "Portfolio site",
    live: false,
    visual: { label: "PREVIEW", bg: "bg-[#6c5ce7]", text: "text-white" },
    desc: "This site — Next.js, glassmorphism, and way too many design revisions.",
    tags: ["Next.js", "React"],
    links: [{ label: "View source", href: "https://github.com/jameshualiu/jameshualiu.me" }],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            Projects
          </p>
          <h2 className="text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight mb-16">
            Things I&apos;ve built
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card rounded-[18px] p-5 min-w-[260px] sm:min-w-[280px] flex-shrink-0"
              >
                <div
                  className={`${project.visual.bg} ${project.visual.text} h-[90px] rounded-[12px] flex items-center justify-center text-[10px] font-bold tracking-widest mb-3`}
                >
                  {project.visual.label}
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-[#2b2b40] text-[15px] font-bold">
                    {project.title}
                  </h3>
                  {project.live && (
                    <span className="flex items-center gap-1.5 text-[#4dbd78] text-[10px] uppercase tracking-[0.08em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4dbd78] animate-pulse inline-block" />
                      Live
                    </span>
                  )}
                </div>

                <p className="text-[#4d5780] text-[11px] leading-relaxed mb-3 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[11px] font-bold rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex gap-3">
                    {project.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6c5ce7] text-[11px] underline-offset-2 hover:underline"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx
git commit -m "feat: restructure Projects into horizontal-scroll glass card row"
```

---

### Task 7: About section with real copy and glass cards

**Files:**
- Modify: `components/About.tsx`

- [ ] **Step 1: Replace the entire contents of `components/About.tsx`**

```tsx
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            About
          </p>
          <h2 className="text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
            About me
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeUp delay={0.1}>
            <div className="glass-card rounded-[18px] p-6 text-[#3b3f5c] text-sm leading-[1.8] h-full">
              CS student at UMass Amherst focused on computer vision and
              machine learning. I like building things that feel good to use
              — fast, simple, and a little delightful. Currently looking for
              SWE internships for Summer 2026.
            </div>
          </FadeUp>
          <FadeUp delay={0.17}>
            <div className="glass-card rounded-[18px] p-6 text-[#3b3f5c] text-sm leading-[1.8] h-full">
              I&apos;ve shipped a real-time CV platform (Badminton AI
              Analyst), cross-compiled C++ libraries for Apple Vision Pro at
              GridRaster, and built accessibility tools at HackUMass. Outside
              of code: hackathons, the gym, and whatever new model just
              dropped.
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/About.tsx
git commit -m "content: add real About copy with glass card layout"
```

---

### Task 8: Contact section with real copy and new email

**Files:**
- Modify: `components/Contact.tsx`

- [ ] **Step 1: Replace the entire contents of `components/Contact.tsx`**

```tsx
"use client";
import Link from "next/link";
import FadeUp from "./FadeUp";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col items-center text-center">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            Get in touch
          </p>
          <h2 className="text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight mb-5">
            Let&apos;s talk.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-[#4d5780] text-sm leading-[1.8] max-w-md mb-8">
            Open to SWE internships and interesting projects — feel free to
            reach out. Email is the best way to find me.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="glass-card rounded-[22px] px-10 py-9 inline-flex flex-col items-center gap-5">
            <Link
              href="mailto:james.hua.liu@gmail.com"
              className="bg-[#6c5ce7] text-white text-sm font-semibold px-6 py-[11px] rounded-full shadow-[0_8px_20px_rgba(108,92,231,0.32)] hover:opacity-90 transition-opacity duration-200"
            >
              james.hua.liu@gmail.com
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/jameshualiu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill w-10 h-10 rounded-full flex items-center justify-center text-[#4d5780] hover:text-[#2b2b40] transition-colors duration-200"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://linkedin.com/in/jameshualiu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill w-10 h-10 rounded-full flex items-center justify-center text-[#4d5780] hover:text-[#2b2b40] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/Contact.tsx
git commit -m "content: add real Contact copy with new email and glass card"
```

---

### Task 9: Restyle Hero (nav, headline, CTAs, featured project cards)

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Replace the entire contents of `components/Hero.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./icons";

const MotionLink = motion(Link);

function ResumeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 py-10 sm:px-12">
      {/* Nav */}
      <motion.nav
        className="relative max-w-5xl mx-auto w-full flex items-center justify-between mb-4"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="glass-pill rounded-full px-[18px] py-2 text-sm font-bold text-[#2b2b40]">
          James Liu
        </span>

        <ul className="hidden sm:flex items-center gap-1.5 glass-pill rounded-full p-1.5 list-none">
          {["Skills", "Work", "Projects", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="block text-[#4d5780] text-sm px-[18px] py-2 rounded-full hover:text-[#2b2b40] transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/jameshualiu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4d5780] hover:text-[#2b2b40] transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://linkedin.com/in/jameshualiu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4d5780] hover:text-[#2b2b40] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1qRnDHmwKeTUix9lrmkF6mwbyZJ5CnJxi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill flex items-center gap-1.5 text-[#6c5ce7] text-[11px] font-semibold rounded-full px-3 py-1.5 hover:bg-white/60 transition-colors duration-200"
          >
            <ResumeIcon />
            <span className="hidden sm:inline">Resume</span>
          </Link>
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="relative flex-1 max-w-5xl mx-auto w-full flex flex-col sm:grid sm:grid-cols-2 sm:items-center pb-16">
        {/* Left — headline + CTA */}
        <div className="relative">
          <motion.p
            className="glass-pill inline-block text-[#6c5ce7] text-xs tracking-[0.16em] uppercase font-bold rounded-full px-4 py-1.5 mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            Open to SWE internships
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-7xl font-extrabold leading-[1.05] text-[#2b2b40] tracking-tight mb-7"
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="block" variants={lineVariants}>
              James
            </motion.span>
            <motion.span className="block" variants={lineVariants}>
              Liu
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-[#4d5780] text-sm leading-[1.8] max-w-xs mb-9"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.62 }}
          >
            <span className="text-[#2b2b40] font-medium">
              CS @ UMass — computer vision &amp; machine learning.
            </span>{" "}
            I build software for the people using it, not the metrics
            watching them.
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.74 }}
          >
            <MotionLink
              href="#work"
              className="bg-[#6c5ce7] text-white text-sm font-semibold px-6 py-[11px] rounded-full shadow-[0_8px_20px_rgba(108,92,231,0.32)] hover:opacity-90 transition-opacity duration-200"
              whileTap={{ scale: 0.96 }}
            >
              See my work
            </MotionLink>
            <MotionLink
              href="#contact"
              className="glass-pill text-[#2b2b40] text-sm font-semibold px-6 py-[11px] rounded-full hover:bg-white/60 transition-colors duration-200"
              whileTap={{ scale: 0.96 }}
            >
              Say hello
            </MotionLink>
          </motion.div>

          <motion.div
            className="flex items-center gap-2.5 mt-8 mb-8 sm:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.div
              className="w-px h-7 bg-white/60"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-[#4d5780] text-[11px] uppercase tracking-[0.1em]">
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll strip */}
        <motion.div
          className="flex gap-3 overflow-x-auto pb-2 no-scrollbar sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.86 }}
        >
          <div className="glass-card min-w-[200px] rounded-[18px] p-4 flex-shrink-0">
            <p className="text-[#6c5ce7] text-[10px] uppercase tracking-[0.13em] font-bold mb-2">
              Featured project
            </p>
            <h3 className="text-[#2b2b40] text-[15px] font-bold leading-tight mb-1.5">
              Badminton AI Analyst
            </h3>
            <p className="text-[#4d5780] text-[11px] leading-relaxed">
              YOLOv8 · OpenCV · Gemini AI
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4dbd78] animate-pulse" />
              <span className="text-[#4d5780] text-[11px]">Live</span>
            </div>
          </div>
          <div className="glass-card min-w-[180px] rounded-[18px] p-4 flex-shrink-0">
            <p className="text-[#6c5ce7] text-[10px] uppercase tracking-[0.13em] font-bold mb-2">
              HackUMass XIII
            </p>
            <h3 className="text-[#2b2b40] text-[15px] font-bold leading-tight mb-1.5">
              Lectro
            </h3>
            <p className="text-[#4d5780] text-[11px] leading-relaxed">
              Accessibility-focused lecture tool
            </p>
          </div>
        </motion.div>

        {/* Desktop: stacked */}
        <div className="hidden sm:flex sm:flex-col sm:items-end sm:gap-4">
          <div className="glass-card w-60 rounded-[18px] p-5">
            <p className="text-[#6c5ce7] text-[10px] uppercase tracking-[0.13em] font-bold mb-2">
              Featured project
            </p>
            <h3 className="text-[#2b2b40] text-[17px] font-bold leading-tight mb-1.5">
              Badminton AI Analyst
            </h3>
            <p className="text-[#4d5780] text-[11px] leading-relaxed">
              YOLOv8 · OpenCV · Gemini AI
              <br />
              Real-time court tracking
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4dbd78] animate-pulse" />
              <span className="text-[#4d5780] text-[11px]">Live</span>
            </div>
          </div>
          <div className="glass-card w-[220px] rounded-[18px] p-5">
            <p className="text-[#6c5ce7] text-[10px] uppercase tracking-[0.13em] font-bold mb-2">
              HackUMass XIII
            </p>
            <h3 className="text-[#2b2b40] text-[17px] font-bold leading-tight mb-1.5">
              Lectro
            </h3>
            <p className="text-[#4d5780] text-[11px] leading-relaxed">
              Accessibility-focused lecture tool
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Notes on what changed from the previous version:
- Nav is now a glass pill group (logo pill + link pill group + resume pill), no decorative SVG curve.
- Headline drops `font-playfair` in favor of the default Outfit `font-extrabold`, recolored to `#2b2b40`, sized `text-5xl sm:text-7xl`.
- "Open to SWE internships" is now a glass pill.
- Subline recolored to `#4d5780` / `#2b2b40` for the emphasized span.
- "See my work" is the solid purple CTA; "Say hello" is a glass pill. Both keep their existing hrefs (`#work`, `#contact`).
- "Scroll to explore" line recolored to `bg-white/60`, label to `#4d5780`.
- Featured project cards (mobile strip + desktop stack) are now `glass-card` with `#6c5ce7`-labeled headers and `#2b2b40`/`#4d5780` text; the `style={{ scrollbarWidth: "none" }}` inline style is replaced by the `.no-scrollbar` utility.

- [ ] **Step 2: Verify lint passes**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "style: restyle Hero with glass nav, pills, and featured project cards"
```

---

### Task 10: Final build verification and visual check

**Files:** None (verification only)

- [ ] **Step 1: Run a full production build**

Run: `npm run build`
Expected: Build completes successfully with no type errors or lint failures.

- [ ] **Step 2: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000`, and confirm:
- Page background is flat `#c9d4ee` across all sections (no dark areas, no noise texture).
- Hero nav renders as glass pills; headline reads "James / Liu" in bold dark text; both CTAs render (solid purple "See my work", glass "Say hello").
- Skills, Work, About cards render as white glass cards with purple accent labels/tags.
- Projects section scrolls horizontally and shows 3 cards (Badminton AI Analyst with "Live" badge, Lectro, Portfolio site).
- Work section shows the numbered (01–04) "What I shipped" list.
- About shows the two new bio cards; Contact shows the new email (`james.hua.liu@gmail.com`) and social icon pills.
- Every section after Hero has a subtle top divider line.

- [ ] **Step 3: Stop the dev server**

Stop the `npm run dev` process once the visual check is complete.

---

## Self-Review Notes

- **Spec coverage:** Every section of the spec (design tokens, `layout.tsx`/`globals.css`/`page.tsx` changes, and Hero/Skills/Projects/Work/About/Contact specs) maps to Tasks 1–9. Section ordering (`Hero, Skills, Work, Projects, About, Contact`) matches both the spec and the existing `page.tsx`.
- **Placeholder scan:** No TBD/TODO; all copy, colors, and links are concrete values from the spec.
- **Type consistency:** `Projects.tsx`'s `projects` array gives `links: [] as { label: string; href: string }[]` for the Lectro entry so TypeScript infers a consistent array element type across all three project objects (avoids a `never[]` vs `{label,href}[]` mismatch).
- **Divider placement:** The spec described adding `border-t border-white/50` "to `page.tsx`'s sections," but since each section renders its own `<section>` element inside its component, the border is added directly on each component's outer `<section>` (Tasks 4–8; Hero/Task 9 has none, matching "Hero has no top border, being first").
