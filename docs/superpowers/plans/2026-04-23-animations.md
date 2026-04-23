# Animations & Finishing Touches Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Framer Motion entrance animations to the hero, scroll-triggered reveals to Work/Projects, and small interaction polish throughout.

**Architecture:** Install framer-motion, create a reusable `FadeUp` scroll-reveal wrapper, then animate Hero (entrance sequence), Work, and Projects (scroll reveals). All animation components are client components — the rest of the codebase stays as-is.

**Tech Stack:** Next.js 16, React 19, Framer Motion, Tailwind CSS v4

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `package.json` | Modify | Add framer-motion dependency |
| `components/FadeUp.tsx` | Create | Reusable scroll-triggered fade+slide-up wrapper |
| `components/Hero.tsx` | Modify | Entrance sequence: nav, headline stagger, subtext, CTAs, cards |
| `components/Work.tsx` | Modify | Scroll reveals: section header, card, grid items, tags |
| `components/Projects.tsx` | Modify | Scroll reveals: section header, card, grid items, tags |

---

### Task 1: Install Framer Motion

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install the package**

```bash
npm install framer-motion
```

- [ ] **Step 2: Verify install**

```bash
grep '"framer-motion"' package.json
```
Expected output: a line like `"framer-motion": "^11.x.x"`

- [ ] **Step 3: Confirm dev server still starts**

```bash
npm run dev
```
Expected: no errors, server runs on localhost:3000

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install framer-motion"
```

---

### Task 2: Create FadeUp reusable component

**Files:**
- Create: `components/FadeUp.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add components/FadeUp.tsx
git commit -m "feat: add FadeUp scroll-reveal component"
```

---

### Task 3: Animate the Hero entrance sequence

**Files:**
- Modify: `components/Hero.tsx`

The sequence is: nav fades down → headline lines stagger up (delay 0.3s, 80ms between lines) → subtext slides up → CTAs slide up → mobile scroll cards fade in.

- [ ] **Step 1: Add `"use client"` directive and import motion**

At the top of `components/Hero.tsx`, add:

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
```

- [ ] **Step 2: Define animation variants above the component**

Add these constants before the `export default function Hero()` line:

```tsx
const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};
```

- [ ] **Step 3: Wrap the `<nav>` with motion**

Replace:
```tsx
<nav className="relative max-w-5xl mx-auto w-full flex items-center justify-between mb-4">
```
With:
```tsx
<motion.nav
  className="relative max-w-5xl mx-auto w-full flex items-center justify-between mb-4"
  initial={{ opacity: 0, y: -12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
```
And close with `</motion.nav>` instead of `</nav>`.

- [ ] **Step 4: Animate the headline**

Replace the `<h1>` block:
```tsx
<h1 className="font-playfair text-[52px] sm:text-[72px] leading-[0.94] text-[#e8ecf8] tracking-tight mb-7">
  Building
  <br />
  things that
  <br />
  <em className="text-[#4a6ef5]">matter.</em>
</h1>
```
With:
```tsx
<motion.h1
  className="font-playfair text-[52px] sm:text-[72px] leading-[0.94] text-[#e8ecf8] tracking-tight mb-7"
  variants={headlineVariants}
  initial="hidden"
  animate="visible"
>
  <motion.span className="block" variants={lineVariants}>Building</motion.span>
  <motion.span className="block" variants={lineVariants}>things that</motion.span>
  <motion.span className="block" variants={lineVariants}>
    <em className="text-[#4a6ef5]">matter.</em>
  </motion.span>
</motion.h1>
```

- [ ] **Step 5: Animate subtext and CTAs**

Replace the subtext `<p>`:
```tsx
<p className="text-[#8890b0] text-sm leading-[1.8] max-w-xs font-light tracking-wide mb-9">
```
With:
```tsx
<motion.p
  className="text-[#8890b0] text-sm leading-[1.8] max-w-xs font-light tracking-wide mb-9"
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: 0.62 }}
>
```
And close with `</motion.p>`.

