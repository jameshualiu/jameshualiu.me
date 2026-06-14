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
        <span className="font-playfair text-[#e8ecf8] text-lg tracking-tight">
          James Liu
        </span>

        <ul className="hidden sm:flex items-center gap-8 list-none">
          {["Skills", "Work", "Projects", "About", "Contact"].map((item) => (
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
            className="flex items-center gap-1.5 text-[#c0392b] text-[11px] border border-[#c0392b]/25 rounded-full px-3 py-1.5 hover:bg-[#c0392b]/10 transition-all duration-200 tracking-wide"
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
          <svg
            className="absolute -top-16 -left-12 w-[420px] h-[420px] pointer-events-none opacity-40 -z-10"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            <path d="M-20 380 C 120 360, 220 120, 420 30" stroke="#c0392b" strokeWidth="2" />
            <circle cx="416" cy="30" r="4" fill="#c0392b" />
          </svg>

          <motion.p
            className="text-[#c0392b] text-xs tracking-[0.16em] uppercase font-medium mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            Open to SWE internships
          </motion.p>

          <motion.h1
            className="font-playfair text-[52px] sm:text-[72px] leading-[0.94] text-[#e8ecf8] tracking-tight mb-7"
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
            className="text-[#8890b0] text-sm leading-[1.8] max-w-xs font-light tracking-wide mb-9"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.62 }}
          >
            <span className="text-[#b8bdd4] font-normal">
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
              className="bg-[#c0392b] text-white text-sm font-medium px-6 py-[11px] rounded-full hover:opacity-85 transition-opacity duration-200 tracking-wide"
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
          <div className="min-w-[200px] bg-[#0b0e20] border border-[#c0392b]/20 rounded-2xl p-4 flex-shrink-0">
            <p className="text-[#c0392b] text-[10px] uppercase tracking-[0.13em] font-medium mb-2">
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
            <p className="text-[#c0392b] text-[10px] uppercase tracking-[0.13em] font-medium mb-2">
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
          <div className="w-60 bg-[#0b0e20] border border-[#c0392b]/20 rounded-2xl p-5">
            <p className="text-[#c0392b] text-[10px] uppercase tracking-[0.13em] font-medium mb-2">
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
            <p className="text-[#c0392b] text-[10px] uppercase tracking-[0.13em] font-medium mb-2">
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
