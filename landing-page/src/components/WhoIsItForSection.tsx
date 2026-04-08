"use client";

import { Check, X, Users, Target } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const FOR_LIST = [
  "University students looking for a side income",
  "Beginners with zero coding absolute knowledge",
  "People wanting a practical high-income digital skill",
  "Anyone interested in leveraging AI for work"
];

const NOT_FOR_LIST = [
  "People looking for 'get rich quick' schemes",
  "Those unwilling to put in the practice time",
  "Advanced developers looking for complex coding",
  "Anyone not ready to talk to potential clients"
];

export default function WhoIsItForSection() {
  return (
    <SectionWrapper
      id="eligibility"
      badge="Audience Fit"
      title="Is This Right For You?"
      subtitle="Let's be honest about who will benefit the most from this roadmap."
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* For List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Check className="text-emerald-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">This is FOR:</h3>
              <p className="text-emerald-400/60 text-xs font-medium uppercase tracking-widest">Ideal Candidates</p>
            </div>
          </div>
          
          <ul className="space-y-5">
            {FOR_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                  <Check className="text-emerald-400" size={12} />
                </div>
                <span className="text-slate-300 text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not For List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[2.5rem] bg-red-500/5 border border-red-500/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
              <X className="text-red-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">This is NOT FOR:</h3>
              <p className="text-red-400/60 text-xs font-medium uppercase tracking-widest">Wrong Fit</p>
            </div>
          </div>
          
          <ul className="space-y-5">
            {NOT_FOR_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/30 transition-colors">
                  <X className="text-red-400" size={12} />
                </div>
                <span className="text-slate-400 text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
