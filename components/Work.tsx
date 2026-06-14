"use client";
import FadeUp from "./FadeUp";

const shipped = [
  { title: "C++ Library Ports", desc: "Cross-compiled Open3D & LAPACKE on Linux toolchains for VisionOS/iOS targets" },
  { title: "XCFramework Packages", desc: "Production-ready frameworks that cut mixed-reality platform integration time" },
  { title: "Two PoC Apps", desc: "Technical demos with native library integration presented to the software team" },
  { title: "Developer Docs", desc: "Authored cross-platform integration documentation for future use" },
];

export default function Work() {
  return (
    <section id="work" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            Experience
          </p>
          <h2 className="text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight mb-16">
            Work
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="glass-card rounded-[20px] p-6 sm:p-8 max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <span className="text-[#2b2b40] text-lg font-bold">
                GridRaster Inc.
              </span>
              <span className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[10px] uppercase tracking-wide font-bold rounded-full px-3.5 py-1.5">
                Software Engineering Contractor · Jul–Aug 2025
              </span>
            </div>

            <p className="text-[#3b3f5c] text-sm leading-[1.75] border-l-[3px] border-[#6c5ce7] pl-4 mb-6">
              Enabled native 3D processing on Apple&apos;s mixed-reality platform by
              cross-compiling C++ libraries that had never been built for
              VisionOS — unblocking a core part of the product roadmap.
            </p>

            <p className="text-[#6c5ce7] text-[10px] tracking-[0.2em] uppercase font-bold mb-3">
              What I shipped
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {shipped.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.07}>
                  <div className="flex gap-3">
                    <span className="text-lg font-extrabold text-[#6c5ce7]/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[#2b2b40] text-xs font-bold mb-0.5">{item.title}</p>
                      <p className="text-[#4d5780] text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.15}>
              <div className="flex flex-wrap gap-2">
                {["C++", "VisionOS", "iOS", "XCFramework", "Open3D", "LAPACKE"].map((tag) => (
                  <span key={tag} className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[11px] font-bold rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
