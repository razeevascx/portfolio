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
import {
  Calendar,
  Clock,
} from "lucide-react";
import { BlogShare } from "@/components/sections/blog";


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

export default async function BlogPostPage(props: Readonly<BlogPostPageProps>) {
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
    headline: post.title,
    description: post.excerpt || post.content.substring(0, 160),
    datePublished: post.publishedDate,
    author: { "@type": "Person", name: "Rajeev Puri" },
    mainEntityOfPage: `https://rajeevpuri.com.np/blog/${post.slug}`,
    keywords: post.tags.join(", ") || undefined,
  };

  return (
    <Container
      className="pt-6 pb-20 px-8 border-2 border-dashed border-t-0 border-border  mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <article>
        <motion.div
          variants={itemVariants}
          className="blog-content   border-border text-foreground-secondary leading-relaxed font-light max-w-5xl mx-auto prose prose-invert prose-a:text-blue-400 prose-a:no-underline prose-a:transition-colors prose-a:hover:text-blue-500"
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
              className="font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[0.95] border-b-2 border-border pb-4 mb-6 md:mb-8"
            >
              {post.title}
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className=" flex flex-wrap  mt-8 pb-6 border-b-2 border-border mb-12 "
            >
              <div className="flex items-center gap-6">
                {post.publishedDate && (
                  <div className="flex items-center gap-2 group transition-colors hover:text-foreground">
                    <Calendar className="size-3.5 text-primary/80" />
                    <time dateTime={post.publishedDate}>
                      {formatDate(post.publishedDate)}
                    </time>
                  </div>
                )}
                <div className="flex items-center gap-2 group transition-colors hover:text-foreground">
                  <Clock className="size-3.5 text-primary/80" />
                  <span>{post.readingTime || 0} min read</span>
                </div>
              </div>


              <div className="flex flex-wrap items-center gap-4 ml-auto">

                <BlogShare title={post.title} slug={post.slug} />

              </div>
            </motion.div>
          </header>
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
