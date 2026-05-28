import ProcessCard from "@/components/sections/service/ProcessCard";
import Container from "@/components/Container";
import SkillCard1 from "@/components/cards/SkillCard";
import { Metadata } from "next";

import { processSteps } from "@/lib/constants";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import Service from "@/components/sections/Service";
import { libraries } from "@/lib/skills-data";
import SectionBlock from "@/components/SectionBlock";
import SectionHeading from "@/components/ui/SectionHeading";

const title = "Technical Specializations | Rajeev Puri";
const description = "Expert software engineering services: Next.js development, system architecture, web performance optimization, and cloud infrastructure.";
const ogImage = `/og?route=services&title=${encodeURIComponent("Technical Specializations")}&capabilities=${encodeURIComponent("Next.js/React,Rust System Core,Cloud Performance Architecture")}`;

export const metadata: Metadata = {
  title: "Services | Rajeev Puri - Next.js Development, System Architecture & Web Optimization",
  description: "Professional software engineering services: Next.js & React development, system architecture design, web performance optimization, TypeScript, AWS Cloud, Database Design, CI/CD implementation. Specializing in scalable web applications and high-performance digital products.",
  keywords: [
    "Next.js Development",
    "React Development",
    "Full Stack Development",
    "System Architecture",
    "Web Performance Optimization",
    "TypeScript Services",
    "AWS Cloud Services",
    "Database Design",
    "CI/CD Pipeline",
    "Software Consulting",
  ],
  alternates: {
    canonical: "https://rajeevpuri.com.np/services",
  },
  openGraph: {
    title,
    description,
    url: "https://rajeevpuri.com.np/services",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: "@razeev_asnx",
    images: [ogImage],
  },
};

export default function page() {
  return (
    <>
      <Service />

      <Container className="px-5">
        <SectionHeading className="text-3xl font-bold text-white">
          How I work ?{" "}
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
          {processSteps.map((item) => (
            <ProcessCard
              key={item.step}
              step={item.step}
              title={item.title}
              detail={item.detail}
              icon={item.icon}
              status={item.status}
            />
          ))}
        </div>


        <SectionHeading className="text-3xl font-bold text-white m-10">
          Tools of the Trade
        </SectionHeading>
        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {libraries.map((skill) => (
            <SkillCard1 key={skill.label} skill={skill} />
          ))}
        </div>
      </Container>
    </>
  );
}
