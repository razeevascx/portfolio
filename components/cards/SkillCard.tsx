"use client";

import * as motion from "motion/react-client";
import { type Skill } from "@/lib/skills-data";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

const SkillCard = ({ skill, className }: SkillCardProps) => {
  return (
    <motion.div
      className={cn(
        "gap-4 p-4  border transition-colors duration-300 flex items-center justify-center bg-background px-4 py-8 md:p-8 hover:bg-white/8  group select-none cursor-pointer",
        className,
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="transition-transform duration-500 group-hover:scale-110 ">
        {skill.icon}
      </div>
      <p className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
        {skill.label}
      </p>
    </motion.div>
  );
};

export default SkillCard;
