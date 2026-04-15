import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const ViajesDeLujo = () => (
  <Layout>
    <SEOHead
      title="Viajes de Lujo desde Puerto Rico — Asesor Privado en San Juan | SJU Luxe Travel"
      description="Planifica tu próximo viaje de lujo desde Puerto Rico con SJU Luxe Travel. Itinerarios personalizados a las Maldivas, Europa, México y más — sin pasaporte, misma zona horaria, servicio completamente bilingüe."
      canonical="https://www.sjuluxetravel.com/viajes-de-lujo-desde-puerto-rico"
    />

    <article className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Tu Asesor Privado</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
          Viajes de Lujo desde Puerto Rico — <span className="text-gold-gradient italic">Tu Asesor Privado en San Juan</span>
        </h1>

        <div className="prose-custom space-y-6">
          <p className="text-muted-foreground text-base leading-relaxed">
            Vivir en Puerto Rico es tener el mundo al alcance de la mano. Desde el Aeropuerto Internacional Luis Muñoz Marín, puedes estar en Europa, las Maldivas, México o el Caribe en cuestión de horas — sin pasaporte, sin complicaciones migratorias, con todas las ventajas de viajar como ciudadano americano. Lo único que necesitas es a alguien que planifique cada detalle con el nivel de cuidado que ese viaje merece.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            En <strong className="text-foreground">SJU Luxe Travel</strong>, somos tu agencia de viajes de lujo boutique con base en San Juan, Puerto Rico, especializada exclusivamente en viajes de salida — es decir, en llevar a viajeros de Puerto Rico a los destinos más extraordinarios del mundo.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">¿Por Qué Elegir un Asesor de Viajes de Lujo en Puerto Rico?</h2>
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
            Desde San Juan, el mundo es más accesible de lo que imaginas. Estos son algunos de los destinos más solicitados por nuestros clientes:
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Las Maldivas</strong> — El destino por excelencia para lunas de miel y escapadas románticas. Villas sobre el agua, arrecifes de coral, privacidad absoluta y resorts como Conrad Rangali Island, Huvawalhi y One&Only Reethi Rah.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Portugal</strong> — Uno de los secretos mejor guardados de Europa. Lisboa, el Algarve y el Douro Valley ofrecen gastronomía de clase mundial, hoteles históricos convertidos en palacios boutique y una calidez cultural inigualable.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">México</strong> — Desde la modernidad cosmopolita de la Ciudad de México hasta el lujo discreto de Tulum y los resorts exclusivos de Los Cabos. México ofrece cultura, naturaleza y gastronomía en un solo destino.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">El Caribe</strong> — Aunque Puerto Rico es el Caribe, hay un mundo de islas que explorar: St. Barts, Anguilla, Turks & Caicos, Barbados y las Islas Vírgenes Británicas, cada una con su propio carácter de lujo.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Europa</strong> — Italia, Francia, Grecia, España — diseñamos recorridos privados por Europa que evitan las multitudes y se enfocan en experiencias auténticas, alojamientos con historia y momentos que no encontrarás en ningún paquete masivo.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Cómo Funciona Trabajar con SJU Luxe Travel</h2>
          <p className="text-muted-foreground text-base leading-relaxed">El proceso es sencillo y completamente personalizado:</p>
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
          <p className="text-muted-foreground text-base leading-relaxed">Desde Puerto Rico, planificamos viajes de lujo para:</p>
          <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              ["Lunas de miel", "El inicio de una vida juntos merece un viaje que nunca olvidarán."],
              ["Aniversarios y escapadas en pareja", "Para celebrar lo construido juntos."],
              ["Bodas de destino", "Coordinamos el alojamiento y la logística de viaje para toda la familia y los invitados."],
              ["Aventuras familiares de lujo", "Viajes diseñados para que todos, desde los más pequeños hasta los abuelos, vivan una experiencia extraordinaria."],
              ["Retiros de bienestar", "Spas de clase mundial, yoga retreats y destinos centrados en el descanso profundo."],
              ["Viajes solo para mujeres", "Un espacio seguro, lujoso y empoderador para explorar el mundo en tus propios términos."],
              ["Viajes corporativos e incentivos", "Experiencias premium para equipos que se lo merecen."],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-foreground">{title}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
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
