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

export const metadata: Metadata = {
  title: "Services | Rajeev Puri",
  description: "Explore the services offered by Rajeev Puri, including full-stack development, UI/UX design, and specialized web solutions.",
  alternates: {
    canonical: "https://rajeevpuri.com.np/services",
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
