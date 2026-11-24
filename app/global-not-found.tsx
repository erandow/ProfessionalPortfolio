import { headers } from "next/headers";
import { Document } from "@/components/document";
import { NotFoundMessage } from "@/components/not-found-message";
import { getPortfolio } from "@/lib/i18n";
import { isLocale } from "@/lib/locales";

export default async function GlobalNotFound() {
  const candidate = (await headers()).get("x-portfolio-locale");
  const locale = isLocale(candidate) ? candidate : "en";
  const { messages } = await getPortfolio(locale);
  return (
    <Document locale={locale}>
      <main><NotFoundMessage locale={locale} messages={messages.notFound} /></main>
    </Document>
  );
}
