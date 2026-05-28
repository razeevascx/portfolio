import OGBackground from "./Background";
import OGHeader from "./Header";
import OGFooter from "./Footer";

export function HomeOG({
  title = "Building High-Speed Immersive Digital Systems",
  subtitle = "Software engineer specialized in speed-optimized performance engines and strict design protocols.",
}: { title?: string; subtitle?: string }) {
  return (
    <div tw="h-[630px] w-[1200px] flex flex-col bg-[#050505] p-[75px] relative overflow-hidden">
      <OGBackground />
      <OGHeader title="Rajeev Puri" />

      {/* Main Grid split layout */}
      <div tw="flex flex-1 items-center my-6">
        <div tw="flex-1 flex flex-col justify-center">
          <h1 tw="text-[52px] font-black text-white leading-[1.15] uppercase tracking-tighter font-sans flex">
            {title}
          </h1>
          <p tw="text-lg text-[#a1a1aa] font-light mt-4 leading-relaxed font-sans max-w-[640px] flex">
            {subtitle}
          </p>
        </div>

        {/* Blueprint Framed Avatar Photo on right */}
        <div tw="w-[280px] h-[280px] relative shrink-0 ml-12 flex">
          <div
            tw="absolute inset-0 border flex"
            style={{
              borderColor: 'rgba(40, 131, 255, 0.4)',
              left: '-12px',
              top: '12px'
            }}
          />
          <div tw="absolute inset-0 border border-zinc-800 bg-[#09090b] p-2 overflow-hidden flex">
            <img
              src="https://avatars.githubusercontent.com/u/154011772?v=4"
              tw="w-full h-full"
              style={{ objectFit: 'cover', opacity: 0.9 }}
              alt="Rajeev Puri Profile"
            />
          </div>
        </div>
      </div>

      <div tw="flex items-center justify-between w-full border-t border-zinc-900 pt-6 mt-auto text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
        <span tw="flex">CORE_PROTOCOL // NEXT_SATORI</span>
        <span tw="flex">LAT_RTT: 14ms // LOC_LAT_52.58</span>
      </div>
    </div>
  );
}

export function ServicesOG({
  title = "Technical Specializations",
  capabilities = [
    "Next.js/React",
    "Rust System Core",
    "Cloud Performance Architecture",
  ],
}: { title?: string; capabilities?: string[] }) {
  return (
    <div tw="h-[630px] w-[1200px] flex flex-col bg-[#050505] p-[75px] relative overflow-hidden">
      <OGBackground />
      <OGHeader title="Services" />

      <div tw="flex flex-col flex-1 justify-center my-4">
        <h2 tw="text-[44px] font-black text-white uppercase tracking-tight font-sans mb-8 flex">
          {title}
        </h2>

        <div tw="flex w-full">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              tw="flex-1 flex flex-col p-6 bg-[#09090b] border border-[#18181b] flex"
              style={{ marginLeft: i === 0 ? 0 : '20px' }}
            >
              <span tw="font-mono text-[#2883ff] text-sm font-bold mb-4 flex">
                {`[PORT_0${i + 1}]`}
              </span>
              <span tw="text-white text-xl font-bold uppercase tracking-wide font-sans leading-snug flex">
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>

      <OGFooter path="/services" activeStatus="READY" />
    </div>
  );
}

export function ProjectsOG({
  title = "Repository Directory",
  selectedWork = "Production deployment logs & serverless assets.",
}: { title?: string; selectedWork?: string }) {
  return (
    <div tw="h-[630px] w-[1200px] flex flex-col bg-[#050505] p-[75px] relative overflow-hidden">
      <OGBackground />
      <OGHeader title="Portfolio" />

      <div tw="flex flex-1 items-center my-4">
        <div tw="flex-1 flex flex-col justify-center">
          <h2 tw="text-[48px] font-black text-white uppercase tracking-tight font-sans mb-4 flex">
            {title}
          </h2>
          <p tw="text-lg text-[#a1a1aa] font-sans leading-relaxed font-light flex">
            {selectedWork}
          </p>
        </div>

        {/* Directory structure diagram */}
        <div tw="w-[420px] flex flex-col p-6 border border-zinc-900 bg-[#09090b] font-mono ml-10">
          <span tw="text-zinc-600 text-xs mb-4 flex">
            $ tree /var/www/portfolio
          </span>
          <span tw="text-white text-base mb-2 flex">├── src/</span>
          <span tw="text-white text-base mb-2 flex">│ ├── components/</span>
          <span tw="text-white text-base mb-2 flex">│ └── engines/</span>
          <span tw="text-[#2883ff] text-base mb-2 font-bold flex">
            ├── deploy.config.yml
          </span>
          <span tw="text-orange-500 text-base font-bold flex">
            └── prod-active [1]
          </span>
        </div>
      </div>

      <OGFooter path="/projects" activeStatus="COMPILED" />
    </div>
  );
}

