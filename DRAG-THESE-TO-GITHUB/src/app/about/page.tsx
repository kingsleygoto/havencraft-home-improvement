import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import FinalConversionCta from "@/components/FinalConversionCta";
import { siteConfig } from "@/config/siteConfig";
import { ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Installation Philosophy",
  description:
    "Learn about HavenCraft Home Improvement. Thoughtful home upgrades, dependable installation standards, and a customer-focused remodeling journey.",
  alternates: {
    canonical: "https://www.havencrafthome.com/about",
  },
};

export default function AboutPage() {
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
              <span className="text-[#173D35]">About Us</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-[#173D35]" />
                Our Mission & Standards
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242824] tracking-tight leading-tight">
                Your Home Deserves Better.
              </h1>
              <p className="text-base sm:text-lg text-[#58645E] mt-4 leading-relaxed">
                HavenCraft was founded on a straightforward belief: upgrading your home should feel exciting and organized, not chaotic and stressful. We focus on disciplined planning, certified installers, and everyday respect for your family&apos;s living environment.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#DDE2DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#173D35] block">
                  The HavenCraft Approach
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#242824]">
                  Bridging the Gap Between Big Retailers and Solo Contractors
                </h2>
                <p className="text-sm sm:text-base text-[#58645E] leading-relaxed">
                  Too often, homeowners are caught between impersonal national conglomerate sales machines with massive markups and solo operators who are hard to reach once the deposit clears.
                </p>
                <p className="text-sm sm:text-base text-[#58645E] leading-relaxed">
                  HavenCraft provides the ideal balance: the professional project management, written warranties, and code compliance of an established enterprise, combined with the personal attention and local accountability of a dedicated craft team.
                </p>

                <div className="pt-2 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#173D35] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm text-[#242824]">Pre-Demolition Verification</p>
                      <p className="text-xs text-[#58645E]">Materials are checked for perfection at our warehouse before we touch your home.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#173D35] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm text-[#242824]">Living Area Dust Isolation</p>
                      <p className="text-xs text-[#58645E]">Zipper barriers, HEPA filtration, and daily sweep-downs protect your household air.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#DDE2DF]">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                    alt="HavenCraft architectural and construction team discussing precision remodeling plans"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-sm font-bold">Accountable Project Management</p>
                    <p className="text-xs text-white/80">Every step planned before construction commences.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibility Statement Section */}
            <div id="accessibility" className="mt-20 p-8 bg-[#F7F6F1] rounded-3xl border border-[#DDE2DF]">
              <h3 className="text-xl font-bold text-[#242824] mb-3">
                Accessibility Statement
              </h3>
              <p className="text-sm text-[#58645E] leading-relaxed mb-3">
                HavenCraft Home Improvement is committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply relevant accessibility standards (WCAG 2.1 Level AA) across our web pages, forms, and tools.
              </p>
              <p className="text-sm text-[#58645E] leading-relaxed">
                If you encounter any difficulty accessing any part of this website, please call us at{" "}
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="font-bold text-[#173D35] underline">
                  {siteConfig.contact.phoneDisplay}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-bold text-[#173D35] underline">
                  {siteConfig.contact.email}
                </a>
                . We will assist you directly and provide accessible alternatives.
              </p>
            </div>
          </div>
        </section>

        <FinalConversionCta />
      </main>

      <Footer />
      <EstimateModal />
    </div>
  );
}
