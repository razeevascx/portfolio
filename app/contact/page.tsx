import Contact from "@/components/sections/Contact";
import BookingCards from "@/components/sections/contact/BookingCards";
import Container from "@/components/Container";
import { Metadata } from "next";
import TimeZone from "@/components/sections/contact/TimeZone";

const title = "Initialize Sync Protocol | Rajeev Puri";
const description = "Get in touch with Rajeev Puri, a London-based software engineer.";
const ogImage = `/og?route=contact&title=${encodeURIComponent("Initialize Sync Protocol")}&email=${encodeURIComponent("contact@rajeevpuri.com.np")}`;

export const metadata: Metadata = {
  title: "Contact | Rajeev Puri - Hire Software Engineer in London",
  description: "Get in touch with Rajeev Puri, a London-based software engineer. Available for freelance projects, consulting, and full-time roles. Expert in Next.js, React, TypeScript, and system architecture. Let's discuss your project requirements.",
  keywords: [
    "Contact",
    "Hire Software Engineer",
    "Freelance Developer",
    "Software Engineer London",
    "Get in Touch",
    "Project Inquiry",
    "Technical Consulting",
    "Collaboration",
  ],
  alternates: {
    canonical: "https://rajeevpuri.com.np/contact",
  },
  openGraph: {
    title,
    description,
    url: "https://rajeevpuri.com.np/contact",
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
    <main className="pb-20">
      {/* Original Contact Info Section */}
      <Contact />

      {/* Booking Cards Section */}
      <Container className="p-5 ">
        <TimeZone/>
        <BookingCards />
      </Container>

    </main>
  );
}
