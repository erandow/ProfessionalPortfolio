import React from "react";

interface ProjectFigureProps {
  src: string;
  alt: string;
  caption: string;
  figureNumber?: string | number;
  subtext?: string;
  className?: string;
  aspectRatio?: string;
}

export function FigureCaption({
  figureNumber,
  caption,
  subtext,
}: {
  figureNumber?: string | number;
  caption: string;
  subtext?: string;
}) {
  return (
    <figcaption className="mt-3 text-xs sm:text-sm text-academic-muted leading-relaxed px-1">
      {figureNumber && (
        <span className="font-semibold text-academic-text mr-1.5 font-mono">
          Figure {figureNumber}:
        </span>
      )}
      <span>{caption}</span>
      {subtext && (
        <span className="block mt-1 text-xs text-academic-muted/80">
          {subtext}
        </span>
      )}
    </figcaption>
  );
}

export default function ProjectFigure({
  src,
  alt,
  caption,
  figureNumber,
  subtext,
  className = "",
}: ProjectFigureProps) {
  return (
    <figure className={`my-8 ${className}`}>
      <div className="overflow-hidden rounded-xl border border-academic-border bg-academic-card p-2 sm:p-3 shadow-xs">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain rounded-lg"
          loading="lazy"
        />
      </div>
      <FigureCaption
        figureNumber={figureNumber}
        caption={caption}
        subtext={subtext}
      />
    </figure>
  );
}
