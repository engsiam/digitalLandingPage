"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface CTAButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm gap-1.5",
  md: "px-7 py-3.5 text-base gap-2",
  lg: "px-9 py-4 text-base gap-2.5",
};

const variantBase: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 text-white font-bold " +
    "shadow-[0_4px_24px_rgba(124,58,237,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] " +
    "hover:shadow-[0_8px_32px_rgba(124,58,237,0.65)] border border-violet-500/30",
  outline:
    "bg-transparent text-violet-400 font-semibold " +
    "border border-violet-500/50 hover:border-violet-500 " +
    "hover:bg-violet-500/10",
  ghost:
    "bg-transparent text-slate-400 font-medium " +
    "border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5",
};

export default function CTAButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  href,
  onClick,
  className = "",
  id,
  fullWidth = false,
  disabled = false,
}: CTAButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center rounded-xl
    overflow-hidden cursor-pointer select-none transition-colors duration-200
    ${sizeStyles[size]}
    ${variantBase[variant]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 pointer-events-none" : ""}
    ${className}
  `;

  const content = (
    <>
      {/* Shimmer sweep - primary only */}
      {variant === "primary" && (
        <span
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:left-[100%] transition-[left] duration-500 ease-in-out" />
        </span>
      )}
      {icon && iconPosition === "left" && (
        <span className="shrink-0 flex items-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 flex items-center">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        className={`group ${baseClasses}`}
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseClasses}`}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {content}
    </motion.button>
  );
}
