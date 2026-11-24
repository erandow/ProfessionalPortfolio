import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/locales";

const labels = {
  en: { title: "How Ashti Academy fits together", catalogue: "Browse the catalogue", interests: "Match interests", payment: "Verify a purchase", upload: "Prepare a lesson", playback: "Stream a lesson", access: "Course access", player: "Lesson player", tags: "Strapi tags" },
  fa: { title: "اجزای آکادمی آشتی چگونه به هم وصل می‌شوند؟", catalogue: "مرور فهرست دوره‌ها", interests: "یافتن موضوعات مرتبط", payment: "تأیید خرید", upload: "آماده‌سازی درس", playback: "پخش درس", access: "دسترسی به دوره", player: "پخش‌کنندهٔ درس", tags: "برچسب‌های Strapi" },
  de: { title: "Wie die Akademie aufgebaut ist", catalogue: "Katalog durchsuchen", interests: "Interessen zuordnen", payment: "Zahlung prüfen", upload: "Lektion aufbereiten", playback: "Lektion abspielen", access: "Kurszugang", player: "Mediaplayer", tags: "Strapi-Themen" },
  fr: { title: "L’architecture de la plateforme", catalogue: "Consulter le catalogue", interests: "Associer les centres d’intérêt", payment: "Vérifier un paiement", upload: "Préparer une leçon", playback: "Diffuser une leçon", access: "Accès au cours", player: "Lecteur multimédia", tags: "Thèmes Strapi" },
  ar: { title: "كيف تتصل مكوّنات الأكاديمية؟", catalogue: "تصفّح الفهرس", interests: "مطابقة الاهتمامات", payment: "التحقّق من الشراء", upload: "تجهيز الدرس", playback: "بثّ الدرس", access: "الوصول إلى الدورة", player: "مشغّل الدروس", tags: "وسوم Strapi" },
} satisfies Record<Locale, Record<string, string>>;

export function AcademyArchitecture({ locale }: { locale: Locale }) {
  const l = labels[locale];
  const paths = [
    { name: l.catalogue, steps: ["React Router", "GraphQL", "Strapi", "PostgreSQL"] },
    { name: l.interests, steps: ["React Router", "Flask", "LangGraph", l.tags] },
    { name: l.payment, steps: ["React Router", "ZarinPal", "Strapi", l.access] },
    { name: l.upload, steps: ["Strapi", "BullMQ / Redis", "FFmpeg", "MinIO"] },
    { name: l.playback, steps: ["MinIO", "React Router", "HLS", l.player] },
  ];

  return (
    <figure className="academy-architecture">
      <figcaption>{l.title}</figcaption>
      {paths.map(({ name, steps }) => (
        <div className="academy-path" key={name}>
          <h3>{name}</h3>
          <ol aria-label={name}>
            {steps.map((step, index) => (
              <li key={step}>
                {index > 0 && <ArrowRight aria-hidden="true" size={16} />}
                <bdi>{step}</bdi>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </figure>
  );
}
