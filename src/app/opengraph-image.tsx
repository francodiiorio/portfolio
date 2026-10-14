import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "radial-gradient(circle at 80% 20%, #1c3a3c 0%, #05090a 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#76abae", letterSpacing: 6 }}>
          PORTFOLIO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>{profile.name}</div>
          <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 12 }}>
            {`${profile.role} · React · TypeScript · .NET`}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#71717a" }}>{profile.location}</div>
      </div>
    ),
    size,
  );
}
