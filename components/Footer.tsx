"use client";

import * as motion from "motion/react-client";
import { quicklink } from "@/lib/constants";
import { Mail } from "lucide-react";
import Socialicons from "./ui/Socialicons";
import Container from "@/components/Container";

function Footer() {
 const llms = [
   {
     id: "llms-file",
     title: "llms.txt",
     url: "/llms.txt",
     icon: "llms.txt",
     hoverColor: "hover:text-blue-400",
     bgColor: "bg-blue-400/10",
     description: "Explore the llms.txt file...",
   },
 ];
  return (
    <footer className="mt-10 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl font-semibold">Rajeev Puri</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building immersive digital experiences optimized for speed and
              accessibility. Specializing in conversion-focused design and
              robust software engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-2 ">
              {[...quicklink, ...llms].map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 py-2"
                  whileHover={{ x: 4 }}
                >
                  <span>{link.title}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl font-semibold">Get in Touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Have a project in mind? Let’s start the conversation.  I’m ready to help you
              create something remarkable.
            </p>
            <a
              href="mailto:contact@rajeevpuri.com.np"
              className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              contact@rajeevpuri.com.np
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Socialicons />

            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Rajeev Puri. All rights
              reserved.
            </p>
            <motion.a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -4 }}
            >
              Back to top ↑
            </motion.a>
          </div>
        </div>
        <ShipItCTA />
      </Container>
    </footer>
  );
}

function ShipItCTA() {
  return (
    <section className="py-2 group overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        <h2
          className="text-5xl md:text-[10rem] font-black tracking-wider leading-none select-none  transition-all duration-700"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.1)",
          }}
        >
          {/* SAY IT - Outline to White */}
          <span className="text-transparent group-hover:text-white transition-colors duration-500 ease-in-out">
            SAY IT.
          </span>

          {/* SHARE IT - Outline to Zinc */}
          <span className="text-transparent group-hover:text-zinc-800 transition-colors duration-500 ease-in-out delay-75">
            SHARE IT.
          </span>

          {/* SHIP IT - Outline to Blue Italic */}
          <span className="text-transparent group-hover:text-blue-600 italic transition-colors duration-500 ease-in-out delay-150 group-hover:drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            SHIP IT.
          </span>
        </h2>
      </motion.div>
    </section>
  );
}

export default Footer;
