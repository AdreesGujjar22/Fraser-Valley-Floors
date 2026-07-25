import { ArrowUpRight, MapPin } from "lucide-react";

export function GoogleMap() {
  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="relative z-10 max-w-xs px-6 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
          <MapPin className="h-7 w-7" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-black">Serving the Fraser Valley</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Abbotsford, Surrey, Delta, Langley, Chilliwack, Maple Ridge, Mission, and nearby communities.
        </p>
        <a
          href="https://www.google.com/maps/search/Fraser+Valley,+BC/@49.1500,-122.5600,10z"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Open service area map
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
