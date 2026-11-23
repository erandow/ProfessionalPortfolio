import { useState } from "react";
import { BookOpen, Download, Printer, X, Sparkles, CheckCircle2, ArrowRight, Layers, Eye, Cpu, Bot } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ResearchStatementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResearchStatementModal({ isOpen, onClose }: ResearchStatementModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto bg-background p-6 sm:p-10 border border-border">
        {/* Actions header */}
        <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm sm:text-base">Research Statement & PhD Vision</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" onClick={handlePrint} className="text-xs">
              <Printer className="w-3.5 h-3.5 mr-1" />
              Print Statement
            </Button>
            <Button size="sm" asChild className="text-xs">
              <a href="/Erfan-Asadi-Resume.pdf" download="Erfan-Asadi-CV.pdf">
                <Download className="w-3.5 h-3.5 mr-1" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Statement Body */}
        <div className="space-y-7 text-foreground text-sm leading-relaxed" id="printable-statement">
          {/* Header */}
          <div className="text-center pb-5 border-b border-border/60">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
              Research Statement: Perceptual Visual Modeling & Autonomous AI Systems
            </h1>
            <p className="text-base text-primary font-semibold">
              Erfan Asadi — Prospective PhD Applicant in Computer Science / AI
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Kharazmi University (M.Sc. in AI, Exceptional Talent Scholar) • University of Guilan (B.Sc. in CE)
            </p>
          </div>

          {/* 1. Motivation & Background */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 flex items-center gap-2">
              <Eye className="w-4 h-4 text-primary" />
              1. Motivation & Core Problem Space
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              With the explosion of user-generated content (UGC) on global streaming platforms and the emergence of modern generative models (Text-to-Image and Text-to-Video diffusion architectures), visual content undergoes complex, composite distortions that classical signal-processing metrics fail to model. Traditional full-reference quality metrics (e.g., PSNR, SSIM) assume the availability of an uncorrupted pristine reference, an assumption that collapses completely for UGC and AI-Generated Content (AIGC).
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              My research addresses the fundamental challenge of <strong className="text-foreground">Blind (No-Reference) Video Quality Assessment (BVQA)</strong>: learning robust perceptual representations that correlate with human visual cortex judgment without requiring reference videos, while strictly preserving computational and memory efficiency.
            </p>
          </div>

          {/* 2. Prior Research & Key Contributions */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-500" />
              2. Completed Research & Contributions
            </h2>
            
            <div className="p-4 rounded-xl bg-muted/40 border border-border/70 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm text-foreground">
                  Fine-Tuned Feature Map Correlation in Video Quality Assessment (IPRIA 2025 Best Paper)
                </span>
                <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-[10px]">
                  Best Paper Award
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                In our IPRIA 2025 paper, we demonstrated that computing correlation-based features (Gram matrices) across intermediate convolutional feature maps fine-tuned on perceptual image datasets provides rich representations of subtle spatial distortions. By coupling low-level correlation representations with semantic deep layers and a lightweight max-pooling temporal operation, our approach achieves state-of-the-art Spearman Rank Correlation (SRCC) on LIVE-VQA and KoNViD-1k with a fraction of the FLOPs required by 3D-CNN or Video Transformer baselines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border/70 space-y-2">
              <span className="font-bold text-xs sm:text-sm text-foreground">
                NTIRE 2024 Quality Assessment of AI-Generated Content (CVPR 2024 Workshops)
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Co-authored the benchmark challenge report at CVPR 2024 evaluating perceptual metrics for generative AI video and imagery. Analyzed how generative hallucinations, structural temporal flickering, and synthetic textures present novel degradation modalities that defy conventional natural scene statistics.
              </p>
            </div>
          </div>

          {/* 3. Proposed PhD Research Agenda */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary/30 pb-1 flex items-center gap-2">
              <Bot className="w-4 h-4 text-emerald-500" />
              3. Proposed PhD Research Directions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
                <h4 className="font-bold text-foreground flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Foundation Models as Perceptual Evaluators
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Investigating how vision-language models (VLMs) and multi-modal foundation models can be aligned to produce both quantitative quality scores and verifiable natural-language rationales for perceived visual flaws.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
                <h4 className="font-bold text-foreground flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Self-Supervised Perceptual Representations
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Developing contrastive self-supervised pre-training schemes that learn spatial-temporal distortion invariants directly from unlabeled in-the-wild video streams, circumventing costly subjective MOS annotation bottlenecks.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
                <h4 className="font-bold text-foreground flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Real-Time On-Device Video Quality Perception
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Designing hardware-aware, pruned, and quantized vision models for edge cameras and embedded mobile encoders, providing instantaneous perceptual feedback during live streaming compression.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
                <h4 className="font-bold text-foreground flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Multi-Agent Self-Correction for Vision Pipelines
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Extending autonomous multi-agent graph architectures (LangGraph) to orchestrate specialized computer vision algorithms, enabling autonomous error diagnosis and visual self-refinement.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Target Faculty & Conclusion */}
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2 text-xs">
            <h3 className="font-bold text-foreground text-xs uppercase tracking-wider">
              Academic Alignment & Commitment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I am prepared to dedicate my doctoral journey to rigorous theoretical modeling, reproducible experimental benchmarking, and publishing in premier computer vision and machine learning venues (CVPR, ICCV, ECCV, NeurIPS, ICML). My dual experience as an award-winning researcher and full-stack software lead equips me to immediately contribute to lab infrastructure, mentor junior students, and bridge fundamental research with high-impact software artifacts.
            </p>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
