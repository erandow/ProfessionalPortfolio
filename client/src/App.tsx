import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
        <Toaster />
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
