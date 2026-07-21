import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

const iconFor = (slug: string) => {
  // simple emoji-style icon mapping — keeps it bundle-free
  const map: Record<string, string> = {
    "epoxy-coatings": "✦",
    "garage-coatings": "▣",
    "warehouse-coatings": "◫",
    "patio-coatings": "❖",
    "polyaspartic-coatings": "◆",
    "polyurethane-coatings": "◈",
    "decorative-concrete": "◉",
    "food-safe-coatings": "✚",
    "studio-coatings": "◇",
    "shops-coatings": "▤",
    "vinyl-flooring": "▦",
    "laminate-flooring": "▧",
    "hardwood-flooring": "▩",
    "carpet-tiles": "▨",
    "custom-stairs": "≣",
    "self-leveling-floors": "▬",
    "floor-demo": "✕",
  };
  return map[slug] ?? "■";
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
    >
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-2xl text-primary">
        {iconFor(service.slug)}
      </div>
      <h3 className="font-display text-lg font-bold leading-tight group-hover:text-primary transition-colors">
        {service.name}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{service.short}</p>
      <div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary">
        Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  );
}
