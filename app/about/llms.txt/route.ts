import { NextRequest } from "next/server";
import {
  colors,
  Header,
  isCurlRequest,
  CurlResponse,
  Legend,
  wrapText,
  Separator,
} from "@/lib/curl-utils";
import { libraries, language } from "@/lib/skills-data";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCurl = isCurlRequest(userAgent);

  if (!isCurl) {
    const mdContent = `# About Me

Hey there. I'm Rajeev Puri. Currently a BSc Student and a software engineer. I'll guide your creativity with calm, immersive products that blend reflection, sound, and visual prompts so ideas feel natural again.

## Core Philosophy
- **Performance First**: I prioritize speed and efficiency in every line of code, ensuring applications are snappy and responsive.
- **User Centric**: Design is not just what it looks like, but how it works. I focus on creating intuitive and accessible interfaces.
- **Lifelong Learner**: The tech landscape is ever-changing. I dedicate time daily to learn new patterns, tools, and best practices.

## Technical Expertise
### Languages
${language.map(l => `- **${l.label}**: ${l.description}`).join("\n")}

### Key Libraries & Tools
${libraries.slice(0, 10).map(l => `- **${l.label}**: ${l.description}`).join("\n")}

## Beyond the Terminal
I believe that great software isn't just written in code—it's fueled by curiosity and a balanced perspective on life and design.
- **Coffee Enthusiast**: Fueled by caffeine and curiosity.
- **Open Source Lover**: Committed to collaborative and open software.
- **UI Architect**: Designing systems that are as beautiful as they are functional.
- **Lifelong Learner**: Always exploring new horizons in technology and design.

## Legend
- Home: curl rajeevpuri.com.np/llms.txt
- About: curl rajeevpuri.com.np/about/llms.txt
- Projects: curl rajeevpuri.com.np/projects/llms.txt
- Blog: curl rajeevpuri.com.np/blog/llms.txt
- Services: curl rajeevpuri.com.np/services/llms.txt
- Contact: curl rajeevpuri.com.np/contact/llms.txt
`;
    return CurlResponse(mdContent);
  }

  const welcomeTitle = `${colors.BRIGHT_CYAN}${colors.BOLD}About Rajeev Puri${colors.RESET}`;

  const aboutText = wrapText(
    `I'm a Software Engineer specializing in full-stack web development, UI/UX design, and system architecture. Building innovative web experiences with Next.js, React, and TypeScript. Currently a BSc Student, I focus on building products that feel natural and immersive.`,
    100,
    "  ",
  );

  const philosophySection = `
  ${colors.GOLD}${colors.BOLD}Core Philosophy${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}Performance First${colors.RESET}  ${colors.DIM}Prioritizing speed and efficiency.${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}User Centric${colors.RESET}       ${colors.DIM}Focusing on intuitive and accessible UI.${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}Lifelong Learner${colors.RESET}    ${colors.DIM}Constantly evolving with the tech landscape.${colors.RESET}`;

  const skillsSection = `
  ${colors.GOLD}${colors.BOLD}Technical Expertise${colors.RESET}

  ${colors.WHITE}Languages:${colors.RESET} ${colors.CYAN}${language.map(l => l.label).join(", ")}${colors.RESET}
  ${colors.WHITE}Top Tech:${colors.RESET}  ${colors.CYAN}${libraries.slice(0, 8).map(l => l.label).join(", ")}${colors.RESET}`;

  const beyondSection = `
  ${colors.GOLD}${colors.BOLD}Beyond the Terminal${colors.RESET}

  ${colors.DIM}Curiosity-fueled perspective on life and design:${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} Coffee Enthusiast
  ${colors.BRIGHT_CYAN}▸${colors.RESET} Open Source Lover
  ${colors.BRIGHT_CYAN}▸${colors.RESET} UI Architect
  ${colors.BRIGHT_CYAN}▸${colors.RESET} Lifelong Learner`;

  const content = `${Header("ABOUT", "01", " Who I am and what I stand for")}
  ${welcomeTitle}

${aboutText}

${Separator()}
${philosophySection}

${Separator()}
${skillsSection}

${Separator()}
${beyondSection}

${Separator()}
${Legend()}
`;

  return CurlResponse(content);
}
