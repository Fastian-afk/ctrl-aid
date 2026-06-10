"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contacts, contactCategoryConfig } from "@/data/contacts";
import type { Contact } from "@/data/contacts";
import { Phone, Clock, ExternalLink, Search } from "lucide-react";
import Badge from "@/components/ui/Badge";

type FilterCategory = Contact["category"] | "all";

export default function EmergencyContacts() {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [search, setSearch] = useState("");

  const filtered = contacts.filter((c) => {
    const matchesCategory = filter === "all" || c.category === filter;
    const matchesSearch =
      search === "" ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.number.includes(search);
    return matchesCategory && matchesSearch;
  });

  const categories: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "All" },
    { key: "rescue", label: "🚑 Rescue" },
    { key: "national", label: "🏛️ National" },
    { key: "provincial", label: "🏢 Provincial" },
    { key: "medical", label: "🏥 Medical" },
    { key: "police", label: "🚔 Police" },
    { key: "fire", label: "🔥 Fire" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Phone className="w-5 h-5 text-emerald-400" />
          Emergency Contacts
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          One-tap access to critical helplines across Pakistan
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search contacts..."
          className="w-full pl-10 pr-4 py-2.5 bg-navy-800/50 border border-white/5 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/30 transition-colors"
        />
      </div>

      {/* Category Filters */}
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

      {/* Contact Cards */}
      <div className="flex-1 overflow-y-auto grid sm:grid-cols-2 gap-3 pr-1">
        {filtered.map((contact, i) => {
          const catConf = contactCategoryConfig[contact.category];
          return (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass-card rounded-xl p-4 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-lg mr-2">{catConf.icon}</span>
                    <span className="text-sm font-bold">{contact.name}</span>
                  </div>
                  <Badge className={catConf.color}>
                    {catConf.label}
                  </Badge>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {contact.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {contact.available}
                  </span>
                </div>
                <a
                  href={`tel:${contact.number}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-colors group-hover:scale-105 transition-transform"
                >
                  <Phone className="w-3 h-3" />
                  {contact.number}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
