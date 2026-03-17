import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-body text-primary tracking-[0.3em] uppercase mb-4">
            About Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
            Craftsmanship That Speaks
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-12">
            At DK Car Modifications Uganda, we combine skilled technicians, attention to detail,
            modern tools, and reliable service to deliver results that exceed expectations.
            Located at STABEX Mukono Service Station along the Kampala–Jinja Highway,
            we've built a reputation for precision and quality finishing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {[
            { number: "500+", label: "Cars Restored" },
            { number: "8+", label: "Years Experience" },
            { number: "100%", label: "Quality Focus" },
            { number: "24hr", label: "Fast Turnaround" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </p>
              <p className="font-body text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
