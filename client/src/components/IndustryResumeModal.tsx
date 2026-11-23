import { Printer, Download, Mail, MapPin, Phone, ExternalLink, Briefcase, Code2, Cpu, Award } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface IndustryResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IndustryResumeModal({ isOpen, onClose }: IndustryResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto bg-background p-6 sm:p-10 border border-border">
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
          <div className="flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm sm:text-base">Industry Resume — Senior AI Engineer & Tech Lead</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" onClick={handlePrint} className="text-xs">
              <Printer className="w-3.5 h-3.5 mr-1" />
              Print / Save PDF
            </Button>
            <Button size="sm" asChild className="text-xs">
              <a href="/Erfan-Asadi-Resume.pdf" download="Erfan-Asadi-Resume.pdf">
                <Download className="w-3.5 h-3.5 mr-1" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-7 text-foreground text-sm leading-relaxed" id="printable-cv">
          {/* Header Info */}
          <div className="text-center pb-5 border-b border-border/60">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">Erfan Asadi</h1>
            <p className="text-base text-primary font-semibold mb-2">
              Senior AI Engineer & Full-Stack Tech Lead
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-primary" />
                erfanasadi.ce@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-primary" />
                +98 912 056 0867
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Tehran, Iran (Open to Remote & Relocation)
              </span>
              <a href="https://github.com/erandow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                <FaGithub className="w-3.5 h-3.5" />
                github.com/erandow
              </a>
              <a href="https://linkedin.com/in/erandow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                linkedin.com/in/erandow
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-2.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Results-driven Senior AI Engineer and Tech Lead with over 5 years of production software experience. Expert in designing autonomous multi-agent AI systems using LangChain, LangGraph, and local LLM deployment (vLLM, Ollama), as well as architecting high-concurrency distributed frontends proven at 500,000+ concurrent users. Proven record of managing remote engineering teams, shipping commercial products, and integrating cutting-edge deep learning perception models into real-world applications.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-2.5">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-foreground">AI & Autonomous Agents: </span>
                <span className="text-muted-foreground">LangGraph, LangChain, Multi-Agent Workflows, vLLM, Ollama, Prompt Engineering, RAG Architectures</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Deep Learning & Vision: </span>
                <span className="text-muted-foreground">PyTorch, TensorFlow, OpenCV, CUDA, Video Quality Assessment (VQA), Model Optimization</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Frontend & Web Architecture: </span>
                <span className="text-muted-foreground">TypeScript, JavaScript, React, Next.js, React Router, GraphQL, Tailwind CSS, Responsive Design</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Backend & Cloud/DevOps: </span>
                <span className="text-muted-foreground">Node.js, Express, Python, Flask, MongoDB, PostgreSQL, Docker, Nginx, Git, Linux HPC</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {/* Troweb */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-bold text-sm text-foreground">
                    Frontend Tech Lead & AI Agent Developer — Troweb
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">2023 – Present | Dubai, UAE (Remote)</span>
                </div>
                <p className="text-xs text-primary font-medium mb-1.5">
                  AI-Powered Multi-Agent Data Workspace
                </p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-muted-foreground">
                  <li>
                    Led frontend architecture and autonomous AI agent workflows, directly managing a remote distributed team of 4 software engineers.
                  </li>
                  <li>
                    Architected stateful multi-agent pipelines with LangChain and LangGraph to automate data querying, synthesis, and code execution.
                  </li>
                  <li>
                    Built dynamic graph execution visualizers and streaming interfaces for seamless multi-turn user-agent collaboration.
                  </li>
                  <li>
                    Collaborated with backend and AI teams to serve high-throughput local models using vLLM and Ollama, reducing operational latency by 45%.
                  </li>
                </ul>
              </div>

              {/* DoExam */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-bold text-sm text-foreground">
                    Frontend Developer (High-Concurrency Systems) — DoExam
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">2021 – 2023 | Dubai, UAE (Remote)</span>
                </div>
                <p className="text-xs text-primary font-medium mb-1.5">
                  Large-Scale AI-Powered Online Testing & Assessment Platform
                </p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-muted-foreground">
                  <li>
                    Engineered resilient high-concurrency client application serving up to 500,000 concurrent students in single nationwide exam sessions with zero downtime.
                  </li>
                  <li>
                    Implemented optimistic client updates, offline caching, and robust GraphQL/WebSocket synchronization for unstable network environments.
                  </li>
                  <li>
                    Integrated AI evaluation agents to assist with automated grading and personalized diagnostic assessments.
                  </li>
                </ul>
              </div>

              {/* Lernito */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-bold text-sm text-foreground">
                    Web Application Developer — Lernito (Avid Arvand Technologies)
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">2019 – 2021 | Tehran, Iran</span>
                </div>
                <p className="text-xs text-primary font-medium mb-1.5">
                  K12 Learning Management System & Interactive Exam Platform
                </p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-muted-foreground">
                  <li>
                    Designed and built interactive online class systems, question authoring tools, and testing platform used by thousands of students.
                  </li>
                  <li>
                    Led application release on Google Play store, optimizing hybrid mobile performance and responsive UI.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Honors */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-2.5">
              Education & Honors
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground">
                    Master of Science in Artificial Intelligence — Kharazmi University
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">2020 – 2023 | GPA: 17.21 / 20.00</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  • Admitted via National Exceptional Talent Scholarship (Tuition-free direct entrance).
                  <br />• Thesis: "Low Complexity Blind Video Quality Assessment" (Awarded Best Paper at IPRIA 2025).
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground">
                    Bachelor of Science in Computer Engineering — University of Guilan
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">2016 – 2020 | GPA: 17.38 / 20.00</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  • Graduated as an Outstanding Student in the Faculty of Engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-2.5">
              Professional Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div>• Professional Certificate in Deep Learning (IBM - edX)</div>
              <div>• Deep Learning with TensorFlow (IBM - edX)</div>
              <div>• Deep Learning with PyTorch and Python (IBM - edX)</div>
              <div>• Computer Vision and Image Processing (IBM - edX)</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
