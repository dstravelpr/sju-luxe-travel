import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import blogMicrocationsImg from "@/assets/blog-microcations.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "¿Son las Microvacaciones el Futuro de los Viajes desde Puerto Rico?",
      description: "Las microvacaciones —escapadas de 2 a 5 días bien planificadas desde San Juan— son una nueva forma de viajar más consciente, flexible y de lujo.",
      author: { "@type": "Person", name: "Daniel Santiago Díaz", url: "https://www.sjuluxetravel.com/about" },
      publisher: { "@type": "Organization", name: "SJU Luxe Travel", url: "https://www.sjuluxetravel.com" },
      datePublished: "2026-04-11",
      dateModified: "2026-06-02",
      inLanguage: "es-PR",
      keywords: ["microvacaciones", "micro-cation", "escapadas cortas desde Puerto Rico", "long weekend luxury", "viajes cortos de lujo", "weekend getaways from San Juan", "luxury short trips"],
      url: "https://www.sjuluxetravel.com/blog/micro-vacaciones-futuro-del-viaje",
      mainEntityOfPage: "https://www.sjuluxetravel.com/blog/micro-vacaciones-futuro-del-viaje",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "¿Qué es una microvacación?", acceptedAnswer: { "@type": "Answer", text: "Una microvacación es una escapada breve y bien planificada de 2 a 5 días — típicamente un fin de semana largo o una pausa estratégica entre semana. Está diseñada para encajar en tu vida sin alterarla." } },
        { "@type": "Question", name: "¿Cuáles son las mejores microvacaciones desde San Juan, Puerto Rico?", acceptedAnswer: { "@type": "Answer", text: "Desde SJU funcionan especialmente bien: Miami (vuelos directos, 2h30), Nueva York (4h), Cartagena (3h), Aruba/Curaçao (1h30), Bahamas, Punta Cana, y vuelos nocturnos a Madrid o Lisboa para un long weekend europeo de 4 días." } },
        { "@type": "Question", name: "¿Cuánto debería durar una microvacación?", acceptedAnswer: { "@type": "Answer", text: "Entre 2 y 5 días. Menos de 2 noches se siente apresurado; más de 5 deja de ser micro. El sweet spot son 3–4 noches: tiempo real para desconectar sin agotar tus PTO." } },
        { "@type": "Question", name: "¿Son las microvacaciones más sostenibles?", acceptedAnswer: { "@type": "Answer", text: "Pueden serlo cuando se planifican bien: vuelos directos, hoteles eficientes, soporte a negocios locales. Múltiples escapadas mal planificadas pueden ser menos sostenibles que un solo viaje bien diseñado." } },
        { "@type": "Question", name: "¿Vale la pena un agente para un viaje de 3 días?", acceptedAnswer: { "@type": "Answer", text: "Sí, porque un viaje corto no perdona errores: hotel mal ubicado, vuelo con escala innecesaria o reserva de restaurante negada queman porciones grandes del viaje. Un agente maximiza cada hora — y al mismo precio te suma beneficios de hotel." } },
      ],
    },
  ],
};


