import React from "react";
import { FileText, Code2, ExternalLink, Bookmark, Download } from "lucide-react";

interface ExternalResourceLinkProps {
  type: "pdf" | "code" | "bibtex" | "project" | "external" | "download";
  href?: string;
  onClick?: () => void;
  label: string;
  size?: "sm" | "md";
  className?: string;
}

export default function ExternalResourceLink({
  type,
  href,
  onClick,
  label,
  size = "sm",
  className = "",
}: ExternalResourceLinkProps) {
  const icon = {
    pdf: <FileText className="w-3.5 h-3.5" />,
    code: <Code2 className="w-3.5 h-3.5" />,
    bibtex: <Bookmark className="w-3.5 h-3.5" />,
    project: <ExternalLink className="w-3.5 h-3.5" />,
    external: <ExternalLink className="w-3.5 h-3.5" />,
    download: <Download className="w-3.5 h-3.5" />,
  }[type];

  const baseClasses = `inline-flex items-center gap-1.5 font-medium rounded-md transition-colors border border-academic-border bg-academic-card text-academic-text hover:bg-academic-soft hover:text-academic-accent hover:border-academic-accent/40 focus:outline-none focus:ring-2 focus:ring-academic-accent/20 ${
    size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm"
  } ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClasses}>
        {icon}
        <span>{label}</span>
      </button>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={baseClasses}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
