import { describe, expect, it } from "vitest";
import { isDraftPreview, previewOnlyRoutes } from "../lib/draftRoutes";

describe("unpublished 2027 article", () => {
  const routes = [{ path: "/blog/avoid-high-travel-costs-2027" }];
  it("is available in the preview", () => {
    expect(previewOnlyRoutes(true, routes)).toEqual(routes);
  });
  it("is not released in production", () => {
    expect(previewOnlyRoutes(false, routes)).toEqual([]);
  });
  it("is visible in the hosted project preview even with a production bundle", () => {
    expect(isDraftPreview(false, "id-preview--633f6989-8325-4a39-b1db-9033d10321cf.lovable.app")).toBe(true);
  });
  it.each(["sju-luxe-travel.lovable.app", "www.sjuluxetravel.com", "sjuluxetravel.com"])("keeps the unpublished draft off %s", (hostname) => {
    expect(isDraftPreview(false, hostname)).toBe(false);
  });
});