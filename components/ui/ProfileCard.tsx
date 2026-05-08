import { Calendar, MapPin } from "lucide-react";
import Socialicons from "./Socialicons";
import LanguageCard from "../cards/LanguageCard";
import { language } from "@/lib/skills-data";
import Image from "next/image";

export default function ProfileCard() {
  const textureUrl =
    "https://www.transparenttextures.com/patterns/paper-fibers.png";

  return (
    <div className=" w-full mx-auto overflow-hidden shadow-2xl relative border border-white/5 ">
      <div className="h-56 w-full relative overflow-hidden  z-10 border-b border-black/10">
        <div
          className="absolute inset-0 opacity-80 mix-blend-multiply"
          style={{ backgroundImage: `url(${textureUrl})` }}
        ></div>
      </div>

      <div className="px-10 pb-10 relative z-10">
        <div className="flex items-end justify-between -mt-12 mb-6">
          <div className="relative">
            <Image
              src="https://avatars.githubusercontent.com/u/154011772?v=4"
              alt="Rajeev Puri's Avatar"
              width={96}
              height={96}
              className="w-24 h-24 rounded-lg border-[6px] border-[#0a0a0a] object-cover bg-black shadow-2xl"
            />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Rajeev Puri
          </h1>
          <p className="text-lg text-zinc-400 font-medium mt-1">
            Student at University of Wolverhampton
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-zinc-500 mb-8">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-zinc-600" />
            <span className="tracking-wide">Wolverhampton, UK</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-zinc-600" />
            <span className="tracking-wide">Joined April 2024</span>
          </div>
        </div>

        <p className="text-md text-zinc-300 leading-relaxed mb-10  font-medium relative z-10 italic">
          "Life folds into two phases, Second one starts once we realize we got
          only one." — Confucius
        </p>

        <div className="w-full h-px bg-white/5 mb-10" />

        <div className="flex gap-6 text-zinc-500 mb-6">
          <Socialicons showUsername />
        </div>
      </div>
      <div className="relative border border-white/10 overflow-hidden bg-black/40 mb-10 grid md:grid-cols-3 grid-cols-2 w-full">
        {language.map((item, idx) => (
          <LanguageCard
            key={`${item.label}-${idx}`}
            skill={item}
            className="border-r border-b border-white/10"
          />
        ))}
      </div>
      <div className="absolute -bottom-4 -right-4 text-white/2 text-8xl font-black italic pointer-events-none uppercase select-none leading-none">
        Rajeev
      </div>
    </div>
  );
}
