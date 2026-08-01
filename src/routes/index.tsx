import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  DollarSign,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Globe,
  Star,
  Layers,
  Check,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { GoogleMap } from "@/components/GoogleMap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { locations } from "@/data/locations";
import { Button } from "@/components/ui/button";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Flooring Contractor in Langley, BC — Garage Coatings, Hardwood & Vinyl Flooring Experts | Fraser Valley Floors",
      },
      {
        name: "description",
        content:
          "Fraser Valley Floors is a full-service flooring contractor in Langley, BC. We install hardwood, vinyl, and laminate floors, and apply industrial-grade epoxy coatings across Fraser Valley.",
      },
      {
        property: "og:title",
        content:
          "Flooring Contractor in Langley, BC — Garage Coatings, Hardwood & Vinyl Flooring Experts | Fraser Valley Floors",
      },
      {
        property: "og:description",
        content:
          "Fraser Valley Floors brings over 10 years of experience as a flooring contractor in Langley, BC. Hardwood, vinyl, laminate, and epoxy garage coatings done right the first time.",
      },
      { property: "og:url", content: "https://www.fraservalleyfloors.com" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Flooring Contractor in Langley, BC — Fraser Valley Floors",
      },
      {
        name: "twitter:description",
        content:
          "Full-service flooring contractor in Langley, BC. Hardwood, vinyl, laminate & industrial-grade epoxy coatings.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.fraservalleyfloors.com" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const trustItems = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: ShieldCheck, label: "Licensed & Fully Insured" },
  { icon: BadgeCheck, label: "Free, No-Pressure Estimates" },
  { icon: Sparkles, label: "100% Satisfaction Guarantee" },
];

const whyUsPoints = [
  {
    title: "10+ Years of Local Experience",
    description:
      "We've installed and coated floors across the Fraser Valley long enough to know exactly what this region's climate and homes need.",
  },
  {
    title: "Licensed & Fully Insured",
    description:
      "Every job is backed by proper licensing and insurance, so you're protected from start to finish.",
  },
  {
    title: "Free, No-Pressure Estimates",
    description:
      "Get a detailed quote before you commit to anything. No surprise charges once the crew arrives.",
  },
  {
    title: "Premium Materials Only",
    description:
      "We use industrial-grade epoxy systems and reputable flooring brands, never the bargain-bin stuff that fails in a year.",
  },
  {
    title: "In-House Expert Installers",
    description:
      "Our team is trained, experienced, and on our payroll — not a rotating cast of subcontractors.",
  },
  {
    title: "Competitive, Honest Pricing",
    description:
      "Fair quotes with no upsells, no last-minute add-ons, and no confusing fine print.",
  },
  {
    title: "Fast, Reliable Turnaround",
    description:
      "Most epoxy floor coating installations finish in a day, and we schedule around your life, not the other way around.",
  },
  {
    title: "100% Satisfaction Guarantee",
    description: "We're not finished until you're happy with the results.",
  },
];

