"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { alerts, categoryConfig, severityConfig } from "@/data/alerts";
import type { Alert } from "@/data/alerts";
import Badge from "@/components/ui/Badge";
import StatusPulse from "@/components/ui/StatusPulse";
import { Clock, MapPin, Building2, AlertTriangle } from "lucide-react";

type FilterCategory = Alert["category"] | "all";

function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function AlertsFeed() {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return alerts;
    return alerts.filter((a) => a.category === filter);
  }, [filter]);

  const categories: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "All" },
    { key: "flood-warning", label: "Floods" },
    { key: "heavy-rain", label: "Rain" },
    { key: "evacuation", label: "Evacuation" },
    { key: "shelter-opened", label: "Shelters" },
    { key: "road-closure", label: "Roads" },
    { key: "relief-update", label: "Relief" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Live Emergency Updates
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Real-time alerts from verified sources across Pakistan
          </p>
        </div>
        <StatusPulse color="red" label="LIVE" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === cat.key
                ? "bg-teal-500/15 text-teal-300 border border-teal-500/30"
                : "bg-navy-800/50 text-slate-400 border border-white/5 hover:bg-navy-700/50 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Alert Cards */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        <AnimatePresence mode="popLayout">
          {filtered.map((alert, i) => {
            const catConf = categoryConfig[alert.category];
            const sevConf = severityConfig[alert.severity];
            return (
              <motion.div
                key={alert.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="glass-card rounded-xl p-4 cursor-default"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-semibold leading-snug flex-1">
                    {alert.title}
                  </h3>
                  <Badge className={catConf.bgColor}>
                    <span className={catConf.color}>{catConf.label}</span>
                  </Badge>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {alert.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {timeAgo(alert.timestamp)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {alert.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    {alert.source}
                  </span>
                  <span className={`font-medium ${sevConf.color}`}>
                    ● {sevConf.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
