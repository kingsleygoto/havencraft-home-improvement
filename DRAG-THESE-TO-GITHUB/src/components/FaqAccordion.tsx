"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { openEstimateModal } from "./EstimateModal";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F7F6F1] border-b border-[#DDE2DF]" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D35] block mb-2">
            Answers to Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242824] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#58645E] mt-3">
            Clear information about our remodeling services, service area, scheduling, and project cost factors.
          </p>
        </div>

        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#DDE2DF] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#173D35]"
                >
                  <span className="text-base sm:text-lg font-bold text-[#242824]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F7F6F1] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#173D35] text-white" : "text-[#242824]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={faqId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-6 sm:px-6 text-sm text-[#58645E] leading-relaxed border-t border-[#F0F2F1] pt-4"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help footer */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-[#DDE2DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-bold text-[#242824] text-base">Have a question not listed here?</h3>
            <p className="text-xs text-[#58645E] mt-0.5">
              Our project team is available to review your specific home requirements.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openEstimateModal()}
            className="bg-[#173D35] hover:bg-[#102B25] text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors cursor-pointer whitespace-nowrap min-h-[48px] flex items-center justify-center"
          >
            Ask a Specialist
          </button>
        </div>
      </div>
    </section>
  );
}
