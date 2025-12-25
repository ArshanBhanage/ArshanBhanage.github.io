"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            👋 Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text glow-text">Arshan Bhanage</span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          <span className="text-foreground">Software Engineer</span>
          <span className="mx-3 text-primary">|</span>
          <TypewriterText
            texts={[
              "AI/ML Engineer",
              "Data Scientist",
              "Backend Architect",
              "Hackathon Winner",
            ]}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
        >
          M.S. Software Engineering (Data Science) student at{" "}
          <span className="text-primary">San Jose State University</span>.
          Building scalable AI systems, ML pipelines, and shipping data-driven products
          that matter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-lg px-8 glow"
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 border-primary/50 hover:bg-primary/10"
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/arshanbhanage", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/arshanbhanage", label: "LinkedIn" },
            { icon: Mail, href: "mailto:arshan.bhanage@sjsu.edu", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass hover:glow transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDown className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TypewriterText({ texts }: { texts: string[] }) {
  return (
    <motion.span
      className="text-primary inline-block min-w-[200px]"
      key={texts[0]}
    >
      <TypewriterEffect texts={texts} />
    </motion.span>
  );
}

function TypewriterEffect({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < text.length) {
            setCurrentText(text.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-primary"
      >
        |
      </motion.span>
    </>
  );
}
