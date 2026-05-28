import { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Open Graph Images | Rajeev Puri",
  description: "View and generate dynamic Open Graph images for social media.",
  keywords: ["OpenGraph", "OG Images", "Social Media"],
  alternates: {
    canonical: "https://rajeevpuri.com.np/og-showcase",
  },
};

export default function OGShowcasePage() {
  const examples = [
    {
      name: "Home Page",
      url: "/og?route=home",
      description: "Default landing page Open Graph image"
    },
    {
      name: "Services",
      url: "/og?route=services&title=Technical Specializations&capabilities=Next.js,Rust,Cloud Arch",
      description: "Showcasing technical capabilities"
    },
    {
      name: "Projects",
      url: "/og?route=projects&title=Repository Directory&selectedWork=Check out my latest production deployments.",
      description: "Portfolio and project directory view"
    },
    {
      name: "About",
      url: "/og?route=about&title=Biography Specs&credentials=Software architect specializing in high-speed systems.",
      description: "Personal biography and system stats"
    },
    {
      name: "Contact",
      url: "/og?route=contact&title=Initialize Sync Protocol&email=contact@rajeevpuri.com.np",
      description: "Direct contact information"
    },
    {
      name: "Blog Post",
      url: "/og?route=blog&title=Architecting Brutalist Systems&description=How to build fast and modular UI engines.&tags=React,Performance,UI",
      description: "Dynamic blog post preview"
    }
  ];

  return (
    <Container className="py-20 px-5">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Open Graph Engine</h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Dynamic, Satori-powered Open Graph image generation with brutalist design protocols.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 gap-12">
          {examples.map((example, i) => (
            <div key={i} className="space-y-4 border border-zinc-800 rounded-lg p-8 bg-zinc-950">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{example.name}</h2>
                  <p className="text-zinc-500 text-sm">{example.description}</p>
                </div>
                <code className="text-[10px] text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                  ROUTE: {example.url.split('route=')[1]?.split('&')[0]?.toUpperCase()}
                </code>
              </div>
              
              <div className="bg-zinc-900 p-3 rounded border border-zinc-700 overflow-x-auto mb-4">
                <code className="text-xs text-zinc-400">
                  {example.url}
                </code>
              </div>

              <div className="relative w-full bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700 aspect-[1200/630]">
                <img
                  src={example.url}
                  alt={example.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specs */}
        <div className="space-y-4 border border-zinc-800 rounded-lg p-8 bg-zinc-950">
          <h2 className="text-2xl font-bold">Implementation Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-[#2883ff]">Core Stack</h3>
              <ul className="space-y-2 text-sm text-zinc-400 font-mono">
                <li>• Next.js 16 (next/og)</li>
                <li>• Vercel Satori Engine</li>
                <li>• Tailwind CSS (tw attribute)</li>
                <li>• Edge Runtime (latency-optimized)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-[#2883ff]">Query Protocol</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><code className="text-blue-400">route</code> - Component variant (home, services, projects, etc)</li>
                <li><code className="text-blue-400">title</code> - Main headline text</li>
                <li><code className="text-blue-400">description/subtitle</code> - Supporting text content</li>
                <li><code className="text-blue-400">tags/capabilities</code> - Comma-separated lists</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
