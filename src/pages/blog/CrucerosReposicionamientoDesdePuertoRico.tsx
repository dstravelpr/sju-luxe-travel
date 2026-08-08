import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Picture } from "@/components/Picture";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/blog-repositioning-cruise.jpg";
import heroImgWebp from "@/assets/blog-repositioning-cruise.webp";

const URL =
  "https://www.sjuluxetravel.com/blog/cruceros-de-reposicionamiento-desde-puerto-rico";
const OG_IMAGE = "https://www.sjuluxetravel.com/og/cruceros-reposicionamiento.jpg";

const faqs = [
  {
    q: "¿Necesito pasaporte para embarcar en San Juan?",
    a: "Los ciudadanos de los Estados Unidos no necesitan pasaporte para embarcar en Puerto Rico, ya que es territorio americano. Sin embargo, dependiendo de los puertos que visites durante la travesía y el país de destino final, puede que necesites uno al llegar. Siempre recomendamos viajar con pasaporte vigente.",
  },
  {
    q: "¿Cuánto duran los cruceros de reposicionamiento desde San Juan?",
    a: "Las travesías disponibles varían entre 7 y 23 noches. Los cruceros al Canal de Panamá son los más cortos (7 noches), mientras que las travesías transatlánticas hacia España o Italia pueden durar entre 12 y 23 noches.",
  },
  {
    q: "¿En qué temporada salen los cruceros de reposicionamiento desde Puerto Rico?",
    a: "La mayoría de las salidas ocurren en primavera (marzo y abril), cuando los barcos migran del Caribe al Mediterráneo para el verano europeo. También hay salidas en noviembre hacia el Canal de Panamá y Costa Rica al inicio de la temporada caribeña.",
  },
  {
    q: "¿Puedo reservar directamente con la línea o necesito una agencia?",
    a: "Puedes reservarlo directamente, pero trabajar con una agencia como SJU Luxe Travel no tiene costo adicional para el cliente — las agencias reciben comisión de la línea. A cambio, recibes asesoría personalizada, la combinación con hoteles y tours, y alguien que gestione cualquier cambio o imprevisto.",
  },
  {
    q: "¿Son los cruceros de reposicionamiento buenos para familias?",
    a: "Depende del crucero. Celebrity Cruises y Norwegian son más versátiles para familias con programas para niños. Las líneas boutique como SeaDream o Ritz-Carlton Yacht Collection están diseñadas para adultos. Contáctanos para encontrar la opción ideal según tu grupo.",
  },
];

