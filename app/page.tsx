import Projects from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import Service from "@/components/sections/Service";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Projects />
      <About/>
      <Contact />
    </>
  );
}
