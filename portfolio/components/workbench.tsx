"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, Command, Database, GitBranch, Play, RotateCcw, Terminal } from "lucide-react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

const scenarios = [
  {
    label: "Summarize product feedback",
    inputLabel: "6 feedback messages",
    input: [
      "Show me where to start after I sign up.",
      "I wanted a walkthrough the first time I opened the app.",
      "The setup steps were hard to follow.",
      "Let me filter search by date.",
      "I couldn’t narrow my search results by category.",
      "CSV export worked well.",
    ],
    stages: ["Look for topics that come up more than once.", "Open the six feedback messages.", "Count mentions of getting started and search filters."],
    result: "Three messages mention difficulty getting started. Two ask for better search filters.",
  },
  {
    label: "Compare release notes",
    inputLabel: "2 release notes",
    input: [
      "v1.2 — Added CSV export. Known issue: Filters sometimes reset when reopening a view.",
      "v1.3 — Added saved views. Fixed filters resetting when reopening a view.",
    ],
    stages: ["Look for features and bug fixes in the newer release.", "Open the notes for versions 1.2 and 1.3.", "Pick out the changes introduced in version 1.3."],
    result: "Version 1.3 adds saved views and fixes filters resetting when a view is reopened.",
  },
  {
    label: "Triage support requests",
    inputLabel: "4 support tickets",
    input: [
      "I can’t sign in, even after resetting my password.",
      "Could you add dark mode?",
      "I’d like to export to PDF.",
      "Can we sort saved views by name?",
    ],
    stages: ["Prioritize issues that block access to the app.", "Open the four support tickets.", "Separate the sign-in issue from feature requests."],
    result: "Review the sign-in issue first. Group the other three tickets as feature requests.",
  },
] as const;

const stages = [
  { label: "Plan", icon: GitBranch },
  { label: "Read data", icon: Database },
  { label: "Answer", icon: Command },
];

export function Workbench() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [step, setStep] = useState(-1);
  const reducedMotion = useReducedMotion();
  const scenario = scenarios[scenarioIndex];
  const complete = step === stages.length;
  const running = step >= 0 && !complete;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setStep(step + 1), 850);
    return () => window.clearTimeout(timer);
  }, [running, step]);

  const outputTitle = complete ? "Example answer" : running ? stages[step].label : "Sample input";
  const output = complete ? scenario.result : running ? scenario.stages[step] : `The demo will read ${scenario.inputLabel}.`;

  return (
    <section id="workbench" aria-labelledby="workbench-title" aria-describedby="workbench-description" className="workbench">
      <div className="bench-header">
        <div className="flex items-center gap-2.5">
          <Terminal size={17} aria-hidden="true" />
          <h2 id="workbench-title">The Workbench</h2>
        </div>
        <span className="bench-mode">AI agent demo</span>
      </div>
      <div className="bench-body">
        <p id="workbench-description" className="bench-description">See how an AI agent goes from a task to an answer. This demo uses sample data and scripted responses.</p>
        <label className="field-label" htmlFor="agent-task">Choose a sample task</label>
        <div className="bench-select">
          <select id="agent-task" value={scenarioIndex} onChange={(event) => {
            setScenarioIndex(Number(event.target.value));
            setStep(-1);
          }}>
            {scenarios.map((item, index) => <option key={item.label} value={index}>{item.label}</option>)}
          </select>
          <ChevronDown size={15} aria-hidden="true" />
        </div>
        <div className="bench-actions">
          <button className="button button-primary bench-run" type="button" disabled={running} onClick={() => setStep(reducedMotion ? stages.length : 0)}>
            <Play size={14} aria-hidden="true" fill="currentColor" /> {running ? "Running…" : complete ? "Run again" : "Run demo"}
          </button>
          <button className="icon-button" type="button" onClick={() => setStep(-1)} disabled={step === -1} aria-label="Reset demo" title="Reset demo">
            <RotateCcw size={17} aria-hidden="true" />
          </button>
        </div>
        <LazyMotion features={domAnimation}>
          <ol className="bench-stages" aria-label="Workflow stages">
            {stages.map(({ label, icon: Icon }, index) => {
              const state = index < step ? "done" : index === step ? "active" : "waiting";
              return (
                <li key={label} data-state={state} aria-current={state === "active" ? "step" : undefined}>
                  <m.span className="stage-icon" initial={false} animate={{ scale: !reducedMotion && state === "active" ? 1.12 : 1 }} transition={{ duration: 0.2 }}>
                    {state === "done" ? <Check size={18} aria-hidden="true" /> : <Icon size={18} aria-hidden="true" />}
                  </m.span>
                  <span>{label}</span>
                  <span className="sr-only">, {state === "done" ? "completed" : state}</span>
                </li>
              );
            })}
          </ol>
        </LazyMotion>
        <div className="bench-output" role="status" aria-atomic="true">
          <span className="field-label">{outputTitle}</span>
          <p>{output}</p>
        </div>
        <details className="bench-input">
          <summary>View sample data and steps</summary>
          <ul>{scenario.input.map((entry) => <li key={entry}>{entry}</li>)}</ul>
          <p className="field-label">Workflow steps</p>
          <ol>
            {stages.map(({ label }, index) => <li key={label}><strong>{label}.</strong> {scenario.stages[index]}</li>)}
          </ol>
        </details>
      </div>
    </section>
  );
}
