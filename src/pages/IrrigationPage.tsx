import React from 'react';
import {
  ArrowRight,
  Droplet,
  Zap,
  Users,
  Sun,
  Fish,
  Home,
  Cpu,
  Wrench,
  Activity
} from 'lucide-react';
import heroImage from '../assets/images/hero-img.jpg';
import { PageHeader } from '../components/PageHeader';
import { InquiryCallback } from '../types';

interface IrrigationPageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

const challengeCards = [
  { title: 'Water', text: 'Limited or unreliable water access can restrict production.', icon: Droplet },
  { title: 'Energy', text: 'Energy costs and unreliable power can make operations difficult.', icon: Zap },
  { title: 'Labour', text: 'Inefficient processes consume valuable time and labour.', icon: Users },
  { title: 'Climate', text: "Changing weather conditions increase production risks.", icon: Activity },
];

const solutionCards = [
  {
    id: 'irrigation-systems',
    title: 'Irrigation & Water Management',
    text: 'Practical irrigation solutions to improve water availability, distribution and efficiency (drip, sprinkler, storage, pumping, planning).',
    icon: Droplet,
    cta: 'Explore Irrigation →'
  },
  {
    id: 'solar-agriculture',
    title: 'Solar-Powered Agriculture',
    text: 'We help farmers identify and implement appropriate solar solutions through our technical partners (pumping, lighting, cold storage where appropriate).',
    icon: Sun,
    cta: 'Explore Solar →'
  },
  {
    id: 'greenhouse',
    title: 'Greenhouse & Protected Production',
    text: 'Protected systems that help manage growing conditions and extend productive opportunities (greenhouses, shade, nursery, monitoring).',
    icon: Home,
    cta: 'Explore Protected Agriculture →'
  },
  {
    id: 'automation',
    title: 'Farm Automation & Efficiency',
    text: 'Simple automation to reduce labour and improve consistency (timers, controllers, basic monitoring).',
    icon: Cpu,
    cta: 'Explore Automation →'
  },
  {
    id: 'aquaculture',
    title: 'Water & Aquaculture Technology',
    text: 'Practical aquaculture technologies for water management, aeration, feeding and monitoring.',
    icon: Fish,
    cta: 'Explore Aquaculture →'
  },
  {
    id: 'data-tools',
    title: 'Farm Data & Digital Tools',
    text: 'Simple digital tools to record activities, track costs and monitor production to support better decisions.',
    icon: Wrench,
    cta: 'Explore Digital Tools →'
  }
];

const howItWorks = [
  { number: '01', title: 'Understand', text: 'We learn about your farm, production system and challenge.' },
  { number: '02', title: 'Assess', text: 'We consider water, energy, infrastructure, cost and technical requirements.' },
  { number: '03', title: 'Recommend', text: 'We identify appropriate technology options.' },
  { number: '04', title: 'Implement', text: 'We work with the farmer and technical partners to put the solution in place.' },
  { number: '05', title: 'Monitor & Improve', text: 'We learn from results and make improvements where necessary.' },
];

const audienceCards = [
  { title: 'Smallholder Farmers', text: 'Practical technologies that improve resource use without unnecessary complexity.', icon: Users },
  { title: 'Commercial Farms', text: 'Systems that support more efficient and scalable operations.', icon: Activity },
  { title: 'Aquaculture Producers', text: 'Technologies for better water, feeding and production management.', icon: Fish },
  { title: 'Livestock & Poultry', text: 'Tools that support efficient production and resource management.', icon: Home },
  { title: 'Women & Youth Agripreneurs', text: 'Accessible technologies that reduce labour constraints and create opportunities.', icon: Users },
];

