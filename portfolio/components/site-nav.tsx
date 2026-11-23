"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { Asterisk, Command as CommandIcon, FileText, FlaskConical, FolderOpen, House, Mail, Search, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";

const links = [
  { href: "/work", label: "Work", icon: FolderOpen },
  { href: "/lab", label: "Lab", icon: FlaskConical },
  { href: "/#about", label: "About", icon: User },
  { href: "/#contact", label: "Contact", icon: Mail },
];

export function SiteNav({ projectCommands }: { projectCommands: { label: string; category: string; href: string }[] }) {
  const pathname = usePathname();
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
    if (href.endsWith(".pdf")) {
      window.location.assign(href);
      return;
    }
    router.push(href);
  }

  return (
    <header className="site-header shell">
      <Link className="wordmark" href="/" aria-label="Erfan Asadi home">
        <span className="brand-mark" aria-hidden="true"><Asterisk size={21} strokeWidth={3} /></span>
        Erfan Asadi
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} data-active={pathname === href || pathname.startsWith(href + "/")}>{label}</Link>
        ))}
      </nav>
      <div className="command-control">
        <button
          className="command-trigger"
          type="button"
          ref={trigger}
          aria-label="Open command palette"
          aria-haspopup="dialog"
          aria-keyshortcuts="Control+K Meta+K"
          onClick={() => {
            origin.current = trigger.current;
            setOpen(true);
          }}
        >
          <CommandIcon size={16} aria-hidden="true" /><span>Command</span>
        </button>
        <kbd aria-hidden="true">{isApple ? "⌘ K" : "Ctrl K"}</kbd>
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
            <Dialog.Title className="sr-only">Command palette</Dialog.Title>
            <Command label="Search pages and projects">
              <div className="command-input-row">
                <Search size={20} aria-hidden="true" />
                <Command.Input placeholder="Search pages and projects…" />
                <button className="icon-button" type="button" aria-label="Close command palette" onClick={() => setOpen(false)}><X size={18} /></button>
              </div>
              <Command.List>
                <Command.Empty>No matching commands.</Command.Empty>
                <Command.Group heading="Navigate">
                  {[{ href: "/", label: "Home", icon: House }, ...links, { href: profile.resume, label: "Résumé PDF", icon: FileText }].map(({ href, label, icon: Icon }) => (
                    <Command.Item key={href} value={label} onSelect={() => navigate(href)}><Icon size={17} aria-hidden="true" />{label}</Command.Item>
                  ))}
                </Command.Group>
                <Command.Group heading="Case studies">
                  {projectCommands.map(({ label, href, category }) => (
                    <Command.Item key={href} value={label} keywords={[category]} onSelect={() => navigate(href)}><FolderOpen size={17} aria-hidden="true" />{label}</Command.Item>
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
