import FadeUp from "./FadeUp";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiPytorch,
  SiOpencv,
  SiGooglegemini,
  SiReact,
  SiNextdotjs,
  SiSwift,
  SiApple,
  SiGit,
} from "react-icons/si";

type Tag = { name: string; icon?: IconType; color?: string };

const categories: { name: string; tags: Tag[] }[] = [
  {
    name: "Languages",
    tags: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    name: "ML / Computer Vision",
    tags: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "YOLOv8" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Gemini AI", icon: SiGooglegemini, color: "#8E75B2" },
    ],
  },
  {
    name: "Web",
    tags: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ],
  },
  {
    name: "Platforms",
    tags: [
      { name: "VisionOS", icon: SiSwift, color: "#F05138" },
      { name: "iOS", icon: SiApple, color: "#000000" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            Skills
          </p>
          <h2 className="text-[#2b2b40] text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            My Toolbox.
          </h2>
          <p className="text-[#4d5780] text-sm leading-[1.8] max-w-md mb-12">
            The tools I&apos;ve learned and honed.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="glass-card rounded-[20px] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6">
            {categories.map((category, i) => (
              <div
                key={category.name}
                className={
                  i > 0 ? "sm:border-l sm:border-white/40 sm:pl-6" : ""
                }
              >
                <p className="text-[#6c5ce7] text-[10px] tracking-[0.2em] uppercase font-bold mb-4">
                  {category.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => {
                    const Icon = tag.icon;
                    return (
                      <span
                        key={tag.name}
                        className="bg-white/70 border border-[#6c5ce7]/25 text-[#6c5ce7] text-[11px] font-bold rounded-full px-3 py-1 inline-flex items-center gap-1.5"
                      >
                        {Icon && (
                          <Icon size={12} style={{ color: tag.color }} />
                        )}
                        {tag.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
