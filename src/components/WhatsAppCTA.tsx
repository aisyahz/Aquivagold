import React from "react";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

interface WhatsAppCTAProps {
  onOpenConsult?: () => void;
}

export default function WhatsAppCTA({ onOpenConsult }: WhatsAppCTAProps) {
  const handleOpenGeneralWhatsApp = () => {
    const message = "Hi Aquvia Gold, boleh saya tahu lebih lanjut mengenai pilihan produk dan rundingan kesihatan?";
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/601139900920?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-[#EFEAE2]/30 border-t border-stone/20 relative overflow-hidden" id="whatsapp-cta">
      {/* Soft warm circular reflections to back up elegance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        
        {/* Editorial Brand Crest representation */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-xs text-gold font-serif mb-3 tracking-widest bg-white/70">
            AG
          </div>
          <span className="font-display text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold block">
            CONCIERGE MESRA PELANGGAN
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-charcoal">
            Hubungi Rakan Konsultasi Kami <br />
            <span className="italic font-light text-gold text-2xl md:text-3xl block mt-1">Sedia Melayani Anda Separa Peribadi</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Subhead / Guarantee */}
        <p className="text-sm md:text-base text-charcoal-light font-light max-w-xl mx-auto leading-relaxed">
          Ada sebarang soalan tentang produk, harga, atau petua kesejahteraan harian? Sila cetuskan mesej WhatsApp terus kepada kami tanpa sebarang keraguan. Pasukan tempatan kami sedia membantu dengan penuh kemesraan.
        </p>

        {/* Large green-gold highlighted trigger button */}
        <div className="flex flex-col items-center space-y-4 pt-2">
          <button
            onClick={handleOpenGeneralWhatsApp}
            className="cursor-pointer relative overflow-hidden group py-4 px-10 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm uppercase tracking-widest font-extrabold flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl min-h-[52px]"
            id="whatsapp-cta-direct-btn"
          >
            {/* Pulsing beacon inside button */}
            <span className="absolute left-0 right-0 h-full w-full bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block animate-ping mr-0.5" />
            <MessageSquare size={18} fill="currentColor" className="text-white" />
            <span>Tanya Kami Di WhatsApp (Percuma)</span>
            <ArrowRight size={14} className="text-white" />
          </button>

          {/* Secondary smaller button for users who prefer guided form */}
          {onOpenConsult && (
            <button
              onClick={onOpenConsult}
              className="cursor-pointer text-xs md:text-sm font-semibold uppercase tracking-wider text-charcoal-light hover:text-gold transition-colors underline py-2 min-h-[44px]"
              id="whatsapp-cta-form-btn"
            >
              Atau isi butiran ringkas pendaftaran kesihatan anda
            </button>
          )}
        </div>

        {/* Guarantee Seal */}
        <div className="max-w-md mx-auto pt-4 border-t border-stone/20 flex items-center justify-center space-x-3 text-stone-600">
          <ShieldCheck size={18} className="text-gold shrink-0" />
          <span className="text-[11px] md:text-xs text-charcoal-light font-light text-left leading-snug">
            <strong>Jaminan Privasi Penuh:</strong> Setiap konsultasi adalah sulit, selamat daripada sebarang rujukan pihak ketiga, dan dikendalikan sepenuhnya tanpa paksaan pembelian.
          </span>
        </div>

      </div>
    </section>
  );
}
