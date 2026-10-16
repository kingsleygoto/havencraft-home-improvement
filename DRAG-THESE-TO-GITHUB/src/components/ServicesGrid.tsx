"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#DDE2DF]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#DDE2DF] pb-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#173D35] block mb-2 font-sans">
              Specialized Installation Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242824] tracking-tight">
              Home Improvements That Make Everyday Living Better.
            </h2>
            <p className="text-base text-[#58645E] mt-3 font-sans leading-relaxed">
              We specialize in the high-impact areas of the home that endure daily family use. By pairing specialized crews with proven materials, we deliver upgrades built to endure.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#173D35] hover:underline"
          >
            <span>Complete Specification Index</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Architectural Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((svc, idx) => (
            <div
              key={svc.id}
              className="bg-[#F7F6F1] border border-[#DDE2DF] rounded-lg overflow-hidden flex flex-col justify-between group hover:border-[#173D35] transition-all duration-300 shadow-xs hover:shadow-lg"
            >
              <div>
                {/* Photo with Index Tag */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-100 border-b border-[#DDE2DF]">
                  <img
                    src={svc.imageUrl}
                    alt={`${svc.name} - HavenCraft Home Improvement`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#173D35] text-[#F3D8A0] font-mono text-xs font-bold px-2.5 py-1 rounded-xs">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#242824] mb-3 group-hover:text-[#173D35] transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-sm text-[#58645E] leading-relaxed mb-6 font-sans">
                    {svc.shortDescription}
                  </p>

                  <div className="space-y-2.5 border-t border-[#DDE2DF] pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#173D35] block mb-2 font-mono">
                      Scope Specifications:
                    </span>
                    {svc.whatWeProvide.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#242824]">
                        <Check className="w-3.5 h-3.5 text-[#173D35] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-7 pt-0">
                <Link
                  href={`/services/${svc.slug}`}
                  className="w-full bg-white hover:bg-[#173D35] hover:text-[#F3D8A0] text-[#173D35] border border-[#DDE2DF] hover:border-[#173D35] font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors flex items-center justify-between min-h-[46px]"
                >
                  <span>Explore {svc.name.split(" ")[0]} Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
