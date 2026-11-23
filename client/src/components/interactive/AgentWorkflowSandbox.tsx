import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Play,
  RotateCcw,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Database,
  Code2,
  Terminal,
  Activity,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AgentNode {
  id: string;
  name: string;
  role: string;
  icon: any;
  color: string;
  outputSummary: string;
  codeSnippet: string;
}

export default function AgentWorkflowSandbox() {
  const [activeWorkflow, setActiveWorkflow] = useState<"troweb" | "vqa" | "scale">("troweb");
  const [isRunning, setIsRunning] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([]);
  const [tokensCount, setTokensCount] = useState<number>(0);
  const [executionTime, setExecutionTime] = useState<number>(0);

  const workflows = {
    troweb: {
      title: "Enterprise Multi-Agent Data Workspace (Troweb Architecture)",
      description: "Stateful LangGraph workflow coordinating specialized subagents to query multi-table schemas, execute sandboxed Python code, and generate verified data insights.",
      nodes: [
        {
          id: "supervisor",
          name: "Supervisor Planner",
          role: "Task Decomposition & Routing",
          icon: Bot,
          color: "text-blue-500 border-blue-500/30 bg-blue-500/10",
          outputSummary: "Parsed query: decomposed into schema retrieval + Python computation steps.",
          codeSnippet: `// LangGraph Supervisor Node
def supervisor_node(state: AgentState):
    plan = planner_llm.invoke(state.user_query)
    return {"plan": plan, "next_agent": "sql_agent"}`,
        },
        {
          id: "tool_agent",
          name: "Schema & Tool Agent",
          role: "Data Extraction & Filtering",
          icon: Database,
          color: "text-amber-500 border-amber-500/30 bg-amber-500/10",
          outputSummary: "Extracted 12,400 tabular records across MongoDB and Postgres in 34ms.",
          codeSnippet: `// Tool Calling Execution
async def execute_query(filters: dict):
    records = await db.collections.aggregate(pipeline).toArray()
    return {"raw_data": records}`,
        },
        {
          id: "code_executor",
          name: "Sandboxed Python Executor",
          role: "Correlation & Statistical Inference",
          icon: Code2,
          color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
          outputSummary: "Executed Pandas correlation matrix. Identified 0.89 Pearson feature correlation.",
          codeSnippet: `// Sandboxed Python Execution
import pandas as pd
df = pd.DataFrame(raw_data)
corr = df[['latency', 'load']].corr()`,
        },
        {
          id: "evaluator",
          name: "Self-Correction Evaluator",
          role: "Hallucination Check & Schema Validation",
          icon: CheckCircle2,
          color: "text-purple-500 border-purple-500/30 bg-purple-500/10",
          outputSummary: "Verified numbers against raw table invariants. Zero hallucinations detected.",
          codeSnippet: `// Self-Correction Loop
def evaluate_output(state):
    if not verify_ground_truth(state.output, state.raw_data):
        return "re_execute"
    return "finalize"`,
        },
        {
          id: "vllm_node",
          name: "vLLM Synthesis Node",
          role: "High-Throughput Streaming Delivery",
          icon: Zap,
          color: "text-indigo-500 border-indigo-500/30 bg-indigo-500/10",
          outputSummary: "Synthesized executive summary and markdown charts with 72 tokens/sec streaming.",
          codeSnippet: `// vLLM Local Engine
async for chunk in vllm_client.generate(prompt):
    yield sse_event(chunk)`,
        },
      ],
    },
    vqa: {
      title: "Low-Complexity Video Perception Pipeline (LC-BVQA)",
      description: "Deep perception pipeline computing fine-tuned multi-layer Gram matrix correlations and spatial features for real-time video quality prediction.",
      nodes: [
        {
          id: "decoder",
          name: "CUDA Video Decoder",
          role: "Hardware-Accelerated Frame Extraction",
          icon: Cpu,
          color: "text-amber-500 border-amber-500/30 bg-amber-500/10",
          outputSummary: "Extracted 60fps YUV frames to GPU VRAM using hardware decoders in 11ms.",
          codeSnippet: `// PyTorch & CUDA Video Tensor Loading
frames = nvdec.decode_to_tensor(video_path, device="cuda:0")`,
        },
        {
          id: "gram_extractor",
          name: "Feature Correlation Layer",
          role: "Gram Matrix Spatial Degradation Analysis",
          icon: Layers,
          color: "text-blue-500 border-blue-500/30 bg-blue-500/10",
          outputSummary: "Computed feature map correlations across intermediate conv stages.",
          codeSnippet: `// Multi-layer Gram Matrix Correlation
def gram_matrix(features):
    b, c, h, w = features.size()
    f = features.view(b, c, h * w)
    return torch.bmm(f, f.transpose(1, 2)) / (c * h * w)`,
        },
        {
          id: "temporal_pooler",
          name: "Max-Pooling Temporal Reducer",
          role: "Low-FLOP Temporal Distortion Reduction",
          icon: Activity,
          color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
          outputSummary: "Reduced temporal dimensions via max-pooling with 90% less FLOPs than 3D CNNs.",
          codeSnippet: `// Low-FLOP Temporal Aggregation
temporal_features = torch.max(frame_features, dim=1)[0]`,
        },
        {
          id: "svr_regressor",
          name: "SVR Perceptual Predictor",
          role: "Continuous MOS Score Prediction",
          icon: CheckCircle2,
          color: "text-purple-500 border-purple-500/30 bg-purple-500/10",
          outputSummary: "Predicted Mean Opinion Score (MOS): 4.42 / 5.00 with SRCC 0.84 on LIVE-VQA.",
          codeSnippet: `// Perceptual MOS Prediction
predicted_score = svr_model.predict(features)`,
        },
      ],
    },
    scale: {
      title: "500k-User Resilient Synchronization Engine (DoExam)",
      description: "Distributed frontend synchronization handling peak concurrency, optimistic mutations, and resilient recovery under network drops.",
      nodes: [
        {
          id: "optimistic_client",
          name: "Optimistic Mutation Layer",
          role: "Instant Zero-Latency User Action",
          icon: Zap,
          color: "text-blue-500 border-blue-500/30 bg-blue-500/10",
          outputSummary: "Rendered student response instantly in 0ms with local IndexedDB journaling.",
          codeSnippet: `// Optimistic Mutation Commit
await indexedDB.journal.put({ questionId, answer, timestamp: Date.now() });
updateUIOptimistically(questionId, answer);`,
        },
        {
          id: "ws_multiplexer",
          name: "WebSocket Connection Pool",
          role: "Multiplexed Batch Transmission",
          icon: Activity,
          color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
          outputSummary: "Bundled 50 submissions into single compressed frame; 500k active sessions pooled.",
          codeSnippet: `// Connection Multiplexer & Heartbeat
wsPool.sendBatch(compressedDeltas);`,
        },
        {
          id: "quorum_ack",
          name: "Quorum ACK & Verification",
          role: "Zero-Data-Loss Guarantee",
          icon: CheckCircle2,
          color: "text-purple-500 border-purple-500/30 bg-purple-500/10",
          outputSummary: "Confirmed distributed write acknowledgment across server replicas.",
          codeSnippet: `// Distributed ACK Verification
onServerAck((ackId) => indexedDB.journal.markCommitted(ackId));`,
        },
      ],
    },
  };

  const currentNodes = workflows[activeWorkflow].nodes;

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveNodeIndex(0);
    setLogs([`[0.00s] Initializing ${workflows[activeWorkflow].title}...`]);
    setTokensCount(12);
    setExecutionTime(12);

    currentNodes.forEach((node, idx) => {
      setTimeout(() => {
        setActiveNodeIndex(idx);
        setLogs((prev) => [
          ...prev,
          `[+${((idx + 1) * 0.35).toFixed(2)}s] Node [${node.name}] active: ${node.outputSummary}`,
        ]);
        setTokensCount((prev) => prev + Math.floor(Math.random() * 65 + 40));
        setExecutionTime((prev) => prev + Math.floor(Math.random() * 25 + 15));

        if (idx === currentNodes.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
            setLogs((prev) => [
              ...prev,
              `[SUCCESS] Workflow execution complete. All state constraints verified.`,
            ]);
          }, 600);
        }
      }, (idx + 1) * 750);
    });
  };

  const handleReset = () => {
    setIsRunning(false);
    setActiveNodeIndex(-1);
    setLogs([]);
    setTokensCount(0);
    setExecutionTime(0);
  };

  return (
    <section id="agent-sandbox" className="py-20 bg-muted/30 border-b border-border/40 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>Interactive Engineering Playground</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Live Architecture & Agent Sandbox
            </h2>
            <p className="text-base text-muted-foreground mt-2">
              Test and visualize the stateful multi-agent workflows, perception pipelines, and high-concurrency protocols I design for production.
            </p>
          </div>

          {/* Workflow Selector Buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
            <Button
              size="sm"
              variant={activeWorkflow === "troweb" ? "default" : "outline"}
              onClick={() => {
                handleReset();
                setActiveWorkflow("troweb");
              }}
              className="text-xs h-8"
            >
              LangGraph Multi-Agent
            </Button>
            <Button
              size="sm"
              variant={activeWorkflow === "vqa" ? "default" : "outline"}
              onClick={() => {
                handleReset();
                setActiveWorkflow("vqa");
              }}
              className="text-xs h-8"
            >
              CUDA / VQA Pipeline
            </Button>
            <Button
              size="sm"
              variant={activeWorkflow === "scale" ? "default" : "outline"}
              onClick={() => {
                handleReset();
                setActiveWorkflow("scale");
              }}
              className="text-xs h-8"
            >
              500k Scale Sync
            </Button>
          </div>
        </div>

        {/* Sandbox Console Container */}
        <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
          
          {/* Top Bar with Run Controls & Live Metrics */}
          <div className="p-4 sm:p-5 border-b border-border bg-muted/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="text-xs font-semibold gap-1.5 h-8 px-4 shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                {isRunning ? "Executing Graph..." : "Run Live Simulation"}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleReset}
                disabled={isRunning}
                className="text-xs h-8 px-2 text-muted-foreground"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Live Metrics Counters */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Tokens Streamed:</span>
                <span className="font-bold text-primary">{tokensCount}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Pipeline Latency:</span>
                <span className="font-bold text-emerald-500">{executionTime}ms</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="text-muted-foreground">Status:</span>
                <span className={`font-semibold ${isRunning ? "text-amber-500 animate-pulse" : "text-muted-foreground"}`}>
                  {isRunning ? "PROCESSING" : activeNodeIndex >= 0 ? "RESOLVED" : "READY"}
                </span>
              </div>
            </div>
          </div>

          {/* Workflow Diagram & Node Progression */}
          <div className="p-6 sm:p-8 border-b border-border/60">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground">
                <span className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
                  Stateful Graph Nodes (Sequential & Self-Correcting Execution)
                </span>
                <span>Click 'Run Live Simulation' to inspect dynamic state transitions</span>
              </div>

              {/* Node Sequence Chain */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                {currentNodes.map((node, index) => {
                  const Icon = node.icon;
                  const isActive = activeNodeIndex === index;
                  const isCompleted = activeNodeIndex > index;

                  return (
                    <div
                      key={node.id}
                      className={`p-4 rounded-xl border transition-all relative ${
                        isActive
                          ? `${node.color} ring-2 ring-primary shadow-md scale-[1.02]`
                          : isCompleted
                          ? "bg-muted/60 border-emerald-500/40 text-foreground"
                          : "bg-muted/20 border-border text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-1.5 rounded-lg ${isActive ? "bg-primary text-white" : "bg-muted"}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono">
                          {isCompleted ? "DONE" : isActive ? "ACTIVE" : `STEP ${index + 1}`}
                        </span>
                      </div>

                      <h4 className="font-bold text-xs sm:text-sm text-foreground leading-snug">
                        {node.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {node.role}
                      </p>

                      {/* Active Pulse Bar */}
                      {isActive && (
                        <div className="w-full bg-primary/20 h-1 rounded-full mt-2 overflow-hidden">
                          <div className="h-full bg-primary animate-pulse w-full" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live Step Inspector & Output Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-black/85 text-emerald-400 font-mono text-xs">
            {/* Terminal Live Event Stream (7 cols) */}
            <div className="lg:col-span-7 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-zinc-800 space-y-2 max-h-64 overflow-y-auto">
              <div className="flex items-center gap-2 text-zinc-400 text-[11px] uppercase tracking-wider pb-1 border-b border-zinc-800">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Execution Event Stream</span>
              </div>

              {logs.length === 0 ? (
                <p className="text-zinc-500 italic py-4">
                  Awaiting execution. Press "Run Live Simulation" to start the pipeline.
                </p>
              ) : (
                logs.map((log, lIdx) => (
                  <p key={lIdx} className="leading-relaxed">
                    <span className="text-zinc-500 mr-2">{">"}</span>
                    {log}
                  </p>
                ))
              )}
            </div>

            {/* Current Active Node Code Snippet (5 cols) */}
            <div className="lg:col-span-5 p-4 sm:p-6 space-y-2 max-h-64 overflow-y-auto bg-zinc-950/80">
              <div className="flex items-center justify-between text-zinc-400 text-[11px] uppercase tracking-wider pb-1 border-b border-zinc-800">
                <span>Node Implementation</span>
                <span className="text-primary text-[10px]">
                  {activeNodeIndex >= 0 ? currentNodes[activeNodeIndex].name : "IDLE"}
                </span>
              </div>

              <pre className="text-zinc-300 text-[11px] leading-relaxed pt-1 overflow-x-auto">
                <code>
                  {activeNodeIndex >= 0
                    ? currentNodes[activeNodeIndex].codeSnippet
                    : currentNodes[0].codeSnippet}
                </code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
