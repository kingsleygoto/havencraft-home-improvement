"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export default function TestimonialsOrCommitments() {
  const hasVerifiedReviews = siteConfig.verifiedReviews.length > 0;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DDE2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#173D35] block mb-2">
            Trust & Customer Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242824] tracking-tight">
            Homeowners Deserve to Know Who They&apos;re Hiring.
          </h2>
          <p className="text-base text-[#58645E] mt-3">
            In an industry filled with fake reviews and inflated star ratings, HavenCraft operates under a strict verification policy. We only publish testimonials from verified project completions.
          </p>
        </div>

        {hasVerifiedReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Populated when client verified reviews exist */}
          </div>
        ) : (
          /* Honest Service Commitment & Verification Architecture */
          <div className="bg-[#F7F6F1] rounded-3xl p-8 sm:p-10 border border-[#DDE2DF] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-lg text-xs font-bold text-[#173D35] border border-[#DDE2DF]">
                  <Lock className="w-3.5 h-3.5 text-[#173D35]" />
                  Zero Fabricated Reviews Policy
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#242824]">
                  Our Direct Pledge to Every Homeowner
                </h3>
                <p className="text-sm text-[#58645E] leading-relaxed">
                  Rather than showing unverified 5-star badges or invented quotes, we believe trust is earned on your job site. When you request a consultation, you receive:
                </p>
                <ul className="space-y-2.5 text-sm text-[#242824]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#173D35] flex-shrink-0 mt-0.5" />
                    <span>Direct written references from verified homeowner projects upon request.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#173D35] flex-shrink-0 mt-0.5" />
                    <span>Itemized material specifications and model numbers before you sign any contract.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#173D35] flex-shrink-0 mt-0.5" />
                    <span>Daily progress checks and immediate punch-list resolution prior to final payment.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DDE2DF] text-center space-y-3">
                <div className="w-14 h-14 bg-[#173D35]/10 text-[#173D35] rounded-full flex items-center justify-center mx-auto font-bold">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#242824] text-base">
                  Verified Project Audits
                </h4>
                <p className="text-xs text-[#58645E]">
                  Every project walkthrough requires homeowner sign-off before a file is closed in our system.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#58645E] border-t border-[#F0F2F1]">
                  System Integrity Standard #HC-VERIFY
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
