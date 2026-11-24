import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

type Opt = [string, string, string];
const Q: { name: string; es: string; en: string; opts: Opt[]; optional?: boolean }[] = [
  { name: "cruise_type", es: "¿Océano o río?", en: "Ocean or river?", opts: [["ocean", "Crucero por el océano", "Ocean cruise"], ["river", "Crucero de río", "River cruise"], ["unsure", "No estoy seguro", "Not sure yet"]] },
  { name: "travel_window", es: "¿Cuándo quieres viajar?", en: "When do you want to travel?", opts: [["0-3", "En los próximos 3 meses", "Within 3 months"], ["3-6", "En 3 a 6 meses", "In 3–6 months"], ["6-12", "En 6 a 12 meses", "In 6–12 months"], ["12+", "En más de un año", "More than a year out"], ["flexible", "Tengo fechas flexibles", "My dates are flexible"]] },
  { name: "travelers", es: "¿Quién viaja?", en: "Who's traveling?", opts: [["couple", "En pareja", "Couple"], ["family", "En familia", "Family"], ["friends", "Con amistades", "Friends"], ["group", "Grupo o empresa", "Group or company"], ["solo", "Viajo solo/a", "Solo"]] },
  { name: "nights", es: "¿Cuántas noches?", en: "How many nights?", opts: [["3-5", "3 a 5", "3–5"], ["6-8", "6 a 8", "6–8"], ["9-14", "9 a 14", "9–14"], ["15+", "15 o más", "15+"]] },
  { name: "priority", es: "¿Qué te importa más?", en: "What matters most?", opts: [["price", "El precio", "Price"], ["destinations", "Los destinos", "Destinations"], ["rest", "Descansar", "Rest"], ["activities", "Actividades a bordo y en tierra", "Activities on board and ashore"]] },
  { name: "budget", es: "Presupuesto (opcional)", en: "Budget (optional)", optional: true, opts: [["economico", "Económico", "Budget-friendly"], ["moderado", "Moderado", "Moderate"], ["premium", "Premium", "Premium"], ["prefer-not", "Prefiero hablarlo luego", "I'd rather discuss it later"]] },
];

export function CruiseFinder() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error" | "contact">("idle");
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "saving") return;
    const form = e.currentTarget;
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "");
    if (!get("email").trim() && !get("whatsapp").trim()) { setState("contact"); return; }
    setState("saving");
    const body: Record<string, string> = { language };
    for (const k of ["cruise_type", "travel_window", "travelers", "nights", "priority", "budget", "name", "email", "whatsapp", "notes"]) body[k] = get(k);
    const { data, error } = await supabase.functions.invoke("cruise-request", { body });
    if (error || data?.saved !== true) { setState("error"); return; }
    form.reset(); setState("saved");
  };
  const input = "w-full px-4 py-3 bg-background gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold";
  return (
    <section id="crea-tu-crucero" aria-labelledby="crea-tu-crucero-h" className="mt-16 p-8 md:p-12 bg-card gold-border rounded-lg">
      <span className="font-body text-gold text-xs tracking-[0.25em] uppercase">{isEs ? "5 preguntas rápidas" : "5 quick questions"}</span>
      <h2 id="crea-tu-crucero-h" className="font-heading text-3xl text-foreground mt-3 mb-4">{isEs ? "Crea tu crucero ideal" : "Create your ideal cruise"}</h2>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        {isEs
          ? "Para escoger un crucero desde Puerto Rico, empieza por cinco cosas: si prefieres océano o río, cuándo quieres viajar, quién viaja, cuántas noches tienes y qué te importa más. Contesta aquí y te envío opciones que encajen contigo, sin compromiso."
          : "To choose a cruise from Puerto Rico, start with five things: ocean or river, when you want to travel, who's going, how many nights you have and what matters most. Answer here and I'll send options that fit you, with no commitment."}
      </p>
      <form onSubmit={submit} className="mt-8 space-y-6" aria-label={isEs ? "Crea tu crucero ideal" : "Create your ideal cruise"}>
        {Q.map((q) => (
          <fieldset key={q.name}>
            <legend className="font-body text-sm text-foreground mb-3">{isEs ? q.es : q.en}</legend>
            <div className="flex flex-wrap gap-2">
              {q.opts.map(([v, es, en]) => (
                <label key={v} className="cursor-pointer">
                  <input type="radio" name={q.name} value={v} required={!q.optional} className="peer sr-only" />
                  <span className="inline-block px-4 py-2 rounded-full border border-border text-xs text-muted-foreground transition-colors peer-checked:border-gold peer-checked:text-gold peer-checked:bg-gold/10 peer-focus-visible:ring-2 peer-focus-visible:ring-gold">{isEs ? es : en}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <div className="grid md:grid-cols-3 gap-3">
          <input name="name" required maxLength={120} autoComplete="name" aria-label={isEs ? "Nombre" : "Name"} placeholder={isEs ? "Nombre" : "Name"} className={input} />
          <input name="email" type="email" maxLength={254} autoComplete="email" aria-label={isEs ? "Correo electrónico" : "Email"} placeholder={isEs ? "Correo electrónico" : "Email"} className={input} />
          <input name="whatsapp" type="tel" maxLength={30} autoComplete="tel" aria-label="WhatsApp" placeholder="WhatsApp" className={input} />
        </div>
        <p className="text-xs text-muted-foreground -mt-3">{isEs ? "Déjame tu correo o tu WhatsApp (uno de los dos)." : "Leave your email or WhatsApp (either one)."}</p>
        <textarea name="notes" maxLength={1000} rows={3} aria-label={isEs ? "Algo más que deba saber" : "Anything else I should know"} placeholder={isEs ? "Algo más que deba saber (opcional)" : "Anything else I should know (optional)"} className={input} />
        <Button type="submit" disabled={state === "saving"} variant="outline" className="min-h-11 px-8 rounded-full border-gold text-gold font-body uppercase text-xs tracking-[0.15em]">
          {state === "saving" ? (isEs ? "Enviando…" : "Sending…") : (isEs ? "Enviar mis respuestas" : "Send my answers")}
        </Button>
        <p role="status" className="text-sm text-foreground">
          {state === "saved" ? (isEs ? "¡Recibido! Te escribo con opciones pronto." : "Received! I'll reach out with options soon.")
            : state === "error" ? (isEs ? "No pudimos enviar tus respuestas. Inténtalo nuevamente." : "We couldn't send your answers. Please try again.")
            : state === "contact" ? (isEs ? "Necesito tu correo o tu WhatsApp para enviarte opciones." : "I need your email or WhatsApp to send you options.") : ""}
        </p>
      </form>
    </section>
  );
}
