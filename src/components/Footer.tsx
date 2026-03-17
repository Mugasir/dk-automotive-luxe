import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-xl font-bold text-foreground mb-3">
              DK<span className="text-primary">.</span>
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Premium car body repair and modification services in Mukono, Uganda.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
              Contact
            </p>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>0706 285674</p>
              <p>STABEX Mukono Service Station</p>
              <p>Kampala – Jinja Highway, Mukono</p>
              <p>Opens at 8:30 AM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} DK Car Modifications Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
