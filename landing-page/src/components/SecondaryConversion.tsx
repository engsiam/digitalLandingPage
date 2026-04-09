"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles, BookOpen } from "lucide-react";

export default function SecondaryConversion() {
  return (
    <section className="py-24 bg-slate-950/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="p-10 sm:p-16 rounded-[3.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-3xl flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
           <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                 Low-Pressure Mastery
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                 Not ready to <span className="text-cyan-400">commit</span> yet?
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                 Get our <strong>&quot;Student Skill Roadmap&quot;</strong> — a free 5-page guide on why AI landing pages are the fastest path to earning online in 2026.
              </p>
           </div>

           <div className="w-full md:w-[320px] space-y-4">
              <div className="relative group">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm"
                 />
              </div>
              <button className="w-full px-8 py-4 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/20 group">
                 Get Free Roadmap <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[0.65rem] text-slate-500 text-center flex items-center justify-center gap-2">
                 <BookOpen size={10} /> No spam. Just a 5-minute practical PDF guide.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
