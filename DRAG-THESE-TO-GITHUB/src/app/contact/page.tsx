import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import EstimateForm from "@/components/EstimateForm";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Schedule an Estimate",
  description:
    "Contact HavenCraft Home Improvement. Call (800) 555-0199 or submit an online inquiry to schedule a free in-home consultation.",
  alternates: {
    canonical: "https://www.havencrafthome.com/contact",
  },
};

export default function ContactPage() {
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
              <span className="text-[#173D35]">Contact</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-[#173D35]" />
                Direct Communication
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242824] tracking-tight leading-tight">
                Connect With Our Project Team
              </h1>
              <p className="text-base sm:text-lg text-[#58645E] mt-4 leading-relaxed">
                Whether you have questions about bathroom conversions, kitchen layouts, or energy-efficient windows, we are ready to help. Submit your project details below or call our desk directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Form Column */}
              <div className="lg:col-span-7">
                <div className="bg-[#F7F6F1] p-6 sm:p-10 rounded-3xl border border-[#DDE2DF] shadow-xs">
                  <h2 className="text-2xl font-bold text-[#242824] mb-2">
                    Request Your Free Project Estimate
                  </h2>
                  <p className="text-sm text-[#58645E] mb-6">
                    Fill out our straightforward request form. We will review your scope and get in touch within one business day.
                  </p>
                  <EstimateForm sourcePage="contact_page" />
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-5 space-y-6">
                {/* Direct Calling */}
                <div className="bg-[#173D35] text-white p-7 rounded-3xl shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3D8A0] text-[#173D35] flex items-center justify-center font-bold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F7F6F1]">Call Our Planning Desk</h3>
                    <p className="text-xs text-[#F7F6F1]/80 mt-1">
                      Speak directly with a HavenCraft project coordinator.
                    </p>
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="block text-2xl font-black text-[#F3D8A0] hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#F7F6F1]/70 border-t border-[#235449] pt-3">
                    Fast phone response during standard business hours.
                  </p>
                </div>

                {/* Email & Office Hub */}
                <div className="bg-[#F7F6F1] p-7 rounded-3xl border border-[#DDE2DF] space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#173D35] flex-shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#58645E] uppercase tracking-wider">Email Inquiry</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-bold text-[#242824] hover:text-[#173D35]">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#173D35] flex-shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#58645E] uppercase tracking-wider">Operations Center</p>
                      <p className="text-sm font-bold text-[#242824]">
                        {siteConfig.contact.address.streetAddress}
                      </p>
                      <p className="text-xs text-[#58645E]">
                        {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zipCode}
                      </p>
                      <p className="text-[11px] text-[#58645E] mt-1 italic">
                        {siteConfig.contact.address.displayNote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#173D35] flex-shrink-0 shadow-xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#58645E] uppercase tracking-wider">Business Hours</p>
                      <div className="text-xs text-[#242824] space-y-0.5 mt-1">
                        {siteConfig.contact.businessHours.map((h, i) => (
                          <p key={i}>
                            <strong>{h.days}:</strong> {h.hours}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EstimateModal />
    </div>
  );
}
