"use client";

import { useState } from "react";
import type { Messages } from "@/lib/i18n";

export function CaseViews({ experience, engineering, labels }: {
  experience: React.ReactNode;
  engineering: React.ReactNode;
  labels: Pick<Messages["work"], "details" | "view" | "experience" | "engineering">;
}) {
  const [view, setView] = useState<"experience" | "engineering">("experience");

  return (
    <section className="case-views" aria-label={labels.details}>
      <div className="case-switcher" role="group" aria-label={labels.view}>
        <button type="button" aria-pressed={view === "experience"} aria-controls="case-experience" onClick={() => setView("experience")}>{labels.experience}</button>
        <button type="button" aria-pressed={view === "engineering"} aria-controls="case-engineering" onClick={() => setView("engineering")}>{labels.engineering}</button>
      </div>
      <div id="case-experience" hidden={view !== "experience"}>{experience}</div>
      <div id="case-engineering" hidden={view !== "engineering"}>{engineering}</div>
    </section>
  );
}
