import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, Layers, Server, Database, CheckCircle2, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SkillPillar {
  id: string;
  category: string;
  icon: any;
  description: string;
  skills: { name: string; level: "Expert" | "Advanced"; detail: string }[];
}

export default function IndustrySkillsSection() {
  const skillPillars: SkillPillar[] = [
    {
      id: "ai-agents",
      category: "Autonomous AI Agents & LLM Systems",
      icon: Bot,
      description: "Architecting reliable multi-agent systems, tool orchestration, and local inference serving.",
      skills: [
        { name: "LangGraph", level: "Expert", detail: "Stateful agent graphs, human-in-the-loop, cyclical workflows" },
        { name: "LangChain", level: "Expert", detail: "Chains, retrieval-augmented generation (RAG), tool calling" },
        { name: "vLLM", level: "Advanced", detail: "High-throughput serving, PagedAttention, KV cache management" },
        { name: "Ollama", level: "Expert", detail: "Local private model deployment, quantization, low-latency execution" },
        { name: "Multi-Agent Architectures", level: "Expert", detail: "Hierarchical supervisor patterns, autonomous delegation" },
        { name: "Prompt Engineering & Evals", level: "Expert", detail: "Few-shot optimization, structured outputs, benchmark evals" },
      ],
    },
    {
      id: "deep-learning",
      category: "Deep Learning & Computer Vision",
      icon: Cpu,
      description: "Developing perceptual vision models, feature correlations, and real-time inference.",
      skills: [
        { name: "PyTorch", level: "Advanced", detail: "Custom loss functions, CNN backbones, autograd pipelines" },
        { name: "TensorFlow & Keras", level: "Advanced", detail: "Deep architectures, transfer learning, production deployment" },
        { name: "Computer Vision (VQA / IQA)", level: "Expert", detail: "No-reference perceptual assessment, distortion modeling" },
        { name: "OpenCV", level: "Advanced", detail: "Real-time frame extraction, spatial filtering, video decoding" },
        { name: "Scikit-Learn", level: "Expert", detail: "Support Vector Regression (SVR), cross-validation, feature metrics" },
        { name: "CUDA & Acceleration", level: "Advanced", detail: "GPU acceleration, batch inference optimization" },
      ],
    },
    {
      id: "frontend",
      category: "Frontend Architecture & Web Leadership",
      icon: Layers,
      description: "Building responsive, resilient, accessible web interfaces engineered for scale.",
      skills: [
        { name: "TypeScript", level: "Expert", detail: "Strict type safety, generics, enterprise codebases" },
        { name: "React & Next.js", level: "Expert", detail: "Hooks, server components, performance memoization, SSR" },
        { name: "React Router", level: "Expert", detail: "Complex nested layouts, loaders, dynamic state routing" },
        { name: "High-Concurrency Optimization", level: "Expert", detail: "500k-user resilience, memory leak prevention, virtualization" },
        { name: "Tailwind CSS & shadcn/ui", level: "Expert", detail: "Modern accessible design systems, RTL multilingual support" },
        { name: "State Management", level: "Expert", detail: "TanStack Query, Context API, optimistic updates, offline sync" },
      ],
    },
    {
      id: "backend-devops",
      category: "Backend, Databases & Cloud DevOps",
      icon: Server,
      description: "Scalable APIs, database optimization, container orchestration, and CI/CD pipelines.",
      skills: [
        { name: "Node.js & Express", level: "Advanced", detail: "RESTful APIs, middleware architecture, async event loops" },
        { name: "Python & Flask", level: "Advanced", detail: "Backend microservices, ML model serving endpoints" },
        { name: "GraphQL & WebSockets", level: "Advanced", detail: "Real-time bi-directional streaming, high-throughput subscriptions" },
        { name: "MongoDB & PostgreSQL", level: "Advanced", detail: "Schema design, indexing strategies, aggregation pipelines" },
        { name: "Docker & Containerization", level: "Advanced", detail: "Multi-stage builds, isolated environments, compose automation" },
        { name: "Git CI/CD & Linux", level: "Expert", detail: "Automated test suites, continuous deployment, Linux system admin" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20 border-b border-border/40 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Architecture & Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            Comprehensive skill matrix covering agentic AI engineering, deep learning vision models, and robust full-stack software architecture.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground leading-snug">
                        {pillar.category}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3">
                    {pillar.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-muted/40 border border-border/60 hover:bg-muted/70 transition-colors flex items-start justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-xs sm:text-sm text-foreground">
                              {skill.name}
                            </h4>
                            <span
                              className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                                skill.level === "Expert"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {skill.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
