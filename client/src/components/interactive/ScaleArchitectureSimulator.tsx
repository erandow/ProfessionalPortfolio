import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Activity, Server, Database, ShieldCheck, Users, Layers, Cpu, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ScaleArchitectureSimulator() {
  const [concurrency, setConcurrency] = useState<number>(350000);

  // Derived telemetry metrics based on concurrency
  const latency = Math.max(28, Math.round(28 + (concurrency / 500000) * 26)); // 28ms to 54ms
  const wsConnections = Math.round(concurrency / 40); // Multiplexed pool
  const cacheHitRatio = (99.4 - (concurrency / 500000) * 0.5).toFixed(1);
  const throughput = Math.round((concurrency * 1.8) / 1000); // k req/sec

  return (
    <section id="scale-simulator" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3 border border-blue-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>High-Concurrency Scale Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            500k Concurrent Users System Simulator
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            Interactive demonstration of the resilient client architecture I built at DoExam to guarantee zero dropped exam submissions across nationwide 500,000-student sessions.
          </p>
        </div>

        {/* Simulator Dashboard */}
        <div className="p-6 sm:p-10 rounded-3xl bg-card border border-border shadow-xl space-y-8">
          
          {/* Slider Control Bar */}
          <div className="p-6 rounded-2xl bg-muted/40 border border-border/80 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <label htmlFor="concurrency-slider" className="font-bold text-sm sm:text-base text-foreground">
                  Simulated Concurrent Active Students
                </label>
                <p className="text-xs text-muted-foreground">
                  Drag the slider to test system responsiveness and throughput adaptations.
                </p>
              </div>
              <div className="text-right">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-primary">
                  {concurrency.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground ml-1">users</span>
              </div>
            </div>

            <input
              id="concurrency-slider"
              type="range"
              min={10000}
              max={500000}
              step={10000}
              value={concurrency}
              onChange={(e) => setConcurrency(parseInt(e.target.value, 10))}
              className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />

            <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
              <span>10,000 (Baseline)</span>
              <span>250,000 (Mid-term Surge)</span>
              <span className="font-bold text-primary">500,000 (Peak Nationwide Exam)</span>
            </div>
          </div>

          {/* Telemetry Dials Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-muted/30 border border-border/60">
              <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider block mb-1">
                Client Response Time
              </span>
              <div className="text-2xl font-extrabold text-emerald-500 font-mono">
                {latency} ms
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Optimistic mutations commit in 0ms locally
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/30 border border-border/60">
              <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider block mb-1">
                Multiplexed WS Sockets
              </span>
              <div className="text-2xl font-extrabold text-primary font-mono">
                {wsConnections.toLocaleString()}
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Batch compressed deltas over persistent pipes
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/30 border border-border/60">
              <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider block mb-1">
                Edge Cache Hit Ratio
              </span>
              <div className="text-2xl font-extrabold text-foreground font-mono">
                {cacheHitRatio}%
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Static assets & questions cached at edge
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/30 border border-border/60">
              <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider block mb-1">
                Data Loss / Dropped Exams
              </span>
              <div className="text-2xl font-extrabold text-emerald-500 font-mono">
                0.00%
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Local journaling guarantees complete recovery
              </p>
            </div>
          </div>

          {/* Interactive Topology Diagram */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <span>Distributed Architecture Topology</span>
              <span className="text-emerald-500 flex items-center gap-1 font-mono">
                <CheckCircle className="w-3.5 h-3.5" />
                SYSTEM HEALTHY • 100% QUORUM
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              
              <div className="p-4 rounded-xl bg-card border border-border/80 space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Users className="w-4 h-4" />
                  <span>500k Clients</span>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Distributed browsers running lightweight React clients with memory isolation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-500 font-bold">
                  <Database className="w-4 h-4" />
                  <span>IndexedDB Journal</span>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Local offline journal writes student answers first before network dispatch.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border/80 space-y-2">
                <div className="flex items-center gap-2 text-blue-500 font-bold">
                  <Activity className="w-4 h-4" />
                  <span>WS Multiplexer</span>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Batches 50 questions into single compressed frames; auto-reconnect with backoff.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-500 font-bold">
                  <Server className="w-4 h-4" />
                  <span>GraphQL Gateway</span>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Horizontal Node.js cluster validating quorums and routing delta streams.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border/80 space-y-2">
                <div className="flex items-center gap-2 text-purple-500 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sharded Cluster</span>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Replica sets with multi-region backup and sub-second write confirmations.
                </p>
              </div>

            </div>
          </div>

          {/* Dynamic Architectural Adaptation Callout */}
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3 text-xs text-muted-foreground">
            <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">
                Active Architecture State at {concurrency.toLocaleString()} Concurrent Users:
              </p>
              <p className="mt-0.5">
                {concurrency > 300000
                  ? "Aggressive connection multiplexing is active. Client-side IndexedDB journal holds optimistic transaction locks until two-phase quorum ACK is delivered from the server."
                  : "Standard real-time bi-directional WebSocket delta sync is operating with minimal queue depth."}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
