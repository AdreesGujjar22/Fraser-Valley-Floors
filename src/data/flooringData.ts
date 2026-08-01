import { FlooringProduct, ProjectShowcase } from "../types";

export const PRODUCTS: FlooringProduct[] = [
  {
    id: "fvf-hw-01",
    name: "Fraser Oak Natural",
    category: "hardwood",
    pricePerSqFt: 8.95,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    description:
      "Timeless Canadian White Oak with micro-beveled edges and a durable matte wire-brushed finish.",
    features: [
      "100% Solid Canadian Oak",
      "Wire-brushed texture",
      "25-Year Residential Warranty",
      "Precision tongue & groove",
    ],
    specs: {
      plankWidth: '5"',
      thickness: '3/4"',
      waterproof: false,
      warranty: "25-Year Residential",
      installType: "Nail / Staple Down",
    },
    popular: true,
    rating: 4.9,
    reviewCount: 42,
  },
  {
    id: "fvf-hw-02",
    name: "Chilliwack Heritage Hickory",
    category: "hardwood",
    pricePerSqFt: 9.45,
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
    description:
      "Rich hand-scraped character hickory showcasing natural grain variation and deep knot accents.",
    features: [
      "High durability hickory",
      "Hand-scraped vintage texture",
      "UV cured aluminum oxide finish",
    ],
    specs: {
      plankWidth: '6.5"',
      thickness: '3/4"',
      waterproof: false,
      warranty: "30-Year Structural Warranty",
      installType: "Nail / Staple Down",
    },
    popular: false,
    rating: 4.8,
    reviewCount: 29,
  },
  {
    id: "fvf-eng-01",
    name: "Abbotsford Wide-Plank Oak",
    category: "engineered",
    pricePerSqFt: 6.85,
    image:
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=800",
    description:
      'Wide 7.5" engineered European White Oak designed to withstand Fraser Valley climate humidity shifts.',
    features: [
      "4mm real wood wear layer",
      "Multi-ply eucalyptus core",
      "Radiant heat compatible",
      "Wire brushed matte finish",
    ],
    specs: {
      plankWidth: '7.5"',
      thickness: '5/8"',
      wearLayer: "4mm European Oak",
      waterproof: false,
      warranty: "30-Year Residential",
      installType: "Float, Glue, or Staple",
    },
    popular: true,
    rating: 5.0,
    reviewCount: 58,
  },
  {
    id: "fvf-lvp-01",
    name: "Cultus Lake Rigid Core LVP",
    category: "vinyl",
    pricePerSqFt: 4.25,
    image:
      "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80&w=800",
    description:
      "100% Waterproof SPC Luxury Vinyl Plank featuring attached IXPE sound acoustic padding.",
    features: [
      "100% Waterproof SPC Core",
      "20mil heavy-duty wear layer",
      "Built-in acoustic underlayment",
      "Scratch & pet resistant",
    ],
    specs: {
      plankWidth: '9"',
      thickness: "6.5mm (5mm + 1.5mm pad)",
      wearLayer: "20mil with Ceramic Bead",
      waterproof: true,
      warranty: "Lifetime Residential / 10-Yr Commercial",
      installType: "Välinge Click Lock",
    },
    popular: true,
    rating: 4.9,
    reviewCount: 84,
  },
  {
    id: "fvf-lvp-02",
    name: "Sumas Coastal Walnut LVP",
    category: "vinyl",
    pricePerSqFt: 3.95,
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800",
    description:
      "Deep warm walnut tones with ultra-realistic synchronized embossed texture and painted bevels.",
    features: [
      "100% Waterproof",
      "20mil wear layer",
      "EIR embossed in register texture",
      "Kid & pet proof",
    ],
    specs: {
      plankWidth: '7"',
      thickness: "5mm + IXPE Pad",
      wearLayer: "20mil",
      waterproof: true,
      warranty: "Lifetime Residential",
      installType: "Click Lock",
    },
    popular: false,
    rating: 4.7,
    reviewCount: 36,
  },
  {
    id: "fvf-lam-01",
    name: "Mission Rustic Birch Laminate",
    category: "laminate",
    pricePerSqFt: 3.25,
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
    description:
      "High-density 12mm water-resistant laminate replicating authentic hand-scraped Canadian birch.",
    features: [
      "AC5 Commercial durability rating",
      "72-Hour water protection technology",
      "AC5 scratch resistant",
    ],
    specs: {
      plankWidth: '6.5"',
      thickness: "12mm",
      waterproof: true,
      warranty: "25-Year Residential",
      installType: "Uniclic System",
    },
    popular: false,
    rating: 4.6,
    reviewCount: 22,
  },
  {
    id: "fvf-tile-01",
    name: "Harrison Slate Porcelain Tile",
    category: "tile",
    pricePerSqFt: 5.75,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description:
      "Matte-finish 12x24 rectified porcelain tile inspired by natural mountain slate quarries.",
    features: [
      "Frost & moisture proof",
      "Rectified precision edges",
      "High slip resistance (DCOF > 0.42)",
    ],
    specs: {
      plankWidth: '12" x 24"',
      thickness: "9.5mm",
      waterproof: true,
      warranty: "Lifetime Structural",
      installType: "Thin-set Mortar & Grout",
    },
    popular: false,
    rating: 4.8,
    reviewCount: 19,
  },
  {
    id: "fvf-cpt-01",
    name: "Langley Plush Wool Blend Carpet",
    category: "carpet",
    pricePerSqFt: 4.85,
    image:
      "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&q=80&w=800",
    description:
      "Ultra-soft stain-resistant plush cut pile carpet perfect for Fraser Valley bedrooms and staircases.",
    features: ["Stainmaster spill resistance", "Soft touch fiber", "Hypoallergenic treatment"],
    specs: {
      thickness: '1/2" Pile',
      waterproof: false,
      warranty: "20-Year Texture Retention",
      installType: "Tack Strip & 8lb Memory Pad",
    },
    popular: true,
    rating: 4.9,
    reviewCount: 65,
  },
];

export const PROJECTS: ProjectShowcase[] = [
  {
    id: "proj-1",
    title: "Modern Farmhouse Renovation",
    location: "Abbotsford, BC",
    category: "engineered",
    afterImage:
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=800",
    description:
      "Replaced outdated carpet across 2,400 sq. ft. main floor with Abbotsford Wide-Plank Oak engineered hardwood.",
    sqft: 2400,
  },
  {
    id: "proj-2",
    title: "Waterfront Living Room & Kitchen",
    location: "Cultus Lake, BC",
    category: "vinyl",
    afterImage:
      "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80&w=800",
    description:
      "Installed 100% waterproof Cultus Lake Rigid Core LVP in a high-traffic lakeside family home.",
    sqft: 1850,
  },
  {
    id: "proj-3",
    title: "Heritage Home Restoration",
    location: "Chilliwack, BC",
    category: "hardwood",
    afterImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    description:
      "Precision solid white oak installation matching historic character with modern moisture sealing.",
    sqft: 3100,
  },
];

export const SERVICE_AREAS = [
  "Abbotsford",
  "Chilliwack",
  "Langley",
  "Mission",
  "Surrey",
  "White Rock",
  "Maple Ridge",
  "Hope",
  "Cultus Lake",
];
