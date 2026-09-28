import React, { useState } from 'react';
import { 
  ShoppingBag, 
  CreditCard, 
  Check, 
  ArrowRight, 
  Layers, 
  Tag, 
  Sparkles, 
  Smartphone, 
  ShieldCheck,
  CheckCircle2,
  PackageCheck,
  Zap
} from 'lucide-react';

interface CatalogPaymentsSectionProps {
  onOpenStartFree: () => void;
}

export const CatalogPaymentsSection: React.FC<CatalogPaymentsSectionProps> = ({ onOpenStartFree }) => {
  // Animated Stage:
  // 0: Catalog
  // 1: WhatsApp
  // 2: Cart
  // 3: Checkout
  // 4: Payment Successful
  const [commerceStage, setCommerceStage] = useState<number>(0);

  const stages = [
    { id: 'catalog', label: '1. Catalog' },
    { id: 'whatsapp', label: '2. WhatsApp' },
    { id: 'cart', label: '3. Cart' },
    { id: 'checkout', label: '4. Checkout' },
    { id: 'payment', label: '5. Payment Successful' }
  ];

  // Selected Variant state
  const [selectedVariant, setSelectedVariant] = useState<string>('UK 9');
  const [selectedCategory, setSelectedCategory] = useState<string>('Footwear');

  const products = [
    {
      id: 'p1',
      name: 'HydroGlide Waterproof Running Shoes',
      category: 'Footwear',
      price: '₹4,999',
      variants: ['UK 8', 'UK 9', 'UK 10', 'UK 11'],
      imageColor: 'from-slate-900 to-indigo-950',
      tag: 'Best Seller'
    },
    {
      id: 'p2',
      name: 'StormShield Breathable Commuter Jacket',
      category: 'Outerwear',
      price: '₹3,499',
      variants: ['S', 'M', 'L', 'XL'],
      imageColor: 'from-blue-900 to-slate-900',
      tag: 'Water Repellent'
    },
    {
      id: 'p3',
      name: 'FlexVent Ergonomic Running Shorts',
      category: 'Apparel',
      price: '₹1,499',
      variants: ['M', 'L', 'XL'],
      imageColor: 'from-indigo-900 to-purple-950',
      tag: 'Quick Dry'
    }
  ];

  return (
    <section id="catalog-payments" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200 mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
            <span>Conversational Commerce &amp; Instant Payments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            From product discovery to payment.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Turn chats into checkouts. Seamlessly synchronize products, manage size variants, and accept zero-redirect payments inside WhatsApp.
          </p>

          {/* Interactive Flow Progress Steps */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-1 sm:gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
              {stages.map((stg, idx) => {
                const isActive = commerceStage === idx;
                return (
                  <button
                    key={stg.id}
                    onClick={() => setCommerceStage(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                    }`}
                  >
                    {stg.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Stage Demonstration */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Product & Inventory Metadata Dashboard */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  Commerce Architecture
                </span>
                <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                  Native Catalog Engine with Live Shopify &amp; ERP Sync
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every product, collection, price adjustment, and inventory change updates inside WhatsApp conversations instantly with zero caching lag.
                </p>
              </div>

              {/* Category, Variant & Pricing Selector */}
              <div className="space-y-3 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs text-xs">
                <div>
                  <span className="text-slate-400 block font-mono text-[10px] mb-1">Select Collection:</span>
                  <div className="flex gap-2">
                    {['Footwear', 'Outerwear', 'Apparel'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                          selectedCategory === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono text-[10px] mb-1">Active Size Variant:</span>
                  <div className="flex gap-2">
                    {['UK 8', 'UK 9', 'UK 10', 'UK 11'].map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                          selectedVariant === v ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-slate-500">Live Inventory: <strong>6 pairs in warehouse</strong></span>
                  <span className="text-emerald-600 font-mono font-bold">₹4,999.00</span>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenStartFree}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Commerce</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: The 5-Step Animated Stage Card */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[460px] bg-white rounded-3xl border border-slate-300 shadow-2xl p-6 min-h-[460px] flex flex-col justify-between">
                
                {/* Stage Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    Stage: {stages[commerceStage].label}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">Sync: Sub-second</span>
                </div>

                {/* Stage 1: Catalog */}
                {commerceStage === 0 && (
                  <div className="space-y-4 py-4 animate-in fade-in duration-200">
                    <div className="h-44 rounded-2xl bg-gradient-to-tr from-slate-900 to-indigo-950 p-4 flex flex-col justify-end text-white relative">
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-400/30">
                        Live Stock: 6 Pairs
                      </span>
                      <span className="text-xs font-mono uppercase text-amber-400 font-bold">Catalog Item</span>
                      <h4 className="text-base font-bold">HydroGlide Waterproof Running Shoes</h4>
                      <span className="text-lg font-extrabold text-emerald-400 font-mono">₹4,999</span>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      <p>Features 3-layer microporous waterproofing and responsive dual-density cushioning.</p>
                      <span className="font-mono text-slate-400 text-[11px] block">SKU: HG-RUN-4999-UK9</span>
                    </div>

                    <button
                      onClick={() => setCommerceStage(1)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Transmit into WhatsApp →</span>
                    </button>
                  </div>
                )}

                {/* Stage 2: WhatsApp */}
                {commerceStage === 1 && (
                  <div className="space-y-4 py-4 animate-in fade-in duration-200">
                    <div className="bg-[#efeae2] p-4 rounded-2xl space-y-3">
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs space-y-2 text-xs">
                        <span className="text-[10px] font-bold text-emerald-700 block">Cocoon Verified Store</span>
                        <div className="h-28 rounded-xl bg-gradient-to-tr from-slate-900 to-indigo-950 p-3 flex flex-col justify-end text-white">
                          <span className="text-xs font-bold">Running Shoes ({selectedVariant})</span>
                          <span className="text-xs font-mono text-emerald-400 font-bold">₹4,999</span>
                        </div>
                        <p className="text-[11px] text-slate-600">In stock and ready to dispatch to Mumbai.</p>
                        <button
                          onClick={() => setCommerceStage(2)}
                          className="w-full py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to WhatsApp Cart</span>
                        </button>
                      </div>
                    </div>

                    <div className="text-center text-[11px] text-slate-400 font-mono">
                      Simulated in-thread native interactive catalog card
                    </div>
                  </div>
                )}

                {/* Stage 3: Cart */}
                {commerceStage === 2 && (
                  <div className="space-y-4 py-4 animate-in fade-in duration-200">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span className="font-bold text-slate-900">WhatsApp In-App Cart</span>
                        <span className="font-mono text-slate-500">1 Item</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <strong className="text-slate-900 block">HydroGlide Running Shoes</strong>
                          <span className="text-[11px] text-slate-500">Size: {selectedVariant} · Color: Carbon Black</span>
                        </div>
                        <span className="font-bold font-mono text-slate-900">₹4,999.00</span>
                      </div>

                      <div className="pt-2 border-t border-slate-200 space-y-1 text-slate-600">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>₹4,999.00</span>
                        </div>
                        <div className="flex justify-between text-emerald-600 font-medium">
                          <span>Express Delivery</span>
                          <span>FREE</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setCommerceStage(3)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Instant Checkout →</span>
                    </button>
                  </div>
                )}

                {/* Stage 4: Checkout */}
                {commerceStage === 3 && (
                  <div className="space-y-4 py-4 animate-in fade-in duration-200">
                    <div className="bg-slate-900 text-white rounded-2xl p-4 space-y-3 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="font-bold text-amber-400 flex items-center gap-1.5">
                          <CreditCard className="w-4 h-4" /> 1-Tap UPI Intent Checkout
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">Zero Redirect</span>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 font-mono text-[11px] text-slate-300">
                        <p>Customer: Aarav Sharma (+91 98*** 4210)</p>
                        <p>Address: 402 Palm Heights, Bandra West, Mumbai</p>
                        <p>Payment: Google Pay / PhonePe / Paytm</p>
                      </div>

                      <button
                        onClick={() => setCommerceStage(4)}
                        className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>Authorize Payment of ₹4,999</span>
                      </button>
                    </div>

                    <div className="text-center text-[11px] text-slate-400">
                      Direct integration with NPCI UPI switch &amp; global card processors
                    </div>
                  </div>
                )}

                {/* Stage 5: Payment Successful */}
                {commerceStage === 4 && (
                  <div className="space-y-4 py-4 animate-in fade-in duration-200 text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                      <Check className="w-7 h-7 stroke-[3]" />
                    </div>

                    <div>
                      <h4 className="text-xl font-extrabold text-slate-900">Payment Successful</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Order #CM-48291 Settled in 11.8s</p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono grid grid-cols-2 gap-2 text-left">
                      <div>
                        <span className="text-slate-400 text-[10px] block">Amount Settled</span>
                        <span className="font-bold text-emerald-600 text-sm">₹4,999.00</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">Receipt Status</span>
                        <span className="font-bold text-slate-800 text-xs">WhatsApp + Email PDF</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setCommerceStage(0)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
                    >
                      Restart Flow Demo ↺
                    </button>
                  </div>
                )}

                {/* Footer Controls */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Step {commerceStage + 1} of 5</span>
                  <span className="text-amber-700 font-semibold flex items-center gap-1">
                    Continuous Commerce Loop <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Catalog & Checkout Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs">
          {[
            { label: 'Products', val: 'Unlimited' },
            { label: 'Categories', val: 'Multi-Level' },
            { label: 'Variants', val: 'Sizes & Colors' },
            { label: 'Pricing', val: 'Multi-Currency' },
            { label: 'Images', val: 'Auto-Optimized' },
            { label: 'Checkout', val: 'Native UPI & Cards' }
          ].map((item) => (
            <div key={item.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">{item.label}</span>
              <strong className="text-slate-900 font-semibold">{item.val}</strong>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
