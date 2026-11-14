import { describe, it, expect } from "vitest";
import { validateSubscription } from "../../supabase/functions/_shared/subscription-validation";
const valid = { name: "Daniel", email: " TEST@example.com ", language: "es", source: "blog", consent: true };
describe("Subscription privacy and validation", () => {
  it("requires consent before storing a subscription", () => { expect(validateSubscription({ ...valid, consent: false })).toBeNull(); });
  it("accepts both website subscription sources", () => { for (const source of ["blog", "footer"]) expect(validateSubscription({ ...valid, source })?.source).toBe(source); });
  it("rejects invalid emails", () => { expect(validateSubscription({ ...valid, email: "invalid" })).toBeNull(); });
  it("normalizes email without changing the selected language", () => { expect(validateSubscription(valid)).toEqual({ ...valid, email: "test@example.com" }); });
});