import { JourneyStep, PricingPlan, Testimonial, ApiSnippet } from '../types';

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'meta-ads',
    stepNumber: 1,
    label: 'Meta Ads',
    title: 'High-Intent Acquisition via Click-to-WhatsApp',
    shortDesc: 'Drive verified buyers straight from Instagram & Facebook ads into high-converting chats.',
    whatHappensToCustomer: 'Aarav discovers a tailored Instagram Reel showcasing the new Monsoon Waterproof Sneaker. With one tap, instead of a slow landing page, WhatsApp opens instantly with a pre-filled inquiry.',
    customerName: 'Aarav Sharma',
    channel: 'Instagram & Facebook Ads',
    metricLabel: 'Ad-to-Chat Conversion',
    metricValue: '48.2%',
    sampleUiType: 'ad'
  },
  {
    id: 'lead',
    stepNumber: 2,
    label: 'Lead Capture',
    title: 'Zero-Form Instant Identity Verification',
    shortDesc: 'Capture verified phone numbers, names, and intent without friction-heavy forms.',
    whatHappensToCustomer: 'The moment Aarav sends the greeting, CocoonMail automatically captures his verified phone number, profile name, and source ad campaign ID into the customer data platform.',
    customerName: 'Aarav Sharma',
    channel: 'WhatsApp Business API',
    metricLabel: 'Lead Drop-off Rate',
    metricValue: '< 4%',
    sampleUiType: 'lead'
  },
  {
    id: 'segment',
    stepNumber: 3,
    label: 'Segment',
    title: 'Live Dynamic Customer Segmentation',
    shortDesc: 'Classify users automatically based on ad campaign, purchase history, and intent signals.',
    whatHappensToCustomer: 'CocoonMail automatically tags Aarav into the "Monsoon Drop · High Intent · Footwear" live segment, recalculating target cohort sizes in real time across all active channels.',
    customerName: 'Aarav Sharma',
    channel: 'Cocoon CDP',
    metricLabel: 'Live Cohort Size',
    metricValue: '28,450',
    sampleUiType: 'segment'
  },
  {
    id: 'message',
    stepNumber: 4,
    label: 'Email / WhatsApp',
    title: 'Unified Two-Channel Orchestration',
    shortDesc: 'Deliver interactive WhatsApp templates and rich HTML email based on preference.',
    whatHappensToCustomer: 'Aarav immediately receives an official verified WhatsApp interactive greeting with carousel cards, while a branded high-res lookbook email is queued as a backup.',
    customerName: 'Aarav Sharma',
    channel: 'Omnichannel Message',
    metricLabel: 'Message Open Rate',
    metricValue: '96.4%',
    sampleUiType: 'message'
  },
  {
    id: 'ai-conversation',
    stepNumber: 5,
    label: 'AI Conversation',
    title: 'Context-Aware AI Shopping Agent',
    shortDesc: 'Understands customer intent in natural language and handles sizing, stock, and FAQs.',
    whatHappensToCustomer: 'Aarav asks: "Do you have these in UK 9 and are they truly waterproof for Mumbai rains?" The Cocoon AI Agent queries the live inventory catalog, confirms stock, and sends a 15-second product demo video.',
    customerName: 'Aarav Sharma',
    channel: 'WhatsApp AI Agent',
    metricLabel: 'AI Resolution Rate',
    metricValue: '89.1%',
    sampleUiType: 'ai'
  },
  {
    id: 'catalog',
    stepNumber: 6,
    label: 'Catalog',
    title: 'Native In-Chat Product Showcase',
    shortDesc: 'Display real-time synchronized collections directly inside WhatsApp and rich emails.',
    whatHappensToCustomer: 'The AI sends an interactive WhatsApp Catalog card showing "Monsoon Tech Sneaker (HydroBlack, UK 9)" with dynamic price, quantity counter, and a single "Buy Now" button.',
    customerName: 'Aarav Sharma',
    channel: 'Interactive Meta Catalog',
    metricLabel: 'Catalog Click-Through',
    metricValue: '42.7%',
    sampleUiType: 'catalog'
  },
  {
    id: 'payment',
    stepNumber: 7,
    label: 'Payment',
    title: 'Native Frictionless In-Chat Checkout',
    shortDesc: 'Accept UPI, Cards, Apple Pay, and Net Banking without navigating away.',
    whatHappensToCustomer: 'Aarav taps "Buy Now", selects Google Pay / UPI intent directly in WhatsApp, approves the transaction with fingerprint biometric, and completes the purchase in 12 seconds.',
    customerName: 'Aarav Sharma',
    channel: 'UPI & Global Cards',
    metricLabel: 'Checkout Completion',
    metricValue: '78.5%',
    sampleUiType: 'payment'
  },
  {
    id: 'analytics',
    stepNumber: 8,
    label: 'Analytics',
    title: 'End-to-End Attribution & Journey Revenue',
    shortDesc: 'Attribute every rupee/dollar directly from original Meta Ad spend to final transaction.',
    whatHappensToCustomer: 'The transaction logs in CocoonMail Analytics. The Meta Conversion API immediately fires an offline purchase event, optimizing the ad algorithm for higher ROAS.',
    customerName: 'Aarav Sharma',
    channel: 'Attribution & Meta CAPI',
    metricLabel: 'Verified Campaign ROAS',
    metricValue: '7.8x',
    sampleUiType: 'analytics'
  },
  {
    id: 'automation',
    stepNumber: 9,
    label: 'Automation',
    title: 'Triggered Multi-Step Post-Purchase Flow',
    shortDesc: 'Automate delivery tracking on WhatsApp and cross-sell nurture on Email.',
    whatHappensToCustomer: 'Visual workflow triggers: Aarav gets an automated WhatsApp order confirmation with real-time tracking link, plus an Email receipt with a care guide 24 hours before delivery.',
    customerName: 'Aarav Sharma',
    channel: 'Workflow Engine',
    metricLabel: 'Workflow Speed',
    metricValue: '< 180ms',
    sampleUiType: 'automation'
  },
  {
    id: 'next-campaign',
    stepNumber: 10,
    label: 'Next Campaign',
    title: 'Predictive Re-engagement & VIP Status',
    shortDesc: 'Automatically move high-LTV customers into exclusive early access segments.',
    whatHappensToCustomer: 'Having completed his first order, Aarav is automatically graduated into the "VIP Tier 1" live segment. In 30 days, he receives an exclusive invite to the hydrophobic apparel drop.',
    customerName: 'Aarav Sharma',
    channel: 'Automated Lifecycle',
    metricLabel: 'Repeat Purchase Lift',
    metricValue: '+34%',
    sampleUiType: 'segment'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for emerging brands and small businesses beginning multichannel engagement.',
    baseMonthlyPriceUSD: 29,
    baseMonthlyPriceINR: 2399,
    includedContacts: 5000,
    includedEmails: 50000,
    includedWhatsAppConversations: 1000,
    includedAiAgentQueries: 500,
    teamSeats: 2,
    features: [
      'Visual Email & WhatsApp Builder',
      'Contact segmentation & CSV sync',
      'Pre-built e-commerce automation recipes',
      'Meta Click-to-WhatsApp ad tracking',
      'Standard REST API & Webhooks',
      'Community & email support'
    ],
    ctaLabel: 'Start Free Trial'
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular',
    popular: true,
    tagline: 'For fast-scaling D2C, SaaS, and retail businesses needing AI-powered sales.',
    baseMonthlyPriceUSD: 89,
    baseMonthlyPriceINR: 7299,
    includedContacts: 25000,
    includedEmails: 250000,
    includedWhatsAppConversations: 5000,
    includedAiAgentQueries: 5000,
    teamSeats: 5,
    features: [
      'Everything in Starter',
      'Autonomous WhatsApp AI Sales Agents',
      'Dynamic real-time live segments',
      'Native in-chat Catalog & UPI/Stripe checkout',
      'Transactional email engine (dedicated IPs)',
      'Meta Conversion API (CAPI) sync',
      'Multi-agent shared team inbox',
      'Priority live chat support'
    ],
    ctaLabel: 'Start 14-Day Free Trial'
  },
  {
    id: 'scale',
    name: 'Scale & Enterprise',
    badge: 'Maximum Power',
    tagline: 'For high-volume brands, agencies, and large businesses demanding custom SLAs.',
    baseMonthlyPriceUSD: 249,
    baseMonthlyPriceINR: 19999,
    includedContacts: 100000,
    includedEmails: 1000000,
    includedWhatsAppConversations: 25000,
    includedAiAgentQueries: 25000,
    teamSeats: 20,
    features: [
      'Everything in Growth',
      'Unlimited custom workflows & branching',
      'Multi-brand agency workspace & billing',
      'Custom fine-tuned AI agent guardrails',
      'Green tick WhatsApp verification assistance',
      'Dedicated technical account manager',
      '99.99% enterprise uptime SLA',
      'Custom contractual data residency'
    ],
    ctaLabel: 'Talk to Sales'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Switching from fragmented tools to CocoonMail allowed us to turn WhatsApp from a cost center into our #1 revenue channel. Our cart recovery went from 14% on email alone to 62% combined.",
    author: "Pooja Singhania",
    role: "Chief Growth Officer",
    company: "Artisan Leather Co.",
    location: "Mumbai & Singapore",
    metric: "+285% repeat revenue",
    channel: "WhatsApp + Email"
  },
  {
    quote: "The ability to run Click-to-WhatsApp ads, qualify prospects using the AI agent, and accept UPI fees right in the conversation tripled our enrollment conversion rate.",
    author: "Karthik Venkat",
    role: "VP Marketing",
    company: "NextGen EdTech",
    location: "Bengaluru",
    metric: "3.8x faster qualification",
    channel: "Meta Ads + AI Agent"
  },
  {
    quote: "Our developers set up the transactional email and WhatsApp API in less than 20 minutes. Having webhooks trigger automated customer segments is pure engineering joy.",
    author: "Elena Rostova",
    role: "Head of Engineering",
    company: "SaaSFlow",
    location: "London & Dubai",
    metric: "99.98% deliverability",
    channel: "REST API & Webhooks"
  }
];

