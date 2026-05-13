import { ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/Container";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <Container className="max-w-6xl">
        <article className="prose prose-invert max-w-none">
          <div className="text-foreground-secondary leading-relaxed font-light">{children}</div>
        </article>
    </Container>
  );
}
