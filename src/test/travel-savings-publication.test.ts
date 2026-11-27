import { describe, expect, it } from "vitest";
import { SAVINGS_PUBLICATION_DATE, SAVINGS_REVIEW_DATE, SAVINGS_PATH } from "../content/travelSavings2027";

describe("approved savings article release", () => {
  it("records the actual approved release date, not the earlier proposed December date", () => {
    expect(SAVINGS_PUBLICATION_DATE).toBe("2026-11-27");
    expect(SAVINGS_REVIEW_DATE).toBe("2026-11-27");
  });
  it("preserves the approved preview URL on release", () => {
    expect(SAVINGS_PATH).toBe("/blog/avoid-high-travel-costs-2027");
  });
});
