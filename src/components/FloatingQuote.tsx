import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

export function FloatingQuote() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-2 lg:hidden">
      <a
        href={site.phoneHref}
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background/95 backdrop-blur text-sm font-semibold shadow-card"
      >
        <Phone className="h-4 w-4 text-primary" /> Call Now
      </a>
      <Link
        to="/contact"
        className="flex h-12 flex-1 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-glow"
      >
        Get a Free Quote
      </Link>
    </div>
  );
}
