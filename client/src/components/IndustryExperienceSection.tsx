import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, CheckCircle2, Users, Zap, ShieldCheck, Layers, Bot, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import trowebImage from "../images/troweb.png";
import doExamImage from "../images/DoExam.jpg";
import lernitoImage from "../images/Lernito.png";
import eBidarImage from "../images/ebidar.jpg";

interface CaseStudy {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  tagline: string;
  problem: string;
  architecture: string;
  leadership: string;
  impactMetrics: string[];
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export default function IndustryExperienceSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: "troweb",
      role: "Frontend Tech Lead & AI Agent Developer",
      company: "Troweb",
      location: "Dubai, UAE (Remote)",
      period: "2023 – Present",
      badge: "Team Lead & Agent Architect",
      tagline: "Autonomous Multi-Agent Workspace for Enterprise Data Processing",
      problem:
        "Enterprise users struggled with fragmented data analysis workflows, requiring manual SQL/Python scripting and disparate tools to correlate multi-table datasets.",
      architecture:
        "Designed and orchestrated a stateful multi-agent system using LangGraph and LangChain. Built interactive graph execution visualizers showing real-time agent thought, tool execution, and self-correction steps. Deployed local high-throughput LLM pipelines (vLLM and Ollama) to minimize cloud inference latency and operating cost.",
      leadership:
        "Directly managed a distributed remote engineering team of 4 engineers. Established Agile sprint rituals, TypeScript quality standards, and automated CI/CD testing pipelines.",
      impactMetrics: [
        "Automated over 60% of repetitive data processing tasks for enterprise users.",
        "Reduced end-to-end model response latency by 45% using optimized streaming and local vLLM serving.",
        "Maintained 99.9% platform availability across continuous weekly production deployments.",
      ],
      technologies: ["LangGraph", "LangChain", "Python", "TypeScript", "React Router", "Node.js", "MongoDB", "vLLM", "Docker"],
      imageUrl: trowebImage,
      projectUrl: "https://www.troweb.com/",
    },
    {
      id: "doexam",
      role: "Frontend Developer (High-Concurrency Architecture)",
      company: "DoExam",
      location: "Dubai, UAE (Remote)",
      period: "2021 – 2023",
      badge: "High Concurrency Scale",
      tagline: "Large-Scale Online Assessment Platform Scaled to 500,000 Concurrent Students",
      problem:
        "High-stakes nationwide K12 exams created massive simultaneous traffic surges, causing network instability and high risk of lost exam submissions.",
      architecture:
        "Architected an ultra-resilient frontend engine featuring local IndexedDB optimistic caching, automatic network heartbeat recovery, and real-time state synchronization via GraphQL and WebSockets. Integrated AI agents to power adaptive question authoring and auto-evaluation.",
      leadership:
        "Collaborated with cross-functional backend, SRE, and product teams to architect frontend performance budgets and stress-test the application under synthetic 500k-user loads.",
      impactMetrics: [
        "Successfully supported 500,000 active students concurrently taking high-stakes exams in a single window.",
        "Zero lost student submissions and zero system-wide outages during nationwide deployments.",
        "Sub-100ms client-side interaction latency maintained even under peak load.",
      ],
      technologies: ["TypeScript", "GraphQL", "React", "Node.js", "MongoDB", "High-Concurrency", "IndexedDB"],
      imageUrl: doExamImage,
      projectUrl: "https://www.doexam.com/en",
    },
    {
      id: "lernito",
      role: "Web Application Developer",
      company: "Lernito (Avid Arvand Technologies)",
      location: "Tehran, Iran",
      period: "2019 – 2021",
      badge: "Commercial EdTech Product",
      tagline: "Interactive Classroom & Question Banking Platform with Google Play Release",
      problem:
        "Educators needed an all-in-one system to draft complex mathematical and scientific questions, conduct live online lessons, and track detailed student progression analytics.",
      architecture:
        "Developed full-featured rich-text and LaTeX question creation tools, automated quiz generation engines, and real-time class interfaces with mobile and desktop responsiveness.",
      leadership:
        "Led the app's hybrid compilation and release lifecycle on the Google Play store, coordinating store compliance and user feedback cycles.",
      impactMetrics: [
        "Onboarded hundreds of educational institutions and thousands of active daily students.",
        "Engineered smooth cross-platform mobile user experience with 4.5+ star store rating.",
      ],
      technologies: ["React", "LiveScript", "Node.js", "MongoDB", "REST APIs", "Mobile Web"],
      imageUrl: lernitoImage,
      projectUrl: "https://landing.lernito.com/",
    },
    {
      id: "ebidar",
      role: "Full-Stack Web Developer",
      company: "Eghtesad Bidar Brokerage",
      location: "Tehran, Iran",
      period: "2020",
      badge: "FinTech & Real-Time APIs",
      tagline: "Customer Rewards & Loyalty Club Integrated with Financial Core Banking",
      problem:
        "Brokerage customers needed an interactive portal to track trading loyalty points, redeem gifts, and view financial performance metrics in real time.",
      architecture:
        "Built responsive web portal with Next.js and TypeScript connected securely to high-volume brokerage financial accounting APIs.",
      leadership:
        "Coordinated with financial security teams to ensure strict RBAC access controls and data protection compliance.",
      impactMetrics: [
        "Delivered project within a rigorous 2-month deadline ahead of public launch.",
        "Successfully connected thousands of brokerage clients to rewards ecosystem.",
      ],
      technologies: ["Next.js", "TypeScript", "React", "REST APIs", "Security RBAC"],
      imageUrl: eBidarImage,
      projectUrl: "https://ebidar.com/",
    },
  ];

  return (
    <section id="case-studies" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Production Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Engineering Case Studies & Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            Deep dive into real-world production systems: architectural challenges, team leadership, technical choices, and measurable business outcomes.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-10 rounded-3xl bg-card border border-border hover:border-primary/40 shadow-sm transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Content (8 cols) */}
                <div className="lg:col-span-8 space-y-5">
                  {/* Top metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded">
                        {cs.period}
                      </span>
                      <Badge variant="outline" className="text-xs font-medium border-border">
                        {cs.badge}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{cs.location}</span>
                    </div>

                    <a
                      href={cs.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      Visit Product
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                      {cs.role}
                    </h3>
                    <p className="text-base font-bold text-primary mt-0.5">
                      {cs.company} — <span className="text-muted-foreground font-normal">{cs.tagline}</span>
                    </p>
                  </div>

                  {/* Architecture & Engineering Details */}
                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="p-4 rounded-xl bg-muted/40 border border-border/60 space-y-1.5">
                      <p className="font-semibold text-foreground text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-primary" />
                        System Architecture & Implementation
                      </p>
                      <p className="leading-relaxed">{cs.architecture}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-muted/40 border border-border/60 space-y-1.5">
                      <p className="font-semibold text-foreground text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-primary" />
                        Team Leadership & Engineering Ownership
                      </p>
                      <p className="leading-relaxed">{cs.leadership}</p>
                    </div>
                  </div>

                  {/* Quantified Business Impact */}
                  <div className="pt-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      Measurable Production Impact
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-foreground/90">
                      {cs.impactMetrics.map((metric, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                    {cs.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Visual Image Card (4 cols) */}
                <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-border shadow-sm bg-muted aspect-video lg:aspect-auto lg:h-full flex flex-col justify-between">
                  <div className="h-56 sm:h-72 lg:h-64 w-full overflow-hidden">
                    <img
                      src={cs.imageUrl}
                      alt={cs.company}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-card border-t border-border text-xs text-muted-foreground">
                    <p className="font-medium text-foreground mb-0.5">{cs.company}</p>
                    <p className="text-[11px]">Production Environment</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
