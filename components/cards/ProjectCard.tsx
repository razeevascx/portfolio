import * as motion from "motion/react-client";
import Button from "@/components/ui/button";
import Image from "next/image";

interface TechItem {
  id: string;
  icon: React.ReactNode;
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
      className="border group transition-colors duration-300 flex items-center  hover:bg-white/2  p-6  border-slate-600/50 hover:border-blue-400/50"
    >
      <div className="max-w-4xl space-y-8 p-4 md:12 flex-1">
        <p className="  font-mono inline-block bg-white text-black px-3 py-1 text-xs tracking-wider">
          {code}
        </p>

        {image && (
          <div className=" shadow-lg relative overflow-hidden">
            <Image
              src={`/pictures/${image}`}
              alt={`Screenshot of ${title} project`}
              width={800}
              height={450}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 "
          >
            <h3 className="text-3xl group-hover:text-primary font-bold text-white hover:underline transition-colors duration-300">
              {title}
            </h3>
          </a>

          <p className="text-sm md:text-base text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors mt-4 max-w-3xl">
            {description}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-wrap gap-2 ">
          {Object.values(tech)
            .filter((item): item is TechItem => item !== undefined)
            .map((item, i) => (
              <Button
                key={i}
                variant={"secondary"}
                className="text-lg  px-4 py-2 transition-all duration-300 flex items-center gap-2 cursor-pointer "
              >
                <span className="text-lg">{item.icon}</span>
                <span
                  key={item.id}
                  className="text-sm  text-zinc-400  group-hover:text-zinc-200 transition-all duration-300"
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
