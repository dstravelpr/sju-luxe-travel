import { NewsletterForm } from "@/components/NewsletterForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Picture } from "@/components/Picture";
import { useLanguage } from "@/i18n/LanguageContext";
import blogMicrocationsImg from "@/assets/blog-microcations.jpg";
import blogLuxuryImg from "@/assets/blog-luxury-travel.jpg";
import blogAgentImg from "@/assets/blog-travel-agent.jpg";
import blogRiverCruiseImg from "@/assets/blog-river-cruise.jpg";
import blogRepositioningImg from "@/assets/blog-repositioning-cruise.jpg";
import blogRepositioningImgWebp from "@/assets/blog-repositioning-cruise.webp";
import blogHoneymoonImg from "@/assets/honeymoon/maldives.png";
import blogWellnessImg from "@/assets/blog-wellness-maldives.jpg";
import blogDueroImg from "@/assets/rivers/douro.png";
import blogConciergeImg from "@/assets/traveler-airport.jpg";

const Blog = () => {
  const { t, localPath, language } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = t.blog.categories[activeCategoryIndex];

  const filterCards = (node: HTMLDivElement | null) => {
    if (!node) return;
    for (const card of Array.from(node.children)) {
      const href = card.getAttribute("href") ?? "";
      const groups = [[], ["duero", "reposicionamiento", "micro-vacaciones"], ["concierge", "save-money", "what-luxury"], ["river-cruising", "duero", "wellness"], ["duero", "what-luxury"]];
      (card as HTMLElement).hidden = activeCategoryIndex !== 0 && !groups[activeCategoryIndex]?.some(slug => href.includes(slug));
    }
  };

  const postImages = [
    blogRiverCruiseImg,
    blogLuxuryImg,
    blogAgentImg,
    blogMicrocationsImg,
  ];
  const postSlugs = [
    "river-cruising-new-generation",
    "what-luxury-travel-really-means",
    "do-travel-agents-really-help-save-money",
    "micro-vacaciones-futuro-del-viaje",
  ];

  return (
    <Layout>
      <SEOHead
        title="Travel Blog from Puerto Rico | SJU Luxe Travel"
        description="bespoke travel guides from San Juan, PR: honeymoons, river cruises, Maldives, Portugal & more. Expert insights by Daniel Santiago Díaz."
        titleEs="Blog de Viajes desde Puerto Rico | SJU Luxe Travel"
        descriptionEs="Guías de viajes desde Puerto Rico: lunas de miel, cruceros de río, Maldivas, Portugal y más. Por Daniel Santiago Díaz."
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
        ]}
        emitHreflang
      />

      <div className="pt-24 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground text-center pt-8 pb-4">
            {language === "es" ? "Blog de Viajes — " : "Travel Blog — "}
            <span className="text-gold-gradient italic">
              {language === "es" ? "Consejos e Inspiración desde San Juan" : "Tips and Inspiration from San Juan"}
            </span>
          </h1>
        </div>
      </div>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {t.blog.categories.map((cat, index) => (
              <Button variant="outline"
                aria-pressed={activeCategory === cat}
                key={cat}
                onClick={() => setActiveCategoryIndex(index)}
                className={`px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase font-body transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold-gradient text-primary-foreground"
                    : "Gold-border text-muted-foreground hover:border-gold hover:text-foreground"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="aspect-[4/3] bg-charcoal gold-border rounded-sm overflow-hidden relative">
              <div className="absolute top-4 left-4 px-3 py-1 bg-gold-gradient text-primary-foreground text-[10px] tracking-[0.15em] uppercase font-semibold rounded-sm z-10">
                {t.blog.featured}
              </div>
              <Picture
                src={blogRepositioningImg}
                webpSrc={blogRepositioningImgWebp}
                alt={t.blog.featuredPost.title}
                className="w-full h-full object-cover"
                width={1536}
                height={1152}
              />
            </div>
            <div>
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                {t.blog.featuredPost.category}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mt-2 mb-4">
                {t.blog.featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {t.blog.featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs mb-6">
                <span className="flex items-center gap-1.5">
                  <User size={12} className="text-gold" />
                  Daniel Santiago Díaz
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-gold" />
                  {t.blog.featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-gold" />
                  {t.blog.featuredPost.readTime}
                </span>
              </div>
              <Link
                to={localPath("/blog/cruceros-de-reposicionamiento-desde-puerto-rico")}
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide"
              >
                {t.blog.readArticle}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
              {t.blog.latestPosts}
            </span>
            <h2 className="font-heading text-3xl text-foreground mt-3">
              {t.blog.moreStories}{" "}
              <span className="text-gold-gradient italic">
                {t.blog.moreStoriesHighlight}
              </span>
            </h2>
          </div>
          <div ref={filterCards} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to={localPath("/blog/crucero-fluvial-duero-desde-puerto-rico")}
              className="gold-border gold-border-hover rounded-sm overflow-hidden group block"
            >
              <article>
                <div className="aspect-[16/9] bg-charcoal relative overflow-hidden">
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold-gradient text-primary-foreground text-[10px] tracking-[0.15em] uppercase font-semibold rounded-sm z-10">
                    {language === "es" ? "Cruceros de Río" : "River cruises"}
                  </div>
                  <img
                    src={blogDueroImg}
                    alt="Crucero de río por el Duero desde Puerto Rico"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-gold transition-colors">
                    {language === "es"
                      ? "Crucero de Río por el Duero desde Puerto Rico: Portugal desde el Río"
                      : "Douro River Cruise from Puerto Rico: Portugal from the River"}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {language === "es"
                      ? "Líneas de cruceros (Ama, Scenic, Uniworld), rutas de vuelo desde SJU, mejor temporada y experiencias privadas de bodega en el valle vinícola más antiguo del mundo."
                      : "Cruise lines (Ama, Scenic, Uniworld), flight routes from SJU, best season and private winery experiences in the world's oldest wine valley."}
                  </p>

                  <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <User size={11} className="text-gold" />
                      Daniel Santiago Díaz
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} className="text-gold" />8 min
                    </span>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              to={localPath(
                "/blog/cruceros-de-reposicionamiento-desde-puerto-rico",
              )}
              className="gold-border gold-border-hover rounded-sm overflow-hidden group block"
            >
              <article>
                <div className="aspect-[16/9] bg-charcoal relative overflow-hidden">
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold-gradient text-primary-foreground text-[10px] tracking-[0.15em] uppercase font-semibold rounded-sm z-10">
                    {language === "es" ? "Cruceros" : "Cruises"}
                  </div>
                  <Picture
                    src={blogRepositioningImg}
                    webpSrc={blogRepositioningImgWebp}
                    alt="Crucero de reposicionamiento en alta mar navegando el Atlántico"
                    className="w-full h-full object-cover"
                    width={1536}
                    height={1152}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-gold transition-colors">
                    {language === "es"
                      ? "Cruceros de Reposicionamiento desde Puerto Rico 2026–2028"
                      : "Repositioning Cruises from Puerto Rico 2026–2028"}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {language === "es"
                      ? "Cruza el Atlántico desde San Juan: salidas hacia España, Portugal, Italia, Inglaterra, Panamá y Costa Rica."
                      : "Cross the Atlantic from San Juan: 15 sailings to Spain, Portugal, Italy, England, Panama and Costa Rica."}
                  </p>

                  <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <User size={11} className="text-gold" />
                      Daniel Santiago Díaz
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} className="text-gold" />7 min
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link
              to={localPath("/blog/servicios-concierge-viaje")}
              className="gold-border gold-border-hover rounded-sm overflow-hidden group block"
            >
              <article>
                <div className="aspect-[16/9] bg-charcoal relative overflow-hidden">
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold-gradient text-primary-foreground text-[10px] tracking-[0.15em] uppercase font-semibold rounded-sm z-10">
                    {language === "es" ? "Servicios" : "Services"}
                  </div>
                  <img
                    src={blogConciergeImg}
                    alt="Servicios de concierge de viaje desde Puerto Rico"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-gold transition-colors">
                    {language === "es"
                      ? "Servicios de Concierge de Viaje: Qué Son, Qué Incluyen y Por Qué Valen la Pena"
                      : "Travel Concierge Services: What They Are, What's Included & Why They're Worth It"}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {language === "es"
                      ? "Qué hace un travel concierge, qué incluye (reservas, traslados y coordinación) y cuándo realmente vale la pena."
                      : "What a travel concierge does, what's included (bookings, transfers and coordination) and when it's actually worth it."}
                  </p>
                  <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <User size={11} className="text-gold" />
                      Daniel Santiago Díaz
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} className="text-gold" />5 min
                    </span>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              to={localPath("/blog/wellness-travel-intentional-luxury")}
              className="gold-border gold-border-hover rounded-sm overflow-hidden group block"
            >
              <article>
                <div className="aspect-[16/9] bg-charcoal relative overflow-hidden">
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold-gradient text-primary-foreground text-[10px] tracking-[0.15em] uppercase font-semibold rounded-sm z-10">
                    {language === "es" ? "Tendencias de Viaje" : "Travel Trends"}
                  </div>
                  <img
                    src={blogWellnessImg}
                    alt="Wellness Travel"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-gold transition-colors">
                    {language === "es"
                      ? "Viajes de Bienestar: Por Qué Tu Médico Tiene Razón (2026)"
                      : "Wellness Travel: Why Your Doctor Might Be Right (2026)"}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {language === "es"
                      ? "El viaje intencional como estrategia real de salud mental — Maldivas, Riviera Maya y la ciencia detrás del descanso."
                      : "Intentional bespoke travel as a real mental-health strategy — the Maldives, Riviera Maya, and the science behind real rest."}
                  </p>
                  <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <User size={11} className="text-gold" />
                      Daniel Santiago Díaz
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} className="text-gold" />7 min
                    </span>
                  </div>
                </div>
              </article>
            </Link>
            {t.blog.posts.map((post, i) => (
              <Link
                key={postSlugs[i]}
                to={localPath(`/blog/${postSlugs[i]}`)}
                className="gold-border gold-border-hover rounded-sm overflow-hidden group block"
              >
                <article>
                  <div className="aspect-[16/9] bg-charcoal relative overflow-hidden">
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold-gradient text-primary-foreground text-[10px] tracking-[0.15em] uppercase font-semibold rounded-sm z-10">
                      {post.category}
                    </div>
                    <img
                      src={postImages[i]}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <User size={11} className="text-gold" />
                        Daniel Santiago Díaz
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={11} className="text-gold" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6 text-center max-w-lg">
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
            {t.blog.stayInspired}
          </span>
          <h2 className="font-heading text-3xl text-foreground mt-3 mb-3">
            {t.blog.subscribeTitle}{" "}
            <span className="text-gold-gradient italic">
              {t.blog.subscribeTitleHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            {t.blog.subscribeDescription}
          </p>
          <NewsletterForm source="blog" />
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
