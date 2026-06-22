import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenConsultation: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Header({ onOpenConsultation, currentView, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("BM");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  const desktopLinks = [
    { label: "Utama", view: "home" },
    { label: "Koleksi", view: "koleksi" },
    { label: "Kelebihan", view: "kelebihan" },
    { label: "Usahawan", view: "usahawan" },
  ];

  const handleLinkClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuDrawerOpen(false);
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLangChange = (langCode: string, label: string) => {
    setActiveLang(langCode);
    if (langCode !== "BM") {
      setToastMessage(
        langCode === "EN"
          ? "English language selection accepted. Full multi-language translations will be completed in the next phase! Malay content remains default."
          : "Pilihan bahasa Mandarin diterima. Kandungan terjemahan penuh disediakan dalam fasa seterusnya! Versi Bahasa Malaysia kekal sebagai rujukan aktif."
      );
      setTimeout(() => {
        setToastMessage(null);
      }, 5000);
    } else {
      setToastMessage(null);
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-[#FAF8F5]/95 backdrop-blur-md py-3 border-b border-[#B58D20]/20 shadow-sm"
            : "top-[36px] sm:top-[40px] bg-[#FAF8F5]/90 backdrop-blur-sm py-4 border-b border-[#B58D20]/10"
        }`}
        id="main-header"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex items-center justify-between gap-4">
          
          {/* LEFT: Brand Logo Identity */}
          <button
            onClick={() => {
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col select-none group text-left cursor-pointer focus:outline-none shrink-0"
            id="header-logo"
            aria-label="AQUIVA GOLD Brand Home"
          >
            <span className="font-serif text-[18px] sm:text-lg font-black tracking-[0.2em] text-[#1F1F1F] group-hover:text-[#B58D20] transition-colors duration-300">
              AQUIVA GOLD
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#B58D20] font-bold mt-0.5 leading-none">
              Black Millenia Water (BMW)
            </span>
          </button>

          {/* CENTER: Desktop Menu Links (Yelp style: Logo | Menu | CTA) */}
          <nav className="hidden lg:flex items-center space-x-6 shrink-0" id="desktop-nav-menu" aria-label="Desktop Navigation">
            {desktopLinks.map((link) => (
              <button
                key={link.view}
                onClick={(e) => handleLinkClick(link.view, e)}
                className={`text-[12px] uppercase tracking-widest font-bold transition-all duration-200 relative py-2 focus:outline-none cursor-pointer ${
                  currentView === link.view
                    ? "text-[#B58D20] font-extrabold"
                    : "text-neutral-600 hover:text-[#B58D20]"
                }`}
              >
                {link.label}
                {currentView === link.view && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B58D20] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* RIGHT: Language switches, KONSULTASI button and Hamburger list/drawer icon */}
          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            
            {/* Desktop Language Selector */}
            <div className="hidden lg:flex items-center space-x-1 text-[11px] tracking-wider uppercase font-semibold border-r border-[#B58D20]/20 pr-4 mr-2" id="desktop-lang-selector">
              <Globe size={13} className="text-[#B58D20] mr-1.5" />
              <button
                onClick={() => handleLangChange("BM", "Bahasa Malaysia")}
                className={`px-1.5 py-1 transition-all rounded ${
                  activeLang === "BM" ? "text-[#B58D20] font-extrabold" : "text-neutral-400 hover:text-[#B58D20]"
                }`}
              >
                BM
              </button>
              <span className="text-[#B58D20]/20">|</span>
              <button
                onClick={() => handleLangChange("EN", "English")}
                className={`px-1.5 py-1 transition-all rounded ${
                  activeLang === "EN" ? "text-[#B58D20] font-extrabold" : "text-neutral-400 hover:text-[#B58D20]"
                }`}
              >
                EN
              </button>
              <span className="text-[#B58D20]/20">|</span>
              <button
                onClick={() => handleLangChange("中文", "Mandarin")}
                className={`px-1.5 py-1 transition-all rounded ${
                  activeLang === "中文" ? "text-white bg-[#B58D20]/20 font-semibold" : "text-neutral-400 hover:text-[#B58D20]"
                }`}
              >
                中文
              </button>
            </div>

            <button
              onClick={onOpenConsultation}
              className="cursor-pointer py-2 px-3.5 sm:px-5 bg-transparent hover:bg-[#B58D20] text-[#1F1F1F] hover:text-white border border-[#B58D20] transition-all duration-300 text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] rounded-lg min-h-[44px] flex items-center justify-center whitespace-nowrap"
              id="header-cta"
            >
              KONSULTASI
            </button>
            
            <button
              onClick={() => setIsMenuDrawerOpen(true)}
              className="p-2 sm:p-2.5 text-[#1F1F1F] hover:text-[#B58D20] hover:bg-[#B58D20]/10 transition-all cursor-pointer rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center border border-[#B58D20]/20"
              aria-label="Open navigation menu"
              id="menu-toggle"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Luxury feedback toast message when switching languages */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 z-50 max-w-sm bg-[#1F1F1F] text-white p-4 rounded-xl border border-[#C8A75B]/30 shadow-2xl"
            id="premium-lang-notification"
          >
            <div className="flex items-start gap-3">
              <span className="p-1 bg-[#C8A75B]/20 text-[#C8A75B] rounded-full shrink-0 mt-0.5">
                <Globe size={15} />
              </span>
              <div className="flex-1 text-left">
                <h5 className="font-serif font-bold text-xs uppercase text-[#C8A75B] tracking-wider">Persediaan Penyetempatan (Localization Prep)</h5>
                <p className="text-[11px] text-stone-300 mt-1 leading-normal font-sans">{toastMessage}</p>
              </div>
              <button onClick={() => setToastMessage(null)} className="text-stone-400 hover:text-white text-xs p-1 focus:outline-none">
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#C8A75B]/10">
                  <div className="flex flex-col text-left">
                    <span className="font-serif text-[15px] sm:text-[16px] font-black tracking-[0.25em] text-[#1F1F1F]">
                      AQUIVA GOLD
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold mt-1">
                      Black Millenia Water (BMW)
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
                <nav className="flex flex-col space-y-4 text-left py-2" aria-label="Expanded Navigation">
                  {navLinks.map((link) => (
                    <button
                      key={link.view}
                      onClick={(e) => handleLinkClick(link.view, e)}
                      className={`text-left text-[14px] sm:text-[16px] uppercase tracking-[0.18em] font-semibold py-2 px-2 hover:text-[#C8A75B] hover:pl-4 transition-all duration-300 block relative group border-b border-[#C8A75B]/5 ${
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

              {/* Drawer Footer with Spa-like content, mobile Language Switcher, and CTA */}
              <div className="pt-6 border-t border-[#C8A75B]/15 space-y-5">
                {/* Mobile Language Switcher */}
                <div className="bg-[#1f1f1f]/5 p-3 rounded-lg flex flex-col space-y-2 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A75B] font-bold flex items-center gap-1">
                    <Globe size={11} /> PILIHAN BAHASA / LANGUAGE
                  </span>
                  <div className="flex items-center gap-1 max-w-xs">
                    <button
                      onClick={() => handleLangChange("BM", "Bahasa Malaysia")}
                      className={`flex-1 py-1.5 text-[11px] rounded font-bold transition-all ${
                        activeLang === "BM" ? "bg-[#C8A75B] text-white" : "bg-white text-neutral-600 border border-neutral-200"
                      }`}
                    >
                      BM
                    </button>
                    <button
                      onClick={() => handleLangChange("EN", "English")}
                      className={`flex-1 py-1.5 text-[11px] rounded font-bold transition-all ${
                        activeLang === "EN" ? "bg-[#C8A75B] text-white" : "bg-white text-neutral-600 border border-neutral-200"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLangChange("中文", "Mandarin")}
                      className={`flex-1 py-1.5 text-[11px] rounded font-bold transition-all ${
                        activeLang === "中文" ? "bg-[#C8A75B] text-white" : "bg-white text-neutral-600 border border-neutral-200"
                      }`}
                    >
                      中文
                    </button>
                  </div>
                </div>

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
