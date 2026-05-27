import About from "@/components/sections/About";
import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import {
  Coffee,
  Code,
  Heart,
  Zap,
  Target,
  Book,
  Globe,

} from "lucide-react";
import { libraries } from "@/lib/skills-data";
import SkillCard1 from "@/components/cards/SkillCard";
import CertificateCard from "@/components/cards/CertificateCard";
import { getCredlyBadges } from "@/lib/credly";


export const metadata: Metadata = {
  title: "About | Rajeev Puri",
  description: "Learn more about Rajeev Puri, a software engineer with expertise in Next.js, React, and modern web technologies.",
  alternates: {
    canonical: "https://rajeevpuri.com.np/about",
  },
};

export default async function Page() {
    const badges = await getCredlyBadges();

  return (
    <main className="min-h-screen pb-20">
      <About />

      <Container className="px-5 mt-16 space-y-32">
        {badges && badges.length > 0 && (
          <motion.div className="mb-8 space-y-8">
            <div>
              <SectionHeading className="mb-8">
                Certifications & Badges
              </SectionHeading>
              {badges.map((item) => (
                <CertificateCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        )}
        <div className="mb-16">
          <SectionHeading className="mb-12">Frameworks & Tools</SectionHeading>
          <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {libraries.map((skill) => (
              <SkillCard1 key={skill.label} skill={skill} />
            ))}
          </div>
        </div>
        <section>
          <SectionHeading className="mb-12">Core Philosophy</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-muted/10 border border-border hover:border-primary/50 transition-all duration-normal group rounded-base">
              <Zap className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-slow" />
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                Performance First
              </h3>
              <p className="text-foreground-secondary text-sm leading-relaxed font-light">
                I prioritize speed and efficiency in every line of code,
                ensuring applications are snappy and responsive.
              </p>
            </div>
            <div className="p-8 bg-muted/10 border border-border hover:border-primary/50 transition-all duration-normal group rounded-base">
              <Target className="w-10 h-10 text-primary-light mb-6 group-hover:scale-110 transition-transform duration-slow" />
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                User Centric
              </h3>
              <p className="text-foreground-secondary text-sm leading-relaxed font-light">
                Design is not just what it looks like, but how it works. I focus
                on creating intuitive and accessible interfaces.
              </p>
            </div>
            <div className="p-8 bg-muted/10 border border-border hover:border-primary/50 transition-all duration-normal group rounded-base">
              <Book className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-slow" />
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                Lifelong Learner
              </h3>
              <p className="text-foreground-secondary text-sm leading-relaxed font-light">
                The tech landscape is ever-changing. I dedicate time daily to
                learn new patterns, tools, and best practices.
              </p>
            </div>
            <div className="bg-muted/5 border border-border p-10 md:p-16 relative overflow-hidden md:col-span-3 rounded-base">
              <SectionHeading className="mb-6 leading-[1.1]">
                Beyond the Terminal.
              </SectionHeading>

              <p className="text-foreground-secondary text-lg leading-relaxed mb-10 max-w-xl font-light">
                As a Software Engineer dedicated to high-performance builds, I
                believe great digital products aren&apos;t just written in
                code—they’re fueled by a user-centric design philosophy and a
                curious approach to solving complex problems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: Coffee,
                    text: "Coffee Enthusiast",
                    color: "text-orange-400",
                    bg: "bg-orange-400/5",
                  },
                  {
                    icon: Heart,
                    text: "Open Source Lover",
                    color: "text-red-400",
                    bg: "bg-red-400/5",
                  },
                  {
                    icon: Code,
                    text: "UI Architect",
                    color: "text-primary",
                    bg: "bg-primary/5",
                  },
                  {
                    icon: Globe,
                    text: "Lifelong Learner",
                    color: "text-emerald-400",
                    bg: "bg-emerald-400/5",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-5 py-3 bg-muted/30 border border-border hover:border-primary/50 transition-all duration-normal hover:bg-muted/50 group rounded-base"
                  >
                    <item.icon
                      className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-slow`}
                    />
                    <span className="meta-label text-foreground-secondary group-hover:text-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
