import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { GoogleMap } from "@/components/GoogleMap";
import { locations } from "@/data/locations";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Service Areas | Fraser Valley Floors" },
      {
        name: "description",
        content:
          "Flooring and concrete coating services in Abbotsford, Surrey, Delta, Langley, Chilliwack, Maple Ridge and Mission.",
      },
      { property: "og:title", content: "Service Areas | Fraser Valley Floors" },
      {
        property: "og:description",
        content: "Serving the entire Fraser Valley with premium flooring and coatings.",
      },
      { property: "og:url", content: "https://www.fraservalleyfloors.com/locations" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Service Areas | Fraser Valley Floors" },
      {
        name: "twitter:description",
        content: "Serving the entire Fraser Valley with premium flooring and coatings.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.fraservalleyfloors.com/locations" }],
    scripts: [
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
              name: "Locations",
              item: "https://www.fraservalleyfloors.com/locations",
            },
          ],
        }),
      },
    ],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Proudly Serving the Fraser Valley"
        subtitle="Local crews, local knowledge, local accountability. Click your city to see the services we offer in your area."
        crumbs={[{ label: "Home", to: "/" }, { label: "Locations" }]}
      />
      <section className="section-y">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <a
              key={l.slug}
              href={`/locations/${l.slug}`}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                  {l.city}, BC
                </h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{l.blurb}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary">
                View {l.city} services{" "}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface/30 border-t border-border">
        <div className="container-x">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-2xl font-black md:text-3xl text-foreground">
              Interactive Service Area Map
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore our full coverage zone spanning Abbotsford, Surrey, Delta, Langley,
              Chilliwack, Maple Ridge, Mission, and surrounding areas.
            </p>
          </div>
          <GoogleMap />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
