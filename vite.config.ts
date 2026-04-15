import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap";

const routes = [
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
      changefreq: {
        "/": "weekly",
        "/about": "monthly",
        "/destinations": "monthly",
        "/destinations/maldives": "monthly",
        "/destinations/portugal": "monthly",
        "/destinations/mexico": "monthly",
        "/blog": "weekly",
        "/blog/what-luxury-travel-really-means": "monthly",
        "/blog/do-travel-agents-really-help-save-money": "monthly",
        "/blog/micro-vacaciones-futuro-del-viaje": "monthly",
        "/contact": "monthly",
        "/privacy": "yearly",
        "/terms": "yearly",
        "/viajes-de-lujo-desde-puerto-rico": "monthly",
        "/luna-de-miel-de-lujo": "monthly",
        "/cruceros-de-lujo-desde-san-juan": "monthly",
      } as unknown as string,
      priority: {
        "/": 1.0,
        "/about": 0.8,
        "/destinations": 0.8,
        "/destinations/maldives": 0.8,
        "/destinations/portugal": 0.8,
        "/destinations/mexico": 0.8,
        "/blog": 0.7,
        "/blog/what-luxury-travel-really-means": 0.6,
        "/blog/do-travel-agents-really-help-save-money": 0.6,
        "/blog/micro-vacaciones-futuro-del-viaje": 0.6,
        "/contact": 0.8,
        "/privacy": 0.3,
        "/terms": 0.3,
        "/viajes-de-lujo-desde-puerto-rico": 0.8,
        "/luna-de-miel-de-lujo": 0.8,
        "/cruceros-de-lujo-desde-san-juan": 0.8,
      } as unknown as number,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
