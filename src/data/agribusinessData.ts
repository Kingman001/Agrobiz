import {
  ProducePillar,
  RoadmapPhase,
  SmallholderService,
  MarketPriceItem,
  EquipmentItem,
  TrainingCourse,
  CompanySettings
} from '../types';

export const defaultCompanySettings: CompanySettings = {
  name: "Glean Agro",
  tagline: "Redefining Agribusiness & Smallholder Ecosystems in Nigeria",
  foundingYear: "2023",
  location: "Office: No. 5B Old Sokoto Road MTD Hanwa Zaria, Kaduna State | Farm: Gazara, Makarfi, Kaduna State, Nigeria",
  officeAddress: "No. 5B Old Sokoto Road MTD Hanwa Zaria, Kaduna State, Nigeria",
  farmLocation: "Gazara, Makarfi, Kaduna State, Nigeria",
  email: "info@gleanagrong.com",
  phone: "+234 813 440 7110",
  whatsapp: "+234 703 596 1713"
};

export interface GrowthMetricPoint {
  year: string;
  maizeYieldTonsPerHa: number;
  smallholderIncomeNaira: number;
  postHarvestLossPercent: number;
  outgrowerNetworkCount: number;
  aquacultureProductionTons: number;
}

export const yieldGrowthData: GrowthMetricPoint[] = [
  {
    year: "2022 (Baseline)",
    maizeYieldTonsPerHa: 1.8,
    smallholderIncomeNaira: 450000,
    postHarvestLossPercent: 38,
    outgrowerNetworkCount: 1200,
    aquacultureProductionTons: 25
  },
  {
    year: "2023 (Phase 1)",
    maizeYieldTonsPerHa: 3.2,
    smallholderIncomeNaira: 820000,
    postHarvestLossPercent: 24,
    outgrowerNetworkCount: 3800,
    aquacultureProductionTons: 60
  },
  {
    year: "2024 (Phase 2)",
    maizeYieldTonsPerHa: 4.8,
    smallholderIncomeNaira: 1450000,
    postHarvestLossPercent: 14,
    outgrowerNetworkCount: 7500,
    aquacultureProductionTons: 110
  },
  {
    year: "2025 (Phase 3)",
    maizeYieldTonsPerHa: 6.1,
    smallholderIncomeNaira: 2200000,
    postHarvestLossPercent: 8,
    outgrowerNetworkCount: 11200,
    aquacultureProductionTons: 180
  },
  {
    year: "2026 (Current Projected)",
    maizeYieldTonsPerHa: 7.5,
    smallholderIncomeNaira: 3100000,
    postHarvestLossPercent: 4,
    outgrowerNetworkCount: 15000,
    aquacultureProductionTons: 250
  }
];