const servicesList = [
  {
    title: "Epoxy Coatings",
    description:
      "Our epoxy coating systems give garages, shops, and commercial spaces a glossy, durable surface that shrugs off oil stains, hot tires, and daily wear. As a specialist epoxy flooring installer in Langley, we prep every surface properly so the coating bonds for the long haul — not just the first winter.",
    link: "/services/garage-coatings",
  },
  {
    title: "Garage Floor Coatings",
    description:
      "Turn a dusty, cracked garage floor into a clean, showroom-ready surface. Our polyaspartic and epoxy garage systems resist chipping, peeling, and hot-tire pickup, built for real daily use, not just looks.",
    link: "/services/garage-coatings",
  },
  {
    title: "Warehouse & Commercial Coatings",
    description:
      "Heavy-duty concrete resurfacing designed for warehouses, distribution centres, and industrial floors that take a beating every day. We coat for traffic, chemical exposure, and long-term durability, minimizing downtime for your operation.",
    link: "/services/commercial-coatings",
  },
  {
    title: "Vinyl Flooring Installation",
    description:
      "Waterproof, low-maintenance, and built to handle every room in the house — kitchens, bathrooms, and basements included. Our vinyl flooring installation service in Langley combines style with practical, worry-free performance.",
    link: "/services/vinyl-flooring",
  },
  {
    title: "Laminate Flooring Installation",
    description:
      "Get the warm look of hardwood without the price tag. Our laminate installs are affordable, durable, and finished with the clean, tight seams that separate a professional job from a DIY one.",
    link: "/services/laminate-flooring",
  },
  {
    title: "Hardwood Flooring Installation",
    description:
      "Timeless, solid, and built to last for decades with proper care. From selecting the right species to precision installation, our hardwood flooring services add lasting value to any Fraser Valley home.",
    link: "/services/hardwood-flooring",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Plan the Project",
    description:
      "We walk through your goals, room conditions, and budget, then recommend the right flooring or coating system for your space.",
  },
  {
    step: "2",
    title: "Prepare the Surface",
    description:
      "Grinding, repairs, levelling, and thorough cleaning happen before any product goes down — this step is what makes a floor last.",
  },
  {
    step: "3",
    title: "Install With Care",
    description:
      "Our crew follows manufacturer specs closely, paying close attention to transitions, seams, and finish quality.",
  },
  {
    step: "4",
    title: "Quality Check",
    description:
      "We walk the finished space with you, confirming every detail meets our standard and yours.",
  },
  {
    step: "5",
    title: "Leave It Ready",
    description:
      "We review care instructions, remove installation debris, and make sure you know exactly how to maintain your new floor.",
  },
];

const companyBenefits = [
  "A single, experienced flooring contractor in Langley, BC for both coatings and installation — no juggling separate companies.",
  "Floors that are properly prepped, not just installed over a shortcut subfloor.",
  "Transparent, itemized pricing with zero surprise fees.",
  "Materials chosen for Fraser Valley's climate and moisture conditions.",
  "A crew that respects your time, your property, and your schedule.",
  "Ongoing support if questions come up after the job is done.",
];

const homeFaqs = [
  {
    question: "What flooring and coating services do you provide?",
    answer:
      "We install hardwood, vinyl, and laminate flooring, and we apply epoxy and polyaspartic coatings for garages, warehouses, and commercial concrete floors throughout the Fraser Valley.",
  },
  {
    question: "Do you serve my Fraser Valley community?",
    answer:
      "Yes. We proudly serve Langley, Abbotsford, Surrey, Delta, Chilliwack, Maple Ridge, Mission, and the surrounding areas.",
  },
  {
    question: "How do I get a flooring or coating estimate?",
    answer:
      "Call us, email us, or fill out our online quote form. We'll review your project details and provide a free, written estimate with realistic timelines.",
  },
  {
    question: "How long does a garage coating project take?",
    answer:
      "Most residential garage epoxy or polyaspartic coatings are completed in a single day, depending on size and surface condition.",
  },
  {
    question: "Are your installers licensed and insured?",
    answer:
      "Yes, Fraser Valley Floors is fully licensed and insured, and every installer on our team is trained and experienced.",
  },
  {
    question: "What's the difference between epoxy and polyaspartic garage coatings?",
    answer:
      "Epoxy offers excellent durability at a lower cost, while polyaspartic cures faster and resists UV yellowing better — we'll help you choose based on your goals and budget.",
  },
  {
    question: "Do I need to move my belongings before you start?",
    answer:
      "For most residential installs, yes — clearing the space helps us work efficiently and protects your items. We'll walk you through exactly what to prep before your appointment.",
  },
  {
    question: "How long will my new floor last?",
    answer:
      "With proper installation and reasonable care, hardwood can last decades, while quality vinyl and laminate typically perform well for 15–25 years.",
  },
  {
    question: "Can you match flooring to an existing style in my home?",
    answer:
      "Yes, we help homeowners select species, colours, and finishes that blend seamlessly with existing floors or design themes.",
  },
  {
    question: "Do you offer free in-person consultations?",
    answer:
      "Yes, we provide free in-person or virtual consultations to assess your space and give you an accurate, no-obligation quote.",
  },
];

const gallery = [g1, g2, g3, g4, g5, g6];

