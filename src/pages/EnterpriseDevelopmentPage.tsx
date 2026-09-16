import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Coins,
  Handshake,
  Lightbulb,
  Map,
  PackageCheck,
  Settings2,
  Sprout,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import heroImage from '../assets/images/agribusiness_hero_banner_1784882619239.jpg';
import { InquiryCallback } from '../types';

interface EnterpriseDevelopmentPageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

const challenges = [
  ['Weak Business Planning', 'Some agricultural enterprises begin without a clear understanding of their customers, costs, operations, risks, or growth pathway.'],
  ['Poor Financial Records', 'Without proper records, business owners may struggle to understand profitability, manage cash flow, or make sound investment decisions.'],
  ['Limited Business Skills', 'Farmers and agripreneurs may need support with pricing, budgeting, marketing, customer service, negotiation, and business management.'],
  ['Unclear Market Positioning', 'A business may produce useful products but lack a clear understanding of who it serves and why customers should choose it.'],
  ['Operational Inefficiency', 'Poor systems, unclear responsibilities, weak processes, and avoidable waste can limit productivity and growth.'],
  ['Difficulty Scaling', 'An enterprise may have demand or potential but lack the structure, resources, partnerships, or management systems needed to expand.'],
];

const framework = [
  ['Understand', 'Clarify the business idea, customer, product, market, and operating environment.'],
  ['Plan', 'Develop realistic goals, budgets, operating plans, and growth priorities.'],
  ['Build', 'Establish the systems, skills, processes, and resources needed to operate.'],
  ['Improve', 'Strengthen productivity, quality, financial management, and customer experience.'],
  ['Connect', 'Explore relevant markets, financing, partnerships, training, and technical opportunities.'],
  ['Grow', 'Scale carefully based on evidence, capacity, demand, and business performance.'],
];

type IconCard = [string, string, React.ElementType];

const services = [
  ['Agribusiness Idea Development', 'Support for individuals or groups exploring agricultural business ideas and seeking to understand whether the opportunity is practical.', Lightbulb],
  ['Business Planning', 'Develop plans covering objectives, products, customers, markets, operations, staffing, costs, revenue, risks, and growth priorities.', ClipboardList],
  ['Farm and Enterprise Assessment', 'Review current activities, resources, strengths, challenges, costs, and opportunities for improvement.', Target],
  ['Business Model Development', 'Clarify what the enterprise offers, who it serves, how it creates value, reaches customers, and generates revenue.', Target],
  ['Financial and Cost Management', 'Build understanding of production costs, expenses, pricing, cash flow, profitability, budgeting, records, and investment decisions.', Coins],
  ['Enterprise Operations Improvement', 'Develop clearer systems for production, procurement, inventory, staffing, quality, customer service, reporting, and daily operations.', Settings2],
  ['Agribusiness Training and Mentorship', 'Practical learning in business management, agricultural enterprise development, leadership, and commercial decision-making.', BookOpen],
  ['Market and Customer Development', 'Identify customers, understand market needs, improve product presentation, and explore suitable routes to market.', Users],
  ['Partnership and Resource Connections', 'Explore connections with technical partners, finance providers, markets, training opportunities, and ecosystem actors where suitable.', Handshake],
  ['Growth and Scale Planning', 'Determine when and how to grow based on demand, available resources, operational capacity, and financial realities.', TrendingUp],
] satisfies IconCard[];

const enterpriseAreas = [
  ['Crop Production', 'Business planning and improvement for crop-based enterprises.', Sprout],
  ['Livestock and Poultry', 'Enterprise planning, production systems, cost management, and market preparation.', Users],
  ['Aquaculture', 'Support for fish farming and related enterprise development, subject to technical and operational requirements.', BarChart3],
  ['Agricultural Processing', 'Explore value addition through cleaning, grading, packaging, processing, and product development.', PackageCheck],
  ['Input Supply and Distribution', 'Support for agricultural input-related business models and farmer-focused distribution opportunities.', BriefcaseBusiness],
  ['Aggregation and Commodity Trading', 'Enterprise development around produce aggregation, supply coordination, and market relationships.', Handshake],
  ['Irrigation and Agricultural Technology', 'Business opportunities involving water systems, solar solutions, protected agriculture, equipment, and farm technology.', Settings2],
  ['Agricultural Services', 'Enterprise opportunities involving training, logistics, storage, technical services, farm support, and other agricultural needs.', Map],
] satisfies IconCard[];

