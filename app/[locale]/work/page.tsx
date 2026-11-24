import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { getLocale, getPortfolio } from "@/lib/i18n";

type WorkPageProps = PageProps<"/[locale]/work">;

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { messages: { work } } = await getPortfolio(await getLocale(params));
  return { title: work.title, description: work.description };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const locale = await getLocale(params);
  const { messages: { nav, work }, projects } = await getPortfolio(locale);
  return (
    <div className="light-section">
      <div className="shell section-space">
        <header className="page-heading">
          <p className="eyebrow section-kicker">{nav.work}</p>
          <h1>{work.title}<span>.</span></h1>
          <p>{work.intro}</p>
        </header>
        <ProjectGrid locale={locale} projects={projects} labels={work} />
      </div>
    </div>
  );
}
