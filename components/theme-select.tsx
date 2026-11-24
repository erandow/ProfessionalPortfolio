"use client";

import { Palette } from "lucide-react";
import { useEffect, useState } from "react";
import { locales, type Locale } from "@/lib/locales";
import { defaultTheme, isTheme, themes, themeStorageKey, type Theme } from "@/lib/themes";
import { PreferenceMenu } from "./preference-menu";

const translations: Record<Exclude<Locale, "en">, { label: string; options: Record<Theme, string> }> = {
  fr: { label: "Thème de couleurs", options: { classic: "Original", sage: "Sauge", wheat: "Blé" } },
  fa: { label: "تم رنگی", options: { classic: "اصلی", sage: "مریم‌گلی", wheat: "گندمی" } },
  ar: { label: "نمط الألوان", options: { classic: "الأصلي", sage: "مريمية", wheat: "قمحي" } },
  de: { label: "Farbschema", options: { classic: "Klassisch", sage: "Salbei", wheat: "Weizen" } },
};

export function ThemeSelect({ locale }: { locale: Locale }) {
  const translation = locale === "en" ? undefined : translations[locale];
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const appliedTheme = document.documentElement.dataset.theme;
    if (isTheme(appliedTheme)) setTheme(appliedTheme);
  }, []);

  function changeTheme(value: string) {
    if (!isTheme(value)) return;

    document.documentElement.dataset.theme = value;
    setTheme(value);
    try {
      localStorage.setItem(themeStorageKey, value);
    } catch {
      // The theme still applies when storage is unavailable.
    }
  }

  const options = themes.map(({ id, label }) => ({
    value: id,
    label: translation?.options[id] ?? label,
    icon: <span className="theme-swatch" data-swatch={id} aria-hidden="true" />,
  }));

  return (
    <PreferenceMenu label={translation?.label ?? "Color theme"} value={theme} options={options} direction={locales[locale].direction} onChange={changeTheme}>
      <Palette size={15} aria-hidden="true" />
      <span className="theme-name">{options.find(({ value }) => value === theme)?.label}</span>
    </PreferenceMenu>
  );
}
