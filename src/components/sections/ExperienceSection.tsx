"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "IBM",
    location: "Mumbai, India",
    period: "Jun 2024 - Jun 2025",
    type: "Full-time",
    description: [
      "Built modular Java/Spring Boot microservices for Union Bank of India's POS onboarding platform, supporting 10k+ merchants and enabling 30% faster POS activation with 20% fewer application rejections.",
      "Executed core flows—user registration, application submission, and status transitions—processing 5,000+ daily events via Apache Kafka to drive downstream settlement.",
      "Reduced friction in onboarding by launching actionable feedback and re-application flows plus implemented status tracking/notifications scaled to 10,000+ merchants.",
    ],
    technologies: ["Java", "Spring Boot", "Apache Kafka", "Microservices", "PostgreSQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Generative AI Model Evaluator",
    company: "Outlier",
    location: "Remote, USA",
    period: "Nov 2023 - May 2024",
    type: "Contract",
    description: [
      "Evaluated and refined RLHF datasets for production-grade LLMs, directly improving model reasoning capabilities across 500+ coding and logic tasks.",
      "Optimized RAG pipelines by stress-testing context window limits and retrieval accuracy, resulting in 15% reduction in model hallucinations.",
      "Analyzed model outputs for syntax and semantic errors in Python/Java code generation, creating high-quality training data for next-gen AI models.",
    ],
    technologies: ["RLHF", "LLMs", "RAG", "Python", "Java", "AI Evaluation"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Software Engineer Intern",
    company: "Vmayo Technologies",
    location: "India",
    period: "May 2023 - Oct 2023",
    type: "Internship",
    description: [
      "Constructed on a complex Ruby on Rails open-source codebase (Postal) to deliver a scalable, multi-tenant, white-label SaaS for resellers—launched a new reseller model with 90% client retention.",
      "Extended React components and Rails services to support per-tenant overrides for branding, custom domains, and IP-pool management, enabling reseller-specific configuration at scale.",
      "Designed PostgreSQL schema extensions and RESTful APIs to provision 15+ resellers and process 200k+ emails/day; owned design-to-deployment.",
    ],
    technologies: ["Ruby on Rails", "React", "PostgreSQL", "REST APIs", "Multi-tenant SaaS"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Webmaster",
    company: "IEEE",
    location: "University Chapter",
    period: "Jan 2021 - Dec 2022",
    type: "Leadership",
    description: [
      "Spearheaded a 3-person team to architect the official IEEE branch website using Next.js and Tailwind CSS, streamlining the registration process for 15+ annual events and handling over 500+ student applications.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Team Leadership"],
    color: "from-green-500 to-teal-500",
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
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
              My Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} transform -translate-x-1/2 md:-translate-x-1/2 z-10 glow`}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`glass rounded-2xl p-6 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Header */}
                  <div className={`flex flex-col gap-2 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant="outline"
                        className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent border-none`}
                      >
                        {exp.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold">{exp.title}</h3>

                    <div className="flex items-center gap-4 text-muted-foreground text-sm flex-wrap">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div
                    className={`flex flex-wrap gap-2 mt-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
