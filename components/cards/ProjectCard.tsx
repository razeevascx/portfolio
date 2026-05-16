import * as motion from "motion/react-client";
import {Button} from "@/components/ui/Button";
import Image from "next/image";
import {
  ReactLight,
  Nodejs,
  Python,
  Docker,
  Redux,
  TailwindCSS,
  MotionDark,
  Vite,
  Java,
  TypeScript,
  Nextjs,
  Supabase,
  Vue,
  MongoDBDark,
} from "@ridemountainpig/svgl-react";
import { Database } from "lucide-react";

interface TechItem {
  id: string;
  icon: React.ReactNode;
}

function renderTechIcon(name: string) {
  const normalized = name.trim().toLowerCase();

  if (normalized === "next.js" || normalized === "nextjs") {
    return <Nextjs width={24} height={24} className="text-[#000000] dark:text-white" />;
  }
  if (normalized === "react") {
    return <ReactLight width={24} height={24} className="text-[#61DAFB]" />;
  }
  if (normalized === "tailwind css" || normalized === "tailwind") {
    return <TailwindCSS width={24} height={24} className="text-[#06B6D4]" />;
  }
  if (normalized === "typescript") {
    return <TypeScript width={24} height={24} className="text-[#3178C6]" />;
  }
  if (normalized === "framer motion") {
    return <MotionDark width={24} height={24} className="text-[#0055FF]" />;
  }
  if (normalized === "python") {
    return <Python width={24} height={24} className="text-[#3776AB]" />;
  }
  if (normalized === "docker") {
    return <Docker width={24} height={24} className="text-[#2496ED]" />;
  }
  if (normalized === "supabase") {
    return <Supabase width={24} height={24} className="text-[#3ECF8E]" />;
  }
  if (normalized === "java") {
    return <Java width={24} height={24} className="text-[#ED8B00]" />;
  }
  if (normalized === "database") {
    return <Database size={24} className="text-[#4DB33D]" />;
  }
  if (normalized === "node.js" || normalized === "nodejs") {
    return <Nodejs width={24} height={24} className="text-[#339933]" />;
  }
  if (normalized === "mongodb") {
    return <MongoDBDark width={24} height={24} className="text-[#47A248]" />;
  }
  if (normalized === "express") {
    return <Nodejs width={24} height={24} className="text-white" />;
  }
  if (normalized === "redux") {
    return <Redux width={24} height={24} className="text-[#764ABC]" />;
  }
  if (normalized === "vite") {
    return <Vite width={24} height={24} className="text-[#646CFF]" />;
  }
  if (normalized === "vue") {
    return <Vue width={24} height={24} className="text-[#4FC08D]" />;
  }

  return <Database size={24} className="text-slate-300" />;
}

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  tech: Record<string, TechItem | undefined>;
  image?: string;
  date?: string;
  list?: string[];
  index?: number;
  liveLink?: string;
  featured?: boolean;
  stars?: number;
  forks?: number;
}

const Project = ({
  title,
  description,
  link,
  index = 0,
  tech,
  image,
  date = "2024",
  list,
}: ProjectProps) => {
  const code = `[0${String(index + 1)}]`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border group transition-colors duration-normal flex items-center hover:bg-white/2 p-6 border-border hover:border-primary/50"
    >
      <div className="max-w-4xl space-y-8 p-4 md:12 flex-1">
        <p className="font-mono inline-block bg-foreground text-background px-3 py-1 text-sm font-bold tracking-widest">
          {code}
        </p>

        {image && (
          <div className="shadow-lg relative overflow-hidden rounded-base">
            <Image
              src={`/pictures/${image}`}
              alt={`Screenshot of ${title} project`}
              width={800}
              height={450}
              className="w-full h-auto hover:scale-105 transition-transform duration-slow"
            />
          </div>
        )}
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <h3 className="text-3xl group-hover:text-primary font-bold text-foreground transition-colors duration-normal tracking-tight">
              {title}
            </h3>
          </a>

          <p className="text-sm md:text-base text-foreground-secondary leading-relaxed group-hover:text-foreground transition-colors duration-normal mt-4 max-w-3xl font-light">
            {description}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-wrap gap-2 ">
          {Object.values(tech)
            .filter((item): item is TechItem => item !== undefined)
            .map((item, i) => (
              <Button
                key={i}
                variant={"outline"}
                className="px-4 py-2 transition-all duration-normal flex items-center gap-2 cursor-pointer border-border hover:border-primary/50"
              >
                <span className="text-lg">{item.icon ?? renderTechIcon(item.id)}</span>
                <span
                  key={item.id}
                  className="text-[10px] text-foreground-secondary group-hover:text-foreground transition-all duration-normal font-bold tracking-widest"
                >
                  {item.id}
                </span>
              </Button>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
