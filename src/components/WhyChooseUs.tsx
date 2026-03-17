import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, Shield, Sparkles, Zap } from "lucide-react";

const points = [
  { icon: Award, title: "Experienced Team", desc: "Skilled technicians with years of hands-on expertise." },
  { icon: Sparkles, title: "Quality Finish", desc: "Every vehicle leaves with a showroom-quality look." },
  { icon: Zap, title: "Modern Equipment", desc: "Industry-standard tools for precision results." },
  { icon: Shield, title: "Trusted Service", desc: "Transparent process and honest communication." },
  { icon: CheckCircle, title: "Attention to Detail", desc: "We treat every vehicle like it's our own." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body text-primary tracking-[0.3em] uppercase mb-4">
            Why DK
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
