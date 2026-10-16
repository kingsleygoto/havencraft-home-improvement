import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import FinalConversionCta from "@/components/FinalConversionCta";
import { siteConfig } from "@/config/siteConfig";
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Renovation & Installation Services",
  description:
    "Explore HavenCraft home improvement services: Bathroom Remodeling, Kitchen Remodeling, Window Replacement, Door Installation, and Flooring. Request your free estimate.",
  alternates: {
    canonical: "https://www.havencrafthome.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb & Header */}
        <section className="bg-[#F7F6F1] py-12 lg:py-16 border-b border-[#DDE2DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#58645E] mb-4">
              <Link href="/" className="hover:text-[#173D35]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#173D35]">Services</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-[#173D35]" />
                Professional Installation
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242824] tracking-tight leading-tight">
                Home Improvements That Make Everyday Living Better.
              </h1>
              <p className="text-base sm:text-lg text-[#58645E] mt-4 leading-relaxed">
                We specialize in targeted, high-impact interior renovations. Our factory-certified installation methods and honest project planning provide dependable upgrades without unexpected delays.
              </p>
            </div>
          </div>
        </section>

        {/* Services List Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {siteConfig.services.map((svc, idx) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#DDE2DF]">
                    <img
                      src={svc.imageUrl}
                      alt={svc.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#173D35] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      {svc.name}
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#242824]">
                    {svc.name}
                  </h2>
                  <p className="text-base text-[#58645E] leading-relaxed">
                    {svc.shortDescription}
                  </p>

                  <div className="space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#173D35]">
                      What We Provide:
                    </p>
                    <ul className="space-y-2">
                      {svc.whatWeProvide.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#242824]">
                          <CheckCircle2 className="w-4 h-4 text-[#173D35] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#173D35] hover:bg-[#102B25] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors min-h-[48px]"
                    >
                      <span>EXPLORE {svc.name.toUpperCase()}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FinalConversionCta />
      </main>

      <Footer />
      <EstimateModal />
    </div>
  );
}
