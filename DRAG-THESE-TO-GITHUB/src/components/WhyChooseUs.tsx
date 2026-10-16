"use client";

import React from "react";
import { Wrench, ShieldCheck, Clock, Users, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: <Wrench className="w-6 h-6 text-[#173D35]" />,
      title: "Certified Installation Protocols",
      description:
        "We follow strict manufacturer specifications and local building codes for every installation. Our crews take the extra time to verify framing, plumb, and vapor barriers rather than rushing through critical structural steps.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#173D35]" />,
      title: "Sequenced Material Logistics",
      description:
        "We verify that all custom components, cabinetry, tile, or window units have arrived at our regional hub in pristine condition before demolition begins in your home. This prevents prolonged disruption to your living space.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#173D35]" />,
      title: "Direct Project Accountability",
      description:
        "You receive a dedicated project coordinator who serves as your single point of contact. You won’t have to track down disparate subcontractors or wonder who is responsible for today's work.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#173D35]" />,
      title: "Written Workmanship Warranties",
      description:
        "Every project is backed by our comprehensive written installation warranty in addition to the underlying manufacturer product warranties. If something needs adjustment after completion, our team returns promptly.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F7F6F1] border-b border-[#DDE2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D35] block mb-2">
            Our Operational Principles
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242824] tracking-tight">
            A Home Improvement Experience Built Around You.
          </h2>
          <p className="text-base text-[#58645E] mt-3 leading-relaxed">
            We built HavenCraft around what matters most to homeowners: dependable scheduling, respect for your residence, and craftsmanship that stands up to daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#DDE2DF] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F7F6F1] flex items-center justify-center mb-5">
                  {diff.icon}
                </div>
                <h3 className="text-xl font-bold text-[#242824] mb-3">
                  {diff.title}
                </h3>
                <p className="text-sm text-[#58645E] leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F2F1] flex items-center gap-2 text-xs font-semibold text-[#173D35]">
                <CheckCircle2 className="w-4 h-4 text-[#173D35]" />
                <span>Verified HavenCraft Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
