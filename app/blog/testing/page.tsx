import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import {
  BlogHeading,
  BlogBody,
  BlogPicture,
  BlogCode,
} from '@/components/sections/blog';

export const metadata = {
  title: 'Component Testing - Blog',
  description:
    'A comprehensive guide testing blog components including headings, body text, images, and code blocks.',
  publishedDate: '2026-05-13',
  readingTime: 8,
  tags: ['Testing', 'Components', 'Blog'],
};

export default function TestingBlogPage() {
  return (
    <div className=" pt-20 pb-12 px-8">
      {/* Header Section */}
      <article className="mb-12">
        <header className="mb-12">
          <BlogHeading level="h1">Component Testing Guide</BlogHeading>
          <p className="text-gray-400 text-sm flex items-center gap-4 mt-4">
            <span>{formatDate(new Date("2026-05-13"))}</span>
            <span>•</span>
            <span>8 min read</span>
          </p>
        </header>

        {/* Introduction */}
        <BlogBody>
          In this guide, we'll explore how to effectively test and utilize
          custom blog components. This blog post demonstrates the BlogHeading,
          BlogBody, BlogPicture, and BlogCode components in action.
        </BlogBody>
<div className=" border-t border-gray-800" />
        {/* First Section */}
        <BlogHeading
          level="h2"
        >
          Getting Started with Blog Components
        </BlogHeading>
        <BlogBody>
          Blog components provide a clean, reusable way to structure your blog
          content. Each component is designed to handle specific types of
          content and comes with built-in styling that matches your design
          system.
        </BlogBody>

        {/* Code Block Example */}
        <BlogHeading level="h3">Importing Components</BlogHeading>
        <BlogBody>
          To use these components in your blog posts, simply import them from
          the sections/blog directory:
        </BlogBody>
        <BlogCode
          language="typescript"
          title="Import Example"
          showLineNumbers={true}
        >
          {`import {
  BlogHeading,
  BlogBody,
  BlogPicture,
  BlogCode,
} from '@/components/sections/blog';`}
        </BlogCode>

        {/* Second Section */}
        <BlogHeading level="h2">Component Features</BlogHeading>

        <BlogHeading level="h3">BlogHeading Component</BlogHeading>
        <BlogBody>
          The BlogHeading component supports three heading levels (h1, h2, h3)
          with responsive sizing. Use it for section titles and subsections to
          maintain visual hierarchy throughout your blog post.
        </BlogBody>

        <BlogHeading level="h3">BlogBody Component</BlogHeading>
        <BlogBody>
          The BlogBody component renders paragraph text with optimal line
          height, color contrast, and responsive font sizing. It's perfect for
          body text and description paragraphs.
        </BlogBody>

        <BlogHeading level="h3">BlogCode Component</BlogHeading>
        <BlogBody>
          The BlogCode component displays code snippets with syntax highlighting
          support, line numbers, and a copy-to-clipboard button. It's essential
          for technical blog posts.
        </BlogBody>

        <BlogCode language="javascript" showLineNumbers={true}>
          {`// Example React component
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
        </BlogCode>

        <BlogHeading level="h3">BlogPicture Component</BlogHeading>
        <BlogBody>
          The BlogPicture component handles images with optional captions. It
          automatically optimizes images using Next.js Image component and
          includes responsive sizing.
        </BlogBody>

        {/* Image with caption */}
        <BlogPicture
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
          alt="Web development workspace"
          caption="A modern web development workspace setup"
          width={800}
          height={400}
        />

        {/* Advanced Usage Section */}
        <BlogHeading level="h2">Advanced Usage</BlogHeading>
        <BlogBody>
          These components are highly flexible and can be combined in various
          ways to create rich, engaging blog content. Here are some best
          practices:
        </BlogBody>

        <BlogHeading level="h3">Best Practices</BlogHeading>
        <BlogBody>
          <strong>1. Use semantic heading hierarchy:</strong> Start with h2
          after your main title, then use h3 for subsections. This helps with
          accessibility and SEO.
        </BlogBody>

        <BlogBody>
          <strong>2. Break content with headings:</strong> Use BlogHeading
          components to divide long sections and improve readability.
        </BlogBody>

        <BlogBody>
          <strong>3. Include captions for images:</strong> Always provide
          captions to add context and improve accessibility for images.
        </BlogBody>

        <BlogCode
          language="typescript"
          title="Complete Example"
          showLineNumbers={true}
        >
          {`export default function BlogPost() {
  return (
    <article>
      <BlogHeading level="h1">Post Title</BlogHeading>

      <BlogHeading level="h2">Section 1</BlogHeading>
      <BlogBody>Introductory paragraph...</BlogBody>

      <BlogCode language="javascript">
        {code}
      </BlogCode>

      <BlogPicture
        src="/image.jpg"
        alt="Description"
        caption="Image caption"
      />
    </article>
  );
}`}
        </BlogCode>

        {/* Conclusion */}
        <BlogHeading level="h2">Conclusion</BlogHeading>
        <BlogBody>
          By using these specialized blog components, you can create consistent,
          maintainable, and visually appealing blog posts. Each component is
          designed with accessibility and performance in mind.
        </BlogBody>

        <BlogBody>
          Start building your next blog post with confidence using these
          powerful components!
        </BlogBody>
      </article>
    </div>
  );
}
