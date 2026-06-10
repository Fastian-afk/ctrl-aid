"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Users, Zap, Clock, ShieldCheck } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: 50,
    suffix: "M+",
    label: "Potential Citizens Served",
    description: "Across all provinces of Pakistan",
  },
  {
    icon: Zap,
    value: 60,
    suffix: "%",
    label: "Response Time Reduction",
    description: "Faster access to verified information",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Information Accessibility",
    description: "Round-the-clock emergency monitoring",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Verified Source Coverage",
    description: "Only official and trusted sources",
  },
];

export default function ImpactMetrics() {
  return (
    <section id="impact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-teal-400 tracking-widest uppercase mb-3">
            Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Designed for{" "}
            <span className="text-gradient">Scale</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Built to serve millions when it matters most.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-cyan-400/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-400/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <metric.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                <AnimatedCounter end={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
