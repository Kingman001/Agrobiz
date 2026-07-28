import React from 'react';
import { CompanySettings } from '../types';
import { PageHeader } from '../components/PageHeader';
import {
  Sprout,
  ShieldCheck,
  Users,
  Target,
  Award,
  Leaf,
  HeartHandshake,
  Globe,
  Building2,
  MapPin,
  CheckCircle2,
  Fish,
  Bird,
  Beef,
  Warehouse,
  Handshake
} from 'lucide-react';
import smallholderHubImage from '../assets/images/smallholder_farmer_hub_1784882677913.jpg';

import { InquiryCallback } from '../types';

interface AboutPageProps {
  companySettings: CompanySettings;
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  companySettings,
  onOpenInquiryModal,
  onNavigatePage
}) => {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Page Header */}
      <PageHeader
        title="About Glean Agro Nigeria Limited"
        subtitle="Redefining African agribusiness through high-standard commercial production, climate-smart post-harvest logistics, and an empowered smallholder farmer ecosystem."
        categoryTag="Glean Agro Company Profile"
        breadcrumbs={[{ label: "About Glean Agro" }]}
        onNavigatePage={onNavigatePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        
        {/* Main Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sprout className="w-4 h-4 text-emerald-700" />
              <span>Glean Agro Origin & Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
              Transforming Nigeria's Agricultural Value Chain From Farm-Gate to National Markets
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-stone-900 font-semibold">{companySettings.name} (Glean Agro Nigeria Limited)</strong> was founded to solve two fundamental challenges facing African food security: the lack of high-quality, bio-secure domestic produce and the extreme vulnerability of rural smallholder farmers to post-harvest decay and price exploitation.
              </p>

              <p>
                Operating from our flagship agro-industrial facilities in <strong className="text-emerald-800">Gazara, Makarfi, Kaduna State, Nigeria</strong> (with corporate offices at <strong className="text-emerald-800">Old Sokoto Road, Zaria</strong>), we run vertically integrated commercial operations spanning <strong className="text-emerald-800">Aquaculture (Fish Hatcheries & RAS Ponds)</strong>, <strong className="text-emerald-800">Biosecure Poultry (Broilers & Layer Eggs)</strong>, <strong className="text-emerald-800">Cattle Rearing & Pasture Management</strong>, and <strong className="text-emerald-800">Arable Crop Cultivation (Maize, Cassava & Soybeans)</strong>.
              </p>

              <p>
                By mastering our own 120-hectare flagship farm first, Glean Agro established direct, guaranteed off-take contracts with major hotel chains, processors, supermarkets, and export partners across Nigeria.
              </p>
            </div>

            {/* Mission & Vision Callout Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <Target className="w-5 h-5 text-emerald-700" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To produce premium, antibiotic-free food products while integrating 15,000+ rural smallholder farmers into a profitable, climate-resilient agribusiness network.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <Award className="w-5 h-5 text-emerald-700" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To become West Africa's leading sustainable agribusiness ecosystem, eliminating post-harvest loss through solar cold logistics and direct market linkages.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiryModal('Impact Investor')}
                className="px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                Partner With Glean Agro
              </button>
            </div>
          </div>

          {/* Right Image Graphic Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 group">
              <img
                src={smallholderHubImage}
                alt="Glean Agro Agricultural Hub"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <div className="p-5 bg-stone-900/90 backdrop-blur-md rounded-2xl border border-stone-700 space-y-2">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold">
                    Official Web Portal • gleanagrong.com
                  </span>
                  <h4 className="font-serif font-bold text-xl text-stone-100">
                    Glean Agro Nigeria Limited
                  </h4>
                  <p className="text-xs text-stone-300">
                    Sustainable Food Production • Smallholder Outgrower Scheme • Solar Cold Logistics
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-emerald-800">
              Guiding Principles
            </span>
            <h3 className="text-3xl font-serif font-bold text-stone-900">
              The Four Pillars of Glean Agro
            </h3>
            <p className="text-sm text-stone-600">
              Every crop harvested, fish raised, and farmer assisted is guided by our core corporate principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-stone-900 text-base">Uncompromising Quality</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                100% hormone-free growth, biosecure poultry housing, organic fish feed, and traceable batch hatchery logs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-stone-900 text-base">Climate Resilience</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Zero-waste water recirculation for aquaculture, solar-powered cold pods, and organic fodder paddocks.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-stone-900 text-base">Smallholder First</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Providing collateral-free input credit, non-predatory equipment leasing, and pre-agreed floor buyback prices.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-stone-900 text-base">Community Empowerment</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Training local youth machine operators, empowering women agronomy cooperatives, and creating rural jobs.
              </p>
            </div>
          </div>
        </div>

        {/* Operational Hubs Across Nigeria */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 border border-stone-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-emerald-400">
                Operational Footprint
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-100">
                Glean Agro Agribusiness Hubs Across Nigeria
              </h3>
            </div>
            <span className="text-xs text-stone-400">
              Office: Zaria, Kaduna State | Farm: Gazara, Makarfi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                <MapPin className="w-4 h-4" />
                <span>Gazara, Makarfi Farm Hub</span>
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-100">
                Flagship Agro-Industrial Farm
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Houses our aquaculture RAS ponds, biosecure poultry housing, cattle pasture paddocks, and grain drying silos in Kaduna State.
              </p>
            </div>

            <div className="p-6 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                <MapPin className="w-4 h-4" />
                <span>Zaria Corporate Office</span>
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-100">
                Old Sokoto Road Secretariat
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Central administration, smallholder outgrower coordination, equipment leasing management, and off-take contracting office.
              </p>
            </div>

            <div className="p-6 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                <MapPin className="w-4 h-4" />
                <span>National Off-Take Logistics</span>
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-100">
                Cold Chain & Market Dispatch
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Refrigerated cold storage and transport network connecting smallholder harvests to food processors and bulk buyers across Nigeria.
              </p>
            </div>
          </div>
        </div>

        {/* Team & Leadership Spotlights */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-emerald-800">
              Experienced Leadership
            </span>
            <h3 className="text-3xl font-serif font-bold text-stone-900">
              Guided by Agronomists, Veterinarians & Supply Chain Experts
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-800 text-emerald-200 font-bold flex items-center justify-center text-lg">
                KA
              </div>
              <h4 className="font-bold text-stone-900 text-base">Dr. Kenneth Adebayo</h4>
              <span className="text-xs text-emerald-700 font-mono font-bold block">Principal Aquaculture & Hatchery Specialist</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Over 15 years developing recirculating aquaculture systems (RAS) and fish breeding programs across West Africa.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-800 text-amber-200 font-bold flex items-center justify-center text-lg">
                FE
              </div>
              <h4 className="font-bold text-stone-900 text-base">Dr. Florence Eke</h4>
              <span className="text-xs text-amber-700 font-mono font-bold block">Lead Avian Veterinarian & Biosecurity Director</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Specialist in poultry flock health, biosecure housing design, and disease prevention in commercial broiler operations.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-full bg-stone-800 text-stone-200 font-bold flex items-center justify-center text-lg">
                MH
              </div>
              <h4 className="font-bold text-stone-900 text-base">Engr. Musa Haruna</h4>
              <span className="text-xs text-stone-700 font-mono font-bold block">Livestock Pasture & Agronomy Engineer</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Pioneer in enclosed fodder cultivation, hydroponic green feed, and cattle weight optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Callout */}
        <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white rounded-3xl p-8 border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 bg-emerald-800 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
              Work With Glean Agro
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Ready to Partner or Secure Wholesale Off-Take Supply?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              Connect with our business development leads to arrange farm visits, off-take agreements, or impact investment discussions.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiryModal('Impact Investor')}
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 rounded-xl font-bold text-sm shadow-md transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Handshake className="w-5 h-5" />
            <span>Contact Partnership Leads</span>
          </button>
        </div>

      </div>
    </div>
  );
};
