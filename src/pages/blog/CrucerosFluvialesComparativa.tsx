import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, WEBSITE_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/blog-river-cruise.jpg";

const schemaJson = buildGraph({
  "@type": "BlogPosting",
  headline: "Cruceros Fluviales de Lujo: AmaWaterways vs Avalon vs Riverside",
  description: "Comparativa completa entre AmaWaterways, Avalon Waterways y Riverside Luxury Cruises para viajeros desde Puerto Rico.",
  author: AUTHOR,
  publisher: ORG_REF,
  datePublished: "2026-05-29",
  dateModified: "2026-07-23",
  inLanguage: "es-PR",
  url: "https://www.sjuluxetravel.com/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside",
});

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/cruceros-fluviales.jpg"
        title="Cruceros Fluviales: AmaWaterways vs Avalon vs Riverside"
        description="Compara AmaWaterways, Avalon Waterways y Riverside Luxury Cruises. Diferencias en barcos, itinerarios, gastronomía y precio para viajeros de PR."
        canonical="https://www.sjuluxetravel.com/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside"
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
          { name: 'Cruceros Fluviales de Lujo: AmaWaterways vs Avalon vs Riverside', url: "https://www.sjuluxetravel.com/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside" },
        ]}
        schemaJson={schemaJson}
      />
      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />{isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>
          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{isEs ? "Cruceros" : "Cruises"}</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              {isEs ? "Cruceros Fluviales de Lujo: AmaWaterways vs Avalon vs Riverside" : "Luxury River Cruises: AmaWaterways vs Avalon vs Riverside"}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "29 de mayo de 2026" : "May 29, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "9 min de lectura" : "9 min read"}</span>
            </div>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={heroImg} alt={isEs ? "Crucero fluvial de lujo" : "Luxury river cruise"} className="w-full h-full object-cover" />
          </div>

          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>{isEs ? "Cada vez más viajeros desde Puerto Rico descubren los cruceros fluviales: barcos pequeños (100–200 huéspedes), un puerto distinto cada día, todo incluido, y sin las multitudes de los cruceros oceánicos. Pero ¿cuál línea elegir? Estas son las tres que recomendamos en SJU Luxe Travel, y cuándo tiene sentido cada una." : "More travelers from Puerto Rico are discovering river cruising: small ships (100–200 guests), a new port every day, all-inclusive, and no ocean-cruise crowds. But which line should you pick? These are the three we recommend at SJU Luxe Travel — and when each makes sense."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">AmaWaterways</h2>
            <p><strong className="text-foreground">{isEs ? "Mejor para:" : "Best for:"}</strong> {isEs ? "el viajero gourmet activo. Bicicletas a bordo, excursiones de hiking, gastronomía premiada con estrella Michelin (única en ríos)." : "the active gourmet traveler. Onboard bikes, hiking excursions, Michelin-recognized dining (unique on rivers)."}</p>
            <p><strong className="text-foreground">{isEs ? "Ríos estrella:" : "Star rivers:"}</strong> {isEs ? "Danubio, Rin, Douro (Portugal), Mekong." : "Danube, Rhine, Douro (Portugal), Mekong."}</p>
            <p><strong className="text-foreground">{isEs ? "Camarotes:" : "Cabins:"}</strong> {isEs ? "balcón doble francés + balcón al exterior — el más amplio del segmento." : "twin French + outside balcony — the widest in the segment."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Avalon Waterways</h2>
            <p><strong className="text-foreground">{isEs ? "Mejor para:" : "Best for:"}</strong> {isEs ? "quien quiere las vistas más grandes. Sus Suite Ships™ tienen ventanas panorámicas de pared a pared y camas orientadas hacia el río." : "those who want the biggest views. Their Suite Ships™ have wall-to-wall panoramic windows and beds facing the river."}</p>
            <p><strong className="text-foreground">{isEs ? "Ríos estrella:" : "Star rivers:"}</strong> {isEs ? "Danubio, Sena (París), Ródano, Galápagos." : "Danube, Seine (Paris), Rhône, Galápagos."}</p>
            <p><strong className="text-foreground">{isEs ? "Diferencial:" : "Differentiator:"}</strong> {isEs ? "excursiones \"Classic / Discovery / Active\" — eliges la intensidad cada día." : "\"Classic / Discovery / Active\" excursions — choose intensity each day."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">Riverside Luxury Cruises</h2>
            <p><strong className="text-foreground">{isEs ? "Mejor para:" : "Best for:"}</strong> {isEs ? "el viajero que busca el escalón más alto del lujo fluvial — verdaderamente all-inclusive premium, butler service, alcohol top-shelf incluido." : "the traveler seeking the highest tier of river luxury — truly all-inclusive premium, butler service, top-shelf alcohol included."}</p>
            <p><strong className="text-foreground">{isEs ? "Ríos estrella:" : "Star rivers:"}</strong> {isEs ? "Danubio, Rin, Main, Mosela." : "Danube, Rhine, Main, Moselle."}</p>
            <p><strong className="text-foreground">{isEs ? "Diferencial:" : "Differentiator:"}</strong> {isEs ? "barcos recién renovados (ex-Crystal River Cruises), ratio personal/huésped de casi 1:1." : "newly refurbished ships (former Crystal River Cruises), nearly 1:1 staff-to-guest ratio."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "¿Cuál es para ti?" : "Which one is right for you?"}</h2>
            <p>{isEs ? "Si quieres actividad y gastronomía: AmaWaterways. Si quieres vistas y flexibilidad: Avalon. Si quieres el máximo lujo y servicio personalizado: Riverside. Como agente certificado de las tres líneas, podemos comparar precios reales y beneficios exclusivos para tu fecha." : "If you want activity and food: AmaWaterways. If you want views and flexibility: Avalon. If you want max luxury and personal service: Riverside. As a certified agent for all three lines, we compare real pricing and exclusive perks for your dates."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Lecturas Relacionadas" : "Related Reading"}</h2>
            <ul className="space-y-2 list-none">
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")} className="text-gold hover:text-gold-light underline">{isEs ? "Cruceros fluviales de lujo desde Puerto Rico" : "Luxury river cruises from Puerto Rico"}</Link></li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1">→</span><Link to={localPath("/cruceros-de-lujo-desde-san-juan")} className="text-gold hover:text-gold-light underline">{isEs ? "Cruceros de lujo desde San Juan" : "Luxury ocean cruises from San Juan"}</Link></li>
            </ul>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">{isEs ? "Compara y Reserva" : "Compare & Book"}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{isEs ? "Te enviamos comparativa de precios y disponibilidad para tus fechas." : "We'll send pricing and availability comparison for your dates."}</p>
            <Link to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">{isEs ? "Ver Cruceros Fluviales" : "View River Cruises"}</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
