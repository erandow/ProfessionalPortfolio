import { useState, useEffect } from "react";
import { useLanguageRoute } from "@/hooks/use-language-route";

import IndustryHeroSection from "@/components/IndustryHeroSection";
import AgentWorkflowSandbox from "@/components/interactive/AgentWorkflowSandbox";
import ScaleArchitectureSimulator from "@/components/interactive/ScaleArchitectureSimulator";
import IndustryExperienceSection from "@/components/IndustryExperienceSection";
import IndustrySkillsSection from "@/components/IndustrySkillsSection";
import IndustryProjectsSection from "@/components/IndustryProjectsSection";
import ReactTypeWriterDemo from "@/components/interactive/ReactTypeWriterDemo";
import CertificationsSection from "@/components/CertificationsSection";
import IndustryTestimonialsSection from "@/components/IndustryTestimonialsSection";
import IndustryContactSection from "@/components/IndustryContactSection";
import InteractiveTerminal from "@/components/interactive/InteractiveTerminal";
import IndustryResumeModal from "@/components/IndustryResumeModal";
import Footer from "@/components/Footer";

export default function CareerPage() {
  const { currentLanguage } = useLanguageRoute();
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Erfan Asadi | Senior AI Engineer & Full-Stack Tech Lead";
  }, [currentLanguage]);

  return (
    <>
      {/* 1. Hero with Neural Ambient Canvas */}
      <IndustryHeroSection />

      {/* 2. Interactive Multi-Agent Workflow Playground */}
      <AgentWorkflowSandbox />

      {/* 3. 500k-User Concurrency Architecture Simulator */}
      <ScaleArchitectureSimulator />

      {/* 4. Production Engineering Case Studies */}
      <IndustryExperienceSection />

      {/* 5. 4-Pillar Technology Stack */}
      <IndustrySkillsSection />

      {/* 6. Shipped Products & Code */}
      <IndustryProjectsSection />

      {/* 7. Live NPM Package Interactive Playground */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ReactTypeWriterDemo />
      </div>

      {/* 8. Verified Professional Certifications */}
      <CertificationsSection />

      {/* 9. Professional Endorsements */}
      <IndustryTestimonialsSection />

      {/* 10. Direct Hiring & Engagement */}
      <IndustryContactSection />

      {/* 11. Interactive Floating Developer Terminal */}
      <InteractiveTerminal onOpenResume={() => setResumeModalOpen(true)} />

      {/* Resume Modal triggerable by CLI */}
      <IndustryResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />

      {/* Footer */}
      <Footer />
    </>
  );
}
