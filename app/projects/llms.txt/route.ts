import { NextRequest } from "next/server";
import {
  colors,
  Header,
  isCurlRequest,
  CurlResponse,
  Legend,
  Separator,
  wrapText,
} from "@/lib/curl-utils";
import { projectList } from "@/lib/constants";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCurl = isCurlRequest(userAgent);

  if (!isCurl) {
    const mdContent = `# Projects

${projectList.map(p => `## ${p.title}
${p.description}
- **Tech Stack**: ${Object.values(p.tech).map(t => t.id).join(", ")}
- **Link**: [GitHub](${p.link})${p.stars ? `\n- **Stars**: ${p.stars}` : ""}${p.forks ? `\n- **Forks**: ${p.forks}` : ""}
`).join("\n\n")}

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

  const projectsContent = projectList.map((project) => {
    const techBadges = Object.values(project.tech)
      .map((t) => `${colors.CYAN}${t.id}${colors.RESET}`)
      .join(" ");

    const wrappedDescription = wrapText(project.description, 95, "  ");

    const stats = [
      project.stars ? `${colors.YELLOW}★ ${project.stars}${colors.RESET}` : "",
      project.forks ? `${colors.BRIGHT_BLUE}⑂ ${project.forks}${colors.RESET}` : "",
    ].filter(Boolean).join("  ");

    return `
  ${colors.WHITE}${colors.BOLD}${project.title}${colors.RESET} ${stats}

${wrappedDescription}

  ${colors.LIGHT_CYAN}Tech Stack:${colors.RESET} ${techBadges}
  ${colors.GOLD}Link:${colors.RESET} ${colors.CYAN}${project.link}${colors.RESET}
`;
  });

  const ctaSection = `
  ${colors.BRIGHT_CYAN}${colors.BOLD}Interested in Collaborating?${colors.RESET}

  ${colors.DIM}I'm always open to discussing new projects and opportunities.${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/contact/llms.txt${colors.RESET}  ${colors.DIM}Get in touch${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/services/llms.txt${colors.RESET}  ${colors.DIM}See what I can do for you${colors.RESET}`;

  const content = `${Header("PROJECTS", "02", " Showcase of my work")}
${projectsContent.join("\n")}
${Separator()}
${ctaSection}
${Separator()}
${Legend()}

  ${colors.DIM}💡 Tip: Visit the live demos to see the projects in action!${
    colors.RESET
  }
`;

  return CurlResponse(content);
}
