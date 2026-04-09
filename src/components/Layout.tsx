import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
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
  <footer className="py-16 bg-charcoal gold-border border-b-0 border-l-0 border-r-0">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="SJU Luxe Travel" className="h-16 w-16 object-contain mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Boutique luxury travel agency based in San Juan, Puerto Rico. Crafting intentional journeys worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="mailto:dsantiago@ncmconcierge.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} /> dsantiago@ncmconcierge.com
            </a>
            <a href="tel:+16179355714" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} /> +1 (617) 935-5714
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/sjuluxetravel/" },
              { icon: Facebook, href: "https://www.facebook.com/sjuluxetravel" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/sju-luxe-travel" },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 gold-border border-b-0 border-l-0 border-r-0 text-center text-muted-foreground text-xs tracking-wide">
        © {new Date().getFullYear()} SJU Luxe Travel. All rights reserved.
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
