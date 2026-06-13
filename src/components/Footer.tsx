import React from "react";
import { Phone, MapPin, Instagram, Facebook, Award, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigate: (view: string) => void;
}

export default function Footer({ onOpenConsultation, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF8F1] border-t border-[#C8A75B]/20 text-[#1F1F1F] py-16 md:py-20 select-none text-left" id="main-footer">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        
        {/* Brand identity */}
        <div className="md:col-span-2 space-y-4">
          <button
            onClick={(e) => handleLinkClick("home", e)}
            className="flex flex-col select-none text-left cursor-pointer"
          >
            <span className="font-serif text-lg sm:text-xl tracking-[0.25em] text-[#1F1F1F] font-bold">
              AQUIVAGOLD
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C8A75B] font-light mt-0.5 leading-none">
              Black Millenia
            </span>
          </button>
          
          <p className="text-xs text-[#1F1F1F]/70 font-light max-w-sm leading-relaxed">
            &ldquo;Tingkatkan Ritual Penjagaan Diri Anda&rdquo; &mdash; Rangkaian formulasi penjagaan kulit ultra-premium dan keperluan botani mewah yang dirumus rapi untuk memenuhi gaya hidup sihat yang terkemuka.
          </p>

          <div className="pt-2 flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#C8A75B]/20 hover:border-[#C8A75B] hover:text-[#C8A75B] transition-colors rounded-full" aria-label="Our Instagram">
              <Instagram size={14} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#C8A75B]/20 hover:border-[#C8A75B] hover:text-[#C8A75B] transition-colors rounded-full" aria-label="Our Facebook">
              <Facebook size={14} />
            </a>
          </div>
        </div>

        {/* Quick Pages Links (All 8 pages mapped carefully) */}
        <div className="space-y-4 text-left">
          <span className="text-[10px] uppercase tracking-widest text-[#1F1F1F] font-bold block border-b border-[#C8A75B]/15 pb-2">
            Halaman Utama
          </span>
          <div className="flex flex-col space-y-2 text-xs text-[#1F1F1F]/75 font-light">
            <button onClick={(e) => handleLinkClick("home", e)} className="cursor-pointer text-left hover:text-[#C8A75B] transition-colors font-medium">Utama</button>
            <button onClick={(e) => handleLinkClick("koleksi", e)} className="cursor-pointer text-left hover:text-[#C8A75B] transition-colors font-medium">Koleksi Produk</button>
            <button onClick={(e) => handleLinkClick("kelebihan", e)} className="cursor-pointer text-left hover:text-[#C8A75B] transition-colors font-medium">Kelebihan Produk</button>
            <button onClick={(e) => handleLinkClick("testimoni", e)} className="cursor-pointer text-left hover:text-[#C8A75B] transition-colors font-medium">Testimoni</button>
            <button onClick={(e) => handleLinkClick("pensijilan", e)} className="cursor-pointer text-left hover:text-[#C8A75B] transition-colors font-medium">Pensijilan &amp; Bukti</button>
            <button onClick={(e) => handleLinkClick("usahawan", e)} className="cursor-pointer text-left hover:text-[#C8A75B] transition-colors font-medium">Sertai Usahawan</button>
            <button onClick={(e) => handleLinkClick("tentang-kami", e)} className="cursor-pointer text-left hover:text-[#C8A75B] transition-colors font-medium">Tentang Kami</button>
            <button onClick={(e) => handleLinkClick("faq", e)} className="cursor-pointer text-left hover:text-[#C8A75B] transition-colors font-medium">Soalan Lazim (FAQ)</button>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-4 text-left">
          <span className="text-[10px] uppercase tracking-widest text-[#1F1F1F] font-bold block border-b border-[#C8A75B]/15 pb-2">
            Butik Concierge
          </span>
          <div className="space-y-3.5 text-xs text-[#1F1F1F] font-light">
            <div className="flex items-center space-x-2">
              <Phone size={13} className="text-[#C8A75B] shrink-0" />
              <span>WhatsApp: 011-39900920</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={13} className="text-[#C8A75B] shrink-0" />
              <span>HQ: Bukit Damansara, KL</span>
            </div>
            <div className="p-3 bg-white/70 border border-[#C8A75B]/20 text-[11px] leading-relaxed text-[#1F1F1F]/70 rounded-xl shadow-3xs text-left">
              Bimbingan rundingan peribadi dwi-bahasa disediakan dari jam 9 pagi hingga 9 malam setiap hari berhubung jaminan kualiti hantaran.
            </div>
          </div>
        </div>

      </div>

      {/* Bottom copyrights taglines */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 mt-12 md:mt-16 pt-6 border-t border-[#C8A75B]/15 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] text-[#1F1F1F]/60 font-light space-y-4 sm:space-y-0">
        <p>
          &copy; {currentYear} AquivaGold. Hak cipta terpelihara. Warisan Kesejahteraan Premium.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 font-medium">
          <span>Syarikat SSM: 202401xxxx33</span>
          <span className="text-[#C8A75B]">Gaya Hidup Sihat &bull; Tanpa MLM</span>
        </div>
      </div>
    </footer>
  );
}
