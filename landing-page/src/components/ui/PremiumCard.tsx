"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface PremiumCardProps {
  icon?: ReactNode;
  badge?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  /** Highlight/featured card style */
  featured?: boolean;
  /** Accent color: purple | cyan | pink | amber */
  accent?: "purple" | "cyan" | "pink" | "amber";
  className?: string;
  id?: string;
  delay?: number;
}

const accentMap = {
  purple: {
    border: "border-violet-500/25 hover:border-violet-500/50",
    glow: "hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]",
    badgeBg: "bg-violet-500/15 text-violet-400 border-violet-500/20",
    iconBg: "bg-violet-500/15 text-violet-400",
  },
  cyan: {
    border: "border-cyan-500/25 hover:border-cyan-500/50",
    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]",
    badgeBg: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
    iconBg: "bg-cyan-500/15 text-cyan-400",
  },
  pink: {
    border: "border-pink-500/25 hover:border-pink-500/50",
    glow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]",
    badgeBg: "bg-pink-500/15 text-pink-400 border-pink-500/20",
    iconBg: "bg-pink-500/15 text-pink-400",
  },
  amber: {
    border: "border-amber-500/25 hover:border-amber-500/50",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
    badgeBg: "bg-amber-500/15 text-amber-400 border-amber-500/20",
    iconBg: "bg-amber-500/15 text-amber-400",
  },
};

export default function PremiumCard({
  icon,
  badge,
  title,
  description,
  children,
  featured = false,
  accent = "purple",
  className = "",
  id,
  delay = 0,
}: PremiumCardProps) {
  const colors = accentMap[accent];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={`
        relative rounded-2xl p-6 sm:p-7 flex flex-col gap-4
        bg-slate-900/60 backdrop-blur-xl
        border ${colors.border}
        transition-all duration-300 ease-out
        ${colors.glow}
        ${featured ? "ring-1 ring-violet-500/40 shadow-[0_0_60px_rgba(124,58,237,0.18)]" : ""}
        ${className}
      `}
    >
      {/* Featured tag */}
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-900/40 whitespace-nowrap flex items-center gap-1.5">
            <Star size={12} className="fill-white" /> Most Popular
          </span>
        </div>
      )}

      {/* Icon + badge row */}
      {(icon || badge) && (
        <div className="flex items-start justify-between gap-3">
          {icon && (
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${colors.iconBg}`}
            >
              {icon}
            </div>
          )}
          {badge && (
            <span
              className={`ml-auto text-[0.7rem] font-semibold px-2.5 py-1 rounded-full border ${colors.badgeBg}`}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Text content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-white font-bold text-lg leading-snug">{title}</h3>
        {description && (
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        )}
      </div>

      {/* Slot for extra content */}
      {children && <div className="mt-auto">{children}</div>}
    </motion.div>
  );
}
