"use client";

import { Check, ArrowRight, Zap, Shield, HelpCircle, Star } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import PremiumCard from "./ui/PremiumCard";
import CTAButton from "./ui/CTAButton";
import { motion } from "framer-motion";

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
      title="Invest in Your Future Skills"
      subtitle="Join 500+ successful students today. Limited time launch offer."
      withOrb
      padding="lg"
    >
      <div className="max-w-xl mx-auto relative">
        {/* Sparkle decoration */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-amber-500/20 blur-[40px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-violet-500/20 blur-[40px] rounded-full pointer-events-none" />

        <PremiumCard
          featured
          title="Complete AI Landing Page Course"
          className="shadow-[0_0_80px_rgba(139,92,246,0.25)]"
        >
          <div className="p-8 sm:p-12 flex flex-col items-center">
            {/* Price Header */}
            <div className="text-center mb-10 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[0.65rem] font-black uppercase tracking-widest mb-6">
                 Highly Recommended
              </div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-slate-500 text-3xl font-black">BDT</span>
                <span className="text-7xl sm:text-8xl font-black text-white tracking-tighter">
                  1,490
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 mt-4">
                <span className="text-slate-600 line-through text-xl font-medium">2,990 BDT</span>
                <span className="text-emerald-500 text-sm font-black bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
                  Save 50%
                </span>
              </div>
              <p className="text-slate-500 text-xs mt-6 font-medium italic opacity-70">
                Launch price available for a limited time. Price will increase later.
              </p>
            </div>

            {/* Feature List */}
            <div className="w-full space-y-5 mb-12">
              <p className="text-white font-black text-xs uppercase tracking-[0.3em] text-center opacity-40 mb-8">— What&apos;s Included —</p>
              <div className="grid grid-cols-1 gap-5">
                {FEATURES.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/30 group-hover:bg-violet-500/20 transition-colors shrink-0">
                      <Check size={14} className="text-violet-400" />
                    </div>
                    <span className="text-slate-300 text-base font-medium group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <CTAButton
              id="pricing-checkout-btn"
              href="https://checkout.example.com"
              size="lg"
              fullWidth
              icon={<ArrowRight size={24} />}
              iconPosition="right"
              className="py-6 text-xl shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(139,92,246,0.9)] scale-105"
            >
              Get Instant Access Now
            </CTAButton>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 w-full border-t border-white/5 pt-10">
              <div className="flex items-center gap-3">
                <Shield size={22} className="text-slate-500" />
                <span className="text-[0.7rem] text-slate-500 uppercase font-black tracking-widest leading-none">Secure <br/> Payments</span>
              </div>
              <div className="w-px h-8 bg-white/5 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Zap size={22} className="text-slate-500" />
                <span className="text-[0.7rem] text-slate-500 uppercase font-black tracking-widest leading-none">Instant <br/> Access</span>
              </div>
              <div className="w-px h-8 bg-white/5 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Star size={22} className="text-slate-500" />
                <span className="text-[0.7rem] text-slate-500 uppercase font-black tracking-widest leading-none">Lifetime <br/> Updates</span>
              </div>
            </div>
          </div>
        </PremiumCard>

        {/* Support Link */}
        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <p className="text-slate-500 text-sm">
            Join <span className="text-white font-bold">500+ students</span> who already started.
          </p>
          <div className="flex gap-4 p-2 rounded-2xl bg-white/[0.03] border border-white/5">
            <a href="#" className="px-6 py-2 rounded-xl text-violet-400 text-[0.85rem] font-black hover:bg-violet-500/10 transition-all uppercase tracking-wider">WhatsApp Support</a>
            <a href="#" className="px-6 py-2 rounded-xl text-violet-400 text-[0.85rem] font-black hover:bg-violet-500/10 transition-all uppercase tracking-wider">Messenger Chat</a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
