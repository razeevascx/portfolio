import { IBM_Plex_Sans, Geist_Mono, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, Viewport } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { NoiseOverlay } from "@/components/background/Nebula";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rajeevpuri.com.np"),
  title: {
    default: "Rajeev Puri | Software Engineer",
    template: "%s | Rajeev Puri",
  },
  description:
    " Software Engineer based in Nepal, specializing in Next.js, React, and PostgreSQL. Building high-performance web applications and scalable system architectures.",
  keywords: [
    // Core Roles
    "Software Engineer UK",
    "Full Stack Developer London",
    "Product Engineer",
    "React Contractor UK",

    // Tech Stack (High Demand)
    "Next.js Expert",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "AWS Lambda",
    "Docker",
    "Terraform",
    "Tailwind CSS",

    // Methodologies & Concepts
    "TDD",
    "Test Driven Development",
    "CI/CD",
    "Agile Delivery",
    "Microservices",
    "System Architecture",
    "Web Performance Optimisation", // UK Spelling

    // Niche / Emerging
    "AI Integration",
    "Serverless Architecture",
    "Fintech Development",
  ],
  authors: [{ name: "Rajeev Puri", url: "https://rajeevpuri.com.np" }],
  creator: "Rajeev Puri",
  category: "technology",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajeevpuri.com.np",
    title: "Rajeev Puri | Software Engineer",
    description:
      "Crafting innovative web experiences with Next.js and TypeScript. View my latest projects and technical expertise.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rajeev Puri Portfolio - Software Engineer",
      },
    ],
    siteName: "Rajeev Puri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeev Puri | Software Engineer",
    description:
      "Software Engineer specializing in Next.js, React, and modern web tech.",
    images: ["/twitter-image.jpg"],
    creator: "@razeev_asnx",
  },
  alternates: {
    canonical: "https://rajeevpuri.com.np",
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://rajeevpuri.com.np/#person",
      name: "Rajeev Puri",
      url: "https://rajeevpuri.com.np",
      jobTitle: "Software Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "UK",
      },
      description:
        "Full-stack Software Engineer based in the UK, specializing in Next.js, React, TypeScript, and scalable Cloud Architecture.",
      email: "contact@rajeevpuri.com.np",
      sameAs: [
        "https://github.com/razeevascx",
        "https://linkedin.com/in/razeevasnx",
        "https://twitter.com/razeev_asnx",
      ],
      knowsAbout: [
        "Software Development",
        "React",
        "Next.js",
        "TypeScript",
        "Full-Stack Web Development",
        "AWS Cloud",
        "PostgreSQL",
        "Agile Development",
        "System Architecture",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rajeevpuri.com.np/#website",
      url: "https://rajeevpuri.com.np",
      name: "Rajeev Puri Portfolio",
      description:
        "Professional portfolio of Rajeev Puri, a UK-based software engineer.",
      publisher: { "@id": "https://rajeevpuri.com.np/#person" },
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        {/* Structured Data (JSON-LD) */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${geistMono.variable} antialiased font-sans dark selection:bg-primary/40 `}
      >
        <Navbar />
        <NoiseOverlay />

        {children}
        <Footer />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
