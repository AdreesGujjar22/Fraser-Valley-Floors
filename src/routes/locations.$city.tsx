import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { getLocation, type Location } from "@/data/locations";
import { coatingServices, flooringServices } from "@/data/services";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }): import("@/data/locations").Location => {
    const loc = getLocation(params.city);
    if (!loc) throw notFound();
    return loc;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const title = `Flooring & Epoxy Coatings in ${loaderData.city}, BC | Fraser Valley Floors`;
    const desc = `Local flooring and concrete coating services in ${loaderData.city}, BC. Epoxy garage coatings, hardwood, vinyl plank and more. Free quotes.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/locations/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/locations/${loaderData.slug}` }],
    };
  },
  component: LocationDetail,
  notFoundComponent: () => (
    <div className="container-x section-y text-center">
      <h1 className="font-display text-3xl font-bold">Location not found</h1>
      <Link to="/locations" className="mt-4 inline-block text-primary hover:underline">All service areas</Link>
    </div>
  ),
});

function LocationDetail() {
  const loc = Route.useLoaderData() as Location;
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={`Flooring & Concrete Coatings in ${loc.city}, BC`}
        subtitle={loc.blurb}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Locations", to: "/locations" },
          { label: loc.city },
        ]}
        primaryCta={{ label: "Get a Free Quote", to: "/contact" }}
      />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Epoxy & Coatings</div>
            <h2 className="font-display text-2xl font-black md:text-3xl">Epoxy Coatings in {loc.city}</h2>
            <p className="mt-4 text-foreground/85">
              From single-car residential garages to large commercial shops, our coating crews work throughout {loc.city} delivering one-day polyaspartic systems, full-flake epoxy floors, and decorative patio overlays. Every coating is installed over diamond-ground, properly prepared concrete — the only way to get a finish that actually lasts.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {coatingServices.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Check className="h-4 w-4 text-primary" /> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Floor Installation</div>
            <h2 className="font-display text-2xl font-black md:text-3xl">Floor Installation in {loc.city}</h2>
            <p className="mt-4 text-foreground/85">
              Beautiful hardwood, durable vinyl plank, AC-rated laminate, custom stairs, and commercial carpet tile — installed by in-house crews who treat your {loc.city} home or business with the care it deserves. We handle the subfloor prep, the install, the transitions and the final cleanup.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {flooringServices.map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Check className="h-4 w-4 text-primary" /> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface/40">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-black md:text-4xl">Why {loc.city} Trusts Fraser Valley Floors</h2>
            <p className="mt-4 text-foreground/80">
              We've completed hundreds of projects in {loc.city} alone — and we'd love to add yours. Get a free, written estimate today.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> Licensed, insured, and fully bonded</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> In-house crews — not subcontractors</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> Premium materials with manufacturer warranties</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> Free in-person consultations across {loc.city}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <h3 className="font-display text-xl font-black">Request a {loc.city} Quote</h3>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
