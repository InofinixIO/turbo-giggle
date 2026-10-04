import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { PlatformStatement } from '../components/home/PlatformStatement';
import { JourneySection } from '../components/home/JourneySection';
import { EmailSection } from '../components/home/EmailSection';
import { WhatsAppSection } from '../components/home/WhatsAppSection';
import { AIAgentSection } from '../components/home/AIAgentSection';
import { MetaAdsSection } from '../components/home/MetaAdsSection';
import { CommerceSection } from '../components/home/CommerceSection';
import { SegmentationSection } from '../components/home/SegmentationSection';
import { AutomationSection } from '../components/home/AutomationSection';
import { DeveloperSection } from '../components/home/DeveloperSection';
import { IntegrationsSection } from '../components/home/IntegrationsSection';
import { SolutionsSection } from '../components/home/SolutionsSection';
import { PricingSection } from '../components/home/PricingSection';
import { SocialProofSection } from '../components/home/SocialProofSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';
import { ModalType } from '../types';
import { useRouter } from '../router/RouterContext';

interface HomePageProps {
  onOpenModal: (type: ModalType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenModal }) => {
  const { navigate } = useRouter();

  return (
    <>
      {/* SECTION 2: HERO & LIVING ECOSYSTEM */}
      <HeroSection 
        onOpenModal={onOpenModal} 
        onExploreJourney={() => {
          const el = document.getElementById('interactive-journey');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      {/* SECTION 3: PLATFORM STATEMENT (7 CONNECTED CARDS) */}
      <PlatformStatement 
        onSelectChannel={(sectionId) => {
          const pathMap: Record<string, string> = {
            'email-section': '/platform/email',
            'whatsapp-section': '/platform/whatsapp',
            'automation-section': '/platform/automation',
            'ai-agents-section': '/platform/ai-agents',
            'meta-ads-section': '/platform/ads',
            'catalog-commerce-section': '/platform/catalog'
          };
          if (pathMap[sectionId]) {
            navigate(pathMap[sectionId]);
          } else {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }} 
      />

      {/* SECTION 4: SIGNATURE 8-STEP INTERACTIVE EXPERIENCE (CAMPAIGN TO CONVERSION) */}
      <JourneySection />

      {/* SECTION 5: EMAIL */}
      <EmailSection onOpenModal={onOpenModal} />

      {/* SECTION 6: WHATSAPP */}
      <WhatsAppSection onOpenModal={onOpenModal} />

      {/* SECTION 7: AI AGENTS */}
      <AIAgentSection onOpenModal={onOpenModal} />

      {/* SECTION 8: META ADS */}
      <MetaAdsSection onOpenModal={onOpenModal} />

      {/* SECTION 9: CATALOG + PAYMENTS */}
      <CommerceSection onOpenModal={onOpenModal} />

      {/* SECTION 10: SEGMENTATION */}
      <SegmentationSection onOpenModal={onOpenModal} />

      {/* SECTION 11: AUTOMATION */}
      <AutomationSection onOpenModal={onOpenModal} />

      {/* SECTION 12: TRANSACTIONAL EMAIL + API */}
      <DeveloperSection onOpenModal={onOpenModal} />

      {/* SECTION 13: INTEGRATIONS */}
      <IntegrationsSection onOpenModal={onOpenModal} />

      {/* SECTION 14: SOLUTIONS */}
      <SolutionsSection onOpenModal={onOpenModal} />

      {/* SECTION 15: PRICING PREVIEW & INTERACTIVE ROI CALCULATOR */}
      <PricingSection onOpenModal={onOpenModal} />

      {/* SECTION 16: SOCIAL PROOF & ENTERPRISE RELIABILITY */}
      <SocialProofSection />

      {/* SECTION 17: FINAL CTA */}
      <FinalCtaSection onOpenModal={onOpenModal} />
    </>
  );
};
