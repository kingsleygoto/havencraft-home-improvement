import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import EstimateForm from "@/components/EstimateForm";
import FinalConversionCta from "@/components/FinalConversionCta";
import { siteConfig } from "@/config/siteConfig";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  ArrowRight,
  DollarSign,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.services.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = siteConfig.services.find((s) => s.slug === slug);
  if (!svc) return { title: "Service Not Found" };

  return {
    title: `${svc.name} Contractor | HavenCraft`,
    description: svc.metaDescription,
    alternates: {
      canonical: `https://www.havencrafthome.com/services/${svc.slug}`,
    },
    openGraph: {
      title: `${svc.name} | HavenCraft Home Improvement`,
      description: svc.metaDescription,
      images: [{ url: svc.imageUrl }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services
  const otherServices = siteConfig.services.filter((s) => s.slug !== slug);

  // Schema.org Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.brand.name,
      telephone: siteConfig.contact.phoneDisplay,
      url: "https://www.havencrafthome.com",
    },
    areaServed: siteConfig.serviceAreas.regionName,
    description: service.shortDescription,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <main className="flex-1">
        {/* Service Hero */}
        <section className="bg-[#F7F6F1] py-12 lg:py-16 border-b border-[#DDE2DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#58645E] mb-6">
              <Link href="/" className="hover:text-[#173D35]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/services" className="hover:text-[#173D35]">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#173D35]">{service.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#173D35]" />
                  Dedicated Installation Specialty
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242824] tracking-tight leading-tight">
                  {service.heroHeadline}
                </h1>

                <p className="text-base sm:text-lg text-[#58645E] leading-relaxed">
                  {service.heroSubheadline}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#58645E]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#173D35]" />
                    In-Home Measurement Included
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#173D35]" />
                    Factory-Certified Installers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#173D35]" />
                    Written Scope Guarantee
                  </span>
                </div>
              </div>

              {/* In-Page Prefilled Estimate Form */}
              <div className="lg:col-span-5">
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DDE2DF] shadow-lg">
                  <span className="text-xs font-bold text-[#173D35] uppercase tracking-wider block mb-1">
                    Free In-Home Consultation
                  </span>
                  <h2 className="text-xl font-bold text-[#242824] mb-3">
                    Estimate for {service.name}
                  </h2>
                  <EstimateForm
                    initialProjectType={service.name}
                    sourcePage={`service_${service.slug}`}
                    className="p-0 shadow-none border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Content Grid */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#DDE2DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Column */}
              <div className="lg:col-span-8 space-y-14">
                {/* 1. What This Service Solves */}
                <section>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#173D35] block mb-2">
                    Common Frustrations Solved
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#242824] mb-4">
                    Why Homeowners Upgrade Their {service.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {service.commonProblems.map((prob, i) => (
                      <div
                        key={i}
                        className="p-4 bg-[#F7F6F1] rounded-2xl border border-[#DDE2DF] flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#242824] leading-relaxed">{prob}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 2. What We Provide */}
                <section>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#173D35] block mb-2">
                    Scope & Workmanship
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#242824] mb-4">
                    What Our {service.name} Service Includes
                  </h2>
                  <div className="space-y-3 mt-6">
                    {service.whatWeProvide.map((prov, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl border border-[#DDE2DF] flex items-start gap-3 hover:bg-[#F7F6F1] transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#173D35] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#242824] font-medium leading-relaxed">
                          {prov}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 3. Cost Factors */}
                <section>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#173D35] block mb-2">
                    Investment Transparency
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#242824] mb-4">
                    Key Factors That Affect {service.name} Cost
                  </h2>
                  <p className="text-sm text-[#58645E] mb-6 leading-relaxed">
                    Rather than offering arbitrary quotes over the phone that balloon upon arrival, we evaluate your actual room dimensions and existing conditions to provide a clear, itemized proposal.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.costFactors.map((factor, i) => (
                      <div key={i} className="p-4 bg-[#F7F6F1] rounded-2xl border border-[#DDE2DF]">
                        <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#173D35]">
                          <DollarSign className="w-4 h-4" />
                          <span>Factor {i + 1}</span>
                        </div>
                        <p className="text-sm text-[#242824] font-medium">{factor}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 4. Step-by-Step Installation Process */}
                <section>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#173D35] block mb-2">
                    Predictable Timeline
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#242824] mb-6">
                    Our {service.name} Process
                  </h2>
                  <div className="space-y-4">
                    {service.processSteps.map((step, i) => (
                      <div
                        key={i}
                        className="p-5 bg-white rounded-2xl border border-[#DDE2DF] flex items-start gap-4 shadow-xs"
                      >
                        <span className="w-8 h-8 rounded-full bg-[#173D35] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-[#242824] mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm text-[#58645E] leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 5. Direct FAQs for this Service */}
                <section>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#173D35] block mb-2">
                    Expert Answers
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#242824] mb-6">
                    Frequently Asked Questions About {service.name}
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="p-5 bg-[#F7F6F1] rounded-2xl border border-[#DDE2DF]">
                        <h3 className="text-base font-bold text-[#242824] mb-2 flex items-start gap-2">
                          <HelpCircle className="w-5 h-5 text-[#173D35] flex-shrink-0 mt-0.5" />
                          <span>{faq.q}</span>
                        </h3>
                        <p className="text-sm text-[#58645E] pl-7 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar: Cross-links & Contractor Questions */}
              <div className="lg:col-span-4 space-y-8">
                {/* Contractor Hiring Advice Box */}
                <div className="bg-[#173D35] text-white p-6 sm:p-7 rounded-3xl shadow-sm">
                  <h3 className="text-lg font-bold text-[#F3D8A0] mb-3">
                    Questions to Ask Any {service.name} Contractor
                  </h3>
                  <ul className="space-y-3 text-xs text-[#F7F6F1]/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F3D8A0] flex-shrink-0 mt-0.5" />
                      <span>Are installers company-certified or random day labor?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F3D8A0] flex-shrink-0 mt-0.5" />
                      <span>Do you carry both general liability and workers&apos; compensation?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F3D8A0] flex-shrink-0 mt-0.5" />
                      <span>What specific moisture barrier/waterproofing system is used?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F3D8A0] flex-shrink-0 mt-0.5" />
                      <span>Is there a written installation warranty in addition to the product warranty?</span>
                    </li>
                  </ul>
                  <div className="mt-5 pt-4 border-t border-[#235449] text-xs text-[#F3D8A0]">
                    HavenCraft provides affirmative proof for each item above.
                  </div>
                </div>

                {/* Related Services Navigation */}
                <div className="bg-[#F7F6F1] p-6 rounded-3xl border border-[#DDE2DF]">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#242824] mb-4">
                    Other HavenCraft Services
                  </h3>
                  <div className="space-y-2">
                    {otherServices.map((other) => (
                      <Link
                        key={other.id}
                        href={`/services/${other.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-[#173D35] hover:text-white text-[#242824] text-xs font-bold transition-colors border border-[#DDE2DF]"
                      >
                        <span>{other.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Direct Phone Assistance */}
                <div className="p-6 bg-white rounded-3xl border border-[#DDE2DF] text-center space-y-2">
                  <p className="text-xs uppercase font-bold text-[#58645E]">Speak with a Planner</p>
                  <p className="text-lg font-bold text-[#173D35]">{siteConfig.contact.phoneDisplay}</p>
                  <p className="text-xs text-[#58645E]">Monday–Friday, 8am–7pm EST</p>
                </div>
              </div>
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
