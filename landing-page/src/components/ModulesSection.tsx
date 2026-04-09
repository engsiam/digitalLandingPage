"use client";

import { Check, ChevronDown, Rocket, Layout, Cpu, Target, Ship, Zap, BookOpen, Sparkles } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MODULES = [
  {
    number: "01",
    title: "Direction & Opportunity",
    summary: "Understand the high-income potential of landing pages and how to position yourself as a student.",
    bullets: [
      "Why Landing Pages are better than full websites",
      "Finding your 'Niche' (Real Estate, Coaches, SaaS)",
      "Setting up your mindset for the 30-day sprint",
      "Goal setting: Your first 10,000 BDT strategy"
    ],
    outcome: "You'll have a clear, focused roadmap and the confidence to start.",
    icon: Rocket
  },
  {
    number: "02",
    title: "The Anatomy of a High-Converting Page",
    summary: "Learn the conversion psychology that makes people click 'Buy'.",
    bullets: [
      "The 'Hook-Value-Proof' framework",
      "Writing headlines that grab attention",
      "Structure: Header, Hero, Pain, Solution, Social Proof, CTA",
      "Color theory and typography for SaaS designs"
    ],
    outcome: "You'll know exactly what to put on a page to make it sell.",
    icon: Layout
  },
  {
    number: "03",
    title: "Generate Landing Pages with AI",
    summary: "The core skill: How to tell the AI exactly what you want using Lovable.",
    bullets: [
      "Prompt Engineering for landing pages",
      "Using Lovable to bridge the gap between AI and Code",
      "Generating modern layouts in minutes",
      "Iterating with AI to get pixel-perfect results"
    ],
    outcome: "You'll be able to build a premium landing page draft in under 1 hour.",
    icon: Cpu
  },
  {
    number: "04",
    title: "The Client-Ready Polish",
    summary: "Take your AI results and turn them into a professional final product.",
    bullets: [
      "Customizing styles and mobile responsiveness",
      "Adding custom assets and premium icons",
      "Ensuring fast load times and SEO basics",
      "Testing conversion elements on 5+ screen sizes"
    ],
    outcome: "Your pages will look like they were built by a 5-year expert.",
    icon: Sparkles
  },
  {
    number: "05",
    title: "Finding Your First Clients",
    summary: "The outreach roadmap: Where to find people who need your help.",
    bullets: [
      "The 'Cold Portfolio' strategy for students",
      "Finding leads on LinkedIn and Facebook",
      "The Outreach Message framework that gets replies",
      "Offering value before the 'Ask'"
    ],
    outcome: "You'll have a list of potential clients and a way to reach them.",
    icon: Target
  },
  {
    number: "06",
    title: "Closing the Move",
    summary: "How to talk to clients and convince them to trust you.",
    bullets: [
      "Handling price objections ('Too expensive?')",
      "Explaining value: Shift from 'Pages' to 'Leads'",
      "Simple contract and agreement templates",
      "Preparing for the kickoff call"
    ],
    outcome: "You'll be able to walk into a client call with zero fear.",
    icon: Zap
  },
  {
    number: "07",
    title: "Delivery & Momentum",
    summary: "Handing over the work and getting your first payment.",
    bullets: [
      "Collecting content and assets safely",
      "The Professional Delivery process",
      "Getting high-quality testimonials",
      "Scaling up: Raising your price for the next project"
    ],
    outcome: "You'll have your first payment and a system to repeat it.",
    icon: Ship
  }
];

export default function ModulesSection() {
  const [activeModule, setActiveModule] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="modules"
      badge="The Roadmap"
      title="Step-by-Step Skill Mastery"
      subtitle="7 deep-dive modules designed to take you from a complete beginner to a professional digital creator."
      className="bg-slate-950/20"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {MODULES.map((module, i) => (
          <div 
            key={i} 
            className={`group rounded-[2rem] border transition-all duration-300 overflow-hidden ${
              activeModule === i 
                ? "bg-slate-900 border-violet-500/40 shadow-xl shadow-violet-950/20" 
                : "bg-white/[0.02] border-white/5 hover:border-white/10"
            }`}
          >
            <button
              onClick={() => setActiveModule(activeModule === i ? null : i)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left"
              aria-expanded={activeModule === i}
            >
              <div className="flex items-center gap-6">
                <span className={`text-sm font-black tracking-widest ${activeModule === i ? 'text-violet-400' : 'text-slate-600'}`}>
                  {module.number}
                </span>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    activeModule === i 
                      ? "bg-violet-500/20 border-violet-500/30 text-violet-400" 
                      : "bg-white/5 border-white/10 text-slate-400"
                  }`}>
                     <module.icon size={20} />
                  </div>
                  <h3 className={`font-bold text-lg sm:text-xl tracking-tight transition-colors ${activeModule === i ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {module.title}
                  </h3>
                </div>
              </div>
              <ChevronDown 
                className={`text-slate-500 transition-transform duration-300 ${activeModule === i ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>

            <AnimatePresence>
               {activeModule === i && (
                 <motion.div
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: "auto", opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   transition={{ duration: 0.35, ease: "easeInOut" }}
                 >
                    <div className="px-6 sm:px-8 pb-8 pt-2">
                       <div className="pl-0 sm:pl-16">
                          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                             {module.summary}
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                             {module.bullets.map((bullet, j) => (
                               <div key={j} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                     <Check size={12} className="text-emerald-500" />
                                  </div>
                                  <span className="text-slate-300 text-sm leading-snug">{bullet}</span>
                               </div>
                             ))}
                          </div>

                          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 flex items-center gap-4">
                             <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shrink-0">
                                <BookOpen size={14} className="text-violet-400" />
                             </div>
                             <p className="text-xs sm:text-sm">
                                <span className="text-violet-300 font-bold uppercase tracking-wider text-[0.6rem] block mb-0.5">The Result:</span>
                                <span className="text-slate-300 italic">{module.outcome}</span>
                             </p>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
