import Contact from "@/components/sections/Contact";
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

      {/* Final Professional Statement - Tighter and more integrated */}
      <section className="text-center py-10 space-y-6">
        <div className="h-px w-24  mx-auto" />
        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">
          Ready to Build.
        </h3>
        <p className="text-zinc-500 text-sm max-w-lg mx-auto leading-relaxed">
          Currently reviewing opportunities for Q2-Q3 2026. If you have a
          project that requires deep technical expertise and a design-first
          mindset, let's start the conversation.
        </p>
        <div className="flex items-center justify-center gap-2 text-blue-500/50 font-mono text-[10px] uppercase tracking-[0.5em] pt-4">
          awaiting_inquiry <span className="animate-pulse">_</span>
        </div>
      </section>
    </main>
  );
}
