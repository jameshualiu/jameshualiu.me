import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" className="py-28">
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
              Hi I&apos;m James, a rising junior at UMass Amherst studying CS
              who believes software can improve people&apos;s lives,
              particularly in fitness and all things physical.
            </p>
            <p>
              When I&apos;m not building, you can catch me bouldering,
              running, hiking, playing golf or badminton, or just hanging out
              with my friends. I&apos;m also into fashion and music and love
              eating my way through whatever city I&apos;m in.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
