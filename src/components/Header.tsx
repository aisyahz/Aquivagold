import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenConsultation: () => void;
  currentView: "home" | "agent";
  onNavigate: (view: "home" | "agent") => void;
}

export default function Header({ onOpenConsultation, currentView, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Utama", action: () => onNavigate("home"), href: "#" },
    { label: "Koleksi", action: () => onNavigate("home"), href: "#collection" },
    { label: "Sertai Usahawan", action: () => onNavigate("agent"), href: "/agent" },
    { label: "Tentang Kami", action: () => onNavigate("home"), href: "#about" },
    { label: "Kelebihan", action: () => onNavigate("home"), href: "#why-choose" },
    { label: "Testimoni", action: () => onNavigate("home"), href: "#reviews" },
    { label: "Soalan Lazim", action: () => onNavigate("home"), href: "#faq" },
  ];

  const handleLinkClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (link.href.startsWith("#")) {
      e.preventDefault();
      // Navigate to home first if on agent page
      if (currentView !== "home") {
        onNavigate("home");
        // Delay scroll to let DOM mount home page
        setTimeout(() => {
          const targetId = link.href.slice(1);
          const el = document.getElementById(targetId || "main-layout-container");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const targetId = link.href.slice(1);
        const el = document.getElementById(targetId || "main-layout-container");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      e.preventDefault();
      link.action();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md py-3.5 border-b border-stone/50 shadow-sm"
          : "bg-white/20 backdrop-blur-sm py-5 border-b border-white/10"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Section */}
        <button
          onClick={() => {
            onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col select-none group text-left cursor-pointer focus:outline-none"
          id="header-logo"
        >
          <span className="font-serif text-lg md:text-xl font-medium tracking-[0.25em] text-charcoal group-hover:text-gold transition-colors duration-300">
            AQUVIA GOLD
          </span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold font-light mt-0.5 leading-none">
            Black Millenia
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(link, e)}
              className="text-xs uppercase tracking-widest font-medium text-charcoal hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onOpenConsultation}
            className="cursor-pointer py-2.5 px-5 bg-transparent border border-gold hover:bg-gold hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-widest text-[#C9A227]"
            id="desktop-header-cta"
          >
            Perlukan Konsultasi?
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center space-x-3">
          {/* Main CTA */}
          <button
            onClick={onOpenConsultation}
            className="cursor-pointer py-2 px-3 text-[10px] bg-charcoal text-white hover:bg-charcoal-light transition-all font-semibold uppercase tracking-widest"
            id="mobile-header-cta"
          >
            Konsultasi
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-charcoal hover:text-gold transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-x-0 top-[60px] bg-[#FAF8F3] border-b border-stone shadow-xl flex flex-col px-6 py-8 space-y-6 lg:hidden z-30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            id="mobile-nav-panel"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link, e)}
                  className="text-sm uppercase tracking-widest font-medium text-charcoal hover:text-gold py-1 block"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="border-t border-stone/60 pt-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 bg-charcoal hover:bg-charcoal-light text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2"
                id="mobile-nav-cta"
              >
                <span>Perlukan Konsultasi?</span>
                <ArrowRight size={14} className="text-gold" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
