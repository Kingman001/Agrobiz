import React, { useEffect, useState } from 'react';
import { CompanySettings, InquiryCallback, ProducePillar } from '../types';
import { Hero } from '../components/Hero';
import { PartnershipsSection } from '../components/PartnershipsSection';
import { ArrowRight, Sprout, Warehouse, TrendingUp, Users, Leaf, HandCoins, Stethoscope, CircleDollarSign, BriefcaseBusiness, BookOpenText, Coins, Cpu, Store, UserRound } from 'lucide-react';
import innovationFarmImage from '../assets/images/smallholder_farmer_hub_1784882677913.jpg';

interface HomePageProps {
  companySettings: CompanySettings;
  onSelectPillar: (pillar: ProducePillar) => void;
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

const challengeCards = [
  {
    title: 'Limited Access',
    text: 'Farmers often don’t have reliable access to quality inputs, extension guidance or local support at the right time.',
    icon: Warehouse
  },
  {
    title: 'Low Productivity',
    text: 'Outdated practices, weak soil management and poor monitoring reduce yields and household income.',
    icon: TrendingUp
  },
  {
    title: 'Weak Finance',
    text: 'Seasonal cash flow pressures and limited finance options make it difficult to invest and scale.',
    icon: CircleDollarSign
  },
  {
    title: 'Market Friction',
    text: 'Without aggregation, confidence and consistent buyers, farmers struggle to convert output into reliable earnings.',
    icon: HandCoins
  }
];

const ecosystemPillars = [
  { name: 'Inputs', description: 'Quality seeds, feed and crop support', icon: Sprout },
  { name: 'Knowledge', description: 'Field training and practical guidance', icon: BookOpenText },
  { name: 'Finance', description: 'Working capital and resilient planning', icon: Coins },
  { name: 'Technology', description: 'Farm tools and data-led decision support', icon: Cpu },
  { name: 'Markets', description: 'Linkages to buyers and aggregation', icon: Store },
  { name: 'Enterprise', description: 'Value creation and business growth', icon: BriefcaseBusiness }
];

const journeyStages = [
  { step: '01', title: 'Understand', text: 'Listen to local realities, needs and production constraints.' },
  { step: '02', title: 'Equip', text: 'Provide relevant inputs, tools and practical support systems.' },
  { step: '03', title: 'Train', text: 'Build capacity through field learning and tested agronomy.' },
  { step: '04', title: 'Produce', text: 'Create better production systems with stronger on-farm performance.' },
  { step: '05', title: 'Connect', text: 'Link farmers to markets, buyers and financing opportunities.' },
  { step: '06', title: 'Grow', text: 'Turn learning into resilient businesses and repeated value.' }
];

const solutionCards = [
  { title: 'Farm Inputs', text: 'Targeted inputs, agronomy support and practical field guidance for productive seasons.' },
  { title: 'Agricultural Finance', text: 'Flexible financing pathways that support working capital and business growth.' },
  { title: 'Training & Support', text: 'Hands-on training, technical mentoring and farmer learning programmes.' },
  { title: 'Irrigation & Greenhouse', text: 'Water, climate-smart systems and protected cultivation for higher consistency.' },
  { title: 'Storage & Post-Harvest', text: 'Better handling and storage systems to reduce loss and improve quality.' },
  { title: 'Market Access', text: 'Aggregation, buyer linkages and stronger value-chain coordination.' }
];

const womenYouthPaths = [
  { title: 'Learn', text: 'Practical learning pathways and mentorship for women and young people entering agriculture.' },
  { title: 'Launch', text: 'Support to establish viable farm enterprises, pods and small businesses.' },
  { title: 'Grow', text: 'Access to market opportunities, business support and scaling pathways.' }
];

const storyCards = [
  { name: 'Hauwa M.', location: 'Makarfi, Kaduna', focus: 'Poultry & household enterprise', quote: 'With better support and better planning, I can run a more stable farm business for my household.' },
  { name: 'Auwal S.', location: 'Zaria, Kaduna', focus: 'Crop production & aggregation', quote: 'The real difference is getting systems that match the reality of how farmers work and produce.' },
  { name: 'Fatima A.', location: 'Kaduna South', focus: 'Women in agribusiness', quote: 'Good training and strong local support make it possible to start, learn and grow with confidence.' }
];

const insightCards = [
  'Farmer guidance',
  'Agriculture insights',
  'Innovation updates',
  'Women & youth stories'
];

export const HomePage: React.FC<HomePageProps> = ({
  companySettings,
  onSelectPillar,
  onOpenInquiryModal,
  onNavigatePage
}) => {
  const [impactValues, setImpactValues] = useState({ one: 0, six: 0, three: 0, four: 0 });

  useEffect(() => {
    const target = { one: 1, six: 6, three: 3, four: 4 };
    const duration = 900;
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setImpactValues({
        one: Math.round(target.one * eased),
        six: Math.round(target.six * eased),
        three: Math.round(target.three * eased),
        four: Math.round(target.four * eased)
      });

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="space-y-8 pb-12 md:space-y-10">
      <Hero
        companySettings={companySettings}
        onNavigateSection={onNavigatePage}
        onOpenInquiryModal={onOpenInquiryModal}
      />

      <main className="agro-shell space-y-8 py-6 md:space-y-12 md:py-8">
        <section id="challenge" className="pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">The challenge</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Smallholder farmers feed the country. They deserve systems built around their reality.
            </h2>
            <p className="mt-4 text-base text-[var(--agro-muted)]">
              We work at the intersection of production, enterprise, knowledge and market access so farmers can move from survival to sustainable growth.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {challengeCards.map(({ title, text, icon: Icon }) => (
              <div key={title} className="agro-card p-5">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="approach" className="agro-panel bg-[rgba(255,255,255,0.82)] p-6 md:p-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Farmer ecosystem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              One farmer. One ecosystem. Better opportunity.
            </h2>
            <p className="mt-4 text-base text-[var(--agro-muted)]">
              We connect the practical support farmers need to produce, earn, learn and grow more confidently.
            </p>
          </div>

          <div className="relative mt-10 hidden min-h-[430px] lg:block">
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(29,90,66,0.24)] bg-[linear-gradient(135deg,#0f2f2b_0%,#173a31_100%)] shadow-2xl shadow-black/10" />
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-center text-sm font-bold text-white">
              <div>
                <UserRound className="mx-auto mb-2 h-6 w-6 text-[var(--agro-gold-soft)]" />
                Farmer
              </div>
            </div>

            {ecosystemPillars.map((pillar, index) => {
              const angle = (index / ecosystemPillars.length) * Math.PI * 2 - Math.PI / 2;
              const radiusX = 230;
              const radiusY = 160;
              const x = Math.cos(angle) * radiusX;
              const y = Math.sin(angle) * radiusY;
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.name}
                  className="absolute w-44"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-4 text-center shadow-lg shadow-[rgba(15,47,43,0.06)]">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="text-sm font-bold text-[var(--agro-green-700)]">{pillar.name}</div>
                    <div className="mt-1 text-[11px] leading-4 text-[var(--agro-muted)]">{pillar.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 lg:hidden">
            {ecosystemPillars.map(({ name, description, icon: Icon }) => (
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
        </section>

        <section id="how-it-works" className="pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              A clear journey from need to impact.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {journeyStages.map(({ step, title, text }) => (
              <div key={step} className="agro-card p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-gold)]">{step}</span>
                  <span className="h-2 w-2 rounded-full bg-[var(--agro-green-700)]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Solutions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Practical solutions for real farm and business challenges.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutionCards.map(({ title, text }) => (
              <div key={title} className="agro-card p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(201,149,69,0.12)] text-[var(--agro-gold)]">
                  <Sprout className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
                <button
                  type="button"
                  onClick={() => onNavigatePage('produce')}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--agro-green-700)]"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="innovation-farm" className="overflow-hidden rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white shadow-[var(--agro-shadow)]">
          <div className="grid items-center gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src={innovationFarmImage}
                alt="Innovation farm with training, research and livestock systems"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Innovation farm</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
                We learn, test and improve before we scale.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">
                The farm is a strategic platform for production, research, demonstration, training and evidence-based field learning. It supports smarter agriculture and stronger decision-making for farmers and partners.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--agro-charcoal)]">
                <li className="flex items-start gap-3"><Leaf className="mt-0.5 h-4 w-4 text-[var(--agro-green-700)]" />Production and testing of practical systems and enterprise models.</li>
                <li className="flex items-start gap-3"><Users className="mt-0.5 h-4 w-4 text-[var(--agro-green-700)]" />Designed for training, farmer engagement and shared learning.</li>
                <li className="flex items-start gap-3"><Stethoscope className="mt-0.5 h-4 w-4 text-[var(--agro-green-700)]" />A platform for measured experimentation and continuous improvement.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="women-youth" className="pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Women & youth</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              The future of agriculture is inclusive.
            </h2>
            <p className="mt-4 text-base text-[var(--agro-muted)]">
              Our pathway is simple: learn, launch, grow.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {womenYouthPaths.map(({ title, text }) => (
              <div key={title} className="agro-card p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)] text-lg font-bold">
                  {title.slice(0, 1)}
                </div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className="rounded-[2rem] bg-[linear-gradient(120deg,#0f2f2b_0%,#173a31_100%)] p-6 text-white md:p-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-gold-soft)]">Impact dashboard</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
              Measured by practical progress, not inflated claims.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { key: 'one', value: impactValues.one, suffix: '', label: 'farmer-first ecosystem' },
              { key: 'six', value: impactValues.six, suffix: '+', label: 'core support pillars' },
              { key: 'three', value: impactValues.three, suffix: '', label: 'growth pathways for women & youth' },
              { key: 'four', value: impactValues.four, suffix: '', label: 'stages from need to impact' }
            ].map(({ key, value, suffix, label }) => (
              <div key={key} className="metric-tile p-5 text-center text-white/90">
                <div className="text-4xl font-bold tracking-[-0.06em] text-[var(--agro-gold-soft)]">{value}{suffix}</div>
                <div className="mt-2 text-sm text-white/80 uppercase tracking-[0.12em]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="stories" className="pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Farmer stories</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Real farmers. Real decisions. Real change.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {storyCards.map(({ name, location, focus, quote }) => (
              <article key={name} className="agro-card overflow-hidden">
                <div className="h-40 bg-[linear-gradient(135deg,#d9e6df_0%,#bfd3c5_55%,#d7b683_100%)]" aria-hidden="true" />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{name}</h3>
                  <p className="mt-1 text-sm text-[var(--agro-green-700)]">{location}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--agro-muted)]">{focus}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">“{quote}”</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="partners" className="pt-2">
          <PartnershipsSection
            companySettings={companySettings}
            initialRole="Commercial Buyer"
            initialProduceInterest=""
          />
        </section>

        <section id="insights" className="pt-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Insights</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Practical ideas from the field.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {insightCards.map((title, index) => (
              <div key={title} className="agro-card p-5">
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(201,149,69,0.12)] text-xs font-bold text-[var(--agro-gold)]">0{index + 1}</div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--agro-muted)]">Thoughtful guidance for farmers, partners and institutions working in agriculture.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="final-cta" className="pt-2">
          <div className="rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-[linear-gradient(135deg,#f4efe7_0%,#ffffff_100%)] p-6 text-center shadow-[var(--agro-shadow)] md:p-10">
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">
              Let’s build a stronger agricultural future together.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--agro-muted)]">
              Whether you are a farmer, partner, buyer or investor, there is a meaningful next step with GleanAgro.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onOpenInquiryModal('Impact Investor')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--agro-green-600)]"
              >
                Partner with us <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigatePage('farmer-hub')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(29,90,66,0.2)] bg-white px-6 py-3.5 text-sm font-bold text-[var(--agro-green-700)] transition hover:border-[var(--agro-green-700)]"
              >
                Join farmer network
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
