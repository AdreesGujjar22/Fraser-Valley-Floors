import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner({
  title = "Ready to Transform Your Floor?",
  subtitle = "Get a Free Quote Today — no obligation, no pressure. Just honest pricing from Fraser Valley locals.",
  ctaLabel = "Get a Free Quote",
  ctaTo = "/contact",
}: {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-surface to-background p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-3xl font-black md:text-4xl">{title}</h2>
              <p className="mt-3 max-w-xl text-foreground/80">{subtitle}</p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-7 text-base shadow-glow w-full md:w-auto"
            >
              <Link to={ctaTo}>
                {ctaLabel} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
