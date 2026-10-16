import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import FinalConversionCta from "@/components/FinalConversionCta";
import { siteConfig } from "@/config/siteConfig";
import { ChevronRight, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas & Regional Coverage",
  description:
    `HavenCraft Home Improvement serves homeowners across ${siteConfig.serviceAreas.regionName}. Check our interactive ZIP code checker and view coverage across ${siteConfig.serviceAreas.counties.slice(0, 3).join(", ")}.`,
  alternates: {
    canonical: "https://www.havencrafthome.com/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-[#F7F6F1] py-12 lg:py-16 border-b border-[#DDE2DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#58645E] mb-4">
              <Link href="/" className="hover:text-[#173D35]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#173D35]">Service Areas</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-[#173D35]" />
                Regional Coverage
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242824] tracking-tight leading-tight">
                Home Improvement in Your Neighborhood
              </h1>
              <p className="text-base sm:text-lg text-[#58645E] mt-4 leading-relaxed">
                We operate specialized remodeling crews across {siteConfig.serviceAreas.regionName}. We bring all required tools, floor protection, and materials directly to your home.
              </p>
            </div>
          </div>
        </section>

        {/* Counties Highlight */}
        <section className="py-12 bg-white border-b border-[#DDE2DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#242824] mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#173D35]" />
              Counties Served in the {siteConfig.serviceAreas.regionName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteConfig.serviceAreas.counties.map((county, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#F7F6F1] rounded-2xl border border-[#DDE2DF] flex items-center justify-between"
                >
                  <span className="font-bold text-sm text-[#242824]">{county}</span>
                  <span className="text-xs bg-[#173D35] text-white px-2.5 py-1 rounded-md font-semibold">
                    Active Crews
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Map & ZIP Check */}
        <ServiceAreaSection />

        <FinalConversionCta />
      </main>

      <Footer />
      <EstimateModal />
    </div>
  );
}
