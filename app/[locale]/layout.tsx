import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
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
      <SiteFooter locale={locale} messages={m} />
    </Document>
  );
}
