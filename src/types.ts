export interface ProducePillar {
  id: string;
  title: string;
  subtitle: string;
  category: 'fishery' | 'poultry' | 'cattle' | 'crops';
  icon: string;
  image: string;
  description: string;
  keyFeatures: string[];
  capacity: string;
  qualityStandards: string[];
  currentStatus: 'Active Supply' | 'Expanding Harvest' | 'Next Harvest Cycle';
  offtakeAvailable: boolean;
  minOrderQuantity: string;
}

export interface RoadmapPhase {
  phaseNumber: number;
  title: string;
  timeframe: string;
  status: 'In Progress' | 'Upcoming' | 'Future Vision';
  summary: string;
  milestones: string[];
  targetImpact: {
    farmersReached: string;
    incomeGrowth: string;
    wasteReduction: string;
  };
}

export interface SmallholderService {
  id: string;
  title: string;
  category: 'finance' | 'market' | 'storage' | 'equipment' | 'training';
  iconName: string;
  description: string;
  benefits: string[];
  availability: 'Available Now' | 'Rolling Out Q3' | 'Waitlist Open';
  actionLabel: string;
}

export interface MarketPriceItem {
  id: string;
  commodity: string;
  category: string;
  unit: string;
  farmgatePrice: number;
  wholesalePrice: number;
  weeklyChangePercent: number;
  trend: 'up' | 'down' | 'stable';
  location: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Tractor & Tillage' | 'Storage & Cold Chain' | 'Aquaculture Tools' | 'Processing & Mill';
  dailyRate: number;
  purchasePrice?: number;
  specifications: string[];
  availability: 'In Stock' | 'Book in Advance';
  imageIcon: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: string;
  upcomingDate: string;
  format: 'In-Person Workshop' | 'Field Practical' | 'Digital Mobile Guide';
  description: string;
  modulesCount: number;
}

export interface CompanySettings {
  name: string;
  tagline: string;
  foundingYear: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  userRole: 'Commercial Buyer' | 'Smallholder Farmer' | 'Impact Investor' | 'Equipment Vendor' | 'General';
  produceInterest: string;
  message: string;
}
