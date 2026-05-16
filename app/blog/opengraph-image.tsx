import { ImageResponse } from "next/og";
import { BlogOG } from "../(metadata)/og/page";

export const runtime = "edge";

export const alt = "Rajeev Puri | Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <BlogOG title="Engineering Blog" tags={["NEXTJS", "REACT", "TYPESCRIPT"]} />,
    {
      ...size,
    },
  );
}
