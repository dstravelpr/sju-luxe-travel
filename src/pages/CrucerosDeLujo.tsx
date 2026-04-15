import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CrucerosDeLujo = () => (
  <Layout>
    <SEOHead
      title="Cruceros de Lujo desde San Juan, Puerto Rico — Planificación VIP | SJU Luxe Travel"
      description="Planifica tu crucero de lujo desde San Juan, Puerto Rico con SJU Luxe Travel. Acceso a cruceros premium, cabinas exclusivas, excursiones privadas y beneficios VIP de NCM Concierge que no obtienes reservando directo."
      canonical="https://www.sjuluxetravel.com/cruceros-de-lujo-desde-san-juan"
      schemaJson={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "Cruceros de Lujo desde San Juan Puerto Rico",
            "provider": { "@type": "TravelAgency", "name": "SJU Luxe Travel", "url": "https://www.sjuluxetravel.com" },
            "areaServed": "San Juan, Puerto Rico",
            "description": "Planificación VIP de cruceros de lujo que salen desde el puerto de San Juan, Puerto Rico, con beneficios exclusivos NCM Concierge.",
            "url": "https://www.sjuluxetravel.com/cruceros-de-lujo-desde-san-juan"
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuáles son las mejores líneas de cruceros de lujo que salen de San Juan en 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En 2026, San Juan cuenta con salidas de las principales líneas de lujo del mundo: Ritz-Carlton Yacht Collection, Explora Journeys, Virgin Voyages, Azamara, Crystal Cruises, Oceania, Regent Seven Seas, Silversea, Viking Ocean, Seabourn y SeaDream Yacht Club. Como agente de viajes especializado en cruceros de lujo desde Puerto Rico, te ayudo a comparar opciones, acceder a tarifas preferenciales y elegir la línea que mejor se adapta a tu estilo de viaje y presupuesto."
                }
              }
            ]
          }
        ]
      }}
    />

    <article className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Experiencias en el Mar</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
          Cruceros de Lujo desde San Juan, Puerto Rico — <span className="text-gold-gradient italic">Tu Asesor VIP</span>
        </h1>

        <div className="prose-custom space-y-6">
          <p className="text-muted-foreground text-base leading-relaxed">
            San Juan es uno de los puertos de cruceros más importantes del Caribe. Cada semana, decenas de barcos parten del Muelle de Pan American — pero no todos los cruceros son iguales, y definitivamente no todas las experiencias a bordo son iguales. La diferencia entre un crucero ordinario y un crucero de lujo extraordinario está, en gran parte, en cómo lo planificas y con quién lo planificas.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">SJU Luxe Travel</strong> es tu agente de cruceros de lujo con base en San Juan, Puerto Rico. Como parte de la red <strong className="text-foreground">NCM Concierge — Travel Leaders</strong>, tenemos acceso a beneficios VIP exclusivos, tarifas preferentes y atención personalizada que simplemente no obtienes reservando directamente con la naviera.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">¿Por Qué Planificar Tu Crucero con un Agente de Viaje Especializado?</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Al trabajar con SJU Luxe Travel a través de nuestra red NCM Concierge, recibes:
          </p>
          <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              ["Crédito a bordo (onboard credit)", "dinero real para gastar en spa, excursiones o restaurantes especiales"],
              ["Amenidades de bienvenida en cabina", "champagne, frutas, flores coordinadas antes de embarcar"],
              ["Acceso a tarifas de grupo y tarifas no publicadas", ""],
              ["Selección de cabina óptima según tu presupuesto y preferencias", ""],
              ["Excursiones privadas en cada puerto", "guías privados en lugar de excursiones masivas"],
              ["Coordinación de hotel en San Juan la noche anterior, transfers y extensiones de itinerario", ""],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-foreground">{title}</strong>{desc ? ` — ${desc}` : ""}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">Líneas de Cruceros de Lujo que Zarpan desde San Juan en 2026</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Estas son las líneas de lujo con salidas confirmadas o programadas desde el Puerto de San Juan este año — y las que trabajo como agente de viajes especializado:
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Ritz-Carlton Yacht Collection</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Lo más nuevo y exclusivo en llegar a San Juan. Tres yates de ultra-lujo (Evrima, Ilma, Luminara) con máximo 298 pasajeros, diseño de hotel de cinco estrellas y una propuesta que borra la línea entre yate privado y crucero. Servicio casi personalizado al 100%, gastronomía de nivel Michelin y acceso a puertos pequeños que las grandes navieras no pueden alcanzar.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Explora Journeys</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            La nueva línea de lujo de MSC, llegando al Caribe con una propuesta diseñada para el viajero moderno de alto nivel. Sus barcos combinan espacios amplios, múltiples restaurantes de autor y un ambiente que se siente más resort de playa que crucero tradicional. Una de las propuestas más frescas del segmento en 2026.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Virgin Voyages</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Solo para adultos. Sin buffet, sin horarios fijos, sin el ambiente familiar del crucero convencional. Sus barcos tipo Scarlet Lady ofrecen más de 20 restaurantes incluidos en la tarifa, spa Redemption, entretenimiento curado y un ambiente que apela al viajero de lujo millennial y Gen X que rechaza el crucero tradicional. Sus salidas desde San Juan al Caribe son de las más solicitadas en 2026.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Azamara Cruises</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Especialistas en cruceros de inmersión cultural con estadías nocturnas en puerto. Sus barcos de tamaño medio (menos de 700 pasajeros) atracan cuando los demás ya han zarpado, permitiéndote vivir la ciudad de noche. Excelente opción para el viajero que quiere profundidad en cada destino, no solo un día de excursión.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Crystal Cruises</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Regresaron renovados en 2023 tras su relanzamiento y están de vuelta en el Caribe. Sinónimo histórico de ultra-lujo en el mar: servicio de mayordomo, todo incluido premium y una clientela fiel que los ha seguido por décadas. Sus camarotes y suites figuran entre los más espaciosos del segmento.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Oceania Cruises</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Para el viajero que pone la gastronomía primero. Barcos boutique, cocina de autor con el programa Culinary Center a bordo y destinos boutique que los barcos grandes no pueden visitar. Sus rutas desde San Juan hacia el Caribe sur son perfectas para quienes ya conocen el Caribe convencional.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Regent Seven Seas</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            El todo incluido más completo del mercado: vuelos en business class, excursiones en cada puerto, bebidas premium, spa y propinas — todo en el precio. Si quieres la experiencia más sin complicaciones posible, Regent es la respuesta.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Silversea</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Elegancia europea y servicio ultra-personalizado. Sus barcos de expedición abren puertas a la Antártida, Galápagos y el Ártico, mientras que su flota clásica cubre el Caribe con el refinamiento que los distingue. Todo suite, todo incluido.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Viking Ocean Cruises</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Sin casinos, sin espectáculos masivos, sin niños. Solo destinos, historia y gastronomía. Sus barcos uniformes de 930 pasajeros ofrecen conferencias a bordo, excursiones culturales incluidas y una clientela que viaja para aprender, no solo para descansar.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Seabourn</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Ultra-lujo en el mar. Barcos pequeños (máximo 600 pasajeros), servicio casi de yate privado, champagne en la cubierta y acceso a puertos íntimos donde los grandes barcos no caben. Sus itinerarios del Caribe desde San Juan son perfectos para el viajero que busca exclusividad absoluta.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">SeaDream Yacht Club</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Dos mega-yates de solo 112 pasajeros cada uno. La experiencia más cercana a un yate privado disponible en el mercado: sin horarios fijos, sin código de etiqueta estricto, sin masas. Atracan en puertos boutique del Caribe donde ningún otro crucero llega. La opción favorita para el cliente que lo ha probado todo y quiere algo verdaderamente diferente.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Itinerarios de Crucero Populares desde San Juan</h2>
          <ul className="space-y-3 text-muted-foreground text-base leading-relaxed list-none">
            {[
              ["Caribe del Este y Sur", "Barbados, St. Lucia, Grenada, Aruba, Curaçao"],
              ["Caribe del Oeste", "Jamaica, Islas Caimán, Belize, Costa Maya"],
              ["Islas del Caribe del Norte", "St. Barts, St. Maarten, Antigua, St. Kitts"],
              ["Trasatlántico desde San Juan", "Cruzar el Atlántico hacia España, Portugal o las Islas Canarias"],
              ["Reposicionamientos", "Tarifas reducidas en itinerarios largos desde San Juan hacia Europa o el Mediterráneo"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-foreground">{title}</strong> — {desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">Cruceros de Lujo para Grupos desde Puerto Rico</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            ¿Celebras un cumpleaños especial, una luna de miel, un aniversario o una reunión familiar? Coordinamos cruceros de lujo en grupo con:
          </p>
          <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              "Bloques de cabinas en ubicaciones premium",
              "Cenas privadas en restaurantes de especialidad a bordo",
              "Cócteles de bienvenida privados",
              "Excursiones privadas en cada puerto",
              "Atención individual a cada miembro del grupo",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">El Puerto de San Juan — Tu Puerta de Salida al Mundo</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            El Terminal de Cruceros de San Juan opera desde el histórico Muelle de Pan American y el Old San Juan Cruise Port. Antes de zarpar, podemos coordinar:
          </p>
          <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              "Estadía en hotel boutique en el Viejo San Juan o Condado la noche anterior",
              "Transfer privado desde tu casa hasta el puerto",
              "Cena de pre-crucero en uno de los mejores restaurantes de San Juan",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="prose-custom space-y-6 mt-10">
          <h2 className="font-heading text-2xl text-foreground">Preguntas Frecuentes sobre Cruceros de Lujo desde San Juan</h2>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="q1" className="border-border/30">
              <AccordionTrigger className="text-foreground font-body text-base hover:text-gold">
                ¿Cuáles son las mejores líneas de cruceros de lujo que salen de San Juan en 2026?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                En 2026, San Juan cuenta con salidas de las principales líneas de lujo del mundo: Ritz-Carlton Yacht Collection, Explora Journeys, Virgin Voyages, Azamara, Crystal Cruises, Oceania, Regent Seven Seas, Silversea, Viking Ocean, Seabourn y SeaDream Yacht Club. Como agente de viajes especializado en cruceros de lujo desde Puerto Rico, te ayudo a comparar opciones, acceder a tarifas preferenciales y elegir la línea que mejor se adapta a tu estilo de viaje y presupuesto.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">
            ¿Prefieres un crucero por ríos históricos?{" "}
            <Link to="/cruceros-fluviales-de-lujo-desde-puerto-rico" className="text-gold hover:underline">
              Descubre nuestros cruceros fluviales de lujo →
            </Link>
          </p>
        </div>

        <div className="mt-16 text-center py-12 gold-border rounded-lg">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            ¿Listo para zarpar desde San Juan <span className="text-gold-gradient italic">en el crucero de tus sueños?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Contáctanos hoy para tu consulta gratuita. Cuéntanos a dónde quieres ir, cuándo y con quién — y nosotros encontramos el crucero perfecto con los mejores beneficios disponibles.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
            Consulta Gratuita de Cruceros
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  </Layout>
);

export default CrucerosDeLujo;