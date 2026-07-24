import React, { useState } from 'react';
import { CompanySettings } from '../types';
import {
  Sprout,
  Menu,
  X,
  Phone,
  Settings2,
  Tractor,
  Handshake,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  companySettings: CompanySettings;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenCustomizer: () => void;
  onOpenInquiryModal: (role?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  companySettings,
  activeSection,
  setActiveSection,
  onOpenCustomizer,
  onOpenInquiryModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'produce', label: 'Our Produce & Farming' },
    { id: 'roadmap', label: 'Smallholder Roadmap' },
    { id: 'farmer-hub', label: 'Farmer Hub & Tools' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Partnerships' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all duration-200">
      {/* Top Banner Notice */}
      <div className="bg-emerald-950 text-emerald-100 px-4 py-2 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider">
              Startup Vision
            </span>
            <span className="truncate">
              Building a resilient food supply & empowering 15,000+ smallholder farmers
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors cursor-pointer"
              title="Customize Company Name & Settings"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span className="underline decoration-dashed underline-offset-2">
                Customize Company Details
              </span>
            </button>
            <a
              href={`tel:${companySettings.phone}`}
              className="hidden md:inline-flex items-center gap-1 hover:text-emerald-300 transition-colors"
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
          {/* Brand Logo & Name */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-stone-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sprout className="w-7 h-7 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">
                {companySettings.name}
              </span>
              <span className="text-xs font-medium text-stone-500 tracking-wide uppercase hidden sm:inline">
                Agribusiness & Farmers Ecosystem
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
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

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 text-white border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          <div className="pb-2 border-b border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-400 font-mono uppercase tracking-wider">Navigation Menu</span>
            <button
              onClick={onOpenCustomizer}
              className="text-xs text-emerald-400 flex items-center gap-1"
            >
              <Settings2 className="w-3.5 h-3.5" />
              Customize Name
            </button>
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-emerald-900 text-emerald-200 font-bold'
                    : 'text-stone-200 hover:bg-stone-800'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-stone-500" />
              </button>
            ))}
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
