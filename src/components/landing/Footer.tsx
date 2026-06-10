import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-bold">
              Ctrl<span className="text-teal-400">+</span>Aid
            </span>
          </div>

          {/* Center text */}
          <p className="text-xs text-slate-500 text-center">
            Built for{" "}
            <span className="text-slate-400 font-medium">
              AI for Civic Innovation Hackathon 2026
            </span>{" "}
            — Code for Pakistan
          </p>

          {/* Right */}
          <p className="text-xs text-slate-600">
            Empowering communities through AI
          </p>
        </div>
      </div>
    </footer>
  );
}
