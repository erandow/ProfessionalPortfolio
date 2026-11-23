import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Layers, Cpu, Award, Activity, Sparkles, BarChart2, CheckCircle2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface VisualSample {
  id: string;
  name: string;
  dataset: string;
  distortionType: string;
  predictedMos: number;
  groundTruthMos: number;
  srcc: number;
  flops: string;
  speedup: string;
  rawImage: string;
  featureHeatmap: string;
  correlationExplanation: string;
}

export default function PerceptionVisualizer() {
  const [activeSampleId, setActiveSampleId] = useState<string>("live-vqa");
  const [activeLayer, setActiveLayer] = useState<"correlation" | "deep" | "comparison">("correlation");

  const samples: VisualSample[] = [
    {
      id: "live-vqa",
      name: "Natural UGC Distortion",
      dataset: "LIVE-VQA Benchmark",
      distortionType: "Lossy H.264 Compression + Camera Defocus Blur",
      predictedMos: 4.19,
      groundTruthMos: 4.22,
      srcc: 0.846,
      flops: "5.8 GFLOPs",
      speedup: "94% lower FLOPs vs 3D-CNN",
      rawImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=450",
      featureHeatmap: "https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=450",
      correlationExplanation:
        "Low-level feature correlation computes Gram matrices across intermediate convolutional blocks. Fine-tuned on IQA priors, it detects loss of high-frequency edge textures caused by lossy compression artifacts.",
    },
    {
      id: "aigc-cvpr",
      name: "AI-Generated Content Artifacts",
      dataset: "NTIRE 2024 AIGC Challenge (CVPRW)",
      distortionType: "Diffusion Hallucination + Temporal Inconsistency",
      predictedMos: 3.45,
      groundTruthMos: 3.40,
      srcc: 0.812,
      flops: "6.2 GFLOPs",
      speedup: "95% lower FLOPs vs Video Swin",
      rawImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=450",
      featureHeatmap: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=450",
      correlationExplanation:
        "Captures structural warping and unnatural skin textures in AI visual generation without requiring an uncorrupted pristine reference distribution.",
    },
    {
      id: "konvid",
      name: "High-Motion In-The-Wild Video",
      dataset: "KoNViD-1k Dataset",
      distortionType: "Complex Camera Shake + Dynamic Low-Light Noise",
      predictedMos: 2.88,
      groundTruthMos: 2.91,
      srcc: 0.838,
      flops: "6.0 GFLOPs",
      speedup: "93% lower FLOPs vs SlowFast",
      rawImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=450",
      featureHeatmap: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=450",
      correlationExplanation:
        "Couples fine-tuned spatial Gram correlations with simple max-pooling over time, effectively summarizing worst-case degradation frames without temporal convolution bloat.",
    },
  ];

  const currentSample = samples.find((s) => s.id === activeSampleId) || samples[0];

  return (
    <section id="vqa-visualizer" className="py-20 bg-muted/20 border-b border-border/40 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>IPRIA 2025 Best Paper Architecture</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <Eye className="w-3.5 h-3.5" />
              <span>Interactive Model Perception Inspector</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Feature Map Correlation Visualizer (LC-BVQA)
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">
            Explore how our fine-tuned feature correlation approach accurately quantifies perceptual video degradations with 94%+ fewer FLOPs than 3D deep models.
          </p>
        </div>

        {/* Visualizer Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-card border border-border shadow-xl space-y-8">
          
          {/* Dataset Switcher Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
            <div className="flex flex-wrap items-center gap-2">
              {samples.map((s) => (
                <Button
                  key={s.id}
                  size="sm"
                  variant={activeSampleId === s.id ? "default" : "outline"}
                  onClick={() => setActiveSampleId(s.id)}
                  className="text-xs h-8"
                >
                  {s.dataset}
                </Button>
              ))}
            </div>

            <div className="text-xs text-muted-foreground">
              Distortion: <strong className="text-foreground">{currentSample.distortionType}</strong>
            </div>
          </div>

          {/* Side-by-Side Visual Inspection */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 2 Images: Raw Input vs Gram Correlation Map (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Raw Input Video Frame */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                    <span>Input Video Frame</span>
                    <span className="font-mono text-[10px] text-zinc-500">RGB 1080p</span>
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border relative bg-muted">
                    <img
                      src={currentSample.rawImage}
                      alt={currentSample.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] text-white">
                      Raw Distorted Video
                    </div>
                  </div>
                </div>

                {/* Gram Feature Activation Heatmap */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-primary">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Gram Correlation Map
                    </span>
                    <span className="font-mono text-[10px]">Fine-Tuned IQA Prior</span>
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary/40 relative bg-muted shadow-sm">
                    <img
                      src={currentSample.featureHeatmap}
                      alt="Gram Matrix Feature Map"
                      className="w-full h-full object-cover filter contrast-125"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-primary/80 backdrop-blur-xs text-[10px] text-white font-mono">
                      Spatial Correlation
                    </div>
                  </div>
                </div>

              </div>

              {/* Mathematical Formulation Explainer */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border/80 text-xs text-muted-foreground space-y-1.5">
                <div className="flex items-center justify-between font-semibold text-foreground text-xs uppercase tracking-wider">
                  <span>Mathematical Representation</span>
                  <span className="text-[11px] font-mono text-primary">Gram Matrix: G = F · F^T / (C · H · W)</span>
                </div>
                <p className="leading-relaxed">
                  {currentSample.correlationExplanation}
                </p>
              </div>
            </div>

            {/* Right: Quantitative Metrics & FLOPs Benchmark (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-muted/30 border border-border/80 space-y-5">
              <h4 className="font-bold text-base text-foreground flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-primary" />
                Benchmark Performance Metrics
              </h4>

              {/* MOS Score Prediction Comparison */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Predicted MOS Score (LC-BVQA):</span>
                  <span className="font-mono font-bold text-primary text-sm">
                    {currentSample.predictedMos} / 5.00
                  </span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden border border-border/50">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${(currentSample.predictedMos / 5) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Ground Truth Human MOS:</span>
                  <span className="font-mono font-bold text-foreground text-sm">
                    {currentSample.groundTruthMos} / 5.00
                  </span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden border border-border/50">
                  <div
                    className="h-full bg-foreground/60 rounded-full transition-all duration-700"
                    style={{ width: `${(currentSample.groundTruthMos / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Statistical Correlation & Compute Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-card border border-border/60">
                  <span className="text-[11px] text-muted-foreground uppercase font-mono block mb-1">
                    Spearman Rank (SRCC)
                  </span>
                  <span className="text-xl font-extrabold text-emerald-500 font-mono">
                    {currentSample.srcc}
                  </span>
                  <span className="text-[10px] text-muted-foreground block mt-0.5">
                    High Human Alignment
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-card border border-border/60">
                  <span className="text-[11px] text-muted-foreground uppercase font-mono block mb-1">
                    Inference Complexity
                  </span>
                  <span className="text-xl font-extrabold text-primary font-mono">
                    {currentSample.flops}
                  </span>
                  <span className="text-[10px] text-muted-foreground block mt-0.5">
                    {currentSample.speedup}
                  </span>
                </div>
              </div>

              {/* Research Takeaway */}
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p>
                  Demonstrates how lightweight correlation layers extract richer spatial degradation features than monolithic 3D networks.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
