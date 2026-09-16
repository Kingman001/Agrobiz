import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Handshake,
  MapPin,
  PackageCheck,
  Scale,
  Search,
  ShieldCheck,
  Truck,
  Users,
  Wheat,
} from 'lucide-react';
import { InquiryCallback } from '../types';
import marketHeroImage from '../assets/images/agribusiness_hero_banner_1784882619239.jpg';

interface MarketAccessPageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

const challenges = [
  ['Limited market information', 'Timely information about buyer requirements, demand, pricing, and quality expectations is not always available.'],
  ['Scattered production', 'Small harvest volumes can make it difficult for individual farmers to meet the quantity required by larger buyers.'],
  ['Quality and grading challenges', 'Sorting, moisture levels, grading, and packaging can affect buyer confidence and selling opportunities.'],
  ['Uncertain buyer connections', 'Farmers may struggle to identify reliable buyers or negotiate suitable terms for their produce.'],
  ['Post-harvest losses', 'Delays in aggregation, storage, transportation, or sales can reduce the quality and value of produce.'],
];

const services: Array<[string, string, React.ElementType]> = [
  ['Market information & opportunity identification', 'Understand relevant opportunities, buyer expectations, product demand, and potential routes to market.', Search],
  ['Buyer connections', 'Facilitate connections between suitable producers, cooperatives, aggregators, processors, and potential off-takers.', Handshake],
  ['Bulk off-take coordination', 'Coordinate produce from multiple farmers or production points to meet larger buyer requirements where suitable.', Boxes],
  ['Produce aggregation', 'Organize supply from farmers and farmer groups to improve volume, consistency, and market readiness.', Users],
  ['Quality, sorting & packaging guidance', 'Build awareness of quality standards, grading, sorting, packaging, and presentation for different markets.', BadgeCheck],
  ['Market-ready production planning', 'Plan around realistic opportunities, buyer requirements, seasonal demand, and available resources.', ClipboardCheck],
  ['Logistics & delivery coordination', 'Support collection, transportation, delivery schedules, and communication between producers and buyers.', Truck],
  ['Market feedback & continuous improvement', 'Use market feedback to improve future production, quality, and commercial decisions.', ArrowRight],
];

const audiences = [
  ['Smallholder farmers', 'Better access to buyers, market information, and organized selling opportunities.'],
  ['Farmer cooperatives & groups', 'Aggregate produce, improve coordination, and explore larger markets.'],
  ['Emerging commercial farmers', 'Build more structured market relationships as operations grow.'],
  ['Women agripreneurs', 'Improve market visibility and explore commercial opportunities for women-led enterprises.'],
  ['Youth agripreneurs', 'Build production, aggregation, processing, or trading businesses.'],
  ['Processors & agricultural enterprises', 'Explore organized supply and suitable production networks.'],
];

const pathways = [
  ['Farm-gate markets', 'Connect farmers with buyers closer to the point of production.'],
  ['Aggregated commodity markets', 'Organize produce from multiple farmers for larger-volume opportunities.'],
  ['Processors & manufacturers', 'Explore supply relationships with businesses using agricultural produce as raw material.'],
  ['Institutional buyers', 'Consider schools, organizations, hospitality businesses, and other suitable institutions.'],
  ['Wholesale & distribution', 'Connect suitable produce with wholesalers, distributors, and market networks.'],
  ['Cross-regional opportunities', 'Explore opportunities beyond the immediate area when volume, quality, logistics, and terms make it practical.'],
];

const process = [
  ['Understand the opportunity', 'Identify the crop, product, location, season, expected quantity, and market objective.'],
  ['Assess market readiness', 'Consider quality, quantity, consistency, packaging, storage, timing, and logistics.'],
  ['Prepare the supply', 'Help farmers or groups understand what is required to present produce in a market-ready way.'],
  ['Coordinate aggregation', 'Where suitable, organize produce from multiple farmers or production points.'],
  ['Connect with potential buyers', 'Facilitate engagement with relevant buyers or market partners where opportunities are available.'],
  ['Review and improve', 'Use feedback to improve future production, quality, delivery, and commercial planning.'],
];

const readiness = [
  'The product is clearly identified.',
  'Quantity is estimated accurately.',
  'Quality requirements are understood.',
  'Produce is sorted and graded where necessary.',
  'Packaging is suitable for the product.',
  'Storage needs have been considered.',
  'Delivery location and timeline are clear.',
  'Relevant documentation and records are available.',
  'Buyer requirements have been discussed.',
  'Pricing and commercial terms are clearly understood.',
];

const principles = [
  ['Quality matters', 'Consistent quality helps build buyer confidence and long-term relationships.'],
  ['Reliability matters', 'Buyers need clear communication, realistic quantities, and dependable delivery.'],
  ['Transparency matters', 'Market relationships need clear expectations, agreed terms, and honest communication.'],
  ['Planning matters', 'Production and selling decisions should be informed by market realities—not assumptions alone.'],
  ['Relationships matter', 'Sustainable market access grows through trust, consistency, and continuous engagement.'],
  ['Shared prosperity matters', 'The goal is to create value across the ecosystem, from farmers to buyers and consumers.'],
];

