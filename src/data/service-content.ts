export type ServiceContent = {
  tagline: string;
  description: string[];
  localCopy: string;
  benefits: string[];
  applications: string[];
  faqs: { q: string; a: string }[];
};

const locations = "Abbotsford, Surrey, Langley, Chilliwack, Mission, Maple Ridge, and Delta";
const warranty = (name: string) => [
  { q: `Do you offer warranties on ${name.toLowerCase()}?`, a: `Yes, ${name.toLowerCase()} include manufacturer and workmanship warranties.` },
  { q: "Do you serve all of the Fraser Valley?", a: `Yes, across ${locations}.` },
];

export const serviceContent: Record<string, ServiceContent> = {
  "epoxy-coatings": {
    tagline: "Durable, glossy epoxy systems for garages, shops & commercial floors.",
    description: ["Our high-performance epoxy coatings transform tired concrete into a stunning, hard-wearing surface that resists chemicals, abrasion, and impact. Engineered for Fraser Valley's climate, our systems bond tightly to properly prepared concrete for decades of service.", "Whether you want a sleek solid color, a metallic finish, or a decorative full-flake system, we mix and broadcast on-site to your exact specifications."],
    localCopy: `Fraser Valley Floors provides professional epoxy coatings for residential garages, workshops, and showrooms throughout ${locations}. Every project starts with an on-site assessment and a clear written estimate.`,
    benefits: ["Chemical, oil and stain resistant", "High-gloss, easy-to-clean finish", "Slip-resistant texture options", "Bonded to professionally prepared concrete", "Backed by manufacturer + workmanship warranty"],
    applications: ["Residential Garages", "Workshops", "Showrooms", "Commercial Kitchens", "Retail Spaces"],
    faqs: [{ q: "How long does an epoxy coatings installation take?", a: "Most residential garages are completed in 1–2 days, while larger commercial spaces typically take 3–5 days depending on square footage and surface prep required." }, { q: "How do I get a quote?", a: "Fill out our free quote form or call us directly — we respond within one business day with a written estimate." }, ...warranty("Epoxy Coatings")],
  },
  "garage-coatings": {
    tagline: "Premium polyaspartic and epoxy systems built for daily abuse.",
    description: ["Your garage floor takes a beating from vehicle traffic, dropped tools, road salt, and oil spills. Our garage coating systems combine industrial-strength polyaspartic or epoxy resins with decorative flake broadcasts to create a floor that looks showroom-ready and holds up to years of daily use.", "We tailor each system to how you actually use your garage — whether it's parking, a home gym, or a full workshop — so the coating performs exactly where you need it most."],
    localCopy: `Fraser Valley Floors installs garage coatings for homeowners throughout ${locations}. Every job includes proper diamond grinding, crack repair, and a full moisture assessment before coating.`,
    benefits: ["Withstands hot tires and heavy vehicle traffic", "Resists road salt, oil, and antifreeze stains", "Fast-curing polyaspartic options (ready in 24 hours)", "Decorative flake and color-flake finishes available", "Backed by manufacturer + workmanship warranty"],
    applications: ["Residential Garages", "Home Workshops", "Home Gyms", "Multi-Car Garages", "Carports"],
    faqs: [{ q: "How long does a garage coating installation take?", a: "Most single or double garages are completed in 1–2 days; polyaspartic systems can often be walked on the same day." }, { q: "How do I get a quote?", a: "Request a free written estimate through our quote form or by phone — we respond within one business day." }, ...warranty("Garage Coatings")],
  },
  "warehouse-coatings": {
    tagline: "Heavy-duty industrial flooring for warehouses & distribution centres.",
    description: ["Warehouse floors face forklift traffic, pallet racking, chemical exposure, and constant foot and equipment movement. Our warehouse coating systems use commercial-grade epoxy and polyaspartic resins engineered for heavy industrial loads, with options for anti-static, chemical-resistant, and high-traffic line-marking finishes.", "We work around your operational schedule, offering phased installations and rapid-cure systems to minimize downtime for your business."],
    localCopy: `Fraser Valley Floors serves distribution centres, manufacturing facilities, and warehouses throughout ${locations}, with on-site assessments and detailed project timelines.`,
    benefits: ["Engineered for forklift and heavy equipment traffic", "Chemical, oil, and abrasion resistant", "Line-marking and safety zone striping available", "Fast-cure options to reduce facility downtime", "Backed by manufacturer + workmanship warranty"],
    applications: ["Distribution Centres", "Manufacturing Plants", "Storage Warehouses", "Loading Bays", "Industrial Facilities"],
    faqs: [{ q: "How long does a warehouse coating installation take?", a: "Timelines depend on square footage, but most warehouse projects run 3–7 days; we offer phased scheduling to keep parts of your facility operational." }, { q: "How do I get a quote?", a: "Contact us for an on-site assessment and free written estimate — we typically respond within one business day." }, ...warranty("Warehouse Coatings")],
  },
  "patio-coatings": {
    tagline: "UV-stable decorative coatings that turn patios into outdoor living rooms.",
    description: ["Concrete patios crack, stain, and fade under BC's rain and sun. Our patio coating systems use UV-stable polyaspartic and polyurethane resins that resist yellowing, moisture intrusion, and slipping — while decorative flake and color options give your outdoor space a finished, elevated look.", "Because these systems cure quickly and resist water, they're ideal for our region's wet winters and sunny summers alike."],
    localCopy: `Fraser Valley Floors installs patio coatings for homeowners across ${locations}, with slip-resistant textures suited to outdoor use.`,
    benefits: ["UV-stable, won't yellow or fade in sunlight", "Slip-resistant texture for wet conditions", "Resists moisture intrusion and cracking", "Fast-curing, weather-tolerant application", "Backed by manufacturer + workmanship warranty"],
    applications: ["Backyard Patios", "Pool Decks", "Outdoor Kitchens", "Covered Porches", "Entryways"],
    faqs: [{ q: "How long does a patio coating installation take?", a: "Most residential patios are completed in 1–2 days, weather permitting." }, { q: "How do I get a quote?", a: "Request a free written estimate through our quote form — we respond within one business day." }, ...warranty("Patio Coatings")],
  },
  "polyaspartic-coatings": {
    tagline: "Fast-curing, UV-stable coatings for garages, showrooms & industrial floors.",
    description: ["Polyaspartic coatings are one of the most advanced concrete coating technologies available — curing in hours instead of days, resisting UV fading, and standing up to extreme abrasion. They're ideal for homeowners and businesses who need a durable floor without long downtime.", "Unlike traditional epoxy, polyaspartic systems can be applied in a wider range of temperatures, making them a reliable option year-round in the Fraser Valley climate."],
    localCopy: `Fraser Valley Floors installs polyaspartic coatings for residential garages, commercial showrooms, and industrial spaces throughout ${locations}.`,
    benefits: ["Cures in hours — often ready to walk on same day", "UV-stable, won't yellow like standard epoxy", "Extremely abrasion and impact resistant", "Can be applied in a wider temperature range", "Backed by manufacturer + workmanship warranty"],
    applications: ["Residential Garages", "Auto Showrooms", "Retail Floors", "Industrial Facilities", "Commercial Entryways"],
    faqs: [{ q: "How long does a polyaspartic coating installation take?", a: "Many projects are completed in as little as 1 day due to the rapid cure time." }, { q: "How do I get a quote?", a: "Fill out our quote form or call us for a free written estimate within one business day." }, ...warranty("Polyaspartic Coatings")],
  },
  "polyurethane-coatings": {
    tagline: "Flexible, chemical-resistant coatings for demanding commercial floors.",
    description: ["Polyurethane coatings offer excellent chemical and thermal resistance, making them a top choice for food processing plants, commercial kitchens, and facilities exposed to harsh cleaning agents. Their flexible finish resists cracking under thermal shock and heavy point loads.", "We often pair polyurethane top coats with an epoxy base layer to combine strong adhesion with superior surface durability."],
    localCopy: `Fraser Valley Floors provides polyurethane coating systems for commercial and industrial clients across ${locations}.`,
    benefits: ["Superior chemical and thermal shock resistance", "Flexible finish resists cracking under heavy loads", "Ideal for washdown and food-grade environments", "Excellent long-term UV and abrasion resistance", "Backed by manufacturer + workmanship warranty"],
    applications: ["Commercial Kitchens", "Food Processing Plants", "Chemical Storage Rooms", "Parking Structures", "Manufacturing Floors"],
    faqs: [{ q: "How long does a polyurethane coating installation take?", a: "Most projects take 2–4 days depending on the number of coats and curing requirements." }, { q: "How do I get a quote?", a: "Contact us for an on-site assessment and free written estimate." }, ...warranty("Polyurethane Coatings")],
  },
  "decorative-concrete": {
    tagline: "Custom stains, stamps & finishes that turn plain concrete into a design feature.",
    description: ["Decorative concrete lets you transform plain grey slabs into a genuine design element — through acid staining, stamped patterns, engraved designs, or polished finishes. It's a cost-effective way to get the look of stone, wood, or tile at a fraction of the price.", "Every decorative concrete project is customized on-site to match your color palette, texture preferences, and the character of your home or business."],
    localCopy: `Fraser Valley Floors designs and installs decorative concrete finishes for homeowners and businesses throughout ${locations}.`,
    benefits: ["Custom stains, stamps, and engraved patterns", "Far more affordable than natural stone or tile", "Sealed finish resists staining and wear", "Wide range of colors and textures available", "Backed by manufacturer + workmanship warranty"],
    applications: ["Driveways", "Walkways", "Pool Decks", "Patios", "Commercial Entryways"],
    faqs: [{ q: "How long does a decorative concrete installation take?", a: "Timelines vary by technique, but most residential projects take 2–4 days including curing and sealing." }, { q: "How do I get a quote?", a: "Request a free written estimate — we'll walk through design options during your on-site consultation." }, ...warranty("Decorative Concrete")],
  },
  "food-safe-coatings": {
    tagline: "NSF-compliant flooring systems built for food safety and hygiene.",
    description: ["Food processing and preparation environments require flooring that withstands constant washdowns, temperature swings, and strict hygiene standards. Our food-safe coating systems are seamless, non-porous, and resistant to bacteria growth — helping you meet health and safety compliance requirements.", "We offer slip-resistant textures and coved base options to eliminate hard-to-clean corners, a common source of contamination in food environments."],
    localCopy: `Fraser Valley Floors installs food-safe coatings for commercial kitchens, processing plants, and food service businesses throughout ${locations}.`,
    benefits: ["Seamless, non-porous surface resists bacteria", "Withstands frequent washdowns and steam cleaning", "Slip-resistant textures for wet work environments", "Coved base options for full hygienic compliance", "Backed by manufacturer + workmanship warranty"],
    applications: ["Commercial Kitchens", "Food Processing Plants", "Bakeries", "Breweries", "Meat & Seafood Facilities"],
    faqs: [{ q: "How long does a food-safe coating installation take?", a: "Most commercial kitchen projects take 2–3 days; larger processing facilities may take longer depending on square footage." }, { q: "How do I get a quote?", a: "Contact us for a site assessment — we'll confirm compliance requirements and provide a written estimate." }, ...warranty("Food Safe Coatings")],
  },
  "studio-coatings": {
    tagline: "Sleek, durable flooring for dance, fitness, and creative studios.",
    description: ["Studios need flooring that's both visually striking and functionally durable — whether it's a dance studio, yoga space, photography studio, or fitness gym. Our studio coating systems offer smooth, seamless finishes with options for shock-absorbing underlayment and custom colors that match your brand.", "We work closely with studio owners to balance aesthetics with performance, ensuring the floor supports the activity it's built for."],
    localCopy: `Fraser Valley Floors installs studio flooring for businesses throughout ${locations}.`,
    benefits: ["Smooth, seamless, low-maintenance finish", "Custom colors to match your studio's brand", "Shock-absorbing underlayment options available", "Slip-resistant textures for active use", "Backed by manufacturer + workmanship warranty"],
    applications: ["Dance Studios", "Fitness & Yoga Studios", "Photography Studios", "Art Studios", "Recording Studios"],
    faqs: [{ q: "How long does a studio coating installation take?", a: "Most studio spaces are completed in 2–3 days depending on size and finish complexity." }, { q: "How do I get a quote?", a: "Reach out for a free consultation and written estimate tailored to your studio's needs." }, ...warranty("Studio Coatings")],
  },
  "shops-coatings": {
    tagline: "Rugged, easy-to-clean flooring built for busy retail and repair shops.",
    description: ["Retail shops, auto repair bays, and small manufacturing shops need flooring that can handle constant foot traffic, dropped tools, and chemical spills — while still looking professional to customers. Our shop coating systems combine industrial durability with a clean, polished appearance.", "We customize the finish and color to fit your shop's brand and the specific wear patterns of your business."],
    localCopy: `Fraser Valley Floors installs shop coatings for businesses throughout ${locations}.`,
    benefits: ["Handles heavy foot and equipment traffic", "Resists oil, chemicals, and shop fluids", "Easy to clean and maintain daily", "Custom colors to match your shop's branding", "Backed by manufacturer + workmanship warranty"],
    applications: ["Auto Repair Shops", "Retail Stores", "Small Manufacturing Shops", "Tool & Equipment Shops", "Service Bays"],
    faqs: [{ q: "How long does a shop coating installation take?", a: "Most shop floors are completed in 1–3 days depending on size and traffic requirements." }, { q: "How do I get a quote?", a: "Request a free written estimate — we'll assess your shop and provide a clear timeline." }, ...warranty("Shop Coatings")],
  },
  "vinyl-flooring": {
    tagline: "Waterproof, low-maintenance vinyl flooring for every room in your home.",
    description: ["Vinyl flooring offers the perfect blend of style, durability, and affordability. With realistic wood and stone-look finishes, our luxury vinyl plank and tile options are 100% waterproof — making them ideal for kitchens, bathrooms, and basements as well as living spaces throughout your home.", "We help you choose the right thickness, wear layer, and finish for your household's traffic and lifestyle needs."],
    localCopy: `Fraser Valley Floors supplies and installs vinyl flooring for homeowners throughout ${locations}.`,
    benefits: ["100% waterproof, ideal for kitchens & bathrooms", "Realistic wood and stone-look finishes", "Scratch and dent resistant wear layer", "Comfortable underfoot with sound-dampening options", "Backed by manufacturer + workmanship warranty"],
    applications: ["Kitchens", "Bathrooms", "Basements", "Living Rooms", "Rental Properties"],
    faqs: [{ q: "How long does a vinyl flooring installation take?", a: "Most residential rooms are completed in 1–2 days depending on square footage and subfloor prep." }, { q: "How do I get a quote?", a: "Fill out our quote form or call us for a free written estimate." }, ...warranty("Vinyl Flooring")],
  },
  "laminate-flooring": {
    tagline: "Affordable, durable laminate flooring with the look of real hardwood.",
    description: ["Laminate flooring delivers the warm, natural look of hardwood at a more budget-friendly price point, with a tough wear layer that resists scratches and fading. It's an excellent choice for busy households and rental properties that need style without high maintenance.", "We install laminate with proper underlayment and expansion gaps to ensure a long-lasting, squeak-free floor."],
    localCopy: `Fraser Valley Floors supplies and installs laminate flooring for homeowners throughout ${locations}.`,
    benefits: ["Realistic hardwood look at an affordable price", "Scratch and fade resistant wear layer", "Easy to clean and maintain", "Wide range of plank styles and colors", "Backed by manufacturer + workmanship warranty"],
    applications: ["Living Rooms", "Bedrooms", "Home Offices", "Rental Properties", "Hallways"],
    faqs: [{ q: "How long does a laminate flooring installation take?", a: "Most rooms are completed in 1–2 days depending on size and subfloor condition." }, { q: "How do I get a quote?", a: "Request a free written estimate through our quote form." }, ...warranty("Laminate Flooring")],
  },
  "hardwood-flooring": {
    tagline: "Timeless solid and engineered hardwood flooring for lasting value.",
    description: ["Nothing matches the warmth and long-term value of genuine hardwood flooring. We supply and install both solid and engineered hardwood in a range of species, stains, and plank widths — built to be refinished and enjoyed for generations.", "Our team handles acclimation, subfloor prep, and finishing to make sure your hardwood floor performs beautifully in the Fraser Valley's humidity and seasonal changes."],
    localCopy: `Fraser Valley Floors supplies and installs hardwood flooring for homeowners throughout ${locations}.`,
    benefits: ["Solid and engineered hardwood options", "Adds long-term resale value to your home", "Can be sanded and refinished over decades", "Wide selection of species, stains, and widths", "Backed by manufacturer + workmanship warranty"],
    applications: ["Living Rooms", "Dining Rooms", "Bedrooms", "Home Offices", "Entryways"],
    faqs: [{ q: "How long does a hardwood flooring installation take?", a: "Most projects take 3–5 days including acclimation, installation, and finishing." }, { q: "How do I get a quote?", a: "Contact us for a free consultation and written estimate." }, ...warranty("Hardwood Flooring")],
  },
  "carpet-tiles": {
    tagline: "Modular carpet tiles for flexible, easy-to-maintain commercial & home spaces.",
    description: ["Carpet tiles offer the comfort of carpet with the practicality of a modular system — individual tiles can be replaced if damaged or stained, without redoing the whole floor. They're a popular choice for offices, basements, and home theaters where comfort and easy upkeep both matter.", "We help you choose tile patterns and colors that hide wear while fitting your space's design."],
    localCopy: `Fraser Valley Floors supplies and installs carpet tiles for residential and commercial clients throughout ${locations}.`,
    benefits: ["Individual tiles replaceable without full floor removal", "Sound-dampening and comfortable underfoot", "Wide range of patterns and colors", "Ideal for high-traffic commercial spaces", "Backed by manufacturer + workmanship warranty"],
    applications: ["Home Offices", "Basements", "Commercial Offices", "Home Theaters", "Playrooms"],
    faqs: [{ q: "How long does a carpet tile installation take?", a: "Most spaces are completed in 1–2 days depending on square footage." }, { q: "How do I get a quote?", a: "Fill out our quote form for a free written estimate." }, ...warranty("Carpet Tiles")],
  },
  "custom-stairs": {
    tagline: "Beautifully finished custom stairs that tie your whole home together.",
    description: ["Stairs are one of the most visible features in any home, and mismatched or worn stair finishes can undercut an otherwise beautiful flooring project. We build and finish custom stairs — treads, risers, and railings — to seamlessly match your new hardwood, laminate, or vinyl flooring.", "Every staircase is measured and built on-site to fit your home's exact dimensions and style."],
    localCopy: `Fraser Valley Floors designs and installs custom stairs for homeowners throughout ${locations}.`,
    benefits: ["Seamlessly matched to your existing flooring", "Built and finished to your home's exact measurements", "Durable finishes built for daily foot traffic", "Range of wood species and stain options", "Backed by manufacturer + workmanship warranty"],
    applications: ["Staircases", "Landings", "Hallway Transitions", "Entryways", "Basement Stairs"],
    faqs: [{ q: "How long does a custom stairs installation take?", a: "Most staircases are completed in 2–4 days depending on complexity and number of steps." }, { q: "How do I get a quote?", a: "Contact us for a free on-site measurement and written estimate." }, ...warranty("Custom Stairs")],
  },
  "self-leveling-floors": {
    tagline: "Precision self-leveling underlayment for a perfectly flat foundation.",
    description: ["An uneven subfloor causes problems for every flooring type — cracked tile, gapping laminate, and squeaky hardwood. Our self-leveling floor systems pour a smooth, precise underlayment that corrects dips, slopes, and imperfections, giving your new flooring the flat foundation it needs to last.", "This is often the essential first step before installing tile, hardwood, vinyl, or epoxy coatings over an older or damaged subfloor."],
    localCopy: `Fraser Valley Floors provides self-leveling floor prep for residential and commercial projects throughout ${locations}.`,
    benefits: ["Corrects uneven, sloped, or damaged subfloors", "Creates the ideal base for tile, hardwood, or vinyl", "Fast-curing, minimal project delay", "Reduces cracking and gapping in finished floors", "Backed by manufacturer + workmanship warranty"],
    applications: ["Pre-Renovation Subfloor Prep", "Older Homes", "Commercial Retrofits", "Basement Floors", "Uneven Concrete Slabs"],
    faqs: [{ q: "How long does a self-leveling floor installation take?", a: "Most self-leveling pours cure within 24–48 hours before the next flooring layer can be installed." }, { q: "How do I get a quote?", a: "Request a free on-site assessment — we'll determine if self-leveling is needed for your project." }, ...warranty("Self-Leveling Floors")],
  },
  "floor-demo": {
    tagline: "Clean, efficient removal of old flooring to prep your space for a fresh start.",
    description: ["Before any new flooring goes down, old tile, carpet, vinyl, or hardwood often needs to be safely and cleanly removed. Our floor demolition service handles the full teardown — including adhesive removal and debris haul-away — so your subfloor is ready for the next installation without delay.", "We take care to protect surrounding walls, trim, and fixtures during every demolition project."],
    localCopy: `Fraser Valley Floors provides floor demolition and removal services for homeowners and businesses throughout ${locations}.`,
    benefits: ["Full removal of tile, carpet, vinyl, and hardwood", "Adhesive and debris removal included", "Protects surrounding walls and fixtures", "Prepares subfloor for immediate reinstallation", "Backed by workmanship guarantee"],
    applications: ["Renovation Prep", "Old Tile Removal", "Carpet Removal", "Damaged Hardwood Removal", "Commercial Retrofits"],
    faqs: [{ q: "How long does floor demolition take?", a: "Most residential rooms are cleared in a single day; larger commercial spaces may take 2–3 days." }, { q: "How do I get a quote?", a: "Contact us for a free on-site assessment and written estimate." }, ...warranty("Floor Demolition")],
  },
};
