import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const LunaDeMiel = () => (
  <Layout>
    <SEOHead
      title="Luna de Miel de Lujo desde San Juan, Puerto Rico | SJU Luxe Travel"
      description="Planifica tu luna de miel de lujo desde Puerto Rico. Maldivas, Bora Bora, Costa Amalfitana, Santorini y más — itinerarios románticos a medida con beneficios exclusivos."
      canonical="https://www.sjuluxetravel.com/luna-de-miel-de-lujo"
    />

    <article className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Experiencias Románticas</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
          Planificación de Luna de Miel de Lujo <span className="text-gold-gradient italic">desde San Juan, Puerto Rico</span>
        </h1>

        <div className="text-muted-foreground text-base leading-relaxed space-y-5">
          <p>
            Tu luna de miel es uno de los viajes más importantes de tu vida — y merece ser planificada con el mismo cuidado y atención que dedicaste a tu boda. En SJU Luxe Travel, nos especializamos en crear lunas de miel de lujo personalizadas para parejas en Puerto Rico que sueñan con destinos internacionales extraordinarios.
          </p>
          <p>
            Como asesor de viajes de lujo basado en San Juan, entendemos lo que las parejas puertorriqueñas buscan: destinos románticos, privacidad, experiencias únicas, y un servicio que elimine todo el estrés de la planificación. Nos encargamos de cada detalle — desde los vuelos y las transferencias hasta las cenas privadas y las actividades exclusivas.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Destinos de Luna de Miel Más Populares</h2>
          <p>
            Nuestras parejas eligen destinos que combinan romance, aventura y lujo. Entre los más solicitados están:
          </p>
          <ul className="space-y-2 list-none">
            {[
              "Maldivas — Villas sobre el agua, cenas bajo las estrellas, y snorkeling privado en arrecifes de coral cristalinos",
              "Bora Bora — Bungalows sobre laguna turquesa con vistas al Monte Otemanu y spa de clase mundial",
              "Costa Amalfitana, Italia — Pueblos costeros pintorescos, paseos en yate privado y gastronomía italiana auténtica",
              "Santorini, Grecia — Atardeceres icónicos, suites con piscina infinity y catas de vino volcánico",
              "Tailandia — Templos dorados, playas privadas y retiros de bienestar de lujo en Koh Samui",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>{item}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">Beneficios Exclusivos para Tu Luna de Miel</h2>
          <p>
            Como agente de NCM Concierge, parte de Travel Leaders, aseguramos beneficios especiales para lunas de miel que no están disponibles cuando reservas directamente en línea:
          </p>
          <ul className="space-y-2 list-none">
            {[
              "Mejoras de habitación complementarias (sujeto a disponibilidad)",
              "Créditos de resort para spa, cenas o actividades",
              "Decoración romántica de bienvenida en la habitación",
              "Check-in anticipado y check-out tardío",
              "Experiencias privadas exclusivas: cenas en la playa, excursiones al atardecer, tours privados",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>{item}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">¿Por Qué Planificar Tu Luna de Miel con un Asesor?</h2>
          <p>
            Planificar una luna de miel mientras organizas una boda puede ser abrumador. Un asesor de viajes de lujo se encarga de toda la investigación, las reservas, y la coordinación logística — para que tú solo tengas que preocuparte por disfrutar. Además, si surge cualquier imprevisto durante el viaje, estamos disponibles 24/7 para resolverlo.
          </p>
          <p>
            Ofrecemos consultas gratuitas para parejas en Puerto Rico y en cualquier parte del mundo. Nuestro servicio es completamente bilingüe, en español e inglés.
          </p>
        </div>

        <div className="mt-12 text-center py-12 gold-border rounded-lg">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            ¿Listos para su <span className="text-gold-gradient italic">Luna de Miel Soñada?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">Agenda tu consulta gratuita y diseñemos juntos la luna de miel perfecta.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
            Consulta Gratuita
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  </Layout>
);

export default LunaDeMiel;
