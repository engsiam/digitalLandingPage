"use client";

import { CheckCircle2, Rocket, Brain, MessageSquare, Ship, Wand2 } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const SOLUTIONS = [
  {
    title: "Learn landing pages as a skill",
    description: "Master the art of creating high-converting landing pages that businesses crave.",
    icon: Rocket,
  },
  {
    title: "Use AI tools like LovableX",
    description: "Leverage cutting-edge AI to build faster than ever. No coding required.",
    icon: Wand2,
  },
  {
    title: "Understand conversion psychology",
    description: "Learn why people click 'Buy'. Master the science behind high-converting designs.",
    icon: Brain,
  },
  {
    title: "Get client outreach guidance",
    description: "Exact scripts and strategies to find and talk to clients who need your help.",
    icon: MessageSquare,
  },
  {
    title: "Close and deliver real work",
    description: "The complete workflow from first contact to receiving your payment.",
    icon: Ship,
  },
];

export default function SolutionSection() {
  return (
    <SectionWrapper
      id="solution"
      badge="The Breakthrough"
      title={
        <>
          Not another theory course, but a <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">step-by-step roadmap</span>
        </>
      }
      subtitle="Stop learning for the sake of learning. Learn to build, sell, and earn with a proven system designed for the modern economy."
      className="bg-slate-950/20"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image/Graphic placeholder or specific visual */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden aspect-video border border-violet-500/20 shadow-2xl shadow-violet-500/10 bg-[#0d1220]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent" />
          <div className="flex items-center justify-center h-full">
             <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/30">
                  <Rocket className="text-violet-400" size={32} />
                </div>
                <p className="text-slate-400 font-medium tracking-wide">Professional Digital Skills</p>
             </div>
          </div>
        </motion.div>

        {/* Right: Feature Highlights */}
        <div className="flex flex-col gap-6">
          {SOLUTIONS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors"
            >
              <div className="mt-1 w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-all">
                <item.icon className="text-violet-400" size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
