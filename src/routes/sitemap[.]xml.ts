import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { locations } from "@/data/locations";
import { services } from "@/data/services";

const BASE_URL = "https://www.fraservalleyfloors.com";
const LAST_MODIFIED = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly" as const, priority: "1.0" },
          { path: "/about", changefreq: "monthly" as const, priority: "0.7" },
          { path: "/services", changefreq: "monthly" as const, priority: "0.9" },
          { path: "/projects", changefreq: "monthly" as const, priority: "0.7" },
          { path: "/blog", changefreq: "weekly" as const, priority: "0.6" },
          { path: "/locations", changefreq: "monthly" as const, priority: "0.8" },
          { path: "/contact", changefreq: "monthly" as const, priority: "0.7" },
          ...services.map((s) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...locations.map((l) => ({
            path: `/locations/${l.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ].map((entry) => ({ ...entry, lastmod: LAST_MODIFIED }));

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
