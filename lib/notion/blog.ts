import { cacheLife, cacheTag } from 'next/cache'
import { Notionclient } from "@/lib/notion/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedDate: string;
  featured: boolean;
  readingTime: number;
  tags: string[];
  image?: string;
}

export async function getBlogPostMarkdown(pageId: string): Promise<string> {
  'use cache'
  try {
    const response: any = await Notionclient.pages.retrieveMarkdown({
      page_id: pageId,
    });

    return response?.markdown || "";
  } catch (error) {
    console.error("Failed to load blog markdown from Notion:", error);
    return "";
  }
}

type NotionProperty = {
  type?: string;
  title?: Array<{ plain_text?: string }>;
  rich_text?: Array<{ plain_text?: string }>;
  multi_select?: Array<{ name?: string }>;
  checkbox?: boolean;
  number?: number;
  date?: { start?: string };
  files?: Array<{ file?: { url?: string }; external?: { url?: string } }>;
};

function getPlainText(prop?: NotionProperty): string {
  if (!prop) return "";
  if (prop.type === "title") return prop.title?.[0]?.plain_text || "";
  if (prop.type === "rich_text") return prop.rich_text?.[0]?.plain_text || "";
  return "";
}

function getTags(prop?: NotionProperty): string[] {
  if (!prop || prop.type !== "multi_select") return [];
  return (prop.multi_select || []).map((tag) => tag.name || "").filter(Boolean);
}

function getImageUrl(prop?: NotionProperty): string | undefined {
  if (!prop || prop.type !== "files") return undefined;
  const file = prop.files?.[0];
  return file?.file?.url || file?.external?.url;
}

function extractImageFromCover(row: any): string | undefined {
  // Try to extract image from page cover
  if (row?.cover?.external?.url) return row.cover.external.url;
  if (row?.cover?.file?.url) return row.cover.file.url;
  return undefined;
}

function normalizeSlug(s: string | undefined): string {
  if (!s) return "";
  return s
    .toLowerCase()
    .replace(/\.+/g, "") // remove dots
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumeric -> hyphen
    .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens
}

export async function getBlogPosts(
  dataSourceId?: string
): Promise<BlogPost[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('blog-posts')
  const sourceId =
    dataSourceId ||
    process.env.NOTION_BLOG_DATA_SOURCE_ID ||
    process.env.NOTION_DATA_SOURCE_ID;

  if (!sourceId) {
    console.warn("No Notion blog data source ID configured");
    return [];
  }

  try {
    const allResults: any[] = [];
    let start_cursor: string | undefined = undefined;

    do {
      const resp: any = await Notionclient.request({
        path: `data_sources/${sourceId}/query`,
        method: "post",
        body: {
          page_size: 100,
          start_cursor,
        },
      });

      allResults.push(...(resp?.results || []));
      start_cursor = resp?.has_more ? resp?.next_cursor : undefined;
    } while (start_cursor);

    return allResults
      .map((row: any) => {
        const props = (row?.properties || {}) as Record<
          string,
          NotionProperty
        >;

        return {
          id: row.id,
          title: getPlainText(props.Title) || "Untitled",
          slug:
            normalizeSlug(getPlainText(props.Slug)) ||
            normalizeSlug(getPlainText(props.Title)) ||
            "",
          content: getPlainText(props.Content) || "",
          excerpt: getPlainText(props.Excerpt) || "",
          publishedDate: props["Published Date"]?.date?.start || "",
          featured: !!props.Featured?.checkbox,
          readingTime:
            typeof props["Reading Time"]?.number === "number"
              ? props["Reading Time"].number
              : 0,
          tags: getTags(props.Tags),
          image: getImageUrl(props["Files & media"]) || extractImageFromCover(row),
        } as BlogPost;
      })
      .filter((post) => post.title && post.slug)
      .sort(
        (a, b) =>
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
      );
  } catch (error) {
    console.error("Failed to load blog posts from Notion:", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
  dataSourceId?: string
): Promise<BlogPost | null> {
  const posts = await getBlogPosts(dataSourceId);
  const target = normalizeSlug(slug);
  return (
    posts.find((post) => normalizeSlug(post.slug) === target) || null
  );
}
