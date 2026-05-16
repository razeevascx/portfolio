import { BlogOG } from "../page";

export default function BlogOGPreview() {
  const variations = [
    {
      title: "Building Scalable Architecture with Next.js",
      tags: ["NEXTJS", "ARCHITECTURE"],
    },
    {
      title: "Optimizing Core Web Vitals for Modern Web Apps",
      tags: ["PERFORMANCE", "WEBVITALS"],
    },
    {
      title: "The Future of Full-Stack Development in 2024",
      tags: ["DEVELOPMENT", "TRENDS"],
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#050505",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
        padding: "100px 0",
      }}
    >
      <h1 style={{ color: "white", fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
        BLOG_OG_STUDIO
      </h1>
      
      {variations.map((v, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
          <span style={{ color: "#2883ff", fontSize: "14px", fontWeight: "bold", fontFamily: "monospace" }}>
            VARIATION_{i + 1}
          </span>
          <div
            style={{
              width: "1200px",
              height: "630px",
              transform: "scale(0.6)",
              transformOrigin: "top",
              border: "1px solid #1a1a1a",
              boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
              overflow: "hidden",
            }}
          >
            <BlogOG title={v.title} tags={v.tags} />
          </div>
        </div>
      ))}
    </div>
  );
}
