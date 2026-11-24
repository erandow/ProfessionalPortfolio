import localFont from "next/font/local";
import { locales, type Locale } from "@/lib/locales";
import { defaultTheme, initializeTheme } from "@/lib/themes";
import "@/app/globals.css";

const display = localFont({
  src: "../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "300 700",
});
const body = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-body",
  weight: "100 900",
});
const mono = localFont({
  src: "../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-mono",
  weight: "100 800",
  preload: false,
});

export function Document({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} dir={locales[locale].direction} data-theme={defaultTheme} data-scroll-behavior="smooth" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
