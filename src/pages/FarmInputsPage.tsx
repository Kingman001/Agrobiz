import React from 'react';
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  Cpu,
  HandCoins,
  Leaf,
  Sprout,
  Store,
  TrendingUp,
  Users,
  Warehouse,
} from 'lucide-react';
import heroImage from '../assets/images/hero-img.jpg';
import { PageHeader } from '../components/PageHeader';
import { InquiryCallback } from '../types';

interface FarmInputsPageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

const challengeCards = [
  { title: 'Quality', text: 'Unreliable inputs can compromise production.' },
  { title: 'Access', text: 'Farmers may struggle to find suitable inputs nearby.' },
  { title: 'Cost', text: 'Poor purchasing decisions can increase production costs.' },
  { title: 'Knowledge', text: 'The right input still needs the right application.' },
];

const offerCards = [
  {
    title: 'Seeds & Planting Materials',
    text: 'High-quality seeds and planting materials selected to strengthen establishment and field performance.',
    icon: Sprout,
  },
  {
    title: 'Poultry Inputs',
    text: 'Feeds, day-old chicks, health products and supporting inputs for productive poultry operations.',
    icon: Leaf,
  },
  {
    title: 'Aquaculture Inputs',
    text: 'Fish seed, feed, pond inputs and practical supplies for efficient aquaculture systems.',
    icon: Store,
  },
  {
    title: 'Livestock Inputs',
    text: 'Feed, health and management inputs that support healthier livestock and stronger herd performance.',
    icon: Users,
  },
  {
    title: 'Crop Production Inputs',
    text: 'Crop nutrition, protection and production inputs designed to improve plant health and yield.',
    icon: TrendingUp,
  },
  {
    title: 'Farm Supplies',
    text: 'Essential tools, equipment and routine supplies that support day-to-day farm operations.',
    icon: Warehouse,
  },
];

const steps = [
  {
    number: '01',
    title: 'TELL US ABOUT YOUR FARM',
    text: "Tell us what you're producing, your scale and what you need.",
  },
  {
    number: '02',
    title: 'UNDERSTAND YOUR NEED',
    text: 'We identify the appropriate input and support requirements.',
  },
  {
    number: '03',
    title: 'RECOMMEND',
    text: 'We help you identify suitable options.',
  },
  {
    number: '04',
    title: 'SUPPLY',
    text: 'Access the required inputs through GleanAgro or our supply network.',
  },
  {
    number: '05',
    title: 'SUPPORT',
    text: 'Get practical guidance on appropriate use where applicable.',
  },
];

const audienceCards = [
  {
    title: 'Smallholder Farmers',
    text: 'For farmers looking to improve productivity and manage production costs.',
    icon: Users,
  },
  {
    title: 'Emerging Farmers',
    text: 'For individuals building their agricultural enterprises.',
    icon: TrendingUp,
  },
  {
    title: 'Women Agripreneurs',
    text: 'For women building sustainable agricultural businesses.',
    icon: Leaf,
  },
  {
    title: 'Youth Agripreneurs',
    text: 'For young people entering agriculture as a business.',
    icon: BriefcaseBusiness,
  },
];

const whyCards = [
  { title: 'Practical', icon: Sprout },
  { title: 'Evidence-Informed', icon: BookOpenText },
  { title: 'Connected', icon: HandCoins },
  { title: 'Sustainable', icon: Cpu },
];

const relatedCards = [
  {
    title: 'Training & Technical Support',
    text: 'Get the knowledge to use better production practices.',
    icon: BookOpenText,
  },
  {
    title: 'Agricultural Technology',
    text: 'Explore practical technologies that can improve efficiency.',
    icon: Cpu,
  },
  {
    title: 'Agricultural Finance',
    text: 'Explore pathways to finance your agricultural enterprise.',
    icon: CircleDollarSign,
  },
  {
    title: 'Market Access',
    text: 'Connect production to market opportunities.',
    icon: Store,
  },
];

