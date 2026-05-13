import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const pathname = request.nextUrl.pathname;

  // Check if request is from curl
  if (userAgent.toLowerCase().includes("curl")) {
    // Map routes to their llms.txt endpoints
    const routeMap: Record<string, string> = {
      "/": "/llms.txt",
      "/about": "/about/llms.txt",
      "/contact": "/contact/llms.txt",
      "/projects": "/projects/llms.txt",
      "/services": "/services/llms.txt",
      "/service": "/services/llms.txt",
      "/blog": "/blog/llms.txt",
    };

    if (pathname in routeMap) {
      return NextResponse.rewrite(new URL(routeMap[pathname], request.url));
    }
        // Handle /blog/[slug]
    if (pathname.startsWith("/blog/")) {
      return NextResponse.rewrite(
        new URL(`${pathname}/llms.txt`, request.url)
      );
  }
}

  // For all other requests, pass through normally
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