export const API_SNIPPETS: ApiSnippet[] = [
  {
    language: 'nodejs',
    title: 'Send Interactive WhatsApp Message with Catalog',
    code: `import { CocoonMail } from '@cocoonmail/sdk';

const cocoon = new CocoonMail({
  apiKey: process.env.COCOON_API_KEY
});

// Send an interactive WhatsApp product card with 1-click checkout
const response = await cocoon.whatsapp.sendInteractiveMessage({
  to: '+919876543210',
  template: 'monsoon_sneaker_vip_drop',
  components: [
    {
      type: 'header',
      parameters: [{ type: 'image', url: 'https://cdn.store.com/sneakers.jpg' }]
    },
    {
      type: 'body',
      parameters: [
        { type: 'text', text: 'Aarav' },
        { type: 'text', text: '₹2,499' }
      ]
    },
    {
      type: 'action',
      buttons: [
        { type: 'buy_now', sku: 'SNEAKER-HYDRO-UK9', paymentMethod: 'UPI_OR_CARD' },
        { type: 'quick_reply', text: 'Ask AI Size Help' }
      ]
    }
  ]
});

console.log('Dispatched message ID:', response.messageId);`
  },
  {
    language: 'curl',
    title: 'Trigger Transactional Email & Sync to Segment',
    code: `curl -X POST https://api.cocoonmail.com/v1/emails/send \\
  -H "Authorization: Bearer cm_live_948a27d19c3b" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "aarav.sharma@example.com",
    "template_id": "tpl_order_confirmed_v3",
    "variables": {
      "customer_name": "Aarav",
      "order_number": "#CM-98214",
      "amount": "₹2,499",
      "items": [{"name": "Monsoon HydroBlack UK9", "qty": 1}],
      "tracking_url": "https://track.store.com/CM-98214"
    },
    "dynamic_tags": ["purchased_monsoon_drop", "high_ltv"],
    "channel_fallback": {
      "enabled": true,
      "fallback_to_whatsapp_if_unopened_hours": 4
    }
  }'`
  },
  {
    language: 'python',
    title: 'Listen to Real-Time Webhooks',
    code: `from flask import Flask, request, jsonify
from cocoonmail.security import verify_webhook_signature

app = Flask(__name__)

@app.route("/webhooks/cocoon", methods=["POST"])
def handle_cocoon_events():
    payload = request.get_data()
    sig_header = request.headers.get("X-Cocoon-Signature")
    
    # Verify cryptographic signature
    event = verify_webhook_signature(payload, sig_header, secret="whsec_...")
    
    if event["type"] == "payment.succeeded":
        customer = event["data"]["customer"]
        print(f"💰 Received {event['data']['amount']} from {customer['phone']}")
        # Post-purchase automation triggers automatically in CocoonMail
        
    elif event["type"] == "whatsapp.ai_handoff_requested":
        print(f"🚨 Customer {event['data']['phone']} requested human agent")
        
    return jsonify(status="ok"), 200`
  }
];

