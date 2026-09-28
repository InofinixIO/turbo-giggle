import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Bot, 
  CreditCard, 
  Zap, 
  Tag, 
  Layers, 
  Check, 
  ChevronRight, 
  RefreshCw,
  Plus,
  Minus,
  Sliders,
  DollarSign
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface CatalogPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

interface ProductItem {
  id: string;
  name: string;
  price: number;
  category: string;
  imageBg: string;
  inStock: boolean;
  stockCount: number;
}

const PRODUCTS: ProductItem[] = [
  { id: 'p1', name: 'Linen Oxford Shirt', price: 65, category: 'Apparel', imageBg: 'from-blue-600 to-indigo-600', inStock: true, stockCount: 14 },
  { id: 'p2', name: 'Italian Leather Belt', price: 45, category: 'Accessories', imageBg: 'from-amber-600 to-orange-600', inStock: true, stockCount: 22 },
  { id: 'p3', name: 'Silk Pocket Square', price: 25, category: 'Accessories', imageBg: 'from-rose-600 to-pink-600', inStock: true, stockCount: 8 },
  { id: 'p4', name: 'Handcrafted Loafers', price: 140, category: 'Footwear', imageBg: 'from-emerald-600 to-teal-600', inStock: true, stockCount: 5 }
];

export const CatalogPage: React.FC<CatalogPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<Record<string, number>>({ p1: 1 });

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const copy = { ...prev };
      if (copy[id] > 1) {
        copy[id] -= 1;
      } else {
        delete copy[id];
      }
      return copy;
    });
  };

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const prod = PRODUCTS.find(p => p.id === id);
    return sum + (prod ? prod.price * qty : 0);
  }, 0);

  const totalItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-amber-50/70 via-orange-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d977060a_1px,transparent_1px),linear-gradient(to_bottom,#d977060a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-amber-600 tracking-wide uppercase">
            <ShoppingBag className="w-4 h-4" />
            <span>Native In-Conversation Catalog</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">WhatsApp Commerce</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Sell products inside the conversation. <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">Where customers already are</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Native multi-channel product catalog synchronized with Shopify, WooCommerce, or custom REST APIs. Send multi-product carousels, check real-time inventory, and allow customers to build a cart without leaving WhatsApp.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-base shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Sync Your Catalog Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Commerce Demo</span>
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Meta Commerce Manager Sync</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Real-Time Inventory Lock</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>3.5x Higher Checkout Rate</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: WhatsApp In-Chat Catalog Experience */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-amber-900/10 overflow-hidden">
                
                {/* Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono text-slate-300">WhatsApp Native Catalog: Aura Atelier</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Synced to Meta</span>
                </div>

                {/* Category Pills & Cart Summary Bar */}
                <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center justify-between text-xs">
                  <div className="flex gap-1">
                    {(['All', 'Apparel', 'Accessories', 'Footwear'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                          selectedCategory === cat ? 'bg-amber-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[11px]">
                      Cart ({totalItemsCount} items)
                    </span>
                    <span className="font-mono text-amber-700">${cartTotal}</span>
                  </div>
                </div>

                {/* Simulated In-Chat Catalog Grid */}
                <div className="p-4 bg-slate-100 max-h-[300px] overflow-y-auto space-y-2.5">
                  {filteredProducts.map((prod) => {
                    const inCartQty = cart[prod.id] || 0;
                    return (
                      <div 
                        key={prod.id}
                        className="bg-white rounded-xl border border-slate-200 p-3 flex items-center justify-between shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-tr ${prod.imageBg} text-white flex items-center justify-center font-bold text-xs shrink-0`}>
                            {prod.category.substring(0, 3).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-xs text-slate-900">{prod.name}</p>
                            <p className="text-[11px] text-slate-500">
                              ${prod.price}.00 · <span className="text-emerald-600 font-medium">In stock ({prod.stockCount})</span>
                            </p>
                          </div>
                        </div>

                        <div>
                          {inCartQty > 0 ? (
                            <div className="flex items-center gap-1.5 bg-slate-100 rounded-lg p-1 border border-slate-200">
                              <button 
                                onClick={() => removeFromCart(prod.id)}
                                className="w-5 h-5 rounded bg-white hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-5 text-center text-xs font-bold text-slate-900">{inCartQty}</span>
                              <button 
                                onClick={() => addToCart(prod.id)}
                                className="w-5 h-5 rounded bg-white hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(prod.id)}
                              className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp Checkout Bar */}
                <div className="bg-white p-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400">Total WhatsApp Cart Value:</p>
                    <p className="text-base font-black text-slate-900 font-mono">${cartTotal}.00</p>
                  </div>
                  <button
                    onClick={() => onNavigateModule('payments')}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
                  >
                    <span>Proceed to In-Chat Payment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-amber-600 uppercase tracking-wider">Conversational Commerce</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Living Product Catalog Inside WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Bi-Directional Inventory Sync</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect your Shopify or WooCommerce store. Any price changes or out-of-stock events reflect in WhatsApp in real-time.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Multi-Product Carousels</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send curated collections with up to 30 items per message. Customers can flip through cards, read descriptions, and select sizes.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">In-Chat Cart &amp; Checkout</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customers add multiple items to a native WhatsApp cart, review quantities, and immediately initiate in-chat payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Unified Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How Catalog connects to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                Products are not static listings. They are dynamically recommended by AI, inserted into visual emails, and purchased through payments.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <button
                onClick={() => onNavigateModule('ai-agents')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-violet-400 hover:bg-violet-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-violet-600">AI Agents Tool Calling</h5>
                <p className="text-xs text-slate-500">AI agents query catalog inventory and recommend matching products autonomously.</p>
              </button>

              <button
                onClick={() => onNavigateModule('payments')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-teal-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-teal-600">Instant Payments</h5>
                <p className="text-xs text-slate-500">Cart contents automatically pass to checkout via UPI, Cards, or WhatsApp Pay.</p>
              </button>

              <button
                onClick={() => onNavigateModule('automation')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600">Abandoned Cart Triggers</h5>
                <p className="text-xs text-slate-500">Uncompleted carts automatically trigger personalized recovery journeys.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Bring your entire product catalog inside WhatsApp today.
          </h2>
          <p className="text-amber-100 max-w-xl mx-auto text-sm">
            Sync with your existing e-commerce platform in 1 click and start receiving in-chat orders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-amber-800 hover:bg-amber-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Catalog Sync
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold border border-amber-500/50 transition-colors cursor-pointer"
            >
              Book Commerce Onboarding
            </button>
          </div>
          <p className="text-xs text-amber-200 font-medium">
            Shopify &amp; WooCommerce 1-click plugins · Up to 10,000 SKUs included
          </p>
        </div>
      </section>

    </div>
  );
};
