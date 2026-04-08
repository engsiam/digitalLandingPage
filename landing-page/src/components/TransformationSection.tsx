"use client";

import { XCircle, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const BEFORE_ITEMS = [
  "Confused about where to start",
  "No clear monetizable skill",
  "No income roadmap",
  "Overwhelmed by random tutorials"
];

const AFTER_ITEMS = [
  "Mastered a high-demand skill",
  "AI-assisted fast workflow",
  "Ready to offer premium services",
  "Professional portfolio of 5+ pages"
];

export default function TransformationSection() {
  return (
    <SectionWrapper
      id="transformation"
      badge="The Results"
      title="A Life-Changing Transformation"
      subtitle="Stop surviving. Start thriving with a high-income digital career."
      className="bg-slate-950/20 py-24 sm:py-32"
    >
      <div className="grid md:grid-cols-11 gap-8 items-stretch max-w-5xl mx-auto px-4">
        {/* Before Card (Negative - Red) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 relative group flex flex-col"
        >
          <div className="absolute inset-0 bg-red-500/5 blur-[60px] rounded-full -z-10 group-hover:bg-red-500/10 transition-all duration-500" />
          <div className="flex-1 p-8 rounded-[2rem] bg-red-500/[0.02] border border-red-500/10 hover:border-red-500/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <AlertTriangle className="text-red-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Before</h3>
                <p className="text-red-400/60 text-[0.65rem] font-bold tracking-[0.2em] uppercase">The Struggle</p>
              </div>
            </div>
            
            <ul className="space-y-5">
              {BEFORE_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="text-red-500/40 mt-1 shrink-0" size={18} />
                  <span className="text-slate-400 text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Transition Indicator */}
        <div className="md:col-span-1 flex flex-col items-center justify-center py-6 md:py-0">
          <div className="w-1.5 h-full md:w-full md:h-1.5 bg-gradient-to-b md:bg-gradient-to-r from-red-500/20 via-violet-500 to-emerald-500/20 rounded-full opacity-30" />
          <div className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl shadow-black relative z-10 transition-transform group-hover:scale-110">
            <ArrowRight className="text-violet-400" size={24} />
          </div>
        </div>

        {/* After Card (Positive - Green) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 relative group flex flex-col"
        >
          <div className="absolute inset-0 bg-emerald-500/5 blur-[60px] rounded-full -z-10 group-hover:bg-emerald-500/10 transition-all duration-500" />
          <div className="flex-1 p-8 rounded-[2rem] bg-emerald-500/[0.03] border border-emerald-500/20 shadow-2xl shadow-emerald-500/5 hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <CheckCircle2 className="text-emerald-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">After</h3>
                <p className="text-emerald-400/60 text-[0.65rem] font-bold tracking-[0.2em] uppercase">The Victory</p>
              </div>
            </div>
            
            <ul className="space-y-5">
              {AFTER_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={18} />
                  <span className="text-slate-100 text-sm sm:text-base font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
