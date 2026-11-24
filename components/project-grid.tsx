import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AiGuideVideo } from "./ai-guide-video";
import troweb from "@/assets/troweb.png";
import doexam from "@/assets/DoExam.jpg";
import lcbvqa from "@/assets/LCVQA.png";
import type { LocalizedProject, Messages } from "@/lib/i18n";
import { localizedPath, type Locale } from "@/lib/locales";

const artwork = { troweb, doexam, "lc-bvqa": lcbvqa };

export function ProjectImage({ slug, alt = "", wide = false }: { slug: LocalizedProject["slug"]; alt?: string; wide?: boolean }) {
  if (slug === "ashti" || slug === "typewriter" || slug === "ekb" || slug === "ekb-ai-guide" || slug === "lernito") {
    return (
      <div className="project-art project-wordmark" data-project={slug} aria-hidden="true" dir="ltr">
        {slug === "ashti" && <span className="academy-mark"><i />Ashti<small>Academy</small></span>}
        {slug === "lernito" && <span className="lernito-mark">Lernito</span>}
        {slug === "typewriter" && <span className="type-mark"><small>react-type-writer</small><code>useTypeWriter<span>│</span></code></span>}
        {slug === "ekb" && <span className="journal-mark">EKB<small>Journal System</small></span>}
        {slug === "ekb-ai-guide" && <span className="journal-mark">AI Guide<small>EKB Journal System</small></span>}
      </div>
    );
  }
  return (
    <div className="project-art" data-project={slug}>
      <Image src={artwork[slug]} alt={alt} sizes={wide ? "(max-width: 1080px) 92vw, 1000px" : "(max-width: 720px) 92vw, (max-width: 1200px) 31vw, 380px"} />
    </div>
  );
}

export function ProjectGrid({ locale, projects, labels, featureEkb = false }: {
  locale: Locale;
  projects: LocalizedProject[];
  labels: Messages["work"];
  featureEkb?: boolean;
}) {
  return (
    <div className="project-grid">
      {projects.map((project) => {
        const featured = featureEkb && project.slug === "ekb";
        const hasVideo = featured || project.slug === "ekb-ai-guide";
        return (
          <article className={hasVideo ? "project-card project-media-card" : "project-card"} data-project={project.slug} data-featured={featured || undefined} key={project.slug}>
            {hasVideo && <AiGuideVideo label={labels.guideExample.caption} />}
            <Link href={localizedPath(locale, `/work/${project.slug}`)} className={hasVideo ? "project-media-link" : "project-link"}>
              {!hasVideo && <ProjectImage slug={project.slug} />}
              <div className="project-copy">
                <p className="eyebrow project-meta">
                  {featured ? <bdi>{project.name}</bdi> : project.category}
                  {"badge" in project && <span className="project-badge">{labels[project.badge]}</span>}
                </p>
                <h3>{featured ? project.title : <bdi>{project.name}</bdi>}</h3>
                <p>{project.summary}</p>
                <span className="project-action"><span aria-hidden="true">{labels.read}</span><ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only">{labels.readFor.replace("{project}", project.name)}</span></span>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
