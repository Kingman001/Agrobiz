import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CloudSun,
  Gauge,
  Handshake,
  Layers3,
  PackageCheck,
  Scale,
  Search,
  ShieldCheck,
  Sprout,
  Store,
  Truck,
  Users,
  Wheat,
} from 'lucide-react';
import { InquiryCallback } from '../types';
import heroImage from '../assets/images/agribusiness_hero_banner_1784882619239.jpg';

interface StoragePageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

type IconCard = [string, string, React.ElementType];

const challenges = [
  ['Post-harvest losses', 'Poor handling, spoilage, pests, moisture, and delays can reduce the quantity and quality of produce available for sale.'],
  ['Inadequate storage', 'Many farmers lack storage that fits their crops, scale, location, and financial capacity.'],
  ['Moisture and quality problems', 'Improper drying or moisture control can lead to mould, deterioration, contamination, and reduced market value.'],
  ['Poor sorting and packaging', 'Mixed quality, damaged produce, and unsuitable packaging can affect buyer confidence and selling opportunities.'],
  ['Forced selling', 'Storage limitations, urgent financial needs, or limited market options may pressure farmers to sell immediately after harvest.'],
  ['Weak post-harvest planning', 'Without a plan, farmers may not know how much to store, where to store it, when to sell, or what quality standards to maintain.'],
];

const flow = ['Harvest', 'Handle', 'Dry', 'Sort', 'Store', 'Monitor', 'Market'];

const services: IconCard[] = [
  ['Post-harvest handling guidance', 'Support on harvesting, movement, loading, transportation, and handling practices that can help reduce damage and quality loss.', Truck],
  ['Drying and moisture management', 'Guidance on appropriate drying, moisture control, and preparation for storage or sale.', CloudSun],
  ['Sorting and grading', 'Support in separating produce according to quality, size, condition, and buyer requirements.', Scale],
  ['Storage assessment', 'Assess storage needs based on crop type, quantity, duration, location, cost, and available facilities.', Search],
  ['Storage options and systems', 'Explore options such as improved household storage, hermetic storage, improved packaging, grain stores, warehouses, cold storage where appropriate, and crop-specific systems.', Store],
  ['Packaging and market preparation', 'Build understanding of packaging, labelling, cleanliness, presentation, and preparation for different buyers.', PackageCheck],
  ['Stock monitoring and records', 'Track quantity, storage date, condition, moisture or quality checks, pest activity, losses, sales, and movement.', ClipboardCheck],
  ['Post-harvest planning', 'Decide what to store, how long to store it, what it may cost, and when it may be appropriate to sell.', Gauge],
];

const audiences = [
  ['Smallholder farmers', 'Reduce losses and preserve the value of harvested crops.'],
  ['Farmer cooperatives and groups', 'Improve collective storage, aggregation, quality, and market preparation.'],
  ['Emerging commercial farms', 'Build more organized post-harvest systems as production increases.'],
  ['Women agripreneurs', 'Protect produce and improve income opportunities through practical post-harvest decisions.'],
  ['Youth agripreneurs', 'Strengthen businesses in farming, aggregation, processing, logistics, or agricultural enterprise development.'],
  ['Processors and agricultural enterprises', 'Improve handling, storage, packaging, and supply coordination.'],
];

const cropCategories: IconCard[] = [
  ['Grains and cereals', 'Drying, moisture control, pest protection, clean storage, appropriate bags and containers, and stock monitoring.', Wheat],
  ['Legumes', 'Proper drying, pest and insect control, sorting, packaging, and protection from moisture.', Sprout],
  ['Fresh produce', 'Gentle handling, shade and ventilation, sorting, temperature management, fast movement, and suitable packaging.', CloudSun],
  ['Fish and aquaculture products', 'Hygienic handling, cooling or preservation, processing, packaging, storage duration, and food safety.', ShieldCheck],
  ['Livestock and poultry products', 'Hygiene, clean handling, appropriate storage, product quality, and safe movement and distribution.', PackageCheck],
];

