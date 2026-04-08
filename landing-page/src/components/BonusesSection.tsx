"use client";

import { Gift, Sparkles, Megaphone, FileText, Target, Zap } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const BONUSES = [
  {
    title: "AI Prompt Pack",
    description: "Copy-paste prompts to get high-end landing page code using Lovable without thinking.",
    icon: <Zap size={20} className="text-violet-400" />,
    value: "Worth 2,500 BDT",
    accent: "purple"
  },
  {
    title: "Landing Page Structure Templates",
    description: "Proven layouts for SaaS, E-com, and Service pages that are guaranteed to convert.",
    icon: <FileText size={20} className="text-cyan-400" />,
    value: "Worth 3,000 BDT",
    accent: "cyan"
  },
  {
    title: "Outreach Message Templates",
    description: "Battle-tested scripts that actually get replies from busy business owners.",
    icon: <Megaphone size={20} className="text-emerald-400" />,
    value: "Worth 1,500 BDT",
    accent: "green"
  },
  {
    title: "CTA & Headline Swipe File",
    description: "A collection of words that trigger clicks and sales instantly. Never stare at a blank page.",
    icon: <Sparkles size={20} className="text-amber-400" />,
    value: "Worth 1,000 BDT",
    accent: "amber"
  },
  {
    title: "First Client Action Plan",
    description: "A day-by-day checklist of tasks to get your first paying client within 30 days.",
    icon: <Target size={20} className="text-emerald-400" />,
    value: "Worth 2,000 BDT",
    accent: "green"
  },
];

export default function BonusesSection() {
  return (
    <SectionWrapper
      id="bonuses"
      className="bg-black/40 py-32"
    >
      <div className="relative p-10 sm:p-16 rounded-[3.5rem] bg-slate-900/40 border border-white/[0.05] overflow-hidden shadow-2xl">
        {/* Premium Ambient Glow */}
        <div className="absolute inset-0 premium-bonus-glow opacity-60 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center gap-6 mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.4)] border border-white/20"
          >
            <Gift size={40} className="text-white" />
          </motion.div>
          
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black text-white italic tracking-tight uppercase">
              Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300">Fast-Action</span> Bonuses
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed">
              Get these powerful resources for <span className="text-white font-bold underline decoration-violet-500">FREE</span> when you join today. Designed to accelerate your path to earning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {BONUSES.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col ${index === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform`}>
                  {bonus.icon}
                </div>
                <span className="text-[0.7rem] font-black uppercase tracking-widest text-violet-300 bg-violet-500/10 px-3 py-1.5 rounded-xl border border-violet-500/20">
                  {bonus.value}
                </span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-violet-300 transition-colors">{bonus.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {bonus.description}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[0.6rem] font-bold text-violet-400 uppercase tracking-widest flex items-center gap-2">
                   <Sparkles size={10} /> Included for free
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Value Badge */}
        <div className="mt-16 flex justify-center relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="px-8 py-4 rounded-full bg-violet-500/10 border border-violet-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.15)] flex items-center gap-4"
          >
            <Zap className="text-violet-400 fill-violet-400" size={20} />
            <p className="text-white text-base sm:text-lg font-bold">
              Total Bonus Value: <span className="text-violet-300 font-black tracking-wider ml-1 underline decoration-violet-500 underline-offset-8">10,000 BDT</span> - Yours FREE
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
