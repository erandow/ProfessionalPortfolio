import type { Metadata } from "next";
import { localizedPath, locales, type Locale } from "./locales";

export const siteUrl = "https://erfan-asadi.ir";
export const siteLocales = Object.keys(locales) as Locale[];

export function pageUrl(locale: Locale, path: string) {
  return new URL(localizedPath(locale, path), siteUrl).href;
}

export function pageMetadata(
  locale: Locale,
  path: string,
  { title, description, siteName }: { title: string; description: string; siteName: string },
): Metadata {
  const url = pageUrl(locale, path);
  const languages = Object.fromEntries(siteLocales.map((language) => [language, pageUrl(language, path)]));

  return {
    title,
    description,
    applicationName: siteName,
    alternates: { canonical: url, languages: { ...languages, "x-default": pageUrl("en", path) } },
    openGraph: { title, description, url, type: "website", siteName },
    twitter: { card: "summary", title, description },
  };
}
