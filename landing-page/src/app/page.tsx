import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhySection from "@/components/WhySection";
import TransformationSection from "@/components/TransformationSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import ModulesSection from "@/components/ModulesSection";
import BonusesSection from "@/components/BonusesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#070b14" }}>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhySection />
      <TransformationSection />
      <WhoIsItForSection />
      <ModulesSection />
      <BonusesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingElements />
    </main>
  );
}
