import React, { useState } from 'react';
import { 
  Send, 
  CheckCheck, 
  ShoppingBag, 
  CreditCard, 
  Bot, 
  User, 
  Sparkles, 
  RotateCcw,
  Smartphone,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent' | 'system';
  senderName?: string;
  text: string;
  timestamp: string;
  hasProductCard?: boolean;
  hasButtons?: Array<{ id: string; label: string; action: string }>;
  isCheckout?: boolean;
}

export const InteractiveWhatsAppSimulator: React.FC = () => {
  const initialMessages: ChatMessage[] = [
    {
      id: '1',
      sender: 'agent',
      senderName: 'Cocoon AI Concierge',
      text: 'Hello Aarav! 👋 Welcome to Monsoon Sneaker VIP early access. How can I help you find the perfect pair today?',
      timestamp: '10:42 AM',
      hasButtons: [
        { id: 'btn_size', label: 'Check Size Guide (UK 9)', action: 'size_query' },
        { id: 'btn_waterproof', label: 'Are they 100% waterproof?', action: 'waterproof_query' },
        { id: 'btn_catalog', label: 'View Collection & Prices', action: 'show_catalog' }
      ]
    }
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [paidSuccess, setPaidSuccess] = useState(false);

  const simulateBotReply = (userQuery: string, customReply?: string, extra?: Partial<ChatMessage>) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply: ChatMessage = {
        id: Date.now().toString(),
        sender: 'agent',
        senderName: 'Cocoon AI Concierge',
        text: customReply || `I understand you're asking about "${userQuery}". Let me pull live inventory from our warehouse.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        ...extra
      };
      setMessages((prev) => [...prev, reply]);
    }, 900);
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Contextual responses based on customer question
    const qLower = query.toLowerCase();
    if (qLower.includes('size') || qLower.includes('uk 9')) {
      simulateBotReply(query, "Yes! We have 4 pairs of HydroBlack in UK 9 in our Mumbai fulfillment center. They run true-to-size with extra arch cushion for rainy commutes.", {
        hasProductCard: true,
        hasButtons: [
          { id: 'pay_now', label: '⚡ Buy Now with UPI (₹2,499)', action: 'trigger_checkout' },
          { id: 'human_help', label: 'Talk to Human Specialist', action: 'human_handoff' }
        ]
      });
    } else if (qLower.includes('waterproof') || qLower.includes('rain')) {
      simulateBotReply(query, "Absolutely! They use our proprietary HydroShield membrane tested against 10,000mm rainfall. The exterior sheds water while breathable micro-pores keep feet fresh.", {
        hasButtons: [
          { id: 'view_uk9', label: 'Check Size Availability', action: 'size_query' },
          { id: 'video_proof', label: 'Watch 15s Water Dunk Video', action: 'video' }
        ]
      });
    } else if (qLower.includes('catalog') || qLower.includes('price')) {
      simulateBotReply(query, "Here is our direct in-chat collection with live warehouse stock:", {
        hasProductCard: true,
        hasButtons: [
          { id: 'pay_now', label: '⚡ Buy Now with UPI (₹2,499)', action: 'trigger_checkout' }
        ]
      });
    } else {
      simulateBotReply(query, `Great question! Our AI verified that your query matches our Monsoon 2026 catalog. Would you like to reserve your size before the public drop?`, {
        hasProductCard: true,
        hasButtons: [
          { id: 'pay_now', label: '⚡ Buy Now with UPI (₹2,499)', action: 'trigger_checkout' }
        ]
      });
    }
  };

  const handleButtonClick = (action: string, label: string) => {
    if (action === 'trigger_checkout') {
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user',
        text: 'Proceed to Buy Now',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'agent',
            senderName: 'Cocoon Payments',
            text: 'Here is your secure in-chat checkout link. No passwords or form filling needed.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isCheckout: true
          }
        ]);
      }, 700);
    } else if (action === 'human_handoff') {
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user',
        text: 'Request Human Agent',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'system',
            text: '🔔 Switched to Human Agent: Priya from Footwear Concierge has joined the conversation.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          },
          {
            id: (Date.now() + 2).toString(),
            sender: 'agent',
            senderName: 'Priya (Human Specialist)',
            text: 'Hi Aarav! I see you were looking at the HydroBlack UK 9. I personally wear this pair—let me know if you need half-size adjustments or custom insoles!',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 900);
    } else {
      handleSend(label);
    }
  };

  const handlePay = () => {
    setPaidSuccess(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'system',
          text: '✅ Payment of ₹2,499.00 received via Google Pay UPI. Order #CM-98214 confirmed! Dispatching tracking link and email receipt.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 600);
  };

  const resetChat = () => {
    setMessages(initialMessages);
    setPaidSuccess(false);
    setInputText('');
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-white max-w-md mx-auto">
      
      {/* Phone Screen Frame */}
      <div className="bg-[#0b141a] rounded-2xl overflow-hidden border border-slate-800 flex flex-col h-[520px]">
        
        {/* WhatsApp Chat Top Header */}
        <div className="bg-[#202c33] px-3.5 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs relative">
              C
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#202c33]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-slate-100">Cocoon Store Official</span>
                <span className="text-[10px] text-emerald-400 font-semibold">✓ Verified</span>
              </div>
              <p className="text-[10px] text-slate-400">Meta Business API · AI Active</p>
            </div>
          </div>

          <button
            onClick={resetChat}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors text-xs flex items-center gap-1"
            title="Reset simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="text-[10px]">Reset</span>
          </button>
        </div>

        {/* Chat Scrollable Message Body */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#0b141a] bg-opacity-95 scrollbar-thin scrollbar-thumb-slate-800">
          {messages.map((msg) => {
            const isMe = msg.sender === 'user';
            const isSystem = msg.sender === 'system';

            if (isSystem) {
              return (
                <div key={msg.id} className="flex justify-center my-1">
                  <div className="bg-[#182229] border border-slate-800 text-slate-300 text-[10px] px-3 py-1.5 rounded-lg text-center max-w-[90%] leading-relaxed font-mono">
                    {msg.text}
                  </div>
                </div>
              );
            }

            return (
              <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                {!isMe && msg.senderName && (
                  <span className="text-[10px] font-semibold text-emerald-400 mb-1 ml-1 flex items-center gap-1">
                    {msg.senderName.includes('AI') ? <Bot className="w-2.5 h-2.5" /> : <User className="w-2.5 h-2.5" />}
                    {msg.senderName}
                  </span>
                )}

                <div className={`p-3 rounded-2xl max-w-[85%] text-xs shadow-xs space-y-2 ${
                  isMe ? 'bg-[#005c4b] text-white rounded-tr-xs' : 'bg-[#202c33] text-slate-100 rounded-tl-xs'
                }`}>
                  <p className="leading-relaxed">{msg.text}</p>

                  {/* Interactive Product Card */}
                  {msg.hasProductCard && (
                    <div className="bg-[#111b21] rounded-xl p-2.5 border border-slate-700 space-y-2 mt-2">
                      <div className="h-20 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-center text-[11px] font-semibold text-slate-200">
                        👟 Monsoon HydroBlack (UK 9)
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[9px]">Warehouse: Mumbai</span>
                          <span className="text-white font-bold">₹2,499.00</span>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[9px] font-mono">
                          In Stock (4 left)
                        </span>
                      </div>
                    </div>
                  )}

                  {/* In-Chat Native Checkout Box */}
                  {msg.isCheckout && !paidSuccess && (
                    <div className="bg-[#111b21] p-3 rounded-xl border border-emerald-500/40 space-y-2 mt-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-emerald-400 font-bold">Instant UPI Checkout</span>
                        <span className="text-white font-bold font-mono">₹2,499</span>
                      </div>
                      <p className="text-[10px] text-slate-400">Choose one-tap UPI app (NPCI Verified):</p>
                      <div className="grid grid-cols-2 gap-1.5 pt-1">
                        <button
                          onClick={handlePay}
                          className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[10px] font-medium flex items-center justify-center gap-1 border border-slate-700 cursor-pointer"
                        >
                          Google Pay
                        </button>
                        <button
                          onClick={handlePay}
                          className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[10px] font-medium flex items-center justify-center gap-1 border border-slate-700 cursor-pointer"
                        >
                          PhonePe UPI
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Quick Action Buttons */}
                  {msg.hasButtons && msg.hasButtons.length > 0 && (
                    <div className="pt-2 space-y-1.5 border-t border-slate-700/60">
                      {msg.hasButtons.map((btn) => (
                        <button
                          key={btn.id}
                          onClick={() => handleButtonClick(btn.action, btn.label)}
                          className="w-full text-center py-1.5 px-2 rounded-lg bg-[#0b141a] hover:bg-[#182229] text-emerald-400 text-[11px] font-medium border border-emerald-900/60 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="text-[9px] text-slate-400 flex items-center justify-end gap-1 pt-0.5">
                    <span>{msg.timestamp}</span>
                    {isMe && <CheckCheck className="w-3 h-3 text-sky-400" />}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-1.5 bg-[#202c33] text-slate-400 text-xs px-3 py-2 rounded-xl w-24">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-2.5 bg-[#202c33] border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type query or tap buttons above..."
            className="flex-1 bg-[#2a3942] text-xs text-slate-100 placeholder-slate-400 rounded-xl px-3 py-2 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            className="p-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-xl transition-colors cursor-pointer"
            aria-label="Send message"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="mt-3 text-center text-xs text-slate-400">
        Try clicking &ldquo;Check Size Guide&rdquo; or typing &ldquo;Do you have size UK 9?&rdquo;
      </div>

    </div>
  );
};
