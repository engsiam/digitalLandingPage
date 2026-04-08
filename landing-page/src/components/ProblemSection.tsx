"use client";

import { AlertCircle, Frown, HelpCircle, TrendingDown, ZapOff } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import PremiumCard from "./ui/PremiumCard";

const PAIN_POINTS = [
  {
    title: "Wants to earn but doesn't know where to start",
    description: "You see others making money online but the path feels like a maze. Which skill? Which platform?",
    icon: <HelpCircle size={22} />,
    accent: "purple" as const,
  },
  {
    title: "Watching random tutorials without results",
    description: "YouTube is great, but 100 random videos won't give you a structure. You're stuck in 'tutorial hell'.",
    icon: <Frown size={22} />,
    accent: "pink" as const,
  },
  {
    title: "Has no clear monetizable skill",
    description: "You're willing to work hard, but you don't have a specific high-value skill that clients actually pay for.",
    icon: <ZapOff size={22} />,
    accent: "amber" as const,
  },
  {
    title: "Feels behind while others make money",
    description: "Every scroll on social media shows someone winning. It feels like you're missing out on the digital gold rush.",
    icon: <TrendingDown size={22} />,
    accent: "cyan" as const,
  },
  {
    title: "Thinks freelancing is too confusing",
    description: "Proposals, clients, payments, portfolios - it all feels too complicated to handle as a beginner.",
    icon: <AlertCircle size={22} />,
    accent: "purple" as const,
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper 
      id="problem" 
      badge="The Reality"
      title="Feeling Confused About Earning Online?"
      subtitle="The digital world is full of opportunities, yet most university students are stuck because they lack a clear roadmap."
      withOrb
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PAIN_POINTS.map((point, index) => (
          <PremiumCard
            key={index}
            title={point.title}
            description={point.description}
            icon={point.icon}
            accent={point.accent}
            delay={index * 0.1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
