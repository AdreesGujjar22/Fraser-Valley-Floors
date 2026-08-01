import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { Service } from "@/data/services";

const iconFor = (slug: string) => {
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
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="group flex flex-col h-full rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/60 hover:shadow-md"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-2xl text-primary font-bold shadow-xs transition-transform group-hover:scale-105">
            {iconFor(service.slug)}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
            <Sparkles className="h-2.5 w-2.5" />
            {service.category === "coating" ? "Coating" : "Flooring"}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {service.h1 ? service.h1.replace(" in Langley, BC", "") : service.name}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">
          {service.short}
        </p>

        <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary">
          <span>Explore Details</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
