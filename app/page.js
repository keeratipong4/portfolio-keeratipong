import Image from "next/image";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
