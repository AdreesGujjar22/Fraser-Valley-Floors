import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getService, services, type Service } from "@/data/services";
import { site } from "@/data/site";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const heroImages: Record<string, string> = {
  "epoxy-coatings": g2,
  "garage-coatings": g5,
  "warehouse-coatings": g3,
  "patio-coatings": g4,
  "polyaspartic-coatings": g6,
  "polyurethane-coatings": g2,
  "decorative-concrete": g4,
  "food-safe-coatings": g5,
  "studio-coatings": g1,
  "shops-coatings": g3,
  "vinyl-flooring": g1,
  "laminate-flooring": g6,
  "hardwood-flooring": g4,
  "carpet-tiles": g5,
  "custom-stairs": g2,
  "self-leveling-floors": g3,
  "floor-demo": g6,
};

const fallbackHeroImages: Record<Service["category"], string> = {
  coating: g2,
  flooring: g1,
};

const galleryByCategory: Record<string, string[]> = {
  coating: [g2, g3, g5, g4],
  flooring: [g1, g4, g6, g3],
};

const serviceUrl = (slug: string) => `https://fraservalleyfloors.com/services/${slug}`;

const getSeoContent = (service: Service) => {
  const applications = service.applications.slice(0, 3).join(", ");
  const serviceType = service.category === "coating" ? "concrete coating" : "flooring";

  return {
    title: `${service.name} in Fraser Valley, BC | ${site.name}`,
    description: `${service.short} Professional ${serviceType} installation for ${applications} across Abbotsford, Surrey, Langley, Chilliwack, and the Fraser Valley.`,
    keywords: `${service.name}, ${serviceType} Fraser Valley, ${serviceType} Abbotsford, ${serviceType} Langley, ${applications}`,
    localHeading: `${service.name} Installation Across the Fraser Valley`,
    localCopy: `${site.name} provides professional ${service.name.toLowerCase()} for ${applications} throughout Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta. Every project starts with an on-site assessment and a clear written estimate.`,
  };
};

const getServiceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: getSeoContent(service).description,
  url: serviceUrl(service.slug),
  areaServed: ["Abbotsford", "Surrey", "Langley", "Chilliwack", "Mission", "Maple Ridge", "Delta"],
  provider: {
    "@type": "LocalBusiness",
    name: site.name,
    telephone: site.phone,
    email: site.email,
  },
});

const getFaqSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: service.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): import("@/data/services").Service => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const seo = getSeoContent(loaderData);
    const url = serviceUrl(loaderData.slug);

    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(getServiceSchema(loaderData)) },
        { type: "application/ld+json", children: JSON.stringify(getFaqSchema(loaderData)) },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-x section-y text-center">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <p className="mt-3 text-muted-foreground">The service you're looking for doesn't exist.</p>
      <Link to="/services" className="mt-6 inline-block text-primary hover:underline">
        View all services
      </Link>
    </div>
  ),
});

function ServiceDetail() {
  const service = Route.useLoaderData() as Service;
  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);
  const gallery = galleryByCategory[service.category];
  const seo = getSeoContent(service);

  return (
    <>
      <PageHero
        eyebrow={service.category === "coating" ? "Concrete Coating Service" : "Flooring Service"}
        title={service.name}
        subtitle={service.short}
        image={heroImages[service.slug] ?? fallbackHeroImages[service.category]}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
        primaryCta={{ label: "Get a Free Quote", to: "/contact" }}
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <article>
            <h2 className="font-display text-2xl font-black md:text-3xl">About {service.name}</h2>
            <div className="mt-5 space-y-4 text-foreground/85 leading-relaxed">
              {service.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <section className="mt-10 rounded-lg border border-border bg-surface/40 p-5">
              <h3 className="font-display text-xl font-bold">{seo.localHeading}</h3>
              <p className="mt-3 text-foreground/85 leading-relaxed">{seo.localCopy}</p>
            </section>

            <h3 className="mt-12 font-display text-xl font-bold">Key Benefits</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-xl font-bold">Common Applications</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.applications.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {a}
                </span>
              ))}
            </div>

            <h3 className="mt-12 font-display text-xl font-bold">Project Gallery</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${service.name} example ${i + 1}`}
                  loading="lazy"
                  className="aspect-square w-full rounded-lg object-cover"
                />
              ))}
            </div>

            <h3 className="mt-12 font-display text-xl font-bold">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="mt-4">
              {service.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-black">Get a Free Quote</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your project — we'll respond within one business day.
              </p>
              <div className="mt-5">
                <ContactForm defaultService={service.slug} />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-surface/40">
          <div className="container-x">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="font-display text-2xl font-black md:text-3xl">Related Services</h2>
              <Link
                to="/services"
                className="flex items-center gap-1 text-sm font-semibold text-primary"
              >
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Ready to get started?"
        subtitle="Contact us today for a free, written estimate on your project."
      />
    </>
  );
}
