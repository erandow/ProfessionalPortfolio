import React, { useEffect, useState } from "react";

export interface TOCItem {
  id: string;
  title: string;
  level?: 2 | 3;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export default function TableOfContents({
  items,
  className = "",
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -60% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Table of contents"
      className={`p-4 rounded-xl border border-academic-border bg-academic-card/80 text-xs ${className}`}
    >
      <h3 className="font-mono uppercase tracking-wider text-[11px] font-semibold text-academic-text mb-3">
        Contents
      </h3>
      <ul className="space-y-1.5 border-l border-academic-border pl-2">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className={`${item.level === 3 ? "pl-3" : "pl-0"}`}
            >
              <a
                href={`#${item.id}`}
                className={`block transition-colors py-0.5 ${
                  isActive
                    ? "font-semibold text-academic-accent border-l-2 -ml-[9px] pl-[7px] border-academic-accent"
                    : "text-academic-muted hover:text-academic-text"
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
