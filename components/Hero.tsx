"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

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
    <>
      {/* Hero content */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 sm:px-12">
        <div className="relative max-w-2xl mx-auto w-full flex flex-col items-center text-center">
          <motion.p
            className="glass-pill inline-block text-[#6c5ce7] text-xs tracking-[0.16em] uppercase font-bold rounded-full px-4 py-1.5 mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            Open to work
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
              CS @ UMass — full stack development, AI &amp; ML.
            </span>
            <br />
            I build software to make people&apos;s lives easier and healthier.
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
