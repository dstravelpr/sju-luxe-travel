export function validateSubscription(input: Record<string, unknown>) {
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  if (!name || name.length > 120 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (input.consent !== true || !["es", "en"].includes(String(input.language)) || !["blog", "footer"].includes(String(input.source))) return null;
  return { name, email, language: String(input.language), source: String(input.source), consent: true };
}