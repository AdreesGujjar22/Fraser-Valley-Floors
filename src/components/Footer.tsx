import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { coatingServices, flooringServices } from "@/data/services";
import { locations } from "@/data/locations";
import { Logo } from "@/components/Logo";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.14V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.74a8.16 8.16 0 0 0 4.77 1.52V6.81a4.85 4.85 0 0 1-1.84-.12z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Logo size="md" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Fraser Valley's trusted source for premium flooring and concrete coatings. Licensed, insured, and guaranteed.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={site.social.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={site.social.tiktok} aria-label="TikTok" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Concrete Coatings</h3>
            <ul className="space-y-2 text-sm">
              {coatingServices.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="text-muted-foreground hover:text-primary transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-6 text-xs font-bold uppercase tracking-widest text-primary">Flooring</h3>
            <ul className="space-y-2 text-sm">
              {flooringServices.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="text-muted-foreground hover:text-primary transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {locations.map((l) => (
                <li key={l.slug}>
                  <a href={`/locations/${l.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {l.city}, BC
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span itemProp="telephone">{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors break-all">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span itemProp="email">{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Fraser Valley</span>, <span itemProp="addressRegion">British Columbia</span>, <span itemProp="addressCountry">Canada</span>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Hours</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span>{h.day}</span><span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Fraser Valley Floors. All rights reserved.</div>
          <div>Proudly serving the Fraser Valley, British Columbia.</div>
        </div>
      </div>
    </footer>
  );
}
