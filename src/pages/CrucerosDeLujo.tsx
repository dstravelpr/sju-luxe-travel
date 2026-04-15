import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const CrucerosDeLujo = () => (
  <Layout>
    <SEOHead
      title="Cruceros de Lujo desde San Juan, Puerto Rico | SJU Luxe Travel"
      description="Planifica tu crucero de lujo desde San Juan, Puerto Rico. Beneficios NCM Concierge, excursiones privadas, mejoras de cabina y servicio personalizado bilingüe."
      canonical="https://www.sjuluxetravel.com/cruceros-de-lujo-desde-san-juan"
    />

    <article className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Experiencias en el Mar</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
          Cruceros de Lujo <span className="text-gold-gradient italic">desde San Juan, Puerto Rico</span>
        </h1>

        <div className="text-muted-foreground text-base leading-relaxed space-y-5">
          <p>
            San Juan es uno de los puertos de embarque de cruceros más importantes del Caribe — y vivir aquí te da la ventaja de abordar tu crucero de lujo sin necesidad de vuelos adicionales. En SJU Luxe Travel, te ayudamos a planificar la experiencia de crucero perfecta, desde la selección del barco y la cabina hasta las excursiones privadas en cada puerto de escala.
          </p>
          <p>
            No somos solo una agencia que vende boletos de crucero. Somos tu asesor de viajes de lujo, dedicado a personalizar cada aspecto de tu experiencia a bordo y en tierra. Trabajamos con las líneas de cruceros más exclusivas del mundo y utilizamos nuestra afiliación con NCM Concierge para asegurar beneficios que no encontrarás en ninguna plataforma de reservas en línea.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Beneficios Exclusivos de NCM Concierge para Cruceros</h2>
          <p>
            Como agente certificado de NCM Concierge, parte de Travel Leaders, aseguramos ventajas exclusivas para nuestros clientes de cruceros:
          </p>
          <ul className="space-y-2 list-none">
            {[
              "Mejoras de cabina complementarias (sujeto a disponibilidad)",
              "Crédito a bordo para spa, restaurantes de especialidad o excursiones",
              "Acceso prioritario a embarque y desembarque",
              "Excursiones privadas curadas en puertos seleccionados",
              "Paquetes de bebidas, Wi-Fi o servicios de spa con descuento",
              "Coordinación de celebraciones especiales: aniversarios, cumpleaños, propuestas de matrimonio",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>{item}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">Líneas de Cruceros de Lujo</h2>
          <p>
            Trabajamos con las líneas de cruceros más prestigiosas del mundo, incluyendo Regent Seven Seas, Silversea, Oceania Cruises, Celebrity Cruises, Viking, y Royal Caribbean (suites y categorías premium). Cada línea ofrece una experiencia diferente, y te ayudamos a elegir la que mejor se adapte a tu estilo de viaje.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Rutas Populares desde San Juan</h2>
          <p>
            Desde el puerto de San Juan puedes explorar destinos increíbles sin la necesidad de volar. Las rutas más populares incluyen:
          </p>
          <ul className="space-y-2 list-none">
            {[
              "Islas del Caribe Sur: St. Kitts, Barbados, Aruba, Curaçao, Bonaire",
              "Caribe Oriental: St. Thomas, St. Maarten, Antigua, Dominica",
              "Transatlánticos: Desde San Juan hacia Europa — Lisboa, Barcelona, Roma",
              "Cruceros de reposicionamiento: Rutas únicas con escalas en destinos poco convencionales",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>{item}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">Excursiones Privadas en Puerto</h2>
          <p>
            Uno de los mayores diferenciadores de trabajar con un asesor de viajes es el acceso a excursiones privadas en cada puerto de escala. En lugar de los tours genéricos de grupo, organizamos experiencias exclusivas: tours gastronómicos privados, visitas culturales con guías locales, aventuras de snorkeling en playas secretas, y degustaciones de vino en viñedos boutique.
          </p>
          <p>
            Nuestro servicio es completamente bilingüe y ofrecemos consultas gratuitas. Estamos en San Juan, Puerto Rico, pero servimos a clientes en todo Estados Unidos, el Caribe y América Latina.
          </p>
        </div>

        <div className="mt-12 text-center py-12 gold-border rounded-lg">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            ¿Listo para <span className="text-gold-gradient italic">Zarpar?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">Agenda tu consulta gratuita y planifiquemos tu crucero de lujo ideal.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
            Consulta Gratuita
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  </Layout>
);

export default CrucerosDeLujo;
