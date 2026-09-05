export type Product = {
  slug: string;
  name: string;
  family: "Suction Hose" | "Braided Hose" | "Delivery Hose" | "Specialty Hose";
  applications: string[];
  image: string;
  short: string;
  features: string[];
  sizes: string;
  workingPressure: string;
  burstingPressure: string;
  exactSpecs?: boolean;
};

export const familyDescriptions: Record<string, string> = {
  "Suction Hose": "Rigid enough to hold shape under vacuum, flexible enough to route anywhere.",
  "Braided Hose": "Reinforced construction across air, water, welding, and car-wash applications.",
  "Delivery Hose": "General suction and delivery of water and fluids.",
  "Specialty Hose": "Application-specific hose lines engineered for demanding operational conditions.",
};

export const applicationDetails = [
  {
    name: "Agriculture & Irrigation",
    description: "Suction, delivery, and spray hose for fields, farms, and pesticide application.",
    icon: "⌁",
  },
  {
    name: "Construction",
    description: "Water supply and delivery hose built for job-site conditions.",
    icon: "▥",
  },
  {
    name: "Mining & Quarry",
    description: "Heavy-duty suction hose rated for abrasive material handling.",
    icon: "◆",
  },
  {
    name: "Welding & Gas",
    description: "Oxy-acetylene welding hose in dual red/blue construction.",
    icon: "✦",
  },
  {
    name: "Automotive & Car Wash",
    description: "High-pressure spray and washing hose for service stations.",
    icon: "◒",
  },
  {
    name: "Fire & Safety",
    description: "Reliable delivery hose for firefighting equipment.",
    icon: "✚",
  },
];

export const applications = [
  "Agriculture & Irrigation",
  "Construction",
  "Mining & Quarry",
  "Welding & Gas",
  "Automotive & Car Wash",
  "Fire & Safety",
];

export const productFamilies = [
  "Suction Hose",
  "Braided Hose",
  "Delivery Hose",
  "Specialty Hose",
];