export const IrrigationPage: React.FC<IrrigationPageProps> = ({ onOpenInquiryModal, onNavigatePage }) => {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <PageHeader
        title="Irrigation & Agricultural Technology"
        subtitle="Technology That Makes Farming Smarter"
        categoryTag="Irrigation & Agricultural Technology"
        breadcrumbs={[{ label: 'Irrigation & Agricultural Technology' }]}
        onNavigatePage={onNavigatePage}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* HERO */}
        <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_25px_60px_rgba(15,47,43,0.08)]">
          <div className="grid items-center gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--agro-green-700)]">IRRIGATION & AGRICULTURAL TECHNOLOGY</p>
              <h1 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.06em] text-[var(--agro-charcoal)] sm:text-5xl">Technology That Makes Farming Smarter</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--agro-muted)]">We help farmers and agricultural enterprises explore practical technologies that improve water management, production efficiency, resource use and farm resilience.</p>

              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onNavigatePage('solutions')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--agro-green-600)]"
                >
                  Explore Technology →
                </button>
                <button
                  type="button"
                  onClick={() => onOpenInquiryModal('Smallholder Farmer')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(29,90,66,0.2)] bg-white px-5 py-3.5 text-sm font-bold text-[var(--agro-green-700)] transition hover:border-[var(--agro-green-700)]"
                >
                  Talk to GleanAgro
                </button>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-stone-900">
              <img src={heroImage} alt="Farm water and solar infrastructure" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f2b]/80 via-[#0f2f2b]/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">THE CHALLENGE</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">Better Farming Often Starts With Better Use of Resources</h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">Water, energy, labour and other farm resources are limited. Inefficient systems can increase production costs, reduce productivity and make farmers more vulnerable to changing weather conditions. The challenge isn't simply getting more technology. It is finding technology that solves a real problem, fits the farmer's context and can be maintained over time.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {challengeCards.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--agro-gold)]">{title}</div>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR SOLUTION */}
        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">OUR SOLUTION</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">Simple Technology. Practical Results.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">GleanAgro explores and promotes agricultural technologies that are practical, scalable and suited to the realities of farmers and agricultural enterprises.</p>
          </div>

          <div className="mt-10 grid place-items-center">
            <div className="text-center font-bold">
              <div className="text-lg">ASSESS</div>
              <div className="text-4xl mt-1">+</div>
              <div className="text-lg mt-1">TEST</div>
              <div className="text-4xl mt-1">+</div>
              <div className="text-lg mt-1">ADAPT</div>
              <div className="text-4xl mt-1">+</div>
              <div className="text-lg mt-1">SUPPORT</div>
              <div className="mt-4 text-sm text-[var(--agro-muted)]">↓</div>
              <div className="mt-2 text-xl">PRACTICAL AGRICULTURAL TECHNOLOGY</div>
              <div className="mt-2 text-sm text-[var(--agro-muted)]">Better Resource Use → Greater Efficiency → More Resilient Production</div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">WHAT WE OFFER</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">Technologies Designed Around Agricultural Needs</h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutionCards.map(({ id, title, text, icon: Icon, cta }) => (
              <article key={id} className="rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-[0_18px_40px_rgba(15,47,43,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--agro-muted)]">{text}</p>
                <div className="mt-4">
                  <button onClick={() => onNavigatePage('solutions')} className="text-sm font-bold text-[var(--agro-green-700)]">{cta} <ArrowRight className="inline-block h-4 w-4"/></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NOT EVERY TECHNOLOGY */}
        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Not Every Technology Is Right for Every Farm</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">The Right Technology Depends on the Farm</h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">A solution that works well on one farm may not be appropriate for another. Farm size, location, water availability, energy access, production system, capital and technical capacity all matter. That's why GleanAgro focuses on understanding the problem before recommending a technology.</p>

            <div className="mt-8 text-left mx-auto max-w-xl">
              <ol className="space-y-3 text-sm text-[var(--agro-muted)]">
                <li>FARM CONTEXT →</li>
                <li>THE PROBLEM →</li>
                <li>AVAILABLE RESOURCES →</li>
                <li>TECHNOLOGY OPTIONS →</li>
                <li>COST & FEASIBILITY →</li>
                <li>IMPLEMENTATION →</li>
                <li>SUPPORT</li>
              </ol>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">HOW IT WORKS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">From Farm Challenge to Practical Technology</h2>
          </div>

          <div className="mt-8 space-y-4">
            {howItWorks.map(({ number, title, text }) => (
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

        {/* WHO WE SERVE */}
        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">WHO WE SERVE</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">Technology for Different Agricultural Needs</h2>
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

        {/* PRINCIPLE */}
        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl">Simple Enough to Adopt. Powerful Enough to Matter.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">Innovation only creates value when people can use it. We therefore prioritize technologies that are practical, understandable, maintainable and appropriate to the farmer's operating environment.</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Droplet className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-[-0.03em] text-[var(--agro-charcoal)]">Appropriate</h3>
              </div>

              <div className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-[-0.03em] text-[var(--agro-charcoal)]">Affordable</h3>
              </div>

              <div className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-[-0.03em] text-[var(--agro-charcoal)]">Maintainable</h3>
              </div>

              <div className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(29,90,66,0.08)] text-[var(--agro-green-700)]">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-[-0.03em] text-[var(--agro-charcoal)]">Scalable</h3>
              </div>
            </div>
          </div>
        </section>

        {/* INNOVATION FARM */}
        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">INNOVATION FARM</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">See Agricultural Technology in Action</h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">Our innovation and demonstration farm provides a practical environment for testing technologies and production systems before they are recommended more widely.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 text-left">
              <div className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--agro-green-700)]">Water</div>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Solar-powered borehole + water storage + distribution.</p>
            </div>

            <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 text-left">
              <div className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--agro-green-700)]">Energy</div>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Solar-powered agricultural infrastructure.</p>
            </div>

            <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 text-left">
              <div className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--agro-green-700)]">Aquaculture</div>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Tank-based fish production systems.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="font-bold">TEST → LEARN → ADAPT → DEMONSTRATE → SCALE</div>
            <div className="mt-4">
              <button onClick={() => onNavigatePage('farmer-hub')} className="inline-flex items-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white">Explore Our Innovation Farm →</button>
            </div>
          </div>
        </section>

        {/* WHY GLEANAGRO & OUTCOMES & RELATED & CTA */}
        <section className="mt-14 rounded-[2rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-[var(--agro-shadow)] md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">WHY GLEANAGRO</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">Practical, Connected, Evidence-Informed & Sustainable</h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">We test, observe and learn before recommending. We work with farmers, technical experts and partners to implement solutions that last.</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 text-center">Practical</div>
              <div className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 text-center">Evidence-Informed</div>
              <div className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 text-center">Connected</div>
              <div className="rounded-[1.25rem] border border-[rgba(29,90,66,0.12)] bg-[rgba(29,90,66,0.02)] p-5 text-center">Sustainable</div>
            </div>

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold">What Better Technology Can Help Achieve</h3>
              <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm text-[var(--agro-muted)]">
                <li>Better Water Management</li>
                <li>Better Energy Efficiency</li>
                <li>Reduced Labour Burden</li>
                <li>Better Farm Management</li>
                <li>Greater Resilience</li>
                <li>Stronger Farm Economics</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-lg font-bold">Related Solutions</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border p-4">Farm Inputs</div>
                <div className="rounded-2xl border p-4">Training & Technical Support</div>
                <div className="rounded-2xl border p-4">Agricultural Finance</div>
                <div className="rounded-2xl border p-4">Market Access</div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-xl font-bold">Have a Farm Challenge Technology Could Solve?</h3>
              <p className="mt-2 text-[var(--agro-muted)]">Tell us about your farm, your challenge and what you're trying to achieve. We'll help you explore practical options.</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <button onClick={() => onOpenInquiryModal('Smallholder Farmer')} className="inline-flex items-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white">Talk to GleanAgro →</button>
                <button onClick={() => onNavigatePage('farmer-hub')} className="inline-flex items-center gap-2 rounded-xl border border-[rgba(29,90,66,0.12)] px-5 py-3.5 text-sm font-bold">Join Farmer Hub →</button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default IrrigationPage;
