import React, { useEffect, useState } from 'react';
import { useRouter } from '../router/RouterContext';
import { LEGAL_POLICIES, LEGAL_LINKS } from '../data/legalPolicies';
import { 
  FileText, 
  Shield, 
  Lock, 
  Cookie, 
  RotateCcw, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  Mail,
  Building,
  ArrowLeft,
  Clock,
  Printer
} from 'lucide-react';

interface LegalPageProps {
  slug: string;
  onOpenModal: (type: 'start-free' | 'book-demo') => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ slug, onOpenModal }) => {
  const { navigate } = useRouter();
  const policy = LEGAL_POLICIES[slug] || LEGAL_POLICIES['terms-of-service'];
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (policy.sections.length > 0) {
      setActiveSection(policy.sections[0].id);
    }
  }, [slug, policy]);

  const getPolicyIcon = (policySlug: string) => {
    switch (policySlug) {
      case 'refund-policy':
        return <RotateCcw className="w-4 h-4 text-emerald-600" />;
      case 'privacy-policy':
        return <Shield className="w-4 h-4 text-blue-600" />;
      case 'terms-of-service':
        return <FileText className="w-4 h-4 text-indigo-600" />;
      case 'cookie-policy':
        return <Cookie className="w-4 h-4 text-amber-600" />;
      case 'gdpr-compliance':
        return <CheckCircle2 className="w-4 h-4 text-teal-600" />;
      case 'data-protection':
        return <Lock className="w-4 h-4 text-violet-600" />;
      default:
        return <FileText className="w-4 h-4 text-blue-600" />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pt-24 pb-20">
      {/* Top Banner / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-slate-200">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
              className="hover:text-blue-600 transition-colors flex items-center gap-1 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-500 font-medium">Legal & Compliance</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-900 font-semibold">{policy.title}</span>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-xs"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Policy</span>
            </button>
            <a
              href="https://app.cocoonmail.com/signup"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
            >
              <span>Get Started</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Policy Selector & In-Page TOC */}
          <aside className="lg:col-span-3 space-y-6 sticky top-28">
            
            {/* Legal Navigation Box */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
                Legal Documents
              </h3>
              <nav className="space-y-1">
                {LEGAL_LINKS.map((link) => {
                  const isActive = link.slug === slug;
                  return (
                    <a
                      key={link.slug}
                      href={`/${link.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/${link.slug}`);
                      }}
                      className={`flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs border border-blue-100'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {getPolicyIcon(link.slug)}
                      <span className="flex-1">{link.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* In-Page Sections TOC (if policy has sections) */}
            {policy.sections.length > 1 && (
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hidden md:block max-h-[380px] overflow-y-auto">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1 flex items-center justify-between">
                  <span>Sections</span>
                  <span className="text-[10px] text-slate-400 font-normal">{policy.sections.length} topics</span>
                </h3>
                <nav className="space-y-1 text-xs">
                  {policy.sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(sec.id);
                        const el = document.getElementById(sec.id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className={`block py-1.5 px-2.5 rounded-lg text-[11px] truncate transition-colors ${
                        activeSection === sec.id
                          ? 'text-blue-700 bg-blue-50 font-medium'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      {sec.heading}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Official Entity Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-sm text-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Building className="w-4 h-4 text-blue-400" />
                <span>Operating Entity</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Cocoonmail is a product owned and operated by <strong className="text-white font-medium">Inofinix Private Limited</strong>.
              </p>
              <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2 text-[11px] text-slate-400">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href="mailto:support@cocoonmail.com" className="hover:text-white transition-colors">
                  support@cocoonmail.com
                </a>
              </div>
            </div>

          </aside>

          {/* Right Main Content Area */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4">
                  {getPolicyIcon(slug)}
                  <span>Official Policy Document</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                  {policy.title}
                </h1>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
                  {policy.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{policy.lastUpdated}</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <span>Applies to all Cocoonmail users and enterprise clients</span>
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs space-y-10">
              {policy.sections.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">
                  Loading policy content...
                </div>
              ) : (
                policy.sections.map((section, idx) => (
                  <article 
                    key={section.id || idx} 
                    id={section.id}
                    className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-100 last:border-b-0 last:pb-0"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-baseline gap-2">
                      <span>{section.heading}</span>
                    </h2>

                    <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-slate-700 font-normal">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </article>
                ))
              )}

              {/* Bottom Support Callout */}
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Have questions regarding this policy?
                  </h4>
                  <p className="text-xs text-slate-600">
                    Our compliance and customer success teams are available to address any inquiries.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:support@cocoonmail.com"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact Support</span>
                  </a>
                  <button
                    onClick={() => onOpenModal('book-demo')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs"
                  >
                    <span>Talk to Team</span>
                  </button>
                </div>
              </div>

            </div>

          </main>

        </div>
      </div>
    </div>
  );
};
