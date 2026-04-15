import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Viajes de Lujo desde Puerto Rico",
  "provider": { "@type": "TravelAgency", "name": "SJU Luxe Travel", "url": "https://www.sjuluxetravel.com" },
  "areaServed": "Puerto Rico",
  "description": "Planificación de viajes de lujo saliendo desde Puerto Rico a destinos internacionales exclusivos.",
  "url": "https://www.sjuluxetravel.com/viajes-de-lujo-desde-puerto-rico",
  "availableLanguage": ["Spanish", "English"],
};

const ViajesDeLujo = () => (
  <Layout>
    <SEOHead
      title="Viajes de Lujo desde Puerto Rico — Agente de Viajes Privado en San Juan | SJU Luxe Travel"
      description="Planifica tu próximo viaje de lujo desde Puerto Rico con SJU Luxe Travel. Itinerarios personalizados a las Maldivas, Europa, México y más — sin pasaporte, misma zona horaria, servicio completamente bilingüe."
      canonical="https://www.sjuluxetravel.com/viajes-de-lujo-desde-puerto-rico"
      schemaJson={schema}
    />

    <article className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Tu Agente de Viajes Privado</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
          Viajes de Lujo desde Puerto Rico — <span className="text-gold-gradient italic">Tu Agente de Viajes en San Juan</span>
        </h1>

        <div className="prose-custom space-y-6">
          <p className="text-muted-foreground text-base leading-relaxed">
            Vivir en Puerto Rico es tener el mundo al alcance de la mano. Desde el Aeropuerto Internacional Luis Muñoz Marín, puedes estar en Europa, las Maldivas, México o el Caribe en cuestión de horas — sin pasaporte, sin complicaciones migratorias, con todas las ventajas de viajar como ciudadano americano. Lo único que necesitas es a alguien que planifique cada detalle con el nivel de cuidado que ese viaje merece.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            En <strong className="text-foreground">SJU Luxe Travel</strong>, somos tu agencia de viajes de lujo boutique con base en San Juan, Puerto Rico, especializada exclusivamente en viajes de salida — es decir, en llevar a viajeros de Puerto Rico a los destinos más extraordinarios del mundo.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">¿Por Qué Elegir un Agente de Viajes de Lujo en Puerto Rico?</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Reservar un viaje de lujo en línea puede parecer sencillo, pero lo que no ves en ninguna página web es el valor real detrás de trabajar con un asesor certificado con acceso a redes de viaje de élite.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Como agente independiente de <strong className="text-foreground">NCM Concierge</strong>, parte de <strong className="text-foreground">Travel Leaders</strong> — una de las redes de viaje concierge más respetadas de las Américas — Daniel Santiago Díaz tiene acceso a beneficios exclusivos que simplemente no están disponibles al reservar directamente:
          </p>
          <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              "Mejoras de habitación gratuitas en hoteles de lujo y resorts boutique",
              "Créditos de resort (spa, restaurantes, actividades) con valor de hasta $100–$300 por estadía",
              "Check-in anticipado y check-out tardío garantizados",
              "Amenidades VIP de bienvenida en habitación",
              "Acceso a tarifas y disponibilidad preferencial no publicadas al público",
              "Atención personalizada antes, durante y después de tu viaje",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
            ))}
          </ul>
          <p className="text-muted-foreground text-base leading-relaxed font-semibold">
            Todo esto, al mismo precio que pagarías reservando solo. La diferencia es que nosotros nos encargamos de absolutamente todo.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Destinos Internacionales Populares desde Puerto Rico</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Las Maldivas</strong> — El destino por excelencia para lunas de miel y escapadas románticas. Villas sobre el agua, arrecifes de coral, privacidad absoluta y resorts como Conrad Rangali Island, Hurawalhi y One&Only Reethi Rah.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Portugal</strong> — Lisboa, el Algarve y el Douro Valley ofrecen gastronomía de clase mundial, hoteles históricos convertidos en palacios boutique y una calidez cultural inigualable.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">México</strong> — Desde la modernidad cosmopolita de la Ciudad de México hasta el lujo discreto de Tulum y los resorts exclusivos de Los Cabos.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">El Caribe</strong> — St. Barts, Anguilla, Turks & Caicos, Barbados y las Islas Vírgenes Británicas, cada una con su propio carácter de lujo.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Europa</strong> — Italia, Francia, Grecia, España — diseñamos recorridos privados que evitan las multitudes y se enfocan en experiencias auténticas.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Cómo Funciona Trabajar con SJU Luxe Travel</h2>
          <ol className="space-y-3 text-muted-foreground text-base leading-relaxed list-none">
            {[
              ["Consulta gratuita", "Agendamos una llamada de 30 minutos para conocer tu visión, fechas, presupuesto y estilo de viaje."],
              ["Propuesta de itinerario", "En 48–72 horas, recibes una propuesta detallada con alojamientos, experiencias y logística."],
              ["Refinamiento y confirmación", "Ajustamos cada detalle hasta que el itinerario sea exactamente lo que imaginaste."],
              ["Gestión total", "Nos encargamos de todas las reservas, traslados, solicitudes especiales y coordinación en destino."],
              ["Soporte en tiempo real", "Durante tu viaje, tienes acceso directo a Daniel para cualquier situación, cambio o necesidad."],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold font-semibold mt-0.5">{i + 1}.</span>
                <span><strong className="text-foreground">{title}</strong> — {desc}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-heading text-2xl text-foreground mt-10">Viajes de Lujo para Toda Ocasión</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Desde Puerto Rico, planificamos viajes de lujo para: lunas de miel, aniversarios y escapadas en pareja, bodas de destino, aventuras familiares de lujo, retiros de bienestar, viajes solo para mujeres, y viajes corporativos e incentivos.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mt-4">
            ¿Te interesan los cruceros? Explora nuestras opciones de{" "}
            <Link to="/cruceros-de-lujo-desde-san-juan" className="text-gold hover:underline">cruceros oceánicos de lujo</Link> y{" "}
            <Link to="/cruceros-fluviales-de-lujo-desde-puerto-rico" className="text-gold hover:underline">cruceros fluviales por Europa, Asia y más</Link>.
          </p>
        </div>

        <div className="mt-16 text-center py-12 gold-border rounded-lg">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            ¿Listo para planificar tu próximo <span className="text-gold-gradient italic">viaje de lujo desde Puerto Rico?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Agenda tu consulta gratuita hoy. Sin compromisos, sin costo — solo una conversación para empezar a construir el viaje de tus sueños.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
            Consulta Gratuita
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  </Layout>
);

export default ViajesDeLujo;
