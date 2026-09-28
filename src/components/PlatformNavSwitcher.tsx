import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router';
import { 
  Mail, 
  Server, 
  MessageSquare, 
  Bot, 
  GitFork, 
  Users, 
  FileCode2, 
  Megaphone, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  ArrowLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export type PlatformPageId = 
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

export interface PlatformModuleInfo {
  id: PlatformPageId;
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badgeColor: string;
  path: string;
}

export const PLATFORM_MODULES: PlatformModuleInfo[] = [
  {
    id: 'email',
    name: 'Email Marketing',
    tagline: 'Visual builder, dynamic tags & journeys',
    icon: Mail,
    color: 'text-blue-600',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    path: '/platform/email'
  },
  {
    id: 'transactional-email',
    name: 'Transactional Email',
    tagline: 'High-speed REST API & SMTP delivery',
    icon: Server,
    color: 'text-sky-600',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    path: '/platform/transactional-email'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    tagline: 'Cloud API, team inbox & broadcasts',
    icon: MessageSquare,
    color: 'text-emerald-600',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    path: '/platform/whatsapp'
  },
  {
    id: 'ai-agents',
    name: 'AI Agents',
    tagline: 'Autonomous conversational commerce',
    icon: Bot,
    color: 'text-violet-600',
    badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
    path: '/platform/ai-agents'
  },
  {
    id: 'automation',
    name: 'Automation',
    tagline: 'Visual multi-channel journey canvas',
    icon: GitFork,
    color: 'text-indigo-600',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    path: '/platform/automation'
  },
  {
    id: 'segmentation',
    name: 'Segmentation',
    tagline: 'Real-time dynamic audience builder',
    icon: Users,
    color: 'text-cyan-600',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    path: '/platform/segmentation'
  },
  {
    id: 'templates',
    name: 'Templates',
    tagline: 'Dual email & WhatsApp interactive editor',
    icon: FileCode2,
    color: 'text-fuchsia-600',
    badgeColor: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
    path: '/platform/templates'
  },
  {
    id: 'ads',
    name: 'Ads (Meta & Status)',
    tagline: 'Click-to-WhatsApp & status conversion',
    icon: Megaphone,
    color: 'text-rose-600',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    path: '/platform/ads'
  },
  {
    id: 'catalog',
    name: 'Catalog',
    tagline: 'In-conversation native commerce & cart',
    icon: ShoppingBag,
    color: 'text-amber-600',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    path: '/platform/catalog'
  },
  {
    id: 'payments',
    name: 'Payments',
    tagline: 'In-chat UPI, cards & instant receipts',
    icon: CreditCard,
    color: 'text-teal-600',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    path: '/platform/payments'
  },
  {
    id: 'analytics',
    name: 'Analytics',
    tagline: 'Unified cross-channel funnel attribution',
    icon: BarChart3,
    color: 'text-blue-700',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    path: '/platform/analytics'
  }
];

interface PlatformNavSwitcherProps {
  currentModule?: PlatformPageId;
  onSelectModule?: (moduleId: PlatformPageId) => void;
  onBackToHome?: () => void;
}

export const PlatformNavSwitcher: React.FC<PlatformNavSwitcherProps> = ({
  currentModule: propModule,
  onSelectModule,
  onBackToHome
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Derive active module from URL path or props
  const pathModule = PLATFORM_MODULES.find(m => location.pathname.startsWith(m.path))?.id;
  const activeModuleId = propModule || pathModule || 'email';
  const currentInfo = PLATFORM_MODULES.find(m => m.id === activeModuleId) || PLATFORM_MODULES[0];

  const handleModuleClick = (mod: PlatformModuleInfo) => {
    if (onSelectModule) {
      onSelectModule(mod.id);
    } else {
      navigate(mod.path);
    }
  };

  const handleHomeClick = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      navigate('/');
    }
  };

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white sticky top-[61px] sm:top-[69px] z-40 transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Quick Switcher Bar */}
        <div className="flex items-center justify-between py-2.5 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handleHomeClick}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium px-2 py-1 rounded hover:bg-slate-800/80 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Homepage Overview</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400">Platform Suites</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <currentInfo.icon className={`w-3.5 h-3.5 ${currentInfo.color}`} />
              <span>{currentInfo.name}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-400">
            <span>One Connected Platform:</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All 11 Modules Synchronized
            </span>
          </div>
        </div>

        {/* Horizontal Scrollable Tabs across all 11 modules */}
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none text-xs font-medium">
          {PLATFORM_MODULES.map((mod) => {
            const Icon = mod.icon;
            const isActive = mod.id === activeModuleId;
            return (
              <button
                key={mod.id}
                onClick={() => handleModuleClick(mod)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30 font-semibold' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : mod.color}`} />
                <span>{mod.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
