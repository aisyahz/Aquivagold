import { Phone, MapPin, Instagram, Facebook, Share2 } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F3] border-t border-stone/45 text-charcoal py-16 md:py-20 select-none text-left" id="main-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        
        {/* Brand identity */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex flex-col select-none text-left">
            <span className="font-serif text-xl tracking-[0.2em] text-[#2B2B2B] font-semibold">
              AQUIVAGOLD
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-light mt-0.5 leading-none">
              Black Millenia
            </span>
          </div>
          
          <p className="text-xs text-charcoal-light font-light max-w-sm leading-relaxed">
            "Tingkatkan Ritual Penjagaan Diri Anda" &mdash; Formulasi penjagaan kulit ultra-premium dan keperluan botani mewah yang dirumus rapi untuk memenuhi gaya hidup kontemporari.
          </p>

          <div className="pt-2 flex items-center space-x-4">
            <a href="#" className="p-2 border border-stone hover:border-gold hover:text-gold transition-colors" aria-label="Our Instagram">
              <Instagram size={14} />
            </a>
            <a href="#" className="p-2 border border-stone hover:border-gold hover:text-gold transition-colors" aria-label="Our Facebook">
              <Facebook size={14} />
            </a>
            <a href="#" className="p-2 border border-stone hover:border-gold hover:text-gold transition-colors" aria-label="Our TikTok">
              <span className="text-[9px] font-bold tracking-tighter uppercase">TT</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 text-left">
          <span className="text-[10px] uppercase tracking-widest text-[#2B2B2B] font-bold block border-b border-stone/40 pb-2">
            Koleksi Pilihan
          </span>
          <div className="flex flex-col space-y-2 text-xs text-charcoal font-light">
            <a href="#collection" className="hover:text-gold transition-colors">// Black Millenia Spray</a>
            <a href="#collection" className="hover:text-gold transition-colors">// Black Millenia Essence</a>
            <a href="#collection" className="hover:text-gold transition-colors">// Black Millenia Drop</a>
            <button onClick={onOpenConsultation} className="hover:text-gold transition-colors text-left font-semibold cursor-pointer">
              // Perlukan Konsultasi?
            </button>
          </div>
        </div>

        {/* Concierge contact info */}
        <div className="space-y-4 text-left">
          <span className="text-[10px] uppercase tracking-widest text-[#2B2B2B] font-bold block border-b border-stone/40 pb-2">
            Concierge Butik
          </span>
          <div className="space-y-3.5 text-xs text-charcoal font-light">
            <div className="flex items-center space-x-2">
              <Phone size={13} className="text-gold shrink-0" />
              <span>WhatsApp: 011-39900920</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={13} className="text-gold shrink-0" />
              <span>Kawasan Perkhidmatan: Malaysia</span>
            </div>
            <div className="glass-panel p-2.5 border-dashed text-[11px] leading-tight text-charcoal-light shadow-xs">
              Penghantaran ekspres kurier percuma pada hari berikutnya disediakan untuk kawasan metropolitan utama.
            </div>
          </div>
        </div>

      </div>

      {/* Bottom copyright bars */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-16 pt-6 border-t border-stone/30 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] text-charcoal-light/60 font-light space-y-4 sm:space-y-0">
        <p>
          &copy; {currentYear} AquivaGold. Hak cipta terpelihara. Kemewahan yang murni.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <span className="hover:text-gold cursor-pointer transition-colors">Dasar Privasi</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Terma Syarat</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Jaminan Bebas MLM</span>
        </div>
      </div>
    </footer>
  );
}
