import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down 100vh (past the hero section)
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      {(scrolled || isOpen) && (
        <motion.nav 
          className="fixed top-0 w-full z-50 backdrop-blur-lg border-b bg-background/90 border-border"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <RouterLink to="/" className="flex items-center">
                  <span className="text-xl font-bold tracking-tight">
                    <span className="text-primary">Dev</span>
                    <span className="text-purple-500">.</span>
                    <span className="text-primary">AI</span>
                  </span>
                </RouterLink>
              </div>

              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <ThemeToggle />
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden items-center">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>
                  Experience
                </MobileNavLink>
                <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>
                  Skills
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="hover:text-primary transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
}

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

function MobileNavLink({ href, onClick, children }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md hover:bg-accent/10 transition-colors duration-200"
    >
      {children}
    </a>
  );
}
