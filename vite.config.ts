import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap";

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
  "/contact",
  "/privacy",
  "/terms",
  "/viajes-de-lujo-desde-puerto-rico",
  "/luna-de-miel-de-lujo",
  "/cruceros-de-lujo-desde-san-juan",
  "/cruceros-fluviales-de-lujo-desde-puerto-rico",
];

const englishRoutes = [
  "/en",
  ...spanishRoutes.map((r) => `/en${r}`),
];

const routes = [...spanishRoutes, ...englishRoutes];

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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
