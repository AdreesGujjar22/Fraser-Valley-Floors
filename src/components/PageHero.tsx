import { Link } from "@tanstack/react-router";
import heroDefault from "@/assets/hero-epoxy.jpg";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

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
    sm: "min-h-[340px] md:min-h-[400px]",
    md: "min-h-[440px] md:min-h-[540px]",
    lg: "min-h-[580px] md:min-h-[720px]",
  };

  return (
    <section className={`relative isolate flex items-center overflow-hidden ${heights[size]}`}>
      <motion.img
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src={image ?? heroDefault}
        alt={alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div
        className="absolute inset-0 -z-[5] bg-gradient-to-r from-black/90 via-black/70 to-black/40 backdrop-blur-[1px]"
        aria-hidden="true"
      />
      {/* Decorative ambient subtle glow */}
      <div className="absolute -top-24 -left-24 -z-[4] h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="container-x w-full py-16 md:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1 text-xs text-white/90"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.to ? (
                  <Link to={c.to} className="hover:text-primary transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/85">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/Fraser+Valley,+BC/@49.1500,-122.5600,10z",
                  "_blank",
                )
              }
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm backdrop-blur-md hover:border-primary hover:bg-primary/30 transition-all cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {eyebrow}
            </button>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-4xl font-display font-black leading-[1.08] text-white tracking-tight ${
            size === "lg"
              ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              : "text-2xl sm:text-3xl md:text-5xl"
          }`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-normal drop-shadow-sm"
          >
            {subtitle}
          </motion.p>
        )}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {primaryCta && (
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-13 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-[1.02]"
              >
                <Link to={primaryCta.to}>
                  {primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black font-bold h-13 px-8 text-base transition-all hover:scale-[1.02]"
              >
                <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
