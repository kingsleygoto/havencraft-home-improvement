import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import FinalConversionCta from "@/components/FinalConversionCta";
import { siteConfig } from "@/config/siteConfig";
import { Clock, ChevronRight, ArrowRight, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.resources.map((res) => ({
    slug: res.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = siteConfig.resources.find((r) => r.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | HavenCraft Resources`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.havencrafthome.com/resources/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: "2026-10-01T08:00:00.000Z",
      images: [{ url: article.imageUrl }],
    },
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = siteConfig.resources.find((r) => r.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedService = siteConfig.services.find(
    (s) => s.slug === article.relatedServiceSlug
  );

  const otherArticles = siteConfig.resources.filter((r) => r.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.imageUrl,
    datePublished: "2026-10-01",
    dateModified: "2026-10-15",
    author: {
      "@type": "Organization",
      name: siteConfig.brand.name,
      url: "https://www.havencrafthome.com",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand.name,
      url: "https://www.havencrafthome.com",
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-[#F7F6F1] py-12 lg:py-16 border-b border-[#DDE2DF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#58645E] mb-6">
              <Link href="/" className="hover:text-[#173D35]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/resources" className="hover:text-[#173D35]">Resources</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#173D35] truncate max-w-xs">{article.category}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173D35]/10 text-[#173D35] text-xs font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-4 h-4 text-[#173D35]" />
              {article.category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242824] tracking-tight leading-tight mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#58645E]">
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-4 h-4 text-[#173D35]" />
                {article.readTime}
              </span>
              <span>•</span>
              <span>Published {article.publishedDate}</span>
              <span>•</span>
              <span>By HavenCraft Editorial Team</span>
            </div>
          </div>
        </section>

        {/* Featured Image & Body */}
        <section className="py-12 lg:py-16 bg-white border-b border-[#DDE2DF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#DDE2DF] mb-12">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Paragraphs */}
            <div className="prose prose-lg max-w-none text-[#242824] space-y-6">
              <p className="text-lg sm:text-xl font-medium text-[#58645E] leading-relaxed border-l-4 border-[#173D35] pl-4 italic">
                {article.excerpt}
              </p>

              {article.content.map((paragraph, idx) => (
                <p key={idx} className="text-base sm:text-lg leading-relaxed text-[#242824]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Contextual Service Callout */}
            {relatedService && (
              <div className="mt-12 p-8 bg-[#F7F6F1] rounded-3xl border border-[#DDE2DF] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#173D35] block mb-1">
                    Ready to Take Action?
                  </span>
                  <h3 className="text-xl font-bold text-[#242824]">
                    Explore Our {relatedService.name} Service
                  </h3>
                  <p className="text-xs sm:text-sm text-[#58645E] mt-1">
                    {relatedService.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/services/${relatedService.slug}`}
                  className="bg-[#173D35] hover:bg-[#102B25] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap min-h-[48px] flex items-center justify-center gap-1.5"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t border-[#DDE2DF]">
              <h3 className="text-xl font-bold text-[#242824] mb-6">
                More Helpful Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherArticles.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/resources/${other.slug}`}
                    className="p-5 rounded-2xl bg-[#F7F6F1] border border-[#DDE2DF] hover:border-[#173D35] transition-colors block group"
                  >
                    <span className="text-xs text-[#173D35] font-bold block mb-1">
                      {other.category}
                    </span>
                    <h4 className="text-base font-bold text-[#242824] group-hover:text-[#173D35] transition-colors mb-2">
                      {other.title}
                    </h4>
                    <span className="text-xs text-[#58645E] flex items-center gap-1 font-semibold">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
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
