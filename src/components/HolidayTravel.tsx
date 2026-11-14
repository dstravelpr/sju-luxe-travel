import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
export function HolidayTravel({ river = false }: { river?: boolean }) {
  const { language, localPath } = useLanguage();
  const es = language === "es";
  return <section aria-label={es ? "Viajes para Navidad y 2027" : "Holiday and 2027 travel"} className="py-12 bg-charcoal border-y border-border/40">
    <div className="container mx-auto px-6 max-w-3xl">
      <p className="text-gold font-body text-xs uppercase mb-3">{es ? "Navidad · Próximos viajes" : "The holidays · Your next trip"}</p>
      <h2 className="font-heading text-3xl text-foreground mb-5">{river ? (es ? "Mercados navideños y ríos de Europa" : "Christmas markets and Europe's rivers") : (es ? "Esta Navidad, regala tiempo juntos" : "This Christmas, give the gift of time together")}</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">{river ? (es ? "Explora la idea de un crucero por el Rin o el Danubio en temporada de mercados navideños, o empieza a planificar tu viaje para el 2027. Comparamos itinerarios, vuelos desde Puerto Rico y lo que incluye cada tarifa." : "Explore a Rhine or Danube cruise during Christmas-market season, or start planning your 2027 trip. We compare itineraries, flights from Puerto Rico and each fare's inclusions.") : (es ? "Cruceros desde San Juan, escapadas en familia o un viaje para el 2027. Cuéntame tus fechas, cuántas personas viajan y tu presupuesto; buscaremos opciones que funcionen para ustedes." : "Cruises from San Juan, family getaways or a trip for 2027. Tell me your dates, group size and budget; we'll explore options that work for you.")}</p>
      <p className="text-muted-foreground text-sm mb-6">{es ? "Confirmamos salidas, disponibilidad, documentos y condiciones antes de reservar. No todas las salidas visitan mercados navideños." : "We confirm departures, availability, travel documents and terms before booking. Not every sailing visits Christmas markets."}</p>
      <Button asChild variant="outline" className="rounded-full min-h-11 border-gold text-gold whitespace-normal h-auto py-3"><Link to={`${localPath("/contact")}?occasion=holiday`}>{es ? "Consultar fechas y presupuesto" : "Discuss dates and budget"}<ArrowRight aria-hidden="true" /></Link></Button>
    </div>
  </section>;
}