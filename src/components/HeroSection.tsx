import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

function Wheel() {
  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      {/* Rim */}
      <mesh>
        <torusGeometry args={[1.2, 0.15, 16, 64]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.1} />
      </mesh>
      {/* Hub */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Spokes */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.85, 0.05, Math.sin(angle) * 0.85]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[0.08, 0.12, 0.7]} />
            <meshStandardMaterial color="#333333" metalness={0.95} roughness={0.08} />
          </mesh>
        );
      })}
      {/* Tire */}
      <mesh>
        <torusGeometry args={[1.5, 0.35, 32, 64]} />
        <meshStandardMaterial color="#111111" roughness={0.9} metalness={0.05} />
      </mesh>
    </group>
  );
}

function RotatingWheel() {
  const ref = THREE.Object3D as any;
  return (
    <group>
      <Wheel />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1} color="#ffffff" />
      <spotLight position={[-3, 3, 2]} angle={0.4} penumbra={0.8} intensity={0.5} color="#e11d48" />
      <pointLight position={[0, -2, 3]} intensity={0.3} color="#cbd5e1" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
      <RotatingWheel />
      <Environment preset="city" />
    </>
  );
}

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* 3D Canvas */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-40 md:opacity-60">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
            <Scene />
          </Canvas>
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-body text-muted-foreground tracking-[0.3em] uppercase mb-6"
          >
            Mukono, Uganda
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-6"
          >
            Precision Car Body Repair{" "}
            <span className="text-gradient">&amp; Modification</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg font-body text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Professional panel beating, body spraying, and custom vehicle upgrades.
            Quality craftsmanship you can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+256706285674">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">
                <Calendar className="w-4 h-4" />
                Book Service
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
