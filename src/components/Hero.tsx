import React from 'react';
import { CompanySettings } from '../types';
import { ArrowRight, Handshake, Sprout } from 'lucide-react';
import heroBannerImage from '../assets/images/hero-img.jpg';

import { InquiryCallback } from '../types';

interface HeroProps {
  companySettings: CompanySettings;
  onNavigateSection: (sectionId: string) => void;
  onOpenInquiryModal: InquiryCallback;
}

const impactPillars = [
  { label: 'Need', detail: 'Understand the real farm challenge' },
  { label: 'Equip', detail: 'Provide practical tools and support' },
  { label: 'Grow', detail: 'Build resilient farm businesses' },
  { label: 'Impact', detail: 'Create measurable value over time' }
];

export const Hero: React.FC<HeroProps> = ({
  companySettings,
  onNavigateSection,
  onOpenInquiryModal
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(201,149,69,0.2),transparent_25%),linear-gradient(120deg,#0f2f2b_0%,#173a31_40%,#2b241d_100%)] text-white">
      <div className="absolute inset-0 opacity-60" aria-hidden="true">
        <div className="growth-line h-full w-full" />
      </div>

      <div className="agro-shell relative mx-auto px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="max-w-2xl space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
              <Sprout className="h-4 w-4 text-[var(--agro-gold)]" />
              <span>GleanAgro Nigeria</span>
            </div>

            <h1 className="display-font text-4xl font-bold leading-[1.06] tracking-[-0.06em] text-white sm:text-6xl">
              Practical solutions for farmers who need results, not theory.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">
              We help smallholder farmers, women-led agribusinesses, and value-chain partners build resilience, improve productivity, and unlock better market opportunities from the farm to the buyer.
            </p>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => onNavigateSection('solutions')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--agro-gold)] px-5 py-3.5 text-sm font-bold text-[#1b2e28] shadow-lg shadow-black/20 transition hover:bg-[var(--agro-gold-soft)]"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onOpenInquiryModal('Impact Investor')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:border-[var(--agro-gold)] hover:text-[var(--agro-gold-soft)]"
              >
                <Handshake className="h-4 w-4" />
                <span>Partner With Us</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm text-emerald-100/90">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--agro-gold)]" aria-hidden="true" />
              <span>Need → Equip → Grow → Impact</span>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/15 bg-stone-900/40 shadow-2xl shadow-black/30 sm:min-h-[470px]">
            <img
              src={heroBannerImage}
              alt="African farmers working in a field with a modern agricultural ecosystem"
              className="h-full min-h-[360px] w-full object-cover object-center transition-transform duration-[4000ms] hover:scale-105 sm:min-h-[470px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d1b]/85 via-[#0d1d1b]/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#0f2f2b]/75 p-4 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--agro-gold-soft)]">Built around farmer realities</p>
              <p className="mt-2 text-sm text-stone-100">Inputs, finance, training, markets and enterprise development working together.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {impactPillars.map(({ label, detail }) => (
            <div key={label} className="metric-tile p-4 text-left text-white/90">
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--agro-gold-soft)]">{label}</div>
              <div className="mt-2 text-sm text-white">{detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
