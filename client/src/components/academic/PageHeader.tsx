import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguageRoute } from "@/hooks/use-language-route";

interface PageHeaderProps {
  breadcrumbTitle?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  illustration?: React.ReactNode;
}

export default function PageHeader({
  breadcrumbTitle,
  eyebrow,
  title,
  subtitle,
  children,
  illustration,
}: PageHeaderProps) {
  const { currentLanguage } = useLanguageRoute();

  return (
    <header className="border-b border-academic-border bg-academic-bg/80 backdrop-blur-sm pt-28 pb-10 md:pt-32 md:pb-14">
      <div className={`max-w-[1160px] mx-auto px-6 sm:px-8 ${illustration ? "grid items-center gap-7 lg:grid-cols-2 lg:gap-12" : ""}`}>
        <div>
          {/* Breadcrumb */}
          {breadcrumbTitle && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-academic-muted mb-4 font-mono">
              <Link
                to={`/${currentLanguage}/academic`}
                className="hover:text-academic-accent transition-colors"
              >
                Academic
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-academic-border" />
              <span className="text-academic-text font-medium">{breadcrumbTitle}</span>
            </nav>
          )}

          {eyebrow && (
            <p className="text-xs font-semibold tracking-wider uppercase text-academic-accent font-mono mb-2">
              {eyebrow}
            </p>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-academic-text leading-[1.15]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3.5 text-base sm:text-lg text-academic-muted max-w-[760px] leading-relaxed">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-6">{children}</div>}
        </div>
        {illustration}
      </div>
    </header>
  );
}
