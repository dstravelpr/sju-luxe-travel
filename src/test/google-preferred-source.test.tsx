import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { GooglePreferredSource } from "@/components/GooglePreferredSource";

const HREF = "https://www.google.com/preferences/source?q=sjuluxetravel.com";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <GooglePreferredSource />
      </LanguageProvider>
    </MemoryRouter>,
  );

const button = () =>
  screen.getByRole("link", { name: /preferred source|fuente preferida/i });

describe("Google preferred-source button", () => {
  it.each([
    "/",
    "/about",
    "/cruceros-de-lujo-desde-san-juan",
    "/contact",
    "/blog",
    "/es/luna-de-miel-de-lujo",
  ])("appears on %s", (path) => {
    renderAt(path);
    expect(button()).toHaveAttribute("href", HREF);
  });

  it("points at the public domain without www", () => {
    renderAt("/");
    expect(button().getAttribute("href")).toBe(HREF);
    expect(button().getAttribute("href")).not.toContain("www.sjuluxetravel");
  });
});
