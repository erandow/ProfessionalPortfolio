"use client";

import { useState } from "react";

export function CaseViews({ experience, engineering }: { experience: React.ReactNode; engineering: React.ReactNode }) {
  const [view, setView] = useState<"experience" | "engineering">("experience");

  return (
    <section className="case-views" aria-label="Case study details">
      <div className="case-switcher" role="group" aria-label="Case study view">
        <button type="button" aria-pressed={view === "experience"} aria-controls="case-experience" onClick={() => setView("experience")}>Experience</button>
        <button type="button" aria-pressed={view === "engineering"} aria-controls="case-engineering" onClick={() => setView("engineering")}>Under the hood</button>
      </div>
      <div id="case-experience" hidden={view !== "experience"}>{experience}</div>
      <div id="case-engineering" hidden={view !== "engineering"}>{engineering}</div>
    </section>
  );
}
