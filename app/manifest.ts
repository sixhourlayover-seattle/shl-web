
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Six Hour Layover: Seattle",
    short_name: "Layover SEA",
    description: "Curated 3–8 hour Seattle layover plans from SEA with realistic buffers.",
    start_url: "/",
    display: "standalone",
    background_color: "#99D9D9",
    theme_color: "#001628",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "any" }
    ]
  };
}
