import { motion } from 'framer-motion';

function Project() {
  const projectsData = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://razeevasnx.vercel.app/", 
      repoLink: "https://github.com/razeevascx/portfolio",  
    },
    {
      title: "School Management System",
      description: "My first project and my inspiration to learn the MERN stack.",
      technologies: ["MERN Stack"],
      certificateLink: "https://razeevasnx.vercel.app/",
    
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="w-full h-full px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>

      {/* Projects List */}
      <div className="flex flex-col space-y-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="text-sm text-gray-400 mt-2">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <div className="mt-4">
              {project.certificateLink && (
                <a
                  href={project.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Certificate
                </a>
              )}
              {project.liveLink && (
                <>
                  <span className="mx-2">|</span>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                </>
              )}
              {project.repoLink && (
                <>
                  <span className="mx-2">|</span>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Repository
                  </a>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Project;
