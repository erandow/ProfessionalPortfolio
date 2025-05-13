import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">Dev</span>
              <span className="text-purple-500">.</span>
              <span className="text-primary">AI</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#experience">Experience</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Erfan Asadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  );
}
