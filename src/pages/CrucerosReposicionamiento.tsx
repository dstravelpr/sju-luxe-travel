import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Printer } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { ORG_REF, WEBSITE_REF, buildGraph, breadcrumbList } from "@/lib/schema";

const PAGE_URL = "https://www.sjuluxetravel.com/cruceros-reposicionamiento";

const schema = buildGraph(
  {
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Cruceros de Reposicionamiento desde San Juan",
    isPartOf: WEBSITE_REF,
    inLanguage: "es",
  },
  {
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Cruceros de reposicionamiento desde San Juan",
    description:
      "Travesías de reposicionamiento en sentido único desde San Juan, Puerto Rico, con itinerarios a la medida para todo presupuesto.",
    provider: ORG_REF,
    areaServed: { "@type": "State", name: "Puerto Rico" },
    serviceType: "Repositioning cruise planning",
    url: PAGE_URL,
  },
  breadcrumbList([
    { name: "Home", url: "https://www.sjuluxetravel.com" },
    { name: "Cruceros de Reposicionamiento desde San Juan", url: PAGE_URL },
  ]),
);

type Tier = "Mejor Valor" | "Precio Medio" | "Premium" | "Ultra-Lujo";

const TIER_CLASSES: Record<Tier, string> = {
  "Mejor Valor": "border-gold/40 text-gold",
  "Precio Medio": "border-border text-muted-foreground",
  Premium: "border-gold/70 text-gold",
  "Ultra-Lujo": "border-gold bg-gold/10 text-gold",
};

const GROUPS: { tier: Tier; sailings: [string, string, string, string, string][] }[] =
  [
    {
      tier: "Mejor Valor",
      sailings: [
        [
          "Celebrity Constellation",
          "Celebrity Cruises",
          "3 abr 2027",
          "San Juan → Barcelona, España",
          "13 noches",
        ],
        [
          "Star Pride",
          "Windstar Cruises",
          "30 mar 2027",
          "San Juan → Londres, Inglaterra",
          "16 noches",
        ],
        [
          "Norwegian Prima",
          "Norwegian Cruise Line",
          "4 abr 2027",
          "San Juan → Roma, Italia",
          "17 noches",
        ],
      ],
    },
    {
      tier: "Precio Medio",
      sailings: [
        [
          "Viking Sea",
          "Viking",
          "26 feb 2028",
          "San Juan → Barcelona, España",
          "12 noches",
        ],
        [
          "Viking Sky",
          "Viking",
          "27 feb 2028",
          "San Juan → Lisboa, Portugal",
          "10 noches",
        ],
        [
          "SeaDream I",
          "SeaDream",
          "17 abr 2027",
          "San Juan → Lisboa, Portugal",
          "14 noches",
        ],
        [
          "Star Pride",
          "Windstar Cruises",
          "22 nov 2027",
          "San Juan → Puntarenas, Costa Rica",
          "21 noches",
        ],
        [
          "Star Pride",
          "Windstar Cruises",
          "29 nov 2027",
          "San Juan → Puntarenas, Costa Rica",
          "14 noches",
        ],
        [
          "SeaDream I",
          "SeaDream",
          "22 abr 2028",
          "San Juan → Málaga, España",
          "14 noches",
        ],
        [
          "Viking Sea",
          "Viking",
          "6 mar 2027",
          "San Juan → Roma, Italia",
          "20 noches",
        ],
      ],
    },
    {
      tier: "Premium",
      sailings: [
        [
          "MSC Explora 1",
          "MSC Explora Journeys",
          "1 mar 2027",
          "San Juan → Barcelona, España",
          "23 noches",
        ],
        [
          "Silver Shadow",
          "Silversea",
          "9 mar 2027",
          "San Juan → Lisboa, Portugal",
          "14 noches",
        ],
        [
          "MSC Explora 3",
          "MSC Explora Journeys",
          "5 abr 2027",
          "San Juan → Ciudad de Panamá, Panamá",
          "17 noches",
        ],
      ],
    },
    {
      tier: "Ultra-Lujo",
      sailings: [
        [
          "Ritz-Carlton Evrima",
          "Ritz-Carlton Yacht Collection",
          "12 nov 2026",
          "San Juan → Ciudad de Panamá, Panamá",
          "7 noches",
        ],
        [
          "Ritz-Carlton Evrima",
          "Ritz-Carlton Yacht Collection",
          "10 nov 2027",
          "San Juan → Ciudad de Panamá, Panamá",
          "7 noches",
        ],
      ],
    },
  ];

