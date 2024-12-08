import Image from "next/image";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pt-20 md:pt-28">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
