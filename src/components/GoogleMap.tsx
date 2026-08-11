import { MapPin, ExternalLink } from "lucide-react";

interface GoogleMapProps {
  className?: string;
}

export function GoogleMap({ className = "" }: GoogleMapProps) {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.52230042315!2d-122.6594688!3d49.133707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d1004e45de45%3A0x7289ba25303a49af!2sFRASER%20VALLEY%20FLOORS!5e0!3m2!1sen!2s!4v1786470255198!5m2!1sen!2s";
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border border-border bg-card shadow-lg flex flex-col ${className}`}
    >
      {/* Interactive Google Map iframe */}
      <div className="relative aspect-[4/3] min-h-[320px] w-full bg-surface">
        <iframe
          title="Fraser Valley Service Area Google Map"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.1] contrast-[1.05]"
        />
      </div>

      {/* Service area information banner */}
      <div className="p-4 sm:p-5 bg-card border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary mt-0.5">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-foreground leading-snug">
              Serving the Fraser Valley
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Abbotsford, Surrey, Delta, Langley, Chilliwack, Maple Ridge, Mission, and nearby
              communities.
            </p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=20267+72+Ave%2C+Langley%2C+BC+V2Y+1S8%2C+Canada"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-surface border border-border px-3.5 py-2 text-xs font-bold text-foreground hover:border-primary hover:text-primary transition-all shadow-xs"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
