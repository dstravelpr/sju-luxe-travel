import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const LunaDeMiel = () => (
  <Layout>
    <SEOHead
      title="Luna de Miel de Lujo desde Puerto Rico — Planificación Personalizada | SJU Luxe Travel"
      description="Planifica tu luna de miel de lujo desde San Juan, Puerto Rico. Las Maldivas, Amalfi, Santorini, Bora Bora y más — itinerarios románticos a medida con beneficios exclusivos de NCM Concierge."
      canonical="https://www.sjuluxetravel.com/luna-de-miel-de-lujo"
    />

    <article className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Experiencias Románticas</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
          Planificación de Luna de Miel de Lujo <span className="text-gold-gradient italic">desde San Juan, Puerto Rico</span>
        </h1>

        <div className="prose-custom space-y-6">
          <p className="text-muted-foreground text-base leading-relaxed">
            Tu luna de miel es, probablemente, el viaje más importante de tu vida. No merece ser un paquete genérico, una habitación estándar ni un itinerario copiado de internet. Merece atención, detalle y un asesor que entienda exactamente lo que significa ese momento para ustedes dos.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            En <strong className="text-foreground">SJU Luxe Travel</strong>, nos especializamos en lunas de miel de lujo para parejas que salen desde Puerto Rico hacia los destinos más románticos del mundo. Desde la primera llamada hasta el regreso a casa, nos encargamos de cada detalle para que tu único trabajo sea disfrutar.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Destinos de Luna de Miel de Lujo más Solicitados</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Cada pareja es diferente. Por eso no creemos en destinos "de moda" — creemos en encontrar el destino perfecto <em>para ustedes</em>. Estos son los más solicitados por nuestros clientes desde Puerto Rico:
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Las Maldivas</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            El destino de luna de miel definitivo. Villas privadas sobre lagunas turquesas, cenas bajo las estrellas en la playa, snorkel entre rayas manta y la privacidad absoluta que merece este momento. Resorts favoritos: Conrad Maldives Rangali Island, Huvawalhi, One&Only Reethi Rah, Soneva Fushi.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Santorini, Grecia</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Atardeceres sobre el Mar Egeo, cuevas convertidas en suites boutique, vinos locales y la magia del Mediterráneo. Combinamos Santorini con Mykonos o Atenas para crear un itinerario griego completo e inolvidable.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Costa Amalfitana, Italia</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Positano, Ravello, Capri — la Italia del romanticismo eterno. Yates privados por la costa, degustaciones en bodegas centenarias, cenas en terrazas con vistas al Mar Tirreno.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Bora Bora, Polinesia Francesa</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Para quienes sueñan con el Pacífico Sur. Bungalows sobre el agua en el Four Seasons o el InterContinental, aguas cristalinas y una sensación de estar al fin del mundo — en el mejor sentido.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Portugal</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Para la pareja que prefiere el romanticismo cultural al romanticismo de playa. Lisboa, el Douro Valley y el Algarve ofrecen palacios convertidos en hoteles boutique, gastronomía sorprendente y una intimidad que Europa masiva no puede ofrecer.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Toscana, Italia</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Villas privadas entre viñedos, pueblos medievales, trufa blanca y el Chianti más auténtico. Para la pareja que ama la buena mesa tanto como los paisajes de película.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Lo Que Incluye Tu Luna de Miel Planificada con SJU Luxe Travel</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Cuando planificas tu luna de miel con nosotros, recibes mucho más que reservas de hotel y vuelos:
          </p>
          <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              ["Detalles románticos de bienvenida", "pétalos de rosas, champagne y amenidades especiales coordinados con el resort antes de tu llegada"],
              ["Mejoras de habitación preferencial", "a través de nuestra red NCM Concierge, negociamos upgrades que normalmente no están disponibles al público"],
              ["Cenas privadas coordinadas", "en la playa, en la piscina, en una terraza privada — el ambiente que siempre imaginaron"],
              ["Traslados privados", "desde el aeropuerto hasta el resort, sin esperas ni compartir transporte con desconocidos"],
              ["Itinerario hora a hora", "para que nunca tengan que preocuparse por qué sigue, pero con flexibilidad total para improvisar"],
              ["Soporte 24/7 durante el viaje", "cualquier cambio, necesidad o sorpresa, Daniel está disponible en tiempo real"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-foreground">{title}</strong> — {desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">¿Cuándo Empezar a Planificar?</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Recomendamos comenzar la planificación de tu luna de miel <strong className="text-foreground">entre 6 y 12 meses antes</strong> de la boda, especialmente para destinos como las Maldivas y la Polinesia Francesa donde los resorts más exclusivos tienen disponibilidad limitada.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Sin embargo, también trabajamos con lunas de miel de planificación rápida — si tu boda es en 2–3 meses, contáctanos de inmediato y encontraremos la mejor opción disponible.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Luna de Miel sin Pasaporte — La Ventaja de Viajar desde Puerto Rico</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Como residentes de Puerto Rico, viajan con pasaporte americano — lo que significa acceso sin visa a la gran mayoría de los destinos europeos y del Caribe, y entrada facilitada a Asia y Oceanía. Desde el Aeropuerto Luis Muñoz Marín, cuentan con vuelos directos o con una sola conexión hacia prácticamente cualquier destino soñado.
          </p>
        </div>

        <div className="mt-16 text-center py-12 gold-border rounded-lg">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            ¿Están listos para empezar a soñar con <span className="text-gold-gradient italic">su luna de miel?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Agenda una consulta gratuita con Daniel. Cuéntanos cómo se imaginan ese primer viaje juntos — y nosotros nos encargamos del resto.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
            Agenda Tu Consulta Gratuita
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  </Layout>
);

export default LunaDeMiel;
