import { IBM_Plex_Sans, Geist_Mono, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Rajeev Puri - Portfolio ",
  description:
    "Software Engineer specializing in full-stack web development, UI/UX design, and system architecture. Building innovative web experiences with Next.js, React, and TypeScript.",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "UI/UX Design",
    "Full-Stack Development",
  ],
  authors: [{ name: "Rajeev Puri", url: "https://rajeevpuri.com.np" }],
  creator: "Rajeev Puri",
  category: "Software Development",
  icons: {
    icon: "/icon",
    apple: "/icon",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajeevpuri.com.np",
    title: "Rajeev Puri - Software Engineer",
    description:
      "Full-stack software engineer building innovative web experiences with modern technologies.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rajeev Puri - Software Engineer",
      },
    ],
    siteName: "Rajeev Puri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeev Puri - Software Engineer",
    description:
      "Full-stack software engineer specializing in Next.js, React, and TypeScript.",
    images: {
      url: "/twitter-image.jpg",
      alt: "Rajeev Puri",
    },
    creator: "@razeev_asnx",
  },
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
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
      description:
        "Software Engineer with expertise in Next.js, React, TypeScript, and modern web technologies",
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
        "Web Development",
        "UI/UX Design",
        "Database Design",
        "Cloud Architecture",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rajeevpuri.com.np/#website",
      url: "https://rajeevpuri.com.np",
      name: "Rajeev Puri Portfolio",
      description:
        "Portfolio and services of Rajeev Puri, a software engineer specializing in modern web technologies",
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
      </body>
    </html>
  );
}
