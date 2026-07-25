import { Link } from "@tanstack/react-router";
import heroDefault from "@/assets/hero-epoxy.jpg";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs,
  primaryCta,
  secondaryCta,
  alt = "Fraser Valley flooring and epoxy coating project",
  size = "md",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  crumbs?: Crumb[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  alt?: string;
  size?: "sm" | "md" | "lg";
}) {
  const heights = {
    sm: "min-h-[320px] md:min-h-[380px]",
    md: "min-h-[420px] md:min-h-[520px]",
    lg: "min-h-[560px] md:min-h-[700px]",
  };

  return (
    <section className={`relative isolate flex items-center overflow-hidden ${heights[size]}`}>
      <img
        src={image ?? heroDefault}
        alt={alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div
        className="absolute inset-0 -z-[5] bg-gradient-to-r from-black/75 via-black/55 to-black/25"
        aria-hidden="true"
      />

      <div className="container-x w-full py-16">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1 text-xs text-white"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.to ? (
                  <Link to={c.to} className="hover:text-primary transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/Fraser+Valley,+BC/@49.1500,-122.5600,10z",
                "_blank",
              )
            }
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary hover:border-primary hover:bg-primary/25 transition-colors cursor-pointer"
          >
            {eyebrow}
          </button>
        )}
        <h1
          className={`max-w-4xl font-display font-black leading-[1.05] text-white ${
            size === "lg" ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-5xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base text-white md:text-lg">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-7 text-base"
              >
                <Link to={primaryCta.to}>{primaryCta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-black font-bold h-12 px-7 text-base"
              >
                <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