Replace the CTA `<div className="flex items-center gap-3 mb-8 sm:mb-0">`:
```tsx
<motion.div
  className="flex items-center gap-3 mb-8 sm:mb-0"
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: 0.74 }}
>
```
And close with `</motion.div>`.

- [ ] **Step 6: Add whileTap to CTA buttons**

Wrap each `<Link>` in the CTA div with `motion(Link)`. At the top of the file (after the other imports), add:

```tsx
import { motion } from "framer-motion";
const MotionLink = motion(Link);
```

Then replace the two `<Link>` elements inside the CTA div:
```tsx
<MotionLink
  href="#work"
  className="bg-[#4a6ef5] text-white text-sm font-medium px-6 py-[11px] rounded-full hover:opacity-85 transition-opacity duration-200 tracking-wide"
  whileTap={{ scale: 0.96 }}
>
  See my work
</MotionLink>
<MotionLink
  href="#contact"
  className="text-[#5a6080] text-sm px-6 py-[11px] rounded-full border border-[#1e2235] hover:border-[#5a6080] hover:text-[#b8bdd4] transition-all duration-200 tracking-wide"
  whileTap={{ scale: 0.96 }}
>
  Say hello
</MotionLink>
```

- [ ] **Step 7: Animate the mobile scroll strip**

Replace the outer div of the mobile scroll strip:
```tsx
<div
  className="flex gap-3 overflow-x-auto pb-2 sm:hidden"
  style={{ scrollbarWidth: "none" }}
>
```
With:
```tsx
<motion.div
  className="flex gap-3 overflow-x-auto pb-2 sm:hidden"
  style={{ scrollbarWidth: "none" }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.86 }}
>
```
And close with `</motion.div>`.

- [ ] **Step 8: Animate the scroll hint**

Replace the scroll hint vertical line div:
```tsx
<div className="w-px h-7 bg-[#1e2235]" />
```
With:
```tsx
<motion.div
  className="w-px h-7 bg-[#1e2235]"
  animate={{ y: [0, 6, 0] }}
  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
/>
```

- [ ] **Step 9: Verify in browser**

Run `npm run dev` and open localhost:3000. On load you should see:
- Nav slides down from above
- Headline lines appear one by one
- Subtext and CTAs fade up after headline
- Scroll hint bouncing

- [ ] **Step 10: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add hero entrance animations"
```

---

### Task 4: Add scroll-triggered reveals to Work section

**Files:**
- Modify: `components/Work.tsx`

- [ ] **Step 1: Add `"use client"` and import FadeUp**

At the top of `components/Work.tsx`:

```tsx
"use client";
import FadeUp from "./FadeUp";
```

Remove the unused `import Link from "next/link"` if it's still there.

- [ ] **Step 2: Wrap the section header**

Wrap the section header block (the `<p>` label + `<h2>`) in a `FadeUp`:

```tsx
<FadeUp>
  <p className="text-[#4a6ef5] text-xs tracking-[0.16em] uppercase font-medium mb-3">
    Experience
  </p>
  <h2 className="text-[#e8ecf8] text-4xl font-light tracking-tight mb-16">
    Work
  </h2>
</FadeUp>
```

- [ ] **Step 3: Wrap the entire GridRaster card**

Wrap the `<div className="border border-[#1a1e30] rounded-2xl overflow-hidden max-w-4xl">` and everything inside it with:

```tsx
<FadeUp delay={0.1}>
  <div className="border border-[#1a1e30] rounded-2xl overflow-hidden max-w-4xl">
    {/* ... existing card content unchanged ... */}
  </div>
