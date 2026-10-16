"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Clock, ArrowRight } from "lucide-react";

export default function HelpfulResources() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DDE2DF]" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#173D35] block mb-2">
              Homeowner Guidance & Articles
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242824] tracking-tight">
              Make a More Informed Home Improvement Decision.
            </h2>
            <p className="text-base text-[#58645E] mt-3">
              Clear, practical advice on remodeling budgets, material tradeoffs, and contractor evaluation—without industry jargon or sales pitches.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173D35] hover:underline"
          >
            <span>Browse All Resources</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.resources.slice(0, 3).map((article) => (
            <article
              key={article.slug}
              className="bg-[#F7F6F1] rounded-3xl overflow-hidden border border-[#DDE2DF] hover:border-[#173D35]/50 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col group"
            >
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-200">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#173D35] text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#58645E] mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#173D35]" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#242824] group-hover:text-[#173D35] transition-colors leading-snug mb-2">
                    <Link href={`/resources/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#58645E] line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDE2DF] flex items-center justify-between text-xs font-bold text-[#173D35]">
                  <Link href={`/resources/${article.slug}`} className="hover:underline flex items-center gap-1">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/services/${article.relatedServiceSlug}`}
                    className="text-[11px] text-[#58645E] hover:text-[#173D35]"
                  >
                    Related Service →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
