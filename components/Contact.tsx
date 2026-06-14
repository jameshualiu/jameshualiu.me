"use client";
import Link from "next/link";
import FadeUp from "./FadeUp";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col items-center text-center">
        <FadeUp>
          <p className="text-[#c0392b] text-xs tracking-[0.16em] uppercase font-medium mb-3">
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
            className="inline-block bg-[#c0392b] text-white text-sm font-medium px-6 py-[11px] rounded-full hover:opacity-85 transition-opacity duration-200 tracking-wide"
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