const MicroVacaciones = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/micro-vacaciones.jpg"
        title={
          isEs
            ? "¿Son las Microvacaciones el Futuro de los Viajes? — SJU Luxe Travel"
            : "Are Micro-Cations the Future of Travel? — SJU Luxe Travel"
        }
        description={
          isEs
            ? "Las microvacaciones son escapadas cortas y bien planificadas de 2 a 5 días. Descubre por qué son el futuro del viaje de lujo, consciente y flexible."
            : "Micro-cations are short, well-planned 2–5 day getaways. Discover why they're the future of luxury, mindful, and flexible travel."
        }
        canonical="https://www.sjuluxetravel.com/blog/micro-vacaciones-futuro-del-viaje"
        schemaJson={schemaJson}
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
              {isEs ? "Tendencias de Viaje" : "Travel Trends"}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              {isEs
                ? "¿Son las Microvacaciones el Futuro de los Viajes?"
                : "Are Micro-Cations the Future of Travel?"}
            </h1>
            <p className="font-heading text-xl md:text-2xl text-muted-foreground italic mb-6">
              {isEs
                ? "Escapadas más cortas, más conscientes y más significativas"
                : "Shorter, more mindful, and more meaningful getaways"}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5">
                <User size={12} className="text-gold" />
                Daniel Santiago Díaz
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-gold" />
                {isEs ? "11 de abril de 2026" : "April 11, 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-gold" />
                {isEs ? "6 min de lectura" : "6 min read"}
              </span>
            </div>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img
              src={blogMicrocationsImg}
              alt={
                isEs
                  ? "Microvacaciones de lujo — escapadas cortas planificadas por SJU Luxe Travel"
                  : "Luxury micro-cations — short curated getaways by SJU Luxe Travel"
              }
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose-custom space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "No todos los viajes tienen que durar dos semanas para ser significativos. De hecho, uno de los cambios más importantes que se están produciendo actualmente en el sector de los viajes es el auge de las «microvacaciones»: escapadas más cortas y planificadas que se adaptan a la vida cotidiana sin renunciar a la experiencia."
                : "Not every trip needs to be two weeks long to be meaningful. In fact, one of the biggest shifts in travel right now is the rise of micro-cations: shorter, well-planned getaways that fit into everyday life without sacrificing the experience."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Pero más allá de la comodidad, muchos se preguntan: ¿son los desplazamientos más cortos realmente mejores, e incluso más sostenibles? Veámoslo más de cerca."
                : "But beyond convenience, many are asking: are shorter trips really better—or even more sustainable? Let's take a closer look."}
            </p>

            {/* Section 1 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "¿Qué es una microvacación?" : "What is a micro-cation?"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Una «microvacación» es exactamente lo que parece: una escapada breve y bien planificada, que suele durar entre 2 y 5 días."
                : "A micro-cation is exactly what it sounds like: a short, well-planned getaway that usually lasts between 2 and 5 days."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "Piénsalo:" : "Think:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Un fin de semana largo en Europa",
                    "Una escapada rápida al Caribe",
                    "Una breve estancia en un complejo turístico de lujo",
                  ]
                : [
                    "A long weekend in Europe",
                    "A quick Caribbean escape",
                    "A short stay at a luxury resort",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base leading-relaxed italic">
              {isEs
                ? "Son viajes pensados para adaptarse a tu estilo de vida, no para alterarlo."
                : "These are trips designed to fit into your lifestyle—not disrupt it."}
            </p>

            {/* Section 2 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs
                ? "¿Son más sostenibles las microvacaciones?"
                : "Are micro-cations more sustainable?"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "La respuesta no es válida para todos los casos, pero puede serlo. Los desplazamientos más cortos pueden reducir:"
                : "The answer isn't one-size-fits-all, but it can be. Shorter trips can reduce:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "El exceso de equipaje y el consumo excesivo",
                    "Estancias prolongadas en destinos muy concurridos",
                    "El cansancio del viaje (que a menudo lleva a un consumo excesivo)",
                  ]
                : [
                    "Over-packing and over-consumption",
                    "Long stays in over-crowded destinations",
                    "Travel fatigue (which often leads to over-spending)",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Sin embargo, la sostenibilidad depende de cómo se viaje, no solo de cuánto tiempo. Por ejemplo:"
                : "Still, sustainability depends on how you travel—not just how long. For example:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Unos pocos viajes bien planificados pueden ser más sostenibles que muchos viajes de última hora",
                    "Es importante elegir vuelos directos e itinerarios eficientes",
                    "Apoyar las iniciativas locales marca la diferencia",
                  ]
                : [
                    "A few well-planned trips can be more sustainable than many last-minute ones",
                    "Choosing direct flights and efficient itineraries matters",
                    "Supporting local businesses makes a difference",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base leading-relaxed font-semibold">
              {isEs
                ? "Se trata de viajar de forma consciente, no solo de hacer viajes más cortos."
                : "It's about traveling mindfully—not just shorter."}
            </p>

            {/* Section 3 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs
                ? "Por qué las microvacaciones son tan populares"
                : "Why micro-cations are gaining popularity"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "Hoy en día, los viajeros buscan:" : "Today's travelers want:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Flexibilidad",
                    "Menos tiempo alejado de las responsabilidades",
                    "Descansos más frecuentes y significativos",
                  ]
                : [
                    "Flexibility",
                    "Less time away from responsibilities",
                    "More frequent, meaningful breaks",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "En lugar de esperar todo el año para disfrutar de unas largas vacaciones, muchos optan por hacer varias escapadas más cortas a lo largo del año. Y, cuando se hacen bien, estos viajes pueden resultar igual de gratificantes, si no más."
                : "Instead of waiting all year for one long vacation, many choose multiple shorter getaways throughout the year. And when done right, these trips can feel just as rewarding—if not more."}
            </p>

            {/* Section 4 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs
                ? "La clave: una planificación más inteligente"
                : "The key: smarter planning"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Aquí es donde la mayoría de la gente se equivoca: los viajes cortos solo salen bien si se planifican bien. Sin una planificación adecuada, corres el riesgo de:"
                : "Here's where most people get it wrong: short trips only work well when planned well. Without proper planning, you risk:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Perder tiempo en cuestiones logísticas",
                    "Llenar demasiado la agenda",
                    "Perderte las mejores experiencias",
                  ]
                : [
                    "Wasting time on logistics",
                    "Overloading your schedule",
                    "Missing the best experiences",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base leading-relaxed italic">
              {isEs
                ? "Pero con el enfoque adecuado, un viaje de tres días puede sentirse como un reinicio completo."
                : "But with the right approach, a three-day trip can feel like a complete reset."}
            </p>

            {/* Section 5 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs
                ? "El lujo no tiene que ver con la duración, sino con la experiencia"
                : "Luxury isn't about length—it's about experience"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Es aquí donde está cambiando el concepto de viaje. Hoy en día, el lujo no tiene que ver con cuánto tiempo estás fuera, sino con:"
                : "This is where travel is changing. Today, luxury isn't about how long you're away—it's about:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Una planificación fluida",
                    "El hotel o complejo turístico adecuado",
                    "Experiencias que se viven con naturalidad",
                  ]
                : [
                    "Seamless planning",
                    "The right hotel or resort",
                    "Experiences that flow naturally",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Una escapada de cuatro días perfectamente planificada puede resultar más lujosa que un viaje de diez días hecho con prisas."
                : "A perfectly planned four-day escape can feel more luxurious than a rushed ten-day trip."}
            </p>

            {/* Final */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Reflexiones finales" : "Final thoughts"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Las microvacaciones no son solo una moda, sino un reflejo de cómo está cambiando el modo de viajar. Más consciente. Más flexible. Más acorde con la vida real."
                : "Micro-cations aren't just a trend—they're a reflection of how travel is changing. More mindful. More flexible. More aligned with real life."}
            </p>

            <p className="text-foreground text-lg leading-relaxed font-heading italic">
              {isEs
                ? "Porque, al fin y al cabo, viajar no consiste en cuánto tiempo estás fuera… sino en cómo lo disfrutas."
                : "Because in the end, travel isn't about how long you're away… it's about how you experience it."}
            </p>

            {/* Suggested micro-cations from SJU */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              {isEs ? "Mejores Microvacaciones desde San Juan, Puerto Rico" : "Best Micro-Cations from San Juan, Puerto Rico"}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "Estas son las escapadas cortas que funcionan mejor desde SJU — por distancia, vuelos directos y densidad de experiencia:" : "These are the short escapes that work best from SJU — by distance, direct flights and experience density:"}
            </p>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3"><span className="text-gold mt-1">•</span><span><strong className="text-foreground">{isEs ? "Miami (3 noches):" : "Miami (3 nights):"}</strong> {isEs ? "vuelo directo 2h30. The Setai South Beach o Faena para una escapada cultural-playera. Cena en Stubborn Seed, día de yate privado en Biscayne Bay." : "direct flight 2h30. The Setai South Beach or Faena for a culture-meets-beach escape. Dinner at Stubborn Seed, private yacht day on Biscayne Bay."}</span></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">•</span><span><strong className="text-foreground">{isEs ? "Nueva York (4 noches):" : "New York (4 nights):"}</strong> {isEs ? "vuelo 4h. The Mark o Aman New York. Broadway, MoMA, cena en Le Bernardin o Daniel — formato fin de semana largo de jueves a domingo." : "4h flight. The Mark or Aman New York. Broadway, MoMA, dinner at Le Bernardin or Daniel — Thursday-to-Sunday long weekend format."}</span></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">•</span><span><strong className="text-foreground">{isEs ? "Cartagena (3 noches):" : "Cartagena (3 nights):"}</strong> {isEs ? "vuelo directo 3h. Casa San Agustín o Sofitel Santa Clara. Cena en El Boliche Cebichería, día de chalupa privada por las Islas del Rosario." : "direct 3h flight. Casa San Agustín or Sofitel Santa Clara. Dinner at El Boliche Cebichería, private boat day to the Rosario Islands."}</span></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">•</span><span><strong className="text-foreground">{isEs ? "Aruba o Curaçao (3 noches):" : "Aruba or Curaçao (3 nights):"}</strong> {isEs ? "vuelo 1h30. Bucuti & Tara (Aruba, adults-only) o Baoase Luxury Resort (Curaçao). Playa + cena privada, totalmente desenchufado." : "1h30 flight. Bucuti & Tara (Aruba, adults-only) or Baoase Luxury Resort (Curaçao). Beach + private dinner, fully unplugged."}</span></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">•</span><span><strong className="text-foreground">{isEs ? "Lisboa o Madrid (5 noches, long weekend europeo):" : "Lisbon or Madrid (5 nights, European long weekend):"}</strong> {isEs ? "vuelo nocturno directo desde MIA (TAP a LIS, Iberia a MAD). Sales jueves noche, regresas lunes — 4 días completos en Europa con solo 2 días de PTO." : "direct overnight from MIA (TAP to LIS, Iberia to MAD). Leave Thursday night, return Monday — 4 full European days using only 2 PTO days."}</span></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">•</span><span><strong className="text-foreground">{isEs ? "Napa o Aspen (4 noches):" : "Napa or Aspen (4 nights):"}</strong> {isEs ? "Auberge du Soleil, Meadowood (Napa); The Little Nell (Aspen, invierno). Sin pasaporte — ideal para escapadas gastronómicas o de esquí." : "Auberge du Soleil, Meadowood (Napa); The Little Nell (Aspen, winter). No passport needed — ideal for food or ski escapes."}</span></li>
            </ul>

            {/* FAQ */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              {isEs ? "Preguntas Frecuentes sobre Microvacaciones" : "Micro-Cation FAQs"}
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Cuánto debería durar una microvacación?" : "How long should a micro-cation be?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "Entre 2 y 5 días — el sweet spot son 3–4 noches: desconectas de verdad sin quemar tus PTO." : "Between 2 and 5 days — the sweet spot is 3–4 nights: real disconnect without burning your PTO."}</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Vale la pena un agente para 3 días?" : "Is an agent worth it for 3 days?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "Sí — un viaje corto no perdona errores. Hotel mal ubicado, escala innecesaria o reserva negada queman porciones grandes. Un agente maximiza cada hora al mismo precio que reservar online." : "Yes — a short trip doesn't forgive mistakes. A poorly located hotel, unnecessary connection or denied reservation burn large chunks. An agent maximizes every hour at the same price as online."}</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Son sostenibles las microvacaciones?" : "Are micro-cations sustainable?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "Cuando se planifican bien: vuelos directos, hoteles eficientes, soporte a negocios locales. Múltiples viajes mal planificados no lo son." : "When planned well: direct flights, efficient hotels, support for local businesses. Multiple poorly-planned trips are not."}</p>
              </div>
            </div>

            {/* Related Reading */}
            <h2 className="font-heading text-2xl text-foreground mt-12">{isEs ? "Lecturas Relacionadas" : "Related Reading"}</h2>
            <ul className="space-y-2 list-none">
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/what-luxury-travel-really-means")} className="text-gold hover:text-gold-light underline">{isEs ? "Lo que realmente significa el viaje de lujo" : "What luxury travel really means"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/do-travel-agents-really-help-save-money")} className="text-gold hover:text-gold-light underline">{isEs ? "¿Los agentes de viajes ayudan a ahorrar?" : "Do travel agents help save money?"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/luna-de-miel-puerto-rico-2026")} className="text-gold hover:text-gold-light underline">{isEs ? "Mejores destinos de luna de miel 2026" : "Best honeymoon destinations 2026"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/river-cruising-new-generation")} className="text-gold hover:text-gold-light underline">{isEs ? "Cruceros fluviales: la nueva generación" : "River cruising: the new generation"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/viajes-de-lujo")} className="text-gold hover:text-gold-light underline">{isEs ? "Servicios de viajes de lujo desde San Juan" : "Luxury travel services from San Juan"}</Link></li>
            </ul>
          </div>


          {/* CTA */}
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {isEs
                ? "¿Listo para planificar una escapada más inteligente?"
                : "Ready to plan a smarter getaway?"}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {isEs
                ? "Ya sea una escapada rápida al Caribe, un fin de semana largo en Europa o una estancia corta de lujo perfectamente organizada, una buena planificación marca la diferencia."
                : "Whether it's a quick Caribbean escape, a long European weekend, or a perfectly curated short luxury stay, great planning makes all the difference."}
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              {isEs ? "Comenzar a Planificar" : "Start Planning"}
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default MicroVacaciones;
