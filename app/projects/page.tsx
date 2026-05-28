import Project from "@/components/sections/Project";
import { Github } from "lucide-react";
import { Metadata } from "next";

const title = "Repository Directory | Rajeev Puri";
const description = "Production deployment logs & serverless assets.";
const ogImage = `/og?route=projects&title=${encodeURIComponent("Repository Directory")}&selectedWork=${encodeURIComponent(description)}`;

export const metadata: Metadata = {
  title: "Projects | Rajeev Puri - Portfolio of Web Applications & Software Solutions",
  description: "Explore Rajeev Puri's portfolio of software engineering projects: web applications, automation tools, open-source contributions, and case studies. Demonstrating expertise in Next.js, React, TypeScript, system architecture, and scalable web solutions.",
  keywords: [
    "Projects",
    "Portfolio",
    "Web Applications",
    "Software Solutions",
    "Case Studies",
    "Open Source",
    "Next.js Projects",
    "React Applications",
    "Full Stack Development",
    "System Architecture",
  ],
  alternates: {
    canonical: "https://rajeevpuri.com.np/projects",
  },
  openGraph: {
    title,
    description,
    url: "https://rajeevpuri.com.np/projects",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: "@razeev_asnx",
    images: [ogImage],
  },
};

export default function page() {
  return (
    <>
      <Project list={15} />

    </>
  );
}
