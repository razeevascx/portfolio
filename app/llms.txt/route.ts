import { NextRequest } from "next/server";
import {
  colors,
  Header,
  isCurlRequest,
  CurlResponse,
  Legend,
  wrapText,
} from "@/lib/curl-utils";
import { projectList, services, socialLinks } from "@/lib/constants";
import { libraries, language } from "@/lib/skills-data";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCurl = isCurlRequest(userAgent);
  const baseUrl = "https://rajeevpuri.com.np";

  if (isCurl) {
    const welcomeTitle = `${colors.BRIGHT_CYAN}${colors.BOLD}Welcome to my portfolio${colors.RESET}`;

    const aboutText = wrapText(
      `Hey there. I'm Rajeev Puri, a Software Engineer based in London, UK. I specialize in building high-performance, immersive digital products that blend reflection, sound, and visual storytelling to make technology feel natural and intuitive.`,
      100,
      "  ",
    );

    const skillsSection = `
  ${colors.GOLD}${colors.BOLD} Core Skills${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}Languages${colors.RESET}      ${colors.DIM}${language.map(l => l.label).join(", ")}${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}Libraries/Tech${colors.RESET} ${colors.DIM}${libraries.map(l => l.label).join(", ")}${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}Systems/Cloud${colors.RESET}  ${colors.DIM}AWS, Vercel, IBM Z (Mainframe), Linux, Docker, Kubernetes${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}Design${colors.RESET}         ${colors.DIM}Figma, UI/UX, Design Systems, Framer Motion${colors.RESET}`;

    const content = `${Header("HOME", "01", " Introduction")}
  ${welcomeTitle}

${aboutText}
${skillsSection}

${Legend()}
`;
    return CurlResponse(content);
  }

  const sections = [
    `# Rajeev Puri - Software Engineer`,
    `> Based in London, UK. Specializing in Next.js, React, and Scalable System Architecture. Building high-performance web applications with a focus on user-centric design and secure infrastructure.`,
    
    `## About Me`,
    `I'm Rajeev Puri, a Software Engineer dedicated to crafting calm, immersive digital experiences. My work blends technical excellence in full-stack development with a deep understanding of UI/UX and brand strategy. My core philosophy revolves around performance, accessibility, and continuous innovation.`,
    
    `## Technical Skills`,
    `### Languages`,
    language.map(l => `- **${l.label}**: ${l.description}`).join("\n"),
    
    `### Libraries & Frameworks`,
    libraries.map(l => `- **${l.label}**: ${l.description}`).join("\n"),
    
    `## Services`,
    ...services.map(s => `### ${s.title}\n${s.description}\n**Technologies**: ${s.technologies.join(", ")}`),
    
    `## Featured Projects`,
    ...projectList.map(p => `### ${p.title}\n${p.description}\n- **Tech Stack**: ${Object.values(p.tech).map(t => t.id).join(", ")}\n- **Link**: [GitHub](${p.link})${p.stars ? `\n- **Stars**: ${p.stars}` : ""}${p.forks ? `\n- **Forks**: ${p.forks}` : ""}`),
    
    `## Contact Information`,
    `- **Email**: contact@rajeevpuri.com.np`,
    `- **Website**: ${baseUrl}`,
    ...socialLinks.map(s => `- **${s.name}**: [${s.username || s.name}](${s.url})`),
    
    `## Terminal Access`,
    `You can also view this portfolio in your terminal:`,
    `- Home: \`curl -L ${baseUrl}/llms.txt\``,
    `- About: \`curl -L ${baseUrl}/about/llms.txt\``,
    `- Projects: \`curl -L ${baseUrl}/projects/llms.txt\``,
    `- Services: \`curl -L ${baseUrl}/services/llms.txt\``,
    `- Contact: \`curl -L ${baseUrl}/contact/llms.txt\``,
  ];

  return CurlResponse(sections.join("\n\n"));
}
