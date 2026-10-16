import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import FinalConversionCta from "@/components/FinalConversionCta";
import { ChevronRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Completed Projects & Renovation Gallery",
  description:
    "Explore HavenCraft Home Improvement renovation transformations, before-and-after project comparisons, and craftsmanship standards.",
  alternates: {
    canonical: "https://www.havencrafthome.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumbs & Header */}
        <section className="bg-[#F7F6F1] py-12 lg:py-16 border-b border-[#DDE2DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#58645E] mb-4">
              <Link href="/" className="hover:text-[#173D35]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#173D35]">Our Work</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-[#173D35]" />
                Craftsmanship & Results
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242824] tracking-tight leading-tight">
                Our Work & Renovation Transformations
              </h1>
              <p className="text-base sm:text-lg text-[#58645E] mt-4 leading-relaxed">
                See how thoughtful planning, precise laser measurements, and meticulous installation come together across bathrooms, kitchens, windows, and doors.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <BeforeAfterGallery />

        <FinalConversionCta />
      </main>

      <Footer />
      <EstimateModal />
    </div>
  );
}
