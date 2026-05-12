import ProcessCard from "@/components/sections/service/ProcessCard";
import Container from "@/components/Container";
import SkillCard1 from "@/components/cards/SkillCard";
import { Metadata } from "next";

import { processSteps } from "@/lib/constants";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import Service from "@/components/sections/Service";
import { libraries } from "@/lib/skills-data";
import SectionBlock from "@/components/SectionBlock";

export const metadata: Metadata = {
  title: "Services | Rajeev Puri",
  description: "Explore the services offered by Rajeev Puri, including full-stack development, UI/UX design, and specialized web solutions.",
};

export default function page() {
  return (
    <>
      <Service />

      <Container className="px-5">
        <SectionBlock
          title="How I work ?"
          description="get to know about my working style"
        />
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
      </Container>

      <Container className="px-5 mt-10">
        <SectionBlock
          title="Tools of the Trade"
          description="Technologies and libraries I work with"
        />
        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {libraries.map((skill) => (
            <SkillCard1 key={skill.label} skill={skill} />
          ))}
        </div>
      </Container>


    </>
  );
}
