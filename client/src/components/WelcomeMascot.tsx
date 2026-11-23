import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function WelcomeMascot({ className }: { className: string }) {
  const { t } = useTranslation();
  const figureRef = useRef<HTMLElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;

    const threshold = 0.45;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= threshold) {
        setHasEnteredView(true);
        observer.disconnect();
      }
    }, { threshold });

    observer.observe(figure);
    return () => observer.disconnect();
  }, []);

  return (
    <figure ref={figureRef} className={cn("shrink-0 flex-col items-center", className)}>
      <figcaption className="relative z-10 whitespace-nowrap rounded-xl border border-border bg-card px-2 py-1 text-center text-xs font-semibold text-card-foreground after:absolute after:-bottom-[4px] after:left-[58%] after:h-1.5 after:w-1.5 after:rotate-45 after:border-b after:border-r after:border-border after:bg-card">
        {t("hero.welcome", "Welcome!")}
      </figcaption>
      <picture className="mt-1 block w-full">
        {hasEnteredView && (
          <source media="(prefers-reduced-motion: no-preference)" srcSet="/mascot/erfan-avatar.svg#welcome" />
        )}
        <img
          src="/mascot/erfan-avatar.svg#greeting"
          alt=""
          width={330}
          height={772}
          className="block h-auto w-full"
          decoding="async"
        />
      </picture>
    </figure>
  );
}
