import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#6c5ce7] text-xs tracking-[0.2em] uppercase font-bold mb-3">
            About
          </p>
          <h2 className="text-[#2b2b40] text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
            About me
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="glass-card rounded-[18px] p-6 sm:p-8 text-[#3b3f5c] text-sm leading-[1.8] space-y-4">
            <p>
              CS student at UMass Amherst focused on computer vision and
              machine learning. I like building things that feel good to use
              — fast, simple, and a little delightful. Currently looking for
              SWE internships for Summer 2026.
            </p>
            <p>
              I&apos;ve shipped a real-time CV platform (Shuttleye),
              cross-compiled C++ libraries for Apple Vision Pro at
              GridRaster, and built accessibility tools at HackUMass. Outside
              of code: hackathons, the gym, and whatever new model just
              dropped.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
