import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const CrucerosDeLujo = () => (
  <Layout>
    <SEOHead
      title="Cruceros de Lujo desde San Juan, Puerto Rico — Planificación VIP | SJU Luxe Travel"
      description="Planifica tu crucero de lujo desde San Juan, Puerto Rico con SJU Luxe Travel. Acceso a cruceros premium, cabinas exclusivas, excursiones privadas y beneficios VIP de NCM Concierge que no obtienes reservando directo."
      canonical="https://www.sjuluxetravel.com/cruceros-de-lujo-desde-san-juan"
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
            <strong className="text-foreground">SJU Luxe Travel</strong> es tu asesor de cruceros de lujo con base en San Juan, Puerto Rico. Como parte de la red <strong className="text-foreground">NCM Concierge — Travel Leaders</strong>, tenemos acceso a beneficios VIP exclusivos, tarifas preferentes y atención personalizada que simplemente no obtienes reservando directamente con la naviera o a través de plataformas de viaje genéricas.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">¿Por Qué Planificar Tu Crucero con un Asesor Especializado?</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            La mayoría de las personas reserva su crucero directamente en el sitio web de la naviera y cree que así obtiene la mejor oferta. En realidad, lo que obtiene es la tarifa pública estándar, sin ningún beneficio adicional.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Al trabajar con SJU Luxe Travel a través de nuestra red NCM Concierge, recibes:
          </p>
          <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              ["Crédito a bordo (onboard credit)", "dinero real para gastar en el barco en spa, excursiones, restaurantes especiales o tiendas"],
              ["Amenidades de bienvenida en cabina", "champagne, frutas, flores o notas personalizadas coordinadas con el barco antes de embarcar"],
              ["Acceso a tarifas de grupo y tarifas no publicadas", "en muchos casos, igual o más económicas que las tarifas públicas"],
              ["Selección de cabina óptima", "te ayudamos a elegir la categoría y ubicación ideal según tu presupuesto y preferencias"],
              ["Coordinación de excursiones privadas", "en cada puerto, organizamos excursiones exclusivas con guías privados en lugar de las excursiones masivas estándar del barco"],
              ["Atención pre y post crucero", "hotel en San Juan la noche anterior, transfers desde tu casa, planificación de extensiones de itinerario"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-foreground">{title}</strong> — {desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">Líneas de Cruceros de Lujo que Trabajamos</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            No todas las navieras ofrecen la misma experiencia. Estas son las líneas de cruceros premium que recomendamos y con las que tenemos relaciones preferenciales:
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Oceania Cruises</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Para el viajero que prioriza la gastronomía. Barcos boutique de tamaño mediano, cocina de autor y destinos únicos que los barcos más grandes no pueden alcanzar.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Regent Seven Seas</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            El crucero todo incluido de lujo por excelencia. Todo incluido de verdad: vuelos en business class, excursiones en cada puerto, champagne, spa — sin sorpresas al final.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Silversea</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Elegancia europea, servicio ultra-personalizado y rutas que incluyen destinos remotos como la Antártida, las Islas Galápagos y el Ártico.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Viking Ocean Cruises</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Para quienes buscan experiencias culturales profundas. Sin casinos, sin espectáculos de entretenimiento masivo — solo destinos, historia y gastronomía de calidad.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Seabourn</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            El ultra-lujo en el mar. Barcos pequeños, servicio casi de yate privado y acceso a puertos que los barcos grandes no pueden visitar.
          </p>

          <h3 className="font-heading text-xl text-foreground mt-8">Celebrity Cruises (Suite Class)</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Para el viajero que busca lujo moderno con rutas amplias desde San Juan y otros puertos del Caribe.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Itinerarios de Crucero Populares desde San Juan</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Desde el Puerto de San Juan, estos son los itinerarios más solicitados por nuestros clientes:
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Caribe del Este y Sur</strong> — Barbados, St. Lucia, Grenada, Aruba, Curaçao — el Caribe más auténtico y menos masificado.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Caribe del Oeste</strong> — Jamaica, Islas Caimán, Belize, Costa Maya — cultura, naturaleza y aguas cristalinas.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Islas del Caribe del Norte</strong> — St. Barts, St. Maarten, Antigua, St. Kitts — el Caribe más exclusivo y chic.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Trasatlántico desde San Juan</strong> — Para los aventureros que sueñan con cruzar el Atlántico en barco y llegar a las costas de España, Portugal o las Islas Canarias.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            <strong className="text-foreground">Reposicionamientos</strong> — Una de las joyas ocultas del mundo de los cruceros: tarifas significativamente más bajas en itinerarios largos de reposicionamiento que salen desde San Juan hacia Europa o el Mediterráneo.
          </p>

          <h2 className="font-heading text-2xl text-foreground mt-10">Cruceros de Lujo para Grupos desde Puerto Rico</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            ¿Celebras un cumpleaños especial, una luna de miel, un aniversario o una reunión familiar? Los cruceros son una de las mejores opciones para grupos: cada persona tiene su privacidad y espacio, pero todos comparten la experiencia de estar juntos en los mismos destinos.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Coordinamos cruceros de lujo en grupo desde Puerto Rico con:
          </p>
          <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              "Bloques de cabinas en ubicaciones premium",
              "Cenas privadas en restaurantes de especialidad a bordo",
              "Cócteles de bienvenida privados",
              "Excursiones privadas coordinadas en cada puerto",
              "Atención individual a cada miembro del grupo",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl text-foreground mt-10">El Puerto de San Juan — Tu Puerta de Salida al Mundo</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            El Terminal de Cruceros de San Juan opera desde el histórico Muelle de Pan American y el Old San Juan Cruise Port, con acceso fácil desde cualquier punto del área metropolitana. Antes de zarpar, podemos coordinar:
          </p>
          <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
            {[
              "Estadía en hotel boutique en el Viejo San Juan o Condado la noche anterior",
              "Transfer privado desde tu casa o lugar de estadía hasta el puerto",
              "Cena de pre-crucero en uno de los mejores restaurantes de San Juan",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
            ))}
          </ul>
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
