export type ServiceContent = {
  h1: string;
  badge: string;
  tagline: string;
  about: string;
  serving: string;
  benefits: string[];
  applications: string[];
  faqs: { q: string; a: string }[];
};

export const serviceContent: Record<string, ServiceContent> = {
  "epoxy-coatings": {
    h1: "Epoxy Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "Durable, glossy epoxy systems for garages, shops & commercial floors. Built to resist chemicals, stains, and daily wear for years to come.",
    about:
      "Our epoxy coatings in Langley, BC turn tired concrete into a hard-wearing, chemical-resistant surface — from solid colours to full metallic and flake finishes, mixed and applied on-site.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "Most jobs finish in a single day.",
      },
      {
        q: "How do I get a quote?",
        a: "Fill our form or call — free written estimate within one business day.",
      },
      {
        q: "Warranty included?",
        a: "Yes, manufacturer + workmanship warranty.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "garage-coatings": {
    h1: "Garage Floor Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "Premium polyaspartic and epoxy systems built for daily abuse. Turn your garage into a clean, showroom-ready space in as little as one day.",
    about:
      "Our garage floor coatings in Langley, BC turn dusty concrete into a durable, showroom-ready floor built to resist hot tires, oil, and daily wear.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "Usually a single day.",
      },
      {
        q: "How do I get a quote?",
        a: "Call or fill our online form for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes, including Langley and nearby communities.",
      },
    ],
  },
  "warehouse-coatings": {
    h1: "Warehouse Floor Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "Heavy-duty industrial flooring for warehouses & distribution centres. Engineered to handle forklift traffic and constant daily use.",
    about:
      "Our warehouse floor coatings in Langley, BC are built for forklift traffic, heavy loads, and chemical exposure, with slip-resistant finish options for added safety.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "Scheduled in phases to minimize downtime.",
      },
      {
        q: "How do I get a quote?",
        a: "Contact us with your facility size for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "patio-coatings": {
    h1: "Patio Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "UV-stable decorative coatings that turn patios into outdoor living rooms. Built to handle rain, sun, and everyday wear year-round.",
    about:
      "Our patio coatings in Langley, BC upgrade cracked concrete into a slip-resistant, low-maintenance surface built to handle rain, temperature swings, and UV exposure.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "One to two days depending on size.",
      },
      {
        q: "How do I get a quote?",
        a: "Submit our form or call for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "polyaspartic-coatings": {
    h1: "Polyaspartic Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "Fast-curing, UV-stable coatings for garages, patios & driveways. Get a tough, long-lasting finish that's ready sooner than standard coatings.",
    about:
      "Our polyaspartic coatings in Langley, BC cure faster than standard epoxy and resist UV yellowing — a strong choice for garages, patios, and exposed surfaces.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
    benefits: [
      "Faster cure times",
      "Excellent UV stability",
      "Ideal for garages and driveways",
      "Impact resistant",
      "Manufacturer + workmanship warranty",
    ],
    applications: ["Garages", "Driveways", "Patios", "Pool Decks", "Commercial Entryways"],
    faqs: [
      {
        q: "How long does it take?",
        a: "Often a single day, thanks to fast curing.",
      },
      {
        q: "How do I get a quote?",
        a: "Reach out for a free written estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "polyurethane-coatings": {
    h1: "Polyurethane Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "Chemical-resistant flooring built for demanding commercial environments. Ideal for kitchens, plants, and facilities that need year-round durability.",
    about:
      "Our polyurethane coatings in Langley, BC are built for chemical exposure, temperature changes, and constant moisture in commercial kitchens and industrial facilities.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "Scheduled to minimize operational disruption.",
      },
      {
        q: "How do I get a quote?",
        a: "Contact us with facility details for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "decorative-concrete": {
    h1: "Decorative Concrete Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "Metallic, flake & custom finishes that turn plain concrete into a feature floor. A stylish upgrade that's still built to last.",
    about:
      "Our decorative concrete coatings in Langley, BC add style without sacrificing durability — metallic, flake, and custom finishes on a proven, long-lasting base.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
    benefits: [
      "Metallic and flake options",
      "Residential and commercial use",
      "Durable, premium appearance",
      "Free design consultation",
      "Manufacturer + workmanship warranty",
    ],
    applications: ["Showrooms", "Retail Spaces", "Basements", "Feature Garage Floors", "Entryways"],
    faqs: [
      {
        q: "How long does it take?",
        a: "One to two days depending on design.",
      },
      {
        q: "How do I get a quote?",
        a: "Book a free design consultation.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "food-safe-coatings": {
    h1: "Food Safe Environment Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "Seamless, hygienic flooring built for commercial kitchens & food facilities. Designed to meet strict sanitation and safety standards.",
    about:
      "Our food safe environment coatings in Langley, BC are seamless, sanitary, and resistant to grease and chemicals — built to meet strict hygiene standards.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "Usually one to two days.",
      },
      {
        q: "How do I get a quote?",
        a: "Contact us for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "studio-coatings": {
    h1: "Studio Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "Smooth, durable flooring for fitness, dance & creative studios. A clean, professional finish built for daily use.",
    about:
      "Our studio coatings in Langley, BC create a smooth, professional finish built to handle daily commercial use in fitness, dance, and creative spaces.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "One to two days, scheduled around business hours.",
      },
      {
        q: "How do I get a quote?",
        a: "Reach out for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "shops-coatings": {
    h1: "Shop Coatings in Langley, BC",
    badge: "CONCRETE COATING SERVICE",
    tagline:
      "Industrial-grade flooring built for tools, chemicals & vehicle traffic. Reliable protection for busy auto shops and workshops.",
    about:
      "Our shop coatings in Langley, BC hold up to heavy tools, chemical spills, and vehicle traffic — built for real working conditions in auto shops and workshops.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "One to two days depending on size.",
      },
      {
        q: "How do I get a quote?",
        a: "Contact us for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "vinyl-flooring": {
    h1: "Vinyl Flooring in Langley, BC",
    badge: "FLOORING SERVICE",
    tagline:
      "Waterproof, low-maintenance flooring for every room in your home. A practical, stylish choice for kitchens, bathrooms, and basements.",
    about:
      "Our vinyl flooring in Langley, BC service brings waterproof, low-maintenance flooring to kitchens, bathrooms, and basements, installed with precise, gap-free craftsmanship.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
    benefits: [
      "100% waterproof",
      "Wide range of styles",
      "Family and pet-friendly",
      "Scratch and dent resistant",
      "Manufacturer + workmanship warranty",
    ],
    applications: ["Kitchens", "Bathrooms", "Basements", "Rental Properties", "Full-Home Installs"],
    faqs: [
      {
        q: "How long does it take?",
        a: "One to two days depending on size.",
      },
      {
        q: "How do I get a quote?",
        a: "Fill our form or call for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "laminate-flooring": {
    h1: "Laminate Flooring in Langley, BC",
    badge: "FLOORING SERVICE",
    tagline:
      "Affordable, durable flooring with the look of real hardwood. A budget-friendly option that still delivers a polished finish.",
    about:
      "Our laminate flooring in Langley, BC gives you the look of hardwood at a lower cost, installed with tight seams and clean transitions.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "One to two days depending on footage.",
      },
      {
        q: "How do I get a quote?",
        a: "Submit our form for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "hardwood-flooring": {
    h1: "Hardwood Flooring in Langley, BC",
    badge: "FLOORING SERVICE",
    tagline:
      "Timeless, solid flooring installed for lasting value. Adds warmth and character to any room in your home.",
    about:
      "Our hardwood flooring in Langley, BC service covers species selection through precise installation, built to last for decades.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "Three to five days depending on footage.",
      },
      {
        q: "How do I get a quote?",
        a: "Contact us for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "carpet-tiles": {
    h1: "Carpet Tiles in Langley, BC",
    badge: "FLOORING SERVICE",
    tagline:
      "Flexible, durable modular flooring for homes & commercial spaces. Easy to maintain, replace, and customize to your space.",
    about:
      "Our carpet tiles in Langley, BC offer easy replacement and custom patterns — a popular choice for offices, basements, and commercial spaces.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
    benefits: [
      "Easy tile replacement",
      "Wide colour range",
      "Great for high-traffic spaces",
      "Fast, clean install",
      "Manufacturer + workmanship warranty",
    ],
    applications: ["Offices", "Basements", "Commercial Spaces", "Home Gyms", "Multi-Purpose Rooms"],
    faqs: [
      {
        q: "How long does it take?",
        a: "One to two days depending on footage.",
      },
      {
        q: "How do I get a quote?",
        a: "Reach out for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "custom-stairs": {
    h1: "Custom Stairs in Langley, BC",
    badge: "FLOORING SERVICE",
    tagline:
      "Built for daily traffic, finished to match the rest of your home. From simple refinishing to full stair renovations.",
    about:
      "Our custom stairs in Langley, BC service covers hardwood treads and full renovations, finished to blend with your existing floors.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "A few days depending on scope.",
      },
      {
        q: "How do I get a quote?",
        a: "Contact us for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "self-leveling-floors": {
    h1: "Self-Leveling Floors in Langley, BC",
    badge: "FLOORING SERVICE",
    tagline:
      "Correcting uneven subfloors before your new flooring goes down. The essential first step for a smooth, long-lasting finish.",
    about:
      "Our self-leveling floors in Langley, BC service corrects dips and rough patches, giving your new flooring a solid, even foundation.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "Ready for new flooring within 24 hours.",
      },
      {
        q: "How do I get a quote?",
        a: "Contact us for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
  "floor-demo": {
    h1: "Floor Demolition in Langley, BC",
    badge: "FLOORING SERVICE",
    tagline:
      "Clean, efficient removal of old flooring before your new install. We handle disposal and subfloor prep so you don't have to.",
    about:
      "Our floor demolition in Langley, BC service removes carpet, tile, hardwood, and vinyl cleanly, with responsible disposal and subfloor inspection.",
    serving: "Serving: Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta.",
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
      {
        q: "How long does it take?",
        a: "Most rooms cleared within a day.",
      },
      {
        q: "How do I get a quote?",
        a: "Contact us for a free estimate.",
      },
      {
        q: "Warranty included?",
        a: "Yes.",
      },
      {
        q: "Do you serve the whole Fraser Valley?",
        a: "Yes.",
      },
    ],
  },
};

// Aliases for alternate slug naming conventions
serviceContent["shop-coatings"] = serviceContent["shops-coatings"];
serviceContent["garage-floor-coatings"] = serviceContent["garage-coatings"];
serviceContent["warehouse-floor-coatings"] = serviceContent["warehouse-coatings"];
serviceContent["decorative-concrete-coatings"] = serviceContent["decorative-concrete"];
serviceContent["food-safe-environment-coatings"] = serviceContent["food-safe-coatings"];
serviceContent["floor-demolition"] = serviceContent["floor-demo"];
