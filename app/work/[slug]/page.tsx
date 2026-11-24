import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseViews } from "@/components/case-views";
import { ProjectImage } from "@/components/project-grid";
import { projects } from "@/lib/content";

type CasePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return { title: project.name, description: project.summary };
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
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <div className="light-section">
      <article className="shell section-space case-study">
        <header className="page-heading">
          <Link href="/work" className="text-link">All case studies</Link>
          <p className="eyebrow section-kicker">{project.category} / {project.name}</p>
          <h1>{project.title}<span>.</span></h1>
          <p>{project.summary}</p>
        </header>
        <ProjectImage project={project} wide />
        <dl className="case-facts">
          <div><dt className="eyebrow">Role</dt><dd>{project.role}</dd></div>
          <div><dt className="eyebrow">Stack</dt><dd>{project.stack.join(" · ")}</dd></div>
        </dl>
        <CaseViews experience={<CaseSections sections={project.experience} />} engineering={
          <>
            <CaseSections sections={project.engineering} />
            {project.slug === "troweb" && <Link href="/lab#workbench" className="text-link">Try the Workbench simulation</Link>}
          </>
        } />
        {project.url && <a className="button button-light" href={project.url}>{project.linkLabel}</a>}
      </article>
    </div>
  );
}
