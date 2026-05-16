import {
  ReactLight,
  Nodejs,
  Python,
  Docker,
  Redux,
  TailwindCSS,
  MotionDark,
  Vite,
  Java,
  TypeScript,
  Nextjs,
  Supabase,
  Vue,
  MongoDBDark,
  XDark,
} from "@ridemountainpig/svgl-react";
import {
  GithubIcon,
  Mail,
  LinkedinIcon,
  X,
  Code,
  Palette,
  Layout,
  Database,
  Cpu,
  PaletteIcon,
  Layers,
  Infinity,
  ShieldCheck,
  Search,
  Pencil,
  LayoutDashboard,
  Rocket,
} from "lucide-react";
import {
  ArchitectureIllustration,
  BrandingIllustration,
  DatabaseIllustration,
  DevOpsIllustration,
  FullStackIllustration,
  UIUXIllustration,
} from "@/components/illustration/ServiceIllustrations";


interface QuickLink {
  id: string;
  title: string;
  url: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  hoverColor: string;
  bgColor: string;
  description: string;
  username?: string;
}



export interface Service {
  id: string;
  icon: React.ReactNode;
  illustration?: React.ComponentType | React.ReactNode;
  category: string;
  type: "core" | "capable";
  title: string;
  description: string;
  gridClass: string;
  technologies: string[];
}

export const quicklink: QuickLink[] = [
  {
    id: "services",
    title: "Services",
    url: "/services",
  },
  {
    id: "projects",
    title: "Projects",
    url: "/projects",
  },

  {
    id: "about",
    title: "About",
    url: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact",
  },
  {
    id: "blog",
    title: "Blog",
    url: "/blog",
  },
];


export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/razeev_asnx",
    icon: <XDark className="w-6 h-6" />,
    hoverColor: "hover:text-white",
    bgColor: "bg-white/10",
    description: "Latest updates & thoughts",
    username: "@razeev_asnx",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/razeevasnx",
    icon: <LinkedinIcon className="w-6 h-6" />,
    hoverColor: "hover:text-blue-600",
    bgColor: "bg-blue-600/10",
    description: "Professional network",
    username: "Rajeev Puri",
  },
  {
    name: "GitHub",
    url: "https://github.com/razeevascx/",
    icon: <GithubIcon size={30} />,
    hoverColor: "hover:text-white",
    bgColor: "bg-white/10",
    description: "Check out my projects",
    username: "razeevascx",
  },
  {
    name: "Mail",
    url: "mailto:contact@rajeevpuri.com.np",
    icon: <Mail size={30} />,
    hoverColor: "hover:text-blue-400",
    bgColor: "bg-blue-400/10",
    description: "Mail service",
    username: "contact@rajeevpuri.com.np",
  },
];

