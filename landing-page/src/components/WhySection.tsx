"use client";

import { BarChart3, Clock, Code2, Heart, Sparkles, TrendingUp } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import PremiumCard from "./ui/PremiumCard";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    title: "High-demand service",
    description: "Every business launching a product or campaign needs a landing page. The market is massive.",
    icon: <BarChart3 size={20} />,
    accent: "purple" as const,
  },
  {
    title: "Beginner-friendly",
    description: "You don't need years of design or tech study. Our roadmap makes it accessible to anyone.",
    icon: <Heart size={20} />,
    accent: "pink" as const,
  },
  {
    title: "No coding path",
    description: "Use visual builders and AI tools to create stunning results without writing a single line of CSS.",
    icon: <Code2 size={20} />,
    accent: "cyan" as const,
  },
  {
    title: "Can be sold fast",
    description: "Landing pages take days, not months, to build. This means quicker turnaround and faster payments.",
    icon: <Clock size={20} />,
    accent: "amber" as const,
  },
  {
    title: "AI-assisted workflow",
    description: "10x your speed with AI. Spend more time on strategy and less on tedious manual work.",
    icon: <Sparkles size={20} />,
    accent: "purple" as const,
  },
];

export default function WhySection() {
  return (
    <SectionWrapper
      id="why-this-skill"
      badge="Why This Skill?"
      title="The Smartest Way to Start Earning in 2024"
      subtitle="Landing pages are the high-leverage skill that bridges the gap between 'learning' and 'earning'."
      withOrb
    >
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Left side: Explanation (2/5 columns) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-white leading-snug">
                Why landing pages are easier to sell than full websites
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Most businesses don&apos;t need a complex 20-page website. They need a single, focused page that 
                <span className="text-violet-300"> converts visitors into customers</span>. 
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 border border-violet-500/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                </div>
                <p className="text-slate-300 text-sm">
                  <strong className="text-white">Focused Results:</strong> Businesses pav for outcomes, not pages. Landing pages deliver direct ROI.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
                <p className="text-slate-300 text-sm">
                  <strong className="text-white">Lower Barrier:</strong> It&apos;s easier for a client to say yes to a $100-$300 landing page than a $2000 website.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 border border-pink-500/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                </div>
                <p className="text-slate-300 text-sm">
                  <strong className="text-white">Scalability:</strong> Once you master the template, you can deliver high-quality pages in record time.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 shadow-xl shadow-violet-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="text-white/80" size={18} />
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Fastest Growing Skill</span>
                </div>
                <p className="text-white font-medium">
                  Landing page experts are currently among the top 5 most sought-after freelancers on Upwork and Fiverr.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side: Benefit Cards (3/5 columns) */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((benefit, index) => (
              <PremiumCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                accent={benefit.accent}
                delay={index * 0.1}
                className={index === 4 ? "sm:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
