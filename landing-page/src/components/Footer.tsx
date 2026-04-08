"use client";

import { Zap, Users, HelpCircle, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050810] pt-20 pb-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-violet-900/40">
                <img 
                  src="/logo.png" 
                  alt="AI Landing Pages" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                AI <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Landing Pages</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Helping university students master high-income skills and build digital freedom using the power of AI.
            </p>
            <div className="flex items-center gap-4">
              {[Zap, Users, HelpCircle, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-500/20 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Modules", "Bonuses", "Pricing", "FAQ"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 text-sm hover:text-violet-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {["Terms of Service", "Privacy Policy", "Refund Policy", "Disclaimer"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 text-sm hover:text-violet-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Get tips on AI and freelancing delivered to your inbox.</p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              <button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-[0.8rem]">
            &copy; {currentYear} AI Landing Pages. All rights reserved. Built with precision for students.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-[0.8rem]">Made with</span>
            <Heart size={12} className="text-pink-500 fill-pink-500" />
            <span className="text-slate-500 text-[0.8rem]">by the AI Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
