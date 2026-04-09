"use client";

import { AlertCircle, ArrowRight, Brain, Clock, HelpCircle, TrendingDown, Wallet } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const PAINS = [
  {
    id: "pain-1",
    icon: Clock,
    title: "Watching random tutorials without results?",
    description: "You've spent hours on YouTube, yet when you open a blank page, you have no idea where to start. You're stuck in 'tutorial hell' and it feels like you're going nowhere.",
    accent: "red"
  },
  {
    id: "pain-2",
    icon: TrendingDown,
    title: "Feeling behind while others are earning?",
    description: "Every day you see success stories online while you're still confused. That feeling of 'missing out' is real, and it's exhausting to not have a clear path to follow.",
    accent: "red"
  },
  {
    id: "pain-3",
    icon: Wallet,
    title: "No monetizable skill to your name?",
    description: "University degrees take years. You need a skill that works *now*. Without a practical service to offer, you're stuck waiting for a future that feels uncertain.",
    accent: "red"
  }
];

export default function ProblemSection() {
  return (
    <SectionWrapper
      id="problem"
      badge="The Frustration"
      title={
        <>
          Tired of being <span className="text-red-500 underline decoration-red-500/30 underline-offset-8">confused</span> about how to start?
        </>
      }
      subtitle="The system is designed to keep you learning forever, not earning. Most students are stuck in a cycle of theoretical knowledge with zero practical results."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PAINS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Subtle red background glow */}
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-[40px] rounded-full" />
            
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-6 group-hover:scale-110 transition-transform">
               <item.icon size={26} className="text-red-400" />
            </div>
            
            <h3 className="relative z-10 text-white font-bold text-xl mb-4 leading-tight group-hover:text-red-300 transition-colors">
              {item.title}
            </h3>
            
            <p className="relative z-10 text-slate-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-[3rem] bg-slate-900/60 border border-white/5 flex flex-col md:flex-row items-center gap-8 max-w-3xl relative overflow-hidden group"
        >
           {/* Pulsing indicator */}
           <div className="absolute top-4 right-4 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
             <span className="text-[0.6rem] font-bold text-red-400 uppercase tracking-widest">Real talk</span>
           </div>

           <div className="w-20 h-20 rounded-[2rem] bg-red-500/10 flex items-center justify-center border border-red-500/20 shrink-0 shadow-lg shadow-red-950/20">
              <AlertCircle className="text-red-500" size={36} />
           </div>
           
           <div className="flex-1 text-center md:text-left">
              <h4 className="text-white font-bold text-lg mb-2 italic">“I have the potential, I just don&apos;t have the direction.”</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                If this is you, don&apos;t feel guilty. You don&apos;t need another theory course. You need a practical, step-by-step roadmap that actually leads to results.
              </p>
           </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
