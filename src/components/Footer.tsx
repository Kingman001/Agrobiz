import React from 'react';
import { CompanySettings } from '../types';
import { GleanAgroLogo } from './GleanAgroLogo';
import { Phone, Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  companySettings: CompanySettings;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  companySettings,
  onNavigateSection
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 p-3 rounded-2xl inline-block border border-stone-800">
              <GleanAgroLogo variant="light" showTagline={true} />
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              {companySettings.tagline}. Operating commercial Fishery, Poultry, and Cattle rearing while empowering 15,000+ smallholder farmers with storage, equipment leasing, and guaranteed market off-take.
            </p>

            <div className="text-xs text-stone-500 font-mono">
              Official Portal: <a href="https://gleanagrong.com/" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">gleanagrong.com</a>
            </div>
          </div>

          {/* Core Enterprises */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm">Enterprises</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('produce')} className="hover:text-emerald-300 transition-colors cursor-pointer">
                  Aquaculture & Fishery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('produce')} className="hover:text-emerald-300 transition-colors cursor-pointer">
                  Poultry & Egg Production
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('produce')} className="hover:text-emerald-300 transition-colors cursor-pointer">
                  Cattle Rearing & Fattening
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('produce')} className="hover:text-emerald-300 transition-colors cursor-pointer">
                  Maize & Arable Staples
                </button>
              </li>
            </ul>
          </div>

          {/* Smallholder Tools */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm">Farmer Hub</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('farmer-hub')} className="hover:text-emerald-300 transition-colors cursor-pointer">
                  Yield & Productivity Tracker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('farmer-hub')} className="hover:text-emerald-300 transition-colors cursor-pointer">
                  Live Commodity Market Prices
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('farmer-hub')} className="hover:text-emerald-300 transition-colors cursor-pointer">
                  Equipment Lease Pool
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('roadmap')} className="hover:text-emerald-300 transition-colors cursor-pointer">
                  Ecosystem Roadmap
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm">Contact Info</h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div><strong>Office:</strong> {companySettings.officeAddress}</div>
                  <div><strong>Farm:</strong> {companySettings.farmLocation}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${companySettings.email}`} className="hover:text-emerald-300">
                  {companySettings.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${companySettings.phone}`} className="hover:text-emerald-300">
                  Calls: {companySettings.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${companySettings.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 text-emerald-400"
                >
                  WhatsApp: {companySettings.whatsapp}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {companySettings.name} Nigeria Limited. All rights reserved.</span>
            <span className="text-stone-600">|</span>
            <span className="text-emerald-400 font-mono">Kaduna State & Regional Agribusiness Hub</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg border border-stone-800 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
