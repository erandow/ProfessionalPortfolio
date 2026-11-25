import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { pageUrl, siteLocales } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/work", ...projects.map(({ slug }) => `/work/${slug}`)];
  return siteLocales.flatMap((locale) => paths.map((path) => ({ url: pageUrl(locale, path) })));
}
