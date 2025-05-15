import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
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
    <BrowserRouter>
      <TooltipProvider>
        <MainLayout>
          <Routes>
            {/* Redirect root to preferred language */}
            <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
            
            {/* Language-specific routes */}
            <Route path="/:lang">
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </MainLayout>
        <Toaster />
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
