import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Copy, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InteractiveTerminalProps {
  onOpenResume?: () => void;
}

export default function InteractiveTerminal({ onOpenResume }: InteractiveTerminalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<Array<{ command: string; output: string | JSX.Element }>>([
    {
      command: "welcome",
      output: (
        <div>
          <p className="text-emerald-400 font-bold">Erfan Asadi Interactive CLI [Version 2.4.0-prod]</p>
          <p className="text-zinc-400 text-xs mt-0.5">
            Type <span className="text-amber-400 font-bold">help</span> to view available commands, or <span className="text-amber-400 font-bold">resume</span> to open full PDF resume.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandList((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let output: string | JSX.Element = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-zinc-300 text-xs">
            <p className="text-emerald-400 font-semibold">Available Commands:</p>
            <p><span className="text-amber-400 font-mono w-28 inline-block">whoami</span> — Executive background and roles</p>
            <p><span className="text-amber-400 font-mono w-28 inline-block">experience</span> — Proven production case studies & scale</p>
            <p><span className="text-amber-400 font-mono w-28 inline-block">skills</span> — Autonomous AI, LLMs, Full-Stack, & DevOps matrix</p>
            <p><span className="text-amber-400 font-mono w-28 inline-block">projects</span> — Shipped products and open-source packages</p>
            <p><span className="text-amber-400 font-mono w-28 inline-block">scale</span> — 500k concurrent users architecture specs</p>
            <p><span className="text-amber-400 font-mono w-28 inline-block">resume</span> — Open interactive industry resume</p>
            <p><span className="text-amber-400 font-mono w-28 inline-block">contact</span> — Get direct phone, email, and profiles</p>
            <p><span className="text-amber-400 font-mono w-28 inline-block">clear</span> — Clear the terminal history</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-zinc-300 text-xs">
            <p className="font-bold text-white">Erfan Asadi — Senior AI Engineer & Full-Stack Tech Lead</p>
            <p>• Frontend Tech Lead @ Troweb (Managing 4 remote software engineers)</p>
            <p>• M.Sc. in Artificial Intelligence from Kharazmi University (Exceptional Talent Scholar)</p>
            <p>• Best Paper Award Winner @ IPRIA 2025 (Feature Map Correlations in VQA)</p>
            <p>• Location: Tehran, Iran (Available for Worldwide Remote & Relocation)</p>
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-1.5 text-zinc-300 text-xs">
            <p className="text-primary font-bold">Key Production Track Record:</p>
            <p>1. <span className="text-amber-300 font-semibold">Troweb (2023–Present):</span> Tech Lead & AI Agent Architect. Built multi-agent data workspaces with LangGraph, vLLM, and TypeScript. Managed 4 engineers.</p>
            <p>2. <span className="text-amber-300 font-semibold">DoExam (2021–2023):</span> Scaled online testing platform to 500,000 concurrent students per exam session with zero downtime.</p>
            <p>3. <span className="text-amber-300 font-semibold">Lernito (2019–2021):</span> K12 LMS & testing suite with successful Google Play release.</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-zinc-300 text-xs">
            <p><strong className="text-emerald-400">Agentic AI & LLMs:</strong> LangGraph, LangChain, vLLM, Ollama, RAG, Tool-Calling</p>
            <p><strong className="text-blue-400">Deep Learning & Vision:</strong> PyTorch, TensorFlow, CUDA, OpenCV, Video Quality Assessment (VQA)</p>
            <p><strong className="text-purple-400">Frontend & Scale:</strong> TypeScript, React, Next.js, React Router, GraphQL, Concurrency Opt.</p>
            <p><strong className="text-amber-400">Backend & DevOps:</strong> Node.js, Python, MongoDB, PostgreSQL, Docker, Git CI/CD, Linux</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1 text-zinc-300 text-xs">
            <p>• <span className="text-white font-semibold">LC-BVQA:</span> Deep perception PyTorch/CUDA engine for video quality assessment (IPRIA Best Paper)</p>
            <p>• <span className="text-white font-semibold">@vegadev/react-type-writer:</span> Published NPM package with TypeScript support</p>
            <p>• <span className="text-white font-semibold">Ashti Academy:</span> HLS streaming learning platform with AI recommendation</p>
            <p>• <span className="text-white font-semibold">Gitea Secure Launch:</span> Containerized Git platform with automated TLS</p>
          </div>
        );
        break;

      case "scale":
        output = (
          <div className="space-y-1 text-zinc-300 text-xs">
            <p className="text-blue-400 font-bold">500,000 Concurrent User Architecture:</p>
            <p>• Client: Optimistic IndexedDB journal writes answers locally first in 0ms</p>
            <p>• Transport: Multiplexed WebSocket connection pooling (50 questions/frame)</p>
            <p>• Gateway: Horizontal Node.js clusters verifying distributed quorum ACKs</p>
            <p>• Reliability: 100% submission rate; zero dropped examinations</p>
          </div>
        );
        break;

      case "resume":
        if (onOpenResume) {
          onOpenResume();
        }
        output = "Opening interactive industry resume modal...";
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-zinc-300 text-xs">
            <p>• Email: <a href="mailto:erfanasadi.ce@gmail.com" className="text-primary hover:underline">erfanasadi.ce@gmail.com</a></p>
            <p>• Phone / WhatsApp: <a href="tel:+989120560867" className="text-primary hover:underline">+98 912 056 0867</a></p>
            <p>• LinkedIn: <a href="https://linkedin.com/in/erandow" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/erandow</a></p>
            <p>• GitHub: <a href="https://github.com/erandow" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/erandow</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = `Command not recognized: "${trimmed}". Type "help" to see valid commands.`;
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIdx = historyIndex + 1 < commandList.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  return (
    <>
      {/* Floating Bottom Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="shadow-2xl gap-2 font-mono text-xs h-10 px-4 rounded-full border border-primary/30 bg-background/90 backdrop-blur-md text-foreground hover:bg-muted"
        >
          <TerminalIcon className="w-4 h-4 text-emerald-500" />
          <span>{isOpen ? "Close CLI" : "Developer CLI (terminal)"}</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
        </Button>
      </div>

      {/* Terminal Window Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[94vw] sm:w-[540px] max-h-[440px] z-50 rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col font-mono text-xs backdrop-blur-xl">
          
          {/* Window Header */}
          <div className="p-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block cursor-pointer" onClick={() => setIsOpen(false)} />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[11px] text-zinc-400 font-medium ml-2">
                erfan@portfolio: ~ (bash)
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Console Body */}
          <div className="p-4 overflow-y-auto flex-1 space-y-3 min-h-[220px]">
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center text-zinc-400">
                  <span className="text-emerald-400 mr-1.5">erfan@lead:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-2 border-l border-zinc-800 text-zinc-300">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Input */}
          <div className="p-3 bg-zinc-900/80 border-t border-zinc-800 flex items-center gap-2">
            <span className="text-emerald-400 font-bold">{">"}</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Try typing 'help', 'skills', 'scale', 'resume'..."
              className="w-full bg-transparent text-white focus:outline-none placeholder:text-zinc-600 text-xs"
            />
          </div>

        </div>
      )}
    </>
  );
}
