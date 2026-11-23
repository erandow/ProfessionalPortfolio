import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import ExternalResourceLink from "./ExternalResourceLink";
import { useLanguageRoute } from "@/hooks/use-language-route";

export interface FeaturedProjectData {
  id: string;
  title: string;
  category: string;
  isFlagship?: boolean;
  award?: string;
  image: string;
  imageAlt: string;
  caption?: string;
  problemStatement: string;
  contributionSummary: string;
  paperUrl?: string;
  pdfUrl?: string;
  codeUrl?: string;
  projectDetailPath: string;
}

interface FeaturedProjectRowProps {
  project: FeaturedProjectData;
  reverseLayout?: boolean;
}

export default function FeaturedProjectRow({
  project,
  reverseLayout = false,
}: FeaturedProjectRowProps) {
  const { currentLanguage } = useLanguageRoute();

  return (
    <article
      className={`py-12 border-b border-academic-border last:border-b-0 ${
        project.isFlagship ? "relative" : ""
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Figure Column */}
        <div
          className={`lg:col-span-6 ${
            reverseLayout ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div
            className={`rounded-xl border ${
              project.isFlagship
                ? "border-academic-accent/30 bg-academic-soft/30 p-2 sm:p-3 shadow-xs"
                : "border-academic-border bg-academic-card p-2 shadow-xs"
            }`}
          >
            <Link to={`/${currentLanguage}${project.projectDetailPath}`}>
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-auto object-contain rounded-lg hover:opacity-95 transition-opacity"
                loading="lazy"
              />
            </Link>
          </div>
          {project.caption && (
            <p className="mt-2 text-xs text-academic-muted italic px-1">
              {project.caption}
            </p>
          )}
        </div>

        {/* Content Column */}
        <div
          className={`lg:col-span-6 space-y-4 ${
            reverseLayout ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-academic-accent bg-academic-soft px-2.5 py-0.5 rounded border border-academic-border">
              {project.category}
            </span>
            {project.isFlagship && (
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-academic-accent text-white">
                Flagship Thesis
              </span>
            )}
            {project.award && (
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                {project.award}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-academic-text tracking-tight leading-snug">
            <Link
              to={`/${currentLanguage}${project.projectDetailPath}`}
              className="hover:text-academic-accent transition-colors"
            >
              {project.title}
            </Link>
          </h3>

          <div className="space-y-3 text-sm text-academic-muted leading-relaxed">
            <div>
              <span className="font-semibold text-academic-text block text-xs uppercase tracking-wider font-mono mb-1">
                Research Problem
              </span>
              <p>{project.problemStatement}</p>
            </div>
            <div>
              <span className="font-semibold text-academic-text block text-xs uppercase tracking-wider font-mono mb-1">
                Contribution Summary
              </span>
              <p>{project.contributionSummary}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Link
              to={`/${currentLanguage}${project.projectDetailPath}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-academic-accent text-white hover:bg-academic-accent-hover transition-colors shadow-xs"
            >
              <span>Read Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            {project.pdfUrl && (
              <ExternalResourceLink type="pdf" href={project.pdfUrl} label="Paper PDF" />
            )}
            {project.paperUrl && !project.pdfUrl && (
              <ExternalResourceLink type="external" href={project.paperUrl} label="Publication" />
            )}
            {project.codeUrl && (
              <ExternalResourceLink type="code" href={project.codeUrl} label="GitHub Code" />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
