import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rajeev Puri - Software Engineer Portfolio",
    short_name: "Rajeev Puri",
    description:
      "Software Engineer specializing in full-stack web development, UI/UX design, and system architecture. Building innovative web experiences with Next.js, React, and TypeScript.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    theme_color: "#000000",
    background_color: "#020203",
    categories: ["business", "productivity", "developer tools"],
    dir: "ltr",
    lang: "en",
    prefer_related_applications: false,
    related_applications: [],
    screenshots: [
      {
        src: "/opengraph-image.jpg",
        type: "image/jpeg",
        sizes: "1200x630",
        form_factor: "wide",
      },
    ],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    protocol_handlers: [
      {
        protocol: "mailto",
        url: "/contact?email=%s",
      },
      {
        protocol: "web+portfolio",
        url: "/?ref=%s",
      },
    ],
    shortcuts: [
      {
        name: "Projects",
        short_name: "Projects",
        description: "View my software engineering projects",
        url: "/projects",
        icons: [
          {
            src: "/icon",
            sizes: "32x32",
            type: "image/png",
          },
        ],
      },
      {
        name: "Services",
        short_name: "Services",
        description: "Explore my services",
        url: "/services",
        icons: [
          {
            src: "/icon",
            sizes: "32x32",
            type: "image/png",
          },
        ],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Get in touch with me",
        url: "/contact",
        icons: [
          {
            src: "/icon",
            sizes: "32x32",
            type: "image/png",
          },
        ],
      },
    ],
  };
}
