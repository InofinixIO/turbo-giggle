import React, { useState } from 'react';
import { 
  ShoppingBag, 
  CreditCard, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  Eye,
  Sliders,
  Layers,
  PhoneCall,
  Check,
  ChevronRight,
  ChevronLeft,
  DollarSign,
  Maximize2,
  Box,
  Truck,
  Percent,
  Play
} from 'lucide-react';
import { ModalType } from '../types';
import { useRouter } from '../router/RouterContext';

interface WhatsAppCommercePageProps {
  onOpenModal: (type: ModalType) => void;
}

export const WhatsAppCommercePage: React.FC<WhatsAppCommercePageProps> = ({ onOpenModal }) => {
  const { navigate } = useRouter();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  
  // Interactive Order Calculator State
  const [productAQty, setProductAQty] = useState<number>(2);
  const [productBQty, setProductBQty] = useState<number>(1);
  const [applyDiscount, setApplyDiscount] = useState<boolean>(true);
  const [includeGst, setIncludeGst] = useState<boolean>(true);

  // Calculations
  const priceA = 999;
  const priceB = 799;
  const subtotal = (productAQty * priceA) + (productBQty * priceB);
  const discountAmount = applyDiscount ? 200 : 0;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const gstAmount = includeGst ? Math.round(taxableAmount * 0.18) : 0;
  const shipping = 0;
  const grandTotal = taxableAmount + gstAmount + shipping;

  // Real journey screenshots provided by the merchant
  const journeyImages = [
    {
      title: '1. Customer In-Chat Entry',
      caption: 'Customer taps an ad or message to open an instant conversation with your verified WhatsApp store.',
      url: 'https://images.openai.com/static-rsc-4/sCQaWBvWksZ3zidGF4yktxZlkcSIF3sDgR1e3JjDYyeNY4x2Veb6P2n0EuXKbIqvZRf14t7AMD_1RdMr_KLs8v9ALRZAy7LrGoFYi5SQi97KU95RtsaPPxgWM7pL1k1yIGjOg1mCHay5oMd8l7gFxOZm7jyCIUPq2xGzAAtL6oJ4tYDOWIFnhJkphaAEAYrR?purpose=fullsize'
    },
    {
      title: '2. Catalogue Browsing',
      caption: 'Native Meta catalogue renders seamlessly in WhatsApp with real-time stock and prices.',
      url: 'https://images.openai.com/static-rsc-4/QZpIalm-67S3mtuZXvs2Jo6C7j8_1lhEpx2xOxB5yVo03R0UdTOd0U_J4sQ3O44VtuGMkfgNiGvKtlBtjhz5uR_tvyaTB3xxUA64oO__8yE1JEU_Lsa4Ax5ytpumMJsUoy3QZQak-i9W8wkDYADopjLw3zzkyb_EnTyyKgeBIT83BEuwcIn7Wr67lXwWVP7j?purpose=fullsize'
    },
    {
      title: '3. Product Detail View',
      caption: 'Detailed imagery, variant selectors (size/color), and instant "Add to Cart" button.',
      url: 'https://images.openai.com/static-rsc-4/OhxrzssCxyfqiGpJ-yTmKheL2bwLNQ3zJ_JBhiEc_ZaUDNSzsZxAM8hAjvjbHa-CpUtojFFimmVXJv9YDKgY8uWDfFKlxwKOx9r9S3TdhoOjxitrTyAh9joXrd89IAwhYdbnK9QLtBKzlJKbgM9prBW3y-6XFET5Dgr-6Db2sjhsiwZ2JGIA39xTAwEBus2p?purpose=fullsize'
    },
    {
      title: '4. WhatsApp Cart Management',
      caption: 'Customers add multiple items to a native WhatsApp shopping bag without leaving the chat.',
      url: 'https://images.openai.com/static-rsc-4/5aVSBbkS1YuI5GwvwLPDNn0g2xmpAhTQzAN1QX2B-7-9Dlmv9ehNhaTtOL3_OPx50Wuh-0IWFRoImJYMlrvvUFpSjy_dmWyxGK30aG8Ba53ZmMxQhSMaoqPq_1iGEBqS53gRim85p53O4uK2sbxACwH6WFV1vooakH_ii7NZA5ZAvr6BeBHrYFYwMnzUICed?purpose=fullsize'
    },
    {
      title: '5. Instant Cart Submission',
      caption: 'With one tap, the shopping cart is sent into the chat as an official buyer order.',
      url: 'https://images.openai.com/static-rsc-4/6C6UxAPCbCaRK5uvy3SmQ4y_UxlkaX9Fa-5uIM90gNZwO-1XfmiyZD7qOz6f4EVIq9gah387a6j3_npiq7aYsVEOPGSromio136akzES1jBGY8lyQl4suElj06nrLlkR7aMQX7tMa5HHU1q9GtKZZk7mtT5cPsEw7aLtyi138EaC9Tc200rqBNG38ToRFQw-?purpose=fullsize'
    },
    {
      title: '6. Order Template Confirmation',
      caption: 'CocoonMail automatically generates the itemized summary with discounts, GST, and "Pay Now" CTA.',
      url: 'https://images.openai.com/static-rsc-4/67B_LKpgn7TGw5eSgaJJQBLLF3IRaJhwu_0DVcCtH-ZNy3eBsZb8GN-dH3jlimNFHYc0c2wRm3xtSLbpqoChvELTnm2-wXZmsR4CXuniRF5O1G5xmXbKuyZdeIhHGA3SLOCWk2aZeqrXR4PV3juqGixLdZNjlp8bp3xsOyDgYMqfD0EfWIzf2UWV0-Uay6wd?purpose=fullsize'
    },
    {
      title: '7. UPI & Razorpay Checkout',
      caption: 'Buyer completes payment in seconds using their preferred UPI app or credit card.',
      url: 'https://images.openai.com/static-rsc-4/bdrBwb5cxWN7rMA0EHXqTjwhAW21S2Ydf3D_ek5Yn1uLFKg0Z7KGzWrsi2eSBKHea7f9caKg7nszWDuyNmFEWwyI8-K_5XcHwQoSl7L4QZoGeb90LXKHwnun_uOoRMIyFOSl8G-xjDbFTo5tc1cP4j5joSilLEdNetY6pgYN7XOuCPsTm26CePtImkwHzDNv?purpose=fullsize'
    },
    {
      title: '8. Post-Purchase Fulfillment',
      caption: 'Automated receipt, shipping tracking, and repeat re-engagement triggers.',
      url: 'https://images.openai.com/static-rsc-4/SFW2cPzey_EZ46WHF21yPJibQkFBBk1i-8nbPpJNHrAZAxpgzwEGFqvQePtke0ANs5G3EDC4RId9Vc3r481hq6yrZ8-4iUSoqVtldtk6bRh0wRhVPCwAAhpLPTd0SHa-dz9ZLK9ftKME09Y3Ew_8i_nS7VyZUrMpgbSOkmdekZA53oyekr-DDz_lPGkhgRbm?purpose=fullsize'
    }
  ];

  const stepsData = [
    {
      step: 1,
      title: 'Connect WhatsApp Business API',
      headline: 'Bring your WhatsApp storefront to life.',
      description: 'Connect your WhatsApp Business API and turn WhatsApp into a complete sales channel with automated inbox routing.',
      points: [
        'Connect WhatsApp Business API',
        'Manage verified business numbers',
        'Receive & send customer conversations',
        'Use WhatsApp as the foundation for commerce'
      ],
      tag: 'Connect',
      color: 'emerald'
    },
    {
      step: 2,
      title: 'Add Payment Gateway',
      headline: 'Turn conversations into completed payments.',
      description: 'Connect your payment gateway and let customers pay seamlessly via UPI and Razorpay right after placing their order.',
      points: [
        'UPI payments (GPay, PhonePe, Paytm)',
        'Razorpay integration & native gateway',
        'Instant payment links / checkout URLs',
        'Real-time payment webhook verification',
        'Automated order confirmation triggers'
      ],
      tag: 'Connect',
      color: 'blue'
    },
    {
      step: 3,
      title: 'Manage Order Templates',
      headline: 'Every cart deserves a clear checkout experience.',
      description: 'Create and customize the dynamic WhatsApp order confirmation message dispatched when a customer submits their cart.',
      points: [
        'Dynamic itemized cart calculation',
        'Automatic discounts & coupon deductions',
        'GST percentage & tax breakdown',
        'Configurable shipping charges',
        'Prominent one-tap [Pay Now] green CTA'
      ],
      tag: 'Operate',
      color: 'indigo'
    },
    {
      step: 4,
      title: 'Link Meta Catalogue',
      headline: 'Your products are already in Meta. Sync them.',
      description: 'Connect your existing Meta Catalogue and synchronize your products automatically instead of creating everything from scratch.',
      points: [
        '1-click Meta Catalogue authorization',
        'Sync existing products & variants',
        'Import high-res images, pricing & stock',
        'Bidirectional catalog synchronization',
        'Eliminate duplicate catalog maintenance'
      ],
      tag: 'Sell',
      color: 'sky'
    },
    {
      step: 5,
      title: 'Enable Catalogue on WhatsApp',
      headline: 'Make products discoverable where customers chat.',
      description: 'Enable your catalogue on WhatsApp and let customers browse products, view details, and assemble multi-item carts directly inside chat.',
      points: [
        'Native in-chat product collection showcase',
        'Interactive product detail sheets',
        'Multi-product WhatsApp shopping cart',
        'Frictionless 1-tap cart submission',
        'Zero app downloads or website redirects'
      ],
      tag: 'Sell',
      color: 'emerald'
    },
    {
      step: 6,
      title: 'Manage Inventory in One Place',
      headline: 'Keep your catalogue updated from one place.',
      description: 'Manage catalogue inventory directly from CocoonMail so you never sell out-of-stock items across WhatsApp and Meta channels.',
      points: [
        'Real-time product availability & stock',
        'Dynamic price updates & discount statuses',
        'SKU variant management (sizes, colors)',
        'Automated low-stock threshold alerts',
        'Instant Meta Commerce sync'
      ],
      tag: 'Operate',
      color: 'amber'
    },
    {
      step: 7,
      title: 'Run Meta Ads',
      headline: "Don't just advertise. Start a conversation.",
      description: 'Bring high-intent buyers into WhatsApp through Click-to-WhatsApp (CTWA) ads and product catalogue campaigns on Instagram and Facebook.',
      points: [
        'Click-to-WhatsApp Ads (CTWA) setup',
        'Facebook & Instagram Feed/Reels campaigns',
        'WhatsApp Status broadcast ads',
        'Dynamic product & catalog-driven campaigns',
        'End-to-end ROAS & conversation analytics'
      ],
      tag: 'Grow',
      color: 'purple'
    },
    {
      step: 8,
      title: 'Build the Meta Customer Journey',
      headline: 'Turn one click into a personalized shopping journey.',
      description: 'Transform an ad click into an automated, high-converting product journey that guides shoppers from discovery straight to payment.',
      points: [
        'Meta Ad click opens WhatsApp with greeting',
        'Contextual product catalogue dynamically shown',
        'AI guided product recommendation',
        '1-tap cart creation & automated order template',
        'Instant UPI payment & retention re-engagement'
      ],
      tag: 'Grow',
      color: 'violet'
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO & PILLARS
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Pill / Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Connect · Sell · Manage · Grow</span>
            </div>
            <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <span>Platform</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-semibold">WhatsApp Commerce</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-lg uppercase tracking-wider">
                Full-Funnel Conversational Commerce
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Meta & WhatsApp <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                  Conversational Commerce
                </span>
              </h1>

              <div className="text-xl sm:text-2xl font-bold text-slate-800 italic">
                “From Ad to Payment — All in One Journey”
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Replace clunky checkout links and lost cart drops. Turn WhatsApp into an interactive, end-to-end storefront where customers discover products from Meta Ads, browse your catalog, build carts, and pay seamlessly via UPI — without ever leaving chat.
              </p>

              {/* Four Stages Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Stage 1</span>
                  <span className="text-xs font-bold text-slate-800">1. Connect</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Stage 2</span>
                  <span className="text-xs font-bold text-slate-800">2. Sell</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Stage 3</span>
                  <span className="text-xs font-bold text-slate-800">3. Operate</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Stage 4</span>
                  <span className="text-xs font-bold text-slate-800">4. Grow</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenModal('start-free')}
                  className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 transition-all transform active:scale-95 flex items-center gap-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenModal('book-demo')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm rounded-xl transition-all shadow-xs"
                >
                  Schedule Live Commerce Walkthrough
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-2 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Meta Tech Partner
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Native UPI & Razorpay
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Zero Hidden Fees
                </span>
              </div>
            </div>

            {/* Right Hero Visual Card: Mini Flow Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800 relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Live Commerce Loop
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                    Active Channel
                  </span>
                </div>

                {/* Micro Visual Flow Steps */}
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">1</div>
                      <div>
                        <div className="font-semibold text-white">Click-to-WhatsApp Ad</div>
                        <div className="text-[11px] text-slate-400">Instagram / Facebook feed ad tap</div>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-mono text-[11px]">98% Open</span>
                  </div>

                  <div className="flex justify-center text-slate-500 py-0.5">↓</div>

                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">2</div>
                      <div>
                        <div className="font-semibold text-white">WhatsApp Catalogue Discovery</div>
                        <div className="text-[11px] text-slate-400">Native multi-product browsing in chat</div>
                      </div>
                    </div>
                    <span className="text-blue-400 font-mono text-[11px]">Synced Stock</span>
                  </div>

                  <div className="flex justify-center text-slate-500 py-0.5">↓</div>

                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">3</div>
                      <div>
                        <div className="font-semibold text-white">Order Template #CM10245</div>
                        <div className="text-[11px] text-slate-400">Dynamic tax, shipping & itemized total</div>
                      </div>
                    </div>
                    <span className="text-indigo-400 font-mono text-[11px]">₹3,064</span>
                  </div>

                  <div className="flex justify-center text-slate-500 py-0.5">↓</div>

                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-900 flex items-center justify-center font-bold">4</div>
                      <div>
                        <div className="font-semibold text-emerald-300">Instant UPI Payment</div>
                        <div className="text-[11px] text-emerald-400/80">Completed in 12 seconds via Razorpay</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-500 text-slate-900 font-bold rounded text-[10px]">PAID</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  <span>The final hero journey: Advertise → Discover → Chat → Browse → Cart → Order → Pay → Repeat</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: KEY OUTCOMES RIBBON (Directly from Blueprint Image 2)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-emerald-50/80 border border-blue-100/90 rounded-2xl p-4 sm:p-5 shadow-xs">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 divide-y lg:divide-y-0 lg:divide-x divide-blue-200/60">
              
              {/* Outcome Badge */}
              <div className="flex items-center gap-3 pr-4 shrink-0 pb-3 lg:pb-0">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-950 block">
                    Key Outcomes
                  </span>
                  <span className="text-[11px] text-slate-500">Measurable Impact</span>
                </div>
              </div>

              {/* Outcome 1 */}
              <div className="pt-3 lg:pt-0 lg:px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Higher Engagement</div>
                  <div className="text-[11px] text-slate-500">(WhatsApp + Ads)</div>
                </div>
              </div>

              {/* Outcome 2 */}
              <div className="pt-3 lg:pt-0 lg:px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">More Sales</div>
                  <div className="text-[11px] text-slate-500">(Seamless Checkout)</div>
                </div>
              </div>

              {/* Outcome 3 */}
              <div className="pt-3 lg:pt-0 lg:px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Real-time Inventory</div>
                  <div className="text-[11px] text-slate-500">(Always In Sync)</div>
                </div>
              </div>

              {/* Outcome 4 */}
              <div className="pt-3 lg:pt-0 lg:px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Complete Visibility</div>
                  <div className="text-[11px] text-slate-500">(Analytics & Reports)</div>
                </div>
              </div>

              {/* Outcome 5 */}
              <div className="pt-3 lg:pt-0 lg:pl-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Automated & Scalable</div>
                  <div className="text-[11px] text-slate-500">(Grow Without Limits)</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE 8-STEP COMMERCE JOURNEY (Blueprint Diagram 1)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Funnel Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              The 8-Step Commerce Storyline
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We structure your sales funnel as an interconnected commerce journey rather than disconnected software settings:
            </p>
            <div className="mt-3 font-semibold text-blue-700 text-sm">
              Connect → Get Paid → Configure Orders → Bring Products → Sell on WhatsApp → Manage Inventory → Acquire Customers → Automate the Journey
            </div>
          </div>

          {/* Sequential 8-Step Flow Cards Grid matching image 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepsData.map((s, index) => {
              const isActive = activeStepIndex === index;
              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`relative cursor-pointer transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between border ${
                    isActive 
                      ? 'bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/20 scale-[1.01]' 
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                  }`}
                >
                  <div>
                    {/* Header: Step Number & Stage Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                        {s.step}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {s.tag}
                      </span>
                    </div>

                    {/* Step Title & Subheadline */}
                    <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-700 italic mb-3">
                      “{s.headline}”
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {s.description}
                    </p>

                    {/* Visual Card Elements specific to each step */}
                    <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                      {s.step === 1 && (
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <div className="text-[11px]">
                            <div className="font-bold text-slate-900">Official API Connected</div>
                            <div className="text-emerald-600 font-medium">Verified Green Badge</div>
                          </div>
                        </div>
                      )}

                      {s.step === 2 && (
                        <div className="flex items-center justify-around py-1">
                          <div className="font-extrabold text-xs text-orange-600 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-orange-500" /> UPI QR
                          </div>
                          <span className="text-slate-300">|</span>
                          <div className="font-extrabold text-xs text-blue-700 flex items-center gap-1">
                            Razorpay
                          </div>
                        </div>
                      )}

                      {s.step === 3 && (
                        <div className="text-[11px] font-mono space-y-1">
                          <div className="font-bold text-slate-900 flex justify-between">
                            <span>Order #CM10245</span>
                            <span className="text-emerald-600 font-bold">₹3,064</span>
                          </div>
                          <div className="text-[10px] text-slate-500 flex justify-between">
                            <span>Subtotal + GST (18%)</span>
                            <span>[Pay Now] Button</span>
                          </div>
                        </div>
                      )}

                      {s.step === 4 && (
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                            ∞
                          </div>
                          <div className="text-[11px]">
                            <div className="font-bold text-slate-900">Meta Catalogue Synced</div>
                            <div className="text-slate-500">Live inventory & variant mirror</div>
                          </div>
                        </div>
                      )}

                      {s.step === 5 && (
                        <div className="flex items-center justify-between text-[11px]">
                          <div>
                            <span className="font-bold text-slate-900">In-Chat Store</span>
                            <div className="text-[10px] text-slate-500">Sneakers ₹2,499 · Backpack</div>
                          </div>
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[10px]">View all</span>
                        </div>
                      )}

                      {s.step === 6 && (
                        <div className="text-[10px] space-y-1 font-mono">
                          <div className="flex justify-between text-slate-700">
                            <span>T-Shirt</span>
                            <span className="text-emerald-600 font-bold">In Stock</span>
                          </div>
                          <div className="flex justify-between text-slate-700">
                            <span>Shoes</span>
                            <span className="text-amber-600 font-bold">Low Stock</span>
                          </div>
                        </div>
                      )}

                      {s.step === 7 && (
                        <div className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-1.5 font-bold text-blue-700">
                            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">f</span>
                            <span>CTWA Ads</span>
                          </div>
                          <span className="text-purple-600 font-semibold text-[10px]">High Intent</span>
                        </div>
                      )}

                      {s.step === 8 && (
                        <div className="text-[10px] text-slate-700 font-medium">
                          Ad Click → WA Opens → Cart → Pay → Purchase
                        </div>
                      )}
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                      {s.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step Connector Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">Step {s.step} of 8</span>
                    <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:underline">
                      {isActive ? 'Selected' : 'Inspect'} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Bar */}
          <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                Active Step Spotlight: Step {stepsData[activeStepIndex].step}
              </span>
              <h4 className="text-xl font-extrabold text-slate-900">
                {stepsData[activeStepIndex].title} — {stepsData[activeStepIndex].headline}
              </h4>
              <p className="text-xs text-slate-600 max-w-3xl">
                {stepsData[activeStepIndex].description}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                disabled={activeStepIndex === 0}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveStepIndex(Math.min(stepsData.length - 1, activeStepIndex + 1))}
                disabled={activeStepIndex === stepsData.length - 1}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenModal('start-free')}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Configure This Step
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: INTERACTIVE ORDER TEMPLATE SIMULATOR (Feature 3)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Controls & Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold rounded-lg uppercase tracking-wider">
                Feature 3 Spotlight
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Customize Your WhatsApp Order Confirmation
              </h2>
              <p className="text-base font-semibold text-indigo-900 italic">
                “Every cart deserves a clear checkout experience.”
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                When a customer submits their WhatsApp cart, CocoonMail automatically generates and dispatches an itemized <strong>Order Template</strong>. You can configure dynamic taxes, coupons, shipping thresholds, and instant UPI payment CTA buttons.
              </p>

              {/* Interactive Config Controls */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4 text-xs">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Interactive Order Template Simulator
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Product A (₹{priceA} ea)</label>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setProductAQty(Math.max(1, productAQty - 1))}
                        className="w-7 h-7 bg-white border border-slate-300 rounded font-bold hover:bg-slate-100"
                      >-</button>
                      <span className="font-bold text-sm w-6 text-center">{productAQty}</span>
                      <button 
                        onClick={() => setProductAQty(productAQty + 1)}
                        className="w-7 h-7 bg-white border border-slate-300 rounded font-bold hover:bg-slate-100"
                      >+</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Product B (₹{priceB} ea)</label>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setProductBQty(Math.max(0, productBQty - 1))}
                        className="w-7 h-7 bg-white border border-slate-300 rounded font-bold hover:bg-slate-100"
                      >-</button>
                      <span className="font-bold text-sm w-6 text-center">{productBQty}</span>
                      <button 
                        onClick={() => setProductBQty(productBQty + 1)}
                        className="w-7 h-7 bg-white border border-slate-300 rounded font-bold hover:bg-slate-100"
                      >+</button>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={applyDiscount} 
                      onChange={(e) => setApplyDiscount(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    <span className="text-slate-700 font-medium">Apply Special Discount (-₹200)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={includeGst} 
                      onChange={(e) => setIncludeGst(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    <span className="text-slate-700 font-medium">Include GST Tax (18%)</span>
                  </label>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500">
                This is an important feature because it directly explains <strong>how the platform bridges WhatsApp chat interactions with formal financial accounting</strong>.
              </div>
            </div>

            {/* Right WhatsApp Order Message Preview */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-[#ECE5DD] p-4 sm:p-6 rounded-3xl shadow-xl border border-slate-300 relative">
                
                {/* WhatsApp Chat Header */}
                <div className="bg-[#075E54] text-white p-3 rounded-2xl flex items-center justify-between shadow-xs mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                      🛍️
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight">CocoonStore Official</div>
                      <div className="text-[10px] text-emerald-200">Verified Business Account</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-200">10:24 AM</span>
                </div>

                {/* Actual Message Card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3 text-xs text-slate-800">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 font-bold text-slate-900 text-sm">
                    <div className="flex items-center gap-1.5">
                      <span>🛍️</span>
                      <span>Order #CM10245</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full font-semibold">
                      Confirmed
                    </span>
                  </div>

                  {/* Items List */}
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Product A × {productAQty}</span>
                      <span className="font-semibold text-slate-900">₹{(productAQty * priceA).toLocaleString()}</span>
                    </div>
                    {productBQty > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Product B × {productBQty}</span>
                        <span className="font-semibold text-slate-900">₹{(productBQty * priceB).toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  {/* Breakdown */}
                  <div className="pt-2 border-t border-dashed border-slate-200 space-y-1 text-slate-600 text-xs">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium text-slate-800">₹{subtotal.toLocaleString()}</span>
                    </div>
                    {applyDiscount && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>Discount Coupon</span>
                        <span>-₹{discountAmount}</span>
                      </div>
                    )}
                    {includeGst && (
                      <div className="flex justify-between">
                        <span>GST (18%)</span>
                        <span className="font-medium text-slate-800">₹{gstAmount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Shipping Charges</span>
                      <span className="text-emerald-600 font-medium">FREE (₹0)</span>
                    </div>
                  </div>

                  {/* Grand Total */}
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm font-extrabold text-slate-900">
                    <span>Total Amount Payable</span>
                    <span className="text-base text-blue-700 font-mono">₹{grandTotal.toLocaleString()}</span>
                  </div>

                  {/* Payment CTA Button */}
                  <button 
                    onClick={() => onOpenModal('start-free')}
                    className="w-full mt-2 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors active:scale-98"
                  >
                    <span>[Pay Now via UPI / Razorpay]</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[10px] text-center text-slate-400">
                    Protected by 256-bit bank encryption · Instant order dispatch
                  </div>
                </div>

                <div className="text-[10px] text-center text-slate-500 mt-2">
                  Customer journey: Discovers → Adds to Cart → Submits Cart → Receives Template → Pays
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: LIVE CATALOGUE & JOURNEY SCREENS (Features 4 & 5)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-lg uppercase tracking-wider mb-3">
              Interactive Commerce Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Turn Your Catalogue into a WhatsApp Store
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore the authentic 8-step customer journey from in-chat catalog discovery to checkout:
            </p>
            <div className="mt-2 font-bold text-emerald-700 text-sm">
              WhatsApp → Catalogue → Product → Add to Cart → Submit Order → Pay
            </div>
          </div>

          {/* Interactive Journey Screen Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Gallery Navigation Left */}
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
                Customer Journey Steps
              </div>
              {journeyImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGalleryIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all border flex items-start gap-3 ${
                    activeGalleryIndex === idx
                      ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500 text-slate-900'
                      : 'bg-white/60 border-slate-200/80 text-slate-600 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    activeGalleryIndex === idx ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-xs font-bold">{img.title}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-1">{img.caption}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Gallery Screen Viewer Right */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full max-w-lg bg-white rounded-3xl p-5 shadow-xl border border-slate-200">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-slate-900">
                      {journeyImages[activeGalleryIndex].title}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Step {activeGalleryIndex + 1} of 8
                  </span>
                </div>

                {/* Displayed Image */}
                <div className="relative aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center">
                  <img
                    src={journeyImages[activeGalleryIndex].url}
                    alt={journeyImages[activeGalleryIndex].title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <p className="mt-4 text-xs text-slate-600 leading-relaxed text-center font-medium">
                  {journeyImages[activeGalleryIndex].caption}
                </p>

                {/* Navigation controls */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveGalleryIndex(Math.max(0, activeGalleryIndex - 1))}
                    disabled={activeGalleryIndex === 0}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-40"
                  >
                    ← Previous
                  </button>
                  <div className="flex gap-1.5">
                    {journeyImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveGalleryIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeGalleryIndex === i ? 'bg-blue-600 w-4' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveGalleryIndex(Math.min(journeyImages.length - 1, activeGalleryIndex + 1))}
                    disabled={activeGalleryIndex === journeyImages.length - 1}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-40"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: PLATFORM ECOSYSTEM ARCHITECTURE (Blueprint Lower Diagram)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold rounded-lg uppercase tracking-wider mb-3">
              System Architecture & Data Flows
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              The CocoonMail Commerce Ecosystem
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              How the platform unifies Customers, the Meta Ecosystem, Core Business Operations, and Payment Gateways into an automated real-time loop:
            </p>
          </div>

          {/* Connected Architecture Box */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Pillar 1: Customers */}
              <div className="lg:col-span-2 bg-slate-800/80 rounded-2xl p-5 border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Customers</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/80 text-center">
                      <div className="text-xs font-bold text-white">Meta Ads</div>
                      <div className="text-[10px] text-slate-400">Discovery point</div>
                    </div>
                    <div className="text-center text-slate-500 font-bold">↓</div>
                    <div className="p-3 bg-emerald-950/80 rounded-xl border border-emerald-700/80 text-center">
                      <div className="text-xs font-bold text-emerald-300">WhatsApp</div>
                      <div className="text-[10px] text-emerald-400">Direct conversation</div>
                    </div>
                    <div className="text-center text-slate-500 font-bold">↓</div>
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/80 text-center">
                      <div className="text-xs font-bold text-white">Your Customers</div>
                      <div className="text-[10px] text-slate-400">High LTV retention</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700 text-[10px] text-slate-400 text-center">
                  Inbound traffic source
                </div>
              </div>

              {/* Pillar 2: CocoonMail Platform Hub (5 Modular Blocks) */}
              <div className="lg:col-span-6 bg-slate-800/60 rounded-2xl p-5 border border-blue-500/40 shadow-inner flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        CocoonMail Platform
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-blue-300 bg-blue-900/60 px-2.5 py-0.5 rounded-full border border-blue-700/60">
                      Commerce + Marketing + Automation
                    </span>
                  </div>

                  {/* 5 Modular Blocks Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    
                    {/* Block A */}
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-800/50">
                      <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp API</span>
                      </div>
                      <ul className="text-[10px] text-slate-400 space-y-1">
                        <li>• Business API</li>
                        <li>• Multi-agent inbox</li>
                        <li>• Official templates</li>
                        <li>• Webhook stream</li>
                      </ul>
                    </div>

                    {/* Block B */}
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-blue-800/50">
                      <div className="font-bold text-blue-400 mb-1 flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Payment Hub</span>
                      </div>
                      <ul className="text-[10px] text-slate-400 space-y-1">
                        <li>• UPI QR & links</li>
                        <li>• Razorpay integration</li>
                        <li>• In-chat payments</li>
                        <li>• Order reconciler</li>
                      </ul>
                    </div>

                    {/* Block C */}
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-indigo-800/50">
                      <div className="font-bold text-indigo-400 mb-1 flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5" />
                        <span>Catalogue & Stock</span>
                      </div>
                      <ul className="text-[10px] text-slate-400 space-y-1">
                        <li>• Meta catalogue sync</li>
                        <li>• Real-time stock</li>
                        <li>• Variant mapping</li>
                        <li>• Inventory updates</li>
                      </ul>
                    </div>

                    {/* Block D */}
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-purple-800/50">
                      <div className="font-bold text-purple-400 mb-1 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Ads & Journeys</span>
                      </div>
                      <ul className="text-[10px] text-slate-400 space-y-1">
                        <li>• CTWA campaigns</li>
                        <li>• Click to Website</li>
                        <li>• Status Ads</li>
                        <li>• Automated journeys</li>
                      </ul>
                    </div>

                    {/* Block E */}
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-amber-800/50 col-span-1 sm:col-span-2">
                      <div className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Orders & Checkout</span>
                      </div>
                      <ul className="text-[10px] text-slate-400 grid grid-cols-2 gap-1">
                        <li>• Dynamic Order templates</li>
                        <li>• Automated Tax / GST</li>
                        <li>• Dynamic shipping</li>
                        <li>• Instant payment confirm</li>
                      </ul>
                    </div>

                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/80 text-[10px] text-blue-300 text-center">
                  Real-time bidirectional synchronization engine
                </div>
              </div>

              {/* Pillar 3: Meta Ecosystem */}
              <div className="lg:col-span-2 bg-slate-800/80 rounded-2xl p-5 border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Meta Ecosystem</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-slate-900/90 rounded-xl border border-slate-700 text-slate-300 font-medium">
                      Meta Ads (CTWA)
                    </div>
                    <div className="p-2.5 bg-slate-900/90 rounded-xl border border-slate-700 text-slate-300 font-medium">
                      Meta Catalogue
                    </div>
                    <div className="p-2.5 bg-slate-900/90 rounded-xl border border-slate-700 text-slate-300 font-medium">
                      WhatsApp Business
                    </div>
                    <div className="p-2.5 bg-slate-900/90 rounded-xl border border-slate-700 text-slate-300 font-medium">
                      Business Manager
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700 text-[10px] text-slate-400 text-center">
                  Meta Graph API v20.0
                </div>
              </div>

              {/* Pillar 4: Payment Gateways */}
              <div className="lg:col-span-2 bg-slate-800/80 rounded-2xl p-5 border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Payment Gateways</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700 text-center">
                      <div className="text-xs font-bold text-orange-400">UPI Instant</div>
                      <div className="text-[10px] text-slate-400">GPay, PhonePe, Paytm</div>
                    </div>
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700 text-center">
                      <div className="text-xs font-bold text-blue-400">Razorpay</div>
                      <div className="text-[10px] text-slate-400">Cards, Netbanking</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700 text-[10px] text-emerald-400 text-center font-mono">
                  Settlements to Bank
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: 4-STAGE STORY MATRIX
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              The 4 Stages of WhatsApp Commerce
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Organized for modern brands scaling from initial setup to enterprise volume:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-sm mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">1. Connect</h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">Set up commerce infrastructure</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Connect WhatsApp Business API and configure native payment gateways like UPI and Razorpay so your account is transaction-ready.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-800">
                WhatsApp API + Payment Gateway
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold text-sm mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">2. Sell</h3>
                <p className="text-xs font-semibold text-emerald-600 mb-3">Bring products to WhatsApp</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Link your Meta Catalogue and turn WhatsApp conversations into interactive product galleries with one-tap add-to-cart actions.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-800">
                Meta Catalogue + WhatsApp Store
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-extrabold text-sm mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">3. Operate</h3>
                <p className="text-xs font-semibold text-amber-600 mb-3">Manage your commerce engine</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Automate order confirmations with dynamic tax and discounts, and manage real-time inventory without juggling disconnected dashboards.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-800">
                Orders Templates + Inventory Sync
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-extrabold text-sm mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">4. Grow</h3>
                <p className="text-xs font-semibold text-purple-600 mb-3">Acquire and convert customers</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Run Click-to-WhatsApp (CTWA) ads and trigger automated shopping journeys that guide paid traffic from an Instagram click to a completed order.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-800">
                Meta Ads + Meta Journeys
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: BOTTOM CONVERSION CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
            
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Your WhatsApp Storefront Today</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to turn WhatsApp into your highest-converting sales channel?
              </h2>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl">
                Connect your Meta Catalogue, set up UPI & Razorpay payments, and start converting ad clicks directly inside chat in less than 30 minutes.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenModal('start-free')}
                  className="px-8 py-4 bg-white text-blue-700 font-extrabold text-sm rounded-xl shadow-lg hover:bg-blue-50 transition-all transform active:scale-95 flex items-center gap-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenModal('book-demo')}
                  className="px-7 py-4 bg-blue-900/40 hover:bg-blue-900/60 border border-white/30 text-white font-bold text-sm rounded-xl transition-all"
                >
                  Book a Product Walkthrough
                </button>
              </div>

              <div className="flex items-center gap-6 pt-2 text-xs text-blue-100">
                <span>✓ Instant account creation</span>
                <span>✓ No credit card required</span>
                <span>✓ Dedicated onboarding support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
