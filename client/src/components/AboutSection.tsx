import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail, MapPin, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";
import imagePath from "../images/Erfan.jpg";
import AcademicCVModal from "@/components/AcademicCVModal";

export default function AboutSection() {
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 bg-muted/20 border-b border-border/40 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Portrait & Key Metrics (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md aspect-square bg-muted">
              <img
                src={imagePath}
                alt="Erfan Asadi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
            </div>

            <div className="p-4 rounded-xl bg-card border border-border shadow-sm space-y-2 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <span className="text-muted-foreground">Current Role</span>
                <span className="font-semibold text-foreground">Tech Lead & AI Agent Architect</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <span className="text-muted-foreground">Education</span>
                <span className="font-semibold text-foreground">M.Sc. Artificial Intelligence</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <span className="text-muted-foreground">Location</span>
                <span className="font-semibold text-foreground">Tehran, Iran (Remote Available)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Target Opportunities</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">PhD / Senior AI Roles</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Academic & Professional Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-5"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Researcher, Software Architect & Lifelong Learner
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                I am an AI researcher and software engineer specializing in <strong className="text-foreground">Computer Vision</strong> and <strong className="text-foreground">Perceptual Video Quality Assessment (VQA)</strong>. I hold a Master of Science in Artificial Intelligence from Kharazmi University, where I was admitted under the National Exceptional Talent Scholarship and completed my thesis on low-complexity blind video quality estimation under Dr. Azadeh Mansouri.
              </p>
              <p>
                Recently, our research on fine-tuned feature map correlations was awarded the <strong className="text-foreground">Best Paper Award at IPRIA 2025</strong>. Additionally, I co-authored work on AI-generated visual quality evaluation for the <strong className="text-foreground">NTIRE 2024 Challenge at CVPR Workshops</strong>.
              </p>
              <p>
                In industry, I currently serve as <strong className="text-foreground">Frontend Tech Lead & AI Agent Developer</strong> at Troweb (Dubai, Remote), leading an engineering team in building autonomous multi-agent data workspaces with LangChain and LangGraph. Previously, at DoExam, I built scalable client systems capable of withstanding 500,000 concurrent students per exam.
              </p>
            </div>

            {/* Core Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Award-winning research in blind VQA and perceptual modeling</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Stateful multi-agent system orchestration (LangGraph)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>University teaching assistant for 5+ computer science courses</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>High-concurrency systems engineered for 500k+ concurrent users</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button
                size="sm"
                onClick={() => setCvModalOpen(true)}
                className="font-medium text-xs gap-1.5 h-9 px-4"
              >
                <FileText className="w-4 h-4" />
                Open Interactive CV
              </Button>

              <Button
                size="sm"
                variant="outline"
                asChild
                className="font-medium text-xs gap-1.5 h-9 px-4"
              >
                <a href="/Erfan-Asadi-Resume.pdf" download="Erfan-Asadi-Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume PDF
                </a>
              </Button>

              <Button
                size="sm"
                variant="ghost"
                asChild
                className="font-medium text-xs gap-1.5 h-9 px-4"
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 text-primary" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      <AcademicCVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </section>
  );
}
