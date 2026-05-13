import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/notion/blog";

type BlogPostCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="block group">
        <article className="border border-border overflow-hidden rounded-base bg-muted/10 group-hover:border-primary/50 transition-colors duration-normal h-full">
        {post.image && (
          <div className="relative w-full h-80 bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight max-w-3xl">
              {post.title}
            </h2>
          </div>

          <div className="flex items-center gap-4 meta-label text-foreground-muted mb-6">
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

          {post.excerpt && (
            <p className="text-foreground-secondary mb-6 font-light leading-relaxed text-lg">
              {post.excerpt}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="border-t border-border pt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="meta-label bg-muted text-foreground-secondary px-3 py-1 rounded-base border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="border border-border overflow-hidden hover:border-primary/50 transition-colors duration-normal bg-muted/10 hover:bg-muted/20 rounded-base h-full">
        {post.image && (
          <div className="relative w-full h-48 bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-normal tracking-tight">
            {post.title}
          </h2>
          {post.featured && (
            <span className="meta-label bg-primary text-white px-2 py-1 rounded-base whitespace-nowrap ml-4">
              Featured
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 meta-label text-foreground-muted mb-3">
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

        {post.excerpt && <p className="text-foreground-secondary mb-6 font-light leading-relaxed">{post.excerpt}</p>}

        {post.tags.length > 0 && (
          <div className="border-t border-border pt-6 flex flex-wrap gap-2">
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
    </article>
    </Link>
  );
}
