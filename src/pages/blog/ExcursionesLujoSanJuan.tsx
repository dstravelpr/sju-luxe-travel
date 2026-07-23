import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, WEBSITE_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/hero-beach-sunset.jpg";

const schemaJson = buildGraph({
  "@type": "BlogPosting",
  headline: "Excursiones de Lujo desde el Puerto de Cruceros de San Juan",
  description:
    "Excursiones privadas de lujo para pasajeros de cruceros que atracan en San Juan: tours privados del Viejo San Juan, El Yunque, catamarán y gastronomía coordinados por un concierge local.",
  author: AUTHOR,
  publisher: ORG_REF,
  datePublished: "2026-07-08",
  dateModified: "2026-07-23",
  inLanguage: "es-PR",
  image: "https://www.sjuluxetravel.com/og/excursiones-lujo-san-juan.jpg",
  url: "https://www.sjuluxetravel.com/blog/excursiones-de-lujo-san-juan-puerto-cruceros",
  mainEntityOfPage: "https://www.sjuluxetravel.com/blog/excursiones-de-lujo-san-juan-puerto-cruceros",
});

const Post = () => {
  const { localPath } = useLanguage();

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/excursiones-lujo-san-juan.jpg"
        title="Excursiones de Lujo desde el Puerto de Cruceros de San Juan | SJU Luxe Travel"
        description="Guía de excursiones privadas de lujo para pasajeros de crucero en San Juan: tours privados del Viejo San Juan, El Yunque, catamarán y experiencias gastronómicas coordinadas por un concierge local."
        canonical="https://www.sjuluxetravel.com/blog/excursiones-de-lujo-san-juan-puerto-cruceros"
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
          { name: 'Excursiones de Lujo desde el Puerto de Cruceros de San Juan', url: "https://www.sjuluxetravel.com/blog/excursiones-de-lujo-san-juan-puerto-cruceros" },
        ]}
        schemaJson={schemaJson}
      />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />Volver al Blog
          </Link>

          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Cruceros</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              Excursiones de Lujo desde el Puerto de Cruceros de San Juan
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <Link to={localPath("/about")} className="flex items-center gap-1.5 hover:text-gold transition-colors"><User size={12} className="text-gold" />Daniel Santiago Díaz<span className="text-muted-foreground/70"> — {isEs ? "Agente de Viajes de Lujo" : "Luxury Travel Advisor"}</span></Link>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />8 de julio de 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />7 min de lectura</span>
            </div>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={heroImg} alt="Excursiones privadas de lujo desde el puerto de cruceros de San Juan" className="w-full h-full object-cover" width={1600} height={900} />
          </div>

          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p className="text-lg text-foreground/90">
              Si tu crucero atraca en San Juan, tienes entre 8 y 10 horas en tierra — suficiente para vivir Puerto Rico bien, o suficiente para desperdiciarlas subido en un bus con otras 50 personas. Esta es la guía honesta que damos a nuestros clientes que llegan a bordo de Regent, Silversea, Seabourn, Explora, Crystal, Oceania y Viking.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Por qué reservar privado en vez de la excursión del barco</h2>
            <p>
              Las excursiones oficiales del crucero funcionan, pero son productos masivos: buses de 40+ personas, guías que repiten el mismo guion, paradas fotográficas cronometradas y cero flexibilidad. Cuando reservas una excursión privada con un concierge local pasa lo contrario:
            </p>
            <ul className="space-y-2 list-none">
              {[
                "Vehículo privado (SUV o van premium) con chofer bilingüe que te recoge junto al muelle.",
                "Guía certificado que ajusta el ritmo a ti: si quieres pasar dos horas en El Morro, se puede; si prefieres saltártelo, también.",
                "Reservas confirmadas en restaurantes que no aceptan grupos grandes.",
                "Regreso al barco garantizado con margen — nadie corre al muelle a las 4:30 pm.",
                "Personalización real: familia con niños, aniversario, foodies, historia — cada tour se arma distinto.",
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>
            <p>
              El precio no siempre es más alto de lo que cobra el barco por persona — muchas veces es menor cuando viajan 2 o 4 pasajeros juntos, porque el costo se divide entre el grupo privado en vez de multiplicarse por asiento de bus.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Las cinco excursiones privadas que más reservamos</h2>

            <h3 className="font-heading text-xl text-foreground mt-6">1. Tour privado del Viejo San Juan con historiador</h3>
            <p>
              4 horas caminando el casco histórico con un guía certificado por la Compañía de Turismo de Puerto Rico. Cubre Castillo San Felipe del Morro, San Cristóbal, la Catedral, Casa Blanca y las calles empedradas azules originales. Incluye acceso "skip-the-line" a los fuertes y parada de café en La Bombonera o Café Cuatro Sombras. Ideal para primera visita.
            </p>

            <h3 className="font-heading text-xl text-foreground mt-6">2. El Yunque privado — el único bosque tropical en el sistema de Parques Nacionales de EE.UU.</h3>
            <p>
              6–7 horas fuera del barco. SUV privado hasta El Yunque con guía naturalista, caminata a las cascadas La Coca y La Mina, torre de observación Yokahú y baño en un río natural apartado que solo conocen los guías locales. Almuerzo en un lechón asado en Guavate a la vuelta. Reservar solo si tu barco sale después de las 6 pm.
            </p>

            <h3 className="font-heading text-xl text-foreground mt-6">3. Catamarán privado a Icacos o Palomino</h3>
            <p>
              Catamarán de lujo para tu grupo (hasta 12 personas), salida desde Fajardo, snorkel en aguas cristalinas, bar abierto y almuerzo a bordo. 6 horas totales con traslado. La versión "sunset sail" saliendo desde el muelle turístico de San Juan también funciona si el barco no zarpa hasta la noche.
            </p>

            <h3 className="font-heading text-xl text-foreground mt-6">4. Tour gastronómico "Farm-to-Table"</h3>
            <p>
              Diseñado con chefs locales. Desayuno en Santaella o Cocina Abierta, visita al mercado de Placita de Santurce con un chef, almuerzo tasting en Vianda o 1919 (restaurante del Condado Vanderbilt), parada por chocolate artesanal en Chocobar Cortés. 5–6 horas.
            </p>

            <h3 className="font-heading text-xl text-foreground mt-6">5. Combo Viejo San Juan + Bacardí Reserva</h3>
            <p>
              Media mañana caminando el Viejo San Juan, ferry corto o vehículo a la destilería Casa Bacardí en Cataño, tour privado "Reserva" con cata de rones añejos y coctelería personalizada. Regreso con tiempo de sobra. Muy solicitado por clientes de Regent y Silversea.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Cómo trabaja el concierge local</h2>
            <p>
              Antes de tu llegada coordinamos: hora exacta de atraque, hora límite de regreso (all-aboard), tamaño de grupo, restricciones dietéticas, movilidad, intereses reales. Con eso armamos el itinerario, confirmamos vehículo, guía y reservas, y te enviamos el punto exacto de encuentro junto al terminal (Pier 3 o Pier 4 según tu barco). El día de la excursión hay un contacto directo por WhatsApp por si algo cambia — barco atrasado, lluvia inesperada, cambio de plan.
            </p>
            <p>
              Este es exactamente el trabajo que hace un{" "}
              <Link to={localPath("/contact")} className="text-gold hover:text-gold-light underline">
                concierge de viajes en Puerto Rico
              </Link>
              : eliminar la incertidumbre y ajustar cada hora a lo que tu grupo realmente quiere ver.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Presupuesto orientativo</h2>
            <ul className="space-y-2 list-none">
              {[
                "Tour privado Viejo San Juan (4h, hasta 6 pax): $450–$700 total",
                "El Yunque privado (7h, hasta 6 pax): $850–$1,200 total",
                "Catamarán privado a Icacos (6h, hasta 12 pax): $1,800–$2,800 total",
                "Tour gastronómico (5–6h, hasta 6 pax): $850–$1,400 total (más consumo)",
                "Combo Viejo San Juan + Bacardí Reserva (6h): $700–$950 total",
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>
            <p>Dividido entre 2, 4 o 6 pasajeros, cada uno de estos suele quedar por debajo o al mismo nivel que la excursión oficial del barco — con muchísima mejor experiencia.</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Consejos prácticos</h2>
            <ul className="space-y-2 list-none">
              {[
                "Confirma la hora \"all-aboard\" con el barco, no con la agencia. Suele ser 30 minutos antes de zarpar.",
                "Si el barco atraca en el muelle Pan American (Isla Grande) en vez de los muelles del Viejo San Juan, avísanos — el punto de encuentro cambia.",
                "En verano y otoño lleva protector solar reef-safe (ley local) y ropa liviana.",
                "Propinas al guía y al chofer no están incluidas en el precio del tour privado; recomendamos 15–20%.",
                "Si vas con niños, pide sillas de auto por adelantado — no todos los operadores las tienen.",
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">Lecturas relacionadas</h2>
            <ul className="space-y-2 list-none">
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/cruceros-de-lujo-desde-san-juan")} className="text-gold hover:text-gold-light underline">Cruceros de lujo desde San Juan — Caribe, Mediterráneo y mundiales</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/servicios-concierge-viaje")} className="text-gold hover:text-gold-light underline">Servicios de concierge de viaje — qué incluyen y por qué valen la pena</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/contact")} className="text-gold hover:text-gold-light underline">Consulta gratis con nuestro concierge local</Link></li>
            </ul>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">Reserva tu excursión privada en San Juan</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Cuéntanos tu barco, fecha de atraque e intereses. Armamos el itinerario y confirmamos vehículo, guía y reservas.
            </p>
            <Link to={localPath("/contact")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
              Solicitar Excursión Privada
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
