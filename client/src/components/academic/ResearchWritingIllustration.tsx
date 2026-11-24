import { useEffect, useRef } from "react";

export default function ResearchWritingIllustration() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (motion.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {
          // Native controls remain available if the browser blocks autoplay.
        });
      }
    };
    syncPlayback();
    motion.addEventListener("change", syncPlayback);
    return () => motion.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      aria-label="Erfan Asadi writing research notes in a university library"
      src="/illustrations/research-writing.mp4"
      poster="/illustrations/research-writing.webp"
      width={1200}
      height={800}
      className="block h-auto w-full overflow-hidden rounded-xl border border-academic-border"
      controls
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