export function AboutOG({
  title = "Biography Specs",
  credentials = "Wolverhampton based software architect specializing in zero-latency protocols.",
}: { title?: string; credentials?: string }) {
  return (
    <div tw="h-[630px] w-[1200px] flex flex-col bg-[#050505] p-[75px] relative overflow-hidden">
      <OGBackground />
      <OGHeader title="About" />

      <div tw="flex flex-1 items-center my-4">
        <div tw="flex-1 flex flex-col justify-center">
          <h2 tw="text-[48px] font-black text-white uppercase tracking-tight font-sans mb-6 flex">
            {title}
          </h2>
          <div tw="flex border-l-[3px] border-[#2883ff] pl-6">
            <p tw="text-xl text-[#d4d4d8] font-sans leading-relaxed font-light flex">
              {credentials}
            </p>
          </div>
        </div>

        {/* Hardware spec list */}
        <div tw="w-[380px] flex flex-col p-6 border border-zinc-900 bg-[#09090b] font-mono ml-10">
          <span tw="text-[#2883ff] text-xs font-bold mb-4 flex">
            SYSTEM STATS:
          </span>
          <div tw="flex justify-between mb-3 border-b border-zinc-900 pb-2">
            <span tw="text-zinc-500 text-xs flex">CORE:</span>
            <span tw="text-white text-xs font-bold flex">TYPESCRIPT</span>
          </div>
          <div tw="flex justify-between mb-3 border-b border-zinc-900 pb-2">
            <span tw="text-zinc-500 text-xs flex">DB:</span>
            <span tw="text-white text-xs font-bold flex">POSTGRESQL</span>
          </div>
          <div tw="flex justify-between">
            <span tw="text-zinc-500 text-xs flex">UPTIME:</span>
            <span tw="text-white text-xs font-bold flex">100.00%</span>
          </div>
        </div>
      </div>

      <OGFooter path="/about" activeStatus="AUTHORIZED" />
    </div>
  );
}

export function ContactOG({
  title = "Initialize Sync Protocol",
  email = "contact@rajeevpuri.com.np",
}: { title?: string; email?: string }) {
  return (
    <div tw="h-[630px] w-[1200px] flex flex-col bg-[#050505] p-[75px] relative overflow-hidden">
      <OGBackground />
      <OGHeader title="Contact" />

      <div tw="flex flex-col flex-1 justify-center my-4">
        <h2 tw="text-[48px] font-black text-white uppercase tracking-tight font-sans mb-6 flex">
          {title}
        </h2>

        {/* Transmission pipeline wrapper */}
        <div tw="flex items-center border border-zinc-900 bg-[#09090b] p-6 w-full">
          <div tw="w-4 h-4 bg-[#2883ff] mr-6 flex" />
          <span tw="font-mono text-2xl text-white font-bold tracking-tight flex">
            {email}
          </span>
          <span tw="ml-auto font-mono text-zinc-600 text-sm flex">
            EST_RTT // 14MS
          </span>
        </div>
      </div>

      <OGFooter path="/contact" activeStatus="READY" />
    </div>
  );
}

export function BlogOG({
  title = "Architecting Brutalist Systems in React UI Engines",
  excerpt = "How to strip away typical consumer visual clutter to construct extremely fast, modular, and developer-first engines.",
  date = "May 28, 2026",
  readTime = "6 min read",
  tags = ["React", "UI", "Performance"],
}: { title?: string; excerpt?: string; date?: string; readTime?: string; tags?: string[] }) {
  return (
    <div tw="h-[630px] w-[1200px] flex flex-col bg-[#050505] p-10 border border-zinc-800">
      <div tw="flex flex-col bg-[#09090b] border border-zinc-900 h-full w-full p-12 relative">
        {/* Upper tags strip */}
        <div tw="flex mb-8 border-b border-zinc-900 pb-5 w-full">
          <div tw="w-2.5 h-2.5 bg-[#2883ff] flex" />
          <div tw="w-2.5 h-2.5 bg-zinc-700 ml-1.5 flex" />
          <div tw="w-2.5 h-2.5 bg-zinc-800 ml-1.5 flex" />
        </div>

        {/* Content body and metrics */}
        <div tw="flex flex-col flex-1">
          <div tw="flex items-center mb-4 text-zinc-500 font-mono text-sm uppercase tracking-wider">
            <span tw="flex">{date}</span>
            <span tw="mx-4 flex">•</span>
            <span tw="flex">{readTime}</span>
          </div>

          <h1 tw="text-[44px] font-black text-white tracking-tight leading-[1.2] uppercase mb-5 font-sans flex">
            {title}
          </h1>

          <div tw="flex border-l border-zinc-800 pl-6 mb-6">
            <p tw="text-lg text-[#a1a1aa] font-sans leading-relaxed font-light max-w-[900px] flex">
              {excerpt}
            </p>
          </div>

          {/* Tags */}
          <div tw="flex">
            {tags.map((tag, i) => (
              <div
                key={i}
                tw="px-3.5 py-1.5 bg-[#18181b] border border-[#27272a] text-zinc-400 font-mono text-xs uppercase tracking-widest flex"
                style={{ marginLeft: i === 0 ? 0 : '8px' }}
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>

        <div tw="mt-auto flex items-center pt-5 border-t border-zinc-900">
          <img
            src="https://avatars.githubusercontent.com/u/154011772?v=4"
            tw="w-12 h-12 rounded-lg border border-zinc-800"
            style={{ objectFit: 'cover' }}
            alt="Sign"
          />
          <div tw="flex flex-col ml-5">
            <span tw="text-white text-lg font-bold flex">Rajeev Puri</span>
            <div tw="flex items-center font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">
              <span tw="text-[#2883ff] flex">SOFTWARE ARCHITECT</span>
              <span tw="mx-2 flex">•</span>
              <span tw="flex">WOLVERHAMPTON, UK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
