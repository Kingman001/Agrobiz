import React from 'react';
import { CompanySettings, InquiryCallback, ProducePillar } from '../types';
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
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  companySettings,
  onSelectPillar,
  onOpenInquiryModal,
  onNavigatePage
}) => {
  return (
    <div className="space-y-12">
      {/* 01 — HERO */}
      <Hero
        companySettings={companySettings}
        onNavigateSection={onNavigatePage}
        onOpenInquiryModal={onOpenInquiryModal}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 02 — THE CHALLENGE */}
        <section id="challenge" className="pt-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">Smallholder Farmers Feed Africa. They Deserve Better Tools to Thrive.</h2>
            <p className="mt-3 text-stone-600">Smallholder farmers face limited access to inputs, low productivity, weak finance options and constrained market access. GleanAgro designs practical solutions to change that.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm">
              <h4 className="font-bold text-emerald-800">Limited Access</h4>
              <p className="mt-1 text-sm text-stone-600">Inconsistent inputs, tools and extension services near farms.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm">
              <h4 className="font-bold text-emerald-800">Low Productivity</h4>
              <p className="mt-1 text-sm text-stone-600">Outdated practices and limited access to tested agronomy.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm">
              <h4 className="font-bold text-emerald-800">Limited Finance</h4>
              <p className="mt-1 text-sm text-stone-600">Few affordable credit options and limited value-chain finance.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm">
              <h4 className="font-bold text-emerald-800">Weak Market Access</h4>
              <p className="mt-1 text-sm text-stone-600">Farmers lack guaranteed buyers and aggregation services.</p>
            </div>
          </div>

          <div className="mt-6 text-center text-stone-700">We believe agriculture can work differently.</div>
        </section>

        {/* 03 — OUR APPROACH */}
        <section id="approach" className="pt-6 bg-stone-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">One Farmer. One Ecosystem. Greater Opportunity.</h2>
            <p className="mt-3 text-stone-600">We combine inputs, knowledge, finance, technology, markets and value addition around each farmer to create a resilient local ecosystem.</p>

            <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-white border flex items-center justify-center">Inputs</div>
                <div className="mt-2 text-sm text-stone-700">Inputs</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-white border flex items-center justify-center">Knowledge</div>
                <div className="mt-2 text-sm text-stone-700">Knowledge</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-white border flex items-center justify-center">Finance</div>
                <div className="mt-2 text-sm text-stone-700">Finance</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-white border flex items-center justify-center">Tech</div>
                <div className="mt-2 text-sm text-stone-700">Technology</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-white border flex items-center justify-center">Markets</div>
                <div className="mt-2 text-sm text-stone-700">Markets</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-white border flex items-center justify-center">Value</div>
                <div className="mt-2 text-sm text-stone-700">Value Add.</div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — HOW IT WORKS */}
        <section id="how-it-works" className="pt-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">How it Works</h2>
            <p className="mt-3 text-stone-600">A simple six-step journey from understanding farmer needs to scaling impact.</p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-6 gap-4">
            {['Understand','Equip','Train','Produce','Connect','Grow'].map((s) => (
              <div key={s} className="p-4 bg-white rounded-xl border text-center">
                <div className="font-bold text-emerald-700">{s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — SOLUTIONS */}
        <section id="solutions" className="pt-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">Practical Solutions for Real Agricultural Challenges</h2>
            <p className="mt-3 text-stone-600">Solutions designed for smallholder realities — practical, tested and scalable.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Farm Inputs','Agricultural Finance','Training & Technical Support','Irrigation & Greenhouse','Storage & Post-Harvest','Market Access','Enterprise Development','Investment & Partnerships'].map((s) => (
              <div key={s} className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm">
                <h4 className="font-bold text-emerald-800">{s}</h4>
                <p className="mt-1 text-sm text-stone-600">Learn how we deliver {s.toLowerCase()} to smallholder communities.</p>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — INNOVATION FARM */}
        <section id="innovation-farm" className="pt-6 bg-stone-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">We Test Before We Recommend</h2>
            <p className="mt-3 text-stone-600">Our demonstration Innovation Farm validates technologies, production systems and business models before recommending them to farmers and partners.</p>
          </div>
        </section>

        {/* 07 — WOMEN & YOUTH */}
        <section id="women-youth" className="pt-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">The Future of Agriculture Is Inclusive</h2>
            <p className="mt-3 text-stone-600">Three pathways for women and youth: Learn → Launch → Grow.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-2xl border">
              <h4 className="font-bold">Learn</h4>
              <p className="text-sm text-stone-600 mt-1">Training, mentorship and agripreneurship programs.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border">
              <h4 className="font-bold">Launch</h4>
              <p className="text-sm text-stone-600 mt-1">Support to start income-generating farm enterprises.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border">
              <h4 className="font-bold">Grow</h4>
              <p className="text-sm text-stone-600 mt-1">Market linkages, finance and scale support.</p>
            </div>
          </div>
        </section>

        {/* 08 — IMPACT */}
        <section id="impact" className="pt-6 bg-emerald-950 text-emerald-100 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">Empowering Farmers. Strengthening Communities.</h2>
            <p className="mt-3 text-emerald-200">We report only verified internal figures from our operations and programs.</p>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-serif font-bold">120+ Ha</div>
              <div className="text-sm text-emerald-200">Flagship Farm Land Under Production</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold">25,000 kg</div>
              <div className="text-sm text-emerald-200">Fish Yield Per Aquaculture Cycle</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold">15,000+</div>
              <div className="text-sm text-emerald-200">Smallholder Farmers Targeted</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold">&lt;5%</div>
              <div className="text-sm text-emerald-200">Post-Harvest Spoilage Target</div>
            </div>
          </div>
        </section>

        {/* 09 — FARMER STORIES */}
        <section id="stories" className="pt-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">Real Farmers. Real Progress.</h2>
            <p className="mt-3 text-stone-600">Stories from farmers in our network showing measurable progress.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border">
                <div className="h-36 bg-stone-200 rounded-md" />
                <h4 className="font-bold mt-3">Farmer Name</h4>
                <div className="text-sm text-stone-500">Location • Enterprise</div>
                <p className="mt-2 text-sm text-stone-600">"Short quote from the farmer about impact and change."</p>
                <div className="mt-3">
                  <button onClick={() => onNavigatePage('stories')} className="text-emerald-700 font-bold">Read Story</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10 — PARTNERS */}
        <section id="partners" className="pt-6">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">Growing Together.</h2>
          </div>

          <PartnershipsSection
            companySettings={companySettings}
            initialRole="Commercial Buyer"
            initialProduceInterest={''}
          />
        </section>

        {/* 11 — INSIGHTS */}
        <section id="insights" className="pt-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">Ideas From the Field.</h2>
            <p className="mt-3 text-stone-600">Practical guidance and updates from our teams working in the field.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-2xl border">
              <h4 className="font-bold">Farmer Guide</h4>
              <p className="text-sm text-stone-600">Practical how-to guides for smallholders.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border">
              <h4 className="font-bold">GleanAgro Story</h4>
              <p className="text-sm text-stone-600">Our journey and lessons from the field.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border">
              <h4 className="font-bold">Agricultural Insight</h4>
              <p className="text-sm text-stone-600">Research-backed practical insights for farmers and partners.</p>
            </div>
          </div>
        </section>

        {/* 12 — FINAL CTA */}
        <section id="final-cta" className="pt-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">Let's Build a Better Agricultural Future Together.</h2>
          <div className="mt-5 flex items-center justify-center gap-4">
            <button onClick={() => onOpenInquiryModal('Impact Investor')} className="px-6 py-3 bg-emerald-800 text-white rounded-xl font-bold">Partner With Us</button>
            <button onClick={() => onNavigatePage('farmer-hub')} className="px-6 py-3 border border-emerald-700 text-emerald-800 rounded-xl font-bold">Join Farmer Network</button>
          </div>
        </section>

      </main>

    </div>
  );
};
