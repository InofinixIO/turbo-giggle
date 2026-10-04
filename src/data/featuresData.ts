import { 
  Mail, 
  MessageSquare, 
  Bot, 
  Workflow, 
  Users, 
  Layers, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  Zap, 
  Sliders, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  Send,
  Smartphone,
  Check
} from 'lucide-react';

export interface FeatureData {
  slug: string;
  name: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  primaryMetric: { value: string; label: string };
  secondaryMetric: { value: string; label: string };
  tertiaryMetric: { value: string; label: string };
  icon: any;
  color: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  
  // 1. What You Get (Tangible Capabilities)
  whatYouGet: {
    title: string;
    description: string;
    deliverable: string;
  }[];

  // 2. How You Benefit (Business ROI)
  howYouBenefit: {
    metric: string;
    title: string;
    description: string;
    highlight: string;
  }[];

  // 3. Real-World Use Cases
  useCases: {
    industry: string;
    scenario: string;
    workflow: string;
    outcome: string;
  }[];

  // 4. SEO & GEO FAQs (Search Rich Results & AI Engine Grounding)
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const featuresMap: Record<string, FeatureData> = {
  'email': {
    slug: 'email',
    name: 'Email Marketing & Builder',
    badge: 'Drag & Drop Marketing Studio',
    heroHeadline: 'Engage your subscribers with emails that actually hit the inbox.',
    heroSubheadline: 'Design responsive email newsletters, personalize with dynamic variables, and achieve 99.8% inbox placement with automated IP reputation protection.',
    primaryMetric: { value: '99.8%', label: 'Inbox Placement Rate' },
    secondaryMetric: { value: '3.4x', label: 'Click-to-Open Ratio' },
    tertiaryMetric: { value: '75%', label: 'Creation Time Saved' },
    icon: Mail,
    color: 'blue',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-200',
    whatYouGet: [
      {
        title: 'Visual Block Drag-and-Drop Builder',
        description: 'Build pixel-perfect, responsive newsletters without writing HTML or CSS. Test rendering across 40+ client email previewers.',
        deliverable: 'Responsive WYSIWYG Editor'
      },
      {
        title: 'Dynamic Liquid Personalization',
        description: 'Inject customer first names, cart items, previous order dates, and tailored product recommendations automatically.',
        deliverable: 'Dynamic Field Engine'
      },
      {
        title: 'Automated IP Reputation Warm-Up',
        description: 'Protect your domain sender reputation with automated volume throttling that increases deliverability over 30 days.',
        deliverable: 'Dedicated IP Pools'
      },
      {
        title: 'A/B & Multivariate Testing',
        description: 'Test subject lines, sender names, and send times. Automatically dispatch the winning variant to the remaining 80% of your audience.',
        deliverable: 'Automated Win Optimizer'
      },
      {
        title: 'Pre-Built High-Converting Templates',
        description: 'Access 100+ vetted designs for product launches, festive mega-sales, weekly roundups, and VIP invitations.',
        deliverable: 'Commercial Template Library'
      },
      {
        title: 'Real-Time Click Heatmaps',
        description: 'Visualize exactly where your subscribers click inside your email to optimize layouts and call-to-action button placements.',
        deliverable: 'Visual Engagement Analytics'
      }
    ],
    howYouBenefit: [
      {
        metric: '99.8% Deliverability',
        title: 'Stop landing in the Spam folder',
        description: 'With automated SPF, DKIM, and DMARC enforcement plus isolated high-reputation IP pools, your emails bypass the promotions tab into primary inboxes.',
        highlight: 'Zero bounce penalties'
      },
      {
        metric: '+48% Open Rates',
        title: 'Dramatically higher subscriber engagement',
        description: 'AI-assisted subject line generation and predictive send-time optimization deliver your messages when each individual contact is most active.',
        highlight: 'Personalized delivery timing'
      },
      {
        metric: '10 hrs/week Saved',
        title: 'Launch campaigns in minutes, not days',
        description: 'Marketing teams eliminate back-and-forth design revisions using modular design blocks and reusable brand design systems.',
        highlight: 'Instant multi-device preview'
      }
    ],
    useCases: [
      {
        industry: 'D2C E-commerce',
        scenario: 'Weekend Flash Sale Launch',
        workflow: 'Send personalized product catalog drops with countdown timers to VIP customers 2 hours before general public access.',
        outcome: '34% higher repeat order conversion rate on launch day.'
      },
      {
        industry: 'B2B SaaS',
        scenario: 'Monthly Product Release Digest',
        workflow: 'Trigger segmented feature updates tailored to user permission tiers (Admins vs Standard Members).',
        outcome: '4x increase in trial-to-paid upgrade clicks.'
      },
      {
        industry: 'Growth Agencies',
        scenario: 'Multi-Client Campaign Management',
        workflow: 'Deploy pre-approved template layouts across 15 client accounts while keeping branding isolated.',
        outcome: 'Reduced campaign turnaround from 4 days to 45 minutes.'
      }
    ],
    faqs: [
      {
        question: 'How does Cocoonmail guarantee 99.8% email deliverability?',
        answer: 'We utilize automated IP warmup algorithms, custom DKIM/SPF domain verification, proactive bounce-list scrubbing, and continuous feedback loops with major mailbox providers like Google and Yahoo.'
      },
      {
        question: 'Can I import my existing subscribers from Mailchimp or Klaviyo?',
        answer: 'Yes. Cocoonmail provides a one-click CSV and API migration tool that imports your existing subscriber lists, tags, and engagement histories without loss of unsubscribe preferences.'
      },
      {
        question: 'Are email templates mobile-responsive by default?',
        answer: 'Every layout built in our drag-and-drop editor automatically produces clean, mobile-optimized HTML that displays cleanly on iPhone Mail, Android Gmail, Outlook, and desktop browsers.'
      },
      {
        question: 'Can I use custom HTML if I have an in-house design team?',
        answer: 'Yes. You can switch between the drag-and-drop visual block editor and raw HTML code editing with live dual-pane preview at any time.'
      }
    ]
  },

  'whatsapp': {
    slug: 'whatsapp',
    name: 'WhatsApp Business API',
    badge: 'Official Meta Cloud API Partner',
    heroHeadline: 'Reach your customers where they actually read messages.',
    heroSubheadline: 'Broadcast marketing campaigns with 98% open rates, manage customer conversations in a collaborative shared team inbox, and get verified with the official Meta Green Badge.',
    primaryMetric: { value: '98.4%', label: 'Average Open Rate' },
    secondaryMetric: { value: '1.4s', label: 'Median Delivery Time' },
    tertiaryMetric: { value: '3.8x', label: 'Conversion Lift vs SMS' },
    icon: MessageSquare,
    color: 'emerald',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    accentBorder: 'border-emerald-200',
    whatYouGet: [
      {
        title: 'Official Meta Cloud API Infrastructure',
        description: 'Direct tier-1 connection to Meta servers. High throughput up to 1,000 messages per second with zero middleman markups.',
        deliverable: 'Official WABA Gateway'
      },
      {
        title: 'Shared Team Collaboration Inbox',
        description: 'Multi-agent dashboard where your support and sales teams assign chats, leave internal notes, and use canned quick-replies.',
        deliverable: 'Multi-Agent Support Desk'
      },
      {
        title: 'Interactive Template Messages',
        description: 'Build pre-approved templates with CTA buttons, quick-reply chips, high-res images, PDF attachments, and video headers.',
        deliverable: 'Interactive Template Engine'
      },
      {
        title: 'Automated Green Badge Verification',
        description: 'Guaranteed guided assistance and verification submission to obtain the official Meta Green Tick beside your brand name.',
        deliverable: 'Verified Brand Identity'
      },
      {
        title: 'High-Volume Scheduled Broadcasts',
        description: 'Target tens of thousands of opted-in customers in seconds with dynamic variable substitution for names and discount codes.',
        deliverable: 'Mass Broadcast Engine'
      },
      {
        title: '24-Hour Customer Care Window Manager',
        description: 'Automatic routing and freeform reply management within the 24-hour service window to keep Meta messaging costs minimal.',
        deliverable: 'Cost & Session Optimizer'
      }
    ],
    howYouBenefit: [
      {
        metric: '98.4% Open Rate',
        title: 'Direct personal engagement that never gets ignored',
        description: 'While emails achieve 18-22% open rates, WhatsApp messages are read by 90% of recipients within 15 minutes of receipt.',
        highlight: 'Instant mobile attention'
      },
      {
        metric: '3.8x Higher ROAS',
        title: 'Turn conversations into immediate checkouts',
        description: 'Customers reply and make purchase decisions directly within the chat app they use daily with family and friends.',
        highlight: 'Frictionless customer journey'
      },
      {
        metric: '70% Lower Support Costs',
        title: 'Resolve customer questions in one collaborative thread',
        description: 'Multiple support agents handle concurrent chats simultaneously using automated quick-replies, reducing phone support expenses.',
        highlight: 'Shared multi-agent team inbox'
      }
    ],
    useCases: [
      {
        industry: 'D2C Retail & Fashion',
        scenario: 'VIP Product Drops & Back-in-Stock Alerts',
        workflow: 'Broadcast exclusive WhatsApp cards with direct "Buy Now" buttons when sold-out inventory returns.',
        outcome: 'Sold out 2,000 units within 45 minutes of notification.'
      },
      {
        industry: 'Healthcare & Clinics',
        scenario: 'Appointment Confirmations & Lab PDF Reports',
        workflow: 'Send 24-hour reminder with interactive "Confirm" or "Reschedule" buttons and deliver encrypted diagnostic PDFs.',
        outcome: 'Reduced clinic patient no-show rates by 82%.'
      },
      {
        industry: 'EdTech & Higher Education',
        scenario: 'Admissions Lead Qualification',
        workflow: 'Engage Instagram ad leads via WhatsApp to answer course syllabus inquiries and schedule counseling calls.',
        outcome: '54% increase in completed student enrollment interviews.'
      }
    ],
    faqs: [
      {
        question: 'Do I need a separate phone number for WhatsApp Business API?',
        answer: 'Yes. You need a dedicated phone number (mobile, landline, or virtual) that is not currently registered on a personal WhatsApp account. Cocoonmail helps you connect and verify it in minutes.'
      },
      {
        question: 'How do WhatsApp message approvals work with Meta?',
        answer: 'Outbound business-initiated templates (marketing, utility, authentication) must be submitted to Meta for approval, which typically completes in 2 to 15 minutes directly within Cocoonmail.'
      },
      {
        question: 'Can multiple team members chat on the same WhatsApp number?',
        answer: 'Yes. Cocoonmail provides a unified shared inbox where unlimited agents can log in, view incoming messages, assign chats, and respond simultaneously from one verified business number.'
      },
      {
        question: 'How does WhatsApp pricing work?',
        answer: 'Meta charges per 24-hour conversation category (Marketing, Utility, Authentication, or Service). Cocoonmail passes through official Meta API rates directly with zero hidden markups.'
      }
    ]
  },

  'ai-agents': {
    slug: 'ai-agents',
    name: 'Autonomous AI Agents',
    badge: 'Grounded in Live Inventory',
    heroHeadline: 'Turn WhatsApp into an autonomous 24/7 sales representative.',
    heroSubheadline: 'Deploy conversational AI agents trained on your product catalog, FAQs, and return policies. Answer customer queries, recommend products, and close sales around the clock.',
    primaryMetric: { value: '24/7', label: 'Autonomous Availability' },
    secondaryMetric: { value: '92%', label: 'First-Contact Resolution' },
    tertiaryMetric: { value: '< 2s', label: 'Average Response Time' },
    icon: Bot,
    color: 'violet',
    accentBg: 'bg-violet-50',
    accentText: 'text-violet-600',
    accentBorder: 'border-violet-200',
    whatYouGet: [
      {
        title: 'Catalog-Grounded Intelligence',
        description: 'Connect your Shopify, WooCommerce, or custom ERP feed so your AI agent knows real-time prices, stock levels, and sizing.',
        deliverable: 'Real-Time Inventory Sync'
      },
      {
        title: 'Strict Hallucination Guards',
        description: 'Configurable system rules ensure your agent only references verified brand facts, policies, and prices without fabricating information.',
        deliverable: 'Enterprise Guardrails'
      },
      {
        title: 'Natural Language Product Discovery',
        description: 'When a customer asks "Show me red trail running shoes under ₹5,000", the agent queries inventory and sends matching product cards.',
        deliverable: 'Conversational Search Engine'
      },
      {
        title: 'Seamless Human Handoff',
        description: 'If a customer requests a human or expresses frustration, the agent tags the conversation and assigns it instantly to a live support rep.',
        deliverable: 'Sentiment & Agent Escalation'
      },
      {
        title: 'Multi-Lingual Customer Support',
        description: 'Communicate naturally in English, Hindi, Hinglish, Spanish, French, and 40+ languages without manual translation rules.',
        deliverable: 'Global Language Engine'
      },
      {
        title: 'Automated Post-Purchase Tracking',
        description: 'Answers "Where is my order?" inquiries automatically by querying courier tracking APIs (Bluedart, Delhivery, FedEx).',
        deliverable: 'Live Shipment Lookups'
      }
    ],
    howYouBenefit: [
      {
        metric: '92% Automated Answers',
        title: 'Free up human agents for high-value sales',
        description: 'Routine questions about order tracking, sizing, returns, and store hours are resolved instantly without human intervention.',
        highlight: 'Instant midnight response'
      },
      {
        metric: '+28% Conversion Lift',
        title: 'Never lose a sale because a customer had a question',
        description: 'When shoppers get immediate, accurate product recommendations at 11 PM on Sunday, they purchase on the spot rather than leaving.',
        highlight: 'Zero cart abandonment delays'
      },
      {
        metric: '100% Brand Consistency',
        title: 'Trained on your exact tone of voice',
        description: 'Enforce brand personality guidelines, courteous phrasing, and accurate discount policy rules across every single chat.',
        highlight: 'Zero human fatigue or error'
      }
    ],
    useCases: [
      {
        industry: 'D2C Footwear & Apparel',
        scenario: 'Sizing & Style Advice at Midnight',
        workflow: 'Shopper asks: "Do these run small? I normally wear Nike UK 9." Agent recommends size UK 9.5 and sends direct checkout link.',
        outcome: '42% conversion rate on nocturnal product inquiries.'
      },
      {
        industry: 'Electronics & Gadgets',
        scenario: 'Technical Compatibility Questions',
        workflow: 'Customer asks if a wireless charger works with their phone model. Agent checks spec sheet and verifies compatibility instantly.',
        outcome: 'Eliminated pre-purchase return requests by 65%.'
      },
      {
        industry: 'Hospitality & Travel',
        scenario: 'Instant Booking & Amenity Inquiries',
        workflow: 'Guest asks if pets are allowed and requests weekend availability. Agent quotes room prices and books reservation.',
        outcome: '3.4x faster direct booking turnaround.'
      }
    ],
    faqs: [
      {
        question: 'Will the AI make up prices or offer unauthorized discounts?',
        answer: 'No. Cocoonmail AI Agents are strictly grounded in your connected product feed and boundary rules. They cannot invent prices, discounts, or policies outside your uploaded knowledge base.'
      },
      {
        question: 'What happens when the AI cannot answer a complex question?',
        answer: 'The agent politely informs the customer that a senior specialist is being notified, automatically tags the conversation, and sounds an alert in the team inbox for human takeover.'
      },
      {
        question: 'Can I test the AI agent before putting it live on WhatsApp?',
        answer: 'Yes. Cocoonmail includes a private testing simulator where you can converse with your agent, review reasoning steps, and fine-tune responses before publishing.'
      },
      {
        question: 'Does the AI agent work with my existing Shopify or WooCommerce store?',
        answer: 'Yes. With one click, your products, prices, variants, and stock status synchronize directly into the AI knowledge engine.'
      }
    ]
  },

  'automation': {
    slug: 'automation',
    name: 'Customer Journey Automation',
    badge: 'Visual Workflow Canvas',
    heroHeadline: 'Automate high-converting customer journeys on autopilot.',
    heroSubheadline: 'Build multi-step, multi-channel customer workflows with drag-and-drop triggers, delay timers, condition splits, and automated fallbacks across Email and WhatsApp.',
    primaryMetric: { value: '3.2x', label: 'Cart Recovery Lift' },
    secondaryMetric: { value: '100%', label: 'Event-Driven Timing' },
    tertiaryMetric: { value: '18 min', label: 'Average Setup Time' },
    icon: Workflow,
    color: 'amber',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    accentBorder: 'border-amber-200',
    whatYouGet: [
      {
        title: 'Visual Drag-and-Drop Canvas',
        description: 'Design comprehensive lifecycle workflows connecting triggers, conditional branches, delay nodes, and channel dispatches.',
        deliverable: 'Visual Journey Canvas'
      },
      {
        title: 'Cross-Channel Fallback Logic',
        description: 'Send an email first. If unopened after 3 hours, automatically trigger a personalized WhatsApp message with a discount incentive.',
        deliverable: 'Omni-Channel Fallbacks'
      },
      {
        title: 'Timezone-Aware Delivery Windows',
        description: 'Ensure marketing broadcasts and recovery reminders are delivered during polite daylight hours (e.g. 10 AM to 8 PM local time).',
        deliverable: 'Quiet Hours Enforcement'
      },
      {
        title: 'Pre-Built E-commerce Playbooks',
        description: 'Deploy battle-tested workflows for abandoned cart recovery, welcome series, post-purchase replenishment, and win-back drips.',
        deliverable: '1-Click Lifecycle Blueprints'
      },
      {
        title: 'Dynamic Webhook & API Triggers',
        description: 'Fire journeys from any web app event (e.g. `order_created`, `trial_started`, `form_submitted`) with custom JSON payloads.',
        deliverable: 'REST & Webhook Triggers'
      },
      {
        title: 'Real-Time Bottleneck Analytics',
        description: 'See exactly how many customers are sitting at each stage of your workflow, drop-off percentages, and total attributed revenue.',
        deliverable: 'Flow Performance Telemetry'
      }
    ],
    howYouBenefit: [
      {
        metric: '+64% Recovered Revenue',
        title: 'Turn abandoned checkouts into completed orders',
        description: 'Automated 30-minute WhatsApp recovery messages achieve up to 64% higher checkout completion than slow generic email reminders.',
        highlight: 'Recover lost sales 24/7'
      },
      {
        metric: 'Zero Manual Work',
        title: 'Set your retention marketing once and let it run',
        description: 'Welcome new users, nurture leads, follow up after delivery, and request Google/Trustpilot reviews entirely on autopilot.',
        highlight: 'Passive continuous revenue'
      },
      {
        metric: 'Eliminate Channel Silos',
        title: 'Coordinate Email & WhatsApp seamlessly',
        description: 'Prevent sending a WhatsApp message if the customer already opened and purchased from the email, avoiding spam and saving money.',
        highlight: 'Smart deduplication'
      }
    ],
    useCases: [
      {
        industry: 'D2C Brands',
        scenario: 'Abandoned Cart 3-Stage Recovery',
        workflow: 'Trigger 1: Email after 15m. If unopened, Trigger 2: WhatsApp with 10% voucher after 2h. Trigger 3: Final expiry warning after 24h.',
        outcome: 'Recovered ₹18,40,000 in monthly revenue.'
      },
      {
        industry: 'SaaS Platforms',
        scenario: 'Trial User Onboarding Sequence',
        workflow: 'Deliver daily feature tutorials. If user has not created a project after 48h, invite to a live 10-minute setup call.',
        outcome: 'Increased free-to-paid conversion rate by 42%.'
      },
      {
        industry: 'Real Estate & Builders',
        scenario: 'Brochure Download Nurture',
        workflow: 'Immediately send PDF brochure on WhatsApp, followed by virtual video walkthrough 24 hours later.',
        outcome: '3.8x increase in scheduled property site visits.'
      }
    ],
    faqs: [
      {
        question: 'Can I pause or edit an active journey without losing contacts?',
        answer: 'Yes. Cocoonmail allows live workflow editing. Contacts currently waiting in delay nodes will smoothly advance according to the updated logic.'
      },
      {
        question: 'How do you prevent sending WhatsApp messages at midnight?',
        answer: 'Our journey builder includes built-in Quiet Hours enforcement. If a delay expires at 1:00 AM, the message is automatically held until 9:00 AM in the recipient’s local timezone.'
      },
      {
        question: 'Are there pre-built templates for common e-commerce journeys?',
        answer: 'Yes. We provide 1-click blueprints for Abandoned Cart Recovery, Post-Purchase Feedback, VIP Tier Upgrades, Inactive Customer Win-back, and Welcome Series.'
      },
      {
        question: 'How many steps can a single customer journey have?',
        answer: 'There is no limit on steps, conditional splits, or duration. You can design short 2-step triggers or complex 60-day multi-tier loyalty workflows.'
      }
    ]
  },

  'segmentation': {
    slug: 'segmentation',
    name: 'Dynamic Behavioral Segmentation',
    badge: 'Real-Time Contact Filtering',
    heroHeadline: 'Send the right message to the exact right customer.',
    heroSubheadline: 'Filter contacts in real time using purchase values, WhatsApp engagement, email open history, and custom attributes. Say goodbye to stale static lists.',
    primaryMetric: { value: 'Real-Time', label: 'Audience Recalculation' },
    secondaryMetric: { value: '48,291 → 4,821', label: 'VIP Precision Filtering' },
    tertiaryMetric: { value: '5.2x', label: 'Higher Click Rates' },
    icon: Users,
    color: 'indigo',
    accentBg: 'bg-indigo-50',
    accentText: 'text-indigo-600',
    accentBorder: 'border-indigo-200',
    whatYouGet: [
      {
        title: 'Multi-Condition Rule Engine',
        description: 'Stack boolean filters combining purchase frequency (RFM), total spent, channel responsiveness, and demographic location.',
        deliverable: 'Dynamic Query Builder'
      },
      {
        title: 'Live Audience Recalculation',
        description: 'Segments update instantly as customers perform actions on your website, open emails, or reply on WhatsApp.',
        deliverable: 'Auto-Updating Smart Lists'
      },
      {
        title: 'Channel Affinity Scoring',
        description: 'Automatically identify whether a customer prefers receiving communication over Email or WhatsApp based on past clicks.',
        deliverable: 'Predictive Channel Routing'
      },
      {
        title: 'Custom Field & Event Sync',
        description: 'Store arbitrary user properties (e.g. shoe size, subscription plan, loyalty tier, city) and segment directly on them.',
        deliverable: 'Custom Schema Engine'
      },
      {
        title: 'Exclusion & Suppression Lists',
        description: 'Easily exclude recent purchasers, churned accounts, or unengaged contacts to maximize campaign ROI and protect deliverability.',
        deliverable: 'Suppression Controls'
      },
      {
        title: 'Lookalike Export & Meta Sync',
        description: 'Push your highest-value customer segments directly into Meta Ads Manager to generate high-performing lookalike audiences.',
        deliverable: 'Meta Custom Audience Bridge'
      }
    ],
    howYouBenefit: [
      {
        metric: 'Zero Message Wastage',
        title: 'Stop blasting everyone with the same message',
        description: 'Sending tailored offers to targeted groups yields significantly higher conversions while cutting unnecessary messaging costs.',
        highlight: 'Targeted ROI optimization'
      },
      {
        metric: '95% Unsubscribe Drop',
        title: 'Keep your subscribers happy and engaged',
        description: 'Customers only receive content relevant to their past purchases and interests, preventing fatigue and spam complaints.',
        highlight: 'Protect brand reputation'
      },
      {
        metric: '5.2x Conversion Boost',
        title: 'Personalized messaging converts dramatically better',
        description: 'Target VIPs who spent over ₹10,000 with exclusive drops, and offer entry-level discounts only to price-sensitive prospects.',
        highlight: 'Maximized revenue per send'
      }
    ],
    useCases: [
      {
        industry: 'D2C Retail',
        scenario: 'Lapsed High-Spender Winback',
        workflow: 'Segment contacts with Lifetime Spend > ₹7,500 who haven’t purchased in 60 days. Send exclusive WhatsApp voucher.',
        outcome: 'Reactivated 28% of inactive VIP customers.'
      },
      {
        industry: 'Subscription SaaS',
        scenario: 'Power-User Referral Drive',
        workflow: 'Identify users who logged in 20+ times this month. Prompt them to invite colleagues for extra workspace seats.',
        outcome: 'Generated 340 organic enterprise referrals in 2 weeks.'
      },
      {
        industry: 'Event Management',
        scenario: 'Geo-Targeted City Roadshow',
        workflow: 'Filter contacts located within 50km of Mumbai and Bangalore for city-specific conference ticket discounts.',
        outcome: 'Sold out venue capacity 3 weeks ahead of schedule.'
      }
    ],
    faqs: [
      {
        question: 'Do I have to manually update dynamic segments before a campaign?',
        answer: 'No. Dynamic segments update automatically in real time. Whenever a customer meets or leaves your rule criteria, they are instantly added or removed.'
      },
      {
        question: 'Can I segment by both Email and WhatsApp behaviors at the same time?',
        answer: 'Yes. You can create rules such as "Opened email in last 7 days AND has never responded to WhatsApp", allowing you to optimize channel spend.'
      },
      {
        question: 'How many attributes can I track per customer?',
        answer: 'You can create unlimited custom fields and event tags per contact, including strings, numbers, booleans, dates, and arrays.'
      },
      {
        question: 'Does segmenting improve my email sender reputation?',
        answer: 'Yes, significantly. Sending to highly engaged subsets dramatically boosts open and click rates, which mailbox providers reward with premium inbox placement.'
      }
    ]
  },

  'ads': {
    slug: 'ads',
    name: 'Meta Ads to WhatsApp',
    badge: 'Direct Acquisition Funnel',
    heroHeadline: 'Turn Instagram & Facebook ad clicks into direct customer conversations.',
    heroSubheadline: 'Connect Meta Click-to-WhatsApp and Status Ads directly into Cocoonmail. Pass ad campaign context and automatically trigger AI qualification to convert ad spend into immediate sales.',
    primaryMetric: { value: '45%', label: 'Lower Cost Per Acquisition' },
    secondaryMetric: { value: 'Instant', label: 'Lead Contact Speed' },
    tertiaryMetric: { value: '100%', label: 'Meta CAPI Attribution' },
    icon: Layers,
    color: 'pink',
    accentBg: 'bg-pink-50',
    accentText: 'text-pink-600',
    accentBorder: 'border-pink-200',
    whatYouGet: [
      {
        title: 'One-Click Ad-to-Chat Deep Linking',
        description: 'Users tapping your Instagram Reel or Facebook Feed ad open an interactive WhatsApp chat with pre-filled promotional context.',
        deliverable: 'Click-to-WhatsApp Bridge'
      },
      {
        title: 'Campaign & UTM Payload Capture',
        description: 'Automatically record Ad ID, Creative Name, and Audience Source to measure exactly which creative generated each revenue rupee.',
        deliverable: 'Ad Attribution Tracker'
      },
      {
        title: 'Instant AI First-Touch Qualification',
        description: 'Respond in under 2 seconds when ad intent is hottest. AI greets the lead, answers pricing questions, and collects contact details.',
        deliverable: 'Autonomous Lead Qualifier'
      },
      {
        title: 'Meta Conversions API (CAPI) Feedback',
        description: 'Feed offline and in-chat purchase conversions back to Meta Ads Manager to optimize algorithm bidding without cookie loss.',
        deliverable: 'Server-Side CAPI Sync'
      },
      {
        title: 'Status Ad Retargeting Broadcasts',
        description: 'Target warm prospects viewing WhatsApp Status updates with timely promotions and limited-time discount codes.',
        deliverable: 'Status Retargeting Engine'
      },
      {
        title: 'High-Intent Lead Distribution',
        description: 'Automatically route qualified high-ticket enterprise or real estate leads to senior sales reps with complete conversation history.',
        deliverable: 'CRM Lead Routing'
      }
    ],
    howYouBenefit: [
      {
        metric: '45% Lower CAC',
        title: 'Cut customer acquisition costs in half',
        description: 'Bypass leaky web landing pages. Engaging leads directly in WhatsApp delivers significantly higher conversion rates than traditional websites.',
        highlight: 'Zero mobile website drop-off'
      },
      {
        metric: 'Sub-2s Lead Contact',
        title: 'Engage buyers while their interest is at its peak',
        description: 'Contacting a lead within the first 60 seconds increases qualification odds by 391% compared to traditional form callbacks.',
        highlight: 'Immediate conversational conversion'
      },
      {
        metric: 'Accurate ROAS Bidding',
        title: 'Train Meta algorithms on real completed purchases',
        description: 'By streaming in-chat UPI/card sales back to Meta via CAPI, ad algorithms optimize for buyers with high purchasing power.',
        highlight: 'Superior ad algorithm targeting'
      }
    ],
    useCases: [
      {
        industry: 'D2C Cosmetics & Skincare',
        scenario: 'Instagram Reel Click-to-WhatsApp Offer',
        workflow: 'User sees viral skincare reel, taps ad to WhatsApp. AI suggests routine for acne-prone skin and provides ₹200 discount code.',
        outcome: 'Generated 3.8x ROAS on a ₹5,00,000 ad spend.'
      },
      {
        industry: 'Automobile Dealerships',
        scenario: 'Test Drive Booking Campaign',
        workflow: 'Prospect clicks Facebook ad for new electric SUV. AI collects city, preferred showroom, and books Saturday test drive.',
        outcome: 'Decreased test-drive booking cost from ₹1,200 to ₹380.'
      },
      {
        industry: 'Financial Services & Loans',
        scenario: 'Loan Eligibility Check',
        workflow: 'Lead clicks Instagram ad. WhatsApp flow calculates estimated monthly EMI and routes qualified applicant to loan officer.',
        outcome: 'Completed 1,400 loan applications in one weekend.'
      }
    ],
    faqs: [
      {
        question: 'Do I need a Meta Ads account to use this feature?',
        answer: 'Yes. You connect your existing Meta Ads Manager account to Cocoonmail to sync ad creatives, capture UTM parameters, and activate CAPI tracking.'
      },
      {
        question: 'How does Meta Conversions API (CAPI) help my ad campaigns?',
        answer: 'CAPI sends verified purchase and lead events directly from Cocoonmail servers to Meta, bypassing iOS ad blockers and safari cookie restrictions for optimal ad delivery.'
      },
      {
        question: 'Can the AI agent handle traffic from multiple concurrent ad campaigns?',
        answer: 'Yes. The AI identifies which ad creative the user clicked and tailors its greeting, pricing, and product recommendations to that specific campaign.'
      },
      {
        question: 'Does Click-to-WhatsApp work on both Instagram and Facebook?',
        answer: 'Yes. It works seamlessly across Instagram Feed, Instagram Stories, Instagram Reels, Facebook Feed, and Marketplace placements.'
      }
    ]
  },

  'catalog': {
    slug: 'catalog',
    name: 'In-Chat Product Catalog',
    badge: 'Conversational Commerce',
    heroHeadline: 'Showcase and sell your entire product line directly in WhatsApp.',
    heroSubheadline: 'Sync e-commerce product feeds from Shopify, WooCommerce, or custom databases into native interactive WhatsApp catalog cards, carousels, and variant selectors.',
    primaryMetric: { value: '3x', label: 'Higher Checkout Rate' },
    secondaryMetric: { value: 'Real-Time', label: 'Inventory Synchronization' },
    tertiaryMetric: { value: '30 Single/Multi', label: 'Product Card Carousels' },
    icon: ShoppingBag,
    color: 'rose',
    accentBg: 'bg-rose-50',
    accentText: 'text-rose-600',
    accentBorder: 'border-rose-200',
    whatYouGet: [
      {
        title: 'Native Meta Catalog Synchronization',
        description: 'Automatically mirror your store’s product titles, photos, descriptions, prices, and stock statuses into Meta Commerce Manager.',
        deliverable: 'Real-Time Feed Sync'
      },
      {
        title: 'Multi-Product Interactive Carousels',
        description: 'Send swipeable product cards directly in customer chat streams so shoppers can browse collections without leaving WhatsApp.',
        deliverable: 'Interactive WhatsApp Carousels'
      },
      {
        title: 'Size, Color & Variant Selectors',
        description: 'Shoppers select exact clothing sizes, shoe variants, or tech specifications natively inside the chat interface.',
        deliverable: 'Variant Pickers'
      },
      {
        title: 'In-Stock Availability Guards',
        description: 'Prevent overselling. Products out of stock in your warehouse are automatically hidden from WhatsApp catalog cards in real time.',
        deliverable: 'Live Stock Validation'
      },
      {
        title: 'One-Tap Cart Additions',
        description: 'Customers build a shopping cart directly inside WhatsApp and review subtotal prices before proceeding to payment.',
        deliverable: 'Conversational Cart System'
      },
      {
        title: 'Automated Restock & Price Drop Alerts',
        description: 'Trigger automated WhatsApp alerts to shoppers who favorited or viewed items that recently dropped in price or returned to stock.',
        deliverable: 'Inventory Trigger Engine'
      }
    ],
    howYouBenefit: [
      {
        metric: '3x Higher Conversion',
        title: 'Eliminate clunky mobile website loading times',
        description: 'Shoppers browse and select items instantly on WhatsApp without slow mobile internet lag or forgotten passwords.',
        highlight: 'Zero app installation required'
      },
      {
        metric: 'Higher Average Order Value',
        title: 'Curated recommendations drive upsells',
        description: 'When buying running shoes, the chat automatically offers matching socks and water bottles with a one-tap bundle discount.',
        highlight: '+22% average basket size'
      },
      {
        metric: 'Effortless Maintenance',
        title: 'Update your inventory once in Shopify',
        description: 'Any price change, sale discount, or sold-out item updated in your store reflects across all WhatsApp chats instantly.',
        highlight: 'Zero manual catalog maintenance'
      }
    ],
    useCases: [
      {
        industry: 'D2C Fashion & Apparel',
        scenario: 'New Collection Weekend Launch',
        workflow: 'Broadcast curated 10-item seasonal collection carousel to VIP tier. Users tap size UK 9 and click purchase.',
        outcome: 'Generated 420 direct in-chat orders within 3 hours.'
      },
      {
        industry: 'Grocery & Organic Food',
        scenario: 'Weekly Subscription Reorder',
        workflow: 'Send Monday morning replenishment cart card containing customer’s frequent organic produce items with 1-tap reorder.',
        outcome: '78% weekly customer reorder retention rate.'
      },
      {
        industry: 'Electronics & Hardware',
        scenario: 'Spare Parts & Accessories Finder',
        workflow: 'Customer enters appliance model number. Chat displays exact replacement filter and battery accessories.',
        outcome: 'Eliminated ordering errors by 89%.'
      }
    ],
    faqs: [
      {
        question: 'Does Cocoonmail automatically sync with my Shopify store?',
        answer: 'Yes. Our 1-click Shopify connector syncs products, inventory, prices, and media automatically every 15 minutes or immediately on webhook trigger.'
      },
      {
        question: 'Can customers buy multiple products in one WhatsApp order?',
        answer: 'Yes. WhatsApp natively supports multi-item carts where customers add several items, review the total, and check out in a single transaction.'
      },
      {
        question: 'What happens if an item runs out of stock while in a customer’s cart?',
        answer: 'Cocoonmail performs an instant stock check before payment generation, politely notifying the customer and suggesting alternative variants if an item sold out.'
      },
      {
        question: 'Can I restrict certain products to VIP customers only?',
        answer: 'Yes. You can create specialized private catalogs and early-access drops accessible only to specific behavioral segments.'
      }
    ]
  },

  'payments': {
    slug: 'payments',
    name: 'Conversational Payments',
    badge: 'Instant In-Chat Checkout',
    heroHeadline: 'Accept payments inside chat with zero checkout friction.',
    heroSubheadline: 'Collect payments on WhatsApp and Email using native UPI, Razorpay, Stripe, and credit cards. Send instant receipts and trigger automated order dispatch with sub-second confirmation.',
    primaryMetric: { value: '64%', label: 'Drop-off Reduction' },
    secondaryMetric: { value: 'Sub-3s', label: 'Payment Confirmation' },
    tertiaryMetric: { value: '100%', label: 'PCI-DSS Compliant' },
    icon: CreditCard,
    color: 'teal',
    accentBg: 'bg-teal-50',
    accentText: 'text-teal-600',
    accentBorder: 'border-teal-200',
    whatYouGet: [
      {
        title: 'Native UPI 1-Tap Mobile Intent',
        description: 'Indian customers tap to open Google Pay, PhonePe, or Paytm instantly without typing card numbers or waiting for slow SMS OTPs.',
        deliverable: 'Native UPI Payment Gateway'
      },
      {
        title: 'Global Card & Stripe Integration',
        description: 'Support international credit and debit cards, Apple Pay, and Google Pay with automatic currency conversion across 135+ currencies.',
        deliverable: 'Global Payment Gateway'
      },
      {
        title: 'Instant In-Chat Order Receipts',
        description: 'Generate branded PDF invoices and WhatsApp confirmation cards with tracking numbers immediately upon successful transaction.',
        deliverable: 'Automated Invoice Generator'
      },
      {
        title: 'Automated Abandoned Payment Recovery',
        description: 'If a payment link expires or fails due to bank server timeouts, automatically send an alternate payment link with a friendly nudge.',
        deliverable: 'Failed Payment Recovery'
      },
      {
        title: 'Real-Time ERP & Webhook Settlement',
        description: 'Instant HMAC-signed webhook dispatches to Shopify, SAP, or custom databases to update inventory and book revenue.',
        deliverable: 'Webhook Event Stream'
      },
      {
        title: 'Cash on Delivery (COD) Verification',
        description: 'Verify phone number and address via WhatsApp before confirming COD orders, slashing expensive RTO (Return to Origin) rates.',
        deliverable: 'Anti-RTO COD Shield'
      }
    ],
    howYouBenefit: [
      {
        metric: '64% Drop-Off Reduction',
        title: 'Eliminate 5-step website checkout friction',
        description: 'By removing logins, addresses, and slow page reloads, customers complete payment in under 15 seconds directly from chat.',
        highlight: 'Frictionless checkout flow'
      },
      {
        metric: '40% Lower RTO Losses',
        title: 'Stop shipping fake or unverified COD packages',
        description: 'Confirm high-risk COD orders via 1-tap WhatsApp buttons, or incentivize instant UPI pre-payment with a small 5% discount.',
        highlight: 'Slash logistics return expenses'
      },
      {
        metric: '100% PCI-DSS Security',
        title: 'Enterprise security without holding card data',
        description: 'Payment rails are tokenized and processed through certified Tier-1 gateways (Razorpay, Stripe) with bank-grade encryption.',
        highlight: 'Zero compliance liability'
      }
    ],
    useCases: [
      {
        industry: 'D2C Retail & Food',
        scenario: 'Instant UPI WhatsApp Order',
        workflow: 'Customer confirms shoe size, taps "Pay with UPI". PhonePe opens, payment completes in 4 seconds. Order dispatched.',
        outcome: 'Zero payment drop-offs across 3,200 orders.'
      },
      {
        industry: 'B2B Services & Consulting',
        scenario: 'Retainer Invoice Payment',
        workflow: 'Deliver monthly retainer invoice link via Email & WhatsApp. Client pays with corporate credit card.',
        outcome: 'Reduced accounts receivable payment collection time from 21 days to 24 hours.'
      },
      {
        industry: 'Education & Courses',
        scenario: 'Installment Tuition Payments',
        workflow: 'Send monthly EMI tuition reminder link on WhatsApp. Student pays with one tap.',
        outcome: '94% on-time tuition collection rate.'
      }
    ],
    faqs: [
      {
        question: 'Which payment gateways are supported?',
        answer: 'Cocoonmail natively connects with Razorpay, Cashfree, PayU, and Stripe for India and international markets, supporting UPI, credit/debit cards, net banking, and digital wallets.'
      },
      {
        question: 'Does Cocoonmail take a transaction fee on payments?',
        answer: 'No. Cocoonmail does not charge any percentage fee on your transactions. You only pay your standard negotiated payment gateway fees directly to Razorpay or Stripe.'
      },
      {
        question: 'How does Cash on Delivery (COD) confirmation work?',
        answer: 'When a COD order is placed, an automated WhatsApp interactive message prompts the customer to tap "Confirm Order" or "Cancel". Unconfirmed orders are flagged before dispatch.'
      },
      {
        question: 'Are payment receipts automatically generated?',
        answer: 'Yes. Upon payment confirmation, a branded PDF tax receipt and WhatsApp order summary are automatically dispatched to the customer.'
      }
    ]
  },

  'analytics': {
    slug: 'analytics',
    name: 'Closed-Loop Revenue Analytics',
    badge: 'Cross-Channel Attribution',
    heroHeadline: 'Track every rupee of revenue back to the exact message.',
    heroSubheadline: 'Stop guessing which marketing campaign drove sales. Measure open rates, click-throughs, conversational order values, and multi-touch customer attribution from a single unified dashboard.',
    primaryMetric: { value: '100%', label: 'Attributed Revenue Tracking' },
    secondaryMetric: { value: 'Real-Time', label: 'Dashboard Telemetry' },
    tertiaryMetric: { value: 'Multi-Touch', label: 'Cross-Channel Models' },
    icon: BarChart3,
    color: 'cyan',
    accentBg: 'bg-cyan-50',
    accentText: 'text-cyan-600',
    accentBorder: 'border-cyan-200',
    whatYouGet: [
      {
        title: 'Direct Message Revenue Attribution',
        description: 'Attribute sales directly to individual email newsletters, automated WhatsApp cart recovery flows, or ad campaigns.',
        deliverable: 'Revenue Attribution Engine'
      },
      {
        title: 'Multi-Touch Cross-Channel Funnels',
        description: 'Understand how a customer who first clicked an Instagram ad, opened an email, and purchased on WhatsApp navigated the funnel.',
        deliverable: 'Journey Attribution Modeling'
      },
      {
        title: 'Real-Time Delivery & Open Rate Telemetry',
        description: 'Monitor live message dispatches, sub-second delivery status, read receipts, and link click counts as they happen.',
        deliverable: 'Live Telemetry Dashboard'
      },
      {
        title: 'AI Agent Performance Metrics',
        description: 'Track how many customer chats your AI agent resolved autonomously, product recommendation hit-rates, and assisted sales revenue.',
        deliverable: 'AI Conversion Analytics'
      },
      {
        title: 'Cohort & Customer Lifetime Value (CLV)',
        description: 'Analyze repeat purchase intervals, customer retention curves, and average order values across different acquisition sources.',
        deliverable: 'Cohort Retention Reports'
      },
      {
        title: 'Executive PDF & CSV Exporting',
        description: 'Generate automated weekly performance digests and raw CSV data exports for board presentations and marketing stakeholders.',
        deliverable: 'Automated Executive Reports'
      }
    ],
    howYouBenefit: [
      {
        metric: 'True Marketing ROI',
        title: 'Double down on high-performing campaigns',
        description: 'Know with surgical precision which WhatsApp broadcast or email sequence drives profit and which campaigns to stop spending on.',
        highlight: 'Data-driven marketing budget allocation'
      },
      {
        metric: 'Eliminate Vanity Metrics',
        title: 'Focus on top-line revenue, not just open rates',
        description: 'While other platforms stop at open rates, Cocoonmail tracks the entire funnel through to paid transactions in your bank account.',
        highlight: 'Direct business revenue proof'
      },
      {
        metric: 'Optimize Customer Journeys',
        title: 'Identify where customers drop off',
        description: 'Pinpoint friction points in your onboarding or cart recovery workflows and optimize copy, timing, or channel selection.',
        highlight: 'Continuous conversion improvement'
      }
    ],
    useCases: [
      {
        industry: 'D2C Retail',
        scenario: 'Festive Mega Sale Attribution',
        workflow: 'Compare revenue generated by Email VIP list vs WhatsApp flash broadcast during Diwali sale.',
        outcome: 'Identified WhatsApp drove 3.4x higher revenue per message delivered.'
      },
      {
        industry: 'B2B SaaS',
        scenario: 'Onboarding Campaign Optimization',
        workflow: 'Track which email onboarding step correlates highest with paid subscription upgrades.',
        outcome: 'Revamping step 3 increased overall trial conversion by 24%.'
      },
      {
        industry: 'Marketing Agencies',
        scenario: 'Client Performance Reporting',
        workflow: 'Deliver white-label PDF reports proving exact ROAS and sales numbers generated for 20 brand clients.',
        outcome: 'Increased agency client retention to 96%.'
      }
    ],
    faqs: [
      {
        question: 'How does Cocoonmail track revenue back to a WhatsApp chat?',
        answer: 'Each in-chat checkout link and dynamic product card includes a unique encrypted token tying the resulting payment transaction directly to that customer’s chat thread.'
      },
      {
        question: 'Can I export raw event data to Google BigQuery or Snowflake?',
        answer: 'Yes. Cocoonmail provides automated data warehouse export connectors and webhook streams for enterprise business intelligence pipelines.'
      },
      {
        question: 'Does the analytics dashboard support multiple team currencies?',
        answer: 'Yes. You can switch display currencies between INR (₹), USD ($), EUR (€), and GBP (£) with historical exchange rate normalization.'
      },
      {
        question: 'How fast do analytics update after a campaign is sent?',
        answer: 'Dispatches, delivery acknowledgments, open rates, and payment webhooks update in real time with sub-5-second dashboard latency.'
      }
    ]
  },

  'transactional-email': {
    slug: 'transactional-email',
    name: 'Transactional Email API & SMTP',
    badge: 'Sub-45ms Edge Delivery',
    heroHeadline: 'Mission-critical transactional email with guaranteed edge delivery.',
    heroSubheadline: 'Dispatch order receipts, password resets, verification OTPs, and system alerts with dedicated IP pools, sub-45ms latency, and 99.8% inbox placement.',
    primaryMetric: { value: '< 45ms', label: 'Average Edge Latency' },
    secondaryMetric: { value: '99.99%', label: 'Infrastructure Uptime' },
    tertiaryMetric: { value: '99.8%', label: 'Inbox Placement Rate' },
    icon: Zap,
    color: 'blue',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-200',
    whatYouGet: [
      {
        title: 'High-Throughput Global SMTP Relay',
        description: 'Standard RFC-compliant SMTP endpoints distributed across US, EU, and APAC edge regions for ultra-fast connection speeds.',
        deliverable: 'Global SMTP Relay'
      },
      {
        title: 'Type-Safe REST APIs & Official SDKs',
        description: 'Send emails with clean JSON payloads using official SDKs for Node.js, Python, Go, PHP, and cURL with sub-second response times.',
        deliverable: 'REST API & Multi-Language SDKs'
      },
      {
        title: 'Isolated Dedicated IP Pools',
        description: 'Never suffer from shared IP reputation degradation. Your transactional emails are dispatched over isolated, warmed IP addresses.',
        deliverable: 'Dedicated Clean IP Pools'
      },
      {
        title: 'Real-Time Webhook Event Stream',
        description: 'Receive instant HMAC-signed callbacks for dispatches, deliveries, bounces, spam complaints, opens, and link clicks.',
        deliverable: 'Event Webhook Stream'
      },
      {
        title: 'Dynamic Transactional Templates',
        description: 'Store templates on Cocoonmail servers and inject variables like order totals and items via API, separating design from backend code.',
        deliverable: 'Server-Hosted Templates'
      },
      {
        title: '30-Day Searchable Message Log',
        description: 'Debug customer delivery issues with full message header inspection, SMTP transaction logs, and mailbox provider responses.',
        deliverable: 'Diagnostic Audit Log'
      }
    ],
    howYouBenefit: [
      {
        metric: '< 45ms Latency',
        title: 'OTPs and password resets arrive instantly',
        description: 'Customers never wait around for verification codes or purchase receipts, preventing registration drop-offs and support tickets.',
        highlight: 'Lightning-fast customer verification'
      },
      {
        metric: '99.99% Guaranteed SLA',
        title: 'Enterprise reliability you can depend on',
        description: 'Our distributed multi-region edge infrastructure ensures your application’s critical notification pipelines never go down.',
        highlight: 'Continuous high availability'
      },
      {
        metric: 'Zero Reputation Contamination',
        title: 'Marketing blasts never hurt transactional emails',
        description: 'By separating marketing newsletters from transactional notifications onto distinct IP pools, receipts always reach the primary inbox.',
        highlight: 'Isolated deliverability architecture'
      }
    ],
    useCases: [
      {
        industry: 'FinTech & Banking',
        scenario: 'Login 2FA OTP Delivery',
        workflow: 'User initiates login. System calls Cocoonmail API. 6-digit OTP delivered to user inbox in 800 milliseconds.',
        outcome: '99.98% delivery success across 4,000,000 monthly authentications.'
      },
      {
        industry: 'E-commerce & Marketplaces',
        scenario: 'Order Receipt & Invoice Generation',
        workflow: 'Customer completes purchase. Webhook triggers dynamic template with order item breakdown and PDF receipt.',
        outcome: 'Zero customer complaints regarding missing invoices.'
      },
      {
        industry: 'SaaS & Cloud Infrastructure',
        scenario: 'Critical System Alert Notifications',
        workflow: 'Server CPU exceeds threshold. Automated alert dispatches to engineering team on-call rotation.',
        outcome: 'Immediate incident triage with zero email delays.'
      }
    ],
    faqs: [
      {
        question: 'How does Cocoonmail compare to SendGrid, Mailgun, or AWS SES?',
        answer: 'Cocoonmail offers lower latency edge relays, native WhatsApp fallback integration, transparent flat pricing with zero hidden surcharges, and direct engineering support.'
      },
      {
        question: 'Can I use standard SMTP credentials with WordPress or existing frameworks?',
        answer: 'Yes. Cocoonmail provides standard SMTP host, port, username, and password credentials compatible with any framework, plugin, or programming language.'
      },
      {
        question: 'Are transactional emails kept separate from marketing campaigns?',
        answer: 'Yes. Transactional emails utilize dedicated IP pools and separate queue infrastructure to ensure marketing campaign volumes never throttle receipts or alerts.'
      },
      {
        question: 'Can I host templates in Cocoonmail and trigger them via API?',
        answer: 'Yes. You can design templates visually in our editor and trigger them by passing template IDs and JSON variable payloads via our REST API.'
      }
    ]
  },

  'templates': {
    slug: 'templates',
    name: 'Interactive Template Engine',
    badge: 'Pre-Approved Design System',
    heroHeadline: 'Launch compliant, high-converting templates in minutes.',
    heroSubheadline: 'Access a library of pre-approved Meta WhatsApp templates and responsive email layouts designed for maximum engagement, instant compliance, and brand consistency.',
    primaryMetric: { value: '100+', label: 'Pre-Approved Designs' },
    secondaryMetric: { value: 'Sub-15m', label: 'Meta Approval Speed' },
    tertiaryMetric: { value: '100%', label: 'Mobile Responsive' },
    icon: Sliders,
    color: 'blue',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-200',
    whatYouGet: [
      {
        title: 'Meta WhatsApp Template Library',
        description: 'Vetted templates for marketing announcements, OTP authentications, delivery updates, and order confirmations ready for approval.',
        deliverable: 'Pre-Approved WhatsApp Library'
      },
      {
        title: 'Interactive CTA & Quick Reply Buttons',
        description: 'Configure 1-tap phone dialers, external website links, and quick reply action chips that boost conversation response rates.',
        deliverable: 'Interactive Button Configurator'
      },
      {
        title: 'Dynamic Media Header Support',
        description: 'Attach video teasers, high-resolution product photography, and PDF brochures to your WhatsApp marketing headers.',
        deliverable: 'Rich Media Headers'
      },
      {
        title: 'Automated Meta Compliance Validation',
        description: 'Our built-in linting engine flags policy risks (e.g. prohibited words, missing opt-out clauses) before submission to Meta.',
        deliverable: 'Pre-Submission Policy Linter'
      },
      {
        title: 'Responsive Email Component Library',
        description: 'Drag-and-drop buttons, countdown timers, product grids, social icons, and dividers that render identically across all email clients.',
        deliverable: 'Modular Email Components'
      },
      {
        title: 'Brand Asset Kit & Typography Sync',
        description: 'Store brand hex codes, logos, font pairings, and footer disclaimers to ensure uniform team communication across all channels.',
        deliverable: 'Brand Design System'
      }
    ],
    howYouBenefit: [
      {
        metric: 'Zero Template Rejections',
        title: 'Pass Meta review on the very first try',
        description: 'Our compliance linter checks your copy against official Meta Business Messaging policies before submission, preventing delays.',
        highlight: 'Fast-track template approvals'
      },
      {
        metric: '75% Faster Campaign Launch',
        title: 'Never build a newsletter from scratch again',
        description: 'Choose from 100+ vetted e-commerce, SaaS, agency, and event templates, customize the copy and imagery, and schedule.',
        highlight: 'Turnkey marketing templates'
      },
      {
        metric: 'Uniform Brand Consistency',
        title: 'Keep multi-agent teams on-brand',
        description: 'Your sales reps, support agents, and growth marketers use the same verified templates, ensuring consistent brand voice.',
        highlight: 'Professional brand identity'
      }
    ],
    useCases: [
      {
        industry: 'D2C Brands',
        scenario: 'Diwali & Black Friday Promotions',
        workflow: 'Select festive countdown template, add VIP product cards and coupon button, and submit to Meta.',
        outcome: 'Approved in 8 minutes and delivered to 50,000 customers.'
      },
      {
        industry: 'Healthcare Clinics',
        scenario: 'Diagnostic Report Ready Notification',
        workflow: 'Deploy pre-approved utility template with secure encrypted PDF download attachment button.',
        outcome: 'Zero patient delivery friction.'
      },
      {
        industry: 'FinTech & Lending',
        scenario: 'Authentication OTP Dispatch',
        workflow: 'Deploy pre-approved 1-tap autofill OTP template for mobile login verification.',
        outcome: 'Sub-second delivery with zero spam blocking.'
      }
    ],
    faqs: [
      {
        question: 'Why does Meta require template approval for WhatsApp?',
        answer: 'Meta requires business-initiated messages to be pre-approved to protect users from spam and ensure compliance with their messaging policies.'
      },
      {
        question: 'How long does WhatsApp template approval take?',
        answer: 'With Cocoonmail’s official Cloud API connection, most templates are approved by Meta’s automated review within 2 to 15 minutes.'
      },
      {
        question: 'Can I include dynamic variables like customer names in templates?',
        answer: 'Yes. You can use dynamic placeholders like {{1}}, {{2}} for customer names, tracking links, order numbers, and promotional voucher codes.'
      },
      {
        question: 'Can I clone and customize templates across multiple accounts?',
        answer: 'Yes. Marketing agencies and enterprise organizations can clone pre-approved templates across subaccounts with a single click.'
      }
    ]
  }
};
