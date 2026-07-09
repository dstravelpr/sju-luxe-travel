import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import blogLuxuryImg from "@/assets/blog-luxury-travel.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Lo Que Realmente Significa el Viaje de Lujo desde Puerto Rico",
      description: "El verdadero lujo en los viajes no se trata de cuánto gastas, sino de cómo te hace sentir la experiencia. Filosofía de un agente de viajes en San Juan, PR.",
      author: { "@type": "Person", name: "Daniel Santiago Díaz", url: "https://www.sjuluxetravel.com/about" },
      publisher: { "@type": "Organization", name: "SJU Luxe Travel", url: "https://www.sjuluxetravel.com" },
      datePublished: "2026-04-08",
      dateModified: "2026-06-02",
      inLanguage: "es-PR",
      keywords: ["viaje de lujo desde Puerto Rico", "luxury travel from San Juan", "agente de viajes", "Virtuoso agent", "Four Seasons Preferred Partner", "viajes bespoke", "luxury travel philosophy"],
      url: "https://www.sjuluxetravel.com/blog/what-luxury-travel-really-means",
      mainEntityOfPage: "https://www.sjuluxetravel.com/blog/what-luxury-travel-really-means",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "¿Qué significa realmente el viaje de lujo?", acceptedAnswer: { "@type": "Answer", text: "El viaje de lujo no se define por cuánto gastas, sino por la intención, el servicio personalizado y los momentos significativos. Significa tener cada detalle resuelto para que puedas estar presente, sin logística que manejar." } },
        { "@type": "Question", name: "¿Cuál es la diferencia entre un viaje caro y un viaje de lujo?", acceptedAnswer: { "@type": "Answer", text: "Un viaje caro acumula servicios costosos; un viaje de lujo es intencional, bespoke, y diseñado alrededor de tu estilo. La diferencia se siente en el flujo: hoteles correctos para ti, transferencias privadas, beneficios de hotel (desayuno, upgrades, créditos), y un agente disponible 24/7." } },
        { "@type": "Question", name: "¿Por qué reservar con un agente de lujo en lugar de Expedia?", acceptedAnswer: { "@type": "Answer", text: "Al mismo precio que Expedia, un agente afiliado a programas como Virtuoso, Four Seasons Preferred Partner o Rosewood Elite consigue beneficios complementarios (créditos de resort de $100–300, desayuno, upgrade sujeto a disponibilidad, early check-in/late check-out, amenidad de bienvenida) — pagados por el hotel, no por ti." } },
        { "@type": "Question", name: "¿El lujo es solo para viajes largos?", acceptedAnswer: { "@type": "Answer", text: "No. Una microvacación de 3 días bien planificada puede sentirse más lujosa que un viaje de 10 días desorganizado. El lujo es la calidad de la experiencia, no la duración." } },
      ],
    },
  ],
};


