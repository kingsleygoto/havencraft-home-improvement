"use client";

import React from "react";
import { openEstimateModal } from "./EstimateModal";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProcessTimeline() {
  const phases = [
    {
      phase: "01",
      name: "Tell Us About Your Project",
      subhead: "Laser Mapping & Diagnostics",
      deliverable: "Preliminary Feasibility Review",
      description:
        "Connect with our project desk online or by phone. We evaluate your home’s footprint, budget expectations, and target timeline to confirm scope fit before scheduling.",
    },
    {
      phase: "02",
      name: "Discuss Your Options",
      subhead: "Material & Scope Curation",
      deliverable: "Fixed-Price Written Scope",
      description:
        "We evaluate your space in person, perform digital laser measurements down to 1/8 inch, review fixture grades, and deliver a comprehensive, fixed-price proposal.",
    },
    {
      phase: "03",
      name: "Plan Your Installation",
      subhead: "Sequenced Logistics & Build",
      deliverable: "Verified Warehouse Delivery",
      description:
        "Materials are pre-inspected in our regional warehouse before work begins. Our installation crew arrives on schedule with floor protection and dust isolation barriers.",
    },
    {
      phase: "04",
      name: "Complete & Review",
      subhead: "Final Walkthrough Sign-Off",
      deliverable: "Warranty & Care Documentation",
      description:
        "Our crew conducts water pressure checks, window and latch cycle testing, and a comprehensive 50-point quality walkthrough before you sign off on final payment.",
    },
  ];

  const handleCta = () => {
    trackEvent({
      name: "estimate_cta_click",
      params: { location: "process_timeline", button_label: "LET'S PLAN YOUR PROJECT" },
    });
    openEstimateModal();
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#DDE2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#173D35] block mb-2 font-sans">
            The HavenCraft Method
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242824] tracking-tight">
            From First Conversation to Finished Project.
          </h2>
          <p className="text-base text-[#58645E] mt-3 font-sans leading-relaxed">
            No guessing games or disappearing contractors. We follow a strict four-phase methodology so you always know what milestone is taking place inside your home.
          </p>
        </div>

        {/* 4 Architectural Phases in Linear Blueprint Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {phases.map((item, idx) => (
            <div
              key={item.phase}
              className="p-7 bg-[#F7F6F1] border border-[#DDE2DF] rounded-lg flex flex-col justify-between hover:border-[#173D35] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#DDE2DF] pb-4 mb-4">
                  <span className="font-mono text-xl font-bold text-[#173D35]">
                    PHASE {item.phase}
                  </span>
                  <span className="text-[10px] font-mono text-[#58645E] uppercase tracking-wider">
                    Step {idx + 1}/4
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#242824] mb-1 group-hover:text-[#173D35] transition-colors">
                  {item.name}
                </h3>
                <span className="text-[11px] font-semibold text-[#173D35] block mb-3 uppercase tracking-wider">
                  {item.subhead}
                </span>

                <p className="text-xs sm:text-sm text-[#58645E] leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDE2DF]">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#58645E] block mb-1">
                  Deliverable:
                </span>
                <span className="text-xs font-bold text-[#242824] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#173D35]" />
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 p-8 bg-[#173D35] text-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="font-serif text-2xl font-bold text-white mb-1">
              Ready to map out your upcoming upgrade?
            </h4>
            <p className="text-xs sm:text-sm text-[#F7F6F1]/80 font-sans">
              Initial consultations are complimentary and backed by an itemized written estimate.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCta}
            className="bg-[#F3D8A0] hover:bg-[#D4B46E] text-[#173D35] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-sm transition-colors whitespace-nowrap min-h-[48px] flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>LET&apos;S PLAN YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
