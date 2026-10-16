"use client";

import React from "react";
import { openEstimateModal } from "./EstimateModal";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight } from "lucide-react";

export default function QuickProjectSelector() {
  const handleSelect = (serviceName: string) => {
    trackEvent({
      name: "project_type_selected",
      params: { project_type: serviceName, source: "quick_selector" },
    });
    trackEvent({
      name: "estimate_cta_click",
      params: { location: `quick_selector_${serviceName}`, button_label: serviceName },
    });
    openEstimateModal(serviceName);
  };

  const projectCards = [
    {
      id: "bathroom",
      name: "Bathroom Remodeling",
      num: "01",
      scope: "Tub-to-Shower & Master Suites",
      imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "kitchen",
      name: "Kitchen Remodeling",
      num: "02",
      scope: "Cabinetry, Islands & Surfaces",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "windows",
      name: "Window Replacement",
      num: "03",
      scope: "Low-E Argon & Custom Capping",
      imageUrl: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "doors",
      name: "Door Installation",
      num: "04",
      scope: "Fiberglass Entry & French Sliders",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "flooring",
      name: "Flooring Installation",
      num: "05",
      scope: "Waterproof LVP & Hardwood",
      imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "other",
      name: "Other Improvement",
      num: "06",
      scope: "Custom Residential Scope",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-[#DDE2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#DDE2DF] pb-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#173D35] block mb-2 font-sans">
              Specialized Project Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242824] tracking-tight">
              What Would You Like to Improve?
            </h2>
            <p className="text-sm sm:text-base text-[#58645E] mt-2 font-sans">
              Select any category below to begin your personalized consultation. Your selection will automatically populate your estimate profile.
            </p>
          </div>

          <div className="text-xs font-mono text-[#58645E]">
            SELECT CATEGORY (01–06)
          </div>
        </div>

        {/* Rich Editorial Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCards.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => handleSelect(card.name)}
              className="group relative h-80 rounded-lg overflow-hidden border border-[#DDE2DF] hover:border-[#173D35] transition-all duration-300 text-left cursor-pointer flex flex-col justify-between p-6 bg-gray-900 shadow-xs hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#173D35]"
            >
              {/* Background Photography with Zoom Effect */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-75 group-hover:opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Card Top: Number & Scope Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#F3D8A0] tracking-wider">
                  {card.num}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white/20 backdrop-blur-xs text-white rounded-xs border border-white/20">
                  {card.scope}
                </span>
              </div>

              {/* Card Bottom: Service Name & Tactile Action */}
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-[#F3D8A0] transition-colors">
                  {card.name}
                </h3>
                <div className="flex items-center justify-between text-xs text-white/80 group-hover:text-white pt-2 border-t border-white/20">
                  <span className="font-semibold uppercase tracking-wider text-[11px]">
                    Configure Scope
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#F3D8A0] group-hover:text-[#173D35] flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
