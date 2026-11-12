import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ArrowRight, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Percent,
  Link as LinkIcon,
  Copy,
  CheckCircle2,
  Calendar,
  Share2
} from 'lucide-react';
import { ModalType } from '../types';
import { useRouter } from '../router/RouterContext';

interface Pricing1PageProps {
  onOpenModal: (type: ModalType) => void;
}

type PlanId = 'free' | 'starter' | 'growth' | 'pro' | 'enterprise';
type CalcPlanId = 'free' | 'starter' | 'growth' | 'pro';
type BillingInterval = 'monthly' | 'quarterly' | 'yearly';

interface PlanDef {
  id: PlanId;
  name: string;
  tagline: string;
  cta: string;
  featured?: boolean;
  features: string[];
}

export const Pricing1Page: React.FC<Pricing1PageProps> = ({ onOpenModal }) => {
  const { navigate } = useRouter();

  // State
  const [billingInterval, setBillingInterval] = useState<BillingInterval>('monthly');
  const [selectedCalcPlan, setSelectedCalcPlan] = useState<CalcPlanId>('growth');
  const [emails, setEmails] = useState<number>(50000);
  const [mkt, setMkt] = useState<number>(5000);
  const [util, setUtil] = useState<number>(2000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedPlanId, setCopiedPlanId] = useState<PlanId | 'all' | null>(null);
  const [highlightedPlan, setHighlightedPlan] = useState<PlanId | null>(null);

  // Constants & Rates
  const quarterlyDiscount = 0.05; // 5% off
  const yearlyDiscount = 0.10;    // 10% off
  const waMarketingRate = 0.98;   // 98 paisa per message
  const waUtilityRate = 0.25;     // 25 paisa per message

  const monthlyPrices: Record<PlanId, number> = {
    free: 0,
    starter: 1499,
    growth: 3999,
    pro: 7999,
    enterprise: 0,
  };

  // Included volume specs
  const includedEmailsMap: Record<CalcPlanId, number> = {
    free: 500,       // 500 emails/month
    starter: 1000,   // 1,000 emails/month
    growth: 15000,   // 15,000 emails/month
    pro: 50000,      // 50,000 emails/month
  };

  // Helper formatters
  const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');
  const inr2 = (n: number) => '₹' + n.toFixed(2);
  const num = (n: number) => n.toLocaleString('en-IN');

  const getPlanFee = (id: PlanId) => {
    const base = monthlyPrices[id];
    if (base === 0) return 0;
    if (billingInterval === 'yearly') {
      return Math.round(base * (1 - yearlyDiscount));
    }
    if (billingInterval === 'quarterly') {
      return Math.round(base * (1 - quarterlyDiscount));
    }
    return base;
  };

  const getUnitFor = (id: PlanId) => {
    if (id === 'enterprise') return 'Volume-based pricing';
    if (id === 'free') return 'Free forever';
    const fee = getPlanFee(id);
    if (billingInterval === 'yearly') {
      return `per month, billed yearly (${inr(fee * 12)}) + GST`;
    }
    if (billingInterval === 'quarterly') {
      return `per month, billed quarterly (${inr(fee * 3)}) + GST`;
    }
    return 'per month + GST';
  };

  // Handle URL deep linking (e.g. ?plan=growth&billing=quarterly)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const planParam = params.get('plan') as PlanId | null;
      const billingParam = params.get('billing') as BillingInterval | null;

      if (billingParam && ['monthly', 'quarterly', 'yearly'].includes(billingParam)) {
        setBillingInterval(billingParam);
      }

      if (planParam && ['free', 'starter', 'growth', 'pro', 'enterprise'].includes(planParam)) {
        if (['free', 'starter', 'growth', 'pro'].includes(planParam)) {
          setSelectedCalcPlan(planParam as CalcPlanId);
        }
        setTimeout(() => {
          const el = document.getElementById(`plan-${planParam}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setHighlightedPlan(planParam);
            setTimeout(() => setHighlightedPlan(null), 3500);
          }
        }, 300);
      }
    } catch (e) {
      // Ignore if window is not available
    }
  }, []);

  // Copy shareable link for a specific plan
  const copyPlanLink = (e: React.MouseEvent, planId: PlanId) => {
    e.stopPropagation();
    try {
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.set('plan', planId);
      url.searchParams.set('billing', billingInterval);
      navigator.clipboard.writeText(url.toString()).then(() => {
        setCopiedPlanId(planId);
        setTimeout(() => {
          setCopiedPlanId((prev) => (prev === planId ? null : prev));
        }, 2500);
      });
    } catch {
      // fallback
    }
  };

  // Plan definitions
  const planDefs: PlanDef[] = [
    {
      id: 'free',
      name: 'Free',
      tagline: 'Try both channels with a small list.',
      cta: 'Start free',
      features: [
        '500 emails/month included',
        '₹50 WhatsApp credit on sign-up',
        '500 contacts',
        '1 user',
        'Email & WhatsApp campaigns',
        'Shared WhatsApp inbox',
        '1 signup form'
      ]
    },
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Regular campaigns for a growing list.',
      cta: 'Choose Starter',
      features: [
        '1,000 emails/month included',
        '₹100 WhatsApp credit/month',
        '2,500 contacts',
        '1 user',
        'Everything in Free',
        'Basic segments & reports',
        '1 drip sequence',
        '1 chatbot'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      tagline: 'Automate email and WhatsApp together.',
      cta: 'Choose Growth',
      featured: true,
      features: [
        '15,000 emails/month included',
        '500 WhatsApp messages/month included',
        '10,000 contacts',
        '4 users',
        'Everything in Starter',
        '5 cross-channel workflows',
        '10 drip sequences, 5 chatbots',
        'Commerce: products, inventory, orders',
        'API access'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      tagline: 'Leads, ads and unlimited automation.',
      cta: 'Choose Pro',
      features: [
        '50,000 emails/month included',
        '1,000 WhatsApp messages/month included',
        '50,000 contacts',
        '6 users',
        'Everything in Growth',
        'Ads Manager & lead forms',
        'Unlimited workflows & chatbots',
        'Priority support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'High volume, custom terms.',
      cta: 'Talk to sales',
      features: [
        'Custom email & WhatsApp credits',
        'Custom contact limits',
        'Negotiated WhatsApp rates',
        'Unlimited users',
        'Dedicated account manager',
        'Custom onboarding & SLA'
      ]
    }
  ];

  // Calculator calculations
  const incEmails = includedEmailsMap[selectedCalcPlan];
  const billableEmails = Math.max(0, emails - incEmails);
  const emailTierRate = billableEmails <= 10000 ? 0.12 : billableEmails <= 50000 ? 0.10 : billableEmails <= 100000 ? 0.08 : 0.06;

  const platformCost = getPlanFee(selectedCalcPlan);
  const emailCost = billableEmails * emailTierRate;
  const mktCost = mkt * waMarketingRate;
  const utilCost = util * waUtilityRate;
  const totalWaCost = mktCost + utilCost;

  // WhatsApp Credit / Message allowance calculation
  let waIncludedValue = 0;
  let waAllowanceText = '';

  if (selectedCalcPlan === 'growth') {
    // 500 WhatsApp messages included: covers up to 500 marketing messages (or utility)
    const coveredMkt = Math.min(mkt, 500);
    const remainingAfterMkt = 500 - coveredMkt;
    const coveredUtil = Math.min(util, remainingAfterMkt);
    waIncludedValue = Math.min((coveredMkt * waMarketingRate) + (coveredUtil * waUtilityRate), totalWaCost);
    waAllowanceText = '500 messages included';
  } else if (selectedCalcPlan === 'pro') {
    // 1,000 WhatsApp messages included: covers up to 1000 marketing messages (or utility)
    const coveredMkt = Math.min(mkt, 1000);
    const remainingAfterMkt = 1000 - coveredMkt;
    const coveredUtil = Math.min(util, remainingAfterMkt);
    waIncludedValue = Math.min((coveredMkt * waMarketingRate) + (coveredUtil * waUtilityRate), totalWaCost);
    waAllowanceText = '1,000 messages included';
  } else if (selectedCalcPlan === 'starter') {
    waIncludedValue = Math.min(100, totalWaCost);
    waAllowanceText = '₹100 credit';
  } else {
    waIncludedValue = 0;
    waAllowanceText = '₹0';
  }

  const subtotal = platformCost + emailCost + mktCost + utilCost - waIncludedValue;
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  const calcEmailRateLabel = billableEmails === 0 
    ? `within included ${num(incEmails)}` 
    : `${num(billableEmails)} extra at ${inr2(emailTierRate)}`;

  // FAQs
  const faqs = [
    {
      question: 'What does the platform fee cover?',
      answer: 'The features in your plan, your team seats (1 user on Free & Starter, 4 on Growth, 6 on Pro, unlimited on Enterprise) and your contact limit. Sending emails and WhatsApp messages is paid from your email credits and WhatsApp wallet.'
    },
    {
      question: 'Why is WhatsApp billed separately?',
      answer: 'Meta charges for every delivered WhatsApp message at official direct rates (98p for Marketing, 25p for Utility/Authentication/Service). Growth includes 500 WhatsApp messages/mo and Pro includes 1,000 messages/mo. Any extra volume draws transparently from your prepaid wallet.'
    },
    {
      question: 'How do the quarterly and yearly discounts work?',
      answer: 'Quarterly billing saves you 5% every 3 months. Yearly billing saves you 10% annually. You can change your billing interval at any time.'
    },
    {
      question: 'Do email credits expire?',
      answer: 'Purchased email credits stay valid for 12 months. Your plan’s included monthly emails and WhatsApp message quotas reset on the 1st of each month and do not roll over.'
    },
    {
      question: 'What happens if my wallet runs out?',
      answer: 'WhatsApp sending pauses until you recharge. Email and the rest of the platform keep working uninterrupted.'
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes. Upgrades and downgrades are pro-rated, and your purchased credits and wallet balance carry over.'
    },
    {
      question: 'Are prices inclusive of GST?',
      answer: 'No. All prices are in INR, and 18% GST is added at checkout.'
    }
  ];

  const handleCtaClick = (id: PlanId) => {
    if (id === 'enterprise') {
      onOpenModal('book-demo');
    } else {
      onOpenModal('start-free');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAFAFB] text-[#18181B] min-h-screen font-sans selection:bg-violet-100 selection:text-violet-900 pt-16">
      
      {/* Sub-navigation bar */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-[#E4E4E7] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-2">
            <span className="font-bold text-violet-700 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
              Pricing Plans
            </span>
            <button onClick={() => scrollToSection('plans')} className="text-zinc-600 hover:text-zinc-900 transition-colors shrink-0 cursor-pointer">Plans</button>
            <button onClick={() => scrollToSection('usage')} className="text-zinc-600 hover:text-zinc-900 transition-colors shrink-0 cursor-pointer">Credits & Wallet</button>
            <button onClick={() => scrollToSection('calculator')} className="text-zinc-600 hover:text-zinc-900 transition-colors shrink-0 cursor-pointer">Bill Calculator</button>
            <button onClick={() => scrollToSection('compare')} className="text-zinc-600 hover:text-zinc-900 transition-colors shrink-0 cursor-pointer">Full Comparison</button>
            <button onClick={() => scrollToSection('faq')} className="text-zinc-600 hover:text-zinc-900 transition-colors shrink-0 cursor-pointer">FAQ</button>
          </div>
          <button 
            onClick={() => onOpenModal('start-free')}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 bg-violet-700 hover:bg-violet-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            <span>Start Free</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center flex flex-col items-center gap-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 border border-violet-200/80 rounded-full text-violet-700 text-xs font-semibold tracking-wider uppercase">
          <Percent className="w-3 h-3" />
          <span>Simple, Transparent Pricing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 max-w-4xl leading-[1.1]">
          Email and WhatsApp marketing in one plan
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed">
          Pay a simple platform fee for the features you use. Email credits and WhatsApp messages are prepaid, so you only pay for what you send.
        </p>

        {/* Monthly / Quarterly / Yearly 3-Way Switcher */}
        <div 
          role="group" 
          aria-label="Billing period" 
          className="flex items-center gap-1.5 p-1.5 bg-zinc-100 border border-zinc-200 rounded-2xl mt-3 shadow-xs"
        >
          {/* Monthly */}
          <button
            type="button"
            aria-pressed={billingInterval === 'monthly'}
            onClick={() => setBillingInterval('monthly')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
              billingInterval === 'monthly' 
                ? 'bg-white text-zinc-900 shadow-sm' 
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Monthly
          </button>

          {/* Quarterly */}
          <button
            type="button"
            aria-pressed={billingInterval === 'quarterly'}
            onClick={() => setBillingInterval('quarterly')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
              billingInterval === 'quarterly' 
                ? 'bg-white text-zinc-900 shadow-sm' 
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <span>Quarterly</span>
            <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-100 text-amber-800">
              Save 5%
            </span>
          </button>

          {/* Yearly */}
          <button
            type="button"
            aria-pressed={billingInterval === 'yearly'}
            onClick={() => setBillingInterval('yearly')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
              billingInterval === 'yearly' 
                ? 'bg-white text-zinc-900 shadow-sm' 
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <span>Yearly</span>
            <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-violet-100 text-violet-800">
              Save 10%
            </span>
          </button>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {planDefs.map((plan) => {
            const isFeatured = !!plan.featured;
            const isHighlighted = highlightedPlan === plan.id;
            const price = plan.id === 'enterprise' 
              ? 'Custom' 
              : plan.id === 'free' 
                ? '₹0' 
                : inr(getPlanFee(plan.id));
            const unit = getUnitFor(plan.id);

            return (
              <article 
                id={`plan-${plan.id}`}
                key={plan.id}
                className={`relative bg-white rounded-2xl p-6 flex flex-col justify-between gap-5 transition-all duration-300 ${
                  isHighlighted 
                    ? 'ring-4 ring-violet-500 shadow-2xl scale-[1.02]' 
                    : isFeatured 
                      ? 'ring-2 ring-violet-700 shadow-xl shadow-violet-100/50' 
                      : 'border border-zinc-200 hover:border-zinc-300 shadow-xs'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-6 bg-violet-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Most popular
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  {/* Card Header & Share Plan Link */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-zinc-900">{plan.name}</h2>
                      <p className="text-xs text-zinc-600 min-h-[36px] leading-relaxed">{plan.tagline}</p>
                    </div>
                    
                    {/* Share / Copy Link Button */}
                    <button
                      type="button"
                      onClick={(e) => copyPlanLink(e, plan.id)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-violet-700 hover:bg-violet-50 transition-colors cursor-pointer border border-zinc-100 shrink-0"
                      title={`Copy direct link to ${plan.name} plan`}
                      aria-label={`Copy direct link to ${plan.name} plan`}
                    >
                      {copiedPlanId === plan.id ? (
                        <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Toast indicator on copy */}
                  {copiedPlanId === plan.id && (
                    <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg py-1 px-2.5 flex items-center gap-1.5 animate-fadeIn">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Direct link copied!</span>
                    </div>
                  )}

                  <div className="space-y-1 pt-2 border-t border-zinc-100">
                    <div className="text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight">
                      {price}
                    </div>
                    <div className="text-xs text-zinc-500 min-h-[32px] leading-tight">
                      {unit}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCtaClick(plan.id)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isFeatured 
                        ? 'bg-violet-700 hover:bg-violet-800 text-white shadow-md shadow-violet-200' 
                        : 'bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="pt-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-3">Included features:</div>
                    <ul className="space-y-2.5 text-xs text-zinc-700">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-violet-700 shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Copy Link Text */}
                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="font-mono">ID: {plan.id}</span>
                  <button
                    type="button"
                    onClick={(e) => copyPlanLink(e, plan.id)}
                    className="hover:text-violet-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <LinkIcon className="w-3 h-3" />
                    <span>{copiedPlanId === plan.id ? 'Copied' : 'Share link'}</span>
                  </button>
                </div>

              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          All prices in INR and exclusive of 18% GST. Email credits and WhatsApp messages are billed separately from the plan.
        </p>
      </section>

      {/* Usage, Credits & Wallet Section */}
      <section id="usage" className="bg-white border-y border-zinc-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Credits and wallet</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Your plan unlocks features. Sending is prepaid: buy email credits in packs, and top up a WhatsApp wallet that’s charged per delivered message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Email credits */}
            <div className="border border-zinc-200 rounded-2xl p-6 bg-[#FAFAFB]/50 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Email credits</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Every plan includes emails each month (500 on Free, 1,000 on Starter, 15,000 on Growth, 50,000 on Pro). Need more? 1 credit sends 1 email, and purchased credits stay valid for 12 months.
              </p>
              
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-zinc-200 text-zinc-500 font-semibold">
                      <th className="text-left pb-2.5">Pack</th>
                      <th className="text-right pb-2.5">Price</th>
                      <th className="text-right pb-2.5">Per email</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/60">
                    <tr><td className="py-2.5">10,000</td><td className="py-2.5 text-right font-semibold">₹1,200</td><td className="py-2.5 text-right text-zinc-500">₹0.12</td></tr>
                    <tr><td className="py-2.5">50,000</td><td className="py-2.5 text-right font-semibold">₹5,000</td><td className="py-2.5 text-right text-zinc-500">₹0.10</td></tr>
                    <tr><td className="py-2.5">1,00,000</td><td className="py-2.5 text-right font-semibold">₹8,000</td><td className="py-2.5 text-right text-zinc-500">₹0.08</td></tr>
                    <tr><td className="py-2.5">5,00,000</td><td className="py-2.5 text-right font-semibold">₹30,000</td><td className="py-2.5 text-right text-zinc-500">₹0.06</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Card 2: WhatsApp messages */}
            <div className="border border-zinc-200 rounded-2xl p-6 bg-[#FAFAFB]/50 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">WhatsApp messages</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Official Meta direct rates (98p for Marketing, 25p for Utility/Authentication/Service). Top up any amount into your wallet.
              </p>

              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-zinc-200 text-zinc-500 font-semibold">
                      <th className="text-left pb-2.5">Message type</th>
                      <th className="text-right pb-2.5">Per message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/60">
                    <tr><td className="py-2.5">Marketing</td><td className="py-2.5 text-right font-semibold">₹0.98 <span className="text-[10px] text-zinc-500 font-normal">(98p)</span></td></tr>
                    <tr><td className="py-2.5">Utility &amp; Authentication</td><td className="py-2.5 text-right font-semibold">₹0.25 <span className="text-[10px] text-zinc-500 font-normal">(25p)</span></td></tr>
                    <tr><td className="py-2.5">Service replies (after 1,000 free/mo)</td><td className="py-2.5 text-right font-semibold">₹0.25 <span className="text-[10px] text-zinc-500 font-normal">(25p)</span></td></tr>
                    <tr><td className="py-2.5">Incoming customer messages</td><td className="py-2.5 text-right font-semibold text-emerald-600">Free</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Card 3: Add-ons */}
            <div className="border border-zinc-200 rounded-2xl p-6 bg-[#FAFAFB]/50 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Add-ons</h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Grow your capabilities flexibly without jumping a whole tier.
              </p>

              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs">
                  <tbody className="divide-y divide-zinc-200/60">
                    <tr><td className="py-2.5">Extra 10,000 contacts</td><td className="py-2.5 text-right font-semibold">₹500/mo</td></tr>
                    <tr><td className="py-2.5">Extra user</td><td className="py-2.5 text-right font-semibold">₹300/mo</td></tr>
                    <tr><td className="py-2.5">Ads Manager on Growth</td><td className="py-2.5 text-right font-semibold">₹999/mo</td></tr>
                    <tr><td className="py-2.5">Dedicated sending IP</td><td className="py-2.5 text-right font-semibold">₹4,000/mo</td></tr>
                    <tr><td className="py-2.5">Email verification</td><td className="py-2.5 text-right font-semibold text-zinc-500">Pay per check</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Bill Calculator Section */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-7 shadow-xs">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Estimate your monthly bill</h2>
              <p className="text-sm text-zinc-600">
                Pick a plan and drag the sliders to match your exact sending volumes.
              </p>
            </div>

            {/* Plan Picker Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Select Plan</label>
              <div role="group" aria-label="Select Plan" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['free', 'starter', 'growth', 'pro'] as CalcPlanId[]).map((planKey) => {
                  const isSelected = selectedCalcPlan === planKey;
                  const name = planKey.charAt(0).toUpperCase() + planKey.slice(1);
                  return (
                    <button
                      key={planKey}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedCalcPlan(planKey)}
                      className={`py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                        isSelected 
                          ? 'bg-violet-700 text-white shadow-sm ring-1 ring-violet-700' 
                          : 'bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200'
                      }`}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slider 1: Emails */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label htmlFor="calc-emails" className="text-zinc-800 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>Emails per month</span>
                </label>
                <span className="text-violet-700 font-bold font-mono text-base">{num(emails)}</span>
              </div>
              <input
                id="calc-emails"
                type="range"
                min="0"
                max="500000"
                step="1000"
                value={emails}
                onChange={(e) => setEmails(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-violet-700"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>0</span>
                <span>100K</span>
                <span>250K</span>
                <span>500K</span>
              </div>
            </div>

            {/* Slider 2: WhatsApp Marketing */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label htmlFor="calc-mkt" className="text-zinc-800 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-zinc-400" />
                  <span>WhatsApp marketing messages (₹0.98)</span>
                </label>
                <span className="text-violet-700 font-bold font-mono text-base">{num(mkt)}</span>
              </div>
              <input
                id="calc-mkt"
                type="range"
                min="0"
                max="50000"
                step="500"
                value={mkt}
                onChange={(e) => setMkt(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-violet-700"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>0</span>
                <span>10K</span>
                <span>25K</span>
                <span>50K</span>
              </div>
            </div>

            {/* Slider 3: WhatsApp Utility */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label htmlFor="calc-util" className="text-zinc-800 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-zinc-400" />
                  <span>WhatsApp utility &amp; service messages (₹0.25)</span>
                </label>
                <span className="text-violet-700 font-bold font-mono text-base">{num(util)}</span>
              </div>
              <input
                id="calc-util"
                type="range"
                min="0"
                max="50000"
                step="500"
                value={util}
                onChange={(e) => setUtil(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-violet-700"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>0</span>
                <span>10K</span>
                <span>25K</span>
                <span>50K</span>
              </div>
            </div>

          </div>

          {/* Estimate Result Panel */}
          <aside className="lg:col-span-5 bg-[#18181B] text-[#FAFAFA] rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Estimate</span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 font-mono">
                  {billingInterval === 'yearly' 
                    ? 'Billed Yearly (10% off)' 
                    : billingInterval === 'quarterly' 
                      ? 'Billed Quarterly (5% off)' 
                      : 'Monthly Billing'}
                </span>
              </div>

              {/* Line Items */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-zinc-300">
                  <span>{selectedCalcPlan.charAt(0).toUpperCase() + selectedCalcPlan.slice(1)} platform fee</span>
                  <span className="font-semibold text-white">{inr(platformCost)}</span>
                </div>

                <div className="flex justify-between items-center text-zinc-300">
                  <span className="truncate pr-2">Email credits ({calcEmailRateLabel})</span>
                  <span className="font-semibold text-white shrink-0">{inr(emailCost)}</span>
                </div>

                <div className="flex justify-between items-center text-zinc-300">
                  <span>WhatsApp marketing (@ ₹0.98)</span>
                  <span className="font-semibold text-white">{inr(mktCost)}</span>
                </div>

                <div className="flex justify-between items-center text-zinc-300">
                  <span>WhatsApp utility &amp; service (@ ₹0.25)</span>
                  <span className="font-semibold text-white">{inr(utilCost)}</span>
                </div>

                <div className="flex justify-between items-center text-emerald-400 font-medium">
                  <span>Included WhatsApp ({waAllowanceText})</span>
                  <span className="font-bold">−{inr(waIncludedValue)}</span>
                </div>

                <div className="h-px bg-zinc-800 my-2"></div>

                <div className="flex justify-between items-center text-zinc-300">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">{inr(subtotal)}</span>
                </div>

                <div className="flex justify-between items-center text-zinc-400">
                  <span>GST (18%)</span>
                  <span className="font-semibold text-zinc-300">{inr(gst)}</span>
                </div>
              </div>

              {/* Total Display */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="text-xs text-zinc-400">Estimated total per month</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
                  {inr(grandTotal)}
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Your plan’s included emails and WhatsApp messages/credits are utilized first. Rates are based on Indian numbers.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleCtaClick(selectedCalcPlan)}
              className="w-full py-3.5 px-4 bg-white hover:bg-zinc-100 text-zinc-900 rounded-xl font-bold text-sm transition-colors cursor-pointer text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Start with {selectedCalcPlan.charAt(0).toUpperCase() + selectedCalcPlan.slice(1)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </aside>

        </div>
      </section>

      {/* Full Feature Comparison Table Section */}
      <section id="compare" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Compare every feature</h2>
          <p className="text-sm text-zinc-600">
            A granular breakdown of every capability across our tiered plans.
          </p>
        </div>

        <div className="overflow-x-auto bg-white border border-zinc-200 rounded-2xl shadow-xs">
          <table className="w-full min-w-[840px] text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/50">
                <th scope="col" className="text-left py-4 px-5 font-semibold text-zinc-500 w-[28%]">Feature</th>
                <th scope="col" className="text-center py-4 px-3 font-bold text-zinc-800">Free</th>
                <th scope="col" className="text-center py-4 px-3 font-bold text-zinc-800">Starter</th>
                <th scope="col" className="text-center py-4 px-3 font-bold text-violet-700 bg-violet-50/50">Growth</th>
                <th scope="col" className="text-center py-4 px-3 font-bold text-zinc-800">Pro</th>
                <th scope="col" className="text-center py-4 px-3 font-bold text-zinc-800">Enterprise</th>
              </tr>
            </thead>

            {/* Group 1: Plan basics */}
            <tbody>
              <tr className="bg-[#FAFAFB] border-b border-zinc-200">
                <th colSpan={6} className="text-left py-3 px-5 text-[11px] uppercase tracking-wider font-bold text-violet-700">
                  Plan basics
                </th>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Contacts</td>
                <td className="py-3 px-3 text-center text-zinc-600">500</td>
                <td className="py-3 px-3 text-center text-zinc-600">2,500</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">10,000</td>
                <td className="py-3 px-3 text-center text-zinc-600">50,000</td>
                <td className="py-3 px-3 text-center text-zinc-600">Custom</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Users</td>
                <td className="py-3 px-3 text-center text-zinc-600">1</td>
                <td className="py-3 px-3 text-center text-zinc-600">1</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">4</td>
                <td className="py-3 px-3 text-center text-zinc-600">6</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Emails included every month</td>
                <td className="py-3 px-3 text-center text-zinc-600">500</td>
                <td className="py-3 px-3 text-center text-zinc-600">1,000</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">15,000</td>
                <td className="py-3 px-3 text-center text-zinc-600">50,000</td>
                <td className="py-3 px-3 text-center text-zinc-600">Custom</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">WhatsApp messages / credit included</td>
                <td className="py-3 px-3 text-center text-zinc-600">₹50 on sign-up</td>
                <td className="py-3 px-3 text-center text-zinc-600">₹100/month</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">500 messages/mo</td>
                <td className="py-3 px-3 text-center text-zinc-600">1,000 messages/mo</td>
                <td className="py-3 px-3 text-center text-zinc-600">Custom</td>
              </tr>
            </tbody>

            {/* Group 2: Audience */}
            <tbody>
              <tr className="bg-[#FAFAFB] border-b border-zinc-200">
                <th colSpan={6} className="text-left py-3 px-5 text-[11px] uppercase tracking-wider font-bold text-violet-700">
                  Audience
                </th>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">All Contacts, Lists &amp; Tags</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Import Management</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Forms</td>
                <td className="py-3 px-3 text-center text-zinc-600">1</td>
                <td className="py-3 px-3 text-center text-zinc-600">3</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">Unlimited</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Segments</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-600">Basic</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Audience Reports</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-600">Basic</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
            </tbody>

            {/* Group 3: Email */}
            <tbody>
              <tr className="bg-[#FAFAFB] border-b border-zinc-200">
                <th colSpan={6} className="text-left py-3 px-5 text-[11px] uppercase tracking-wider font-bold text-violet-700">
                  Email
                </th>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Campaigns &amp; My Templates</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Template Library</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Drip Sequences</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-600">1</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">10</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Email Verifier</td>
                <td className="py-3 px-3 text-center text-zinc-500">Pay per use</td>
                <td className="py-3 px-3 text-center text-zinc-500">Pay per use</td>
                <td className="py-3 px-3 text-center text-zinc-700 font-medium bg-violet-50/20">Pay per use</td>
                <td className="py-3 px-3 text-center text-zinc-500">Pay per use</td>
                <td className="py-3 px-3 text-center text-zinc-500">Pay per use</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">API Reports</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
            </tbody>

            {/* Group 4: WhatsApp */}
            <tbody>
              <tr className="bg-[#FAFAFB] border-b border-zinc-200">
                <th colSpan={6} className="text-left py-3 px-5 text-[11px] uppercase tracking-wider font-bold text-violet-700">
                  WhatsApp
                </th>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Conversations (shared inbox)</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Campaigns &amp; My Templates</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Template Library</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">ChatBot (beta)</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-600">1</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">5</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Flows (beta)</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-600">1</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">5</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">API Reports</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
            </tbody>

            {/* Group 5: Automation */}
            <tbody>
              <tr className="bg-[#FAFAFB] border-b border-zinc-200">
                <th colSpan={6} className="text-left py-3 px-5 text-[11px] uppercase tracking-wider font-bold text-violet-700">
                  Automation
                </th>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Workflows</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">5</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Custom Events</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Automation Reports</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
            </tbody>

            {/* Group 6: Commerce */}
            <tbody>
              <tr className="bg-[#FAFAFB] border-b border-zinc-200">
                <th colSpan={6} className="text-left py-3 px-5 text-[11px] uppercase tracking-wider font-bold text-violet-700">
                  Commerce
                </th>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Products &amp; Product Tags</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Inventory &amp; Orders</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Store Sync</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
            </tbody>

            {/* Group 7: Ads Manager */}
            <tbody>
              <tr className="bg-[#FAFAFB] border-b border-zinc-200">
                <th colSpan={6} className="text-left py-3 px-5 text-[11px] uppercase tracking-wider font-bold text-violet-700">
                  Ads Manager
                </th>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Campaigns, Leads &amp; Lead Forms</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-700 font-medium bg-violet-50/20">Add-on</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
            </tbody>

            {/* Group 8: Platform & support */}
            <tbody>
              <tr className="bg-[#FAFAFB] border-b border-zinc-200">
                <th colSpan={6} className="text-left py-3 px-5 text-[11px] uppercase tracking-wider font-bold text-violet-700">
                  Platform &amp; support
                </th>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Developer API access</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Support</td>
                <td className="py-3 px-3 text-center text-zinc-600">Help center</td>
                <td className="py-3 px-3 text-center text-zinc-600">Email</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">Chat</td>
                <td className="py-3 px-3 text-center text-zinc-600">Priority</td>
                <td className="py-3 px-3 text-center text-zinc-600">Dedicated manager</td>
              </tr>
            </tbody>

          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white border-t border-zinc-200 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm text-zinc-600">Have questions about credits, usage or billing? We have answers.</p>
          </div>

          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left font-semibold text-zinc-900 text-base sm:text-lg cursor-pointer group py-1"
                  >
                    <span className="group-hover:text-violet-700 transition-colors">{faq.question}</span>
                    <span className="p-1 rounded-full text-zinc-400 group-hover:text-violet-700 transition-colors shrink-0 ml-4">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed pr-6">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section id="signup" className="bg-[#18181B] text-[#FAFAFA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Start free, upgrade when you grow
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              500 contacts, 500 emails a month and a WhatsApp inbox at no cost.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenModal('start-free')}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-zinc-100 text-zinc-900 transition-colors cursor-pointer shadow-lg"
            >
              Start free
            </button>
            <button
              type="button"
              onClick={() => onOpenModal('book-demo')}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 transition-colors cursor-pointer"
            >
              Talk to sales
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
