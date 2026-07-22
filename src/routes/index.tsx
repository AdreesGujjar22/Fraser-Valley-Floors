import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BadgeCheck, ShieldCheck, Sparkles, Clock, Users, Wrench, DollarSign, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { GoogleMap } from "@/components/GoogleMap";
import { coatingServices, flooringServices } from "@/data/services";
import { locations } from "@/data/locations";
import { Button } from "@/components/ui/button";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fraser Valley Floors | Flooring Contractor in Fraser Valley" },
      { name: "description", content: "Fraser Valley Floors provides residential & commercial flooring, epoxy floor coatings, and concrete resurfacing across Fraser Valley, BC. Call today!" },
      { property: "og:title", content: "Fraser Valley Floors | Flooring Contractor in Fraser Valley" },
      { property: "og:description", content: "Fraser Valley Floors provides residential & commercial flooring, epoxy floor coatings, and concrete resurfacing across Fraser Valley, BC. Call today!" },
      { property: "og:url", content: "https://fraservalleyfloors.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fraser Valley Floors | Flooring Contractor in Fraser Valley" },
      { name: "twitter:description", content: "Fraser Valley Floors provides residential & commercial flooring, epoxy floor coatings, and concrete resurfacing across Fraser Valley, BC. Call today!" },
    ],
    links: [{ rel: "canonical", href: "https://fraservalleyfloors.com" }],
  }),
  component: Home,
});

const trustItems = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "Free Estimates" },
  { icon: Sparkles, label: "100% Satisfaction Guaranteed" },
];

const whyUs = [
  { icon: Sparkles, title: "Quality Materials", body: "Premium epoxies, polyaspartics, and brand-name flooring — never bargain product." },
  { icon: Wrench, title: "Expert Installers", body: "Trained, in-house crews — not subcontractors. Same team, every project." },
  { icon: DollarSign, title: "Competitive Pricing", body: "Honest, itemised quotes. No surprises, no upsells, no hidden fees." },
  { icon: Clock, title: "Fast Turnaround", body: "Most coatings done in a day. Floor installs scheduled around your life." },
];

const gallery = [g1, g2, g3, g4, g5, g6];

function Home() {
  return (
    <>
      <PageHero
        size="lg"
        eyebrow="Fraser Valley, BC"
        title={
          <>
            Fraser Valley's <span className="text-gradient-accent">Flooring Contractor</span><br />
            Epoxy & Concrete Coating Experts
          </>
        }
        subtitle="Residential & commercial flooring installation, epoxy floor coatings, and concrete resurfacing - built to last, finished to impress."
        primaryCta={{ label: "Get a Free Quote", to: "/contact" }}
        secondaryCta={{ label: "View Our Services", to: "/services" }}
      />

      {/* Trust bar */}
      <section className="border-y border-border bg-surface/50">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 text-sm font-semibold leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="section-y">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">What We Do</div>
            <h2 className="font-display text-3xl font-black md:text-5xl">A Complete Range of Flooring Solutions</h2>
            <p className="mt-4 text-foreground/80">
              Two specialised divisions, one trusted team. From a one-day garage epoxy to a whole-home hardwood install — we do it all, and we do it right.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <CategoryBlock
              title="Concrete Coating Services"
              subtitle="Tough, beautiful coatings for garages, shops, patios & commercial floors."
              services={coatingServices}
              categorySlug="coating"
            />
            <CategoryBlock
              title="Flooring Services"
              subtitle="Premium installation of vinyl, laminate, hardwood, stairs & more."
              services={flooringServices}
              categorySlug="flooring"
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-y bg-surface/40">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Why Choose Us</div>
            <h2 className="font-display text-3xl font-black md:text-4xl">Built on Craftsmanship, Trusted by Locals</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Service Areas</div>
            <h2 className="font-display text-3xl font-black md:text-4xl">Proudly Serving the Entire Fraser Valley</h2>
            <p className="mt-4 text-foreground/80">
              From Tsawwassen to Chilliwack and everything in between, our crews work throughout the Lower Mainland and Fraser Valley.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {locations.map((l) => (
                <li key={l.slug}>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(l.address)}/@${l.lat},${l.lng},13z`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-primary" />
                    {l.city}
                    <ArrowRight className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <GoogleMap />
        </div>
      </section>

      {/* Gallery */}
      <section className="section-y bg-surface/40">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-xl">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Project Gallery</div>
              <h2 className="font-display text-3xl font-black md:text-4xl">Recent Work Across the Valley</h2>
            </div>
            <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/projects">View Full Portfolio <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((src, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-lg ${i % 5 === 0 ? "md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
                <img src={src} alt={`Project ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact / Quote */}
      <section id="quote" className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Get a Free Quote</div>
            <h2 className="font-display text-3xl font-black md:text-5xl">Let's Build Something That Lasts</h2>
            <p className="mt-4 text-foreground/80">
              Tell us about your project. We'll respond within one business day with a free, written estimate and a realistic timeline.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2"><Users className="h-5 w-5 text-primary shrink-0" /> Free in-person or virtual consultation</li>
              <li className="flex gap-2"><Wrench className="h-5 w-5 text-primary shrink-0" /> Detailed scope of work and material specs</li>
              <li className="flex gap-2"><DollarSign className="h-5 w-5 text-primary shrink-0" /> Transparent, itemised pricing — no surprises</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function CategoryBlock({ title, subtitle, services, categorySlug }: { title: string; subtitle: string; services: typeof coatingServices; categorySlug: string }) {
  const displayedServices = services.slice(0, 3);
  return (
    <div className="rounded-2xl border border-border bg-surface/30 p-6 md:p-8">
      <h3 className="font-display text-2xl font-black">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {displayedServices.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
      {services.length > 3 && (
        <div className="mt-6">
          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/services">View All {title} <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      )}
    </div>
  );
}
