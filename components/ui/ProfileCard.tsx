import { Calendar, MapPin, Code2, Star, Award, BookOpen } from "lucide-react";
import Socialicons from "./Socialicons";
import LanguageCard from "../cards/LanguageCard";
import { language } from "@/lib/skills-data";
import Image from "next/image";
import { formatCount } from "@/lib/github";

interface ProfileCardProps {
  stats?: {
    projects: number;
    badges: number;
    posts: number;
    stars: number;
  };
}

export default function ProfileCard({ stats }: ProfileCardProps) {
  const textureUrl =
    "https://www.transparenttextures.com/patterns/paper-fibers.png";

  const statItems = [
    {
      label: "Projects",
      value: stats?.projects ?? 0,
      icon: <Code2 size={16} className="text-blue-400" />,
    },
    {
      label: "Stars",
      value: formatCount(stats?.stars ?? 0),
      icon: <Star size={16} className="text-amber-400" />,
    },
    {
      label: "Certificates",
      value: stats?.badges ?? 0,
      icon: <Award size={16} className="text-emerald-400" />,
    },
    {
      label: "Articles",
      value: stats?.posts ?? 0,
      icon: <BookOpen size={16} className="text-purple-400" />,
    },
  ];

  return (
    <div className=" w-full mx-auto overflow-hidden shadow-2xl relative border border-white/5 bg-black/20 backdrop-blur-sm rounded-base">
      <div className="h-56 w-full relative overflow-hidden z-10 border-b border-white/5 bg-zinc-900/50">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${textureUrl})` }}
        ></div>
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
      </div>

      <div className="px-6 md:px-10 pb-10 relative z-10">
        <div className="flex items-end justify-between -mt-12 mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="https://avatars.githubusercontent.com/u/154011772?v=4"
              alt="Rajeev Puri's Avatar"
              width={112}
              height={112}
              className="relative w-28 h-28 rounded-lg border-4 border-[#0a0a0a] object-cover bg-black shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Rajeev Puri
              </h1>
              <p className="text-lg text-zinc-400 font-medium mt-1">
                Bsc Student at University of Wolverhampton
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-500">
              <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
                <MapPin size={16} className="text-blue-500/60" />
                <span className="tracking-wide">United Kingdom</span>
              </div>
              <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
                <Calendar size={16} className="text-blue-500/60" />
                <span className="tracking-wide">Joined April 2024</span>
              </div>
            </div>

            <p className="text-md text-zinc-300 leading-relaxed font-light italic border-l-2 border-primary/20 pl-4 py-1">
              "Life folds into two phases, Second one starts once we realize we got
              only one." — Confucius
            </p>
          </div>


        </div>

        <div className="w-full h-px bg-linear-to-r from-white/5 via-white/10 to-white/5 my-10" />


        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex gap-6 text-zinc-500">
            <Socialicons showLabel />
          </div>


        </div>
      </div>

      <div className="relative border-t border-white/10 overflow-hidden bg-black/40 grid md:grid-cols-3 grid-cols-2 w-full">
        {language.map((item, idx) => (
          <LanguageCard
            key={`${item.label}-${idx}`}
            skill={item}
            className="border-r border-b border-white/10"
          />
        ))}
      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-10 right-10 text-white/[0.02] text-9xl font-black italic pointer-events-none uppercase select-none leading-none -z-0">
        RAJEEV
      </div>
    </div>
  );
}
