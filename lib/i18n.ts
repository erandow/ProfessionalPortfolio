import { notFound } from "next/navigation";
import { education, experience, projects, publications } from "./content";
import { isLocale, type Locale } from "./locales";
import { en } from "./messages/en";

export type Messages = typeof en;

type TranslationEntries<T, Entry> = { [I in keyof T]: Entry };

type CaseSection = { title: string; body: string };

export type ContentTranslation = {
  projects: Record<(typeof projects)[number]["slug"], {
    category: string;
    title: string;
    summary: string;
    role: string;
    linkLabel?: string;
    experience: [CaseSection, CaseSection];
    engineering: [CaseSection, CaseSection];
  }>;
  experience: TranslationEntries<typeof experience, { role: string; period: string; detail: string }>;
  education: TranslationEntries<typeof education, { degree: string; institution: string; location: string; thesis: string; honor: string }>;
  publications: TranslationEntries<typeof publications, { venue: string; award: string | null; summary: string }>;
};

const dictionaries = {
  fr: () => import("./messages/fr"),
  fa: () => import("./messages/fa"),
  ar: () => import("./messages/ar"),
  de: () => import("./messages/de"),
};

export async function getLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function getPortfolio(locale: Locale) {
  const translation = locale === "en" ? null : await dictionaries[locale]();
  const content = translation?.content;
  return {
    messages: translation?.messages ?? en,
    projects: projects.map((project) => ({ ...project, ...content?.projects[project.slug] })),
    experience: experience.map((job, index) => ({ ...job, ...content?.experience[index] })),
    education: education.map((entry, index) => ({ ...entry, ...content?.education[index] })),
    publications: publications.map((paper, index) => ({ ...paper, ...content?.publications[index] })),
  };
}

export type LocalizedProject = Awaited<ReturnType<typeof getPortfolio>>["projects"][number];
