import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/50 py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#4d5780] text-xs">
          &copy; {new Date().getFullYear()} James Liu. Built with Next.js.
        </p>
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
        </div>
      </div>
    </footer>
  );
}
