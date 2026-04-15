import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import DoTravelAgentsSaveMoney from "./pages/blog/DoTravelAgentsSaveMoney.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import ViajesDeLujo from "./pages/ViajesDeLujo.tsx";
import LunaDeMiel from "./pages/LunaDeMiel.tsx";
import CrucerosDeLujo from "./pages/CrucerosDeLujo.tsx";
import CrucerosFluviales from "./pages/CrucerosFluviales.tsx";
import NotFound from "./pages/NotFound.tsx";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
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
            <Route path="/blog/do-travel-agents-really-help-save-money" element={<DoTravelAgentsSaveMoney />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/viajes-de-lujo-desde-puerto-rico" element={<ViajesDeLujo />} />
            <Route path="/luna-de-miel-de-lujo" element={<LunaDeMiel />} />
            <Route path="/cruceros-de-lujo-desde-san-juan" element={<CrucerosDeLujo />} />
            <Route path="/cruceros-fluviales-de-lujo-desde-puerto-rico" element={<CrucerosFluviales />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