const decisionSteps = [
  ['What are you storing?', 'Crop or product type'],
  ['How much do you have?', 'Quantity and scale'],
  ['How long will it be stored?', 'Short-term, seasonal, or longer-term'],
  ['What conditions are required?', 'Moisture, temperature, ventilation, pest protection, and hygiene'],
  ['What resources are available?', 'Space, power, equipment, labour, and finance'],
  ['What is the intended market?', 'Farm-gate, wholesale, processor, institutional, or bulk off-take'],
  ['What is economically practical?', 'Cost, expected value, risks, and likely returns'],
];

const process = [
  ['Understand the product', 'We identify the crop or product, its condition, quantity, perishability, and intended use.'],
  ['Assess the risk', 'We consider likely risks such as moisture, pests, spoilage, contamination, physical damage, and delayed sales.'],
  ['Recommend practical options', 'We explore suitable handling, drying, packaging, storage, and monitoring options.'],
  ['Prepare the produce', 'We support better sorting, grading, drying, packaging, and documentation where applicable.'],
  ['Store and monitor', 'We encourage regular checks of storage conditions, product quality, stock levels, and losses.'],
  ['Connect to the market', 'Where appropriate, we connect post-harvest preparation with market access, aggregation, processing, or bulk off-take opportunities.'],
];

const checklist = [
  'Produce has been harvested at the appropriate stage.',
  'Produce has been handled carefully.',
  'Damaged or contaminated produce has been separated.',
  'Drying or moisture requirements have been addressed.',
  'Produce has been sorted or graded where necessary.',
  'Storage space is clean and suitable.',
  'Pest and moisture risks have been considered.',
  'Packaging is appropriate for the product.',
  'Quantity and stock records are available.',
  'Storage duration and intended market are clear.',
  'Monitoring responsibilities have been assigned.',
  'A realistic selling or distribution plan exists.',
];

const principles = [
  ['Quality first', 'Good post-harvest practices should protect the quality and safety of agricultural products.'],
  ['Appropriate solutions', 'Storage systems should fit the crop, scale, environment, and resources available.'],
  ['Prevention over loss', 'It is often better to prevent avoidable losses than to manage them after they occur.'],
  ['Clean and safe practices', 'Hygiene, contamination prevention, and safe handling are essential throughout the post-harvest process.'],
  ['Records matter', 'Good records help farmers understand losses, storage costs, stock movement, and selling decisions.'],
  ['Market awareness', 'Post-harvest decisions should be connected to the intended market and buyer requirements.'],
  ['Economic practicality', 'A storage solution should protect value without creating unnecessary costs.'],
];

