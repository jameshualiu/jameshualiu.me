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
              Hi I&apos;m James, a junior at UMass Amherst studying CS and an
              aspiring Software Engineer. I am currently interested in Web
              development and AI/ML.
            </p>
            <p>
              When I&apos;m not building, you can catch me playing badminton,
              golf, running, hiking, playing golf, or just hanging out with my
              friends.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
