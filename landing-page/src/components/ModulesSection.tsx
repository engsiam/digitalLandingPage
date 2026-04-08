"use client";

import { CheckCircle2, PlayCircle } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import Accordion from "./ui/Accordion";
import { motion } from "framer-motion";

const MODULES = [
  {
    id: "mod-1",
    question: "Module 1: Direction & Opportunity",
    answer: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Understanding the online earning landscape in 2024.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Why most students stay stuck in theory and never make a Taka.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Shift your mindset towards high-income skills.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>The real-world path from zero to first client.</span>
        </li>
      </ul>
    ),
  },
  {
    id: "mod-2",
    question: "Module 2: Understanding High-Converting Landing Pages",
    answer: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Landing Page vs. Website: Why the former is a cash cow.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>The anatomy of a winning page: Hero section to CTA.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Conversion psychology: How to guide a visitor to take action.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Why businesses are desperately looking for this service.</span>
        </li>
      </ul>
    ),
  },
  {
    id: "mod-3",
    question: "Module 3: Generate Landing Pages with AI Using Lovable",
    answer: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Intro to Lovable: The AI tool that builds code for you.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>The &quot;AI Prompt Framework&quot;: How to tell the AI exactly what you want.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Generating full layouts and initial copy in minutes.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Moving 10x faster than traditional designers.</span>
        </li>
      </ul>
    ),
  },
  {
    id: "mod-4",
    question: "Module 4: Optimize AI-Generated Pages",
    answer: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Refining AI copy to sound human and persuasive.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Cleaning up layouts for a premium, custom feel.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Improving trust with social proof sections.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Final checklist to make the page client-ready.</span>
        </li>
      </ul>
    ),
  },
  {
    id: "mod-5",
    question: "Module 5: Get Your First Clients",
    answer: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Who to target: Finding businesses with high lifetime value.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Strategy for Facebook groups and LinkedIn networking.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>The &quot;Student positioning&quot;: How to use your status as an advantage.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Setting up your mini-portfolio that closes deals.</span>
        </li>
      </ul>
    ),
  },
  {
    id: "mod-6",
    question: "Module 6: Close the Deal",
    answer: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>How to talk to leads without sounding like a salesman.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Explaining value: Shift from &quot;I make pages&quot; to &quot;I bring customers&quot;.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Pricing with confidence: 10K to 50K BDT per project.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Handling objections and getting that first payment.</span>
        </li>
      </ul>
    ),
  },
  {
    id: "mod-7",
    question: "Module 7: Deliver and Build Momentum",
    answer: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Professional delivery workflow.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Handling revisions while maintaining boundaries.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>Strategy for upsells and recurring maintenance.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
          <span>The flywheel: Using one client to get the next three.</span>
        </li>
      </ul>
    ),
  },
];

export default function ModulesSection() {
  return (
    <SectionWrapper
      id="modules"
      badge="The Curriculum"
      title="Master the Skill. Build the Income."
      subtitle="The exact 7-module roadmap designed to take you from a curious beginner to a confident freelance landing page designer."
    >
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <Accordion items={MODULES} />
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-violet-400" size={24} />
                <h3 className="text-lg font-bold text-white">Course Overview</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                You get lifetime access to all modules, future updates, and our private student-only community.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm py-2 border-b border-white/5">
                  <span className="text-slate-300">Total Lessons</span>
                  <span className="text-white font-bold">24+</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2 border-b border-white/5">
                  <span className="text-slate-300">Total Duration</span>
                  <span className="text-white font-bold">8h 45m</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-slate-300">Skill Level</span>
                  <span className="text-white font-bold uppercase tracking-wider text-[0.65rem] bg-violet-500/20 px-2 py-0.5 rounded">Beginner</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 border border-violet-500/20">
               <p className="text-violet-300 text-sm font-medium">
                 Scroll down to see the <span className="text-white font-bold">FREE Bonuses</span> included with your enrollment.
               </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
