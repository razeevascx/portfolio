import Projects from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import Service from "@/components/sections/Service";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://rajeevpuri.com.np/",
  },
};

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