const SectionHeading = ({ eyebrow, title, copy, light = false }: { eyebrow?: string; title: string; copy?: string; light?: boolean }) => (
  <div className="max-w-3xl mb-10">
    {eyebrow && <p className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-emerald-300' : 'text-emerald-700'}`}>{eyebrow}</p>}
    <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-stone-900'}`}>{title}</h2>
    {copy && <p className={`mt-4 leading-relaxed ${light ? 'text-emerald-100/80' : 'text-stone-600'}`}>{copy}</p>}
  </div>
);

export const StoragePage: React.FC<StoragePageProps> = ({ onOpenInquiryModal, onNavigatePage }) => (
  <div className="bg-[var(--agro-cream)] text-stone-900">
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-900/40" />
      <img src={heroImage} alt="Harvested produce prepared for storage and market" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Storage &amp; Post-Harvest</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Protecting Harvests. Preserving Value.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/90">We help farmers and agricultural enterprises improve post-harvest handling, explore suitable storage options, and prepare produce for safer, better-organized, and more valuable market opportunities.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <button onClick={() => document.getElementById('post-harvest-support')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-bold text-stone-950 transition-colors hover:bg-amber-400">Explore Post-Harvest Support <ArrowRight className="h-4 w-4" /></button>
          <button onClick={() => onOpenInquiryModal('General')} className="rounded-xl border border-white/30 px-5 py-3 font-bold text-white transition-colors hover:bg-white/10">Talk to GleanAgro</button>
        </div>
      </div>
    </section>

    <section className="agro-shell py-20">
      <SectionHeading title="The Harvest Is Not the End of the Journey" copy="A successful harvest can still lose value through poor handling, inadequate drying, unsuitable storage, pest damage, contamination, weak packaging, or delayed access to markets." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map(([title, copy], index) => <article key={title} className="agro-card p-5"><span className="text-sm font-bold text-amber-600">0{index + 1}</span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{copy}</p></article>)}
      </div>
    </section>

    <section id="post-harvest-support" className="bg-white py-20">
      <div className="agro-shell">
        <SectionHeading eyebrow="Our solution" title="Better Handling From Harvest to Market" copy="GleanAgro helps farmers and agricultural enterprises make better post-harvest decisions by focusing on proper handling, quality preservation, suitable storage, packaging, and market preparation." />
        <div className="mb-14 grid grid-cols-2 gap-3 md:grid-cols-7">
          {flow.map((step, index) => <div key={step} className="relative rounded-xl bg-emerald-50 p-4 text-center font-bold text-emerald-900">{index < flow.length - 1 && <span className="absolute -right-3 top-1/2 hidden text-emerald-400 md:block">→</span>}<span className="mb-1 block text-xs text-emerald-600">0{index + 1}</span>{step}</div>)}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, copy, Icon]) => <article key={title} className="agro-card p-6"><Icon className="h-7 w-7 text-emerald-700" /><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-emerald-950 py-20 text-white">
      <div className="agro-shell">
        <SectionHeading light title="Every Stage Can Protect—or Reduce—Value" copy="Post-harvest management is connected to the entire agricultural value chain. A farmer may produce a good crop, but poor handling or storage can reduce its final value. That is why GleanAgro approaches post-harvest support as part of the wider farm and market system." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {['Harvesting', 'Handling & Transportation', 'Drying & Moisture Control', 'Sorting & Grading', 'Storage & Monitoring', 'Packaging', 'Market Access'].map((stage, index) => <div key={stage} className="relative rounded-xl border border-emerald-800 bg-emerald-900/60 p-4 text-center text-sm font-bold text-emerald-50">{index < 6 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 text-amber-400 lg:block" />}{stage}</div>)}
        </div>
      </div>
    </section>

    <section className="agro-shell py-20">
      <SectionHeading title="Who Can Benefit From Our Support?" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{audiences.map(([title, copy]) => <article key={title} className="agro-card p-6"><Users className="h-6 w-6 text-emerald-700" /><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{copy}</p></article>)}</div>
    </section>

    <section className="bg-stone-100 py-20">
      <div className="agro-shell">
        <SectionHeading title="The Right Storage Method Depends on the Crop" copy="Different crops have different post-harvest requirements. Storage decisions should consider moisture content, perishability, temperature needs, pest risks, packaging, market destination, and expected storage duration." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{cropCategories.map(([title, copy, Icon]) => <article key={title} className="rounded-2xl border border-stone-200 bg-white p-6"><Icon className="h-7 w-7 text-amber-600" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="bg-white py-20">
      <div className="agro-shell">
        <SectionHeading title="Choosing the Right Storage Solution" copy="The best storage solution is not always the most expensive one. It is the one that protects quality and makes economic sense for the farm." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {decisionSteps.map(([question, answer], index) => <article key={question} className="agro-card p-5"><span className="text-sm font-bold text-amber-600">0{index + 1}</span><h3 className="mt-3 font-bold">{question}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{answer}</p></article>)}
        </div>
      </div>
    </section>

    <section className="agro-shell py-20">
      <SectionHeading title="How We Work" copy="A practical process for moving from product understanding to better preparation and informed market decisions." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{process.map(([title, copy], index) => <article key={title} className="agro-card p-6"><span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 font-bold text-white">{index + 1}</span><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{copy}</p></article>)}</div>
      <p className="mt-8 text-center text-sm font-bold text-emerald-800">Understand → Assess → Recommend → Prepare → Store → Monitor → Market</p>
    </section>

    <section className="bg-emerald-50 py-20">
      <div className="agro-shell">
        <SectionHeading title="Is Your Harvest Ready for Storage or Sale?" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{checklist.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-white p-4 text-sm text-stone-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />{item}</div>)}</div>
      </div>
    </section>

    <section className="bg-white py-20">
      <div className="agro-shell">
        <SectionHeading title="Protecting Produce Through Practical Decisions" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{principles.map(([title, copy]) => <article key={title} className="agro-card p-6"><ShieldCheck className="h-6 w-6 text-emerald-700" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="bg-stone-100 py-20">
      <div className="agro-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div><SectionHeading eyebrow="Innovation Farm connection" title="Learning How to Preserve Agricultural Value" copy="GleanAgro’s Innovation Farm can support practical learning around post-harvest handling, storage, production records, and the relationship between farm practices and market value." /><p className="text-sm leading-relaxed text-stone-600">Potential learning areas include harvest timing, produce handling, drying methods, storage options, packaging, stock monitoring, post-harvest losses, production costs, and market preparation.</p></div>
        <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center"><Layers3 className="mx-auto h-10 w-10 text-emerald-700" /><div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-emerald-800">{['Test', 'Learn', 'Adapt', 'Demonstrate', 'Scale'].map((item, index) => <React.Fragment key={item}><span className="rounded-full bg-emerald-50 px-3 py-2">{item}</span>{index < 4 && <ArrowRight className="h-4 w-4 text-amber-500" />}</React.Fragment>)}</div><p className="mt-5 text-xs leading-relaxed text-stone-500">Specific facilities, technologies, results, or production figures should only be published when available and confirmed.</p></div>
      </div>
    </section>

    <section className="bg-emerald-950 py-20 text-white">
      <div className="agro-shell">
        <SectionHeading light title="What Better Post-Harvest Practices Can Support" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{[['Reduced avoidable losses', 'Better handling and storage practices can help reduce preventable damage and spoilage.'], ['Improved product quality', 'Sorting, drying, packaging, and monitoring can help preserve quality.'], ['Better storage decisions', 'Farmers can make more informed choices about storage methods, duration, and costs.'], ['Improved market readiness', 'Well-prepared produce may be better positioned for buyers, processors, and aggregation opportunities.'], ['Better record-keeping', 'Post-harvest records can support stronger farm management and commercial planning.'], ['Greater value retention', 'Protecting harvested produce can help farmers preserve more of the value created during production.']].map(([title, copy]) => <article key={title} className="rounded-2xl border border-emerald-800 bg-emerald-900/60 p-6"><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-emerald-100/80">{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="agro-shell py-20">
      <SectionHeading title="Post-Harvest Success Requires a Connected Approach" copy="Post-harvest decisions work best when they are connected to production planning, technical support, finance, and the market." />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{['Farm Inputs', 'Training & Technical Support', 'Agricultural Technology', 'Storage & Post-Harvest', 'Market Access', 'Agricultural Finance'].map((item) => <div key={item} className="rounded-xl bg-emerald-50 p-4 text-center text-sm font-bold text-emerald-900">{item}</div>)}</div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-stone-600"><span>Better Planned Production</span><ArrowDown className="h-4 w-4 text-amber-600" /><span>Better Harvest Handling</span><ArrowDown className="h-4 w-4 text-amber-600" /><span>Market-Ready Produce</span><ArrowDown className="h-4 w-4 text-amber-600" /><span>Stronger Agricultural Enterprise</span></div>
      <div className="mt-10 flex flex-wrap gap-3">{[['Farm Inputs', 'farm-inputs'], ['Training & Technical Support', 'tech-support'], ['Irrigation & Agricultural Technology', 'irrigation'], ['Agricultural Finance', 'agric-finance'], ['Market Access & Bulk Off-Take', 'market-access'], ['Agribusiness & Enterprise Development', 'enterprise']].map(([label, pageId]) => <button key={pageId} onClick={() => onNavigatePage(pageId)} className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50">{label}</button>)}</div>
    </section>

    <section className="bg-amber-50 py-20">
      <div className="agro-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Protect the value of your harvest</p><h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Let’s Help You Protect the Value of Your Harvest</h2><p className="mt-4 leading-relaxed text-stone-600">Whether you are a farmer, cooperative, agribusiness, processor, or agricultural enterprise, GleanAgro can help you explore practical ways to improve post-harvest handling, storage, and market preparation.</p></div>
        <div className="flex shrink-0 flex-wrap gap-3"><button onClick={() => onOpenInquiryModal('General')} className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 font-bold text-white transition-colors hover:bg-emerald-900">Discuss Your Post-Harvest Needs <Handshake className="h-4 w-4" /></button><button onClick={() => onNavigatePage('market-access')} className="rounded-xl border border-emerald-800 px-5 py-3 font-bold text-emerald-800 transition-colors hover:bg-emerald-100">Explore Market Access</button></div>
      </div>
    </section>
  </div>
);
