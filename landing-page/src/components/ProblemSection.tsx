"use client";

import { AlertTriangle, Clock, Zap, Wallet } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import PremiumCard from "./ui/PremiumCard";

const PROBLEMS = [
  {
    icon: <Clock size={24} />,
    title: "Endless Learning Loops",
    description: "You've watched 100+ YouTube tutorials but still don't know how to build a real product from scratch.",
    badge: "Problem #1",
    accent: "purple" as const,
  },
  {
    icon: <Zap size={24} />,
    title: "Too Much Theory",
    description: "You know what HTML and CSS are, but you have no clue how to actually land a client and get paid.",
    badge: "Problem #2",
    accent: "cyan" as const,
  },
  {
    icon: <Wallet size={24} />,
    title: "Zero Invoicing Path",
    description: "You're a student with potential, but you lack the roadmap to go from 'student' to 'becoming a professional creator'.",
    badge: "Problem #3",
    accent: "pink" as const,
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper
      id="problem"
      badge="The Barrier"
      title={
        <>
          Why most students stay <span className="text-red-500">broke</span> despite the tech boom
        </>
      }
      subtitle="The system is designed to keep you learning forever, not earning. Here's why you're feeling stuck."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROBLEMS.map((problem, index) => (
          <PremiumCard
            key={index}
            badge={problem.badge}
            title={problem.title}
            description={problem.description}
            icon={problem.icon}
            accent={problem.accent}
            delay={index * 0.1}
          />
        ))}
      </div>
      
      <div className="mt-20 flex justify-center">
        <div className="px-8 py-6 rounded-[2.5rem] bg-slate-900/40 border border-white/5 flex flex-col sm:flex-row items-center gap-6 max-w-2xl text-center sm:text-left">
           <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shrink-0">
              <AlertTriangle className="text-red-500" size={32} />
           </div>
           <div>
              <p className="text-slate-100 text-lg font-bold leading-tight">Sounds familiar?</p>
              <p className="text-slate-400 text-sm mt-1">Don't worry. This isn't your fault. You just need a better roadmap.</p>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
