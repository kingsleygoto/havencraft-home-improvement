"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { openEstimateModal } from "./EstimateModal";
import { trackEvent } from "@/lib/analytics";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function FinalConversionCta() {
  const handleEstimate = () => {
    trackEvent({
      name: "estimate_cta_click",
      params: { location: "final_conversion_section", button_label: "GET MY FREE ESTIMATE" },
    });
    openEstimateModal();
  };

  const handlePhone = () => {
    trackEvent({
      name: "phone_click",
      params: { location: "final_conversion_section" },
    });
  };

  return (
    <section className="py-24 lg:py-32 bg-[#173D35] text-white relative overflow-hidden border-t border-[#0F2722]">
      {/* Architectural subtle geometry */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F3D8A0_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 text-[#F3D8A0] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase rounded-xs border border-white/15 mb-6">
          <ShieldCheck className="w-4 h-4 text-[#F3D8A0]" />
          Direct, Measured Craftsmanship
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
          Ready to Make Your Home Work Better for You?
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#F7F6F1]/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us what you have in mind. Share a few details about your project, and our team can follow up about the next steps.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            type="button"
            onClick={handleEstimate}
            className="w-full sm:w-auto bg-[#F3D8A0] hover:bg-[#D4B46E] text-[#173D35] font-sans font-bold text-xs uppercase tracking-wider px-9 py-4 rounded-sm transition-all shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 min-h-[50px]"
          >
            <span>GET MY FREE ESTIMATE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            onClick={handlePhone}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-sans font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-sm transition-colors border border-white/20 flex items-center justify-center gap-2 min-h-[50px]"
          >
            <Phone className="w-4 h-4 text-[#F3D8A0]" />
            <span>CALL OUR TEAM</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#F7F6F1]/70 font-mono">
          Project Desk: {siteConfig.contact.phoneDisplay} • {siteConfig.contact.businessHours[0].days},{" "}
          {siteConfig.contact.businessHours[0].hours}
        </div>
      </div>
    </section>
  );
}