const WhatLuxuryTravelMeans = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/what-luxury-travel-means.jpg"
        title="What Luxury Travel Really Means | SJU Luxe Travel"
        description="Luxury travel isn't about spending more — it's about intentional, bespoke experiences. SJU Luxe Travel redefines luxury from San Juan, PR."
        canonical="https://www.sjuluxetravel.com/blog/what-luxury-travel-really-means"
        schemaJson={schemaJson}
      />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Back link */}
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />
            {isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
              {isEs ? "Filosofía de Viaje" : "Travel Philosophy"}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              {isEs
                ? "Lo Que Realmente Significa el Viaje de Lujo"
                : "What Luxury Travel Really Means"}
            </h1>
            <p className="font-heading text-xl md:text-2xl text-muted-foreground italic mb-6">
              {isEs
                ? "Y Por Qué No Tiene Nada Que Ver Con el Precio"
                : "And Why It Has Nothing to Do With Price"}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "8 de abril de 2026" : "April 8, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "8 min de lectura" : "8 min read"}</span>
            </div>
          </div>

          {/* Cover image */}
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={blogLuxuryImg} alt="What Luxury Travel Really Means — SJU Luxe Travel" className="w-full h-full object-cover" />
          </div>

          {/* Article body */}
          <div className="prose-custom space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Cuando la gente escucha la frase viaje de lujo, a menudo imagina algo fuera de alcance—resorts cinco estrellas, jets privados y precios que parecen irreales."
                : "When people hear the phrase luxury travel, they often picture something out of reach—five‑star resorts, private jets, and price tags that feel unrealistic."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed font-semibold">
              {isEs
                ? "Pero esta es la verdad que la mayoría de los viajeros no saben:"
                : "But here's the truth most travelers don't realize:"}
            </p>

            <p className="text-foreground text-lg leading-relaxed font-heading italic">
              {isEs
                ? "El verdadero lujo en los viajes no se trata de cuánto gastas. Se trata de cómo te hace sentir la experiencia."
                : "Real luxury in travel isn't about how much you spend. It's about how the experience makes you feel."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "El viaje de lujo no se define por el exceso. Se define por la intención, la comodidad y los momentos significativos."
                : "Luxury travel is not defined by excess. It's defined by intention, comfort, and meaningful moments."}
            </p>

            {/* Section 1 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "El Lujo Se Trata de la Experiencia, No de la Etiqueta" : "Luxury Is About the Experience, Not the Label"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "El verdadero viaje de lujo puede verse muy diferente de un viajero a otro. Puede significar:"
                : "True luxury travel can look very different from one traveler to another. It might mean:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Despertar con una vista impresionante que instantáneamente te pone en paz",
                    "Quedarte en un lugar con un servicio reflexivo y personalizado",
                    "Tener cada detalle manejado para que puedas relajarte completamente",
                    "Experimentar un destino más allá de la superficie—como un local, no como un turista",
                  ]
                : [
                    "Waking up to a breathtaking view that instantly puts you at ease",
                    "Staying somewhere with thoughtful, personalized service",
                    "Having every detail handled so you can fully relax",
                    "Experiencing a destination beyond the surface—like a local, not a tourist",
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
                ? "El lujo no siempre es llamativo. A menudo, es sutil. Es la sensación de que todo fluye sin esfuerzo."
                : "Luxury isn't always flashy. Often, it's subtle. It's the feeling of everything flowing effortlessly."}
            </p>

            {/* Section 2 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "A Veces los Momentos Más Lujosos Son los Más Simples" : "Sometimes the Most Luxurious Moments Are the Simplest"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Algunos de los recuerdos de viaje más significativos no provienen de la extravagancia en absoluto. Provienen de:"
                : "Some of the most meaningful travel memories don't come from extravagance at all. They come from:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Ver el atardecer sobre el océano después de un largo día de exploración",
                    "Sentarte en un café tranquilo en un pequeño pueblo, simplemente observando la vida",
                    "Descubrir un destino escondido que no está lleno de gente ni es apresurado",
                    "Sentirte presente, sin prisas y profundamente conectado con donde estás",
                  ]
                : [
                    "Watching the sun set over the ocean after a long day of exploring",
                    "Sitting in a quiet café in a small village, simply observing life",
                    "Discovering a hidden destination that isn't crowded or rushed",
                    "Feeling present, unhurried, and deeply connected to where you are",
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
                ? "Estos momentos no requieren un presupuesto enorme—requieren planificación reflexiva e intención. Ahí es donde vive el verdadero lujo."
                : "These moments don't require a massive budget—they require thoughtful planning and intention. That's where real luxury lives."}
            </p>

            {/* Section 3 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "La Filosofía de SJU Luxe Travel" : "The SJU Luxe Travel Philosophy"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "En SJU Luxe Travel, redefinimos lo que significa el lujo. Para nosotros, el lujo es:"
                : "At SJU Luxe Travel, we redefine what luxury means. To us, luxury is:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Sentirte apoyado, no abrumado",
                    "Viajar con confianza en lugar de incertidumbre",
                    "Saber que tu viaje fue diseñado específicamente para ti",
                    "Tener la libertad de disfrutar el viaje, no gestionarlo",
                  ]
                : [
                    "Feeling supported, not overwhelmed",
                    "Traveling with confidence instead of uncertainty",
                    "Knowing your trip was designed specifically for you",
                    "Having the freedom to enjoy the journey, not manage it",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-foreground text-lg leading-relaxed font-heading italic mt-6">
              {isEs
                ? "Viajar no es un lujo — es una oportunidad."
                : "Travel is not a luxury — it's an opportunity."}
            </p>

            {/* Section 4 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Una Oportunidad para Experimentar Más" : "An Opportunity to Experience More"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "Viajar es una oportunidad para:" : "Travel is an opportunity to:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Explorar el mundo con curiosidad",
                    "Reconectarte contigo mismo y con lo que más importa",
                    "Salir de tu rutina y ganar perspectiva",
                    "Crear recuerdos que permanezcan contigo mucho después de que termine el viaje",
                  ]
                : [
                    "Explore the world with curiosity",
                    "Reconnect with yourself and what matters most",
                    "Step outside your routine and gain perspective",
                    "Create memories that stay with you long after the trip ends",
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
                ? "El viaje de lujo no se trata de gastar más—se trata de viajar mejor."
                : "Luxury travel isn't about spending more—it's about traveling better."}
            </p>

            {/* Section 5 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Redefiniendo el Lujo, Un Viaje a la Vez" : "Redefining Luxury, One Journey at a Time"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Ya sea que tu idea de lujo sea un hotel boutique, un itinerario perfectamente planificado o simplemente tranquilidad mientras viajas, el objetivo es el mismo: una experiencia que se sienta sin esfuerzo, significativa y personal."
                : "Whether your idea of luxury is a boutique hotel, a perfectly planned itinerary, or simply peace of mind while you travel, the goal is the same: an experience that feels effortless, meaningful, and personal."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "En SJU Luxe Travel, creemos que todos merecen acceso a ese tipo de viaje—porque la oportunidad nunca debería sentirse exclusiva. Desde San Juan, Puerto Rico, hemos diseñado lunas de miel en Maldivas, safaris en Sudáfrica, cruceros fluviales por el Danubio y escapadas cortas a Europa — siempre con el mismo principio: el lujo es la experiencia, no la etiqueta."
                : "At SJU Luxe Travel, we believe everyone deserves access to that kind of travel—because opportunity should never feel exclusive. From San Juan, Puerto Rico, we've designed honeymoons in the Maldives, South African safaris, Danube river cruises, and short European getaways — always with the same principle: luxury is the experience, not the label."}
            </p>

            {/* FAQ */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              {isEs ? "Preguntas Frecuentes sobre Viajes de Lujo" : "Frequently Asked Questions About Luxury Travel"}
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Qué significa realmente el viaje de lujo?" : "What does luxury travel really mean?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "No se define por cuánto gastas, sino por la intención, el servicio personalizado y los momentos significativos. Significa tener cada detalle resuelto para estar presente." : "It's not defined by how much you spend, but by intention, personalized service and meaningful moments. It means having every detail handled so you can be present."}</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Cuál es la diferencia entre un viaje caro y uno de lujo?" : "What's the difference between expensive travel and luxury travel?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "Un viaje caro acumula servicios costosos; uno de lujo es bespoke. La diferencia se siente en el flujo, los upgrades, las amenidades y el agente 24/7." : "Expensive travel piles on costly services; luxury travel is bespoke. The difference shows in the flow, upgrades, amenities and 24/7 agent."}</p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{isEs ? "¿Por qué reservar con un agente en lugar de Expedia?" : "Why book with an agent instead of Expedia?"}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{isEs ? "Al mismo precio, programas como Virtuoso o Four Seasons Preferred Partner suman beneficios reales: créditos de $100–300, desayuno, upgrades, check-in/out flexible, amenidades de bienvenida — pagados por el hotel." : "At the same price, programs like Virtuoso or Four Seasons Preferred Partner add real perks: $100–300 credits, breakfast, upgrades, flexible check-in/out, welcome amenities — paid by the hotel."}</p>
              </div>
            </div>

            {/* Related Reading */}
            <h2 className="font-heading text-2xl text-foreground mt-12">{isEs ? "Lecturas Relacionadas" : "Related Reading"}</h2>
            <ul className="space-y-2 list-none">
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/do-travel-agents-really-help-save-money")} className="text-gold hover:text-gold-light underline">{isEs ? "¿Los agentes de viajes realmente ayudan a ahorrar dinero?" : "Do travel agents really help save money?"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/luna-de-miel-puerto-rico-2026")} className="text-gold hover:text-gold-light underline">{isEs ? "Mejores destinos de luna de miel 2026 desde Puerto Rico" : "Best honeymoon destinations 2026 from Puerto Rico"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/micro-vacaciones-futuro-del-viaje")} className="text-gold hover:text-gold-light underline">{isEs ? "Microvacaciones: el futuro del viaje" : "Micro-cations: the future of travel"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/river-cruising-new-generation")} className="text-gold hover:text-gold-light underline">{isEs ? "Cruceros fluviales: la nueva generación de viajeros" : "River cruising: the new generation of travelers"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/viajes-de-lujo")} className="text-gold hover:text-gold-light underline">{isEs ? "Servicios de viajes de lujo desde San Juan" : "Luxury travel services from San Juan"}</Link></li>
            </ul>
          </div>


          {/* CTA */}
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {isEs ? "¿Listo para Redefinir Tu Próximo Viaje?" : "Ready to Redefine Your Next Trip?"}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {isEs
                ? "Contáctanos para una consulta gratuita y diseñemos juntos una experiencia de viaje intencional."
                : "Contact us for a complimentary consultation and let's design an intentional travel experience together."}
            </p>
            <Link to={localPath("/contact")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
              {isEs ? "Comenzar a Planificar" : "Start Planning"}
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default WhatLuxuryTravelMeans;
