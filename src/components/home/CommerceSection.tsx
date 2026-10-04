import React, { useState } from 'react';
import { 
  ShoppingBag, 
  CreditCard, 
  Check, 
  ArrowRight, 
  Tag, 
  CheckCircle2, 
  Smartphone,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { ModalType } from '../../types';

interface CommerceSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const CommerceSection: React.FC<CommerceSectionProps> = ({ onOpenModal }) => {
  const [selectedSize, setSelectedSize] = useState('UK 9');
  const [selectedColor, setSelectedColor] = useState('Cobalt Blue');
  const [activeStage, setActiveStage] = useState<'catalog' | 'whatsapp' | 'cart' | 'checkout' | 'paid'>('checkout');

  const products = [
    { id: '1', name: 'Velocity Pro Carbon Runner', category: 'Running Footwear', price: '₹4,999', stock: 'In Stock', icon: '👟' },
    { id: '2', name: 'AeroPulse Trail Waterproof', category: 'Outdoor Performance', price: '₹5,499', stock: '12 left', icon: '🥾' },
    { id: '3', name: 'Strider Recovery Slide', category: 'Post-Workout', price: '₹1,899', stock: 'In Stock', icon: '🩴' }
  ];

  return (
    <section id="catalog-commerce-section" className="py-20 md:py-32 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold mb-4">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Native Conversational Commerce</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            From product discovery to payment.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Turn chats into checkouts. Sync collections from your Shopify, WooCommerce, or custom database and let customers purchase inside WhatsApp without friction.
          </p>

          {/* Stepper Flow Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 overflow-x-auto py-2">
            {(['catalog', 'whatsapp', 'cart', 'checkout', 'paid'] as const).map((stage, idx) => {
              const labels = {
                catalog: '1. Catalog',
                whatsapp: '2. WhatsApp',
                cart: '3. Cart',
                checkout: '4. Checkout',
                paid: '5. Payment Done'
              };
              const isActive = activeStage === stage;

              return (
                <button
                  key={stage}
                  onClick={() => setActiveStage(stage)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-rose-600 text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {labels[stage]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Interactive Commerce Showcase Canvas */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Product Catalog Management Preview */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                Multi-Channel Product Feed
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Synchronized Collections & Variants
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Prices, descriptions, variants, and stock levels sync bidirectionally across your backend and customer messages.
              </p>
            </div>

            {/* Product List */}
            <div className="space-y-2.5">
              {products.map((item) => (
                <div 
                  key={item.id}
                  className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-rose-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.name}</div>
                      <div className="text-[11px] text-slate-400">{item.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-900">{item.price}</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">{item.stock}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
              <div className="font-bold text-slate-800">Supported Payment Rails</div>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded font-semibold text-slate-700">UPI Instant Links</span>
                <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded font-semibold text-slate-700">Razorpay / PayU</span>
                <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded font-semibold text-slate-700">Stripe / Global Cards</span>
                <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded font-semibold text-slate-700">Cash on Delivery (OTP)</span>
              </div>
            </div>

            <button
              onClick={() => onOpenModal('start-free')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md shadow-rose-600/20 transition-all"
            >
              <span>Explore Commerce</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Realistic In-Chat / In-Store Interactive Buy Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              
              {/* Product Hero Graphic Area */}
              <div className="h-56 bg-gradient-to-tr from-rose-500 via-indigo-600 to-blue-600 p-6 flex flex-col justify-between text-white relative">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold tracking-wider uppercase">
                    Catalog Verified Item
                  </span>
                  <span className="text-xl font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg">
                    ₹4,999
                  </span>
                </div>
                <div className="text-center py-2">
                  <span className="text-6xl filter drop-shadow-md">👟</span>
                  <div className="text-base font-extrabold mt-1">Velocity Pro Carbon Runner</div>
                  <div className="text-xs text-rose-100">Ultralight Dual Carbon Plate</div>
                </div>
              </div>

              {/* Variant Selector & Checkout Sheet */}
              <div className="p-6 space-y-5">
                
                {/* Size Selection */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 text-xs">
                    <span className="font-semibold text-slate-700">Select UK Size:</span>
                    <span className="text-slate-400 font-mono">{selectedSize}</span>
                  </div>
                  <div className="flex gap-2">
                    {['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                          selectedSize === size 
                            ? 'bg-slate-900 text-white border-slate-900' 
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 text-xs">
                    <span className="font-semibold text-slate-700">Colorway:</span>
                    <span className="text-slate-500 font-medium">{selectedColor}</span>
                  </div>
                  <div className="flex gap-2">
                    {['Cobalt Blue', 'Stealth Black', 'Volt Teal'].map((col) => (
                      <button
                        key={col}
                        onClick={() => setSelectedColor(col)}
                        className={`px-3 py-1 rounded-md text-xs font-medium border ${
                          selectedColor === col ? 'bg-rose-50 border-rose-500 text-rose-700 font-bold' : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Payment Confirmation or Trigger */}
                {activeStage === 'paid' ? (
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2 animate-in fade-in duration-200">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-slate-900">Payment Captured (₹4,999)</div>
                    <div className="text-[11px] text-slate-500">Order #CM-48291 confirmed & inventory decremented.</div>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveStage('paid')}
                    className="w-full py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20 transition-all"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Instant Checkout — ₹4,999</span>
                  </button>
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-100">
                  <span>Free Doorstep Shipping</span>
                  <span>30-Day Easy Exchange</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
