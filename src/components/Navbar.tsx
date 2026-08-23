import React, { useState } from 'react';
import { CompanySettings, InquiryCallback } from '../types';
import { GleanAgroLogo } from './GleanAgroLogo';
import {
  Menu,
  X,
  Phone,
  Tractor,
  Handshake,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  companySettings: CompanySettings;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenInquiryModal: InquiryCallback;
}

const solutionsList = [
  'Farm Inputs',
  'Agricultural Finance',
  'Training & Technical Support',
  'Irrigation & Greenhouse',
  'Storage & Post-Harvest',
  'Market Access',
  'Enterprise Development',
  'Investment & Partnerships'
];

const aboutList = [
  'Who We Are',
  'Our Team',
  'Advisors',
  'Partners',
  'Careers'
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'for-farmers', label: 'For Farmers' },
  { id: 'innovation', label: 'Innovation' },
  { id: 'impact', label: 'Impact' },
  { id: 'about', label: 'About' },
  { id: 'insights', label: 'Insights' }
];

export const Navbar: React.FC<NavbarProps> = ({
  companySettings,
  activeSection,
  setActiveSection,
  onOpenInquiryModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.location.hash = id;
    } catch (e) {
      // ignore
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all duration-200">
      {/* Top Banner Notice */}
      <div className="bg-emerald-950 text-emerald-100 px-4 py-2 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider">
              Glean Agro NG
            </span>
            <span className="truncate">
              Glean Agro Nigeria Limited • Office: Zaria, Kaduna State • Farm: Gazara, Makarfi
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${companySettings.phone}`}
              className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{companySettings.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo Component */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex items-center gap-2 shrink-0"
            aria-label="Go to home"
          >
            <GleanAgroLogo width="220px" className="max-w-[220px]" />
          </button>

          {/* Desktop Navigation Links with dropdowns for Solutions & About */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              if (item.id === 'solutions') {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-700 hover:text-emerald-800 hover:bg-stone-50 transition-all"
                    >
                      {item.label}
                    </button>

                    <div className="absolute left-0 mt-2 min-w-[220px] bg-white border border-stone-200 rounded-lg shadow-lg py-2 hidden group-hover:block z-50">
                      {solutionsList.map((s) => {
                        const destination = s === 'Farm Inputs' ? 'farm-inputs' : 'solutions';
                        return (
                          <button
                            key={s}
                            onClick={() => handleNavClick(destination)}
                            className="w-full text-left px-3 py-2 text-sm text-stone-700 hover:bg-stone-50"
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (item.id === 'about') {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-700 hover:text-emerald-800 hover:bg-stone-50 transition-all"
                    >
                      {item.label}
                    </button>

                    <div className="absolute left-0 mt-2 min-w-[200px] bg-white border border-stone-200 rounded-lg shadow-lg py-2 hidden group-hover:block z-50">
                      {aboutList.map((a) => (
                        <button
                          key={a}
                          onClick={() => handleNavClick('about')}
                          className="w-full text-left px-3 py-2 text-sm text-stone-700 hover:bg-stone-50"
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60 shadow-2xs'
                      : 'text-stone-700 hover:text-emerald-800 hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiryModal('Smallholder Farmer')}
              className="px-4 py-2 rounded-lg border border-emerald-700 text-emerald-800 hover:bg-emerald-50 text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Tractor className="w-4 h-4 text-emerald-700" />
              <span>Farmer Hub</span>
            </button>
            <button
              onClick={() => onOpenInquiryModal('Commercial Buyer')}
              className="px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Handshake className="w-4 h-4 text-emerald-300" />
              <span>Bulk Off-Take</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (mobile-specific list per spec) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 text-white border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          <div className="pb-2 border-b border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-400 font-mono uppercase tracking-wider">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-stone-400 text-xs">Close</button>
          </div>

          <div className="space-y-1">
            <button onClick={() => handleNavClick('home')} className={`w-full text-left px-3 py-3 rounded-lg ${activeSection === 'home' ? 'bg-emerald-900 text-emerald-200 font-bold' : 'text-stone-200 hover:bg-stone-800'}`}>
              Home
            </button>

            {/* Solutions collapsible */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-lg ${activeSection === 'solutions' ? 'bg-emerald-900 text-emerald-200 font-bold' : 'text-stone-200 hover:bg-stone-800'}`}>
                <span>Solutions</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-90' : ''}`} />
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 pt-2 pb-2 space-y-1">
                  {solutionsList.map((s) => {
                    const destination = s === 'Farm Inputs' ? 'farm-inputs' : 'solutions';
                    return (
                      <button key={s} onClick={() => { handleNavClick(destination); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm text-stone-200 hover:bg-stone-800">
                        {s}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('for-farmers')} className={`w-full text-left px-3 py-3 rounded-lg ${activeSection === 'for-farmers' ? 'bg-emerald-900 text-emerald-200 font-bold' : 'text-stone-200 hover:bg-stone-800'}`}>
              For Farmers
            </button>

            <button onClick={() => handleNavClick('innovation')} className={`w-full text-left px-3 py-3 rounded-lg ${activeSection === 'innovation' ? 'bg-emerald-900 text-emerald-200 font-bold' : 'text-stone-200 hover:bg-stone-800'}`}>
              Innovation
            </button>

            <button onClick={() => handleNavClick('impact')} className={`w-full text-left px-3 py-3 rounded-lg ${activeSection === 'impact' ? 'bg-emerald-900 text-emerald-200 font-bold' : 'text-stone-200 hover:bg-stone-800'}`}>
              Impact
            </button>

            <button onClick={() => handleNavClick('women-youth')} className={`w-full text-left px-3 py-3 rounded-lg ${activeSection === 'women-youth' ? 'bg-emerald-900 text-emerald-200 font-bold' : 'text-stone-200 hover:bg-stone-800'}`}>
              Women & Youth
            </button>

            {/* About with nested items */}
            <div>
              <button
                onClick={() => handleNavClick('about')}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-lg ${activeSection === 'about' ? 'bg-emerald-900 text-emerald-200 font-bold' : 'text-stone-200 hover:bg-stone-800'}`}>
                <span>About</span>
                <ChevronRight className="w-4 h-4 text-stone-500" />
              </button>
              <div className="pl-4 pt-2 pb-2 space-y-1">
                {aboutList.map((a) => (
                  <button key={a} onClick={() => { handleNavClick('about'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm text-stone-200 hover:bg-stone-800">
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => handleNavClick('insights')} className={`w-full text-left px-3 py-3 rounded-lg ${activeSection === 'insights' ? 'bg-emerald-900 text-emerald-200 font-bold' : 'text-stone-200 hover:bg-stone-800'}`}>
              Insights
            </button>

            <button onClick={() => handleNavClick('contact')} className="w-full text-left px-3 py-3 rounded-lg text-stone-200 hover:bg-stone-800">
              Contact
            </button>

            <button onClick={() => { setMobileMenuOpen(false); onOpenInquiryModal('General'); }} className="w-full text-left px-3 py-3 rounded-lg bg-emerald-700 text-white font-bold">
              Partner With Us
            </button>
          </div>

          <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiryModal('Smallholder Farmer');
              }}
              className="w-full py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-emerald-300 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <Tractor className="w-4 h-4" />
              Farmer Hub
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiryModal('Commercial Buyer');
              }}
              className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <Handshake className="w-4 h-4" />
              Bulk Off-Take
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
