"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import { useState,memo } from "react";
import { quicklink } from "@/lib/constants";
import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 z-50 sticky top-0 shadow-md backdrop-blur-sm bg-black/50">
      <Container className="px-4">
        <div className="flex justify-between items-center">
          <motion.div whileTap={{ scale: 1.05 }} className="cursor-pointer">
            <Link href="/" aria-label="Home">

              <Image
              src="/logo.svg"
                width={50}
                height={25}
                alt="logo"
                loading="eager"
                className="hover:opacity-80 transition-opacity h-6 md:h-8 w-auto"
              />
            </Link>
          </motion.div>

          <NavLinks />

          <motion.a
            href="mailto:contact@rajeevpuri.com.np"
            className="hidden md:flex items-center hover:text-blue-500"
          >
            <button className="bg-white text-black px-4 lg:px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all">
              Lets Talk <ArrowRight size={14} />
            </button>
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </Container>

      <AnimatePresence mode="wait">
        {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
}

const NavLinks = memo(function NavLinks() {
  return (
    <div className="hidden md:flex space-x-6 lg:space-x-8">
      {quicklink.map((link) => (
        <motion.a
          key={link.id}
          href={link.url}
          className="flex items-center hover:text-blue-500 text-sm lg:text-base font-semibold transition-colors"
          whileTap={{ scale: 1.1 }}
        >
          {link.title}
        </motion.a>
      ))}
    </div>
  );
});

export default memo(Navbar);
