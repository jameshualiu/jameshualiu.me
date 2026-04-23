"use client";
import Link from "next/link";
import FadeUp from "./FadeUp";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#4a6ef5] text-xs tracking-[0.16em] uppercase font-medium mb-3">
            Projects
          </p>
          <h2 className="text-[#e8ecf8] text-4xl font-light tracking-tight mb-16">
            Things I've built
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="border border-[#4a6ef5]/20 rounded-2xl overflow-hidden max-w-4xl">
            {/* Top bar */}
            <div className="bg-[#0b0e20] border-b border-[#1a1e30] px-5 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[#e8ecf8] text-lg font-light tracking-wide">
                  Badminton AI Analyst
                </span>
                <span className="flex items-center gap-1.5 text-[#4dbd78] text-[10px] tracking-[0.08em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4dbd78] animate-pulse inline-block" />
                  Live
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Link href="https://github.com/jameshualiu/badminton-ai-analyst" target="_blank" rel="noopener noreferrer" className="text-[#5a6080] text-[11px] border border-[#1a1e30] rounded-full px-3 py-1 hover:text-[#b8bdd4] hover:border-[#5a6080] transition-all duration-200 tracking-wide">
                  GitHub
                </Link>
                <Link href="https://badminton-ai-analyst.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#4a6ef5] text-[11px] border border-[#4a6ef5]/25 rounded-full px-3 py-1 hover:bg-[#4a6ef5]/10 transition-all duration-200 tracking-wide">
                  View live
                </Link>
              </div>
            </div>

            {/* Body */}
            <div className="bg-[#0d0f18] px-5 sm:px-8 py-7">
              <p className="text-[#b8bdd4] text-sm leading-[1.75] font-light border-l-2 border-[#4a6ef5] pl-4 mb-7">
                Built a computer vision platform that tracks players, shuttlecocks,
                and court zones in real time — combining YOLOv8 object detection
                with Gemini AI to generate tactical match analysis from raw video.
              </p>

              <p className="text-[#5a6080] text-[10px] tracking-[0.12em] uppercase mb-3">
                What I built
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {[
                  { title: "Real-time Detection", desc: "YOLOv8 + OpenCV pipeline tracking players and shuttlecock across video frames" },
                  { title: "Court Zone Mapping", desc: "Homography-based court segmentation for positional and spatial analytics" },
                  { title: "Gemini AI Integration", desc: "LLM-powered match analysis generating tactical insights from vision data" },
                  { title: "Full-stack Platform", desc: "End-to-end web app with video upload, processing pipeline, and results dashboard" },
                ].map((item, i) => (
                  <FadeUp key={item.title} delay={i * 0.07}>
                    <div className="bg-[#080a10] border border-[#1a1e30] rounded-xl px-4 py-4 h-full">
                      <p className="text-[#e8ecf8] text-xs font-medium mb-1.5">{item.title}</p>
                      <p className="text-[#5a6080] text-[11px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.15}>
                <div className="flex flex-wrap gap-2">
                  {["YOLOv8", "OpenCV", "Gemini AI", "Python", "React", "Computer Vision"].map((tag) => (
                    <span key={tag} className="text-[#4a6ef5] text-[10px] border border-[#4a6ef5]/20 rounded-full px-3 py-1 tracking-[0.06em]">
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
