import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      degree: "Higher Secondary Education",
      school: "Khwopa Higher Secondary School",
      location: "Dekocha 06, Bhaktapur 44800",
      year: "2022 - 2024",
      description: "Major in Computer Science",
      link: "https://www.facebook.com/khwopahss",
    },
    {
      degree: "Secondary Education",
      school: "Shree Saraswati Secondary School",
      location: "Changunaryan-08, Bhaktapur 44800",
      year: "2022",
      description: "",
      link: "https://www.facebook.com/100064233663286",
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
      <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>

      {/* Education Timeline */}
      <div className="relative flex flex-col space-y-6">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-500"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative flex items-start space-x-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline Marker */}
            <div className="flex flex-col items-center">
              {/* Wrap marker in an anchor tag for all entries */}
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold transition-transform transform hover:scale-110">
                  {index + 1}
                </div>
              </a>

              {index < educationData.length - 1 && (
                <div className="h-full w-1 bg-gray-500"></div>
              )}
            </div>

            {/* Education Content */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex-grow">
              <h3 className="text-xl font-bold text-blue-400">{edu.degree}</h3>
              <p className="text-sm text-gray-400">{edu.school}</p>
              <p className="text-sm text-gray-400">{edu.location}</p>
              <p className="text-sm text-gray-500 italic">{edu.year}</p>
              <p className="text-sm mt-2 text-gray-300">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Education;
