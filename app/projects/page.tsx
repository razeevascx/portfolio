import Project from "@/components/sections/Project";
import { Github } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rajeev Puri",
  description: "Explore a showcase of my software engineering projects, including web applications, automation tools, and open-source contributions.",
};

export default function page() {
  return (
    <>
      <Project list={15} />

    </>
  );
}
