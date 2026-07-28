import React, { useState } from 'react';
import { CompanySettings, InquiryCallback, InquiryFormState, InquiryRole } from '../types';
import { faqItems } from '../data/agribusinessData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building2,
  Tractor,
  HandCoins,
  ShieldCheck
} from 'lucide-react';

interface PartnershipsSectionProps {
  companySettings: CompanySettings;
  initialRole?: InquiryRole;
  initialProduceInterest?: string;
}

export const PartnershipsSection: React.FC<PartnershipsSectionProps> = ({
  companySettings,
  initialRole = 'Commercial Buyer',
  initialProduceInterest = ''
}) => {
  const [formData, setFormData] = useState<InquiryFormState>({
    fullName: '',
    email: '',
    phone: '',
    userRole: initialRole,
    produceInterest: initialProduceInterest || 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-950 border border-emerald-700/60 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider">
            <Send className="w-3.5 h-3.5 text-emerald-400" />
            <span>Connect & Partner With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Let's Build a Sustainable Agribusiness Network Together
          </h2>
          <p className="text-stone-300 text-base leading-relaxed">
            Whether you are a commercial buyer looking for weekly bulk produce, a smallholder farmer seeking support, or an impact investor co-funding cold storage hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-950 p-6 sm:p-8 rounded-3xl border border-stone-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-serif font-bold text-white border-b border-stone-800 pb-3">
                Direct Contact & Hub Operations
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-stone-900 text-emerald-400 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono">Flagship Farm & Operations</span>
                    <p className="font-semibold text-stone-200 mt-0.5">{companySettings.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-stone-900 text-emerald-400 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono">Partnership Email</span>
                    <a href={`mailto:${companySettings.email}`} className="block font-semibold text-emerald-400 hover:underline mt-0.5">
                      {companySettings.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-stone-900 text-emerald-400 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono">Phone & WhatsApp Line</span>
                    <p className="font-semibold text-stone-200 mt-0.5">{companySettings.phone}</p>
                    <span className="text-xs text-stone-400 block mt-0.5">WhatsApp: {companySettings.whatsapp}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-950/80 rounded-2xl border border-emerald-800/80 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-emerald-300">Fast Response Guarantee</span>
                <p className="text-xs text-stone-300">
                  Our commercial sales and farmer extension teams review all incoming off-take inquiries within 12 business hours.
                </p>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-stone-950 rounded-2xl border border-stone-800">
                <Building2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <span className="text-[11px] text-stone-300 font-medium block">Bulk Buyers</span>
              </div>
              <div className="p-3 bg-stone-950 rounded-2xl border border-stone-800">
                <Tractor className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <span className="text-[11px] text-stone-300 font-medium block">Farmers</span>
              </div>
              <div className="p-3 bg-stone-950 rounded-2xl border border-stone-800">
                <HandCoins className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <span className="text-[11px] text-stone-300 font-medium block">Investors</span>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-stone-950 p-6 sm:p-10 rounded-3xl border border-stone-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Inquiry Received!</h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to <strong className="text-emerald-400">{companySettings.name}</strong>. A representative from our team will contact you shortly via email or phone.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">Send Us an Inquiry</h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Select your partnership type to route your message to the appropriate department.
                  </p>
                </div>

                {/* Role Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(
                    [
                      { value: 'Commercial Buyer', label: 'Commercial Buyer' },
                      { value: 'Smallholder Farmer', label: 'Smallholder Farmer' },
                      { value: 'Impact Investor', label: 'Impact Investor' }
                    ] as const
                  ).map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, userRole: r.value })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.userRole === r.value
                          ? 'bg-emerald-800 text-white border-emerald-600 shadow-sm'
                          : 'bg-stone-900 text-stone-400 hover:bg-stone-800 border-stone-800'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Farm Manager"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Produce or Service Interest
                    </label>
                    <select
                      value={formData.produceInterest}
                      onChange={(e) => setFormData({ ...formData, produceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Aquaculture & Fishery">Aquaculture & Table Fish</option>
                      <option value="Poultry & Eggs">Poultry & Fresh Eggs</option>
                      <option value="Cattle & Dairy">Cattle & Fattening Herd</option>
                      <option value="Maize & Crops">Maize & Arable Crops</option>
                      <option value="Solar Cold Storage Leasing">Solar Cold Storage Leasing</option>
                      <option value="Equipment Leasing">Tractor & Equipment Leasing</option>
                      <option value="Smallholder Input Credit">Smallholder Input Credit</option>
                      <option value="Impact Investment Co-Funding">Impact Investment Co-Funding</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your expected order quantity, location, or partnership requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Partnership Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-20 pt-16 border-t border-stone-800 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-serif font-bold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-emerald-400" />
              <span>Frequently Asked Questions</span>
            </h3>
            <p className="text-xs text-stone-400">
              Clear answers for buyers, smallholder farmers, and potential impact partners.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-serif font-bold text-sm sm:text-base text-stone-100 flex items-center justify-between gap-4 cursor-pointer hover:text-emerald-300"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-900 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
