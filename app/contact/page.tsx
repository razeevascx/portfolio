import Contact from "@/components/sections/Contact";
import BookingCards from "@/components/sections/BookingCards";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rajeev Puri",
  description: "Get in touch with Rajeev Puri for collaboration, project inquiries, or professional networking.",
};

export default function page() {
  return (
    <main className="pb-20">
      {/* Original Contact Info Section */}
      <Contact />

      {/* Booking Cards Section */}
      <Container className="p-5 py-20">
        <BookingCards />
      </Container>

    </main>
  );
}
