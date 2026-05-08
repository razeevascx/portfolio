import { projectList } from "@/lib/constants";
import Items from "@/components/ui/Items";
import ProjectCard from "@/components/cards/ProjectCard";
import Container from "@/components/Container";
import { Suspense } from "react";
import { DotmSquare11 } from "../ui/dotm-square-11";

interface ProjectsProps {
  list?: number;
}

const Projects: React.FC<ProjectsProps> = ({ list = 3 }) => {
  return (
    <Container
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="w-full p-5 mx-auto overflow-hidden"
    >
      <Items
        Number="02"
        title="Projects"
        des="Explore my featured projects showcasing my expertise in web development and problem-solving capabilities."
      />
      <Suspense fallback={<DotmSquare11 />}>
        {projectList.slice(0, list).map((project, indx) => (
          <ProjectCard key={project.title} {...project} index={indx} />
        ))}
      </Suspense>
      {/* <div className="mt-16 mx-auto text-center">
        <h2 className="text-5xl  md:text-9xl leading-[0.9] font-semibold tracking-wide">
          Let’s build <span className="opacity-70">together.</span> Contact Now
        </h2>
      </div> */}
    </Container>
  );
};

export default Projects;
