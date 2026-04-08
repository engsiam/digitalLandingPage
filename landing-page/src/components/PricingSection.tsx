"use client";

import { Check, ArrowRight, Zap, Shield, HelpCircle } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import PremiumCard from "./ui/PremiumCard";
import CTAButton from "./ui/CTAButton";

const FEATURES = [
  "7 Complete Training Modules",
  "AI Prompt Framework for Lovable",
  "Client Outreach Script Templates",
  "Landing Page Layout Library",
  "First Client Action Checklist",
  "Lifetime Access to All Content",
  "Private Community Support",
];

export default function PricingSection() {
  return (
    <SectionWrapper
      id="pricing"
      badge="Special Offer"
      title="Start Your Earning Journey Today"
      subtitle="Join 500+ students building a high-income future with AI landing pages."
      withOrb
    >
      <div className="max-w-xl mx-auto">
        <PremiumCard
          featured
          title="Complete AI Landing Page Course"
        >
          <div className="p-8 sm:p-10">
            <div className="flex flex-col items-center text-center gap-4 mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-slate-400 text-2xl font-black">BDT</span>
                <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter">
                  1,490
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 line-through text-lg font-medium">2,990</span>
                  <span className="text-slate-500 text-lg font-medium mb-1">BDT</span>
                </div>
                <p className="text-emerald-400 text-sm font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Save 50% - One-time payment
                </p>
              </div>

              <div className="space-y-5 mb-10">
                <p className="text-white font-bold text-sm uppercase tracking-widest text-center opacity-80">- What you get -</p>
                <div className="grid grid-cols-1 gap-4">
                  {FEATURES.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                        <Check size={12} className="text-violet-400" />
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <CTAButton
                id="pricing-checkout-btn"
                href="https://checkout.example.com"
                size="lg"
                fullWidth
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="py-5 text-lg"
              >
                Enroll Now & Get Instant Access
              </CTAButton>

              <div className="mt-8 pt-8 border-t border-white/[0.05] grid grid-cols-2 gap-6 w-full">
                <div className="flex flex-col items-center gap-2">
                  <Shield size={20} className="text-slate-500" />
                  <span className="text-[0.7rem] text-slate-500 uppercase font-black tracking-widest text-center leading-tight">Secure <br /> Payment</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Zap size={20} className="text-slate-500" />
                  <span className="text-[0.7rem] text-slate-500 uppercase font-black tracking-widest text-center leading-tight">Instant <br /> Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </PremiumCard>

        {/* Support Link */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 py-1 px-3 rounded-full bg-slate-900/40 border border-white/5">
            <HelpCircle size={14} className="text-slate-500" />
            <span className="text-slate-400 text-xs">Have questions? We're here to help.</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-violet-400 text-[0.8rem] font-bold hover:text-violet-300 transition-colors">WhatsApp Support</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="text-violet-400 text-[0.8rem] font-bold hover:text-violet-300 transition-colors">Messenger Chat</a>
          </div>

          {/* Student count badge */}
          <div className="mt-4 flex items-center gap-4 p-4 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-800 bg-violet-500/50" />)}
            </div>
            <p className="text-slate-500 text-[0.7rem] font-medium leading-none">
              Join <span className="text-white font-bold">500+</span> other students today
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
