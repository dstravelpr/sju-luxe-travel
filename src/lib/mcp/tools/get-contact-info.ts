import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Return SJU Luxe Travel contact details: advisor, phone, email, location, booking page, and social links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      agency: "SJU Luxe Travel",
      advisor: "Denise Santiago",
      phone: "+1 (617) 935-5714",
      email: "dsantiago@ncmconcierge.com",
      location: "San Juan, Puerto Rico",
      website: "https://www.sjuluxetravel.com",
      contactPage: "https://www.sjuluxetravel.com/contact",
      credentials: ["AV-166 Lic. 237", "Florida ST15578", "California 2090937-50", "Washington 603189022", "Iowa 1202"],
      social: {
        instagram: "https://www.instagram.com/sjuluxetravel/",
        facebook: "https://www.facebook.com/sjuluxetravel",
        linkedin: "https://www.linkedin.com/company/sju-luxe-travel",
      },
      languages: ["English", "Spanish"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
