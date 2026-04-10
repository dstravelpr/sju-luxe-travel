import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import blogLuxuryImg from "@/assets/blog-luxury-travel.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Luxury Travel Really Means",
  description: "Real luxury in travel isn't about how much you spend. It's about how the experience makes you feel.",
  author: { "@type": "Person", name: "Daniel Santiago Díaz" },
  publisher: { "@type": "Organization", name: "SJU Luxe Travel" },
  datePublished: "2026-04-08",
  url: "https://sjuluxetravel.com/blog/what-luxury-travel-really-means",
};

const WhatLuxuryTravelMeans = () => {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        title="What Luxury Travel Really Means — SJU Luxe Travel"
        description="Real luxury in travel isn't about how much you spend. It's about intention, comfort, and meaningful moments. SJU Luxe Travel redefines luxury."
        canonical="https://sjuluxetravel.com/blog/what-luxury-travel-really-means"
        schemaJson={schemaJson}
      />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Back link */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
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
                ? "En SJU Luxe Travel, creemos que todos merecen acceso a ese tipo de viaje—porque la oportunidad nunca debería sentirse exclusiva."
                : "At SJU Luxe Travel, we believe everyone deserves access to that kind of travel—because opportunity should never feel exclusive."}
            </p>
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
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
              {isEs ? "Comenzar a Planificar" : "Start Planning"}
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default WhatLuxuryTravelMeans;
