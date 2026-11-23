import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, Calendar, MapPin, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import trowebImage from "../images/troweb.png";
import doExamImage from "../images/DoExam.jpg";
import lernitoImage from "../images/Lernito.png";
import eBidarImage from "../images/ebidar.jpg";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  category: "ai-agents" | "high-scale" | "edtech";
  summary: string;
  highlights: string[];
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export default function ExperienceSection() {
  const [filter, setFilter] = useState<"all" | "ai-agents" | "high-scale">("all");

  const experiences: ExperienceItem[] = [
    {
      id: "troweb",
      role: "Frontend Tech Lead & AI Agent Developer",
      company: "Troweb",
      location: "Dubai, UAE (Remote)",
      period: "2023 – Present",
      category: "ai-agents",
      summary: "Leading frontend architecture and autonomous AI agent workflows for a next-generation personal data workspace.",
      highlights: [
        "Managed and mentored a remote team of 4 software and AI engineers.",
        "Architected and deployed multi-agent LLM systems using LangChain and LangGraph for automated data workflows.",
        "Engineered robust state machines and dynamic UI graph visualizations for multi-turn agent interactions.",
        "Collaborated closely with AI research teams to integrate local LLM serving pipelines (vLLM, Ollama).",
      ],
      technologies: ["LangChain", "LangGraph", "Python", "TypeScript", "React Router", "Node.js", "MongoDB", "vLLM"],
      imageUrl: trowebImage,
      projectUrl: "https://www.troweb.com/",
    },
    {
      id: "doexam",
      role: "Frontend Developer (High-Concurrency Architecture)",
      company: "DoExam",
      location: "Dubai, UAE (Remote)",
      period: "2021 – 2023",
      category: "high-scale",
      summary: "Engineered high-concurrency online testing and assessment platforms powered by AI for K12 education.",
      highlights: [
        "Designed and implemented core testing client handling up to 500,000 concurrent students per examination session with zero downtime.",
        "Leveraged AI agents to personalize testing feedback, question banking, and automated evaluation.",
        "Engineered real-time state synchronization using TypeScript, GraphQL, React, and resilient caching.",
      ],
      technologies: ["TypeScript", "GraphQL", "React", "Node.js", "MongoDB", "High-Concurrency"],
      imageUrl: doExamImage,
      projectUrl: "https://www.doexam.com/en",
    },
    {
      id: "lernito",
      role: "Web Application Developer",
      company: "Lernito (Avid Arvand Technologies)",
      location: "Tehran, Iran",
      period: "2019 – 2021",
      category: "edtech",
      summary: "Designed and developed an integrated online classroom system, interactive question bank, and testing platform.",
      highlights: [
        "Spearheaded web client development and led the Android application release on Google Play.",
        "Built responsive, accessible interfaces serving hundreds of schools and educational institutions.",
        "Created high-throughput question authoring tools with real-time math rendering.",
      ],
      technologies: ["React", "LiveScript", "Node.js", "MongoDB", "REST APIs"],
      imageUrl: lernitoImage,
      projectUrl: "https://landing.lernito.com/",
    },
    {
      id: "ebidar",
      role: "Full-Stack Web Developer",
      company: "Eghtesad Bidar Brokerage",
      location: "Tehran, Iran",
      period: "2020",
      category: "high-scale",
      summary: "Developed the customer club platform for one of the largest brokerage firms in Iran.",
      highlights: [
        "Engineered real-time customer rewards, scoring, and loyalty dashboards.",
        "Integrated secure API communication between customer club services and financial core banking systems.",
      ],
      technologies: ["TypeScript", "Next.js", "React", "REST APIs"],
      imageUrl: eBidarImage,
      projectUrl: "https://ebidar.com/",
    },
  ];

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === "all") return true;
    return exp.category === filter;
  });

  return (
    <section id="experience" className="py-20 bg-muted/20 border-b border-border/40 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Professional & Engineering Experience
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-3">
              Leading teams, building multi-agent AI platforms, and engineering resilient systems scaled to 500k+ concurrent users.
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
              All Roles
            </Button>
            <Button
              size="sm"
              variant={filter === "ai-agents" ? "default" : "outline"}
              onClick={() => setFilter("ai-agents")}
              className="text-xs h-8"
            >
              AI & Agents
            </Button>
            <Button
              size="sm"
              variant={filter === "high-scale" ? "default" : "outline"}
              onClick={() => setFilter("high-scale")}
              className="text-xs h-8"
            >
              High Scale (500k+)
            </Button>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-sm transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left/Middle Content: 8 cols */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded">
                        {exp.period}
                      </span>
                      <span className="flex items-center text-xs text-muted-foreground gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <a
                      href={exp.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      Visit Website
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Highlights Bullet Points */}
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm text-foreground/90">
                    {exp.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                    {exp.technologies.map((tech, tIdx) => (
                      <Badge
                        key={tIdx}
                        variant="secondary"
                        className="text-[11px] font-normal py-0.5 px-2 bg-muted/60 text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right Image: 4 cols */}
                <div className="lg:col-span-4 rounded-xl overflow-hidden border border-border/80 aspect-video lg:aspect-[4/3] bg-muted">
                  <img
                    src={exp.imageUrl}
                    alt={exp.company}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
