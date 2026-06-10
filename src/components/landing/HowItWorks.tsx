"use client";

import { motion } from "framer-motion";
import { Database, Brain, MapPin } from "lucide-react";

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Aggregate",
    description: "Collects verified emergency information from NDMA, PDMA, Rescue 1122, and government agencies in real-time.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Analyze",
    description: "AI processes and summarizes critical updates, filtering noise and prioritizing life-saving information.",
  },
  {
    icon: MapPin,
    number: "03",
    title: "Deliver",
    description: "Provides location-aware guidance, shelter directions, and personalized emergency responses instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
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
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            From Chaos to{" "}
            <span className="text-gradient">Clarity</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Three simple steps to deliver life-saving information when it matters most.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center group"
            >
              {/* Icon circle */}
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-navy-800/80 border border-cyan-400/10 flex items-center justify-center mb-6 group-hover:border-cyan-400/30 transition-colors">
                <step.icon className="w-8 h-8 text-cyan-400" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-teal-500 text-[10px] font-bold flex items-center justify-center text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
