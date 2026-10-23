import React, { useState } from 'react';
import { 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  ShoppingBag, 
  CreditCard, 
  Users, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Inbox, 
  Radio, 
  Clock, 
  Tag, 
  Check, 
  ChevronRight, 
  Sliders, 
  Smartphone,
  PhoneCall,
  UserCheck,
  Zap
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface WhatsAppPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const WhatsAppPage: React.FC<WhatsAppPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  const [activeStudioTab, setActiveStudioTab] = useState<'broadcast' | 'inbox' | 'chat'>('chat');
  const [selectedAgent, setSelectedAgent] = useState<'AI' | 'Sarah K.' | 'Rahul M.'>('AI');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot' | 'agent'; text: string; time: string; type?: 'text' | 'catalog' | 'payment' }>>([
    { sender: 'user', text: 'Hi! Do you have the Linen Oxford Shirt in Navy Blue size M in stock?', time: '10:42 AM' },
    { sender: 'bot', text: 'Hello David! Yes, we have 4 units left of the Linen Oxford Shirt in Navy (Size M). Would you like to view product specifications or add it directly to cart?', time: '10:42 AM', type: 'catalog' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const userMsg = { sender: 'user' as const, text: inputText, time: '10:43 AM' };
    setChatMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: 'I have added 1x Linen Oxford Shirt (Navy Blue, Size M) to your WhatsApp cart for $65.00 with free express shipping. Tap below to confirm and complete payment instantly via UPI or Card.',
          time: '10:43 AM',
          type: 'payment'
        }
      ]);
    }, 800);
  };

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0596690a_1px,transparent_1px),linear-gradient(to_bottom,#0596690a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-emerald-600 tracking-wide uppercase">
            <MessageSquare className="w-4 h-4" />
            <span>Official WhatsApp Business API (Tier-1 Meta BSP)</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Enterprise Scale</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                WhatsApp, connected to your <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">entire customer journey</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Run verified broadcast campaigns, deploy interactive catalog messages, automate 24/7 customer service with AI, and manage high-volume team inboxes with seamless human escalation.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book WhatsApp Demo</span>
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Meta Official Cloud API</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Green Tick Verification Assistance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Native Catalog &amp; Payments</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: WhatsApp Business Studio */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-emerald-900/10 overflow-hidden">
                
                {/* Header Switcher Tabs */}
                <div className="bg-emerald-950 px-4 py-3 flex items-center justify-between text-white border-b border-emerald-900">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-xs tracking-wide">CocoonMail WhatsApp Studio</span>
                  </div>

                  <div className="flex bg-emerald-900/60 rounded-lg p-0.5 text-xs">
                    <button
                      onClick={() => setActiveStudioTab('chat')}
                      className={`px-3 py-1 rounded transition-colors ${activeStudioTab === 'chat' ? 'bg-emerald-600 text-white font-medium' : 'text-emerald-300 hover:text-white'}`}
                    >
                      Customer Chat
                    </button>
                    <button
                      onClick={() => setActiveStudioTab('inbox')}
                      className={`px-3 py-1 rounded transition-colors ${activeStudioTab === 'inbox' ? 'bg-emerald-600 text-white font-medium' : 'text-emerald-300 hover:text-white'}`}
                    >
                      Team Inbox
                    </button>
                    <button
                      onClick={() => setActiveStudioTab('broadcast')}
                      className={`px-3 py-1 rounded transition-colors ${activeStudioTab === 'broadcast' ? 'bg-emerald-600 text-white font-medium' : 'text-emerald-300 hover:text-white'}`}
                    >
                      Broadcast
                    </button>
                  </div>
                </div>

                {/* View 1: Customer Chat Simulator */}
                {activeStudioTab === 'chat' && (
                  <div className="bg-slate-100 p-4">
                    {/* Simulated Phone Shell */}
                    <div className="bg-[#efeae2] rounded-xl border border-slate-300 shadow-inner overflow-hidden max-w-md mx-auto">
                      
                      {/* WhatsApp Phone Header */}
                      <div className="bg-[#075e54] text-white p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
                            CM
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <p className="text-xs font-bold leading-none">Aura Boutique</p>
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 fill-emerald-300" />
                            </div>
                            <p className="text-[10px] text-emerald-200 mt-0.5">Official Business Account</p>
                          </div>
                        </div>
                        <span className="text-[10px] bg-emerald-700/60 px-2 py-0.5 rounded text-emerald-100">AI Active</span>
                      </div>

                      {/* Chat Messages Body */}
                      <div className="p-3 space-y-3 min-h-[260px] max-h-[300px] overflow-y-auto text-xs">
                        {chatMessages.map((msg, idx) => (
                          <div 
                            key={idx} 
                            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                          >
                            <div 
                              className={`max-w-[85%] rounded-lg p-2.5 shadow-sm text-xs leading-relaxed ${
                                msg.sender === 'user' 
                                  ? 'bg-[#d9fdd3] text-slate-900 rounded-tr-none' 
                                  : 'bg-white text-slate-900 rounded-tl-none border border-slate-200/60'
                              }`}
                            >
                              <p>{msg.text}</p>

                              {/* Interactive Catalog Card */}
                              {msg.type === 'catalog' && (
                                <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-2">
                                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex items-center gap-2">
                                    <div className="w-10 h-10 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">
                                      SHIRT
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="font-bold text-[11px] text-slate-800 truncate">Linen Oxford (Navy Blue)</p>
                                      <p className="text-[10px] text-slate-500">$65.00 · Size M · In Stock</p>
                                    </div>
                                  </div>
                                  <button
                                    onClick={handleSendMessage}
                                    className="w-full py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] flex items-center justify-center gap-1 cursor-pointer"
                                  >
                                    <ShoppingBag className="w-3 h-3" />
                                    <span>Add to Cart &amp; Buy</span>
                                  </button>
                                </div>
                              )}

                              {/* Interactive Payment Confirmation Card */}
                              {msg.type === 'payment' && (
                                <div className="mt-2.5 pt-2 border-t border-slate-100">
                                  <div className="bg-emerald-50 border border-emerald-200 rounded p-2 text-center space-y-1">
                                    <p className="font-bold text-emerald-800 text-[11px]">Instant UPI / Card Payment</p>
                                    <p className="text-[10px] text-emerald-700">Order #CCN-9824 · Total: $65.00</p>
                                    <button 
                                      onClick={() => alert("Payment simulated successfully! Order confirmed via CocoonMail.")}
                                      className="w-full py-1.5 bg-emerald-600 text-white rounded font-bold text-[11px] shadow hover:bg-emerald-700 cursor-pointer"
                                    >
                                      Pay $65.00 via WhatsApp Pay
                                    </button>
                                  </div>
                                </div>
                              )}

                              <span className="block text-[9px] text-slate-400 text-right mt-1">{msg.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Input Footer */}
                      <div className="bg-white p-2 border-t border-slate-200 flex items-center gap-2">
                        <input
                          type="text"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Type customer reply..."
                          className="flex-1 bg-slate-50 border border-slate-300 rounded-full px-3 py-1.5 text-xs focus:ring-1 focus:ring-emerald-500 outline-none"
                        />
                        <button
                          onClick={handleSendMessage}
                          className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shrink-0 cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* View 2: Team Inbox */}
                {activeStudioTab === 'inbox' && (
                  <div className="p-4 bg-slate-50 text-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">Assigned Agent:</span>
                        <div className="flex gap-1">
                          {(['AI', 'Sarah K.', 'Rahul M.'] as const).map((agent) => (
                            <button
                              key={agent}
                              onClick={() => setSelectedAgent(agent)}
                              className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                                selectedAgent === agent ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-300 text-slate-700'
                              }`}
                            >
                              {agent}
                            </button>
                          ))}
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-500">Wait time: 14s</span>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-3 space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="font-bold text-slate-900">David Reynolds</span>
                          <span className="text-slate-400 font-mono text-[10px]">+1 415 892 0192</span>
                        </div>
                        <span className="bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded text-[10px]">High Intent Cart</span>
                      </div>
                      <p className="text-slate-600">
                        &quot;Hi! Do you have the Linen Oxford Shirt in Navy Blue size M in stock?&quot;
                      </p>
                      <div className="bg-violet-50 border border-violet-200 rounded p-2 text-violet-900 space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-[11px]">
                          <Bot className="w-3.5 h-3.5 text-violet-600" />
                          <span>AI Copilot Suggested Action:</span>
                        </div>
                        <p className="text-[11px] text-violet-800">
                          Item is in stock (4 units). Offer 10% coupon code <strong className="font-mono">SPRING10</strong> to close order now.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* View 3: Broadcast Simulation */}
                {activeStudioTab === 'broadcast' && (
                  <div className="p-4 bg-slate-50 text-xs space-y-3">
                    <div className="bg-white rounded-xl border border-slate-200 p-3 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">Campaign: Flash Spring Sale</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Approved by Meta</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-slate-600">
                        <div className="p-2 bg-slate-50 rounded border border-slate-200">
                          <p className="text-[10px] text-slate-400">Target Audience</p>
                          <p className="font-bold text-slate-800">VIP &amp; Active (42,500 contacts)</p>
                        </div>
                        <div className="p-2 bg-slate-50 rounded border border-slate-200">
                          <p className="text-[10px] text-slate-400">Estimated Delivery Rate</p>
                          <p className="font-bold text-emerald-600">98.4% (Within 120s)</p>
                        </div>
                      </div>
                      <div className="p-2 bg-slate-900 text-slate-200 rounded font-mono text-[11px] leading-relaxed">
                        Template: <span className="text-emerald-400">spring_vip_exclusive_v1</span><br />
                        Variable 1: <span className="text-amber-300">&#123;&#123;1&#125;&#125;</span> = David<br />
                        Variable 2: <span className="text-amber-300">&#123;&#123;2&#125;&#125;</span> = 25% OFF
                      </div>
                      <button 
                        onClick={() => alert("Simulated broadcast batch dispatched to 42,500 contacts.")}
                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold transition-colors cursor-pointer"
                      >
                        Simulate Dispatching Broadcast
                      </button>
                    </div>
                  </div>
                )}

                {/* Footer Bar */}
                <div className="bg-emerald-950 px-4 py-2 text-[11px] text-emerald-300 flex items-center justify-between">
                  <span>Meta Cloud API: <strong className="text-white">Tier Unlimited Throughput</strong></span>
                  <span>Avg Open Rate: <strong className="text-white">98.2%</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 8 CORE WHATSAPP CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Enterprise Messaging Suite</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built for high volume. Designed for conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Official Cloud API */}
            <div className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Official WhatsApp Cloud API</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct meta partnership. No third-party proxy relays, zero risk of unofficial phone bans, and maximum throughput.
              </p>
            </div>

            {/* 2. Verified Broadcasts */}
            <div className="p-5 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Targeted Broadcast Campaigns</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send personalized messages to 100,000+ customers at once. Comply with Meta 24h messaging policies automatically.
              </p>
            </div>

            {/* 3. Interactive Templates */}
            <div className="p-5 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Interactive Button Templates</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quick-reply buttons, phone call actions, dynamic URL links, and catalog collection selectors directly in chat.
              </p>
            </div>

            {/* 4. Unified Team Inbox */}
            <div className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Inbox className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Multi-Agent Team Inbox</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assign chats to team members, leave private internal notes, filter by tag, and track agent resolution times.
              </p>
            </div>

            {/* 5. 24/7 AI Agents */}
            <div className="p-5 rounded-2xl border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Autonomous AI Agents</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trained on your brand docs. Answers product questions, queries inventory, creates shopping carts, and books calls.
              </p>
            </div>

            {/* 6. Human Handoff */}
            <div className="p-5 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Intelligent Human Handoff</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When sentiment drops or a customer requests a representative, AI pauses and alerts the live on-duty support team.
              </p>
            </div>

            {/* 7. Catalog & Commerce */}
            <div className="p-5 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">In-Conversation Catalog</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Showcase multi-product sets, handle size/variant choices, and calculate totals without leaving the WhatsApp app.
              </p>
            </div>

            {/* 8. Webhooks & Analytics */}
            <div className="p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Real-Time Webhooks &amp; ROI</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stream sent, delivered, read, and replied events into your database, CRM, or data warehouse with zero latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-emerald-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Unified Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How WhatsApp connects to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                WhatsApp is most powerful when it is not a standalone chat window, but connected to your ads, payment processing, catalog, and automated workflows.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => onNavigateModule('ads')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-rose-400 hover:bg-rose-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-rose-600">Meta Ads Integration</h5>
                <p className="text-xs text-slate-500">Instagram &amp; Facebook ads trigger direct WhatsApp conversations instantly.</p>
              </button>

              <button
                onClick={() => onNavigateModule('catalog')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-600">Native Product Catalog</h5>
                <p className="text-xs text-slate-500">Present live inventory cards and collect items directly into the WhatsApp cart.</p>
              </button>

              <button
                onClick={() => onNavigateModule('payments')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-teal-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-teal-600">In-Chat Checkout</h5>
                <p className="text-xs text-slate-500">Collect UPI, cards, and NetBanking payments with immediate digital receipts.</p>
              </button>

              <button
                onClick={() => onNavigateModule('automation')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600">Visual Automation Workflows</h5>
                <p className="text-xs text-slate-500">Trigger WhatsApp messages when an email is unopened or an order status updates.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Connect your WhatsApp Business API today.
          </h2>
          <p className="text-emerald-100 max-w-xl mx-auto text-sm">
            Unlock 98% open rates and conversational commerce. Verify your business profile and launch your first interactive broadcast in minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-emerald-700 hover:bg-emerald-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free on WhatsApp
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold border border-emerald-500/50 transition-colors cursor-pointer"
            >
              Request Enterprise Green Tick
            </button>
          </div>
          <p className="text-xs text-emerald-200 font-medium">
            Meta Verified Business Solution Partner · Free Sandbox Included
          </p>
        </div>
      </section>

    </div>
  );
};
