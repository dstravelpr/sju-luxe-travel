import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/supabase/vite";

const spanishRoutes = [
  "/about",
  "/destinations",
  "/destinations/maldives",
  "/destinations/portugal",
  "/destinations/mexico",
  "/blog",
  "/blog/what-luxury-travel-really-means",
  "/blog/do-travel-agents-really-help-save-money",
  "/blog/micro-vacaciones-futuro-del-viaje",
  "/blog/river-cruising-new-generation",
  "/blog/luna-de-miel-puerto-rico-2026",
  "/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside",
  "/blog/vale-la-pena-asesor-viajes-2026",
  "/blog/vuelos-puerto-rico-portugal",
  "/blog/maldivas-desde-puerto-rico-guia",
  "/blog/servicios-concierge-viaje",
  "/blog/viajes-sin-pasaporte-desde-pr",
  "/blog/luxury-solo-female-travel",
  "/blog/wellness-travel-intentional-luxury",
  "/contact",
  "/privacy",
  "/terms",
  "/viajes-de-lujo-desde-puerto-rico",
  "/luna-de-miel-de-lujo",
  "/cruceros-de-lujo-desde-san-juan",
  "/cruceros-fluviales-de-lujo-desde-puerto-rico",
];

// Canonical URLs only. Do NOT include /en/* or /es/* — those redirect to the
// canonical path via LangRedirect and would show up in GSC as "Page with redirect".
const routes = ["/", ...spanishRoutes];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    Sitemap({
      hostname: "https://www.sjuluxetravel.com",
      dynamicRoutes: routes,
      readable: true,
    }),
    mcpPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
