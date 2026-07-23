import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, WEBSITE_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/blog-wellness-maldives.jpg";

const schemaJson = buildGraph({
  "@type": "BlogPosting",
  headline: "Luxury Solo Female Travel: Safest Bespoke Destinations for 2026",
  description: "The safest, most empowering luxury destinations for solo women travelers in 2026 — curated by SJU Luxe Travel.",
  author: AUTHOR,
  publisher: ORG_REF,
  datePublished: "2026-05-29",
  dateModified: "2026-07-23",
  inLanguage: "en-US",
  url: "https://www.sjuluxetravel.com/blog/luxury-solo-female-travel",
});

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/luxury-solo-female-travel.jpg"
        title="Luxury Solo Female Travel — Safest Destinations 2026"
        description="The safest, most empowering luxury destinations for solo women travelers in 2026: Iceland, Japan, Portugal, NZ — curated by SJU Luxe Travel."
        canonical="https://www.sjuluxetravel.com/blog/luxury-solo-female-travel"
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
          { name: 'Luxury Solo Female Travel: Safest Bespoke Destinations for 2026', url: "https://www.sjuluxetravel.com/blog/luxury-solo-female-travel" },
        ]}
        schemaJson={schemaJson}
      />
      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />{isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>
          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{isEs ? "Audiencia" : "Audience"}</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">{isEs ? "Viajes de Lujo para Mujeres Solas: Destinos Más Seguros 2026" : "Luxury Solo Female Travel: Safest Destinations for 2026"}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "29 de mayo de 2026" : "May 29, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "7 min de lectura" : "7 min read"}</span>
            </div>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={heroImg} alt={isEs ? "Viajes de lujo para mujeres solas" : "Luxury solo female travel"} className="w-full h-full object-cover" />
          </div>
          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>{isEs ? "Cada vez más mujeres viajan solas — para retiros, sabáticos, cumpleaños importantes, o simplemente porque pueden. Estos son los destinos donde la combinación de seguridad, experiencias de lujo e infraestructura para viajeras solas es la más alta." : "More women than ever are traveling solo — for retreats, sabbaticals, milestone birthdays, or simply because they can. These are the destinations where safety, luxury experiences and solo-traveler infrastructure are at their highest."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">1. {isEs ? "Islandia" : "Iceland"}</h2>
            <p>{isEs ? "Consistentemente el país más seguro del mundo. Tours privados en Land Rover, retiros termales en The Retreat at Blue Lagoon, auroras boreales desde domos privados." : "Consistently the world's safest country. Private Land Rover tours, thermal retreats at The Retreat at Blue Lagoon, northern lights from private domes."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">2. Japan</h2>
            <p>{isEs ? "Cultura de respeto, infraestructura impecable, gastronomía sin igual. Aman Tokyo, Hoshinoya Kyoto, ryokans tradicionales. Excursiones privadas en kimono o té." : "Culture of respect, impeccable infrastructure, peerless food. Aman Tokyo, Hoshinoya Kyoto, traditional ryokans. Private kimono or tea experiences."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">3. {isEs ? "Portugal — Lisboa y Algarve" : "Portugal — Lisbon & Algarve"}</h2>
            <p>{isEs ? "Idioma cercano al español, gente cálida, hoteles boutique pequeños donde el staff te conoce por nombre. Bairro Alto Hotel, Vila Joya, Six Senses Douro Valley." : "Spanish-adjacent language, warm people, small boutique hotels where staff know your name. Bairro Alto Hotel, Vila Joya, Six Senses Douro Valley."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">4. {isEs ? "Nueva Zelanda" : "New Zealand"}</h2>
            <p>{isEs ? "Aventura de lujo en el lado más seguro: caminatas guiadas privadas, lodges como Huka Lodge o Blanket Bay, helicóptero a glaciares." : "Luxury adventure at its safest: private guided walks, lodges like Huka Lodge or Blanket Bay, helicopter to glaciers."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">5. {isEs ? "Maldivas (resorts en islas privadas)" : "Maldives (private-island resorts)"}</h2>
            <p>{isEs ? "Cada resort es su propia isla. Soneva Fushi, COMO Cocoa Island y Joali ofrecen retiros de wellness en entornos absolutamente protegidos." : "Each resort is its own island. Soneva Fushi, COMO Cocoa Island and Joali offer wellness retreats in fully protected settings."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Cómo lo planificamos diferente" : "How we plan it differently"}</h2>
            <ul className="space-y-2 list-none">
              {(isEs ? ["Traslados privados puerta a puerta — nunca taxi sola al hotel","Hoteles seleccionados por su staff de seguridad femenino","Excursiones privadas con guías mujeres cuando sea posible","Línea directa 24/7 con tu agente en español","Habitaciones en pisos altos, lejos de ascensores"] : ["Private door-to-door transfers — no solo taxi to hotel","Hotels chosen for their female security staff","Private excursions with female guides when possible","24/7 direct line to your agent","Higher-floor rooms, away from elevators"]).map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>
          </div>
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">{isEs ? "Planifica Tu Viaje Solo" : "Plan Your Solo Trip"}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{isEs ? "Consulta confidencial, sin presión, en español o inglés." : "Confidential, no-pressure consultation in Spanish or English."}</p>
            <Link to={localPath("/contact")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">{isEs ? "Comenzar" : "Start Planning"}</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
