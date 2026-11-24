export const themes = [
  { id: "classic", label: "Classic" },
  { id: "sage", label: "Sage" },
  { id: "wheat", label: "Wheat" },
] as const;

export type Theme = (typeof themes)[number]["id"];

export const defaultTheme = themes[0].id;
export const themeStorageKey = "portfolio-theme";

export function isTheme(value: string | null | undefined): value is Theme {
  return themes.some(({ id }) => id === value);
}

export const initializeTheme = `
  try {
    const theme = localStorage.getItem(${JSON.stringify(themeStorageKey)});
    if (${JSON.stringify(themes.map(({ id }) => id))}.includes(theme)) {
      document.documentElement.dataset.theme = theme;
    }
  } catch {}
`;
