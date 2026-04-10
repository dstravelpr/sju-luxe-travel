import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Destinations from "./pages/Destinations.tsx";
import Maldives from "./pages/destinations/Maldives.tsx";
import Portugal from "./pages/destinations/Portugal.tsx";
import Mexico from "./pages/destinations/Mexico.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";
import WhatLuxuryTravelMeans from "./pages/blog/WhatLuxuryTravelMeans.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/maldives" element={<Maldives />} />
            <Route path="/destinations/portugal" element={<Portugal />} />
            <Route path="/destinations/mexico" element={<Mexico />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/what-luxury-travel-really-means" element={<WhatLuxuryTravelMeans />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
