import { Github, Linkedin, Mail, Twitter, ArrowUp, GraduationCap, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border/80 text-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border/60">
          
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight">Erfan Asadi</span>
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                AI Researcher
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              M.Sc. in Artificial Intelligence from Kharazmi University. Research focused on Video Quality Assessment, AIGC Evaluation, and Autonomous Multi-Agent Systems.
            </p>
            <div className="flex items-center gap-3 pt-2 text-muted-foreground">
              <a
                href="https://github.com/erandow"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/erandow"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/_erandow_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                title="Twitter / X"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:erfanasadi.ce@gmail.com"
                className="hover:text-foreground transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links (4 cols) */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <p className="font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#news" className="hover:text-primary transition-colors">News</a>
              <a href="#research" className="hover:text-primary transition-colors">Research Areas</a>
              <a href="#publications" className="hover:text-primary transition-colors">Publications</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#teaching" className="hover:text-primary transition-colors">Teaching</a>
              <a href="#education" className="hover:text-primary transition-colors">Education</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            </div>
          </div>

          {/* Academic Documents (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <p className="font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Documents & CV
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="/Erfan-Asadi-Resume.pdf"
                  download="Erfan-Asadi-Resume.pdf"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Download Resume (PDF)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/erandow/LC-BVQA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  LC-BVQA Codebase
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact for Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <p>© {currentYear} Erfan Asadi. Built with modern academic web standards.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-foreground transition-colors font-medium"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
