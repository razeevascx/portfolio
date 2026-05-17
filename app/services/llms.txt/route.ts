import { NextRequest } from "next/server";
import {
  colors,
  Header,
  isCurlRequest,
  CurlResponse,
  Legend,
  wrapText,
} from "@/lib/curl-utils";
import { services } from "@/lib/constants";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCurl = isCurlRequest(userAgent);

  if (!isCurl) {
    const mdContent = `# Services

${services
      .map(
        (s) =>
          `## ${s.title}
${Array.isArray(s.description) ? s.description.join("\n") : s.description}
- **Technologies**: ${s.technologies.join(", ")}`
      )
      .join("\n\n")}

## Legend
- Home: curl rajeevpuri.com.np/llms.txt
- About: curl rajeevpuri.com.np/about/llms.txt
- Projects: curl rajeevpuri.com.np/projects/llms.txt
- Services: curl rajeevpuri.com.np/services/llms.txt
- Contact: curl rajeevpuri.com.np/contact/llms.txt
`;
    return CurlResponse(mdContent);
  }

  // Services section with enhanced styling
  const servicesContent = services
    .map((service) => {
      const descriptionText = Array.isArray(service.description)
        ? service.description.join(" ")
        : service.description;

      const wrappedDescription = wrapText(descriptionText, 95, "     ");

      const techBadges = service.technologies
        .map((tech) => `${colors.CYAN}${tech}${colors.RESET}`)
        .join(" ");

      return `
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.WHITE}${colors.BOLD}${service.title}${colors.RESET}

${wrappedDescription}

     ${colors.LIGHT_CYAN}Tech Stack:${colors.RESET} ${techBadges}
`;
    })
    .join("\n");

  // CTA section
  const ctaSection = `
  ${colors.GOLD}${colors.BOLD}Ready to Start Your Project?${colors.RESET}

  ${colors.DIM}Let's discuss how I can help bring your ideas to life.${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/contact/llms.txt${colors.RESET}  ${colors.DIM}Get my contact information${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/projects/llms.txt${colors.RESET} ${colors.DIM}View my previous work${colors.RESET}`;

  const content = `${Header("SERVICES", "03", " Explore what I can do for you")}

  ${colors.BRIGHT_CYAN}${colors.BOLD}  What I Offer${colors.RESET}

  ${
    colors.DIM
  }Specializing in modern web development and cloud-native solutions${
    colors.RESET
  }
${servicesContent}

${ctaSection}

${Legend()}
`;

  return CurlResponse(content);
}
