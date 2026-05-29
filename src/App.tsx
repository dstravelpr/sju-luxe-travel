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
import MicroVacaciones from "./pages/blog/MicroVacaciones.tsx";
import WellnessTravel from "./pages/blog/WellnessTravel.tsx";
import RiverCruisingNewGeneration from "./pages/blog/RiverCruisingNewGeneration.tsx";
import LunaDeMielPuertoRico2026 from "./pages/blog/LunaDeMielPuertoRico2026.tsx";
import CrucerosFluvialesComparativa from "./pages/blog/CrucerosFluvialesComparativa.tsx";
import ValeLaPenaAsesor2026 from "./pages/blog/ValeLaPenaAsesor2026.tsx";
import VuelosPuertoRicoPortugal from "./pages/blog/VuelosPuertoRicoPortugal.tsx";
import MaldivasDesdePuertoRico from "./pages/blog/MaldivasDesdePuertoRico.tsx";
import ServiciosConciergeViaje from "./pages/blog/ServiciosConciergeViaje.tsx";
import ViajesSinPasaporte from "./pages/blog/ViajesSinPasaporte.tsx";
import LuxurySoloFemaleTravel from "./pages/blog/LuxurySoloFemaleTravel.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import ViajesDeLujo from "./pages/ViajesDeLujo.tsx";
import LunaDeMiel from "./pages/LunaDeMiel.tsx";
import CrucerosDeLujo from "./pages/CrucerosDeLujo.tsx";
import CrucerosFluviales from "./pages/CrucerosFluviales.tsx";
import NotFound from "./pages/NotFound.tsx";
import { Navigate, useLocation } from "react-router-dom";

/** Persist language from URL prefix, then redirect to canonical path */
const LangRedirect = () => {
  const location = useLocation();
  const match = location.pathname.match(/^\/(en|es)(\/|$)/);
  if (match) {
    try { localStorage.setItem("lang", match[1]); } catch {}
  }
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
  { path: "/blog/micro-vacaciones-futuro-del-viaje", element: <MicroVacaciones /> },
  { path: "/blog/wellness-travel-intentional-luxury", element: <WellnessTravel /> },
  { path: "/blog/river-cruising-new-generation", element: <RiverCruisingNewGeneration /> },
  { path: "/blog/luna-de-miel-puerto-rico-2026", element: <LunaDeMielPuertoRico2026 /> },
  { path: "/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside", element: <CrucerosFluvialesComparativa /> },
  { path: "/blog/vale-la-pena-asesor-viajes-2026", element: <ValeLaPenaAsesor2026 /> },
  { path: "/blog/vuelos-puerto-rico-portugal", element: <VuelosPuertoRicoPortugal /> },
  { path: "/blog/maldivas-desde-puerto-rico-guia", element: <MaldivasDesdePuertoRico /> },
  { path: "/blog/servicios-concierge-viaje", element: <ServiciosConciergeViaje /> },
  { path: "/blog/viajes-sin-pasaporte-desde-pr", element: <ViajesSinPasaporte /> },
  { path: "/blog/luxury-solo-female-travel", element: <LuxurySoloFemaleTravel /> },
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
