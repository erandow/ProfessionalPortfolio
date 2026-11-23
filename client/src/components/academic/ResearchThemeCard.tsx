import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Layers, Compass } from "lucide-react";
import { useLanguageRoute } from "@/hooks/use-language-route";

export interface ResearchThemeData {
  id: string;
  title: string;
  maturity: "Established research" | "Emerging direction" | "Exploratory interest";
  description: string;
  iconName: "Eye" | "Layers" | "Compass";
  keywords: string[];
}

interface ResearchThemeCardProps {
  theme: ResearchThemeData;
}

export default function ResearchThemeCard({ theme }: ResearchThemeCardProps) {
  const { currentLanguage } = useLanguageRoute();

  const iconMap = {
    Eye: <Eye className="w-5 h-5 text-academic-accent" />,
    Layers: <Layers className="w-5 h-5 text-academic-accent" />,
    Compass: <Compass className="w-5 h-5 text-academic-accent" />,
  };

  return (
    <div className="flex flex-col justify-between p-6 rounded-xl border border-academic-border bg-academic-card transition-colors hover:border-academic-accent/40">
      <div className="space-y-4">
        {/* Header: Icon & Maturity label */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-lg bg-academic-soft flex items-center justify-center border border-academic-border">
            {iconMap[theme.iconName] || <Eye className="w-5 h-5 text-academic-accent" />}
          </div>
          <span className="text-[11px] font-mono font-medium text-academic-muted px-2 py-0.5 rounded bg-academic-soft/70 border border-academic-border">
            {theme.maturity}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-academic-text tracking-tight leading-snug">
          {theme.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-academic-muted leading-relaxed">
          {theme.description}
        </p>

        {/* Technical Keywords */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {theme.keywords.map((kw, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono text-academic-muted bg-academic-soft/50 px-2 py-0.5 rounded border border-academic-border/60"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* Link to research page */}
      <div className="pt-6 mt-4 border-t border-academic-border/60">
        <Link
          to={`/${currentLanguage}/academic/research#${theme.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-academic-accent hover:text-academic-accent-hover transition-colors group"
        >
          <span>Explore research theme</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
