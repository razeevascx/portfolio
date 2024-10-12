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
function About({ onClose }) { 
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Function to speak the name
  const speakName = () => {
    if (isSpeaking) return;

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance("Ruh-jeev");
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  // Function to render skill icons with animation
  const renderSkill = (imgSrc, altText, label, colorClass) => (
    <motion.div
      className="flex flex-col items-center m-2"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
    >
      <img src={imgSrc} alt={altText} className="w-12 h-12 mb-2" />
      <span className={`text-sm ${colorClass} font-bold text-4xl `}>{label}</span>
    </motion.div>
  );

  return (
    <div className="bg-gray-900 z-10 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-10 relative">
      {/* About Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-between">
          <span className="flex items-center">
            Rajeev
            <span className="text-gray-400 ml-2">(Ruh-jeev)</span>
            <PiSpeakerHighFill
              className={`cursor-pointer transition-transform transform hover:scale-125 ml-2 ${
                isSpeaking ? "text-gray-400" : "text-white"
              }`}
              onClick={speakName}
              size={35}
              aria-label="Speak name"
            />
          </span>
          {/* Close Button */}
          <button
            onClick={onClose} // Close the popover when clicked
            className=" ml-2"
            aria-label="Close"
          >
            X
          </button>
        </h1>
        <p className="text-lg mb-2">
          <strong className="font-semibold">Type:</strong> Proper Noun
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          Rajeev is a masculine proper noun, derived from Sanskrit, meaning{" lotus."} It symbolizes beauty, purity, and calmness, commonly used in South Asia.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
        <div className="flex justify-center items-center mb-4"></div>

        {/* Skills Icons */}
        <div className="flex justify-center m-4 space-x-6 bg-gray-800 p-4 rounded-lg mb-6">
          {renderSkill(Mongodb, "MongoDB", "M", "text-green-500")}
          {renderSkill(Express, "Express.js", "E", "text-white")}
          {renderSkill(React, "React", "R", "text-blue-500")}
          {renderSkill(Node, "Node.js", "N", "text-green-600")}
        </div>

        {/* Other Skills Section */}
        <h2 className="text-2xl font-bold mb-4 text-center">Other Skills</h2>
        <div className="flex justify-center items-center mb-4"></div>
        <div className="flex justify-center items-center mb-4">
          {renderSkill(Git, "Git", "Git", "text-orange-500")}
          {renderSkill(Docker, "Docker", "Docker", "text-blue-300")}
          {renderSkill(Linux, "Linux", "Linux", "text-green-500")}
          {renderSkill(C, "C", "C", "text-blue-400")}
          {renderSkill(Php, "PHP", "PHP", "text-purple-500")}
          {renderSkill(Tailwind, "Tailwind CSS", "Tailwind", "text-teal-500")}
        </div>
      </div>
    </div>
  );
}

export default About;
