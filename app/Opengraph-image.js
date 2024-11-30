import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Keeratipong - Web Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom right, #f0f4ff, #fff1f2)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}>
        <div style={{ fontSize: "48px", marginBottom: "24px" }}>
          👋 Hi, I&apos;m
        </div>
        <div style={{ fontWeight: "bold" }}>Keeratipong</div>
        <div style={{ fontSize: "32px", marginTop: "24px" }}>
          Web Developer in Bangkok
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
