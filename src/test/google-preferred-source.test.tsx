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
    expect(screen.getByRole("link", { href: HREF })).toBeInTheDocument();
  });

  it("points at the public domain without www", () => {
    renderAt("/");
    const link = screen.getByRole("link", { href: HREF });
    expect(link).toHaveAttribute(
      "href",
      "https://www.google.com/preferences/source?q=sjuluxetravel.com",
    );
  });
});
