"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Image as PhotoIcon } from "lucide-react";
import type { HobbyEntry } from "@/lib/hobbies";
import type { Messages } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";

export function HobbyGallery({ entries, labels, locale }: {
  entries: HobbyEntry[];
  labels: Messages["hobbies"];
  locale: Locale;
}) {
  const [index, setIndex] = useState(0);
  const entry = entries[index];
  if (!entry) {
    return (
      <div className="hobby-empty">
        <PhotoIcon size={32} strokeWidth={1.4} aria-hidden="true" />
        <p>{labels.empty}</p>
      </div>
    );
  }

  const total = entries.length;
  const number = new Intl.NumberFormat(locale);
  return (
    <div className="hobby-gallery">
      <div aria-live="polite" aria-atomic="true">
        <figure>
          {entry.image && <img src={entry.image.src} alt={entry.image.alt} className="hobby-photo" loading="lazy" />}
          {entry.image && entry.text && <figcaption className="hobby-caption" dir="auto">{entry.text}</figcaption>}
          {!entry.image && <p className="hobby-note" dir="auto">{entry.text}</p>}
        </figure>
        {total > 1 && <span className="hobby-count eyebrow">{number.format(index + 1)} / {number.format(total)}</span>}
      </div>
      {total > 1 && (
        <div className="hobby-controls">
          <button type="button" className="icon-button" aria-label={labels.previous} onClick={() => setIndex(i => (i + total - 1) % total)}>
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" className="icon-button" aria-label={labels.next} onClick={() => setIndex(i => (i + 1) % total)}>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
