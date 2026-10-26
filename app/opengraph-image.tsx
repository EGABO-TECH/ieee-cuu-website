import { ImageResponse } from "next/og";

// Edge runtime: the Node.js renderer in Next 14 fails on Windows paths.
export const runtime = "edge";

// Default share card for every route that does not set its own image.
export const alt = "IEEE Student Branch, Cavendish University Uganda";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await fetch(new URL("../public/images/ieee-logo.png", import.meta.url)).then((r) =>
    r.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "linear-gradient(135deg, #061821 0%, #0D6E6E 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 260,
            height: 260,
            borderRadius: 130,
            background: "white",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo as unknown as string} width={180} height={180} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>IEEE Student Branch</div>
          <div style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.2, color: "#dfeff0" }}>
            Cavendish University Uganda
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.75)" }}>
            Engineering ideas into real-world impact.
          </div>
        </div>
      </div>
    ),
    size
  );
}
