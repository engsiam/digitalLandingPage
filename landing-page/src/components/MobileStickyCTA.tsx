"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CTAButton from "./ui/CTAButton";
import { ArrowRight } from "lucide-react";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      // Hide if at the bottom near pricing/faq (so it doesn't overlap)
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      
      const showThreshold = 600;
      const hideThreshold = bodyHeight - windowHeight - 400; // Adjust based on footer height

      if (scrollY > showThreshold && scrollY < hideThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-[60] block md:hidden p-4"
        >
          <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Limited Offer</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white font-black text-xl tracking-tighter">1,490 BDT</span>
                <span className="text-slate-500 text-[0.7rem] line-through font-medium leading-none">2,990 BDT</span>
              </div>
            </div>
            
            <CTAButton
              id="mobile-sticky-cta-btn"
              href="#pricing"
              size="sm"
              icon={<ArrowRight size={14} />}
              className="flex-1 py-3 text-sm font-black uppercase tracking-tight shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Enroll Now
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
