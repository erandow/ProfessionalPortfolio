import React, { useState } from "react";
import { Award, ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import ExternalResourceLink from "./ExternalResourceLink";

export interface PublicationData {
  id: string;
  title: string;
  venue: string;
  venueShort: string;
  year: number;
  authors: string[];
  status?: string;
  abstract?: string;
  award?: string;
  paperUrl?: string;
  pdfUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  bibtex: string;
  tags?: string[];
}

interface PublicationItemProps {
  publication: PublicationData;
  showAbstractDefault?: boolean;
}

export default function PublicationItem({
  publication,
  showAbstractDefault = false,
}: PublicationItemProps) {
  const [showAbstract, setShowAbstract] = useState(showAbstractDefault);
  const [showBibtex, setShowBibtex] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyBibtex = () => {
    navigator.clipboard.writeText(publication.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="py-6 border-b border-academic-border last:border-b-0 space-y-3">
      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-academic-text leading-snug tracking-tight">
        {publication.paperUrl ? (
          <a
            href={publication.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-academic-accent transition-colors"
          >
            {publication.title}
          </a>
        ) : (
          publication.title
        )}
      </h3>

      {/* Author list with Erfan Asadi highlighted */}
      <p className="text-sm text-academic-muted leading-relaxed">
        {publication.authors.map((author, index) => {
          const isErfan =
            author.includes("Erfan Asadi") || author === "Erfan Asadi";
          return (
            <React.Fragment key={index}>
              {isErfan ? (
                <span className="font-semibold text-academic-text underline decoration-academic-accent/40 decoration-1 underline-offset-2">
                  {author}
                </span>
              ) : (
                <span>{author}</span>
              )}
              {index < publication.authors.length - 1 && ", "}
            </React.Fragment>
          );
        })}
      </p>

      {/* Venue & Award */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-academic-muted">
        <span className="font-medium text-academic-text">
          {publication.venue} ({publication.year})
        </span>

        {publication.status && (
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-academic-soft text-academic-accent border border-academic-border">
            {publication.status}
          </span>
        )}

        {publication.award && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30">
            <Award className="w-3 h-3 text-amber-600 dark:text-amber-400" />
            {publication.award}
          </span>
        )}
      </div>

      {/* Action links */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {publication.pdfUrl && (
          <ExternalResourceLink type="pdf" href={publication.pdfUrl} label="PDF" />
        )}
        {publication.paperUrl && !publication.pdfUrl && (
          <ExternalResourceLink type="external" href={publication.paperUrl} label="Paper" />
        )}
        {publication.codeUrl && (
          <ExternalResourceLink type="code" href={publication.codeUrl} label="Code" />
        )}
        {publication.projectUrl && (
          <ExternalResourceLink type="project" href={publication.projectUrl} label="Project Case Study" />
        )}
        <ExternalResourceLink
          type="bibtex"
          label={showBibtex ? "Hide BibTeX" : "BibTeX"}
          onClick={() => setShowBibtex(!showBibtex)}
        />
        {publication.abstract && (
          <button
            type="button"
            onClick={() => setShowAbstract(!showAbstract)}
            className="inline-flex items-center gap-1 text-xs font-medium text-academic-muted hover:text-academic-accent px-2 py-1 transition-colors"
          >
            {showAbstract ? (
              <>
                Hide Abstract <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                Abstract <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Abstract Drawer */}
      {publication.abstract && showAbstract && (
        <div className="mt-3 p-4 rounded-lg bg-academic-soft/50 border border-academic-border text-xs sm:text-sm text-academic-muted leading-relaxed max-w-[760px]">
          <p className="font-semibold text-academic-text mb-1 text-xs uppercase tracking-wider font-mono">
            Abstract
          </p>
          <p>{publication.abstract}</p>
        </div>
      )}

      {/* BibTeX Drawer */}
      {showBibtex && (
        <div className="mt-3 relative rounded-lg border border-academic-border bg-academic-card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-academic-muted font-semibold">
              BibTeX Citation
            </span>
            <button
              onClick={copyBibtex}
              className="inline-flex items-center gap-1 text-xs font-mono px-2 py-1 rounded bg-academic-soft hover:bg-academic-accent hover:text-white transition-colors border border-academic-border"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" /> Copy
                </>
              )}
            </button>
          </div>
          <pre className="text-[12px] font-mono text-academic-text bg-academic-soft/30 p-3 rounded overflow-x-auto leading-relaxed border border-academic-border/60">
            {publication.bibtex}
          </pre>
        </div>
      )}
    </article>
  );
}
