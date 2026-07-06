import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "request_trip_quote",
  title: "Request trip quote",
  description: "Draft a luxury trip inquiry for SJU Luxe Travel. Returns a formatted inquiry summary and the contact URL the traveler should use to send it. Does not submit anything — the traveler must reach out via the contact page, email, or phone.",
  inputSchema: {
    traveler_name: z.string().min(1).describe("Traveler's full name."),
    destination: z.string().min(1).describe("Requested destination or region."),
    travel_dates: z.string().min(1).describe("Approximate travel dates or window."),
    party_size: z.number().int().positive().describe("Number of travelers."),
    budget_usd: z.number().positive().optional().describe("Total budget in USD (optional)."),
    notes: z.string().optional().describe("Style, occasion, preferences, or must-haves."),
  },
  annotations: { readOnlyHint: true, openWorldHint: false },
  handler: (input) => {
    const summary = [
      `Trip inquiry for ${input.traveler_name}`,
      `Destination: ${input.destination}`,
      `Dates: ${input.travel_dates}`,
      `Travelers: ${input.party_size}`,
      input.budget_usd ? `Budget: $${input.budget_usd.toLocaleString()} USD` : null,
      input.notes ? `Notes: ${input.notes}` : null,
    ].filter(Boolean).join("\n");

    const payload = {
      inquiry: summary,
      next_steps: {
        contactPage: "https://www.sjuluxetravel.com/contact",
        email: "dsantiago@ncmconcierge.com",
        phone: "+1 (617) 935-5714",
      },
    };

    return {
      content: [{ type: "text", text: summary + "\n\nSend to: dsantiago@ncmconcierge.com\nOr visit: https://www.sjuluxetravel.com/contact" }],
      structuredContent: payload,
    };
  },
});