</FadeUp>
```

- [ ] **Step 4: Stagger the shipped grid items**

Replace the `.map()` inside the shipped grid to add staggered delays:

```tsx
{[
  { title: "C++ Library Ports", desc: "Cross-compiled Open3D & LAPACKE on Linux toolchains for VisionOS/iOS targets" },
  { title: "XCFramework Packages", desc: "Production-ready frameworks that cut mixed-reality platform integration time" },
  { title: "Two PoC Apps", desc: "Technical demos with native library integration for stakeholder validation" },
  { title: "Developer Docs", desc: "Onboarding and cross-platform integration reference for the engineering team" },
].map((item, i) => (
  <FadeUp key={item.title} delay={i * 0.07}>
    <div className="bg-[#080a10] border border-[#1a1e30] rounded-xl px-4 py-4">
      <p className="text-[#e8ecf8] text-xs font-medium mb-1.5">{item.title}</p>
      <p className="text-[#5a6080] text-[11px] leading-relaxed font-light">{item.desc}</p>
    </div>
  </FadeUp>
))}
```

Note: Remove the `key` from the inner div and put it on `FadeUp` instead.

- [ ] **Step 5: Fade in tech tags**

Wrap the tech tags container:

```tsx
<FadeUp delay={0.15}>
  <div className="flex flex-wrap gap-2">
    {/* ... tags unchanged ... */}
  </div>
</FadeUp>
```

- [ ] **Step 6: Verify in browser**

Scroll to the Work section — the header, card, grid items, and tags should each animate in as they enter the viewport.

- [ ] **Step 7: Commit**

```bash
git add components/Work.tsx components/FadeUp.tsx
git commit -m "feat: add scroll-triggered reveals to Work section"
```

---

### Task 5: Add scroll-triggered reveals to Projects section

**Files:**
- Modify: `components/Projects.tsx`

- [ ] **Step 1: Add `"use client"` and import FadeUp**

At the top of `components/Projects.tsx`:

```tsx
"use client";
import FadeUp from "./FadeUp";
```

- [ ] **Step 2: Wrap the section header**

```tsx
<FadeUp>
  <p className="text-[#4a6ef5] text-xs tracking-[0.16em] uppercase font-medium mb-3">
    Projects
  </p>
  <h2 className="text-[#e8ecf8] text-4xl font-light tracking-tight mb-16">
    Things I've built
  </h2>
</FadeUp>
```

- [ ] **Step 3: Wrap the Badminton AI card**

```tsx
<FadeUp delay={0.1}>
  <div className="border border-[#4a6ef5]/20 rounded-2xl overflow-hidden max-w-4xl">
    {/* ... existing card content unchanged ... */}
  </div>
</FadeUp>
```

- [ ] **Step 4: Stagger the "What I built" grid items**

```tsx
{[
  { title: "Real-time Detection", desc: "YOLOv8 + OpenCV pipeline tracking players and shuttlecock across video frames" },
  { title: "Court Zone Mapping", desc: "Homography-based court segmentation for positional and spatial analytics" },
  { title: "Gemini AI Integration", desc: "LLM-powered match analysis generating tactical insights from vision data" },
  { title: "Full-stack Platform", desc: "End-to-end web app with video upload, processing pipeline, and results dashboard" },
].map((item, i) => (
  <FadeUp key={item.title} delay={i * 0.07}>
    <div className="bg-[#080a10] border border-[#1a1e30] rounded-xl px-4 py-4">
      <p className="text-[#e8ecf8] text-xs font-medium mb-1.5">{item.title}</p>
      <p className="text-[#5a6080] text-[11px] leading-relaxed font-light">{item.desc}</p>
    </div>
  </FadeUp>
))}
```

- [ ] **Step 5: Fade in tech tags**

```tsx
<FadeUp delay={0.15}>
  <div className="flex flex-wrap gap-2">
    {/* ... tags unchanged ... */}
  </div>
</FadeUp>
```

- [ ] **Step 6: Verify in browser**

Scroll to the Projects section — same staggered reveal behavior as Work.

- [ ] **Step 7: Commit**

```bash
git add components/Projects.tsx
git commit -m "feat: add scroll-triggered reveals to Projects section"
```
