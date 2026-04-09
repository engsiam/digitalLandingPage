"use client";

import { Star, Quote, Heart } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

const STORIES = [
  {
    name: "Siam R.",
    role: "Engineering Student",
    text: "I was stuck in 'tutorial hell' for months. This roadmap finally gave me a practical path. I built my first professional landing page in just 3 days using the AI workflow.",
    impact: "Built 1st Portfolio"
  },
  {
    name: "Rumana A.",
    role: "Business Major",
    text: "I always thought freelancing required hardcore coding. This made it feel so much less confusing. I finally understand what service I can actually offer to businesses.",
    impact: "Confident Skill"
  },
  {
    name: "Arif H.",
    role: "University Student",
    text: "The outreach templates are gold. I used to be terrified of talking to clients, but now I have a clear system to follow. It's the most practical guide I've found.",
    impact: "Ready for Outreach"
  }
];

export default function SuccessStories() {
  return (
    <SectionWrapper
      id="stories"
      badge="Testimonials"
      title="Student Success Stories"
      subtitle="Real experiences from students who stopped watching and started building."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {STORIES.map((story, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-violet-500/20 transition-all duration-300 relative group"
          >
            <Quote className="absolute top-6 right-8 text-white/5 group-hover:text-violet-500/10 transition-colors" size={60} strokeWidth={3} />
            
            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-slate-300 text-[0.9375rem] leading-relaxed italic mb-8 relative z-10">
              &quot;{story.text}&quot;
            </p>

            <div className="flex items-center justify-between border-t border-white/5 pt-6">
               <div className="flex flex-col">
                  <span className="text-white font-bold text-sm tracking-tight">{story.name}</span>
                  <span className="text-slate-500 text-[0.7rem] uppercase font-black tracking-widest">{story.role}</span>
               </div>
               <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                  <Heart size={10} className="text-emerald-400 fill-emerald-400" />
                  <span className="text-emerald-400 text-[0.6rem] font-black tracking-wider uppercase">{story.impact}</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
