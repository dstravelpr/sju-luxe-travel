import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Cruceros Fluviales de Lujo — Agente Certificado desde Puerto Rico",
      "description": "Agente de viajes certificado por AmaWaterways, Avalon Waterways y Riverside Luxury Cruises. Planificación completa de cruceros fluviales de lujo para viajeros de Puerto Rico: Danubio, Rin, Sena, Duero, Nilo y Mekong.",
      "provider": {
        "@type": "TravelAgency",
        "name": "SJU Luxe Travel",
        "url": "https://www.sjuluxetravel.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Juan",
          "addressRegion": "PR",
          "addressCountry": "US"
        }
      },
      "areaServed": { "@type": "State", "name": "Puerto Rico" },
      "serviceType": "River Cruise Planning",
      "url": "https://www.sjuluxetravel.com/cruceros-fluviales-de-lujo-desde-puerto-rico"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿En qué se diferencia un crucero fluvial de uno oceánico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los cruceros fluviales tienen barcos más pequeños (100–190 pasajeros), navegan ríos históricos y atracan en el centro de las ciudades. La experiencia es más íntima, más cultural y sin días en alta mar."
          }
        },
        {
          "@type": "Question",
          "name": "¿Por qué reservar con un agente de viajes certificado por AmaWaterways, Avalon y Riverside?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las certificaciones oficiales dan acceso a tarifas preferenciales, beneficios a bordo exclusivos y soporte directo con los equipos de cada línea. El precio es igual o mejor que reservar directamente."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es la mejor época para un crucero fluvial en Europa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Primavera (abril–mayo) y otoño (septiembre–octubre) son las temporadas más populares. El mercado navideño de diciembre en el Danubio y el Rin es una experiencia única muy solicitada."
          }
        }
      ]
    }
  ]
};

const certifications = [
  "AmaWaterways — Agente Certificado",
  "Avalon Waterways — Agente Certificado",
  "Riverside Luxury Cruises — Agente Certificado",
];

