import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, WEBSITE_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/rivers/douro.png";

const schemaJson = buildGraph({
  "@type": "BlogPosting",
  headline: "Crucero Fluvial por el Duero desde Puerto Rico: Portugal desde el Río",
  description:
    "Guía completa para hacer un crucero fluvial por el Duero desde Puerto Rico: navieras, rutas de vuelo, mejor temporada y experiencias de bodega en el valle vinícola más antiguo del mundo.",
  author: AUTHOR,
  publisher: ORG_REF,
  datePublished: "2026-07-08",
  dateModified: "2026-07-23",
  inLanguage: "es-PR",
  image: "https://www.sjuluxetravel.com/og/crucero-fluvial-duero.jpg",
  url: "https://www.sjuluxetravel.com/blog/crucero-fluvial-duero-desde-puerto-rico",
  mainEntityOfPage: "https://www.sjuluxetravel.com/blog/crucero-fluvial-duero-desde-puerto-rico",
});

const Post = () => {
  const { localPath } = useLanguage();

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/crucero-fluvial-duero.jpg"
        title="Crucero Fluvial por el Duero desde Puerto Rico: Portugal desde el Río | SJU Luxe Travel"
        description="Cómo planificar un crucero fluvial de lujo por el Duero desde San Juan: navieras (AmaWaterways, Scenic, Uniworld), rutas de vuelo, mejor temporada y experiencias de bodega en Portugal."
        canonical="https://www.sjuluxetravel.com/blog/crucero-fluvial-duero-desde-puerto-rico"
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
          { name: 'Crucero Fluvial por el Duero desde Puerto Rico: Portugal desde el Río', url: "https://www.sjuluxetravel.com/blog/crucero-fluvial-duero-desde-puerto-rico" },
        ]}
        schemaJson={schemaJson}
      />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />Volver al Blog
          </Link>

          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Cruceros Fluviales</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              Crucero Fluvial por el Duero desde Puerto Rico: Portugal desde el Río
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <Link to={localPath("/about")} className="flex items-center gap-1.5 hover:text-gold transition-colors"><User size={12} className="text-gold" />Daniel Santiago Díaz<span className="text-muted-foreground/70"> — Agente de Viajes de Lujo</span></Link>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />8 de julio de 2026</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />8 min de lectura</span>
            </div>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={heroImg} alt="Crucero fluvial de lujo por el valle del Duero en Portugal" className="w-full h-full object-cover" width={1600} height={900} />
          </div>

          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p className="text-lg text-foreground/90">
              De todos los cruceros fluviales que reservamos desde Puerto Rico, el Duero es el que más sorprende a los clientes. Es un río corto, íntimo, tallado en un valle de terrazas vinícolas que la UNESCO protege como Patrimonio de la Humanidad — y se navega sin las multitudes del Danubio o el Rin. Si te gusta el vino, la comida portuguesa y los paisajes que se ven de novela, este es tu crucero.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">¿Por qué el valle del Duero?</h2>
            <p>
              El Duero (Douro en portugués) es el valle vinícola demarcado más antiguo del mundo — la denominación se estableció en 1756. Las terrazas de pizarra que suben por las montañas fueron talladas a mano hace siglos y hoy producen los vinos de Porto y los tintos secos que han puesto a Portugal en el mapa gastronómico global.
            </p>
            <p>
              A diferencia del Danubio, aquí no hay masas turísticas. Los barcos son más pequeños (100–130 huéspedes), los pueblos son diminutos (Pinhão, Régua, Barca d'Alva) y cada parada se siente personal. Amaneces con niebla sobre el río, desayunas viendo las viñas y a mediodía estás en una quinta familiar catando vinos que casi no se exportan.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Las tres navieras que recomendamos</h2>

            <p><strong className="text-foreground">AmaWaterways — AmaVida y AmaDouro:</strong> nuestra recomendación por defecto para viajeros de Puerto Rico que quieren gastronomía fuerte y excursiones activas. Bicicletas a bordo, cenas maridadas con vinos del Duero, chef ejecutivo con reconocimiento internacional. El AmaVida tiene solo 106 huéspedes.</p>

            <p><strong className="text-foreground">Scenic — Scenic Azure:</strong> el más "todo-incluido premium". Butler para cada suite, excursiones privadas incluidas (no en grupo), vuelos en helicóptero opcionales sobre las viñas. Ideal para lunas de miel y aniversarios importantes.</p>

            <p><strong className="text-foreground">Uniworld — S.S. São Gabriel:</strong> el más lujoso en decoración y ambiente boutique-hotel flotante. Piscina climatizada en cubierta, spa a bordo, gastronomía con productos locales. Muy solicitado por parejas mayores de 50 que buscan un ritmo pausado.</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Cómo llegar desde San Juan</h2>
            <p>
              La mayoría de itinerarios embarcan en Porto (aeropuerto OPO). Desde San Juan no hay vuelo directo, así que la ruta se arma con una conexión en Miami o Nueva York. Las combinaciones que mejor funcionan son SJU → MIA → LIS → OPO (TAP Air Portugal) o SJU → JFK → LIS → OPO. Si combinas Portugal con España en el mismo viaje, la ruta vía Madrid con Iberia funciona muy bien.
            </p>
            <p>
              Cubrimos las rutas, aerolíneas y consejos de business class en detalle en nuestra guía de{" "}
              <Link to={localPath("/blog/vuelos-puerto-rico-portugal")} className="text-gold hover:text-gold-light underline">
                vuelos de Puerto Rico a Portugal
              </Link>
              . Recomendamos siempre llegar a Porto un día antes del embarque — el jet lag es real y perder el barco por un vuelo atrasado es peor.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Mejor temporada para navegar el Duero</h2>
            <p>
              La temporada oficial va de marzo a noviembre. Nuestras ventanas preferidas:
            </p>
            <ul className="space-y-2 list-none">
              {[
                "Mayo y junio: viñas en pleno verde, temperaturas suaves (20–28°C), menos calor que en agosto.",
                "Septiembre y principios de octubre: temporada de vendimia. Se puede participar en la pisa de uvas en algunas quintas. Es nuestra recomendación número uno.",
                "Noviembre: hojas doradas en las terrazas, ambiente íntimo, mejores precios.",
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>
            <p>Julio y agosto son navegables pero calurosos (hasta 38°C tierra adentro) y las quintas están más llenas. No es nuestra primera opción.</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Qué esperar a bordo y en tierra</h2>
            <p>
              Un itinerario típico de 7 noches embarca en Porto, sube el río hasta Barca d'Alva (frontera con España, con excursión opcional a Salamanca) y regresa. En el camino se para en Régua, Pinhão, Pocinho y Lamego. Las excursiones incluyen visitas privadas a quintas familiares (Quinta do Seixo, Quinta da Roêda, Quinta do Bomfim), catas de Porto vintage, una visita al santuario barroco de Lamego y cenas en fado bars auténticos en Porto.
            </p>
            <p>
              A bordo, el ritmo es pausado: desayuno tardío, navegación con vistas, excursión de mañana o tarde, cena maridada, música en vivo. No hay casino, no hay animación de crucero oceánico. Es más parecido a un hotel boutique flotante.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Presupuesto realista (7 noches, por persona en cabina doble)</h2>
            <ul className="space-y-2 list-none">
              {[
                "Vuelos business class SJU–OPO ida y vuelta: $4,500–$7,500",
                "Vuelos premium economy: $2,200–$3,500",
                "Crucero AmaWaterways o Uniworld cabina balcón: $4,800–$7,200",
                "Crucero Scenic suite con butler: $6,500–$9,500",
                "Noches pre-crucero en Porto (2 noches en boutique 5★): $600–$1,200",
                "Extensión post-crucero en Lisboa (3 noches): $1,200–$2,500",
                "Total típico por persona: $10,000–$18,000",
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">Experiencias de bodega que reservamos aparte</h2>
            <p>
              Los cruceros incluyen visitas de calidad, pero para clientes serios sobre el vino coordinamos experiencias privadas en paralelo: almuerzo privado en la Quinta do Vallado, cata vertical de Ports vintage en Taylor's, cena con el enólogo en Quinta do Crasto, o una noche fuera del barco en la Six Senses Douro Valley (hotel Relais & Châteaux enclavado en una quinta del siglo XIX). Estas experiencias son las que transforman un crucero bueno en un viaje memorable.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Lecturas relacionadas</h2>
            <ul className="space-y-2 list-none">
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")} className="text-gold hover:text-gold-light underline">Cruceros fluviales de lujo desde Puerto Rico — todos los ríos</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/destinations/portugal")} className="text-gold hover:text-gold-light underline">Portugal — guía completa de destino de lujo</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside")} className="text-gold hover:text-gold-light underline">Comparativa AmaWaterways vs Avalon vs Riverside</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/blog/vuelos-puerto-rico-portugal")} className="text-gold hover:text-gold-light underline">Vuelos de Puerto Rico a Portugal — mejores rutas</Link></li>
            </ul>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">Planifica tu Crucero por el Duero</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Coordinamos vuelos, noches pre-crucero en Porto, camarote con balcón y experiencias privadas en las quintas del Duero.
            </p>
            <Link to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
              Ver Cruceros Fluviales
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
