import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-[#080a10] overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.055] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      {/* Blue ambient glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(74,110,245,0.07) 0%, transparent 65%)",
        }}
      />
      <Hero />
      <Work />
      <Projects />
    </main>
  );
}
