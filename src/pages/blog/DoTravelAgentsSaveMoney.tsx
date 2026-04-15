import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import blogAgentImg from "@/assets/blog-travel-agent.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "¿Los Agentes de Viajes Realmente Te Ayudan a Ahorrar Dinero?",
  description: "Una perspectiva honesta de un asesor de viajes moderno sobre cómo la orientación profesional te ahorra dinero, tiempo y estrés.",
  author: { "@type": "Person", name: "Daniel Santiago Díaz" },
  publisher: { "@type": "Organization", name: "SJU Luxe Travel", url: "https://www.sjuluxetravel.com" },
  datePublished: "2026-04-07",
  inLanguage: "es-PR",
  url: "https://www.sjuluxetravel.com/blog/do-travel-agents-really-help-save-money",
};

const DoTravelAgentsSaveMoney = () => {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        title="Is It Worth Using a Travel Agent for Luxury Vacation? — SJU Luxe Travel"
        description="Is it worth using a travel agent for a luxury vacation? How a travel advisor saves you money, time & stress. Travel agent vs booking online luxury — an honest take."
        canonical="https://www.sjuluxetravel.com/blog/do-travel-agents-really-help-save-money"
        schemaJson={schemaJson}
      />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />
            {isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>

          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
              {isEs ? "Consejos de Viaje" : "Travel Tips"}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              {isEs
                ? "¿Los Agentes de Viajes Realmente Te Ayudan a Ahorrar Dinero?"
                : "Do Travel Agents Really Help You Save Money?"}
            </h1>
            <p className="font-heading text-xl md:text-2xl text-muted-foreground italic mb-6">
              {isEs
                ? "Una Perspectiva Honesta de un Asesor de Viajes Moderno"
                : "An Honest Perspective from a Modern Travel Advisor"}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "7 de abril de 2026" : "April 7, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "7 min de lectura" : "7 min read"}</span>
            </div>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={blogAgentImg} alt="Do Travel Agents Really Help You Save Money — SJU Luxe Travel" className="w-full h-full object-cover" />
          </div>

          <div className="prose-custom space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "En un mundo donde vuelos y hoteles se pueden reservar en minutos, muchos viajeros se hacen la misma pregunta: ¿Los agentes de viajes realmente te ayudan a ahorrar dinero—o son solo un gasto adicional?"
                : "In a world where flights and hotels can be booked in minutes, many travelers ask the same question: Do travel agents actually help you save money—or are they just an added expense?"}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "En SJU Luxe Travel, creemos en ser honestos. La respuesta corta es: Sí, un asesor de viajes profesional puede ayudarte a ahorrar dinero, tiempo y estrés—pero el verdadero valor va mucho más allá del precio."
                : "At SJU Luxe Travel, we believe in being honest. The short answer is: Yes, a professional travel advisor can help you save money, time, and stress—but the real value goes far beyond price alone."}
            </p>

            <p className="text-foreground text-lg leading-relaxed font-heading italic">
              {isEs
                ? "Porque viajar no es un lujo, es una oportunidad—y cómo lo planificas hace toda la diferencia."
                : "Because travel is not a luxury, it's an opportunity—and how you plan it makes all the difference."}
            </p>

            {/* Section 1 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "¿Qué Hace Realmente un Asesor de Viajes?" : "What Does a Travel Advisor Really Do?"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Un asesor de viajes moderno no es solo alguien que reserva viajes. Piensa en ellos como tu estratega de viajes personal. Un asesor profesional se toma el tiempo para:"
                : "A modern travel advisor is not just someone who books trips. Think of them as your personal travel strategist. A professional advisor takes the time to:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Entender tus objetivos de viaje, presupuesto y estilo personal",
                    "Diseñar itinerarios personalizados en lugar de paquetes genéricos",
                    "Recomendar destinos, hoteles y experiencias que se adapten a ti",
                    "Manejar logística compleja y viajes a múltiples destinos",
                    "Abogar por ti si algo sale mal antes o durante el viaje",
                  ]
                : [
                    "Understand your travel goals, budget, and personal style",
                    "Design customized itineraries instead of generic packages",
                    "Recommend destinations, hotels, and experiences that fit you",
                    "Handle complex logistics and multi‑destination trips",
                    "Advocate for you if something goes wrong before or during travel",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>{item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base leading-relaxed font-semibold">
              {isEs
                ? "Los motores de reserva en línea muestran precios. Los asesores de viaje entregan valor, conocimiento y apoyo humano."
                : "Online booking engines show prices. Travel advisors deliver value, insight, and human support."}
            </p>

            {/* Section 2 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs
                ? "Cómo los Asesores de Viajes Te Ayudan a Ahorrar (Sin Recortar Calidad)"
                : "How Travel Advisors Help You Save Money (Without Cutting Corners)"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Ahorrar dinero no siempre significa pagar el precio más bajo—significa obtener el mejor valor por lo que gastas."
                : "Saving money doesn't always mean paying the lowest price—it means getting the best value for what you spend."}
            </p>

            {/* Sub-section: Exclusive Perks */}
            <h3 className="font-heading text-xl text-foreground mt-8">
              {isEs ? "✅ Acceso a Beneficios Exclusivos y Valor Agregado" : "✅ Access to Exclusive Perks & Added Value"}
            </h3>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "Los asesores de viajes a menudo tienen acceso a:" : "Travel advisors often have access to:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? ["Tarifas de socios preferidos", "Desayuno gratuito, créditos de resort o mejoras de habitación", "Amenidades adicionales que las reservas en línea no incluyen"]
                : ["Preferred partner rates", "Complimentary breakfast, resort credits, or room upgrades", "Added amenities that online bookings don't include"]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base leading-relaxed italic">
              {isEs ? "Puedes pagar el mismo precio—pero recibir más." : "You may pay the same price—but receive more."}
            </p>

            {/* Sub-section: Avoiding Mistakes */}
            <h3 className="font-heading text-xl text-foreground mt-8">
              {isEs ? "✅ Evitando Errores Costosos" : "✅ Avoiding Costly Mistakes"}
            </h3>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Reservar el aeropuerto incorrecto, elegir un hotel mal ubicado, perder requisitos de entrada o quedar atrapado en tarifas restrictivas puede costar mucho más de lo que esperas. Un asesor te ayuda a prevenir esos errores antes de que ocurran."
                : "Booking the wrong airport, choosing a poorly located hotel, missing entry requirements, or locking into restrictive fares can cost far more than you expect. An advisor helps prevent those mistakes before they happen."}
            </p>

            {/* Sub-section: Time Savings */}
            <h3 className="font-heading text-xl text-foreground mt-8">
              {isEs ? "✅ Ahorro de Tiempo = Ahorro Real" : "✅ Time Savings = Real Savings"}
            </h3>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Horas de investigación, comparar opciones y dudar de las decisiones se acumulan. Un asesor de viajes agiliza el proceso para que puedas concentrarte en la experiencia—no en la logística."
                : "Hours of research, comparing options, and second‑guessing decisions adds up. A travel advisor streamlines the process so you can focus on the experience—not the logistics."}
            </p>

            {/* Section 3 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Cuándo Tiene Más Sentido Usar un Asesor de Viajes" : "When Using a Travel Advisor Makes the Most Sense"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Si bien los viajes simples se pueden reservar en línea, un asesor de viajes es especialmente valioso cuando:"
                : "While simple trips can be booked online, a travel advisor is especially valuable when:"}
            </p>

            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {(isEs
                ? [
                    "Estás planeando un viaje internacional",
                    "Tu viaje incluye múltiples destinos",
                    "Estás reservando una luna de miel, vacaciones de lujo u ocasión especial",
                    "Quieres experiencias personalizadas—no viajes genéricos",
                    "Valoras la tranquilidad y el apoyo experto",
                  ]
                : [
                    "You're planning international travel",
                    "Your trip includes multiple destinations",
                    "You're booking a honeymoon, luxury vacation, or special occasion",
                    "You want personalized experiences—not cookie‑cutter travel",
                    "You value peace of mind and expert support",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Para estos viajes, la orientación por sí sola puede valer mucho más que cualquier descuento en línea."
                : "For these trips, the guidance alone can be worth far more than any online discount."}
            </p>

            {/* Section 4 */}
            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Viajar No Es un Lujo—Es una Oportunidad" : "Travel Is Not a Luxury—It's an Opportunity"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "En SJU Luxe Travel, creemos que el viaje debe sentirse intencional, fluido y gratificante. No se trata de gastar más—se trata de gastar sabiamente."
                : "At SJU Luxe Travel, we believe travel should feel intentional, seamless, and rewarding. It's not about spending more—it's about spending wisely."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Un asesor de viajes no reemplaza tu capacidad de reservar en línea. Eleva tu experiencia, protege tu inversión y ayuda a convertir un viaje en una experiencia significativa."
                : "A travel advisor doesn't replace your ability to book online. They elevate your experience, protect your investment, and help turn a trip into a meaningful journey."}
            </p>

            <p className="text-foreground text-lg leading-relaxed font-heading italic">
              {isEs
                ? "Porque cuando el viaje se hace bien, no es un lujo. Es una oportunidad para explorar, conectar y vivir plenamente."
                : "Because when travel is done right, it's not a luxury. It's an opportunity to explore, connect, and live fully."}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {isEs ? "¿Listo para Planificar Tu Viaje?" : "Ready to Plan Your Journey?"}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {isEs
                ? "Podemos ayudarte a crear una experiencia de viaje personalizada adaptada a tus objetivos y presupuesto."
                : "We can help craft a personalized travel experience tailored to your goals and budget."}
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

export default DoTravelAgentsSaveMoney;
