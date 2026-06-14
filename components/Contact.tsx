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
