import React from 'react';
import { ArrowRight, CircleDollarSign, CheckCircle2, Users, Leaf, BriefcaseBusiness, HandCoins, Cpu } from 'lucide-react';
import heroImage from '../assets/images/agribusiness_hero_banner_1784882619239.jpg';
import { PageHeader } from '../components/PageHeader';
import { InquiryCallback } from '../types';

interface AgriculturalFinancePageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

export const AgriculturalFinancePage: React.FC<AgriculturalFinancePageProps> = ({ onOpenInquiryModal, onNavigatePage }) => {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <PageHeader
        title="Helping Farmers Access the Capital They Need to Grow"
        subtitle="GleanAgro helps farmers understand their financial needs, prepare for financing and connect with appropriate funding opportunities to support productive growth."
        categoryTag="Agricultural Finance"
        breadcrumbs={[{ label: 'Agricultural Finance' }]}
        onNavigatePage={onNavigatePage}
        bgGradient="from-emerald-900 via-emerald-800 to-emerald-900"
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* HERO */}
        <section className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-[0_18px_40px_rgba(15,47,43,0.06)] lg:flex lg:items-center">
          <div className="p-8 lg:flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">AGRICULTURAL FINANCE</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">Capital for Better Agricultural Opportunities</h2>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">We help farmers and agricultural enterprises understand their financial needs, prepare for financing and connect with appropriate funding opportunities to support productive growth.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => onOpenInquiryModal('Smallholder Farmer')} className="inline-flex items-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white">Explore Financing Support →</button>
              <button onClick={() => onOpenInquiryModal('General')} className="inline-flex items-center gap-2 rounded-xl border border-[rgba(29,90,66,0.12)] px-5 py-3.5 text-sm font-bold">Talk to GleanAgro</button>
            </div>

            <p className="mt-6 text-sm text-[var(--agro-muted)]">GleanAgro is not necessarily the financier — we act as a bridge between farmers and appropriate financing opportunities while helping farmers become finance-ready.</p>
          </div>

          <div className="relative lg:w-1/2 min-h-[260px] overflow-hidden bg-stone-900">
            <img src={heroImage} alt="Farmer in the field" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04251f]/60 to-transparent" />
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="mt-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">The challenge</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">Good Agricultural Ideas Often Need Capital to Grow</h3>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">Farmers may have viable production opportunities but struggle to access the capital required for inputs, equipment, infrastructure or expansion. At the same time, many farmers are not adequately prepared to approach financing providers with the information, records and business plans required to demonstrate viability.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
              <div className="text-sm font-bold text-[var(--agro-green-700)]">💰 Limited Capital</div>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Farmers may lack the funds required to start, maintain or expand production.</p>
            </div>

            <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
              <div className="text-sm font-bold text-[var(--agro-green-700)]">📋 Poor Financial Records</div>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Inadequate records can make it difficult to understand farm performance or demonstrate viability.</p>
            </div>

            <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
              <div className="text-sm font-bold text-[var(--agro-green-700)]">🧮 Weak Planning</div>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Without clear budgets and cash-flow plans, borrowed capital can easily be mismanaged.</p>
            </div>

            <div className="rounded-2xl border border-[rgba(29,90,66,0.12)] bg-white p-5 shadow-sm">
              <div className="text-sm font-bold text-[var(--agro-green-700)]">🔗 Limited Access</div>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Farmers may not know which financing opportunities are appropriate for their needs.</p>
            </div>
          </div>

          <div className="mt-6 mx-auto max-w-3xl text-center text-sm text-[var(--agro-muted)]">The problem isn't always simply "there is no money." Sometimes it's: the farmer isn't ready for the money. That gives GleanAgro a much more valuable role.</div>
        </section>

        {/* OUR SOLUTION */}
        <section className="mt-12 rounded-[1.5rem] border border-[rgba(29,90,66,0.12)] bg-white p-6 shadow-sm">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Our solution</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">We Help Farmers Become Finance-Ready</h3>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">GleanAgro helps farmers understand their financial needs, strengthen their farm business plans and connect with appropriate financing opportunities. We focus on helping farmers use capital productively—not simply helping them obtain money.</p>
          </div>

          <div className="mt-8 mx-auto max-w-2xl p-6 text-center bg-[rgba(29,90,66,0.03)] rounded-xl">
            <div className="text-xl font-bold">UNDERSTAND</div>
            <div className="text-2xl font-bold mt-1">+</div>
            <div className="text-xl font-bold mt-1">PREPARE</div>
            <div className="text-2xl font-bold mt-1">+</div>
            <div className="text-xl font-bold mt-1">CONNECT</div>
            <div className="text-2xl font-bold mt-1">+</div>
            <div className="text-xl font-bold mt-1">SUPPORT</div>

            <div className="mt-4 text-sm font-semibold text-[var(--agro-green-700)]">↓</div>
            <div className="mt-2 text-base font-bold">BETTER FINANCING DECISIONS</div>
            <div className="mt-1 text-sm text-[var(--agro-muted)]">↓ PRODUCTIVE INVESTMENT ↓ SUSTAINABLE FARM GROWTH</div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">What we offer</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">Financial Support Built Around the Farm</h3>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="inline-flex items-center gap-3 text-[var(--agro-green-700)] font-bold"><CircleDollarSign className="w-5 h-5" />01 — Farm Financial Assessment</div>
              <h4 className="mt-3 text-lg font-bold">📊 Understand Your Numbers</h4>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Help farmers understand their production costs, financial needs, revenue potential and funding requirements. Possible areas: production costing, expense tracking, revenue estimation, cash-flow planning, financing requirements.</p>
            </article>

            <article className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="inline-flex items-center gap-3 text-[var(--agro-green-700)] font-bold"><BriefcaseBusiness className="w-5 h-5" />02 — Farm Business Planning</div>
              <h4 className="mt-3 text-lg font-bold">📋 Build a Stronger Farm Business Plan</h4>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Support farmers in developing practical business plans that clarify their production model, financial needs and growth opportunities. Enterprise plans, production budgets, cash-flow projections, risk assessment and expansion plans.</p>
            </article>

            <article className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="inline-flex items-center gap-3 text-[var(--agro-green-700)] font-bold"><CheckCircle2 className="w-5 h-5" />03 — Financial Readiness</div>
              <h4 className="mt-3 text-lg font-bold">🎯 Become Finance-Ready</h4>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Help farmers organize the information, records and documentation they may need when seeking external financing. This is a potentially powerful GleanAgro service.</p>
            </article>

            <article className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="inline-flex items-center gap-3 text-[var(--agro-green-700)] font-bold"><HandCoins className="w-5 h-5" />04 — Financing Connections</div>
              <h4 className="mt-3 text-lg font-bold">🔗 Connect With Financing Opportunities</h4>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Where appropriate, connect eligible farmers and agricultural enterprises with relevant financial institutions, investors, programmes and financing partners. "Connect" rather than "We provide loans."</p>
            </article>

            <article className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="inline-flex items-center gap-3 text-[var(--agro-green-700)] font-bold"><CircleDollarSign className="w-5 h-5" />05 — Input & Production Financing</div>
              <h4 className="mt-3 text-lg font-bold">🌱 Finance for Productive Needs</h4>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Explore structured financing opportunities that can help farmers access inputs and resources required for production. Potential future models include input financing, production-cycle financing and cooperative financing; presented only when partnerships exist.</p>
            </article>

            <article className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="inline-flex items-center gap-3 text-[var(--agro-green-700)] font-bold"><Cpu className="w-5 h-5" />06 — Equipment & Infrastructure Finance</div>
              <h4 className="mt-3 text-lg font-bold">⚙️ Finance for Farm Development</h4>
              <p className="mt-2 text-sm text-[var(--agro-muted)]">Explore financing pathways for productive assets such as irrigation systems, solar equipment, livestock infrastructure, processing equipment and other agricultural assets.</p>
            </article>
          </div>
        </section>

        {/* FINANCE SHOULD SOLVE A PROBLEM */}
        <section className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Finance should solve a problem — not create one</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">The Right Financing Depends on the Farm</h3>
            <p className="mt-4 text-base leading-7 text-[var(--agro-muted)]">Not every farmer needs the same type of financing. The appropriate option depends on the production cycle, cash flow, business model, repayment capacity, risk and purpose of the funding.</p>

            <div className="mt-6 inline-block text-left bg-white rounded-xl border border-[rgba(29,90,66,0.06)] p-6">
              <ol className="space-y-3 text-sm text-[var(--agro-muted)]">
                <li>WHAT DO YOU NEED?</li>
                <li>WHY DO YOU NEED IT?</li>
                <li>HOW MUCH IS REQUIRED?</li>
                <li>WHEN WILL IT GENERATE RETURNS?</li>
                <li>WHAT CAN THE FARM SUSTAIN?</li>
                <li>WHICH FINANCING OPTION FITS?</li>
              </ol>
              <p className="mt-4 font-semibold text-[var(--agro-green-700)]">Borrowing should strengthen a viable agricultural enterprise—not hide a weak one.</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">How it works</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">From Farm Need to Financing Opportunity</h3>
          </div>

          <div className="mt-8 mx-auto max-w-xs text-center">
            <div className="text-sm font-bold">01 — Understand</div>
            <div className="text-[28px] font-bold">↓</div>
            <div className="text-sm font-bold">02 — Assess</div>
            <div className="text-[28px] font-bold">↓</div>
            <div className="text-sm font-bold">03 — Prepare</div>
            <div className="text-[28px] font-bold">↓</div>
            <div className="text-sm font-bold">04 — Connect</div>
            <div className="text-[28px] font-bold">↓</div>
            <div className="text-sm font-bold">05 — Support</div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Who we serve</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">Financing Support for Growing Agricultural Enterprises</h3>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm text-left">
              <div className="mb-3 font-bold text-[var(--agro-green-700)]">🌾 Smallholder Farmers</div>
              <div className="text-sm text-[var(--agro-muted)]">Build financial readiness and explore appropriate financing options for productive farm activities.</div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm text-left">
              <div className="mb-3 font-bold text-[var(--agro-green-700)]">🌱 Emerging Farmers</div>
              <div className="text-sm text-[var(--agro-muted)]">Develop stronger business plans and financial structures as you grow your agricultural enterprise.</div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm text-left">
              <div className="mb-3 font-bold text-[var(--agro-green-700)]">👩🏾‍💼 Women Agripreneurs</div>
              <div className="text-sm text-[var(--agro-muted)]">Access business planning and financing pathways designed to support sustainable agricultural enterprises.</div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm text-left">
              <div className="mb-3 font-bold text-[var(--agro-green-700)]">👨🏾‍💻 Youth Agripreneurs</div>
              <div className="text-sm text-[var(--agro-muted)]">Develop the financial and business capabilities required to turn agricultural ideas into viable enterprises.</div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm text-left">
              <div className="mb-3 font-bold text-[var(--agro-green-700)]">👥 Cooperatives & Farmer Groups</div>
              <div className="text-sm text-[var(--agro-muted)]">Strengthen collective planning and explore financing opportunities for group-based agricultural activities.</div>
            </div>
          </div>
        </section>

        {/* FINANCING PATHWAYS */}
        <section className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Financing pathways</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">Different Needs. Different Financing Pathways.</h3>
            <p className="mt-4 text-sm text-[var(--agro-muted)]">Instead of one generic loan option, show pathways that match the purpose of financing.</p>
          </div>

          <div className="mt-6 mx-auto max-w-4xl grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="font-semibold text-[var(--agro-green-700)]">🌱 Production</div>
              <div className="text-sm text-[var(--agro-muted)]">For recurring production needs. Examples: seeds, feed, fertilizer, livestock inputs.</div>
            </div>

            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="font-semibold text-[var(--agro-green-700)]">⚙️ Assets</div>
              <div className="text-sm text-[var(--agro-muted)]">For productive equipment and infrastructure. Examples: irrigation, solar systems, processing equipment.</div>
            </div>

            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="font-semibold text-[var(--agro-green-700)]">📈 Expansion</div>
              <div className="text-sm text-[var(--agro-muted)]">For scaling an established agricultural enterprise. Examples: additional production capacity, facilities, livestock.</div>
            </div>

            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="font-semibold text-[var(--agro-green-700)]">🤝 Collective</div>
              <div className="text-sm text-[var(--agro-muted)]">For organized farmer groups and cooperatives. Examples: aggregation, shared equipment, group production.</div>
            </div>

            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="font-semibold text-[var(--agro-green-700)]">💡 Enterprise Development</div>
              <div className="text-sm text-[var(--agro-muted)]">For building new agricultural businesses. Examples: agribusiness startups, value addition, processing.</div>
            </div>
          </div>
        </section>

        {/* FINANCIAL LITERACY */}
        <section className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Financial literacy</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">Access to Finance Starts With Financial Understanding</h3>
            <p className="mt-4 text-sm text-[var(--agro-muted)]">Sustainable agricultural enterprises need more than capital. Farmers need the skills to plan, manage and account for the money flowing through their businesses.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border bg-white p-6 shadow-sm text-center">
              <div className="font-bold text-[var(--agro-green-700)]">Record</div>
              <div className="mt-2 text-sm text-[var(--agro-muted)]">Know where your money goes.</div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm text-center">
              <div className="font-bold text-[var(--agro-green-700)]">Plan</div>
              <div className="mt-2 text-sm text-[var(--agro-muted)]">Understand what your enterprise needs.</div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm text-center">
              <div className="font-bold text-[var(--agro-green-700)]">Budget</div>
              <div className="mt-2 text-sm text-[var(--agro-muted)]">Plan before you spend.</div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm text-center">
              <div className="font-bold text-[var(--agro-green-700)]">Measure</div>
              <div className="mt-2 text-sm text-[var(--agro-muted)]">Know whether the enterprise is actually making money.</div>
            </div>
          </div>
        </section>

        {/* WHY GLEANAGRO */}
        <section className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Why GleanAgro</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">Why Work With GleanAgro?</h3>
            <p className="mt-4 text-sm text-[var(--agro-muted)]">Practical, evidence-informed, connected and sustainable—our finance support focuses on real farm outcomes.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border bg-white p-5 shadow-sm text-center">
              <div className="mb-2 font-bold text-[var(--agro-green-700)]">Practical</div>
              <div className="text-sm text-[var(--agro-muted)]">We focus on financing that responds to real agricultural needs.</div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm text-center">
              <div className="mb-2 font-bold text-[var(--agro-green-700)]">Evidence-Informed</div>
              <div className="text-sm text-[var(--agro-muted)]">We encourage decisions based on farm records, production data and realistic projections.</div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm text-center">
              <div className="mb-2 font-bold text-[var(--agro-green-700)]">Connected</div>
              <div className="text-sm text-[var(--agro-muted)]">We connect farmers with appropriate financial and technical partners.</div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm text-center">
              <div className="mb-2 font-bold text-[var(--agro-green-700)]">Sustainable</div>
              <div className="text-sm text-[var(--agro-muted)]">We promote responsible financial decisions that support long-term enterprise viability.</div>
            </div>
          </div>
        </section>

        {/* FINANCE + ECOSYSTEM */}
        <section className="mt-12 rounded-[1.5rem] border bg-white p-6 shadow-sm">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Finance + the GleanAgro ecosystem</p>
            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--agro-charcoal)] sm:text-4xl">Capital Works Best When the Rest of the Farm Works</h3>
            <p className="mt-4 text-sm text-[var(--agro-muted)]">Finance alone does not create a successful farm. Farmers also need appropriate inputs, knowledge, technology and reliable markets.</p>
          </div>

          <div className="mt-8 mx-auto max-w-4xl text-center text-sm text-[var(--agro-muted)]">
            <div className="font-semibold">FINANCE ↓</div>
            <div className="mt-2 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border p-3 bg-[rgba(29,90,66,0.03)]">INPUTS</div>
              <div className="rounded-xl border p-3 bg-[rgba(29,90,66,0.03)]">KNOWLEDGE</div>
              <div className="rounded-xl border p-3 bg-[rgba(29,90,66,0.03)]">TECHNOLOGY</div>
            </div>

            <div className="mt-4">→ PRODUCTIVE FARM → MARKETS → SUSTAINABLE GROWTH</div>
            <p className="mt-4 text-xs text-[var(--agro-muted)]">GleanAgro isn't a financial intermediary. We're building an agricultural ecosystem.</p>
          </div>
        </section>

        {/* INNOVATION FARM CONNECTION */}
        <section className="mt-12 rounded-[1rem] border bg-white p-6 shadow-sm">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Innovation Farm</p>
            <h3 className="mt-3 text-2xl font-bold text-[var(--agro-charcoal)]">Building Evidence From the Field</h3>
            <p className="mt-4 text-sm text-[var(--agro-muted)]">Our own agricultural operations give us an opportunity to understand production costs, cash flow, investment decisions and farm economics from the field. This generates practical evidence and lessons to guide finance support.</p>
            <div className="mt-4">
              <button onClick={() => onNavigatePage('about')} className="inline-flex items-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white">Explore Our Innovation Farm →</button>
            </div>
          </div>
        </section>

        {/* RESPONSIBLE FINANCING */}
        <section className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Responsible financing matters</p>
            <h3 className="mt-3 text-3xl font-bold text-[var(--agro-charcoal)]">Responsible Financing Matters</h3>
            <p className="mt-4 text-sm text-[var(--agro-muted)]">We believe financing should be approached responsibly. We do not encourage farmers to borrow beyond what their enterprise can reasonably support, and we aim to help farmers understand the purpose, cost, risks and obligations associated with any financing option they consider.</p>
            <p className="mt-3 text-xs text-[var(--agro-muted)]">Financing availability, eligibility, terms and approval are determined by the relevant financing provider. GleanAgro does not guarantee financing approval.</p>
          </div>
        </section>

        {/* RELATED SOLUTIONS */}
        <section className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Related solutions</p>
            <h3 className="mt-3 text-3xl font-bold text-[var(--agro-charcoal)]">Finance Is Part of a Bigger Agricultural System</h3>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border bg-white p-5 shadow-sm text-center">Farm Inputs</div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm text-center">Training & Technical Support</div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm text-center">Agricultural Technology</div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm text-center">Market Access</div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-12 rounded-[1rem] border bg-white p-6 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-[var(--agro-charcoal)]">Ready to Strengthen Your Farm's Financial Future?</h3>
          <p className="mt-3 text-sm text-[var(--agro-muted)]">Tell us about your agricultural enterprise and what you're trying to achieve. We'll help you understand your needs and explore the next step.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={() => onOpenInquiryModal('Smallholder Farmer')} className="inline-flex items-center gap-2 rounded-xl bg-[var(--agro-green-700)] px-5 py-3.5 text-sm font-bold text-white">Explore Financing Support →</button>
            <button onClick={() => onOpenInquiryModal('General')} className="inline-flex items-center gap-2 rounded-xl border border-[rgba(29,90,66,0.12)] px-5 py-3.5 text-sm font-bold">Talk to GleanAgro</button>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AgriculturalFinancePage;
