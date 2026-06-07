import { ArrowDown, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Three products to feature visually in the Hero base
  const heroProducts = [
    { name: "Spray", label: "Penyegar Kulit", img: "https://raw.githubusercontent.com/aisyahz/Aquivagold/main/src/assets/images/spray.jpeg" },
    { name: "Essence", label: "Terapi Mandian", img: "https://raw.githubusercontent.com/aisyahz/Aquivagold/main/src/assets/images/Essence.jpeg" },
    { name: "Drop", label: "Suplemen Premium", img: "https://raw.githubusercontent.com/aisyahz/Aquivagold/main/src/assets/images/Drop.jpeg" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-ivory" id="hero">
      {/* Background with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/aisyahz/Aquivagold/main/src/assets/images/aquvia_spa_hero_1780832150912.pngg"
          alt="Luxury soft beige sunlit spa surroundings"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.96] contrast-[0.98]"
        />
        {/* Soft, warm luxury radial and linear gradient overrides to guarantee excellent text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3]/95 via-[#FAF8F3]/75 to-[#FAF8F3]/40 md:from-[#FAF8F3]/90 md:via-[#FAF8F3]/60 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF8F3] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Copy (7 Cols) */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="hero-content"
        >
          {/* Subtle Label */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="font-display text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
              Penjagaan Diri Premium
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-charcoal leading-[1.15]"
          >
            Tingkatkan Kesejahteraan Anda <br />
            <span className="italic font-light text-gold">Secara Semula Jadi</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-light text-charcoal-light max-w-lg leading-relaxed"
          >
            Koleksi premium Aquvia Gold untuk melengkapkan rutin penjagaan diri dan kesejahteraan harian.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="#collection"
              className="py-4 px-8 bg-charcoal hover:bg-charcoal-light text-white text-xs uppercase tracking-widest font-semibold text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 border border-transparent"
              id="hero-primary-cta"
            >
              <span>Lihat Produk</span>
              <ArrowRight size={14} className="text-gold" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="cursor-pointer py-4 px-8 glass-panel hover:bg-white hover:text-gold hover:border-gold text-charcoal text-xs uppercase tracking-widest font-semibold text-center transition-all duration-300 flex items-center justify-center space-x-2 shadow-xs hover:shadow-md"
              id="hero-secondary-cta"
            >
              <MessageCircle size={14} className="text-gold" />
              <span>Konsultasi Percuma</span>
            </button>
          </motion.div>

          {/* Brand attributes badges */}
          <motion.div variants={itemVariants} className="pt-6 grid grid-cols-3 gap-6 border-t border-stone/40 w-full max-w-md">
            <div>
              <span className="font-serif text-lg text-charcoal block">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-light font-light">Suci &amp; Tulen</span>
            </div>
            <div>
              <span className="font-serif text-lg text-charcoal block">MYR</span>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-light font-light">Pilihan Spa Mewah</span>
            </div>
            <div>
              <span className="font-serif text-lg text-charcoal block">Bespoke</span>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-light font-light">Rundingan Peribadi</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual Display (5 Cols) */}
        <motion.div
          className="lg:col-span-5 relative flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          id="hero-visual"
        >
          {/* Main Display Platform */}
          <div className="relative w-full max-w-sm aspect-square bg-[#EFEAE2]/30 rounded-full border border-stone/40 flex items-center justify-center p-8">
            <div className="absolute inset-4 rounded-full border border-dashed border-stone/20" />
            
            {/* Center Product Showcase (Alternating Preview Bottles) */}
            <div className="relative w-48 h-48 flex items-center justify-center z-10 transition-transform duration-700 hover:scale-105">
              <img
                src="https://raw.githubusercontent.com/aisyahz/Aquivagold/main/src/assets/images/spray.jpeg"
                alt="Highlighting Black Millenia line bottle"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(43,43,43,0.15)]"
              />
            </div>

             {/* Float tags */}
            <div className="absolute top-8 right-0 glass-panel px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#C9A227] font-semibold shadow-sm">
              Botol Kaca Premium
            </div>
            <div className="absolute bottom-12 left-0 glass-panel px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#2B2B2B] font-medium shadow-sm">
              Reka Bentuk Minimalis
            </div>
          </div>

          {/* Inline Product Thumbnails Grid */}
          <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-md">
            {heroProducts.map((p, idx) => (
              <a
                href="#collection"
                key={idx}
                className="group flex flex-col items-center p-2.5 glass-panel hover:border-gold hover:bg-white/80 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 overflow-hidden mb-1 flex items-center justify-center bg-[#EFEAE2]/30">
                  <img
                    src={p.img}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-[9px] uppercase tracking-wider font-semibold text-charcoal text-ellipsis overflow-hidden whitespace-nowrap w-full">
                  {p.name}
                </span>
                <span className="text-[8px] tracking-wide text-gold font-light mt-0.5 uppercase">
                  {p.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bounce-Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-60 hover:opacity-100 transition-opacity z-10">
        <span className="text-[9px] uppercase tracking-[0.3em] text-charcoal font-light">Ketahui Lanjut</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} className="text-gold" />
        </motion.div>
      </div>
    </section>
  );
}
