"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";
import CTAButton from "./ui/CTAButton";

/* --------------------------- animation presets --------------------------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, delay },
});

/* --------------------------- trust points -------------------------------- */
const TRUST_POINTS = [
  { icon: CheckCircle2, label: "Beginner Friendly" },
  { icon: CheckCircle2, label: "No Coding Needed" },
  { icon: CheckCircle2, label: "Made for Students" },
  { icon: CheckCircle2, label: "Practical & Income Focused" },
];

/* --------------------------- floating stat cards ------------------------- */
const STAT_CARDS = [
  {
    id: "stat-earnings",
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/15",
    value: "50,000+ BDT",
    label: "Avg. Monthly Earnings",
    delay: 0.9,
    position: "top-4 right-[-14px] sm:right-[-20px]",
  },
  {
    id: "stat-students",
    icon: Users,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/15",
    value: "500+ Students",
    label: "Already Enrolled",
    delay: 1.05,
    position: "bottom-4 left-[-14px] sm:left-[-20px]",
  },
];

/* --------------------------- avatar row ---------------------------------- */
const AVATAR_COLORS = [
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-pink-500 to-rose-600",
  "from-amber-400 to-orange-500",
];
const AVATAR_INITIALS = ["R", "S", "A", "M"];

/* ------------------------------------------------------------------------- */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="Hero - AI Landing Pages"
      className="relative isolate overflow-hidden min-h-[100svh] flex items-center pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      {/* -- Background gradients -- */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* deep dark base */}
        <div className="absolute inset-0 bg-[#050810]" />
        {/* purple radial bloom top-center */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(124,58,237,0.55) 0%, transparent 70%)",
            filter: "blur(72px)",
          }}
        />
        {/* cyan bloom right */}
        <div
          className="absolute top-[30%] right-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.55) 0%, transparent 70%)",
            filter: "blur(72px)",
          }}
        />
        {/* bottom fade to page-bg */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#070b14] to-transparent" />
        {/* dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(167,139,250,1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* -- Content grid -- */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* -- LEFT: copy -- */}
          <div className="flex flex-col items-start gap-6 order-1">

            {/* Announcement chip */}
            <motion.div
              {...(shouldReduce ? {} : fadeIn(0.05))}
              id="hero-chip"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-violet-500/10 border border-violet-500/25 text-violet-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.9)] animate-pulse" />
              <Sparkles size={11} className="opacity-70" />
              New Digital Product - Limited Spots
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              {...(shouldReduce ? {} : fadeUp(0.12))}
              className="text-[2.15rem] sm:text-5xl lg:text-[3.25rem] font-black leading-[1.08] tracking-tight text-white"
            >
              Earn Your First{" "}
              <span
                className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                10K-50K&nbsp;BDT
              </span>{" "}
              Online by Building Landing Pages{" "}
              <span
                className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                with AI
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              id="hero-subheadline"
              {...(shouldReduce ? {} : fadeUp(0.22))}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-[540px]"
            >
              A step-by-step digital product for university students who want to
              learn a{" "}
              <span className="text-violet-300 font-medium">
                practical, high-income skill
              </span>{" "}
              and start earning online without coding.
            </motion.p>

            {/* CTA Buttons - thumb-friendly (min 52px height) */}
            <motion.div
              {...(shouldReduce ? {} : fadeUp(0.32))}
              id="hero-cta-group"
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <CTAButton
                id="hero-primary-cta"
                href="#pricing"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="min-h-[52px] w-full sm:w-auto"
              >
                Get Instant Access
              </CTAButton>

              <CTAButton
                id="hero-secondary-cta"
                href="#modules"
                variant="outline"
                size="lg"
                icon={<Play size={14} className="fill-violet-400 text-violet-400" />}
                iconPosition="left"
                className="min-h-[52px] w-full sm:w-auto"
              >
                View Modules
              </CTAButton>
            </motion.div>

            {/* Trust points */}
            <motion.div
              {...(shouldReduce ? {} : fadeUp(0.42))}
              id="hero-trust"
              className="flex flex-wrap gap-x-4 gap-y-2.5"
              role="list"
              aria-label="Why students choose this"
            >
              {TRUST_POINTS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="flex items-center gap-1.5 text-slate-400 text-[0.8125rem] font-medium"
                >
                  <Icon size={13} className="text-violet-400 shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Social proof - avatars + count */}
            <motion.div
              {...(shouldReduce ? {} : fadeIn(0.55))}
              id="hero-social-proof"
              className="flex items-center gap-3 pt-1"
            >
              <div className="flex -space-x-2.5" aria-hidden="true">
                {AVATAR_COLORS.map((grad, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${grad} border-[2.5px] border-[#050810] flex items-center justify-center text-white text-[0.65rem] font-black shadow-md`}
                  >
                    {AVATAR_INITIALS[i]}
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm">
                <span className="text-white font-bold">500+</span> students
                already earning online
              </p>
            </motion.div>
          </div>

          {/* -- RIGHT: mockup visual -- */}
          <motion.div
            id="hero-visual"
            className="relative flex items-center justify-center order-2"
            {...(shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, x: 32, scale: 0.97 },
                  animate: { opacity: 1, x: 0, scale: 1 },
                  transition: {
                    duration: 0.75,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                })}
          >
            {/* Glow behind card */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                className="w-72 h-72 lg:w-96 lg:h-96 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
                  filter: "blur(48px)",
                  animation: "pulse-glow 4s ease-in-out infinite",
                }}
              />
            </div>

            {/* Browser chrome card */}
            <div
              className="relative z-10 w-full max-w-[520px] rounded-2xl overflow-visible
                bg-[#0d1220]/80 backdrop-blur-2xl
                border border-violet-500/20
                shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(124,58,237,0.12)]"
              style={{
                animation: shouldReduce
                  ? undefined
                  : "hero-float 6s ease-in-out infinite",
              }}
            >
              {/* Browser top-bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.07]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                <div className="flex-1 mx-3 h-5 rounded-md bg-white/[0.06] flex items-center px-2 gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-violet-400/50 shrink-0" />
                  <span className="text-slate-500 text-[0.7rem] truncate">
                    ailandingpages.com/dashboard
                  </span>
                </div>
              </div>

              {/* Dashboard image */}
              <div className="relative w-full aspect-[16/11] overflow-hidden rounded-b-2xl">
                <Image
                  src="/hero-mockup.png"
                  alt="AI Landing Page Builder - dashboard showing live wireframe and AI prompt panel"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
                {/* Bottom scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/50 via-transparent to-transparent" />

                {/* AI prompt badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5 bg-[#0d1220]/90 backdrop-blur-xl border border-violet-500/25 rounded-xl px-3 py-2.5">
                  <div className="w-6 h-6 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0">
                    <Sparkles size={12} className="text-violet-400" />
                  </div>
                  <span className="text-slate-300 text-[0.72rem] font-medium">
                    * AI-generating landing page...
                  </span>
                  <span className="ml-auto flex gap-0.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1 h-1 rounded-full bg-violet-400"
                        style={{
                          animation: `bounce-dot 1.2s ${i * 0.2}s ease-in-out infinite`,
                        }}
                      />
                    ))}
                  </span>
                </div>
              </div>
            </div>

            {/* -- Floating stat cards -- */}
            {STAT_CARDS.map(({ id, icon: Icon, iconColor, iconBg, value, label, delay, position }) => (
              <motion.div
                key={id}
                id={id}
                initial={shouldReduce ? {} : { opacity: 0, scale: 0.85 }}
                animate={shouldReduce ? {} : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay, ease: "easeOut" }}
                className={`absolute ${position} z-20
                  flex items-center gap-3 px-4 py-3 rounded-2xl
                  bg-[#0d1220]/90 backdrop-blur-2xl
                  border border-white/[0.1]
                  shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                `}
                aria-label={`${value} - ${label}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}
                >
                  <Icon size={16} className={iconColor} />
                </div>
                <div className="leading-none">
                  <div className="text-white font-bold text-sm">{value}</div>
                  <div className="text-slate-400 text-[0.7rem] mt-0.5">
                    {label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
