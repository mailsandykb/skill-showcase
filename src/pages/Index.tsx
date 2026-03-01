import HeroSection from "@/components/HeroSection";
import ExpertiseCards from "@/components/ExpertiseCards";
import RecognitionsSection from "@/components/RecognitionsSection";
import CitationsSection from "@/components/CitationsSection";
import BeyondWorkSection from "@/components/BeyondWorkSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <ExpertiseCards />
      <div className="section-divider mx-auto max-w-4xl" />
      <RecognitionsSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <CitationsSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <BeyondWorkSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <EducationSection />

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-16 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Sandesh Balakrishna. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
