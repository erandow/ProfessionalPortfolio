import Image from "next/image";
import Link from "next/link";
import { Asterisk, Download, FileText, FlaskConical, Mail } from "lucide-react";
import welcomePortrait from "@/assets/erfan-suit.webp";
import welcomeWave from "@/assets/erfan-suit-wave.webp";
import workPortrait from "@/assets/erfan-working.webp";
import workTyping from "@/assets/erfan-working-typing.webp";
import officePortrait from "@/assets/erfan-office.webp";
import officeWalkthrough from "@/assets/erfan-office-walkthrough.webp";
import { ProjectGrid } from "@/components/project-grid";
import { experience, profile } from "@/lib/content";

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
        <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={20} aria-hidden="true" /> {profile.email}</a>
      </section>
    </>
  );
}
