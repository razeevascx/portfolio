import type { MDXComponents } from "mdx/types";
import {
  BlogHeading,
  BlogBody,
  BlogPicture,
  BlogCode,
} from "@/components/sections/blog";
import { ReactNode } from "react";
import Link from "next/link";

interface MDXHeadingProps {
  children: ReactNode;
  id?: string;
}

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export const components = {
  // Headings
  h1: ({ children }: any) => <BlogHeading level="h1">{children}</BlogHeading>,
  h2: ({ children }: any) => <BlogHeading level="h2">{children}</BlogHeading>,
  h3: ({ children }: any) => <BlogHeading level="h3">{children}</BlogHeading>,

  // Paragraphs
  p: ({ children }: any) => <BlogBody>{children}</BlogBody>,
  ul: ({ children }: any) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  ),
  code: ({ children }: any) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
     {children}
    </code>
  ),

  // Images
  img: (props: any) => (
    <BlogPicture
      src={props.src}
      alt={props.alt || "Blog image"}
      caption={props.title}
      width={800}
      height={400}
    />
  ),

  // Code blocks - handle MDX code structure
  pre: (props: any) => {
    // Get the code element from children
    const children = props.children;

    let code = "";
    let language = "plaintext";

    // MDX structure: children can be a React element or the code element itself
    if (children?.props) {
      // It's a React element (code tag)
      code = children.props.children || "";
      language =
        (children.props.className || "").replace("language-", "") ||
        "plaintext";
    } else if (typeof children === "string") {
      // Direct string
      code = children;
    } else if (Array.isArray(children)) {
      // Array of children
      code = children
        .map((child) => {
          if (typeof child === "string") return child;
          if (child?.props?.children) return child.props.children;
          return "";
        })
        .join("");

      // Extract language from className if present
      const codeElement = children.find((c) => c?.props?.className);
      if (codeElement?.props?.className) {
        language =
          codeElement.props.className.replace("language-", "") || "plaintext";
      }
    }

    return (
      <BlogCode language={language} showLineNumbers={true}>
        {String(code).trim()}
      </BlogCode>
    );
  },

  // Links
  a: ({ children, href }: any) => (
    <Link
      href={href}
      className="text-primary hover:text-primary-hover underline decoration-primary/30 underline-offset-4 transition-colors font-medium"
    >
      {children}
    </Link>
  ),

  // Tables
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-8 border border-border rounded-base">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }: any) => (
    <th className="border border-border bg-muted/30 px-4 py-3 text-left text-foreground tracking-widest text-[10px] font-bold">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="border border-border px-4 py-3 text-foreground-secondary font-light">
      {children}
    </td>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
