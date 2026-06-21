import Projects from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import Service from "@/components/sections/Service";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://rajeevpuri.com.np",
  },
  openGraph: {
    title: "Rajeev Puri | Software Engineer",
    description: "Software Engineer based in London, UK, specializing in Next.js, React, and Full-Stack Development. Building high-performance web applications, scalable system architectures, and secure cloud infrastructure.",
    url: "https://rajeevpuri.com.np",
    type: "website",
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
