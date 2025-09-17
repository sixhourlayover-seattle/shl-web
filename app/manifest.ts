
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
      { src: "/logo_from_url.jpg", sizes: "192x192", type: "image/jpeg" },
      { src: "/logo_from_url.jpg", sizes: "512x512", type: "image/jpeg" },
      { src: "/logo_from_url.jpg", sizes: "180x180", type: "image/jpeg", purpose: "any" }
    ]
  };
}
