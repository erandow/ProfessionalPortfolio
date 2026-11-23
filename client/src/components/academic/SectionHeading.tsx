import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-8 md:mb-12 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-wider uppercase text-academic-accent font-mono mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-academic-text">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 text-base sm:text-lg text-academic-muted max-w-[740px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
