import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-void/90 backdrop-blur-md border-b border-cyan/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="font-orbitron text-xl font-bold tracking-wider group"
            >
              <span className="text-cyan group-hover:text-danger transition-colors duration-300">
                CK
              </span>
              <span className="text-fog text-sm ml-1">//</span>
              <span className="text-mist text-sm ml-1">PROTOCOL</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative font-monoTech text-sm tracking-wider transition-all duration-300 group ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan'
                      : 'text-fog hover:text-mist'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-cyan transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyan p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-cyan/30">
          <div
            className="h-full bg-cyan shadow-cyan transition-all duration-100"
            style={{
              width: `${
                (window.scrollY /
                  (document.documentElement.scrollHeight - window.innerHeight)) *
                100
              }%`,
            }}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-void/98 backdrop-blur-lg transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`font-orbitron text-2xl tracking-wider transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan glow-cyan'
                  : 'text-fog hover:text-mist'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-cyan/50 text-sm mr-2">
                0{index + 1}//
              </span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
