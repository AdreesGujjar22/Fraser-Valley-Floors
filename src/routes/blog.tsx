import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Flooring & Concrete Coating Tips | Fraser Valley Floors" },
      {
        name: "description",
        content:
          "Practical guides on epoxy garage coatings, vinyl plank, hardwood care and more — from Fraser Valley's flooring experts.",
      },
      { property: "og:title", content: "Blog | Fraser Valley Floors" },
      {
        property: "og:description",
        content: "Helpful flooring and concrete coating articles from local pros.",
      },
      { property: "og:url", content: "https://www.fraservalleyfloors.com/blog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog | Fraser Valley Floors" },
      {
        name: "twitter:description",
        content: "Helpful flooring and concrete coating articles from local pros.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.fraservalleyfloors.com/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Fraser Valley Floors Blog",
          description:
            "Flooring and concrete coating tips, guides, and care advice from Fraser Valley experts.",
          url: "https://www.fraservalleyfloors.com/blog",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.fraservalleyfloors.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://www.fraservalleyfloors.com/blog",
            },
          ],
        }),
      },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    title: "Epoxy vs. Polyaspartic: Which Coating Is Right for Your Garage?",
    excerpt: "A side-by-side breakdown of the two leading garage floor coating technologies.",
    img: g2,
    cat: "Concrete Coatings",
    date: "May 2026",
  },
  {
    title: "Why Subfloor Prep Matters More Than the Flooring Itself",
    excerpt: "The single biggest reason flooring installs fail — and how we prevent it.",
    img: g1,
    cat: "Flooring",
    date: "Apr 2026",
  },
  {
    title: "How to Maintain a Coated Garage Floor in the Fraser Valley",
    excerpt: "Simple seasonal care to keep your coating looking new for years.",
    img: g3,
    cat: "Maintenance",
    date: "Mar 2026",
  },
  {
    title: "Patio Coatings: Are They Worth It for BC Weather?",
    excerpt: "What to expect from outdoor concrete coatings in our wet West Coast climate.",
    img: g5,
    cat: "Outdoor",
    date: "Feb 2026",
  },
  {
    title: "Custom Stair Treads: Matching New Hardwood to Existing Floors",
    excerpt: "Our process for getting perfect stain and grain matches.",
    img: g6,
    cat: "Flooring",
    date: "Jan 2026",
  },
];

const categories = ["All", "Concrete Coatings", "Flooring", "Maintenance", "Outdoor"];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Tips, Guides & Project Insights"
        subtitle="Practical flooring and coating advice from the team that installs it every day."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_240px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} - Fraser Valley Floors guide`}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={375}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 font-semibold text-primary">
                      {p.cat}
                    </span>
                    <span>{p.date}</span>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <Link
                    to="/contact"
                    className="mt-4 text-xs font-bold uppercase tracking-widest text-primary"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
                Categories
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {categories.map((c) => (
                  <li key={c}>
                    <button className="w-full text-left rounded px-2 py-1.5 hover:bg-surface-elevated hover:text-primary transition-colors">
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
