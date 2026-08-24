import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  Cpu,
  HandCoins,
  Leaf,
  Lightbulb,
  Sprout,
  Store,
  TrendingUp,
  Users,
  Warehouse,
} from 'lucide-react';
import heroImage from '../assets/images/hero-img.jpg';
import { PageHeader } from '../components/PageHeader';
import { InquiryCallback } from '../types';

interface TrainingSupportPageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

const challengeCards = [
  { title: 'Limited Knowledge', text: 'Farmers may lack access to current, practical agricultural information.' },
  { title: 'Poor Technical Support', text: 'Problems often arise when farmers do not have someone to turn to for guidance.' },
  { title: 'Inefficient Practices', text: 'Traditional methods can limit productivity or increase avoidable costs.' },
  { title: 'Changing Conditions', text: 'Farmers need to adapt to changing markets, weather and production conditions.' },
];

const offerCards = [
  {
    title: 'Farmer Training',
    text: 'Practical training designed to strengthen farmers\' knowledge and improve day-to-day production decisions.',
    icon: Users,
  },
  {
    title: 'Production & Farm Management',
    text: 'Build the skills needed to manage farm operations more efficiently and sustainably.',
    icon: TrendingUp,
  },
  {
    title: 'Technical Advisory',
    text: 'Practical guidance to help farmers identify production challenges and make informed decisions.',
    icon: Lightbulb,
  },
  {
    title: 'Demonstration & Practical Learning',
    text: 'Learn by seeing agricultural practices, technologies and production systems demonstrated in real operating environments.',
    icon: Sprout,
  },
  {
    title: 'Agribusiness & Entrepreneurship',
    text: 'Help farmers and emerging agripreneurs understand agriculture as a business and build more sustainable enterprises.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Women & Youth Capacity Building',
    text: 'Create practical pathways for women and young people to build agricultural skills and participate meaningfully in the economy.',
    icon: Leaf,
  },
];

const signatureSteps = [
  { number: '01', title: 'LEARN', text: 'Understand the principle' },
  { number: '02', title: 'SEE', text: 'Watch it demonstrated' },
  { number: '03', title: 'APPLY', text: 'Use it on your farm' },
  { number: '04', title: 'REVIEW', text: 'Identify what works' },
  { number: '05', title: 'IMPROVE', text: 'Adapt and improve' },
  { number: '06', title: 'GROW', text: 'Build a stronger enterprise' },
];

const trainingSteps = [
  {
    number: '01',
    title: 'Tell Us About Your Farm',
    text: 'Share your production system, challenges and goals.',
  },
  {
    number: '02',
    title: 'Understand the Need',
    text: 'We identify the knowledge or technical support required.',
  },
  {
    number: '03',
    title: 'Learn',
    text: 'Receive relevant training, resources or guidance.',
  },
  {
    number: '04',
    title: 'Apply',
    text: 'Put the knowledge into practice on your farm.',
  },
  {
    number: '05',
    title: 'Follow Up',
    text: 'Where appropriate, we follow up to understand progress and identify further support needs.',
  },
];

const audienceCards = [
  {
    title: 'Smallholder Farmers',
    text: 'Strengthen production skills, farm management and decision-making.',
    icon: Users,
  },
  {
    title: 'Emerging Farmers',
    text: 'Build the technical and business skills required to grow a viable farm enterprise.',
    icon: TrendingUp,
  },
  {
    title: 'Women Agripreneurs',
    text: 'Develop practical agricultural and business capabilities that support sustainable enterprise growth.',
    icon: Leaf,
  },
  {
    title: 'Youth Agripreneurs',
    text: 'Build the skills, confidence and entrepreneurial mindset to participate in modern agriculture.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Agricultural Organizations',
    text: 'Training and capacity-building support for farmer groups, cooperatives and agricultural programmes.',
    icon: Store,
  },
];

const formatCards = [
  { title: 'Workshops', text: 'Structured sessions around specific agricultural topics.', icon: BookOpenText },
  { title: 'Field Demonstrations', text: 'Hands-on learning in real production environments.', icon: Sprout },
  { title: 'Farmer Groups', text: 'Training delivered through cooperatives, associations and organized farmer communities.', icon: Users },
  { title: 'Digital Resources', text: 'Guides, practical resources and remote support accessible through digital channels.', icon: Cpu },
];

