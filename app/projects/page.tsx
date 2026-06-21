import Project from "@/components/sections/Project";
import { Github } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rajeev Puri",
  description: "Explore a showcase of my software engineering projects, including web applications, automation tools, and open-source contributions.",
  alternates: {
    canonical: "https://rajeevpuri.com.np/projects",
  },
  openGraph: {
    title: "Projects | Rajeev Puri",
    description: "Explore a showcase of my software engineering projects, including web applications, automation tools, and open-source contributions.",
    url: "https://rajeevpuri.com.np/projects",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <Project list={15} isPage={true} />

    </>
  );
}
