import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import AllFeaturesSection from "@/components/AllFeaturesSection";
import FunctionsSection from "@/components/FunctionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { usePageSeo } from "@/hooks/usePageSeo";
import { SEO } from "@/lib/seo";

const Index = () => {
  usePageSeo({
    title: SEO.homeTitle,
    description: SEO.homeDescription,
    path: "/",
    imagePath: SEO.defaultOgImage,
  });

  return (
    <div className="min-h-screen bg-background relative">
      <SeoJsonLd />
      <ParticlesBackground />
      <Navbar />
      <main id="conteudo-principal">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <AllFeaturesSection />
        <FunctionsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
