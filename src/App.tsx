import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";

// Eager: only the homepage (LCP-critical)
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Lazy: everything else — one chunk per route
const About = lazy(() => import("./pages/About.tsx"));
const Destinations = lazy(() => import("./pages/Destinations.tsx"));
const Maldives = lazy(() => import("./pages/destinations/Maldives.tsx"));
const Portugal = lazy(() => import("./pages/destinations/Portugal.tsx"));
const Mexico = lazy(() => import("./pages/destinations/Mexico.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const WhatLuxuryTravelMeans = lazy(() => import("./pages/blog/WhatLuxuryTravelMeans.tsx"));
const DoTravelAgentsSaveMoney = lazy(() => import("./pages/blog/DoTravelAgentsSaveMoney.tsx"));
const MicroVacaciones = lazy(() => import("./pages/blog/MicroVacaciones.tsx"));
const WellnessTravel = lazy(() => import("./pages/blog/WellnessTravel.tsx"));
const RiverCruisingNewGeneration = lazy(() => import("./pages/blog/RiverCruisingNewGeneration.tsx"));
const LunaDeMielPuertoRico2026 = lazy(() => import("./pages/blog/LunaDeMielPuertoRico2026.tsx"));
const CrucerosFluvialesComparativa = lazy(() => import("./pages/blog/CrucerosFluvialesComparativa.tsx"));
const ValeLaPenaAsesor2026 = lazy(() => import("./pages/blog/ValeLaPenaAsesor2026.tsx"));
const VuelosPuertoRicoPortugal = lazy(() => import("./pages/blog/VuelosPuertoRicoPortugal.tsx"));
const MaldivasDesdePuertoRico = lazy(() => import("./pages/blog/MaldivasDesdePuertoRico.tsx"));
const ServiciosConciergeViaje = lazy(() => import("./pages/blog/ServiciosConciergeViaje.tsx"));
const ViajesSinPasaporte = lazy(() => import("./pages/blog/ViajesSinPasaporte.tsx"));
const LuxurySoloFemaleTravel = lazy(() => import("./pages/blog/LuxurySoloFemaleTravel.tsx"));
const CruceroFluvialDuero = lazy(() => import("./pages/blog/CruceroFluvialDuero.tsx"));
const ExcursionesLujoSanJuan = lazy(() => import("./pages/blog/ExcursionesLujoSanJuan.tsx"));
const Privacy = lazy(() => import("./pages/Privacy.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const ViajesDeLujo = lazy(() => import("./pages/ViajesDeLujo.tsx"));
const LunaDeMiel = lazy(() => import("./pages/LunaDeMiel.tsx"));
const CrucerosDeLujo = lazy(() => import("./pages/CrucerosDeLujo.tsx"));
const CrucerosFluviales = lazy(() => import("./pages/CrucerosFluviales.tsx"));

const LangRedirect = () => {
  const location = useLocation();
  const match = location.pathname.match(/^\/(en|es)(\/|$)/);
  if (match) {
    try { localStorage.setItem("lang", match[1]); } catch { /* noop */ }
  }
  const canonical = location.pathname.replace(/^\/(en|es)(\/|$)/, "/") || "/";
  return <Navigate to={canonical + location.search + location.hash} replace />;
};

const RedirectBlog = ({ to }: { to: string }) => {
  const location = useLocation();
  return <Navigate to={to + location.search + location.hash} replace />;
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
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                {appRoutes.map((r) => (
                  <Route key={r.path} path={r.path} element={r.element} />
                ))}
                <Route path="/blog/do-travel-agents-really-" element={<RedirectBlog to="/blog/do-travel-agents-really-help-save-money" />} />
                <Route path="/blog/do-travel-agents-really" element={<RedirectBlog to="/blog/do-travel-agents-really-help-save-money" />} />
                <Route path="/en/*" element={<LangRedirect />} />
                <Route path="/es/*" element={<LangRedirect />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
