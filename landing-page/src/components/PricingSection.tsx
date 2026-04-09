"use client";

import { Check, ArrowRight, Zap, Shield, HelpCircle, Star, Sparkles, Clock, Lock } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import PremiumCard from "./ui/PremiumCard";
import CTAButton from "./ui/CTAButton";
import { motion } from "framer-motion";

const VALUE_STACK = [
  { label: "7 Comprehensive Skill Modules", price: "Worth 5,000 BDT" },
  { label: "AI Prompt Framework for Landing Pages", price: "Worth 2,500 BDT" },
  { label: "Client-Winning Outreach Script Bank", price: "Worth 1,500 BDT" },
  { label: "High-Converting Page Structure Library", price: "Worth 3,000 BDT" },
  { label: "Step-by-Step 30-Day Action Plan", price: "Worth 1,000 BDT" },
  { label: "Private Community & Lifetime Updates", price: "Priceless" },
];

export default function PricingSection() {
  return (
    <SectionWrapper
      id="pricing"
      badge="Special Offer"
      title="Invest in Your Future Skills"
      subtitle="One small investment today. A lifetime value skill tomorrow. No monthly fees."
      withOrb
      padding="lg"
    >
      <div className="max-w-4xl mx-auto grid lg:grid-cols-11 gap-8 items-center">
        
        {/* Left: Content & Urgency */}
        <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
           <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-3xl font-black text-white italic tracking-tight uppercase">
                 Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Earning Journey</span> Now
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                 Join 500+ students who have chosen to stop being confused and started building real skills. This is the last digital product you&apos;ll need to understand the landing page market.
              </p>
           </div>

           <div className="space-y-4">
              <p className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-40 text-center lg:text-left">— What you'll get —</p>
              <div className="grid grid-cols-1 gap-3">
                 {VALUE_STACK.map((item, i) => (
                   <div key={i} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-3">
                         <Check size={14} className="text-emerald-400" />
                         <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                      </div>
                      <span className="text-[0.6rem] font-black uppercase tracking-wider text-slate-500 whitespace-nowrap">
                         {item.price}
                      </span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-start gap-4">
              <Clock className="text-amber-500 mt-0.5 shrink-0" size={20} />
              <div className="space-y-1">
                 <p className="text-amber-200 text-sm font-bold">Limited Time Launch Offer</p>
                 <p className="text-amber-500/70 text-xs leading-relaxed font-medium">
                    The current price is part of our launch phase. We plan to increase it by 50% soon to reflect the increasing value of the module updates.
                 </p>
              </div>
           </div>
        </div>

        {/* Right: Pricing Card */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <PremiumCard featured className="relative">
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
               <span className="px-6 py-2 rounded-full text-xs font-black bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_0_30px_rgba(124,58,237,0.4)] whitespace-nowrap flex items-center gap-2 border border-white/20">
                  <Star size={12} className="fill-white" /> BEST VALUE FOR STUDENTS
               </span>
            </div>

            <div className="p-8 sm:p-12 flex flex-col items-center">
              <div className="text-center mb-10">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-slate-500 text-2xl font-black">BDT</span>
                  <span className="text-7xl sm:text-8xl font-black text-white tracking-tighter">
                    1,490
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="text-slate-600 line-through text-xl font-medium">2,990 BDT</span>
                  <span className="text-emerald-500 text-xs font-black bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 uppercase tracking-widest">
                    50% Discount
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-white/5 mb-10" />

              <div className="w-full space-y-5 mb-11">
                 {[
                   "Lifetime Enrollment Access",
                   "All Future Course Updates",
                   "Downloadable Assets & Prompts",
                   "Private Discord Community",
                   "30-Day Money Back Guarantee"
                 ].map((point, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                      <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/30 group-hover:bg-violet-500/30 transition-colors shrink-0">
                         <Check size={12} className="text-violet-400" />
                      </div>
                      <span className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors">{point}</span>
                   </div>
                 ))}
              </div>

              <CTAButton
                id="pricing-checkout-btn"
                href="https://checkout.example.com"
                size="lg"
                fullWidth
                icon={<ArrowRight size={24} />}
                iconPosition="right"
                className="py-6 text-xl shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:shadow-[0_0_80px_rgba(139,92,246,0.8)] scale-[1.03] active:scale-100 transition-all font-black uppercase tracking-tight"
              >
                Enroll Now & Get Instant Access
              </CTAButton>

              <div className="mt-10 grid grid-cols-2 gap-6 w-full pt-8 border-t border-white/5">
                 <div className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                    <Shield size={20} className="text-slate-400" />
                    <span className="text-[0.65rem] text-slate-500 uppercase font-black tracking-widest text-center leading-none">100% Secure <br/> Payment</span>
                 </div>
                 <div className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                    <Zap size={20} className="text-slate-400" />
                    <span className="text-[0.65rem] text-slate-500 uppercase font-black tracking-widest text-center leading-none">Instant <br/> Delivery</span>
                 </div>
              </div>
            </div>
          </PremiumCard>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center gap-6">
         <div className="flex items-center gap-3 py-2 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <Lock size={14} className="text-emerald-400" />
            <p className="text-slate-400 text-xs font-bold tracking-tight">SSL Secure Checkout Enabled. Your payment is 100% safe.</p>
         </div>
         <div className="flex items-center gap-4 max-w-lg text-center">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shrink-0">
               <HelpCircle size={24} className="text-violet-400" />
            </div>
            <p className="text-slate-500 text-[0.85rem] leading-relaxed">
               Still have a doubt? Join <span className="text-white font-bold">500+ happy students</span> or send us a message on WhatsApp for instant support.
            </p>
         </div>
      </div>
    </SectionWrapper>
  );
}
