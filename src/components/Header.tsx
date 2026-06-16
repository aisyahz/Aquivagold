import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenConsultation: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Header({ onOpenConsultation, currentView, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

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

  // Escape key handler to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
    setIsMenuDrawerOpen(false);
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF8F3]/95 backdrop-blur-md py-3.5 border-b border-[#C8A75B]/20 shadow-xs"
            : "bg-[#FAF8F3]/90 backdrop-blur-sm py-4 sm:py-5 border-b border-[#C8A75B]/10"
        }`}
        id="main-header"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between gap-4">
          
          {/* LEFT: Brand Logo Identity */}
          <button
            onClick={() => {
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col select-none group text-left cursor-pointer focus:outline-none shrink-0"
            id="header-logo"
            aria-label="Aquiva Gold Brand Home"
          >
            <span className="font-serif text-[18px] sm:text-lg md:text-xl font-black tracking-[0.25em] text-[#1F1F1F] group-hover:text-[#C8A75B] transition-colors duration-300">
              AQUIVAGOLD
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-[#C8A75B] font-bold mt-1 leading-none">
              Black Millenia
            </span>
          </button>

          {/* RIGHT: KONSULTASI button and Hamburger list/drawer icon */}
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="cursor-pointer py-2 px-3.5 sm:px-5 bg-transparent hover:bg-[#C8A75B] text-[#1F1F1F] hover:text-white border border-[#C8A75B] transition-all duration-300 text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] rounded-lg min-h-[40px] flex items-center justify-center whitespace-nowrap"
              id="header-cta"
            >
              KONSULTASI
            </button>
            
            <button
              onClick={() => setIsMenuDrawerOpen(true)}
              className="p-2 sm:p-2.5 text-[#1F1F1F] hover:text-[#C8A75B] hover:bg-[#C8A75B]/10 transition-all cursor-pointer rounded-full min-h-[40px] min-w-[40px] flex items-center justify-center border border-[#C8A75B]/20"
              aria-label="Open navigation menu"
              id="menu-toggle"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Drawer Overlay & Content */}
      <AnimatePresence>
        {isMenuDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuDrawerOpen(false)}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
              id="drawer-backdrop"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md h-screen bg-[#FAF8F3] border-l border-[#C8A75B]/20 shadow-[0_0_50px_rgba(0,0,0,0.15)] z-50 flex flex-col justify-between p-8 sm:p-12 overflow-y-auto"
              id="drawer-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation drawer"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#C8A75B]/10">
                  <div className="flex flex-col text-left">
                    <span className="font-serif text-[15px] sm:text-[16px] font-black tracking-[0.25em] text-[#1F1F1F]">
                      AQUIVAGOLD
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold mt-1">
                      Black Millenia
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setIsMenuDrawerOpen(false)}
                    className="p-2 sm:p-2.5 text-[#1F1F1F] hover:text-[#C8A75B] transition-colors duration-300 rounded-full hover:bg-[#C8A75B]/10 flex items-center justify-center min-h-[40px] min-w-[40px] border border-[#C8A75B]/15"
                    aria-label="Close navigation menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Drawer Scrollable Links Container */}
                <nav className="flex flex-col space-y-5 text-left py-4" aria-label="Expanded Navigation">
                  {navLinks.map((link) => (
                    <button
                      key={link.view}
                      onClick={(e) => handleLinkClick(link.view, e)}
                      className={`text-left text-[16px] sm:text-[18px] uppercase tracking-[0.18em] font-semibold py-3 px-2 hover:text-[#C8A75B] hover:pl-4 transition-all duration-300 block relative group border-b border-[#C8A75B]/5 ${
                        currentView === link.view ? "text-[#C8A75B] pl-4 font-black" : "text-neutral-900"
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {currentView === link.view && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#C8A75B] rounded-full" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer with Spa-like content and CTA */}
              <div className="pt-8 border-t border-[#C8A75B]/15 space-y-4">
                <p className="font-serif italic text-[#1F1F1F]/60 text-[12px] sm:text-[13px] leading-relaxed text-left">
                  "Menyelami kekayaan alam tulen untuk harmoni fizikal dan ketenangan jiwa murni harian."
                </p>
                <button
                  onClick={() => {
                    setIsMenuDrawerOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full h-[48px] bg-[#1F1F1F] hover:bg-[#C8A75B] text-white hover:text-black uppercase tracking-widest text-[12px] font-extrabold transition-all duration-300 rounded-lg flex items-center justify-center gap-2 group shadow-md"
                >
                  <span>MULA KONSULTASI</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