const audiences = [
  ['Smallholder Farmers', 'Farmers seeking to manage their farms as more structured and sustainable businesses.'],
  ['Emerging Agripreneurs', 'Individuals developing agricultural ideas into viable enterprises.'],
  ['Women Agripreneurs', 'Women building businesses in farming, processing, input supply, trading, services, and other agricultural activities.'],
  ['Youth Agripreneurs', 'Young people exploring agriculture as a pathway for entrepreneurship, employment, and impact.'],
  ['Farmer Cooperatives', 'Groups seeking to strengthen governance, operations, collective production, aggregation, or market participation.'],
  ['Agricultural SMEs', 'Small and growing agricultural businesses seeking better systems, planning, and commercial performance.'],
  ['Processors and Value-Addition Businesses', 'Enterprises seeking to improve product development, processing, packaging, and market opportunities.'],
  ['Agricultural Service Providers', 'Businesses offering technology, logistics, training, storage, equipment, or other ecosystem services.'],
];

const readiness = ['Clear business purpose', 'Defined customer', 'Practical business model', 'Reliable records', 'Cost awareness', 'Operational systems', 'Market connection', 'Risk awareness', 'Growth plan'];

const process = [
  ['01', 'Understand the Enterprise', 'We learn about the business idea, current activities, products, customers, resources, and challenges.'],
  ['02', 'Assess the Opportunity', 'We examine market potential, operational realities, financial needs, risks, and areas requiring attention.'],
  ['03', 'Develop a Practical Plan', 'We help establish realistic priorities, budgets, business goals, and action steps.'],
  ['04', 'Build the Foundation', 'We support essential skills, records, systems, processes, and resource connections.'],
  ['05', 'Improve Performance', 'We identify ways to improve productivity, quality, customer experience, cost control, and management.'],
  ['06', 'Connect and Grow', 'Where suitable, we explore market, finance, technical, partnership, and expansion opportunities.'],
];

const stages = [
  ['Idea Stage', 'Problem identification, customer discovery, opportunity assessment, basic business model, and initial feasibility.'],
  ['Start-Up Stage', 'Business registration where applicable, basic operations, product development, pricing, records, and first customers.'],
  ['Early Growth', 'Improve quality and sales, manage cash flow, build reliable systems, retain customers, and clarify staff responsibilities.'],
  ['Expansion', 'Capacity planning, investment decisions, market expansion, supply coordination, risk management, leadership, and governance.'],
];

const principles = [
  ['Start With the Problem', 'A strong enterprise solves a real problem for a clearly understood customer.'],
  ['Know Your Numbers', 'Business decisions should be informed by costs, revenue, cash flow, and realistic projections.'],
  ['Keep It Simple', 'Systems should be clear enough for the team to understand and use consistently.'],
  ['Build for the Market', 'Products and services should respond to actual customer and buyer needs.'],
  ['Improve Continuously', 'Small, consistent improvements can strengthen productivity, quality, and profitability.'],
  ['Grow Responsibly', 'Expansion should match capacity, resources, systems, and market demand.'],
  ['Build Relationships', 'Sustainable enterprises depend on trust among farmers, customers, workers, suppliers, partners, and buyers.'],
  ['Create Shared Value', 'The goal is business growth alongside stronger livelihoods, better services, and wider agricultural development.'],
];

const outcomes = ['Clearer Business Direction', 'Better Business Decisions', 'Stronger Operations', 'Improved Market Readiness', 'Better Resource Management', 'Stronger Growth Foundations', 'Increased Confidence'];

const SectionHeading = ({ eyebrow, title, copy, centered = false }: { eyebrow?: string; title: string; copy?: string; centered?: boolean }) => (
  <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
    {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{eyebrow}</p>}
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">{title}</h2>
    {copy && <p className="mt-4 leading-7 text-stone-600">{copy}</p>}
  </div>
);

