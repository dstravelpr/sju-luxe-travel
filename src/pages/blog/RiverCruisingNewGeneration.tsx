import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/blog-river-cruise.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "River Cruising Isn't Just for Your Parents Anymore — And That Changes Everything",
      description: "84% of travelers under 35 want to take a river cruise. A luxury travel advisor explains why — and how to get the most out of the experience.",
      image: "https://www.sjuluxetravel.com/assets/blog-river-cruise.jpg",
      author: { "@type": "Person", name: "Daniel Santiago Díaz", url: "https://www.sjuluxetravel.com/about" },
      publisher: { "@type": "Organization", name: "SJU Luxe Travel", url: "https://www.sjuluxetravel.com" },
      datePublished: "2026-05-13",
      dateModified: "2026-06-02",
      inLanguage: "en",
      keywords: ["luxury river cruise", "river cruising Puerto Rico", "Danube river cruise", "Rhine river cruise", "Douro river cruise", "AmaWaterways", "Avalon Waterways", "Riverside Luxury Cruises", "river cruise for young travelers"],
      url: "https://www.sjuluxetravel.com/blog/river-cruising-new-generation",
      mainEntityOfPage: "https://www.sjuluxetravel.com/blog/river-cruising-new-generation",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Are river cruises good for younger travelers?", acceptedAnswer: { "@type": "Answer", text: "Yes — according to CLIA (Cruise Lines International Association), Gen X and Millennials now make up the fastest-growing demographic in river cruising, with North American river cruise passengers up more than 20% year over year. Newer ships and itineraries offer real flexibility (dine when you want, choose your excursion intensity, skip the group tour), which matches what younger U.S. travelers actually want." } },
        { "@type": "Question", name: "Which river cruise line is best?", acceptedAnswer: { "@type": "Answer", text: "AmaWaterways for active gourmet travelers (onboard bikes, Michelin-recognized dining). Avalon Waterways for biggest panoramic views and flexible excursion choices. Riverside Luxury Cruises (former Crystal River) for top-tier all-inclusive luxury with butler service. The right line depends on your travel style." } },
        { "@type": "Question", name: "What's included in a luxury river cruise?", acceptedAnswer: { "@type": "Answer", text: "Cabin, all meals, wines and beverages with dinner, guided shore excursions in every port, gratuities (on most luxury lines), and transfers. There are no hidden fees the way ocean cruises layer them on — almost everything is bundled into the cruise fare." } },
        { "@type": "Question", name: "What are the best river cruise destinations?", acceptedAnswer: { "@type": "Answer", text: "The Danube (Vienna, Budapest, Bratislava), the Rhine (Cologne, Strasbourg, Basel), the Douro in Portugal (Porto wine country), and the Mekong (Vietnam and Cambodia) are the most-requested itineraries. The Seine (Paris to Normandy) and Rhône (Burgundy/Provence) are excellent secondary choices." } },
        { "@type": "Question", name: "How do I book a river cruise from Puerto Rico?", acceptedAnswer: { "@type": "Answer", text: "Most river cruises depart from European cities, so the booking starts with finding the right SJU flight routing (typically via JFK, MIA or ATL) and a pre-cruise hotel night. A certified river cruise advisor coordinates flights, hotels, transfers and the cruise as one package — often with extra perks on top." } },
      ],
    },
  ],
};