function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <PageHero
        size="lg"
        alt="Flooring Contractor in Langley BC garage coatings hardwood vinyl flooring experts"
        eyebrow="Fraser Valley, BC"
        title={
          <>
            Flooring Contractor in Langley<span className="text-gradient-accent">BC — Garage Coatings, </span>Hardwood & Vinyl Flooring Experts
          </>
        }
        subtitle="Residential & commercial flooring installation, epoxy floor coatings, and concrete resurfacing - built to last, finished to impress."
        primaryCta={{ label: "Get a Free Quote", to: "/contact" }}
        secondaryCta={{ label: "View Our Services", to: "/services" }}
      />

      {/* Trust bar */}
      <section className="border-y border-border/80 bg-surface/60 backdrop-blur-md">
        <div className="container-x grid grid-cols-2 gap-4 py-8 md:grid-cols-4 md:gap-6">
          {trustItems.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-card/60 border border-border/50 shadow-xs hover:border-primary/40 transition-all"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary shadow-inner">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 text-xs sm:text-sm font-bold leading-snug text-foreground">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. About Us */}
      <section className="section-y relative bg-background overflow-hidden">
        {/* Subtle decorative background gradient accent */}
        <div className="absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                About Us
              </div>
              <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
                A Flooring Company Built on Craftsmanship, Not Shortcuts
              </h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
                <p>
                  Fraser Valley Floors has proudly served homeowners and businesses for over 10
                  years with reliable flooring solutions. We specialize in epoxy and concrete
                  coatings as well as complete flooring installation, delivering durable,
                  high-quality results for every project. As a licensed and insured flooring
                  contractor in Langley, BC, we provide honest service, fair pricing, expert
                  craftsmanship, and a commitment to customer satisfaction from start to finish.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl group">
                  <img
                    src={aboutImg}
                    alt="Fraser Valley Floors team installing epoxy and hardwood flooring in Langley"
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground font-black text-xl font-display">
                        10+
                      </div>
                      <div>
                        <div className="font-display font-bold text-foreground text-base">
                          Years of Hands-On Craftsmanship
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Serving Langley, Abbotsford & Fraser Valley
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -top-6 -right-4 hidden sm:flex items-center gap-2 rounded-xl bg-card border border-primary/30 px-4 py-3 shadow-xl backdrop-blur-md"
                >
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-foreground">100% Guaranteed</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="section-y bg-surface/40 border-y border-border/60">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Why Choose Us
            </div>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Why Fraser Valley Homeowners and Businesses Choose Us
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-primary/50 transition-all group"
              >
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Services */}
      <section className="section-y bg-background">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Our Services
            </div>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Flooring & Coating Services Across Langley and the Fraser Valley
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 flex flex-col justify-between shadow-md hover:shadow-2xl hover:border-primary transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    <Layers className="h-3.5 w-3.5" />
                    {index < 3 ? "Coating Division" : "Flooring Division"}
                  </div>
                  <h3 className="font-display text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border/60">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-semibold h-11 transition-all"
                  >
                    <Link to={service.link}>
                      Learn More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="section-y bg-surface/40 border-y border-border/60 relative">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Our Process
            </div>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
              How We Work — Clear Advice, Careful Installation, Lasting Results
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5 relative">
            {processSteps.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-card p-6 relative flex flex-col justify-between shadow-xs hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-primary-foreground font-black text-xl font-display mb-4 shadow-md shadow-primary/20">
                    {s.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Benefits of Choosing Our Company */}
      <section className="section-y bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Benefits of Choosing Our Company
            </div>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
              What You Get When You Work With Fraser Valley Floors
            </h2>
            <ul className="mt-8 space-y-4">
              {companyBenefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3.5 text-base sm:text-lg text-foreground/90 font-medium"
                >
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-surface/60 p-8 shadow-xl">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <MapPin className="h-3.5 w-3.5" />
                Regional Coverage
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                Service Area Coverage
              </h3>
              <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                We proudly bring both division capabilities — specialized epoxy/polyaspartic
                coatings and full-service hardwood, vinyl, and laminate installation — across the
                entire Fraser Valley.
              </p>
              <div className="grid grid-cols-2 gap-2.5 text-sm font-bold">
                {locations.map((l) => (
                  <motion.a
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-surface/80 border border-border/80 hover:border-primary hover:text-primary hover:bg-card transition-all"
                  >
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span className="truncate">{l.city}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section-y bg-surface/30 border-y border-border/60">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Local Service Areas
            </div>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Proudly Serving the Entire Fraser Valley
            </h2>
            <p className="mt-4 text-foreground/80 text-base sm:text-lg leading-relaxed">
              From Tsawwassen to Chilliwack and everywhere in between, our dedicated crews work
              throughout the Lower Mainland and Fraser Valley region.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground font-bold h-12 px-7 shadow-md transition-all hover:scale-[1.02]"
              >
                <Link to="/locations">
                  View All Locations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
            <GoogleMap />
          </div>
        </div>
      </section>

      {/* Recent Work Gallery */}
      <section className="section-y bg-background">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                Project Gallery
              </div>
              <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
                Recent Work Across the Valley
              </h2>
            </motion.div>
            <Button
              asChild
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-semibold h-11"
            >
              <Link to="/projects">
                View Full Portfolio <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-border/60 ${
                  i % 5 === 0 ? "md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`Fraser Valley Floors coating and flooring installation project sample ${
                    i + 1
                  }`}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    Fraser Valley Floors Finish
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* 7. Frequently Asked Questions */}
      <section className="section-y bg-surface/40 border-y border-border/60">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Frequently Asked Questions
            </div>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-foreground/80 text-base sm:text-lg leading-relaxed">
              Got questions about your upcoming flooring or coating project? Here are answers to
              common questions from homeowners and commercial clients across Langley and the Fraser
              Valley.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {homeFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border border-border rounded-xl bg-card px-4 shadow-xs"
                >
                  <AccordionTrigger className="text-left font-semibold text-base py-4 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed text-sm pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 8. Customer Call-to-Action Section */}
      <section id="quote" className="section-y bg-background relative overflow-hidden">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Customer Call-to-Action
            </div>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Get a Free Quote for Your Flooring Project
            </h2>
            <p className="mt-4 text-foreground/80 text-lg leading-relaxed">
              Tell us about your project and we'll respond with a written estimate and a realistic
              timeline — no pressure, no obligation.
            </p>
            <ul className="mt-6 space-y-3.5 text-base font-medium">
              <li className="flex items-center gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Users className="h-4 w-4" />
                </div>
                <span>Free in-person or virtual consultation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Wrench className="h-4 w-4" />
                </div>
                <span>Detailed scope of work and materials</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <DollarSign className="h-4 w-4" />
                </div>
                <span>Transparent, itemized pricing — no surprises</span>
              </li>
            </ul>

            <div className="mt-8 p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-md shadow-lg space-y-4">
              <div className="flex items-center gap-3 text-base font-bold text-foreground">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-4 w-4" />
                </div>
                <span>Phone: </span>
                <a href="tel:7789625420" className="hover:text-primary transition-colors">
                  (778) 962-5420
                </a>
              </div>
              <div className="flex items-center gap-3 text-base font-bold text-foreground">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </div>
                <span>Email: </span>
                <a
                  href="mailto:info@fraservalleyfloors.com"
                  className="hover:text-primary transition-colors"
                >
                  info@fraservalleyfloors.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-base font-bold text-foreground">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Globe className="h-4 w-4" />
                </div>
                <span>Website: </span>
                <a
                  href="https://www.fraservalleyfloors.com"
                  className="hover:text-primary transition-colors"
                >
                  https://www.fraservalleyfloors.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-2xl relative"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* 9. Final Closing Paragraph */}
      <section className="section-y bg-surface/50 border-t border-border relative overflow-hidden">
        <div className="container-x text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Ready to Transform Your Floor?
            </h2>
            <p className="mt-6 text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              From a single-day garage epoxy coating to a full hardwood install, Fraser Valley
              Floors delivers the craftsmanship Fraser Valley homes and businesses deserve. As a
              dedicated flooring contractor in Langley, BC, we back every project with over 10 years
              of experience, honest pricing, and a satisfaction guarantee you can count on. Reach
              out today and let's get your floor started.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-13 px-9 text-lg shadow-xl shadow-primary/25 transition-all hover:scale-[1.03]"
              >
                <Link to="/contact">Get a Free Quote Today</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
