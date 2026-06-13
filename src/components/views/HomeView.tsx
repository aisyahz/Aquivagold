import React from "react";
import { 
  motion 
} from "motion/react";
import { 
  ArrowRight, 
  MessageSquare, 
  Award, 
  ShieldCheck, 
  Atom, 
  FileText, 
  Sparkles,
  MapPin,
  FlaskConical,
  ChevronRight,
  HelpCircle
} from "lucide-react";
import PlaceholderImage from "../PlaceholderImage";

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenConsultation: (flow?: "buy" | "consult", productTitle?: string) => void;
}

export default function HomeView({ onNavigate, onOpenConsultation }: HomeViewProps) {
  // Animation triggers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1A. MOBILE HERO SECTION (Optimized for 40+ readability, stacked vertically, premium style) */}
      <section 
        className="block md:hidden bg-[#FAF8F1] border-b border-[#C8A75B]/20 py-12 px-6" 
        id="hero-mobile"
      >
        <div className="max-w-md mx-auto space-y-6 text-left">
          
          {/* Tagline */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#C8A75B]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#C8A75B] font-extrabold">
              PENJAGAAN DIRI PREMIUM
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-[32px] font-semibold text-[#1F1F1F] leading-tight tracking-tight">
            Tingkatkan Kesejahteraan Anda Secara <span className="text-[#C8A75B] italic font-normal">Semula Jadi</span>
          </h1>

          {/* Description */}
          <p className="font-sans text-[17px] text-[#2D2D2D] md:text-[18px] leading-[1.8] font-normal">
            Koleksi premium Aquiva Gold Black Millenia direka khas untuk memudahkan rutin harian anda mendapatkan khasiat botani terpelihara, memupuk ketenangan jiwa dan kesihatan murni fizikal harian.
          </p>

          {/* CTA Buttons (Touch-safe, clear high-contrast buttons) */}
          <div className="space-y-4 pt-2">
            <button
              onClick={() => onNavigate("koleksi")}
              className="cursor-pointer w-full h-[58px] bg-[#C1A050] hover:bg-[#D4B56C] text-black uppercase tracking-wider font-bold text-[15px] transition-all duration-300 rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <span>LIHAT KOLEKSI</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => onOpenConsultation("consult")}
              className="cursor-pointer w-full h-[58px] bg-white hover:bg-stone-55 text-[#1F1F1F] border-2 border-[#1F1F1F] uppercase tracking-wider font-bold text-[15px] transition-all duration-300 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} className="text-[#C8A75B]" />
              <span>SAYA MAHU KONSULTASI</span>
            </button>
          </div>

          {/* Product Image (Stacked vertically at bottom of hero section) */}
          <div className="pt-6">
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1F1F]/40 block mb-3 text-center">
              Rangkaian Terapi Utama Black Millenia
            </span>
            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] border-2 border-[#C8A75B]/20 overflow-hidden shadow-md">
              <img 
                src="/src/assets/images/hero-banner.png" 
                alt="Aquiva Gold Black Millenia Collection" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent h-16 pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* 1B. DESKTOP HERO SECTION (Dark luxury cinematic style - Text Left, Image Right) */}
      <section 
        className="hidden md:flex relative min-h-[660px] lg:min-h-[740px] w-full items-center justify-center overflow-hidden border-b border-[#C8A75B]/20 py-16 lg:py-20 bg-[#131311]" 
        id="hero-desktop"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8,8,7,0.96) 0%, rgba(8,8,7,0.90) 45%, rgba(8,8,7,0.50) 80%, rgba(8,8,7,0.85) 100%), url('/src/assets/images/hero-banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Layered cinematic gold and bronze glow behind/around the product */}
        <div className="absolute top-[25%] right-[-10%] lg:right-[8%] w-[60vw] h-[60vw] lg:w-[45vw] lg:h-[45vw] rounded-full bg-gradient-to-tr from-[#C8A75B]/25 to-transparent filter blur-[100px] lg:blur-[140px] pointer-events-none mix-blend-screen z-10 animate-pulse" />
        <div className="absolute top-[40%] right-[15%] w-[300px] h-[300px] rounded-full bg-[#C8A75B]/15 filter blur-[80px] pointer-events-none mix-blend-color-dodge z-10" />
        <div className="absolute bottom-[5%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-[#C8A75B]/5 filter blur-[120px] pointer-events-none" />

        {/* Backdrop gradients to make the edges solid dark */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0e0e0d] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0e0e0d] to-transparent pointer-events-none z-10" />

        {/* Elegant subtle luxury water splash & premium wellness mood elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <svg className="w-full h-full text-[#C8A75B]/20" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0,450 C250,550 550,320 850,480 C1150,640 1280,380 1440,420 L1440,800 L0,800 Z" 
              fill="currentColor" 
            />
            {/* Elegant tropical leaf abstract contour */}
            <path 
              d="M-50,100 C150,150 200,45M50,300 C300,100 200,400" 
              stroke="#C8A75B" 
              strokeWidth="0.5" 
              strokeDasharray="4 8" 
              fill="none" 
            />
            {/* Golden glowing particles */}
            <circle cx="210" cy="150" r="1.5" fill="#C8A75B" className="animate-pulse" />
            <circle cx="680" cy="180" r="1" fill="#C8A75B" />
            <circle cx="1080" cy="110" r="2" fill="#C8A75B" className="animate-pulse" />
            <circle cx="510" cy="480" r="1" fill="#C8A75B" />
          </svg>
        </div>

        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Desktop Left Column - Text Content */}
            <motion.div 
              className="col-span-12 md:col-span-7 flex flex-col items-start gap-5 sm:gap-7 text-left py-6 lg:py-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-[#C8A75B]" />
                <span className="font-sans text-[12px] sm:text-[13px] uppercase tracking-[0.32em] text-[#C8A75B] font-extrabold">
                  PENJAGAAN DIRI PREMIUM
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="font-serif text-[42px] sm:text-[48px] md:text-[52px] lg:text-[68px] xl:text-[80px] font-medium tracking-tight text-[#FAF7F2] leading-[1.1]"
              >
                Tingkatkan<br />
                Kesejahteraan Anda<br />
                <span className="italic font-light text-[#C8A75B] block mt-3 font-serif">
                  Secara Semula Jadi
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-light text-white/95 max-w-xl leading-[1.8]"
              >
                Koleksi premium Aquiva Gold Black Millenia direka untuk individu yang menghargai penjagaan diri berkualiti, gaya hidup sihat dan kesejahteraan harian yang lebih bermakna.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto pt-4"
              >
                <button
                  onClick={() => onNavigate("koleksi")}
                  className="cursor-pointer group flex items-center justify-center gap-3 px-8 h-[54px] sm:h-[58px] text-[15px] sm:text-[16px] bg-[#C8A75B] hover:bg-[#D4B56C] border border-[#C8A75B] hover:scale-[1.02] active:scale-[0.98] text-[#111111] uppercase tracking-wider font-bold transition-all duration-300 rounded shadow-lg w-full sm:px-10"
                >
                  <span>LIHAT KOLEKSI</span>
                  <ArrowRight size={16} className="text-[#111111] transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenConsultation("consult")}
                  className="cursor-pointer group flex items-center justify-center gap-3 px-8 h-[54px] sm:h-[58px] text-[15px] sm:text-[16px] bg-[#FAF7F2] hover:bg-white hover:scale-[1.02] active:scale-[0.98] border border-transparent text-[#111111] uppercase tracking-wider font-bold transition-all duration-300 rounded shadow-md w-full sm:px-10"
                >
                  <MessageSquare size={16} className="text-[#C8A75B]" />
                  <span>KONSULTASI PERCUMA</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Desktop Right Column - Premium Styled Image (Text left, image right fulfillment) */}
            <motion.div 
              className="col-span-12 md:col-span-5 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[2rem] border-2 border-[#C8A75B]/30 overflow-hidden shadow-2xl bg-[#1A1A17] p-1.5 group/hero-img">
                <img 
                  src="/src/assets/images/hero-banner.png" 
                  alt="Aquiva Gold Premium Spa Experience" 
                  className="w-full h-full object-cover rounded-[1.75rem] transition-transform duration-700 group-hover/hero-img:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none rounded-[1.75rem]" />
                <div className="absolute bottom-6 left-8 text-left z-10">
                  <span className="text-[11px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">EKSKLUSIF & HALAL</span>
                  <h4 className="font-serif text-white text-[18px] font-semibold leading-tight">Gaya Hidup Suci & Holistik</h4>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS (4 Items with expanded spacing and typography) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16" id="trust-indicators">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { tag: "100% Suci & Tulen", detail: "Formulasi premium botani sejati bebas pengawet atau bahan tambahan tiruan.", icon: ShieldCheck },
            { tag: "Premium Pilihan Spa", detail: "Dibawakan secara eksklusif untuk rutin terapeutik mewah bagi ketenangan sejati.", icon: Award },
            { tag: "Bespoke Rundingan Peribadi", detail: "Rancangan tersuai mengikut keunikan gaya hidup dan keperluan kesihatan anda.", icon: MessageSquare },
            { tag: "Malaysia Produk Tempatan", detail: "Standard kualiti global buatan tanah air dengan kualiti fasa elit terunggul.", icon: Sparkles }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white border border-[#C8A75B]/15 rounded-2xl p-6 sm:p-8 text-left group hover:border-[#C8A75B]/40 hover:shadow-md transition-all duration-300 min-h-[220px] flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex p-3.5 bg-[#FBF8F1] rounded-xl border border-[#C8A75B]/15 text-[#C8A75B] mb-5 group-hover:bg-[#C8A75B] group-hover:text-white transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1F1F1F] group-hover:text-[#C8A75B] transition-colors duration-300">
                  {item.tag}
                </h4>
              </div>
              <p className="font-sans text-[15px] sm:text-[16px] md:text-[17px] text-[#1F1F1F]/70 mt-3 leading-[1.7]">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY AQUIVA GOLD PREVIEW (Mengapa Memilih Aquiva Gold) */}
      <section className="bg-white py-24 border-y border-[#C8A75B]/15 max-w-full" id="why-preview">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">REVOLUSI PENJAGAAN DIRI</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[52px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
              Mengapa Memilih Aquiva Gold?
            </h2>
            <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                title: "Sumber Premium",
                desc: "Diproses daripada spora tumbuhan eksotik terpilih dan air gred penulenan maksimum tanpa sebarang kimia tambahan.",
                icon: ShieldCheck
              },
              {
                title: "Teknologi Moden",
                desc: "Ekstraksi sains sejuk mengekalkan kestabilan bio-aktif semula jadi demi penyerapan kelembutan optimum.",
                icon: Atom
              },
              {
                title: "Disokong Dokumentasi",
                desc: "Disertai rujukan laporan makmal penuh, ulasan profesional, dan pensijilan syarikat yang telus dan sahih.",
                icon: FileText
              },
              {
                title: "Kualiti Terjamin",
                desc: "Setiap bungkusan diuji di bawah pengawasan rantaian bernilai tinggi demi keyakinan fizikal emosi anda yang berterusan.",
                icon: Award
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-[#FBF8F1] border border-[#C8A75B]/20 rounded-3xl p-8 sm:p-10 flex flex-col justify-between text-left min-h-[300px] hover:border-[#C8A75B] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="text-[#C8A75B] group-hover:scale-105 transition-transform duration-300">
                    <card.icon size={36} />
                  </div>
                  <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-[#1F1F1F]">{card.title}</h3>
                  <p className="font-sans text-[15.5px] sm:text-[17px] md:text-[17px] lg:text-[18px] text-[#1F1F1F]/85 leading-[1.8]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate("kelebihan")}
              className="cursor-pointer inline-flex items-center gap-2.5 text-[15px] sm:text-[16px] uppercase tracking-wider font-bold text-[#C8A75B] hover:text-[#1F1F1F] transition-colors border-b-2 border-dashed border-[#C8A75B] pb-2"
            >
              <span>Ketahui Kelebihan</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCT PREVIEW (Koleksi Black Millenia - Using Premium Placeholders) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8" id="collection-preview">
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">RANGKAIAN EKSKLUSIF</span>
          <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[52px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
            Koleksi Black Millenia
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#1F1F1F]/70 max-w-xl mx-auto leading-[1.8]">
            Terapi harian yang disesuaikan secara berasingan mengikut gaya penjagaan kesihatan pilihan anda.
          </p>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
        </div>

        {/* 3 Key Products Showcase with Premium Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              id: "essence",
              title: "BMW Essence",
              desc: "Terapi terapi mandian bertahap tinggi untuk pengalaman ketenangan spa maksimum di bilik tidur anda.",
              placeholderLabel: "BMW ESSENCE",
            },
            {
              id: "spray",
              title: "BMW Spray",
              desc: "Semburan mikro penyegar kulit wajah & badan yang melindungi perlindungan kelembapan semula jadi anda.",
              placeholderLabel: "BMW SPRAY",
            },
            {
              id: "drop",
              title: "BMW Drop",
              desc: "Formula titisan kesejahteraan premium yang menyahut bertenaga bersih sepanjang hari secara holistik.",
              placeholderLabel: "BMW DROP",
            }
          ].map((prod) => (
            <div 
              key={prod.id}
              className="bg-[#FBF8F1] border border-[#C8A75B]/20 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-8">
                {/* Premium Golden Gradient/Icon box Placeholder strictly matching standard guidelines */}
                <PlaceholderImage 
                  label={prod.placeholderLabel} 
                  type="product" 
                  aspect="aspect-square w-full" 
                />

                <div className="space-y-3 text-left">
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#1F1F1F]">{prod.title}</h3>
                  <p className="font-sans text-[15.5px] sm:text-[17px] md:text-[17px] lg:text-[18px] text-[#1F1F1F]/75 leading-[1.8] min-h-[54px]">{prod.desc}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-[#C8A75B]/15 mt-8 flex gap-4">
                <button
                  onClick={() => onNavigate("koleksi")}
                  className="cursor-pointer flex-1 h-[52px] sm:h-[56px] bg-[#1F1F1F] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all text-center rounded-md flex items-center justify-center"
                >
                  Lihat Produk
                </button>
                <button
                  onClick={() => onOpenConsultation("buy", prod.title)}
                  className="cursor-pointer h-[52px] sm:h-[56px] px-6 border-2 border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md flex items-center justify-center"
                  title="Pesan Segera"
                >
                  Beli
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => onNavigate("koleksi")}
            className="cursor-pointer h-[54px] sm:h-[58px] px-10 bg-transparent border-2 border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all duration-300 rounded-md inline-flex items-center justify-center"
          >
            Lihat Semua Koleksi
          </button>
        </div>
      </section>

      {/* 5. CERTIFICATION PREVIEW (SSM, HALAL, MESTI, Lab Test Report, Company Address) */}
      <section className="bg-[#FAF8F1] py-24 border-y border-[#C8A75B]/20 max-w-full" id="certifications-preview">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">KEBOLEHPERCAYAAN PENUH</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[52px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
              Komitmen Terhadap Kualiti
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#1F1F1F]/70 max-w-xl mx-auto leading-[1.8]">
              Dokumentasi, pendaftaran rasmi dan kelulusan makmal yang memupuk ketenangan minda pelanggan kami.
            </p>
            <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { title: "Sijil SSM Syarikat", icon: FileText, label: "Pendaftaran SSM Teratur", desc: "Berdaftar secara sah dan telus di bawah Suruhanjaya Syarikat Malaysia." },
              { title: "Standard HALAL Syarikat", icon: Award, label: "Pematuhan Sijil Gred", desc: "Menjamin keselamatan bahan mentah suci mengikut syarak sepenuhnya." },
              { title: "MESTI Pengilangan", icon: ShieldCheck, label: "Jaminan Pemprosesan Bersih", desc: "Standard kualiti terkawal di bawah rantaian sanitari premium bertaraf tinggi." },
              { title: "Ujian Analisis Makmal", icon: FlaskConical, label: "Lab Test Report Bebas Kimia", desc: "Siri ujian membuktikan sifar kandungan plumbum, raksa atau bahan sintetik tegar." },
              { title: "Alamat Korporat HQ", icon: MapPin, label: "Syarikat Berpusat Fizikal", desc: "Kemudahan butik sokongan berpusat bertempat di Bukit Damansara, Kuala Lumpur." }
            ].map((doc, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#C8A75B]/20 rounded-2xl p-6 sm:p-8 text-left flex flex-col justify-between hover:border-[#C8A75B] hover:shadow-md transition-all duration-300 group min-h-[340px]"
              >
                <div>
                  <div className="text-[#C8A75B] mb-5 p-3.5 bg-[#FBF8F1] inline-block rounded-xl border border-[#C8A75B]/15">
                    <doc.icon size={26} />
                  </div>
                  <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#1F1F1F] leading-snug">{doc.title}</h3>
                  <span className="text-[12px] text-[#C8A75B] uppercase tracking-wider block font-bold mt-2">{doc.label}</span>
                  <p className="text-[15px] sm:text-[16px] md:text-[16px] lg:text-[17px] text-[#1F1F1F]/70 mt-3.5 leading-[1.7]">{doc.desc}</p>
                </div>
                
                <button
                  onClick={() => onNavigate("pensijilan")}
                  className="cursor-pointer text-[13px] sm:text-[14px] uppercase tracking-wider font-bold text-[#C8A75B] group-hover:text-[#1F1F1F] transition-colors mt-8 pt-4 border-t border-dashed border-[#C8A75B]/20 text-left block w-full"
                >
                  Lihat Dokumen &rarr;
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate("pensijilan")}
              className="cursor-pointer h-[54px] sm:h-[58px] px-10 bg-[#1F1F1F] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all duration-300 rounded-md shadow-md inline-flex items-center justify-center animate-none"
            >
              Lihat Pensijilan &amp; Bukti
            </button>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL PREVIEW (Only 3 Testimonials) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 font-sans" id="testimonials-preview">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">BUKTI SOSIAL</span>
          <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[52px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
            Perjalanan Kesejahteraan Pelanggan
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              text: "“Pembungkusan sangat premium dan khidmat nasihat peribadi yang diberikan sungguh memuaskan. Saya dapat memahami cara penggunaan secara jelas bersesuaian dengan keperluan harian saya.”",
              author: "Zarina Abdullah",
              role: "Pengguna Setia",
              location: "Kuala Lumpur"
            },
            {
              text: "“Produk ini direka dengan sangat tinggi nilai seninya. Sesuai meletakkan keanggunan di atas kaunter bilik mandi saya. Baunya sangat lembut, semula jadi dan bukan haruman tajam sintetik.”",
              author: "Marcus Lim",
              role: "Peminat Gaya Hidup",
              location: "Bukit Damansara"
            },
            {
              text: "“Penerangan serta ketelusan dokumen laporan makmal yang diberikan oleh pasukan jualan sebelum pembelian benar-benar membina kepercayaan tinggi kami sekeluarga.”",
              author: "Elena Petrova",
              role: "Pembeli Korporat",
              location: "Mont Kiara"
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#FBF8F1] border border-[#C8A75B]/20 rounded-[2rem] p-8 sm:p-10 text-left flex flex-col justify-between hover:border-[#C8A75B]/40 hover:shadow-lg transition-all duration-300 min-h-[300px]"
            >
              <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[19px] italic text-[#1F1F1F]/85 leading-[1.8]">
                {item.text}
              </p>
              
              <div className="pt-8 border-t border-[#C8A75B]/15 mt-8 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#1F1F1F] to-[#C8A75B] flex items-center justify-center text-white text-[14px] font-bold shadow">
                  {item.author[0]}
                </div>
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-bold text-[#1F1F1F]">{item.author}</h4>
                  <span className="text-[12px] sm:text-[13px] text-[#C8A75B] font-semibold block leading-none mt-1.5">{item.role} &bull; {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => onNavigate("testimoni")}
            className="cursor-pointer h-[54px] sm:h-[58px] px-10 bg-transparent border-2 border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all duration-300 rounded-md inline-flex items-center justify-center"
          >
            Lihat Semua Testimoni
          </button>
        </div>
      </section>

      {/* 7. ENTREPRENEUR PREVIEW (PROGRAM RAKAN NIAGA with agent-banner background) */}
      <section 
        className="relative text-white py-24 border-y border-[#C8A75B]/20 max-w-full overflow-hidden bg-cover bg-center bg-no-repeat" 
        id="entrepreneur-preview"
        style={{
          backgroundImage: `linear-gradient(rgba(19, 19, 17, 0.88), rgba(27, 27, 24, 0.94)), url('/src/assets/images/agent-banner.png')`
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A75B]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8A75B]/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center lg:text-left relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">PROGRAM RAKAN NIAGA</span>
              <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[52px] text-white font-medium tracking-tight leading-tight">
                Jana Pendapatan Bersama Aquiva Gold
              </h2>
              <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-white/85 max-w-3xl leading-[1.8]">
                Sertai rangkaian usahawan kami ke tahap seterusnya. Sama ada secara Dropship yang fleksibel (tanpa simpan stok) atau sebagai Stokis Wilayah berpotensi ganjaran tinggi, kami menyediakan bimbingan visual penuh, bahan pengiklanan tersuai, dan rundingan berterusan.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                onClick={() => onNavigate("usahawan")}
                className="cursor-pointer w-full sm:w-auto h-[54px] sm:h-[58px] px-10 bg-[#C8A75B] hover:bg-[#D4B56C] hover:text-[#1F1F1F] text-[#1F1F1F] text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all duration-300 rounded-md shadow-lg flex items-center justify-center"
              >
                Sertai Sekarang
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (Perlukan Konsultasi?) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8" id="final-cta">
        <div className="bg-[#FAF8F1] border border-[#C8A75B]/25 rounded-[3rem] p-10 sm:p-16 md:p-20 text-center space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A75B]/5 rounded-full filter blur-xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block font-sans">CADANGAN TERPERINCI</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[52px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
              Perlukan Konsultasi?
            </h2>
            <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
            <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#1F1F1F]/80 leading-[1.8] font-light max-w-2xl mx-auto">
              Pasukan terapeutik kami sedia membimbing anda mendapatkan maklumat lengkap mengenai khasiat botani, cara integrasi ke rutin sedia ada serta penyertaan ejen perniagaan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 max-w-lg mx-auto pt-4">
            <a
              href="https://wa.me/601139900920?text=Hi%20Aquiva%20Gold%2C%20boleh%20saya%20dapatkan%20konsultasi%20mengenai%20Koleksi%20Black%20Millenia%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-full sm:w-auto h-[54px] sm:h-[58px] px-10 bg-[#1F1F1F] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all text-center rounded-md flex items-center justify-center shadow-md"
            >
              WhatsApp Sekarang
            </a>
            <button
              onClick={() => onOpenConsultation("consult")}
              className="cursor-pointer w-full sm:w-auto h-[54px] sm:h-[58px] px-10 bg-white hover:bg-[#FAF8F3] border-2 border-[#C8A75B]/40 text-[#1F1F1F] hover:text-[#C8A75B] text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md shadow-xs flex items-center justify-center"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
