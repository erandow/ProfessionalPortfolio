import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SplitHeroSection() {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  return (
    <section className="h-screen w-full flex flex-col md:flex-row overflow-hidden relative">
      {/* Left Side - Developer */}
      <motion.div
        className="h-1/2 md:h-full relative overflow-hidden flex items-center justify-center cursor-pointer"
        animate={{
          flex: leftHovered ? 2 : rightHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onMouseEnter={() => setLeftHovered(true)}
        onMouseLeave={() => setLeftHovered(false)}
        onClick={() => window.location.href = "#experience"}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-500"
            style={{ 
              backgroundImage: "url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1200&q=80)",
              filter: leftHovered ? "brightness(0.7)" : "brightness(0.5)"
            }}
          />
        </div>
        
        <div className="z-10 text-white text-center p-6 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Developer</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Web & Mobile Applications
            </p>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Academic */}
      <motion.div
        className="h-1/2 md:h-full relative overflow-hidden flex items-center justify-center cursor-pointer"
        animate={{
          flex: rightHovered ? 2 : leftHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onMouseEnter={() => setRightHovered(true)}
        onMouseLeave={() => setRightHovered(false)}
        onClick={() => window.location.href = "#experience"}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-500"
            style={{ 
              backgroundImage: "url(https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1200&q=80)",
              filter: rightHovered ? "brightness(0.7)" : "brightness(0.5)"
            }}
          />
        </div>
        
        <div className="z-10 text-white text-center p-6 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Academic</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Research & Publications
            </p>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black"
            >
              View Research <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}