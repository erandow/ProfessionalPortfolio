import type { Metadata } from "next";
import { FolderOpen } from "lucide-react";
import typing from "@/assets/erfan-working-typing.webp";
import still from "@/assets/erfan-working.webp";
import { ProjectGrid } from "@/components/project-grid";
import { getLocale, getPortfolio } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type WorkPageProps = PageProps<"/[locale]/work">;

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const { messages: { work, name, siteName } } = await getPortfolio(locale);
  return pageMetadata(locale, "/work", {
    title: `${work.title} | ${name}`,
    description: work.description,
    siteName,
  });
}

export default async function WorkPage({ params }: WorkPageProps) {
  const locale = await getLocale(params);
  const { messages: { home, work }, projects } = await getPortfolio(locale);
  return (
    <div className="work-index light-section">
      <header className="work-masthead">
        <div className="shell work-intro">
          <div className="work-lead">
            <h1>{work.title}<span>.</span></h1>
            <p>{work.intro}</p>
          </div>
          <div className="work-studio">
            <picture>
              <source media="(prefers-reduced-motion: no-preference)" srcSet={typing.src} />
              <img src={still.src} width={still.width} height={still.height} alt={home.workAlt} />
            </picture>
          </div>
        </div>
      </header>
      <section className="shell work-collection" aria-labelledby="collection-title">
        <div className="collection-heading">
          <FolderOpen size={21} aria-hidden="true" />
          <h2 id="collection-title">{work.all}</h2>
          <span>{new Intl.NumberFormat(locale).format(projects.length)}</span>
        </div>
        <ProjectGrid locale={locale} projects={projects} labels={work} />
      </section>
    </div>
  );
}
