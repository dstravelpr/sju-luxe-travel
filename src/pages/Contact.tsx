import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const sent = searchParams.get("sent") === "1";

  return (
    <Layout>
      <SEOHead
        title="Free Luxury Travel Consultation | SJU Luxe Travel"
        description="Schedule a free luxury travel consultation with your boutique agent in San Juan, PR. Private tours, cruises & bespoke itineraries with NCM Concierge perks."
        canonical="https://www.sjuluxetravel.com/contact"
      />

      <section className="pt-28 pb-16 bg-background text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            {t.contact.title} {t.contact.titleHighlight && <span className="text-gold-gradient italic">{t.contact.titleHighlight}</span>}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-8">
                {t.contact.sidebarTitle} <span className="text-gold-gradient italic">{t.contact.sidebarTitleHighlight}</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5"><MapPin size={16} className="text-gold" /></div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">{t.contact.location}</p>
                    <p className="text-muted-foreground text-xs">{t.contact.locationValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Phone size={16} className="text-gold" /></div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">{t.contact.phoneWhatsapp}</p>
                    <a href="tel:+16179355714" className="text-muted-foreground text-xs hover:text-gold transition-colors">(617) 935-5714</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Mail size={16} className="text-gold" /></div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">{t.contact.emailLabel}</p>
                    <a href="mailto:info@sjuluxetravel.com" className="text-muted-foreground text-xs hover:text-gold transition-colors">info@sjuluxetravel.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Clock size={16} className="text-gold" /></div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">{t.contact.hours}</p>
                    <div className="text-muted-foreground text-xs space-y-0.5">
                      <p>{t.contact.hoursMF}</p>
                      <p>{t.contact.hoursSat}</p>
                      <p>{t.contact.hoursSun}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gold-border rounded-lg p-5">
                <h3 className="font-heading text-sm text-foreground mb-3">{t.contact.whyChoose}</h3>
                <ul className="space-y-2 text-muted-foreground text-[11px] leading-relaxed">
                  {t.contact.whyItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={12} className="text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background gold-border rounded-lg p-8">
              <h2 className="font-heading text-2xl text-foreground mb-2">{t.contact.formTitle}</h2>
              <p className="text-muted-foreground text-xs mb-8">{t.contact.formDescription}</p>

              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-heading text-xl text-foreground mb-2">{t.contact.formSuccessTitle}</h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">{t.contact.formSuccessBody}</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
                  >
                    {t.contact.formSuccessButton}
                  </a>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/info@sjuluxetravel.com"
                  method="POST"
                  onSubmit={() => setSubmitting(true)}
                  className="space-y-5"
                >
                  <input type="hidden" name="_subject" value="New consultation request from SJU Luxe Travel" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/contact?sent=1`} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-foreground text-xs mb-1.5 block">{t.contact.fullName} <span className="text-gold">*</span></label>
                      <input type="text" name="name" placeholder={t.contact.fullNamePlaceholder} required className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="text-foreground text-xs mb-1.5 block">{t.contact.emailAddressLabel} <span className="text-gold">*</span></label>
                      <input type="email" name="email" placeholder={t.contact.emailPlaceholder} required className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-foreground text-xs mb-1.5 block">{t.contact.phoneNumber}</label>
                      <input type="tel" name="phone" placeholder={t.contact.phonePlaceholder} className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="text-foreground text-xs mb-1.5 block">{t.contact.travelType}</label>
                      <select name="travelType" className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                        <option value="">{t.contact.travelTypeSelect}</option>
                        <option value="honeymoon">{t.contact.travelTypes.honeymoon}</option>
                        <option value="anniversary">{t.contact.travelTypes.anniversary}</option>
                        <option value="family">{t.contact.travelTypes.family}</option>
                        <option value="adventure">{t.contact.travelTypes.adventure}</option>
                        <option value="wellness">{t.contact.travelTypes.wellness}</option>
                        <option value="cruise">{t.contact.travelTypes.cruise}</option>
                        <option value="soloWomen">{t.contact.travelTypes.soloWomen}</option>
                        <option value="incentive">{t.contact.travelTypes.incentive}</option>
                        <option value="other">{t.contact.travelTypes.other}</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-foreground text-xs mb-1.5 block">{t.contact.desiredDestinations}</label>
                      <input type="text" name="destinations" placeholder={t.contact.destinationsPlaceholder} className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="text-foreground text-xs mb-1.5 block">{t.contact.preferredDates}</label>
                      <input type="text" name="dates" placeholder={t.contact.datesPlaceholder} className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-foreground text-xs mb-1.5 block">{t.contact.dreamTrip} <span className="text-gold">*</span></label>
                    <textarea name="message" rows={5} placeholder={t.contact.dreamTripPlaceholder} required className="w-full px-4 py-3 bg-charcoal gold-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-8 py-3 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105 disabled:opacity-60 disabled:pointer-events-none">
                    {submitting ? "Sending..." : t.contact.sendMessage}
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-6">
          <MapPin size={28} className="text-gold mx-auto mb-3" />
          <h3 className="font-heading text-2xl text-foreground mb-2">
            San <span className="text-gold-gradient italic">Juan</span>, Puerto Rico
          </h3>
          <p className="text-muted-foreground text-sm">{t.contact.locationBanner}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
