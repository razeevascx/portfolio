import { Calendar, MapPin } from "lucide-react";
import Socialicons from "./Socialicons";
import LanguageCard from "../cards/LanguageCard";
import { language } from "@/lib/skills-data";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className=" w-full mx-auto overflow-hidden shadow-2xl relative border border-white/5 bg-black/20 backdrop-blur-sm rounded-base">
      <div className="px-6 md:px-10 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] border-b border-white/10 ">
          <div className="p-8 flex items-center justify-center border-b md:border-b-0 md:border-r ">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border border-white/10 shadow-lg ">
              <Image
                src="https://avatars.githubusercontent.com/u/154011772?v=4"
                alt="Rajeev Puri's Avatar"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-between ">
            {/* meta bar removed per request */}

            <h1 className="text-6xl md:text-8xl font-bold px-8 py-4 text-white tracking-tight">
              Rajeev Puri
            </h1>


            <p className="text-lg px-8 py-5 text-zinc-400 font-medium mt-1 border-t border-white/5 bg-black/40">
              Bsc Student at University of Wolverhampton
            </p>
          </div>
        </div>

        <p className="text-md text-zinc-300 leading-relaxed font-light italic border-l-2 border-primary/20 pl-4 py-1 mt-5">
          &quot;Life folds into two phases, Second one starts once we realize we got
          only one.&quot; — Confucius
        </p>

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

      <div className="absolute top-10 right-10 text-white/2 text-9xl font-black italic pointer-events-none uppercase select-none leading-none z-0">
        RAJEEV
      </div>
    </div>
  );
}
