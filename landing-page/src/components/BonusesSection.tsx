"use client";

import { Gift, Sparkles, Megaphone, FileText, Target, Zap } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const BONUSES = [
  {
    title: "AI Prompt Pack",
    description: "Copy-paste prompts to get high-end landing page code using Lovable without thinking.",
    icon: <Zap size={20} className="text-violet-400" />,
    value: "Worth 2,500 BDT"
  },
  {
    title: "Landing Page Structure Templates",
    description: "Proven layouts for SaaS, E-com, and Service pages that are guaranteed to convert.",
    icon: <FileText size={20} className="text-cyan-400" />,
    value: "Worth 3,000 BDT"
  },
  {
    title: "Outreach Message Templates",
    description: "Battle-tested scripts that actually get replies from busy business owners.",
    icon: <Megaphone size={20} className="text-pink-400" />,
    value: "Worth 1,500 BDT"
  },
  {
    title: "CTA & Headline Swipe File",
    description: "A collection of words that trigger clicks and sales instantly. Never stare at a blank page.",
    icon: <Sparkles size={20} className="text-amber-400" />,
    value: "Worth 1,000 BDT"
  },
  {
    title: "First Client Action Plan",
    description: "A day-by-day checklist of tasks to get your first paying client within 30 days.",
    icon: <Target size={20} className="text-emerald-400" />,
    value: "Worth 2,000 BDT"
  },
];

export default function BonusesSection() {
  return (
    <SectionWrapper
      id="bonuses"
      className="bg-violet-950/10"
      withOrb
    >
      <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-violet-900/40 to-slate-900/60 border border-violet-500/30 overflow-hidden shadow-2xl shadow-violet-900/20">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px]" />
        
        <div className="relative z-10 flex flex-col items-center text-center gap-6 mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center border border-violet-400/30 shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          >
            <Gift size={32} className="text-violet-300" />
          </motion.div>
          
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-white italic tracking-tight uppercase">
              Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">Fast-Action</span> Bonuses
            </h2>
            <p className="text-violet-200/60 text-base sm:text-lg max-w-2xl font-medium">
              Get these powerful resources for FREE when you join today. Designed to accelerate your path to earning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
          {BONUSES.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-400/40 hover:bg-white/[0.05] transition-all group ${index === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {bonus.icon}
                </div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-violet-400 bg-violet-400/10 px-2 py-1 rounded-md border border-violet-400/20">
                  {bonus.value}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors">{bonus.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {bonus.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Total Value Badge */}
        <div className="mt-12 flex justify-center relative z-10">
          <div className="px-6 py-3 rounded-full bg-violet-500/20 border border-violet-500/40 backdrop-blur-md">
            <p className="text-white text-sm font-bold">
              Total Bonus Value: <span className="text-violet-300 font-black tracking-wider ml-1 underline decoration-violet-500/50 underline-offset-4">10,000 BDT</span> - Yours FREE
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
