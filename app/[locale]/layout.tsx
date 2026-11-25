import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { getLocale, getPortfolio } from "@/lib/i18n";
import { localizedPath } from "@/lib/locales";
import { siteLocales, siteUrl } from "@/lib/seo";
import { Document } from "@/components/document";

type LocaleLayoutProps = LayoutProps<"/[locale]">;

export const dynamicParams = false;
export const metadata: Metadata = { metadataBase: new URL(siteUrl) };

export function generateStaticParams() {
  return siteLocales.map((locale) => ({ locale }));
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
