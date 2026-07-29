import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fraser Valley Floors | Local Flooring Experts" },
      { name: "description", content: "Locally owned and operated. Meet the team behind Fraser Valley's most trusted flooring and concrete coating company." },
      { property: "og:title", content: "About Fraser Valley Floors" },
      { property: "og:description", content: "Family-owned, fully insured, and built on craftsmanship. Serving the Fraser Valley for over a decade." },
      { property: "og:url", content: "https://www.fraservalleyfloors.com/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Fraser Valley Floors" },
      { name: "twitter:description", content: "Family-owned, fully insured, and built on craftsmanship. Serving the Fraser Valley for over a decade." },
    ],
    links: [{ rel: "canonical", href: "https://www.fraservalleyfloors.com/about" }],
  }),
  component: About,
});

const stats = [
  { value: "1,200+", label: "Projects Completed" },
  { value: "10+", label: "Years in Business" },
  { value: "7", label: "Cities Served" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

const values = [
  { title: "Craftsmanship First", body: "Every coating, every plank, every transition. We sweat the small stuff because it's what separates a good floor from a great one." },
  { title: "Honest Pricing", body: "Detailed written quotes. No upsells, no surprises, no change-order games. The price you're quoted is the price you pay." },
  { title: "Local Accountability", body: "We live where we work. Our reputation is built one Fraser Valley driveway at a time, and we treat every project like it's our own." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Locally Owned. Built on Craftsmanship."
        subtitle="Fraser Valley Floors has been transforming garages, homes, shops and commercial spaces across BC's Fraser Valley for over a decade."
        image={aboutImg}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Our Story</div>
            <h2 className="font-display text-3xl font-black md:text-4xl">A Decade of Floors. Thousands of Happy Customers.</h2>
            <div className="mt-5 space-y-4 text-foreground/85">
              <p>
                Fraser Valley Floors started in a single garage with a diamond grinder, a few buckets of epoxy, and a stubborn belief that the Valley deserved better. A decade later, we're still that same crew — bigger trucks, more equipment, but the same hands-on approach to every job.
              </p>
              <p>
                We specialise in two things and we do them both extremely well: <Link to="/services">concrete coatings</Link> and <Link to="/services">floor installation</Link>. From a one-day <Link to="/services/$slug" params={{ slug: "polyaspartic-coatings" }}>polyaspartic garage</Link> to a multi-room <Link to="/services/$slug" params={{ slug: "hardwood-flooring" }}>hardwood renovation</Link>, you'll work with the same in-house team from quote to walk-through.
              </p>
              <p>
                We're fully licensed, fully insured, and proudly local. When you call, you'll get one of us — not a call centre.
              </p>
            </div>
          </div>
          <img src={aboutImg} alt="Installer applying epoxy coating" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-x grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-black text-primary md:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Mission & Values</div>
            <h2 className="font-display text-3xl font-black md:text-4xl">What We Stand For</h2>
            <p className="mt-3 text-foreground/80">Three principles guide everything we do.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-7">
                <div className="font-display text-5xl font-black text-primary/30">0{i + 1}</div>
                <h3 className="mt-3 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Let's Talk About Your Project" subtitle="Free quotes, honest advice, and zero pressure." />
    </>
  );
}
