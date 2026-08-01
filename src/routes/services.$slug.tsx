import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
  HelpCircle,
  Layers,
  Calendar,
  PhoneCall,
} from "lucide-react";
import { motion } from "motion/react";
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
import { locations } from "@/data/locations";
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

const serviceUrl = (slug: string) => `${site.url}/services/${slug}`;
const socialImageUrl = `${site.url}/Fraser-Valley-Floors.png`;

const applicationLinks: Record<string, string> = {
  "Residential Garages": "garage-coatings",
  "Detached Garages": "garage-coatings",
  Carports: "garage-coatings",
  "Home Workshops": "shops-coatings",
  "Multi-Car Garages": "garage-coatings",
  Workshops: "shops-coatings",
  Showrooms: "studio-coatings",
  "Commercial Kitchens": "food-safe-coatings",
  "Retail Spaces": "shops-coatings",
  "Distribution Centres": "warehouse-coatings",
  "Manufacturing Facilities": "warehouse-coatings",
  "Storage Areas": "warehouse-coatings",
  "Loading Bays": "warehouse-coatings",
  Warehouses: "warehouse-coatings",
  "Pool Decks": "patio-coatings",
  "Covered Outdoor Areas": "patio-coatings",
  Entryways: "decorative-concrete",
  Walkways: "patio-coatings",
  "Backyard Patios": "patio-coatings",
  Garages: "garage-coatings",
  Driveways: "polyaspartic-coatings",
  Patios: "patio-coatings",
  "Commercial Entryways": "polyurethane-coatings",
  "Food Processing": "food-safe-coatings",
  "Industrial Plants": "polyurethane-coatings",
  "Pharmaceutical Facilities": "polyurethane-coatings",
  "Cold Storage": "food-safe-coatings",
  "Cold Storage Rooms": "food-safe-coatings",
  Restaurants: "food-safe-coatings",
  Bakeries: "food-safe-coatings",
  "Fitness Studios": "studio-coatings",
  "Dance Studios": "studio-coatings",
  "Yoga Studios": "studio-coatings",
  "Creative Workspaces": "studio-coatings",
  "Rehearsal Spaces": "studio-coatings",
  "Auto Repair Shops": "shops-coatings",
  "Mechanic Bays": "shops-coatings",
  "Equipment Rooms": "shops-coatings",
  "Small Manufacturing Units": "shops-coatings",
  Kitchens: "vinyl-flooring",
  Bathrooms: "vinyl-flooring",
  Basements: "carpet-tiles",
  "Rental Properties": "laminate-flooring",
  "Full-Home Installs": "vinyl-flooring",
  "Living Rooms": "hardwood-flooring",
  Bedrooms: "hardwood-flooring",
  Hallways: "laminate-flooring",
  "Main Living Areas": "hardwood-flooring",
  Staircases: "custom-stairs",
  "Whole-Home Installs": "hardwood-flooring",
  Renovations: "custom-stairs",
  Offices: "carpet-tiles",
  "Commercial Spaces": "carpet-tiles",
  "Home Gyms": "studio-coatings",
  "Multi-Purpose Rooms": "carpet-tiles",
  "Interior Staircases": "custom-stairs",
  Landings: "custom-stairs",
  "Stair Renovations": "custom-stairs",
  "New Builds": "hardwood-flooring",
  "Pre-Renovation Prep": "self-leveling-floors",
  "Older Homes": "hardwood-flooring",
  "New Installs": "vinyl-flooring",
  "Commercial Retrofits": "warehouse-coatings",
  "Pre-Renovation Removal": "floor-demo",
  "Old Carpet Removal": "floor-demo",
  "Tile Removal": "floor-demo",
  "Hardwood Removal": "floor-demo",
};

const renderServingCities = () => {
  const cityList = [
    { name: "Abbotsford", slug: "abbotsford" },
    { name: "Surrey", slug: "surrey" },
    { name: "Langley", slug: "langley" },
    { name: "Chilliwack", slug: "chilliwack" },
    { name: "Mission", slug: "mission" },
    { name: "Maple Ridge", slug: "maple-ridge" },
    { name: "Delta", slug: "delta" },
  ];

  return (
    <span className="inline-flex flex-wrap items-center gap-1.5 font-medium">
      Serving:{" "}
      {cityList.map((city, idx) => (
        <span key={city.slug} className="inline-flex items-center">
          <Link
            to="/locations/$city"
            params={{ city: city.slug }}
            className="text-primary hover:underline hover:text-primary/80 transition-colors font-semibold"
          >
            {city.name}
          </Link>
          {idx < cityList.length - 1 ? <span className="text-muted-foreground ml-1">,</span> : null}
        </span>
      ))}
      <span className="text-muted-foreground">and nearby communities.</span>
    </span>
  );
};

