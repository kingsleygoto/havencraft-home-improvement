import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickProjectSelector from "@/components/QuickProjectSelector";
import TrustSection from "@/components/TrustSection";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsOrCommitments from "@/components/TestimonialsOrCommitments";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import HelpfulResources from "@/components/HelpfulResources";
import FaqAccordion from "@/components/FaqAccordion";
import FinalConversionCta from "@/components/FinalConversionCta";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* A & B: Announcement Bar + Main Navigation */}
      <Header />

      <main className="flex-1">
        {/* C: Hero section */}
        <HeroSection />

        {/* D: Quick project selector */}
        <QuickProjectSelector />

        {/* E: Trust and reassurance section */}
        <TrustSection />

        {/* F: Services section */}
        <ServicesGrid />

        {/* G: Before and after project gallery */}
        <BeforeAfterGallery />

        {/* H: How the process works */}
        <ProcessTimeline />

        {/* I: Why choose us section */}
        <WhyChooseUs />

        {/* J: Reviews and testimonials */}
        <TestimonialsOrCommitments />

        {/* K: Local service area and Google Maps */}
        <ServiceAreaSection />

        {/* L: Helpful resources */}
        <HelpfulResources />

        {/* M: Frequently asked questions */}
        <FaqAccordion />

        {/* N: Final conversion section */}
        <FinalConversionCta />
      </main>

      {/* O: Footer */}
      <Footer />

      {/* Global Interactive Estimate Modal */}
      <EstimateModal />
    </div>
  );
}
