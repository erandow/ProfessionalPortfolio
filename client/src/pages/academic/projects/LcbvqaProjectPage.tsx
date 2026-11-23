import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, ExternalLink, Download, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import PageHeader from "@/components/academic/PageHeader";
import ReadingLayout, { ReadingColumn, WideBreakout } from "@/components/academic/ReadingLayout";
import TableOfContents, { TOCItem } from "@/components/academic/TableOfContents";
import Footer from "@/components/Footer";
import { useLanguageRoute } from "@/hooks/use-language-route";
import lcvqaImage from "@/images/LCVQA.png";

const tocItems: TOCItem[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "research-problem", title: "Research Problem", level: 2 },
  { id: "motivation", title: "Motivation", level: 2 },
  { id: "methodology", title: "Methodology", level: 2 },
  { id: "experimental-setup", title: "Experimental Setup", level: 2 },
  { id: "results", title: "Results & Findings", level: 2 },
  { id: "limitations", title: "Limitations & Future Work", level: 2 },
  { id: "resources", title: "Resources & Citation", level: 2 },
];

export default function LcbvqaProjectPage() {
  const { currentLanguage } = useLanguageRoute();

  useEffect(() => {
    document.title = "LC-BVQA Case Study | Low Complexity Blind Video Quality Assessment";
  }, []);

  return (
    <div className="min-h-screen bg-academic-bg flex flex-col">
      <PageHeader
        breadcrumbTitle="LC-BVQA"
        eyebrow="Flagship Master's Thesis Project · Video Quality Assessment"
        title="Low Complexity Blind Video Quality Assessment"
        subtitle="Investigating intermediate convolutional feature map correlations to model human perceptual quality judgment with minimal computational overhead."
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30">
            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Best Paper Award · IPRIA 2025
          </span>
          <a
            href="https://github.com/erandow/LC-BVQA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-academic-border bg-academic-card text-academic-text hover:bg-academic-soft transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" /> Source Code (GitHub)
          </a>
          <Link
            to={`/${currentLanguage}/academic/publications`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-academic-border bg-academic-card text-academic-text hover:bg-academic-soft transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-academic-accent" /> Associated Publication
          </Link>
        </div>
      </PageHeader>

      <main className="flex-grow">
        <ReadingLayout sidebar={<TableOfContents items={tocItems} />}>
          {/* Overview */}
          <section id="overview" className="scroll-mt-24 space-y-4">
            <h2 className="text-2xl font-bold text-academic-text">Overview</h2>
            <p className="text-base text-academic-muted leading-relaxed">
              <strong className="text-academic-text font-semibold">LC-BVQA</strong> is a blind (no-reference) video quality assessment framework developed as the core contribution of my Master’s thesis at Kharazmi University under the supervision of <strong className="text-academic-text font-semibold">Dr. Azadeh Mansouri</strong>.
            </p>
            <p className="text-base text-academic-muted leading-relaxed">
              The framework addresses the challenge of quantifying the perceptual visual quality of user-generated content (UGC) and compressed streams where no pristine reference signal exists. By capturing second-order spatial statistics across intermediate convolutional feature maps, LC-BVQA achieves high correlation with human subjective scores while drastically cutting FLOP counts compared to heavy transformer-based baselines.
            </p>
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 text-sm text-academic-muted flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-academic-text text-xs uppercase tracking-wider font-mono">Academic Distinction</p>
                <p className="mt-0.5">
                  The peer-reviewed paper describing this framework, <em>"The Role of Fine-Tuned Feature Map Correlation in Video Quality Assessment"</em>, was recognized with the <strong>Best Paper Award</strong> at the 7th International Conference on Pattern Recognition and Image Analysis (IPRIA 2025).
                </p>
              </div>
            </div>
          </section>

          {/* Research Figure */}
          <div className="my-10 -mx-4 sm:-mx-6 lg:-mx-12">
            <div className="rounded-xl border border-academic-border bg-academic-card p-3 sm:p-4 shadow-xs">
              <img
                src={lcvqaImage}
                alt="LC-BVQA Architectural Pipeline"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
            <p className="mt-2 text-xs text-academic-muted italic text-center px-2">
              Figure 1: Architectural diagram of LC-BVQA. Intermediate convolutional features from a fine-tuned backbone are pooled via normalized Gram matrix correlations and mapped to human perceptual quality scores.
            </p>
          </div>

          {/* Research Problem */}
          <section id="research-problem" className="scroll-mt-24 space-y-4 pt-6 border-t border-academic-border">
            <h2 className="text-2xl font-bold text-academic-text">Research Problem</h2>
            <p className="text-base text-academic-muted leading-relaxed">
              In real-world visual media pipelines (social media uploads, video streaming platforms, videoconferencing), reference videos are never available. Blind Video Quality Assessment (BVQA) algorithms must deduce perceived visual fidelity strictly from the received degraded signal.
            </p>
            <p className="text-base text-academic-muted leading-relaxed">
              However, state-of-the-art deep BVQA models typically rely on massive 3D-CNNs or spatio-temporal video transformers. These architectures impose prohibitive memory and compute footprints (hundreds of GFLOPs per second of video), making real-time edge processing, live-stream monitoring, and mobile inference impossible.
            </p>
          </section>

          {/* Motivation */}
          <section id="motivation" className="scroll-mt-24 space-y-4 pt-6 border-t border-academic-border">
            <h2 className="text-2xl font-bold text-academic-text">Motivation</h2>
            <p className="text-base text-academic-muted leading-relaxed">
              Human visual perception does not analyze videos by exhaustively computing pixel-level differences; instead, the Human Visual System (HVS) responds to statistical regularities, structural degradation, and texture coherence across visual scales.
            </p>
            <p className="text-base text-academic-muted leading-relaxed">
              Gram matrices—which compute correlations between filter activations across spatial dimensions—have long served in neural style transfer as potent descriptors of texture and structural statistics. We hypothesized that <strong className="text-academic-text font-semibold">fine-tuning intermediate convolutional layers to retain perceptual quality representations</strong> allows Gram matrices to act as ultra-compact, highly discriminative distortion descriptors.
            </p>
          </section>

          {/* Methodology */}
          <section id="methodology" className="scroll-mt-24 space-y-4 pt-6 border-t border-academic-border">
            <h2 className="text-2xl font-bold text-academic-text">Methodology</h2>
            <p className="text-base text-academic-muted leading-relaxed">
              The LC-BVQA methodology consists of four coordinated stages designed to preserve representational fidelity while minimizing FLOP consumption:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl border border-academic-border bg-academic-card space-y-1">
                <span className="text-xs font-mono font-semibold text-academic-accent">Stage 1 · Fine-Tuned Backbone</span>
                <p className="text-sm text-academic-muted leading-relaxed">
                  A lightweight convolutional backbone (ResNet/VGG variants) is fine-tuned on quality-discriminative datasets to align internal filter activations with human subjective perceptual loss rather than object categorization.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-academic-border bg-academic-card space-y-1">
                <span className="text-xs font-mono font-semibold text-academic-accent">Stage 2 · Feature Map Gram Correlation</span>
                <p className="text-sm text-academic-muted leading-relaxed">
                  For selected intermediate layers, we compute spatial Gram matrices capturing channel-wise co-occurrences. This condenses 2D spatial feature maps into compact 1D statistical vectors that reflect structural fidelity.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-academic-border bg-academic-card space-y-1">
                <span className="text-xs font-mono font-semibold text-academic-accent">Stage 3 · Efficient Temporal Pooling</span>
                <p className="text-sm text-academic-muted leading-relaxed">
                  Instead of continuous 3D convolutions across all frames, we employ a temporally sparse keyframe sampling strategy combined with statistical moment pooling across the temporal dimension.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-academic-border bg-academic-card space-y-1">
                <span className="text-xs font-mono font-semibold text-academic-accent">Stage 4 · Quality Regression</span>
                <p className="text-sm text-academic-muted leading-relaxed">
                  A compact regression head maps concatenated Gram statistical vectors directly to continuous Mean Opinion Scores (MOS).
                </p>
              </div>
            </div>
          </section>

          {/* Experimental Setup */}
          <section id="experimental-setup" className="scroll-mt-24 space-y-4 pt-6 border-t border-academic-border">
            <h2 className="text-2xl font-bold text-academic-text">Experimental Setup</h2>
            <p className="text-base text-academic-muted leading-relaxed">
              The model was rigorously validated across benchmark user-generated content (UGC) datasets under standardized evaluation protocols:
            </p>
            <div className="overflow-x-auto my-4 border border-academic-border rounded-xl bg-academic-card">
              <table className="w-full text-sm text-left">
                <thead className="bg-academic-soft/50 border-b border-academic-border font-mono text-xs uppercase text-academic-text">
                  <tr>
                    <th className="px-4 py-3">Dataset</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Video Count</th>
                    <th className="px-4 py-3">Evaluation Metrics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-academic-border text-academic-muted">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-academic-text">KoNViD-1k</td>
                    <td className="px-4 py-3">In-the-wild UGC</td>
                    <td className="px-4 py-3 font-mono">1,200 videos</td>
                    <td className="px-4 py-3">SRCC, PLCC</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-academic-text">LIVE-VQA</td>
                    <td className="px-4 py-3">Distorted Natural Videos</td>
                    <td className="px-4 py-3 font-mono">585 videos</td>
                    <td className="px-4 py-3">SRCC, PLCC</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-academic-muted font-mono">
              Metrics: Spearman's Rank Order Correlation Coefficient (SRCC) and Pearson Linear Correlation Coefficient (PLCC) against human MOS ground truth.
            </p>
          </section>

          {/* Results & Findings */}
          <section id="results" className="scroll-mt-24 space-y-4 pt-6 border-t border-academic-border">
            <h2 className="text-2xl font-bold text-academic-text">Results & Scientific Findings</h2>
            <p className="text-base text-academic-muted leading-relaxed">
              Experimental evaluations yielded several key scientific insights:
            </p>
            <ul className="space-y-2 text-base text-academic-muted leading-relaxed list-disc list-inside">
              <li>
                <strong className="text-academic-text font-semibold">Mid-level feature superiority:</strong> Intermediate convolutional layers yield substantially higher perceptual correlation than the final classification layer, confirming that mid-level textural statistics are more aligned with perceptual quality than high-level semantic categories.
              </li>
              <li>
                <strong className="text-academic-text font-semibold">Drastic complexity reduction:</strong> LC-BVQA achieves competitive SRCC/PLCC performance against high-capacity models while drastically reducing inference latency and FLOP requirements.
              </li>
              <li>
                <strong className="text-academic-text font-semibold">Cross-dataset stability:</strong> The learned representation exhibits consistent generalization behavior when trained on natural UGC and tested across diverse distortion profiles.
              </li>
            </ul>
          </section>

          {/* Limitations */}
          <section id="limitations" className="scroll-mt-24 space-y-4 pt-6 border-t border-academic-border">
            <h2 className="text-2xl font-bold text-academic-text">Limitations & Future Work</h2>
            <div className="space-y-3 text-base text-academic-muted leading-relaxed">
              <p>
                While LC-BVQA offers substantial computational advantages for natural UGC, several directions remain open for exploration:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-academic-text font-semibold">Generative AI Content:</strong> Evaluation on synthetic, diffusion-generated videos (AIGC) introduces non-standard spatial artifacts (such as temporal flickering and hallucinated geometry) that may require adapting layer selections.
                </li>
                <li>
                  <strong className="text-academic-text font-semibold">Attention Map Correlation:</strong> Extending Gram correlation formulation to self-attention maps in Vision Transformers (ViTs) to capture long-range semantic consistency.
                </li>
              </ul>
            </div>
          </section>

          {/* Resources */}
          <section id="resources" className="scroll-mt-24 space-y-4 pt-6 border-t border-academic-border">
            <h2 className="text-2xl font-bold text-academic-text">Resources & Citation</h2>
            <div className="p-6 rounded-xl border border-academic-border bg-academic-card space-y-4">
              <p className="text-sm text-academic-muted leading-relaxed">
                Source code, PyTorch models, and inference scripts are maintained in the public repository:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/erandow/LC-BVQA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-academic-accent text-white hover:bg-academic-accent-hover transition-colors shadow-xs"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <Link
                  to={`/${currentLanguage}/academic/publications`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-academic-border bg-academic-card text-academic-text hover:bg-academic-soft transition-colors"
                >
                  <FileText className="w-4 h-4 text-academic-muted" />
                  <span>View BibTeX Citation</span>
                </Link>
              </div>
            </div>
          </section>
        </ReadingLayout>
      </main>

      <Footer />
    </div>
  );
}