export const FarmInputsPage: React.FC<FarmInputsPageProps> = ({ onOpenInquiryModal, onNavigatePage }) => {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <PageHeader
        title="Farm Inputs"
        subtitle="Access reliable agricultural inputs selected to support healthier production, better farm management and sustainable growth."
        categoryTag="Farm Inputs"
        breadcrumbs={[{ label: 'Farm Inputs' }]}
        onNavigatePage={onNavigatePage}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_25px_60px_rgba(15,47,43,0.08)]">
          <div className="grid items-center gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--agro-green-700)]">FARM INPUTS</p>
              <h1 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.06em] text-[var(--agro-charcoal)] sm:text-5xl">
                Quality Inputs for Better Production
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--agro-muted)]">
                Access reliable agricultural inputs selected to support healthier production, better farm management and sustainable growth.
              </p>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onOpenInquiryModal('Smallholder Farmer')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--agro-green-600)]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenInquiryModal('Commercial Buyer')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(29,90,66,0.2)] bg-white px-5 py-3.5 text-sm font-bold text-[var(--agro-green-700)] transition hover:border-[var(--agro-green-700)]"
                >
                  Talk to GleanAgro
                </button>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-stone-900">
              <img src={heroImage} alt="Agricultural field with healthy, productive crops" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f2b]/80 via-[#0f2f2b]/20 to-transparent" />
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">THE CHALLENGE</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Every Farm Starts With the Right Inputs
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
              The quality and suitability of farm inputs can have a major impact on production outcomes. Yet farmers often face challenges finding reliable products, knowing what is appropriate for their farm and getting the right inputs at the right time.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {challengeCards.map(({ title, text }) => (
              <div key={title} className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--agro-gold)]">{title}</div>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">OUR SOLUTION</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              We Help Farmers Make Better Input Decisions
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
              GleanAgro connects farmers with agricultural inputs suited to their production needs while providing practical guidance to help them use those inputs effectively.
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--agro-muted)]">
              Our approach combines access, information and support—because providing an input is only part of the solution.
            </p>
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-[linear-gradient(135deg,#0f2f2b_0%,#173a31_100%)] p-7 text-center text-white shadow-lg">
            <div className="flex flex-col items-center gap-4 text-sm font-bold uppercase tracking-[0.16em] md:flex-row md:justify-center md:gap-6">
              <span>ACCESS</span>
              <span className="text-2xl text-[var(--agro-gold-soft)]">+</span>
              <span>GUIDANCE</span>
              <span className="text-2xl text-[var(--agro-gold-soft)]">+</span>
              <span>SUPPORT</span>
            </div>
            <div className="mt-5 text-2xl font-bold tracking-[-0.05em] text-[var(--agro-gold-soft)] sm:text-3xl md:text-4xl">
              = BETTER INPUT DECISIONS
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">WHAT WE OFFER</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Agricultural Inputs for Different Production Systems
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {offerCards.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-[0_18px_40px_rgba(15,47,43,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">HOW IT WORKS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              From Farm Need to the Right Input
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {steps.map(({ number, title, text }) => (
              <div key={number} className="rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--agro-green-700)] text-lg font-bold text-white">{number}</div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">WHO WE SERVE</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Built for Farmers at Different Stages
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audienceCards.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">WHY GLEANAGRO</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              More Than a Supplier
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
              We believe the right input is only useful when it is connected to the right knowledge, production practices and market opportunity.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyCards.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-[-0.03em] text-[var(--agro-charcoal)]">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">THE BIGGER ECOSYSTEM</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Inputs Are Only the Beginning
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
              A productive farm needs more than inputs. That's why GleanAgro is building an ecosystem that connects farmers to knowledge, technology, finance, markets and opportunities for growth.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--agro-green-700)]">
              FARM INPUTS
            </div>
            <div className="text-2xl text-stone-400">↓</div>
            <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-4 text-sm font-bold uppercase tracking-[0.14em] text-[var(--agro-green-700)]">
                KNOWLEDGE
              </div>
              <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-4 text-sm font-bold uppercase tracking-[0.14em] text-[var(--agro-green-700)]">
                TECHNOLOGY
              </div>
              <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-4 text-sm font-bold uppercase tracking-[0.14em] text-[var(--agro-green-700)]">
                FINANCE
              </div>
            </div>
            <div className="text-2xl text-stone-400">↓</div>
            <div className="rounded-xl border border-stone-200 bg-[var(--agro-green-700)] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white">
              FARM PRODUCTIVITY
            </div>
            <div className="text-2xl text-stone-400">↓</div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">
              MARKETS
            </div>
            <div className="text-2xl text-stone-400">↓</div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--agro-green-700)]">
              SUSTAINABLE GROWTH
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">RELATED SOLUTIONS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Build Beyond the Input
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {relatedCards.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-[linear-gradient(135deg,#0f2f2b_0%,#173a31_100%)] p-6 text-white shadow-[var(--agro-shadow)] md:p-8 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
              Looking for the Right Inputs for Your Farm?
            </h2>
            <p className="mt-4 text-base leading-7 text-emerald-100">
              Tell us what you're producing and what you need. We'll help you identify the next step.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onOpenInquiryModal('Smallholder Farmer')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[var(--agro-green-700)] transition hover:bg-emerald-50"
              >
                Talk to GleanAgro
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigatePage('farmer-hub')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-transparent px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/5"
              >
                Join Farmer Hub
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FarmInputsPage;
