import { serviceContent } from "@/data/service-content";

export type Service = {
  slug: string;
  name: string;
  category: "coating" | "flooring";
  short: string;
  metaTitle: string;
  metaDescription: string;
  description: string[];
  localHeading?: string;
  localCopy?: string;
  benefits: string[];
  applications: string[];
  faqs: { q: string; a: string }[];
};

const sharedFaqs = (name: string) => [
  {
    q: `How long does a ${name.toLowerCase()} installation take?`,
    a: "Most residential projects are completed within 1–3 days. Larger commercial installations are scheduled with detailed timelines after a free on-site assessment.",
  },
  {
    q: `Do you offer warranties on ${name.toLowerCase()}?`,
    a: "Yes. Every installation is backed by a manufacturer warranty plus our workmanship guarantee. We stand behind every floor we install.",
  },
  {
    q: "Do you serve all of the Fraser Valley?",
    a: "Absolutely. We service Abbotsford, Surrey, Delta, Langley, Chilliwack, Maple Ridge, Mission, and surrounding communities.",
  },
  {
    q: "How do I get a quote?",
    a: "Call us or fill out the quote form on this page. We provide free, no-obligation estimates with transparent, written pricing.",
  },
];

const baseServices: Service[] = [
  // Concrete Coating
  {
    slug: "epoxy-coatings",
    name: "Epoxy Coatings",
    category: "coating",
    short: "Durable, glossy epoxy systems for garages, shops & commercial floors.",
    metaTitle: "Epoxy Coatings in Fraser Valley, BC | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors provides durable epoxy coatings in Fraser Valley, BC for homes, garages, and commercial spaces with long-lasting protection.",
    description: [
      "Our high-performance epoxy coatings transform tired concrete into a stunning, hard-wearing surface that resists chemicals, abrasion, and impact. Engineered for Fraser Valley's climate, our systems bond tightly to properly prepared concrete for decades of service.",
      "Whether you want a sleek solid color, a metallic finish, or a decorative full-flake system, we mix and broadcast on-site to your exact specifications.",
    ],
    benefits: [
      "Chemical, oil and stain resistant",
      "High-gloss, easy-to-clean finish",
      "Slip-resistant texture options",
      "Bonded to professionally prepared concrete",
      "Backed by manufacturer + workmanship warranty",
    ],
    applications: [
      "Residential garages",
      "Workshops",
      "Showrooms",
      "Commercial kitchens",
      "Retail spaces",
    ],
    faqs: sharedFaqs("Epoxy Coatings"),
  },
  {
    slug: "garage-coatings",
    name: "Garage Coatings",
    category: "coating",
    short: "Premium polyaspartic and epoxy systems built for daily abuse.",
    metaTitle: "Garage Coatings Fraser Valley, BC | Fraser Valley Floors",
    metaDescription:
      "Upgrade your garage with durable floor coatings in Fraser Valley, BC. Fraser Valley Floors delivers stain-resistant, long-lasting finishes.",
    description: [
      "A coated garage floor is the single best upgrade you can make to your home. Our systems shrug off hot tires, road salt, oil drips, and impact while looking great for years.",
      "We diamond-grind your existing concrete, repair cracks and pits, then install a moisture-locking base coat, full color flake broadcast, and a clear UV-stable top coat — usually in one day.",
    ],
    benefits: [
      "One-day installation available",
      "Hot-tire pickup resistant",
      "Hundreds of color flake combinations",
      "Antimicrobial — easy to clean",
      "15-year residential warranty available",
    ],
    applications: ["Single & multi-car garages", "Detached shops", "Carports", "RV bays"],
    faqs: sharedFaqs("Garage Coatings"),
  },
  {
    slug: "warehouse-coatings",
    name: "Warehouse Coatings",
    category: "coating",
    short: "Heavy-duty industrial flooring for warehouses & distribution centres.",
    metaTitle: "Warehouse Coating in Fraser Valley BC | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors installs warehouse floor coatings in Fraser Valley, BC designed for heavy traffic, durability, and easy maintenance.",
    description: [
      "Our industrial coating systems are engineered for forklift traffic, heavy loads, and demanding operations. We use commercial-grade resins and aggregate broadcasts to deliver floors that survive the busiest facilities.",
      "Line striping, safety zones, and high-visibility colour coding are all available as part of your install.",
    ],
    benefits: [
      "Forklift & heavy-load rated",
      "Custom safety striping",
      "Seamless, dust-proof surface",
      "Fast curing — minimal downtime",
      "Compliant with food & pharma standards",
    ],
    applications: [
      "Distribution centres",
      "Manufacturing plants",
      "Storage facilities",
      "Loading docks",
    ],
    faqs: sharedFaqs("Warehouse Coatings"),
  },
  {
    slug: "patio-coatings",
    name: "Patio Coatings",
    category: "coating",
    short: "UV-stable decorative coatings that turn patios into outdoor living rooms.",
    metaTitle: "Patio Coatings in Fraser Valley, BC | Fraser Valley Floors",
    metaDescription:
      "Enhance outdoor spaces with patio coatings in Fraser Valley, BC. Fraser Valley Floors creates durable, weather-resistant concrete finishes.",
    description: [
      "Outdoor concrete deserves more than grey. Our UV-stable polyaspartic and decorative overlay systems give patios, pool decks, and walkways a beautiful, slip-resistant finish that holds up to West Coast rain and sun.",
      "Choose from natural stone looks, custom colours, or full-flake systems with a textured anti-slip top coat.",
    ],
    benefits: [
      "UV-stable — won't yellow",
      "Slip-resistant for wet areas",
      "Resists freeze/thaw cycles",
      "Easy seasonal cleanup",
      "Dramatically boosts curb appeal",
    ],
    applications: [
      "Backyard patios",
      "Pool decks",
      "Front walkways",
      "Outdoor entertainment areas",
    ],
    faqs: sharedFaqs("Patio Coatings"),
  },
  {
    slug: "polyaspartic-coatings",
    name: "Polyaspartic Coatings",
    category: "coating",
    short: "Fastest-curing, longest-lasting coating technology on the market.",
    metaTitle: "Polyaspartic Coating in Fraser Valley | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors installs polyaspartic coatings in Fraser Valley, BC for fast-curing, UV-resistant, and highly durable floor protection.",
    description: [
      "Polyaspartic is the gold standard for floor coatings — stronger than epoxy, faster to cure, and UV-stable so it never yellows. Most installs are walk-on ready the next morning.",
      "We use 100%-solids polyaspartics with no harsh solvent smell, making it ideal for homes, food-safe spaces, and occupied businesses.",
    ],
    benefits: [
      "Cures in hours, not days",
      "UV-stable — indoor or outdoor",
      "Stronger than epoxy",
      "Low odour install",
      "20+ year service life",
    ],
    applications: ["Garages", "Patios", "Retail spaces", "Commercial kitchens"],
    faqs: sharedFaqs("Polyaspartic Coatings"),
  },
  {
    slug: "polyurethane-coatings",
    name: "Polyurethane Coatings",
    category: "coating",
    short: "Flexible, abrasion-resistant top coats for demanding environments.",
    metaTitle: "Polyurethane Coating in Fraser Valley | Fraser Valley Floors",
    metaDescription:
      "Protect floors with polyurethane coatings in Fraser Valley, BC. Fraser Valley Floors provides strong, chemical-resistant floor finishes.",
    description: [
      "Polyurethane coatings offer outstanding abrasion resistance and flexibility — ideal as a top coat over epoxy in high-traffic commercial settings. They handle thermal cycling, impact, and chemical exposure with ease.",
      "We pair urethane top coats with the right base system for your facility's specific demands.",
    ],
    benefits: [
      "Excellent abrasion resistance",
      "Flexible — handles substrate movement",
      "High chemical & solvent resistance",
      "Available in matte to high-gloss",
      "Long-lasting top coat protection",
    ],
    applications: ["Commercial kitchens", "Auto shops", "Breweries", "Laboratories"],
    faqs: sharedFaqs("Polyurethane Coatings"),
  },
  {
    slug: "decorative-concrete",
    name: "Decorative Concrete",
    category: "coating",
    short: "Stained, stamped, and overlay systems that turn concrete into art.",
    metaTitle: "Decorative Concrete services near Fraser Valley, BC",
    metaDescription:
      "Fraser Valley Floors creates decorative concrete in Fraser Valley, BC with stylish finishes that improve durability and curb appeal.",
    description: [
      "Bring character to indoor and outdoor concrete with custom stains, decorative overlays, and stamped finishes. Our team helps you choose the perfect colour palette and pattern to complement your home or business.",
      "Every project is sealed with a long-lasting protective top coat.",
    ],
    benefits: [
      "Endless colour and pattern options",
      "Custom logos & inlays",
      "Sealed for long-term durability",
      "Beautiful indoor & outdoor",
      "Adds significant property value",
    ],
    applications: ["Entryways", "Patios", "Commercial lobbies", "Restaurants"],
    faqs: sharedFaqs("Decorative Concrete"),
  },
  {
    slug: "food-safe-coatings",
    name: "Food Safe Environment Coatings",
    category: "coating",
    short: "Seamless, antimicrobial floors for kitchens, breweries & food processing.",
    metaTitle: "Food Safe Coatings in Fraser Valley | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors installs food-safe floor coatings in Fraser Valley, BC for hygienic, durable, and easy-to-clean commercial spaces.",
    description: [
      "Food production and prep facilities demand floors that are seamless, sanitary, and easy to clean. Our urethane cement and food-safe epoxy systems meet CFIA and Health Canada standards for food contact environments.",
      "Cove bases and integral drainage details ensure every corner stays hygienic.",
    ],
    benefits: [
      "CFIA / Health Canada compliant",
      "Antimicrobial finish",
      "Seamless — no dirt traps",
      "Thermal-shock resistant",
      "Integral cove bases available",
    ],
    applications: ["Commercial kitchens", "Breweries", "Bakeries", "Food processing plants"],
    faqs: sharedFaqs("Food Safe Coatings"),
  },
  {
    slug: "studio-coatings",
    name: "Studio Coatings",
    category: "coating",
    short: "Quiet, beautiful, low-VOC floors for studios and creative spaces.",
    metaTitle: "Studio Coatings services Fraser Valley and surrounding areas",
    metaDescription:
      "Fraser Valley Floors provides studio floor coatings in Fraser Valley, BC with durable, seamless finishes for creative and work spaces.",
    description: [
      "Yoga studios, photography studios, dance floors, and art spaces deserve a floor that's beautiful, comfortable, and built for the way you work. Our low-VOC systems install fast and look stunning.",
      "We can integrate custom logos, colour zones, and acoustic underlayments.",
    ],
    benefits: [
      "Low-VOC, low-odour install",
      "Custom colour & logo options",
      "Comfortable underfoot",
      "Easy to clean — no grout lines",
      "Photogenic, professional finish",
    ],
    applications: [
      "Yoga & dance studios",
      "Photo & film studios",
      "Art galleries",
      "Boutique fitness",
    ],
    faqs: sharedFaqs("Studio Coatings"),
  },
  {
    slug: "shops-coatings",
    name: "Shop Coatings",
    category: "coating",
    short: "Tough coatings for auto shops, mechanical shops & workshops.",
    metaTitle: "Shop Coatings in Fraser Valley, BC | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors installs shop floor coatings in Fraser Valley, BC for durable, stain-resistant surfaces built for daily use.",
    description: [
      "Mechanical and auto shops demand a floor that handles dropped tools, jack stands, fluid spills, and constant traffic. Our shop coating systems are formulated to perform — and look professional doing it.",
      "Anti-slip aggregate is broadcast into the top coat for safety in wet conditions.",
    ],
    benefits: [
      "Resists oil, brake fluid, gasoline",
      "Impact & abrasion rated",
      "Anti-slip top coat",
      "Easy to sweep, mop, and pressure wash",
      "Professional shop appearance",
    ],
    applications: ["Auto repair shops", "Detail bays", "Welding shops", "Hobby workshops"],
    faqs: sharedFaqs("Shop Coatings"),
  },

  // Flooring
  {
    slug: "vinyl-flooring",
    name: "Vinyl Flooring",
    category: "flooring",
    short: "Waterproof luxury vinyl plank for kitchens, basements & whole homes.",
    metaTitle: "Vinyl Flooring in Fraser Valley, BC | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors installs premium vinyl flooring in Fraser Valley, BC with stylish, waterproof, and low-maintenance solutions.",
    description: [
      "Modern luxury vinyl plank (LVP) and SPC flooring delivers the look of real hardwood with 100% waterproof performance. Perfect for kitchens, basements, bathrooms, and high-traffic family rooms.",
      "We carry trusted brands and provide expert installation with proper subfloor prep and trim work.",
    ],
    benefits: [
      "100% waterproof",
      "Scratch & dent resistant",
      "Realistic wood and stone visuals",
      "Comfortable underfoot",
      "Easy to maintain",
    ],
    applications: ["Whole-home installs", "Basements", "Kitchens & bathrooms", "Rental units"],
    faqs: sharedFaqs("Vinyl Flooring"),
  },
  {
    slug: "laminate-flooring",
    name: "Laminate Flooring",
    category: "flooring",
    short: "Premium AC-rated laminate that looks like hardwood for less.",
    metaTitle: "Laminate Flooring contractors in Fraser Valley, BC",
    metaDescription:
      "Fraser Valley Floors offers laminate flooring in Fraser Valley, BC with durable, attractive finishes for residential and commercial spaces.",
    description: [
      "Today's laminate flooring is durable, beautiful, and budget-friendly. We install AC4 and AC5-rated planks with realistic embossed-in-register textures for an authentic wood feel.",
      "Proper underlayment and moisture barriers are always included.",
    ],
    benefits: [
      "Excellent value per square foot",
      "Scratch and fade resistant",
      "Dozens of wood looks available",
      "Quick floating-floor installation",
      "Low-maintenance",
    ],
    applications: ["Bedrooms & living areas", "Offices", "Rentals", "Whole-home installs"],
    faqs: sharedFaqs("Laminate Flooring"),
  },
  {
    slug: "hardwood-flooring",
    name: "Hardwood Flooring",
    category: "flooring",
    short: "Engineered and solid hardwood installation with expert finishing.",
    metaTitle: "Hardwood Flooring in Fraser Valley | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors installs hardwood flooring in Fraser Valley, BC with timeless beauty, lasting durability, and expert craftsmanship.",
    description: [
      "Nothing matches the warmth and timeless appeal of real hardwood. We install solid and engineered hardwood in oak, maple, hickory, walnut, and exotic species — with precise milling, racking, and finishing.",
      "Repairs, sand-and-refinish, and stair nosings are all part of what we do.",
    ],
    benefits: [
      "Adds long-term home value",
      "Refinishable — lasts generations",
      "Wide range of species & stains",
      "Expert subfloor preparation",
      "Detailed transitions & trim work",
    ],
    applications: ["Living & dining rooms", "Bedrooms", "Hallways", "Whole-home renovations"],
    faqs: sharedFaqs("Hardwood Flooring"),
  },
  {
    slug: "carpet-tiles",
    name: "Carpet Tiles",
    category: "flooring",
    short: "Modular carpet tiles for offices, basements & rec rooms.",
    metaTitle: "Carpet Tiles service in Fraser Valley | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors supplies and installs carpet tiles in Fraser Valley, BC for comfortable, durable, and easy-to-maintain interiors.",
    description: [
      "Carpet tiles are the smart choice for commercial spaces and basement rec rooms — easy to install, easy to replace, and available in endless patterns. We supply and install commercial-grade modular carpet from leading manufacturers.",
      "Damaged tiles can be swapped individually, keeping long-term costs low.",
    ],
    benefits: [
      "Replace individual damaged tiles",
      "Acoustic dampening",
      "Endless design layouts",
      "Commercial-grade durability",
      "Quiet, comfortable underfoot",
    ],
    applications: ["Offices", "Basements", "Schools", "Rec rooms"],
    faqs: sharedFaqs("Carpet Tiles"),
  },
  {
    slug: "custom-stairs",
    name: "Custom Stairs",
    category: "flooring",
    short: "Stair installation, refinishing, and custom millwork.",
    metaTitle: "Custom Stairs service in Fraser Valley | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors builds custom stairs in Fraser Valley, BC with quality materials, precision craftsmanship, and lasting style.",
    description: [
      "From a full set of new hardwood treads to refinishing existing stairs and matching them to your new floor, our team delivers stair work that's level, square, and built to last.",
      "We handle nosings, risers, stringers, railings, and custom millwork for a finished look you'll love.",
    ],
    benefits: [
      "Tread, riser & nosing replacement",
      "Matched to your new floor",
      "Refinishing & re-staining",
      "Custom railings available",
      "Squeak repairs included",
    ],
    applications: [
      "Open-tread staircases",
      "Closed staircases",
      "Basement stairs",
      "Curved staircases",
    ],
    faqs: sharedFaqs("Custom Stairs"),
  },
  {
    slug: "self-leveling-floors",
    name: "Self-Leveling Floors",
    category: "flooring",
    short: "Precision subfloor leveling for perfect finished floor installs.",
    metaTitle: "Self-Leveling Floors in Fraser Valley | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors installs self-leveling floors in Fraser Valley, BC creating smooth, durable surfaces ready for any flooring system.",
    description: [
      "A flat subfloor is the foundation of any great floor install. Our self-leveling pours correct dips, slopes, and tile-trace lines so your new vinyl, hardwood, or tile sits dead flat.",
      "We use premium polymer-modified compounds and properly prime every substrate before pouring.",
    ],
    benefits: [
      "Corrects dips, slopes & uneven subfloors",
      "Bonds to concrete & wood subfloors",
      "Sets fast — same-day installs possible",
      "Ready for tile, vinyl, hardwood or coating",
      "Eliminates floor squeaks",
    ],
    applications: [
      "Prep for new floor installs",
      "Tile repairs",
      "Heated floor installs",
      "Concrete restoration",
    ],
    faqs: sharedFaqs("Self-Leveling Floors"),
  },
  {
    slug: "floor-demo",
    name: "Floor Demolition",
    category: "flooring",
    short: "Clean, fast removal of old flooring, glue, and underlayment.",
    metaTitle: "Floor Demolition in Fraser Valley, BC | Fraser Valley Floors",
    metaDescription:
      "Fraser Valley Floors provides floor demolition in Fraser Valley, BC with safe, efficient removal services for residential and commercial projects.",
    description: [
      "Old tile, carpet, hardwood, or glued-down vinyl have to come up before your new floor goes in. Our crews use dust-controlled grinders and proper PPE to remove flooring quickly and leave the subfloor ready for the next step.",
      "We haul everything away and recycle where possible.",
    ],
    benefits: [
      "Dust-controlled grinding",
      "Glue & adhesive removal",
      "Tile, carpet & hardwood removal",
      "Full debris haul-away",
      "Subfloor inspection & prep",
    ],
    applications: [
      "Renovations",
      "Real estate prep",
      "Commercial tenant fit-out",
      "Insurance restoration",
    ],
    faqs: sharedFaqs("Floor Demolition"),
  },
];

export const services: Service[] = baseServices.map((service) => {
  const content = serviceContent[service.slug];
  return content
    ? {
        ...service,
        short: content.tagline,
        description: content.description,
        localHeading: content.localHeading,
        localCopy: content.localCopy,
        benefits: content.benefits,
        applications: content.applications,
        faqs: content.faqs,
      }
    : service;
});

export const coatingServices = services.filter((s) => s.category === "coating");
export const flooringServices = services.filter((s) => s.category === "flooring");

export const getService = (slug: string) => services.find((s) => s.slug === slug);
