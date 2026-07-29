import React from 'react';
import { CompanySettings } from '../types';
import {
  Fish,
  Bird,
  Beef,
  Sprout,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Warehouse,
  Tractor,
  BookOpen,
  Award,
  Sparkles,
  Handshake
} from 'lucide-react';
import heroBannerImage from '../assets/images/agribusiness_hero_banner_1784882619239.jpg';

import { InquiryCallback } from '../types';

interface HeroProps {
  companySettings: CompanySettings;
  onNavigateSection: (sectionId: string) => void;
  onOpenInquiryModal: InquiryCallback;
}

export const Hero: React.FC<HeroProps> = ({
  companySettings,
  onNavigateSection,
  onOpenInquiryModal
}) => {
  return (
    <section id="home" className="relative bg-stone-900 text-white overflow-hidden">
      {/* Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-35 bg-cover bg-center scale-105 transition-transform duration-1000">
        <img
          src={heroBannerImage}
          alt="Agribusiness Farm Sunrise"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-emerald-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-500/40 text-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Next-Generation Agribusiness & Smallholder Hub</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-100 leading-[1.15]">
              Cultivating Sustainable Food Systems. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-200">
                Empowering Rural Smallholders.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              <strong className="text-white font-semibold">{companySettings.name}</strong> operates high-standard commercial production in <strong className="text-emerald-300">Fishery</strong>, <strong className="text-emerald-300">Poultry</strong>, <strong className="text-emerald-300">Cattle Rearing</strong>, and <strong className="text-emerald-300">Arable Produce</strong>. Long-term, we are building a integrated platform providing smallholder farmers with access to finance, fair markets, cold storage, equipment leasing, and agronomy training.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigateSection('produce')}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Our Produce</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigateSection('roadmap')}
                className="px-6 py-3.5 rounded-xl bg-stone-800/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Smallholder Roadmap</span>
              </button>

              <button
                onClick={() => onOpenInquiryModal('Impact Investor')}
                className="px-6 py-3.5 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 text-amber-200 border border-amber-500/40 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Handshake className="w-5 h-5 text-amber-400" />
                <span>Partner / Off-Take</span>
              </button>
            </div>

            {/* Core Value Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-stone-800/80">
              <div className="flex items-center gap-2 text-stone-300 text-xs font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Hormone Poultry</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300 text-xs font-medium">
                <Fish className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bio-Secure Aquaculture</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300 text-xs font-medium">
                <Beef className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ethical Pasture Cattle</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300 text-xs font-medium">
                <Warehouse className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Solar Cold Storage</span>
              </div>
            </div>
          </div>

          {/* Right Hero Cards Highlight */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-900/90 border border-stone-800/90 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Enterprise Capacity Status
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-mono">2025/2026</span>
              </div>

              <div className="mt-4 space-y-4">
                <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800 flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                    <Fish className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-stone-200">Aquaculture & Fishery</h4>
                      <span className="text-[11px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded-md font-semibold">Active</span>
                    </div>
                    <p className="text-xs text-stone-400 mt-1">
                      25,000 kg / cycle. Fresh catfish, tilapia, and solar-smoked fish.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800 flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-950 text-amber-400 shrink-0">
                    <Bird className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-stone-200">Poultry Operations</h4>
                      <span className="text-[11px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded-md font-semibold">Active</span>
                    </div>
                    <p className="text-xs text-stone-400 mt-1">
                      15,000 broilers & 500 egg crates/day from biosecure poultry houses.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800 flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-stone-800 text-amber-300 shrink-0">
                    <Beef className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-stone-200">Cattle & Livestock</h4>
                      <span className="text-[11px] bg-amber-900/60 text-amber-300 px-2 py-0.5 rounded-md font-semibold">Expanding</span>
                    </div>
                    <p className="text-xs text-stone-400 mt-1">
                      350 head herd under intensive zero-grazing paddock fattening.
                    </p>
                  </div>
                </div>
              </div>

              {/* Smallholder Roadmap Banner inside hero */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-emerald-950 to-stone-950 border border-emerald-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">Smallholder Ecosystem Goal</span>
                  <p className="text-xs text-stone-200 font-medium mt-0.5">
                    Connecting 15,000+ farmers to storage, equipment & market off-take
                  </p>
                </div>
                <button
                  onClick={() => onNavigateSection('farmer-hub')}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  Farmer Tools
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Impact Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-stone-950/80 rounded-2xl border border-stone-800 shadow-xl backdrop-blur-md">
          <div className="p-2 text-center md:text-left border-r border-stone-800/80 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">120+ Ha</div>
            <div className="text-xs text-stone-400 font-medium mt-1">Flagship Farm Land Under Production</div>
          </div>
          <div className="p-2 text-center md:text-left border-r border-stone-800/80 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">25,000 kg</div>
            <div className="text-xs text-stone-400 font-medium mt-1">Fish Yield Per Aquaculture Cycle</div>
          </div>
          <div className="p-2 text-center md:text-left border-r border-stone-800/80 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">15,000+</div>
            <div className="text-xs text-stone-400 font-medium mt-1">Smallholder Farmers Targeted</div>
          </div>
          <div className="p-2 text-center md:text-left">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">&lt; 5%</div>
            <div className="text-xs text-stone-400 font-medium mt-1">Post-Harvest Spoilage Target</div>
          </div>
        </div>

      </div>
    </section>
  );
};
