import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Paintbrush, CircleDot, Car, Settings, RotateCcw } from "lucide-react";

const services = [
  { icon: Wrench, title: "Panel Beating", desc: "Expert dent removal and structural repair to original form." },
  { icon: Paintbrush, title: "Body Spraying", desc: "Flawless paint application with premium automotive finishes." },
  { icon: CircleDot, title: "Dent & Scratch Repair", desc: "Precision repair for minor dents, scratches, and chips." },
  { icon: Car, title: "Full Body Resprays", desc: "Complete vehicle repainting with color-matched perfection." },
  { icon: Settings, title: "Custom Modifications", desc: "Bespoke body kits, styling, and performance upgrades." },
  { icon: RotateCcw, title: "Vehicle Restoration", desc: "Full restoration of classic and vintage vehicles." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body text-primary tracking-[0.3em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            What We Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card p-8 card-hover group"
            >
              <service.icon className="w-8 h-8 text-primary mb-5 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
