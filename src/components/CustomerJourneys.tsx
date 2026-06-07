import React from "react";
import { ArrowRight, ShoppingBag, MessageSquareHeart, Star } from "lucide-react";
import { motion } from "motion/react";

interface CustomerJourneysProps {
  onGoToProducts: () => void;
  onOpenConsultation: () => void;
  onGoToAgent: () => void;
}

export default function CustomerJourneys({
  onGoToProducts,
  onOpenConsultation,
  onGoToAgent
}: CustomerJourneysProps) {
  const journeys = [
    {
      icon: "🛍️",
      title: "Saya Ingin Membeli Produk",
      desc: "Sudah bersedia memilih? Lihat barisan koleksi premium botani kami untuk kesegaran badan harian.",
      btnText: "Beli Produk",
      action: onGoToProducts,
      themeClass: "border-gold/30 hover:border-gold hover:bg-white/90",
      iconContainer: "bg-gold/10 text-[#C9A227]"
    },
    {
      icon: "📞",
      title: "Saya Perlukan Konsultasi",
      desc: "Tidak pasti produk mana yang sesuai? Berbual mesra bersama perunding kesihatan kami menerusi WhatsApp.",
      btnText: "Mula Konsultasi",
      action: onOpenConsultation,
      themeClass: "border-[#C9A227]/40 hover:border-[#C9A227] hover:bg-[#FAF8F3]",
      iconContainer: "bg-gold/20 text-[#A67C1E]"
    },
    {
      icon: "🤝",
      title: "Saya Ingin Menjadi Ejen / Dropship",
      desc: "Sertai program niaga tanpa modal atau simpan stok. Jana pendapatan pasif yang disokong bimbingan rapat.",
      btnText: "Peluang Usahawan",
      action: onGoToAgent,
      themeClass: "border-charcoal/20 hover:border-gold hover:bg-emerald-50/10",
      iconContainer: "bg-charcoal/10 text-charcoal"
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F3] relative overflow-hidden border-t border-b border-stone/20" id="journeys">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-display text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-[#C9A227] block mb-2">
            PILIHAN PERJALANAN ANDA
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-charcoal">
            Bagaimanakah Kami Boleh Membantu Anda Hari Ini?
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4 mb-4" />
          <p className="text-xs md:text-sm text-charcoal-light font-light leading-relaxed">
            Sila pilih salah satu daripada pilihan mudah di bawah untuk mulakan langkah anda secara tenang dan senang.
          </p>
        </div>

        {/* 3 Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {journeys.map((j, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass-panel border-2 ${j.themeClass} rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.01]`}
            >
              <div className="space-y-4 text-left">
                {/* Custom circular icon representation */}
                <div className={`w-12 h-12 rounded-full ${j.iconContainer} flex items-center justify-center text-xl shrink-0 shadow-xs`}>
                  {j.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg md:text-xl font-bold tracking-tight text-charcoal">
                    {j.title}
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-light font-light leading-relaxed min-h-[50px]">
                    {j.desc}
                  </p>
                </div>
              </div>

              {/* Large touch targets */}
              <div className="pt-6 mt-6 border-t border-stone/20">
                <button
                  onClick={j.action}
                  className="w-full cursor-pointer py-3.5 px-5 bg-charcoal hover:bg-[#C9A227] text-white text-xs md:text-sm uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-xs min-h-[46px] rounded-lg"
                >
                  <span>{j.btnText}</span>
                  <ArrowRight size={14} className="text-gold" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
