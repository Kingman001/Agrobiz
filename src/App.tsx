import React, { useState, useEffect } from 'react';
import { CompanySettings, ProducePillar } from './types';
import { defaultCompanySettings } from './data/agribusinessData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { SmallholderRoadmap } from './components/SmallholderRoadmap';
import { FarmerHubTools } from './components/FarmerHubTools';
import { AboutSection } from './components/AboutSection';
import { PartnershipsSection } from './components/PartnershipsSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomizerModal } from './components/CustomizerModal';

export default function App() {
  const [companySettings, setCompanySettings] = useState<CompanySettings>(() => {
    try {
      const saved = localStorage.getItem('agribusiness_settings');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read saved settings', e);
    }
    return defaultCompanySettings;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedPillarModal, setSelectedPillarModal] = useState<ProducePillar | null>(null);
  const [customizerModalOpen, setCustomizerModalOpen] = useState<boolean>(false);
  const [inquiryModalRole, setInquiryModalRole] = useState<string>('Commercial Buyer');
  const [inquiryProduceName, setInquiryProduceName] = useState<string>('');

  const handleSaveSettings = (newSettings: CompanySettings) => {
    setCompanySettings(newSettings);
    try {
      localStorage.setItem('agribusiness_settings', JSON.stringify(newSettings));
    } catch (e) {
      console.warn('Could not save settings', e);
    }
  };

  const handleOpenInquiry = (role?: string, produceName?: string) => {
    if (role) setInquiryModalRole(role);
    if (produceName) setInquiryProduceName(produceName);
    
    // Smooth scroll to contact/inquiry section
    setActiveSection('contact');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans antialiased selection:bg-emerald-800 selection:text-emerald-100">
      
      {/* Navigation Header */}
      <Navbar
        companySettings={companySettings}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenCustomizer={() => setCustomizerModalOpen(true)}
        onOpenInquiryModal={handleOpenInquiry}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner */}
        <Hero
          companySettings={companySettings}
          onNavigateSection={handleNavigateSection}
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* Enterprise Produce Pillars */}
        <PillarsSection
          onSelectPillar={(pillar) => setSelectedPillarModal(pillar)}
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* Smallholder Ecosystem Roadmap */}
        <SmallholderRoadmap
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* Farmer Hub & Interactive Tools */}
        <FarmerHubTools
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* About Startup Vision */}
        <AboutSection
          companySettings={companySettings}
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* Contact & Partnerships */}
        <PartnershipsSection
          companySettings={companySettings}
          initialRole={inquiryModalRole}
          initialProduceInterest={inquiryProduceName}
        />
      </main>

      {/* Footer */}
      <Footer
        companySettings={companySettings}
        onNavigateSection={handleNavigateSection}
        onOpenCustomizer={() => setCustomizerModalOpen(true)}
      />

      {/* Modals */}
      <ProductDetailModal
        pillar={selectedPillarModal}
        onClose={() => setSelectedPillarModal(null)}
        onOpenInquiryModal={handleOpenInquiry}
      />

      {customizerModalOpen && (
        <CustomizerModal
          currentSettings={companySettings}
          onSave={handleSaveSettings}
          onClose={() => setCustomizerModalOpen(false)}
        />
      )}

    </div>
  );
}
