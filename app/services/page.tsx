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

      {/* Final CTA */}
      <Container className="px-5 mt-10">
        <div className="text-center bg-blue-600/5 border border-blue-500/10  py-20 px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600/5" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to bring your
              <br />
              <span className="text-blue-500">idea to life?</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg">
              I'm currently accepting new projects and consulting opportunities.
              Let's discuss how we can build something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="group flex items-center gap-3 bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/projects"
                className="text-zinc-400 hover:text-white font-bold transition-colors"
              >
                View Past Work
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
