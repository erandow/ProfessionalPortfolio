import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers, PanelsTopLeft } from "lucide-react";
import troweb from "@/assets/troweb.png";
import doexam from "@/assets/DoExam.jpg";
import lcbvqa from "@/assets/LCVQA.png";
import type { LocalizedProject, Messages } from "@/lib/i18n";
import { localizedPath, type Locale } from "@/lib/locales";

const artwork = { troweb, doexam, "lc-bvqa": lcbvqa };

export function ProjectImage({ slug, alt = "", wide = false }: { slug: LocalizedProject["slug"]; alt?: string; wide?: boolean }) {
  if (slug === "ekb") return null;
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
        return (
          <article className="project-card" data-project={project.slug} data-featured={featured || undefined} key={project.slug}>
            <Link href={localizedPath(locale, `/work/${project.slug}`)} className="project-link">
              <ProjectImage slug={project.slug} />
              <div className="project-copy">
                <p className="eyebrow">{featured ? <bdi>{project.name}</bdi> : project.category}</p>
                <h3>{featured ? project.title : <bdi>{project.name}</bdi>}</h3>
                <p>{project.summary}</p>
                <span className="project-action"><span aria-hidden="true">{labels.read}</span><ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only">{labels.readFor.replace("{project}", project.name)}</span></span>
              </div>
              {featured && (
                <div className="migration-study">
                  <p className="eyebrow">{labels.migration}</p>
                  <div className="migration-routes">
                    <div className="migration-route">
                      <Layers size={21} aria-hidden="true" />
                      <span>{labels.legacyRoutes}</span>
                      <strong>PHP</strong>
                    </div>
                    <ArrowRight className="migration-arrow" size={20} aria-hidden="true" />
                    <div className="migration-route migration-route-new">
                      <div className="migration-route-top">
                        <PanelsTopLeft size={21} aria-hidden="true" />
                        <code dir="ltr">/new</code>
                      </div>
                      <span>{labels.newRoutes}</span>
                      <strong>Next.js</strong>
                    </div>
                  </div>
                </div>
              )}
            </Link>
          </article>
        );
      })}
    </div>
  );
}
