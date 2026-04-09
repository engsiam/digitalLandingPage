"use client";

import { CheckCircle2, Zap, Rocket, Target, Code2, Heart, Award, Sparkles, Layout } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    title: "High-Demand Service",
    description: "Every business in 2026 needs a high-converting landing page for their ads and social media. The demand is massive.",
    icon: Target,
    label: "Market Need"
  },
  {
    title: "Beginner-Friendly Path",
    description: "You don't need a CS degree. If you can use a browser and follow a prompt, you can build premium landing pages.",
    icon: Heart,
    label: "Easy Entry"
  },
  {
    title: "No Coding Needed",
    description: "Forget learning Java or Python for 6 months. Focus on design and strategy while AI handles the code.",
    icon: Code2,
    label: "Fast Skill"
  },
  {
    title: "10x Faster with AI",
    description: "What used to take a developer 3 days now takes you 3 hours. More speed = more projects = more results.",
    icon: Zap,
    label: "AI Advantage"
  },
  {
    title: "Easier to Sell",
    description: "Businesses are terrified of 'Full Websites'. They LOVE simple, 1-page landing pages that bring customers.",
    icon: Layout,
    label: "Micro Service"
  },
  {
    title: "Real Business Value",
    description: "You're not 'making pages'. You're helping businesses get sales. That's why they'll pay you premium rates.",
    icon: Award,
    label: "High Value"
  },
];

export default function WhySection() {
  return (
    <SectionWrapper
      id="why"
      badge="The Opportunity"
      title="Why Landing Pages are the Ultimate Student Skill"
      subtitle="Landing pages are the backbone of modern digital marketing. It's the fastest way for a student to go from zero to earning."
      className="bg-slate-950/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-violet-500/30 transition-all duration-300 flex flex-col items-start overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 blur-[40px] rounded-full group-hover:bg-violet-600/10 transition-all duration-500" />
            
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 mb-6 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all">
               <benefit.icon size={22} className="text-violet-400" />
            </div>

            <div className="relative z-10 flex flex-col gap-3">
               <span className="text-[0.65rem] font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 px-2.5 py-1 rounded-lg border border-violet-500/20 w-fit">
                  {benefit.label}
               </span>
               <h3 className="text-white font-bold text-xl leading-tight group-hover:text-violet-300 transition-colors">
                  {benefit.title}
               </h3>
               <p className="text-slate-400 text-[0.9375rem] leading-relaxed">
                  {benefit.description}
               </p>
            </div>

            {/* Accent light on hover */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-6 py-4 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
         >
           <Sparkles className="text-amber-400" size={18} />
           <p className="text-slate-400 text-sm sm:text-base">
             Stop following the crowd. Start building a skill that actually has <span className="text-white font-bold italic underline decoration-violet-500/50 underline-offset-4">real market value.</span>
           </p>
         </motion.div>
      </div>
    </SectionWrapper>
  );
}
