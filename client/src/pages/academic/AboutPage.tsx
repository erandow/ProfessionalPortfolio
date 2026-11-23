import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, FileText, ExternalLink, Calendar, MapPin, Award, BookOpen, GraduationCap, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useLanguageRoute } from "@/hooks/use-language-route";
import PageHeader from "@/components/academic/PageHeader";
import SectionHeading from "@/components/academic/SectionHeading";
import { ReadingColumn } from "@/components/academic/ReadingLayout";
import Footer from "@/components/Footer";

import kharazmiLogoImagePath from "@/images/kharazmi-logo.png";
import guilanLogoImagePath from "@/images/guilan-logo.png";
import erfanPortrait from "@/images/Erfan.jpg";

export default function AboutPage() {
  const { currentLanguage } = useLanguageRoute();

  useEffect(() => {
    document.title = "About | Erfan Asadi — Academic Background & Experience";
  }, []);

  return (
    <div className="min-h-screen bg-academic-bg flex flex-col">
      <PageHeader
        breadcrumbTitle="About"
        eyebrow="Academic Background & Trajectory"
        title="About"
        subtitle="Bridging foundational machine learning research in perceptual quality assessment with modern scalable software architecture and autonomous AI systems."
      />

      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-8 space-y-20">
          {/* Biography & Academic Trajectory */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-8 space-y-6">
              <SectionHeading
                eyebrow="Biography"
                title="Academic Identity & Trajectory"
                className="mb-6"
              />
              <div className="space-y-4 text-base sm:text-lg text-academic-muted leading-relaxed">
                <p>
                  I am a machine learning researcher and software engineer specializing in{" "}
                  <strong className="text-academic-text font-semibold">
                    computer vision, perceptual image/video quality assessment (IQA/VQA)
                  </strong>
                  , and multimodal AI evaluation. I completed my Master of Science in Artificial
                  Intelligence at Kharazmi University under the supervision of Dr. Azadeh Mansouri,
                  graduating with high honors (GPA: 17.21/20).
                </p>
                <p>
                  My research centers on answering fundamental questions in visual perception:{" "}
                  <em>how can computational architectures accurately evaluate visual content without pristine references, and how do feature correlations across deep representations capture subjective human perceptual judgment?</em>{" "}
                  My master’s thesis introduced a novel low-complexity blind video quality framework that
                  earned the <strong className="text-academic-text font-semibold">Best Paper Award at IPRIA 2025</strong> and contributed to the NTIRE 2024 challenge at CVPR Workshops.
                </p>
                <p>
                  In parallel with research, I serve as Frontend Tech Lead and AI Agent Developer at Troweb,
                  engineering autonomous agent workflows (LangGraph, Python) and robust systems. This dual background enables me to transition novel theoretical formulations into clean, high-performance implementations.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="/Erfan-Asadi-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-academic-accent text-white hover:bg-academic-accent-hover transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Academic CV (PDF)</span>
                </a>
                <Link
                  to={`/${currentLanguage}/academic/cv`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-academic-border bg-academic-card text-academic-text hover:bg-academic-soft transition-colors"
                >
                  <FileText className="w-4 h-4 text-academic-muted" />
                  <span>View Online CV</span>
                </Link>
              </div>
            </div>

            {/* Researcher Portrait & Quick Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-xl border border-academic-border bg-academic-card p-4 shadow-xs">
                <img
                  src={erfanPortrait}
                  alt="Erfan Asadi Portrait"
                  className="w-full aspect-[4/5] object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-academic-text text-lg">Erfan Asadi</h3>
                <p className="text-xs font-mono text-academic-accent">M.Sc. Artificial Intelligence</p>
                <p className="text-xs text-academic-muted mt-1">Kharazmi University · University of Guilan</p>

                <div className="mt-4 pt-4 border-t border-academic-border space-y-2 text-xs text-academic-muted font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-academic-accent font-semibold">Location:</span>
                    <span>Tehran, Iran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-academic-accent font-semibold">Focus:</span>
                    <span>Computer Vision & Multimodal AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-academic-accent font-semibold">Status:</span>
                    <span>Prospective PhD Applicant</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-8 pt-8 border-t border-academic-border">
            <SectionHeading
              eyebrow="Academic Qualifications"
              title="Education"
              description="Rigorous academic training in Artificial Intelligence and Computer Engineering."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* M.Sc. */}
              <div className="border border-academic-border rounded-xl p-6 bg-academic-card space-y-4 shadow-xs">
                <div className="flex items-start gap-4">
                  <img
                    src={kharazmiLogoImagePath}
                    alt="Kharazmi University"
                    className="w-12 h-12 object-contain rounded-lg border border-academic-border p-1 bg-white flex-shrink-0"
                  />
                  <div>
                    <span className="text-xs font-mono text-academic-accent bg-academic-soft px-2 py-0.5 rounded border border-academic-border">
                      2020 – 2023
                    </span>
                    <h3 className="text-lg font-bold text-academic-text mt-1.5">
                      Master of Science in Artificial Intelligence
                    </h3>
                    <p className="text-sm font-medium text-academic-muted">Kharazmi University, Tehran, Iran</p>
                  </div>
                </div>

                <div className="text-sm text-academic-muted space-y-2 pt-2 border-t border-academic-border/70">
                  <p>
                    <strong className="text-academic-text font-medium">Thesis:</strong> Low Complexity Blind Video Quality Assessment
                  </p>
                  <p>
                    <strong className="text-academic-text font-medium">Advisor:</strong> Dr. Azadeh Mansouri
                  </p>
                  <p>
                    <strong className="text-academic-text font-medium">GPA:</strong> 17.21 / 20.00
                  </p>
                  <p>
                    <strong className="text-academic-text font-medium">Honors:</strong> Admitted via National Exceptional Talent Scholarship (Tuition-free merit admission)
                  </p>
                </div>
              </div>

              {/* B.Sc. */}
              <div className="border border-academic-border rounded-xl p-6 bg-academic-card space-y-4 shadow-xs">
                <div className="flex items-start gap-4">
                  <img
                    src={guilanLogoImagePath}
                    alt="University of Guilan"
                    className="w-12 h-12 object-contain rounded-lg border border-academic-border p-1 bg-white flex-shrink-0"
                  />
                  <div>
                    <span className="text-xs font-mono text-academic-accent bg-academic-soft px-2 py-0.5 rounded border border-academic-border">
                      2016 – 2020
                    </span>
                    <h3 className="text-lg font-bold text-academic-text mt-1.5">
                      Bachelor of Science in Computer Engineering
                    </h3>
                    <p className="text-sm font-medium text-academic-muted">University of Guilan, Rasht, Iran</p>
                  </div>
                </div>

                <div className="text-sm text-academic-muted space-y-2 pt-2 border-t border-academic-border/70">
                  <p>
                    <strong className="text-academic-text font-medium">Thesis:</strong> Metadata Extraction from Academic Research Papers
                  </p>
                  <p>
                    <strong className="text-academic-text font-medium">GPA:</strong> 17.38 / 20.00
                  </p>
                  <p>
                    <strong className="text-academic-text font-medium">Honors:</strong> Graduated as Outstanding Student (Top-tier standing in cohort)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Research & Teaching Experience */}
          <section className="space-y-8 pt-8 border-t border-academic-border">
            <SectionHeading
              eyebrow="Academic Mentorship"
              title="Teaching & Research Appointments"
              description="Undergraduate and graduate coursework instruction, recitation sessions, and research mentorship."
            />

            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-academic-border bg-academic-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base font-bold text-academic-text">
                    Graduate Teaching Assistant — Deep Learning
                  </h3>
                  <span className="text-xs font-mono text-academic-muted">09/2022 – 06/2024 · Kharazmi University</span>
                </div>
                <p className="text-xs text-academic-accent mb-3">Supervisor: Dr. Azadeh Mansouri</p>
                <p className="text-sm text-academic-muted leading-relaxed">
                  Mentored graduate M.Sc. students through backpropagation mechanics, convolutional neural networks, transformer architectures, PyTorch implementation labs, and loss function derivations. Evaluated final semester research projects.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-academic-border bg-academic-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base font-bold text-academic-text">
                    Undergraduate Teaching Assistant — Design & Analysis of Algorithms
                  </h3>
                  <span className="text-xs font-mono text-academic-muted">09/2018 – 02/2019 · University of Guilan</span>
                </div>
                <p className="text-xs text-academic-accent mb-3">Supervisor: Dr. Mojtaba Shakeri</p>
                <p className="text-sm text-academic-muted leading-relaxed">
                  Conducted weekly problem-solving recitation sessions on asymptotic complexity, dynamic programming, divide-and-conquer strategies, and graph theory algorithms.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-academic-border bg-academic-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base font-bold text-academic-text">
                    Undergraduate Teaching Assistant — Advanced Programming (OOP & Data Structures)
                  </h3>
                  <span className="text-xs font-mono text-academic-muted">09/2017 – 06/2019 · University of Guilan</span>
                </div>
                <p className="text-xs text-academic-accent mb-3">Supervisor: Dr. Seyed Abolghasem Mirroshandel</p>
                <p className="text-sm text-academic-muted leading-relaxed">
                  Supervised laboratory exercises in object-oriented design patterns, memory management, data structures, and algorithmic complexity for cohorts of 80+ engineering students.
                </p>
              </div>
            </div>
          </section>

          {/* Professional Engineering (Restrained) */}
          <section className="space-y-8 pt-8 border-t border-academic-border">
            <SectionHeading
              eyebrow="Engineering Foundation"
              title="Professional Software Experience"
              description="Demonstrating production engineering rigor, distributed systems architecture, and technical leadership."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-academic-border bg-academic-card space-y-3">
                <span className="text-xs font-mono text-academic-accent">2023 – Present</span>
                <h3 className="text-base font-bold text-academic-text">Frontend Tech Lead & AI Developer</h3>
                <p className="text-xs text-academic-muted font-medium">Troweb</p>
                <p className="text-xs text-academic-muted leading-relaxed">
                  Architecting multi-agent data systems using LangChain, LangGraph, and Python. Leading frontend engineering with TypeScript and modern web standards.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-academic-border bg-academic-card space-y-3">
                <span className="text-xs font-mono text-academic-accent">2022 – 2023</span>
                <h3 className="text-base font-bold text-academic-text">Senior Frontend Engineer</h3>
                <p className="text-xs text-academic-muted font-medium">Lernito</p>
                <p className="text-xs text-academic-muted leading-relaxed">
                  Engineered large-scale educational platforms serving thousands of active students with real-time testing, complex state synchronization, and analytics dashboards.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-academic-border bg-academic-card space-y-3">
                <span className="text-xs font-mono text-academic-accent">2021 – 2022</span>
                <h3 className="text-base font-bold text-academic-text">Software Engineer</h3>
                <p className="text-xs text-academic-muted font-medium">DoExam</p>
                <p className="text-xs text-academic-muted leading-relaxed">
                  Developed high-concurrency online examination infrastructure with zero-downtime reliability during national assessment sessions.
                </p>
              </div>
            </div>
          </section>

          {/* Academic References */}
          <section className="space-y-8 pt-8 border-t border-academic-border">
            <SectionHeading
              eyebrow="Scholarly Recommenders"
              title="Academic References"
              description="Professors and research advisors who can speak to my scientific aptitude and academic integrity."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-academic-border bg-academic-card space-y-2">
                <h3 className="font-bold text-academic-text text-base">Dr. Azadeh Mansouri</h3>
                <p className="text-xs text-academic-accent font-medium">Associate Professor</p>
                <p className="text-xs text-academic-muted">Kharazmi University, Tehran, Iran</p>
                <p className="text-xs text-academic-muted pt-2 border-t border-academic-border/70">
                  <em>M.Sc. Thesis Advisor & Co-author (IPRIA 2025 Best Paper, CVPRW 2024)</em>
                </p>
                <a
                  href="mailto:a_mansouri@khu.ac.ir"
                  className="text-xs text-academic-accent hover:underline inline-block font-mono pt-1"
                >
                  a_mansouri@khu.ac.ir
                </a>
              </div>

              <div className="p-6 rounded-xl border border-academic-border bg-academic-card space-y-2">
                <h3 className="font-bold text-academic-text text-base">Dr. Seyed Abolghasem Mirroshandel</h3>
                <p className="text-xs text-academic-accent font-medium">Associate Professor</p>
                <p className="text-xs text-academic-muted">University of Guilan, Rasht, Iran</p>
                <p className="text-xs text-academic-muted pt-2 border-t border-academic-border/70">
                  <em>Undergraduate Professor & TA Supervisor</em>
                </p>
                <a
                  href="mailto:mirroshandel@guilan.ac.ir"
                  className="text-xs text-academic-accent hover:underline inline-block font-mono pt-1"
                >
                  mirroshandel@guilan.ac.ir
                </a>
              </div>

              <div className="p-6 rounded-xl border border-academic-border bg-academic-card space-y-2">
                <h3 className="font-bold text-academic-text text-base">Dr. Mojtaba Shakeri</h3>
                <p className="text-xs text-academic-accent font-medium">Assistant Professor</p>
                <p className="text-xs text-academic-muted">University of Guilan, Rasht, Iran</p>
                <p className="text-xs text-academic-muted pt-2 border-t border-academic-border/70">
                  <em>Undergraduate Professor & Algorithm Design TA Supervisor</em>
                </p>
                <a
                  href="mailto:mojtaba.shakeri@gmail.com"
                  className="text-xs text-academic-accent hover:underline inline-block font-mono pt-1"
                >
                  mojtaba.shakeri@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
