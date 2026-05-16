import { ImageResponse } from "next/og";
import { BlogOG } from "../../(metadata)/og/page";
import { getBlogPostBySlug } from "@/lib/notion/blog";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface Props {
  params: { slug: string };
}

export default async function Image({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
      return new ImageResponse(
        <BlogOG title="Blog Post Not Found" tags={["ERROR"]} />,
        { ...size }
      );
  }

  const tags = post.tags.slice(0, 3).map(t => t.toUpperCase());

  return new ImageResponse(
    <BlogOG title={post.title} tags={tags.length > 0 ? tags : ["ARTICLE"]} />,
    {
      ...size,
    },
  );
}
