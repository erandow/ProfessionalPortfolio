import Link from "next/link";
import type { Messages } from "@/lib/i18n";
import { localizedPath, type Locale } from "@/lib/locales";

export function NotFoundMessage({ locale, messages }: { locale: Locale; messages: Messages["notFound"] }) {
  return (
    <div className="shell section-space page-heading">
      <h1>{messages.title}<span>.</span></h1>
      <Link href={localizedPath(locale)} className="button button-primary">{messages.back}</Link>
    </div>
  );
}
