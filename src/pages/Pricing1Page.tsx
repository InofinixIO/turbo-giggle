import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  CheckCircle2,
  Share2,
  Globe,
  Loader2
} from 'lucide-react';
import { ModalType } from '../types';
import { useRouter } from '../router/RouterContext';

// Animated Price Component with smooth popLayout slide & blur transition
interface AnimatedPriceProps {
  value: string;
  className?: string;
}

export const AnimatedPrice: React.FC<AnimatedPriceProps> = ({ value, className = '' }) => {
  return (
    <span className={`inline-flex items-center overflow-hidden relative ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 10, scale: 0.97, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, scale: 0.97, filter: 'blur(2px)' }}
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// Animated Text Component for units & secondary labels
export const AnimatedText: React.FC<{ value: string; className?: string }> = ({ value, className = '' }) => {
  return (
    <span className={`inline-flex items-center overflow-hidden relative ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

interface Pricing1PageProps {
  onOpenModal: (type: ModalType) => void;
}

type PlanId = 'free' | 'starter' | 'growth' | 'pro' | 'enterprise';
type CalcPlanId = 'free' | 'starter' | 'growth' | 'pro';
type BillingInterval = 'monthly' | 'quarterly' | 'yearly';
type Currency = 'USD' | 'INR';

// API Interfaces
interface ApiPlanPricingTier {
  payable: number;
  effective_monthly: number;
  discount_percentage: number;
  billing_months?: number;
  formatted: string;
}

interface ApiPlanDto {
  name: string;
  slug: PlanId;
  description: string;
  is_custom: boolean;
  limits: {
    users: number | string;
    contacts: number | string;
    domains: number | string;
  };
  allowances: {
    emails_per_month: number | string;
    whatsapp_included: {
      type: string;
      amount?: number;
      count?: number;
      currency?: string;
      is_one_time?: boolean;
      validity_days?: number;
      destination?: string;
      description: string;
    };
  };
  pricing: {
    monthly: ApiPlanPricingTier | null;
    quarterly: ApiPlanPricingTier | null;
    yearly: ApiPlanPricingTier | null;
    is_custom?: boolean;
    contact_sales?: boolean;
  };
}

interface ApiEmailPackDto {
  credits: number;
  price: number;
  currency: string;
  formatted_price: string;
  validity_months: number;
}

interface ApiAddonDto {
  addon_key: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  billing_interval: string;
  unit: string;
  applicable_plan: string | null;
  formatted_price: string;
}

interface ApiWhatsAppRateDto {
  feature_type: string;
  category: string;
  rate_per_message: number;
  currency: string;
  description: string;
}

interface ApiRulesDto {
  free_service_messages_monthly: number;
  inbound_messages_free: boolean;
  email_pack_validity_months: number;
  free_whatsapp_bonus_validity_days: number;
}

interface ApiPricingResponse {
  currency: string;
  currency_symbol: string;
  discounts: {
    quarterly_percentage: number;
    yearly_percentage: number;
  };
  plans: ApiPlanDto[];
  email_packs: ApiEmailPackDto[];
  addons: ApiAddonDto[];
  whatsapp_rate_card: ApiWhatsAppRateDto[];
  rules: ApiRulesDto;
}

// Fallback initial data for INR
const INITIAL_INR_DATA: ApiPricingResponse = {
  currency: "INR",
  currency_symbol: "₹",
  discounts: { quarterly_percentage: 5, yearly_percentage: 10 },
  plans: [
    {
      name: "Free",
      slug: "free",
      description: "Try for free. No credit card required",
      is_custom: false,
      limits: { users: 1, contacts: 500, domains: "Shared only" },
      allowances: {
        emails_per_month: 500,
        whatsapp_included: {
          type: "credit",
          amount: 50.0,
          currency: "INR",
          is_one_time: true,
          validity_days: 90,
          description: "₹50 one-time credit (expires in 90 days)"
        }
      },
      pricing: {
        monthly: { payable: 0, effective_monthly: 0, discount_percentage: 0, formatted: "₹0/month" },
        quarterly: { payable: 0, effective_monthly: 0, discount_percentage: 5, billing_months: 3, formatted: "₹0/quarter (₹0/mo)" },
        yearly: { payable: 360, effective_monthly: 30, discount_percentage: 10, billing_months: 12, formatted: "₹360/year (₹30/mo)" }
      }
    },
    {
      name: "Starter",
      slug: "starter",
      description: "Start your journey",
      is_custom: false,
      limits: { users: 1, contacts: 2500, domains: 1 },
      allowances: {
        emails_per_month: 1000,
        whatsapp_included: {
          type: "credit",
          amount: 100.0,
          currency: "INR",
          is_one_time: false,
          description: "₹100/month credit"
        }
      },
      pricing: {
        monthly: { payable: 1499, effective_monthly: 1499, discount_percentage: 0, formatted: "₹1,499/month" },
        quarterly: { payable: 4272, effective_monthly: 1424, discount_percentage: 5, billing_months: 3, formatted: "₹4,272/quarter (₹1,424/mo)" },
        yearly: { payable: 16189.2, effective_monthly: 1349.1, discount_percentage: 10, billing_months: 12, formatted: "₹16,189/year (₹1,349/mo)" }
      }
    },
    {
      name: "Growth",
      slug: "growth",
      description: "Boost your business",
      is_custom: false,
      limits: { users: 4, contacts: 10000, domains: 3 },
      allowances: {
        emails_per_month: 15000,
        whatsapp_included: {
          type: "messages",
          count: 500,
          destination: "+91 (India recipients only)",
          is_one_time: false,
          description: "500 messages/month (India recipients only)"
        }
      },
      pricing: {
        monthly: { payable: 3999, effective_monthly: 3999, discount_percentage: 0, formatted: "₹3,999/month" },
        quarterly: { payable: 11397, effective_monthly: 3799, discount_percentage: 5, billing_months: 3, formatted: "₹11,397/quarter (₹3,799/mo)" },
        yearly: { payable: 43189.2, effective_monthly: 3599.1, discount_percentage: 10, billing_months: 12, formatted: "₹43,189/year (₹3,599/mo)" }
      }
    },
    {
      name: "Pro",
      slug: "pro",
      description: "Grow your business",
      is_custom: false,
      limits: { users: 6, contacts: 50000, domains: 10 },
      allowances: {
        emails_per_month: 50000,
        whatsapp_included: {
          type: "messages",
          count: 1000,
          destination: "+91 (India recipients only)",
          is_one_time: false,
          description: "1,000 messages/month (India recipients only)"
        }
      },
      pricing: {
        monthly: { payable: 7999, effective_monthly: 7999, discount_percentage: 0, formatted: "₹7,999/month" },
        quarterly: { payable: 22797, effective_monthly: 7599, discount_percentage: 5, billing_months: 3, formatted: "₹22,797/quarter (₹7,599/mo)" },
        yearly: { payable: 86389.2, effective_monthly: 7199.1, discount_percentage: 10, billing_months: 12, formatted: "₹86,389/year (₹7,199/mo)" }
      }
    },
    {
      name: "Enterprise",
      slug: "enterprise",
      description: "High volume, custom terms",
      is_custom: true,
      limits: { users: "unlimited", contacts: "custom", domains: "unlimited" },
      allowances: {
        emails_per_month: "custom",
        whatsapp_included: {
          type: "custom",
          is_one_time: false,
          description: "Custom per contract"
        }
      },
      pricing: { is_custom: true, contact_sales: true, monthly: null, quarterly: null, yearly: null }
    }
  ],
  email_packs: [
    { credits: 10000, price: 1200.0, currency: "INR", formatted_price: "₹1,200", validity_months: 12 },
    { credits: 50000, price: 5000.0, currency: "INR", formatted_price: "₹5,000", validity_months: 12 },
    { credits: 100000, price: 8000.0, currency: "INR", formatted_price: "₹8,000", validity_months: 12 },
    { credits: 500000, price: 30000.0, currency: "INR", formatted_price: "₹30,000", validity_months: 12 }
  ],
  addons: [
    { addon_key: "EXTRA_DOMAIN", name: "Custom Sending Domain", description: "Add 1 additional email sending domain with custom DNS & tracking", price: 300.0, currency: "INR", billing_interval: "MONTHLY", unit: "per month", applicable_plan: null, formatted_price: "₹300" },
    { addon_key: "EXTRA_CONTACTS_10K", name: "Extra 10,000 Contacts", description: "Increase workspace contact limit by 10,000", price: 500.0, currency: "INR", billing_interval: "MONTHLY", unit: "per month", applicable_plan: null, formatted_price: "₹500" },
    { addon_key: "EXTRA_USER", name: "Extra User", description: "Add 1 additional team member to your workspace", price: 300.0, currency: "INR", billing_interval: "MONTHLY", unit: "per month", applicable_plan: null, formatted_price: "₹300" },
    { addon_key: "ADS_MANAGER_GROWTH", name: "Ads Manager on Growth plan", description: "Full access to Ads Manager on the Growth plan", price: 999.0, currency: "INR", billing_interval: "MONTHLY", unit: "per month", applicable_plan: "Growth", formatted_price: "₹999" },
    { addon_key: "DEDICATED_IP", name: "Dedicated Sending IP", description: "Exclusive IP address for custom email sending reputation", price: 4000.0, currency: "INR", billing_interval: "MONTHLY", unit: "per month", applicable_plan: null, formatted_price: "₹4,000" },
    { addon_key: "EMAIL_VERIFICATION", name: "Email Verification", description: "Verify email addresses before sending", price: 0.1, currency: "INR", billing_interval: "MONTHLY", unit: "per check", applicable_plan: null, formatted_price: "₹0.10" }
  ],
  whatsapp_rate_card: [
    { feature_type: "WHATSAPP_MARKETING", category: "marketing", rate_per_message: 0.85, currency: "INR", description: "WhatsApp Marketing conversation" },
    { feature_type: "WHATSAPP_UTILITY", category: "utility", rate_per_message: 0.4, currency: "INR", description: "WhatsApp Utility message" },
    { feature_type: "WHATSAPP_AUTHENTICATION", category: "authentication", rate_per_message: 0.4, currency: "INR", description: "WhatsApp Authentication OTP" },
    { feature_type: "WHATSAPP_SERVICE", category: "service", rate_per_message: 0.4, currency: "INR", description: "WhatsApp Service conversation" }
  ],
  rules: {
    free_service_messages_monthly: 1000,
    inbound_messages_free: true,
    email_pack_validity_months: 12,
    free_whatsapp_bonus_validity_days: 90
  }
};

// Fallback initial data for USD
const INITIAL_USD_DATA: ApiPricingResponse = {
  currency: "USD",
  currency_symbol: "$",
  discounts: { quarterly_percentage: 5, yearly_percentage: 10 },
  plans: [
    {
      name: "Free",
      slug: "free",
      description: "Try for free. No credit card required",
      is_custom: false,
      limits: { users: 1, contacts: 500, domains: "Shared only" },
      allowances: {
        emails_per_month: 500,
        whatsapp_included: {
          type: "credit",
          amount: 1.0,
          currency: "USD",
          is_one_time: true,
          validity_days: 90,
          description: "$1 one-time credit (expires in 90 days)"
        }
      },
      pricing: {
        monthly: { payable: 0, effective_monthly: 0, discount_percentage: 0, formatted: "$0/month" },
        quarterly: { payable: 0, effective_monthly: 0, discount_percentage: 5, billing_months: 3, formatted: "$0/quarter ($0/mo)" },
        yearly: { payable: 0, effective_monthly: 0, discount_percentage: 10, billing_months: 12, formatted: "$0/year ($0/mo)" }
      }
    },
    {
      name: "Starter",
      slug: "starter",
      description: "Start your journey",
      is_custom: false,
      limits: { users: 1, contacts: 2500, domains: 1 },
      allowances: {
        emails_per_month: 1000,
        whatsapp_included: {
          type: "credit",
          amount: 2.0,
          currency: "USD",
          is_one_time: false,
          description: "$2/month credit"
        }
      },
      pricing: {
        monthly: { payable: 45, effective_monthly: 45, discount_percentage: 0, formatted: "$45/month" },
        quarterly: { payable: 129, effective_monthly: 43, discount_percentage: 5, billing_months: 3, formatted: "$129/quarter ($43/mo)" },
        yearly: { payable: 492, effective_monthly: 41, discount_percentage: 10, billing_months: 12, formatted: "$492/year ($41/mo)" }
      }
    },
    {
      name: "Growth",
      slug: "growth",
      description: "Boost your business",
      is_custom: false,
      limits: { users: 4, contacts: 10000, domains: 3 },
      allowances: {
        emails_per_month: 15000,
        whatsapp_included: {
          type: "credit",
          amount: 10.0,
          currency: "USD",
          is_one_time: false,
          description: "$10/month credit"
        }
      },
      pricing: {
        monthly: { payable: 99, effective_monthly: 99, discount_percentage: 0, formatted: "$99/month" },
        quarterly: { payable: 282, effective_monthly: 94, discount_percentage: 5, billing_months: 3, formatted: "$282/quarter ($94/mo)" },
        yearly: { payable: 1068, effective_monthly: 89, discount_percentage: 10, billing_months: 12, formatted: "$1,068/year ($89/mo)" }
      }
    },
    {
      name: "Pro",
      slug: "pro",
      description: "Grow your business",
      is_custom: false,
      limits: { users: 6, contacts: 50000, domains: 10 },
      allowances: {
        emails_per_month: 50000,
        whatsapp_included: {
          type: "credit",
          amount: 20.0,
          currency: "USD",
          is_one_time: false,
          description: "$20/month credit"
        }
      },
      pricing: {
        monthly: { payable: 299, effective_monthly: 299, discount_percentage: 0, formatted: "$299/month" },
        quarterly: { payable: 852, effective_monthly: 284, discount_percentage: 5, billing_months: 3, formatted: "$852/quarter ($284/mo)" },
        yearly: { payable: 3228, effective_monthly: 269, discount_percentage: 10, billing_months: 12, formatted: "$3,228/year ($269/mo)" }
      }
    },
    {
      name: "Enterprise",
      slug: "enterprise",
      description: "High volume, custom terms",
      is_custom: true,
      limits: { users: "unlimited", contacts: "custom", domains: "unlimited" },
      allowances: {
        emails_per_month: "custom",
        whatsapp_included: {
          type: "custom",
          is_one_time: false,
          description: "Custom per contract"
        }
      },
      pricing: { is_custom: true, contact_sales: true, monthly: null, quarterly: null, yearly: null }
    }
  ],
  email_packs: [
    { credits: 10000, price: 20.0, currency: "USD", formatted_price: "$20", validity_months: 12 },
    { credits: 50000, price: 80.0, currency: "USD", formatted_price: "$80", validity_months: 12 },
    { credits: 100000, price: 120.0, currency: "USD", formatted_price: "$120", validity_months: 12 },
    { credits: 500000, price: 450.0, currency: "USD", formatted_price: "$450", validity_months: 12 }
  ],
  addons: [
    { addon_key: "EXTRA_DOMAIN", name: "Custom Sending Domain", description: "Add 1 additional email sending domain with custom DNS & tracking", price: 5.0, currency: "USD", billing_interval: "MONTHLY", unit: "per month", applicable_plan: null, formatted_price: "$5" },
    { addon_key: "EXTRA_CONTACTS_10K", name: "Extra 10,000 Contacts", description: "Increase workspace contact limit by 10,000", price: 10.0, currency: "USD", billing_interval: "MONTHLY", unit: "per month", applicable_plan: null, formatted_price: "$10" },
    { addon_key: "EXTRA_USER", name: "Extra User", description: "Add 1 additional team member to your workspace", price: 8.0, currency: "USD", billing_interval: "MONTHLY", unit: "per month", applicable_plan: null, formatted_price: "$8" },
    { addon_key: "ADS_MANAGER_GROWTH", name: "Ads Manager on Growth plan", description: "Full access to Ads Manager on the Growth plan", price: 25.0, currency: "USD", billing_interval: "MONTHLY", unit: "per month", applicable_plan: "Growth", formatted_price: "$25" },
    { addon_key: "DEDICATED_IP", name: "Dedicated Sending IP", description: "Exclusive IP address for custom email sending reputation", price: 60.0, currency: "USD", billing_interval: "MONTHLY", unit: "per month", applicable_plan: null, formatted_price: "$60" },
    { addon_key: "EMAIL_VERIFICATION", name: "Email Verification", description: "Verify email addresses before sending", price: 0.0, currency: "USD", billing_interval: "MONTHLY", unit: "per check", applicable_plan: null, formatted_price: "$0.00" }
  ],
  whatsapp_rate_card: [
    { feature_type: "WHATSAPP_MARKETING", category: "marketing", rate_per_message: 0.01, currency: "USD", description: "WhatsApp Marketing conversation" },
    { feature_type: "WHATSAPP_UTILITY", category: "utility", rate_per_message: 0.0047, currency: "USD", description: "WhatsApp Utility message" },
    { feature_type: "WHATSAPP_AUTHENTICATION", category: "authentication", rate_per_message: 0.0047, currency: "USD", description: "WhatsApp Authentication OTP" },
    { feature_type: "WHATSAPP_SERVICE", category: "service", rate_per_message: 0.0047, currency: "USD", description: "WhatsApp Service conversation" }
  ],
  rules: {
    free_service_messages_monthly: 1000,
    inbound_messages_free: true,
    email_pack_validity_months: 12,
    free_whatsapp_bonus_validity_days: 90
  }
};

export const Pricing1Page: React.FC<Pricing1PageProps> = ({ onOpenModal }) => {
  const { navigate } = useRouter();

  // Currency state - default auto-detects non-Indian users as USD
  const [currency, setCurrency] = useState<Currency>(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const currParam = params.get('currency')?.toUpperCase();
        if (currParam === 'USD' || currParam === 'INR') {
          return currParam as Currency;
        }
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (tz.toLowerCase().includes('kolkata') || tz.toLowerCase().includes('calcutta') || tz.toLowerCase().includes('india')) {
          return 'INR';
        }
        const lang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        if (lang.toLowerCase().includes('in')) {
          return 'INR';
        }
      }
    } catch {
      // fallback
    }
    return 'USD';
  });

  // API State
  const [apiData, setApiData] = useState<ApiPricingResponse>(() => 
    currency === 'USD' ? INITIAL_USD_DATA : INITIAL_INR_DATA
  );
  const [isLoadingApi, setIsLoadingApi] = useState<boolean>(false);

  // User Interactive State
  const [billingInterval, setBillingInterval] = useState<BillingInterval>('monthly');
  const [selectedCalcPlan, setSelectedCalcPlan] = useState<CalcPlanId>('growth');
  const [emails, setEmails] = useState<number>(50000);
  const [mkt, setMkt] = useState<number>(5000);
  const [util, setUtil] = useState<number>(2000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedPlanId, setCopiedPlanId] = useState<PlanId | 'all' | null>(null);
  const [copiedEstimate, setCopiedEstimate] = useState<boolean>(false);
  const [highlightedPlan, setHighlightedPlan] = useState<PlanId | null>(null);
  const [highlightedCalc, setHighlightedCalc] = useState<boolean>(false);

  // Fetch Pricing Data from API: https://api.sit.onedigilta.in/api/pricing with full offline fallback
  useEffect(() => {
    const controller = new AbortController();
    const fetchPricing = async () => {
      setIsLoadingApi(true);
      try {
        const url = `https://api.sit.onedigilta.in/api/pricing?currency=${currency}`;
        const response = await fetch(url, { signal: controller.signal });
        if (response.ok) {
          const rawData = await response.json();
          // Support both direct object and wrapped { data: ... }
          const data: ApiPricingResponse = (rawData && rawData.plans && Array.isArray(rawData.plans))
            ? rawData
            : (rawData && rawData.data && Array.isArray(rawData.data.plans))
              ? rawData.data
              : null;

          if (data && data.plans && Array.isArray(data.plans)) {
            setApiData(data);
            return;
          }
        }
        // Fallback to static data if API response is not ok
        setApiData(currency === 'USD' ? INITIAL_USD_DATA : INITIAL_INR_DATA);
      } catch (err: any) {
        if (err.name === 'AbortError') {
          // Do not overwrite state if request was aborted
          return;
        }
        console.warn('Pricing API fetch failed, using fallback:', err);
        // Fallback to static data on network error, CORS, or timeout
        setApiData(currency === 'USD' ? INITIAL_USD_DATA : INITIAL_INR_DATA);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingApi(false);
        }
      }
    };

    fetchPricing();
    return () => controller.abort();
  }, [currency]);

  // Read rates from API response
  const waMarketingRate = useMemo(() => {
    const item = apiData.whatsapp_rate_card.find(r => r.category === 'marketing' || r.feature_type === 'WHATSAPP_MARKETING');
    return item ? item.rate_per_message : (currency === 'USD' ? 0.01 : 0.85);
  }, [apiData, currency]);

  const waUtilityRate = useMemo(() => {
    const item = apiData.whatsapp_rate_card.find(r => r.category === 'utility' || r.feature_type === 'WHATSAPP_UTILITY');
    return item ? item.rate_per_message : (currency === 'USD' ? 0.0047 : 0.40);
  }, [apiData, currency]);

  const currSymbol = apiData.currency_symbol || (currency === 'USD' ? '$' : '₹');

  // Helper formatters
  const money = (n: number) => {
    if (currency === 'USD' || apiData.currency === 'USD') {
      return '$' + Math.round(n).toLocaleString('en-US');
    }
    return '₹' + Math.round(n).toLocaleString('en-IN');
  };

  const moneyDec = (n: number) => {
    if (currency === 'USD' || apiData.currency === 'USD') {
      return '$' + n.toFixed(3);
    }
    return '₹' + n.toFixed(2);
  };

  const num = (n: number) => n.toLocaleString(currency === 'USD' || apiData.currency === 'USD' ? 'en-US' : 'en-IN');

  const getPlanBySlug = (slug: PlanId) => {
    return apiData.plans.find(p => p.slug.toLowerCase() === slug.toLowerCase());
  };

  // Plan Price lookup from API response
  const getPlanPricing = (slug: PlanId) => {
    const plan = getPlanBySlug(slug);
    if (!plan || plan.is_custom || !plan.pricing) {
      return { price: 'Custom', unit: 'Volume-based pricing', payable: 0, effectiveMonthly: 0 };
    }

    const tier = billingInterval === 'yearly' 
      ? plan.pricing.yearly 
      : billingInterval === 'quarterly' 
        ? plan.pricing.quarterly 
        : plan.pricing.monthly;

    if (!tier) {
      return { price: 'Custom', unit: 'Volume-based pricing', payable: 0, effectiveMonthly: 0 };
    }

    const effectiveMonthly = tier.effective_monthly;
    const payable = tier.payable;
    const taxSuffix = (apiData.currency === 'INR' || currency === 'INR') ? ' + GST' : '';

    // If both payable and effective_monthly are 0, show Free forever
    if (payable === 0 && effectiveMonthly === 0) {
      return { price: `${currSymbol}0`, unit: 'Free forever', payable: 0, effectiveMonthly: 0 };
    }

    const priceFormatted = money(effectiveMonthly);

    let unit = `per month${taxSuffix}`;
    if (billingInterval === 'quarterly') {
      unit = `per month, billed quarterly (${money(payable)})${taxSuffix}`;
    } else if (billingInterval === 'yearly') {
      unit = `per month, billed yearly (${money(payable)})${taxSuffix}`;
    }

    return { price: priceFormatted, unit, payable, effectiveMonthly };
  };

  // Allowances lookup from API response
  const getIncludedEmails = (slug: CalcPlanId): number => {
    const plan = apiData.plans.find(p => p.slug === slug);
    if (plan && typeof plan.allowances.emails_per_month === 'number') {
      return plan.allowances.emails_per_month;
    }
    return slug === 'free' ? 500 : slug === 'starter' ? 1000 : slug === 'growth' ? 15000 : 50000;
  };

  // Plan Features List builder
  const getPlanFeatures = (plan: ApiPlanDto): string[] => {
    const features: string[] = [];
    const emailsCount = typeof plan.allowances.emails_per_month === 'number' 
      ? `${num(plan.allowances.emails_per_month)} emails/month included` 
      : 'Custom email quota';
    features.push(emailsCount);

    if (plan.allowances.whatsapp_included.description) {
      features.push(plan.allowances.whatsapp_included.description);
    }

    if (typeof plan.limits.contacts === 'number') {
      features.push(`${num(plan.limits.contacts)} contacts`);
    } else {
      features.push('Custom contact limits');
    }

    if (typeof plan.limits.users === 'number') {
      features.push(`${plan.limits.users} user${plan.limits.users > 1 ? 's' : ''}`);
    } else {
      features.push('Unlimited users');
    }

    if (plan.slug === 'free') {
      features.push('Shared domain only', 'Email & WhatsApp campaigns', 'Shared WhatsApp inbox', '1 signup form');
    } else if (plan.slug === 'starter') {
      features.push('1 sending domain', 'Custom tracking domain', 'Everything in Free', 'Basic segments & reports', '1 drip sequence', '1 chatbot');
    } else if (plan.slug === 'growth') {
      features.push('3 sending domains', 'Custom tracking domain', 'Everything in Starter', '5 cross-channel workflows', '10 drip sequences, 5 chatbots', 'Commerce: products, inventory, orders', 'API access');
    } else if (plan.slug === 'pro') {
      features.push('10 sending domains', 'Custom tracking domain', 'Everything in Growth', 'Ads Manager & lead forms', 'Unlimited workflows & chatbots', 'Priority support');
    } else if (plan.slug === 'enterprise') {
      features.push('Unlimited sending domains', 'Custom tracking domain', 'Negotiated WhatsApp rates', 'Dedicated account manager', 'Custom onboarding & SLA');
    }

    return features;
  };

  // Handle URL deep linking (e.g. ?plan=growth&emails=60000&mkt=8000&util=3000&billing=quarterly&currency=USD#calculator)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const planParam = params.get('plan') as PlanId | null;
      const billingParam = params.get('billing') as BillingInterval | null;
      const currParam = params.get('currency')?.toUpperCase() as Currency | null;
      const emailsParam = params.get('emails');
      const mktParam = params.get('mkt');
      const utilParam = params.get('util');

      if (currParam && (currParam === 'USD' || currParam === 'INR')) {
        setCurrency(currParam);
      }

      if (billingParam && ['monthly', 'quarterly', 'yearly'].includes(billingParam)) {
        setBillingInterval(billingParam);
      }

      if (emailsParam && !isNaN(Number(emailsParam))) {
        setEmails(Math.max(0, Math.min(500000, Number(emailsParam))));
      }
      if (mktParam && !isNaN(Number(mktParam))) {
        setMkt(Math.max(0, Math.min(50000, Number(mktParam))));
      }
      if (utilParam && !isNaN(Number(utilParam))) {
        setUtil(Math.max(0, Math.min(50000, Number(utilParam))));
      }

      if (planParam && ['free', 'starter', 'growth', 'pro', 'enterprise'].includes(planParam)) {
        if (['free', 'starter', 'growth', 'pro'].includes(planParam)) {
          setSelectedCalcPlan(planParam as CalcPlanId);
        }
      }

      const hasCalcParams = emailsParam !== null || mktParam !== null || utilParam !== null;
      const isCalcTarget = window.location.hash === '#calculator' || hasCalcParams;

      if (isCalcTarget) {
        setTimeout(() => {
          const el = document.getElementById('calculator');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setHighlightedCalc(true);
            setTimeout(() => setHighlightedCalc(false), 3500);
          }
        }, 350);
      } else if (planParam) {
        setTimeout(() => {
          const el = document.getElementById(`plan-${planParam}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setHighlightedPlan(planParam);
            setTimeout(() => setHighlightedPlan(null), 3500);
          }
        }, 300);
      }
    } catch {
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
      url.searchParams.set('currency', currency);
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

  // Copy shareable link for current estimate calculator configuration
  const copyEstimateLink = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.set('plan', selectedCalcPlan);
      url.searchParams.set('emails', emails.toString());
      url.searchParams.set('mkt', mkt.toString());
      url.searchParams.set('util', util.toString());
      url.searchParams.set('billing', billingInterval);
      url.searchParams.set('currency', currency);
      url.hash = 'calculator';

      navigator.clipboard.writeText(url.toString()).then(() => {
        setCopiedEstimate(true);
        setTimeout(() => setCopiedEstimate(false), 2500);
      });
    } catch {
      // fallback
    }
  };

  // Calculator calculations
  const incEmails = getIncludedEmails(selectedCalcPlan);
  const billableEmails = Math.max(0, emails - incEmails);

  // Email tier rates
  const emailTierRate = currency === 'USD'
    ? (billableEmails <= 10000 ? 0.0020 : billableEmails <= 50000 ? 0.0016 : billableEmails <= 100000 ? 0.0012 : 0.0009)
    : (billableEmails <= 10000 ? 0.12 : billableEmails <= 50000 ? 0.10 : billableEmails <= 100000 ? 0.08 : 0.06);

  const currentPlanPricing = getPlanPricing(selectedCalcPlan);
  const platformCost = currentPlanPricing.effectiveMonthly;
  const emailCost = billableEmails * emailTierRate;
  const mktCost = mkt * waMarketingRate;
  const utilCost = util * waUtilityRate;
  const totalWaCost = mktCost + utilCost;

  // WhatsApp Credit / Message allowance calculation based on API
  let waIncludedValue = 0;
  let waAllowanceText = '';

  const activeCalcPlanDto = apiData.plans.find(p => p.slug === selectedCalcPlan);
  const waIncludedInfo = activeCalcPlanDto?.allowances.whatsapp_included;

  if (waIncludedInfo?.type === 'messages' && waIncludedInfo.count) {
    const coveredMkt = Math.min(mkt, waIncludedInfo.count);
    const remainingAfterMkt = waIncludedInfo.count - coveredMkt;
    const coveredUtil = Math.min(util, remainingAfterMkt);
    waIncludedValue = Math.min((coveredMkt * waMarketingRate) + (coveredUtil * waUtilityRate), totalWaCost);
    waAllowanceText = `${num(waIncludedInfo.count)} messages included`;
  } else if (waIncludedInfo?.type === 'credit' && waIncludedInfo.amount) {
    waIncludedValue = Math.min(waIncludedInfo.amount, totalWaCost);
    waAllowanceText = `${apiData.currency_symbol}${waIncludedInfo.amount} credit`;
  } else {
    waIncludedValue = 0;
    waAllowanceText = `${apiData.currency_symbol}0`;
  }

  const subtotal = platformCost + emailCost + mktCost + utilCost - waIncludedValue;
  const taxRate = currency === 'INR' ? 0.18 : 0; // 18% GST for INR
  const taxAmount = subtotal * taxRate;
  const grandTotal = subtotal + taxAmount;

  const calcEmailRateLabel = billableEmails === 0 
    ? `within included ${num(incEmails)}` 
    : `${num(billableEmails)} extra at ${moneyDec(emailTierRate)}`;

  // FAQs
  const faqs = [
    {
      question: 'What does the platform fee cover?',
      answer: 'The features in your plan, your team seats, verified domains, and your contact limit. Sending emails and WhatsApp messages is paid from your email credits and WhatsApp wallet.'
    },
    {
      question: 'Why is WhatsApp billed separately?',
      answer: `WhatsApp messages are charged at official Meta rates (${currency === 'USD' ? `$${waMarketingRate} for Marketing, $${waUtilityRate} for Utility/Auth` : `₹${waMarketingRate} for Marketing, ₹${waUtilityRate} for Utility/Authentication`}). Growth includes ${getPlanBySlug('growth')?.allowances.whatsapp_included.count ?? 500} WhatsApp messages/mo and Pro includes ${getPlanBySlug('pro')?.allowances.whatsapp_included.count ?? 1000} messages/mo. Any extra volume draws transparently from your prepaid wallet.`
    },
    {
      question: 'How do the quarterly and yearly discounts work?',
      answer: `Quarterly billing saves you ${apiData.discounts.quarterly_percentage}% every 3 months. Yearly billing saves you ${apiData.discounts.yearly_percentage}% annually. You can switch between billing intervals at any time.`
    },
    {
      question: 'Do email credits expire?',
      answer: `Purchased email credit packs stay valid for ${apiData.rules.email_pack_validity_months} months. Your plan’s included monthly emails and WhatsApp message quotas reset on the 1st of each month.`
    },
    {
      question: 'What happens if my wallet runs out?',
      answer: 'WhatsApp sending pauses until you recharge. Email and the rest of the platform keep working uninterrupted.'
    },
    {
      question: 'Can I change plans or currency later?',
      answer: 'Yes. Upgrades and downgrades are pro-rated, and your purchased credits and wallet balance carry over.'
    },
    {
      question: currency === 'INR' ? 'Are prices inclusive of GST?' : 'Are taxes included?',
      answer: currency === 'INR' 
        ? 'No. All INR prices are exclusive of 18% GST, which is calculated at checkout.' 
        : 'Prices in USD are exclusive of applicable local jurisdiction taxes, calculated at checkout based on your billing address.'
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

          <div className="flex items-center gap-3 shrink-0">
            {/* Currency toggle in subnav */}
            <div className="flex items-center p-0.5 bg-zinc-100 border border-zinc-200 rounded-lg text-[11px] font-semibold relative">
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`relative px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  currency === 'USD' ? 'text-violet-700' : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                {currency === 'USD' && (
                  <motion.div
                    layoutId="subnavCurrencyPill"
                    className="absolute inset-0 bg-white rounded-md shadow-xs border border-zinc-200/50"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">USD ($)</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`relative px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  currency === 'INR' ? 'text-violet-700' : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                {currency === 'INR' && (
                  <motion.div
                    layoutId="subnavCurrencyPill"
                    className="absolute inset-0 bg-white rounded-md shadow-xs border border-zinc-200/50"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">INR (₹)</span>
              </button>
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
      </div>

      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center flex flex-col items-center gap-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 border border-violet-200/80 rounded-full text-violet-700 text-xs font-semibold tracking-wider uppercase">
          <Percent className="w-3 h-3" />
          <span>Simple, Transparent Pricing</span>
          {isLoadingApi && <Loader2 className="w-3 h-3 animate-spin ml-1 text-violet-500" />}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 max-w-4xl leading-[1.1]">
          Email and WhatsApp marketing in one plan
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed">
          Pay a simple platform fee for the features you use. Email credits and WhatsApp messages are prepaid, so you only pay for what you send.
        </p>

        {/* Currency & Billing Switchers Container */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
          
          {/* Currency Switcher */}
          <div className="flex items-center p-1 bg-zinc-100 border border-zinc-200 rounded-2xl shadow-xs relative">
            <button
              type="button"
              aria-pressed={currency === 'USD'}
              onClick={() => setCurrency('USD')}
              className={`relative px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-1.5 ${
                currency === 'USD' 
                  ? 'text-violet-700' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {currency === 'USD' && (
                <motion.div
                  layoutId="currencyHeroPill"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-zinc-200/50"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>USD ($)</span>
                <span className="text-[10px] text-zinc-400 font-normal">Global</span>
              </span>
            </button>
            <button
              type="button"
              aria-pressed={currency === 'INR'}
              onClick={() => setCurrency('INR')}
              className={`relative px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-1.5 ${
                currency === 'INR' 
                  ? 'text-violet-700' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {currency === 'INR' && (
                <motion.div
                  layoutId="currencyHeroPill"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-zinc-200/50"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>INR (₹)</span>
                <span className="text-[10px] text-zinc-400 font-normal">India</span>
              </span>
            </button>
          </div>

          {/* Monthly / Quarterly / Yearly 3-Way Switcher */}
          <div 
            role="group" 
            aria-label="Billing period" 
            className="flex items-center gap-1 p-1 bg-zinc-100 border border-zinc-200 rounded-2xl shadow-xs relative"
          >
            {/* Monthly */}
            <button
              type="button"
              aria-pressed={billingInterval === 'monthly'}
              onClick={() => setBillingInterval('monthly')}
              className={`relative px-3.5 sm:px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer ${
                billingInterval === 'monthly' 
                  ? 'text-zinc-900' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {billingInterval === 'monthly' && (
                <motion.div
                  layoutId="billingHeroPill"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-zinc-200/50"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>

            {/* Quarterly */}
            <button
              type="button"
              aria-pressed={billingInterval === 'quarterly'}
              onClick={() => setBillingInterval('quarterly')}
              className={`relative px-3.5 sm:px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-1.5 ${
                billingInterval === 'quarterly' 
                  ? 'text-zinc-900' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {billingInterval === 'quarterly' && (
                <motion.div
                  layoutId="billingHeroPill"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-zinc-200/50"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Quarterly</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                  -{apiData.discounts.quarterly_percentage}%
                </span>
              </span>
            </button>

            {/* Yearly */}
            <button
              type="button"
              aria-pressed={billingInterval === 'yearly'}
              onClick={() => setBillingInterval('yearly')}
              className={`relative px-3.5 sm:px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-1.5 ${
                billingInterval === 'yearly' 
                  ? 'text-zinc-900' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {billingInterval === 'yearly' && (
                <motion.div
                  layoutId="billingHeroPill"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-zinc-200/50"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Yearly</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-violet-100 text-violet-800">
                  -{apiData.discounts.yearly_percentage}%
                </span>
              </span>
            </button>
          </div>

        </div>

        {/* Currency notice for clarity */}
        <p className="text-xs text-zinc-400">
          {currency === 'USD' ? 'Showing live international pricing in USD ($)' : 'Showing live domestic pricing in INR (₹) + GST'}
        </p>
      </section>

      {/* Plans Section */}
      <section id="plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {apiData.plans.map((plan) => {
            const isFeatured = plan.slug === 'growth';
            const isHighlighted = highlightedPlan === plan.slug;
            const pricing = getPlanPricing(plan.slug);
            const features = getPlanFeatures(plan);

            return (
              <article 
                id={`plan-${plan.slug}`}
                key={plan.slug}
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
                      <p className="text-xs text-zinc-600 min-h-[36px] leading-relaxed">{plan.description}</p>
                    </div>
                    
                    {/* Share / Copy Link Button */}
                    <button
                      type="button"
                      onClick={(e) => copyPlanLink(e, plan.slug)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-violet-700 hover:bg-violet-50 transition-colors cursor-pointer border border-zinc-100 shrink-0"
                      title={`Copy direct link to ${plan.name} plan (${currency})`}
                      aria-label={`Copy direct link to ${plan.name} plan`}
                    >
                      {copiedPlanId === plan.slug ? (
                        <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Toast indicator on copy */}
                  {copiedPlanId === plan.slug && (
                    <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg py-1 px-2.5 flex items-center gap-1.5 animate-fadeIn">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{currency} link copied!</span>
                    </div>
                  )}

                  <div className="space-y-1 pt-2 border-t border-zinc-100 overflow-hidden">
                    <div className="text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight min-h-[44px] flex items-center">
                      <AnimatedPrice value={pricing.price} />
                    </div>
                    <div className="text-xs text-zinc-500 min-h-[32px] leading-tight flex items-center">
                      <AnimatedText value={pricing.unit} />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCtaClick(plan.slug)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isFeatured 
                        ? 'bg-violet-700 hover:bg-violet-800 text-white shadow-md shadow-violet-200' 
                        : 'bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300'
                    }`}
                  >
                    <span>{plan.slug === 'enterprise' ? 'Talk to sales' : plan.slug === 'free' ? 'Start free' : `Choose ${plan.name}`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="pt-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-3">Included features:</div>
                    <ul className="space-y-2.5 text-xs text-zinc-700">
                      {features.map((feat, idx) => (
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
                  <span className="font-mono">ID: {plan.slug}</span>
                  <button
                    type="button"
                    onClick={(e) => copyPlanLink(e, plan.slug)}
                    className="hover:text-violet-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <LinkIcon className="w-3 h-3" />
                    <span>{copiedPlanId === plan.slug ? 'Copied' : `Share (${currency})`}</span>
                  </button>
                </div>

              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          {currency === 'USD' 
            ? 'All prices in USD. Email credits and WhatsApp messages are billed separately from the plan.' 
            : 'All prices in INR and exclusive of 18% GST. Email credits and WhatsApp messages are billed separately from the plan.'}
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
                Every plan includes monthly emails ({num(getIncludedEmails('free'))} Free, {num(getIncludedEmails('starter'))} Starter, {num(getIncludedEmails('growth'))} Growth, {num(getIncludedEmails('pro'))} Pro). Purchased credits remain valid for {apiData.rules.email_pack_validity_months} months.
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
                    {apiData.email_packs.map((pack) => {
                      const perEmailRate = pack.price / pack.credits;
                      const formattedRate = currency === 'USD' ? `$${perEmailRate.toFixed(4)}` : `₹${perEmailRate.toFixed(2)}`;
                      return (
                        <tr key={pack.credits}>
                          <td className="py-2.5">{num(pack.credits)}</td>
                          <td className="py-2.5 text-right font-semibold">
                            <AnimatedPrice value={pack.formatted_price} />
                          </td>
                          <td className="py-2.5 text-right text-zinc-500">
                            <AnimatedPrice value={formattedRate} />
                          </td>
                        </tr>
                      );
                    })}
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
                Official Meta direct rates in {currency}. Top up any amount into your wallet, whenever you need.
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
                    {apiData.whatsapp_rate_card.map((rate) => {
                      const label = rate.category.charAt(0).toUpperCase() + rate.category.slice(1);
                      const displayRate = currency === 'USD' 
                        ? `$${rate.rate_per_message}` 
                        : `₹${rate.rate_per_message.toFixed(2)}`;
                      return (
                        <tr key={rate.feature_type}>
                          <td className="py-2.5">{label}</td>
                          <td className="py-2.5 text-right font-semibold">
                            <AnimatedPrice value={displayRate} />
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td className="py-2.5">Incoming customer messages</td>
                      <td className="py-2.5 text-right font-semibold text-emerald-600">Free</td>
                    </tr>
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
                    {apiData.addons.map((addon) => (
                      <tr key={addon.addon_key}>
                        <td className="py-2.5">{addon.name}</td>
                        <td className="py-2.5 text-right font-semibold">
                          <AnimatedPrice value={`${addon.formatted_price}/${addon.unit === 'per check' ? 'chk' : 'mo'}`} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Bill Calculator Section */}
      <section 
        id="calculator" 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-500 rounded-3xl ${
          highlightedCalc ? 'ring-4 ring-violet-500 shadow-2xl bg-violet-50/20' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-7 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Estimate your monthly bill</h2>
                <p className="text-sm text-zinc-600">
                  Pick a plan and drag the sliders to match your exact sending volumes in {currency}.
                </p>
              </div>

              {/* Share Estimate Button */}
              <button
                type="button"
                onClick={copyEstimateLink}
                className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-violet-700 bg-violet-50 hover:bg-violet-100 border border-violet-200/80 transition-all cursor-pointer shrink-0 shadow-xs active:scale-95"
                title="Copy shareable link with current slider & plan values"
              >
                {copiedEstimate ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    <span className="text-emerald-700 font-bold">Estimate Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share estimate</span>
                  </>
                )}
              </button>
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
                      className={`relative py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer text-center ${
                        isSelected 
                          ? 'text-white' 
                          : 'bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="calcPlanPill"
                          className="absolute inset-0 bg-violet-700 rounded-xl shadow-sm ring-1 ring-violet-700"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{name}</span>
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
                <span className="text-violet-700 font-bold font-mono text-base">
                  <AnimatedPrice value={num(emails)} />
                </span>
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
                  <span>WhatsApp marketing messages (@ <AnimatedPrice value={moneyDec(waMarketingRate)} />)</span>
                </label>
                <span className="text-violet-700 font-bold font-mono text-base">
                  <AnimatedPrice value={num(mkt)} />
                </span>
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
                  <span>WhatsApp utility &amp; service messages (@ <AnimatedPrice value={moneyDec(waUtilityRate)} />)</span>
                </label>
                <span className="text-violet-700 font-bold font-mono text-base">
                  <AnimatedPrice value={num(util)} />
                </span>
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
                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 font-mono">
                    {currency} · {billingInterval === 'yearly' 
                      ? `Yearly (-${apiData.discounts.yearly_percentage}%)` 
                      : billingInterval === 'quarterly' 
                        ? `Quarterly (-${apiData.discounts.quarterly_percentage}%)` 
                        : 'Monthly'}
                  </span>
                  <button
                    type="button"
                    onClick={copyEstimateLink}
                    className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                    title="Share this estimate calculation"
                    aria-label="Share this estimate calculation"
                  >
                    {copiedEstimate ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Line Items */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-zinc-300">
                  <span>{selectedCalcPlan.charAt(0).toUpperCase() + selectedCalcPlan.slice(1)} platform fee</span>
                  <AnimatedPrice value={money(platformCost)} className="font-semibold text-white" />
                </div>

                <div className="flex justify-between items-center text-zinc-300">
                  <span className="truncate pr-2">Email credits ({calcEmailRateLabel})</span>
                  <AnimatedPrice value={money(emailCost)} className="font-semibold text-white shrink-0" />
                </div>

                <div className="flex justify-between items-center text-zinc-300">
                  <span>WhatsApp marketing (@ <AnimatedPrice value={moneyDec(waMarketingRate)} />)</span>
                  <AnimatedPrice value={money(mktCost)} className="font-semibold text-white" />
                </div>

                <div className="flex justify-between items-center text-zinc-300">
                  <span>WhatsApp utility &amp; service (@ <AnimatedPrice value={moneyDec(waUtilityRate)} />)</span>
                  <AnimatedPrice value={money(utilCost)} className="font-semibold text-white" />
                </div>

                <div className="flex justify-between items-center text-emerald-400 font-medium">
                  <span>Included WhatsApp ({waAllowanceText})</span>
                  <AnimatedPrice value={`−${money(waIncludedValue)}`} className="font-bold text-emerald-400" />
                </div>

                <div className="h-px bg-zinc-800 my-2"></div>

                <div className="flex justify-between items-center text-zinc-300">
                  <span>Subtotal</span>
                  <AnimatedPrice value={money(subtotal)} className="font-semibold text-white" />
                </div>

                <div className="flex justify-between items-center text-zinc-400">
                  <span>{currency === 'INR' ? 'GST (18%)' : 'Estimated local taxes'}</span>
                  <AnimatedPrice value={currency === 'INR' ? money(taxAmount) : '$0'} className="font-semibold text-zinc-300" />
                </div>
              </div>

              {/* Total Display */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="text-xs text-zinc-400">Estimated total per month</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight min-h-[44px] flex items-center">
                  <AnimatedPrice value={money(grandTotal)} />
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Your plan’s included emails and WhatsApp messages/credits are utilized first.
                {currency === 'USD' ? ' International Meta rates apply.' : ' Rates are based on Indian numbers.'}
              </p>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => handleCtaClick(selectedCalcPlan)}
                className="w-full py-3.5 px-4 bg-white hover:bg-zinc-100 text-zinc-900 rounded-xl font-bold text-sm transition-colors cursor-pointer text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Start with {selectedCalcPlan.charAt(0).toUpperCase() + selectedCalcPlan.slice(1)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={copyEstimateLink}
                className="w-full py-2.5 px-4 bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {copiedEstimate ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
                    <span className="text-emerald-300 font-bold">Estimate link copied!</span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span>Share this estimate configuration</span>
                  </>
                )}
              </button>
            </div>
          </aside>

        </div>
      </section>

      {/* Full Feature Comparison Table Section */}
      <section id="compare" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Compare every feature</h2>
          <p className="text-sm text-zinc-600">
            A granular breakdown of every capability across our tiered plans ({currency}).
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
                <td className="py-3 px-5 font-medium text-zinc-800">Effective Monthly Price</td>
                <td className="py-3 px-3 text-center font-bold text-zinc-900">
                  <AnimatedPrice value={getPlanPricing('free').price} />
                </td>
                <td className="py-3 px-3 text-center font-bold text-zinc-900">
                  <AnimatedPrice value={getPlanPricing('starter').price} />
                </td>
                <td className="py-3 px-3 text-center font-bold text-violet-700 bg-violet-50/20">
                  <AnimatedPrice value={getPlanPricing('growth').price} />
                </td>
                <td className="py-3 px-3 text-center font-bold text-zinc-900">
                  <AnimatedPrice value={getPlanPricing('pro').price} />
                </td>
                <td className="py-3 px-3 text-center font-bold text-zinc-900">
                  <AnimatedPrice value={getPlanPricing('enterprise').price} />
                </td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Contacts</td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {typeof getPlanBySlug('free')?.limits.contacts === 'number' ? num(getPlanBySlug('free')!.limits.contacts as number) : (getPlanBySlug('free')?.limits.contacts || '500')}
                </td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {typeof getPlanBySlug('starter')?.limits.contacts === 'number' ? num(getPlanBySlug('starter')!.limits.contacts as number) : (getPlanBySlug('starter')?.limits.contacts || '2,500')}
                </td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">
                  {typeof getPlanBySlug('growth')?.limits.contacts === 'number' ? num(getPlanBySlug('growth')!.limits.contacts as number) : (getPlanBySlug('growth')?.limits.contacts || '10,000')}
                </td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {typeof getPlanBySlug('pro')?.limits.contacts === 'number' ? num(getPlanBySlug('pro')!.limits.contacts as number) : (getPlanBySlug('pro')?.limits.contacts || '50,000')}
                </td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {getPlanBySlug('enterprise')?.limits.contacts ? String(getPlanBySlug('enterprise')!.limits.contacts).charAt(0).toUpperCase() + String(getPlanBySlug('enterprise')!.limits.contacts).slice(1) : 'Custom'}
                </td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Users</td>
                <td className="py-3 px-3 text-center text-zinc-600">{getPlanBySlug('free')?.limits.users ?? 1}</td>
                <td className="py-3 px-3 text-center text-zinc-600">{getPlanBySlug('starter')?.limits.users ?? 1}</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">{getPlanBySlug('growth')?.limits.users ?? 4}</td>
                <td className="py-3 px-3 text-center text-zinc-600">{getPlanBySlug('pro')?.limits.users ?? 6}</td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {getPlanBySlug('enterprise')?.limits.users ? String(getPlanBySlug('enterprise')!.limits.users).charAt(0).toUpperCase() + String(getPlanBySlug('enterprise')!.limits.users).slice(1) : 'Unlimited'}
                </td>
              </tr>
              {/* Sending domains */}
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Sending domains</td>
                <td className="py-3 px-3 text-center text-zinc-600">Shared domain only</td>
                <td className="py-3 px-3 text-center text-zinc-600">1</td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">3</td>
                <td className="py-3 px-3 text-center text-zinc-600">10</td>
                <td className="py-3 px-3 text-center text-zinc-600">Unlimited</td>
              </tr>
              {/* Custom tracking domain */}
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Custom tracking domain</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center bg-violet-50/20"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-violet-700 mx-auto stroke-[2.5]" /></td>
              </tr>
              {/* Extra domain */}
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Extra domain</td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
                <td className="py-3 px-3 text-center text-zinc-700 font-medium">
                  <AnimatedPrice value={currency === 'USD' ? '$5' : '₹300'} /> / mo
                </td>
                <td className="py-3 px-3 text-center text-zinc-600 font-medium bg-violet-50/20">
                  same
                </td>
                <td className="py-3 px-3 text-center text-zinc-600 font-medium">
                  same
                </td>
                <td className="py-3 px-3 text-center text-zinc-400">—</td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">Emails included every month</td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {typeof getPlanBySlug('free')?.allowances.emails_per_month === 'number' ? num(getPlanBySlug('free')!.allowances.emails_per_month as number) : '500'}
                </td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {typeof getPlanBySlug('starter')?.allowances.emails_per_month === 'number' ? num(getPlanBySlug('starter')!.allowances.emails_per_month as number) : '1,000'}
                </td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">
                  {typeof getPlanBySlug('growth')?.allowances.emails_per_month === 'number' ? num(getPlanBySlug('growth')!.allowances.emails_per_month as number) : '15,000'}
                </td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {typeof getPlanBySlug('pro')?.allowances.emails_per_month === 'number' ? num(getPlanBySlug('pro')!.allowances.emails_per_month as number) : '50,000'}
                </td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {getPlanBySlug('enterprise')?.allowances.emails_per_month ? String(getPlanBySlug('enterprise')!.allowances.emails_per_month).charAt(0).toUpperCase() + String(getPlanBySlug('enterprise')!.allowances.emails_per_month).slice(1) : 'Custom'}
                </td>
              </tr>
              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50">
                <td className="py-3 px-5 font-medium text-zinc-800">WhatsApp included</td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {getPlanBySlug('free')?.allowances.whatsapp_included.description || (currency === 'USD' ? '$1 on sign-up' : '₹50 on sign-up')}
                </td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {getPlanBySlug('starter')?.allowances.whatsapp_included.description || (currency === 'USD' ? '$2/month' : '₹100/month')}
                </td>
                <td className="py-3 px-3 text-center text-zinc-800 font-semibold bg-violet-50/20">
                  {getPlanBySlug('growth')?.allowances.whatsapp_included.description || '500 messages/mo'}
                </td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {getPlanBySlug('pro')?.allowances.whatsapp_included.description || '1,000 messages/mo'}
                </td>
                <td className="py-3 px-3 text-center text-zinc-600">
                  {getPlanBySlug('enterprise')?.allowances.whatsapp_included.description || 'Custom per contract'}
                </td>
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
                <td className="py-3 px-3 text-center text-zinc-500">Pay per check</td>
                <td className="py-3 px-3 text-center text-zinc-500">Pay per check</td>
                <td className="py-3 px-3 text-center text-zinc-700 font-medium bg-violet-50/20">Pay per check</td>
                <td className="py-3 px-3 text-center text-zinc-500">Pay per check</td>
                <td className="py-3 px-3 text-center text-zinc-500">Pay per check</td>
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
