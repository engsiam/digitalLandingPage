"use client";

import { ArrowRight, Sparkles, Zap, Shield, Lock } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import CTAButton from "./ui/CTAButton";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <SectionWrapper
      id="get-started"
      className="bg-gradient-to-b from-transparent to-violet-950/20"
      padding="lg"
    >
      <div className="relative max-w-5xl mx-auto text-center px-4 py-20 bg-slate-900/40 rounded-[4rem] border border-white/5 backdrop-blur-3xl overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-600/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative z-10 flex flex-col items-center gap-10"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-black uppercase tracking-[0.2em]">
              <Sparkles size={14} className="animate-pulse" />
              Your New Beginning Starts Here
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] tracking-tighter">
              Stop Staying <span className="text-slate-500 line-through decoration-red-500/50">Confused</span>. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                Start Building a Real Skill.
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
               This is the clearest roadmap for any university student to go from zero to building professional landing pages. Don&apos;t miss the launch offer.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 w-full max-w-md">
            <CTAButton
              id="final-cta-btn"
              href="#pricing"
              size="lg"
              fullWidth
              className="py-6 text-xl shadow-[0_0_50px_rgba(139,92,246,0.6)] font-black uppercase"
              icon={<ArrowRight size={20} />}
            >
              Get Access & Start Learning
            </CTAButton>
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 pt-4">
               <div className="flex items-center gap-2 opacity-60">
                 <Shield size={16} className="text-emerald-400" />
                 <span className="text-white text-[0.7rem] font-bold uppercase tracking-widest">Lifetime Access</span>
               </div>
               <div className="w-px h-3 bg-white/10 hidden sm:block" />
               <div className="flex items-center gap-2 opacity-60">
                 <Zap size={16} className="text-cyan-400" />
                 <span className="text-white text-[0.7rem] font-bold uppercase tracking-widest">Instant Delivery</span>
               </div>
               <div className="w-px h-3 bg-white/10 hidden sm:block" />
               <div className="flex items-center gap-2 opacity-60">
                 <Lock size={16} className="text-emerald-400" />
                 <span className="text-white text-[0.7rem] font-bold uppercase tracking-widest">Secure SSL Payment</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
