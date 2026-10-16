"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Compass, Phone, Mail, MapPin, Clock } from "lucide-react";
import { openEstimateModal } from "./EstimateModal";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const handleCtaClick = () => {
    trackEvent({
      name: "estimate_cta_click",
      params: { location: "footer", button_label: "GET MY FREE ESTIMATE" },
    });
    openEstimateModal();
  };

  return (
    <footer className="bg-[#173D35] text-white border-t border-[#0F2722]">
      {/* Pre-footer Reassurance Banner */}
      <div className="border-b border-[#235449] py-10 px-4 sm:px-6 lg:px-8 bg-[#102B25]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#F3D8A0] text-[#173D35] flex items-center justify-center font-bold flex-shrink-0">
              <Compass className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <p className="font-serif text-lg sm:text-xl font-bold text-[#F7F6F1]">
                {siteConfig.brand.tagline}
              </p>
              <p className="font-sans text-xs text-[#F7F6F1]/80 max-w-xl mt-0.5">
                {siteConfig.brand.supportingMessage}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCtaClick}
            className="bg-[#F3D8A0] hover:bg-[#D4B46E] text-[#173D35] font-sans font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-sm transition-all shadow-md active:scale-[0.98] cursor-pointer whitespace-nowrap min-h-[48px]"
          >
            GET MY FREE ESTIMATE
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#F3D8A0] text-[#173D35] flex items-center justify-center font-bold">
                <Compass className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  HavenCraft
                </span>
                <span className="font-sans text-[9px] tracking-[0.2em] text-[#F3D8A0] uppercase block mt-0.5">
                  Home Improvement
                </span>
              </div>
            </Link>
            <p className="font-sans text-xs sm:text-sm text-[#F7F6F1]/75 leading-relaxed max-w-sm">
              Providing homeowners across the Greater Philadelphia and Delaware Valley region with transparent project planning, disciplined installation, and respectful craftsmanship.
            </p>

            <div className="space-y-2.5 text-xs text-[#F7F6F1]/85 pt-3">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F3D8A0] flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="hover:text-white font-mono font-bold">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F3D8A0] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white font-mono">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F3D8A0] flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} — {siteConfig.serviceAreas.regionName}
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3D8A0] font-sans">
              Renovation Practices
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F7F6F1]/75">
              {siteConfig.services.map((svc) => (
                <li key={svc.id}>
                  <Link href={`/services/${svc.slug}`} className="hover:text-white transition-colors">
                    {svc.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="text-[#F3D8A0] hover:underline font-semibold text-xs">
                  All Disciplines →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Archives */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3D8A0] font-sans">
              Company & Work
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F7F6F1]/75">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Our Work & Transformations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About HavenCraft
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-white transition-colors">
                  Service Territory
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Homeowner Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3D8A0] font-sans">
              Project Desk Hours
            </p>
            <div className="space-y-1.5 text-xs text-[#F7F6F1]/75 font-sans">
              {siteConfig.contact.businessHours.map((h, i) => (
                <div key={i}>
                  <span className="font-semibold text-white block">{h.days}</span>
                  <span className="font-mono text-[11px]">{h.hours}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] bg-[#235449] text-[#F7F6F1] px-2.5 py-1 rounded-xs border border-white/10 font-mono">
                <Clock className="w-3 h-3 text-[#F3D8A0]" />
                Online requests reviewed daily
              </span>
            </div>
          </div>
        </div>

        {/* Legal & Standards Notice */}
        <div className="mt-14 pt-8 border-t border-[#235449] text-[11px] text-[#F7F6F1]/60 flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
          <p>
            © {new Date().getFullYear()} {siteConfig.brand.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white underline">
              Terms of Use
            </Link>
            <Link href="/about#accessibility" className="hover:text-white underline">
              Accessibility Statement
            </Link>
            <Link href="/contact" className="hover:text-white underline">
              Customer Care
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
