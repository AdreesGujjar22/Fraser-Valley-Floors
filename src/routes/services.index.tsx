import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { ServiceCard } from "@/components/ServiceCard";
import { coatingServices, flooringServices } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Flooring & Concrete Coatings | Fraser Valley Floors" },
      {
        name: "description",
        content:
          "Complete flooring and concrete coating services: epoxy, polyaspartic, garage coatings, hardwood, vinyl plank, laminate, custom stairs, and more in Langley & Fraser Valley.",
      },
      { property: "og:title", content: "Our Services | Fraser Valley Floors" },
      {
        property: "og:description",
        content:
          "Two divisions, one trusted team — concrete coatings and floor installation across Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
      },
      { property: "og:url", content: "https://www.fraservalleyfloors.com/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Services | Fraser Valley Floors" },
      {
        name: "twitter:description",
        content:
          "Two divisions, one trusted team — concrete coatings and floor installation across the Fraser Valley.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.fraservalleyfloors.com/services" }],
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
              name: "Services",
              item: "https://www.fraservalleyfloors.com/services",
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        eyebrow="Specialized Divisions"
        title="Everything Underfoot. Done Right."
        subtitle="From garage epoxy to whole-home hardwood, our two specialized divisions cover all 17 flooring and coating solutions across the Fraser Valley."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      {/* Division 01 - Concrete Coating Services */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 space-y-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              Division 01
            </div>
            <h2 className="font-display text-3xl font-black tracking-tight md:text-4xl text-foreground">
              Concrete Coating Services
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
              Premium epoxy, polyaspartic, polyurethane, and decorative coating systems for garages,
              shops, warehouses, patios, and food-safe commercial spaces.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coatingServices.map((s, idx) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ServiceCard service={s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Division 02 - Flooring Services */}
      <section className="py-12 md:py-16 bg-surface/40 border-t border-border">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 space-y-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              Division 02
            </div>
            <h2 className="font-display text-3xl font-black tracking-tight md:text-4xl text-foreground">
              Flooring Services
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
              Expert installation of vinyl plank, laminate, solid and engineered hardwood, carpet
              tiles, custom stairs, self-leveling floor prep, and floor demolition.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {flooringServices.map((s, idx) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ServiceCard service={s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need guidance choosing the right floor?"
        subtitle="Contact Fraser Valley Floors today for a free consultation and written estimate anywhere in the Fraser Valley."
      />
    </main>
  );
}
