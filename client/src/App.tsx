import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Navbar from "@/components/Navbar";
import CareerPage from "@/pages/CareerPage";
import AcademicPage from "@/pages/AcademicPage";
import NotFound from "@/pages/not-found";
import React from "react";

const ResearchPage = React.lazy(() => import("@/pages/academic/ResearchPage"));
const PublicationsPage = React.lazy(() => import("@/pages/academic/PublicationsPage"));
const AboutPage = React.lazy(() => import("@/pages/academic/AboutPage"));
const CVPage = React.lazy(() => import("@/pages/academic/CVPage"));
const LcbvqaProjectPage = React.lazy(() => import("@/pages/academic/projects/LcbvqaProjectPage"));

function App() {
  const { i18n } = useTranslation();
  
  // Set document direction based on language
  useEffect(() => {
    const direction = i18n.dir();
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
    
    // Add RTL class for easier styling
    if (direction === "rtl") {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [i18n.language]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                {/* Redirect root to preferred language */}
                <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
                
                {/* Language-specific routes */}
                <Route path="/:lang">
                  {/* Default page is Job Positions as requested */}
                  <Route index element={<CareerPage />} />
                  <Route path="career" element={<CareerPage />} />
                  <Route path="academic">
                    <Route index element={<AcademicPage />} />
                    <Route path="research" element={<React.Suspense fallback={<div className="min-h-screen bg-academic-bg" />}><ResearchPage /></React.Suspense>} />
                    <Route path="publications" element={<React.Suspense fallback={<div className="min-h-screen bg-academic-bg" />}><PublicationsPage /></React.Suspense>} />
                    <Route path="about" element={<React.Suspense fallback={<div className="min-h-screen bg-academic-bg" />}><AboutPage /></React.Suspense>} />
                    <Route path="cv" element={<React.Suspense fallback={<div className="min-h-screen bg-academic-bg" />}><CVPage /></React.Suspense>} />
                    <Route path="projects/lcbvqa" element={<React.Suspense fallback={<div className="min-h-screen bg-academic-bg" />}><LcbvqaProjectPage /></React.Suspense>} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </main>
          </div>
          <Toaster />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
