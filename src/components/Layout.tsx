import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
    <div className="container mx-auto px-6 flex items-center justify-between h-16">
      <Link to="/" className="flex-shrink-0">
        <img src={logo} alt="SJU Luxe Travel" className="h-12 w-12 object-contain" />
      </Link>
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="font-body text-xs tracking-[0.25em] uppercase text-foreground/70 hover:text-gold transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        to="/contact"
        className="hidden md:inline-block px-6 py-2 border border-gold text-foreground font-body text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
      >
        Plan Your Journey
      </Link>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-charcoal">
    {/* Main Footer */}
    <div className="py-16 gold-border border-b-0 border-l-0 border-r-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="SJU Luxe Travel" className="h-14 w-14 object-contain mb-4" />
            <p className="font-heading text-lg text-foreground italic leading-snug mb-3">
              "Travel is not a Luxury, It's an{" "}
              <span className="text-gold-gradient">Opportunity</span>"
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Based in San Juan, Puerto Rico, we craft intentional travel experiences that transform perspectives.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-5">Explore</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-gold flex-shrink-0" /> San Juan, Puerto Rico
              </span>
              <a href="tel:+16179355714" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={14} className="text-gold flex-shrink-0" /> (617) 935-5714
              </a>
              <a href="mailto:dsantiago@ncmconcierge.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={14} className="text-gold flex-shrink-0" /> dsantiago@ncmconcierge.com
              </a>
            </div>
          </div>

          {/* Follow Us & Newsletter */}
          <div>
            <h4 className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-5">Follow Us</h4>
            <div className="flex gap-3 mb-8">
              {[
                { icon: Instagram, href: "https://www.instagram.com/sjuluxetravel/" },
                { icon: Facebook, href: "https://www.facebook.com/sjuluxetravel" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/sju-luxe-travel" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full gold-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <h4 className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-4">Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 bg-background gold-border rounded-sm text-foreground text-xs placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 bg-background gold-border rounded-sm text-foreground text-xs placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gold-gradient text-primary-foreground font-body text-[10px] font-semibold tracking-[0.2em] uppercase rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* Legal / Bottom Bar */}
    <div className="py-8 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="text-muted-foreground text-[10px] leading-relaxed space-y-1">
            <p className="font-semibold text-foreground text-xs">SJU Luxe Travel</p>
            <p>Agencia Independiente de NCM Concierge</p>
            <p>Agencia de Viajes Boutique</p>
            <p>EIN Núm.: 399</p>
            <p>Florida Seller of Travel #: ST43578</p>
            <p>California Seller of Travel No. 2160017-50</p>
            <p>Washington UBID No.: 604589037</p>
            <p>Iowa Registered Agency, # 1501</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex gap-6 text-muted-foreground text-xs">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-muted-foreground text-[10px] tracking-wide">
          © {new Date().getFullYear()} SJU Luxe Travel. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
