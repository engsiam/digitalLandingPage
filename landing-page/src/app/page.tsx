import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhySection from "@/components/WhySection";
import ModulesSection from "@/components/ModulesSection";
import BonusesSection from "@/components/BonusesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#070b14" }}>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhySection />
      <ModulesSection />
      <BonusesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
