import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BookOpen, ChevronDown, ScanLine } from "lucide-react";
import { AiGuideVideo } from "@/components/ai-guide-video";
import { AcademyArchitecture } from "@/components/academy-architecture";
import { CaseViews } from "@/components/case-views";
import { ProjectImage } from "@/components/project-grid";
import { QualityPaper } from "@/components/quality-paper";
import { QualityPipeline, QualityResults } from "@/components/quality-pipeline";
import { ekbPullRequests, projects, videoQualityPaper } from "@/lib/content";
import { getLocale, getPortfolio, type Messages } from "@/lib/i18n";
import { localizedPath } from "@/lib/locales";
import { pageMetadata } from "@/lib/seo";

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
  const relatedSlug = slug === "ekb" ? "ekb-ai-guide" : slug === "ekb-ai-guide" ? "ekb" : undefined;
  const relatedProject = projects.find((item) => item.slug === relatedSlug);
  return { locale, messages, project, relatedProject };
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { locale, messages, project } = await getCaseStudy(params);
  if (!project) return {};

  const title = project.seoTitle ?? (project.slug === "ekb-ai-guide" ? project.title : project.name);
  return pageMetadata(locale, `/work/${project.slug}`, {
    title: `${title} | ${messages.name}`,
    description: project.summary,
    siteName: messages.siteName,
  });
}

function CaseSections({ sections }: { sections: readonly { title: string; body: string }[] }) {
  return sections.map(({ title, body }) => (
    <section key={title} className="case-block">
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  ));
}

function GuideWalkthrough({ example }: { example: Messages["work"]["guideExample"] }) {
  return (
    <figure className="guide-walkthrough">
      <figcaption className="eyebrow">{example.caption}</figcaption>
      <AiGuideVideo label={example.caption} />
      <blockquote>{example.question}</blockquote>
      <p>{example.answer}</p>
      <p className="guide-citation"><BookOpen size={16} aria-hidden="true" />{example.source}</p>
      <details>
        <summary>{example.show}<ChevronDown size={17} aria-hidden="true" /></summary>
        <div className="guide-destination">
          <p>{example.path}</p>
          <strong><ScanLine size={20} aria-hidden="true" />{example.field}</strong>
          <p>{example.hint}</p>
        </div>
      </details>
    </figure>
  );
}

function ManuscriptWorkflow({ workflow }: { workflow: Messages["work"]["manuscriptWorkflow"] }) {
  return (
    <section className="manuscript-workflow">
      <h2>{workflow.title}</h2>
      <ol>
        {workflow.stages.map(({ role, task }) => (
          <li key={role}><h3>{role}</h3><p>{task}</p></li>
        ))}
      </ol>
    </section>
  );
}

function JournalLeadership({ copy, locale }: { copy: Messages["work"]["journalLeadership"]; locale: string }) {
  const numbers = new Intl.NumberFormat(locale);
  return (
    <section className="journal-leadership" aria-labelledby="journal-leadership-heading">
      <div>
        <h2 id="journal-leadership-heading">{copy.heading}</h2>
        <dl>
          <div><dt>{copy.authored}</dt><dd>{numbers.format(ekbPullRequests.authoredAndMergedToMain)}</dd></div>
          <div><dt>{copy.reviewed}</dt><dd>{numbers.format(ekbPullRequests.reviewedForOtherAuthors)}</dd></div>
        </dl>
        <small>{copy.date}</small>
      </div>
      <div className="journal-review">
        <h3>{copy.reviewTitle}</h3>
        <p>{copy.reviewBody}</p>
      </div>
    </section>
  );
}

export default async function CasePage({ params }: CasePageProps) {
  const { locale, messages: { work }, project, relatedProject } = await getCaseStudy(params);
  if (!project) notFound();
  const isGuide = project.slug === "ekb-ai-guide";

  return (
    <div className="light-section">
      <article className="shell section-space case-study" data-project={project.slug}>
        <header className="page-heading">
          <Link href={localizedPath(locale, "/work")} className="text-link">{work.all}</Link>
          <p className="eyebrow section-kicker project-meta">
            <span>{project.category} / <bdi>{project.name}</bdi></span>
            {"badge" in project && <span className="project-badge">{work[project.badge]}</span>}
          </p>
          <h1>{project.title}<span>.</span></h1>
          <p>{project.summary}</p>
        </header>
        {relatedProject ? (
          <>
            {isGuide && <GuideWalkthrough example={work.guideExample} />}
            {project.slug === "ekb" && <JournalLeadership copy={work.journalLeadership} locale={locale} />}
            <Link href={localizedPath(locale, `/work/${relatedProject.slug}`)} className="related-case text-link">
              {relatedProject.title}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </>
        ) : project.slug === "ashti" ? <AcademyArchitecture locale={locale} /> : project.slug === "lc-bvqa" ? <QualityPipeline copy={work.qualityPipeline} /> : <ProjectImage slug={project.slug} alt={project.slug in work.artwork ? work.artwork[project.slug as keyof typeof work.artwork] : ""} wide />}
        <dl className="case-facts">
          <div><dt className="eyebrow">{work.role}</dt><dd>{project.role}</dd></div>
          <div><dt className="eyebrow">{work.stack}</dt><dd><bdi>{project.stack.join(" · ")}</bdi></dd></div>
        </dl>
        {isGuide ? <CaseSections sections={[...project.experience, ...project.engineering]} /> : <CaseViews
          labels={{ details: work.details, view: work.view, experience: work.experience, engineering: work.engineering }}
          experience={<>
            {project.slug === "ekb" && <ManuscriptWorkflow workflow={work.manuscriptWorkflow} />}
            <CaseSections sections={project.experience} />
            {"npmPackage" in project && (
              <pre className="typewriter-example" dir="ltr"><code>{`import { useTypeWriter } from "${project.npmPackage}";

export function SkillsHeading() {
  const skill = useTypeWriter({
    text: ["React", "TypeScript"],
    delay: 2000,
    blinker: "_",
    infiniteLoop: true,
  });

  return <h2>{skill}</h2>;
}`}</code></pre>
            )}
          </>}
          engineering={<>
            <CaseSections sections={project.engineering} />
            {project.slug === "lc-bvqa" && <>
              <QualityResults copy={work.qualityPipeline} />
              <QualityPaper copy={work.qualityPipeline.exhibits} />
            </>}
          </>}
        />}
        {project.slug === "lc-bvqa" && (
          <aside className="quality-paper">
            <p className="eyebrow">{work.qualityPipeline.paper} · <bdi>{videoQualityPaper.venue}</bdi></p>
            <a href={videoQualityPaper.paperUrl} lang="en" dir="ltr">{videoQualityPaper.title}</a>
            <p lang="en" dir="ltr">{videoQualityPaper.authors}</p>
          </aside>
        )}
        {project.url && (
          <div className="case-links">
            <a className="button button-light" href={project.url}>{project.linkLabel}</a>
            {"npmPackage" in project && (
              <a className="button button-light" href={`https://www.npmjs.com/package/${project.npmPackage}`}>
                <code dir="ltr">npm install {project.npmPackage}</code>
              </a>
            )}
          </div>
        )}
      </article>
    </div>
  );
}
