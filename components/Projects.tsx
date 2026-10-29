"use client";
import Link from "next/link";
import FadeUp from "./FadeUp";
import ZoomableImage from "./ZoomableImage";

type Project = {
  title: string;
  image?: { src: string; thumb: string; width: number; height: number };
  visual?: { label: string; bg: string; text: string };
  desc: string;
  tags: string[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Shuttleye",
    image: { src: "/shuttleye-preview.png", thumb: "/shuttleye-thumb.png", width: 3806, height: 2120 },
    desc: "End-to-end computer vision pipeline for badminton: tracks players and the shuttlecock frame-by-frame, segments rallies, and classifies stroke types to generate match analytics.",
    tags: ["OpenCV", "React", "Express", "FastAPI", "Cloudflare", "Firestore"],
    links: [
      { label: "GitHub", href: "https://github.com/jameshualiu/badminton-ai-analyst" },
      { label: "shuttleye.vercel.app", href: "https://shuttleye.vercel.app" },
    ],
  },
  {
    title: "Nextlisten",
    image: { src: "/nextlisten-preview.png", thumb: "/nextlisten-thumb-v2.png", width: 2000, height: 1158 },
    desc: "A song recommendation engine built on your Spotify listening history. Blends Word2Vec-style embeddings with genre similarity, and explains every pick in plain language.",
    tags: ["Python", "Word2Vec", "scikit-learn", "Postgres"],
    links: [{ label: "urnextlisten.com", href: "https://urnextlisten.com" }],
  },
  {
    title: "Bangbuck",
    image: { src: "/bangbuck-preview.png", thumb: "/bangbuck-thumb.png", width: 2820, height: 2326 },
    desc: "A Python scraper that pulls grocery prices for your location and calculates macros to surface the best price-per-gram-of-protein deals.",
    tags: ["Python", "Web Scraping"],
    links: [{ label: "GitHub", href: "https://github.com/jameshualiu/bangbuck" }],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28">
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
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card rounded-[20px] p-6 grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-6 sm:min-h-[260px]"
              >
                <div className="relative h-[160px] sm:h-auto rounded-[14px] overflow-hidden">
                  {project.image ? (
                    <ZoomableImage
                      src={project.image.src}
                      thumbSrc={project.image.thumb}
                      alt={`${project.title} preview`}
                      width={project.image.width}
                      height={project.image.height}
                    />
                  ) : (
                    <div
                      className={`${project.visual?.bg} ${project.visual?.text} h-full flex items-center justify-center text-xs font-bold tracking-widest`}
                    >
                      {project.visual?.label}
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
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
                    <div className="flex gap-4 mt-auto">
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
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
