import About from "@/components/sections/About";
import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";
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

export const metadata: Metadata = {
  title: "About | Rajeev Puri",
  description: "Learn more about Rajeev Puri, a software engineer with expertise in Next.js, React, and modern web technologies.",
};

export default function page() {
  return (
    <main className="min-h-screen pb-20">
      <About />

      <Container className="px-5 mt-16 space-y-32">
        <section>
          <SectionHeading className="mb-12">Core Philosophy</SectionHeading>
          <div className="grid md:grid-cols-3  gap-8">
            <div className="p-8  bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/20 transition-all group">
              <Zap className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">
                Performance First
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                I prioritize speed and efficiency in every line of code,
                ensuring applications are snappy and responsive.
              </p>
            </div>
            <div className="p-8  bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/20 transition-all group">
              <Target className="w-10 h-10 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">
                User Centric
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Design is not just what it looks like, but how it works. I focus
                on creating intuitive and accessible interfaces.
              </p>
            </div>
            <div className="p-8  bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/20 transition-all group">
              <Book className="w-10 h-10 text-green-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">
                Lifelong Learner
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                The tech landscape is ever-changing. I dedicate time daily to
                learn new patterns, tools, and best practices.
              </p>
            </div>
            <div className="bg-zinc-950/50 border border-zinc-900 p-10 md:p-16 relative overflow-hidden md:col-span-3   ">
              <SectionHeading className="mb-6 leading-[1.1]">
                Beyond the Terminal.
              </SectionHeading>

              <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
                As a Software Engineer dedicated to high-performance builds, I
                believe great digital products aren't just written in
                code they’re fueled by a user-centric design philosophy and a
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
                    color: "text-blue-400",
                    bg: "bg-blue-400/5",
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
                    className="flex items-center gap-3 px-5 py-3 bg-zinc-900/40  border border-zinc-800/50 hover:border-zinc-700 transition-all hover:bg-zinc-900 group"
                  >
                    <item.icon
                      className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-zinc-300 font-medium">
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
