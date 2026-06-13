import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenConsultation: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
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
    { label: "Utama", view: "home" },
    { label: "Koleksi", view: "koleksi" },
    { label: "Kelebihan", view: "kelebihan" },
    { label: "Testimoni", view: "testimoni" },
    { label: "Pensijilan & Bukti", view: "pensijilan" },
    { label: "Sertai Usahawan", view: "usahawan" },
    { label: "Tentang Kami", view: "tentang-kami" },
    { label: "FAQ", view: "faq" },
  ];

  const handleLinkClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3.5 border-b border-[#C8A75B]/20 shadow-xs"
          : "bg-[#F6F3EE]/80 backdrop-blur-sm py-5 border-b border-transparent"
      }`}
      id="main-header"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between gap-4">
        
        {/* Brand Logo Identity */}
        <button
          onClick={() => {
            onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col select-none group text-left cursor-pointer focus:outline-none shrink-0"
          id="header-logo"
        >
          <span className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-[0.25em] text-[#1F1F1F] group-hover:text-[#C8A75B] transition-colors duration-300">
            AQUIVAGOLD
          </span>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[#C8A75B] font-light mt-0.5 leading-none">
            Black Millenia
          </span>
        </button>

        {/* Desktop Links (8 view tabs arranged and responsive) */}
        <nav className="hidden xl:flex items-center space-x-7 shrink" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={(e) => handleLinkClick(link.view, e)}
              className={`cursor-pointer text-[14px] xl:text-[15px] uppercase tracking-wider font-bold transition-all duration-300 relative py-2.5 hover:text-[#C8A75B] ${
                currentView === link.view ? "text-[#C8A75B]" : "text-[#1F1F1F]/85"
              }`}
            >
              {link.label}
              {currentView === link.view && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A75B]" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="cursor-pointer py-3.5 px-6 bg-transparent border border-[#C8A75B] hover:bg-[#C8A75B] text-[#C8A75B] hover:text-white transition-all duration-300 text-[14px] xl:text-[15px] font-bold uppercase tracking-wider rounded-md min-h-[50px] flex items-center justify-center"
            id="desktop-header-cta"
          >
            Hubungi Konsultasi
          </button>
        </div>

        {/* Mobile menu and small device controls */}
        <div className="flex xl:hidden items-center space-x-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="cursor-pointer py-2.5 px-4 text-[12px] bg-[#1F1F1F] text-white hover:bg-[#C8A75B] transition-all font-bold uppercase tracking-wider rounded-md min-h-[44px]"
            id="mobile-header-cta"
          >
            Konsultasi
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-[#1F1F1F] hover:text-[#C8A75B] transition-colors cursor-pointer"
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
            className="fixed inset-x-0 top-[60px] bg-[#FAF8F3] border-b border-[#C8A75B]/20 shadow-xl flex flex-col px-6 py-8 space-y-6 xl:hidden z-30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            id="mobile-nav-panel"
          >
            <div className="flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={(e) => handleLinkClick(link.view, e)}
                  className={`text-left text-xs uppercase tracking-widest font-bold py-1.5 block hover:text-[#C8A75B] ${
                    currentView === link.view ? "text-[#C8A75B]" : "text-[#1F1F1F]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="border-t border-[#C8A75B]/20 pt-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 px-4 bg-[#1F1F1F] hover:bg-[#333333] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 rounded shadow-md"
                id="mobile-nav-cta"
              >
                <span>Perlukan Konsultasi?</span>
                <ArrowRight size={14} className="text-[#C8A75B]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
