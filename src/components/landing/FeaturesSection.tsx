"use client";

import { motion } from "framer-motion";
import { Bot, Bell, Map, Phone } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

const features = [
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Ask questions and receive verified emergency guidance powered by Gemini AI. Get instant answers about shelters, safety protocols, and evacuation routes.",
    gradient: "from-teal-500/20 to-cyan-400/10",
  },
  {
    icon: Bell,
    title: "Verified Alerts",
    description:
      "Real-time emergency updates from NDMA, PDMA, Rescue 1122, and government agencies. Categorized by severity for quick assessment.",
    gradient: "from-red-500/20 to-amber-400/10",
  },
  {
    icon: Map,
    title: "Shelter Map",
    description:
      "Interactive map showing shelters, hospitals, and relief camps across Pakistan. Get directions, contact info, and capacity status instantly.",
    gradient: "from-blue-500/20 to-indigo-400/10",
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    description:
      "One-tap access to critical helplines — Rescue 1122, Edhi 115, NDMA, Police, Fire Brigade, and provincial emergency numbers.",
    gradient: "from-emerald-500/20 to-teal-400/10",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-teal-400 tracking-widest uppercase mb-3">
            Key Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything You Need in an{" "}
            <span className="text-gradient">Emergency</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Four powerful tools designed to save lives and reduce response times during disasters.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowCard className="h-full group cursor-default">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
