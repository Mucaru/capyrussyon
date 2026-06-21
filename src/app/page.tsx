import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Masthead />
      <main className="flex-1">
        <Hero />
        <About />
        <ProjectGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
