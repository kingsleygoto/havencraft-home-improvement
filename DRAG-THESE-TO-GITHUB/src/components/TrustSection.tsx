"use client";

import React from "react";
import { CheckCircle2, Lock } from "lucide-react";

export default function TrustSection() {
  const standards = [
    {
      num: "01",
      title: "Unambiguous Communication",
      principle: "No disappearing crews or mystery scheduling.",
      body: "We establish a designated project coordinator who provides proactive updates at each phase, from raw material arrival through the final walkthrough.",
    },
    {
      num: "02",
      title: "Structural & Spatial Planning",
      principle: "Laser diagnostics before tools touch your home.",
      body: "We evaluate existing framing, subflooring, electrical capacity, and plumbing lines to eliminate unexpected mid-project change orders.",
    },
    {
      num: "03",
      title: "Itemized Scope & Honest Estimates",
      principle: "Fixed, written agreements with clear line items.",
      body: "Every proposal specifies manufacturer model numbers, material grades, and labor details. We do not use high-pressure tactics or artificial same-day discounts.",
    },
    {
      num: "04",
      title: "Living Area Shielding",
      principle: "Respect for your family’s air quality and floors.",
      body: "Our installation teams construct floor-to-ceiling zipper dust containment barriers, lay heavy floor protection runners, and run HEPA air scrubbers during dust-intensive phases.",
    },
    {
      num: "05",
      title: "Accountable Installation",
      principle: "Certified trades adherence to local building codes.",
      body: "All installations are performed by factory-certified crews following manufacturer specifications and local municipal permit protocols.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F6F1] border-b border-[#DDE2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#173D35] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#173D35]" />
            Operating Principles
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242824] tracking-tight leading-tight">
            Your Home Deserves Care at Every Step.
          </h2>
          <p className="text-base text-[#58645E] mt-4 font-sans leading-relaxed">
            Home renovation should be a disciplined, reassuring craft. We hold our teams to measurable operational commitments so you always know what to expect inside your home.
          </p>
        </div>

        {/* Architectural Hairline Grid */}
        <div className="border-t border-l border-[#DDE2DF] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white">
          {standards.map((std) => (
            <div
              key={std.num}
              className="p-8 border-r border-b border-[#DDE2DF] flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#173D35] bg-[#F7F6F1] px-2.5 py-1 rounded-xs border border-[#DDE2DF]">
                    STANDARD {std.num}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#173D35]/40 group-hover:text-[#173D35] transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#242824] mb-2">
                  {std.title}
                </h3>
                <p className="text-xs font-semibold text-[#173D35] mb-3">
                  {std.principle}
                </p>
                <p className="text-xs sm:text-sm text-[#58645E] leading-relaxed">
                  {std.body}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F0F2F1] text-[10px] font-mono uppercase tracking-widest text-[#58645E]">
                HavenCraft Verified Protocol
              </div>
            </div>
          ))}

          {/* Verification Box in Grid */}
          <div className="p-8 border-r border-b border-[#DDE2DF] bg-[#173D35] text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#F3D8A0] text-xs font-mono mb-6">
                <Lock className="w-4 h-4" />
                <span>INTEGRITY MANDATE</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Zero Unverified Claims Policy
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F6F1]/80 leading-relaxed mb-4">
                We believe in factual documentation over marketing superlatives. Proof of general liability insurance, workers’ compensation, and required municipal building permits are provided in writing for every contracted project.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#235449] text-[10px] font-mono text-[#F3D8A0] uppercase tracking-wider">
              Delivered with your written scope
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
