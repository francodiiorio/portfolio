import type { MetadataRoute } from "next";
import { profile } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — Portfolio`,
    short_name: "Franco",
    start_url: "/",
    display: "standalone",
    background_color: "#05090a",
    theme_color: "#05090a",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
