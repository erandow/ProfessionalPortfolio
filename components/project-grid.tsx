import Image from "next/image";
import Link from "next/link";
import troweb from "@/assets/troweb.png";
import doexam from "@/assets/DoExam.jpg";
import lcbvqa from "@/assets/LCVQA.png";
import { projects, type Project } from "@/lib/content";

const artwork = {
  troweb: { image: troweb, alt: "Troweb logo on a blue background" },
  doexam: { image: doexam, alt: "DoExam logo in front of online assessment screens" },
  "lc-bvqa": { image: lcbvqa, alt: "A grid of video frames showing varied scenes" },
};

export function ProjectImage({ project, wide = false }: { project: Project; wide?: boolean }) {
  if (project.slug === "ekb") return null;
  const { image, alt } = artwork[project.slug];
  return (
    <div className="project-art" data-project={project.slug}>
      <Image src={image} alt={wide ? alt : ""} sizes={wide ? "(max-width: 1080px) 92vw, 1000px" : "(max-width: 720px) 92vw, (max-width: 1200px) 31vw, 380px"} />
    </div>
  );
}

export function ProjectGrid({ featureEkb = false }: { featureEkb?: boolean }) {
  return (
    <div className="project-grid">
      {projects.map((project) => {
        const featured = featureEkb && project.slug === "ekb";
        return (
          <article className="project-card" data-project={project.slug} data-featured={featured || undefined} key={project.slug}>
            <Link href={`/work/${project.slug}`} className="project-link">
              <ProjectImage project={project} />
              <div className="project-copy">
                <p className="eyebrow">{featured ? project.name : project.category}</p>
                <h3>{featured ? project.title : project.name}</h3>
                <p>{project.summary}</p>
                <span className="project-action">Read case study<span className="sr-only"> for {project.name}</span></span>
              </div>
              {featured && (
                <div className="migration-study">
                  <p className="eyebrow">Page-by-page migration</p>
                  <div className="migration-routes">
                    <div className="migration-route"><span>Legacy routes</span><strong>PHP</strong></div>
                    <div className="migration-route migration-route-new"><span>New routes</span><strong>Next.js</strong><code>/new</code></div>
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