const whyCards = [
  { title: 'Practical', text: 'We focus on knowledge farmers can actually use.', icon: Sprout },
  { title: 'Evidence-Informed', text: 'We continuously learn from field experience, data and experimentation.', icon: BookOpenText },
  { title: 'Connected', text: 'We connect farmers with people, resources, technologies and opportunities.', icon: HandCoins },
  { title: 'Sustainable', text: 'We promote practices that support long-term agricultural productivity.', icon: Leaf },
];

const impactCards = [
  { title: 'Better Decisions', text: 'Farmers gain knowledge to make more informed production choices.' },
  { title: 'Better Practices', text: 'Training supports the adoption of improved agricultural practices.' },
  { title: 'Better Management', text: 'Farmers strengthen planning, record keeping and resource management.' },
  { title: 'Better Enterprises', text: 'Improved skills can help farmers build more productive and sustainable agricultural businesses.' },
];

const relatedCards = [
  { title: 'Farm Inputs', text: 'Get access to the resources needed to put better practices into action.', icon: Sprout },
  { title: 'Agricultural Technology', text: 'Discover practical tools and technologies that can improve efficiency.', icon: Cpu },
  { title: 'Agricultural Finance', text: 'Explore pathways to finance your agricultural enterprise.', icon: CircleDollarSign },
  { title: 'Market Access', text: 'Connect improved production with viable market opportunities.', icon: Store },
];

