import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLanguageRoute } from "@/hooks/use-language-route";
import { publicationsData } from "@/lib/academic-data";

import AcademicHeroSection from "@/components/AcademicHeroSection";
import NewsSection from "@/components/NewsSection";
import PerceptionVisualizer from "@/components/academic/PerceptionVisualizer";
import SectionHeading from "@/components/academic/SectionHeading";
import ResearchThemeCard, {
  ResearchThemeData,
} from "@/components/academic/ResearchThemeCard";
import FeaturedProjectRow, {
  FeaturedProjectData,
} from "@/components/academic/FeaturedProjectRow";
import PublicationItem from "@/components/academic/PublicationItem";
import Footer from "@/components/Footer";

import lcvqaImage from "@/images/LCVQA.png";

// ─── Research themes ──────────────────────────────────────────────────────────

const researchThemes: ResearchThemeData[] = [
  {
    id: "perceptual-iqa-vqa",
    title: "Perceptual & Semantic Image Quality Assessment",
    maturity: "Established research",
    description:
      "Investigating blind (no-reference) perceptual quality estimation for natural, user-generated, and AI-generated visual content using fine-tuned convolutional feature correlations.",
    iconName: "Eye",
    keywords: ["No-Reference VQA", "Gram Matrix", "LIVE-VQA", "KoNViD-1k"],
  },
  {
    id: "multimodal-agentic-eval",
    title: "Multimodal and Agentic Evaluation",
    maturity: "Emerging direction",
    description:
      "Designing evaluation frameworks for multimodal LLM outputs and autonomous agent trajectories, bridging perceptual quality metrics with language model assessment.",
    iconName: "Layers",
    keywords: ["Multimodal LLMs", "Agent Evaluation", "LangGraph", "AIGC"],
  },
  {
    id: "robust-visual-perception",
    title: "Robust Visual Perception",
    maturity: "Exploratory interest",
    description:
      "Exploring robust visual representations that remain stable under distribution shift, corruptions, and adversarial perturbations across diverse visual recognition tasks.",
    iconName: "Compass",
    keywords: ["Robustness", "Distribution Shift", "Visual Representations"],
  },
];

// ─── Featured research projects ───────────────────────────────────────────────

const lcbvqaProject: FeaturedProjectData = {
  id: "lcbvqa",
  title: "Low Complexity Blind Video Quality Assessment",
  category: "Video Quality Assessment",
  isFlagship: true,
  award: "Best Paper Award · IPRIA 2025",
  image: lcvqaImage,
  imageAlt:
    "LC-BVQA architecture diagram showing fine-tuned feature map correlation",
  caption:
    "Fine-tuned convolutional feature map correlation pipeline for blind VQA",
  problemStatement:
    "Existing blind video quality assessment models are computationally expensive, limiting real-time deployment on user-generated content streams without reference signals.",
  contributionSummary:
    "Introduced a low-complexity framework using fine-tuned intermediate convolutional feature map Gram matrix correlations, achieving competitive performance on LIVE-VQA and KoNViD-1k benchmarks with significantly reduced FLOPs.",
  pdfUrl: undefined,
  codeUrl: "https://github.com/erandow/LC-BVQA",
  projectDetailPath: "/academic/projects/lcbvqa",
};

