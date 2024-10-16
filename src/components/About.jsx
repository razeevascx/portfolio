import {
  Express,
  Mongodb,
  React,
  Node,
  Git,
  Linux,
  Docker,
  C,
  Php,
  Tailwind,
} from "./assets/assests";
import { PiSpeakerHighFill } from "react-icons/pi";
import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Function to speak the name
  const speakName = () => {
    if (isSpeaking) return;

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance("Ruh-jeev");
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Function to render skill icons with animation
  const renderSkill = (imgSrc, altText, label, colorClass) => (
    <motion.div
      className="flex flex-col items-center m-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img src={imgSrc} alt={altText} className="w-12 h-12 mb-2" />
      <span className={`text-sm ${colorClass} font-bold text-xl md:text-2xl`}>
        {label}
      </span>
    </motion.div>
  );

  return (
    <motion.section
      className="w-full h-full px-4 py-8 md:py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* About Section */}
      <motion.div
        className="mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-between">
          <span className="flex items-center">
            Rajeev
            <span className="text-gray-400 ml-2">(Ruh-jeev)</span>
            <PiSpeakerHighFill
              className={`cursor-pointer transition-transform transform hover:scale-125 ml-2 ${
                isSpeaking ? "text-gray-400" : "text-white"
              }`}
              onClick={speakName}
              size={30}
              aria-label="Speak name"
            />
          </span>
        </h1>
        <p className="text-lg mb-2">
          <strong className="font-semibold">Type:</strong> Proper Noun
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          Rajeev is a masculine proper noun, derived from Sanskrit, meaning
          &quot;lotus.&quot; It symbolizes beauty, purity, and calmness, commonly used in
          South Asia.
        </p>
      </motion.div>

      {/* About Me Section */}
      <motion.article
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Hello! My name is Rajeev Puri, and I enjoy building innovative
          projects that live on the internet. My journey into web development
          began with a fascination for how websites work, and over the years,
          it has evolved into a passion for creating seamless and impactful
          digital experiences.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          Fast-forward to today, and I’ve honed my skills across various
          technologies, working on personal projects and continuously learning
          new tools. My main focus these days is mastering the MERN stack and
          building efficient, accessible web applications.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          Here are a few technologies I’ve been working with recently:
        </p>
      </motion.article>

      {/* Skills Section */}
      <motion.div
        className="mb-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4 ">Full Stack</h2>
        <div className="flex  mb-4"></div>

        {/* Skills Icons */}
        <div className="flex flex-wrap m-4 space-x-6 mb-6">
          {renderSkill(Mongodb, "MongoDB", "M", "text-green-500")}
          {renderSkill(Express, "Express.js", "E", "text-white")}
          {renderSkill(React, "React", "R", "text-blue-500")}
          {renderSkill(Node, "Node.js", "N", "text-green-600")}
        </div>

        {/* Other Skills Section */}
        <h2 className="text-2xl font-bold mb-4 ">Other Skills</h2>
        <div className="flex mb-4"></div>
        <div className="flex flex-wrap m-4 space-x-6 p-4">
          {renderSkill(Git, "Git", "Git", "text-orange-500")}
          {renderSkill(Docker, "Docker", "Docker", "text-blue-300")}
          {renderSkill(Linux, "Linux", "Linux", "text-green-500")}
          {renderSkill(C, "C", "C", "text-blue-400")}
          {renderSkill(Php, "PHP", "PHP", "text-purple-500")}
          {renderSkill(Tailwind, "Tailwind CSS", "Tailwind", "text-teal-500")}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
