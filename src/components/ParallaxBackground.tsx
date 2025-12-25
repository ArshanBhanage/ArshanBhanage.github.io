"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Pre-computed particle positions to avoid hydration mismatch
const PARTICLE_COUNT = 20;

interface Particle {
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const [particles, setParticles] = useState<Particle[]>([]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  // Generate particles only on the client side to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = [...Array(PARTICLE_COUNT)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -left-40 w-80 h-80 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/30 to-teal-500/30 blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-3xl" />
      </motion.div>

      {/* Floating particles - only rendered after client-side hydration */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
