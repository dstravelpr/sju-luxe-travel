import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import blogMicrocationsImg from "@/assets/blog-microcations.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "¿Son las Microvacaciones el Futuro de los Viajes?",
  description:
    "Las microvacaciones —escapadas de 2 a 5 días bien planificadas— se están convirtiendo en una nueva forma de viajar más consciente, flexible y de lujo.",
  author: { "@type": "Person", name: "Daniel Santiago Díaz" },
  publisher: {
    "@type": "Organization",
    name: "SJU Luxe Travel",
    url: "https://www.sjuluxetravel.com",
  },
  datePublished: "2026-04-11",
  inLanguage: "es-PR",
  url: "https://www.sjuluxetravel.com/blog/micro-vacaciones-futuro-del-viaje",
};

const MicroVacaciones = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
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
