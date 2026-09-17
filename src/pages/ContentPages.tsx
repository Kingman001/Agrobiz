import React from 'react';
import {
  ArrowRight,
  Check,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Sprout,
  Target,
  Users,
  Wheat,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { InquiryCallback } from '../types';
import fieldImage from '../assets/images/smallholder_farmer_hub_1784882677913.jpg';
import ishakuImage from '../assets/team/ishaku-elijah-audu.jpg';
import murtalaImage from '../assets/team/murtala-muazu.jpg';
import hannatuImage from '../assets/team/hannatu-yusuf.jpg';
import johnImage from '../assets/team/john-shijah-bala.jpg';
import seyiImage from '../assets/team/seyi-edwards.jpg';
import amakaImage from '../assets/team/amaka-obehi.jpg';
import appoloImage from '../assets/team/appolo-goma.jpg';
import dipoImage from '../assets/team/dipo-fasawe.jpg';
import toyosiImage from '../assets/team/toyosi-orunmuyi.jpg';

interface PageProps {
  onNavigatePage: (pageId: string) => void;
  onOpenInquiryModal: InquiryCallback;
}

const pageShell = 'min-h-screen bg-stone-50 pb-20';
const contentShell = 'mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8';

const CTA: React.FC<{ onNavigatePage: (id: string) => void; onOpenInquiryModal: InquiryCallback; label?: string }> = ({
  onNavigatePage,
  onOpenInquiryModal,
  label = 'Work With GleanAgro',
}) => (
  <div className="flex flex-wrap gap-3">
    <button onClick={() => onOpenInquiryModal('General')} className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
      {label} <ArrowRight className="h-4 w-4" />
    </button>
    <button onClick={() => onNavigatePage('solutions')} className="rounded-xl border border-emerald-800 px-5 py-3 text-sm font-bold text-emerald-800 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
      Explore Solutions
    </button>
  </div>
);

const SectionHeading: React.FC<{ eyebrow: string; title: string; copy?: string }> = ({ eyebrow, title, copy }) => (
  <div className="max-w-3xl">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-stone-900 sm:text-4xl">{title}</h2>
    {copy && <p className="mt-4 text-base leading-relaxed text-stone-600">{copy}</p>}
  </div>
);

const steps = [
  ['Understand', 'Start with the farmer, business, location, resources, and real challenge.'],
  ['Assess', 'Consider options, risks, costs, opportunities, and practical constraints.'],
  ['Test', 'Explore appropriate solutions through trials, demonstrations, or practical application.'],
  ['Learn', 'Pay attention to evidence, feedback, what works, and what needs to change.'],
  ['Adapt', 'Improve the solution so it fits the people, context, and resources involved.'],
  ['Demonstrate', 'Share practical lessons and evidence that can support better decisions.'],
  ['Scale', 'Pursue growth responsibly, based on learning, capacity, demand, and sustainability.'],
];

export const OurStoryPage: React.FC<PageProps> = ({ onNavigatePage, onOpenInquiryModal }) => (
  <div className={pageShell}>
    <PageHeader title="Our Story" subtitle="A practical agricultural solutions company built around the realities of farmers and enterprises." categoryTag="About GleanAgro" breadcrumbs={[{ label: 'About', pageId: 'about' }, { label: 'Our Story' }]} onNavigatePage={onNavigatePage} />
    <div className={`${contentShell} space-y-16`}>
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6"><SectionHeading eyebrow="Why GleanAgro exists" title="Connecting agricultural potential with practical opportunity." copy="Agriculture supports livelihoods, communities, businesses, and the future of food systems. GleanAgro exists to help connect the needs that sit around production: knowledge, inputs, technology, finance, storage, markets, and enterprise support." /><CTA onNavigatePage={onNavigatePage} onOpenInquiryModal={onOpenInquiryModal} /></div>
        <img src={fieldImage} alt="Farmer inspecting crops in a GleanAgro field" className="h-[380px] w-full rounded-3xl object-cover shadow-lg" />
      </section>
      <section className="grid gap-5 md:grid-cols-3">
        {[
          ['The challenge', 'Farmers and agricultural enterprises often face several connected constraints at once, not one isolated problem.', Sprout],
          ['The opportunity', 'Better coordination between knowledge, resources, production, and markets can support stronger decisions.', Target],
          ['What we learn', 'Solutions need to be understandable, suitable for local context, and useful over time.', Lightbulb],
        ].map(([title, copy, Icon]) => { const I = Icon as React.ElementType; return <article key={title as string} className="agro-card p-6"><I className="mb-5 h-7 w-7 text-emerald-700" /><h3 className="text-xl font-bold">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{copy as string}</p></article>; })}
      </section>
      <section className="rounded-3xl bg-emerald-950 p-8 text-white sm:p-12"><SectionHeading eyebrow="Where we are going" title="Building a stronger agricultural ecosystem, one useful connection at a time." copy="Our direction is to keep developing practical services and partnerships that help farmers, agripreneurs, women, youth, and agricultural enterprises prepare for sustainable growth." /><div className="mt-8"><CTA onNavigatePage={onNavigatePage} onOpenInquiryModal={onOpenInquiryModal} label="Start a Conversation" /></div></section>
    </div>
  </div>
);

export const OurApproachPage: React.FC<PageProps> = ({ onNavigatePage, onOpenInquiryModal }) => (
  <div className={pageShell}>
    <PageHeader title="Our Approach" subtitle="Practical Solutions. Stronger Agricultural Systems." categoryTag="How We Work" breadcrumbs={[{ label: 'About', pageId: 'about' }, { label: 'Our Approach' }]} onNavigatePage={onNavigatePage} />
    <div className={`${contentShell} space-y-14`}>
      <SectionHeading eyebrow="A connected process" title="Understand → Assess → Test → Learn → Adapt → Demonstrate → Scale" copy="Effective agricultural solutions begin with understanding the real situation of the farmer or enterprise. Our approach keeps learning and local context at the centre of every decision." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(([title, copy], index) => <article key={title} className="agro-card relative p-6"><span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">{index + 1}</span><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{copy}</p></article>)}
      </div>
      <section className="grid gap-4 md:grid-cols-2">
        {['Farmer-centered solutions', 'Local context and simplicity', 'Appropriate technology', 'Evidence-informed decisions', 'Partnerships and shared learning', 'Continuous improvement'].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4 font-semibold text-stone-800"><Check className="h-5 w-5 text-emerald-700" />{item}</div>)}
      </section>
      <CTA onNavigatePage={onNavigatePage} onOpenInquiryModal={onOpenInquiryModal} />
    </div>
  </div>
);

const values = [
  ['Partners First', 'We place the needs and interests of partners at the centre of our work.', 'We listen before recommending a service and define success together.'],
  ['Integrity in Service', 'We aim to communicate clearly, act honestly, and deliver responsibly.', 'We explain what is available, what is not, and what depends on eligibility or context.'],
  ['Shared Prosperity', 'Agricultural growth should create value for farmers, communities, partners, and the wider ecosystem.', 'We look for models that strengthen relationships rather than shift risk unfairly.'],
  ['Continuous Improvement', 'We learn from our work and improve our solutions over time.', 'Feedback, field observations, and practical results inform the next iteration.'],
  ['Eliminate Complexity', 'We simplify agricultural processes and solutions so people can use them effectively.', 'We turn complex choices into clear, practical next steps.'],
];

export const OurValuesPage: React.FC<PageProps> = ({ onNavigatePage, onOpenInquiryModal }) => (
  <div className={pageShell}>
    <PageHeader title="Our Values" subtitle="The principles that guide how GleanAgro serves people, builds partnerships, and improves its work." categoryTag="About GleanAgro" breadcrumbs={[{ label: 'About', pageId: 'about' }, { label: 'Our Values' }]} onNavigatePage={onNavigatePage} />
    <div className={`${contentShell} space-y-10`}>
      <SectionHeading eyebrow="Guiding principles" title="Values are useful when they shape everyday decisions." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{values.map(([title, copy, example]) => <article key={title} className="agro-card p-6"><HeartHandshake className="mb-5 h-7 w-7 text-emerald-700" /><h2 className="text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-relaxed text-stone-600">{copy}</p><p className="mt-5 border-t border-stone-200 pt-4 text-sm leading-relaxed text-emerald-900"><strong>In practice:</strong> {example}</p></article>)}</div>
      <CTA onNavigatePage={onNavigatePage} onOpenInquiryModal={onOpenInquiryModal} />
    </div>
  </div>
);

export const OurTeamPage: React.FC<PageProps> = ({ onNavigatePage, onOpenInquiryModal }) => (
  <div className={pageShell}>
    <PageHeader title="Our Team" subtitle="Meet the people and partners contributing to practical agricultural solutions." categoryTag="About GleanAgro" breadcrumbs={[{ label: 'About', pageId: 'about' }, { label: 'Our Team' }]} onNavigatePage={onNavigatePage} />
    <div className={`${contentShell} space-y-10`}>
      <SectionHeading eyebrow="Leadership" title="People behind the work" copy="The GleanAgro management team brings together leadership, commercial, people, and field operations experience." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [ishakuImage, 'Ishaku Elijah Audu', 'CEO & Founder'],
          [murtalaImage, "Murtala Mu'azu", 'Commercial Manager'],
          [hannatuImage, 'Hannatu Yusuf', 'Director of People and Culture'],
          [johnImage, 'John Shijah Bala', 'Field Operations Lead'],
        ].map(([image, name, role]) => <article key={name} className="agro-card overflow-hidden"><img src={image} alt={`${name}, ${role}`} className="h-64 w-full object-cover object-top" /><div className="p-5"><h2 className="text-lg font-bold">{name}</h2><p className="mt-1 text-sm font-semibold text-emerald-700">{role}</p></div></article>)}
      </div>
      <section className="rounded-3xl border border-stone-200 bg-white p-8 sm:p-12"><Users className="mb-5 h-10 w-10 text-emerald-700" /><h2 className="text-3xl font-bold">Work with the team</h2><p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">For current enquiries, partnerships, and agricultural support requests, contact the GleanAgro team directly.</p><div className="mt-7"><CTA onNavigatePage={onNavigatePage} onOpenInquiryModal={onOpenInquiryModal} label="Connect With GleanAgro" /></div></section>
    </div>
  </div>
);

export const AdvisorsPage: React.FC<PageProps> = ({ onNavigatePage, onOpenInquiryModal }) => (
  <div className={pageShell}>
    <PageHeader title="Advisors" subtitle="Experienced professionals who contribute perspective and guidance to GleanAgro’s work." categoryTag="About GleanAgro" breadcrumbs={[{ label: 'About', pageId: 'about' }, { label: 'Advisors' }]} onNavigatePage={onNavigatePage} />
    <div className={`${contentShell} space-y-10`}>
      <SectionHeading eyebrow="Advisory network" title="Experience that strengthens decision-making" copy="The advisors listed below are published on GleanAgro’s current website. Their experience spans planning, procurement, finance, consulting, technology, and business leadership." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          [seyiImage, 'Seyi Edwards', 'Country Director for Planning, Procurement and Logistics, Mouka.'],
          [amakaImage, 'Amaka Obehi, CPA', 'Senior Manager, Plan International Canada.'],
          [appoloImage, 'Appolo Goma', 'Founder/CEO APG Consult.'],
          [dipoImage, 'Dipo Fasawe', 'Co-Founder Satsapp.'],
          [toyosiImage, 'Toyosi Orunmuyi', 'CEO Pentagrant Ltd.'],
        ].map(([image, name, role]) => <article key={name} className="agro-card overflow-hidden"><img src={image} alt={`${name}, advisor`} className="h-64 w-full object-cover object-top" /><div className="p-5"><h2 className="text-lg font-bold">{name}</h2><p className="mt-2 text-sm leading-relaxed text-stone-600">{role}</p></div></article>)}
      </div>
      <div className="rounded-3xl bg-emerald-950 p-8 text-white sm:p-10"><h2 className="text-3xl font-bold">Bring a perspective to the table</h2><p className="mt-3 max-w-2xl text-emerald-100/80">If your expertise can support practical agricultural solutions, we welcome a conversation.</p><div className="mt-7"><CTA onNavigatePage={onNavigatePage} onOpenInquiryModal={onOpenInquiryModal} label="Discuss Collaboration" /></div></div>
    </div>
  </div>
);

