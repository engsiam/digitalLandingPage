"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: string;
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Allow multiple open at once */
  multi?: boolean;
  className?: string;
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`
        rounded-2xl border transition-colors duration-200
        ${isOpen
          ? "border-violet-500/40 bg-violet-500/5"
          : "border-white/10 bg-slate-900/50 hover:border-white/15"
        }
      `}
    >
      <button
        id={`accordion-btn-${item.id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${item.id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-white font-semibold text-base leading-snug">
          {item.question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen
              ? "bg-violet-500/25 text-violet-400"
              : "bg-white/5 text-slate-400"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-panel-${item.id}`}
            role="region"
            aria-labelledby={`accordion-btn-${item.id}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items, multi = false, className = "" }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!multi) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        >
          <AccordionRow
            item={item}
            isOpen={openIds.has(item.id)}
            onToggle={() => toggle(item.id)}
          />
        </motion.div>
      ))}
    </div>
  );
}
