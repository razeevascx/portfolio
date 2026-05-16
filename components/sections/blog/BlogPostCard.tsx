import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/notion/blog";

type BlogPostCardProps = {
  post: BlogPost;
  featured?: boolean;
  priority?: boolean;
};

export function BlogPostCard({ post, featured = false, priority = false }: BlogPostCardProps) {

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group h-full border group transition-colors duration-normal   hover:bg-white/2 p-6 border-border hover:border-primary/50"
    >
      <article className=" space-y-8 p-4 md:12 flex-1">
        {post.image && (
          <div className="relative w-full h-48 bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
              priority={priority}
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <div
            className={`flex items-center gap-2 mb-6 border-b pb-4 border-zinc-900`}
          >
            <div className="flex gap-1.5 ">
              <div className="w-2 h-2 bg-primary"></div>
              <div className="w-2 h-2 bg-zinc-500"></div>
              <div className="w-2 h-2 bg-zinc-700"></div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex font-mono text-sm mr-auto items-center gap-4 text-foreground-muted mb-3 opacity-40 max-w-4xl">
              {post.publishedDate && (
                <time dateTime={post.publishedDate}>
                  {formatDate(post.publishedDate)}
                </time>
              )}
              {post.readingTime > 0 && (
                <>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                </>
              )}
            </div>
            <h3 className="text-3xl group-hover:text-primary font-bold text-foreground transition-colors duration-normal tracking-tight">
              {post.title}
            </h3>

            <p className="text-sm md:text-base text-foreground-secondary leading-relaxed group-hover:text-foreground transition-colors duration-normal mt-4 max-w-3xl font-light">
              {post.excerpt}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-2 ">
            {post.tags.length > 0 && (
              <div className=" pt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="meta-label bg-muted text-foreground-secondary px-2 py-1 rounded-base border border-border group-hover:border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            </div>
          </div>
      </article>
    </Link>
  );
}
