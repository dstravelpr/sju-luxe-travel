import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/blog-river-cruise.jpg";

const RiverCruisingNewGeneration = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        noindex
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
                ? "Los Cruceros Fluviales Ya No Son Solo Para Tus Padres — Y Eso Lo Cambia Todo"
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
                ? "Esto habría sorprendido a la industria de viajes hace cinco años: el grupo demográfico más entusiasmado con los cruceros fluviales hoy no son los jubilados. Son los menores de 35."
                : "Here's something that would've shocked the travel industry five years ago: the demographic most excited about river cruising right now isn't retirees. It's people under 35."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "Una encuesta reciente del Reino Unido reportada por " : "A recent UK survey reported by "}
              <a
                href="https://www.travelweekly.co.uk/news/cruise/under-35s-show-strong-interest-in-river-cruising"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
              >
                Travel Weekly
              </a>
              {isEs
                ? " encontró que el 84% de los viajeros de 18 a 34 años está interesado en hacer un crucero fluvial. No es una curiosidad de nicho — es toda una generación diciendo: \"sí, esto sí lo quiero\". Y tiene mucho sentido cuando dejas de pensar en los cruceros fluviales como te los han vendido durante las últimas dos décadas."
                : " found that 84% of 18-to-34-year-olds are interested in river cruising. That's not a niche curiosity — that's a generation saying, \"Yeah, I actually want this.\" And it makes perfect sense once you stop thinking of river cruises the way they've been marketed for the last two decades."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Por qué tiene tanto sentido" : "Why this tracks"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Piensa en lo que los viajeros más jóvenes realmente quieren ahora: ver varios destinos sin la pesadilla logística de planificar cada traslado, check-in y reserva en cuatro países distintos. Quieren experiencias inmersivas, no apuradas. Quieren desconectarse — no pasar las vacaciones mirando una pantalla intentando descifrar el horario del tren de Viena a Budapest."
                : "Think about what younger travelers actually want right now. They want to see multiple destinations without the logistical nightmare of planning every transfer, hotel check-in, and restaurant reservation across four countries. They want experiences that feel immersive, not rushed. They want to unplug — not spend their vacation staring at a screen trying to figure out the train schedule from Vienna to Budapest."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Los cruceros fluviales cumplen con todo eso. Te despiertas en una ciudad nueva, caminas desde el barco directo al centro — no a un puerto industrial a 45 minutos de cualquier cosa interesante. Exploras, comes bien, te unes a una excursión local o vagas por tu cuenta. Luego regresas, cenas espectacular, y flotas hacia el próximo destino mientras duermes."
                : "River cruising checks every one of those boxes. You wake up in a new city. You walk off the ship into the heart of town — not some industrial port 45 minutes from anything interesting. You explore, eat well, maybe join a local excursion or just wander on your own. Then you come back, have a great dinner, and float to the next destination while you sleep."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "El verdadero problema: nadie está explicando el valor" : "The real problem: nobody's explaining the value"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "La misma encuesta encontró que solo el 9% de las personas que no han hecho un crucero fluvial lo consideran buen valor frente a un viaje en tierra. Pero entre quienes ya lo vivieron, ese número sube al 36%. El producto entrega. El problema es que la industria está comunicando muy mal por qué vale la inversión antes de reservar."
                : "That same survey found that only 9% of people who haven't taken a river cruise think it's good value compared to a land-based trip. But among people who've actually done one? That number jumps to 36%. The product delivers. The industry is just doing a terrible job of communicating why it's worth the investment before someone books."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "Como " : "As a "}
              <Link to={localPath("/about")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                {isEs ? "asesor de viajes de lujo" : "luxury travel advisor"}
              </Link>
              {isEs
                ? ", lo veo todos los días: un cliente dice \"los cruceros fluviales se ven caros\". Entonces lo desglosamos — cabina, todas las comidas (y son comidas serias), vino con la cena, excursiones guiadas, traslados — todo incluido. Compáralo con armar el mismo itinerario por tu cuenta: vuelos entre ciudades, hoteles, restaurantes, taxis, entradas, propinas. Nueve de cada diez veces, el crucero fluvial es la mejor oferta."
                : ", I see this every day: a client says, \"river cruises seem expensive.\" Then we break it down — cabin, all meals (and I mean good meals), wine with dinner, guided excursions, transfers — all included. Now price out the same itinerary on your own: flights between cities, hotels, restaurants, taxis, entrance fees, tips. Nine times out of ten, the river cruise is the better deal."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "El factor flexibilidad" : "The flexibility factor"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Las navieras también lo están entendiendo. El viejo modelo de \"esta es tu hora de cena, esta es tu excursión, sube al bus a las 8 AM\" se está desvaneciendo. Los nuevos itinerarios ofrecen elección real: cena cuando quieras, sáltate el tour grupal, o elige entre varias excursiones según tus intereses. Eso es enorme para viajeros que no quieren sentirse atados a la agenda de otro."
                : "River cruise lines are catching on. The old model of \"here's your dinner time, here's your excursion, be on the bus at 8 AM\" is fading fast. The newer itineraries give you real choice — dine when you want, skip the group tour, or pick from multiple excursions that match your interests. That's huge for travelers who don't want to feel locked into someone else's schedule."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Lo que les digo a mis clientes" : "What I tell my clients"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Si tienes menos de 45 y nunca has considerado un crucero fluvial, probablemente estás trabajando con suposiciones desactualizadas. El Danubio, el Rin, el "
                : "If you're under 45 and you've never considered a river cruise, you're probably working with outdated assumptions. The Danube, the Rhine, the "}
              <Link to={localPath("/destinations/portugal")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                {isEs ? "Duero en Portugal" : "Douro in Portugal"}
              </Link>
              {isEs
                ? ", el Mekong — son destinos de clase mundial que se experimentan mejor desde el agua. Y con "
                : ", the Mekong — these are world-class destinations best experienced from the water. And with "}
              <Link to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                {isEs ? "cruceros fluviales de lujo desde Puerto Rico" : "luxury river cruises planned from Puerto Rico"}
              </Link>
              {isEs
                ? ", no tienes que armar un itinerario complicado solo para llegar al barco."
                : ", you don't have to start your trip with a complicated itinerary just to get to the ship."}
            </p>

            <p className="text-foreground text-lg leading-relaxed font-heading italic">
              {isEs
                ? "Los mejores viajes son aquellos donde no estás pensando en logística — solo estás ahí, presente. El crucero fluvial hace eso mejor que casi cualquier cosa."
                : "The best trips are the ones where you're not thinking about logistics. You're just there, fully present. River cruising does that better than almost anything else."}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {isEs ? "¿Curioso pero sin reservar todavía?" : "Curious but haven't booked yet?"}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {isEs
                ? "Hablemos. Sin presión, sin compromiso — solo una conversación sobre si el crucero fluvial encaja con lo que estás buscando."
                : "Let's talk. No pressure, no commitment — just a conversation about whether river cruising fits what you're actually looking for."}
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              {isEs ? "Solicitar Consulta Gratuita" : "Book Free Consultation"}
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RiverCruisingNewGeneration;
