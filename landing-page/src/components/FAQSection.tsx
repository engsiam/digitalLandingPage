"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Accordion from "./ui/Accordion";
import { HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Do I really need to know coding?",
    answer: "No, absolutely not. This roadmap is designed around AI tools like Lovable and visual builders. You'll be focusing on strategy, design principles, and AI prompting rather than writing CSS or JavaScript manually.",
  },
  {
    id: "faq-2",
    question: "How long will it take to see results?",
    answer: "Most students complete the 7 modules in about a week. If you follow the client outreach roadmap, it's realistic to land your first paid project within 3-4 weeks, depending on your consistency.",
  },
  {
    id: "faq-3",
    question: "Is this suitable for university students?",
    answer: "Yes! We specifically focus on the 'Student Positioning' in Module 5, showing you how to turn your student status into an advantage to get your first few clients.",
  },
  {
    id: "faq-4",
    question: "What if I get stuck?",
    answer: "Enrollment includes lifetime access to our private community where you can ask questions, share your work for feedback, and learn from other students' successes and failures.",
  },
  {
    id: "faq-5",
    question: "How do I get paid from local/international clients?",
    answer: "We cover the delivery and payment workflow in Module 7, including how to set up professional invoicing and the best platforms for both BDT and USD payments.",
  },
];

export default function FAQSection() {
  return (
    <SectionWrapper
      id="faq"
      badge="Questions?"
      title="Common Queries"
      subtitle="Everything you need to know before starting your journey."
      className="bg-slate-950/20"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <Accordion items={FAQ_ITEMS} multi />
        
        <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shrink-0">
             <HelpCircle size={28} className="text-violet-400" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-lg mb-1">Still have questions?</h3>
            <p className="text-slate-400 text-sm">
              We&apos;re here to help. Send us a message on <a href="#" className="text-violet-400 font-bold hover:underline">WhatsApp</a> or <a href="#" className="text-violet-400 font-bold hover:underline">Messenger</a>.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
