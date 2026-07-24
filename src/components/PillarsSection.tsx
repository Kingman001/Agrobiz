import React, { useState } from 'react';
import { producePillars } from '../data/agribusinessData';
import { ProducePillar } from '../types';
import {
  Fish,
  Bird,
  Beef,
  Sprout,
  CheckCircle2,
  ShieldCheck,
  Package,
  Clock,
  ArrowUpRight,
  Handshake,
  Download,
  Info
} from 'lucide-react';

interface PillarsSectionProps {
  onSelectPillar: (pillar: ProducePillar) => void;
  onOpenInquiryModal: (role?: string, produceName?: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  onSelectPillar,
  onOpenInquiryModal
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPillars = activeTab === 'all'
    ? producePillars
    : producePillars.filter(p => p.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fishery':
        return <Fish className="w-5 h-5 text-emerald-600" />;
      case 'poultry':
        return <Bird className="w-5 h-5 text-amber-600" />;
      case 'cattle':
        return <Beef className="w-5 h-5 text-stone-700" />;
      case 'crops':
        return <Sprout className="w-5 h-5 text-emerald-700" />;
      default:
        return <Sprout className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="produce" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>Core Produce & Enterprise Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              High-Quality Sustainable Farming Produced to Commercial Standards
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              We operate bio-secure, environmentally controlled agricultural units across four main verticals. Our produce supplies hotels, supermarkets, restaurants, and regional processors under strict off-take agreements.
            </p>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-stone-200/80 p-1.5 rounded-xl border border-stone-300">
            {[
              { id: 'all', label: 'All Enterprises' },
              { id: 'fishery', label: 'Fishery & Aquaculture' },
              { id: 'poultry', label: 'Poultry & Eggs' },
              { id: 'cattle', label: 'Cattle & Dairy' },
              { id: 'crops', label: 'Arable Crops' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-emerald-900 shadow-xs border border-stone-200'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group"
            >
              {/* Image Header */}
              <div className="relative h-60 overflow-hidden bg-stone-900">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-stone-900 shadow-sm">
                    {getCategoryIcon(pillar.category)}
                    <span className="capitalize">{pillar.category}</span>
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                      pillar.currentStatus === 'Active Supply'
                        ? 'bg-emerald-600 text-white'
                        : pillar.currentStatus === 'Expanding Harvest'
                        ? 'bg-amber-500 text-white'
                        : 'bg-stone-800 text-stone-200'
                    }`}
                  >
                    {pillar.currentStatus}
                  </span>
                </div>

                {/* Card Title on Image Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-emerald-200 font-medium">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                      Operational Highlights
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {pillar.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Capacity & Minimum Order Info */}
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-stone-500 font-semibold flex items-center gap-1.5">
                        <Package className="w-4 h-4 text-emerald-700" />
                        Current Production Capacity:
                      </span>
                      <span className="font-bold text-stone-900">{pillar.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-200/60">
                      <span className="text-stone-500 font-semibold flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-amber-700" />
                        Min. Commercial Order:
                      </span>
                      <span className="font-bold text-stone-800">{pillar.minOrderQuantity}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectPillar(pillar)}
                    className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 cursor-pointer hover:underline"
                  >
                    <Info className="w-4 h-4 text-emerald-700" />
                    <span>View Specifications</span>
                  </button>

                  <button
                    onClick={() => onOpenInquiryModal('Commercial Buyer', pillar.title)}
                    className="px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Handshake className="w-4 h-4 text-emerald-300" />
                    <span>Request Bulk Off-Take</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Off-Take Assurance Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 rounded-2xl p-8 text-white shadow-lg border border-emerald-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-emerald-800/90 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
              Commercial Buyer Guarantee
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Need Consistent Weekly Bulk Produce for Your Processing Plant or Retail Network?
            </h3>
            <p className="text-stone-300 text-sm max-w-2xl">
              We offer formal off-take contracts with cold-chain transportation, batch quality assurance certifications, and predictable wholesale pricing structures.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiryModal('Commercial Buyer')}
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm transition-all shadow-md shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Handshake className="w-5 h-5" />
            <span>Negotiate Off-Take Contract</span>
          </button>
        </div>

      </div>
    </section>
  );
};
