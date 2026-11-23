import { Link } from "react-router-dom";
import { useLanguageRoute } from "@/hooks/use-language-route";
import PageHeader from "@/components/academic/PageHeader";
import Footer from "@/components/Footer";
import { ArrowRight, Eye, Bot, Scan } from "lucide-react";

// ─── Research Context Panel ──────────────────────────────────────────────────

function ContextPanel({
  keywords,
  publicationsHref,
}: {
  keywords: string[];
  publicationsHref: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-academic-border bg-academic-card space-y-4 sticky top-24">
      <h3 className="text-xs font-mono uppercase tracking-wider text-academic-muted">
        Key Concepts
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {keywords.map((k) => (
          <span
            key={k}
            className="text-[11px] px-2 py-0.5 rounded border border-academic-border bg-academic-soft text-academic-muted font-mono"
          >
            {k}
          </span>
        ))}
      </div>
      <div className="pt-3 border-t border-academic-border">
        <Link
          to={publicationsHref}
          className="text-xs text-academic-accent hover:underline inline-flex items-center gap-1"
        >
          View related publications <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

// ─── Sub-section block ───────────────────────────────────────────────────────

function SubSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-mono uppercase tracking-wider text-academic-muted">
        {label}
      </p>
      <div className="text-sm sm:text-base text-academic-muted leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// ─── Open Questions ──────────────────────────────────────────────────────────

function OpenQuestions({ questions }: { questions: string[] }) {
  return (
    <div className="p-4 rounded-lg border border-academic-border bg-academic-soft/40 space-y-2">
      <p className="text-xs font-mono uppercase tracking-wider text-academic-muted">
        Open Questions
      </p>
      <ul className="space-y-1.5">
        {questions.map((q, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-academic-muted">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-academic-accent flex-shrink-0" />
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function ResearchPage() {
  const { currentLanguage } = useLanguageRoute();
  const pubsHref = `/${currentLanguage}/academic/publications`;

  return (
    <>
      <PageHeader
        breadcrumbTitle="Research"
        eyebrow="Scientific Direction"
        title="Research"
        subtitle="My research investigates how computational systems can perceive, evaluate, and understand visual content in ways that align with human perception."
      />

      <main className="bg-academic-bg">
        {/* Overview */}
        <div className="max-w-[1160px] mx-auto px-6 sm:px-8 py-14 md:py-20 border-b border-academic-border">
          <div className="max-w-[760px]">
            <p className="text-base sm:text-lg text-academic-muted leading-relaxed">
              My research investigates how computational systems can perceive, evaluate, and
              understand visual content in ways that align with human perception. This work
              spans three interconnected themes: established methods in perceptual quality
              assessment, an emerging focus on multimodal and agentic evaluation, and
              exploratory interests in robust real-world visual perception.
            </p>
          </div>
        </div>

        {/* ── Theme A: Perceptual & Semantic IQA ─────────────────────────── */}
        <section
          id="perceptual-iqa"
          className="py-20 md:py-28 border-b border-academic-border scroll-mt-16"
        >
          <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Text: 7 cols */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="font-mono text-xs text-academic-muted uppercase tracking-wider flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5" />
                    Established Research
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-academic-text mt-2 leading-tight">
                    Perceptual &amp; Semantic Image Quality Assessment
                  </h2>
                </div>

                <SubSection label="Motivation">
                  Perceptual image quality metrics must model human visual experience, not
                  just pixel-level differences. The goal is to build metrics that predict
                  how humans perceive quality, distortion, and aesthetics.
                </SubSection>

                <SubSection label="Problem">
                  Blind (no-reference) quality assessment for user-generated content and
                  AI-generated images lacks robust perceptual grounding. Existing methods
                  either overfit to synthetic distortions or fail on in-the-wild content.
                </SubSection>

                <SubSection label="Methods">
                  Gram matrix feature correlations, fine-tuned ResNet/VGG convolutional
                  features, temporal max-pooling for video sequences, and support vector
                  regression for quality score prediction.
                </SubSection>

                <SubSection label="Experience">
                  M.Sc. thesis at Kharazmi University; Best Paper at IPRIA 2025; CVPRW
                  2024 contribution (NTIRE challenge). Representative work: LC-BVQA.
                </SubSection>

                <OpenQuestions
                  questions={[
                    "Can transformer attention maps replace Gram matrices as low-level perceptual features?",
                    "How do we evaluate quality for video diffusion model outputs?",
                  ]}
                />
              </div>

              {/* Visual: 5 cols */}
              <div className="lg:col-span-5">
                <ContextPanel
                  keywords={[
                    "No-Reference VQA",
                    "Gram Matrix Correlation",
                    "LIVE-VQA",
                    "KoNViD-1k",
                    "Perceptual Metrics",
                    "LC-BVQA",
                    "ResNet / VGG",
                    "Temporal Pooling",
                  ]}
                  publicationsHref={pubsHref}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Theme B: Multimodal and Agentic Evaluation ─────────────────── */}
        <section
          id="multimodal-eval"
          className="py-20 md:py-28 border-b border-academic-border scroll-mt-16"
        >
          <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Visual: 5 cols (left on desktop) */}
              <div className="lg:col-span-5 lg:order-1 order-2">
                <ContextPanel
                  keywords={[
                    "LLM-as-Judge",
                    "Multimodal LLMs",
                    "Vision-Language Alignment",
                    "Agentic Feedback",
                    "Semantic Consistency",
                    "Instruction Following",
                  ]}
                  publicationsHref={pubsHref}
                />
              </div>

              {/* Text: 7 cols (right on desktop) */}
              <div className="lg:col-span-7 lg:order-2 order-1 space-y-6">
                <div>
                  <span className="font-mono text-xs text-academic-muted uppercase tracking-wider flex items-center gap-2">
                    <Bot className="w-3.5 h-3.5" />
                    Emerging Direction
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-academic-text mt-2 leading-tight">
                    Multimodal and Agentic Evaluation
                  </h2>
                </div>

                <SubSection label="Motivation">
                  LLM-based vision models require evaluation beyond pixel quality —
                  semantic consistency, instruction-following, and factual grounding are
                  critical for assessing modern generative systems.
                </SubSection>

                <SubSection label="Problem">
                  Existing IQA metrics do not capture semantic accuracy in multimodal
                  generation. We lack reliable, hallucination-resistant evaluators for
                  vision-language outputs.
                </SubSection>

                <SubSection label="Interest &amp; Methods">
                  MLLMs as evaluators, agentic feedback loops for quality improvement,
                  LLM-as-judge frameworks, and vision-language alignment metrics.
                </SubSection>

                <OpenQuestions
                  questions={[
                    "When does an MLLM evaluator hallucinate quality scores?",
                    "Can agents iteratively improve generated visual content through feedback loops?",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Theme C: Robust Visual Perception ──────────────────────────── */}
        <section
          id="visual-perception"
          className="py-20 md:py-28 scroll-mt-16"
        >
          <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Text: 7 cols */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="font-mono text-xs text-academic-muted uppercase tracking-wider flex items-center gap-2">
                    <Scan className="w-3.5 h-3.5" />
                    Exploratory Interest
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-academic-text mt-2 leading-tight">
                    Robust Visual Perception
                  </h2>
                </div>

                <SubSection label="Motivation">
                  Real-world vision systems encounter distribution shifts, adversarial
                  perturbations, and low-quality inputs. Building systems that remain
                  reliable under these conditions is essential for deployment.
                </SubSection>

                <SubSection label="Problem">
                  Most vision models are brittle to domain shift and degradations outside
                  training distributions, limiting their real-world applicability.
                </SubSection>

                <SubSection label="Methods (Exploratory)">
                  To be determined — interested in domain adaptation, robustness
                  benchmarks, and perceptual alignment under distribution shift.
                </SubSection>

                <OpenQuestions
                  questions={[
                    "How does perceptual quality degradation affect downstream vision task accuracy?",
                    "Can quality-aware training improve model robustness to domain shift?",
                  ]}
                />
              </div>

              {/* Visual: 5 cols */}
              <div className="lg:col-span-5">
                <ContextPanel
                  keywords={[
                    "Domain Adaptation",
                    "Distribution Shift",
                    "Robustness",
                    "Perceptual Alignment",
                    "Adversarial Perturbations",
                    "Benchmarking",
                  ]}
                  publicationsHref={pubsHref}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
