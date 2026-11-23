import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Sparkles, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import blindVideoQualityAssessmentImage from "../images/LCVQA.png";
import reactTypeWriteImage from "../images/TypeWriter.jpg";
import giteaSecureLaunchImage from "../images/gitea.webp";
import artificialNeuralNetworkSeriesImage from "../images/ANN-Workshop.jpg";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: "research-ai" | "open-source";
  period: string;
  metrics?: string;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "research-ai" | "open-source">("all");

  const projects: Project[] = [
    {
      id: "lcbvqa",
      title: "Low Complexity Blind Video Quality Assessment (LC-BVQA)",
      subtitle: "PyTorch & CUDA Deep Perception Framework",
      description: "A deep learning framework designed for real-time blind video quality estimation on UGC datasets (LIVE-VQA, KoNViD-1k). Computes fine-tuned correlation features across convolutional layers combined with high-level semantic representations.",
      image: blindVideoQualityAssessmentImage,
      technologies: ["Python", "PyTorch", "CUDA", "Scikit-Learn", "OpenCV", "Seaborn"],
      githubUrl: "https://github.com/erandow/LC-BVQA",
      category: "research-ai",
      period: "2023 – 2024",
      metrics: "Real-time inference with minimal FLOP footprint",
    },
    {
      id: "ashti-academy",
      title: "Ashti Academy AI Learning Marketplace",
      subtitle: "HLS Streaming Platform with AI Recommendation",
      description: "Scalable digital learning marketplace featuring encrypted HLS video streaming, AI-powered semantic search, automated content tagging, and personalized course recommendations built with Strapi and Node.js.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["Node.js", "Strapi", "HLS Video Streaming", "AI Recommender", "TypeScript"],
      category: "research-ai",
      period: "2023",
      metrics: "Production-ready audio/video learning pipeline",
    },
    {
      id: "react-type-writer",
      title: "React Type Writer (@vegadev/react-type-writer)",
      subtitle: "Published Open-Source NPM Package",
      description: "A lightweight, zero-dependency, and elegant typewriter animation package for modern React applications with configurable speeds, cursor delays, and loop controls.",
      image: reactTypeWriteImage,
      technologies: ["React", "TypeScript", "NPM Package", "Rollup"],
      demoUrl: "https://www.npmjs.com/package/@vegadev/react-type-writer",
      githubUrl: "https://github.com/erandow/react-type-writer",
      category: "open-source",
      period: "Published on NPM",
      metrics: "Live on npm registry with 100% TypeScript typing",
    },
    {
      id: "ann-series",
      title: "Artificial Neural Networks Tutorials & Codebase",
      subtitle: "Hands-on Deep Learning Foundations",
      description: "Comprehensive educational series breaking down artificial neural network mathematics, manual backpropagation derivations, optimization mechanics (SGD, Adam), and PyTorch/TensorFlow implementations.",
      image: artificialNeuralNetworkSeriesImage,
      technologies: ["Python", "NumPy", "Pandas", "PyTorch", "TensorFlow"],
      githubUrl: "https://github.com/erandow/ANN-Workshop/tree/master",
      category: "research-ai",
      period: "Educational Open Source",
      metrics: "Taught to university undergraduate classes",
    },
    {
      id: "gitea-secure",
      title: "Gitea Secure Launch Automation",
      subtitle: "Containerized Git DevOps Infrastructure",
      description: "Streamlined infrastructure automation for self-hosting Gitea with automated Let's Encrypt TLS certificates, Nginx reverse proxy, and isolated Docker container orchestration.",
      image: giteaSecureLaunchImage,
      technologies: ["Docker", "Gitea", "Nginx", "DevOps", "Bash"],
      githubUrl: "https://github.com/erandow/gitea-secure-launch",
      category: "open-source",
      period: "2025",
      metrics: "One-command secure Git server deployment",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-muted/20 border-b border-border/40 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Research Code & Software</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Selected Projects & Open Source
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-3">
              Implementations bridging theoretical deep learning research with production-ready software and community tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-6 md:mt-0">
            <Button
              size="sm"
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="text-xs h-8"
            >
              All Projects
            </Button>
            <Button
              size="sm"
              variant={filter === "research-ai" ? "default" : "outline"}
              onClick={() => setFilter("research-ai")}
              className="text-xs h-8"
            >
              Research & AI
            </Button>
            <Button
              size="sm"
              variant={filter === "open-source" ? "default" : "outline"}
              onClick={() => setFilter("open-source")}
              className="text-xs h-8"
            >
              Open Source & Tools
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl bg-card border border-border hover:border-primary/40 shadow-sm overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden bg-muted relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-[10px] bg-background/90 backdrop-blur-sm border border-border/80">
                      {project.period}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="p-2.5 rounded-lg bg-muted/50 border border-border/60 text-xs text-foreground font-medium mb-4 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 border-t border-border/50 flex items-center gap-2 mt-4">
                {project.githubUrl && (
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 flex-1 gap-1.5">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demoUrl && (
                  <Button size="sm" asChild className="text-xs h-8 flex-1 gap-1.5">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Live
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