export const producePillars: ProducePillar[] = [
  {
    id: "fishery",
    title: "Aquaculture & Fishery Systems",
    subtitle: "Sustainable Fish Hatcheries, Table-Size Catfish & Fresh Tilapia",
    category: "fishery",
    icon: "Fish",
    image: "/src/assets/images/fishery_aquaculture_1784882633745.jpg",
    description: "Our aquaculture division operates eco-friendly recirculation aquaculture systems (RAS) and managed earthen ponds. We specialize in disease-resistant fingerlings, high-protein table fish, and smoked fish processing.",
    keyFeatures: [
      "Water Quality Automated Monitoring (pH, Oxygen, Temp)",
      "High-Survival Fingerling & Juvenile Broodstock",
      "Hygienic Solar-Kiln Smoked Processing Unit",
      "Zero-Waste Water Recirculation for Crop Irrigation"
    ],
    capacity: "25,000 kg Fresh Fish / Cycle (Expanding to 100T/year)",
    qualityStandards: [
      "Organic High-Protein Floating Feed",
      "Antibiotic-Free Guarantee",
      "Traceable Batch Hatchery Logs"
    ],
    currentStatus: "Active Supply",
    offtakeAvailable: true,
    minOrderQuantity: "100 kg (Fresh) / 20 kg (Smoked)"
  },
  {
    id: "poultry",
    title: "Sustainable Poultry Enterprise",
    subtitle: "Broiler Meat Production, Fresh Farm Eggs & Organic Poultry Feed",
    category: "poultry",
    icon: "Bird",
    image: "/src/assets/images/poultry_farming_1784882647000.jpg",
    description: "Climate-controlled poultry houses designed for biosecurity and optimal animal welfare. Producing jumbo farm-fresh eggs and premium broilers processed in hygienic, temperature-managed conditions.",
    keyFeatures: [
      "Automated Feeding & Nipple Drinking Lines",
      "Strict Biosecurity & Regular Veterinary Audits",
      "Daily Collected Grade-A Golden Yolk Eggs",
      "Organic Manure Processing for Crop Fertilization"
    ],
    capacity: "15,000 Broilers per Cycle & 500 Crates Eggs/Day",
    qualityStandards: [
      "100% Hormone-Free Growth",
      "Veterinary Certified Flocks",
      "Cool-Chain Transit Packaging"
    ],
    currentStatus: "Active Supply",
    offtakeAvailable: true,
    minOrderQuantity: "50 Crates Eggs / 100 Live or Dressed Broilers"
  },
  {
    id: "cattle",
    title: "Holistic Cattle & Livestock Rearing",
    subtitle: "Ethical Beef Cattle, Pasture Milk & Genetic Improvement",
    category: "cattle",
    icon: "Beef",
    image: "/src/assets/images/cattle_rearing_1784882661585.jpg",
    description: "Focusing on zero-grazing paddocks and intensive pasture management to rear healthier cattle with high meat-to-bone ratios and clean milk yields, while eliminating farmer-herder conflicts.",
    keyFeatures: [
      "High-Yield Cross-Breeds (Friesian, White Fulani, Brahman)",
      "Enclosed Fodder & Hydroponic Green Feed Production",
      "Veterinary Health Tracking & RFID Livestock Identification",
      "Hygienic Dairy Milking Parlor & Chilling Units"
    ],
    capacity: "350 Head Herd Under Intensive Fattening",
    qualityStandards: [
      "Vaccinated & Disease-Screened Herd",
      "Traceable RFID Ear Tagging",
      "Pure Natural Fodder & Molasses Diet"
    ],
    currentStatus: "Expanding Harvest",
    offtakeAvailable: true,
    minOrderQuantity: "5 Live Cattle / 200 Liters Fresh Milk"
  },
  {
    id: "crops",
    title: "Arable Produce & Grains",
    subtitle: "Yellow Maize, Cassava Tubers, Soybeans & Fresh Vegetables",
    category: "crops",
    icon: "Sprout",
    image: "/src/assets/images/smallholder_farmer_hub_1784882677913.jpg",
    description: "Cultivating high-demand staples utilizing climate-smart tillage and organic soil builders. Our crops serve internal feed mills as well as commercial food processing plants.",
    keyFeatures: [
      "Hybrid High-Yield Seed Varieties",
      "Drip Irrigation for Year-Round Harvesting",
      "Aflatoxin-Free Grain Drying Facilities",
      "Contracted Crop Outgrower Aggregation"
    ],
    capacity: "120 Hectares Under Cultivation (Maize & Cassava)",
    qualityStandards: [
      "Moisture Content < 12% for Stored Grains",
      "Non-GMO Seed Stock",
      "GlobalGAP Compliant Pest Management"
    ],
    currentStatus: "Next Harvest Cycle",
    offtakeAvailable: true,
    minOrderQuantity: "5 Metric Tons Grain"
  }
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    phaseNumber: 1,
    title: "Enterprise Anchor Farming & Model Facility Setup",
    timeframe: "2025 - Early 2026",
    status: "In Progress",
    summary: "Establish our own high-yielding flagship farms in Fishery, Poultry, and Cattle to validate best practices, build processing infrastructure, and secure commercial off-taker contracts.",
    milestones: [
      "Construct 15-Pond Recirculation Fishery & Hatchery",
      "Launch 10,000-Bird Biosecure Poultry Layer/Broiler Facility",
      "Establish Pasture Fodder & Cattle Enclosure for 350 Livestock",
      "Secure Initial Off-take Agreements with Regional Hotel & Supermarket Chains"
    ],
    targetImpact: {
      farmersReached: "150 Direct Apprentices",
      incomeGrowth: "+25% Productivity Baseline",
      wasteReduction: "15% Post-Harvest Loss"
    }
  },
  {
    phaseNumber: 2,
    title: "Regional Storage Hubs & Equipment Leasing Fleet",
    timeframe: "Late 2026 - 2027",
    status: "Upcoming",
    summary: "Deploy decentralized solar-powered cold pods, grain silos, and a mechanized tractor leasing pool to protect smallholders from post-harvest rot and high labor costs.",
    milestones: [
      "Commission 3 Modular Solar Cold Storage Pods near rural markets",
      "Deploy 10 Mechanized Tractors & Smart Harvesters for shared leasing",
      "Launch Cooperative Bulk Input Store (certified seeds, fingerlings, feeds)",
      "Train 50 Youth Machine Operators & Solar Maintenance Technicians"
    ],
    targetImpact: {
      farmersReached: "1,500+ Smallholders",
      incomeGrowth: "+40% Net Profit",
      wasteReduction: "< 5% Spoilage Rate"
    }
  },
  {
    phaseNumber: 3,
    title: "Farmers Financial Access & Input Credit Platform",
    timeframe: "2027 - 2028",
    status: "Future Vision",
    summary: "Introduce collateral-free input financing and digital credit scoring based on farm performance, enabling smallholders to get seeds, fertilizer, and fingerlings on credit.",
    milestones: [
      "Roll out Digital Farmer ID & Field Mapping Mobile App",
      "Partner with Microfinance Institutions & Ag-Impact Funds",
      "Provide In-Kind Input Credit Bundles backed by Off-take Guarantees",
      "Establish Risk-Sharing Crop & Livestock Insurance Pool"
    ],
    targetImpact: {
      farmersReached: "5,000+ Active Farmers",
      incomeGrowth: "+65% Household Income",
      wasteReduction: "Guaranteed Off-take Market"
    }
  },
  {
    phaseNumber: 4,
    title: "Integrated Market Linkage & Regional Agri-Hub",
    timeframe: "2028+",
    status: "Future Vision",
    summary: "Create a direct digital agricultural exchange matching smallholders directly with industrial processors, exporters, and urban retailers, eliminating predatory middlemen.",
    milestones: [
      "Launch Live Commodity Trading & Transparency Platform",
      "Construct 5,000 MT Grain Silo & Central Cold Logistics Depot",
      "Export Certified Smoked Fish & Organic Beef Products Regionally",
      "Establish Agri-Tech Incubation & Extension Training Academy"
    ],
    targetImpact: {
      farmersReached: "15,000+ Ecosystem Network",
      incomeGrowth: "2.5x Revenue Growth",
      wasteReduction: "Zero-Waste Farm Ecosystem"
    }
  }
];

