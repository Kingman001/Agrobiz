import React, { useState, useEffect } from 'react';
import { CompanySettings, InquiryRole, ProducePillar } from './types';
import { defaultCompanySettings } from './data/agribusinessData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { FarmInputsPage } from './pages/FarmInputsPage';
import { TrainingSupportPage } from './pages/TrainingSupportPage';
import { IrrigationPage } from './pages/IrrigationPage';
import { ProducePage } from './pages/ProducePage';
import { RoadmapPage } from './pages/RoadmapPage';
import { FarmerHubPage } from './pages/FarmerHubPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AgriculturalFinancePage } from './pages/AgriculturalFinancePage';
import { MarketAccessPage } from './pages/MarketAccessPage';
import { StoragePage } from './pages/StoragePage';
import { EnterpriseDevelopmentPage } from './pages/EnterpriseDevelopmentPage';
import {
  InnovationFarmPage,
  AdvisorsPage,
  OurApproachPage,
  OurStoryPage,
  OurTeamPage,
  OurValuesPage,
  PartnershipsPage,
  ResourcesPage
} from './pages/ContentPages';

const routes = [
  'home', 'solutions', 'agric-finance', 'farm-inputs', 'tech-support', 'irrigation',
  'produce', 'market-access', 'storage', 'enterprise', 'roadmap', 'farmer-hub',
  'about', 'our-story', 'our-approach', 'our-values', 'our-team', 'innovation-farm',
  'resources', 'partnerships', 'advisors', 'contact'
];

const pageMetadata: Record<string, { title: string; description: string }> = {
  home: { title: 'GleanAgro | Practical Agricultural Solutions', description: 'GleanAgro supports farmers, agripreneurs, and agricultural enterprises with practical solutions across production, technology, finance, storage, markets, and enterprise development.' },
  about: { title: 'About GleanAgro | Agricultural Solutions in Nigeria', description: 'Learn who GleanAgro is, who we serve, and how we support stronger agricultural systems.' },
  'our-story': { title: 'Our Story | GleanAgro', description: 'Understand why GleanAgro exists and the opportunity it sees across agriculture.' },
  'our-approach': { title: 'Our Approach | GleanAgro', description: 'Explore GleanAgro’s practical, farmer-centered approach to agricultural solutions.' },
  'our-values': { title: 'Our Values | GleanAgro', description: 'The principles guiding GleanAgro’s service, partnerships, and continuous improvement.' },
  'our-team': { title: 'Our Team | GleanAgro', description: 'Meet the people and partners contributing to GleanAgro’s agricultural work.' },
  advisors: { title: 'Advisors | GleanAgro', description: 'Meet the published advisors contributing experience and perspective to GleanAgro.' },
  'innovation-farm': { title: 'Innovation Farm | GleanAgro', description: 'Learning by doing through practical agricultural testing, demonstration, and improvement.' },
  'farmer-hub': { title: 'Farmer Hub | GleanAgro', description: 'A practical entry point for farmer knowledge, support, tools, and agricultural opportunities.' },
  resources: { title: 'Resources | GleanAgro', description: 'Practical farming, business, technical, and market resources from GleanAgro.' },
  partnerships: { title: 'Partnerships | GleanAgro', description: 'Explore collaboration opportunities with GleanAgro across the agricultural ecosystem.' },
  contact: { title: 'Contact GleanAgro | Work With Us', description: 'Contact GleanAgro about farmer support, training, technology, finance, markets, partnerships, or general enquiries.' }
};

export default function App() {
  const [companySettings] = useState<CompanySettings>(defaultCompanySettings);

  // Page Routing State
  const [activeSection, setActiveSection] = useState<string>(() => {
    try {
      const hash = window.location.hash.replace('#', '');
      const route = hash || 'home';
      if (routes.includes(route)) {
        return route;
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
      const route = hash || 'home';
      if (routes.includes(route)) {
        setActiveSection(route);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const metadata = pageMetadata[activeSection] || pageMetadata.home;
    document.title = metadata.title;
    const description = document.querySelector('meta[name="description"]') || document.createElement('meta');
    description.setAttribute('name', 'description');
    description.setAttribute('content', metadata.description);
    if (!description.parentElement) document.head.appendChild(description);
  }, [activeSection]);

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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-emerald-900 focus:shadow-lg">
        Skip to main content
      </a>
      
      <div>
        {/* Navigation Header */}
        <Navbar
          companySettings={companySettings}
          activeSection={activeSection}
          setActiveSection={handleNavigatePage}
          onOpenInquiryModal={handleOpenInquiry}
        />

        {/* Page Content Router */}
        <main id="main-content" tabIndex={-1} className="transition-all duration-300 focus:outline-none">
          {activeSection === 'home' && (
            <HomePage
              companySettings={companySettings}
              onSelectPillar={(pillar) => setSelectedPillarModal(pillar)}
              onOpenInquiryModal={handleOpenInquiry}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {activeSection === 'solutions' && (
            <SolutionsPage
              onOpenInquiryModal={handleOpenInquiry}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {activeSection === 'agric-finance' && (
            <AgriculturalFinancePage
              onOpenInquiryModal={handleOpenInquiry}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {activeSection === 'farm-inputs' && (
            <FarmInputsPage
              onOpenInquiryModal={handleOpenInquiry}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {activeSection === 'tech-support' && (
            <TrainingSupportPage
              onOpenInquiryModal={handleOpenInquiry}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {activeSection === 'irrigation' && (
            <IrrigationPage
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

          {activeSection === 'market-access' && (
            <MarketAccessPage
              onOpenInquiryModal={handleOpenInquiry}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {activeSection === 'storage' && (
            <StoragePage
              onOpenInquiryModal={handleOpenInquiry}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {activeSection === 'enterprise' && (
            <EnterpriseDevelopmentPage
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

          {activeSection === 'our-story' && <OurStoryPage onNavigatePage={handleNavigatePage} onOpenInquiryModal={handleOpenInquiry} />}
          {activeSection === 'our-approach' && <OurApproachPage onNavigatePage={handleNavigatePage} onOpenInquiryModal={handleOpenInquiry} />}
          {activeSection === 'our-values' && <OurValuesPage onNavigatePage={handleNavigatePage} onOpenInquiryModal={handleOpenInquiry} />}
          {activeSection === 'our-team' && <OurTeamPage onNavigatePage={handleNavigatePage} onOpenInquiryModal={handleOpenInquiry} />}
          {activeSection === 'advisors' && <AdvisorsPage onNavigatePage={handleNavigatePage} onOpenInquiryModal={handleOpenInquiry} />}
          {activeSection === 'innovation-farm' && <InnovationFarmPage onNavigatePage={handleNavigatePage} onOpenInquiryModal={handleOpenInquiry} />}
          {activeSection === 'resources' && <ResourcesPage onNavigatePage={handleNavigatePage} onOpenInquiryModal={handleOpenInquiry} />}
          {activeSection === 'partnerships' && <PartnershipsPage onNavigatePage={handleNavigatePage} onOpenInquiryModal={handleOpenInquiry} />}

          {activeSection === 'contact' && (
            <ContactPage
              companySettings={companySettings}
              initialRole={inquiryModalRole}
              initialProduceInterest={inquiryProduceName}
              onNavigatePage={handleNavigatePage}
            />
          )}
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
