import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

interface RouterProviderProps {
  children: React.ReactNode;
}

// Route to Page Title & Description Registry for SEO & GEO
const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Cocoonmail — Customer Engagement & Commerce Operating Platform',
    description: 'Acquire customers, engage them across Email and WhatsApp, automate conversations with AI, showcase products, and accept payments in one connected platform.'
  },
  '/platform': {
    title: 'Platform Architecture — Cocoonmail',
    description: 'Explore the complete Cocoonmail operating architecture connecting Email, WhatsApp Business API, AI Agents, Catalogs, Payments, and Analytics.'
  },
  '/platform/email': {
    title: 'Email Marketing & Drag-and-Drop Builder — Cocoonmail',
    description: 'Build responsive email campaigns, design custom blocks, personalize dynamic variables, and achieve 99.8% inbox placement with Cocoonmail.'
  },
  '/platform/transactional-email': {
    title: 'Transactional Email API & SMTP Service — Cocoonmail',
    description: 'Sub-45ms delivery latency for order receipts, password resets, and critical alerts with dedicated IPs and real-time webhook tracking.'
  },
  '/platform/whatsapp': {
    title: 'WhatsApp Business API Platform — Cocoonmail',
    description: 'Official Meta Cloud API partner. Broadcast campaigns with 98% open rates, manage shared team inboxes, and sell products in WhatsApp.'
  },
  '/platform/ai-agents': {
    title: 'Autonomous WhatsApp AI Agents — Cocoonmail',
    description: 'AI agents grounded in your real product catalogs and policy documents that answer questions, recommend products, and close sales 24/7.'
  },
  '/platform/automation': {
    title: 'Visual Customer Journey Automation — Cocoonmail',
    description: 'Drag-and-drop workflow canvas for abandoned cart recovery, post-purchase follow-ups, delay timers, and AI sentiment condition splits.'
  },
  '/platform/segmentation': {
    title: 'Dynamic Behavioral Segmentation — Cocoonmail',
    description: 'Filter contacts in real time using email clicks, WhatsApp engagement, order totals, and custom attributes. Say goodbye to stale static lists.'
  },
  '/platform/templates': {
    title: 'Interactive Template Builder & Sandbox — Cocoonmail',
    description: 'Design pre-approved WhatsApp interactive quick replies, CTA buttons, media headers, and dynamic email personalization templates.'
  },
  '/platform/ads': {
    title: 'Meta Ads to WhatsApp Integration — Cocoonmail',
    description: 'Turn Facebook & Instagram click-to-WhatsApp ads and WhatsApp Status Ads directly into high-converting customer conversations.'
  },
  '/platform/catalog': {
    title: 'Conversational Product Catalog — Cocoonmail',
    description: 'Showcase synced e-commerce product feeds, variants, and live inventory directly inside customer chat threads.'
  },
  '/platform/payments': {
    title: 'In-Conversation Payments (UPI, Stripe, Razorpay) — Cocoonmail',
    description: 'Frictionless payment links inside chat streams supporting UPI, cards, and net banking with instant transaction confirmation.'
  },
  '/platform/analytics': {
    title: 'Closed-Loop Revenue Analytics — Cocoonmail',
    description: 'Attribute every message, open, click, and conversation directly to top-line business revenue and ROI.'
  },
  '/solutions': {
    title: 'Industry Solutions & Playbooks — Cocoonmail',
    description: 'Pre-configured omni-channel customer engagement workflows tailored for E-commerce, SaaS, Agencies, Healthcare, and Education.'
  },
  '/solutions/ecommerce': {
    title: 'E-commerce & D2C Customer Engagement — Cocoonmail',
    description: 'Boost mobile conversion rates with WhatsApp cart recovery, catalog drops, and in-chat checkout links.'
  },
  '/solutions/saas': {
    title: 'B2B SaaS & Startup Engagement — Cocoonmail',
    description: 'Automate trial onboarding sequences, feature adoption nudges, and mission-critical transactional API emails.'
  },
  '/solutions/agencies': {
    title: 'Marketing Agencies Multi-Client Platform — Cocoonmail',
    description: 'Manage multiple brand workspaces, isolated client billing, green badge verification, and white-label reporting.'
  },
  '/solutions/healthcare': {
    title: 'Healthcare & Clinic Notifications — Cocoonmail',
    description: 'Automated WhatsApp appointment confirmations, 2-way reschedule options, and secure PDF diagnostic report delivery.'
  },
  '/solutions/education': {
    title: 'Education & EdTech Admissions Platform — Cocoonmail',
    description: 'Qualify prospective student leads via Meta Ads, route to WhatsApp course counselors, and send webinar alerts.'
  },
  '/solutions/real-estate': {
    title: 'Real Estate Virtual Tours & Booking — Cocoonmail',
    description: 'Deliver interactive property brochures, virtual site walkthroughs, and schedule on-site viewings over WhatsApp.'
  },
  '/developers': {
    title: 'Developer Platform & Infrastructure — Cocoonmail',
    description: 'High-throughput REST APIs, HMAC webhooks, official SDKs, and sub-second message delivery engines.'
  },
  '/developers/api': {
    title: 'REST API Reference & Documentation — Cocoonmail',
    description: 'Typed endpoints for contacts, campaigns, email dispatch, WhatsApp templates, and catalog synchronization.'
  },
  '/developers/webhooks': {
    title: 'Real-Time Webhook Event Stream — Cocoonmail',
    description: 'Sub-second event callbacks for message delivery, read receipts, link clicks, payments, and conversational triggers.'
  },
  '/developers/integrations': {
    title: 'Ecosystem Connectors & Integrations — Cocoonmail',
    description: 'Connect Shopify, WooCommerce, Salesforce, HubSpot, Stripe, Razorpay, and Meta with one click.'
  },
  '/pricing': {
    title: 'Pricing & Interactive ROI Calculator — Cocoonmail',
    description: 'Transparent monthly plans for Starter, Growth, and Scale with currency switcher (USD/INR) and contact volume estimator.'
  },
  '/resources/guides': {
    title: 'Marketing Guides & Best Practices — Cocoonmail',
    description: 'Expert playbooks on WhatsApp commerce compliance, high-deliverability email warmups, and AI agent configuration.'
  },
  '/resources/templates': {
    title: 'Template Gallery for Email & WhatsApp — Cocoonmail',
    description: 'Pre-designed high-converting templates for festive sales, abandoned cart recovery, and welcome sequences.'
  },
  '/resources/case-studies': {
    title: 'Customer Case Studies & Verified Impact — Cocoonmail',
    description: 'Read how growing brands achieved 3.2x ROAS and 98% open rates using Cocoonmail.'
  },
  '/company/about': {
    title: 'About Cocoonmail — Our Mission & Story',
    description: 'Learn why we built the unified customer engagement and commerce operating system for modern global businesses.'
  },
  '/company/contact': {
    title: 'Contact Cocoonmail — Sales & Enterprise Engineering',
    description: 'Get in touch with our solutions architects to design a custom omni-channel communication rollout.'
  }
};

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
      }
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title and meta description dynamically
  useEffect(() => {
    const meta = routeMetadata[currentPath] || {
      title: 'Cocoonmail — Customer Engagement & Commerce Operating Platform',
      description: 'Acquire customers, engage them across Email and WhatsApp, automate conversations with AI, showcase products, and accept payments in one connected platform.'
    };

    document.title = meta.title;

    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement('meta');
      descEl.setAttribute('name', 'description');
      document.head.appendChild(descEl);
    }
    descEl.setAttribute('content', meta.description);

    // Canonical link tag
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', `${window.location.origin}${currentPath}`);
  }, [currentPath]);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