export const smallholderServices: SmallholderService[] = [
  {
    id: "fin-01",
    title: "Agricultural Input Credit & Micro-Loans",
    category: "finance",
    iconName: "HandCoins",
    description: "Flexible, non-collateralized financing provided in the form of high-quality seeds, fingerlings, day-old chicks, and organic fertilizer. Repayable at harvest directly from off-take proceeds.",
    benefits: [
      "Zero cash upfront required for verified smallholders",
      "Integrated crop & livestock insurance coverage",
      "Fair interest rates aligned with agricultural harvest cycles"
    ],
    availability: "Waitlist Open",
    actionLabel: "Join Financing Waitlist"
  },
  {
    id: "mkt-02",
    title: "Guaranteed Off-taker & Market Linkage",
    category: "market",
    iconName: "TrendingUp",
    description: "Eliminate market uncertainty with guaranteed buyback agreements at transparent, fair-market prices. We connect smallholder harvests directly to processing factories, supermarkets, and export agents.",
    benefits: [
      "Pre-agreed floor prices to protect against price crashes",
      "Instant digital payment upon harvest collection at farm-gate",
      "No exploitation by unverified middlemen"
    ],
    availability: "Available Now",
    actionLabel: "Register as Produce Supplier"
  },
  {
    id: "str-03",
    title: "Solar Cold Storage & Grain Silo Hubs",
    category: "storage",
    iconName: "Warehouse",
    description: "Access shared solar-powered cold rooms for fish, eggs, and vegetables, as well as moisture-controlled grain silos to store produce safely during peak harvest price dips.",
    benefits: [
      "Reduces post-harvest loss from 40% to under 4%",
      "Pay-per-crate or pay-per-bag affordable daily storage fees",
      "Prevents forced panic selling during market gluts"
    ],
    availability: "Rolling Out Q3",
    actionLabel: "Book Storage Space"
  },
  {
    id: "eqp-04",
    title: "Mechanized Equipment & Supply Leasing",
    category: "equipment",
    iconName: "Tractor",
    description: "Affordable per-acre tractor tillage, automated fish pond aerators, feed pellets, and solar water pumps delivered right to rural farming clusters.",
    benefits: [
      "Reduces manual land preparation time by 80%",
      "Pay-as-you-use pricing without heavy equipment debt",
      "Includes trained youth machine operators and fuel"
    ],
    availability: "Available Now",
    actionLabel: "Request Equipment Rental"
  },
  {
    id: "trn-05",
    title: "Agronomy Training & Extension Academy",
    category: "training",
    iconName: "BookOpen",
    description: "Practical field workshops and digital guides covering climate-smart crop rotation, fish health management, biosecure poultry housing, and farm bookkeeping.",
    benefits: [
      "Hands-on demonstration on our 120-hectare flagship farm",
      "Direct access to resident veterinarians and agronomists",
      "Certified completion badge for access to credit programs"
    ],
    availability: "Available Now",
    actionLabel: "Enroll in Upcoming Workshop"
  }
];