const SectionHeading = ({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) => (
  <div className="max-w-3xl mb-10">
    {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-3">{eyebrow}</p>}
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">{title}</h2>
    {copy && <p className="mt-4 text-stone-600 leading-relaxed">{copy}</p>}
  </div>
);

export const MarketAccessPage: React.FC<MarketAccessPageProps> = ({ onOpenInquiryModal, onNavigatePage }) => (
  <div className="bg-[var(--agro-cream)] text-stone-900">
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-900/40" />
      <img src={marketHeroImage} alt="Agricultural produce prepared for market" className="absolute inset-0 w-full h-full object-cover opacity-35" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <p className="text-emerald-300 text-xs font-bold tracking-[0.2em] uppercase mb-5">Market Access &amp; Bulk Off-Take</p>
        <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">Connecting Farmers to Better Market Opportunities</h1>
        <p className="max-w-2xl mt-6 text-lg text-emerald-50/90 leading-relaxed">We help farmers, cooperatives, and agricultural enterprises prepare for the market, connect with suitable buyers, and explore bulk off-take opportunities that support more predictable and sustainable agricultural income.</p>
        <div className="flex flex-wrap gap-4 mt-9">
          <button onClick={() => document.getElementById('market-opportunities')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-bold text-stone-950 hover:bg-amber-400 transition-colors">Explore Market Opportunities <ArrowRight className="w-4 h-4" /></button>
          <button onClick={() => onOpenInquiryModal('General')} className="rounded-xl border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10 transition-colors">Talk to GleanAgro</button>
        </div>
      </div>
    </section>

    <section className="py-20 agro-shell">
      <SectionHeading title="Producing Good Crops Is Only Part of the Journey" copy="Many farmers work hard to produce crops but still face difficulties when it is time to sell. Limited market information, inconsistent quality, poor aggregation, and weak buyer connections can reduce the value of their harvest." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {challenges.map(([title, copy], index) => <article key={title} className="agro-card p-5"><span className="text-sm font-bold text-amber-600">0{index + 1}</span><h3 className="mt-4 font-bold text-lg">{title}</h3><p className="mt-2 text-sm text-stone-600 leading-relaxed">{copy}</p></article>)}
      </div>
    </section>

    <section id="market-opportunities" className="py-20 bg-white">
      <div className="agro-shell">
        <SectionHeading eyebrow="Our approach" title="From Farm Production to Market Opportunity" copy="GleanAgro works to connect agricultural production with market opportunities by helping farmers and agricultural enterprises understand market needs, prepare their produce, organize supply, and connect with potential buyers." />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-14">
          {['Understand', 'Prepare', 'Aggregate', 'Connect', 'Deliver', 'Grow'].map((step, index) => <div key={step} className="relative rounded-xl bg-emerald-50 p-4 text-center font-bold text-emerald-900">{index < 5 && <span className="hidden md:block absolute -right-3 top-1/2 text-emerald-400">→</span>}<span className="block text-xs text-emerald-600 mb-1">0{index + 1}</span>{step}</div>)}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(([title, copy, Icon]) => { const ServiceIcon = Icon as React.ElementType; return <article key={title} className="agro-card p-6"><ServiceIcon className="w-7 h-7 text-emerald-700" /><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm text-stone-600 leading-relaxed">{copy}</p></article>; })}
        </div>
      </div>
    </section>

    <section className="py-20 bg-emerald-950 text-white">
      <div className="agro-shell">
        <SectionHeading eyebrow="Bulk off-take" title="Making Collective Production More Marketable" copy="When farmers produce individually, their harvest may be too small or inconsistent to attract larger buyers. Through organized aggregation and bulk off-take coordination, farmers can work toward meeting larger market requirements." />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ['Better volumes', 'Combining suitable produce can create quantities that are more attractive to larger buyers.', Boxes],
            ['Improved consistency', 'Organized aggregation encourages attention to quality, grading, packaging, and product specifications.', Scale],
            ['Stronger market coordination', 'Clear communication between farmers, aggregators, logistics providers, and buyers can improve delivery planning.', Handshake],
          ].map(([title, copy, Icon]) => { const CardIcon = Icon as React.ElementType; return <article key={title as string} className="rounded-2xl border border-emerald-800 bg-emerald-900/60 p-6"><CardIcon className="w-8 h-8 text-amber-400" /><h3 className="mt-5 text-xl font-bold">{title as string}</h3><p className="mt-2 text-emerald-100/80 leading-relaxed">{copy as string}</p></article>; })}
        </div>
        <p className="mt-8 text-sm text-emerald-200/80 border-l-2 border-amber-400 pl-4">Opportunities are subject to buyer requirements, available opportunities, quality, quantity, logistics, and agreed commercial terms. We do not promise guaranteed buyers, prices, or sales.</p>
      </div>
    </section>

    <section className="py-20 agro-shell">
      <SectionHeading title="Who Can Benefit From Our Market Access Support?" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {audiences.map(([title, copy]) => <article key={title} className="agro-card p-6"><Users className="w-6 h-6 text-emerald-700" /><h3 className="mt-4 font-bold text-lg">{title}</h3><p className="mt-2 text-sm text-stone-600 leading-relaxed">{copy}</p></article>)}
      </div>
    </section>

    <section className="py-20 bg-stone-100">
      <div className="agro-shell">
        <SectionHeading title="Different Products. Different Market Pathways." copy="Market access depends on the crop, quality, quantity, season, location, and buyer requirements. We help agricultural enterprises explore the pathway that best fits their production and commercial goals." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{pathways.map(([title, copy]) => <article key={title} className="bg-white rounded-2xl border border-stone-200 p-6"><MapPin className="w-6 h-6 text-amber-600" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm text-stone-600 leading-relaxed">{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="agro-shell">
        <SectionHeading title="How We Work" copy="A practical process for moving from a market objective to better preparation and informed commercial decisions." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{process.map(([title, copy], index) => <article key={title} className="agro-card p-6"><span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-emerald-800 text-white font-bold">{index + 1}</span><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm text-stone-600 leading-relaxed">{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="py-20 agro-shell">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <SectionHeading title="Is Your Produce Ready for the Market?" copy="Market access is not only about finding a buyer. It is also about being prepared to meet the buyer’s requirements." />
        <div className="agro-panel p-6 sm:p-8 grid sm:grid-cols-2 gap-4">{readiness.map(item => <div key={item} className="flex gap-3 text-sm text-stone-700"><Check className="w-5 h-5 text-emerald-600 shrink-0" />{item}</div>)}</div>
      </div>
    </section>

    <section className="py-20 bg-emerald-50">
      <div className="agro-shell">
        <SectionHeading title="Better Markets Begin With Better Preparation" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{principles.map(([title, copy]) => <article key={title} className="bg-white rounded-2xl p-6 border border-emerald-100"><ShieldCheck className="w-6 h-6 text-emerald-700" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm text-stone-600 leading-relaxed">{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="py-20 agro-shell">
      <SectionHeading title="Market Access Works Better When the Farm Is Prepared" copy="Market access is connected to everything that happens before harvest. Farmers need the right inputs, practical knowledge, suitable technology, financial planning, and good production records to build stronger market opportunities." />
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-sm font-bold text-emerald-900">{['Inputs', 'Knowledge', 'Technology', 'Finance', 'Market Access', 'Better Production Planning', 'Improved Quality & Productivity', 'Market-Ready Produce', 'Stronger Commercial Opportunities'].map((item, index) => <React.Fragment key={item}><span className="rounded-full bg-emerald-100 px-4 py-2">{item}</span>{index < 8 && <ArrowRight className="w-4 h-4 text-emerald-500" />}</React.Fragment>)}</div>
      <div className="grid md:grid-cols-2 gap-5">
        <article className="agro-card p-7"><Wheat className="w-8 h-8 text-emerald-700" /><h3 className="mt-5 text-xl font-bold">Innovation Farm: learning what the market requires</h3><p className="mt-3 text-stone-600 leading-relaxed">Practical trials and observation can help us learn how production decisions affect crop quality, costs, harvest timing, storage needs, market readiness, buyer expectations, and farm profitability.</p><p className="mt-5 font-bold text-emerald-800">Test → Learn → Adapt → Demonstrate → Scale</p></article>
        <article className="agro-card p-7"><PackageCheck className="w-8 h-8 text-emerald-700" /><h3 className="mt-5 text-xl font-bold">What better market access can support</h3><ul className="mt-4 space-y-3 text-sm text-stone-600">{['Better market awareness', 'Improved market preparation', 'Stronger supply coordination', 'Reduced selling uncertainty', 'Improved buyer relationships', 'Greater commercial potential'].map(item => <li key={item} className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" />{item}</li>)}</ul></article>
      </div>
    </section>

    <section className="py-20 bg-amber-50">
      <div className="agro-shell text-center">
        <CircleDollarSign className="w-10 h-10 mx-auto text-amber-600" />
        <h2 className="mt-5 text-3xl sm:text-4xl font-bold">Ready to Explore Better Market Opportunities?</h2>
        <p className="max-w-2xl mx-auto mt-4 text-stone-600 leading-relaxed">Whether you are a farmer, cooperative, agribusiness, processor, or potential buyer, GleanAgro is interested in exploring practical ways to connect agricultural production with market opportunities.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-8"><button onClick={() => onOpenInquiryModal('General')} className="rounded-xl bg-emerald-800 px-5 py-3 font-bold text-white hover:bg-emerald-900">Discuss Your Market Needs</button><button onClick={() => onNavigatePage('solutions')} className="rounded-xl border border-emerald-800 px-5 py-3 font-bold text-emerald-800 hover:bg-white">Explore Our Solutions</button><button onClick={() => onOpenInquiryModal('Commercial Buyer')} className="rounded-xl border border-amber-600 px-5 py-3 font-bold text-amber-800 hover:bg-amber-100">Become a Market Partner</button></div>
      </div>
    </section>
  </div>
);
