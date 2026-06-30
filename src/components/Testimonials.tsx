import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mike R.",
    city: "Abbotsford, BC",
    text: "These guys transformed our garage in a single day. The polyaspartic finish looks like glass and the prep work was incredibly thorough. Worth every penny.",
  },
  {
    name: "Jennifer L.",
    city: "Surrey, BC",
    text: "Hardwood install across our main floor was flawless. Crew showed up on time, finished early, and the transitions are perfect. We've already referred them to two neighbours.",
  },
  {
    name: "David T.",
    city: "Langley, BC",
    text: "We had our warehouse coated with a heavy-duty epoxy system. Zero downtime issues and the safety striping is exactly what we needed. Highly recommend.",
  },
  {
    name: "Priya S.",
    city: "Chilliwack, BC",
    text: "Beautiful luxury vinyl install in our basement. Honest pricing, no surprises, and the finished look is gorgeous. Great communication throughout.",
  },
  {
    name: "Tom W.",
    city: "Maple Ridge, BC",
    text: "The patio coating is holding up beautifully through our wet West Coast winters. Slip-resistant texture is perfect around the pool.",
  },
  {
    name: "Karen B.",
    city: "Mission, BC",
    text: "From quote to clean-up, everything was professional. They treated our home with respect and the new hardwood looks incredible.",
  },
];

export function Testimonials() {
  return (
    <section className="section-y bg-surface/40">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">5-Star Reviews</div>
          <h2 className="font-display text-3xl font-black md:text-4xl">What Fraser Valley Customers Say</h2>
          <p className="mt-3 text-foreground/80">
            Real reviews from real homeowners and business owners across the Fraser Valley.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-0.5">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.city}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
