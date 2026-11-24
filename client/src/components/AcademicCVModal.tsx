import { Printer, Download, X, Mail, MapPin, Globe, Award, BookOpen, GraduationCap, Briefcase, Cpu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { publicationsData, teachingExperiences, academicHonors, academicReferences } from "@/lib/academic-data";

interface AcademicCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AcademicCVModal({ isOpen, onClose }: AcademicCVModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto bg-background p-6 sm:p-10 border border-border">
        {/* Actions header */}
        <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm sm:text-base">Curriculum Vitae (Academic & Research)</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" onClick={handlePrint} className="text-xs">
              <Printer className="w-3.5 h-3.5 mr-1" />
              Print / Save PDF
            </Button>
            <Button size="sm" asChild className="text-xs">
              <a href="/Erfan-Asadi-Resume.pdf" download="Erfan-Asadi-CV.pdf">
                <Download className="w-3.5 h-3.5 mr-1" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* CV Body */}
        <div className="space-y-8 text-foreground text-sm leading-relaxed" id="printable-cv">
          {/* Header */}
          <div className="text-center pb-6 border-b border-border/60">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">Erfan Asadi</h1>
            <p className="text-base text-primary font-medium mb-3">
              AI Researcher & Software Engineer | M.Sc. in Artificial Intelligence
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-muted-foreground">
              <span className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1 text-primary" />
                erfanasadi.ce@gmail.com
              </span>
              <span className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-primary" />
                Tehran, Iran
              </span>
              <a href="https://github.com/erandow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                github.com/erandow
              </a>
              <a href="https://linkedin.com/in/erandow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                linkedin.com/in/erandow
              </a>
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-3">
              Research Interests
            </h2>
            <p className="text-muted-foreground text-sm">
              Computer Vision, No-Reference Video Quality Assessment (VQA), AI-Generated Content (AIGC) Evaluation, Perceptual Loss Modeling, Low-Complexity Deep Neural Networks, Autonomous Multi-Agent Systems, and Foundation Model Orchestration.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-semibold text-foreground">
                    Master of Science in Artificial Intelligence
                  </h3>
                  <span className="text-xs text-muted-foreground">2020 – 2023</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-muted-foreground mb-1">
                  <span>Kharazmi University, Tehran, Iran</span>
                  <span className="font-medium text-foreground">GPA: 17.21 / 20.00</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  • <strong>Thesis:</strong> "Low Complexity Blind Video Quality Assessment" (Advisor: Dr. Azadeh Mansouri)
                </p>
                <p className="text-xs text-muted-foreground">
                  • <strong>Honors:</strong> Admitted through the prestigious National Exceptional Talent Scholarship.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-semibold text-foreground">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <span className="text-xs text-muted-foreground">2016 – 2020</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-muted-foreground mb-1">
                  <span>University of Guilan, Rasht, Iran</span>
                  <span className="font-medium text-foreground">GPA: 17.38 / 20.00</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  • <strong>Final Project:</strong> "Extracting Metadata from Academic Research Papers"
                </p>
                <p className="text-xs text-muted-foreground">
                  • <strong>Honors:</strong> Graduated as an Outstanding Student in Faculty of Engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-3">
              Publications
            </h2>
            <div className="space-y-4">
              {publicationsData.map((pub, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <p className="font-medium text-foreground">
                    {pub.authors.map((a, i) => (
                      <span key={i}>
                        {a === "Erfan Asadi" ? <strong className="underline decoration-primary/60">{a}</strong> : a}
                        {i < pub.authors.length - 1 ? ", " : ". "}
                      </span>
                    ))}
                    "{pub.title}". <em>{pub.venue}</em> ({pub.year}). {pub.status && <em>{pub.status}.</em>}
                  </p>
                  {pub.award && (
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      ★ {pub.award}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-3">
              Honors & Awards
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {academicHonors.map((h, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span>
                    <strong>{h.title}</strong> — {h.issuer}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">{h.year}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching & Mentorship */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-3">
              Teaching Experience & Academic Service
            </h2>
            <div className="space-y-3">
              {teachingExperiences.map((te, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-semibold text-xs sm:text-sm text-foreground">
                      Teaching Assistant: {te.course} ({te.level})
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{te.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {te.institution} • Supervisor: {te.supervisor} {te.supervisorEmail && `(${te.supervisorEmail})`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-3">
              Professional & Engineering Experience
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-semibold text-foreground">
                    Frontend Tech Lead & AI Agent Developer (Remote) — Troweb (Dubai, UAE)
                  </h3>
                  <span className="text-xs text-muted-foreground">2023 – Present</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  • Led frontend development for an AI-powered multi-agent workspace, managing a remote team of 4 engineers.
                  <br />• Architected autonomous AI agent workflows using LangChain, LangGraph, Python, TypeScript, and React Router.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-semibold text-foreground">
                    Frontend Developer (Remote) — DoExam (Dubai, UAE)
                  </h3>
                  <span className="text-xs text-muted-foreground">2021 – 2023</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  • Engineered scalable frontend architectures for high-concurrency testing platform supporting 500k students per exam session.
                  <br />• Implemented resilient state handling using TypeScript, GraphQL, React, and MongoDB.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-semibold text-foreground">
                    Web Application Developer — Lernito, Avid Arvand Technologies (Tehran, Iran)
                  </h3>
                  <span className="text-xs text-muted-foreground">2019 – 2021</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  • Developed interactive K12 LMS and testing platform; managed Google Play application release.
                </p>
              </div>
            </div>
          </div>

          {/* Key Technical Skills */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-3">
              Technical & Research Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-foreground">AI & Vision: </span>
                <span className="text-muted-foreground">PyTorch, TensorFlow, OpenCV, Scikit-learn, VQA/IQA Metrics, CUDA, NumPy, Pandas</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">LLMs & Agents: </span>
                <span className="text-muted-foreground">LangChain, LangGraph, vLLM, Ollama, Prompt Engineering, Autonomous Multi-Agent Workflows</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Web & Full Stack: </span>
                <span className="text-muted-foreground">TypeScript, Python, React, Next.js, React Router, Node.js, Express, Flask</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Systems & Tools: </span>
                <span className="text-muted-foreground">MongoDB, PostgreSQL, Docker, Git, Linux HPC environments</span>
              </div>
            </div>
          </div>

          {/* Academic References */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 mb-3">
              Academic References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {academicReferences.map((ref, idx) => (
                <div key={idx} className="p-3 bg-muted/40 rounded border border-border/60">
                  <p className="font-semibold text-foreground">{ref.name}</p>
                  <p className="text-muted-foreground">{ref.title}</p>
                  <p className="text-muted-foreground text-[11px]">{ref.institution}</p>
                  {ref.email && <p className="text-primary font-mono mt-1 text-[11px]">{ref.email}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
