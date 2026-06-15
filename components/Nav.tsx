"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { GitHubIcon, LinkedInIcon } from "./icons";

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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="w-4 h-3 flex flex-col items-center justify-between">
      <motion.span
        className="block w-4 h-[1.5px] bg-current rounded-full"
        animate={{ rotate: open ? 45 : 0, y: open ? 5.5 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        className="block w-4 h-[1.5px] bg-current rounded-full"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="block w-4 h-[1.5px] bg-current rounded-full"
        animate={{ rotate: open ? -45 : 0, y: open ? -5.5 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </div>
  );
}

const navItems = ["Skills", "Work", "Projects", "About", "Contact"];

const NAV_OFFSET = 90;

function smoothScrollTo(targetY: number, duration = 700, onComplete?: () => void) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function step(now: number) {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onComplete?.();
    }
  }

  requestAnimationFrame(step);
}

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const isProgrammaticScroll = useRef(false);

  const handleNavClick = (e: MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      isProgrammaticScroll.current = true;
      const targetY = window.scrollY + el.getBoundingClientRect().top - NAV_OFFSET;
      smoothScrollTo(targetY, 700, () => {
        isProgrammaticScroll.current = false;
      });
    }
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  useMotionValueEvent(scrollY, "change", () => {
    if (isProgrammaticScroll.current) return;
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
    <motion.nav
      className="fixed top-0 inset-x-0 z-50 px-6 py-5 sm:px-12 sm:py-6"
      initial={{ opacity: 0, marginTop: -12 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="max-w-5xl mx-auto w-full relative flex items-center justify-between">
        <span className="glass-pill rounded-full px-[18px] py-2 text-sm font-bold text-[#2b2b40]">
          James Liu
        </span>

        <ul className="hidden sm:flex items-center gap-1.5 glass-pill rounded-full p-1.5 list-none absolute left-1/2 -translate-x-1/2">
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
                  scroll={false}
                  onClick={(e) => handleNavClick(e, id)}
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

        <div className="hidden sm:flex items-center gap-3">
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

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="sm:hidden glass-pill w-10 h-10 rounded-full flex items-center justify-center text-[#3b3f5c]"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <MenuIcon open={mobileMenuOpen} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="sm:hidden max-w-5xl mx-auto mt-3 glass-card rounded-[20px] p-3 flex flex-col gap-1"
          >
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <Link
                  key={item}
                  href={`#${id}`}
                  scroll={false}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`text-sm px-4 py-2.5 rounded-full transition-colors duration-200 ${
                    isActive
                      ? "bg-[#6c5ce7] text-white font-semibold"
                      : "text-[#3b3f5c] hover:bg-white/50"
                  }`}
                >
                  {item}
                </Link>
              );
            })}

            <div className="flex items-center gap-3 mt-2 px-1">
              <Link
                href="https://github.com/jameshualiu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="glass-pill w-9 h-9 rounded-full flex items-center justify-center text-[#3b3f5c] hover:text-[#2b2b40] transition-colors duration-200"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://linkedin.com/in/jameshualiu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="glass-pill w-9 h-9 rounded-full flex items-center justify-center text-[#3b3f5c] hover:text-[#2b2b40] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1qRnDHmwKeTUix9lrmkF6mwbyZJ5CnJxi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="glass-pill flex items-center gap-1.5 text-[#6c5ce7] text-[11px] font-semibold rounded-full px-3 py-2 hover:bg-white/60 transition-colors duration-200"
              >
                <ResumeIcon />
                <span>Resume</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
