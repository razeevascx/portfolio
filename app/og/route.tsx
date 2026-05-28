import { ImageResponse } from "next/og";
import {
  HomeOG,
  ServicesOG,
  ProjectsOG,
  AboutOG,
  ContactOG,
  BlogOG,
} from "@/components/opengraph/og";

// Protocol Version: 1.0.1
// Force reload trigger



export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const route = searchParams.get("route") || "home";
  const title = searchParams.get("title");
  const subtitle = searchParams.get("subtitle");
  const description = searchParams.get("description");
  const excerpt = searchParams.get("excerpt");
  const date = searchParams.get("date");
  const readTime = searchParams.get("readTime");
  const tags = searchParams.get("tags")?.split(",") || [];
  const email = searchParams.get("email");
  const capabilities = searchParams.get("capabilities")?.split(",") || [];
  const selectedWork = searchParams.get("selectedWork");
  const credentials = searchParams.get("credentials");

  let ogComponent;

  switch (route) {
    case "services":
      ogComponent = (
        <ServicesOG
          title={title || undefined}
          capabilities={
            capabilities.length > 0
              ? capabilities
              : ["Next.js/React", "Rust System Core", "Cloud Performance Architecture"]
          }
        />
      );
      break;
    case "projects":
      ogComponent = (
        <ProjectsOG
          title={title || undefined}
          selectedWork={selectedWork || undefined}
        />
      );
      break;
    case "about":
      ogComponent = (
        <AboutOG
          title={title || undefined}
          credentials={credentials || undefined}
        />
      );
      break;
    case "contact":
      ogComponent = (
        <ContactOG
          title={title || undefined}
          email={email || "contact@rajeevpuri.com.np"}
        />
      );
      break;
    case "blog":
      ogComponent = (
        <BlogOG
          title={title || undefined}
          excerpt={excerpt || description || undefined}
          date={date || undefined}
          readTime={readTime || undefined}
          tags={tags}
        />
      );
      break;
    default:
      ogComponent = (
        <HomeOG
          title={title || undefined}
          subtitle={subtitle || description || undefined}
        />
      );
  }

  return new ImageResponse(ogComponent, {
    width: 1200,
    height: 630,
  });
}