export const InnovationFarmPage: React.FC<PageProps> = ({ onNavigatePage, onOpenInquiryModal }) => (
  <div className={pageShell}>
    <PageHeader title="Innovation Farm" subtitle="Learning by doing: exploring practical agricultural practices, systems, and solutions in a real operating environment." categoryTag="GleanAgro Innovation" breadcrumbs={[{ label: 'Innovation Farm' }]} onNavigatePage={onNavigatePage} />
    <div className={`${contentShell} space-y-16`}>
      <section className="grid items-center gap-10 lg:grid-cols-2"><div><SectionHeading eyebrow="What it is" title="A place to test, learn, adapt, and demonstrate." copy="The Innovation Farm provides an opportunity to explore agricultural practices, technologies, enterprise systems, and practical solutions in conditions that reflect real agricultural work." /><div className="mt-7"><CTA onNavigatePage={onNavigatePage} onOpenInquiryModal={onOpenInquiryModal} label="Ask About the Innovation Farm" /></div></div><img src={fieldImage} alt="Crops growing in an agricultural field" className="h-[380px] w-full rounded-3xl object-cover shadow-lg" /></section>
      <section><SectionHeading eyebrow="Areas of learning" title="Practical questions, not technology for its own sake." /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{['Production planning', 'Farm budgeting', 'Irrigation and water management', 'Appropriate technology', 'Aquaculture and livestock management', 'Post-harvest handling', 'Market preparation', 'Farm records and enterprise development'].map((item) => <div key={item} className="agro-card p-5"><Wheat className="mb-4 h-6 w-6 text-emerald-700" /><h3 className="font-bold">{item}</h3></div>)}</div></section>
      <section className="rounded-3xl bg-[#f2efe6] p-8 text-center sm:p-12"><h2 className="text-3xl font-bold">Test → Learn → Adapt → Demonstrate → Scale</h2><p className="mx-auto mt-4 max-w-2xl text-stone-600">Only solutions that fit the local context, available capacity, and real agricultural needs should move forward.</p></section>
    </div>
  </div>
);

