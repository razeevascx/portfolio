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
    default: "Rajeev Puri | Software Engineer - Next.js, React & System Architecture",
    template: "%s | Rajeev Puri",
  },
  description:
    "London-based Software Engineer specializing in Next.js, React, TypeScript, and Full-Stack Development. Expert in high-performance web applications, scalable system architectures, Cloud DevOps, and secure infrastructure. Available for freelance and contract work.",
  keywords: [
    // Core Roles
    "Software Engineer London",
    "Full Stack Developer UK",
    "Product Engineer",
    "Next.js Expert",
    "React Developer",
    "TypeScript Architect",
    "Web Developer London",
    "Freelance Software Engineer",

    // Tech Stack (High Demand)
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "AWS Lambda",
    "Docker",
    "Python Automation",
    "Mainframe Technologies",
    "IBM Z Xplore",
    "AWS Cloud",

    // Methodologies & Concepts
    "System Architecture",
    "UI/UX Design",
    "Database Optimization",
    "Cloud DevOps",
    "CI/CD Pipeline",
    "Agile Development",
    "Web Performance Optimization",
    "Core Web Vitals",

    // Niche / Emerging
    "AI Integration",
    "Passwordless Authentication",
    "Fintech Development",
    "Scalable SaaS",
    "Serverless Architecture",
  ],
  authors: [{ name: "Rajeev Puri", url: "https://rajeevpuri.com.np" }],
  creator: "Rajeev Puri",
  category: "technology",
  applicationName: "Rajeev Puri Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    locale: "en_GB",
    url: "https://rajeevpuri.com.np",
    title: "Rajeev Puri | Software Engineer",
    description:
      "London-based Software Engineer crafting high-performance digital products with Next.js and TypeScript. Specializing in Full-Stack development, System Architecture, and Cloud Infrastructure.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rajeev Puri Portfolio - Software Engineer in London",
        type: "image/png",
      },
    ],
    siteName: "Rajeev Puri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeev Puri | Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, React, TypeScript, and modern web technologies. Based in London, UK.",
    images: ["/twitter-image.jpg"],
    creator: "@razeev_asnx",
  },
  verification: {
    google: "add-your-google-verification-code",
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
        "Full-stack Software Engineer based in London, UK, specializing in Next.js, React, TypeScript, and scalable Cloud Architecture. Expert in building high-performance web applications and system design.",
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
        "System Architecture",
        "UI/UX Design",
        "DevOps",
        "Python Automation",
        "IBM Z Mainframe",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rajeevpuri.com.np/#website",
      url: "https://rajeevpuri.com.np",
      name: "Rajeev Puri Portfolio",
      description:
        "Professional portfolio of Rajeev Puri, a London-based software engineer specializing in Next.js and System Architecture.",
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
