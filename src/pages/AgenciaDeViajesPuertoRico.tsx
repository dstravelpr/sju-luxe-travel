import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { FAQSection } from "@/components/FAQSection";
import { ORG_REF, WEBSITE_REF, buildGraph, breadcrumbList } from "@/lib/schema";

const PAGE_URL = "https://www.sjuluxetravel.com/agencia-de-viajes-puerto-rico";

const FAQ_ITEMS = [
  {
    q: "¿Necesito vivir en Puerto Rico para usar SJU Luxe Travel?",
    a: "No es necesario residir en la isla. Trabajamos con clientes en Puerto Rico y con la diáspora puertorriqueña en Estados Unidos. Planificamos en español e inglés.",
  },
  {
    q: "¿Cuánto cuesta contratar una agencia de viajes boutique?",
    a: "Nuestra consulta inicial es completamente gratuita. Nuestros honorarios varían según el tipo y complejidad del viaje. En muchos casos, los beneficios exclusivos que obtienes como cliente — upgrades, créditos, amenidades — compensan ampliamente el costo del servicio.",
  },
  {
    q: "¿Cómo empiezo a planificar mi viaje con SJU Luxe Travel?",
    a: "Completa el formulario de consulta en nuestra página de contacto y coordinaremos una llamada para conocer tus preferencias, fechas y presupuesto.",
  },
  {
    q: "¿Cuál es la diferencia entre SJU Luxe Travel y una agencia de viajes regular?",
    a: "Nos especializamos exclusivamente en viajes a medida. No vendemos paquetes masivos ni tours grupales. Cada itinerario es diseñado desde cero para un cliente específico.",
  },
  {
    q: "¿Ofrecen servicios en español?",
    a: "Sí. Planificamos y atendemos completamente en español e inglés.",
  },
];

const SERVICES = [
  {
    title: "Viajes a medida internacionales",
    to: "/viajes-de-lujo-desde-puerto-rico",
    desc: "Itinerarios privados a medida a las Maldivas, Portugal, México, Europa y más allá.",
  },
  {
    title: "Cruceros desde San Juan",
    to: "/cruceros-de-lujo-desde-san-juan",
    desc: "Regent, Silversea, Seabourn y Crystal — zarpando directamente desde Puerto Rico.",
  },
  {
    title: "Cruceros fluviales por Europa",
    to: "/cruceros-fluviales-de-lujo-desde-puerto-rico",
    desc: "Danubio, Rin, Sena, Duero y Mekong con AmaWaterways, Uniworld y Scenic.",
  },
  {
    title: "Lunas de miel exclusivas",
    to: "/luna-de-miel-de-lujo",
    desc: "Villas overwater, resorts solo para adultos y experiencias diseñadas para dos.",
  },
];

const schema = buildGraph(
  {
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Agencia de viajes boutique en Puerto Rico",
    isPartOf: WEBSITE_REF,
    inLanguage: "es",
  },
  {
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Agencia de viajes boutique en Puerto Rico",
    description:
      "Servicio de planificación de viajes a medida desde San Juan, Puerto Rico. Especialistas en itinerarios internacionales, cruceros y lunas de miel exclusivas.",
    provider: ORG_REF,
    areaServed: { "@type": "State", name: "Puerto Rico" },
    serviceType: "Travel Planning",
    url: PAGE_URL,
    availableLanguage: ["Spanish", "English"],
  },
  breadcrumbList([
    { name: "Home", url: "https://www.sjuluxetravel.com" },
    { name: "Agencia de Viajes Puerto Rico", url: PAGE_URL },
  ]),
);

const AgenciaDeViajesPuertoRico = () => (
  <Layout>
    <SEOHead
      title="Agencia de Viajes Boutique en Puerto Rico — SJU Luxe Travel"
      description="¿Buscas una agencia de viajes en Puerto Rico que realmente entienda el lujo? SJU Luxe Travel diseña itinerarios exclusivos, cruceros y lunas de miel desde San Juan."
      canonical={PAGE_URL}
      schemaJson={schema}
    />

    <article className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
          San Juan, Puerto Rico
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
          Agencia de Viajes{" "}
          <span className="text-gold-gradient italic">
            Boutique en Puerto Rico
          </span>
        </h1>

        <div className="space-y-6">
          <p className="text-muted-foreground text-base leading-relaxed">
            Si buscas una agencia de viajes en Puerto Rico que vaya más allá del
            paquete estándar, llegaste al lugar correcto. En SJU Luxe Travel
            somos una agencia boutique con base en San Juan, especializada
            exclusivamente en viajes a medida — desde las Maldivas hasta los
            ríos de Europa, pasando por los mejores cruceros que salen desde
            Puerto Rico.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-12">
            ¿Qué hace diferente a una agencia de viajes boutique?
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            A diferencia de las agencias tradicionales o las plataformas de
            reservas en línea, trabajamos con un número selecto de clientes para
            garantizar atención personalizada en cada detalle. Como afiliados de
            NCM Concierge y Travel Leaders, nuestros clientes acceden a upgrades
            de habitación gratuitos, créditos en resort y amenidades VIP que
            simplemente no están disponibles al reservar por cuenta propia.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-12">
            Nuestros servicios de viajes desde Puerto Rico
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 mt-2">
            {SERVICES.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group block rounded-lg border border-border/40 bg-card p-6 transition-colors hover:border-gold/60"
              >
                <h3 className="font-heading text-lg text-foreground group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-gold">
                  Ver más <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>

          <FAQSection
            heading="Preguntas frecuentes sobre nuestra agencia de viajes en Puerto Rico"
            items={FAQ_ITEMS}
          />

          <section className="mt-16 border-t border-border/40 pt-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground">
              ¿Lista para planificar tu próximo viaje?
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-gold px-8 py-3 font-body text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold/10"
            >
              Consulta gratuita <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </article>
  </Layout>
);

export default AgenciaDeViajesPuertoRico;
