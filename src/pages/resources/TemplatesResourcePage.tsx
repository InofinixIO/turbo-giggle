import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileCode2, 
  Mail, 
  MessageSquare, 
  Search, 
  Copy, 
  Check, 
  ArrowRight, 
  Eye, 
  Download, 
  Sparkles,
  Smartphone,
  Laptop,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface TemplateItem {
  id: string;
  title: string;
  channel: 'email' | 'whatsapp' | 'both';
  category: 'ecommerce' | 'saas' | 'transactional' | 'lead-gen' | 'retention';
  categoryLabel: string;
  description: string;
  variables: string[];
  conversionRate: string;
  previewSnippet: string;
  badge?: string;
}

interface TemplatesResourcePageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const TemplatesResourcePage: React.FC<TemplatesResourcePageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [selectedChannel, setSelectedChannel] = useState<'all' | 'email' | 'whatsapp'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTemplate, setActiveTemplate] = useState<TemplateItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const templates: TemplateItem[] = [
    {
      id: 'd2c-abandoned-cart-wa',
      title: 'D2C High-Intent Cart Recovery',
      channel: 'whatsapp',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      description: 'Meta-approved interactive message with item thumbnail, instant 10% coupon code, and 1-tap checkout button.',
      variables: ['first_name', 'item_name', 'item_price', 'checkout_url', 'discount_code'],
      conversionRate: '28.4% recovery rate',
      previewSnippet: 'Hi {{first_name}}, we noticed you left {{item_name}} in your bag. Complete your order in the next 2 hours and get 10% off automatically with code {{discount_code}}.',
      badge: 'High Conversion'
    },
    {
      id: 'saas-trial-milestone-email',
      title: 'SaaS Day-3 Activation & Milestone',
      channel: 'email',
      category: 'saas',
      categoryLabel: 'SaaS',
      description: 'Responsive HTML email celebrating the first workspace event and guiding users toward their next team integration.',
      variables: ['first_name', 'project_name', 'event_count', 'dashboard_url'],
      conversionRate: '46.2% click-through',
      previewSnippet: 'Great work {{first_name}}! Your project {{project_name}} recorded {{event_count}} events today. Connect your team members to unlock automated digests.',
      badge: 'Product Led'
    },
    {
      id: 'otp-verification-relay',
      title: 'Sub-600ms Auth Code (Email + WhatsApp)',
      channel: 'both',
      category: 'transactional',
      categoryLabel: 'Transactional',
      description: 'Zero-bloat authentication OTP with automatic failover to WhatsApp if email delivery exceeds 3 seconds.',
      variables: ['otp_code', 'expiry_minutes', 'device_name', 'ip_location'],
      conversionRate: '99.98% delivery rate',
      previewSnippet: 'Your CocoonMail verification code is {{otp_code}}. It expires in {{expiry_minutes}} minutes. If you did not request this code, secure your account immediately.',
      badge: 'Sub-Second Relay'
    },
    {
      id: 'real-estate-site-visit-wa',
      title: 'Property Viewing & Slot Confirmation',
      channel: 'whatsapp',
      category: 'lead-gen',
      categoryLabel: 'Lead Gen',
      description: 'Dynamic floor plan card with embedded Google Maps pin, calendar invite, and broker direct line.',
      variables: ['buyer_name', 'property_title', 'slot_time', 'location_pin_url', 'broker_phone'],
      conversionRate: '78% attendance rate',
      previewSnippet: 'Hi {{buyer_name}}, your exclusive viewing for {{property_title}} is confirmed for {{slot_time}}. Tap below for directions and your digital gate pass.',
      badge: 'High Show Rate'
    },
    {
      id: 'clinic-appointment-reminder',
      title: 'Clinic Appointment 24h & 2h Reminder',
      channel: 'whatsapp',
      category: 'retention',
      categoryLabel: 'Healthcare',
      description: 'Interactive WhatsApp reminder with 1-tap "Confirm Booking" and "Reschedule" quick-reply buttons.',
      variables: ['patient_name', 'doctor_name', 'clinic_branch', 'appointment_date_time'],
      conversionRate: '94% confirmation rate',
      previewSnippet: 'Reminder for {{patient_name}}: Your consultation with {{doctor_name}} is tomorrow at {{appointment_date_time}} at {{clinic_branch}}.',
      badge: 'Zero No-Shows'
    },
    {
      id: 'black-friday-vip-broadcast',
      title: 'Black Friday & Cyber Week Flash Sale',
      channel: 'email',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      description: 'High-impact dark mode HTML newsletter featuring animated countdown timer, tiered coupon codes, and personalized hero image.',
      variables: ['customer_name', 'vip_tier', 'exclusive_discount', 'catalog_link'],
      conversionRate: '31.8% open rate',
      previewSnippet: 'VIP Early Access is open, {{customer_name}}. Use your tier-exclusive code {{exclusive_discount}} for 30% off before general public launch.',
      badge: 'High Throughput'
    },
    {
      id: 'b2b-invoice-receipt-email',
      title: 'Tax Invoice & Payment Receipt',
      channel: 'email',
      category: 'transactional',
      categoryLabel: 'Transactional',
      description: 'Pixel-perfect receipt table with GST/VAT breakdown, downloadable PDF link, and payment method audit trail.',
      variables: ['company_name', 'invoice_number', 'amount_paid', 'billing_period', 'pdf_download_url'],
      conversionRate: '100% compliant',
      previewSnippet: 'Receipt for Invoice #{{invoice_number}} - {{company_name}}. Amount paid: {{amount_paid}} for billing cycle {{billing_period}}.',
    },
    {
      id: 'customer-feedback-csat-wa',
      title: 'Post-Delivery NPS & CSAT Survey',
      channel: 'whatsapp',
      category: 'retention',
      categoryLabel: 'Retention',
      description: 'Conversational 5-star rating flow that routes 5-star reviews to Google Maps and issues to customer service.',
      variables: ['customer_name', 'order_id', 'agent_name'],
      conversionRate: '52% completion rate',
      previewSnippet: 'Hi {{customer_name}}, how was your recent experience with {{order_id}}? Tap a rating from 1 to 5 to help us improve.',
    }
  ];

  const filteredTemplates = templates.filter(t => {
    const matchesChannel = selectedChannel === 'all' || t.channel === selectedChannel || t.channel === 'both';
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesChannel && matchesCategory && matchesSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Email & WhatsApp Template Library — Pre-Built Conversational Presets"
        description="Browse 50+ production-ready responsive email layouts and Meta-approved interactive WhatsApp templates for e-commerce, SaaS, healthcare, and transactional alerts."
      />

      {/* Header */}
      <section className="pt-14 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <FileCode2 className="w-4 h-4" />
            <span>Pre-Built Production Templates</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Design once. Communicate everywhere.
          </h1>
          <p className="text-base text-slate-600 max-w-2xl">
            Battle-tested HTML email layouts and Meta-verified interactive WhatsApp components. Copy variables, export directly to your CocoonMail studio, or trigger via REST API.
          </p>
        </div>
      </section>

      {/* Controls Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          
          {/* Channel Filters (Segmented Control) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            <button
              onClick={() => setSelectedChannel('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedChannel === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Channels
            </button>
            <button
              onClick={() => setSelectedChannel('email')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedChannel === 'email' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Email HTML</span>
            </button>
            <button
              onClick={() => setSelectedChannel('whatsapp')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedChannel === 'whatsapp' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Interactive</span>
            </button>
          </div>

          {/* Search & Category */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input 
                type="text"
                placeholder="Search templates or variables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto text-xs text-slate-600">
              {['all', 'ecommerce', 'saas', 'transactional', 'retention'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1.5 rounded-lg border text-xs capitalize transition-colors cursor-pointer ${
                    selectedCategory === cat 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  {cat === 'all' ? 'All Use Cases' : cat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Grid of Templates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((t) => (
            <div 
              key={t.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-5 space-y-3">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    {t.channel === 'whatsapp' ? (
                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                      </span>
                    ) : t.channel === 'email' ? (
                      <span className="flex items-center gap-1 text-blue-700 font-medium">
                        <Mail className="w-3.5 h-3.5" /> HTML Email
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-purple-700 font-medium">
                        <Sparkles className="w-3.5 h-3.5" /> Dual Channel
                      </span>
                    )}
                    <span aria-hidden="true">·</span>
                    <span>{t.categoryLabel}</span>
                  </div>

                  {t.badge && (
                    <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                      {t.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {t.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {t.description}
                </p>

                {/* Preview Box */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 font-mono text-[11px] leading-relaxed relative">
                  <p className="line-clamp-3">{t.previewSnippet}</p>
                </div>

                {/* Dynamic Variables list */}
                <div className="pt-1">
                  <p className="text-[11px] font-medium text-slate-500 mb-1.5">Liquid / WhatsApp Variables:</p>
                  <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-600">
                    {t.variables.map(v => (
                      <span key={v} className="bg-slate-100 px-1.5 py-0.5 rounded-sm">
                        {`{{${v}}}`}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-700 text-[11px]">
                  {t.conversionRate}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(t.id, t.previewSnippet)}
                    className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                    title="Copy Snippet"
                  >
                    {copiedId === t.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setActiveTemplate(t)}
                    className="flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer text-xs"
                  >
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Inspector */}
      {activeTemplate && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button 
              onClick={() => setActiveTemplate(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
                <span>{activeTemplate.channel.toUpperCase()} TEMPLATE</span>
                <span aria-hidden="true">·</span>
                <span>{activeTemplate.categoryLabel}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">{activeTemplate.title}</h2>
              <p className="text-xs text-slate-600 mt-1">{activeTemplate.description}</p>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto space-y-2">
              <div className="flex justify-between items-center text-slate-400 pb-2 border-b border-slate-800">
                <span>Payload Preview</span>
                <button
                  onClick={() => handleCopy('modal', activeTemplate.previewSnippet)}
                  className="flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer"
                >
                  {copiedId === 'modal' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'modal' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed">{activeTemplate.previewSnippet}</pre>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Configured Variables</h4>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {activeTemplate.variables.map(v => (
                  <span key={v} className="bg-slate-100 text-slate-800 px-2 py-1 rounded-md border border-slate-200">
                    {`{{${v}}}`}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setActiveTemplate(null);
                  onOpenStartFree();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs text-center cursor-pointer transition-colors shadow-sm"
              >
                Use this Template Free
              </button>
              <Link
                to="/platform/templates"
                onClick={() => setActiveTemplate(null)}
                className="py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs text-center transition-colors"
              >
                Open Dual Visual Builder
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">
            Need a custom responsive template for your brand?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Design multi-column email layouts and interactive WhatsApp buttons in our drag-and-drop studio with real-time mobile preview and Liquid tags.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs cursor-pointer shadow-lg transition-colors"
            >
              Start Free in Studio
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 font-bold text-xs cursor-pointer transition-colors"
            >
              Request Custom Build
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
