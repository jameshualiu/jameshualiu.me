"use client";
import Link from "next/link";
import FadeUp from "./FadeUp";

const projects = [
  {
    title: "Badminton AI Analyst",
    live: true,
    visual: { label: "DEMO", bg: "bg-[#6c5ce7]", text: "text-white" },
    desc: "Computer vision platform tracking players, shuttlecock, and court zones in real time, with Gemini AI generating tactical match analysis.",
    tags: ["YOLOv8", "OpenCV", "Gemini AI"],
    links: [
      { label: "GitHub", href: "https://github.com/jameshualiu/badminton-ai-analyst" },
      { label: "View live", href: "https://badminton-ai-analyst.vercel.app/" },
    ],
  },
  {
    title: "Lectro",
    live: false,
    visual: { label: "PREVIEW", bg: "bg-[#b8c4ff]", text: "text-[#2b2b40]" },
    desc: "Accessibility-focused lecture tool built at HackUMass XIII — live captioning and structured note generation for lecture audio.",
    tags: ["Python", "Gemini AI"],
    links: [] as { label: string; href: string }[],
  },
  {
    title: "Portfolio site",
    live: false,
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
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card rounded-[18px] p-5 min-w-[260px] sm:min-w-[280px] flex-shrink-0"
              >
                <div
                  className={`${project.visual.bg} ${project.visual.text} h-[90px] rounded-[12px] flex items-center justify-center text-[10px] font-bold tracking-widest mb-3`}
                >
                  {project.visual.label}
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-[#2b2b40] text-[15px] font-bold">
                    {project.title}
                  </h3>
                  {project.live && (
                    <span className="flex items-center gap-1.5 text-[#4dbd78] text-[10px] uppercase tracking-[0.08em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4dbd78] animate-pulse inline-block" />
                      Live
                    </span>
                  )}
                </div>

                <p className="text-[#4d5780] text-[11px] leading-relaxed mb-3 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[11px] font-bold rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex gap-3">
                    {project.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6c5ce7] text-[11px] underline-offset-2 hover:underline"
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