const resourceCategories = ['Farming Guides', 'Technical Notes', 'Business Resources', 'Market Information', 'Training Materials', 'News and Updates', 'Videos', 'Downloads'];
export const ResourcesPage: React.FC<PageProps> = ({ onNavigatePage, onOpenInquiryModal }) => (
  <div className={pageShell}>
    <PageHeader title="Resources" subtitle="A growing library for practical farming knowledge, enterprise development, and agricultural decision-making." categoryTag="GleanAgro Resources" breadcrumbs={[{ label: 'Resources' }]} onNavigatePage={onNavigatePage} />
    <div className={`${contentShell} space-y-10`}><SectionHeading eyebrow="Built to grow" title="Useful resources will be added as they are verified and ready to share." copy="This resource library is structured for future guides, technical notes, market information, training materials, videos, and downloads. We will not publish unverified material just to fill the page." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resourceCategories.map((category) => <article key={category} className="agro-card p-6"><BookOpenIcon /><h2 className="mt-4 text-lg font-bold">{category}</h2><p className="mt-2 text-sm leading-relaxed text-stone-600">Content will appear here when a verified resource is available.</p><span className="mt-5 inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">Coming soon</span></article>)}</div><CTA onNavigatePage={onNavigatePage} onOpenInquiryModal={onOpenInquiryModal} label="Request a Resource" /></div>
  </div>
);

