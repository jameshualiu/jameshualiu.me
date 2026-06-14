import FadeUp from "./FadeUp";

const categories = [
  { name: "Languages", tags: ["Python", "C++", "TypeScript"] },
  { name: "ML / Computer Vision", tags: ["PyTorch", "YOLOv8", "OpenCV", "Gemini AI"] },
  { name: "Web", tags: ["React", "Next.js"] },
  { name: "Platforms", tags: ["VisionOS", "iOS", "Git"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            Skills
          </p>
          <h2 className="text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight mb-16">
            Toolbox
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {categories.map((category, i) => (
            <FadeUp key={category.name} delay={i * 0.07}>
              <div className="glass-card rounded-[18px] px-5 py-5 h-full">
                <p className="text-[#6c5ce7] text-[10px] tracking-[0.2em] uppercase font-bold mb-3">
                  {category.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[11px] font-bold rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
