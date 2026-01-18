import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PopularProducts from "@/components/home/PopularProducts";
import StatisticsSection from "@/components/home/StatisticsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BannerSection from "@/components/home/BannerSection";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 space-y-20 text-slate-200">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PopularProducts />
      <StatisticsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BannerSection />
      <Footer />
    </div>
  );
}
