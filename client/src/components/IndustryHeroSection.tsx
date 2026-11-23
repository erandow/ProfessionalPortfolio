import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Mail,
  Briefcase,
  Users,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Bot,
  Zap,
  Layers,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import erfanImage from "../images/Erfan.jpg";
import IndustryResumeModal from "@/components/IndustryResumeModal";
import NeuralCanvas from "@/components/interactive/NeuralCanvas";
import WelcomeMascot from "@/components/WelcomeMascot";

export default function IndustryHeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-border/40">
      {/* Interactive Neural Canvas Ambient Background */}
      <NeuralCanvas />

      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent pointer-events-none -z-10 blur-3xl" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Engineering Pitch (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Senior AI & Tech Lead Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <Users className="w-3.5 h-3.5" />
                Tech Lead @ Troweb (4 Engineers Led)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <Zap className="w-3.5 h-3.5" />
                Scaled to 500k+ Concurrent Users
              </span>
            </div>

            {/* Title & Name */}
            <div className="flex items-center gap-4">
              <div className="min-w-0 flex-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                  Erfan Asadi
                </h1>
                <p className="mt-2 text-xl sm:text-2xl font-bold text-primary tracking-tight">
                  Senior AI Engineer & Full-Stack Tech Lead
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">
                  Specializing in Autonomous Multi-Agent AI Systems, High-Throughput LLM Serving, and Scalable Web Architectures.
                </p>
              </div>
              <WelcomeMascot className="flex w-16 sm:w-20 lg:hidden" />
            </div>

            {/* Elevator Pitch */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I architect production-grade <strong className="text-foreground font-semibold">autonomous AI agent workflows</strong> (LangGraph, LangChain, vLLM) and lead distributed engineering teams to ship resilient applications. Proven track record scaling platforms to <strong className="text-foreground font-semibold">500,000+ simultaneous users</strong> with 99.9% uptime.
            </p>

            {/* Core Competencies Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "LangGraph Multi-Agent Workflows",
                "Local LLM Serving (vLLM, Ollama)",
                "Full-Stack TypeScript & React",
                "High-Concurrency Architecture",
                "Python & PyTorch",
                "Engineering Team Leadership",
              ].map((badge, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs font-normal bg-muted/80 text-muted-foreground px-2.5 py-1"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button
                size="lg"
                onClick={() => setResumeModalOpen(true)}
                className="shadow-md hover:shadow-primary/25 transition-all font-medium text-sm gap-2"
              >
                <FileText className="w-4 h-4" />
                View Interactive Resume
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-sm font-medium gap-2"
              >
                <a href="/Erfan-Asadi-Resume.pdf" download="Erfan-Asadi-Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </a>
              </Button>

              <Button
                size="lg"
                variant="ghost"
                asChild
                className="text-sm font-medium gap-2"
              >
                <a href="#case-studies">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Explore Case Studies
                </a>
              </Button>
            </div>

            {/* Social & Contact */}
            <div className="flex items-center gap-4 pt-2 text-muted-foreground text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Connect:</span>
              <a
                href="https://github.com/erandow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/erandow/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
                <span className="hidden sm:inline text-xs">LinkedIn</span>
              </a>
              <a
                href="mailto:erfanasadi.ce@gmail.com"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4 text-rose-500" />
                <span className="hidden sm:inline text-xs">erfanasadi.ce@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Card & Key Impact Metrics (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-end"
          >
            <div className="w-full max-w-sm bg-card rounded-2xl p-4 border border-border shadow-lg">
              <div className="mb-4 flex items-end gap-2">
                <WelcomeMascot className="hidden w-28 lg:flex" />
                <div className="relative aspect-square min-w-0 flex-1 overflow-hidden rounded-xl border border-border/80 bg-muted lg:aspect-[4/5]">
                  <img
                    src={erfanImage}
                    alt="Erfan Asadi"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-x-2 bottom-2 text-white">
                    <p className="text-xs font-semibold">Erfan Asadi</p>
                  </div>
                </div>
              </div>

              {/* Engineering Impact Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-3 rounded-xl bg-muted/50 border border-border/60">
                  <div className="text-xl font-extrabold text-primary">500k+</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Peak Concurrent Users</p>
                </div>

                <div className="p-3 rounded-xl bg-muted/50 border border-border/60">
                  <div className="text-xl font-extrabold text-foreground">4 Eng.</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Led as Tech Lead</p>
                </div>

                <div className="p-3 rounded-xl bg-muted/50 border border-border/60">
                  <div className="text-xl font-extrabold text-foreground">5+ Years</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Production Exp.</p>
                </div>

                <div className="p-3 rounded-xl bg-muted/50 border border-border/60">
                  <div className="text-xl font-extrabold text-foreground">60%+</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Data Task Automation</p>
                </div>
              </div>

              {/* Current Role Callout */}
              <div className="mt-3 p-3 rounded-lg bg-primary/5 border border-primary/15 text-xs text-muted-foreground">
                <div className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                  <span>Current Employment</span>
                </div>
                <p>Frontend Tech Lead & AI Agent Developer at Troweb (Dubai, Remote)</p>
                <p className="mt-0.5 text-[11px]">Building enterprise autonomous multi-agent data workspaces</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <IndustryResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </section>
  );
}
