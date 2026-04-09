import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhySection from "@/components/WhySection";
import TransformationSection from "@/components/TransformationSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import SuccessStories from "@/components/SuccessStories";
import ModulesSection from "@/components/ModulesSection";
import BonusesSection from "@/components/BonusesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import SecondaryConversion from "@/components/SecondaryConversion";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03060b] selection:bg-violet-500/30">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhySection />
      <TransformationSection />
      <WhoIsItForSection />
      <SuccessStories />
      <ModulesSection />
      <BonusesSection />
      <PricingSection />
      <FAQSection />
      <SecondaryConversion />
      <FinalCTASection />
      <Footer />
      <FloatingElements />
      <MobileStickyCTA />
    </main>
  );
}
