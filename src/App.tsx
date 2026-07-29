import React, { useState, useEffect, lazy, Suspense } from 'react';
import { CompanySettings, InquiryRole, ProducePillar } from './types';
import { defaultCompanySettings } from './data/agribusinessData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';

// Pages
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProducePage = lazy(() => import('./pages/ProducePage').then(m => ({ default: m.ProducePage })));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage').then(m => ({ default: m.RoadmapPage })));
const FarmerHubPage = lazy(() => import('./pages/FarmerHubPage').then(m => ({ default: m.FarmerHubPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

export default function App() {
  const [companySettings] = useState<CompanySettings>(defaultCompanySettings);

  // Page Routing State
  const [activeSection, setActiveSection] = useState<string>(() => {
    try {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'produce', 'roadmap', 'farmer-hub', 'about', 'contact'].includes(hash)) {
        return hash;
      }
    } catch (e) {
      // ignore
    }
    return 'home';
  });

  const [selectedPillarModal, setSelectedPillarModal] = useState<ProducePillar | null>(null);
  const [inquiryModalRole, setInquiryModalRole] = useState<InquiryRole>('Commercial Buyer');
  const [inquiryProduceName, setInquiryProduceName] = useState<string>('');

  // Handle hash changes or popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'produce', 'roadmap', 'farmer-hub', 'about', 'contact'].includes(hash)) {
        setActiveSection(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenInquiry = (role?: InquiryRole, produceName?: string) => {
    if (role) setInquiryModalRole(role);
    if (produceName) setInquiryProduceName(produceName);
    
    // Navigate to dedicated Contact & Partnerships page
    setActiveSection('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.location.hash = 'contact';
    } catch (e) {
      // ignore
    }
  };

  const handleNavigatePage = (pageId: string) => {
    setActiveSection(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.location.hash = pageId;
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans antialiased selection:bg-emerald-800 selection:text-emerald-100 flex flex-col justify-between">
      
      <div>
        {/* Navigation Header */}
        <Navbar
          companySettings={companySettings}
          activeSection={activeSection}
          setActiveSection={handleNavigatePage}
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* Page Content Router (lazy-loaded pages) */}
        <main className="transition-all duration-300">
          <Suspense fallback={<div className="max-w-7xl mx-auto p-8">Loading...</div>}>
            {activeSection === 'home' && (
              <HomePage
                companySettings={companySettings}
                onSelectPillar={(pillar) => setSelectedPillarModal(pillar)}
                onOpenInquiryModal={handleOpenInquiry}
                onNavigatePage={handleNavigatePage}
              />
            )}

            {activeSection === 'produce' && (
              <ProducePage
                onSelectPillar={(pillar) => setSelectedPillarModal(pillar)}
                onOpenInquiryModal={handleOpenInquiry}
                onNavigatePage={handleNavigatePage}
              />
            )}

            {activeSection === 'roadmap' && (
              <RoadmapPage
                onOpenInquiryModal={handleOpenInquiry}
                onNavigatePage={handleNavigatePage}
              />
            )}

            {activeSection === 'farmer-hub' && (
              <FarmerHubPage
                onOpenInquiryModal={handleOpenInquiry}
                onNavigatePage={handleNavigatePage}
              />
            )}

            {activeSection === 'about' && (
              <AboutPage
                companySettings={companySettings}
                onOpenInquiryModal={handleOpenInquiry}
                onNavigatePage={handleNavigatePage}
              />
            )}

            {activeSection === 'contact' && (
              <ContactPage
                companySettings={companySettings}
                initialRole={inquiryModalRole}
                initialProduceInterest={inquiryProduceName}
                onNavigatePage={handleNavigatePage}
              />
            )}
          </Suspense>
        </main>
      </div>

      {/* Footer */}
      <Footer
        companySettings={companySettings}
        onNavigateSection={handleNavigatePage}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        pillar={selectedPillarModal}
        onClose={() => setSelectedPillarModal(null)}
        onOpenInquiryModal={handleOpenInquiry}
      />

    </div>
  );
}
