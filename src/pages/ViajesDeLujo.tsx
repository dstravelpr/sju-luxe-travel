import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const ViajesDeLujo = () => (
  <Layout>
    <SEOHead
      title="Viajes de Lujo desde Puerto Rico — Tu Asesor Privado | SJU Luxe Travel"
      description="Planifica viajes de lujo internacionales desde Puerto Rico con SJU Luxe Travel. Itinerarios a medida, beneficios NCM Concierge y servicio bilingüe desde San Juan."
      canonical="https://www.sjuluxetravel.com/viajes-de-lujo-desde-puerto-rico"
    />

    <article className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Tu Asesor Privado</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
          Viajes de Lujo desde Puerto Rico — <span className="text-gold-gradient italic">Tu Asesor Privado en San Juan</span>
        </h1>

        <div className="text-muted-foreground text-base leading-relaxed space-y-5">
          <p>
            Vivir en Puerto Rico te da una ventaja única para explorar el mundo: no necesitas pasaporte para viajar a destinos dentro de Estados Unidos, compartes la misma zona horaria con la costa este, y tienes acceso directo a vuelos internacionales desde el Aeropuerto Internacional Luis Muñoz Marín.
          </p>
          <p>
            En SJU Luxe Travel, nos especializamos en planificar viajes de lujo internacionales para residentes de Puerto Rico. No somos una agencia de turismo masivo — somos tu asesor privado de viajes, dedicado a crear experiencias exclusivas y personalizadas que se ajusten a tu estilo, tus intereses y tu presupuesto.
          </p>
          <p>
            Como agente independiente de NCM Concierge, parte de la red Travel Leaders, tenemos acceso a beneficios que no puedes obtener reservando en línea: mejoras de habitación complementarias, créditos de resort, check-in anticipado, cenas privadas, y amenidades VIP en las mejores propiedades del mundo.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">¿Por Qué Elegir un Asesor de Viajes Local en Puerto Rico?</h2>
          <p>
            Trabajar con un asesor de viajes basado en San Juan significa que entendemos tus necesidades como viajero puertorriqueño. Conocemos los vuelos directos disponibles desde SJU, las conexiones más eficientes, y cómo maximizar tu tiempo y presupuesto. Nuestro servicio es completamente bilingüe — en español e inglés — para que te comuniques en el idioma que prefieras.
          </p>
          <p>
            A diferencia de las plataformas de reservas en línea, te ofrecemos atención personalizada, recomendaciones basadas en experiencia real, y soporte 24/7 durante todo tu viaje. Si surge un problema — un vuelo cancelado, un cambio de hotel, una emergencia — estamos a una llamada de distancia.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Destinos Populares desde Puerto Rico</h2>
          <p>
            Nuestros clientes en Puerto Rico viajan frecuentemente a destinos como las Maldivas, Portugal, México, el Caribe, Italia, Grecia, y más. Cada itinerario es diseñado a medida, con acceso a experiencias exclusivas que transforman un viaje en un recuerdo inolvidable.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link to="/destinations/maldives" className="px-4 py-2 gold-border rounded-full text-sm text-muted-foreground hover:border-gold transition-colors">Maldivas</Link>
            <Link to="/destinations/portugal" className="px-4 py-2 gold-border rounded-full text-sm text-muted-foreground hover:border-gold transition-colors">Portugal</Link>
            <Link to="/destinations/mexico" className="px-4 py-2 gold-border rounded-full text-sm text-muted-foreground hover:border-gold transition-colors">México</Link>
          </div>

          <h2 className="font-heading text-2xl text-foreground mt-10">Comienza a Planificar Tu Próximo Viaje</h2>
          <p>
            Ya sea que estés planeando una luna de miel, unas vacaciones familiares, un viaje de aniversario, o una escapada solo para ti — estamos aquí para diseñar la experiencia perfecta. Ofrecemos consultas gratuitas para entender tus deseos y crear un itinerario que supere tus expectativas.
          </p>
        </div>

        <div className="mt-12 text-center py-12 gold-border rounded-lg">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            ¿Listo para <span className="text-gold-gradient italic">Explorar?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">Agenda tu consulta gratuita y diseñemos juntos tu próxima aventura de lujo.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
            Consulta Gratuita
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  </Layout>
);

export default ViajesDeLujo;
