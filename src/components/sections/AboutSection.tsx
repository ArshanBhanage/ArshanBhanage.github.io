"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Award } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Avatar Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 glass rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-cyan-600/30 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-9xl"
                  >
                    👨‍💻
                  </motion.div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2"
              >
                <span className="text-sm font-medium">🎓 SJSU 2027</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2"
              >
                <span className="text-sm font-medium">💼 1+ Years Exp</span>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a <span className="text-foreground font-medium">Software Engineer & ML Practitioner</span> with
                a passion for building scalable AI systems and data-driven applications.
                Currently pursuing my <span className="text-foreground font-medium">Master&apos;s in
                Software Engineering (Data Science)</span> at San Jose State University.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience at <span className="text-primary font-medium">IBM</span> building
                enterprise microservices, <span className="text-primary font-medium">Outlier.ai</span> evaluating LLMs,
                and a track record of{" "}
                <span className="text-primary font-medium">hackathon wins</span>, I thrive on
                solving complex ML problems and shipping products that make a difference.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-medium">San Jose, CA</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <GraduationCap className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">Degree</p>
                  <p className="font-medium">M.S. SE (Data Science)</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">Certifications</p>
                  <p className="font-medium">AWS AI, Langchain</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
