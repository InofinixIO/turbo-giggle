export type PlatformModuleId =
  | 'email'
  | 'transactional-email'
  | 'whatsapp'
  | 'ai-agents'
  | 'automation'
  | 'segmentation'
  | 'templates'
  | 'ads'
  | 'catalog'
  | 'payments'
  | 'analytics';

export type SolutionId =
  | 'ecommerce'
  | 'saas'
  | 'agencies'
  | 'healthcare'
  | 'education'
  | 'real-estate';

export interface JourneyStep {
  id: string;
  stepNumber: number;
  label: string;
  title: string;
  shortDesc: string;
  whatHappensToCustomer: string;
  customerName: string;
  channel: string;
  metricLabel: string;
  metricValue: string;
  sampleUiType: 'ad' | 'lead' | 'segment' | 'message' | 'ai' | 'catalog' | 'payment' | 'analytics' | 'automation';
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  baseMonthlyPriceUSD: number;
  baseMonthlyPriceINR: number;
  includedContacts: number;
  includedEmails: number;
  includedWhatsAppConversations: number;
  includedAiAgentQueries: number;
  teamSeats: number;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  metric: string;
  channel: string;
}

export interface ApiSnippet {
  language: 'curl' | 'nodejs' | 'python';
  title: string;
  code: string;
}
