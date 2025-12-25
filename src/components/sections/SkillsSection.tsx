"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "SQL", level: 90 },
      { name: "C++", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "GoLang", level: 75 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "ML & Data Science",
    icon: "📊",
    skills: [
      { name: "Scikit-learn", level: 95 },
      { name: "Pandas/NumPy", level: 95 },
      { name: "PyTorch", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "PyCaret/AutoML", level: 90 },
      { name: "CRISP-DM", level: 90 },
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "AI & LLM Frameworks",
    icon: "🤖",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "LangGraph", level: 90 },
      { name: "RAG Systems", level: 95 },
      { name: "HuggingFace", level: 85 },
      { name: "UnSloth/LoRA", level: 85 },
      { name: "Vector DBs", level: 90 },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend & Data Eng",
    icon: "⚙️",
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "FastAPI", level: 90 },
      { name: "Apache Kafka", level: 85 },
      { name: "Apache Beam", level: 80 },
      { name: "PostgreSQL", level: 90 },
      { name: "ETL Pipelines", level: 85 },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS (EC2/S3/Lambda)", level: 85 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "Git/CI-CD", level: 90 },
      { name: "Vercel", level: 85 },
      { name: "Microservices", level: 90 },
    ],
    color: "from-cyan-500 to-blue-500",
  },
];

const coreCompetencies = [
  "Data Mining & Analytics",
  "ML Model Development",
  "Complex Problem Solving",
  "Agile Collaboration",
  "System Design",
  "Technical Leadership",
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Technical Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white glow`
                    : "glass hover:bg-secondary/50"
                }`}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Skill Bars */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Visual/Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-8 flex flex-col justify-center"
            >
              <div className="text-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-8xl mb-4"
                >
                  {skillCategories[activeCategory].icon}
                </motion.div>
                <h3 className="text-2xl font-bold gradient-text">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-secondary/30">
                  <motion.p
                    key={`avg-${activeCategory}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-3xl font-bold text-primary"
                  >
                    {Math.round(
                      skillCategories[activeCategory].skills.reduce(
                        (acc, s) => acc + s.level,
                        0
                      ) / skillCategories[activeCategory].skills.length
                    )}
                    %
                  </motion.p>
                  <p className="text-sm text-muted-foreground">Avg. Proficiency</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/30">
                  <motion.p
                    key={`count-${activeCategory}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-3xl font-bold text-primary"
                  >
                    {skillCategories[activeCategory].skills.length}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {coreCompetencies.map((competency, index) => (
                <motion.div
                  key={competency}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm hover:bg-primary/20 hover:border-primary transition-all cursor-default"
                  >
                    {competency}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {[
                { name: "AWS AI Practitioner", icon: "🏅" },
                { name: "Langchain Certified", icon: "🦜" },
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl px-6 py-4 flex items-center gap-3"
                >
                  <span className="text-2xl">{cert.icon}</span>
                  <span className="font-medium">{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
