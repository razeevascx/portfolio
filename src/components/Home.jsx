import { useState } from "react";
import icon from "./assets/mainIconsdark.svg";
import { motion } from "framer-motion";
import About from "./About";

function Home() {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  // Define animation variants for sequential appearance
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.6 },
    }),
  };

  return (
    <div className="w-full h-screen flex flex-col sm:flex-row pointer-events-none ">
      {/* Left Section */}
      <motion.div className="w-full sm:w-3/5 h-full flex flex-col justify-center items-start m-4 p-4 overflow-hidden">
        <motion.h5
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-bold text-xl lg:text-2xl"
        >
          Hello there, Me myself
        </motion.h5>

        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center text-4xl sm:text-5xl md:text-4xl lg:text-8xl pointer-events-auto lg:text-10xl my-4 font-extrabold bg-gradient-to-r from-green-600 to-indigo-400 bg-clip-text text-transparent animate-text mb-8 cursor-pointer"
          onClick={() => setPopoverOpen((prev) => !prev)}
        >
          <span className="mr-2">राजीव | </span>
          <span className="text-white">🧞🧌</span>
        </motion.h1>

        <motion.span
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-2xl lg:text-4xl mb-4 text-justify"
        >I&apos;m always eager to level up my MERN stack skills 🌱 
          <span className="font-bold text-blue-500">
            Open to exciting projects
          </span>
          that help me
          grow. I genuinely enjoy taking on new challenges and learning along
          the way 💻🚀
        </motion.span>

        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mt-5"
        >
          <motion.button
            aria-label="View my CV"
            className="relative pointer-events-auto border text-1xl p-3 rounded border-none hover:border-[#22c55e] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#22c55e] after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Check out my CV!
          </motion.button>
        </motion.div>

        {/* Popover for About Component */}
        {isPopoverOpen && (
          <div className="fixed inset-0 flex items-center justify-center pointer-events-auto bg-black bg-opacity-50 z-50 overflow-hidden">
            <div className="rounded-lg shadow-lg p-4 relative">
              <About onClose={() => setPopoverOpen(false)} />{" "}
              {/* Pass close function as a prop */}
            </div>
          </div>
        )}
      </motion.div>

      {/* Right Section (Icon) */}
      <motion.div
        className=" hidden h-full w-full justify-center items-center p-4 pointer-events-none overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.img src={icon} className="" alt="Main Icon" />
      </motion.div>
    </div>
  );
}

export default Home;
