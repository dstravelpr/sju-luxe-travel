import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Picture } from "@/components/Picture";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/blog-tendencias-2026.jpg";
import heroImgWebp from "@/assets/blog-tendencias-2026.webp";


/**
 * DRAFT — no publicado.
 * Esta página está marcada noindex y no aparece en el índice del blog,
 * el sitemap ni el prerender. Para publicar: quitar `noindex`, añadir
 * schema BlogPosting, tarjeta en Blog.tsx, entrada en prerender + sitemap.
 */

const Post = () => {
  const { localPath } = useLanguage();

  return (
    <Layout>
      <SEOHead
        noindex
        title="Tendencias de viaje 2026 desde Puerto Rico (borrador)"
        description="Borrador: cuáles tendencias de viaje 2026 funcionan saliendo de San Juan y cuáles no."
      />
      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to={localPath("/blog")}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8"
          >
            <ArrowLeft size={16} />
            Volver al Blog
          </Link>

          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
              Borrador — Tendencias de Viaje
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              Tendencias de viaje 2026: cuáles funcionan desde Puerto Rico y
              cuáles no
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5">
                <User size={12} className="text-gold" />
                Daniel Santiago Díaz
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-gold" />
                Sin publicar
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-gold" />8 min
              </span>
            </div>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Todos los años salen las mismas listas de tendencias de viaje. Y
              todos los años las leo pensando lo mismo: están escritas para
              alguien que vive en Nueva York o en Londres.
            </p>
            <p>
              No es un detalle menor. Casi todo el contenido de viaje que
              circula en inglés asume que tú puedes coger un carro, que el frío
              es tu problema seis meses al año, y que la playa es algo que se
              busca. Aquí nada de eso aplica.
            </p>
            <p>
              Así que cogí las tendencias que están circulando para 2026 y las
              pasé por el único filtro que me importa: ¿esto sirve saliendo de
              San Juan?
            </p>
            <p>
              Algunas sirven muchísimo. Otras no tienen ningún sentido para
              nosotros.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground pt-6">
              Coolcation: la tendencia que aquí significa otra cosa
            </h2>
            <p>
              <strong className="text-foreground">Qué es:</strong> viajar
              buscando el fresco en vez del calor. Montañas, bosques, sitios con
              neblina y suéter.
            </p>
            <p>
              Para alguien que vive en Chicago, un coolcation es una moda. Para
              nosotros es la razón por la que uno viaja.
            </p>
            <p>
              Aquí está la parte que el contenido continental no entiende: el
              boricua no viaja buscando playa. Ya tiene playa. La playa es el
              patio. Cuando alguien de aquí se monta en un avión, muchas veces
              lo que está buscando es exactamente lo contrario — clima que se
              sienta distinto, ropa que no puede usar en agosto, un paisaje que
              no sea el que ve todos los días.
            </p>
            <p>
              Por eso los destinos que aquí funcionan mejor no son los que
              aparecen en las listas de "escapadas caribeñas". Son los ríos de
              Europa en otoño, la Columbia Británica, las tierras altas de
              Escocia. Sitios donde el aire se siente diferente.
            </p>
            <p>
              Y esto tiene una consecuencia práctica: si vas a hacer un
              coolcation de verdad, la temporada importa más que el destino. Los
              meses que en el hemisferio norte son "temporada baja" son justo
              cuando el fresco está bueno y los sitios están vacíos. Eso se
              planifica con tiempo, no se improvisa.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground pt-6">
              Microcation: aquí funciona mejor de lo que crees
            </h2>
            <p>
              <strong className="text-foreground">Qué es:</strong> el viaje de
              dos o tres días. Fin de semana largo, escapada corta, sin pedir
              dos semanas de vacaciones.
            </p>
            <p>
              Esta es de las que mejor traducen, y por una razón geográfica:
              desde San Juan hay destinos internacionales a menos de dos horas
              de vuelo. República Dominicana, St. Thomas, Tortola, Aruba, Sint
              Maarten. Para alguien en el continente, un viaje internacional de
              tres días es una locura logística. Para nosotros es un viernes.
            </p>
            <p>
              La trampa del microcation es querer meterle demasiado. Tres días
              no son unas vacaciones cortas — son un tipo distinto de viaje. Un
              hotel, un sitio, un ritmo lento. Si le metes tres destinos,
              vuelves más cansado de lo que te fuiste.
            </p>
            <p>
              Regla que uso: en un microcation, el tiempo de traslado no debe
              pasar del 15% del viaje. Si el vuelo y los transfers se comen
              medio día de tres, ya perdiste.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground pt-6">
              Noctourism: aquí tenemos ventaja y no la usamos
            </h2>
            <p>
              <strong className="text-foreground">Qué es:</strong> viajar para
              lo que pasa de noche. Cielos oscuros, mercados nocturnos,
              caminatas bajo la luna, observación de estrellas.
            </p>
            <p>
              Puerto Rico tiene una de las bahías bioluminiscentes más
              impresionantes del mundo y la mayoría de los que vivimos aquí no
              la hemos visto de noche con guía. Eso ya dice algo.
            </p>
            <p>
              Pero como tendencia de salida, el noctourism abre destinos que
              normalmente no se consideran: auroras boreales en Islandia o
              Noruega, cielos oscuros certificados en Chile, mercados nocturnos
              en Asia. Son viajes que se planifican al revés — la fecha la
              decide el fenómeno, no tu calendario.
            </p>
            <p>
              Esa es la parte incómoda y también la más interesante. Si quieres
              auroras, el viaje se arma alrededor de una ventana de meses
              específicos. Si quieres luna nueva para ver estrellas, el viaje se
              arma alrededor de una fecha exacta. No es un viaje que se compra
              en oferta.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground pt-6">
              Detour destinations: el pueblo de al lado
            </h2>
            <p>
              <strong className="text-foreground">Qué es:</strong> en vez del
              sitio famoso, el que está a media hora. Menos gente, más real, y
              casi siempre mejor.
            </p>
            <p>
              Esta es mi favorita porque es lo que llevo años haciendo sin que
              tuviera nombre.
            </p>
            <p>
              El sitio famoso es famoso por una razón, pero también está lleno,
              sobrevendido y organizado para gente que va a estar cuatro horas.
              El pueblo de al lado tiene la misma geografía, la mitad de la
              gente, y todavía funciona para los que viven ahí.
            </p>
            <p>
              Esto aplica a casi todo. En un{" "}
              <Link
                to={localPath("/blog/crucero-fluvial-duero-desde-puerto-rico")}
                className="text-gold hover:text-gold-light underline"
              >
                crucero fluvial
              </Link>
              , es bajarte en el pueblo pequeño en vez de la ciudad principal.
              En Italia, es Emilia-Romagna en vez de Toscana. En{" "}
              <Link
                to={localPath("/destinations/portugal")}
                className="text-gold hover:text-gold-light underline"
              >
                Portugal
              </Link>
              , es el interior en vez de la costa.
            </p>
            <p>
              Lo que nadie te dice: el detour destination casi nunca aparece en
              las búsquedas porque no tiene quien lo promocione. Se encuentra
              preguntando, no buscando.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground pt-6">
              Cabin-core: el contraste que aquí se siente extremo
            </h2>
            <p>
              <strong className="text-foreground">Qué es:</strong> cabañas de
              madera, chimenea, bosque, desconexión.
            </p>
            <p>
              Para alguien que vive en el trópico, esto es lo más exótico de la
              lista. Una cabaña con chimenea es, literalmente, lo opuesto a tu
              vida diaria. Y ese contraste es lo que hace que el viaje se sienta
              como viaje.
            </p>
            <p>
              Funciona bien combinado con coolcation — Columbia Británica, los
              Alpes, el norte de España. Y funciona particularmente bien para
              gente que viaja para desconectarse de verdad, no para acumular
              fotos.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground pt-6">
              Las que no aplican aquí
            </h2>
            <p>
              Dos de las tendencias que están circulando no las voy a
              recomendar, y prefiero decirlo:
            </p>
            <p>
              <strong className="text-foreground">Set-jetting</strong> — viajar
              a los sitios donde filmaron tu serie favorita. Funciona como
              concepto de mercadeo, pero como criterio para escoger un viaje es
              débil. Te lleva a sitios que se ven bien en cámara y que muchas
              veces no aguantan tres días.
            </p>
            <p>
              <strong className="text-foreground">Gig tripping</strong> — armar
              el viaje alrededor de un concierto. Desde Puerto Rico esto es
              carísimo por la matemática del vuelo: el costo del pasaje hace que
              un viaje de dos noches por un concierto sea difícil de justificar.
              Funciona si el concierto es la excusa y el viaje es de verdad. No
              funciona al revés.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground pt-6">
              Lo que de verdad cambió
            </h2>
            <p>
              Si le quitas los nombres en inglés, todas estas tendencias dicen
              lo mismo: la gente se cansó de que le vendieran el mismo viaje.
            </p>
            <p>
              Coolcation es "no quiero lo que se supone que quiera". Detour
              destination es "no quiero la foto que ya vi". Microcation es "no
              voy a esperar dos semanas de vacaciones para vivir algo".
            </p>
            <p>
              Todo apunta a lo mismo — el viaje empaquetado, con el itinerario
              decidido por alguien más, cada vez le sirve a menos gente.
            </p>
            <p>
              Y esa parte no es tendencia de 2026. Eso lleva años pasando. Lo
              único nuevo es que ahora tiene nombre.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-foreground pt-6">
              Cómo empezar
            </h2>
            <p>
              Si algo de esto te movió algo, la pregunta útil no es "a dónde
              voy". Es "de qué me quiero escapar".
            </p>
            <p>
              El calor. El ruido. El itinerario de otro. La sensación de estar
              viendo lo mismo que vio todo el mundo.
            </p>
            <p>Cuando tienes eso claro, el destino sale solo.</p>
            <p>
              ¿Preguntas sobre alguno de estos viajes saliendo de San Juan?
              Escríbeme a{" "}
              <a
                href="mailto:info@sjuluxetravel.com"
                className="text-gold hover:text-gold-light underline"
              >
                info@sjuluxetravel.com
              </a>
              .
            </p>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              Hablemos de tu próximo viaje
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              30 minutos de consulta, sin costo, para armar un itinerario que
              tenga sentido saliendo de San Juan.
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