// Master product and photography-shot list. Keep client [TODO] markers intact.
export const products: Product[] = [
  {
    slug: "medium-duty-green-hose",
    name: "Medium Duty (Green) Suction Hose",
    family: "Suction Hose",
    applications: ["Agriculture & Irrigation", "Construction"],
    image: "/images/products/medium-duty-green-hose.jpg",
    short: "Light, flexible suction and delivery for irrigation and light-chemical use.",
    features: [
      "Lightweight and flexible",
      "Designed to resist kinking and bursting",
      "High vacuum and pressure resistance",
      "Suitable for saline water and light acids/alkalis; not for solvents",
    ],
    sizes: "20 mm–200 mm I.D.",
    workingPressure: "3.5–7 kg/cm²",
    burstingPressure: "8–24 kg/cm²",
    exactSpecs: true,
  },
  {
    slug: "heavy-duty-hose",
    name: "Heavy Duty Suction Hose",
    family: "Suction Hose",
    applications: ["Mining & Quarry", "Construction", "Fire & Safety"],
    image: "/images/products/heavy-duty-hose.jpg",
    short: "Abrasion-resistant construction for mining, quarrying, and industrial suction.",
    features: [
      "High external-impact resistance",
      "Resists kinking, bulging and bursting",
      "For serious suction and delivery conditions",
      "Suitable for abrasive materials",
    ],
    sizes: "20 mm–200 mm I.D.",
    workingPressure: "2.5–5 kg/cm²",
    burstingPressure: "6–25 kg/cm²",
    exactSpecs: true,
  },
  {
    slug: "flex-duct-hose",
    name: "Flex Duct Hose",
    family: "Suction Hose",
    applications: ["Construction", "Agriculture & Irrigation"],
    image: "/images/products/flex-duct-hose.jpg",
    short: "Lightweight, corrugated hose for air, dust, and material conveying.",
    features: [
      "Very lightweight and easy to handle",
      "Rigid outer reinforcement",
      "For air, gases, fumes and dust",
      "Also available with heavy square-corrugated outer surface",
    ],
    sizes: "20 mm–200 mm I.D.",
    workingPressure: "[TODO: confirm with client]",
    burstingPressure: "[TODO: confirm with client]",
    exactSpecs: true,
  },
  {
    slug: "transparent-pneumatic-hose",
    name: "Transparent & Pneumatic Hose",
    family: "Braided Hose",
    applications: ["Automotive & Car Wash", "Construction"],
    image: "/images/products/transparent-pneumatic-hose.jpg",
    short: "Clear-body hose for visual flow monitoring in air and water lines.",
    features: [
      "Transparent construction for visual flow checks",
      "Flexible routing",
      "For pneumatic and general utility use",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "water-hose",
    name: "Water Hose",
    family: "Braided Hose",
    applications: ["Construction", "Agriculture & Irrigation"],
    image: "/images/products/water-hose.jpg",
    short: "General-purpose water delivery for sites, gardens, and facilities.",
    features: [
      "Flexible braided construction",
      "For routine water supply and transfer",
      "Available in application-specific configurations",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "garden-hose",
    name: "Garden Hose",
    family: "Braided Hose",
    applications: ["Agriculture & Irrigation"],
    image: "/images/products/garden-hose.jpg",
    short: "General-purpose water delivery for sites, gardens, and facilities.",
    features: [
      "Easy handling",
      "Suitable for gardening and irrigation",
      "Custom lengths on request",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "construction-water-hose",
    name: "Construction Water Hose",
    family: "Braided Hose",
    applications: ["Construction"],
    image: "/images/products/construction-water-hose.jpg",
    short: "General-purpose water delivery for sites, gardens, and facilities.",
    features: [
      "Built for site water delivery",
      "Flexible handling",
      "Available to required length",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "welding-hose",
    name: "Welding Hose",
    family: "Braided Hose",
    applications: ["Welding & Gas"],
    image: "/images/products/welding-hose.jpg",
    short: "Dual-line red and blue hose built for oxy-acetylene work.",
    features: [
      "Red and blue identification",
      "Flexible routing around work areas",
      "For welding and gas use",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "super-spray-hose",
    name: "Spray Hose",
    family: "Braided Hose",
    applications: ["Agriculture & Irrigation", "Automotive & Car Wash"],
    image: "/images/products/super-spray-hose.jpg",
    short: "High-pressure hose for agricultural and chemical spraying.",
    features: [
      "Designed for spray applications",
      "Flexible field use",
      "Suitable for client-specific lengths",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "car-washing-power-hose",
    name: "Car Washing Power Hose",
    family: "Braided Hose",
    applications: ["Automotive & Car Wash"],
    image: "/images/products/car-washing-power-hose.jpg",
    short: "Built for repeated high-pressure use at wash bays and service stations.",
    features: [
      "Flexible car-wash routing",
      "For power washing applications",
      "Available on request by requirement",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "five-layer-hose",
    name: "Five Layer Hose",
    family: "Braided Hose",
    applications: ["Agriculture & Irrigation", "Construction"],
    image: "/images/products/five-layer-hose.jpg",
    short: "Reinforced construction across air, water, welding, and car-wash applications.",
    features: [
      "Five-layer construction",
      "Flexible handling",
      "Application-led selection support",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "delivery-hose-pipe",
    name: "Delivery Hose Pipe",
    family: "Delivery Hose",
    applications: ["Agriculture & Irrigation", "Construction", "Fire & Safety"],
    image: "/images/products/delivery-hose-pipe.jpg",
    short: "General suction and delivery of water and fluids.",
    features: [
      "For water delivery duties",
      "Flexible PVC construction",
      "Custom packaging available on request",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "power-spray-hose",
    name: "Power Spray Hose",
    family: "Specialty Hose",
    applications: ["Agriculture & Irrigation"],
    image: "/images/products/power-spray-hose.jpg",
    short: "Heavier-duty spray hose for high-volume agrochemical application.",
    features: [
      "For power spray equipment",
      "Flexible in field operation",
      "Specify required application when requesting a quote",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "rock-drill-hose",
    name: "Rock Drill Hose",
    family: "Specialty Hose",
    applications: ["Mining & Quarry", "Construction"],
    image: "/images/products/rock-drill-hose.jpg",
    short: "Rated for pneumatic drilling equipment.",
    features: [
      "For drilling applications",
      "Designed for industrial work sites",
      "Discuss duty conditions with sales",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "car-washing-hose",
    name: "Car Washing Hose",
    family: "Specialty Hose",
    applications: ["Automotive & Car Wash"],
    image: "/images/products/car-washing-hose.jpg",
    short: "Built for repeated high-pressure use at wash bays and service stations.",
    features: [
      "For wash-bay use",
      "Flexible and easy to route",
      "Suitable for client-specific requirements",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "thunder-hose",
    name: "Thunder Hose",
    family: "Specialty Hose",
    applications: ["Construction", "Mining & Quarry"],
    image: "/images/products/thunder-hose.jpg",
    short: "Shivaflex specialty hose line for industrial applications.",
    features: [
      "Specialty hose line",
      "Application-specific selection",
      "Contact sales for confirmed construction and rating",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
  {
    slug: "garden-tubing",
    name: "Garden Tubing",
    family: "Specialty Hose",
    applications: ["Agriculture & Irrigation"],
    image: "/images/products/garden-tubing.jpg",
    short: "General-purpose water delivery for sites, gardens, and facilities.",
    features: [
      "Flexible garden-use tubing",
      "For routine irrigation",
      "Custom length options on request",
    ],
    sizes: "[TODO: confirm sizes]",
    workingPressure: "[TODO: confirm pressure]",
    burstingPressure: "[TODO: confirm pressure]",
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
