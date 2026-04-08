"use client";

import { ArrowRight, Sparkles } from "lucide-react";
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
      <div className="relative max-w-4xl mx-auto text-center px-4">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-600/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-bold uppercase tracking-widest mb-4">
            <Sparkles size={16} className="animate-pulse" />
            Final Call
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Stop staying confused. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Start building a skill that pays you.
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Join 500+ students who have chosen to stop watching from the sidelines and started building their digital future today.
          </p>
          
          <div className="pt-6 flex flex-col items-center gap-6">
            <CTAButton
              id="final-cta-btn"
              href="#pricing"
              size="lg"
              className="px-12 py-5 text-xl"
              icon={<ArrowRight />}
            >
              Get Instant Access Now
            </CTAButton>
            
            <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Secure Checkout & Instant Digital Access
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
