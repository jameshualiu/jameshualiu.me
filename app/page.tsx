import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CurveLines from "@/components/CurveLines";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative bg-[#c9d4ee] overflow-hidden">
        <CurveLines />
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