export const EnterpriseDevelopmentPage: React.FC<EnterpriseDevelopmentPageProps> = ({ onOpenInquiryModal, onNavigatePage }) => (
  <div className="bg-[var(--agro-cream)] text-stone-900">
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      <img src={heroImage} alt="Agricultural enterprise team planning production" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-900/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Agribusiness &amp; Enterprise Development</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Building Stronger Agricultural Businesses</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/90">We help farmers, agripreneurs, cooperatives, and agricultural enterprises turn ideas into practical businesses through planning, business development support, enterprise improvement, and access to relevant agricultural opportunities.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <button onClick={() => document.getElementById('enterprise-support')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-bold text-stone-950 transition-colors hover:bg-amber-400">Explore Enterprise Support <ArrowRight className="h-4 w-4" /></button>
          <button onClick={() => onOpenInquiryModal('General')} className="rounded-xl border border-white/30 px-5 py-3 font-bold text-white transition-colors hover:bg-white/10">Talk to GleanAgro</button>
        </div>
      </div>
    </section>

    <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
      <section>
        <SectionHeading centered eyebrow="The challenge" title="A Good Agricultural Idea Needs More Than Hard Work" copy="Many agricultural businesses begin with passion and opportunity but struggle to grow because of weak planning, limited business knowledge, poor records, unclear markets, inadequate systems, or difficulty accessing the right resources." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map(([title, text]) => <article key={title} className="agro-card p-6"><div className="mb-4 h-2 w-12 rounded-full bg-amber-500" /><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></article>)}
        </div>
      </section>

      <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">
        <SectionHeading eyebrow="Our solution" title="From Agricultural Activity to Sustainable Enterprise" copy="GleanAgro helps agricultural entrepreneurs and enterprises build stronger foundations for growth by combining agricultural understanding with practical business development support." />
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {framework.map(([title, text], index) => <div key={title} className="relative rounded-2xl bg-emerald-50 p-5"><div className="text-sm font-bold text-emerald-700">0{index + 1}</div><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>{index < framework.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-amber-500 lg:block" />}</div>)}
        </div>
      </section>

      <section id="enterprise-support">
        <SectionHeading eyebrow="What we offer" title="Practical Support for Agricultural Enterprise Growth" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, text, Icon]) => <article key={title} className="agro-card p-6"><Icon className="h-8 w-8 text-emerald-700" /><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></article>)}
        </div>
      </section>

      <section>
        <SectionHeading centered eyebrow="Enterprise development areas" title="Where Agricultural Opportunity Meets Enterprise" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {enterpriseAreas.map(([title, text, Icon]) => <article key={title} className="rounded-2xl border border-emerald-900/10 bg-emerald-950 p-6 text-white"><Icon className="h-7 w-7 text-amber-400" /><h3 className="mt-5 font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-emerald-100/75">{text}</p></article>)}
        </div>
      </section>

      <section>
        <SectionHeading centered eyebrow="Who we serve" title="Who Can Benefit From Our Enterprise Support?" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(([title, text]) => <article key={title} className="rounded-2xl border border-stone-200 bg-white p-5"><Users className="h-6 w-6 text-emerald-700" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{text}</p></article>)}
        </div>
      </section>

      <section className="grid gap-10 rounded-[2rem] bg-emerald-900 p-7 text-white sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div><SectionHeading eyebrow="Business readiness" title="Is Your Agricultural Enterprise Ready to Grow?" copy="Growth becomes more sustainable when an enterprise understands its current position and knows what needs to improve." /><p className="mt-5 text-sm leading-6 text-emerald-100/80">Use these questions as a practical starting point—not as a promise of profitability, funding, or success.</p></div>
        <div className="grid gap-3 sm:grid-cols-2">{readiness.map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />{item}</div>)}</div>
      </section>

      <section>
        <SectionHeading centered eyebrow="Our process" title="How We Work With Agricultural Enterprises" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{process.map(([number, title, text]) => <article key={number} className="relative rounded-2xl border border-stone-200 bg-white p-6"><span className="text-4xl font-bold text-amber-500/70">{number}</span><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></article>)}</div>
        <p className="mt-8 text-center text-lg font-bold text-emerald-800">Understand <ArrowRight className="mx-1 inline h-5 w-5" /> Assess <ArrowRight className="mx-1 inline h-5 w-5" /> Plan <ArrowRight className="mx-1 inline h-5 w-5" /> Build <ArrowRight className="mx-1 inline h-5 w-5" /> Improve <ArrowRight className="mx-1 inline h-5 w-5" /> Grow</p>
      </section>

      <section>
        <SectionHeading eyebrow="Enterprise growth framework" title="Build Before You Scale" copy="Growth should follow evidence, capacity, demand, and sound planning—not pressure alone." />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">{stages.map(([title, text], index) => <article key={title} className="rounded-2xl border-t-4 border-amber-500 bg-white p-6 shadow-sm"><div className="text-sm font-bold text-emerald-700">STAGE {index + 1}</div><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></article>)}</div>
      </section>

      <section>
        <SectionHeading centered eyebrow="Enterprise development principles" title="Practical Principles for Sustainable Growth" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{principles.map(([title, text]) => <article key={title} className="rounded-2xl bg-stone-100 p-5"><h3 className="font-bold text-emerald-900">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{text}</p></article>)}</div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem]"><img src={heroImage} alt="Practical agricultural enterprise learning environment" className="h-full min-h-[280px] w-full object-cover" /></div>
        <div><SectionHeading eyebrow="Innovation Farm connection" title="A Practical Space for Learning and Enterprise Development" copy="GleanAgro's Innovation Farm can serve as a practical learning environment where agricultural ideas are tested, documented, improved, and demonstrated." /><div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-bold text-emerald-800">{['Test', 'Learn', 'Adapt', 'Demonstrate', 'Scale'].map((item, index) => <React.Fragment key={item}><span className="rounded-full bg-emerald-50 px-3 py-2">{item}</span>{index < 4 && <ArrowRight className="h-4 w-4 text-amber-500" />}</React.Fragment>)}</div><p className="mt-6 text-sm leading-6 text-stone-600">Potential learning areas include production planning, farm budgeting, cost and income records, labour management, input use, livestock and poultry management, aquaculture, irrigation and energy decisions, post-harvest handling, market preparation, and enterprise performance review.</p><p className="mt-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 text-sm leading-6 text-stone-700">Specific results, technologies, production figures, or business outcomes should only be published when properly recorded and verified.</p></div>
      </section>

      <section>
        <SectionHeading centered eyebrow="Outcomes" title="What Enterprise Development Can Support" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{outcomes.map((title) => <div key={title} className="flex items-start gap-3 rounded-2xl border border-emerald-900/10 bg-white p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" /><div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm text-stone-600">Practical support can help enterprises make more informed, deliberate progress in this area.</p></div></div>)}</div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 p-7 text-white sm:p-10">
        <SectionHeading eyebrow="Connected ecosystem" title="Strong Agricultural Enterprises Need a Connected Ecosystem" copy="Knowledge, inputs, technology, finance, market access, and storage can come together to support better enterprise planning, improved operations, market-ready products, and sustainable agricultural enterprise." />
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-bold text-emerald-100">{['Knowledge', 'Inputs', 'Technology', 'Finance', 'Market Access', 'Storage'].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2">{item}</span>)}<ArrowDown className="hidden h-5 w-5 text-amber-400 sm:block" /><span className="rounded-full bg-amber-500 px-4 py-2 text-stone-950">Sustainable Agricultural Enterprise</span></div>
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-stone-300">{['Farm Inputs', 'Training & Technical Support', 'Irrigation & Agricultural Technology', 'Agricultural Finance', 'Storage & Post-Harvest', 'Market Access & Bulk Off-Take'].map((item) => <span key={item} className="rounded-lg bg-white/5 px-3 py-2">{item}</span>)}</div>
      </section>

      <section className="rounded-[2rem] bg-amber-500 p-8 text-stone-950 sm:p-12">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Ready to Strengthen Your Agricultural Enterprise?</h2>
        <p className="mt-4 max-w-2xl leading-7">Whether you are starting an agricultural business, improving an existing farm, developing a cooperative, or exploring a new agribusiness opportunity, GleanAgro can help you take practical steps toward stronger planning, better systems, and sustainable growth.</p>
        <div className="mt-7 flex flex-wrap gap-3"><button onClick={() => onOpenInquiryModal('General')} className="rounded-xl bg-emerald-950 px-5 py-3 font-bold text-white hover:bg-emerald-900">Discuss Your Enterprise</button><button onClick={() => onNavigatePage('solutions')} className="rounded-xl border border-stone-950/20 px-5 py-3 font-bold hover:bg-white/20">Explore Our Solutions</button></div>
      </section>
    </main>
  </div>
);
