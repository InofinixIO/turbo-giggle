import React from 'react';
import { Hero } from '../components/Hero';
import { PlatformStatement } from '../components/PlatformStatement';
import { SignatureJourney } from '../components/SignatureJourney';
import { EmailSection } from '../components/EmailSection';
import { WhatsAppSection } from '../components/WhatsAppSection';
import { AIAgentsSection } from '../components/AIAgentsSection';
import { MetaAdsSection } from '../components/MetaAdsSection';
import { CatalogPaymentsSection } from '../components/CatalogPaymentsSection';
import { SegmentationSection } from '../components/SegmentationSection';
import { AutomationSection } from '../components/AutomationSection';
import { TransactionalApiSection } from '../components/TransactionalApiSection';
import { IntegrationsSection } from '../components/IntegrationsSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { PricingSection } from '../components/PricingSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { FinalCTASection } from '../components/FinalCTASection';

interface HomePageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateSection: (sectionId: string) => void;
  selectedSolutionIndustry: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateSection,
  selectedSolutionIndustry
}) => {
  return (
    <>
      {/* SECTION 2 — HERO & HERO VISUAL */}
      <Hero
        onOpenStartFree={onOpenStartFree}
        onOpenBookDemo={onOpenBookDemo}
        onExploreJourney={() => onNavigateSection('journey')}
      />

      {/* SECTION 3 — PLATFORM STATEMENT */}
      <PlatformStatement
        onOpenStartFree={onOpenStartFree}
        onNavigateSection={onNavigateSection}
      />

      {/* SECTION 4 — SIGNATURE INTERACTIVE EXPERIENCE */}
      <SignatureJourney
        onOpenStartFree={onOpenStartFree}
      />

      {/* SECTION 5 — EMAIL */}
      <EmailSection
        onOpenStartFree={onOpenStartFree}
      />

      {/* SECTION 6 — WHATSAPP */}
      <WhatsAppSection
        onOpenStartFree={onOpenStartFree}
        onOpenBookDemo={onOpenBookDemo}
      />

      {/* SECTION 7 — AI AGENTS */}
      <AIAgentsSection
        onOpenStartFree={onOpenStartFree}
      />

      {/* SECTION 8 — META ADS */}
      <MetaAdsSection
        onOpenStartFree={onOpenStartFree}
      />

      {/* SECTION 9 — CATALOG + PAYMENTS */}
      <CatalogPaymentsSection
        onOpenStartFree={onOpenStartFree}
      />

      {/* SECTION 10 — DYNAMIC SEGMENTATION */}
      <SegmentationSection
        onOpenStartFree={onOpenStartFree}
      />

      {/* SECTION 11 — VISUAL WORKFLOW AUTOMATION */}
      <AutomationSection
        onOpenStartFree={onOpenStartFree}
      />

      {/* SECTION 12 — DEVELOPER PLATFORM & TRANSACTIONAL EMAIL */}
      <TransactionalApiSection
        onOpenStartFree={onOpenStartFree}
      />

      {/* SECTION 13 — INTEGRATIONS */}
      <IntegrationsSection
        onOpenStartFree={onOpenStartFree}
      />

      {/* SECTION 14 — SOLUTIONS */}
      <SolutionsSection
        onOpenStartFree={onOpenStartFree}
        onOpenBookDemo={onOpenBookDemo}
        selectedIndustry={selectedSolutionIndustry}
      />

      {/* SECTION 15 — PRICING */}
      <PricingSection
        onOpenStartFree={onOpenStartFree}
        onOpenBookDemo={onOpenBookDemo}
      />

      {/* SECTION 16 — SOCIAL PROOF & TESTIMONIALS */}
      <SocialProofSection
        onOpenStartFree={onOpenStartFree}
        onOpenBookDemo={onOpenBookDemo}
      />

      {/* SECTION 17 — FINAL CALL TO ACTION */}
      <FinalCTASection
        onOpenStartFree={onOpenStartFree}
        onOpenBookDemo={onOpenBookDemo}
      />
    </>
  );
};
