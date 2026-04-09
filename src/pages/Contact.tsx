import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const Contact = () => {
  return (
    <Layout>
      <SEOHead
        title="Contact | SJU Luxe Travel — Plan Your Journey"
        description="Ready to start planning? Contact SJU Luxe Travel to design your next luxury getaway. Based in San Juan, Puerto Rico."
        canonical="https://sjuluxetravel.com/contact"
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Contact <span className="text-gold-gradient italic">Us</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Ready to start planning your next adventure? Whether you have a destination in mind or
            need inspiration for your next luxury getaway, reach out and let's create something
            extraordinary together.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 max-w-5xl mx-auto">
            {/* Sidebar */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-8">
                Let's Start <span className="text-gold-gradient italic">Planning</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">Location</p>
                    <p className="text-muted-foreground text-xs">San Juan, Puerto Rico</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">Phone & WhatsApp</p>
                    <a href="tel:+16179355714" className="text-muted-foreground text-xs hover:text-gold transition-colors">
                      (617) 935-5714
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">Email</p>
                    <a href="mailto:dsantiago@ncmconcierge.com" className="text-muted-foreground text-xs hover:text-gold transition-colors">
                      dsantiago@ncmconcierge.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">Hours</p>
                    <div className="text-muted-foreground text-xs space-y-0.5">
                      <p>Monday – Friday: 9am – 6pm</p>
                      <p>Saturday: 10am – 4pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose */}
              <div className="gold-border rounded-lg p-5">
                <h3 className="font-heading text-sm text-foreground mb-3">
                  Why Choose SJU Luxe Travel?
                </h3>
                <ul className="space-y-2 text-muted-foreground text-[11px] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-gold flex-shrink-0 mt-0.5" />
                    Personalized, one-on-one travel planning
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-gold flex-shrink-0 mt-0.5" />
                    Over a decade of international travel expertise
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-gold flex-shrink-0 mt-0.5" />
                    24/7 travel support before, during, and after your trip
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-gold flex-shrink-0 mt-0.5" />
                    Exclusive perks through preferred hotel and resort partners
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-gold flex-shrink-0 mt-0.5" />
                    Licensed and insured travel agency with multi-state registration
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-background gold-border rounded-lg p-8">
              <h2 className="font-heading text-2xl text-foreground mb-2">Plan Your Journey</h2>
              <p className="text-muted-foreground text-xs mb-8">
                Fill out the form below with details about your dream trip and our team will get back to you
                within 24 hours with personalized recommendations and next steps.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-foreground text-xs mb-1.5 block">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-xs mb-1.5 block">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-foreground text-xs mb-1.5 block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-xs mb-1.5 block">Type of Travel</label>
                    <select className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option value="">Select one...</option>
                      <option value="honeymoon">Honeymoon</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="family">Family Vacation</option>
                      <option value="adventure">Adventure</option>
                      <option value="wellness">Wellness Retreat</option>
                      <option value="cruise">Cruise</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-foreground text-xs mb-1.5 block">Desired Destinations</label>
                    <input
                      type="text"
                      placeholder="e.g. Maldives, Portugal, Mexico..."
                      className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-xs mb-1.5 block">Preferred Travel Dates</label>
                    <input
                      type="text"
                      placeholder="e.g. March 2026"
                      className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-foreground text-xs mb-1.5 block">
                    Tell Us About Your Dream Trip <span className="text-gold">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Share your travel dreams, preferences, budget range, and any special requirements or occasions you're celebrating..."
                    className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
                >
                  Send Message
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-6">
          <MapPin size={28} className="text-gold mx-auto mb-3" />
          <h3 className="font-heading text-2xl text-foreground mb-2">
            San <span className="text-gold-gradient italic">Juan</span>, Puerto Rico
          </h3>
          <p className="text-muted-foreground text-sm">
            The heart of the Caribbean — Your gateway to luxury international travel
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
