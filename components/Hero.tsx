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
        <span className="font-playfair text-[#e8ecf8] text-lg tracking-tight">
          James Liu
        </span>

        <ul className="hidden sm:flex items-center gap-8 list-none">
          {["Work", "Projects", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-[#5a6080] text-sm hover:text-[#e8ecf8] transition-colors duration-200 tracking-wide"
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
          <Link
            href="https://drive.google.com/file/d/1qRnDHmwKeTUix9lrmkF6mwbyZJ5CnJxi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#4a6ef5] text-[11px] border border-[#4a6ef5]/25 rounded-full px-3 py-1.5 hover:bg-[#4a6ef5]/10 transition-all duration-200 tracking-wide"
          >
            <ResumeIcon />
            <span className="hidden sm:inline">Resume</span>
          </Link>
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="relative flex-1 max-w-5xl mx-auto w-full flex flex-col sm:grid sm:grid-cols-2 sm:items-center pb-16">
        {/* Left — headline + CTA */}
        <div>
          <motion.p
            className="text-[#4a6ef5] text-xs tracking-[0.16em] uppercase font-medium mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            CS · ML · Vision
          </motion.p>

          <motion.h1
            className="font-playfair text-[52px] sm:text-[72px] leading-[0.94] text-[#e8ecf8] tracking-tight mb-7"
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="block" variants={lineVariants}>
              Building
            </motion.span>
            <motion.span className="block" variants={lineVariants}>
              things that
            </motion.span>
            <motion.span className="block" variants={lineVariants}>
              <em className="text-[#4a6ef5]">matter.</em>
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-[#8890b0] text-sm leading-[1.8] max-w-xs font-light tracking-wide mb-9"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.62 }}
          >
            <span className="text-[#b8bdd4] font-normal">
              Computer Science at UMass Amherst.
            </span>{" "}
            I build at the intersection of computer vision, ML, and real
            products people actually use.
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.74 }}
          >
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
          </motion.div>

          <motion.div
            className="flex items-center gap-2.5 mt-8 mb-8 sm:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.div
              className="w-px h-7 bg-[#3a4060]"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-[#4a5070] text-[11px] uppercase tracking-[0.1em]">
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll strip */}
        <motion.div
          className="flex gap-3 overflow-x-auto pb-2 sm:hidden"
          style={{ scrollbarWidth: "none" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.86 }}
        >
          <div className="min-w-[200px] bg-[#0b0e20] border border-[#4a6ef5]/20 rounded-2xl p-4 flex-shrink-0">
            <p className="text-[#4a6ef5] text-[10px] uppercase tracking-[0.13em] font-medium mb-2">
              Featured project
            </p>
            <h3 className="font-playfair text-[#e8ecf8] text-[15px] leading-tight mb-1.5">
              Badminton AI Analyst
            </h3>
            <p className="text-[#6870a0] text-[11px] leading-relaxed font-light">
              YOLOv8 · OpenCV · Gemini AI
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4dbd78] animate-pulse" />
              <span className="text-[#5a6080] text-[11px]">Live</span>
            </div>
          </div>
          <div className="min-w-[180px] bg-[#0d0f18] border border-[#1a1e30] rounded-2xl p-4 flex-shrink-0">
            <p className="text-[#4a6ef5] text-[10px] uppercase tracking-[0.13em] font-medium mb-2">
              HackUMass XIII
            </p>
            <h3 className="font-playfair text-[#e8ecf8] text-[15px] leading-tight mb-1.5">
              Lectro
            </h3>
            <p className="text-[#5a6080] text-[11px] leading-relaxed font-light">
              Accessibility-focused lecture tool
            </p>
          </div>
        </motion.div>

        {/* Desktop: stacked */}
        <div className="hidden sm:flex sm:flex-col sm:items-end sm:gap-4">
          <div className="w-60 bg-[#0b0e20] border border-[#4a6ef5]/20 rounded-2xl p-5">
            <p className="text-[#4a6ef5] text-[10px] uppercase tracking-[0.13em] font-medium mb-2">
              Featured project
            </p>
            <h3 className="font-playfair text-[#e8ecf8] text-[17px] leading-tight mb-1.5">
              Badminton AI Analyst
            </h3>
            <p className="text-[#6870a0] text-[11px] leading-relaxed font-light">
              YOLOv8 · OpenCV · Gemini AI
              <br />
              Real-time court tracking
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4dbd78] animate-pulse" />
              <span className="text-[#5a6080] text-[11px]">Live</span>
            </div>
          </div>
          <div className="w-[220px] bg-[#0d0f18] border border-[#1a1e30] rounded-2xl p-5">
            <p className="text-[#4a6ef5] text-[10px] uppercase tracking-[0.13em] font-medium mb-2">
              HackUMass XIII
            </p>
            <h3 className="font-playfair text-[#e8ecf8] text-[17px] leading-tight mb-1.5">
              Lectro
            </h3>
            <p className="text-[#5a6080] text-[11px] leading-relaxed font-light">
              Accessibility-focused lecture tool
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
