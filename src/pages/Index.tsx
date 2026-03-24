import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import AllFeaturesSection from "@/components/AllFeaturesSection";
import FunctionsSection from "@/components/FunctionsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <AllFeaturesSection />
      <FunctionsSection />
    </div>
  );
};

export default Index;
