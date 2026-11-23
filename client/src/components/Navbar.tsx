import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, Download, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";
import IndustryResumeModal from "@/components/IndustryResumeModal";
import AcademicCVModal from "@/components/AcademicCVModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const { currentLanguage } = useLanguageRoute();
  const location = useLocation();

  const isAcademic = location.pathname.includes("/academic");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Career/Industry navigation links
  const careerNavLinks = [
    { name: "Overview", href: "#hero" },
    { name: "Agent Sandbox", href: "#agent-sandbox" },
    { name: "500k Scale", href: "#scale-simulator" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Hire / Contact", href: "#contact" },
  ];

  // Academic navigation links (page-level routes)
  const academicNavLinks = [
    { name: "Home", href: `/${currentLanguage}/academic` },
    { name: "Research", href: `/${currentLanguage}/academic/research` },
    { name: "Publications", href: `/${currentLanguage}/academic/publications` },
    { name: "About", href: `/${currentLanguage}/academic/about` },
    { name: "CV", href: `/${currentLanguage}/academic/cv`, isCV: true },
  ];

  const currentNavLinks = isAcademic ? academicNavLinks : careerNavLinks;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2.5"
            : "bg-background/80 backdrop-blur-sm border-b border-border/40 py-3"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Left: Brand Identity */}
            <Link
              to={isAcademic ? `/${currentLanguage}/academic` : `/${currentLanguage}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20 group-hover:scale-105 transition-transform">
                EA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base tracking-tight leading-none">
                  Erfan Asadi
                </span>
                <span className="text-[10px] text-muted-foreground font-mono leading-none mt-0.5">
                  {isAcademic ? "AI Researcher" : "Senior AI Engineer"}
                </span>
              </div>
            </Link>

            {/* Middle Left: Mode Switcher (Industry vs Academic) */}
            <div className="hidden md:flex items-center p-1 rounded-full bg-muted/80 border border-border text-xs font-medium">
              <Link
                to={`/${currentLanguage}`}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                  !isAcademic
                    ? "bg-background text-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                <span>Job Positions</span>
              </Link>
              <Link
                to={`/${currentLanguage}/academic`}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                  isAcademic
                    ? "bg-background text-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                <span>Academic Goals</span>
              </Link>
            </div>

            {/* Center/Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1">
              {currentNavLinks.map((link, idx) => {
                const isActive = isAcademic
                  ? location.pathname === link.href || location.pathname.startsWith(link.href + "/")
                  : false;
                const isCV = "isCV" in link && link.isCV;
                if (isAcademic) {
                  return (
                    <Link
                      key={idx}
                      to={link.href}
                      className={`text-xs font-medium px-2.5 py-1.5 rounded-md transition-colors ${
                        isCV
                          ? "border border-academic-border text-academic-accent hover:bg-academic-soft"
                          : isActive
                          ? "text-foreground bg-muted/70"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                }
                return (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-xs font-medium px-2.5 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Tools (Resume/CV Modal, Theme, Language, Mobile Menu) */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {isAcademic ? (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setCvModalOpen(true)}
                  className="hidden sm:inline-flex text-xs h-8 px-2.5 gap-1 border-primary/30 text-primary hover:bg-primary/10"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Academic CV</span>
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="default"
                  onClick={() => setResumeModalOpen(true)}
                  className="hidden sm:inline-flex text-xs h-8 px-2.5 gap-1 shadow-xs font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </Button>
              )}

              <ThemeToggle />
              <LanguageSwitcher />

              {/* Mobile hamburger button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="xl:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3">
            {/* Mobile Mode Switcher */}
            <div className="flex items-center p-1 rounded-lg bg-muted border border-border text-xs font-medium">
              <Link
                to={`/${currentLanguage}`}
                onClick={() => setIsOpen(false)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all ${
                  !isAcademic
                    ? "bg-background text-foreground font-semibold shadow-xs"
                    : "text-muted-foreground"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                <span>Job Positions</span>
              </Link>
              <Link
                to={`/${currentLanguage}/academic`}
                onClick={() => setIsOpen(false)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all ${
                  isAcademic
                    ? "bg-background text-foreground font-semibold shadow-xs"
                    : "text-muted-foreground"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                <span>Academic Goals</span>
              </Link>
            </div>

            {/* Mobile Nav Links */}
            <div className="grid grid-cols-2 gap-1 py-1">
              {currentNavLinks.map((link, idx) => {
                const isActive = isAcademic
                  ? location.pathname === link.href || location.pathname.startsWith(link.href + "/")
                  : false;
                const isCV = "isCV" in link && link.isCV;
                if (isAcademic) {
                  return (
                    <Link
                      key={idx}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xs font-medium px-3 py-2 rounded-md transition-colors ${
                        isCV
                          ? "border border-academic-border text-academic-accent hover:bg-academic-soft"
                          : isActive
                          ? "text-foreground bg-muted/70"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                }
                return (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-2 border-t border-border flex items-center gap-2">
              {isAcademic ? (
                <>
                  <Button
                    size="sm"
                    onClick={() => {
                      setCvModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="text-xs h-8 flex-1 gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Academic CV
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="text-xs h-8 flex-1 gap-1"
                  >
                    <a href="/Erfan-Asadi-Resume.pdf" download="Erfan-Asadi-Resume.pdf">
                      <Download className="w-3.5 h-3.5" />
                      PDF Resume
                    </a>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size="sm"
                    onClick={() => {
                      setResumeModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="text-xs h-8 flex-1 gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    View Resume
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="text-xs h-8 flex-1 gap-1"
                  >
                    <a href="/Erfan-Asadi-Resume.pdf" download="Erfan-Asadi-Resume.pdf">
                      <Download className="w-3.5 h-3.5" />
                      Download PDF
                    </a>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <IndustryResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
      <AcademicCVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}
