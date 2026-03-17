import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-20 px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-wider text-foreground">
          DK<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="tel:+256706285674">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 px-6 pb-6"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="tel:+256706285674">
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