export const TrainingSupportPage: React.FC<TrainingSupportPageProps> = ({ onOpenInquiryModal, onNavigatePage }) => {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <PageHeader
        title="Training & Technical Support"
        subtitle="Practical agricultural knowledge, hands-on training and technical support designed to help farmers make better decisions, improve production and build sustainable agricultural enterprises."
        categoryTag="Training & Technical Support"
        breadcrumbs={[{ label: 'Training & Technical Support' }]}
        onNavigatePage={onNavigatePage}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_25px_60px_rgba(15,47,43,0.08)]">
          <div className="grid items-center gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--agro-green-700)]">TRAINING & TECHNICAL SUPPORT</p>
              <h1 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.06em] text-[var(--agro-charcoal)] sm:text-5xl">
                Knowledge That Works in the Field
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--agro-muted)]">
                Practical agricultural knowledge, hands-on training and technical support designed to help farmers make better decisions, improve production and build sustainable agricultural enterprises.
              </p>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onOpenInquiryModal('Smallholder Farmer', 'Training & Technical Support')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--agro-green-600)]"
                >
                  Get Training Support
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigatePage('farmer-hub')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(29,90,66,0.2)] bg-white px-5 py-3.5 text-sm font-bold text-[var(--agro-green-700)] transition hover:border-[var(--agro-green-700)]"
                >
                  Join Farmer Hub
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-stone-900">
              <img src={heroImage} alt="Farmer learning on a working agricultural field" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f2b]/80 via-[#0f2f2b]/20 to-transparent" />
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">THE CHALLENGE</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Good Farming Requires More Than Hard Work
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
              Farmers work hard, but hard work alone does not guarantee good results. Changing production conditions, limited access to technical information and outdated practices can make it difficult for farmers to improve productivity and profitability.
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--agro-muted)]">
              The right knowledge, delivered at the right time and in a practical way, can help farmers make better decisions.
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
              We Turn Agricultural Knowledge Into Practical Action
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
              GleanAgro provides practical training and technical support that farmers can understand, apply and adapt to their own production realities.
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--agro-muted)]">
              Our approach combines knowledge, demonstration and ongoing support—because training is most valuable when it changes what happens on the farm.
            </p>
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-[linear-gradient(135deg,#0f2f2b_0%,#173a31_100%)] p-7 text-center text-white shadow-lg">
            <div className="flex flex-col items-center gap-4 text-sm font-bold uppercase tracking-[0.16em] md:flex-row md:justify-center md:gap-6">
              <span>KNOWLEDGE</span>
              <span className="text-2xl text-[var(--agro-gold-soft)]">+</span>
              <span>DEMONSTRATION</span>
              <span className="text-2xl text-[var(--agro-gold-soft)]">+</span>
              <span>TECHNICAL SUPPORT</span>
            </div>
            <div className="mt-5 flex flex-col items-center gap-3 text-[var(--agro-gold-soft)]">
              <ArrowDown className="h-5 w-5" />
              <div className="text-2xl font-bold tracking-[-0.05em] sm:text-3xl md:text-4xl">BETTER FARMING DECISIONS</div>
              <ArrowDown className="h-5 w-5" />
              <div className="text-[22px] font-bold tracking-[-0.05em] sm:text-2xl md:text-3xl">BETTER FARM MANAGEMENT</div>
              <ArrowDown className="h-5 w-5" />
              <div className="text-xl font-bold tracking-[-0.05em] sm:text-2xl md:text-3xl">IMPROVED PRODUCTIVITY</div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">WHAT WE OFFER</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Practical Learning for Real Agricultural Enterprises
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">A SIGNATURE PROCESS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Learn. Apply. Improve. Grow.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
              We believe agricultural training should not end when the classroom session ends. Our goal is to help farmers move from knowledge to application—and from application to measurable improvement.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-6">
            {signatureSteps.map(({ number, title, text }) => (
              <div key={title} className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-4 text-center">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">{number}</div>
                <div className="mt-3 text-lg font-bold tracking-[-0.05em] text-[var(--agro-charcoal)]">{title}</div>
                <p className="mt-2 text-sm leading-5 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">HOW TRAINING WORKS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              From Your Challenge to Practical Support
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {trainingSteps.map(({ number, title, text }, index) => (
              <div key={title} className="rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--agro-green-700)] text-lg font-bold text-white">{number}</div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Step {number}</div>
                    <h3 className="mt-2 text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
                  </div>
                </div>
                {index < trainingSteps.length - 1 && <div className="mt-4 flex justify-center"><ArrowDown className="h-5 w-5 text-[var(--agro-gold)]" /></div>}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">WHO WE SERVE</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Learning for Every Stage of the Agricultural Journey
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
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

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">TRAINING FORMATS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Learning Designed Around the Learner
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {formatCards.map(({ title, text, icon: Icon }) => (
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

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">WHY GLEANAGRO</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              The Practical Principles Behind Our Support
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyCards.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 overflow-hidden rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white shadow-[var(--agro-shadow)]">
          <div className="grid items-center gap-0 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-[340px] overflow-hidden bg-stone-900">
              <img src={heroImage} alt="Innovation farm demonstrating practical agricultural learning" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f2b]/85 via-[#0f2f2b]/25 to-transparent" />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">THE INNOVATION FARM CONNECTION</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
                Learn Where Agriculture Happens
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
                Our innovation and demonstration farm provides a practical environment for testing agricultural practices, technologies and production systems.
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--agro-muted)]">
                Farmers can learn not only from what we teach, but from what we demonstrate.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--agro-green-700)]">
                <span className="rounded-full bg-[rgba(29,90,66,0.08)] px-3 py-2">TEST</span>
                <ArrowRight className="h-4 w-4 text-[var(--agro-gold)]" />
                <span className="rounded-full bg-[rgba(29,90,66,0.08)] px-3 py-2">LEARN</span>
                <ArrowRight className="h-4 w-4 text-[var(--agro-gold)]" />
                <span className="rounded-full bg-[rgba(29,90,66,0.08)] px-3 py-2">DEMONSTRATE</span>
                <ArrowRight className="h-4 w-4 text-[var(--agro-gold)]" />
                <span className="rounded-full bg-[rgba(29,90,66,0.08)] px-3 py-2">TEACH</span>
                <ArrowRight className="h-4 w-4 text-[var(--agro-gold)]" />
                <span className="rounded-full bg-[rgba(29,90,66,0.08)] px-3 py-2">SCALE</span>
              </div>
              <button
                type="button"
                onClick={() => onNavigatePage('roadmap')}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--agro-green-600)]"
              >
                Explore Our Innovation Farm
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">MEASURING IMPACT</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Training Should Lead to Change
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {impactCards.map(({ title, text }) => (
              <div key={title} className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--agro-gold)]">{title}</div>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">RELATED SOLUTIONS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Knowledge Works Best When It&apos;s Connected
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {relatedCards.map(({ title, text, icon: Icon }) => (
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

        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-[linear-gradient(135deg,#0f2f2b_0%,#173a31_100%)] p-6 text-white shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-gold-soft)]">READY TO GROW?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
              Ready to Strengthen Your Agricultural Enterprise?
            </h2>
            <p className="mt-4 text-base leading-7 text-emerald-50/90">
              Whether you are an individual farmer, farmer group, agripreneur or organization, let&apos;s explore how GleanAgro can support your agricultural journey.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onOpenInquiryModal('Smallholder Farmer', 'Training & Technical Support')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[var(--agro-green-700)] transition hover:bg-emerald-50"
              >
                Get Training Support
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigatePage('farmer-hub')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-5 py-3.5 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/5"
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
