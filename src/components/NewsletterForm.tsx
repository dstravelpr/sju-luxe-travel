import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
export function NewsletterForm({ source }: { source: "blog" | "footer" }) {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";
  const id = useId();
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent || state === "saving") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("saving");
    const { data: result, error } = await supabase.functions.invoke("subscribe-newsletter", { body: { name: data.get("name"), email: data.get("email"), language, source, consent } });
    if (error || result?.saved !== true) { setState("error"); return; }
    form.reset(); setConsent(false); setState("saved");
  };
  const inputClass = "w-full px-4 py-3 bg-background gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold";
  return <form onSubmit={submit} aria-label={isEs ? `Suscripción ${source}` : `${source} subscription`} className="space-y-3">
    <input name="name" required maxLength={120} autoComplete="name" aria-label={isEs ? "Nombre completo" : "Full name"} placeholder={isEs ? "Nombre completo" : "Full name"} className={inputClass} />
    <input name="email" type="email" required maxLength={254} autoComplete="email" aria-label={isEs ? "Correo electrónico" : "Email address"} placeholder={isEs ? "Correo electrónico" : "Email address"} className={inputClass} />
    <div className="flex items-start gap-3 text-left"><Checkbox id={id} checked={consent} onCheckedChange={(value) => setConsent(value === true)} className="mt-1" /><label htmlFor={id} className="text-xs text-muted-foreground leading-relaxed">{isEs ? "Acepto recibir novedades de viajes por correo. " : "I agree to receive travel updates by email. "}<Link to={localPath("/privacy")} className="text-gold underline">{isEs ? "Privacidad" : "Privacy"}</Link></label></div>
    <Button type="submit" disabled={!consent || state === "saving"} variant="outline" className="w-full min-h-11 rounded-full border-gold text-gold font-body uppercase text-xs">{state === "saving" ? (isEs ? "Guardando…" : "Saving…") : (isEs ? "Suscribirme" : "Subscribe")}</Button>
    <p role="status" className="text-sm text-foreground">{state === "saved" ? (isEs ? "Tu suscripción quedó registrada. Gracias." : "Your subscription has been saved. Thank you.") : state === "error" ? (isEs ? "No pudimos guardar tu suscripción. Inténtalo nuevamente." : "We couldn't save your subscription. Please try again.") : ""}</p>
  </form>;
}