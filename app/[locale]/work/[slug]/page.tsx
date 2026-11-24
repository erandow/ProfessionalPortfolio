import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseViews } from "@/components/case-views";
import { ProjectImage } from "@/components/project-grid";
import { projects } from "@/lib/content";
import { getLocale, getPortfolio } from "@/lib/i18n";
import { localizedPath } from "@/lib/locales";

type CasePageProps = PageProps<"/[locale]/work/[slug]">;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

async function getCaseStudy(params: CasePageProps["params"]) {
  const locale = await getLocale(params);
  const { slug } = await params;
  const { messages, projects } = await getPortfolio(locale);
  const project = projects.find((item) => item.slug === slug);
  return { locale, work: messages.work, project };
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { project } = await getCaseStudy(params);
  return project ? { title: project.name, description: project.summary } : {};
}

function CaseSections({ sections }: { sections: readonly { title: string; body: string }[] }) {
  return sections.map(({ title, body }) => (
    <section key={title} className="case-block">
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  ));
}

export default async function CasePage({ params }: CasePageProps) {
  const { locale, work, project } = await getCaseStudy(params);
  if (!project) notFound();

  return (
    <div className="light-section">
      <article className="shell section-space case-study">
        <header className="page-heading">
          <Link href={localizedPath(locale, "/work")} className="text-link">{work.all}</Link>
          <p className="eyebrow section-kicker">{project.category} / <bdi>{project.name}</bdi></p>
          <h1>{project.title}<span>.</span></h1>
          <p>{project.summary}</p>
        </header>
        <ProjectImage slug={project.slug} alt={project.slug === "ekb" ? "" : work.artwork[project.slug]} wide />
        <dl className="case-facts">
          <div><dt className="eyebrow">{work.role}</dt><dd>{project.role}</dd></div>
          <div><dt className="eyebrow">{work.stack}</dt><dd><bdi>{project.stack.join(" · ")}</bdi></dd></div>
        </dl>
        <CaseViews
          labels={{ details: work.details, view: work.view, experience: work.experience, engineering: work.engineering }}
          experience={<CaseSections sections={project.experience} />}
          engineering={<CaseSections sections={project.engineering} />}
        />
        {project.url && <a className="button button-light" href={project.url}>{project.linkLabel}</a>}
      </article>
    </div>
  );
}