export const INDUSTRY_SOLUTIONS = [
  {
    id: 'ecommerce',
    name: 'E-Commerce & D2C',
    headline: 'Turn browsing intent into instant WhatsApp & Email purchases',
    stats: [
      { label: 'Cart Recovery Rate', value: '58% - 64%' },
      { label: 'Conversion Lift', value: '4.2x vs Redirects' },
      { label: 'Repeat Purchase Rate', value: '+35%' }
    ],
    features: [
      'Direct Click-to-WhatsApp ads with automated product carousels',
      'Native in-chat UPI, Google Pay & Card checkout',
      'Automated back-in-stock alerts & price drop notifications',
      'Sync customer order history from Shopify, WooCommerce & custom API'
    ],
    customerExample: 'Bombay Shirt Company, KicksCart, Bare Organics'
  },
  {
    id: 'saas',
    name: 'SaaS & Startups',
    headline: 'High-touch onboarding drips and real-time billing alerts',
    stats: [
      { label: 'Trial-to-Paid Lift', value: '+41%' },
      { label: 'Activation Speed', value: '2.4x Faster' },
      { label: 'Support Deflection', value: '72%' }
    ],
    features: [
      'Transactional email engine with 99.8% inbox placement guarantee',
      'Urgent account security & dunning notifications via WhatsApp',
      'Automated user behavioral onboarding based on app event triggers',
      'Full REST API & webhook stream for engineering teams'
    ],
    customerExample: 'FlowDesk, CloudMetric, DevStash'
  },
  {
    id: 'agencies',
    name: 'Agencies & Consultancies',
    headline: 'Manage 50+ client brands from one multi-tenant command center',
    stats: [
      { label: 'Hours Saved Weekly', value: '18h / Strategist' },
      { label: 'Client ROAS Avg', value: '6.4x' },
      { label: 'Whitelabel Ready', value: '100%' }
    ],
    features: [
      'Multi-brand workspace isolation with unified client billing',
      'Shareable automation workflow templates across customer accounts',
      'Whitelabel client portals and automated executive PDF reporting',
      'Granular role-based access control for client managers and editors'
    ],
    customerExample: 'GrowthCatalyst Media, BlueHorizon Labs'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    headline: 'Reliable appointment reminders and patient support workflows',
    stats: [
      { label: 'No-Show Reduction', value: '-78%' },
      { label: 'Confirmation Rate', value: '92%' },
      { label: 'Patient Satisfaction', value: '4.9 / 5' }
    ],
    features: [
      'Automated WhatsApp appointment confirmations with 1-click reschedule',
      'Pre-op prep guides and dietary instructions sent automatically',
      'Secure prescription & diagnostic report dispatch via encrypted links',
      'HIPAA & GDPR data compliance policies'
    ],
    customerExample: 'Apex Care Clinics, VitaWell Diagnostics'
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    headline: 'Scale student admissions, fee collections, and webinar attendance',
    stats: [
      { label: 'Webinar Show-up Rate', value: '74%' },
      { label: 'Fee Collection Speed', value: '3x Faster' },
      { label: 'Counselor Productivity', value: '+120%' }
    ],
    features: [
      'Click-to-WhatsApp ad funnels for course queries and counseling calls',
      'AI bots that answer curriculum questions and eligibility criteria 24/7',
      'Automated fee due date reminders with instant payment links',
      'Exam dates and live class link broadcasts with high deliverability'
    ],
    customerExample: 'Scaler Academy, EdVantage Institutes'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Hospitality',
    headline: 'Qualify high-net-worth buyers and schedule site visits instantly',
    stats: [
      { label: 'Site Visit Bookings', value: '+145%' },
      { label: 'Lead Response Time', value: '< 20 seconds' },
      { label: 'Brochure Downloads', value: '83%' }
    ],
    features: [
      'Interactive WhatsApp brochure carousels with unit floor plans and videos',
      'Automated site visit calendar slot booking with Google Maps pins',
      'Lead qualification scoring based on budget, timeline, and city tier',
      'Instant lead assignment to regional property relationship managers'
    ],
    customerExample: 'Skyline Luxury Living, Oasis Resort Properties'
  }
];