const getSeoContent = (service: Service) => {
  const applications = service.applications.slice(0, 3).join(", ");
  const serviceType = service.category === "coating" ? "concrete coating" : "flooring";

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: `${service.name}, ${serviceType} Langley, BC, ${serviceType} Abbotsford, ${serviceType} Langley, ${applications}`,
  };
};

const getServiceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.h1 || service.name,
  description: service.metaDescription,
  url: serviceUrl(service.slug),
  areaServed: ["Abbotsford", "Surrey", "Langley", "Chilliwack", "Mission", "Maple Ridge", "Delta"],
  mainEntityOfPage: serviceUrl(service.slug),
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

const getBreadcrumbSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: service.h1 || service.name,
      item: `${site.url}/services/${service.slug}`,
    },
  ],
});

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): Service => {
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
        { property: "og:site_name", content: site.name },
        { property: "og:image", content: socialImageUrl },
        { property: "og:image:alt", content: `${site.name} logo` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
        { name: "twitter:image", content: socialImageUrl },
        { name: "twitter:image:alt", content: `${site.name} logo` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(getServiceSchema(loaderData)) },
        { type: "application/ld+json", children: JSON.stringify(getFaqSchema(loaderData)) },
        { type: "application/ld+json", children: JSON.stringify(getBreadcrumbSchema(loaderData)) },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-x section-y text-center">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <p className="mt-3 text-muted-foreground">The service you're looking for doesn't exist.</p>
      <Link to="/services" className="mt-6 inline-block text-primary hover:underline font-semibold">
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
  const gallery = galleryByCategory[service.category] || [g1, g2, g3, g4];
  const heroImg = heroImages[service.slug] ?? fallbackHeroImages[service.category];

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Hero / Header Section adhering strictly to template order: Breadcrumb → Badge → H1 → Subheading → CTA */}
      <section className="relative pt-8 pb-14 md:pt-12 md:pb-20 border-b border-border bg-gradient-to-b from-surface/80 via-background to-background">
        <div className="container-x">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">{service.h1 || service.name}</span>
          </motion.nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-5">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xs"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>{service.badge}</span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15]"
              >
                {service.h1 || service.name}
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed font-normal"
              >
                {service.short}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground hover:bg-accent transition-colors shadow-xs"
                >
                  <PhoneCall className="h-4 w-4 text-primary" />
                  <span>{site.phone}</span>
                </a>
              </motion.div>
            </div>

            {/* Hero Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl group">
                <img
                  src={heroImg}
                  alt={`${service.h1} - Fraser Valley Floors`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-white">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      Licensed & Insured
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-primary" />
                      Fraser Valley, BC
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            {/* About (short) & Service-Area Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="space-y-3">
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                  <Layers className="h-6 w-6 text-primary" />
                  About {service.name}
                </h2>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  {service.about}
                </p>
              </div>

              {/* Service-Area line */}
              <div className="pt-4 border-t border-border/60 flex items-start gap-3 text-sm text-foreground/85">
                <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div className="leading-relaxed">{renderServingCities()}</div>
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  Key Benefits
                </h2>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Why Choose Us
                </span>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                {service.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-4 shadow-xs transition-shadow hover:shadow-md"
                  >
                    <div className="rounded-lg bg-primary/10 p-2 text-primary shrink-0">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/90 self-center">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Common Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <Sparkles className="h-6 w-6 text-primary" />
                Common Applications
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {service.applications.map((app, i) => {
                  const targetSlug = applicationLinks[app];
                  return (
                    <motion.div
                      key={app}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      {targetSlug && targetSlug !== service.slug ? (
                        <Link
                          to="/services/$slug"
                          params={{ slug: targetSlug }}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/15 hover:border-primary/50 hover:shadow-xs active:scale-95"
                        >
                          <span>{app}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/80 shadow-2xs">
                          {app}
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Gallery Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <Calendar className="h-6 w-6 text-primary" />
                Recent Projects
              </h2>

              <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
                {gallery.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden rounded-xl border border-border shadow-xs"
                  >
                    <img
                      src={src}
                      alt={`${service.h1} project example ${i + 1}`}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQs (brief) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <HelpCircle className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </h2>

              <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-xs">
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                      <AccordionTrigger className="text-left font-semibold text-base py-4 hover:no-underline hover:text-primary transition-colors">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Contact Form */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-md"
            >
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                Get a Free Quote
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Tell us about your space in Fraser Valley — we'll provide a clear written estimate
                within one business day.
              </p>
              <div className="mt-5">
                <ContactForm defaultService={service.slug} />
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-14 bg-surface/40 border-t border-border">
          <div className="container-x">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Explore More
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                  Related Services
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <CTABanner
        title={`Ready to transform your space with ${service.name}?`}
        subtitle="Contact Fraser Valley Floors today for an honest estimate and guaranteed workmanship."
      />
    </main>
  );
}
