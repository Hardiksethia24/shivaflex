export type ProductVariant = {
  slug: string;
  name: string;
  image: string;
  short?: string;
  features?: string[];
  sizes?: string;
  workingPressure?: string;
  burstingPressure?: string;
  applications?: string[];
};

export type Product = {
  slug: string;
  name: string;
  applications: string[];
  image: string;
  detailImage?: string;
  short: string;
  features: string[];
  sizes?: string;
  workingPressure?: string;
  burstingPressure?: string;
  variants?: ProductVariant[];
  variantLabel?: string; // e.g. "Variants" or "Sizes"
};

export type ProductFamily = Product;

export const applicationDetails = [
  {
    name: "Agriculture & Irrigation",
    description: "Suction, delivery, power-spray, and garden hose for farms, irrigation systems, and agrochemical application.",
    icon: "⌁",
  },
  {
    name: "Construction",
    description: "Water supply, pneumatic lines, ducting, and heavy delivery hose built for tough job-site conditions.",
    icon: "▥",
  },
  {
    name: "Mining & Quarry",
    description: "Heavy-duty suction pipe, rock-drill pneumatic lines, and steel-wire reinforced hose for abrasive handling.",
    icon: "◆",
  },
  {
    name: "Automotive & Car Wash",
    description: "High-pressure washing, power-spray, and compressed air lines engineered for service stations and wash bays.",
    icon: "◒",
  },
];

export const applications = [
  "Agriculture & Irrigation",
  "Construction",
  "Mining & Quarry",
  "Automotive & Car Wash",
];

export const productFamilyNames = [
  "Garden Pipe",
  "Power Spray Hose",
  "Braided Hose",
  "Delivery Pipe",
  "25 mm Pneumatic Hose",
  "Suction Pipe",
  "Super Car Washing Hose",
  "Thunder Steel Wire Hose",
  "Duct Hose",
  "5 Layer Hose",
  "Rock Drill Hose",
];

