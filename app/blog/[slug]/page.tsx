import {
  getBlogPostBySlug,
  getBlogPosts,
  getBlogPostMarkdown,
} from "@/lib/notion/blog";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Container from "@/components/Container";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { useMDXComponents } from "@/mdx-components";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}


export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  const description = post.excerpt || post.content.substring(0, 160);
  const canonical = `https://rajeevpuri.com.np/blog/${post.slug}`;

  return {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Rajeev Puri"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
    },
  } as any;
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const markdown = await getBlogPostMarkdown(post.id);
  const components = useMDXComponents();

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.content.substring(0, 160),
    datePublished: post.publishedDate,
    author: { "@type": "Person", name: "Rajeev Puri" },
    mainEntityOfPage: `https://rajeevpuri.com.np/blog/${post.slug}`,
    keywords: post.tags.join(", ") || undefined,
  };

  return (
    <Container className="pt-24 pb-20 px-8">
      <article>
        <header className="mb-12">
          {post.image && (
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 100vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}
          <h1 className=" font-semibold  text-foreground text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
            {post.title}
          </h1>
          <div className="meta-label text-foreground-muted flex items-center gap-4 mt-6">
            {post.publishedDate && (
              <time dateTime={post.publishedDate}>
                {formatDate(post.publishedDate)}
              </time>
            )}
            <span>•</span>
            <span>{post.readingTime || 0} min read</span>
          </div>
        </header>

        <div className="mt-10 pt-10 border-t border-border text-foreground-secondary leading-relaxed font-light">
          {markdown && <MDXRemote source={markdown} components={components} />}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </article>
    </Container>
  );
}