const RiverCruisingNewGeneration = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        schemaJson={schemaJson}
        title={
          isEs
            ? "Cruceros Fluviales de Lujo: Ya No Son Solo Para Tus Padres"
            : "Luxury River Cruising Isn't Just for Your Parents Anymore"
        }
        description={
          isEs
            ? "El 84% de los viajeros menores de 35 años quiere hacer un crucero fluvial. Un asesor de viajes de lujo explica por qué — y cómo aprovechar al máximo la experiencia."
            : "84% of travelers under 35 want to take a river cruise. A luxury travel advisor explains why — and how to get the most out of the experience."
        }
        canonical="https://www.sjuluxetravel.com/blog/river-cruising-new-generation"
      />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to={localPath("/blog")}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8"
          >
            <ArrowLeft size={16} />
            {isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>

          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
              {isEs ? "Cruceros Fluviales" : "River Cruising"}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              {isEs
                ? "Los cruceros fluviales ya no son solo para tus padres — y eso lo cambia todo"
                : "River Cruising Isn't Just for Your Parents Anymore — And That Changes Everything"}
            </h1>
            <p className="font-heading text-xl md:text-2xl text-muted-foreground italic mb-6">
              {isEs
                ? "Por qué una nueva generación está descubriendo el viaje más inteligente del mundo"
                : "Why a new generation is discovering the smartest way to travel"}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "Mayo 2026" : "May 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "6 min de lectura" : "6 min read"}</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-10">
            <img
              src={heroImg}
              alt={
                isEs
                  ? "Crucero fluvial de lujo navegando el Danubio al atardecer junto a un castillo y viñedos"
                  : "Luxury river cruise ship sailing the Danube at sunset past a castle and vineyards"
              }
              className="w-full h-full object-cover"
              width={1600}
              height={900}
            />
          </div>

          {/* TL;DR Box */}
          <div className="mb-12 p-6 md:p-8 gold-border rounded-lg bg-charcoal/40">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-gold" />
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                {isEs ? "Resumen Rápido" : "TL;DR — Key Takeaways"}
              </span>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed list-none">
              {(isEs
                ? [
                    "El 84% de los viajeros británicos de 18 a 34 años quiere hacer un crucero fluvial.",
                    "Solo el 9% de los no-cruceristas lo ven como buen valor — vs. 36% de quienes ya lo vivieron.",
                    "Todo está incluido: cabina, comidas, vinos, excursiones y traslados.",
                    "El Danubio, el Rin, el Duero y el Mekong son los itinerarios estrella.",
                  ]
                : [
                    "84% of UK travelers aged 18–34 are interested in river cruising.",
                    "Only 9% of non-cruisers see it as good value — vs. 36% of those who've sailed.",
                    "All-inclusive: cabin, meals, wine, excursions and transfers.",
                    "The Danube, Rhine, Douro and Mekong lead the most-requested itineraries.",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="prose-custom space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Hace cinco años, si le decías a alguien de 30 años que un crucero por el río era una opción real de vacaciones, te miraban raro. Hoy la historia es completamente diferente."
                : "Here's something that would've shocked the travel industry five years ago: the demographic most excited about river cruising right now isn't retirees. It's people under 35."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "Una encuesta reciente en el Reino Unido encontró que el 84 por ciento de los jóvenes entre 18 y 34 años está interesado en hacer un crucero fluvial. No es un número menor — es una generación entera diciendo \"sí, eso me interesa.\" Y cuando lo analizas bien, tiene todo el sentido del mundo."
                : "A recent UK survey reported by "}
              {!isEs && (
                <a
                  href="https://www.travelweekly.co.uk/news/cruise/under-35s-show-strong-interest-in-river-cruising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
                >
                  Travel Weekly
                </a>
              )}
              {isEs
                ? ""
                : " found that 84% of 18-to-34-year-olds are interested in river cruising. That's not a niche curiosity — that's a generation saying, \"Yeah, I actually want this.\" And it makes perfect sense once you stop thinking of river cruises the way they've been marketed for the last two decades."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Por qué tiene lógica" : "Why this tracks"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Piensa en lo que realmente busca el viajero joven hoy. Quiere conocer varios destinos sin volverse loco organizando cada traslado, cada hotel, cada reservación de restaurante en cuatro países distintos. Quiere experiencias que se sientan auténticas, no apresuradas. Quiere desconectar de verdad — no pasarse las vacaciones pegado al teléfono tratando de descifrar el tren de Viena a Budapest."
                : "Think about what younger travelers actually want right now. They want to see multiple destinations without the logistical nightmare of planning every transfer, hotel check-in, and restaurant reservation across four countries. They want experiences that feel immersive, not rushed. They want to unplug — not spend their vacation staring at a screen trying to figure out the train schedule from Vienna to Budapest."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Un crucero fluvial te da todo eso sin el dolor de cabeza. Te despiertas en una ciudad nueva. Bajas del barco y estás en el centro — no en un puerto industrial a 45 minutos de todo. Exploras, comes bien, te unes a una excursión local o simplemente caminas por tu cuenta. Regresas, cenas increíble, y mientras duermes ya estás navegando hacia el próximo destino. Eso no es el viaje de tus abuelos — eso es viajar de manera inteligente."
                : "River cruising checks every one of those boxes. You wake up in a new city. You walk off the ship into the heart of town — not some industrial port 45 minutes from anything interesting. You explore, eat well, maybe join a local excursion or just wander on your own. Then you come back, have a great dinner, and float to the next destination while you sleep."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "El verdadero problema: nadie está explicando el valor" : "The real problem: nobody's explaining the value"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Aquí es donde la cosa se pone interesante — y donde yo veo una oportunidad que casi nadie está aprovechando. Esa misma encuesta reveló que solo el nueve por ciento de las personas que nunca han hecho un crucero fluvial piensan que es buen valor comparado con un viaje por tierra. Nueve por ciento. Pero entre los que ya lo han hecho, ese número sube a 36 por ciento."
                : "That same survey found that only 9% of people who haven't taken a river cruise think it's good value compared to a land-based trip. But among people who've actually done one? That number jumps to 36%. The product delivers. The industry is just doing a terrible job of communicating why it's worth the investment before someone books."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "El producto cumple. La gente que lo prueba lo entiende. Pero la industria está haciendo un trabajo pésimo comunicando por qué vale la pena antes de que alguien reserve. Este es exactamente el tipo de problema que resuelvo todos los días como " : "As a "}
              <Link to={localPath("/about")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                {isEs ? "asesor de viajes de lujo" : "luxury travel advisor"}
              </Link>
              {isEs
                ? ". Un cliente me dice: \"Miré cruceros fluviales, pero me parecen caros.\" Y entonces lo desglosamos juntos: tu camarote, todas las comidas (y hablo de comida de verdad, no un buffet genérico), vinos con la cena, excursiones guiadas, traslados — todo incluido. Ahora cotiza hacer ese mismo itinerario por tu cuenta. Vuelos entre ciudades, hoteles en cada destino, restaurantes, taxis, entradas, propinas. Nueve de cada diez veces, el crucero fluvial sale mejor. Lo que pasa es que no lo ves a primera vista porque el precio aparece como un solo número grande en vez de cincuenta pequeños."
                : ", I see this every day: a client says, \"river cruises seem expensive.\" Then we break it down — cabin, all meals (and I mean good meals), wine with dinner, guided excursions, transfers — all included. Now price out the same itinerary on your own: flights between cities, hotels, restaurants, taxis, entrance fees, tips. Nine times out of ten, the river cruise is the better deal."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "La flexibilidad que marca la diferencia" : "The flexibility factor"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Las líneas de cruceros fluviales también están evolucionando. El modelo viejo de \"aquí es tu hora de cenar, aquí es tu excursión, estate en el bus a las 8 AM\" está desapareciendo. Los barcos y los itinerarios más nuevos te dan opciones reales — cenas cuando quieras, te saltas el tour grupal y exploras solo, o escoges entre varias excursiones que realmente van contigo."
                : "River cruise lines are catching on. The old model of \"here's your dinner time, here's your excursion, be on the bus at 8 AM\" is fading fast. The newer itineraries give you real choice — dine when you want, skip the group tour, or pick from multiple excursions that match your interests. That's huge for travelers who don't want to feel locked into someone else's schedule."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Eso es clave para viajeros jóvenes que no quieren sentirse atrapados en el horario de otra persona. Tienes la conveniencia de que todo está organizado sin perder la libertad de hacerlo a tu manera. Es lo mejor de los dos mundos, y es exactamente el tipo de viaje intencional que diseño para mis clientes."
                : "That's huge for travelers who don't want to feel locked into someone else's schedule. You get the convenience of everything being organized without losing the freedom to do it your way. It's the best of both worlds."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Lo que le digo a mis clientes" : "What I tell my clients"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Si tienes menos de 45 años y nunca has considerado un crucero fluvial, probablemente estás trabajando con suposiciones que ya no aplican. Esto no se trata de actividades para jubilados ni cenas a las cinco de la tarde. Se trata de amanecer en Burdeos, pasar la tarde en un viñedo familiar, y llegar a un pueblo completamente diferente por la mañana — todo sin hacer una sola maleta."
                : "If you're under 45 and you've never considered a river cruise, you're probably working with outdated assumptions. The Danube, the Rhine, the "}
              {!isEs && (
                <Link to={localPath("/destinations/portugal")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                  Douro in Portugal
                </Link>
              )}
              {isEs ? "" : ", the Mekong — these are world-class destinations best experienced from the water. And with "}
              {!isEs && (
                <Link to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                  luxury river cruises planned from Puerto Rico
                </Link>
              )}
              {isEs ? "" : ", you don't have to start your trip with a complicated itinerary just to get to the ship."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "El Danubio, el Rin, el Duero en Portugal, el Mekong — son destinos de clase mundial que simplemente se experimentan mejor desde el agua. Y con cruceros de lujo desde San Juan, ni siquiera tienes que complicarte la vida con un itinerario enredado solo para llegar al barco."
                : ""}
            </p>

            <p className="text-foreground text-lg leading-relaxed font-heading italic">
              {isEs
                ? "Esto es lo que sé después de una década planificando viajes de lujo por seis continentes: los mejores viajes son los que no te hacen pensar en logística. Simplemente estás ahí, presente, disfrutando cada momento. Los cruceros fluviales logran eso mejor que casi cualquier otra experiencia que he visto — y el hecho de que una nueva generación lo esté descubriendo es algo que me entusiasma de verdad."
                : "The best trips are the ones where you're not thinking about logistics. You're just there, fully present. River cruising does that better than almost anything else."}
            </p>

            {/* FAQ */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              {isEs ? "Preguntas Frecuentes sobre Cruceros Fluviales" : "River Cruise FAQs"}
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Son los cruceros fluviales para viajeros jóvenes?" : "Are river cruises good for younger travelers?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "Sí — el 84% de los viajeros británicos de 18 a 34 años quiere hacer uno. Los barcos e itinerarios nuevos ofrecen flexibilidad real: cenas a tu hora, excursiones por intensidad, salir por tu cuenta." : "Yes — 84% of UK travelers aged 18–34 want to. Newer ships and itineraries offer real flexibility: dine when you want, choose excursion intensity, explore solo."}</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Cuál línea fluvial es la mejor?" : "Which river cruise line is best?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "AmaWaterways para gourmet activo. Avalon Waterways para vistas y flexibilidad. Riverside Luxury Cruises (ex-Crystal) para el lujo más alto con servicio butler." : "AmaWaterways for active gourmet. Avalon Waterways for views and flexibility. Riverside Luxury Cruises (former Crystal) for top-tier luxury with butler service."}</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Qué incluye un crucero fluvial de lujo?" : "What's included in a luxury river cruise?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "Camarote, todas las comidas, vinos con cena, excursiones guiadas en cada puerto, propinas (en la mayoría de líneas de lujo) y traslados — todo dentro de la tarifa." : "Cabin, all meals, wines with dinner, guided excursions every port, gratuities (on most luxury lines), and transfers — all bundled."}</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Cuáles son los mejores destinos fluviales?" : "What are the best river cruise destinations?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "Danubio (Viena, Budapest), Rin (Colonia, Estrasburgo), Duero en Portugal (Oporto y viñedos), y Mekong (Vietnam y Camboya)." : "Danube (Vienna, Budapest), Rhine (Cologne, Strasbourg), Douro in Portugal (Porto and wine country), and Mekong (Vietnam and Cambodia)."}</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Cómo reservo un crucero fluvial desde Puerto Rico?" : "How do I book a river cruise from Puerto Rico?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "Los cruceros salen de ciudades europeas, así que la reserva empieza con el ruteo SJU (vía JFK, MIA o ATL) y una noche pre-crucero. Un asesor coordina vuelos, hotel y crucero como un solo paquete." : "Cruises depart from European cities, so booking starts with SJU routing (via JFK, MIA or ATL) and a pre-cruise hotel night. An advisor coordinates flights, hotel and cruise as one package."}</p>
              </div>
            </div>

            {/* Related Reading */}
            <h2 className="font-heading text-2xl text-foreground mt-12">{isEs ? "Lecturas Relacionadas" : "Related Reading"}</h2>
            <ul className="space-y-2 list-none">
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")} className="text-gold hover:text-gold-light underline">{isEs ? "Cruceros fluviales de lujo desde Puerto Rico" : "Luxury river cruises from Puerto Rico"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/do-travel-agents-really-help-save-money")} className="text-gold hover:text-gold-light underline">{isEs ? "¿Los asesores de viajes realmente ayudan a ahorrar?" : "Do travel agents really help save money?"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/luna-de-miel-puerto-rico-2026")} className="text-gold hover:text-gold-light underline">{isEs ? "Mejores destinos de luna de miel 2026" : "Best honeymoon destinations 2026"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/what-luxury-travel-really-means")} className="text-gold hover:text-gold-light underline">{isEs ? "Lo que realmente significa el viaje de lujo" : "What luxury travel really means"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/destinations/portugal")} className="text-gold hover:text-gold-light underline">{isEs ? "Portugal — guía de destino" : "Portugal — destination guide"}</Link></li>
            </ul>
          </div>


          {/* CTA */}
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {isEs ? "¿Te ha dado curiosidad?" : "Curious but haven't booked yet?"}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {isEs
                ? "Hablemos. Sin presión, sin compromiso — solo una conversación para ver si un crucero fluvial encaja con lo que realmente estás buscando."
                : "Let's talk. No pressure, no commitment — just a conversation about whether river cruising fits what you're actually looking for."}
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              {isEs ? "Solicitar Consulta Gratuita" : "Book Free Consultation"}
            </Link>
          </div>

          {/* Author bio */}
          <div className="mt-12 pt-8 border-t border-gold/20">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {isEs
                ? "Daniel Santiago Díaz es el fundador de SJU Luxe Travel, una agencia de viajes de lujo boutique en San Juan, Puerto Rico. Como especialista certificado en cruceros fluviales y agente independiente de NCM Concierge, diseña itinerarios de lujo a medida para viajeros en Estados Unidos, el Caribe y América Latina."
                : "Daniel Santiago Díaz is the founder of SJU Luxe Travel, a boutique luxury travel agency based in San Juan, Puerto Rico. As a certified river cruise specialist and independent agent of NCM Concierge, he designs bespoke river cruise itineraries for travelers across the US, Caribbean, and Latin America."}
            </p>
            <p className="text-gold text-sm mt-2">www.sjuluxetravel.com</p>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RiverCruisingNewGeneration;