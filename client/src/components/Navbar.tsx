import { useState, useEffect, useRef } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguageRoute } from "@/hooks/use-language-route";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { isRTL } = useLanguageRoute();
  const location = useLocation();

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down 40% of the viewport height
      setScrolled(window.scrollY > window.innerHeight * 0.4);

      // Determine which section is currently visible
      const sections = [
        "home", "about", "skills", "experience", "education",
        "projects", "publications", "testimonials", "contact"
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some buffer)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle click outside of more menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMoreMenu = () => {
    setMoreMenuOpen(!moreMenuOpen);
  };

  // Primary navigation items (always visible)
  const primaryNavItems = [
    { name: t('navbar.home'), href: "#home" },
    { name: t('navbar.about'), href: "#about" },
    { name: t('navbar.skills'), href: "#skills" },
    { name: t('navbar.work'), href: "#experience" },
    { name: t('navbar.projects'), href: "#projects" },
  ];

  // Secondary navigation items (in more dropdown)
  const secondaryNavItems = [
    { name: t('navbar.education'), href: "#education" },
    { name: t('navbar.publications'), href: "#publications" },
    { name: t('navbar.testimonials'), href: "#testimonials" },
    { name: t('navbar.contact'), href: "#contact" },
  ];

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
                    <span className="text-primary">erandow</span>
                    <span className="text-purple-500">.</span>
                    <span className="text-primary">com</span>
                  </span>
                </RouterLink>

                {/* Desktop menu */}
                <div className="hidden md:block ml-10">
                  <div className="flex items-center space-x-4">
                    {primaryNavItems.map(item => (
                      <NavLink
                        key={item.href}
                        href={item.href}
                        isActive={activeSection === item.href.replace('#', '')}
                      >
                        {item.name}
                      </NavLink>
                    ))}

                    {/* More dropdown */}
                    <div ref={moreMenuRef} className="relative">
                      <button
                        onClick={toggleMoreMenu}
                        className="flex items-center px-3 py-2 text-sm transition-colors duration-200 rounded-md hover:bg-accent/50"
                      >
                        <span>{t('navbar.more')}</span>
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${moreMenuOpen ? 'transform rotate-180' : ''}`}
                        />
                      </button>

                      {/* More menu dropdown */}
                      {moreMenuOpen && (
                        <div
                          className={`absolute ${isRTL ? 'right-0' : 'left-0'} z-10 mt-2 w-40 rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                        >
                          <div className="py-1">
                            {secondaryNavItems.map(item => (
                              <a
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-2 text-sm transition-colors ${activeSection === item.href.replace('#', '')
                                    ? 'bg-primary/10 text-primary font-medium'
                                    : 'hover:bg-accent/40'
                                  }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMoreMenuOpen(false);

                                  // Smooth scroll to section
                                  const targetId = item.href.replace('#', '');
                                  const element = document.getElementById(targetId);

                                  if (element) {
                                    setTimeout(() => {
                                      element.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                      });

                                      // Update URL without reload
                                      window.history.pushState(null, '', item.href);
                                    }, 100);
                                  }
                                }}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side items */}
              <div className="flex items-center space-x-2">
                <LanguageSwitcher />
                <ThemeToggle />

                {/* Mobile menu button */}
                <div className="flex md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
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

            {/* Mobile menu dropdown */}
            {isOpen && (
              <motion.div
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                  {primaryNavItems.concat(secondaryNavItems).map(item => (
                    <MobileNavLink
                      key={item.href}
                      href={item.href}
                      onClick={toggleMenu}
                      isActive={activeSection === item.href.replace('#', '')}
                    >
                      {item.name}
                    </MobileNavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

function NavLink({ href, children, isActive = false }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update URL without reload
      window.history.pushState(null, '', href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative px-3 py-2 text-sm transition-colors duration-200 rounded-md hover:bg-accent/50
                 ${isActive ? 'text-primary font-medium' : ''}`}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-3"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </a>
  );
}

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  isActive?: boolean;
}

function MobileNavLink({ href, onClick, children, isActive = false }: MobileNavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // First close the mobile menu
    onClick();

    // Then scroll to the section
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Add a small delay to allow the menu to close first
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without reload
        window.history.pushState(null, '', href);
      }, 100);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`flex items-center px-3 py-3 rounded-md transition-colors duration-200
                ${isActive
          ? 'bg-primary/10 text-primary font-medium'
          : 'hover:bg-accent/30'}`}
    >
      {children}
    </a>
  );
}