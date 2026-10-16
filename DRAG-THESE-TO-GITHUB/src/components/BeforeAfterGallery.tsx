"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { openEstimateModal } from "./EstimateModal";
import { ArrowRight, MapPin, Clock, Info } from "lucide-react";

export default function BeforeAfterGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sliderPositions, setSliderPositions] = useState<Record<string, number>>({});

  const categories = ["All", "Bathroom Remodeling", "Kitchen Remodeling", "Window Replacement", "Door Installation"];

  const filteredProjects =
    selectedCategory === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === selectedCategory);

  const getPosition = (id: string) => sliderPositions[id] ?? 50;

  const handleSliderChange = (id: string, val: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: val }));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7F6F1] border-b border-[#DDE2DF]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#DDE2DF] pb-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#173D35] block mb-2 font-sans">
              Transformations & Project Benchmarks
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242824] tracking-tight">
              See What a Thoughtful Upgrade Can Do.
            </h2>
            <p className="text-base text-[#58645E] mt-3 font-sans leading-relaxed">
              Explore how disciplined planning and craftsmanship resolve cramped layouts, drafts, and dated materials. Drag the slider on any card below to interactively inspect before and after conditions.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#173D35] hover:underline"
          >
            <span>Full Project Archives</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Transparency Notice */}
        <div className="mb-10 p-4 bg-white rounded-md border border-[#DDE2DF] flex items-center gap-3 text-xs text-[#58645E]">
          <Info className="w-4 h-4 text-[#173D35] flex-shrink-0" />
          <span>
            <strong>Transparency Notice:</strong> Imagery represents design concepts and installation specifications. HavenCraft strictly displays only verified customer documentation once projects are closed.
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-[#173D35] text-[#F3D8A0] border-[#173D35] shadow-xs"
                  : "bg-white text-[#242824] hover:bg-gray-100 border-[#DDE2DF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Interactive Split Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const pos = getPosition(project.id);

            return (
              <div
                key={project.id}
                className="bg-white rounded-lg border border-[#DDE2DF] overflow-hidden shadow-xs hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Interactive Drag Reveal Container */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden select-none bg-black">
                  {/* AFTER IMAGE (Base Layer) */}
                  <img
                    src={project.afterImage}
                    alt={`${project.title} - Finished condition`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-10 bg-[#173D35] text-[#F3D8A0] font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-xs">
                    After (Upgraded)
                  </div>

                  {/* BEFORE IMAGE (Clipped Layer on Top) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${pos}%` }}
                  >
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} - Original condition`}
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: "100%", height: "100%" }}
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-black/75 text-white font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                      Before (Original)
                    </div>
                  </div>

                  {/* Divider Line & Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none shadow-md"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#173D35] shadow-lg flex items-center justify-center text-xs font-bold border border-[#DDE2DF]">
                      ↔
                    </div>
                  </div>

                  {/* Invisible Range Input for Smooth Dragging */}
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={pos}
                    onChange={(e) => handleSliderChange(project.id, Number(e.target.value))}
                    aria-label={`Compare before and after for ${project.title}`}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 z-10 bg-white/95 text-[#242824] text-[10px] font-mono font-bold px-2.5 py-1 rounded-xs shadow-xs flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#173D35]" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Card Editorial Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#58645E] mb-2 font-mono">
                      <span className="text-[#173D35] font-bold uppercase tracking-wider">{project.category}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#242824] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#58645E] leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DDE2DF] flex items-center justify-between">
                    <span className="text-[11px] text-[#58645E] font-mono">
                      Drag handle ↔ to reveal details
                    </span>
                    <button
                      type="button"
                      onClick={() => openEstimateModal(project.category)}
                      className="text-xs font-bold uppercase tracking-wider text-[#173D35] hover:text-[#0F2722] inline-flex items-center gap-1 cursor-pointer"
                    >
                      Plan Similar Upgrade <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
