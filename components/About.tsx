import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <FadeUp>
          <p className="text-[#c0392b] text-xs tracking-[0.16em] uppercase font-medium mb-3">
            About
          </p>
          <h2 className="text-[#e8ecf8] text-4xl font-light tracking-tight mb-8">
            About me
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-[#8890b0] text-sm leading-[1.8] max-w-2xl font-light tracking-wide">
            <span className="text-[#b8bdd4] font-normal">
              [Placeholder bio — replace with your own introduction.]
            </span>{" "}
            Write a few sentences about who you are, what you&apos;re studying,
            and the kinds of problems, teams, or roles you&apos;re looking for.
            Mention the areas you care about most and anything that makes
            your story memorable to a reader.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
