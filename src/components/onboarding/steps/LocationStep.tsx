"use client";

import React from "react";
import { ChevronDown, Trees, Building2, MapPin } from "lucide-react";

const STATES = [
  "Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh",
  "Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana",
  "Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry",
  "Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];

const AREAS = [
  { id: "rural",      label: "Rural",      sub: "Village / Gram Panchayat", icon: Trees },
  { id: "urban",      label: "Urban",      sub: "City / Town",              icon: Building2 },
  { id: "semi-urban", label: "Semi-Urban", sub: "Small town",               icon: MapPin },
];

export default function LocationStep({ state, setState, district, setDistrict, area, setArea }: {
  state: string;    setState: (v: string) => void;
  district: string; setDistrict: (v: string) => void;
  area: string;     setArea: (v: string) => void;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <span className="label-mono text-[var(--color-accent)] text-[10px] block mb-3">// STEP 03</span>
      <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
        LOCATION
      </h2>
      <p className="text-sm font-medium mb-8" style={{ color: "var(--text-secondary)" }}>
        Many schemes are specific to certain states and rural areas.
      </p>

      <div className="space-y-6">
        {/* State dropdown — recessed */}
        <div>
          <label className="label-mono text-[10px] block mb-2" style={{ color: "var(--text-muted)" }}>
            STATE / UNION TERRITORY
          </label>
          <div className="relative" style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-recessed)" }}>
            <select
              value={state}
              onChange={e => setState(e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3 bg-transparent outline-none font-mono text-sm cursor-pointer"
              style={{ color: state ? "var(--text-primary)" : "var(--text-muted)", borderRadius: "var(--radius-md)" }}
            >
              <option value="">Select your state...</option>
              {STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown
              size={14} strokeWidth={2}
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
        </div>

        {/* District — recessed input */}
        <div>
          <label className="label-mono text-[10px] block mb-2" style={{ color: "var(--text-muted)" }}>
            DISTRICT (OPTIONAL)
          </label>
          <input
            type="text"
            value={district}
            onChange={e => setDistrict(e.target.value)}
            placeholder="e.g. Surat"
            className="w-full px-4 py-3 font-mono text-sm outline-none bg-transparent"
            style={{
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-recessed)",
              color: "var(--text-primary)",
            }}
          />
        </div>

        {/* Area type — card grid */}
        <div>
          <label className="label-mono text-[10px] block mb-3" style={{ color: "var(--text-muted)" }}>
            AREA TYPE
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {AREAS.map(a => {
              const Icon = a.icon;
              const isSelected = area === a.id;
              return (
                <button
                  key={a.id}
                  onClick={() => setArea(a.id)}
                  className="flex flex-col items-center justify-center gap-3 p-5 transition-all duration-150 active:translate-y-[1px]"
                  style={{
                    borderRadius: "var(--radius-md)",
                    boxShadow: isSelected ? "var(--shadow-pressed)" : "var(--shadow-card)",
                    border: isSelected ? "1px solid rgba(255,71,87,0.3)" : "1px solid transparent",
                    background: "var(--surface-page)",
                  }}
                >
                  {/* Recessed icon well */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ boxShadow: "var(--shadow-recessed)" }}
                  >
                    <Icon
                      size={20} strokeWidth={1.5}
                      style={{ color: isSelected ? "var(--color-accent)" : "var(--text-muted)" }}
                    />
                  </div>
                  <div className="text-center">
                    <div
                      className="font-mono font-black text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: isSelected ? "var(--color-accent)" : "var(--text-primary)" }}
                    >
                      {a.label}
                    </div>
                    <div className="label-mono text-[9px]" style={{ color: "var(--text-muted)" }}>
                      {a.sub.toUpperCase()}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}