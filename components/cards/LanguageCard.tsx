import { cn } from "@/lib/utils";

type Skill = {
  icon: React.ReactNode;
  label: string;
};

type SkillCardProps = {
  skill: Skill;
  className?: string;
};

export default function LanguageCard({
  skill,
  className,
}: Readonly<SkillCardProps>) {
  return (
    <div
      className={cn(
        "relative flex items-center gap-6 p-8  border-r border-white/5 bg-black/20 hover:bg-white/8 transition-all group select-none cursor-pointer ",
        className,
      )}
    >
      <div className="transition-transform duration-500 group-hover:scale-110 ">
        {skill.icon}
      </div>
      <p className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
        {skill.label}
      </p>
    </div>
  );
}
