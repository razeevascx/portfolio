import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/notion/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rajeevpuri.com.np";
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  try {
    const posts = await getBlogPosts();
    const postEntries = posts.map((p) => {
      let lastMod = now;
      if (p.publishedDate) {
        const d = new Date(p.publishedDate);
        if (!isNaN(d.getTime())) {
          lastMod = d;
        }
      }
      return {
        url: `${baseUrl}/blog/${p.slug}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.7,
      };
    }) as MetadataRoute.Sitemap;

    return [...staticEntries, ...postEntries];
  } catch (e) {
    return staticEntries;
  }
}
