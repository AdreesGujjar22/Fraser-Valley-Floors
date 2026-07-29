import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { coatingServices, flooringServices } from "@/data/services";
import { locations } from "@/data/locations";
import { Logo } from "@/components/Logo";

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

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Contact</h3>
            <address className="not-italic">
              <p className="mb-3 font-semibold text-foreground">{site.name}</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href={site.phoneHref} className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{site.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={site.emailHref} className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors break-all">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{site.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    Fraser Valley, British Columbia, Canada
                  </div>
                </li>
              </ul>
            </address>
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
