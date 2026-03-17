import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body text-primary tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground mb-1">Phone</p>
                <a href="tel:+256706285674" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  0706 285674
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground mb-1">Location</p>
                <p className="font-body text-sm text-muted-foreground">
                  STABEX Mukono Service Station<br />
                  Kampala – Jinja Highway, Mukono
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground mb-1">Hours</p>
                <p className="font-body text-sm text-muted-foreground">Opens at 8:30 AM</p>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-lg overflow-hidden border border-border/50 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.4!2d32.75!3d0.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0b0f1c5f8d%3A0x1234567890abcdef!2sMukono!5e0!3m2!1sen!2sug!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DK Car Modifications Location"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your vehicle and what you need"
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full">
                {submitted ? "Message Sent ✓" : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
