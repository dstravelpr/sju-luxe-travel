import { expect, it } from "vitest";
import { replaceMeta } from "../../scripts/seo-html.js";
it("replaces multiline route descriptions and safely encodes their content", () => {
  const html = '<head><meta\n name="description"\n content="Generic home description"\n /></head>';
  const result = replaceMeta(html, "description", 'Cruceros & viajes "personales"');
  expect(result).toContain('content="Cruceros &amp; viajes &quot;personales&quot;"');
  expect(result).not.toContain("Generic home description");
});
it("replaces existing robots directives rather than adding contradictory tags", () => {
  const result = replaceMeta('<head><meta data-rh="true" name="robots" content="index, follow" /></head>', "robots", "noindex, follow");
  expect(result.match(/name="robots"/g)).toHaveLength(1);
  expect(result).toContain('content="noindex, follow"');
});