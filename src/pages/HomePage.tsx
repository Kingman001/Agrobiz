import React from 'react';
import { CompanySettings, ProducePillar } from '../types';
import { Hero } from '../components/Hero';
import { PillarsSection } from '../components/PillarsSection';
import { SmallholderRoadmap } from '../components/SmallholderRoadmap';
import { FarmerHubTools } from '../components/FarmerHubTools';
import { AboutSection } from '../components/AboutSection';
import { PartnershipsSection } from '../components/PartnershipsSection';
import { ArrowRight, Sparkles, Tractor, Handshake, Sprout, Fish, Bird, Beef, Warehouse } from 'lucide-react';

interface HomePageProps {
  companySettings: CompanySettings;
  onSelectPillar: (pillar: ProducePillar) => void;
  onOpenInquiryModal: (role?: string, produceName?: string) => void;
  onNavigatePage: (pageId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  companySettings,
  onSelectPillar,
  onOpenInquiryModal,
  onNavigatePage
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero
        companySettings={companySettings}
        onNavigateSection={onNavigatePage}
        onOpenInquiryModal={onOpenInquiryModal}
      />

      {/* Featured Produce & Enterprise Pillars Preview */}
      <div className="relative">
        <PillarsSection
          onSelectPillar={onSelectPillar}
          onOpenInquiryModal={onOpenInquiryModal}
        />
        
        {/* Full Page Jump Banner */}
        <div className="bg-emerald-950 text-emerald-100 py-6 px-4 text-center border-b border-emerald-900">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-left">
              <Sprout className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-medium">
                Want to filter produce by enterprise or calculate bulk order volumes?
              </span>
            </div>
            <button
              onClick={() => onNavigatePage('produce')}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm shrink-0"
            >
              <span>Explore Full Produce Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Smallholder Outgrower Roadmap Summary */}
      <div className="relative">
        <SmallholderRoadmap
          onOpenInquiryModal={onOpenInquiryModal}
        />

        {/* Full Roadmap Page Jump Banner */}
        <div className="bg-stone-900 text-stone-200 py-6 px-4 text-center border-b border-stone-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-left">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-sm font-medium">
                Calculate estimated farm revenue growth with our interactive Outgrower Profit Estimator.
              </span>
            </div>
            <button
              onClick={() => onNavigatePage('roadmap')}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm shrink-0"
            >
              <span>Open Interactive Roadmap Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Farmer Hub & Tools Summary */}
      <div className="relative">
        <FarmerHubTools
          onOpenInquiryModal={onOpenInquiryModal}
        />

        {/* Full Farmer Hub Page Jump Banner */}
        <div className="bg-emerald-950 text-emerald-100 py-6 px-4 text-center border-b border-emerald-900">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-left">
              <Tractor className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-medium">
                View tractor leasing equipment catalog, live market prices table, and agronomy workshops.
              </span>
            </div>
            <button
              onClick={() => onNavigatePage('farmer-hub')}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm shrink-0"
            >
              <span>Go to Farmer Hub Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* About Glean Agro Section */}
      <AboutSection
        companySettings={companySettings}
        onOpenInquiryModal={onOpenInquiryModal}
      />

      {/* Contact & Off-take Inquiry Section */}
      <PartnershipsSection
        companySettings={companySettings}
        initialRole="Commercial Buyer"
        initialProduceInterest=""
      />
    </div>
  );
};
