import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BadgeCheck, ShieldCheck, Sparkles, Clock, Users, Wrench, DollarSign, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { GoogleMap } from "@/components/GoogleMap";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
      { property: "og:title", content: "Flooring & Epoxy Coatings | Fraser Valley Floors" },
      { property: "og:description", content: "Fraser Valley flooring contractor for epoxy coatings, hardwood, garage floors, warehouse coatings, and residential flooring. Get a free quote." },
      { property: "og:url", content: "https://fraservalleyfloors.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Flooring & Epoxy Coatings | Fraser Valley Floors" },
      { name: "twitter:description", content: "Fraser Valley flooring contractor for epoxy coatings, hardwood, garage floors, warehouse coatings, and residential flooring. Get a free quote." },
    ],
    links: [{ rel: "canonical", href: "https://fraservalleyfloors.com" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    }) }],
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

const homeFaqs = [
  {
    question: "What flooring and coating services do you provide?",
    answer: "We install hardwood, vinyl plank, laminate, carpet tile, and custom stairs. We also apply epoxy, polyaspartic, polyurethane, decorative concrete, and other concrete coating systems.",
  },
  {
    question: "Do you serve my Fraser Valley community?",
    answer: "Yes. Our service area includes Abbotsford, Surrey, Delta, Langley, Chilliwack, Maple Ridge, Mission, and nearby communities across British Columbia's Fraser Valley.",
  },
  {
    question: "How do I get a flooring or coating estimate?",
    answer: "Submit the quote form with your project details. We will arrange a consultation, review the space and preparation needs, and provide a written estimate for the recommended work.",
  },
  {
    question: "How long does a garage coating project take?",
    answer: "Many residential garage coating projects can be completed in about one day after the concrete is properly prepared. The exact schedule depends on the floor condition, system selected, and site conditions.",
  },
  {
    question: "Are your installers licensed and insured?",
    answer: "Our projects are completed by trained in-house crews, and Fraser Valley Floors is licensed and insured. We explain the scope, materials, and expected timeline before work begins.",
  },
];

function Home() {
  return (
    <>
      <PageHero
        size="lg"
        alt="Polished epoxy garage floor in a Fraser Valley vehicle workshop"
        eyebrow="Fraser Valley, BC"
        title={
          <>
            Fraser Valley's <span className="text-gradient-accent">Flooring Contractor</span><br />
            Epoxy Coatings & Concrete Experts
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
            <h2 className="font-display text-3xl font-black md:text-5xl">Hardwood, Vinyl, and Complete Flooring Solutions</h2>
            <p className="mt-4 text-foreground/80">
              Two specialised divisions, one trusted team. From a one-day garage epoxy to a whole-home hardwood install — we do it all, and we do it right.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <CategoryBlock
              title="Epoxy & Concrete Coating Services"
              subtitle="Tough, beautiful coatings for garage floors, warehouses, shops, patios & commercial spaces."
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
                    href={`/locations/${l.slug}`}
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

      <section className="section-y bg-surface/40">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">The Fraser Valley Floors Difference</div>
            <h2 className="font-display text-3xl font-black md:text-4xl">A Better Floor Starts With Better Preparation</h2>
            <p className="mt-4 text-foreground/80">
              Every successful flooring or coating project begins with an honest look at the space. We check the concrete or subfloor, identify moisture and level concerns, review traffic patterns, and recommend materials that fit the way you use the room. That means a garage floor is not treated like a living room, and a busy warehouse is not treated like a residential hallway.
            </p>
            <p className="mt-4 text-foreground/80">
              Our crews protect nearby walls and finishes, complete the necessary preparation, and keep the work area organized from the first visit through final cleanup. We explain the scope before work starts, including product choices, expected timing, maintenance, and any conditions that could affect the finished result.
            </p>
          </div>
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">How We Work</div>
            <h3 className="font-display text-2xl font-black md:text-3xl">Clear Advice. Careful Installation. Lasting Results.</h3>
            <ul className="mt-5 space-y-4 text-sm text-foreground/80">
              <li><strong className="text-foreground">1. Plan the project.</strong> We learn about your goals, room conditions, schedule, and budget before suggesting a system.</li>
              <li><strong className="text-foreground">2. Prepare the surface.</strong> Grinding, repairs, leveling, and clean edges give the new floor the foundation it needs.</li>
              <li><strong className="text-foreground">3. Install with care.</strong> In-house crews follow the product requirements and pay attention to transitions, details, and finish quality.</li>
              <li><strong className="text-foreground">4. Leave it ready.</strong> We review care instructions, remove installation debris, and make sure you know what comes next.</li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Questions & Answers</div>
            <h2 className="font-display text-3xl font-black md:text-4xl">Answers Before You Start</h2>
            <p className="mt-4 text-foreground/80">
              Learn what to expect from a Fraser Valley flooring or concrete coating project.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {homeFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/80">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact / Quote */}
      <section id="quote" className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Get a Free Quote</div>
            <h2 className="font-display text-3xl font-black md:text-5xl">Get a Free Quote for Your Flooring Project</h2>
            <p className="mt-4 text-foreground/80">
              Tell us about your project. We'll respond within one business day with a free, written estimate and a realistic timeline.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Last updated: {new Date().getFullYear()}
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