const ntireProject: FeaturedProjectData = {
  id: "ntire2024",
  title: "NTIRE 2024 Quality Assessment of AI-Generated Content",
  category: "AIGC Evaluation · CVPRW 2024",
  isFlagship: false,
  image:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&h=500",
  imageAlt: "NTIRE 2024 challenge overview for AIGC quality assessment",
  caption:
    "NTIRE 2024 challenge report: quality assessment of AI-generated content",
  problemStatement:
    "AI-generated images and videos lack standardized perceptual quality metrics that can reliably distinguish high-quality outputs from artifacts.",
  contributionSummary:
    "Co-authored the NTIRE 2024 Quality Assessment of AI-Generated Content Challenge report (CVPRW 2024), contributing methods for evaluating generative model outputs across multiple quality dimensions.",
  paperUrl:
    "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/html/Liu_NTIRE_2024_Quality_Assessment_of_AI-Generated_Content_Challenge_CVPRW_2024_paper.html",
  codeUrl: undefined,
  projectDetailPath: "/academic/research",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AcademicPage() {
  const { currentLanguage } = useLanguageRoute();

  useEffect(() => {
    document.title = "Erfan Asadi | AI Researcher & PhD Applicant";
  }, [currentLanguage]);

  return (
    <>
      {/* 1. Hero */}
      <AcademicHeroSection />

      {/* 2. News */}
      <NewsSection />

      {/* 3. Perception Visualizer — flagship interactive demo */}
      <PerceptionVisualizer />

      {/* 4. Research Interests */}
      <section
        id="research-interests"
        className="py-20 md:py-28 bg-academic-bg border-b border-academic-border scroll-mt-16"
      >
        <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
          <SectionHeading
            eyebrow="Research Focus"
            title="Research Interests"
            description="Investigating how intelligent systems perceive, evaluate, and understand visual content — from perceptual quality to multimodal understanding."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchThemes.map((theme) => (
              <ResearchThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Research */}
      <section
        id="selected-research"
        className="py-20 md:py-28 border-b border-academic-border scroll-mt-16"
      >
        <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
          <SectionHeading eyebrow="Selected Work" title="Featured Research" />
          <FeaturedProjectRow project={lcbvqaProject} reverseLayout={false} />
          <FeaturedProjectRow project={ntireProject} reverseLayout={true} />
        </div>
      </section>

      {/* 6. Publications Preview */}
      <section
        id="publications-preview"
        className="py-20 md:py-28 bg-academic-bg border-b border-academic-border scroll-mt-16"
      >
        <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
          <div className="flex items-end justify-between mb-8">
            <SectionHeading
              eyebrow="Academic Record"
              title="Selected Publications"
              className="mb-0"
            />
            <Link
              to={`/${currentLanguage}/academic/publications`}
              className="text-sm text-academic-accent hover:underline inline-flex items-center gap-1 flex-shrink-0"
            >
              All Publications <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-academic-border">
            {publicationsData.map((pub) => (
              <PublicationItem key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. About Preview */}
      <section className="py-20 md:py-28 border-b border-academic-border">
        <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: bio — 7 cols */}
            <div className="lg:col-span-7 space-y-4">
              <SectionHeading
                eyebrow="About"
                title="Research & Engineering"
                className="mb-4"
              />
              <p className="text-base text-academic-muted leading-relaxed">
                I am a researcher and engineer with a Master&apos;s in Artificial
                Intelligence from Kharazmi University, where I investigated
                low-complexity perceptual quality assessment for user-generated
                and AI-generated visual content under Dr. Azadeh Mansouri.
              </p>
              <p className="text-base text-academic-muted leading-relaxed">
                My work bridges visual perception research and production AI
                systems. As Frontend Tech Lead and AI Agent Developer at
                Troweb, I architect multi-agent workflows using LangChain and
                LangGraph while maintaining deep engagement with the research
                literature.
              </p>
              <Link
                to={`/${currentLanguage}/academic/about`}
                className="inline-flex items-center gap-1.5 text-sm text-academic-accent hover:underline font-medium"
              >
                Full biography &amp; CV <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right: credential list — 5 cols */}
            <div className="lg:col-span-5 space-y-4">
              {/* Education card */}
              <div className="p-5 rounded-xl border border-academic-border bg-academic-card space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-academic-muted font-semibold">
                  Education
                </h3>
                <div className="space-y-2.5 text-sm">
                  <div>
                    <p className="font-semibold text-academic-text">
                      M.Sc. Artificial Intelligence
                    </p>
                    <p className="text-academic-muted text-xs">
                      Kharazmi University · 2020–2023 · GPA 17.21/20
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-academic-text">
                      B.Sc. Computer Engineering
                    </p>
                    <p className="text-academic-muted text-xs">
                      University of Guilan · 2016–2020 · GPA 17.38/20
                    </p>
                  </div>
                </div>
              </div>

              {/* Recognition card */}
              <div className="p-5 rounded-xl border border-academic-border bg-academic-card space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-academic-muted font-semibold">
                  Recognition
                </h3>
                <div className="space-y-2 text-sm text-academic-muted">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">★</span>
                    <span>Best Paper Award · IPRIA 2025</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-academic-accent mt-0.5">◆</span>
                    <span>Exceptional Talent Scholarship · M.Sc. Admission</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-academic-accent mt-0.5">◆</span>
                    <span>Outstanding Graduate · University of Guilan 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact */}
      <section
        id="contact"
        className="py-20 md:py-28 bg-academic-soft/30 scroll-mt-16"
      >
        <div className="max-w-[760px] mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-academic-text mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-base sm:text-lg text-academic-muted leading-relaxed mb-8">
            I welcome research conversations, collaboration inquiries, and PhD
            opportunity discussions. The best way to reach me is by email.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:erfan.asadi.ce@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-academic-accent text-white hover:bg-academic-accent-hover transition-colors"
            >
              <Mail className="w-4 h-4" /> Email Erfan
            </a>
            <a
              href="https://github.com/erandow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-academic-border bg-academic-card text-academic-text hover:bg-academic-soft transition-colors"
            >
              <FaGithub className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/erfan-asadi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-academic-border bg-academic-card text-academic-text hover:bg-academic-soft transition-colors"
            >
              <FaLinkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
