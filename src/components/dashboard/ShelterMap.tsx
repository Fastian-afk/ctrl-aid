"use client";

import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { shelters, shelterTypeConfig } from "@/data/shelters";
import type { Shelter } from "@/data/shelters";
import Badge from "@/components/ui/Badge";
import { MapPin, Phone, Users, Building2 } from "lucide-react";

function createColoredIcon(color: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="${color}" fill-opacity="0.9"/>
    <circle cx="12" cy="11" r="5" fill="white" fill-opacity="0.9"/>
  </svg>`;

  return L.divIcon({
    html: svg,
    iconSize: [28, 42],
    iconAnchor: [14, 42],
    popupAnchor: [0, -42],
    className: "custom-marker",
  });
}

type FilterType = Shelter["type"] | "all";

export default function ShelterMap() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return shelters;
    return shelters.filter((s) => s.type === filter);
  }, [filter]);

  const filterButtons: { key: FilterType; label: string; count: number }[] = [
    { key: "all", label: "All Locations", count: shelters.length },
    { key: "shelter", label: "Shelters", count: shelters.filter((s) => s.type === "shelter").length },
    { key: "hospital", label: "Hospitals", count: shelters.filter((s) => s.type === "hospital").length },
    { key: "relief-camp", label: "Relief Camps", count: shelters.filter((s) => s.type === "relief-camp").length },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <MapPin className="w-5 h-5 text-cyan-400" />
          Shelter & Resource Map
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Find shelters, hospitals, and relief camps across Pakistan
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            onClick={() => setFilter(btn.key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              filter === btn.key
                ? "bg-teal-500/15 text-teal-300 border border-teal-500/30"
                : "bg-navy-800/50 text-slate-400 border border-white/5 hover:bg-navy-700/50 hover:text-white"
            }`}
          >
            {btn.label}
            <span className="bg-white/5 px-1.5 py-0.5 rounded text-[10px]">
              {btn.count}
            </span>
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="flex-1 rounded-2xl overflow-hidden border border-white/5 min-h-[400px]">
        <MapContainer
          center={[30.3753, 69.3451]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {filtered.map((shelter) => {
            const conf = shelterTypeConfig[shelter.type];
            return (
              <Marker
                key={shelter.id}
                position={[shelter.lat, shelter.lng]}
                icon={createColoredIcon(conf.markerColor)}
              >
                <Popup>
                  <div className="min-w-[200px]">
                    <div className="font-bold text-sm mb-1">{shelter.name}</div>
                    <div className="flex items-center gap-1 text-xs text-teal-400 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: conf.markerColor }} />
                      {conf.label}
                    </div>
                    <div className="space-y-1 text-xs text-slate-300">
                      <div className="flex items-start gap-1.5">
                        <span className="text-slate-500 mt-0.5">📍</span>
                        {shelter.address}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">📞</span>
                        {shelter.contact}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">👥</span>
                        Capacity: {shelter.capacity.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={shelter.status === "open" ? "text-emerald-400" : "text-red-400"}>●</span>
                        <span className={shelter.status === "open" ? "text-emerald-400" : "text-red-400"}>
                          {shelter.status === "open" ? "Open" : shelter.status === "full" ? "Full" : "Closed"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-3 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Shelters
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Hospitals
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Relief Camps
        </span>
      </div>
    </div>
  );
}
