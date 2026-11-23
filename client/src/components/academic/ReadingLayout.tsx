import React from "react";

interface ReadingLayoutProps {
  children: React.ReactNode;
  className?: string;
  sidebar?: React.ReactNode;
}

export function ReadingColumn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-[760px] mx-auto text-academic-text leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}

export function WideBreakout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1120px] mx-auto my-10 ${className}`}>
      {children}
    </div>
  );
}

export default function ReadingLayout({
  children,
  sidebar,
  className = "",
}: ReadingLayoutProps) {
  if (sidebar) {
    return (
      <div className={`max-w-[1160px] mx-auto px-6 sm:px-8 py-10 md:py-16 ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">{sidebar}</div>
          </aside>
          <main className="lg:col-span-9 order-1 lg:order-2 space-y-10">
            {children}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-[1160px] mx-auto px-6 sm:px-8 py-10 md:py-16 ${className}`}>
      <ReadingColumn>{children}</ReadingColumn>
    </div>
  );
}
