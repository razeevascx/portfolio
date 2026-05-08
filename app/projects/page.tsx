import Project from "@/components/sections/Project";
import { Github } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rajeev Puri",
  description: "Explore a showcase of my software engineering projects, including web applications, automation tools, and open-source contributions.",
};

export default function page() {
  return (
    <>
      <Project list={15} />

      <div className="mt-32 pt-16 border-t border-slate-800 text-center space-y-8">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em]">
            contribution_log
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            Extended Repositories
          </h2>
        </div>
        <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed font-medium">
          Check out my GitHub for experimental source code, archived legacy
          projects, and ongoing open-source development.
        </p>
        <div className="flex justify-center pt-4">
          <a
            href="https://github.com/razeevascx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black font-bold py-4 px-10 text-[11px] uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            Vew_Github_Profile
          </a>
        </div>
      </div>
    </>
  );
}
