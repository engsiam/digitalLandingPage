"use client";

import { XCircle, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
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
  "Clear path to 10K-50K BDT monthly"
];

export default function TransformationSection() {
  return (
    <SectionWrapper
      id="transformation"
      badge="The Transformation"
      title="From Confused to Confident"
      subtitle="See how this roadmap changes your digital career trajectory."
      className="bg-slate-950/20"
    >
      <div className="grid md:grid-cols-11 gap-4 items-center max-w-5xl mx-auto">
        {/* Before Card */}
        <div className="md:col-span-5 relative group">
          <div className="absolute inset-0 bg-red-500/5 blur-[40px] rounded-full -z-10 group-hover:bg-red-500/10 transition-colors" />
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-red-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <XCircle className="text-red-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Before</h3>
            </div>
            
            <ul className="space-y-4">
              {BEFORE_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Arrow Decoration */}
        <div className="md:col-span-1 flex justify-center py-4 md:py-0">
          <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-lg shadow-violet-950/20">
            <ArrowRight className="text-violet-400 animate-pulse" size={24} />
          </div>
        </div>

        {/* After Card */}
        <div className="md:col-span-5 relative group">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[40px] rounded-full -z-10 group-hover:bg-emerald-500/10 transition-colors" />
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/20 shadow-xl shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <CheckCircle2 className="text-emerald-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">After</h3>
            </div>
            
            <ul className="space-y-4">
              {AFTER_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={16} />
                  <span className="text-sm sm:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
