"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowRight } from "lucide-react";
import CTAButton from "./ui/CTAButton";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Modules", href: "#modules" },
  { label: "Bonuses", href: "#bonuses" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const navLinkVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.05 * i, ease: "easeOut" as const },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll detection for sticky blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070b14]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">
          {/* -- Logo -- */}
          <motion.a
            href="#hero"
            id="logo"
            className="flex items-center gap-2.5 group shrink-0"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onClick={() => setMobileOpen(false)}
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-900/50 group-hover:shadow-violet-700/60 transition-shadow duration-300">
              <Zap size={17} className="text-white" fill="white" />
              {/* pulsing ring */}
              <span className="absolute inset-0 rounded-xl ring-1 ring-violet-400/30 animate-ping opacity-30" />
            </div>
            <span className="font-black text-[1.05rem] tracking-tight text-white leading-none">
              AI{" "}
              <span
                className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Landing Pages
              </span>
            </span>
          </motion.a>

          {/* -- Desktop Nav -- */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }, i) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={label}
                  id={`nav-${label.toLowerCase()}`}
                  href={href}
                  custom={i}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate="visible"
                  className={`relative px-3.5 py-2 rounded-lg text-[0.9rem] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {label}
                  {/* Active underline indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        key="indicator"
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.a>
              );
            })}
          </nav>

          {/* -- Desktop CTA -- */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          >
            <CTAButton
              id="header-enroll-btn"
              href="#pricing"
              size="sm"
              icon={<ArrowRight size={15} />}
              iconPosition="right"
            >
              Enroll Now
            </CTAButton>
          </motion.div>

          {/* -- Mobile Hamburger -- */}
          <motion.button
            id="mobile-menu-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/8 transition-colors duration-200"
            onClick={() => setMobileOpen((v) => !v)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* -- Mobile Menu Panel -- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden border-t border-white/[0.06] bg-[#070b14]/95 backdrop-blur-2xl"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col px-4 pt-2 pb-5 gap-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  id={`mobile-nav-${label.toLowerCase()}`}
                  href={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] font-medium text-[0.95rem] transition-colors duration-200"
                >
                  {label}
                </motion.a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/[0.08]">
                <CTAButton
                  id="mobile-enroll-btn"
                  href="#pricing"
                  fullWidth
                  size="md"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  onClick={() => setMobileOpen(false)}
                >
                  Enroll Now
                </CTAButton>
              </div>

              {/* Trust micro-copy */}
              <p className="text-center text-slate-600 text-xs mt-3 leading-relaxed">
                Beginner friendly | No coding needed | AI powered
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
