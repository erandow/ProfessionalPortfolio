"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { BookImage, BookOpen, FileText, FolderOpen, GraduationCap, House, Mail, Search, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import faceLogo from "@/assets/erfan-face.webp";
import { profile, showHobbies } from "@/lib/content";
import type { Messages } from "@/lib/i18n";
import { isLocale, localizedPath, locales, withoutLocale, type Locale } from "@/lib/locales";
import { PreferenceMenu } from "./preference-menu";
import { ThemeSelect } from "./theme-select";

const links = [
  { href: "/work", label: "work", icon: FolderOpen },
  { href: "/#about", label: "about", icon: User },
  { href: "/#contact", label: "contact", icon: Mail },
] as const;

const commandLinks = [
  { href: "/", label: "home", icon: House },
  ...links,
  ...(showHobbies ? [{ href: "/#hobbies", label: "hobbies", icon: BookImage } as const] : []),
  { href: "/#education", label: "education", icon: GraduationCap },
  { href: "/#publications", label: "publications", icon: BookOpen },
  { href: profile.resume, label: "resumePdf", icon: FileText },
] as const;

export function SiteNav({ locale, name, labels, projectCommands }: {
  locale: Locale;
  name: string;
  labels: Messages["nav"];
  projectCommands: { label: string; category: string; href: string }[];
}) {
  const pathname = withoutLocale(usePathname());
  const router = useRouter();
  const trigger = useRef<HTMLButtonElement>(null);
  const origin = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    setIsApple(/Mac|iPhone|iPad/.test(navigator.platform));
    function handleShortcut(event: KeyboardEvent) {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "k" || event.repeat) return;
      event.preventDefault();
      if (!open) origin.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setOpen(!open);
    }
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [open]);

  function navigate(href: string) {
    setOpen(false);
    if (href === profile.resume) {
      window.location.assign(href);
      return;
    }
    router.push(href);
  }

  return (
    <header id="top" tabIndex={-1} className="site-header shell">
      <Link className="wordmark" href={localizedPath(locale)} aria-label={labels.homeLabel}>
        <span className="brand-mark"><Image src={faceLogo} alt="" sizes="(max-width: 540px) 40px, 50px" loading="eager" /></span>
        <span>{name}</span>
      </Link>
      <nav aria-label={labels.main} className="main-nav">
        {links.map(({ href, label }) => (
          <Link key={href} href={localizedPath(locale, href)} aria-current={pathname === href ? "page" : undefined} data-active={pathname === href || pathname.startsWith(href + "/")}>{labels[label]}</Link>
        ))}
      </nav>
      <div className="header-controls">
        <button
          className="command-trigger"
          type="button"
          ref={trigger}
          aria-label={labels.searchLabel}
          aria-haspopup="dialog"
          aria-keyshortcuts="Control+K Meta+K"
          onClick={() => {
            origin.current = trigger.current;
            setOpen(true);
          }}
        >
          <Search size={17} aria-hidden="true" /><span>{labels.search}</span>
          <kbd dir="ltr" aria-hidden="true">{isApple ? "⌘ K" : "Ctrl K"}</kbd>
        </button>
        <div className="preference-controls">
          <ThemeSelect locale={locale} />
          <PreferenceMenu
            label={labels.language}
            value={locale}
            direction={locales[locale].direction}
            options={Object.entries(locales).map(([code, { name, flag, direction }]) => ({
              value: code, label: name, lang: code, dir: direction,
              icon: <img className="language-flag" src={flag} width={24} height={18} alt="" />,
            }))}
            onChange={(nextLocale) => {
              if (!isLocale(nextLocale) || nextLocale === locale) return;
              const { pathname, search, hash } = window.location;
              window.location.assign(localizedPath(nextLocale, withoutLocale(pathname)) + search + hash);
            }}
          >
            <img className="language-flag" src={locales[locale].flag} width={24} height={18} alt="" />
          </PreferenceMenu>
        </div>
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="command-overlay" />
          <Dialog.Content
            className="command-dialog"
            aria-describedby={undefined}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              (origin.current === document.body ? trigger.current : origin.current ?? trigger.current)?.focus();
            }}
          >
            <Dialog.Title className="sr-only">{labels.palette}</Dialog.Title>
            <Command label={labels.searchLabel}>
              <div className="command-input-row">
                <Search size={20} aria-hidden="true" />
                <Command.Input placeholder={labels.placeholder} />
                <button className="icon-button" type="button" aria-label={labels.close} onClick={() => setOpen(false)}><X size={18} /></button>
              </div>
              <Command.List>
                <Command.Empty>{labels.empty}</Command.Empty>
                <Command.Group heading={labels.navigate}>
                  {commandLinks.map(({ href, label, icon: Icon }) => (
                    <Command.Item key={href} value={labels[label]} onSelect={() => navigate(label === "resumePdf" ? href : localizedPath(locale, href))}><Icon size={17} aria-hidden="true" />{labels[label]}</Command.Item>
                  ))}
                </Command.Group>
                <Command.Group heading={labels.cases}>
                  {projectCommands.map(({ label, href, category }) => (
                    <Command.Item key={href} value={label} keywords={[category]} onSelect={() => navigate(href)}><FolderOpen size={17} aria-hidden="true" /><bdi>{label}</bdi></Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
