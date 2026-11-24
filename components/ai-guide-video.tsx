export function AiGuideVideo({ label }: { label: string }) {
  return (
    <video
      className="ai-guide-video"
      aria-label={label}
      controls
      playsInline
      preload="none"
      poster="/media/ai-guide-poster.webp"
      width={1920}
      height={1080}
      src="/media/ai-guide-showcase.mp4"
    />
  );
}
