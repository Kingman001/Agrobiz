import React from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  LineChart,
  MapPin,
  Sprout,
  Target,
  Users,
  Wheat,
} from 'lucide-react';
import { CompanySettings, InquiryCallback } from '../types';
import heroImage from '../assets/images/smallholder_farmer_hub_1784882677913.jpg';

interface AboutPageProps {
  companySettings: CompanySettings;
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

const solutions = [
  ['Farm Inputs', 'Helping farmers explore suitable inputs and use them effectively.', Sprout],
  ['Training & Technical Support', 'Practical knowledge, demonstrations, and technical guidance for better decisions.', Lightbulb],
  ['Irrigation & Agricultural Technology', 'Appropriate technologies for water management, efficiency, and resilience.', LineChart],
  ['Agricultural Finance', 'Helping farmers and enterprises understand financial needs and relevant opportunities.', Target],
  ['Storage & Post-Harvest', 'Better handling, storage, packaging, and preservation of harvested produce.', Wheat],
  ['Market Access & Bulk Off-Take', 'Preparing farmers and enterprises for buyers, markets, and aggregation opportunities.', Handshake],
  ['Agribusiness & Enterprise Development', 'Planning, improved systems, and support for agricultural ideas and businesses.', Users],
];

const audiences = [
  ['Smallholder Farmers', 'Practical solutions to improve productivity, sustainability, and market participation.'],
  ['Women in Agriculture', 'Support for women in farming, processing, trading, agribusiness, and services.'],
  ['Youth Agripreneurs', 'A pathway for entrepreneurship, innovation, employment, and impact.'],
  ['Farmer Cooperatives', 'Stronger production systems, aggregation, market access, and collective opportunities.'],
  ['Agricultural Enterprises', 'Support for businesses in production, processing, technology, logistics, and storage.'],
  ['Development & Market Partners', 'Practical ways to contribute to stronger systems and market opportunities.'],
];

const approach = ['Understand', 'Assess', 'Test', 'Learn', 'Adapt', 'Demonstrate', 'Scale'];
const values = [
  ['Partners First', 'We build relationships around trust, mutual value, and the needs of our partners.'],
  ['Integrity in Service', 'We communicate clearly, act honestly, and deliver with accountability.'],
  ['Shared Prosperity', 'Agricultural growth should create value for farmers, communities, and partners.'],
  ['Continuous Improvement', 'We learn from our work and improve our solutions over time.'],
  ['Eliminate Complexity', 'We simplify processes so people can understand and use solutions effectively.'],
];
const whyDescriptions = {
  'Farmer-Centered': 'We focus on the needs, realities, and goals of farmers and enterprises.',
  Practical: 'We seek solutions that can be understood, adopted, maintained, and used.',
  Connected: 'We connect inputs, knowledge, technology, finance, storage, markets, and enterprise development.',
  Sustainable: 'We consider long-term value, resource use, resilience, and usefulness over time.',
  'Innovation-Minded': 'We remain open to better ideas, technologies, systems, and approaches.',
  'Partnership-Driven': 'We collaborate with farmers, businesses, communities, experts, institutions, and markets.',
} as const;

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenInquiryModal,
  onNavigatePage,
}) => {
  const goToSolutions = () => onNavigatePage('solutions');

  return (
    <div className="bg-[#f9f7f1] text-stone-900">
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,149,69,0.2),transparent_38%)]" />
        <div className="agro-shell relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              <Sprout className="h-4 w-4" /> About GleanAgro
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Growing Agriculture. <span className="text-[#f4d39a]">Growing Possibilities.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-emerald-50/80 sm:text-xl">
              GleanAgro is an agricultural solutions company helping farmers, agripreneurs, women, and youth become more productive, self-sustaining, and commercially connected through practical, sustainable, and technology-enabled solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={goToSolutions} className="inline-flex items-center gap-2 rounded-full bg-[#c99545] px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-[#f4d39a]">
                Explore Our Solutions <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => onOpenInquiryModal('General')} className="rounded-full border border-emerald-300/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Work With GleanAgro
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#f4d39a]/30" />
            <img src={heroImage} alt="Farmer working in a GleanAgro field" className="relative h-[420px] w-full rounded-[1.75rem] object-cover shadow-2xl sm:h-[500px]" />
            <div className="absolute bottom-5 left-5 rounded-xl bg-emerald-950/90 px-4 py-3 text-sm text-emerald-50 backdrop-blur">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#f4d39a]">Our belief</span>
              Practical opportunity can unlock agricultural potential.
            </div>
          </div>
        </div>
      </section>

      <section className="agro-shell grid gap-12 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-28">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Who we are</p>
          <h2 className="text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">Agriculture Is More Than Production</h2>
          <p className="mt-6 border-l-4 border-[#c99545] pl-5 text-xl font-semibold leading-relaxed text-emerald-900">We help connect agricultural potential with practical opportunity.</p>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-stone-600">
          <p>Agriculture supports livelihoods, communities, businesses, and the future of food systems. Yet many farmers and agricultural enterprises face challenges that go beyond the farm.</p>
          <p>They may need better access to inputs, practical knowledge, suitable technology, financing, storage, market opportunities, and business support. GleanAgro exists to help connect these needs.</p>
          <p>We provide practical agricultural solutions that help farmers and enterprises improve productivity, strengthen operations, make better decisions, and build toward sustainable growth.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="agro-shell grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-emerald-950 p-8 text-white sm:p-10">
            <Target className="mb-6 h-9 w-9 text-[#f4d39a]" />
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Our mission</p>
            <h2 className="text-3xl font-bold leading-tight">To revolutionize the agricultural sector by providing innovative and sustainable solutions that help smallholder farmers become more productive, achieve self-sustainability, and create better opportunities for women and youth in agriculture.</h2>
          </article>
          <article className="rounded-3xl border border-emerald-900/10 bg-[#f2efe6] p-8 sm:p-10">
            <Leaf className="mb-6 h-9 w-9 text-emerald-700" />
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Our vision</p>
            <h2 className="text-3xl font-bold leading-tight text-emerald-950">A stronger agricultural ecosystem where farmers and agricultural enterprises have the knowledge, resources, technology, and market connections needed to thrive.</h2>
          </article>
        </div>
        <div className="agro-shell mt-10 grid gap-3 text-sm text-stone-600 sm:grid-cols-3 lg:grid-cols-6">
          {['Practical', 'Understandable', 'Affordable where possible', 'Locally suitable', 'Sustainable', 'Connected to need'].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 p-3"><Check className="h-4 w-4 shrink-0 text-emerald-700" />{item}</div>
          ))}
        </div>
      </section>

      <section className="agro-shell py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">What we do</p>
          <h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Connecting the Pieces of Agricultural Growth</h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">Agricultural challenges are rarely solved by one service alone. We bring together practical support across key areas of the agricultural value chain.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(([title, description, Icon]) => {
            const SolutionIcon = Icon as React.ElementType;
            return <article key={title as string} className="agro-card p-6"><SolutionIcon className="mb-5 h-7 w-7 text-emerald-700" /><h3 className="text-lg font-bold">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{description as string}</p></article>;
          })}
        </div>
        <button onClick={goToSolutions} className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950">Explore All Solutions <ArrowRight className="h-4 w-4" /></button>
      </section>

      <section className="bg-[#f2efe6] py-20">
        <div className="agro-shell">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Who we serve</p>
          <h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">People at the Heart of Agriculture</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, description]) => <article key={title} className="rounded-2xl bg-white p-6 shadow-sm"><Users className="mb-5 h-6 w-6 text-emerald-700" /><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="agro-shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Our approach</p>
            <h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Practical Solutions. Stronger Agricultural Systems.</h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">We begin with the real situation of the farmer or enterprise, then learn and adapt before pursuing responsible growth.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {approach.map((step, index) => <div key={step} className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">{index + 1}</span><div><h3 className="font-bold">{step}</h3><p className="mt-1 text-sm text-stone-600">{['Understand the context and challenge.', 'Assess options, risks, and costs.', 'Explore through trials or demonstrations.', 'Pay attention to what works.', 'Improve the solution for its context.', 'Share lessons and evidence.', 'Grow with capacity, demand, and sustainability.'][index]}</p></div></div>)}
          </div>
        </div>
        <p className="mt-8 text-center text-sm font-bold tracking-wide text-emerald-800">{approach.join('  →  ')}</p>
      </section>

      <section className="bg-emerald-950 py-20 text-white">
        <div className="agro-shell">
          <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Why GleanAgro</p><h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Why Work With GleanAgro?</h2></div>
          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(whyDescriptions).map(([item, description]) => <div key={item} className="border-t border-emerald-800 pt-5"><CircleCheck className="mb-4 h-6 w-6 text-[#f4d39a]" /><h3 className="text-xl font-bold">{item}</h3><p className="mt-2 text-sm leading-relaxed text-emerald-100/70">{description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="agro-shell grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Our values</p><h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">The Principles That Guide Our Work</h2><p className="mt-5 text-lg leading-relaxed text-stone-600">We seek to make agricultural growth more useful, inclusive, and durable for the people and enterprises involved.</p></div>
        <div className="space-y-3">{values.map(([title, description]) => <div key={title} className="rounded-2xl border border-stone-200 bg-white p-5"><h3 className="font-bold text-emerald-900">{title}</h3><p className="mt-1 text-sm leading-relaxed text-stone-600">{description}</p></div>)}</div>
      </section>

      <section className="bg-white py-20">
        <div className="agro-shell grid gap-12 lg:grid-cols-2">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Women & youth</p><h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Creating Space for the Next Generation of Agriculture</h2><p className="mt-5 text-lg leading-relaxed text-stone-600">Women and young people have important roles to play in the future of agriculture. We seek to support their participation through practical knowledge, enterprise development, technology opportunities, market connections, and relevant resources.</p></div>
          <div className="grid content-start gap-3 sm:grid-cols-2">{['Agricultural entrepreneurship', 'Practical skills development', 'Enterprise planning', 'Access to technology', 'Market participation', 'Leadership and innovation', 'Value addition and processing', 'Employment and income opportunities'].map((item) => <div key={item} className="flex gap-2 rounded-xl bg-[#f2efe6] p-3 text-sm"><Check className="h-4 w-4 shrink-0 text-emerald-700" />{item}</div>)}</div>
        </div>
      </section>

      <section className="agro-shell py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <img src={heroImage} alt="Learning by doing on a GleanAgro farm" className="h-[360px] w-full rounded-3xl object-cover shadow-lg" />
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">The Innovation Farm</p><h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Learning by Doing</h2><p className="mt-5 text-lg leading-relaxed text-stone-600">GleanAgro’s Innovation Farm provides an opportunity to explore agricultural practices, technologies, enterprise systems, and practical solutions in a real operating environment.</p><div className="mt-6 flex flex-wrap gap-2">{['Test', 'Learn', 'Adapt', 'Demonstrate', 'Scale'].map((item) => <span key={item} className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-900">{item}</span>)}</div><button onClick={goToSolutions} className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-900">Explore the Innovation Farm <ArrowRight className="h-4 w-4" /></button></div>
        </div>
      </section>

      <section className="bg-[#f2efe6] py-20">
        <div className="agro-shell text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Our broader vision</p><h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">A More Connected Agricultural Ecosystem</h2>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">{['Knowledge', 'Inputs', 'Technology', 'Finance', 'Storage', 'Markets', 'Enterprise Development'].map((item) => <React.Fragment key={item}><span className="rounded-full bg-white px-4 py-3 text-sm font-bold text-emerald-900 shadow-sm">{item}</span><ChevronRight className="hidden h-4 w-4 text-[#c99545] sm:block" /></React.Fragment>)}</div>
          <div className="mx-auto mt-8 max-w-md space-y-2"><div className="rounded-2xl bg-emerald-900 p-4 font-bold text-white">Stronger Agricultural Businesses</div><div className="text-2xl text-[#c99545]">↓</div><div className="rounded-2xl bg-white p-4 font-bold text-emerald-900">Improved Livelihoods</div><div className="text-2xl text-[#c99545]">↓</div><div className="rounded-2xl bg-[#c99545] p-4 font-bold text-emerald-950">More Resilient Communities</div></div>
        </div>
      </section>

      <section className="bg-emerald-950 px-4 py-20 text-center text-white sm:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl"><MapPin className="mx-auto mb-5 h-8 w-8 text-[#f4d39a]" /><h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Let’s Grow Agriculture Together</h2><p className="mt-5 text-lg leading-relaxed text-emerald-100/80">Whether you are a farmer, agripreneur, cooperative, technical partner, market actor, investor, or organisation interested in agricultural development, we invite you to explore how we can work together.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><button onClick={goToSolutions} className="rounded-full bg-[#c99545] px-6 py-3 font-bold text-emerald-950 hover:bg-[#f4d39a]">Explore Our Solutions</button><button onClick={() => onOpenInquiryModal('General')} className="rounded-full border border-emerald-300/40 px-6 py-3 font-bold hover:bg-white/10">Contact GleanAgro</button></div></div>
      </section>
    </div>
  );
};
