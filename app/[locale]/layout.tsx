import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/lib/content";
import { getLocale, getPortfolio } from "@/lib/i18n";
import { localizedPath, locales } from "@/lib/locales";
import { Document } from "@/components/document";

type LocaleLayoutProps = LayoutProps<"/[locale]">;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(locales).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const { messages: m } = await getPortfolio(locale);
  const title = `${m.name} | ${m.siteName}`;
  return {
    title: { default: m.name, template: `%s | ${m.name}` },
    description: m.description,
    applicationName: m.siteName,
    openGraph: { title, description: m.description, type: "website", siteName: m.siteName },
    twitter: { card: "summary", title, description: m.description },
  };
}

export default async function RootLayout({ children, params }: LocaleLayoutProps) {
  const locale = await getLocale(params);
  const { messages: m, projects } = await getPortfolio(locale);
  return (
    <Document locale={locale}>
      <a href="#main-content" className="skip-link">{m.skip}</a>
      <SiteNav
        locale={locale}
        name={m.name}
        labels={m.nav}
        projectCommands={projects.map(({ name, category, slug }) => ({ label: name, category, href: localizedPath(locale, `/work/${slug}`) }))}
      />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="site-footer shell">
        <Link href={localizedPath(locale)}>{m.name}</Link>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={profile.github}><bdi>GitHub</bdi></a>
          <a href={profile.linkedin}><bdi>LinkedIn</bdi></a>
          <a href={profile.resume}>{m.resume}</a>
        </div>
      </footer>
    </Document>
  );
}