export const liveMarketPrices: MarketPriceItem[] = [
  {
    id: "p-01",
    commodity: "Fresh Table Catfish (1kg - 1.2kg)",
    category: "Fishery",
    unit: "per kg",
    farmgatePrice: 2800,
    wholesalePrice: 3400,
    weeklyChangePercent: 3.5,
    trend: "up",
    location: "South-West Agro Hub"
  },
  {
    id: "p-02",
    commodity: "Solar-Smoked Premium Catfish",
    category: "Fishery",
    unit: "per 500g pack",
    farmgatePrice: 4200,
    wholesalePrice: 5100,
    weeklyChangePercent: 1.2,
    trend: "stable",
    location: "Central Distribution Depot"
  },
  {
    id: "p-03",
    commodity: "Grade-A Jumbo Farm Fresh Eggs",
    category: "Poultry",
    unit: "per Crate (30 eggs)",
    farmgatePrice: 4800,
    wholesalePrice: 5500,
    weeklyChangePercent: 2.8,
    trend: "up",
    location: "Regional Farm Gate"
  },
  {
    id: "p-04",
    commodity: "Live Heavyweight Broiler (2.5kg)",
    category: "Poultry",
    unit: "per Bird",
    farmgatePrice: 7500,
    wholesalePrice: 8800,
    weeklyChangePercent: -0.5,
    trend: "stable",
    location: "Regional Farm Gate"
  },
  {
    id: "p-05",
    commodity: "Prime Beef Cattle (Fattened Bull)",
    category: "Cattle",
    unit: "per Head (400kg+)",
    farmgatePrice: 720000,
    wholesalePrice: 850000,
    weeklyChangePercent: 4.1,
    trend: "up",
    location: "Pasture Livestock Depot"
  },
  {
    id: "p-06",
    commodity: "Dry Yellow Maize (12% Moisture)",
    category: "Grains",
    unit: "per 100kg Bag",
    farmgatePrice: 62000,
    wholesalePrice: 71000,
    weeklyChangePercent: -2.1,
    trend: "down",
    location: "Central Grain Depot"
  }
];

