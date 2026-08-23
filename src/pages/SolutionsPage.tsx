import React from 'react';
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  Cpu,
  Droplets,
  HandCoins,
  Leaf,
  Sprout,
  Store,
  TrendingUp,
  Users,
  Warehouse,
} from 'lucide-react';
import innovationFarmImage from '../assets/images/smallholder_farmer_hub_1784882677913.jpg';
import { PageHeader } from '../components/PageHeader';
import { InquiryCallback } from '../types';

interface SolutionsPageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

const problemFlow = [
  { title: 'Access', text: 'Quality inputs, knowledge and local support are not always available when farmers need them.' },
  { title: 'Productivity', text: 'Limited tools, weak systems and poor planning reduce yield potential and efficiency.' },
  { title: 'Income', text: 'Low productivity and weak market coordination keep farm income unstable and hard to grow.' },
  { title: 'Sustainability', text: 'Farm systems become fragile without the right long-term support and enterprise thinking.' },
];

const ecosystemNodes = [
  { name: 'Knowledge', description: 'Field learning and practical guidance', icon: BookOpenText },
  { name: 'Inputs', description: 'Seeds, feed, crop support and farm supplies', icon: Sprout },
  { name: 'Finance', description: 'Working capital and growth capital pathways', icon: CircleDollarSign },
  { name: 'Technology', description: 'Irrigation, monitoring and climate-smart tools', icon: Cpu },
  { name: 'Markets', description: 'Buyer linkages and aggregation opportunities', icon: Store },
  { name: 'Value Addition', description: 'Post-harvest quality and enterprise growth', icon: BriefcaseBusiness },
];

const solutionCategories = [
  {
    number: '01',
    name: 'Farm Inputs',
    title: 'Quality Inputs for Better Production',
    summary: 'Access reliable agricultural inputs selected to support healthier production, better yields and more efficient farm operations.',
    offerings: ['Seeds', 'Animal feed', 'Poultry inputs', 'Aquaculture inputs', 'Fertilizers', 'Crop protection products', 'Livestock inputs', 'Other approved farm supplies'],
    cta: 'Explore Farm Inputs',
    accent: 'bg-emerald-700',
    icon: Sprout,
    highlight: 'Best for farmers and producers who need practical input access at the right time.',
  },
  {
    number: '02',
    name: 'Training & Technical Support',
    title: 'Knowledge That Works in the Field',
    summary: 'Practical agricultural knowledge should not remain in classrooms. We help farmers build the skills and confidence to adopt better production practices.',
    offerings: ['Farmer training', 'Production techniques', 'Farm management', 'Livestock management', 'Aquaculture management', 'Poultry management', 'Agribusiness training', 'Extension support'],
    cta: 'Explore Training',
    accent: 'bg-amber-500',
    icon: BookOpenText,
    highlight: 'Focused on field learning, confidence building and improved decision-making.',
  },
  {
    number: '03',
    name: 'Irrigation & Agricultural Technology',
    title: 'Technology That Makes Farming Smarter',
    summary: 'We promote simple technologies that help farmers use resources more efficiently, reduce production risks and improve productivity.',
    offerings: ['Irrigation', 'Solar-powered water systems', 'Greenhouses', 'Farm automation', 'Climate-smart technologies', 'Water management', 'Production monitoring'],
    cta: 'Explore Agricultural Technology',
    accent: 'bg-sky-600',
    icon: Droplets,
    highlight: 'Designed to reduce losses, improve efficiency and support more resilient production.',
  },
  {
    number: '04',
    name: 'Agricultural Finance',
    title: 'Finance for Agricultural Growth',
    summary: 'Access to the right financing can help farmers move from subsistence production to sustainable agricultural enterprise.',
    offerings: ['Production financing', 'Input financing', 'Asset and equipment financing', 'Working capital', 'Enterprise expansion'],
    cta: 'Explore Finance Opportunities',
    accent: 'bg-violet-600',
    icon: CircleDollarSign,
    highlight: 'We facilitate access to agricultural finance through appropriate partners and financing structures.',
  },
  {
    number: '05',
    name: 'Market Access & Bulk Off-Take',
    title: 'Produce More. Find Better Markets.',
    summary: 'Production means little if farmers cannot reliably sell what they produce. GleanAgro works to connect farmers and agricultural producers with dependable market opportunities and bulk off-take channels.',
    offerings: ['Produce aggregation', 'Bulk off-take', 'Buyer connections', 'Quality standards', 'Market information', 'Contract opportunities', 'Post-harvest coordination'],
    cta: 'Explore Bulk Off-Take',
    accent: 'bg-rose-600',
    icon: HandCoins,
    highlight: 'This is one of the strongest direct pathways from farm output to real earnings.',
  },
  {
    number: '06',
    name: 'Storage & Post-Harvest',
    title: 'Protect What You Produce',
    summary: 'Post-harvest losses can erase the value of months of hard work. We support practical approaches to storage, handling and post-harvest management.',
    offerings: ['Storage solutions', 'Produce handling', 'Drying', 'Packaging', 'Aggregation', 'Cold-chain solutions where applicable', 'Post-harvest management'],
    cta: 'Explore Post-Harvest Solutions',
    accent: 'bg-teal-600',
    icon: Warehouse,
    highlight: 'Helps preserve quality, reduce loss and improve the value of agricultural output.',
  },
  {
    number: '07',
    name: 'Agribusiness & Enterprise Development',
    title: 'From Farming to Sustainable Enterprise',
    summary: 'Agriculture can become more than a source of food—it can become a viable business. We support farmers and aspiring agripreneurs with the knowledge, connections and opportunities required to build sustainable enterprises.',
    offerings: ['Agribusiness training', 'Business planning', 'Enterprise development', 'Youth agripreneurship', 'Women-led agricultural enterprises', 'Value addition', 'Market development'],
    cta: 'Explore Enterprise Development',
    accent: 'bg-stone-700',
    icon: BriefcaseBusiness,
    highlight: 'Supports long-term business growth, job creation and stronger local enterprise.',
  },
];

