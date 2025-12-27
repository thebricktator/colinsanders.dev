import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Colin Sanders";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#151518",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "#a855f7" }}>Colin</span>
          <span style={{ color: "#fafafa", marginLeft: 20 }}>Sanders</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#9ca3af",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Senior engineer at Amazon building high-scale infrastructure and AI
          tooling. Shipping products on the side.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
