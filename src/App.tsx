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
import { Navigate, useLocation } from "react-router-dom";

/** 301-style redirect: strip /en or /es prefix and navigate to canonical path */
const LangRedirect = () => {
  const location = useLocation();
  const canonical = location.pathname.replace(/^\/(en|es)(\/|$)/, "/") || "/";
  return <Navigate to={canonical + location.search + location.hash} replace />;
};

const queryClient = new QueryClient();

const appRoutes = [
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/destinations", element: <Destinations /> },
  { path: "/destinations/maldives", element: <Maldives /> },
  { path: "/destinations/portugal", element: <Portugal /> },
  { path: "/destinations/mexico", element: <Mexico /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/what-luxury-travel-really-means", element: <WhatLuxuryTravelMeans /> },
  { path: "/blog/do-travel-agents-really-help-save-money", element: <DoTravelAgentsSaveMoney /> },
  { path: "/contact", element: <Contact /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/viajes-de-lujo-desde-puerto-rico", element: <ViajesDeLujo /> },
  { path: "/luna-de-miel-de-lujo", element: <LunaDeMiel /> },
  { path: "/cruceros-de-lujo-desde-san-juan", element: <CrucerosDeLujo /> },
  { path: "/cruceros-fluviales-de-lujo-desde-puerto-rico", element: <CrucerosFluviales /> },
];

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Spanish (default) routes */}
            {appRoutes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            {/* Redirect /en/* and /es/* to canonical non-prefixed URLs */}
            <Route path="/en/*" element={<LangRedirect />} />
            <Route path="/es/*" element={<LangRedirect />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
