import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import { siteConfig } from "@/config/siteConfig";
import { ChevronRight, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for HavenCraft Home Improvement. Details on how we collect, store, and protect your estimate inquiry details.",
  alternates: {
    canonical: "https://www.havencrafthome.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#58645E] mb-6">
            <Link href="/" className="hover:text-[#173D35]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#173D35]">Privacy Policy</span>
          </nav>

          <div className="border-b border-[#DDE2DF] pb-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider mb-3">
              <Lock className="w-3.5 h-3.5 text-[#173D35]" />
              Data Protection & Privacy
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#242824] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#58645E] mt-2">
              Effective Date: October 15, 2026 • Last Reviewed: October 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-[#242824] space-y-8 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">1. Overview & Commitment</h2>
              <p>
                {siteConfig.brand.legalName} (&quot;HavenCraft&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) values your trust and is committed to protecting the personal information you share with us. This Privacy Policy describes how we collect, use, and protect information when you visit our website (www.havencrafthome.com), request an estimate, or communicate with our project planning team.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">2. Information We Collect</h2>
              <p>
                We only collect information necessary to fulfill your request for home improvement consultations, measurements, and installation services:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-[#58645E]">
                <li><strong>Contact Details:</strong> Full name, telephone number, and email address.</li>
                <li><strong>Project Details:</strong> Type of home renovation (e.g. bathroom, kitchen, windows, doors, flooring), 5-digit ZIP code, physical address for in-home consultation, and optional project notes.</li>
                <li><strong>Attribution Data:</strong> Technical referral parameters (such as source or campaign) to understand how you found our website. We do not attach personal contact details to third-party advertising tracking.</li>
                <li><strong>Technical Data:</strong> Standard server log details including IP address (used for spam defense and rate limiting), browser type, and operating system.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">3. How We Use Your Information</h2>
              <p>Your information is used strictly for legitimate business purposes:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-[#58645E]">
                <li>Scheduling your in-home consultation and laser measurements.</li>
                <li>Contacting you via phone, email, or SMS to discuss project scope and send written estimates.</li>
                <li>Verifying service area coverage and routing local installation teams.</li>
                <li>Maintaining customer service records and administering written workmanship warranties.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">4. Zero Data Sale Pledge</h2>
              <p className="bg-[#F7F6F1] p-4 rounded-xl border border-[#DDE2DF] font-medium text-[#242824]">
                <strong>We do not sell, rent, or trade your personal information.</strong> Unlike lead-generation aggregator directories that auction homeowner information to dozens of contractors, information submitted to HavenCraft stays with HavenCraft.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">5. Communications & Consent (TCPA Compliance)</h2>
              <p>
                When you submit an estimate request, you provide consent for HavenCraft project specialists to contact you regarding your specific inquiry. You are not required to consent to promotional marketing as a condition of receiving an estimate. If you opt into promotional announcements, you may opt out at any time by replying STOP to any text message or clicking unsubscribe in an email.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">6. Data Security & Retention</h2>
              <p>
                We implement industry-standard physical, technical, and administrative safeguards to protect your personal information against unauthorized access, disclosure, or alteration. Inquiries are stored on secure server infrastructure and retained only as long as necessary to fulfill project requirements and warranty obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#173D35]">7. Contacting Us Regarding Your Data</h2>
              <p>
                If you have questions about this Privacy Policy or wish to request the deletion or correction of your information, please contact us at:
              </p>
              <div className="bg-[#F7F6F1] p-5 rounded-2xl border border-[#DDE2DF] text-sm space-y-1">
                <p><strong>{siteConfig.brand.legalName}</strong></p>
                <p>{siteConfig.contact.address.streetAddress}</p>
                <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zipCode}</p>
                <p>Phone: {siteConfig.contact.phoneDisplay}</p>
                <p>Email: {siteConfig.contact.email}</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <EstimateModal />
    </div>
  );
}
