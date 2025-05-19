import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";
import { useIsMobile } from "@/hooks/use-mobile";

// Import images directly from the images directory
import leftSideImagePath from "../images/leftSideImage.jpg";
import rightSideImagePath from "../images/rightSideImage.jpg";

export default function SplitHeroSection() {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();
  const isMobile = useIsMobile();

  // Update mobile state based on window width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Using imported images from the images directory
  const leftSideImage = leftSideImagePath;
  const rightSideImage = rightSideImagePath;

  // If mobile view, render a stacked version
  if (isMobileView) {
    return (
      <section id="home" className="min-h-screen w-full relative overflow-hidden">
        {/* Main container for the stacked effect */}
        <div className="flex flex-col h-full w-full">
          {/* Left Side (Top on mobile) - Developer */}
          <div className="relative w-full h-[50vh] overflow-hidden">
            {/* Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${leftSideImage})`,
                filter: "hue-rotate(340deg) contrast(1.05) brightness(0.7)",
              }}
            />
            
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 opacity-90 z-10" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-white p-6 text-center max-w-xs">
                <h2 className="text-3xl font-bold mb-2">
                  {t("hero.developer")}
                </h2>
                <div className="w-16 h-1 bg-white mx-auto mb-4" />
                <p className="text-base mb-6 opacity-90">
                  {t("hero.developerDesc")}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-black hover:bg-white hover:text-black !border-white !text-black dark:!text-white dark:!border-white"
                  onClick={() => {
                    const element = document.getElementById("experience");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  {t("hero.viewProjects")}{" "}
                  <ArrowRight className={`${isRTL ? "mr-2 flip-in-rtl" : "ml-2"} h-4 w-4`} />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side (Bottom on mobile) - AI Engineer */}
          <div className="relative w-full h-[50vh] overflow-hidden">
            {/* Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${rightSideImage})`,
                filter: "hue-rotate(180deg) contrast(1.05) brightness(0.7)",
              }}
            />
            
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/40 opacity-90 z-10" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-white p-6 text-center max-w-xs">
                <h2 className="text-3xl font-bold mb-2">
                  {t("hero.aiEngineer")}
                </h2>
                <div className="w-16 h-1 bg-white mx-auto mb-4" />
                <p className="text-base mb-6 opacity-90">
                  {t("hero.aiEngineerDesc")}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-black hover:bg-white hover:text-black !border-white !text-black dark:!text-white dark:!border-white"
                  onClick={() => {
                    const element = document.getElementById("education");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  {t("hero.viewResearch")}{" "}
                  <ArrowRight className={`${isRTL ? "mr-2 flip-in-rtl" : "ml-2"} h-4 w-4`} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </section>
    );
  }

  // Desktop view with split screen and hover effects
  return (
    <section id="home" className="h-screen w-full relative overflow-hidden">
      {/* Main container for the split effect */}
      <div className="flex h-full w-full">
        {/* Left Side - Developer */}
        <motion.div
          className="relative w-1/2 h-full overflow-hidden cursor-pointer"
          initial={{ width: "50%" }}
          animate={{
            width: leftHovered ? "70%" : rightHovered ? "30%" : "50%",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          onMouseEnter={() => setLeftHovered(true)}
          onMouseLeave={() => setLeftHovered(false)}
        >
          {/* Full-width background with only portion visible */}
          <div className="absolute left-0 top-0 w-[100vw] h-full">
            <div
              className="w-full h-full transform bg-cover bg-center transition-all duration-700"
              style={{
                backgroundImage: `url(${leftSideImage})`,
                filter: "hue-rotate(340deg) contrast(1.05) brightness(0.7)",
              }}
            />
          </div>

          {/* Overlay for text */}
          <div
            className={`absolute inset-0 bg-gradient-to-${isRTL ? "l" : "r"} from-black/50 to-transparent opacity-90 pointer-events-none z-10`}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center z-20 pointer-events-none">
            <div className="text-white p-6 md:p-10 lg:p-16 max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: rightHovered ? 0.4 : 1,
                  y: 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                  {t("hero.developer")}
                </h2>
                <div
                  className={`${isRTL ? "ml-auto" : ""} w-16 h-1 bg-white mb-4 md:mb-6`}
                />
                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90">
                  {t("hero.developerDesc")}
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black pointer-events-auto !border-white !text-white hover:!text-black dark:!text-white dark:!border-white"
                  onClick={() => {
                    const element = document.getElementById("experience");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      window.history.pushState(null, "", "#experience");
                    }
                  }}
                >
                  {t("hero.viewProjects")}{" "}
                  <ArrowRight
                    className={`${isRTL ? "mr-2 flip-in-rtl" : "ml-2"} h-4 w-4`}
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Academic */}
        <motion.div
          className="relative w-1/2 h-full overflow-hidden cursor-pointer"
          initial={{ width: "50%" }}
          animate={{
            width: rightHovered ? "70%" : leftHovered ? "30%" : "50%",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          onMouseEnter={() => setRightHovered(true)}
          onMouseLeave={() => setRightHovered(false)}
        >
          {/* Full-width background with only portion visible */}
          <div className="absolute right-0 top-0 w-[100vw] h-full">
            <div
              className="w-full h-full transform bg-cover bg-center transition-all duration-700"
              style={{
                backgroundImage: `url(${rightSideImage})`,
                filter: "hue-rotate(180deg) contrast(1.05) brightness(0.7)",
              }}
            />
          </div>

          {/* Overlay for text */}
          <div
            className={`absolute inset-0 bg-gradient-to-${isRTL ? "r" : "l"} from-black/50 to-transparent opacity-90 pointer-events-none z-10`}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-end z-20 pointer-events-none">
            <div
              className={`text-white p-6 md:p-10 lg:p-16 max-w-md ${isRTL ? "text-left" : "text-right"}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: leftHovered ? 0.4 : 1,
                  y: 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                  {t("hero.aiEngineer")}
                </h2>
                <div
                  className={`w-16 h-1 bg-white mb-4 md:mb-6 ${isRTL ? "" : "ml-auto"}`}
                />
                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90">
                  {t("hero.aiEngineerDesc")}
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black pointer-events-auto !border-white !text-white hover:!text-black dark:!text-white dark:!border-white"
                  onClick={() => {
                    const element = document.getElementById("education");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      window.history.pushState(null, "", "#education");
                    }
                  }}
                >
                  {t("hero.viewResearch")}{" "}
                  <ArrowRight
                    className={`${isRTL ? "mr-2 flip-in-rtl" : "ml-2"} h-4 w-4`}
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
}
