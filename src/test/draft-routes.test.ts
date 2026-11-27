import { describe, expect, it } from "vitest";
import { previewOnlyRoutes } from "../lib/draftRoutes";

describe("unpublished 2027 article", () => {
  const routes = [{ path: "/blog/avoid-high-travel-costs-2027" }];
  it("is available in the preview", () => {
    expect(previewOnlyRoutes(true, routes)).toEqual(routes);
  });
  it("is not released in production", () => {
    expect(previewOnlyRoutes(false, routes)).toEqual([]);
  });
});