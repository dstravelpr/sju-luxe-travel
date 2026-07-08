import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import blogMicrocationsImg from "@/assets/blog-microcations.jpg";
import blogLuxuryImg from "@/assets/blog-luxury-travel.jpg";
import blogAgentImg from "@/assets/blog-travel-agent.jpg";
import blogRiverCruiseImg from "@/assets/blog-river-cruise.jpg";
import blogHoneymoonImg from "@/assets/honeymoon/maldives.png";
import blogWellnessImg from "@/assets/blog-wellness-maldives.jpg";
import blogDueroImg from "@/assets/rivers/douro.png";
import blogSanJuanImg from "@/assets/hero-beach-sunset.jpg";

const Blog = () => {
  const { t, localPath, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t.blog.categories[0]);

  const postImages = [blogRiverCruiseImg, blogLuxuryImg, blogAgentImg, blogMicrocationsImg];
  const postSlugs = ["river-cruising-new-generation", "what-luxury-travel-really-means", "do-travel-agents-really-help-save-money", "micro-vacaciones-futuro-del-viaje"];

  return (
    <Layout>
      <SEOHead
        title="Blog SJU Luxe Travel — Lujo, Cruceros, Honeymoons PR"
        description="Guías de viajes de lujo desde Puerto Rico: lunas de miel, cruceros fluviales, Maldivas, Portugal y más. Por Daniel Santiago Díaz."
        canonical="https://www.sjuluxetravel.com/blog"
      />

      <div className="pt-24 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground text-center pt-8 pb-4">
            Blog de Viajes de Lujo — <span className="text-gold-gradient italic">Consejos e Inspiración desde San Juan</span>
          </h1>
        </div>
      </div>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {t.blog.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase font-body transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold-gradient text-primary-foreground"
                    : "gold-border text-muted-foreground hover:border-gold hover:text-foreground"
                }`}
              >
                {cat}
              </button>
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
              <img src={blogHoneymoonImg} alt={t.blog.featuredPost.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{t.blog.featuredPost.category}</span>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mt-2 mb-4">{t.blog.featuredPost.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{t.blog.featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs mb-6">
                <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
                <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{t.blog.featuredPost.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{t.blog.featuredPost.readTime}</span>
              </div>
              <Link to={localPath("/blog/luna-de-miel-puerto-rico-2026")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide">
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
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{t.blog.latestPosts}</span>
            <h2 className="font-heading text-3xl text-foreground mt-3">
              {t.blog.moreStories} <span className="text-gold-gradient italic">{t.blog.moreStoriesHighlight}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to={localPath("/blog/crucero-fluvial-duero-desde-puerto-rico")}
              className="gold-border gold-border-hover rounded-sm overflow-hidden group block"
            >
              <article>
                <div className="aspect-[16/9] bg-charcoal relative overflow-hidden">
                  <div className="absolute top-3 left-3 px-2.5 py-1 gold-border text-[10px] tracking-[0.15em] uppercase text-muted-foreground rounded-sm z-10">
                    {language === "es" ? "Cruceros Fluviales" : "River Cruises"}
                  </div>
                  <img src={blogDueroImg} alt="Crucero fluvial por el Duero desde Puerto Rico" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-gold transition-colors">
                    Crucero Fluvial por el Duero desde Puerto Rico: Portugal desde el Río
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    Navieras (Ama, Scenic, Uniworld), rutas de vuelo desde SJU, mejor temporada y experiencias privadas de bodega en el valle vinícola más antiguo del mundo.
                  </p>
                  <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                    <span className="flex items-center gap-1.5"><User size={11} className="text-gold" />Daniel Santiago Díaz</span>
                    <span className="flex items-center gap-1.5"><Clock size={11} className="text-gold" />8 min</span>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              to={localPath("/blog/excursiones-de-lujo-san-juan-puerto-cruceros")}
              className="gold-border gold-border-hover rounded-sm overflow-hidden group block"
            >
              <article>
                <div className="aspect-[16/9] bg-charcoal relative overflow-hidden">
                  <div className="absolute top-3 left-3 px-2.5 py-1 gold-border text-[10px] tracking-[0.15em] uppercase text-muted-foreground rounded-sm z-10">
                    {language === "es" ? "Cruceros" : "Cruises"}
                  </div>
                  <img src={blogSanJuanImg} alt="Excursiones privadas de lujo desde el puerto de cruceros de San Juan" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-gold transition-colors">
                    Excursiones de Lujo desde el Puerto de Cruceros de San Juan
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    Tours privados del Viejo San Juan, El Yunque, catamarán y gastronomía para pasajeros de crucero — coordinados por un concierge local.
                  </p>
                  <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                    <span className="flex items-center gap-1.5"><User size={11} className="text-gold" />Daniel Santiago Díaz</span>
                    <span className="flex items-center gap-1.5"><Clock size={11} className="text-gold" />7 min</span>
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
                    {t.blog.featured}
                  </div>
                  <img src={blogWellnessImg} alt="Wellness Travel" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-gold transition-colors">
                    {language === "es"
                      ? "Viajes de Bienestar: Por Qué Tu Médico Tiene Razón (2026)"
                      : "Wellness Travel: Why Your Doctor Might Be Right (2026)"}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {language === "es"
                      ? "El viaje de lujo intencional como estrategia real de salud mental — Maldivas, Riviera Maya y la ciencia detrás del descanso."
                      : "Intentional luxury travel as a real mental-health strategy — the Maldives, Riviera Maya, and the science behind real rest."}
                  </p>
                  <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                    <span className="flex items-center gap-1.5"><User size={11} className="text-gold" />Daniel Santiago Díaz</span>
                    <span className="flex items-center gap-1.5"><Clock size={11} className="text-gold" />7 min</span>
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
                    <div className="absolute top-3 left-3 px-2.5 py-1 gold-border text-[10px] tracking-[0.15em] uppercase text-muted-foreground rounded-sm z-10">
                      {post.category}
                    </div>
                    <img src={postImages[i]} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-gold transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                      <span className="flex items-center gap-1.5"><User size={11} className="text-gold" />Daniel Santiago Díaz</span>
                      <span className="flex items-center gap-1.5"><Clock size={11} className="text-gold" />{post.readTime}</span>
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
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{t.blog.stayInspired}</span>
          <h2 className="font-heading text-3xl text-foreground mt-3 mb-3">
            {t.blog.subscribeTitle} <span className="text-gold-gradient italic">{t.blog.subscribeTitleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8">{t.blog.subscribeDescription}</p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <input type="text" placeholder={t.blog.subscribePlaceholderName} className="w-full px-4 py-3 bg-background gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
            <input type="email" placeholder={t.blog.subscribePlaceholderEmail} className="w-full px-4 py-3 bg-background gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
            <button type="submit" className="w-full py-3 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)]">
              {t.blog.subscribeButton}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
