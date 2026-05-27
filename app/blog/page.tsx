import { getBlogPosts } from "@/lib/notion/blog";
import { Suspense } from "react";
import { DotmSquare11 } from "@/components/ui/dotm-square-11";
import { BlogPostCard } from "@/components/sections/blog";
import Items from "@/components/ui/Items";
import Container from "@/components/Container";
import * as motion from "motion/react-client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rajeev Puri",
  description:
    "Technical insights and articles on Next.js, React, TypeScript, and software engineering. Sharing knowledge on building scalable web applications and modern digital experiences.",
  alternates: {
    canonical: "https://rajeevpuri.com.np/blog",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Container
      id="blog"
      className="w-full p-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Items
          Number="05"
          title="Blog"
          des="Thoughts on web development, Next.js, React, and building great digital
          experiences."
        />
      </motion.div>

      {posts.length === 0 ? (
        <motion.div
          variants={itemVariants}
          className="text-center py-20 border border-dashed border-border rounded-base"
        >
          <p className="text-foreground-muted text-lg tracking-widest font-bold">
            No blog posts yet. Check back soon!
          </p>
        </motion.div>
      ) : (
        <Suspense
          fallback={
            <div className="size-60 mx-auto">
              <DotmSquare11 size={100} />
            </div>
          }
        >
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {posts.map((post, index) => (
              <motion.div key={post.id} variants={itemVariants}>
                <BlogPostCard post={post} priority={index === 0} />
              </motion.div>
            ))}
          </motion.div>
        </Suspense>
      )}
    </Container>
  );
}
