"use client";

import { CheckCircle2, Rocket, Brain, MessageSquare, Ship, Wand2, ArrowRight, Target, Cpu, Layout, Sparkles } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "Practical Skill Mastery",
    description: "Go from 'no-code' to building professional, mobile-first landing pages in days, not months.",
    icon: Layout,
    color: "violet"
  },
  {
    title: "AI-Powered Efficiency",
    description: "Leverage advanced AI tools to build 10x faster. We show you exactly how to prompt for results.",
    icon: Cpu,
    color: "cyan"
  },
  {
    title: "The Client Roadmap",
    description: "No more guessing. We provide the scripts and strategies to find and close your first clients.",
    icon: Target,
    color: "emerald"
  }
];

export default function SolutionSection() {
  return (
    <SectionWrapper
      id="solution"
      badge="The Breakthrough"
      title={
        <>
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Clearest Path</span> for Students to Start
        </>
      }
      subtitle="Stop wasting time on general advice. This is a battle-tested roadmap designed specifically for the modern digital economy."
      className="bg-slate-950/20 py-24 sm:py-32"
    >
      <div className="flex flex-col gap-20">
        
        {/* Main Positioning Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
             <div className="space-y-4">
                <h3 className="text-3xl font-black text-white leading-tight">
                   Not just a &quot;course&quot;, but a <br/>
                   <span className="italic underline decoration-violet-500/50 decoration-4 underline-offset-8">Skill Delivery System</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                   Most courses teach you theory and leave you alone. We give you a practical skill that you can turn into a service immediately. We focus on the most profitable part of web design: <span className="text-violet-300 font-bold">Landing Pages.</span>
                </p>
             </div>

             <div className="grid grid-cols-1 gap-4">
                {[
                  "No coding knowledge required",
                  "AI tools that do 90% of the work",
                  "Built-in client outreach framework",
                  "Real-world project templates included"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                        <CheckCircle2 className="text-emerald-400" size={14} />
                     </div>
                     <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-violet-600/10 blur-[100px] rounded-full" />
            
            <div className="relative rounded-[2.5rem] bg-slate-900/40 border border-white/10 p-10 backdrop-blur-3xl overflow-hidden group">
               <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-2xl shadow-violet-950/20">
                     <Rocket className="text-violet-400 animate-pulse" size={36} />
                  </div>
                  <div className="space-y-2">
                     <p className="text-white font-black text-xl tracking-tight">The 30-Day Goal</p>
                     <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                        Go from complete beginner to landing your first professional project using our AI-assisted workflow.
                     </p>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-white/10 shadow-lg">
                     <Sparkles size={16} className="text-amber-400" />
                     <span className="text-white text-sm font-bold">Next Batch starting soon</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-8">
           {PILLARS.map((pillar, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-violet-500/30 transition-all duration-300 group"
             >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-violet-500/10 group-hover:border-violet-500/20 transition-all`}>
                   <pillar.icon size={24} className="text-slate-300 group-hover:text-violet-400" />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{pillar.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
             </motion.div>
           ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
