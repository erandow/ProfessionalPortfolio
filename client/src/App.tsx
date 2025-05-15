import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

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
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                {/* Redirect root to preferred language */}
                <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
                
                {/* Language-specific routes */}
                <Route path="/:lang">
                  <Route index element={<Home />} />
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
