import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { CTABanner } from "@/components/CTABanner";
import { GoogleMap } from "@/components/GoogleMap";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Fraser Valley Floors" },
      {
        name: "description",
        content:
          "Get a free flooring or concrete coating quote. Serving Abbotsford, Surrey, Langley, Chilliwack, Delta, Maple Ridge and Mission.",
      },
      { property: "og:title", content: "Contact Fraser Valley Floors" },
      {
        property: "og:description",
        content: "Free quotes. Honest pricing. Fast response across the Fraser Valley.",
      },
      { property: "og:url", content: "https://www.fraservalleyfloors.com/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Fraser Valley Floors" },
      {
        name: "twitter:description",
        content: "Free quotes. Honest pricing. Fast response across the Fraser Valley.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.fraservalleyfloors.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Fraser Valley Floors",
          description:
            "Get a free quote for epoxy coatings or flooring installation in Fraser Valley, BC.",
          url: "https://www.fraservalleyfloors.com/contact",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.fraservalleyfloors.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: "https://www.fraservalleyfloors.com/contact",
            },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About Your Project"
        subtitle="Free quotes, fast responses, and honest advice from Fraser Valley's flooring and coating experts."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <InfoCard
              icon={Phone}
              title="Call us"
              body={
                <a className="hover:text-primary" href={site.phoneHref}>
                  {site.phone}
                </a>
              }
              sub="Mon–Sat business hours"
            />
            <InfoCard
              icon={Mail}
              title="Email"
              body={
                <a className="hover:text-primary break-all" href={site.emailHref}>
                  {site.email}
                </a>
              }
              sub="We reply within one business day"
            />
            <InfoCard
              icon={MapPin}
              title="Service area"
              body={site.address}
              sub="Serving the entire Fraser Valley"
            />
            <InfoCard
              icon={Clock}
              title="Business hours"
              body={
                <ul className="space-y-1 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-3">
                      <span>{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              }
            />
            <GoogleMap />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <h2 className="font-display text-2xl font-black">Request a Free Quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us a little about your project and we'll get back to you fast.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface/40">
        <div className="container-x">
          <h2 className="font-display text-2xl font-black md:text-3xl">Cities We Serve</h2>
          <p className="mt-2 text-muted-foreground">Click any city to see local services.</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {locations.map((l) => (
              <li key={l.slug}>
                <a
                  href={`/locations/${l.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {l.city}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 font-semibold">{body}</div>
        {sub && <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}