const CrucerosFluviales = () => (
  <Layout>
    <SEOHead
      title="Cruceros Fluviales de Lujo desde Puerto Rico — Agente Certificado | SJU Luxe Travel"
      description="Planifica tu crucero fluvial de lujo desde Puerto Rico con un agente de viajes certificado por AmaWaterways, Avalon Waterways y Riverside Luxury Cruises. Rin, Danubio, Sena, Nilo y más. Consulta gratuita."
      canonical="https://www.sjuluxetravel.com/cruceros-fluviales-de-lujo-desde-puerto-rico"
      schemaJson={schema}
    />

    <article className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Cruceros Fluviales</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
          Cruceros Fluviales de Lujo desde Puerto Rico — <span className="text-gold-gradient italic">Tu Agente de Viajes Certificado</span>
        </h1>

        <div className="flex flex-wrap gap-3 mb-10">
          {certifications.map((cert, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-4 py-2 gold-border rounded-full text-xs font-body tracking-wide text-gold">
              <Award size={14} />
              {cert}
            </span>
          ))}
        </div>

        <div className="prose-custom space-y-6">
          <p className="text-muted-foreground text-base leading-relaxed">
            Los cruceros fluviales o river cruises son la forma más íntima y cultural de explorar Europa, Asia, Egipto y Sudamérica. Como agente de viajes certificado por <strong className="text-foreground">AmaWaterways</strong>, <strong className="text-foreground">Avalon Waterways</strong> y <strong className="text-foreground">Riverside Luxury Cruises</strong>, tengo acceso a tarifas preferenciales, beneficios exclusivos a bordo y el conocimiento especializado para ayudarte a elegir la línea y el itinerario perfectos para ti. Desde San Juan, coordino todo: vuelo, hotel pre-crucero, traslados y el crucero completo.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">¿Por Qué los Cruceros Fluviales Son Diferentes?</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Un crucero fluvial no es un crucero oceánico en pequeño — es una experiencia completamente distinta. Los barcos tienen entre 100 y 190 pasajeros máximo, lo que significa un servicio personalizado que los grandes barcos no pueden ofrecer. Navegas por el corazón de ciudades históricas — amarras en el centro de Viena, Budapest, Ámsterdam o París, a pasos de los museos, catedrales y mercados locales. No hay días en alta mar: cada mañana despiertas en un puerto nuevo. Y a diferencia del crucero oceánico, el crucero fluvial está diseñado para el viajero curioso que quiere profundidad cultural, no entretenimiento a bordo.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Líneas con las que Trabajo — Certificaciones Oficiales</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Soy agente de viajes certificado por las tres siguientes líneas fluviales de lujo, lo que me permite ofrecerte acceso prioritario, tarifas exclusivas y soporte dedicado:
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">AmaWaterways — Certificación Oficial</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Una de las líneas fluviales más premiadas del mundo. Sus buques de última generación navegan el Danubio, Rin, Mosela, Sena, Ródano, Mekong, Chobe y el Nilo. Reconocidos por su gastronomía de autor, sus excursiones para ciclistas y sus camarotes con balcón de doble uso (ventana panorámica y balcón francés). Sus itinerarios de Europa del Este — Budapest, Viena, Bratislava, Passau — son los más solicitados por nuestros clientes de Puerto Rico.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Avalon Waterways — Certificación Oficial</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Pioneros en el concepto de "Suite Ship" con camarotes que se transforman en un balcón abierto de pared a pared. Itinerarios en Europa, Sudamérica (Galápagos y Amazonas) y Asia (Mekong). Sus barcos en el Danubio y el Rin combinan diseño contemporáneo con un enfoque en experiencias locales auténticas. Excelente opción para viajeros que buscan modernidad y flexibilidad en sus excursiones.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Riverside Luxury Cruises — Certificación Oficial</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            La propuesta más reciente y exclusiva del segmento. Buques diseñados con un estándar de lujo superior: suites más amplias, gastronomía de nivel superior y ratio de tripulación por pasajero de los más altos del mercado. Sus itinerarios europeos por el Rin y el Danubio son ideales para el viajero de Puerto Rico que busca la experiencia fluvial más refinada disponible.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Otras Líneas Fluviales de Primer Nivel</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Además de mis certificaciones, trabajo con todo el espectro del lujo fluvial:
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Viking River Cruises</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            El líder del mercado por volumen. Precios todo incluido competitivos, itinerarios en casi todos los ríos principales del mundo y una experiencia cultural muy sólida. Ideal para una primera experiencia fluvial.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Uniworld Boutique River Cruises</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Cada barco es un hotel boutique flotante único, con obras de arte originales y decoración personalizada. Sus rutas por el Sena (París a Normandía) y el Ganges son las más exclusivas del mercado.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Scenic Luxury Cruises</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Los camarotes más grandes del segmento fluvial europeo, con bañera de hidromasaje y balcón privado. Precio todo incluido con bebidas premium, excursiones y propinas incluidas.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Destinos Fluviales Imperdibles</h2>

          {[
            ["Europa Central — El Danubio", "La ruta más popular entre los viajeros de Puerto Rico. Budapest, Viena, Bratislava y Passau en 7 a 14 noches. Las líneas AmaWaterways, Avalon y Riverside operan esta ruta con salidas durante primavera, verano y otoño."],
            ["Europa Occidental — El Rin y el Mosela", "Ámsterdam, Colonia, el Valle del Rin con sus castillos medievales y Basilea. La versión otoñal con viñedos en vendimia es particularmente espectacular. AmaWaterways y Avalon son mis recomendaciones para esta ruta."],
            ["Francia — El Sena y el Ródano", "El Sena conecta París con las playas históricas de Normandía. El Ródano une Lyon, Aviñón y la Provenza. Ideal para el viajero francófilo o para quienes quieren combinar el crucero con estancia en París."],
            ["Portugal — El Duero", "Una de las rutas más románticas de Europa. Navegas entre viñedos de Oporto, quintas históricas y aldeas medievales que no aparecen en ninguna guía de viajes. Avalon Waterways ofrece excelentes itinerarios en esta ruta."],
            ["Egipto — El Nilo", "Desde Luxor hasta Asuán, pasando por los templos de Karnak, el Valle de los Reyes y Abu Simbel. Una experiencia que combina historia milenaria con el lujo moderno de líneas como AmaWaterways."],
            ["Asia — El Mekong", "Camboya y Vietnam desde el río: templos de Angkor, mercados flotantes, aldeas que nunca recibirán un autocar turístico. AmaWaterways y Avalon operan esta ruta con barcos diseñados específicamente para el Mekong."],
          ].map(([title, desc], i) => (
            <div key={i} className="mt-6">
              <h3 className="font-heading text-xl text-foreground">{title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed mt-2">{desc}</p>
            </div>
          ))}

          <h2 className="font-heading text-2xl text-foreground mt-10">Cómo Funciona la Logística desde Puerto Rico</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Ningún crucero fluvial zarpa desde San Juan — todos los embarques son en Europa, Asia o África. Me encargo de coordinar el viaje completo:
          </p>
          <ol className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              "Vuelo desde SJU con conexión en Miami, Nueva York, Atlanta o Filadelfia hacia el puerto de embarque europeo o asiático",
              "Hotel la noche antes del embarque para evitar imprevistos",
              "Traslado privado del hotel al barco",
              "El crucero completo con todos sus beneficios exclusivos",
              "Traslado de desembarque y vuelo de regreso a SJU",
              "Seguro de viaje especializado para cruceros fluviales",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold font-semibold mt-0.5 min-w-[20px]">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="text-muted-foreground text-base leading-relaxed mt-4">
            Puedes reservar solo el crucero si prefieres gestionar los vuelos por tu cuenta, o dejarme armar el paquete completo. La mayoría de mis clientes prefieren el paquete — elimina el estrés logístico y muchas veces resulta más económico que reservar cada componente por separado.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Preguntas Frecuentes sobre Cruceros Fluviales</h2>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="q1" className="border-border/30">
              <AccordionTrigger className="text-foreground font-body text-base hover:text-gold">
                ¿En qué se diferencia un crucero fluvial de uno oceánico?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Los cruceros fluviales tienen barcos mucho más pequeños (100–190 pasajeros vs. 300–700 en cruceros oceánicos de lujo), navegan ríos históricos en lugar de océanos, y atracan en el centro de las ciudades. La experiencia es más íntima, más cultural y sin días en alta mar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="border-border/30">
              <AccordionTrigger className="text-foreground font-body text-base hover:text-gold">
                ¿Por qué reservar con un agente de viajes certificado por AmaWaterways, Avalon y Riverside?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Las certificaciones oficiales me dan acceso a tarifas que no están disponibles al público general, beneficios a bordo como créditos o upgrades cuando están disponibles, y soporte directo con los equipos de ventas de cada línea. No pago más por trabajar conmigo — en la mayoría de los casos el precio es igual o mejor que reservar directamente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="border-border/30">
              <AccordionTrigger className="text-foreground font-body text-base hover:text-gold">
                ¿Cuál es la mejor época para un crucero fluvial en Europa?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Primavera (abril–mayo) y otoño (septiembre–octubre) son las temporadas más populares por clima y eventos locales. El verano (junio–agosto) es temporada alta con los mejores horarios pero mayor demanda. El mercado navideño (diciembre) en el Danubio y el Rin es una experiencia única y muy solicitada.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4" className="border-border/30">
              <AccordionTrigger className="text-foreground font-body text-base hover:text-gold">
                ¿Cuánto tiempo antes debo reservar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Para temporada alta en Europa (verano y Navidad), reserva con 12 a 18 meses de anticipación. Las cabinas con balcón privado y las suites se agotan primero. Para primavera y otoño, 10 a 12 meses es suficiente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5" className="border-border/30">
              <AccordionTrigger className="text-foreground font-body text-base hover:text-gold">
                ¿Puedo combinar el crucero fluvial con días de ciudad?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Sí, y lo recomiendo. La mayoría de mis clientes añaden 2 a 3 noches en el puerto de embarque o desembarque — París, Ámsterdam, Budapest o Lisboa son destinos perfectos para extender el viaje.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-16 text-center py-12 gold-border rounded-lg">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            ¿Te interesa un <span className="text-gold-gradient italic">Crucero Fluvial?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Cuéntame tus fechas, el destino que te llama y tu presupuesto. Te preparo una propuesta comparando las mejores opciones de AmaWaterways, Avalon, Riverside y más.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
            Solicitar Consulta Gratuita
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  </Layout>
);

export default CrucerosFluviales;
