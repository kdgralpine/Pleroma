import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

  const pages = [
    "",
    "overview",
    "universe",
    "details",
    "modes",
    "store",
    "community",
    "patch-notes",
    "support",
    "donate",
    "privacy",
    "terms",
    "press-kit",
  ];

  const urls = pages
    .map((p) => {
      const path = p ? `/${p}` : "";
      return `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
