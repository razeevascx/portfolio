
import * as motion from "motion/react-client";
import Link from "next/link";
import dynamic from "next/dynamic";
import Container from "@/components/Container";
import Socialicons from "@/components/ui/Socialicons";
import CopyCommand from "@/components/ui/CopyCommand";
import Marquee from "../ui/Marquee";
import { Suspense } from "react";

const TopographicCanvas = dynamic(
  () =>
    import("@/components/background/Topographic").then((mod) => mod.TopographicCanvas)
);

export default function Hero() {
  const param = {
    numContours: 18,
    timeSpeed: 0.12,
    noiseScale: 0.002,
    colorScheme: "amber" as const,
    showLabels: true,
    mouseInfluence: true,
    hueRotate: 175,
  };
  return (
    <>
      <Container id="home" className="w-full p-4 md:p-5 mx-auto">
        <Suspense >
        <div className="hidden lg:block absolute inset-0 z-0">
          <TopographicCanvas {...param} />
          <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#030303] via-[#030303]/80 to-transparent w-full" />

        </div>
        </Suspense>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-8 md:space-y-12 relative z-10"
        >
          <div className="flex items-center min-h-screen md:min-h-[90dvh] py-12 md:py-0">
            <div className="w-full max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6 md:mb-8"
              >
                <div className="h-px w-8 md:w-12 bg-blue-600"></div>
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-500 font-bold">
                  A path back to wonder
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight leading-[0.95] mb-6 md:mb-8"
              >
                Relearn how to <br />
                wonder, feel, and{" "}
                <span className="mr-2 text-primary italic">Launch.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="border-l-2 border-white/10 pl-4 md:pl-8 mb-8 md:mb-12"
              >
                <p className="text-sm md:text-lg lg:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed hover:text-white transition-colors duration-300">
                  Hey there. I'm{" "}
                  <span className="text-white font-bold">Rajeev Puri</span>.
                  Currently a BSc Student and a software engineer. I'll guide
                  your creativity with calm, immersive products that blend
                  reflection, sound, and visual prompts so ideas feel natural
                  again.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-[8px] md:text-[10px] text-zinc-400 font-medium mb-8 md:mb-10 uppercase tracking-widest hover:text-white transition-colors duration-300"
              >
                No deadlines — No noise — Just space to rediscover your
                imagination
              </motion.p>

              <Socialicons showUsername className="mb-6 md:mb-8" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-12"
              >
                <Link
                  href="/projects"
                  className="group flex items-center justify-center md:justify-start gap-3 text-xs px-6 md:px-10 py-4 md:py-5 border-2 border-white/20 bg-transparent font-black uppercase tracking-[0.2em] hover:border-white transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  VIEW PROJECTS
                </Link>
                <Link
                  href="/contact"
                  className="px-6 md:px-10 py-4 md:py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 active:scale-95 border-2 border-white flex items-center justify-center"
                >
                  CONTACT
                </Link>
              </motion.div>

              <div className="w-full">
                <CopyCommand
                  command="curl -L https://rajeevpuri.com.np"
                  label="View in terminal"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
      <Marquee />
    </>
  );
}
