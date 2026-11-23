import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Layers, Package, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import blindVideoQualityAssessmentImage from "../images/LCVQA.png";
import reactTypeWriteImage from "../images/TypeWriter.jpg";
import giteaSecureLaunchImage from "../images/gitea.webp";
import artificialNeuralNetworkSeriesImage from "../images/ANN-Workshop.jpg";

interface Project {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: string;
  githubUrl?: string;
  demoUrl?: string;
}

export default function IndustryProjectsSection() {
  const projects: Project[] = [
    {
      id: "lcbvqa",
      title: "Low Complexity Blind Video Quality Assessment",
      badge: "Deep Learning & CUDA",
      subtitle: "PyTorch Deep Perception Engine for Real-Time Video Evaluation",
      description:
        "High-performance deep learning model designed for blind perceptual quality estimation on natural and user-generated video content. Combines multi-layer Gram matrix correlation features with spatial representations to achieve high prediction accuracy with minimal computational overhead.",
      image: blindVideoQualityAssessmentImage,
      technologies: ["PyTorch", "Python", "CUDA", "OpenCV", "Scikit-Learn", "SVR"],
      metrics: "Real-time GPU inference with low FLOP complexity",
      githubUrl: "https://github.com/erandow/LC-BVQA",
    },
    {
      id: "react-type-writer",
      title: "React Type Writer (@vegadev/react-type-writer)",
      badge: "Published NPM Package",
      subtitle: "Lightweight, Production-Grade Typewriter Animation Engine",
      description:
        "An open-source, zero-dependency, and elegant typewriter animation package for modern React applications. Features dynamic typing cadences, customizable cursor styling, delay buffers, and complete TypeScript definitions.",
      image: reactTypeWriteImage,
      technologies: ["React", "TypeScript", "NPM Registry", "Rollup"],
      metrics: "Live on official npm registry with 100% test coverage",
      demoUrl: "https://www.npmjs.com/package/@vegadev/react-type-writer",
      githubUrl: "https://github.com/erandow/react-type-writer",
    },
    {
      id: "ashti-academy",
      title: "Ashti Academy Video Marketplace",
      badge: "HLS Streaming & AI",
      subtitle: "Scalable Educational Media Platform with Smart Recommender",
      description:
        "End-to-end media marketplace featuring encrypted HTTP Live Streaming (HLS), adaptive bitrate delivery, AI-powered semantic search, and content tagging with automated recommendation pipelines.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["Node.js", "Strapi CMS", "HLS Video Streaming", "AI Recommender", "TypeScript"],
      metrics: "Sub-second video chunk streaming and low-latency search",
    },
    {
      id: "gitea-secure",
      title: "Gitea Secure Launch DevOps Suite",
      badge: "Infrastructure & Security",
      subtitle: "Automated Self-Hosted Git Platform with Automated TLS",
      description:
        "Turnkey containerized Git infrastructure with automated Let's Encrypt SSL/TLS provisioning, hardened Nginx reverse proxy configurations, automated health-checks, and persistent volume backup routines.",
      image: giteaSecureLaunchImage,
      technologies: ["Docker", "Docker Compose", "Gitea", "Nginx", "Bash", "Let's Encrypt"],
      metrics: "One-command deployment for enterprise private code hosting",
      githubUrl: "https://github.com/erandow/gitea-secure-launch",
    },
    {
      id: "ann-series",
      title: "Artificial Neural Networks Tutorials & Codebase",
      badge: "Open Source AI Education",
      subtitle: "Comprehensive Mathematical & Practical Deep Learning Series",
      description:
        "Practical open-source repository dissecting deep neural networks from first principles: manual backpropagation derivations, gradient descent optimization variants, convolutional layers, and PyTorch implementations.",
      image: artificialNeuralNetworkSeriesImage,
      technologies: ["Python", "NumPy", "Pandas", "PyTorch", "TensorFlow"],
      metrics: "Hands-on reference curriculum taught in university workshops",
      githubUrl: "https://github.com/erandow/ANN-Workshop/tree/master",
    },
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Package className="w-3.5 h-3.5" />
            <span>Shipped Products & Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects & Open Source
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            Commercial products, deep learning engines, and public open-source packages delivered with production rigor.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl bg-card border border-border hover:border-primary/40 shadow-sm overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="aspect-video w-full overflow-hidden bg-muted relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-[10px] bg-background/90 backdrop-blur-sm border border-border/80">
                      {proj.badge}
                    </Badge>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-3">
                    {proj.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="p-2.5 rounded-lg bg-muted/50 border border-border/60 text-xs text-foreground font-medium mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>{proj.metrics}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech, tIdx) => (
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

              <div className="p-5 sm:p-6 pt-0 border-t border-border/50 flex items-center gap-2 mt-4">
                {proj.githubUrl && (
                  <Button size="sm" variant="outline" asChild className="text-xs h-8 flex-1 gap-1.5">
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5" />
                      GitHub Repo
                    </a>
                  </Button>
                )}
                {proj.demoUrl && (
                  <Button size="sm" asChild className="text-xs h-8 flex-1 gap-1.5">
                    <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Package
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
