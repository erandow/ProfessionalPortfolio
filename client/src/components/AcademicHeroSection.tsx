import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaOrcid, FaGoogleScholar } from "react-icons/fa6";
import erfanPortrait from "../images/Erfan.jpg";
import { useLanguageRoute } from "@/hooks/use-language-route";
import WelcomeMascot from "@/components/WelcomeMascot";

export default function AcademicHeroSection() {
  const { currentLanguage } = useLanguageRoute();

  return (
    <section className="border-b border-academic-border bg-academic-bg pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: ~65% (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* 1. Research identity eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-academic-accent bg-academic-soft px-3 py-1 rounded-md border border-academic-border">
                AI Researcher · Computer Vision · Multimodal AI
              </span>
            </div>

            {/* 2. Researcher's name & 3. Research-focused headline */}
            <div className="flex items-center gap-4">
              <div className="min-w-0 flex-1 space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-academic-text leading-[1.1]">
                  Erfan Asadi
                </h1>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-academic-accent">
                  Understanding and Evaluating Visual Intelligence
                </p>
              </div>
              <WelcomeMascot className="flex w-16 sm:w-20 lg:hidden" />
            </div>

            {/* 4. Short academic introduction */}
            <p className="text-base sm:text-lg text-academic-muted leading-relaxed max-w-[700px]">
              Exploring how intelligent systems perceive, evaluate, and understand visual content, with a focus on perceptual quality, semantic consistency, and reliable multimodal evaluation. M.Sc. in Artificial Intelligence from Kharazmi University under Dr. Azadeh Mansouri.
            </p>

            {/* 5. Primary actions (max 2 dominant calls to action) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to={`/${currentLanguage}/academic/research`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-academic-accent text-white hover:bg-academic-accent-hover transition-colors shadow-xs"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={`/${currentLanguage}/academic/cv`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-academic-border bg-academic-card text-academic-text hover:bg-academic-soft hover:border-academic-accent/40 transition-colors"
              >
                <FileText className="w-4 h-4 text-academic-muted" />
                <span>View Academic CV</span>
              </Link>
            </div>

            {/* 6. Scholarly profile links */}
            <div className="pt-4 border-t border-academic-border/70">
              <p className="text-xs font-mono uppercase tracking-wider text-academic-muted mb-2.5">
                Scholarly Profiles & Contact
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="mailto:erfan.asadi.ce@gmail.com"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-academic-border bg-academic-card hover:bg-academic-soft text-academic-text hover:text-academic-accent transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/erandow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-academic-border bg-academic-card hover:bg-academic-soft text-academic-text hover:text-academic-accent transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/erfan-asadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-academic-border bg-academic-card hover:bg-academic-soft text-academic-text hover:text-academic-accent transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-academic-border bg-academic-card hover:bg-academic-soft text-academic-text hover:text-academic-accent transition-colors"
                >
                  <FaGoogleScholar className="w-3.5 h-3.5" />
                  <span>Google Scholar</span>
                </a>
                <a
                  href="https://orcid.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-academic-border bg-academic-card hover:bg-academic-soft text-academic-text hover:text-academic-accent transition-colors"
                >
                  <FaOrcid className="w-3.5 h-3.5 text-[#A6CE39]" />
                  <span>ORCID</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: ~35% (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px]">
              <div className="flex items-end gap-3">
                <WelcomeMascot className="hidden w-28 lg:flex" />
                <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-academic-border bg-academic-card p-1.5 shadow-xs">
                  <img
                    src={erfanPortrait}
                    alt="Erfan Asadi - AI Researcher"
                    className="w-full h-auto object-cover rounded-xl"
                    width={320}
                    height={380}
                    loading="eager"
                  />
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-xs font-mono text-academic-muted">
                  M.Sc. AI · Kharazmi University
                </p>
                <p className="text-[11px] text-academic-muted/80">
                  Best Paper Award Winner (IPRIA 2025)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