export const services = [
  {
    id: "01",
    icon: <PaletteIcon />,
    illustration: <BrandingIllustration />,
    title: "Brand Strategy & Digital Identity Systems",
    description: [
      "Strategic visual identities that build market authority and trust",
      "Professional logo design tailored to your business goals",
      "Comprehensive brand guidelines for consistency across all touchpoints",
      "Memorable brand systems that ensure recognition at every interaction",
    ],
    gridClass: "md:col-span-2 md:row-span-1",
    technologies: [
      "Brand Architecture",
      "Figma",
      "Design Systems",
      "Typography",
    ],
    category: "Digital Branding",
    type: "capable",
  },
  {
    id: "02",
    icon: <Code />,
    illustration: <FullStackIllustration />,
    title: "Scalable Next.js & Full-Stack Development",
    description: [
      "End-to-end web applications optimized for Core Web Vitals and speed",
      "Secure backend architecture built for long-term scalability",
      "High-fidelity frontends engineered to maximize user retention",
      "Conversion-optimized experiences designed to grow with your business",
    ],
    technologies: [
      "TypeScript",
      "PostgreSQL",
      "Performance Optimization",
      "Tailwind CSS",
    ],
    category: "Software Engineering",
    type: "core",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "03",
    icon: <Palette />,
    illustration: <UIUXIllustration />,
    title: "Conversion-Focused UI/UX & Product Design",
    description: [
      "User-centric interfaces engineered for accessibility (WCAG compliance)",
      "High-usability designs that simplify complex user journeys",
      "Interactive prototypes that translate business requirements into clarity",
      "Tested flows that reduce friction and drive conversions",
    ],
    technologies: ["Figma", "Wireframing", "User Testing", "Framer Motion"],
    category: "UX/UI Design",
    type: "core",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "04",
    icon: <Database />,
    illustration: <DatabaseIllustration />,
    title: "Database Architecture & Query Optimization",
    description: [
      "Optimized schemas designed for high-traffic, data-intensive applications",
      "Efficient SQL and NoSQL queries that keep your platform fast under load",
      "Reliable data management strategies built for scale and resilience",
      "Indexing and modeling approaches that prevent performance bottlenecks",
    ],
    technologies: [
      "Redis",
      "Prisma ORM",
      "Indexing Strategies",
      "Data Modeling",
    ],
    category: "Backend & Data",
    type: "core",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "05",
    icon: <Layers />,
    illustration: <ArchitectureIllustration />,
    title: "Enterprise System Design & Architecture",
    description: [
      "Future-proof infrastructure built to scale with your user base",
      "Clean architecture and design patterns for long-term maintainability",
      "Modular systems that evolve seamlessly as your business grows",
      "Technical foundations that support rapid feature development",
    ],
    technologies: [
      "Microservices",
      "Serverless Architecture",
      "REST & GraphQL",
      "Load Balancing",
    ],
    category: "Systems Architecture",
    type: "core",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "06",
    icon: <Infinity />,
    illustration: <DevOpsIllustration />,
    title: "Cloud DevOps & Infrastructure Security",
    description: [
      "Automated CI/CD pipelines that accelerate your release cycles",
      "Secure cloud environments with robust containerization strategies",
      "Monitoring and alerting systems to catch issues before they escalate",
      "Infrastructure that removes bottlenecks so your team ships faster",
    ],
    technologies: ["AWS/Vercel", "Docker", "Kubernetes", "GitHub Actions"],
    category: "DevOps & Cloud",
    type: "capable",
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export const processSteps = [

    {
      step: "01",
      // SEO Tip: Focus on "Product Roadmap" and "Digital Strategy"
      title: "Product Discovery & Digital Strategy",
      detail:
        "I analyze your business goals and user personas to define a technical roadmap. We focus on market research and competitive analysis to ensure a high-ROI product launch.",
      icon: Search,
      status: "Strategy Phase",
    },
    {
      step: "02",
      // SEO Tip: Use "UX/UI" and "Prototyping" for design-intent searches
      title: "UX/UI Design & Interactive Prototyping",
      detail:
        "I craft conversion-focused user interfaces and scalable design systems. Using high-fidelity prototypes, we validate user experience (UX) before a single line of code is written.",
      icon: Pencil,
      status: "Design Phase",
    },
    {
      step: "03",
      // SEO Tip: Mention "Full-Stack" and "Scalable"
      title: "Full-Stack Engineering & Clean Code",
      detail:
        "Building robust, scalable architectures using modern tech stacks like Next.js and Node.js. I ensure pixel-perfect frontend implementation and high-performance backend systems.",
      icon: LayoutDashboard,
      status: "Development Phase",
    },
    {
      step: "04",
      // SEO Tip: Focus on "Deployment" and "Optimization"
      title: "Strategic Launch & Performance Scaling",
      detail:
        "I handle secure cloud deployment and real-world performance monitoring. Post-launch, I provide ongoing support to optimize speed, SEO, and user engagement metrics.",
      icon: Rocket,
      status: "Launch Phase",
    },

];
