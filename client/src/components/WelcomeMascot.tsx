import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const MascotCanvas = lazy(() => import("./MascotCanvas"));

export default function WelcomeMascot({ className }: { className: string }) {
  const { t } = useTranslation();
  const figureRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setMotionAllowed(!preference.matches);
    syncPreference();
    preference.addEventListener("change", syncPreference);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(figure);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncPreference);
    };
  }, []);

  return (
    <figure ref={figureRef} className={cn("shrink-0 flex-col items-center", className)}>
      <figcaption className="relative z-10 whitespace-nowrap rounded-xl border border-border bg-card px-2 py-1 text-center text-xs font-semibold text-card-foreground after:absolute after:-bottom-[4px] after:left-[58%] after:h-1.5 after:w-1.5 after:rotate-45 after:border-b after:border-r after:border-border after:bg-card">
        {t("hero.welcome", "Welcome!")}
      </figcaption>
      <div className="relative mt-1 aspect-[2/5] w-full [&:has(canvas[data-ready])>img]:invisible">
        <img src="/mascot/erfan-suited.webp" alt="" width={280} height={700} className="absolute inset-0 h-full w-full" />
        {visible && motionAllowed && (
          <Suspense fallback={null}>
            <MascotCanvas paused={paused} />
            <button type="button" className="absolute inset-0 rounded focus-visible:outline-primary" aria-label={t("hero.pauseRotation")} aria-pressed={paused} title={t("hero.pauseRotation")} onClick={() => setPaused(!paused)} />
          </Suspense>
        )}
      </div>
    </figure>
  );
}
