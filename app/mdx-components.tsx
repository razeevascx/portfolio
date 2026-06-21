import type { MDXComponents } from "mdx/types";
import { Children, isValidElement } from "react";
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
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 font-mono font-medium text-foreground/90  text-md/loose tracking-tight text-justify ">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 font-mono font-medium text-foreground/90  text-md/loose tracking-tight text-justify ">
      {children}
    </ol>
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
    <div className="my-8 overflow-x-auto rounded-none border border-zinc-800 bg-zinc-950/60 shadow-sm backdrop-blur-sm">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        {Children.toArray(children).some((child) => {
          if (!isValidElement(child)) {
            return false;
          }

          return (
            child.type === "thead" ||
            child.type === "tbody" ||
            child.type === "tfoot"
          );
        }) ? (
          children
        ) : (
          <tbody>{children}</tbody>
        )}
      </table>
    </div>
  ),
  th: ({ children }: any) => (
    <th className="border-b border-zinc-800 bg-zinc-900/40 px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="border-b border-zinc-800 px-4 py-4 align-top text-zinc-400 font-light leading-6">
      {children}
    </td>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
