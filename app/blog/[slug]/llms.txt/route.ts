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
import { getBlogPostBySlug, getBlogPostMarkdown } from "@/lib/notion/blog";
import { formatDate } from "@/lib/utils";

function stripMarkdown(md: string) {
  return md
    .replace(/[#*`>\[\]]/g, "")
    .replace(/\n{2,}/g, "\n\n")
    .trim();
}

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCurl = isCurlRequest(userAgent);

  // Derive slug from the URL path to avoid params mismatch in route handlers
  const pathname = request.nextUrl?.pathname || "";
  let slug = pathname.replace(/^\/blog\//, "").replace(/\/llms\.txt$/, "");
  slug = decodeURIComponent(slug);

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    // If post not found, return helpful list of available slugs for debugging
    const all = await (await import("@/lib/notion/blog")).getBlogPosts();
    const list = all
      .map((p) => `- ${p.title} -> /blog/${p.slug}`)
      .join("\n");

    const mdNotFound = `# Not found

No blog post matched: **${slug}**

Available posts:\n
${list}`;
    return CurlResponse(mdNotFound);
  }

  const markdown = await getBlogPostMarkdown(post.id);

  if (!isCurl) {
    const mdContent = `# ${post.title}

${post.excerpt}

- **Published**: ${formatDate(post.publishedDate)}
- **Reading Time**: ${post.readingTime} min read
${post.tags.length > 0 ? `- **Tags**: ${post.tags.join(", ")}` : ""}

---

${markdown}`;
    return CurlResponse(mdContent);
  }

  const contentPreview = post.excerpt
    ? post.excerpt
    : stripMarkdown(markdown).slice(0, 800) + (markdown.length > 800 ? "..." : "");

  const wrapped = wrapText(contentPreview, 95, "  ");

  const tagLine = post.tags.length
    ? `  ${post.tags.map((t) => `${colors.CYAN}#${t}${colors.RESET}`).join(" ")}`
    : "";

  const featured = post.featured ? ` ${colors.YELLOW}★ Featured${colors.RESET}` : "";

  const body = `${Header("ARTICLE", "04", " Article")}
  ${colors.WHITE}${colors.BOLD}${post.title}${colors.RESET}${featured}
  ${colors.DIM}${formatDate(post.publishedDate)} · ${post.readingTime} min read${colors.RESET}

${wrapped}

${tagLine}

${colors.BRIGHT_CYAN}▸${colors.RESET} ${colors.DIM}/blog/${post.slug}${colors.RESET}
`;

  // Include the full post content (stripped markdown) after the preview for curl users
  const fullContent = stripMarkdown(markdown || "");
  const output = `${body}\n${Separator()}\n${fullContent}\n${Separator()}\n${Legend()}`;
  return CurlResponse(output);
}