export const equipmentCatalog: EquipmentItem[] = [
  {
    id: "eq-101",
    name: "75HP Utility Tractor with Disc Plough & Harrow",
    category: "Tractor & Tillage",
    dailyRate: 45000,
    specifications: ["75 Horsepower Diesel Engine", "Includes Disc Harrow & Plough", "Covers up to 5 Hectares / Day", "Operator & Fuel Included"],
    availability: "In Stock",
    imageIcon: "Tractor"
  },
  {
    id: "eq-102",
    name: "Modular Solar Cold Room Pod (2.5 Ton Capacity)",
    category: "Storage & Cold Chain",
    dailyRate: 15000,
    specifications: ["100% Off-Grid Solar + Thermal Battery Backup", "Temperature Controlled (2°C - 8°C)", "Ideal for Fish, Eggs, Vegetables", "Mobile Containerized Unit"],
    availability: "In Stock",
    imageIcon: "Warehouse"
  },
  {
    id: "eq-103",
    name: "3HP Paddlewheel Pond Aerator & Solar Water Pump",
    category: "Aquaculture Tools",
    dailyRate: 8500,
    specifications: ["Boosts Dissolved Oxygen in Ponds", "Solar Powered Direct Drive", "Increases Fish Stocking Density by 40%", "Easy Plug & Play Assembly"],
    availability: "In Stock",
    imageIcon: "Fish"
  },
  {
    id: "eq-104",
    name: "Compact Diesel Feed Extruder & Granulator (500kg/hr)",
    category: "Processing & Mill",
    dailyRate: 25000,
    specifications: ["Produces Floating Fish Pellets & Poultry Mash", "Adjustable Pellet Sizes (2mm - 8mm)", "Low Energy Fuel Burn Rate"],
    availability: "Book in Advance",
    imageIcon: "Sliders"
  }
];

export const trainingCourses: TrainingCourse[] = [
  {
    id: "tr-201",
    title: "Modern Aquaculture & High-Density Recirculation Systems",
    category: "Fishery",
    duration: "2 Days Practical Workshop",
    level: "Beginner",
    instructor: "Dr. Kenneth Adebayo (Principal Aquaculture Specialist)",
    upcomingDate: "August 12 - 13, 2026",
    format: "In-Person Workshop",
    description: "Master pond water quality testing, disease prevention, automated feeding systems, and high-profit smoked fish processing.",
    modulesCount: 6
  },
  {
    id: "tr-202",
    title: "Poultry Biosecurity & Maximizing Egg Yields",
    category: "Poultry",
    duration: "1 Day Intensive",
    level: "Intermediate",
    instructor: "Dr. Florence Eke (Lead Avian Veterinarian)",
    upcomingDate: "August 20, 2026",
    format: "Field Practical",
    description: "Learn flock management strategies that boost laying percentage to over 90%, reduce chick mortality, and maintain strict farm biosecurity.",
    modulesCount: 4
  },
  {
    id: "tr-203",
    title: "Pasture Management & Enclosed Cattle Fattening",
    category: "Livestock",
    duration: "2 Days Practical Workshop",
    level: "Intermediate",
    instructor: "Engr. Musa Haruna (Livestock Pasture Agronomist)",
    upcomingDate: "September 02 - 03, 2026",
    format: "In-Person Workshop",
    description: "Transitioning from open grazing to high-nutrient fodder production, hydroponic barley green feed, and cattle weight optimization.",
    modulesCount: 5
  },
  {
    id: "tr-204",
    title: "Smallholder Farm Business Management & Financial Record Keeping",
    category: "Agribusiness & Finance",
    duration: "1 Day Workshop / Mobile Modules",
    level: "Beginner",
    instructor: "Sarah Jenkins (Agri-Finance Lead)",
    upcomingDate: "Weekly Digital Intake",
    format: "Digital Mobile Guide",
    description: "Practical record keeping, calculating gross margins per crop cycle, preparing bankable farm logs, and applying for input credit.",
    modulesCount: 5
  }
];

export const faqItems = [
  {
    q: "How does Glean Agro ensure high-quality product supply without delays?",
    a: "Glean Agro operates integrated commercial farming facilities across Nigeria in catfish, tilapia, broiler poultry, egg production, and cattle fattening. This guarantees immediate, high-volume produce supply while our smallholder outgrower aggregator network scales across rural farming clusters."
  },
  {
    q: "How can smallholder farmers join your support network?",
    a: "Farmers can register through our online Smallholder Hub, visit our physical regional farm centers, or contact our extension officers. Once enrolled, farmers gain access to training, subsidized equipment leasing, and off-take buyback contracts."
  },
  {
    q: "Can commercial buyers or hotels lock in off-take supply contracts?",
    a: "Yes! We specialize in formal off-take contracts for commercial kitchens, supermarkets, food processors, and exporters. We guarantee consistent weekly deliveries with strict quality and hygiene standards."
  },
  {
    q: "How can impact investors or NGOs partner with your platform?",
    a: "We welcome partnerships with impact investors, multilateral donor organizations, and agricultural development agencies to expand our solar cold storage pods, equipment fleets, and input credit pools."
  }
];
