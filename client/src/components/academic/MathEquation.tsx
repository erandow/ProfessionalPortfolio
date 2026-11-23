import React, { useMemo } from "react";
import katex from "katex";

interface MathEquationProps {
  math: string;
  block?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function MathEquation({
  math,
  block = false,
  className = "",
  ariaLabel,
}: MathEquationProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch {
      return math;
    }
  }, [math, block]);

  if (block) {
    return (
      <div
        className={`my-4 overflow-x-auto py-2 text-academic-text ${className}`}
        role="math"
        aria-label={ariaLabel || math}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline-block text-academic-text ${className}`}
      role="math"
      aria-label={ariaLabel || math}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
