import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SplitHeroSection() {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  // Images for both sides (same but with different treatments)
  const leftSideImage = "/images/hero-left.jpg";
  const rightSideImage = "/images/hero-right.jpg";
  
  return (
    <section className="h-screen w-full relative overflow-hidden">
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
              className="w-full h-full bg-cover bg-center transition-all duration-700"
              style={{ 
                backgroundImage: `url(${leftSideImage})`,
                filter: "hue-rotate(340deg) contrast(1.05) brightness(0.7)",
              }}
            />
          </div>
          
          {/* Overlay for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-90 pointer-events-none z-10" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center z-20 pointer-events-none">
            <div className="text-white p-10 md:p-16 max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-3">Developer</h2>
                <div className="w-16 h-1 bg-white mb-6" />
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Crafting web & mobile applications with passion and precision.
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black pointer-events-auto"
                  onClick={() => window.location.href="#experience"}
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
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
              className="w-full h-full bg-cover bg-center transition-all duration-700"
              style={{ 
                backgroundImage: `url(${rightSideImage})`,
                filter: "hue-rotate(180deg) contrast(1.05) brightness(0.7)",
              }}
            />
          </div>
          
          {/* Overlay for text */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent opacity-90 pointer-events-none z-10" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-end z-20 pointer-events-none">
            <div className="text-white p-10 md:p-16 max-w-md text-right">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-3">Academic</h2>
                <div className="w-16 h-1 bg-white mb-6 ml-auto" />
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Pioneering research and publications in AI and computer science.
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black pointer-events-auto"
                  onClick={() => window.location.href="#experience"}
                >
                  View Research <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center logo or divider */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 rounded-full bg-white/10 backdrop-blur-lg p-4 border border-white/30"
        animate={{
          scale: leftHovered || rightHovered ? 0.9 : 1,
          opacity: leftHovered || rightHovered ? 0.8 : 1
        }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-white text-xl font-bold tracking-tight">
          <span className="text-primary px-2">EA</span>
          <span className="text-purple-500">.</span>
          <span className="text-primary px-2">dev</span>
        </span>
      </motion.div>
    </section>
  );
}