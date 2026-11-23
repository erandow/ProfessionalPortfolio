import { useEffect } from "react";
import { useLanguageRoute } from "@/hooks/use-language-route";
import { useTranslation } from "react-i18next";

import AcademicHeroSection from "@/components/AcademicHeroSection";
import NewsSection from "@/components/NewsSection";
import AboutSection from "@/components/AboutSection";
import ResearchAreasSection from "@/components/ResearchAreasSection";
import PublicationsSection from "@/components/PublicationsSection";
import TeachingSection from "@/components/TeachingSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { currentLanguage } = useLanguageRoute();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Erfan Asadi | AI Researcher & Software Engineer";
  }, [currentLanguage]);

  return (
    <>
      <AcademicHeroSection />
      <NewsSection />
      <AboutSection />
      <ResearchAreasSection />
      <PublicationsSection />
      <TeachingSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ReferencesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
