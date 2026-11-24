export const locales = {
  en: { name: "English", flag: "/flags/gb.svg", direction: "ltr" },
  fr: { name: "Français", flag: "/flags/fr.svg", direction: "ltr" },
  fa: { name: "فارسی", flag: "/flags/ir.svg", direction: "rtl" },
  ar: { name: "العربية", flag: "/flags/sa.svg", direction: "rtl" },
  de: { name: "Deutsch", flag: "/flags/de.svg", direction: "ltr" },
} as const;

export type Locale = keyof typeof locales;

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && Object.hasOwn(locales, value);
}

export function localizedPath(locale: Locale, path = "/") {
  if (locale === "en") return path;
  const suffix = path === "/" || path.startsWith("/#") ? path.slice(1) : path;
  return `/${locale}${suffix}`;
}

export function withoutLocale(pathname: string) {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? pathname.slice(segment.length + 1) || "/" : pathname;
}
