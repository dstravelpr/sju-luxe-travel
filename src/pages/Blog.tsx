import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import blogMicrocationsImg from "@/assets/blog-microcations.jpg";
import blogLuxuryImg from "@/assets/blog-luxury-travel.jpg";
import blogAgentImg from "@/assets/blog-travel-agent.jpg";

const Blog = () => {
  const { t, localPath } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t.blog.categories[0]);

  const postImages = [blogLuxuryImg, blogAgentImg];
  const postSlugs = ["what-luxury-travel-really-means", "do-travel-agents-really-help-save-money"];

  return (
    <Layout>
      <SEOHead
        title="Blog de Viajes de Lujo — Consejos e Inspiración | SJU Luxe Travel"
        description="Artículos sobre viajes de lujo, destinos exclusivos e itinerarios personalizados desde San Juan, Puerto Rico. Escrito por Daniel Santiago Díaz, asesor certificado."
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
              <img src={blogMicrocationsImg} alt={t.blog.featuredPost.title} className="w-full h-full object-cover" />
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
              <Link to="/blog/micro-cations-future-of-travel" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.blog.posts.map((post, i) => (
              <article key={postSlugs[i]} className="gold-border gold-border-hover rounded-sm overflow-hidden group">
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
