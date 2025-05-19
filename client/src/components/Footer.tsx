import { motion } from "framer-motion";
import { t } from "i18next";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/erandow/", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/_erandow_", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/erandow/", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:erfanasadi.ce@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    // { name: "Blog", href: "/blog" },
    { name: "Publications", href: "#publications" },
    { name: "Resume", href: "#" },
    { name: "GitHub Repositories", href: "https://github.com/erandow/" },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">erandow</span>
                <span className="text-purple-500">.</span>
                <span className="text-primary">com</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, i) => (
                <SocialIcon key={i} href={link.href}>
                  {link.icon}
                </SocialIcon>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <FooterLink href={link.href}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link, i) => (
                <li key={i}>
                  <FooterLink href={link.href}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
          >
            <p>© {currentYear} {t("footer.copyright", { year: currentYear })}</p>
            <div className="mt-4 md:mt-0 flex items-center">
              <p>{t("footer.builtBy")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

function SocialIcon({ href, children }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200"
      aria-label={`Social link to ${href}`}
    >
      {children}
    </a>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center"
    >
      {children}
      {isExternal && <ExternalLink className="ml-1 h-3 w-3" />}
    </a>
  );
}