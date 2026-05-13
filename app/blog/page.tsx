import { getBlogPosts } from "@/lib/notion/blog";
import { Suspense } from "react";
import { DotmSquare11 } from "@/components/ui/dotm-square-11";
import { BlogPostCard } from "@/components/sections/blog";

export const metadata = {
  title: "Blog",
  description: "Thoughts on web development, Next.js, and building great products.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const latestPosts = posts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div className="pt-20 px-8 pb-20">
      <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[0.95] text-foreground mb-6">
        Blog
      </h1>
      <p className="text-foreground-secondary text-lg mb-16 font-light max-w-2xl leading-relaxed">
        Thoughts on web development, Next.js, React, and building great digital
        experiences.
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-border rounded-base">
          <p className="text-foreground-muted text-lg tracking-widest font-bold">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="size-60 mx-auto">
              <DotmSquare11 size={100} />
            </div>
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            {/* Featured Post - Left Column */}
            {featuredPost && (
              <div className="lg:col-span-2">
                <BlogPostCard key={featuredPost.id} post={featuredPost} featured />
              </div>
            )}

            {/* Latest Posts - Right Column */}
            <div className="lg:col-span-1 ">

                {latestPosts.slice(0, 2).map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
            </div>

          </div>
        </Suspense>
      )}
    </div>
  );
}
