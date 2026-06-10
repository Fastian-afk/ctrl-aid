"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Sidebar from "@/components/dashboard/Sidebar";
import type { DashboardTab } from "@/components/dashboard/Sidebar";
import AlertsFeed from "@/components/dashboard/AlertsFeed";
import EmergencyContacts from "@/components/dashboard/EmergencyContacts";
import AiAssistant from "@/components/dashboard/AiAssistant";
import StatusPulse from "@/components/ui/StatusPulse";
import { Calendar } from "lucide-react";

// Dynamic import for Leaflet (no SSR)
const ShelterMap = dynamic(
  () => import("@/components/dashboard/ShelterMap"),
  {
    ssr: false,
    loading: () => (
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-teal-500/30 border-t-teal-500 rounded-full animate-spin" />
          <p className="text-sm text-slate-500">Loading map...</p>
        </div>
      </div>
    ),
  }
);

function formatDate() {
  return new Date().toLocaleDateString("en-PK", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("alerts");

  return (
    <div className="h-screen flex flex-col bg-navy-950">
      {/* Top Bar */}
      <header className="h-14 flex items-center justify-between px-4 md:px-6 border-b border-white/5 bg-navy-900/30 flex-shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-sm font-semibold text-white hidden sm:block">
            Emergency Dashboard
          </h1>
          <StatusPulse color="emerald" label="System Active" />
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Calendar className="w-3.5 h-3.5" />
          {formatDate()}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">
          {activeTab === "alerts" && <AlertsFeed />}
          {activeTab === "map" && <ShelterMap />}
          {activeTab === "contacts" && <EmergencyContacts />}
          {activeTab === "assistant" && <AiAssistant />}
        </main>
      </div>
    </div>
  );
}
