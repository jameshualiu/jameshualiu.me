"use client";
import FadeUp from "./FadeUp";

export default function Work() {
  return (
    <section id="work" className="py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#4a6ef5] text-xs tracking-[0.16em] uppercase font-medium mb-3">
            Experience
          </p>
          <h2 className="text-[#e8ecf8] text-4xl font-light tracking-tight mb-16">
            Work
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="border border-[#1a1e30] rounded-2xl overflow-hidden max-w-4xl">
            {/* Top bar */}
            <div className="bg-[#0b0e20] border-b border-[#1a1e30] px-5 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 justify-between">
              <span className="text-[#e8ecf8] text-lg font-light tracking-wide">
                GridRaster Inc.
              </span>
              <span className="text-[#4a6ef5] text-[10px] border border-[#4a6ef5]/25 rounded-full px-3 py-1 tracking-[0.08em] uppercase">
                Software Engineering Contractor: JULY - AUG 2025
              </span>
            </div>

            {/* Body */}
            <div className="bg-[#0d0f18] px-5 sm:px-8 py-7">
              <p className="text-[#b8bdd4] text-sm leading-[1.75] font-light border-l-2 border-[#4a6ef5] pl-4 mb-7">
                Enabled native 3D processing on Apple's mixed-reality platform by
                cross-compiling C++ libraries that had never been built for
                VisionOS — unblocking a core part of the product roadmap.
              </p>

              <p className="text-[#5a6080] text-[10px] tracking-[0.12em] uppercase mb-3">
                What I shipped
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {[
                  { title: "C++ Library Ports", desc: "Cross-compiled Open3D & LAPACKE on Linux toolchains for VisionOS/iOS targets" },
                  { title: "XCFramework Packages", desc: "Production-ready frameworks that cut mixed-reality platform integration time" },
                  { title: "Two PoC Apps", desc: "Technical demos with native library integration presented to the software team" },
                  { title: "Developer Docs", desc: "Authored cross-platform integration documentation for future use" },
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
                  {["C++", "VisionOS", "iOS", "XCFramework", "Open3D", "LAPACKE"].map((tag) => (
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
