"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { openEstimateModal } from "./EstimateModal";
import { trackEvent } from "@/lib/analytics";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Compass,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = (location: string) => {
    trackEvent({
      name: "estimate_cta_click",
      params: { location, button_label: "GET MY FREE ESTIMATE" },
    });
    openEstimateModal();
  };

  const handlePhoneClick = (location: string) => {
    trackEvent({
      name: "phone_click",
      params: { location },
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-200">
      {/* Optional Slim Announcement Bar */}
      {siteConfig.announcement.enabled && (
        <div className="bg-[#173D35] text-white py-2 px-4 text-xs font-sans tracking-wide text-center border-b border-[#0F2722] flex items-center justify-center gap-2">
          <span className="font-medium text-[#F7F6F1]">{siteConfig.announcement.message}</span>
          {siteConfig.announcement.linkText && (
            <a
              href={siteConfig.announcement.linkHref}
              className="text-[#F3D8A0] hover:text-white font-semibold underline underline-offset-2 inline-flex items-center gap-1 transition-colors"
            >
              <span>{siteConfig.announcement.linkText}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          )}
        </div>
      )}

      {/* Main Navigation Bar */}
      <div
        className={`w-full border-b border-[#DDE2DF] bg-white transition-all duration-200 ${
          scrolled ? "py-3 shadow-xs" : "py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Architectural Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#173D35] rounded-md p-1"
          >
            <div className="w-10 h-10 rounded-sm bg-[#173D35] text-[#F3D8A0] flex items-center justify-center border border-[#173D35] group-hover:bg-[#0F2722] transition-colors">
              <Compass className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-[26px] font-bold tracking-tight text-[#173D35] block leading-none">
                HavenCraft
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#58645E] uppercase block mt-1">
                Home Improvement
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wide text-[#242824]">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 py-2 text-[#242824] hover:text-[#173D35] transition-colors cursor-pointer uppercase tracking-wider text-xs"
                aria-expanded={servicesDropdownOpen}
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#58645E]" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-88 bg-white rounded-xl shadow-xl border border-[#DDE2DF] p-3 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#58645E] px-3 py-2 border-b border-[#DDE2DF] mb-1">
                    Specialized Renovation Practices
                  </div>
                  <div className="space-y-1">
                    {siteConfig.services.map((svc) => (
                      <Link
                        key={svc.id}
                        href={`/services/${svc.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F7F6F1] transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 border border-[#DDE2DF]">
                          <img
                            src={svc.imageUrl}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#242824] group-hover:text-[#173D35] transition-colors">
                            {svc.name}
                          </p>
                          <p className="text-[11px] text-[#58645E] line-clamp-1 mt-0.5">
                            {svc.shortDescription}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-[#DDE2DF] px-3 py-2 flex items-center justify-between">
                      <Link
                        href="/services"
                        className="text-xs font-bold text-[#173D35] hover:underline flex items-center gap-1"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <span>View All Capabilities</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <span className="text-[10px] text-[#58645E] uppercase font-semibold">
                        In-Home Quotes
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects" className="uppercase tracking-wider text-xs hover:text-[#173D35] transition-colors py-2">
              Our Work
            </Link>
            <Link href="/about" className="uppercase tracking-wider text-xs hover:text-[#173D35] transition-colors py-2">
              About
            </Link>
            <Link href="/service-areas" className="uppercase tracking-wider text-xs hover:text-[#173D35] transition-colors py-2">
              Service Areas
            </Link>
            <Link href="/resources" className="uppercase tracking-wider text-xs hover:text-[#173D35] transition-colors py-2">
              Resources
            </Link>
            <Link href="/contact" className="uppercase tracking-wider text-xs hover:text-[#173D35] transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* Desktop Right: Phone & High-Contrast Tactile CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              onClick={() => handlePhoneClick("desktop_header")}
              className="flex items-center gap-2.5 text-left group"
              aria-label={`Call HavenCraft directly at ${siteConfig.contact.phoneDisplay}`}
            >
              <div className="w-8 h-8 rounded-full border border-[#DDE2DF] group-hover:border-[#173D35] flex items-center justify-center text-[#173D35] transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[9px] tracking-wider text-[#58645E] uppercase font-bold leading-none">
                  Project Desk
                </span>
                <span className="text-xs font-bold text-[#173D35] font-mono mt-0.5 block">
                  {siteConfig.contact.phoneDisplay}
                </span>
              </div>
            </a>

            <button
              type="button"
              onClick={() => handleCtaClick("desktop_header")}
              className="bg-[#173D35] hover:bg-[#0F2722] text-[#F3D8A0] hover:text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg border border-[#173D35] transition-all duration-150 shadow-xs hover:shadow cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              GET MY FREE ESTIMATE
            </button>
          </div>

          {/* Mobile Right: Phone + Menu */}
          <div className="flex lg:hidden items-center gap-2.5">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              onClick={() => handlePhoneClick("mobile_header")}
              aria-label="Call HavenCraft"
              className="w-10 h-10 rounded-lg border border-[#DDE2DF] text-[#173D35] flex items-center justify-center"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="w-10 h-10 rounded-lg bg-[#173D35] text-white flex items-center justify-center cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[108px] z-50 bg-black/40 backdrop-blur-xs flex flex-col">
          <div className="bg-white border-b border-[#DDE2DF] p-6 max-h-[calc(100vh-120px)] overflow-y-auto space-y-6">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#58645E] px-2 py-1">
                Our Services
              </p>
              {siteConfig.services.map((svc) => (
                <Link
                  key={svc.id}
                  href={`/services/${svc.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F7F6F1] text-sm font-semibold text-[#242824]"
                >
                  <span>{svc.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#58645E]" />
                </Link>
              ))}

              <div className="pt-3 border-t border-[#DDE2DF] space-y-1 font-semibold text-sm">
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-3 rounded-lg hover:bg-[#F7F6F1]"
                >
                  Our Work & Transformations
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-3 rounded-lg hover:bg-[#F7F6F1]"
                >
                  About HavenCraft
                </Link>
                <Link
                  href="/service-areas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-3 rounded-lg hover:bg-[#F7F6F1]"
                >
                  Service Areas & Map
                </Link>
                <Link
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-3 rounded-lg hover:bg-[#F7F6F1]"
                >
                  Homeowner Guides
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-3 rounded-lg hover:bg-[#F7F6F1]"
                >
                  Contact Desk
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DDE2DF] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick("mobile_menu");
                }}
                className="w-full bg-[#173D35] text-[#F3D8A0] font-bold text-xs uppercase tracking-wider py-4 rounded-lg text-center shadow-sm min-h-[48px]"
              >
                GET MY FREE ESTIMATE
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                onClick={() => handlePhoneClick("mobile_menu")}
                className="w-full bg-[#F7F6F1] border border-[#DDE2DF] text-[#173D35] font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg text-center flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Phone className="w-4 h-4" />
                Call {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
