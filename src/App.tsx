import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PlatformNavSwitcher } from './components/PlatformNavSwitcher';
import { ScrollToTop } from './components/ScrollToTop';
import { StartFreeModal, BookDemoModal, LoginModal } from './components/Modals';

// Homepage
import { HomePage } from './pages/HomePage';

// 11 Core Platform Modules
import { EmailMarketingPage } from './pages/EmailMarketingPage';
import { TransactionalEmailPage } from './pages/TransactionalEmailPage';
import { WhatsAppPage } from './pages/WhatsAppPage';
import { AIAgentsPage } from './pages/AIAgentsPage';
import { AutomationPage } from './pages/AutomationPage';
import { SegmentationPage } from './pages/SegmentationPage';
import { TemplatesPage } from './pages/TemplatesPage';
import { AdsPage } from './pages/AdsPage';
import { CatalogPage } from './pages/CatalogPage';
import { PaymentsPage } from './pages/PaymentsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';

// 6 Solutions Pages
import { EcommerceSolutionPage } from './pages/solutions/EcommerceSolutionPage';
import { SaaSSolutionPage } from './pages/solutions/SaaSSolutionPage';
import { AgenciesSolutionPage } from './pages/solutions/AgenciesSolutionPage';
import { HealthcareSolutionPage } from './pages/solutions/HealthcareSolutionPage';
import { EducationSolutionPage } from './pages/solutions/EducationSolutionPage';
import { RealEstateSolutionPage } from './pages/solutions/RealEstateSolutionPage';

// 4 Developers Pages
import { DevelopersOverviewPage } from './pages/developers/DevelopersOverviewPage';
import { ApiReferencePage } from './pages/developers/ApiReferencePage';
import { WebhooksPage } from './pages/developers/WebhooksPage';
import { IntegrationsPage } from './pages/developers/IntegrationsPage';

// Pricing Page
import { PricingPage } from './pages/PricingPage';

// 5 Resources Pages
import { BlogPage } from './pages/resources/BlogPage';
import { GuidesPage } from './pages/resources/GuidesPage';
import { TemplatesResourcePage } from './pages/resources/TemplatesResourcePage';
import { CaseStudiesPage } from './pages/resources/CaseStudiesPage';
import { HelpCenterPage } from './pages/resources/HelpCenterPage';