const schemaJson = buildGraph(
  {
    "@type": "BlogPosting",
    headline:
      "Cruceros de Reposicionamiento desde Puerto Rico: La Guía Completa para 2026–2028",
    description:
      "Qué son los cruceros de reposicionamiento, por qué salir desde San Juan es una ventaja y las 15 travesías disponibles desde Puerto Rico hacia Europa, Panamá y Costa Rica.",
    author: AUTHOR,
    publisher: ORG_REF,
    datePublished: "2026-08-08",
    dateModified: "2026-08-08",
    inLanguage: "es-PR",
    image: OG_IMAGE,
    url: URL,
    mainEntityOfPage: URL,
    keywords: [
      "cruceros de reposicionamiento desde Puerto Rico",
      "cruceros transatlánticos desde San Juan",
      "repositioning cruises San Juan",
      "cruceros desde Puerto Rico a Europa",
    ],
  },
  {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
);

const Post = () => {
  const { localPath } = useLanguage();

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage={OG_IMAGE}
        title="Cruceros de Reposicionamiento desde Puerto Rico: La Guía Completa para 2026–2028"
        description="¿Sabías que puedes cruzar el Atlántico desde San Juan en un crucero de lujo? Descubre qué son los cruceros de reposicionamiento y los 15 viajes disponibles desde Puerto Rico."
        canonical={URL}
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
          {
            name: "Cruceros de Reposicionamiento desde Puerto Rico",
            url: URL,
          },
        ]}
        schemaJson={schemaJson}
      />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to={localPath("/blog")}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8"
          >
            <ArrowLeft size={16} />
            Volver al Blog
          </Link>

          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
              Cruceros
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              Cruceros de Reposicionamiento desde Puerto Rico: La Guía Completa
              para 2026–2028
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <Link
                to={localPath("/about")}
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <User size={12} className="text-gold" />
                Daniel Santiago Díaz
                <span className="text-muted-foreground/70">
                  {" "}
                  — SJU Luxe Travel
                </span>
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-gold" />8 de agosto de 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-gold" />7 min de lectura
              </span>
            </div>
            <p className="text-muted-foreground/70 text-xs mt-3 italic">
              Última actualización: 8 de agosto de 2026
            </p>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <Picture
              src={heroImg}
              webpSrc={heroImgWebp}
              alt="Crucero de reposicionamiento en alta mar, navegando el Atlántico al atardecer"
              className="w-full h-full object-cover"
              width={1536}
              height={1152}
            />
          </div>

          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p className="text-lg text-foreground/90">
              ¿Sabías que puedes cruzar el Atlántico desde San Juan en un
              crucero de clase mundial — sin hacer escala en Miami ni Nueva
              York? Los <strong>cruceros de reposicionamiento desde Puerto
              Rico</strong> son uno de los secretos mejor guardados del mundo
              del turismo, y en este momento hay 15 travesías disponibles
              saliendo directamente del Puerto de San Juan hacia Europa, Panamá
              y Costa Rica.
            </p>
            <p>
              En esta guía te explicamos qué son, por qué salir desde Puerto
              Rico es una ventaja enorme, y cuáles son las mejores opciones
              disponibles para 2026, 2027 y 2028.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              ¿Qué son los cruceros de reposicionamiento?
            </h2>
            <p>
              Al cambio de temporada, las grandes líneas de cruceros mueven sus
              barcos entre regiones: del Caribe al Mediterráneo para el verano
              europeo, o de Europa de regreso al Caribe para la temporada de
              invierno. En vez de navegar vacíos, venden esos viajes en sentido
              único — conocidos como "repositioning cruises" o "repo cruises" —
              a precios significativamente más bajos que un itinerario regular.
            </p>
            <p>
              Lo que obtienes es una travesía oceánica de varios días, con
              comidas, entretenimiento y paradas intermedias en puertos, todo
              incluido en el precio del camarote. Es la forma más épica — y a
              menudo la más económica — de llegar a Europa sin tomar un avión.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              ¿Por qué Puerto Rico es el punto de partida ideal?
            </h2>
            <p>
              Aquí está la ventaja que pocos aprovechan:{" "}
              <strong>Puerto Rico es territorio de los Estados Unidos</strong>.
              Esto significa que los ciudadanos americanos embarcan sin
              necesidad de pasaporte internacional, algo que no ocurre al salir
              desde puertos extranjeros.
            </p>
            <p>
              Además, a diferencia de volar hasta Fort Lauderdale, Miami o Nueva
              York para abordar un crucero, los residentes de Puerto Rico llegan
              directamente al <strong>Puerto de San Juan</strong> — a pasos del
              Viejo San Juan. Sin conexiones, sin escalas, sin noches
              adicionales de hotel antes del viaje.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              Destinos disponibles desde San Juan
            </h2>
            <p>
              Desde el Puerto de San Juan, las travesías de reposicionamiento
              actualmente disponibles conectan con:
            </p>
            <ul className="space-y-2 list-none">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong>España</strong> — Barcelona y Málaga (cruceros
                  transatlánticos hacia el Mediterráneo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong>Portugal</strong> — Lisboa, la puerta de entrada
                  perfecta a Europa Occidental. Consulta nuestros{" "}
                  <Link
                    to={localPath("/destinations/portugal")}
                    className="text-gold hover:text-gold-light underline"
                  >
                    viajes a medida a Portugal
                  </Link>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong>Italia</strong> — Roma / Civitavecchia (acceso directo
                  al corazón de Europa)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong>Inglaterra</strong> — Londres / Southampton (ideal
                  para empezar un recorrido por el norte de Europa)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong>Panamá</strong> — Ciudad de Panamá (con posibilidad de
                  continuar hacia el Pacífico)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong>Costa Rica</strong> — Puntarenas (perfecta para
                  explorar Centroamérica)
                </span>
              </li>
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              ¿Qué líneas de cruceros operan desde San Juan?
            </h2>
            <p>
              Para 2026–2028, siete líneas de cruceros tienen travesías de
              reposicionamiento programadas desde San Juan:
            </p>
            <ul className="space-y-2 list-none">
              {[
                ["Celebrity Cruises", "Celebrity Constellation"],
                ["Windstar Cruises", "Star Pride"],
                ["Norwegian Cruise Line", "Norwegian Prima"],
                ["Viking", "Viking Sea y Viking Sky"],
                ["SeaDream", "SeaDream I"],
                ["MSC Explora Journeys", "MSC Explora 1 y MSC Explora 3"],
                ["Silversea", "Silver Shadow"],
                ["Ritz-Carlton Yacht Collection", "Ritz-Carlton Evrima"],
              ].map(([line, ship]) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>
                    <strong>{line}</strong> — {ship}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              Desde opciones de gran valor hasta travesías ultra-lujosas en
              yates privados, hay algo para cada presupuesto. Consulta el
              listado completo en nuestra{" "}
              <Link
                to={localPath("/cruceros-reposicionamiento")}
                className="text-gold hover:text-gold-light underline"
              >
                guía de cruceros de reposicionamiento desde San Juan
              </Link>
              .
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              ¿Qué incluye un crucero de reposicionamiento?
            </h2>
            <p>Aunque depende de la línea, en general incluyen:</p>
            <ul className="space-y-2 list-none">
              {[
                "Alojamiento en camarote (interior, balcón o suite según el precio elegido)",
                "Comidas a bordo (buffet y restaurantes de especialidad)",
                "Entretenimiento, conferencias y actividades durante los días de navegación",
                "Paradas en puertos intermedios según el itinerario",
                "Impuestos portuarios",
              ].map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {it}
                </li>
              ))}
            </ul>
            <p>
              Lo que generalmente no está incluido: vuelo de regreso desde el
              destino final, tours en tierra, bebidas premium y propinas.
            </p>
            <p>
              Un consejo de agente de viajes: combina siempre el crucero con al
              menos una semana en el destino final. Llegas a Lisboa en barco —
              ¿por qué no quedarte explorando Portugal? En SJU Luxe Travel
              armamos ese paquete completo por ti.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              Preguntas Frecuentes sobre Cruceros de Reposicionamiento desde
              Puerto Rico
            </h2>
            {faqs.map((f) => (
              <div key={f.q} className="space-y-2">
                <h3 className="font-heading text-xl text-foreground mt-6">
                  {f.q}
                </h3>
                <p>{f.a}</p>
              </div>
            ))}

            <h2 className="font-heading text-2xl text-foreground mt-10">
              ¿Cómo reservar tu crucero de reposicionamiento desde San Juan?
            </h2>
            <p>
              En <strong>SJU Luxe Travel</strong> nos especializamos en viajes a
              medida para todo presupuesto. Reservamos tu travesía, coordinamos
              el vuelo de regreso desde tu destino final, y armamos las noches
              de hotel antes y después del crucero para que tu viaje sea una
              experiencia completa.
            </p>
            <p>
              ¿Quieres saber qué opción va mejor contigo?{" "}
              <Link
                to={localPath("/contact")}
                className="text-gold hover:text-gold-light underline"
              >
                Contáctanos aquí
              </Link>{" "}
              y te respondemos en menos de 24 horas.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Travesías verificadas vía{" "}
              <a
                href="https://repocruises.com/ports/san-juan/departures"
                target="_blank"
                rel="noopener"
                className="text-gold hover:text-gold-light underline"
              >
                RepoCruises
              </a>
              .
            </p>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              ¿Listo para planificar tu travesía?
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Viajes a medida · Todo presupuesto · Itinerarios personalizados
              desde San Juan
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
