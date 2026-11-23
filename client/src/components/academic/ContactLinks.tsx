import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaOrcid, FaGoogleScholar } from "react-icons/fa6";

interface ContactLinksProps {
  className?: string;
  variant?: "horizontal" | "grid";
}

export default function ContactLinks({
  className = "",
  variant = "horizontal",
}: ContactLinksProps) {
  const links = [
    {
      name: "Email",
      value: "erfan.asadi.ce@gmail.com",
      href: "mailto:erfan.asadi.ce@gmail.com",
      icon: <Mail className="w-4 h-4" />,
      note: "Primary communication",
    },
    {
      name: "GitHub",
      value: "github.com/erandow",
      href: "https://github.com/erandow",
      icon: <FaGithub className="w-4 h-4" />,
      note: "Code & reproducibility",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/erfan-asadi",
      href: "https://www.linkedin.com/in/erfan-asadi",
      icon: <FaLinkedin className="w-4 h-4" />,
      note: "Professional network",
    },
    {
      name: "Google Scholar",
      value: "Google Scholar Profile",
      href: "https://scholar.google.com",
      icon: <FaGoogleScholar className="w-4 h-4" />,
      note: "Citations & indexes",
    },
    {
      name: "ORCID",
      value: "ORCID Record",
      href: "https://orcid.org",
      icon: <FaOrcid className="w-4 h-4 text-[#A6CE39]" />,
      note: "Researcher identifier",
    },
  ];

  if (variant === "grid") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-start gap-3 p-4 rounded-xl border border-academic-border bg-academic-card hover:bg-academic-soft hover:border-academic-accent/40 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-academic-soft flex items-center justify-center text-academic-text group-hover:text-academic-accent transition-colors">
              {link.icon}
            </div>
            <div>
              <span className="block text-xs font-mono font-medium text-academic-muted">
                {link.name}
              </span>
              <span className="text-sm font-semibold text-academic-text group-hover:text-academic-accent transition-colors break-all">
                {link.value}
              </span>
              <span className="block text-[11px] text-academic-muted/70 mt-0.5">
                {link.note}
              </span>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-academic-border bg-academic-card hover:bg-academic-soft hover:text-academic-accent text-xs font-medium text-academic-text transition-colors"
          title={link.name}
        >
          {link.icon}
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
}
