"use client";

import { MessageCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
        >
          {/* WhatsApp / Help Button */}
          <a
            href="https://wa.me/yournumber" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
            aria-label="Contact Support on WhatsApp"
          >
            {/* Pulsing background */}
            <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping group-hover:animate-none" />
            
            <div className="relative w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <MessageCircle size={28} />
            </div>

            <div className="absolute right-full mr-4 flex flex-col items-end gap-1 pointer-events-none">
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-2xl">
                 Need help?
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[0.6rem] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 delay-75">
                 Online Now
              </div>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
