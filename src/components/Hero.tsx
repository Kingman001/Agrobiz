import React from 'react';
import { CompanySettings } from '../types';
import {
  ArrowRight,
  Handshake,
  Sparkles
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
    <section id="home" className="relative overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.2),transparent_34%),linear-gradient(120deg,#0c1915_0%,#12251d_56%,#3b2415_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl space-y-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              <Sparkles className="h-4 w-4" />
              <span>Agricultural solutions for a better future</span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-stone-50 sm:text-6xl">
              Building a More Productive, Sustainable Future for Agriculture.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
              We develop and deliver practical agricultural solutions that help smallholder farmers produce more, build sustainable livelihoods and unlock new opportunities for women and youth.
            </p>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => onNavigateSection('produce')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-emerald-950 shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-400"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onOpenInquiryModal('Impact Investor')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-600 bg-stone-900/40 px-5 py-3.5 text-sm font-bold text-stone-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <Handshake className="h-4 w-4" />
                <span>Partner With Us</span>
              </button>
            </div>

            <button
              onClick={() => onNavigateSection('farmer-hub')}
              className="text-sm font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 transition hover:text-emerald-200"
            >
              Join Our Farmer Network
            </button>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl shadow-black/30 sm:min-h-[470px]">
            <img
              src={heroBannerImage}
              alt="African farmer tending crops in a green agricultural field"
              className="h-full min-h-[360px] w-full object-cover object-center transition-transform duration-[4000ms] hover:scale-105 sm:min-h-[470px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-stone-950/70 p-4 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Simple solutions. Real impact.</p>
              <p className="mt-1 text-sm text-stone-100">Partnership for shared prosperity across African agriculture.</p>
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
