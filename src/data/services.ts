import { serviceContent } from "@/data/service-content";

export type Service = {
  slug: string;
  name: string;
  h1: string;
  badge: string;
  category: "coating" | "flooring";
  short: string;
  about: string;
  serving: string;
  metaTitle: string;
  metaDescription: string;
  description: string[];
  localHeading?: string;
  localCopy?: string;
  benefits: string[];
  applications: string[];
  faqs: { q: string; a: string }[];
};

const baseServices: Omit<Service, "h1" | "badge" | "about" | "serving">[] = [
  // Concrete Coating
  {
    slug: "epoxy-coatings",
    name: "Epoxy Coatings",
    category: "coating",
    short: "Durable, glossy epoxy systems for garages, shops & commercial floors.",
    metaTitle: "Epoxy Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our epoxy coatings in Langley, BC turn tired concrete into a hard-wearing, chemical-resistant surface. Serving Langley, BC.",
    description: [
      "Our epoxy coatings in Langley, BC turn tired concrete into a hard-wearing, chemical-resistant surface — from solid colours to full metallic and flake finishes, mixed and applied on-site.",
    ],
    benefits: [
      "Chemical, oil and stain resistant",
      "High-gloss, easy-to-clean finish",
      "Slip-resistant texture options",
      "Bonded to prepared concrete",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Residential Garages",
      "Workshops",
      "Showrooms",
      "Commercial Kitchens",
      "Retail Spaces",
    ],
    faqs: [
      { q: "How long does it take?", a: "Most jobs finish in a single day." },
      {
        q: "How do I get a quote?",
        a: "Fill our form or call — free written estimate within one business day.",
      },
      { q: "Warranty included?", a: "Yes, manufacturer + workmanship warranty." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "garage-coatings",
    name: "Garage Floor Coatings",
    category: "coating",
    short: "Premium polyaspartic and epoxy systems built for daily abuse.",
    metaTitle: "Garage Floor Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Garage floor coatings in Langley, BC turn dusty concrete into a durable, showroom-ready floor built to resist hot tires, oil, and daily wear.",
    description: [
      "Our garage floor coatings in Langley, BC turn dusty concrete into a durable, showroom-ready floor built to resist hot tires, oil, and daily wear.",
    ],
    benefits: [
      "Chip and peel-resistant",
      "Same-day installation",
      "Hot-tire and oil-stain resistant",
      "Wide range of finishes",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Residential Garages",
      "Detached Garages",
      "Carports",
      "Home Workshops",
      "Multi-Car Garages",
    ],
    faqs: [
      { q: "How long does it take?", a: "Usually a single day." },
      { q: "How do I get a quote?", a: "Call or fill our online form for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes, including Langley and nearby communities.",
      },
    ],
  },
  {
    slug: "warehouse-coatings",
    name: "Warehouse Floor Coatings",
    category: "coating",
    short: "Heavy-duty industrial flooring for warehouses & distribution centres.",
    metaTitle: "Warehouse Floor Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our warehouse floor coatings in Langley, BC are built for forklift traffic, heavy loads, and chemical exposure, with slip-resistant finish options.",
    description: [
      "Our warehouse floor coatings in Langley, BC are built for forklift traffic, heavy loads, and chemical exposure, with slip-resistant finish options for added safety.",
    ],
    benefits: [
      "Handles heavy traffic",
      "Chemical and abrasion resistant",
      "Slip-resistant options",
      "Minimal downtime scheduling",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Warehouses",
      "Distribution Centres",
      "Manufacturing Facilities",
      "Loading Bays",
      "Storage Areas",
    ],
    faqs: [
      { q: "How long does it take?", a: "Scheduled in phases to minimize downtime." },
      { q: "How do I get a quote?", a: "Contact us with your facility size for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "patio-coatings",
    name: "Patio Coatings",
    category: "coating",
    short: "UV-stable decorative coatings that turn patios into outdoor living rooms.",
    metaTitle: "Patio Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our patio coatings in Langley, BC upgrade cracked concrete into a slip-resistant, low-maintenance surface built to handle rain and UV exposure.",
    description: [
      "Our patio coatings in Langley, BC upgrade cracked concrete into a slip-resistant, low-maintenance surface built to handle rain, temperature swings, and UV exposure.",
    ],
    benefits: [
      "UV-stable, fade-resistant",
      "Slip-resistant texture options",
      "Crack repair included",
      "Wide range of finishes",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Backyard Patios",
      "Pool Decks",
      "Covered Outdoor Areas",
      "Entryways",
      "Walkways",
    ],
    faqs: [
      { q: "How long does it take?", a: "One to two days depending on size." },
      { q: "How do I get a quote?", a: "Submit our form or call for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "polyaspartic-coatings",
    name: "Polyaspartic Coatings",
    category: "coating",
    short: "Fast-curing, UV-stable coatings for garages, patios & driveways.",
    metaTitle: "Polyaspartic Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our polyaspartic coatings in Langley, BC cure faster than standard epoxy and resist UV yellowing — strong choice for garages, patios, and exposed surfaces.",
    description: [
      "Our polyaspartic coatings in Langley, BC cure faster than standard epoxy and resist UV yellowing — a strong choice for garages, patios, and exposed surfaces.",
    ],
    benefits: [
      "Faster cure times",
      "Excellent UV stability",
      "Ideal for garages and driveways",
      "Impact resistant",
      "Manufacturer + workmanship warranty",
    ],
    applications: ["Garages", "Driveways", "Patios", "Pool Decks", "Commercial Entryways"],
    faqs: [
      { q: "How long does it take?", a: "Often a single day, thanks to fast curing." },
      { q: "How do I get a quote?", a: "Reach out for a free written estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "polyurethane-coatings",
    name: "Polyurethane Coatings",
    category: "coating",
    short: "Chemical-resistant flooring built for demanding commercial environments.",
    metaTitle: "Polyurethane Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our polyurethane coatings in Langley, BC are built for chemical exposure, temperature changes, and constant moisture in commercial kitchens and plants.",
    description: [
      "Our polyurethane coatings in Langley, BC are built for chemical exposure, temperature changes, and constant moisture in commercial kitchens and industrial facilities.",
    ],
    benefits: [
      "Strong chemical resistance",
      "Suited for temperature-sensitive spaces",
      "Long-lasting performance",
      "Custom formulation",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Commercial Kitchens",
      "Food Processing",
      "Industrial Plants",
      "Pharmaceutical Facilities",
      "Cold Storage",
    ],
    faqs: [
      { q: "How long does it take?", a: "Scheduled to minimize operational disruption." },
      { q: "How do I get a quote?", a: "Contact us with facility details for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "decorative-concrete",
    name: "Decorative Concrete Coatings",
    category: "coating",
    short: "Metallic, flake & custom finishes that turn plain concrete into a feature floor.",
    metaTitle: "Decorative Concrete Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our decorative concrete coatings in Langley, BC add style without sacrificing durability — metallic, flake, and custom finishes on a proven base.",
    description: [
      "Our decorative concrete coatings in Langley, BC add style without sacrificing durability — metallic, flake, and custom finishes on a proven, long-lasting base.",
    ],
    benefits: [
      "Metallic and flake options",
      "Residential and commercial use",
      "Durable, premium appearance",
      "Free design consultation",
      "Manufacturer + workmanship warranty",
    ],
    applications: ["Showrooms", "Retail Spaces", "Basements", "Feature Garage Floors", "Entryways"],
    faqs: [
      { q: "How long does it take?", a: "One to two days depending on design." },
      { q: "How do I get a quote?", a: "Book a free design consultation." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "food-safe-coatings",
    name: "Food Safe Environment Coatings",
    category: "coating",
    short: "Seamless, hygienic flooring built for commercial kitchens & food facilities.",
    metaTitle: "Food Safe Environment Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our food safe environment coatings in Langley, BC are seamless, sanitary, and resistant to grease and chemicals — built to meet strict hygiene standards.",
    description: [
      "Our food safe environment coatings in Langley, BC are seamless, sanitary, and resistant to grease and chemicals — built to meet strict hygiene standards.",
    ],
    benefits: [
      "Seamless, easy to clean",
      "Grease and chemical resistant",
      "Meets hygiene standards",
      "Slip-resistant options",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Commercial Kitchens",
      "Restaurants",
      "Food Processing",
      "Bakeries",
      "Cold Storage Rooms",
    ],
    faqs: [
      { q: "How long does it take?", a: "Usually one to two days." },
      { q: "How do I get a quote?", a: "Contact us for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "studio-coatings",
    name: "Studio Coatings",
    category: "coating",
    short: "Smooth, durable flooring for fitness, dance & creative studios.",
    metaTitle: "Studio Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our studio coatings in Langley, BC create a smooth, professional finish built to handle daily commercial use in fitness, dance, and creative spaces.",
    description: [
      "Our studio coatings in Langley, BC create a smooth, professional finish built to handle daily commercial use in fitness, dance, and creative spaces.",
    ],
    benefits: [
      "Smooth, consistent finish",
      "Durable for daily use",
      "Customizable colours",
      "Non-slip options",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Fitness Studios",
      "Dance Studios",
      "Yoga Studios",
      "Creative Workspaces",
      "Rehearsal Spaces",
    ],
    faqs: [
      { q: "How long does it take?", a: "One to two days, scheduled around business hours." },
      { q: "How do I get a quote?", a: "Reach out for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "shops-coatings",
    name: "Shop Coatings",
    category: "coating",
    short: "Industrial-grade flooring built for tools, chemicals & vehicle traffic.",
    metaTitle: "Shop Coatings in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our shop coatings in Langley, BC hold up to heavy tools, chemical spills, and vehicle traffic — built for real working conditions in auto shops and workshops.",
    description: [
      "Our shop coatings in Langley, BC hold up to heavy tools, chemical spills, and vehicle traffic — built for real working conditions in auto shops and workshops.",
    ],
    benefits: [
      "Built for tools and chemicals",
      "Slip-resistant options",
      "Fast installation",
      "Low-maintenance finish",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Auto Repair Shops",
      "Mechanic Bays",
      "Workshops",
      "Equipment Rooms",
      "Small Manufacturing Units",
    ],
    faqs: [
      { q: "How long does it take?", a: "One to two days depending on size." },
      { q: "How do I get a quote?", a: "Contact us for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },

  // Flooring
  {
    slug: "vinyl-flooring",
    name: "Vinyl Flooring",
    category: "flooring",
    short: "Waterproof, low-maintenance flooring for every room in your home.",
    metaTitle: "Vinyl Flooring in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our vinyl flooring in Langley, BC service brings waterproof, low-maintenance flooring to kitchens, bathrooms, and basements, installed with precise craftsmanship.",
    description: [
      "Our vinyl flooring in Langley, BC service brings waterproof, low-maintenance flooring to kitchens, bathrooms, and basements, installed with precise, gap-free craftsmanship.",
    ],
    benefits: [
      "100% waterproof",
      "Wide range of styles",
      "Family and pet-friendly",
      "Scratch and dent resistant",
      "Manufacturer + workmanship warranty",
    ],
    applications: ["Kitchens", "Bathrooms", "Basements", "Rental Properties", "Full-Home Installs"],
    faqs: [
      { q: "How long does it take?", a: "One to two days depending on size." },
      { q: "How do I get a quote?", a: "Fill our form or call for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "laminate-flooring",
    name: "Laminate Flooring",
    category: "flooring",
    short: "Affordable, durable flooring with the look of real hardwood.",
    metaTitle: "Laminate Flooring in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our laminate flooring in Langley, BC gives you the look of hardwood at a lower cost, installed with tight seams and clean transitions.",
    description: [
      "Our laminate flooring in Langley, BC gives you the look of hardwood at a lower cost, installed with tight seams and clean transitions.",
    ],
    benefits: [
      "Affordable hardwood look",
      "Scratch and wear-resistant",
      "Wide style range",
      "Gap-free installation",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Living Rooms",
      "Bedrooms",
      "Hallways",
      "Rental Properties",
      "Full-Home Installs",
    ],
    faqs: [
      { q: "How long does it take?", a: "One to two days depending on footage." },
      { q: "How do I get a quote?", a: "Submit our form for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "hardwood-flooring",
    name: "Hardwood Flooring",
    category: "flooring",
    short: "Timeless, solid flooring installed for lasting value.",
    metaTitle: "Hardwood Flooring in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our hardwood flooring in Langley, BC service covers species selection through precise installation, built to last for decades.",
    description: [
      "Our hardwood flooring in Langley, BC service covers species selection through precise installation, built to last for decades.",
    ],
    benefits: [
      "Solid and engineered options",
      "Decades of durability",
      "Adds resale value",
      "Detail-focused install",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Main Living Areas",
      "Bedrooms",
      "Staircases",
      "Whole-Home Installs",
      "Renovations",
    ],
    faqs: [
      { q: "How long does it take?", a: "Three to five days depending on footage." },
      { q: "How do I get a quote?", a: "Contact us for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "carpet-tiles",
    name: "Carpet Tiles",
    category: "flooring",
    short: "Flexible, durable modular flooring for homes & commercial spaces.",
    metaTitle: "Carpet Tiles in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our carpet tiles in Langley, BC offer easy replacement and custom patterns — popular choice for offices, basements, and commercial spaces.",
    description: [
      "Our carpet tiles in Langley, BC offer easy replacement and custom patterns — a popular choice for offices, basements, and commercial spaces.",
    ],
    benefits: [
      "Easy tile replacement",
      "Wide colour range",
      "Great for high-traffic spaces",
      "Fast, clean install",
      "Manufacturer + workmanship warranty",
    ],
    applications: ["Offices", "Basements", "Commercial Spaces", "Home Gyms", "Multi-Purpose Rooms"],
    faqs: [
      { q: "How long does it take?", a: "One to two days depending on footage." },
      { q: "How do I get a quote?", a: "Reach out for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "custom-stairs",
    name: "Custom Stairs",
    category: "flooring",
    short: "Built for daily traffic, finished to match the rest of your home.",
    metaTitle: "Custom Stairs in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our custom stairs in Langley, BC service covers hardwood treads and full renovations, finished to blend with your existing floors.",
    description: [
      "Our custom stairs in Langley, BC service covers hardwood treads and full renovations, finished to blend with your existing floors.",
    ],
    benefits: [
      "Hardwood, laminate, vinyl options",
      "Built for daily traffic",
      "Custom finishes",
      "Safety-focused detailing",
      "Manufacturer + workmanship warranty",
    ],
    applications: [
      "Interior Staircases",
      "Landings",
      "Stair Renovations",
      "New Builds",
      "Renovations",
    ],
    faqs: [
      { q: "How long does it take?", a: "A few days depending on scope." },
      { q: "How do I get a quote?", a: "Contact us for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "self-leveling-floors",
    name: "Self-Leveling Floors",
    category: "flooring",
    short: "Correcting uneven subfloors before your new flooring goes down.",
    metaTitle: "Self-Leveling Floors in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our self-leveling floors in Langley, BC service corrects dips and rough patches, giving your new flooring a solid, even foundation.",
    description: [
      "Our self-leveling floors in Langley, BC service corrects dips and rough patches, giving your new flooring a solid, even foundation.",
    ],
    benefits: [
      "Corrects uneven subfloors",
      "Essential prep for vinyl/laminate/tile",
      "Prevents future issues",
      "Fast-curing compounds",
      "Workmanship warranty",
    ],
    applications: [
      "Pre-Renovation Prep",
      "Older Homes",
      "New Installs",
      "Basements",
      "Commercial Retrofits",
    ],
    faqs: [
      { q: "How long does it take?", a: "Ready for new flooring within 24 hours." },
      { q: "How do I get a quote?", a: "Contact us for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
  {
    slug: "floor-demo",
    name: "Floor Demolition",
    category: "flooring",
    short: "Clean, efficient removal of old flooring before your new install.",
    metaTitle: "Floor Demolition in Langley, BC | Fraser Valley Floors",
    metaDescription:
      "Our floor demolition in Langley, BC service removes carpet, tile, hardwood, and vinyl cleanly, with responsible disposal and subfloor inspection.",
    description: [
      "Our floor demolition in Langley, BC service removes carpet, tile, hardwood, and vinyl cleanly, with responsible disposal and subfloor inspection.",
    ],
    benefits: [
      "Clean, efficient removal",
      "Responsible disposal",
      "Subfloor inspection included",
      "Minimal mess",
      "Workmanship warranty",
    ],
    applications: [
      "Pre-Renovation Removal",
      "Old Carpet Removal",
      "Tile Removal",
      "Hardwood Removal",
      "Commercial Retrofits",
    ],
    faqs: [
      { q: "How long does it take?", a: "Most rooms cleared within a day." },
      { q: "How do I get a quote?", a: "Contact us for a free estimate." },
      { q: "Warranty included?", a: "Yes." },
      { q: "Do you serve the whole Fraser Valley?", a: "Yes." },
    ],
  },
];

export const services: Service[] = baseServices.map((service) => {
  const content = serviceContent[service.slug];
  return {
    ...service,
    h1: content?.h1 ?? `${service.name} in Langley, BC`,
    badge:
      content?.badge ??
      (service.category === "coating" ? "CONCRETE COATING SERVICE" : "FLOORING SERVICE"),
    short: content?.tagline ?? service.short,
    about: content?.about ?? service.description[0],
    serving:
      content?.serving ??
      "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
    description: [content?.about ?? service.description[0]],
    benefits: content?.benefits ?? service.benefits,
    applications: content?.applications ?? service.applications,
    faqs: content?.faqs ?? service.faqs,
  };
});

export const coatingServices = services.filter((s) => s.category === "coating");
export const flooringServices = services.filter((s) => s.category === "flooring");

const slugAliases: Record<string, string> = {
  "shop-coatings": "shops-coatings",
  "garage-floor-coatings": "garage-coatings",
  "warehouse-floor-coatings": "warehouse-coatings",
  "decorative-concrete-coatings": "decorative-concrete",
  "food-safe-environment-coatings": "food-safe-coatings",
  "floor-demolition": "floor-demo",
};

export const getService = (slug: string) => {
  const targetSlug = slugAliases[slug] || slug;
  return services.find((s) => s.slug === targetSlug);
};
