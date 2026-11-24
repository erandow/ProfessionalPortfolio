import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Asterisk, Download, FileText, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react";
import welcomePortrait from "@/assets/erfan-suit.webp";
import welcomeWave from "@/assets/erfan-suit-wave.webp";
import workPortrait from "@/assets/erfan-working.webp";
import workTyping from "@/assets/erfan-working-typing.webp";
import officePortrait from "@/assets/erfan-office.webp";
import officeWalkthrough from "@/assets/erfan-office-walkthrough.webp";
import researchPortrait from "@/assets/erfan-research.webp";
import researchWriting from "@/assets/erfan-research-writing.webp";
import graduationPortrait from "@/assets/erfan-graduation.webp";
import { ProjectGrid } from "@/components/project-grid";
import { profile } from "@/lib/content";
import { getLocale, getPortfolio } from "@/lib/i18n";
import { localizedPath } from "@/lib/locales";

const contactMethods = [
  { label: "Email", detail: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", detail: profile.name, href: profile.linkedin, Icon: Linkedin },
  { label: "Telegram", detail: `@${profile.telegram}`, href: `https://t.me/${profile.telegram}`, Icon: Send },
  { label: "Phone", detail: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, Icon: Phone },
  { label: "Twitter", detail: `@${profile.twitter}`, href: `https://x.com/${profile.twitter}`, Icon: Twitter },
];

export default async function Home({ params }: PageProps<"/[locale]">) {
  const locale = await getLocale(params);
  const { messages: m, projects, experience, education, publications } = await getPortfolio(locale);
  const h = m.home;
  return (
    <>
      <section className="hero" aria-labelledby="intro-title">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <h1 id="intro-title">{m.name}<span>.</span></h1>
            <p className="hero-intro">{h.intro}</p>
            <p className="hero-tagline">{h.tagline} <em>{h.taglineEmphasis}</em></p>
            <div className="hero-actions">
              <Link href="#selected-work" className="button button-primary">{h.viewWork}</Link>
              <a href={profile.resume} className="button button-outline"><FileText size={16} aria-hidden="true" /> {m.resume}</a>
            </div>
          </div>
          <a href="#selected-work" className="hero-scroll eyebrow">
            {h.scroll}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
          <figure className="hero-welcome">
            <figcaption>{h.welcome}</figcaption>
            <picture>
              <source media="(prefers-reduced-motion: no-preference)" srcSet={welcomeWave.src} />
              <img src={welcomePortrait.src} width={welcomePortrait.width} height={welcomePortrait.height} alt="" />
            </picture>
          </figure>
        </div>
      </section>

      <section id="selected-work" className="light-section" aria-labelledby="selected-title">
        <div className="shell section-space">
          <div className="selected-work-heading">
            <div>
              <p className="eyebrow section-kicker"><Asterisk size={17} aria-hidden="true" /> {h.portfolio}</p>
              <h2 id="selected-title">{h.selectedWork}<span>.</span></h2>
              <Link href={localizedPath(locale, "/work")} className="button button-light">{m.work.all}</Link>
            </div>
            <picture className="selected-work-portrait">
              <source media="(prefers-reduced-motion: no-preference)" srcSet={workTyping.src} />
              <Image
                src={workPortrait}
                alt={h.workAlt}
                sizes="(max-width: 440px) calc(100vw - 2rem), 400px"
              />
            </picture>
          </div>
          <ProjectGrid locale={locale} projects={projects} labels={m.work} featureEkb />
        </div>
      </section>

      <section id="experience" className="shell section-space split-section" aria-labelledby="experience-title">
        <div>
          <p className="eyebrow section-kicker"><Asterisk size={17} aria-hidden="true" /> {h.career}</p>
          <h2 id="experience-title">{h.experience}<span>.</span></h2>
          <picture className="experience-portrait">
            <source media="(prefers-reduced-motion: no-preference)" srcSet={officeWalkthrough.src} />
            <Image
              src={officePortrait}
              alt={h.experienceAlt}
              sizes="(max-width: 480px) calc(100vw - 2rem), (max-width: 760px) 448px, 38vw"
            />
          </picture>
        </div>
        <ol className="experience-list">
          {experience.map((job) => (
            <li key={job.company}>
              <p className="eyebrow">{job.period}</p>
              <h3><bdi>{job.company}</bdi></h3>
              <p className="job-role">{job.role}</p>
              <p>{job.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="education" className="light-section" aria-labelledby="education-title">
        <div className="shell section-space education-layout">
          <div>
            <h2 id="education-title">{m.nav.education}<span>.</span></h2>
            <ol className="academic-entries">
              {education.map((entry) => (
                <li key={entry.institution}>
                  <p className="eyebrow academic-meta"><bdi>{entry.period}</bdi> · {entry.location}</p>
                  <h3>{entry.degree}</h3>
                  <p className="academic-byline">{entry.institution}</p>
                  <p>{h.thesis} · <cite>{entry.thesis}</cite></p>
                  <p>{entry.honor}</p>
                </li>
              ))}
            </ol>
          </div>
          <Image
            className="graduation-portrait"
            src={graduationPortrait}
            alt={h.graduationAlt}
            sizes="(max-width: 760px) 121px, (max-width: 1050px) 181px, 224px"
          />
        </div>
      </section>

      <section id="publications" className="light-section publications-section" aria-labelledby="publications-title">
        <div className="shell section-space split-section publication-layout">
          <div>
            <h2 id="publications-title">{m.nav.publications}<span>.</span></h2>
            <picture className="publication-figure">
              <source media="(prefers-reduced-motion: no-preference)" srcSet={researchWriting.src} />
              <Image
                className="publication-portrait"
                src={researchPortrait}
                alt={h.researchAlt}
                sizes="(max-width: 760px) 92vw, (max-width: 1280px) 38vw, 480px"
              />
            </picture>
          </div>
          <ol className="academic-entries">
            {publications.map((paper) => {
              const [beforeName, afterName] = paper.authors.split(profile.name);
              return (
                <li key={paper.title}>
                  <p className="eyebrow academic-meta"><bdi>{paper.venue}</bdi>{paper.award && <> · {paper.award}</>}</p>
                  <h3 lang="en"><bdi>{paper.title}</bdi></h3>
                  <p className="academic-byline" lang="en"><bdi>{beforeName}<strong>{profile.name}</strong>{afterName}</bdi></p>
                  <p>{paper.summary}</p>
                  {paper.paperUrl && (
                    <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer" className="academic-paper-link">
                      {h.readPaper}<span className="sr-only"> · <bdi lang="en">{paper.title}</bdi> ({h.newTab})</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="shell section-space about-grid">
          <div>
            <p className="eyebrow section-kicker"><Asterisk size={17} aria-hidden="true" /> {m.nav.about}</p>
            <h2>{h.aboutTitle}<span>.</span></h2>
          </div>
          <div>
            <p>{h.bio}</p>
            <p>{h.researchBio}</p>
            <section id="resume" className="resume-callout" aria-labelledby="resume-title">
              <h3 id="resume-title">{m.resume}</h3>
              <div className="flex flex-wrap gap-3">
                <a href={profile.resume} className="button button-outline" download><Download size={16} aria-hidden="true" /> {h.download}</a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="contact" className="shell section-space contact-section" aria-labelledby="contact-title">
        <p className="eyebrow section-kicker"><Asterisk size={17} aria-hidden="true" /> {m.nav.contact}</p>
        <h2 id="contact-title">{h.talk}<span>.</span></h2>
        <ul className="contact-links">
          {contactMethods.map(({ label, detail, href, Icon }) => (
            <li key={label}>
              <a href={href} className="contact-link" data-channel={label}>
                <span className="contact-icon"><Icon size={24} strokeWidth={1.75} aria-hidden="true" /></span>
                <span className="contact-details">
                  <span className="eyebrow">{label === "Email" ? h.email : label === "Phone" ? h.phone : label}</span>
                  <span><bdi dir={label === "LinkedIn" ? undefined : "ltr"}>{label === "LinkedIn" ? m.name : detail}</bdi></span>
                </span>
                <ArrowUpRight className="contact-arrow" size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
