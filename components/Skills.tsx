import FadeUp from "./FadeUp";

const categories = [
  { name: "Languages", tags: ["Python", "C++", "TypeScript"] },
  { name: "ML / Computer Vision", tags: ["PyTorch", "YOLOv8", "OpenCV", "Gemini AI"] },
  { name: "Web", tags: ["React", "Next.js"] },
  { name: "Platforms", tags: ["VisionOS", "iOS", "Git"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#c0392b] text-xs tracking-[0.16em] uppercase font-medium mb-3">
            Skills
          </p>
          <h2 className="text-[#e8ecf8] text-4xl font-light tracking-tight mb-16">
            Toolbox
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {categories.map((category, i) => (
            <FadeUp key={category.name} delay={i * 0.07}>
              <div className="bg-[#0d0f18] border border-[#1a1e30] rounded-xl px-5 py-5 h-full">
                <p className="text-[#5a6080] text-[10px] tracking-[0.12em] uppercase mb-3">
                  {category.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[#c0392b] text-[10px] border border-[#c0392b]/20 rounded-full px-3 py-1 tracking-[0.06em]"
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
