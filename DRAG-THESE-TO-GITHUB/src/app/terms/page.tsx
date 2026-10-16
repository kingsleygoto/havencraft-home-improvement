import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import { siteConfig } from "@/config/siteConfig";
import { ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for HavenCraft Home Improvement website, preliminary estimates, and consultation scheduling.",
  alternates: {
    canonical: "https://www.havencrafthome.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#58645E] mb-6">
            <Link href="/" className="hover:text-[#173D35]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#173D35]">Terms of Use</span>
          </nav>

          <div className="border-b border-[#DDE2DF] pb-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5 text-[#173D35]" />
              Legal Agreement
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#242824] tracking-tight">
              Terms of Use
            </h1>
            <p className="text-xs text-[#58645E] mt-2">
              Effective Date: October 15, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-[#242824] space-y-8 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website of {siteConfig.brand.legalName} (&quot;HavenCraft&quot;, &quot;we&quot;, &quot;our&quot;), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of this site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">2. Nature of Online Estimates</h2>
              <p>
                Any preliminary estimates, ranges, or consultation summaries generated via our website or over the phone are intended solely for exploratory planning purposes. Formal, binding contracts are only established after an in-person site evaluation, physical laser measurement, structural inspection, and execution of a written project agreement signed by both parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">3. Service Availability</h2>
              <p>
                Submitting an inquiry through our ZIP code checker or estimate form does not guarantee service availability. Project scheduling depends on crew availability, material lead times, and specific municipal permit requirements in your jurisdiction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">4. Intellectual Property</h2>
              <p>
                All text, graphics, logos, icons, images, and software on this website are the property of {siteConfig.brand.legalName} or its content suppliers and are protected by applicable United States copyright and trademark laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">5. Warranties & Disclaimers</h2>
              <p>
                This website and its informational articles are provided on an &quot;as is&quot; basis for educational reference. Installation warranties are provided exclusively through written contracts delivered upon project completion.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">6. Governing Law</h2>
              <p>
                These Terms of Use are governed by the laws of the Commonwealth of Pennsylvania and the United States of America, without regard to conflict of law principles.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <EstimateModal />
    </div>
  );
}
