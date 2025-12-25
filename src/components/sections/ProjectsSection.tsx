"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Trophy, Cpu, Code, Layers, Heart, Search, Brain, Sparkles, Database, Workflow } from "lucide-react";

const projects = [
  // Hackathon Projects
  {
    title: "Driftwise",
    subtitle: "Real-Time Contract Compliance",
    achievement: "Financial Agent Hackathon Finalist",
    period: "Oct 2025 - Present",
    description:
      "AI infrastructure for continuous compliance monitoring of financial contracts (loans, insurance, filings) with real-time violation detection.",
    highlights: [
      "Built with Python + LangGraph + Claude Sonnet 4.5 for agent orchestration",
      "Achieved evidence-linked decisions and sub-second violation detection",
      "Sustained 1k+ events/min with 99.9% pipeline uptime",
      "Policy Compiler cuts rule creation time by 90%",
      "LandingAI ADE pipeline for unstructured document parsing",
    ],
    technologies: ["Python", "LangGraph", "Claude AI", "FastAPI", "LandingAI", "SSE"],
    icon: Layers,
    color: "from-amber-500 to-orange-600",
    github: "https://github.com/ArshanBhanage/Driftwise",
  },
  {
    title: "TraceQA",
    subtitle: "Enterprise Requirements AI",
    achievement: "Code Rabbit Hackathon Top 6/180",
    period: "Sep 2025 - Oct 2025",
    description:
      "On-prem, privacy-preserving LLM system for banking with RAG retrieval for requirements tracing and automated test generation.",
    highlights: [
      "Python & FastAPI microservices for ingest, chunk/embedding, and RAG retrieval",
      "Document-query p95 <900ms with retrieval and lightweight re-ranking",
      "Automated test generation: produced 500+ tests, raised coverage 62% → 92%",
      "Tuned RAG lifted MRR by 28% on internal evaluations",
      "Full-stack deployment on AWS EC2 + Vercel with CI/CD",
    ],
    technologies: ["Python", "FastAPI", "Pinecone", "RAG", "AWS EC2", "Vercel"],
    icon: Cpu,
    color: "from-purple-500 to-pink-600",
    github: "https://github.com/ArshanBhanage/TraceQA-272",
    live: "https://trace-qa-272-plut.vercel.app/",
  },
  // Data Mining Course Projects
  {
    title: "Heart Failure Mortality Prediction",
    subtitle: "CRISP-DM Clinical Decision Support",
    achievement: "Data Mining Course",
    period: "2025",
    description:
      "High-recall clinical decision support system to identify high-risk patients and prioritize cardiac care using the full CRISP-DM lifecycle.",
    highlights: [
      "Optimized Recall (~0.80) to minimize false negatives in medical context",
      "Scikit-learn pipeline with Yeo-Johnson transforms & RobustScaling",
      "Evaluated fairness across age and gender slices",
      "Deployed as FastAPI service with production-ready model card",
    ],
    technologies: ["Python", "Scikit-learn", "FastAPI", "Joblib", "Pandas", "CRISP-DM"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    github: "https://github.com/ArshanBhanage/Assignment-1",
  },
  {
    title: "LLM Fine-Tuning & RLHF",
    subtitle: "UnSloth.ai Parameter-Efficient Training",
    achievement: "Data Mining Course",
    period: "2025",
    description:
      "State-of-the-art PEFT and alignment techniques for LLMs including SFT, LoRA, DPO, and GRPO on Mistral-7B and Gemma-3.",
    highlights: [
      "Full and LoRA-based fine-tuning on Mistral-7B for instruction following",
      "DPO for sentiment alignment, GRPO for multimodal reasoning",
      "Extended LLM capabilities for Hindi using QLoRA",
      "2x-5x faster training with UnSloth.ai, reduced VRAM usage",
    ],
    technologies: ["UnSloth", "PyTorch", "HuggingFace", "LoRA", "DPO", "GRPO"],
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    github: "https://github.com/ArshanBhanage/UnSloth.ai-FineTuning",
  },
  {
    title: "Multi-Modal Clustering",
    subtitle: "Audio/Vision/Text Clustering",
    achievement: "Data Mining Course",
    period: "2025",
    description:
      "Comprehensive unsupervised learning across diverse data modalities using classical and modern embedding-based techniques.",
    highlights: [
      "K-Means from scratch, Hierarchical clustering, GMMs",
      "Meta ImageBind & Sentence-Transformers for cross-modal learning",
      "Time-Series clustering with Autoencoders",
      "Anomaly Detection using PyOD (Isolation Forest)",
    ],
    technologies: ["ImageBind", "Sentence-Transformers", "PyOD", "Tslearn", "Scikit-learn"],
    icon: Search,
    color: "from-cyan-500 to-blue-600",
    github: "https://github.com/ArshanBhanage/Clustering",
  },
  {
    title: "AutoML Pipelines",
    subtitle: "AutoGluon & PyCaret",
    achievement: "Data Mining Course",
    period: "2025",
    description:
      "Rapid model building and deployment using AutoML frameworks for complex multimodal datasets and time-series forecasting.",
    highlights: [
      "Multimodal classifier (MNIST + Text + Tabular) with AutoGluon",
      "California Housing & USA Rainfall prediction with ensemble stacks",
      "Time-Series forecasting with Prophet/ARIMA via PyCaret",
      "Association Rule Mining (Apriori) and Anomaly Detection",
    ],
    technologies: ["AutoGluon", "PyCaret", "Prophet", "Scikit-learn", "Kaggle API"],
    icon: Sparkles,
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/ArshanBhanage/Autogluon",
    github2: "https://github.com/ArshanBhanage/Pycaret",
  },
  {
    title: "Data Mining Methodologies",
    subtitle: "CRISP-DM, KDD & SEMMA",
    achievement: "Data Mining Course",
    period: "2025",
    description:
      "Comparative implementation of three industry-standard frameworks for binary classification with process-driven data science.",
    highlights: [
      "CRISP-DM: Telco Customer Churn with Gradio UI deployment",
      "KDD: Feature transformation & selection on UCI Adult Income",
      "SEMMA: Systematic modeling on UCI Bank Marketing dataset",
      "End-to-end workflows with comprehensive documentation",
    ],
    technologies: ["Python", "Gradio", "Scikit-learn", "UCI ML Repository"],
    icon: Workflow,
    color: "from-orange-500 to-red-600",
    github: "https://github.com/ArshanBhanage/crispdm-semma-ldd",
  },
  {
    title: "Apache Beam Data Pipelines",
    subtitle: "Scalable ETL Processing",
    achievement: "Data Mining Course",
    period: "2025",
    description:
      "Parallel data processing pipelines for large-scale data mining tasks with batch and stream processing patterns.",
    highlights: [
      "ETL patterns using Apache Beam for batch processing",
      "Stream processing for real-time data transformation",
      "Scalable architecture for large-scale data mining",
      "Data engineering best practices implementation",
    ],
    technologies: ["Apache Beam", "Python", "ETL", "Data Engineering"],
    icon: Database,
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/ArshanBhanage/Apache-Beam",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 relative z-10">
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
              What I&apos;ve Built
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing my experience in AI/ML, backend systems,
              and full-stack development.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className="h-full glass border-0 overflow-hidden group relative">
                  {/* Gradient Top Bar */}
                  <div
                    className={`h-1 bg-gradient-to-r ${project.color} transition-all duration-300 ${
                      hoveredIndex === index ? "h-2" : ""
                    }`}
                  />

                  <CardHeader className="pb-4">
                    {/* Icon & Achievement */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}
                      >
                        <project.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {project.achievement.includes("Hackathon") && (
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1 bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        >
                          <Trophy className="w-3 h-3" />
                          {project.achievement.includes("Top")
                            ? "Top 6"
                            : project.achievement.includes("Finalist")
                            ? "Finalist"
                            : "Winner"}
                        </Badge>
                      )}
                    </div>

                    {/* Title */}
                    <div className="mt-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      <p className="text-xs text-primary mt-1">{project.period}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Description */}
                    <p className="text-sm text-muted-foreground">{project.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className={`text-transparent bg-gradient-to-r ${project.color} bg-clip-text`}>
                            →
                          </span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild className="hover:bg-primary/20">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button variant="ghost" size="sm" asChild className="hover:bg-primary/20">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
