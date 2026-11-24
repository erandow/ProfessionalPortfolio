import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Asterisk, Download, FileText, FlaskConical, Linkedin, Mail, Phone, Send } from "lucide-react";
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
import { education, experience, profile, publications } from "@/lib/content";

const contactMethods = [
  { label: "Email", detail: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", detail: profile.name, href: profile.linkedin, Icon: Linkedin },
  { label: "Telegram", detail: `@${profile.telegram}`, href: `https://t.me/${profile.telegram}`, Icon: Send },
  { label: "Phone", detail: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, Icon: Phone },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="intro-title">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <h1 id="intro-title">Erfan Asadi<span>.</span></h1>
            <p className="hero-intro">Frontend tech lead and AI product engineer.</p>
            <p className="hero-tagline">Serious engineering. <em>Playful thinking.</em></p>
            <div className="hero-actions">
              <Link href="#selected-work" className="button button-primary">View work</Link>
              <a href={profile.resume} className="button button-outline"><FileText size={16} aria-hidden="true" /> Résumé</a>
            </div>
          </div>
          <figure className="hero-welcome">
            <figcaption>Welcome!</figcaption>
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
              <p className="eyebrow section-kicker"><Asterisk size={17} aria-hidden="true" /> Portfolio</p>
              <h2 id="selected-title">Selected work<span>.</span></h2>
              <Link href="/work" className="button button-light">All case studies</Link>
            </div>
            <picture className="selected-work-portrait">
              <source media="(prefers-reduced-motion: no-preference)" srcSet={workTyping.src} />
              <Image
                src={workPortrait}
                alt="Illustration of Erfan Asadi typing at a desk with a laptop and an open sketchbook"
                sizes="(max-width: 440px) calc(100vw - 2rem), 400px"
              />
            </picture>
          </div>
          <ProjectGrid featureEkb />
        </div>
      </section>

      <section id="experience" className="shell section-space split-section" aria-labelledby="experience-title">
        <div>
          <p className="eyebrow section-kicker"><Asterisk size={17} aria-hidden="true" /> Career</p>
          <h2 id="experience-title">Experience<span>.</span></h2>
          <picture className="experience-portrait">
            <source media="(prefers-reduced-motion: no-preference)" srcSet={officeWalkthrough.src} />
            <Image
              src={officePortrait}
              alt="Illustration of Erfan Asadi guiding teammates through a project board in an office"
              sizes="(max-width: 480px) calc(100vw - 2rem), (max-width: 760px) 448px, 38vw"
            />
          </picture>
        </div>
        <ol className="experience-list">
          {experience.map((job) => (
            <li key={job.company}>
              <p className="eyebrow">{job.period}</p>
              <h3>{job.company}</h3>
              <p className="job-role">{job.role}</p>
              <p>{job.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="education" className="light-section" aria-labelledby="education-title">
        <div className="shell section-space education-layout">
          <div>
            <h2 id="education-title">Education<span>.</span></h2>
            <ol className="academic-entries">
              {education.map((entry) => (
                <li key={entry.institution}>
                  <p className="eyebrow academic-meta">{entry.period} · {entry.location}</p>
                  <h3>{entry.degree}</h3>
                  <p className="academic-byline">{entry.institution}</p>
                  <p>Thesis · <cite>{entry.thesis}</cite></p>
                  <p>{entry.honor}</p>
                </li>
              ))}
            </ol>
          </div>
          <Image
            className="graduation-portrait"
            src={graduationPortrait}
            alt="Erfan Asadi in a graduation cap and gown"
            sizes="(max-width: 760px) 121px, (max-width: 1050px) 181px, 224px"
          />
        </div>
      </section>

      <section id="publications" className="light-section publications-section" aria-labelledby="publications-title">
        <div className="shell section-space split-section">
          <div>
            <h2 id="publications-title">Publications<span>.</span></h2>
            <picture>
              <source media="(prefers-reduced-motion: no-preference)" srcSet={researchWriting.src} />
              <Image
                className="publication-portrait"
                src={researchPortrait}
                alt="Erfan Asadi writing research notes at a university library table"
                sizes="(max-width: 760px) 92vw, (max-width: 1280px) 38vw, 480px"
              />
            </picture>
          </div>
          <ol className="academic-entries">
            {publications.map((paper) => {
              const [beforeName, afterName] = paper.authors.split(profile.name);
              return (
                <li key={paper.title}>
                  <p className="eyebrow academic-meta">{paper.venue}{paper.award && <> · {paper.award}</>}</p>
                  <h3>{paper.title}</h3>
                  <p className="academic-byline">{beforeName}<strong>{profile.name}</strong>{afterName}</p>
                  <p>{paper.summary}</p>
                  {paper.paperUrl && (
                    <a href={paper.paperUrl} className="academic-paper-link">
                      Read paper (PDF)<span className="sr-only"> · {paper.title}</span>
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
            <p className="eyebrow section-kicker"><Asterisk size={17} aria-hidden="true" /> About</p>
            <h2>A bit about me<span>.</span></h2>
          </div>
          <div>
            <p>I lead frontend development for the Egyptian Knowledge Bank’s scholarly journal platform at NotionWave. I’ve also built online learning products and integrated AI agents into a personal data workspace.</p>
            <p>I also have a master’s in artificial intelligence from Kharazmi University, where I worked on blind video quality assessment.</p>
            <section id="resume" className="resume-callout" aria-labelledby="resume-title">
              <h3 id="resume-title">Résumé</h3>
              <div className="flex flex-wrap gap-3">
                <a href={profile.resume} className="button button-outline" download><Download size={16} aria-hidden="true" /> Download PDF</a>
                <Link href="/lab" className="button button-outline"><FlaskConical size={16} aria-hidden="true" /> Visit the Lab</Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="contact" className="shell section-space contact-section" aria-labelledby="contact-title">
        <p className="eyebrow section-kicker"><Asterisk size={17} aria-hidden="true" /> Contact</p>
        <h2 id="contact-title">Let’s talk<span>.</span></h2>
        <ul className="contact-links">
          {contactMethods.map(({ label, detail, href, Icon }) => (
            <li key={label}>
              <a href={href} className="contact-link" data-channel={label}>
                <span className="contact-icon"><Icon size={24} strokeWidth={1.75} aria-hidden="true" /></span>
                <span className="contact-details">
                  <span className="eyebrow">{label}</span>
                  <span>{detail}</span>
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
