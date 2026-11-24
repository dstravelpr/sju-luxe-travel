import { describe, it, expect } from "vitest";
import { validateCruiseRequest } from "../../supabase/functions/_shared/cruise-request-validation";
const valid = { cruise_type: "ocean", travel_window: "3-6", travelers: "couple", nights: "6-8", priority: "price", budget: "", name: "Ana", email: "ana@example.com", whatsapp: "", notes: "", language: "es" };
describe("Cruise request validation", () => {
  it("requires an email or WhatsApp", () => { expect(validateCruiseRequest({ ...valid, email: "" })).toBeNull(); });
  it("accepts WhatsApp only", () => { expect(validateCruiseRequest({ ...valid, email: "", whatsapp: "+1 787 555 1234" })?.whatsapp).toBe("+1 787 555 1234"); });
  it("budget is optional", () => { expect(validateCruiseRequest(valid)?.budget).toBeNull(); });
  it("rejects unknown answers", () => { expect(validateCruiseRequest({ ...valid, nights: "100" })).toBeNull(); });
});
