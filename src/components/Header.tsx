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
    { label: "Usahawan", view: "usahawan" },
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
          <span className="font-serif text-lg sm:text-xl md:text-2xl font-black tracking-[0.25em] text-[#1F1F1F] group-hover:text-[#C8A75B] transition-colors duration-300">
            AQUIVAGOLD
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-[#C8A75B] font-bold mt-1.5 leading-none">
            Black Millenia
          </span>
        </button>

        {/* Desktop Links (8 view tabs arranged and responsive) */}
        <nav className="hidden xl:flex items-center space-x-5 shrink whitespace-nowrap" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={(e) => handleLinkClick(link.view, e)}
              className={`cursor-pointer text-[13px] xl:text-[14px] uppercase tracking-[0.12em] font-medium transition-all duration-300 relative py-2.5 hover:text-[#C8A75B] whitespace-nowrap ${
                currentView === link.view ? "text-[#C8A75B]" : "text-neutral-900"
              }`}
            >
              {link.label}
              {currentView === link.view && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C8A75B]" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="cursor-pointer py-3.5 px-6 bg-transparent border-2 border-[#C8A75B] hover:bg-[#C8A75B] text-[#C8A75B] hover:text-white transition-all duration-300 text-[14px] xl:text-[16px] font-bold uppercase tracking-wider rounded-md min-h-[50px] flex items-center justify-center"
            id="desktop-header-cta"
          >
            Hubungi Konsultasi
          </button>
        </div>

        {/* Mobile menu and small device controls */}
        <div className="flex xl:hidden items-center space-x-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="cursor-pointer py-2.5 px-4 text-[13px] bg-[#1F1F1F] text-white hover:bg-[#C8A75B] transition-all font-bold uppercase tracking-wider rounded-md min-h-[44px] flex items-center justify-center"
            id="mobile-header-cta"
          >
            Konsultasi
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 text-[#1F1F1F] hover:text-[#C8A75B] hover:bg-neutral-100 transition-colors cursor-pointer rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center border border-neutral-300/50"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-x-0 top-[70px] bg-[#FAF8F3] border-b-2 border-[#C8A75B] shadow-2xl flex flex-col px-6 py-8 space-y-6 xl:hidden z-30 max-h-[85vh] overflow-y-auto"
            initial={{ opacity: 0, scaleY: 0.95 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.95 }}
            transition={{ duration: 0.2 }}
            id="mobile-nav-panel"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={(e) => handleLinkClick(link.view, e)}
                  className={`text-left text-[14px] sm:text-[15px] uppercase tracking-widest font-black py-4 px-2 block hover:text-[#C8A75B] border-b border-[#C8A75B]/15 transition-colors ${
                    currentView === link.view ? "text-[#C8A75B] bg-white/50" : "text-neutral-900"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-4 px-5 bg-[#1F1F1F] hover:bg-[#333333] text-white text-[14px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 rounded-md shadow-md min-h-[48px]"
                id="mobile-nav-cta"
              >
                <span>Perlukan Konsultasi?</span>
                <ArrowRight size={16} className="text-[#C8A75B]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
