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
    <footer className="bg-[#FAF8F5] border-t border-[#B58D20]/20 text-[#1A1A1A] py-16 lg:py-24 select-none text-left" id="main-footer">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        
        {/* Brand identity */}
        <div className="md:col-span-2 space-y-4">
          <button
            onClick={(e) => handleLinkClick("home", e)}
            className="flex flex-col select-none text-left cursor-pointer"
          >
            <span className="font-serif text-lg sm:text-2xl tracking-[0.2em] text-[#1A1A1A] font-bold">
              AQUIVA GOLD
            </span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B58D20] font-bold mt-1.5 leading-none">
              Black Millenia Water (BMW)
            </span>
          </button>
          
          <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] max-w-sm leading-relaxed">
            &ldquo;Tingkatkan Ritual Penjagaan Diri Anda&rdquo; &mdash; Rangkaian formulasi penjagaan kulit premium dan keperluan botani mewah yang dirumus rapi untuk memenuhi gaya hidup sihat yang terkemuka.
          </p>

          <div className="pt-2 flex items-center space-x-4">
            <a href="#" className="p-2.5 border border-[#B58D20]/30 hover:border-[#B58D20] hover:text-[#B58D20] transition-colors rounded-full text-neutral-800" aria-label="Our Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="p-2.5 border border-[#B58D20]/30 hover:border-[#B58D20] hover:text-[#B58D20] transition-colors rounded-full text-neutral-800" aria-label="Our Facebook">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Quick Pages Links (All 8 pages mapped carefully) */}
        <div className="space-y-4 text-left">
          <span className="text-[12px] uppercase tracking-widest text-[#1A1A1A] font-black block border-b border-[#B58D20]/25 pb-2">
            Halaman Utama
          </span>
          <div className="flex flex-col space-y-2.5 text-[14px] sm:text-[15px] text-[#4A4A4A]">
            <button onClick={(e) => handleLinkClick("home", e)} className="cursor-pointer text-left hover:text-[#B58D20] transition-colors font-semibold">Utama</button>
            <button onClick={(e) => handleLinkClick("koleksi", e)} className="cursor-pointer text-left hover:text-[#B58D20] transition-colors font-semibold">Koleksi Produk</button>
            <button onClick={(e) => handleLinkClick("kelebihan", e)} className="cursor-pointer text-left hover:text-[#B58D20] transition-colors font-semibold">Kelebihan Produk</button>
            <button onClick={(e) => handleLinkClick("testimoni", e)} className="cursor-pointer text-left hover:text-[#B58D20] transition-colors font-semibold">Testimoni</button>
            <button onClick={(e) => handleLinkClick("pensijilan", e)} className="cursor-pointer text-left hover:text-[#B58D20] transition-colors font-semibold">Pensijilan &amp; Bukti</button>
            <button onClick={(e) => handleLinkClick("usahawan", e)} className="cursor-pointer text-left hover:text-[#B58D20] transition-colors font-semibold">Sertai Usahawan</button>
            <button onClick={(e) => handleLinkClick("tentang-kami", e)} className="cursor-pointer text-left hover:text-[#B58D20] transition-colors font-semibold">Tentang Kami</button>
            <button onClick={(e) => handleLinkClick("faq", e)} className="cursor-pointer text-left hover:text-[#B58D20] transition-colors font-semibold">Soalan Lazim (FAQ)</button>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-4 text-left">
          <span className="text-[12px] uppercase tracking-widest text-[#1A1A1A] font-black block border-b border-[#B58D20]/25 pb-2">
            Butik Concierge
          </span>
          <div className="space-y-3.5 text-[14px] sm:text-[15px] text-[#4A4A4A]">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-[#B58D20] shrink-0" />
              <span>WhatsApp: 011-39900920</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-[#B58D20] shrink-0" />
              <span>HQ: Bukit Damansara, KL</span>
            </div>
            <div className="p-4 bg-white border border-[#B58D20]/20 text-[13px] leading-relaxed text-[#4A4A4A] rounded-xl shadow-sm text-left">
              Bimbingan rundingan peribadi dwi-bahasa disediakan dari jam 9 pagi hingga 9 malam setiap hari berhubung pengurusan kualiti hantaran.
            </div>
          </div>
        </div>

      </div>

      {/* Bottom copyrights taglines */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 mt-12 md:mt-16 pt-6 border-t border-[#B58D20]/15 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[13px] sm:text-[14px] text-[#4A4A4A] space-y-4 sm:space-y-0">
        <p>
          &copy; {currentYear} AQUIVA GOLD. Hak cipta terpelihara. Warisan Kesejahteraan Premium.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 font-semibold">
          <span>Syarikat SSM: Akan dikemaskini</span>
          <span className="text-[#B58D20]">Gaya Hidup Sihat &bull; Tanpa MLM</span>
        </div>
      </div>
    </footer>
  );
}
