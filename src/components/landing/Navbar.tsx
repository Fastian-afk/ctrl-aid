"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Ctrl<span className="text-teal-400">+</span>Aid
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#impact" className="text-sm text-slate-400 hover:text-white transition-colors">
              Impact
            </a>
            <Link
              href="/dashboard"
              className="btn-primary text-sm !py-2 !px-5 !rounded-lg"
            >
              Open Dashboard →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-white/5 space-y-3">
            <a href="#features" className="block text-sm text-slate-400 hover:text-white py-2">
              Features
            </a>
            <a href="#how-it-works" className="block text-sm text-slate-400 hover:text-white py-2">
              How It Works
            </a>
            <a href="#impact" className="block text-sm text-slate-400 hover:text-white py-2">
              Impact
            </a>
            <Link href="/dashboard" className="block btn-primary text-sm text-center !py-2 !px-5 !rounded-lg mt-2">
              Open Dashboard →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
