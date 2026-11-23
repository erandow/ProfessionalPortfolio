import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export interface TimelineEntry {
  id: string;
  degreeOrRole: string;
  institution: string;
  location?: string;
  period: string;
  specialization?: string;
  thesisOrAdvisor?: string;
  distinctions?: string[];
  description?: string;
  points?: string[];
}

interface AcademicTimelineProps {
  entries: TimelineEntry[];
  type?: "education" | "experience" | "teaching";
}

export default function AcademicTimeline({
  entries,
  type = "education",
}: AcademicTimelineProps) {
  return (
    <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-academic-border">
      {entries.map((entry) => (
        <div key={entry.id} className="relative group">
          {/* Node point */}
          <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full border-2 border-academic-accent bg-academic-card transition-colors group-hover:bg-academic-accent" />

          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
              <h3 className="text-base sm:text-lg font-bold text-academic-text tracking-tight">
                {entry.degreeOrRole}
              </h3>
              <span className="text-xs font-mono text-academic-muted flex items-center gap-1">
                <Calendar className="w-3 h-3 text-academic-border" />
                {entry.period}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 text-xs sm:text-sm text-academic-muted">
              <span className="font-semibold text-academic-text">
                {entry.institution}
              </span>
              {entry.location && (
                <span className="flex items-center gap-1 text-academic-muted/80">
                  <MapPin className="w-3 h-3 text-academic-border" />
                  {entry.location}
                </span>
              )}
            </div>

            {entry.specialization && (
              <p className="text-xs sm:text-sm text-academic-muted font-medium">
                <span className="text-academic-text font-semibold">Specialization:</span>{" "}
                {entry.specialization}
              </p>
            )}

            {entry.thesisOrAdvisor && (
              <p className="text-xs sm:text-sm text-academic-muted">
                <span className="text-academic-text font-semibold">Thesis / Advisor:</span>{" "}
                {entry.thesisOrAdvisor}
              </p>
            )}

            {entry.distinctions && entry.distinctions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {entry.distinctions.map((d, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-academic-soft text-academic-accent border border-academic-border"
                  >
                    <Award className="w-3 h-3" />
                    {d}
                  </span>
                ))}
              </div>
            )}

            {entry.description && (
              <p className="text-xs sm:text-sm text-academic-muted leading-relaxed pt-1">
                {entry.description}
              </p>
            )}

            {entry.points && entry.points.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-academic-muted pt-1">
                {entry.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
