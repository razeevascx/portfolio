import { NextRequest } from "next/server";
import {
  colors,
  Header,
  Separator,
  isCurlRequest,
  CurlResponse,
  Legend,
} from "@/lib/curl-utils";
import { socialLinks } from "@/lib/constants";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCurl = isCurlRequest(userAgent);

  if (!isCurl) {
    const mdContent = `# Contact Me

- **Name**: Rajeev Puri
- **Email**: contact@rajeevpuri.com.np
- **GitHub**: https://github.com/razeevascx
- **Website**: https://rajeevpuri.com.np

## Social Links
${socialLinks.map(s => `- **${s.name}**: [${s.username || s.name}](${s.url})`).join("\n")}

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

  const contactInfo = `  ${colors.GRAY}// Contact Information${colors.RESET}
  ${colors.YELLOW}{${colors.RESET}
    ${colors.LIGHT_CYAN}name${colors.RESET}: ${colors.CYAN}"Rajeev Puri"${colors.RESET},
    ${colors.LIGHT_CYAN}email${colors.RESET}: ${colors.CYAN}"contact@rajeevpuri.com.np"${colors.RESET},
    ${colors.LIGHT_CYAN}title${colors.RESET}: ${colors.CYAN}"BSc Student && Software Engineer"${colors.RESET},
    ${colors.LIGHT_CYAN}github${colors.RESET}: ${colors.CYAN}"https://github.com/razeevascx"${colors.RESET},
    ${colors.LIGHT_CYAN}website${colors.RESET}: ${colors.CYAN}"https://rajeevpuri.com.np"${colors.RESET}
  ${colors.YELLOW}}${colors.RESET}`;

  const socialLinksContent = socialLinks
    .map((social) => {
      return `  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${
        colors.WHITE
      }${social.name.padEnd(12)}${colors.RESET} ${colors.CYAN}${social.url}${
        colors.RESET
      }`;
    })
    .join("\n");

  // What to expect section
  const expectSection = `
  ${colors.LIGHT_CYAN}${colors.BOLD} What to Expect${colors.RESET}

  ${colors.DIM}When reaching out, feel free to include:${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} Project details and goals
  ${colors.BRIGHT_CYAN}▸${colors.RESET} Timeline and budget expectations
  ${colors.BRIGHT_CYAN}▸${colors.RESET} Any specific requirements or questions
  ${colors.BRIGHT_CYAN}▸${colors.RESET} Your preferred communication method`;

  // Quick actions
  const quickActions = `
  ${colors.GOLD}${colors.BOLD}🚀 Quick Actions${colors.RESET}

  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/projects/llms.txt${colors.RESET} ${colors.DIM}View my work${colors.RESET}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.CYAN}curl rajeevpuri.com.np/services/llms.txt${colors.RESET}  ${colors.DIM}See what I offer${colors.RESET}`;

  const content = `${Header("CONTACT", "04", " Get in touch with me")}
${contactInfo}
${Separator()}
  ${colors.WHITE}${colors.BOLD}Connect With Me${colors.RESET}
${socialLinksContent}
${Separator()}
${expectSection}
${Separator()}
${quickActions}
${Separator()}
${Legend()}

  ${
    colors.DIM
  }💡 Tip: I'm always excited to discuss new projects and opportunities!${
    colors.RESET
  }
`;

  return CurlResponse(content);
}
