"use client";
import Link from "next/link";
import FadeUp from "./FadeUp";

const projects = [
  {
    title: "Shuttleye",
    visual: { label: "DEMO", bg: "bg-[#6c5ce7]", text: "text-white" },
    desc: "End-to-end computer vision pipeline for badminton: tracks players and the shuttlecock frame-by-frame, segments rallies, and classifies stroke types to generate match analytics.",
    tags: ["YOLOv8", "OpenCV", "Gemini AI"],
    links: [
      { label: "GitHub", href: "https://github.com/jameshualiu/badminton-ai-analyst" },
      { label: "View live", href: "https://badminton-ai-analyst.vercel.app/" },
    ],
  },
  {
    title: "Bangbuck",
    visual: { label: "PREVIEW", bg: "bg-[#b8c4ff]", text: "text-[#2b2b40]" },
    desc: "A Python scraper that calculates price-per-gram-of-protein across grocery sites to surface the best nutritional value-for-money.",
    tags: ["Python", "Web Scraping"],
    links: [] as { label: string; href: string }[],
  },
  {
    title: "Portfolio site",
    visual: { label: "PREVIEW", bg: "bg-[#6c5ce7]", text: "text-white" },
    desc: "This site — Next.js, glassmorphism, and way too many design revisions.",
    tags: ["Next.js", "React"],
    links: [{ label: "View source", href: "https://github.com/jameshualiu/jameshualiu.me" }],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            Projects
          </p>
          <h2 className="text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight mb-16">
            Things I&apos;ve built
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card rounded-[20px] p-6"
              >
                <div
                  className={`${project.visual.bg} ${project.visual.text} h-[120px] rounded-[14px] flex items-center justify-center text-xs font-bold tracking-widest mb-4`}
                >
                  {project.visual.label}
                </div>

                <h3 className="text-[#2b2b40] text-lg font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-[#4d5780] text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[11px] font-bold rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex gap-4">
                    {project.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6c5ce7] text-sm font-semibold underline-offset-2 hover:underline"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
