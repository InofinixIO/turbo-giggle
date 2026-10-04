export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  description?: string;
  icon?: string;
}

export interface NavCategory {
  title: string;
  description: string;
  items: NavItem[];
  featured?: {
    title: string;
    description: string;
    tag: string;
    href: string;
  };
}

export type ModalType = 'start-free' | 'book-demo' | null;

export interface JourneyStep {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  channel: 'ads' | 'segment' | 'email' | 'whatsapp' | 'ai' | 'catalog' | 'payment' | 'analytics';
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthlyUSD: number;
  priceMonthlyINR: number;
  popular?: boolean;
  contactsIncluded: number;
  emailsIncluded: number;
  whatsappIncluded: string;
  features: string[];
}
