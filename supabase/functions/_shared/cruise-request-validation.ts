export const CRUISE_OPTIONS = {
  cruise_type: ["ocean", "river", "unsure"],
  travel_window: ["0-3", "3-6", "6-12", "12+", "flexible"],
  travelers: ["couple", "family", "group", "solo", "friends"],
  nights: ["3-5", "6-8", "9-14", "15+"],
  priority: ["price", "destinations", "rest", "activities"],
  budget: ["", "economico", "moderado", "premium", "prefer-not"],
} as const;

const pick = (v: unknown, allowed: readonly string[]) => (typeof v === "string" && allowed.includes(v) ? v : null);
const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max + 1) : "");

export function validateCruiseRequest(input: Record<string, unknown>) {
  const out: Record<string, string | null> = {};
  for (const [k, allowed] of Object.entries(CRUISE_OPTIONS)) {
    const v = pick(input[k] ?? "", allowed);
    if (v === null) return null;
    out[k] = v;
  }
  const name = text(input.name, 120);
  const email = text(input.email, 254).toLowerCase();
  const whatsapp = text(input.whatsapp, 30);
  const notes = text(input.notes, 1000);
  if (!name || name.length > 120 || notes.length > 1000) return null;
  if (!email && !whatsapp) return null;
  if (email && (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return null;
  if (whatsapp && !/^\+?[0-9 ()-]{7,30}$/.test(whatsapp)) return null;
  const language = String(input.language);
  if (!["es", "en"].includes(language)) return null;
  return { ...out, budget: out.budget || null, name, email: email || null, whatsapp: whatsapp || null, notes: notes || null, language };
}
