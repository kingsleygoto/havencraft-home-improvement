"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { openEstimateModal } from "./EstimateModal";
import { trackEvent } from "@/lib/analytics";
import { MapPin, CheckCircle2, AlertCircle } from "lucide-react";

export default function ServiceAreaSection() {
  const [zipInput, setZipInput] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<{
    serviceable: boolean;
    message: string;
  } | null>(null);

  const handleZipCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{5}$/.test(zipInput.trim())) {
      setCheckResult({
        serviceable: false,
        message: "Please enter a valid 5-digit US ZIP code.",
      });
      return;
    }

    setIsChecking(true);
    setCheckResult(null);

    try {
      const res = await fetch(`/api/service-check?zip=${zipInput.trim()}`);
      const data = await res.json();
      setCheckResult({
        serviceable: Boolean(data.serviceable),
        message: data.message || "ZIP code verified.",
      });
    } catch {
      setCheckResult({
        serviceable: false,
        message: "Unable to check ZIP code at this moment. Please call (800) 555-0199 directly.",
      });
    } finally {
      setIsChecking(false);
    }
  };

  const handleEstimateCta = () => {
    trackEvent({
      name: "estimate_cta_click",
      params: { location: "service_area_section", button_label: "GET MY FREE ESTIMATE" },
    });
    openEstimateModal();
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7F6F1] border-b border-[#DDE2DF]" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#173D35] block mb-2 font-sans">
            Regional Installation Coverage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242824] tracking-tight">
            Home Improvement Services in Your Area.
          </h2>
          <p className="text-base text-[#58645E] mt-3 font-sans leading-relaxed">
            HavenCraft operates dedicated installation teams across {siteConfig.serviceAreas.regionName}. Verify your ZIP code below to confirm scheduled crew coverage in your municipality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Dispatch Verifier & Communities */}
          <div className="lg:col-span-6 space-y-6">
            {/* Interactive ZIP Verification Console */}
            <div className="bg-white p-7 rounded-lg border border-[#DDE2DF] shadow-xs">
              <div className="flex items-center justify-between mb-4 border-b border-[#DDE2DF] pb-3">
                <span className="font-serif text-lg font-bold text-[#242824]">
                  Coverage Dispatch Checker
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#173D35] bg-[#F7F6F1] px-2.5 py-1 rounded-xs border border-[#DDE2DF]">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Live Routing Desk
                </span>
              </div>

              <p className="text-xs text-[#58645E] mb-4">
                Enter your 5-digit ZIP code to check scheduled installation routes:
              </p>

              <form onSubmit={handleZipCheck} className="flex gap-2">
                <input
                  type="text"
                  maxLength={5}
                  inputMode="numeric"
                  placeholder="e.g. 19406"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value.replace(/\D/g, "").slice(0, 5))}
                  className="flex-1 px-4 py-3 border border-[#DDE2DF] rounded-sm text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35] font-mono text-sm min-h-[48px]"
                  aria-label="Enter your 5 digit zip code"
                />
                <button
                  type="submit"
                  disabled={isChecking}
                  className="bg-[#173D35] hover:bg-[#0F2722] disabled:bg-gray-400 text-[#F3D8A0] font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-colors cursor-pointer min-h-[48px]"
                >
                  {isChecking ? "Checking..." : "Verify ZIP"}
                </button>
              </form>

              {checkResult && (
                <div
                  role="status"
                  className={`mt-5 p-4 rounded-sm text-xs sm:text-sm flex items-start gap-3 border ${
                    checkResult.serviceable
                      ? "bg-emerald-50 text-emerald-950 border-emerald-200"
                      : "bg-amber-50 text-amber-950 border-amber-200"
                  }`}
                >
                  {checkResult.serviceable ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-bold mb-0.5 font-sans">
                      {checkResult.serviceable ? "Primary Territory Confirmed" : "Neighboring Territory Notice"}
                    </p>
                    <p className="leading-relaxed font-sans text-xs">{checkResult.message}</p>
                    {checkResult.serviceable && (
                      <button
                        type="button"
                        onClick={handleEstimateCta}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#173D35] underline cursor-pointer uppercase tracking-wider font-sans"
                      >
                        Request Estimate for this ZIP →
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Municipalities List */}
            <div className="bg-white p-7 rounded-lg border border-[#DDE2DF] shadow-xs">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#58645E] block mb-3">
                Key Communities Served
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#242824]">
                {siteConfig.serviceAreas.primaryCities.map((city, idx) => (
                  <div key={idx} className="p-2.5 bg-[#F7F6F1] border border-[#DDE2DF] rounded-xs font-medium">
                    {city}, PA
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Framed Architectural Map Embed */}
          <div className="lg:col-span-6 bg-white rounded-lg border border-[#DDE2DF] overflow-hidden shadow-xs">
            <div className="p-4 bg-[#173D35] text-white flex items-center justify-between text-xs font-sans">
              <span className="flex items-center gap-2 font-bold tracking-wide">
                <MapPin className="w-4 h-4 text-[#F3D8A0]" />
                {siteConfig.serviceAreas.regionName}
              </span>
              <span className="text-[10px] font-mono text-[#F3D8A0] uppercase">
                Field Operations Center
              </span>
            </div>

            <div className="relative w-full h-[400px] bg-gray-100">
              <iframe
                title="HavenCraft Regional Service Area Map"
                src={siteConfig.serviceAreas.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-4 bg-white text-xs text-[#58645E] flex items-center justify-between border-t border-[#DDE2DF]">
              <span className="font-sans">{siteConfig.contact.address.displayNote}</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${siteConfig.contact.address.streetAddress}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zipCode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#173D35] font-bold hover:underline whitespace-nowrap ml-4 uppercase text-[11px] tracking-wider font-sans"
              >
                Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
