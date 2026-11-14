export const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
export function replaceMeta(html, key, value, attribute = "name") {
  const pattern = new RegExp(`<meta\\b(?=[^>]*\\b${attribute}="${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}")[^>]*>`, "gi");
  const tag = `<meta data-rh="true" ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `${tag}\n</head>`);
}