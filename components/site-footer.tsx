import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, FileText, Mail } from "lucide-react";
import faceLogo from "@/assets/erfan-face.webp";
import { profile, showHobbies } from "@/lib/content";
import type { Messages } from "@/lib/i18n";
import { localizedPath, type Locale } from "@/lib/locales";

export function SiteFooter({ locale, messages: m }: { locale: Locale; messages: Messages }) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <div className="footer-identity">
            <Link className="wordmark" href={localizedPath(locale)} aria-label={m.nav.homeLabel}>
              <span className="brand-mark"><Image src={faceLogo} alt="" sizes="50px" /></span>
              <span>{m.name}<span className="footer-period" aria-hidden="true">.</span></span>
            </Link>
            <p>{m.home.intro}</p>
          </div>
          <nav className="footer-nav" aria-labelledby="footer-portfolio">
            <h2 id="footer-portfolio" className="eyebrow">{m.home.portfolio}</h2>
            <Link href={localizedPath(locale, "/work")}>{m.nav.work}</Link>
            <Link href={localizedPath(locale, "/#about")}>{m.nav.about}</Link>
            {showHobbies && <Link href={localizedPath(locale, "/#hobbies")}>{m.nav.hobbies}</Link>}
            <Link href={localizedPath(locale, "/#contact")}>{m.nav.contact}</Link>
          </nav>
          <nav className="footer-nav" aria-labelledby="footer-resources">
            <h2 id="footer-resources" className="eyebrow">{m.footer.resources}</h2>
            <a href={profile.github}><bdi>GitHub</bdi><ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href={profile.linkedin}><bdi>LinkedIn</bdi><ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href={profile.resume} aria-label={m.nav.resumePdf}>{m.resume}<FileText size={14} aria-hidden="true" /></a>
          </nav>
        </div>
        <div className="footer-base">
          <a href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" /><bdi>{profile.email}</bdi></a>
          <a href="#top">{m.footer.backToTop}<span className="footer-up"><ArrowUp size={16} aria-hidden="true" /></span></a>
        </div>
      </div>
    </footer>
  );
}