const INFO_CARDS = [
  {
    label: "¿Qué es un Crucero de Reposicionamiento?",
    body: "Las líneas de cruceros mueven sus barcos entre regiones al cambio de temporada y venden esas travesías en sentido único a precios reducidos. Un boleto, el cruce del océano incluido.",
  },
  {
    label: "¿Por Qué Salir desde San Juan?",
    body: "Puerto Rico es territorio de EE.UU. — los americanos embarcan sin pasaporte. Sin vuelo previo a Miami o Nueva York. Aborda directamente desde el histórico Puerto de San Juan.",
  },
  {
    label: "Cómo Te Ayudamos",
    body: "SJU Luxe Travel gestiona tu travesía, hoteles pre y post crucero, y cualquier viaje adicional — un itinerario completo, hecho a tu medida, para todo presupuesto.",
  },
];

const TierBadge = ({ tier }: { tier: Tier }) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full border text-[11px] font-body tracking-[0.12em] uppercase whitespace-nowrap ${TIER_CLASSES[tier]}`}
  >
    {tier}
  </span>
);

const CrucerosReposicionamiento = () => {
  const { localPath } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Cruceros de Reposicionamiento desde San Juan | SJU Luxe Travel"
        description="Descubre las 15 travesías de reposicionamiento disponibles desde San Juan, Puerto Rico — desde Mejor Valor hasta Ultra-Lujo. Agencia de viajes a medida en todo presupuesto."
        titleEs="Cruceros de Reposicionamiento desde San Juan | SJU Luxe Travel"
        descriptionEs="Descubre las 15 travesías de reposicionamiento disponibles desde San Juan, Puerto Rico — desde Mejor Valor hasta Ultra-Lujo. Agencia de viajes a medida en todo presupuesto."
        canonical={PAGE_URL}
        schemaJson={schema}
      />

      <article className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-start justify-between gap-6">
            <div>
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                Travesías Transatlánticas
              </span>
              <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3">
                Cruceros de Reposicionamiento desde San Juan
              </h1>
              <p className="text-muted-foreground font-body text-sm md:text-base mt-4">
                15 travesías disponibles · Nov 2026 – Apr 2028 · 7 líneas de
                cruceros · Ordenadas por valor
              </p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden shrink-0 inline-flex items-center gap-2 px-4 py-2 gold-border gold-border-hover rounded-full font-body text-[11px] tracking-[0.15em] uppercase text-gold transition-colors"
              aria-label="Imprimir o guardar como PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {INFO_CARDS.map((c) => (
              <div
                key={c.label}
                className="bg-card gold-border rounded-lg p-6 md:p-7"
              >
                <h2 className="font-heading text-lg text-foreground leading-snug">
                  {c.label}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl text-foreground mt-20">
            Todos los Viajes ·{" "}
            <span className="text-gold-gradient italic">
              Ordenados por Valor
            </span>
          </h2>

          <div className="flex flex-wrap gap-3 mt-6">
            {(
              ["Mejor Valor", "Precio Medio", "Premium", "Ultra-Lujo"] as Tier[]
            ).map((tier) => (
              <TierBadge key={tier} tier={tier} />
            ))}
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  {["Barco y Línea", "Salida", "Ruta", "Noches", "Nivel"].map(
                    (h) => (
                      <th
                        key={h}
                        className="py-3 pr-6 font-body text-[11px] tracking-[0.2em] uppercase text-gold font-semibold whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {GROUPS.map((group) => (
                  <Fragment key={group.tier}>
                    <tr>
                      <th
                        colSpan={5}
                        className="pt-8 pb-3 text-left font-body text-[11px] tracking-[0.25em] uppercase text-muted-foreground border-b border-border/40"
                      >
                        {group.tier}
                      </th>
                    </tr>
                    {group.sailings.map(
                      ([ship, line, date, route, nights], i) => (
                        <tr
                          key={`${group.tier}-${i}`}
                          className="border-b border-border/30"
                        >
                          <td className="py-4 pr-6 align-top">
                            <span className="block font-heading text-base text-foreground">
                              {ship}
                            </span>
                            <span className="block text-muted-foreground text-xs mt-1">
                              {line}
                            </span>
                          </td>
                          <td className="py-4 pr-6 align-top text-muted-foreground text-sm whitespace-nowrap">
                            {date}
                          </td>
                          <td className="py-4 pr-6 align-top text-foreground/90 text-sm">
                            {route}
                          </td>
                          <td className="py-4 pr-6 align-top text-muted-foreground text-sm whitespace-nowrap">
                            {nights}
                          </td>
                          <td className="py-4 align-top">
                            <TierBadge tier={group.tier} />
                          </td>
                        </tr>
                      ),
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed mt-8">
            Precios y disponibilidad sujetos a cambio. Contáctanos para confirmar
            disponibilidad y crear tu itinerario personalizado.
          </p>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h2 className="font-heading text-2xl text-foreground mb-3">
              ¿Listo para{" "}
              <span className="text-gold-gradient italic">
                Planificar tu Travesía?
              </span>
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Viajes a medida · Todo presupuesto · Itinerarios personalizados
              desde San Juan
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)]"
            >
              Contáctanos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CrucerosReposicionamiento;
