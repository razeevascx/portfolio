import { ImageResponse } from "next/og";
import { HomeOG } from "@/components/opengraph/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <HomeOG 
      title="Relearn how to wonder, feel, and Build 10X." 
      subtitle="Software Engineer specializing in Next.js, React, TypeScript, and System Architecture. Building high-performance digital products."
    />,
    {
      ...size,
    }
  );
}
