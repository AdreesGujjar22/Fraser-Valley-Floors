import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { ServiceCard } from "@/components/ServiceCard";
import { coatingServices, flooringServices } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Flooring & Concrete Coatings | Fraser Valley Floors" },
      { name: "description", content: "Complete flooring and concrete coating services: epoxy, polyaspartic, garage coatings, hardwood, vinyl plank, laminate, custom stairs, and more." },
      { property: "og:title", content: "Our Services | Fraser Valley Floors" },
      { property: "og:description", content: "Two divisions, one trusted team — concrete coatings and floor installation across the Fraser Valley." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything Underfoot. Done Right."
        subtitle="From garage epoxy to whole-home hardwood, our two specialised divisions cover every flooring need in the Fraser Valley."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="mb-10">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Division 01</div>
            <h2 className="font-display text-3xl font-black md:text-4xl">Concrete Coating Services</h2>
            <p className="mt-3 max-w-2xl text-foreground/80">
              Premium epoxy, polyaspartic, and decorative coating systems for garages, shops, warehouses, patios, and commercial spaces.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coatingServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface/40">
        <div className="container-x">
          <div className="mb-10">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Division 02</div>
            <h2 className="font-display text-3xl font-black md:text-4xl">Flooring Services</h2>
            <p className="mt-3 max-w-2xl text-foreground/80">
              Expert installation of vinyl plank, laminate, hardwood, carpet tile, custom stairs, and the prep work that makes them last.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {flooringServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
