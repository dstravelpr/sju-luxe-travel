import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const DESTINATIONS = [
  { slug: "maldives", name: "Maldives", summary: "Overwater villas, private-island wellness, seaplane transfers from Malé.", url: "https://www.sjuluxetravel.com/destinations/maldives" },
  { slug: "portugal", name: "Portugal", summary: "Lisbon, Douro Valley, Alentejo — quintas, wine, historic pousadas.", url: "https://www.sjuluxetravel.com/destinations/portugal" },
  { slug: "mexico", name: "Mexico", summary: "Riviera Maya, Yucatán, Los Cabos — Chablé, Rosewood, One&Only.", url: "https://www.sjuluxetravel.com/destinations/mexico" },
];

export default defineTool({
  name: "list_destinations",
  title: "List destinations",
  description: "Return SJU Luxe Travel's featured luxury destinations with a short summary and canonical URL.",
  inputSchema: {
    slug: z.string().optional().describe("Optional single destination slug (maldives | portugal | mexico)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const rows = slug ? DESTINATIONS.filter((d) => d.slug === slug.toLowerCase()) : DESTINATIONS;
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { destinations: rows },
    };
  },
});
