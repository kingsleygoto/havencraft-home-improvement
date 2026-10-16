"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { openEstimateModal } from "./EstimateModal";
import { trackEvent } from "@/lib/analytics";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Bath,
  Utensils,
  Maximize2,
  DoorOpen,
  Layers,
} from "lucide-react";

export default function HeroSection() {
  const [selectedService, setSelectedService] = useState<string>("Bathroom Remodeling");

  const handleCtaClick = (service?: string) => {
    const targetService = service || selectedService;
    trackEvent({
      name: "estimate_cta_click",
      params: { location: "hero_primary", button_label: "GET MY FREE ESTIMATE" },
    });
    openEstimateModal(targetService);
  };

  const handlePhoneClick = () => {
    trackEvent({
      name: "phone_click",
      params: { location: "hero_call_link" },
    });
  };

  const serviceOptions = [
    { name: "Bathroom Remodeling", icon: <Bath className="w-3.5 h-3.5" />, time: "1–3 Days on Site" },
    { name: "Kitchen Remodeling", icon: <Utensils className="w-3.5 h-3.5" />, time: "1–2.5 Weeks on Site" },
    { name: "Window Replacement", icon: <Maximize2 className="w-3.5 h-3.5" />, time: "1–2 Days on Site" },
    { name: "Door Installation", icon: <DoorOpen className="w-3.5 h-3.5" />, time: "1 Day on Site" },
    { name: "Flooring Installation", icon: <Layers className="w-3.5 h-3.5" />, time: "1–3 Days on Site" },
  ];

  const currentOption = serviceOptions.find((s) => s.name === selectedService) || serviceOptions[0];

  return (
    <section className="relative bg-[#F7F6F1] border-b border-[#DDE2DF] overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 architectural-grid pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Architectural Eyebrow Stamp */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#173D35] text-[#F3D8A0] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm border border-[#173D35]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3D8A0]" />
              {siteConfig.brand.eyebrow} • {siteConfig.serviceAreas.regionName.toUpperCase()}
            </div>

            {/* Stately Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#242824] leading-[1.08]">
              A Better Home Starts With a{" "}
              <span className="italic text-[#173D35]">Better Plan.</span>
            </h1>

            {/* Editorial Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-[#58645E] leading-relaxed max-w-2xl">
              {siteConfig.brand.heroCopy}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => handleCtaClick(selectedService)}
                className="bg-[#173D35] hover:bg-[#0F2722] text-[#F3D8A0] hover:text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-sm border border-[#173D35] transition-all shadow-md active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>GET MY FREE ESTIMATE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="bg-white hover:bg-gray-50 border border-[#DDE2DF] text-[#242824] font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-sm transition-colors text-center flex items-center justify-center min-h-[50px]"
              >
                EXPLORE OUR SERVICES
              </Link>
            </div>

            {/* Reassurance line */}
            <p className="text-xs sm:text-sm text-[#58645E] flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#173D35] flex-shrink-0" />
              <span>{siteConfig.brand.reassuranceLine}</span>
            </p>

            {/* Direct Phone Option */}
            <div className="flex items-center gap-2 text-xs text-[#58645E]">
              <span>Prefer to talk through your project right now?</span>
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                onClick={handlePhoneClick}
                className="font-bold text-[#173D35] hover:underline inline-flex items-center gap-1 font-mono"
              >
                <Phone className="w-3 h-3" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            {/* Architectural Trust Strip */}
            <div className="pt-4 border-t border-[#DDE2DF] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#242824]">
              <div className="p-3 bg-white border border-[#DDE2DF] rounded-sm">
                <span className="block text-[10px] text-[#58645E] uppercase tracking-wider font-bold">Standard 01</span>
                <span className="font-semibold text-xs text-[#173D35]">Precision Laser Measurement</span>
              </div>
              <div className="p-3 bg-white border border-[#DDE2DF] rounded-sm">
                <span className="block text-[10px] text-[#58645E] uppercase tracking-wider font-bold">Standard 02</span>
                <span className="font-semibold text-xs text-[#173D35]">Dust-Containment Barriers</span>
              </div>
              <div className="p-3 bg-white border border-[#DDE2DF] rounded-sm">
                <span className="block text-[10px] text-[#58645E] uppercase tracking-wider font-bold">Standard 03</span>
                <span className="font-semibold text-xs text-[#173D35]">Written Workmanship Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography + Tactile Project Scoper */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white rounded-lg p-2 border border-[#DDE2DF] shadow-xl">
              {/* Photo */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-sm bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Renovated modern living interior by HavenCraft Home Improvement"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#173D35] text-[#F3D8A0] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs">
                  Field Verified
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-semibold text-[#F3D8A0] block uppercase tracking-wider">
                    Installation Focus
                  </span>
                  <p className="font-serif text-lg text-white font-bold leading-snug">
                    Architectural Renovations Built for Daily Living
                  </p>
                </div>
              </div>

              {/* Tactile Interactive Project Scoper */}
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-3 border-b border-[#DDE2DF] pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#173D35]">
                    Quick Project Scoper
                  </span>
                  <span className="text-[10px] font-mono text-[#58645E] bg-[#F7F6F1] px-2 py-0.5 rounded-sm">
                    Step 1 of 2
                  </span>
                </div>

                <p className="text-xs text-[#58645E] mb-3">
                  Select your renovation priority to configure your consultation:
                </p>

                {/* Service Chips */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => setSelectedService(opt.name)}
                      className={`px-2.5 py-2 rounded-sm text-xs font-semibold text-left transition-all flex items-center gap-1.5 cursor-pointer border ${
                        selectedService === opt.name
                          ? "bg-[#173D35] text-[#F3D8A0] border-[#173D35] shadow-xs"
                          : "bg-[#F7F6F1] text-[#242824] hover:bg-gray-100 border-[#DDE2DF]"
                      }`}
                    >
                      {opt.icon}
                      <span className="truncate">{opt.name.replace(" Remodeling", "").replace(" Installation", "").replace(" Replacement", "")}</span>
                    </button>
                  ))}
                </div>

                {/* Dynamic Estimated Scope Card */}
                <div className="p-3 bg-[#F7F6F1] border border-[#DDE2DF] rounded-sm mb-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#58645E]">Selected:</span>
                    <strong className="text-[#173D35]">{selectedService}</strong>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase font-bold text-[#58645E]">Typical Scope:</span>
                    <span className="font-mono text-[#242824] text-[11px]">{currentOption.time}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCtaClick(selectedService)}
                  className="w-full bg-[#173D35] hover:bg-[#0F2722] text-[#F3D8A0] font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs min-h-[46px]"
                >
                  <span>Continue With {selectedService.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
