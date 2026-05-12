import * as motion from "motion/react-client";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  service: any;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const code = `[0${String(index + 1)}]`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="  group border border-slate-800 hover:border-blue-500/50 bg-zinc-900/10 hover:bg-zinc-900/30 transition-all duration-500 flex flex-col h-full border-t-0 first:border-t lg:border-t lg:first:border-l"
    >
      <div className="relative h-70 w-full p-4 overflow-hidden border-b border-zinc-800 bg-black/20">

        {service.illustration}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="flex flex-col p-6">
        <div className="mb-4 flex items-center gap-2">

          <span className="font-mono inline-block bg-white text-black px-3 py-1 text-[10px] font-bold tracking-widest uppercase w-fit">
            {code}
          </span>
          <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            {service.category}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold leading-tight text-white group-hover:text-blue-400 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 min-h-20">
          {service.description}
        </p>

        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="inline-block px-3 py-1 text-[10px] text-zinc-500 border border-zinc-800 bg-zinc-900/50 font-mono uppercase tracking-wider group-hover:border-blue-500/20 group-hover:text-blue-300 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
