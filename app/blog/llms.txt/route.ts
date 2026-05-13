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
import { getBlogPosts } from "@/lib/notion/blog";
import { formatDate } from "@/lib/utils";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCurl = isCurlRequest(userAgent);

  const posts = await getBlogPosts();

  if (!isCurl) {
    const mdContent = `# Blog

Thoughts on web development, performance optimization, and modern frameworks.

${posts.map(post => `## ${post.title}

${post.excerpt}

- **Published**: ${formatDate(post.publishedDate)}
- **Reading Time**: ${post.readingTime} min read
${post.tags.length > 0 ? `- **Tags**: ${post.tags.join(", ")}` : ""}
- **Link**: [Read More](/blog/${post.slug})
`).join("\n")}

## Legend
- Home: curl rajeevpuri.com.np/llms.txt
- About: curl rajeevpuri.com.np/about/llms.txt
- Blog: curl rajeevpuri.com.np/blog/llms.txt
- Projects: curl rajeevpuri.com.np/projects/llms.txt
- Services: curl rajeevpuri.com.np/services/llms.txt
- Contact: curl rajeevpuri.com.np/contact/llms.txt
`;
    return CurlResponse(mdContent);
  }

  const blogContent = posts
    .map((post) => {
      const tags = post.tags.length > 0
        ? post.tags.map(tag => `${colors.CYAN}#${tag}${colors.RESET}`).join(" ")
        : "";

      const wrappedExcerpt = wrapText(post.excerpt, 95, "  ");
      const featured = post.featured ? ` ${colors.YELLOW}★ Featured${colors.RESET}` : "";

      return `
  ${colors.WHITE}${colors.BOLD}${post.title}${colors.RESET}${featured}
  ${colors.DIM}${formatDate(post.publishedDate)} · ${post.readingTime} min read${colors.RESET}
${wrappedExcerpt}
  ${tags}
  ${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.DIM}/blog/${post.slug}${colors.RESET}`;
    })
    .join(`\n${Separator()}`);

  const content = `${Header("BLOG", "04", " Articles")}
${Separator()}
${blogContent}

${Separator()}
${Legend()}
`;
  return CurlResponse(content);
}
