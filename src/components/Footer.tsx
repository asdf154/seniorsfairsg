import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "What to Discover", href: "#discover" },
    { label: "Who Should Attend", href: "#audience" },
    { label: "Event Details", href: "#details" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">SF</span>
              </div>
              <div>
                <p className="font-bold text-lg">Seniors Fair Singapore</p>
                <p className="text-sm text-primary-foreground/60">November 2026</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Singapore's leading platform for elder care awareness, solutions, 
              and community connection — supporting healthier and more confident 
              ageing for all.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors focus-accessible"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors focus-accessible"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors focus-accessible"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors focus-accessible rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@seniorsfair.sg" className="hover:text-primary-foreground transition-colors">
                  info@seniorsfair.sg
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+6565551234" className="hover:text-primary-foreground transition-colors">
                  +65 6555 1234
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Singapore Expo<br />1 Expo Drive, S486150</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Seniors Fair Singapore. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors focus-accessible rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
