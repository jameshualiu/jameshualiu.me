"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import FadeUp from "./FadeUp";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:james.hua.liu@gmail.com?subject=${subject}&body=${body}`;
  };

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
            Open to SWE internships and interesting projects — send me a
            message and I&apos;ll get back to you.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-[22px] p-6 sm:p-8 w-full max-w-3xl flex flex-col gap-4 text-left"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-[#3b3f5c] text-xs font-semibold"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="bg-white/70 border border-[#6c5ce7]/25 rounded-full px-4 py-2.5 text-sm text-[#2b2b40] placeholder:text-[#4d5780]/60 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]/40"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[#3b3f5c] text-xs font-semibold"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-white/70 border border-[#6c5ce7]/25 rounded-full px-4 py-2.5 text-sm text-[#2b2b40] placeholder:text-[#4d5780]/60 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]/40"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-[#3b3f5c] text-xs font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                className="bg-white/70 border border-[#6c5ce7]/25 rounded-[16px] px-4 py-2.5 text-sm text-[#2b2b40] placeholder:text-[#4d5780]/60 resize-none focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]/40"
              />
            </div>

            <button
              type="submit"
              className="self-center bg-[#6c5ce7] text-white text-sm font-semibold px-6 py-[11px] rounded-full shadow-[0_8px_20px_rgba(108,92,231,0.32)] cursor-pointer hover:opacity-90 transition-opacity duration-200"
            >
              Send message
            </button>
          </form>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex items-center gap-3 mt-8">
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
        </FadeUp>
      </div>
    </section>
  );
}