// 5 Company Pages
import { AboutPage } from './pages/company/AboutPage';
import { ContactPage } from './pages/company/ContactPage';
import { CareersPage } from './pages/company/CareersPage';
import { SecurityPage } from './pages/company/SecurityPage';
import { LegalPage } from './pages/company/LegalPage';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [startFreeOpen, setStartFreeOpen] = useState(false);
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedSolutionIndustry, setSelectedSolutionIndustry] = useState<string>('ecommerce');

  // Backwards-compatibility for existing hash URLs (e.g. #/platform/email)
  useEffect(() => {
    if (window.location.hash.startsWith('#/platform/')) {
      const cleanPath = window.location.hash.replace('#', '');
      navigate(cleanPath, { replace: true });
    }
  }, [navigate]);

  const scrollToSection = (id: string) => {
    const sectionMap: Record<string, string> = {
      'hero': 'hero',
      'platform': 'platform-statement',
      'platform-statement': 'platform-statement',
      'journey': 'journey',
      'email': 'email',
      'product-email': 'email',
      'whatsapp': 'whatsapp',
      'product-whatsapp': 'whatsapp',
      'ai': 'ai-agents',
      'ai-agents': 'ai-agents',
      'product-ai': 'ai-agents',
      'ads': 'meta-ads',
      'meta-ads': 'meta-ads',
      'product-ads': 'meta-ads',
      'catalog': 'catalog-payments',
      'payments': 'catalog-payments',
      'catalog-payments': 'catalog-payments',
      'product-catalog': 'catalog-payments',
      'product-payments': 'catalog-payments',
      'segmentation': 'segmentation',
      'product-cdp': 'segmentation',
      'automation': 'automation',
      'product-automation': 'automation',
      'developers': 'transactional-api',
      'developer': 'transactional-api',
      'api': 'transactional-api',
      'product-api': 'transactional-api',
      'transactional': 'transactional-api',
      'transactional-api': 'transactional-api',
      'integrations': 'integrations',
      'solutions': 'solutions',
      'pricing': 'pricing',
      'testimonials': 'social-proof',
      'social-proof': 'social-proof',
      'customers': 'social-proof',
      'cta': 'cta'
    };

    const targetId = sectionMap[id] || id;

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }

    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSolution = (industryId: string) => {
    setSelectedSolutionIndustry(industryId);
    // Navigate directly to dedicated industry solution route
    navigate(`/solutions/${industryId}`);
  };

  const isPlatformPage = location.pathname.startsWith('/platform');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      <ScrollToTop />

      {/* NAVBAR */}
      <Navbar
        onOpenStartFree={() => setStartFreeOpen(true)}
        onOpenBookDemo={() => setBookDemoOpen(true)}
        onOpenLogin={() => setLoginModalOpen(true)}
        onNavigateSection={scrollToSection}
        onSelectSolution={handleSelectSolution}
        onSelectPlatformPage={(pageId) => navigate(`/platform/${pageId}`)}
        onBackToHome={() => {
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* STICKY PLATFORM SWITCHER RIBBON (When viewing any of the 11 platform product pages) */}
      {isPlatformPage && (
        <div className="pt-16 sm:pt-20">
          <PlatformNavSwitcher
            onSelectModule={(moduleId) => navigate(`/platform/${moduleId}`)}
            onBackToHome={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      )}

      {/* ROUTES CONFIGURATION */}
      <main className="flex-1">
        <Routes>
          {/* HOMEPAGE */}
          <Route 
            path="/" 
            element={
              <HomePage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateSection={scrollToSection}
                selectedSolutionIndustry={selectedSolutionIndustry}
              />
            } 
          />

          {/* ======================================================== */}
          {/* 11 CORE PLATFORM PAGES */}
          {/* ======================================================== */}
          <Route 
            path="/platform/email" 
            element={
              <EmailMarketingPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/transactional-email" 
            element={
              <TransactionalEmailPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/whatsapp" 
            element={
              <WhatsAppPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/ai-agents" 
            element={
              <AIAgentsPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/automation" 
            element={
              <AutomationPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/segmentation" 
            element={
              <SegmentationPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/templates" 
            element={
              <TemplatesPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/ads" 
            element={
              <AdsPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/catalog" 
            element={
              <CatalogPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/payments" 
            element={
              <PaymentsPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />
          <Route 
            path="/platform/analytics" 
            element={
              <AnalyticsPage
                onOpenStartFree={() => setStartFreeOpen(true)}
                onOpenBookDemo={() => setBookDemoOpen(true)}
                onNavigateModule={(mod) => navigate(`/platform/${mod}`)}
              />
            } 
          />

          {/* ======================================================== */}
          {/* 6 INDUSTRY SOLUTIONS */}
          {/* ======================================================== */}
          <Route 
            path="/solutions/ecommerce" 
            element={<EcommerceSolutionPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />
          <Route 
            path="/solutions/saas" 
            element={<SaaSSolutionPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />
          <Route 
            path="/solutions/agencies" 
            element={<AgenciesSolutionPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />
          <Route 
            path="/solutions/healthcare" 
            element={<HealthcareSolutionPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />
          <Route 
            path="/solutions/education" 
            element={<EducationSolutionPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />
          <Route 
            path="/solutions/real-estate" 
            element={<RealEstateSolutionPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />

          {/* ======================================================== */}
          {/* DEVELOPERS SECTION */}
          {/* ======================================================== */}
          <Route 
            path="/developers" 
            element={<DevelopersOverviewPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />
          <Route 
            path="/developers/api" 
            element={<ApiReferencePage />} 
          />
          <Route 
            path="/developers/webhooks" 
            element={<WebhooksPage />} 
          />
          <Route 
            path="/developers/integrations" 
            element={<IntegrationsPage />} 
          />

          {/* ======================================================== */}
          {/* PRICING */}
          {/* ======================================================== */}
          <Route 
            path="/pricing" 
            element={<PricingPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />

          {/* ======================================================== */}
          {/* RESOURCES */}
          {/* ======================================================== */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/resources/blog" element={<BlogPage />} />
          <Route path="/resources/guides" element={<GuidesPage />} />
          <Route 
            path="/resources/templates" 
            element={<TemplatesResourcePage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/resources/help-center" element={<HelpCenterPage />} />

          {/* ======================================================== */}
          {/* COMPANY & GOVERNANCE */}
          {/* ======================================================== */}
          <Route 
            path="/about" 
            element={<AboutPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />
          <Route 
            path="/company/about" 
            element={<AboutPage onOpenStartFree={() => setStartFreeOpen(true)} onOpenBookDemo={() => setBookDemoOpen(true)} />} 
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/company/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/company/careers" element={<CareersPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/company/security" element={<SecurityPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/company/legal" element={<LegalPage />} />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer
        onOpenStartFree={() => setStartFreeOpen(true)}
        onOpenBookDemo={() => setBookDemoOpen(true)}
        onNavigateSection={scrollToSection}
        onSelectSolution={handleSelectSolution}
        onSelectPlatformPage={(pageId) => navigate(`/platform/${pageId}`)}
      />

      {/* Interactive Modals */}
      <StartFreeModal
        isOpen={startFreeOpen}
        onClose={() => setStartFreeOpen(false)}
      />

      <BookDemoModal
        isOpen={bookDemoOpen}
        onClose={() => setBookDemoOpen(false)}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
}
