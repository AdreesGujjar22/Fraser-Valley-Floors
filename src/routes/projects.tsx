import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio | Fraser Valley Floors" },
      { name: "description", content: "Browse our portfolio of garage epoxy, warehouse coatings, patio coatings, hardwood and vinyl installations across the Fraser Valley." },
      { property: "og:title", content: "Project Portfolio | Fraser Valley Floors" },
      { property: "og:description", content: "Real flooring and concrete coating projects from across the Fraser Valley." },
      { property: "og:url", content: "https://www.fraservalleyfloors.com/projects" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Project Portfolio | Fraser Valley Floors" },
      { name: "twitter:description", content: "Real flooring and concrete coating projects from across the Fraser Valley." },
    ],
    links: [{ rel: "canonical", href: "https://www.fraservalleyfloors.com/projects" }],
  }),
  component: Projects,
});

type Cat = "All" | "Garage" | "Warehouse" | "Patio" | "Flooring" | "Stairs";

const items: { src: string; title: string; city: string; cat: Cat }[] = [
  { src: g2, title: "Full-flake garage coating", city: "Abbotsford", cat: "Garage" },
  { src: g3, title: "Warehouse epoxy with safety striping", city: "Surrey", cat: "Warehouse" },
  { src: g5, title: "Decorative patio overlay", city: "Langley", cat: "Patio" },
  { src: g1, title: "Engineered hardwood install", city: "Chilliwack", cat: "Flooring" },
  { src: g4, title: "Luxury vinyl plank install", city: "Maple Ridge", cat: "Flooring" },
  { src: g6, title: "Custom hardwood stairs", city: "Mission", cat: "Stairs" },
  { src: g2, title: "Polyaspartic garage refresh", city: "Surrey", cat: "Garage" },
  { src: g3, title: "Distribution centre coating", city: "Delta", cat: "Warehouse" },
  { src: g5, title: "Pool deck coating", city: "Abbotsford", cat: "Patio" },
  { src: g1, title: "Whole-home hardwood", city: "Langley", cat: "Flooring" },
];

const cats: Cat[] = ["All", "Garage", "Warehouse", "Patio", "Flooring", "Stairs"];

function Projects() {
  const [cat, setCat] = useState<Cat>("All");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () => (cat === "All" ? items : items.filter((i) => i.cat === cat)),
    [cat],
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Recent Projects Across the Fraser Valley"
        subtitle="A small sample of the work we've delivered for homeowners and businesses throughout the Lower Mainland."
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  c === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground/80 hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p, i) => (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className="group relative overflow-hidden rounded-lg text-left"
              >
                <img src={p.src} alt={p.title} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition">
                  <div className="text-sm font-bold">{p.title}</div>
                  <div className="text-xs text-primary">{p.city}, BC</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/95 p-4 backdrop-blur" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-border bg-background">
            <X className="h-5 w-5" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[open].src} alt={filtered[open].title} className="w-full rounded-xl" />
            <div className="mt-4 text-center">
              <div className="font-display text-xl font-bold">{filtered[open].title}</div>
              <div className="text-sm text-primary">{filtered[open].city}, BC · {filtered[open].cat}</div>
            </div>
          </div>
        </div>
      )}

      <CTABanner />
    </>
  );
}
