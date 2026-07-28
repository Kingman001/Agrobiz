import React from 'react';
import { CompanySettings } from '../types';
import {
  Sprout,
  ShieldCheck,
  Users,
  Target,
  Award,
  Leaf,
  HeartHandshake,
  CheckCircle2,
  Globe
} from 'lucide-react';
import smallholderHubImage from '../assets/images/smallholder_farmer_hub_1784882677913.jpg';

import { InquiryCallback } from '../types';

interface AboutSectionProps {
  companySettings: CompanySettings;
  onOpenInquiryModal: InquiryCallback;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  companySettings,
  onOpenInquiryModal
}) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sprout className="w-3.5 h-3.5 text-emerald-700" />
              <span>About Our Startup Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
              More Than Just a Farm — Building an Agribusiness Infrastructure for Africa
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-stone-900 font-semibold">{companySettings.name}</strong> began with a clear realization: smallholder farmers form the backbone of regional food security, yet remain trapped by high post-harvest rot, expensive credit, and predatory middleman pricing.
              </p>

              <p>
                To solve this at scale, we started as a high-yield commercial producer in <strong className="text-emerald-800">Fishery</strong>, <strong className="text-emerald-800">Poultry</strong>, <strong className="text-emerald-800">Cattle rearing</strong>, and <strong className="text-emerald-800">Arable grains</strong>. By building and mastering our own 120-hectare flagship operation, we established direct commercial off-take contracts with hotels, supermarkets, and processors.
              </p>

              <p>
                Now, we are opening our value chain to rural smallholders — offering decentralized solar cold storage, shared equipment leasing, input credit, and guaranteed market off-take.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Integrity & Quality</span>
                </div>
                <p className="text-xs text-stone-600">Strict zero-hormone, biosecure, traceable agricultural standards.</p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <Leaf className="w-4 h-4 text-emerald-700" />
                  <span>Climate Sustainability</span>
                </div>
                <p className="text-xs text-stone-600">Solar-powered cold storage, zero-waste water recirculation & organic fodder.</p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-emerald-700" />
                  <span>Smallholder First</span>
                </div>
                <p className="text-xs text-stone-600">Shared prosperity, non-predatory credit, and floor price guarantees.</p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <Globe className="w-4 h-4 text-emerald-700" />
                  <span>Community Impact</span>
                </div>
                <p className="text-xs text-stone-600">Youth job creation, tractor operator training & women agronomy clubs.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiryModal('Impact Investor')}
                className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                Partner With Us
              </button>
            </div>
          </div>

          {/* Right Image Graphic Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 group">
              <img
                src={smallholderHubImage}
                alt="Smallholder Farmers Hub"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <div className="p-4 bg-stone-900/90 backdrop-blur-md rounded-2xl border border-stone-700 space-y-2">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold">
                    Our 10-Year Vision
                  </span>
                  <h4 className="font-serif font-bold text-lg text-stone-100">
                    A Food-Secure Continent Powered by Empowered Farmers
                  </h4>
                  <p className="text-xs text-stone-300">
                    Targeting 15,000+ rural farmers linked directly to processing hubs and solar cold logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
