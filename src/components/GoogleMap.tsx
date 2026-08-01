import { MapPin, ExternalLink } from "lucide-react";

interface GoogleMapProps {
  className?: string;
}

export function GoogleMap({ className = "" }: GoogleMapProps) {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333918.06740626354!2d-122.75330379895188!3d49.12463870828751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d415b0efbc97%3A0xe7bc865d49265f4d!2sFraser%20Valley%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca";

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
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full grayscale-[0.1] contrast-[1.05]"
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
          href="https://www.google.com/maps/search/Fraser+Valley,+BC/@49.1500,-122.5600,10z"
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
