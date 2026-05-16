import { ImageResponse } from "next/og";
import { HomeOG } from "./(metadata)/og/page";

export const runtime = "edge";

export const alt = "Rajeev Puri | Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <HomeOG />,
    {
      ...size,
    },
  );
}