// Central product data for the 11 product families
export const products: Product[] = [
  {
    slug: "garden-pipe",
    name: "Garden Pipe",
    applications: ["Agriculture & Irrigation", "Construction"],
    image: "/images/products/garden-pipe.jpg",
    short: "Flexible PVC garden and utility piping available in five specialized material formulations.",
    features: [
      "Available in 5 tailored formulations for varied residential and agricultural duties",
      "Superior flexibility and kink resistance across weather conditions",
      "Reinforced outer surface resists scuffing, sun exposure, and everyday wear",
      "Smooth inner bore ensures maximum water delivery with low pressure drop",
    ],
    variantLabel: "Variants",
    variants: [
      {
        slug: "transparent",
        name: "Transparent",
        image: "/images/products/garden-pipe-transparent.jpg",
        short: "Clear flexible PVC garden hose allowing full visual flow monitoring.",
        features: [
          "Crystal-clear wall for instant visual inspection of fluid flow",
          "High flexibility for easy coiling and smooth garden routing",
          "Formulated with virgin PVC polymers for long service life",
        ],
      },
      {
        slug: "garden-foam",
        name: "Garden Foam",
        image: "/images/products/garden-pipe-garden-foam.jpg",
        short: "Foam-layered garden hose providing enhanced softness and kink-free handling.",
        features: [
          "Cushioned cellular foam construction absorbs bending stresses",
          "Soft-touch feel with high kink recovery",
          "Ideal for landscaping, nurseries, and domestic gardens",
        ],
      },
      {
        slug: "transparent-zebra",
        name: "Transparent Zebra",
        image: "/images/products/garden-pipe-transparent-zebra.jpg",
        short: "Distinctive striped pattern combining clear fluid visibility with exterior reinforcement.",
        features: [
          "Signature zebra spiral exterior stripe for increased structural rigidity",
          "Combines translucency with enhanced abrasion resistance",
          "Flexible and durable under continuous daily watering",
        ],
      },
      {
        slug: "shiva-gold",
        name: "Shiva Gold",
        image: "/images/products/garden-pipe-shiva-gold.jpg",
        short: "Premium heavy-gauge garden hose engineered for extended outdoor durability.",
        features: [
          "Heavy-duty wall thickness for demanding agricultural and nursery use",
          "Superior UV and weather resistance prevents cracking in direct sunlight",
          "Engineered for durability without sacrificing flexibility",
        ],
      },
      {
        slug: "nylon",
        name: "Nylon",
        image: "/images/products/garden-pipe-nylon.jpg",
        short: "Nylon-reinforced garden pipe built for higher delivery pressure and toughness.",
        features: [
          "Nylon yarn embedded reinforcement for superior burst resistance",
          "Eliminates bulging and kinking under tap and pump pressures",
          "Long-life compound suitable for rugged field conditions",
        ],
      },
    ],
  },
  {
    slug: "power-spray-hose",
    name: "Power Spray Hose",
    applications: ["Agriculture & Irrigation", "Automotive & Car Wash"],
    image: "/images/products/power-spray-hose.jpg",
    short: "High-pressure reinforced hose engineered for agricultural power sprayers and agrochemical delivery.",
    features: [
      "Engineered for high operating pressures of motorized power sprayers",
      "Chemical-resistant inner tube compatible with pesticides, insecticides, and weedicides",
      "Braided synthetic yarn reinforcement prevents bulging and pressure loss",
      "Weather and abrasion-resistant outer jacket stands up to rough terrain dragging",
    ],
  },
  {
    slug: "braided-hose",
    name: "Braided Hose",
    applications: ["Construction", "Agriculture & Irrigation", "Automotive & Car Wash"],
    image: "/images/products/braided-hose.jpg",
    short: "High-tensile yarn-reinforced flexible hose across air, water, and air conditioning drainage applications.",
    features: [
      "High-tensile synthetic yarn braiding between concentric PVC layers",
      "Exceptional burst resistance combined with high bending flexibility",
      "Resistant to atmospheric aging, mild chemicals, and surface abrasion",
      "Smooth inner bore ensures optimal fluid throughput and reduced friction",
    ],
    variantLabel: "Variants",
    variants: [
      {
        slug: "8mm-braided",
        name: "8mm Braided",
        image: "/images/products/braided-hose-8mm-braided.jpg",
        short: "Precision 8 mm internal bore braided hose for air lines, sprayers, and pneumatic tools.",
        features: [
          "8 mm precision internal diameter",
          "High burst rating for compressed air and spraying equipment",
          "Compact, lightweight, and easy to route through tight machinery spaces",
        ],
        sizes: "8 mm",
      },
      {
        slug: "coloured-braided",
        name: "Coloured Braided",
        image: "/images/products/braided-hose-coloured-braided.jpg",
        short: "Vibrant coloured outer cover for quick line identification in plants and workshops.",
        features: [
          "Color-coded outer layer facilitates easy identification in multi-line installations",
          "Braided reinforcement handles consistent utility pressures",
          "UV-stabilized compounds protect against discoloration and degradation",
        ],
      },
      {
        slug: "water-braided",
        name: "Water Braided",
        image: "/images/products/braided-hose-water-braided.jpg",
        short: "General-purpose braided water hose for industrial facilities, job sites, and gardens.",
        features: [
          "Heavy-duty water conveyance under line and pump pressure",
          "Kink-resistant braiding allows easy handling over long distances",
          "Abrasion-resistant cover built for construction and factory floors",
        ],
      },
      {
        slug: "braided-ac-drainage",
        name: "Braided AC Drainage",
        image: "/images/products/braided-hose-braided-ac-drainage.jpg",
        short: "Reinforced non-collapsing drainage hose for commercial and residential air-conditioning systems.",
        features: [
          "Engineered specifically for HVAC condensate and air conditioning drainage",
          "Reinforced wall prevents pinching and water stagnation inside conduits",
          "Resistant to mold, condensation, and chemical cleaners",
        ],
      },
    ],
  },
  {
    slug: "delivery-pipe",
    name: "Delivery Pipe",
    applications: ["Agriculture & Irrigation", "Construction"],
    image: "/images/products/delivery-pipe.jpg",
    short: "Flexible PVC delivery pipe for high-volume water conveyance, agricultural flood irrigation, and de-watering.",
    features: [
      "Engineered for open discharge and pump-delivery applications",
      "Flexible, rollable construction for quick deployment and retrieval in fields",
      "Smooth inner bore maximizes flow rate while minimizing pump head loss",
      "Tough exterior resists scuffing across gravel, soil, and concrete",
    ],
  },
  {
    slug: "25mm-pneumatic-hose",
    name: "25 mm Pneumatic Hose",
    applications: ["Construction", "Automotive & Car Wash"],
    image: "/images/products/25mm-pneumatic-hose.jpg",
    short: "Heavy-duty 25 mm compressed air hose engineered for pneumatic machinery, air compressors, and site tools.",
    features: [
      "25 mm bore for high-flow compressed air volume delivery",
      "Reinforced against pressure surges, vibration, and continuous compressor pulsation",
      "Oil-mist and ozone-resistant inner and outer compounds",
      "Flexible handling for workshops, construction bays, and manufacturing setups",
    ],
    sizes: "25 mm",
  },
  {
    slug: "suction-pipe",
    name: "Suction Pipe",
    applications: ["Agriculture & Irrigation", "Mining & Quarry", "Construction"],
    image: "/images/products/suction-pipe.jpg",
    short: "Spiral-reinforced suction pipe engineered for heavy vacuum, slurry intake, and de-watering operations.",
    features: [
      "Rigid PVC spiral helix reinforcement prevents collapse under full vacuum",
      "Smooth inner bore prevents solids accumulation and guarantees peak flow",
      "Engineered for abrasive slurries, river water intake, and site de-watering",
      "Weather and chemical resistant formulation ensures multi-season reliability",
    ],
    variantLabel: "Variants",
    variants: [
      {
        slug: "medium-duty",
        name: "Medium Duty",
        image: "/images/products/suction-pipe-medium-duty.jpg",
        short: "Medium Duty (Green) suction hose engineered for irrigation, agriculture, and general fluid transfer.",
        features: [
          "Spiral-reinforced PVC construction resists vacuum collapse",
          "Balanced flexibility and vacuum resistance for standard agricultural pump setups",
          "Smooth interior profile for unhindered liquid transfer",
        ],
      },
      {
        slug: "heavy-duty",
        name: "Heavy Duty",
        image: "/images/products/suction-pipe-heavy-duty.jpg",
        short: "Heavy Duty suction hose engineered for severe vacuum conditions, dewatering, and abrasive material transfer.",
        features: [
          "Reinforced spiral helix designed for higher vacuum and pump head duties",
          "Increased wall thickness for enhanced crush resistance on work sites",
          "Excellent bending radius for confined suction line installations",
        ],
      },
      {
        slug: "type-3",
        name: "Type 3",
        image: "/images/products/suction-pipe-type-3.jpg",
        short: "Suction Pipe Type 3 configuration engineered for demanding industrial, quarry, and mining suction.",
        features: [
          "Heavy-duty rigid spiral reinforcement for severe vacuum conditions",
          "Abrasion-resistant compound stands up to sand, gravel, and particulate slurries",
          "Extreme weather and impact resilience",
        ],
      },
    ],
  },
  {
    slug: "super-car-washing-hose",
    name: "Super Car Washing Hose",
    applications: ["Automotive & Car Wash"],
    image: "/images/products/super-car-washing-hose.jpg",
    short: "Commercial-grade high-pressure washing hose engineered specifically for service bays and detailing centers.",
    features: [
      "Available in 10 mm and 12 mm sizes for commercial pressure-washer equipment",
      "Reinforced high-tensile braided construction designed for continuous pressure cycles",
      "Abrasion-resistant outer jacket withstands continuous dragging across concrete wash floors",
      "Superior kink resistance ensures uninterrupted water delivery during active vehicle washing",
    ],
    variantLabel: "Sizes",
    variants: [
      {
        slug: "10mm",
        name: "10mm",
        image: "/images/products/super-car-washing-hose-10mm.jpg",
        short: "10 mm internal bore high-pressure car washing hose for compact pressure wash setups.",
        features: [
          "10 mm internal diameter for high-velocity spray pressure",
          "Lightweight and nimble handling around vehicle bodies",
          "Heavy braided reinforcement for commercial wash pumps",
        ],
        sizes: "10 mm",
      },
      {
        slug: "12mm",
        name: "12mm",
        image: "/images/products/super-car-washing-hose-12mm.jpg",
        short: "12 mm internal bore high-pressure car washing hose for maximum water volume and rinse throughput.",
        features: [
          "12 mm internal diameter for increased water volume and fast rinsing",
          "Heavy-duty construction rated for high-volume commercial service stations",
          "Enhanced outer wear layer against hot wash water and cleaning detergents",
        ],
        sizes: "12 mm",
      },
    ],
  },
  {
    slug: "thunder-steel-wire-hose",
    name: "Thunder Steel Wire Hose",
    applications: ["Mining & Quarry", "Construction", "Agriculture & Irrigation"],
    image: "/images/products/thunder-steel-wire-hose.jpg",
    detailImage: "/images/products/thunder-steel-wire-hose-closeup.jpg",
    short: "High-strength steel wire helix reinforced PVC hose for severe vacuum, pressure, and abrasive material transfer.",
    features: [
      "Embedded high-tensile spring steel wire helix guarantees zero collapse under full vacuum",
      "Withstands high working pressure and external mechanical crushing",
      "Transparent or semi-translucent wall enables clear visual monitoring of flow and blockages",
      "Ideal for suction and discharge of water, slurries, chemicals, and industrial fluids",
    ],
  },
  {
    slug: "duct-hose",
    name: "Duct Hose",
    applications: ["Construction", "Agriculture & Irrigation"],
    image: "/images/products/duct-hose.jpg",
    short: "Lightweight corrugated flexible ducting hose for air ventilation, fume extraction, and dust collection.",
    features: [
      "Extremely lightweight and flexible corrugated exterior with smooth air passage",
      "Tight bend radius for routing through machine enclosures, ducts, and ceiling cavities",
      "Designed for dust collection, woodworking exhaust, agricultural grain/chaff conveying, and fumes",
      "Resistant to atmospheric weathering, moisture, and mild corrosive fumes",
    ],
  },
  {
    slug: "5-layer-hose",
    name: "5 Layer Hose",
    applications: ["Agriculture & Irrigation", "Construction"],
    image: "/images/products/5-layer-hose.jpg",
    short: "Advanced 5-layer composite hose engineered for superior pressure retention, UV protection, and longevity.",
    features: [
      "Specialized 5-layer composite construction prevents delamination and bursting",
      "Knitted high-tenacity yarn reinforcement eliminates twisting and knotting under pressure",
      "Anti-algae inner layer protects fluid purity; UV-resistant outer layer withstands sunlight",
      "Exceptional elasticity and flexibility in both extreme summer heat and cold mornings",
    ],
  },
  {
    slug: "rock-drill-hose",
    name: "Rock Drill Hose",
    applications: ["Mining & Quarry", "Construction"],
    image: "/images/products/rock-drill-hose.jpg",
    short: "Extra heavy-duty pneumatic hose built for rock drills, jackhammers, and quarry blasting machinery.",
    features: [
      "Built for severe pulsating compressed air pressures in heavy drilling operations",
      "Heavy-duty outer cover resists gouges, sharp rock abrasions, and rough ground dragging",
      "Oil-mist resistant inner tube compatible with air-line lubricators",
      "Engineered to meet tough mining, quarrying, and foundation-drilling safety demands",
    ],
  },
];

export const getProduct = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);

export const getProductFamily = getProduct;
