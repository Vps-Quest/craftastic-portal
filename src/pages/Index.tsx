import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-foreground/60">
          <p>&copy; 2024 MineCraft Hosting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
