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
import * as motion from "motion/react-client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    if (!posts || posts.length === 0) {
      return [{ slug: "placeholder" }];
    }
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn("Blog posts not available during build:", error);
    return [{ slug: "placeholder" }];
  }
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  const description = post.excerpt || post.content.substring(0, 160);
  const canonical = `https://rajeevpuri.com.np/blog/${post.slug}`;
  
  // Generate dynamic OG image URL
  const ogImageParams = new URLSearchParams({
    title: post.title,
    description: description.substring(0, 100),
    tag: post.tags?.[0] || "Technology",
  });
  const ogImage = `https://rajeevpuri.com.np/api/og?${ogImageParams.toString()}`;

  return {
    title: `${post.title} | Blog | Rajeev Puri`,
    description,
    keywords: post.tags || [],
    authors: [{ name: "Rajeev Puri", url: "https://rajeevpuri.com.np" }],
    creator: "Rajeev Puri",
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Rajeev Puri"],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
      creator: "@razeev_asnx",
    },
  } as any;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function normalizeRawTables(markdown: string): string {
  return markdown.replace(
    /<table([^>]*)>([\s\S]*?)<\/table>/g,
    (fullMatch, tableAttributes, tableContent) => {
      if (/<tbody|<thead|<tfoot/i.test(tableContent)) {
        return fullMatch;
      }

      return `<table${tableAttributes}><tbody>${tableContent}</tbody></table>`;
    },
  );
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const markdown = normalizeRawTables(await getBlogPostMarkdown(post.id));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const components = useMDXComponents();

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://rajeevpuri.com.np/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt || post.content.substring(0, 160),
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    image: post.image || "https://rajeevpuri.com.np/opengraph-image.jpg",
    author: {
      "@type": "Person",
      name: "Rajeev Puri",
      url: "https://rajeevpuri.com.np",
      sameAs: [
        "https://github.com/razeevascx",
        "https://linkedin.com/in/razeevasnx",
        "https://twitter.com/razeev_asnx",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Rajeev Puri",
      logo: {
        "@type": "ImageObject",
        url: "https://rajeevpuri.com.np/favicon.ico",
      },
    },
    mainEntityOfPage: `https://rajeevpuri.com.np/blog/${post.slug}`,
    keywords: post.tags?.join(", ") || "software engineering, next.js, react",
    wordCount: post.content?.length || 0,
    articleSection: "Technology",
    inLanguage: "en-GB",
  };

  return (
    <Container
      className="pt-6 pb-20 px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Breadcrumb className="text-lg mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </motion.div>

      <article>
        <header className="mb-12">
          {post.image && (
            <motion.div
              variants={itemVariants}
              className="relative w-full h-96 mb-8 rounded-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 100vw, 100vw"
                className="object-cover"
                priority
              />
            </motion.div>
          )}
          <motion.h1
            variants={itemVariants}
            className="font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[0.95]"
          >
            {post.title}
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="meta-label text-foreground-muted flex items-center gap-4 mt-6"
          >
            {post.publishedDate && (
              <time dateTime={post.publishedDate}>
                {formatDate(post.publishedDate)}
              </time>
            )}
            <span>•</span>
            <span>{post.readingTime || 0} min read</span>
          </motion.div>
        </header>

        <motion.div
          variants={itemVariants}
          className="blog-content mt-10 pt-10 border-t border-border text-foreground-secondary leading-relaxed font-light"
        >
          {markdown && <MDXRemote source={markdown} components={components} />}
        </motion.div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </article>
    </Container>
  );
}
