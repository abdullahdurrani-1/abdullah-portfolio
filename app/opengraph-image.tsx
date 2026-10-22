import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/assets/profile/abdullah-durrani.jpg"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(circle at 20% 0%, #4a0a1d 0%, #050505 60%)",
          color: "#f2ece6",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, flex: 1 }}>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 4, color: "#e0869f", fontFamily: "monospace" }}>
            DATA SCIENCE · MACHINE LEARNING · AI
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 112, lineHeight: 0.95, letterSpacing: -3 }}>Abdullah</div>
            <div style={{ fontSize: 112, lineHeight: 0.95, letterSpacing: -3, fontStyle: "italic", color: "#e0869f" }}>
              Durrani
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a8a09b" }}>
            {profile.headline} · {profile.location}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires a plain img */}
        <img
          src={`data:image/jpeg;base64,${photo}`}
          alt=""
          width={420}
          height={630}
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
        />
      </div>
    ),
    size,
  );
}