const BookOpenIcon = () => <Wheat className="h-7 w-7 text-emerald-700" />;

export const PartnershipsPage: React.FC<PageProps> = ({ onNavigatePage, onOpenInquiryModal }) => (
  <div className={pageShell}>
    <PageHeader title="Partnerships" subtitle="Working with people and organisations that want to contribute to stronger agricultural systems." categoryTag="Work With GleanAgro" breadcrumbs={[{ label: 'Partnerships' }]} onNavigatePage={onNavigatePage} />
    <div className={`${contentShell} space-y-14`}>
      <SectionHeading eyebrow="Why partnerships matter" title="Agricultural challenges are connected. Progress is collaborative." copy="GleanAgro welcomes conversations with organisations that can contribute knowledge, resources, technology, finance, market relationships, or implementation capacity." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{['Farmer organisations and cooperatives', 'Technical experts and training institutions', 'Financial institutions', 'Market actors and agricultural businesses', 'Development organisations', 'Technology and service providers'].map((item) => <article key={item} className="agro-card p-6"><Handshake className="mb-5 h-7 w-7 text-emerald-700" /><h2 className="text-lg font-bold">{item}</h2><p className="mt-2 text-sm text-stone-600">Explore where shared capabilities and clear objectives could create value.</p></article>)}</div>
      <section className="rounded-3xl bg-emerald-950 p-8 text-white sm:p-12"><SectionHeading eyebrow="Partnership principles" title="Clear expectations. Shared value. Responsible growth." copy="We aim to build partnerships around a defined need, transparent communication, realistic commitments, learning, and respect for the people and communities involved." /><div className="mt-8"><CTA onNavigatePage={onNavigatePage} onOpenInquiryModal={onOpenInquiryModal} label="Start a Partnership Conversation" /></div></section>
    </div>
  </div>
);
