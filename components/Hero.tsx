"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
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

const navItems = ["Skills", "Work", "Projects", "About", "Contact"];

function CurveLines({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`hidden lg:block absolute top-0 h-full w-56 opacity-40 ${
        side === "left" ? "left-0 -translate-x-24" : "right-0 translate-x-24 -scale-x-100"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 220 280"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M10,0 C80,60 20,140 90,200 C140,250 60,280 100,320"
          fill="none"
          stroke="#6c5ce7"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50,-20 C120,40 60,120 130,180 C180,230 100,270 140,320"
          fill="none"
          stroke="#b8c4ff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  useMotionValueEvent(scrollY, "change", () => {
    let current = "";
    for (const item of navItems) {
      const el = document.getElementById(item.toLowerCase());
      if (el && el.getBoundingClientRect().top <= 120) {
        current = item.toLowerCase();
      }
    }
    setActiveSection(current);
  });

  return (
    <>
      {/* Nav — fixed so it persists through scroll */}
      <motion.nav
        className="fixed top-0 inset-x-0 z-50 px-6 py-5 sm:px-12 sm:py-6"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
          <span className="glass-pill rounded-full px-[18px] py-2 text-sm font-bold text-[#2b2b40]">
            James Liu
          </span>

          <ul className="hidden sm:flex items-center gap-1.5 glass-pill rounded-full p-1.5 list-none">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <li key={item} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-[#6c5ce7] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Link
                    href={`#${id}`}
                    onClick={() => handleNavClick(id)}
                    className={`relative z-10 block text-sm px-[18px] py-2 rounded-full transition-colors duration-200 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-[#3b3f5c] hover:text-[#2b2b40]"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/jameshualiu"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill w-9 h-9 rounded-full flex items-center justify-center text-[#3b3f5c] hover:text-[#2b2b40] transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </Link>
            <Link
              href="https://linkedin.com/in/jameshualiu"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill w-9 h-9 rounded-full flex items-center justify-center text-[#3b3f5c] hover:text-[#2b2b40] transition-colors duration-200"
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
        </div>
      </motion.nav>

      {/* Hero content */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 sm:px-12 overflow-hidden">
        <CurveLines side="left" />
        <CurveLines side="right" />
        <div className="relative max-w-2xl mx-auto w-full flex flex-col items-center text-center">
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
            className="flex items-center gap-2.5 mt-8"
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
      </section>
    </>
  );
}
