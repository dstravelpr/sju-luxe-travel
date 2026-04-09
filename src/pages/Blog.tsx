import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const categories = ["All", "Destinations", "Travel Tips", "Accommodations", "Culture"];

const featuredPost = {
  slug: "micro-cations-future-of-travel",
  category: "Travel Trends",
  title: "Are 'Micro-Cations' the Future of Travel?",
  excerpt:
    "One of the biggest shifts in travel right now is the rise of micro-cations—shorter, more intentional getaways that fit into real life without sacrificing the experience.",
  author: "Daniel Santiago Díaz",
  date: "April 9, 2026",
  readTime: "6 min read",
  featured: true,
};

const posts = [
  {
    slug: "what-luxury-travel-really-means",
    category: "Travel Philosophy",
    title: "What Luxury Travel Really Means",
    excerpt:
      "When people hear luxury travel, they picture something out of reach. But real luxury isn't about how much you spend—it's about how the experience…",
    author: "Daniel Santiago Díaz",
    readTime: "8 min read",
  },
  {
    slug: "do-travel-agents-really-help-save-money",
    category: "Travel Tips",
    title: "Do Travel Agents Really Help You Save Money?",
    excerpt:
      "An honest perspective from a modern travel advisor on how professional guidance saves you money, time, and stress—and why the real value goes far beyond…",
    author: "Daniel Santiago Díaz",
    readTime: "7 min read",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <Layout>
      <SEOHead
        title="Blog | SJU Luxe Travel — Travel Stories & Tips"
        description="Explore travel stories, tips, and inspiration from SJU Luxe Travel. Luxury travel insights from San Juan, Puerto Rico."
        canonical="https://sjuluxetravel.com/blog"
      />

      {/* Hero spacer */}
      <div className="pt-24 bg-background" />

      {/* Category Filters */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
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

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="aspect-[4/3] bg-charcoal gold-border rounded-sm overflow-hidden relative">
              <div className="absolute top-4 left-4 px-3 py-1 bg-gold-gradient text-primary-foreground text-[10px] tracking-[0.15em] uppercase font-semibold rounded-sm">
                Featured
              </div>
              <div className="w-full h-full bg-charcoal flex items-center justify-center">
                <span className="text-muted-foreground text-xs italic">Featured image</span>
              </div>
            </div>
            <div>
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                {featuredPost.category}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mt-2 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs mb-6">
                <span className="flex items-center gap-1.5">
                  <User size={12} className="text-gold" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-gold" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-gold" />
                  {featuredPost.readTime}
                </span>
              </div>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide"
              >
                Read Article
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
              Latest Posts
            </span>
            <h2 className="font-heading text-3xl text-foreground mt-3">
              More <span className="text-gold-gradient italic">Stories</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="gold-border gold-border-hover rounded-sm overflow-hidden group"
              >
                <div className="aspect-[16/9] bg-charcoal relative">
                  <div className="absolute top-3 left-3 px-2.5 py-1 gold-border text-[10px] tracking-[0.15em] uppercase text-muted-foreground rounded-sm">
                    {post.category}
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-muted-foreground text-xs italic">Post image</span>
                  </div>
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
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} className="text-gold" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6 text-center max-w-lg">
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
            Stay Inspired
          </span>
          <h2 className="font-heading text-3xl text-foreground mt-3 mb-3">
            Subscribe to Our <span className="text-gold-gradient italic">Newsletter</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Get travel inspiration, tips, and exclusive offers delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-3"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-background gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-background gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
