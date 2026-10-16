import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import FinalConversionCta from "@/components/FinalConversionCta";
import { siteConfig } from "@/config/siteConfig";
import { Clock, ChevronRight, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeowner Resources & Remodeling Advice",
  description:
    "Expert articles and practical guides on bathroom planning, kitchen remodeling costs, replacement windows, contractor questions, and installation preparation.",
  alternates: {
    canonical: "https://www.havencrafthome.com/resources",
  },
};

export default function ResourcesHubPage() {
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
              <span className="text-[#173D35]">Resources</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider mb-4">
                <BookOpen className="w-4 h-4 text-[#173D35]" />
                Homeowner Learning Hub
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242824] tracking-tight leading-tight">
                Make a More Informed Home Improvement Decision
              </h1>
              <p className="text-base sm:text-lg text-[#58645E] mt-4 leading-relaxed">
                Objective, practical guides created to help homeowners plan home renovations, understand realistic cost factors, and hire contractors with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.resources.map((article) => (
                <article
                  key={article.slug}
                  className="bg-[#F7F6F1] rounded-3xl overflow-hidden border border-[#DDE2DF] hover:border-[#173D35]/50 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col group"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-gray-200">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#173D35] text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-[#58645E] mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#173D35]" />
                          {article.readTime}
                        </span>
                        <span>•</span>
                        <span>{article.publishedDate}</span>
                      </div>

                      <h2 className="text-lg font-bold text-[#242824] group-hover:text-[#173D35] transition-colors leading-snug mb-2">
                        <Link href={`/resources/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-[#58645E] line-clamp-3 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#DDE2DF] flex items-center justify-between text-xs font-bold text-[#173D35]">
                      <Link href={`/resources/${article.slug}`} className="hover:underline flex items-center gap-1">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/services/${article.relatedServiceSlug}`}
                        className="text-[11px] text-[#58645E] hover:text-[#173D35]"
                      >
                        Related Service →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
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
