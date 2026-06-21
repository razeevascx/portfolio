import Items from "@/components/ui/Items";
import ProjectCard from "@/components/cards/ProjectCard";
import Container from "@/components/Container";
import { Suspense } from "react";
import { DotmSquare11 } from "../ui/dotm-square-11";
import { getProjectData } from "@/lib/projectdata";

interface ProjectsProps {
  list?: number;
}

const Projects = async ({ list = 3 }: ProjectsProps) => {
  const projects = await getProjectData();

  return (
    <Container
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="w-full p-5 mx-auto overflow-hidden"
    >
      <Items
        Number="02"
        title="Projects"
        des="Explore a curated gallery of  projects designed to solve complex business challenges. Each case study demonstrates my expertise in building scalable web applications, optimizing for Core Web Vitals, and delivering high-performance digital solutions that drive user engagement."
      />
      <Suspense
        fallback={
          <div className="size-60 mx-auto">
            <DotmSquare11 size={100} />
          </div>
        }
      >
        <div className="grid gap-4">
          {projects.slice(0, list).map((project, indx) => (
            <ProjectCard key={project.title} {...project} index={indx} />
          ))}
        </div>
      </Suspense>
    </Container>
  );
};

export default Projects;
