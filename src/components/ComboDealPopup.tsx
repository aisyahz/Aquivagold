import React, { useState, useEffect, useRef } from "react";
import { X, FileText, Sparkles, Check, ShoppingBag, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import dropImage from "../assets/images/Drop.jpeg";

interface ComboDealPopupProps {
  currentView: string;
}

interface Combo {
  id: string;
  name: string;
  items: string;
  price: string;
  originalPrice: string;
  savings: string;
  description: string;
}

const COMBOS: Combo[] = [
  {
    id: "combo-a",
    name: "Combo A",
    items: "2 x BMW Drop",
    price: "RM 358.00",
    originalPrice: "RM 398.00",
    savings: "RM 40.00",
    description: "UNLEASH THE POWER OF BLACK MILLENIA WATER"
  },
  {
    id: "combo-b",
    name: "Combo B",
    items: "3 x BMW Drop",
    price: "RM 537.00",
    originalPrice: "RM 597.00",
    savings: "RM 60.00",
    description: "UNLEASH THE POWER OF BLACK MILLENIA WATER"
  },
  {
    id: "combo-c",
    name: "Combo C",
    items: "4 x BMW Drop",
    price: "RM 716.00",
    originalPrice: "RM 796.00",
    savings: "RM 80.00",
    description: "UNLEASH THE POWER OF BLACK MILLENIA WATER"
  },
  {
    id: "combo-d",
    name: "Combo D",
    items: "5 x BMW Drop",
    price: "RM 895.00",
    originalPrice: "RM 995.00",
    savings: "RM 100.00",
    description: "UNLEASH THE POWER OF BLACK MILLENIA WATER"
  }
];

export default function ComboDealPopup({ currentView }: ComboDealPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComboId, setSelectedComboId] = useState("combo-a");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom event listener for manual trigger (bypasses timer/localStorage lockouts)
    const handleOpenManual = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-combo-deal-popup", handleOpenManual);

    // Also check URL hash for explicit developer entry / direct links
    if (window.location.hash === "#combo" || window.location.hash === "#combo-deals") {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener("open-combo-deal-popup", handleOpenManual);
    };
  }, []);

  useEffect(() => {
    // Only trigger auto-popup on the home view
    if (currentView !== "home") return;

    // Check localStorage (only once every 24 hours)
    const checkShownState = () => {
      try {
        const lastShown = localStorage.getItem("aquiva_combo_deal_shown_at");
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000; // 24 hours in ms

        if (!lastShown || now - parseInt(lastShown, 10) > oneDay) {
          // Trigger after 2 seconds
          const timer = setTimeout(() => {
            setIsOpen(true);
            try {
              localStorage.setItem("aquiva_combo_deal_shown_at", now.toString());
            } catch (e) {
              console.warn("localStorage quota or error:", e);
            }
          }, 2000);

          return () => clearTimeout(timer);
        }
      } catch (e) {
        console.warn("localStorage check failed:", e);
      }
    };

    checkShownState();
  }, [currentView]);

  // Close helper
  const handleClose = () => {
    setIsOpen(false);
  };

  // Click outside listener
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const activeCombo = COMBOS.find((c) => c.id === selectedComboId) || COMBOS[0];

  // WhatsApp redirect link construction
  const getWhatsAppLink = () => {
    const phone = "60172887123";
    const baseText = "Hi AQUIVA GOLD, saya berminat dengan Combo Deal Black Millenia Water (BMW). Boleh saya dapatkan maklumat lanjut?";
    const specText = `\n\n(Pakej Pilihan: ${activeCombo.name} - ${activeCombo.items} dengan harga promosi ${activeCombo.price})`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(baseText + specText)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          id="combo-deal-popup-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          {/* Modal Card */}
          <motion.div
            id="combo-deal-popup-card"
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-ivory max-w-4xl w-full rounded-2xl overflow-hidden border border-gold/30 shadow-2xl relative flex flex-col md:flex-row my-8 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
          >
            {/* Close Button */}
            <button
              id="combo-deal-close-btn"
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 p-2 text-charcoal/60 bg-stone/30 hover:bg-stone/60 rounded-full transition-colors focus:outline-none"
              aria-label="Tutup popup"
            >
              <X className="w-5 h-5 text-charcoal" />
            </button>

            {/* Left/Top Content: Premium Image of BMW Drop + PDF callout */}
            <div 
              id="combo-deal-preview-section"
              className="md:w-5/12 bg-charcoal text-ivory p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shrink-0 border-r border-gold/15"
            >
              {/* Subtle visual gradient glow overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(181,141,32,0.15),transparent_60%)] pointer-events-none" />

              {/* Identity Header */}
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold font-display">
                  Tawaran Terhad
                </span>
                <h4 className="font-serif text-xl font-bold tracking-tight text-white mt-1">
                  AQUIVA GOLD™
                </h4>
              </div>

              {/* Product Visual Container with gold border frame */}
              <div className="relative z-10 aspect-square w-full max-w-[200px] mx-auto my-6 rounded-xl overflow-hidden border border-gold/25 p-2 bg-white/5 flex items-center justify-center">
                <img 
                  src={dropImage} 
                  alt="Black Millenia Water (BMW) Drop" 
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-gold text-ivory text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm">
                  KAD DISKAUN PDF
                </span>
              </div>

              {/* Bottom description / Factual claim statement */}
              <div className="relative z-10 mt-2 space-y-3">
                <p className="text-xs text-ivory/70 leading-relaxed font-sans">
                  Siri pati tulen botani herba berkualiti tinggi yang diuji makmal di bawah standard kualiti yang ketat. Nikmati penjimatan hebat dengan pakej kombo terus daripada risalah rasmi syarikat.
                </p>
                <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:7cc0b8ac-082a-4cee-8cf8-58bbd4e783d9?viewer%21megaVerb=group-discover"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs text-gold hover:text-gold-light transition-colors font-medium"
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <span>Buka Butiran Combo (PDF)</span>
                    <ExternalLink className="w-3 h-3 text-gold/60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right/Bottom Content: Interactive Combo Selector & CTA */}
            <div 
              id="combo-deal-selections-section"
              className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-ivory"
            >
              <div>
                {/* Header context info */}
                <div className="mb-4">
                  <span className="text-[10px] tracking-widest font-bold text-gold uppercase font-display block mb-1">
                    Risalah Kombo Rasmi 230626
                  </span>
                  <h3 className="font-serif text-2xl font-extrabold text-charcoal leading-tight">
                    Set Kombo Premium BMW Drop
                  </h3>
                </div>

                {/* Combos list choice panel */}
                <div className="space-y-2 mb-5 max-h-[220px] overflow-y-auto pr-1">
                  {COMBOS.map((combo) => (
                    <button
                      key={combo.id}
                      onClick={() => setSelectedComboId(combo.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                        selectedComboId === combo.id
                          ? "border-gold bg-beige ring-1 ring-gold shadow-xs"
                          : "border-stone bg-white hover:border-gold/50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedComboId === combo.id ? "bg-gold border-gold text-white" : "border-stone"
                        }`}>
                          {selectedComboId === combo.id && <Check className="w-2.5 h-2.5 stroke-[2.5]" />}
                        </div>
                        <div>
                          <div className="font-display font-black text-charcoal text-[13.5px]">
                            {combo.name} <span className="text-[11.5px] text-charcoal-light font-normal">({combo.items})</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-gold font-serif font-black text-[13.5px]">{combo.price}</div>
                        <div className="text-[9.5px] text-emerald-800 font-display font-medium">
                          Jimat {combo.savings}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Interactive Details display area */}
                <div className="bg-beige/40 rounded-xl p-4 border border-stone/50 mb-6">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-light/70 font-semibold font-display">
                      BUTIRAN KOMBO AKTIF ({activeCombo.name})
                    </span>
                    <span className="text-xs font-sans text-charcoal-light/50 line-through">
                      NP {activeCombo.originalPrice}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-2xl font-serif font-extrabold text-[#B58D20]">
                      {activeCombo.price}
                    </span>
                    <span className="text-[10px] bg-gold/10 text-[#B58D20] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-display">
                      PENJIMATAN SEBENAR: {activeCombo.savings}
                    </span>
                  </div>
                  <div className="mt-3.5 pt-2.5 border-t border-stone/40">
                    <ul className="space-y-1 text-xs text-charcoal leading-relaxed font-sans">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span>Kandungan: <strong className="font-semibold text-charcoal">{activeCombo.items}</strong></span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span>Arahan / Fokus: <span className="italic text-charcoal-light">{activeCombo.description}</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action row with WhatsApp and PDF details trigger */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-1.5">
                {/* Primary CTA - WhatsApp action with prefilled prompt */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 bg-gold hover:bg-[#A37B19] text-white text-sm font-bold tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4.5 h-4.5" />
                  <span>Dapatkan Combo Deal</span>
                </a>

                {/* Secondary CTA - direct link to Adobe Acrobat document viewer */}
                <a
                  href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:7cc0b8ac-082a-4cee-8cf8-58bbd4e783d9?viewer%21megaVerb=group-discover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 bg-white border border-stone hover:bg-beige/30 text-charcoal-light text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FileText className="w-4.5 h-4.5 text-gold" />
                  <span>Lihat Butiran</span>
                </a>
              </div>

              {/* Factual foot indicator */}
              <p className="text-[9.5px] text-charcoal-light/40 mt-3.5 text-center leading-normal">
                Tawaran promosi rasmi syarikat AQUIVA GOLD tanpa tuntutan kesihatan tiruan. Dikongsi untuk maklumat ahli.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
