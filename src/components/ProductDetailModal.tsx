import { useState, useEffect } from "react";
import { X, Check, Star, Calendar, ArrowRight, CornerDownRight, ShieldCheck, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Product } from "../types";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenConsultation: (productTitle: string) => void;
}

export default function ProductDetailModal({ product, onClose, onOpenConsultation }: ProductDetailModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "directions" | "reviews">("overview");

  // Reset active image/tab when a different product loads
  useEffect(() => {
    setActiveImageIdx(0);
    setActiveTab("overview");
  }, [product]);

  // Handle escape key closure
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          id="detail-backdrop"
        />

        {/* Modal body container */}
        <motion.div
          className="relative w-full max-w-5xl glass-panel shadow-2xl z-10 overflow-hidden flex flex-col md:flex-row max-h-[92vh] md:max-h-[85vh] luxury-shadow"
          initial={{ scale: 0.98, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          id="detail-modal"
        >
          {/* Close Overlay btn */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/80 backdrop-blur-md border border-stone text-charcoal hover:text-gold hover:bg-white transition-colors cursor-pointer"
            aria-label="Close details"
            id="modal-close-btn"
          >
            <X size={18} />
          </button>

          {/* LEFT PANEL: High End Image Showcase (Swipeable / Dots grid) (approx 45%width) */}
          <div className="w-full md:w-[45%] bg-beige/30 backdrop-blur-xs p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone/30 select-none">
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* Subtle visual branding text header */}
              <span className="font-display text-[9px] uppercase tracking-[0.3em] text-gold font-semibold mb-4 text-center">
                AQUIVAGOLD LABS / BLACK MILLENIA
              </span>

              {/* Large Product Image Preview Container with Zoom effect */}
              <div className="relative w-full aspect-square max-w-[280px] flex items-center justify-center my-auto">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIdx}
                    src={product.images[activeImageIdx]}
                    alt={`${product.title} view ${activeImageIdx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(43,43,43,0.12)] cursor-zoom-in"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Gallery Thumbnail Index */}
            <div className="mt-6 flex items-center justify-center space-x-3.5">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIdx(index)}
                  className={`relative w-12 h-12 border transition-all duration-300 p-1 bg-white flex items-center justify-center cursor-pointer ${
                    activeImageIdx === index ? "border-gold ring-1 ring-gold/20 scale-105" : "border-stone/60 hover:border-gold/50"
                  }`}
                  aria-label={`View image thumbnail ${index + 1}`}
                >
                  <img
                    src={img}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-xs"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: Fine Art Scrollable Product Dossier (approx 55%width) */}
          <div className="w-full md:w-[55%] flex flex-col overflow-y-auto max-h-[50vh] md:max-h-full">
            <div className="p-6 md:p-10 space-y-6 md:space-y-8 flex-1 text-left">
              {/* Category, Title, Price */}
              <div className="space-y-2 border-b border-stone/30 pb-4">
                <span className="font-display text-[10px] uppercase tracking-widest text-gold font-semibold">
                  {product.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
                  {product.title}
                </h3>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="font-serif text-2xl font-light text-charcoal">{product.price}</span>
                  <span className="text-[10px] bg-[#EFEAE2] text-charcoal-light uppercase tracking-wider px-2 py-0.5 font-display">
                    Formulasi Suci &amp; Tulen
                  </span>
                </div>
              </div>

              {/* Interactive Luxury Tabs navigation */}
              <div className="flex border-b border-stone/30">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`cursor-pointer pb-2.5 px-3 uppercase text-[10px] tracking-widest font-semibold border-b-2 transition-all duration-300 ${
                    activeTab === "overview"
                      ? "border-gold text-charcoal font-bold"
                      : "border-transparent text-charcoal-light/60 hover:text-charcoal"
                  }`}
                >
                  Butiran
                </button>
                <button
                  onClick={() => setActiveTab("directions")}
                  className={`cursor-pointer pb-2.5 px-3 uppercase text-[10px] tracking-widest font-semibold border-b-2 transition-all duration-300 ${
                    activeTab === "directions"
                      ? "border-gold text-charcoal font-bold"
                      : "border-transparent text-charcoal-light/60 hover:text-charcoal"
                  }`}
                >
                  Cara Penggunaan
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`cursor-pointer pb-2.5 px-3 uppercase text-[10px] tracking-widest font-semibold border-b-2 transition-all duration-300 ${
                    activeTab === "reviews"
                      ? "border-gold text-charcoal font-bold"
                      : "border-transparent text-charcoal-light/60 hover:text-charcoal"
                  }`}
                >
                  Ulasan
                </button>
              </div>

              {/* Dynamic scroll content based on Tab */}
              <div className="space-y-4 min-h-[160px]">
                {activeTab === "overview" && (
                  <motion.div
                    className="space-y-4 text-xs md:text-sm text-charcoal-light font-light leading-relaxed text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="tab-overview"
                  >
                    <p>{product.description}</p>
                    
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#2B2B2B] font-semibold font-display block">
                        KHASIAT UTAMA FORMULASI
                      </span>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-gold font-bold shrink-0 mt-0.5">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === "directions" && (
                  <motion.div
                    className="space-y-4 text-xs md:text-sm text-charcoal-light font-light leading-relaxed text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="tab-directions"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#2B2B2B] font-semibold font-display block">
                        TATACARA PENGGUNAAN
                      </span>
                      <p>{product.directions}</p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-stone/30">
                      <span className="text-[10px] uppercase tracking-widest text-[#2B2B2B] font-semibold font-display block">
                        SOALAN LAZIM FORMULASI
                      </span>
                      <div className="space-y-2">
                        {product.faqs.map((faq, idx) => (
                          <div key={idx} className="glass-panel p-3 rounded-xs shadow-xs">
                            <h5 className="font-serif text-xs font-semibold text-charcoal flex items-start">
                              <CornerDownRight size={10} className="text-gold mr-1.5 mt-0.5" />
                              <span>{faq.question}</span>
                            </h5>
                            <p className="text-[11px] text-charcoal-light font-light mt-1 pl-4">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "reviews" && (
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="tab-reviews"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-[#2B2B2B] font-semibold font-display block mb-3 text-left">
                      TESTIMONI PELANGGAN
                    </span>
                    <div className="space-y-3">
                      {product.reviews.map((r, idx) => (
                        <div key={idx} className="p-3 glass-panel text-left shadow-xs">
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex text-gold space-x-0.5">
                              {[...Array(r.rating)].map((_, i) => (
                                <Star key={i} size={10} fill="currentColor" />
                              ))}
                            </div>
                            <span className="text-[9px] text-charcoal-light/50 font-mono">Pelanggan Sah</span>
                          </div>
                          <p className="text-xs text-charcoal-light font-light italic mb-1.5 leading-relaxed">
                            "{r.text}"
                          </p>
                          <div className="flex items-center justify-between text-[9px] text-[#2B2B2B] font-medium">
                            <span>{r.author}</span>
                            <span className="text-charcoal-light/40 font-light">{r.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Insured logistics assurance */}
              <div className="p-3 glass-panel flex items-start space-x-2.5 shadow-xs">
                <ShieldCheck size={16} className="text-gold mt-0.5 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest text-charcoal font-semibold block">
                    Jaminan Premium AquivaGold
                  </span>
                  <span className="text-[11px] text-charcoal-light font-light block leading-tight">
                    Setiap tempahan didatangkan dalam kotak baldu sutera eksklusif kami bersama penjejakan selamat diinsuranskan oleh rakan logistik kurier.
                  </span>
                </div>
              </div>

              {/* Action Consultation Box */}
              <div className="pt-4 border-t border-stone/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-left">
                  <span className="text-[10px] tracking-widest uppercase text-charcoal-light/80 block">Kurasi Peribadi</span>
                  <span className="font-serif text-lg font-medium text-charcoal">{product.price}</span>
                </div>
                <button
                  onClick={() => onOpenConsultation(product.title)}
                  className="cursor-pointer py-3.5 px-6 bg-charcoal hover:bg-charcoal-light text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-all duration-300"
                  id={`modal-acquire-btn-${product.id}`}
                >
                  <span>Beli Sekarang</span>
                  <ArrowRight size={14} className="text-gold" />
                </button>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
