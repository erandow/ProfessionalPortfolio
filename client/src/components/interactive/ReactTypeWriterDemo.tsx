import { useState, useEffect } from "react";
import { Package, Copy, Check, Play, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ReactTypeWriterDemo() {
  const [phrases, setPhrases] = useState<string[]>([
    "Senior AI Engineer",
    "LangGraph Multi-Agent Architect",
    "High-Concurrency Scale (500k+ Users)",
    "Published NPM Package Author",
  ]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(60); // ms
  const [copied, setCopied] = useState(false);

  // Typewriter engine simulation matching @vegadev/react-type-writer
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const delta = isDeleting ? speed / 2 : speed;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, speed]);

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText("npm install @vegadev/react-type-writer");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-lg space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">
              Live Package Playground: @vegadev/react-type-writer
            </h3>
            <p className="text-xs text-muted-foreground">
              Production open-source NPM library authored & maintained by Erfan Asadi
            </p>
          </div>
        </div>

        {/* Copy NPM command */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-muted text-xs font-mono text-foreground border border-border">
            npm i @vegadev/react-type-writer
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCopyInstall}
            className="text-xs h-8 px-2.5"
            title="Copy command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </Button>
        </div>
      </div>

      {/* Live Preview Display Box */}
      <div className="p-8 rounded-2xl bg-zinc-950 text-white font-mono text-center flex flex-col items-center justify-center min-h-[140px] border border-zinc-800 shadow-inner">
        <span className="text-[11px] text-zinc-500 uppercase tracking-widest mb-2">
          Live Rendered Output
        </span>
        <div className="text-xl sm:text-2xl font-bold flex items-center justify-center">
          <span className="text-emerald-400 mr-2">{">"}</span>
          <span>{displayText}</span>
          <span className="inline-block w-2.5 h-6 bg-primary ml-1 animate-pulse" />
        </div>
      </div>

      {/* Playground Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="space-y-1.5">
          <Label htmlFor="type-speed" className="text-xs font-medium text-muted-foreground">
            Typing Speed: <span className="font-mono text-primary font-bold">{speed}ms</span>
          </Label>
          <input
            id="type-speed"
            type="range"
            min={20}
            max={150}
            step={5}
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/60">
          <div>
            <p className="font-semibold text-foreground">Loop Execution</p>
            <p className="text-[11px] text-muted-foreground">Continuous cycle through array</p>
          </div>
          <span className="font-mono text-xs text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
            TRUE
          </span>
        </div>
      </div>

    </div>
  );
}
