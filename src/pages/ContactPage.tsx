import React, { useState } from 'react';
import { CompanySettings } from '../types';
import { faqItems } from '../data/agribusinessData';
import { PageHeader } from '../components/PageHeader';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ChevronDown,
  Globe,
  Clock,
  Building2,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  companySettings: CompanySettings;
  initialRole?: string;
  initialProduceInterest?: string;
  onNavigatePage: (pageId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  companySettings,
  initialRole = 'Commercial Buyer',
  initialProduceInterest = '',
  onNavigatePage
}) => {
  // Form State
  const [role, setRole] = useState<string>(initialRole);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [produceInterest, setProduceInterest] = useState<string>(initialProduceInterest);
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Contact Glean Agro & Partnerships Desk"
        subtitle="Connect directly with our commercial off-take officers, smallholder extension leads, or executive investment teams."
        categoryTag="Glean Agro Contact Hub"
        breadcrumbs={[{ label: "Contact & Partnerships" }]}
        onNavigatePage={onNavigatePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        
        {/* Contact Form & Office Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Multi-Role Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-6">
            <div className="space-y-1 border-b border-stone-200 pb-4">
              <span className="text-xs font-mono font-bold uppercase text-emerald-800">
                Direct Communication Channel
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Submit an Official Inquiry
              </h2>
              <p className="text-xs text-stone-600">
                Choose your role to help us direct your request to the right Glean Agro team member.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-800 text-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-emerald-950">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-stone-700 max-w-md mx-auto">
                  Thank you, <strong className="text-stone-900">{fullName}</strong>. A Glean Agro representative ({role}) will reach out to you within 24 hours at <span className="font-mono text-emerald-800">{email || phone}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-emerald-800 text-white font-bold rounded-xl text-xs hover:bg-emerald-900 transition-all cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Role Selector Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    I am contacting Glean Agro as a:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'Commercial Buyer',
                      'Smallholder Farmer',
                      'Impact Investor',
                      'Equipment Partner'
                    ].map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setRole(r)}
                        className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all cursor-pointer border ${
                          role === r
                            ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Olamide"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 813 440 7110"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-stone-50"
                    />
                  </div>
                </div>

                {/* Email & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. samuel@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Company / Farm Cooperative
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kaduna Grains Coop / Zaria Food Mills"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-stone-50"
                    />
                  </div>
                </div>

                {/* Produce Interest */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Specific Enterprise / Produce Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Fresh Table Catfish, Grade-A Eggs, White & Yellow Maize..."
                    value={produceInterest}
                    onChange={(e) => setProduceInterest(e.target.value)}
                    className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-stone-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Message / Custom Request
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your off-take volume, farm location, or partnership proposal..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-stone-50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-emerald-300" />
                  <span>Send Inquiry to Glean Agro</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Contact Details & Office Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-6">
              <div className="space-y-1 border-b border-stone-800 pb-4">
                <span className="text-xs font-mono font-bold uppercase text-emerald-400">
                  Contact Information
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-100">
                  Glean Agro Headquarters
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block font-mono">Official Website</span>
                    <a
                      href="https://gleanagrong.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-300 hover:underline"
                    >
                      https://gleanagrong.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block font-mono">Official Email</span>
                    <a href={`mailto:${companySettings.email}`} className="font-bold text-stone-100 hover:text-emerald-300">
                      {companySettings.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block font-mono">Phone Calls</span>
                    <a href="tel:+2348134407110" className="font-bold text-stone-100 hover:text-emerald-300 block">
                      +234 813 440 7110
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block font-mono">WhatsApp Support Desk</span>
                    <a
                      href="https://wa.me/2347035961713"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-400 hover:underline"
                    >
                      +234 703 596 1713
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-stone-400 block font-mono">Office Address</span>
                    <p className="font-medium text-stone-200">
                      No. 5B Old Sokoto Road MTD Hanwa Zaria, Kaduna State, Nigeria
                    </p>
                    <span className="text-xs text-stone-400 block font-mono pt-1">Farm Location</span>
                    <p className="font-medium text-stone-200">
                      Gazara, Makarfi, Kaduna State, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Working Hours</span>
                </div>
                <p className="text-xs text-stone-300">
                  Monday – Saturday: 8:00 AM – 6:00 PM (WAT)
                </p>
              </div>
            </div>

            {/* Farm Visit & Facility Tour Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-800">
                <Building2 className="w-4 h-4" />
                <span>Farm Inspections</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900">
                Schedule a Facility Inspection Tour
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Commercial buyers, hotel procurement managers, and impact investors are invited to tour our flagship farm in Gazara, Makarfi, Kaduna State by appointment.
              </p>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-emerald-800">
              Frequently Asked Questions
            </span>
            <h3 className="text-3xl font-serif font-bold text-stone-900">
              Everything You Need to Know About Glean Agro
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 pt-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-serif font-bold text-stone-900 text-base sm:text-lg bg-stone-50/80 hover:bg-stone-100/80 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white text-stone-600 text-sm leading-relaxed border-t border-stone-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
