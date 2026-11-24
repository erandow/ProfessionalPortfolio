import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { profile, projects } from "@/lib/content";
import "./globals.css";

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

const description = "Erfan Asadi is a frontend tech lead and AI-powered product engineer. Explore his engineering case studies and interactive experiments.";

export const metadata: Metadata = {
  title: { default: "Erfan Asadi", template: "%s | Erfan Asadi" },
  description,
  applicationName: "Living Workbench",
  openGraph: { title: "Erfan Asadi | Living Workbench", description, type: "website", siteName: "Living Workbench" },
  twitter: { card: "summary", title: "Erfan Asadi | Living Workbench", description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteNav projectCommands={projects.map(({ name, category, slug }) => ({ label: name, category, href: `/work/${slug}` }))} />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <footer className="site-footer shell">
          <Link href="/">Erfan Asadi</Link>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={profile.github}>GitHub</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.resume}>Résumé</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
