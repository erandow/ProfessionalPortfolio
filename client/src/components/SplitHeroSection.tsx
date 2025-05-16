import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";

// Import images directly from the images directory
import leftSideImagePath from "../images/leftSideImage.jpg";
import rightSideImagePath from "../images/rightSideImage.jpg";

export default function SplitHeroSection() {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();

  // Using imported images from the images directory
  const leftSideImage = leftSideImagePath;
  const rightSideImage = rightSideImagePath;

  return (
    <section id="home" className="h-screen w-full relative overflow-hidden">
      {/* Main container for the split effect */}
      <div className="flex h-full w-full">
        {/* Left Side - Developer */}
        <motion.div
          className="relative w-1/2 h-full overflow-hidden cursor-pointer"
          initial={{ width: "50%" }}
          animate={{
            width: leftHovered ? "75%" : rightHovered ? "25%" : "50%",
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
            className={`absolute inset-0 bg-gradient-to-${isRTL ? "l" : "r"} from-black/40 to-transparent opacity-90 pointer-events-none z-10`}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center z-20 pointer-events-none">
            <div className="text-white p-10 md:p-16 max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: rightHovered ? 0.3 : 1, 
                  y: 0 
                }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-3">
                  {t("hero.developer")}
                </h2>
                <div
                  className={`${isRTL ? "ml-auto" : ""} w-16 h-1 bg-white mb-6`}
                />
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {t("hero.developerDesc")}
                </p>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-black pointer-events-auto !border-white !text-black dark:!text-white dark:!border-white"
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
            width: rightHovered ? "75%" : leftHovered ? "25%" : "50%",
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
            className={`absolute inset-0 bg-gradient-to-${isRTL ? "r" : "l"} from-black/40 to-transparent opacity-90 pointer-events-none z-10`}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-end z-20 pointer-events-none">
            <div
              className={`text-white p-10 md:p-16 max-w-md ${isRTL ? "text-left" : "text-right"}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: leftHovered ? 0.3 : 1,
                  y: 0
                }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-3">
                  {t("hero.academic")}
                </h2>
                <div
                  className={`w-16 h-1 bg-white mb-6 ${isRTL ? "" : "ml-auto"}`}
                />
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {t("hero.academicDesc")}
                </p>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-black pointer-events-auto !border-white !text-black dark:!text-white dark:!border-white"
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

      {/* Center logo removed as requested */}
      
      {/* Scroll Down Button */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        <span className="text-white text-sm mb-2 opacity-80">
          {isRTL ? 'اسکرول کنید' : 'Scroll Down'}
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="bg-white/20 backdrop-blur-lg rounded-full p-2 border border-white/20"
        >
          <ChevronDown className="h-5 w-5 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}