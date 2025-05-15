import SplitHeroSection from "@/components/SplitHeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useLanguageRoute } from "@/hooks/use-language-route";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Home() {
  // This hook will automatically update the language based on the URL param
  const { currentLanguage, isRTL } = useLanguageRoute();
  const { t } = useTranslation();
  
  // Set page title based on language
  useEffect(() => {
    document.title = t('navbar.home') + ' | ' + 'Erfan Asadi';
  }, [currentLanguage, t]);
  
  return (
    <>
      <div id="home">
        <SplitHeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <PublicationsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
}