const valueStages = [
  'Identify',
  'Connect',
  'Equip',
  'Produce',
  'Connect',
  'Grow',
];

const audienceCards = [
  {
    title: 'Smallholder Farmers',
    text: 'Practical tools, knowledge, finance and market access.',
    icon: Users,
  },
  {
    title: 'Women & Youth',
    text: 'Skills, enterprise opportunities and pathways into agriculture.',
    icon: Leaf,
  },
  {
    title: 'Agribusinesses & Organizations',
    text: 'Partnerships, sourcing, projects and market solutions.',
    icon: HandCoins,
  },
];

const whyCards = [
  {
    title: 'Practical',
    text: 'We focus on solutions farmers can understand, adopt and use.',
    icon: Sprout,
  },
  {
    title: 'Evidence-Informed',
    text: 'We test, learn and improve before recommending solutions at scale.',
    icon: TrendingUp,
  },
  {
    title: 'Connected',
    text: 'We bring farmers, businesses, institutions and markets together.',
    icon: Users,
  },
  {
    title: 'Sustainable',
    text: 'We prioritize approaches that improve productivity while protecting long-term viability.',
    icon: Leaf,
  },
];

const innovationSteps = ['Test', 'Learn', 'Improve', 'Demonstrate', 'Scale'];

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenInquiryModal, onNavigatePage }) => {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <PageHeader
        title="Solutions"
        subtitle="Practical agricultural solutions designed around farmer realities, production needs and sustainable growth."
        categoryTag="GleanAgro Solutions"
        breadcrumbs={[{ label: 'Solutions' }]}
        onNavigatePage={onNavigatePage}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_25px_60px_rgba(15,47,43,0.08)]">
          <div className="grid items-center gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--agro-green-700)]">Our solutions</p>
              <h1 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.06em] text-[var(--agro-charcoal)] sm:text-5xl">
                Practical Solutions for a More Productive Agriculture
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--agro-muted)]">
                From quality inputs and technical support to market access, finance and agricultural technology, we connect smallholder farmers and agricultural businesses to practical solutions designed around their realities.
              </p>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
                <a href="#solution-categories" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--agro-green-600)]">
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => onOpenInquiryModal('Commercial Buyer')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(29,90,66,0.2)] bg-white px-5 py-3.5 text-sm font-bold text-[var(--agro-green-700)] transition hover:border-[var(--agro-green-700)]"
                >
                  Talk to GleanAgro
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-stone-900">
              <img
                src={innovationFarmImage}
                alt="Farmer working in the field"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2b27]/80 via-[#0e2b27]/20 to-transparent" />
            </div>
          </div>
        </section>

        <section className="mt-10 pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">The problem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Agriculture Doesn’t Need More Complexity. It Needs Better Solutions.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
              Smallholder farmers face interconnected challenges. Access to quality inputs, knowledge, finance, technology and reliable markets can determine whether a farm simply survives or becomes a sustainable business.
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--agro-muted)]">
              GleanAgro brings these critical pieces together into practical solutions that farmers can understand, adopt and grow with.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problemFlow.map(({ title, text }) => (
              <div key={title} className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--agro-gold)]">{title}</div>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">The GleanAgro solutions ecosystem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              One Farmer. Multiple Solutions. Greater Opportunity.
            </h2>
          </div>

          <div className="relative mt-10 hidden min-h-[430px] lg:block">
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(29,90,66,0.22)] bg-[linear-gradient(135deg,#0f2f2b_0%,#173a31_100%)] shadow-2xl shadow-black/10" />
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-center text-sm font-bold text-white">
              <div>
                <Users className="mx-auto mb-2 h-6 w-6 text-[var(--agro-gold-soft)]" />
                Farmer
              </div>
            </div>

            {ecosystemNodes.map((node, index) => {
              const Icon = node.icon;
              const angle = (index / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
              const radiusX = 230;
              const radiusY = 165;
              const x = Math.cos(angle) * radiusX;
              const y = Math.sin(angle) * radiusY;

              return (
                <div
                  key={node.name}
                  className="absolute w-44"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-4 text-center shadow-lg shadow-[rgba(15,47,43,0.06)]">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="text-sm font-bold text-[var(--agro-green-700)]">{node.name}</div>
                    <div className="mt-1 text-[11px] leading-4 text-[var(--agro-muted)]">{node.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 lg:hidden">
            {ecosystemNodes.map(({ name, description, icon: Icon }) => (
              <div key={name} className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--agro-green-700)]">{name}</div>
                    <div className="text-xs text-[var(--agro-muted)]">{description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-[var(--agro-muted)]">
            Farmers rarely have just one problem. That’s why our approach looks beyond individual products to the broader agricultural ecosystem. We connect farmers to the resources, knowledge, technologies and markets they need to become more productive and build sustainable agricultural enterprises.
          </p>
        </section>

        <section id="solution-categories" className="mt-12 pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Solution categories</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Practical pathways for farmers, enterprises and partners
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutionCategories.map(({ number, name, title, summary, offerings, cta, accent, icon: Icon, highlight }, index) => {
              const isFeatured = index < 3;

              return (
                <article
                  key={name}
                  className={`overflow-hidden rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-white shadow-[0_18px_40px_rgba(15,47,43,0.06)] ${isFeatured ? 'xl:col-span-1' : ''}`}
                >
                  <div className={`${accent} px-5 py-4 text-white`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em]">{number}</span>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-2xl font-bold tracking-[-0.05em]">{name}</h3>
                  </div>

                  <div className="p-5">
                    <p className="text-lg font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{summary}</p>
                    <p className="mt-4 rounded-xl bg-[rgba(29,90,66,0.04)] p-3 text-xs leading-5 text-[var(--agro-green-700)]">{highlight}</p>
                    <ul className="mt-4 space-y-2 text-sm text-[var(--agro-muted)]">
                      {offerings.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--agro-green-700)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('produce')}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--agro-green-700)]"
                    >
                      {cta}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-12 pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">How we create value</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              We Don’t Just Provide Products. We Build Pathways.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {valueStages.map((stage, index) => (
              <div key={stage} className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-4 text-center shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-gold)]">{index + 1}</div>
                <h3 className="mt-2 text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{stage}</h3>
                {index < valueStages.length - 1 && <div className="mt-3 flex justify-center text-[var(--agro-green-700)]"><ArrowRight className="h-4 w-4" /></div>}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-[var(--agro-muted)]">
            Our goal is not simply to provide a product or service. It is to help farmers move from a specific agricultural challenge toward measurable improvement and long-term sustainability.
          </p>
        </section>

        <section className="mt-12 pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Who we serve</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Solutions built for real agricultural communities
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {audienceCards.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
                <button type="button" onClick={() => onOpenInquiryModal('Smallholder Farmer')} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--agro-green-700)]">
                  Explore <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Why GleanAgro</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Why Work With GleanAgro?
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyCards.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(201,149,69,0.12)] text-[var(--agro-gold)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white shadow-[var(--agro-shadow)]">
          <div className="grid items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 md:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Innovation / demonstration farm</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
                We Test Before We Recommend.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
                Our demonstration and innovation farm provides a practical environment where agricultural production systems, technologies and business models can be tested, improved and demonstrated before they are introduced to farmers.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {innovationSteps.map((step) => (
                  <span key={step} className="rounded-full border border-[rgba(29,90,66,0.18)] bg-[rgba(29,90,66,0.04)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--agro-green-700)]">
                    {step}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onNavigatePage('about')}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--agro-green-600)]"
              >
                Explore Our Innovation Farm
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative min-h-[300px] overflow-hidden bg-stone-900">
              <img src={innovationFarmImage} alt="Innovation farm demonstration" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f2b]/70 to-[#0f2f2b]/10" />
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-[linear-gradient(135deg,#f4efe7_0%,#ffffff_100%)] p-6 shadow-[var(--agro-shadow)] md:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Women & youth</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Agriculture Should Create Opportunity for Everyone.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
              We are committed to creating pathways for women and young people to participate meaningfully in agriculture—not only as workers, but as skilled farmers, entrepreneurs, innovators and business owners.
            </p>
            <button
              type="button"
              onClick={() => onNavigatePage('farmer-hub')}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[rgba(29,90,66,0.2)] bg-white px-5 py-3.5 text-sm font-bold text-[var(--agro-green-700)] transition hover:border-[var(--agro-green-700)]"
            >
              Explore Women & Youth Opportunities
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section className="mt-12 pt-2">
          <div className="rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-[linear-gradient(135deg,#0f2f2b_0%,#173a31_100%)] p-8 text-center text-white shadow-[var(--agro-shadow)] md:p-12">
            <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-5xl">
              Have an agricultural challenge?
            </h2>
            <p className="mt-4 text-xl text-stone-200">Let’s find a solution.</p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-200">
              Whether you’re a farmer, agribusiness or organization, we’d love to hear from you.
            </p>
            <button
              type="button"
              onClick={() => onOpenInquiryModal('Commercial Buyer')}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--agro-gold)] px-6 py-3.5 text-sm font-bold text-[#1b2e28] transition hover:bg-[var(--agro-gold-soft)]"
            >
              Talk to GleanAgro
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
