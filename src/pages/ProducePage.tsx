import React, { useState } from 'react';
import { producePillars } from '../data/agribusinessData';
import { ProducePillar } from '../types';
import { PageHeader } from '../components/PageHeader';
import {
  Fish,
  Bird,
  Beef,
  Sprout,
  CheckCircle2,
  Package,
  Clock,
  Handshake,
  Info,
  Search,
  Calculator,
  ShieldCheck,
  Truck,
  Award,
  Sparkles
} from 'lucide-react';

import { InquiryCallback } from '../types';

interface ProducePageProps {
  onSelectPillar: (pillar: ProducePillar) => void;
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

export const ProducePage: React.FC<ProducePageProps> = ({
  onSelectPillar,
  onOpenInquiryModal,
  onNavigatePage
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Bulk Order Estimator state
  const [calcProduce, setCalcProduce] = useState<string>(producePillars[0].id);
  const [calcQuantity, setCalcQuantity] = useState<number>(500);

  const selectedCalcPillar = producePillars.find(p => p.id === calcProduce) || producePillars[0];

  const filteredPillars = producePillars.filter(pillar => {
    const matchesCategory = activeCategory === 'all' || pillar.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      pillar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pillar.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pillar.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Page Banner Header */}
      <PageHeader
        title="Commercial Produce & Agricultural Enterprises"
        subtitle="Discover Glean Agro Nigeria's high-yield, bio-secure farming operations across Fishery, Poultry, Livestock Rearing, and Arable Crops."
        categoryTag="Glean Agro Agricultural Enterprises"
        breadcrumbs={[{ label: "Produce & Enterprises" }]}
        onNavigatePage={onNavigatePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Controls Bar: Category Tabs & Search */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Enterprises', icon: Sparkles },
                { id: 'fishery', label: 'Fishery & Aquaculture', icon: Fish },
                { id: 'poultry', label: 'Poultry & Eggs', icon: Bird },
                { id: 'cattle', label: 'Cattle & Dairy', icon: Beef },
                { id: 'crops', label: 'Arable Crops', icon: Sprout }
              ].map(tab => {
                const IconComponent = tab.icon;
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-800 text-white shadow-md'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search produce or crops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent bg-stone-50"
              />
            </div>

          </div>
        </div>

        {/* Enterprise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col group"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden bg-stone-900">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />

                {/* Status Badges */}
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

                {/* Card Title on Overlay */}
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

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                      Quality & Operational Specs
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

                  {/* Capacity Info */}
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
                        Min. Wholesale Off-take:
                      </span>
                      <span className="font-bold text-stone-800">{pillar.minOrderQuantity}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
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
                    <span>Request Off-Take</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Interactive Bulk Off-take Order Estimator */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 shadow-xl border border-stone-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                <Calculator className="w-4 h-4" />
                <span>Commercial Off-Take Estimator</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-100">
                Bulk Produce Order & Schedule Calculator
              </h3>
            </div>
            <span className="text-xs text-stone-400">
              Glean Agro Direct Wholesale Hub
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Controls */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
                  Select Agricultural Enterprise / Produce
                </label>
                <select
                  value={calcProduce}
                  onChange={(e) => setCalcProduce(e.target.value)}
                  className="w-full p-3 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {producePillars.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.minOrderQuantity})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                    Target Order Volume / Units
                  </label>
                  <span className="text-xs text-emerald-400 font-mono font-bold">
                    {calcQuantity.toLocaleString()} Units/kg
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={calcQuantity}
                  onChange={(e) => setCalcQuantity(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <p className="text-xs text-stone-400">
                * Note: Minimum order quantities apply for farm-gate dispatch. Cold-chain transportation available across Oyo, Lagos, Ogun, and regional markets.
              </p>
            </div>

            {/* Calculated Output Box */}
            <div className="md:col-span-5 bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-4 text-center md:text-left">
              <span className="text-xs text-emerald-400 font-mono uppercase font-bold">
                Off-take Logistics Profile
              </span>
              <div>
                <div className="text-xs text-stone-400">Selected Enterprise</div>
                <div className="text-lg font-bold text-stone-100">{selectedCalcPillar.title}</div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-stone-800 text-xs">
                <div>
                  <span className="text-stone-400 block">Supply Window</span>
                  <span className="font-bold text-emerald-300">Weekly Scheduled</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Cold Chain Transit</span>
                  <span className="font-bold text-emerald-300">Included</span>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiryModal('Commercial Buyer', `${selectedCalcPillar.title} (${calcQuantity} Units)`)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Handshake className="w-4 h-4" />
                <span>Submit Custom Order Request</span>
              </button>
            </div>

          </div>
        </div>

        {/* Quality & Biosecurity Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-900 text-base">Biosecure Farm Protocols</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Strict footbath sanitation, veterinary audits, and zero antibiotic growth promoters across all poultry and livestock pens.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-900 text-base">Cool-Chain Logistics</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Temperature-monitored refrigerated trucks and solar cold storage pods ensure farm-fresh produce delivers with zero spoilage.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-900 text-base">Full Traceability</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every batch of fingerlings, eggs, and grains is recorded with harvest timestamps and hatchery logs for complete transparency.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
