"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Small label chip above the title */
  badge?: string;
  /** Section heading */
  title?: ReactNode;
  /** Section sub-heading */
  subtitle?: string;
  /** Show decorative purple orb in background */
  withOrb?: boolean;
  /** Extra top/bottom padding variant */
  padding?: "sm" | "md" | "lg";
}

const paddingMap = {
  sm: "py-20 sm:py-24",
  md: "py-24 sm:py-36",
  lg: "py-32 sm:py-48",
};

export default function SectionWrapper({
  id,
  children,
  className = "",
  badge,
  title,
  subtitle,
  withOrb = false,
  padding = "md",
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative overflow-hidden ${paddingMap[padding]} ${className}`}
      aria-label={id ? `${id} section` : undefined}
    >
      {/* Optional background orb */}
      {withOrb && (
        <div
          className="absolute pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header block */}
        {(badge || title || subtitle) && (
          <motion.div
            className="text-center mb-12 sm:mb-16 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {badge && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-violet-500/10 border border-violet-500/25 text-violet-400">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Staggered children reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
