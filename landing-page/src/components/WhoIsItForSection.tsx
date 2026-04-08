"use client";

import { Check, X, UserCheck, UserX } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const FOR_LIST = [
  "University students looking for a side income",
  "Beginners with zero coding knowledge",
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
      badge="Qualification"
      title="Is This Right For You?"
      subtitle="Find out if you're the ideal candidate for this roadmap."
    >
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
        {/* For List (Green) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300 group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full -z-10 group-hover:bg-emerald-500/10" />
          
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <UserCheck className="text-emerald-400" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">This is FOR:</h3>
              <p className="text-emerald-400/60 text-xs font-bold uppercase tracking-widest">Ideal Candidates</p>
            </div>
          </div>
          
          <ul className="space-y-6">
            {FOR_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group/item">
                <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-500/30 transition-colors">
                  <Check className="text-emerald-400" size={14} />
                </div>
                <span className="text-slate-100 text-base sm:text-lg leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not For List (Red) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 rounded-[3rem] bg-red-500/[0.02] border border-red-500/10 hover:border-red-500/20 transition-all duration-300 group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full -z-10 group-hover:bg-red-500/10" />
          
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform">
              <UserX className="text-red-400" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">This is NOT FOR:</h3>
              <p className="text-red-400/60 text-xs font-bold uppercase tracking-widest">Wrong Path</p>
            </div>
          </div>
          
          <ul className="space-y-6">
            {NOT_FOR_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group/item">
                <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-red-500/30 transition-colors">
                  <X className="text-red-400" size={14} />
                </div>
                <span className="text-slate-400 text-base sm:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
