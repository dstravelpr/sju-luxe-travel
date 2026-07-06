import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const POSTS = [
  { slug: "wellness-travel-intentional-luxury", title: "Wellness Travel: Intentional Luxury from Puerto Rico", lang: "en/es", topic: "wellness" },
  { slug: "what-luxury-travel-really-means", title: "What Luxury Travel Really Means", lang: "en", topic: "philosophy" },
  { slug: "do-travel-agents-really-help-save-money", title: "Do Travel Agents Really Help Save Money?", lang: "en", topic: "advisor-value" },
  { slug: "micro-vacaciones-futuro-del-viaje", title: "Micro-vacaciones: el futuro del viaje", lang: "es", topic: "trends" },
  { slug: "river-cruising-new-generation", title: "River Cruising: A New Generation", lang: "en", topic: "cruises" },
  { slug: "luna-de-miel-puerto-rico-2026", title: "Luna de miel desde Puerto Rico 2026", lang: "es", topic: "honeymoon" },
  { slug: "cruceros-fluviales-ama-vs-avalon-vs-riverside", title: "Cruceros fluviales: AmaWaterways vs Avalon vs Riverside", lang: "es", topic: "cruises" },
  { slug: "vale-la-pena-asesor-viajes-2026", title: "¿Vale la pena un asesor de viajes en 2026?", lang: "es", topic: "advisor-value" },
  { slug: "vuelos-puerto-rico-portugal", title: "Vuelos Puerto Rico → Portugal", lang: "es", topic: "flights" },
  { slug: "maldivas-desde-puerto-rico-guia", title: "Maldivas desde Puerto Rico: guía completa", lang: "es", topic: "destinations" },
  { slug: "servicios-concierge-viaje", title: "Servicios de concierge de viaje", lang: "es", topic: "concierge" },
  { slug: "viajes-sin-pasaporte-desde-pr", title: "Viajes sin pasaporte desde Puerto Rico", lang: "es", topic: "destinations" },
  { slug: "luxury-solo-female-travel", title: "Luxury Solo Female Travel", lang: "en", topic: "solo-travel" },
];

const BASE = "https://www.sjuluxetravel.com/blog/";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description: "Return the published SJU Luxe Travel blog posts with title, slug, language, topic, and full URL. Optional topic filter.",
  inputSchema: {
    topic: z.string().optional().describe("Optional topic filter (e.g. wellness, cruises, honeymoon)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ topic }) => {
    const filtered = topic ? POSTS.filter((p) => p.topic === topic.toLowerCase()) : POSTS;
    const rows = filtered.map((p) => ({ ...p, url: BASE + p.slug }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { posts: rows },
    };
  },
});
