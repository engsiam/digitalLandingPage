"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Accordion from "./ui/Accordion";
import { HelpCircle, MessageSquare } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Do I really need to know coding to build these pages?",
    answer: "No, absolutely not. We use AI tools like Lovable to bridge the gap between design and results. You'll be focusing on strategy, layout, and AI prompting rather than writing CSS or JavaScript manually.",
  },
  {
    id: "faq-2",
    question: "Is this course really suitable for complete beginners?",
    answer: "Yes! This was specifically built for university students who have zero tech background. We start from the absolute basics of what makes a landing page work before moving into AI generation.",
  },
  {
    id: "faq-3",
    question: "How long will it take to see actual results?",
    answer: "Most students complete the 7 modules in about a week. If you follow the client outreach roadmap properly, it's realistic to land your first project within 3-4 weeks, depending on your consistency.",
  },
  {
    id: "faq-4",
    question: "Can I really use AI to build professional work?",
    answer: "AI in 2026 is capable of building 90% of a landing page. We teach you how to prompt the AI for high-end results and then add those final 'expert' touches that make the work client-ready.",
  },
  {
    id: "faq-5",
    question: "How do I get clients after I finish the modules?",
    answer: "Module 5 is entirely dedicated to this. We show you how to find leads on LinkedIn, Facebook, and via cold outreach, and provide you with proven message templates that actually get replies.",
  },
  {
    id: "faq-6",
    question: "Will I get templates and AI prompts included?",
    answer: "Yes, you get a full 'AI Prompt Pack' and a library of high-converting structures. These are yours to keep and use for every project you build for yourself or your clients.",
  },
  {
    id: "faq-7",
    question: "Is this only for university students in Bangladesh?",
    answer: "While we use student-friendly language and BDT pricing, the skills and strategies taught are global. You can use this to work with local businesses or internacional clients for USD payments.",
  },
];

export default function FAQSection() {
  return (
    <SectionWrapper
      id="faq"
      badge="FAQ"
      title="Objections Handled"
      subtitle="Everything you need to know before starting your journey."
      className="bg-slate-950/20"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <Accordion items={FAQ_ITEMS} multi />
        
        <div className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden group">
          {/* subtle glow */}
          <div className="absolute inset-0 bg-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shrink-0">
             <MessageSquare size={32} className="text-violet-400" />
          </div>
          <div className="relative z-10 text-center sm:text-left flex-1">
            <h3 className="text-white font-black text-xl mb-1 flex items-center justify-center sm:justify-start gap-2">
              Still have questions?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We&apos;re here to help you make the right choice. Send us a message on <a href="#" className="text-violet-400 font-bold hover:underline">WhatsApp Support</a> for instant clarification.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
