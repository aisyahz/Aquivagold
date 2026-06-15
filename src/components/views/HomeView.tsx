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
  HelpCircle,
  Leaf,
  Wind,
  Home
} from "lucide-react";
import PlaceholderImage from "../PlaceholderImage";

import heroBanner from "../../assets/images/hero-banner.png";
import agentBanner from "../../assets/images/agent-banner.png";
import essenceImage from "../../assets/images/Essence.jpeg";
import sprayImage from "../../assets/images/spray.jpeg";
import dropImage from "../../assets/images/Drop.jpeg";

import halalMestiImage from "../../assets/images/halal mesti.jpeg";
import kkmImage from "../../assets/images/kkm.jpeg";
import labReportImage from "../../assets/images/lab test report.jpeg";
import spaImage from "../../assets/images/spa.png";

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
      
      {/* Hero Wrapper to ensure seamless transition and shield from top-level space-y */}
      <div id="hero-wrapper" className="!mt-0 w-full">
        {/* 1A. MOBILE HERO SECTION (Optimized for 40+ readability, stacked vertically, premium style) */}
        <section 
          className="block md:hidden bg-[#FAF8F1] border-b border-[#C8A75B]/20 pt-4 pb-4 px-4" 
          id="hero-mobile"
        >
          <div className="max-w-md mx-auto flex flex-col items-center justify-between gap-3 text-center">
            
            {/* 1. AQUIVA GOLD LOGO */}
            <div className="flex flex-col items-center text-center space-y-0.5" id="hero-mobile-logo">
              <span className="font-serif text-[15px] tracking-[0.25em] text-[#1F1F1F] font-black uppercase leading-none">
                AQUIVAGOLD
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A75B] font-bold leading-none">
                Black Millenia
              </span>
            </div>

            {/* 2. PRODUCT IMAGE (Visual focus, occupies approximately 40% of mobile viewport height) */}
            <div className="relative w-full h-[40vh] min-h-[220px] max-h-[340px] rounded-2xl border-2 border-[#C8A75B]/20 overflow-hidden shadow-md" id="hero-mobile-img-container">
              <img 
                src={heroBanner} 
                alt="Aquiva Gold Black Millenia Collection" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Luxury spa therapy positioning overlay badge */}
              <div className="absolute top-3 left-3 bg-stone-900/95 backdrop-blur-md py-1.5 px-3 rounded-full border border-[#C8A75B]/40 shadow-sm">
                <span className="text-[9.5px] uppercase tracking-widest text-[#C8A75B] font-extrabold flex items-center gap-1.5 leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A75B] animate-ping" />
                  Luxury Spa Therapy
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent h-14 pointer-events-none" />
            </div>

            {/* 3. HEADLINE (Maximum 2 lines, larger font, higher contrast) */}
            <h1 className="font-serif text-[24px] sm:text-[26px] font-extrabold text-[#111111] leading-tight tracking-tight px-1" id="hero-mobile-headline">
              Terapi Kesejahteraan <span className="text-[#C8A75B] italic font-normal">Semula Jadi</span>
            </h1>

            {/* 4. SHORT DESCRIPTION (Premium wellness & Black Millenia collection) */}
            <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#2C2C2C] leading-normal font-medium px-2" id="hero-mobile-description">
              Mewahkan rutin harian dengan pati botani tulen terapeutik Black Millenia untuk kesegaran fizikal dan minda sejati.
            </p>

            {/* 5. CTA BUTTONS (Touch-safe, side-by-side to fit immediately on the screen) */}
            <div className="grid grid-cols-2 gap-2 w-full px-1 pt-1" id="hero-mobile-actions">
              <button
                onClick={() => onNavigate("koleksi")}
                className="cursor-pointer h-[46px] bg-[#C1A050] hover:bg-[#D4B56C] active:scale-95 text-black uppercase tracking-wider font-extrabold text-[12px] transition-all duration-300 rounded-lg flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>KOLEKSI</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => onOpenConsultation("consult")}
                className="cursor-pointer h-[46px] bg-white hover:bg-[#FAF8F5] active:scale-95 text-[#1F1F1F] border border-[#1F1F1F]/60 uppercase tracking-wider font-extrabold text-[11px] transition-all duration-300 rounded-lg flex items-center justify-center gap-1.5"
              >
                <MessageSquare size={13} className="text-[#C8A75B]" />
                <span>KONSULTASI</span>
              </button>
            </div>

          </div>
        </section>

      {/* 1B. DESKTOP HERO SECTION (Dark luxury cinematic style - Text Left, Image Right) */}
      <section 
        className="hidden md:flex relative min-h-[660px] lg:min-h-[740px] w-full items-center justify-center overflow-hidden border-b border-[#C8A75B]/20 pt-16 pb-8 lg:pt-20 lg:pb-10 bg-[#131311]" 
        id="hero-desktop"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8,8,7,0.96) 0%, rgba(8,8,7,0.90) 45%, rgba(8,8,7,0.50) 80%, rgba(8,8,7,0.85) 100%), url('${heroBanner}')`,
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
                className="font-serif text-[34px] sm:text-[40px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-medium tracking-tight text-[#FAF7F2] leading-[1.1]"
              >
                Tingkatkan<br />
                Kesejahteraan Anda<br />
                <span className="italic font-light text-[#C8A75B] block mt-3 font-serif">
                  Secara Semula Jadi
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="font-sans text-[14px] sm:text-[15px] font-light text-white/95 max-w-xl leading-[1.8]"
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
                  src={heroBanner} 
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
      </div>

      {/* 2. PREMIUM SPA THERAPY INTRODUCTION (Pengalaman Spa Premium Di Rumah Anda) */}
      <section className="bg-[#FAF8F1] pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-10 md:pb-12 border-b border-[#C8A75B]/15 max-w-full !mt-0" id="spa-therapy">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          {/* Split luxury layout (60% Left, 40% Right on large screens) */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: Cinematic Spa Image (60% width) - Made less tall and compact */}
            <div className="col-span-1 lg:col-span-6">
              <div className="relative w-full aspect-[4/3] lg:aspect-[4/3] rounded-2xl border border-[#C8A75B]/25 overflow-hidden shadow-xl p-1.5 bg-white/40 group">
                <img 
                   src={spaImage} 
                  alt="Traditional Malay Herbal Spa & Mandian Tangas Ritual" 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Steaming warm gold mist overlay */}
                <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#C8A75B]/30 via-transparent to-transparent pointer-events-none rounded-xl mix-blend-color-burn" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition-colors duration-500 rounded-xl" />
                
                {/* Soft glow highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A75B]/10 via-transparent to-white/5 pointer-events-none rounded-xl" />
                
                {/* Subtle outer soft lighting gradient */}
                <div className="absolute inset-3 sm:inset-4 rounded-xl border border-dashed border-white/20 pointer-events-none group-hover:border-[#C8A75B]/30 transition-colors duration-500" />
                
                {/* Floating luxury label badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black/45 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full pointer-events-none">
                  <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.25em] text-white/90 font-medium">
                    TRADITIONAL WELLNESS ELEVATED
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Editorial Content (40% width) */}
            <div className="col-span-1 lg:col-span-4 space-y-6 text-left">
              
              <div className="space-y-3">
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">
                  RITUAL PENJAGAAN HOLISTIK
                </span>
                
                <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[30px] xl:text-[36px] text-[#1F1F1F] font-normal tracking-tight leading-[1.2]">
                  Pengalaman Spa Premium Di Rumah Anda
                </h2>
                
                <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#1F1F1F]/75 leading-[1.7] font-light">
                  Siri Black Millenia menyatukan khazanah botani tradisional dengan kemewahan bertaraf dunia. Diadun teliti sebagai sebahagian daripada ritual mandian tangas dan amalan penjagaan diri premium, formulasi ini melengkapkan rutin relaksasi anda untuk mencapai suasana spa eksklusif dalam keselesaan kediaman sendiri.
                </p>
              </div>

              {/* Luxury Glassmorphism Card */}
              <div className="bg-white/60 backdrop-blur-md border border-[#C8A75B]/15 rounded-2xl p-5 sm:p-6 space-y-4 shadow-[0_12px_40px_rgba(200,167,91,0.04)]">
                
                {/* Row 1 */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-[#C8A75B]/10">
                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-[#C8A75B]/20 bg-white text-[#C8A75B]">
                    <Wind size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-[15px] sm:text-[16px] font-semibold text-[#1F1F1F] flex items-center gap-1.5">
                      <span className="text-[#C8A75B]">✦</span>
                      <span>Ritual Mandian Tangas Tradisional</span>
                    </h4>
                    <p className="font-sans text-[12px] text-[#1F1F1F]/70 leading-relaxed font-light">
                      Melengkapkan amalan stim tangas herba klasik dengan kaedah moden demi keselesaan mutlak.
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-[#C8A75B]/10">
                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-[#C8A75B]/20 bg-white text-[#C8A75B]">
                    <Sparkles size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-[15px] sm:text-[16px] font-semibold text-[#1F1F1F] flex items-center gap-1.5">
                      <span className="text-[#C8A75B]">✦</span>
                      <span>Aroma Menenangkan & Relaksasi</span>
                    </h4>
                    <p className="font-sans text-[12px] text-[#1F1F1F]/70 leading-relaxed font-light">
                      Mengandungi ekstrak aroma mewah untuk mencipta suasana relaksasi yang tenang dan mendalam.
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-[#C8A75B]/10">
                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-[#C8A75B]/20 bg-white text-[#C8A75B]">
                    <Home size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-[15px] sm:text-[16px] font-semibold text-[#1F1F1F] flex items-center gap-1.5">
                      <span className="text-[#C8A75B]">✦</span>
                      <span>Pengalaman Spa Dalam Privasi Rumah</span>
                    </h4>
                    <p className="font-sans text-[12px] text-[#1F1F1F]/70 leading-relaxed font-light">
                      Menghadirkan aura terapeutik hotel bertaraf lima bintang terus ke ruang kediaman peribadi anda.
                    </p>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-[#C8A75B]/20 bg-white text-[#C8A75B]">
                    <Award size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-[15px] sm:text-[16px] font-semibold text-[#1F1F1F] flex items-center gap-1.5">
                      <span className="text-[#C8A75B]">✦</span>
                      <span>Rutin Penjagaan Diri Premium</span>
                    </h4>
                    <p className="font-sans text-[12px] text-[#1F1F1F]/70 leading-relaxed font-light">
                      Direka eksklusif untuk mereka yang mementingkan kesejahteraan holistik berpanjangan.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA Button */}
              <div className="pt-1">
                <button
                  onClick={() => onNavigate("koleksi")}
                  className="cursor-pointer group relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden rounded-lg bg-[#131311] border border-[#C8A75B]/30 transition-all duration-300 hover:border-[#C8A75B] hover:shadow-[0_8px_30px_rgb(200,167,91,0.15)] w-full sm:w-auto text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C8A75B]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-sans text-[12px] uppercase tracking-[0.2em] font-medium text-[#FAF8F1] flex items-center gap-2.5">
                    <span>[ Ketahui Ritual Spa ]</span>
                    <ArrowRight size={13} className="text-[#C8A75B] transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. WHY AQUIVA GOLD PREVIEW (Mengapa Memilih Aquiva Gold) */}
      <section className="bg-white py-16 border-y border-[#C8A75B]/15 max-w-full" id="why-preview">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">REVOLUSI PENJAGAAN DIRI</span>
            <h2 className="font-serif text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-[#1F1F1F] font-bold tracking-tight leading-tight">
              Mengapa Memilih Aquiva Gold?
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="bg-[#FBF8F1] border border-[#C8A75B]/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left min-h-[220px] hover:border-[#C8A75B] hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="text-[#C8A75B] group-hover:scale-105 transition-transform duration-300">
                    <card.icon size={24} />
                  </div>
                  <h3 className="font-serif text-[17px] sm:text-[18px] font-bold text-[#1F1F1F]">{card.title}</h3>
                  <p className="font-sans text-[13px] sm:text-[14px] text-[#1F1F1F]/80 leading-[1.7]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
 
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate("kelebihan")}
              className="cursor-pointer inline-flex items-center gap-2 text-[14px] sm:text-[15px] uppercase tracking-wider font-bold text-[#C8A75B] hover:text-[#1F1F1F] transition-colors border-b-2 border-dashed border-[#C8A75B] pb-1.5"
            >
              <span>Ketahui Kelebihan</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCT PREVIEW (Koleksi Black Millenia - Using Premium Placeholders) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8" id="collection-preview">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">RANGKAIAN EKSKLUSIF</span>
          <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
            Koleksi Black Millenia
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#1F1F1F]/70 max-w-xl mx-auto leading-[1.7]">
            Terapi harian yang disesuaikan secara berasingan mengikut gaya penjagaan kesihatan pilihan anda.
          </p>
          <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
        </div>

        {/* 3 Key Products Showcase with Actual Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              id: "essence",
              title: "BMW Essence",
              desc: "Terapi terapi mandian bertahap tinggi untuk pengalaman ketenangan spa maksimum di bilik tidur anda.",
              img: essenceImage,
            },
            {
              id: "spray",
              title: "BMW Spray",
              desc: "Semburan mikro penyegar kulit wajah & badan yang melindungi perlindungan kelembapan semula jadi anda.",
              img: sprayImage,
            },
            {
              id: "drop",
              title: "BMW Drop",
              desc: "Formula titisan kesejahteraan premium yang menyahut bertenaga bersih sepanjang hari secara holistik.",
              img: dropImage,
            }
          ].map((prod) => (
            <div 
              key={prod.id}
              className="bg-[#FBF8F1] border border-[#C8A75B]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-8">
                {/* Premium Golden Frame with Actual Image */}
                <div className="relative w-full aspect-square rounded-[1.25rem] border border-[#C8A75B]/20 overflow-hidden shadow-xs group/img hover:border-[#C8A75B]/60 transition-all duration-500 bg-white">
                  <img 
                    src={prod.img} 
                    alt={prod.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" 
                  />
                  {/* Subtle elegant gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-500" />
                  
                  {/* Golden frame outline inside the image borders */}
                  <div className="absolute inset-3 rounded-[0.9rem] border border-dashed border-white/20 pointer-events-none group-hover/img:border-[#C8A75B]/30 transition-colors duration-500" />
                  
                  {/* Floating micro label for prestige */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center bg-[#1F1F1F]/80 backdrop-blur-md border border-[#C8A75B]/30 px-3.5 py-2 rounded-xl text-left">
                    <div>
                      <span className="font-serif text-white text-[12px] tracking-wide block font-bold leading-none">
                        {prod.title}
                      </span>
                      <span className="font-sans text-[8px] text-[#C8A75B] uppercase tracking-[0.2em] block font-semibold mt-1 leading-none">
                        Black Millenia Series
                      </span>
                    </div>
                    <Sparkles size={12} className="text-[#C8A75B] shrink-0" />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1F1F1F]">{prod.title}</h3>
                  <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#1F1F1F]/75 leading-[1.7] min-h-[48px]">{prod.desc}</p>
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
            className="cursor-pointer h-[48px] sm:h-[52px] px-8 bg-transparent border-2 border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-white text-[14px] sm:text-[15px] uppercase tracking-wider font-bold transition-all duration-300 rounded-lg inline-flex items-center justify-center"
          >
            Lihat Semua Koleksi
          </button>
        </div>
      </section>

      {/* 5. CERTIFICATION PREVIEW (HALAL & MESTI, KKM, Lab Report - Show 3 authentic preview cards) */}
      <section className="bg-[#FAF8F1] py-16 border-y border-[#C8A75B]/20 max-w-full" id="certifications-preview">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">KEBOLEHPERCAYAAN PENUH</span>
            <h2 className="font-serif text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-[#1F1F1F] font-bold tracking-tight leading-tight">
              Komitmen Terhadap Kualiti
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#1F1F1F]/70 max-w-xl mx-auto leading-[1.7]">
              Dokumentasi, pendaftaran rasmi dan kelulusan analisis saintifik bebas yang memupuk ketenangan jiwa dan ketelusan mutlak.
            </p>
            <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "HALAL & MESTI", 
                img: halalMestiImage, 
                label: "Piawaian Kebersihan & Syarak", 
                desc: "Pensijilan berkaitan yang menunjukkan komitmen terhadap standard pengeluaran dan pematuhan yang ditetapkan." 
              },
              { 
                title: "KKM Related Documentation", 
                img: kkmImage, 
                label: "Dokumentasi & Kelulusan KKM", 
                desc: "Dokumentasi berkaitan yang boleh dirujuk untuk tujuan maklumat dan keyakinan pelanggan." 
              },
              { 
                title: "Laporan Makmal", 
                img: labReportImage, 
                label: "Analisis & COA Saintifik", 
                desc: "Laporan analisis makmal yang berkaitan dengan produk Aquiva Gold Black Millenia." 
              }
            ].map((doc, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-[#C8A75B]/15 rounded-2xl p-5 flex flex-col justify-between hover:border-[#C8A75B] hover:shadow-md transition-all duration-300 group min-h-[380px]"
              >
                <div className="space-y-4">
                  {/* Premium Document Mini-Frame */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl border border-[#C8A75B]/20 overflow-hidden bg-slate-50 group-hover:border-[#C8A75B]/60 transition-all duration-500 shadow-sm p-1">
                    <img 
                      src={doc.img} 
                      alt={doc.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-2.5 rounded-xl border border-dashed border-white/25 pointer-events-none" />
                  </div>
 
                  <div className="space-y-2 text-left">
                    <span className="text-[9px] bg-[#FAF8F1] border border-[#C8A75B]/20 text-[#C8A75B] uppercase tracking-widest font-extrabold px-2 py-0.5 rounded inline-block">
                      {doc.label}
                    </span>
                    <h3 className="font-serif text-[17px] sm:text-[18px] font-bold text-[#1F1F1F] leading-tight group-hover:text-[#C8A75B] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-[12.5px] sm:text-[13.5px] text-[#1F1F1F]/70 leading-[1.6] font-light">
                      {doc.desc}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => onNavigate("pensijilan")}
                  className="cursor-pointer text-[12px] sm:text-[13px] uppercase tracking-widest font-extrabold text-[#C8A75B] group-hover:text-[#1F1F1F] transition-colors mt-6 pt-4 border-t border-dashed border-[#C8A75B]/20 text-left flex items-center justify-between w-full"
                >
                  <span>LIHAT DOKUMEN</span>
                  <span>&rarr;</span>
                </button>
              </div>
            ))}
          </div>
 
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate("pensijilan")}
              className="cursor-pointer h-[48px] sm:h-[52px] px-8 bg-[#1F1F1F] hover:bg-[#C8A75B] hover:text-black text-white text-[14px] sm:text-[15px] uppercase tracking-wider font-bold transition-all duration-300 rounded-lg shadow-md inline-flex items-center justify-center animate-none"
            >
              Lihat Pensijilan &amp; Bukti
            </button>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL PREVIEW (Only 3 Testimonials) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-10 font-sans" id="testimonials-preview">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">BUKTI SOSIAL</span>
          <h2 className="font-serif text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-[#1F1F1F] font-bold tracking-tight leading-tight">
            Perjalanan Kesejahteraan Pelanggan
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              className="bg-[#FBF8F1] border border-[#C8A75B]/20 rounded-2xl p-5 sm:p-6 text-left flex flex-col justify-between hover:border-[#C8A75B]/40 hover:shadow-md transition-all duration-300 min-h-[220px]"
            >
              <p className="font-sans text-[12.5px] sm:text-[13.5px] italic text-[#1F1F1F]/85 leading-[1.6]">
                {item.text}
              </p>
              
              <div className="pt-4 border-t border-[#C8A75B]/15 mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1F1F1F] to-[#C8A75B] flex items-center justify-center text-white text-[12px] font-bold shadow">
                  {item.author[0]}
                </div>
                <div>
                  <h4 className="font-serif text-[14px] sm:text-[15px] font-bold text-[#1F1F1F]">{item.author}</h4>
                  <span className="text-[10px] sm:text-[11px] text-[#C8A75B] font-semibold block leading-none mt-1">{item.role} &bull; {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate("testimoni")}
            className="cursor-pointer h-[48px] sm:h-[52px] px-8 bg-transparent border-2 border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-white text-[14px] sm:text-[15px] uppercase tracking-wider font-bold transition-all duration-300 rounded-lg inline-flex items-center justify-center"
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
          backgroundImage: `linear-gradient(rgba(19, 19, 17, 0.88), rgba(27, 27, 24, 0.94)), url('${agentBanner}')`
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A75B]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8A75B]/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center lg:text-left relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">PROGRAM RAKAN NIAGA</span>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] text-white font-medium tracking-tight leading-tight">
                Jana Pendapatan Bersama Aquiva Gold
              </h2>
              <p className="font-sans text-[13px] sm:text-[14px] text-white/85 max-w-3xl leading-[1.7]">
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
        <div className="bg-[#FAF8F1] border border-[#C8A75B]/25 rounded-2xl p-8 sm:p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A75B]/5 rounded-full filter blur-xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block font-sans">CADANGAN TERPERINCI</span>
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
              Perlukan Konsultasi?
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
            <p className="font-sans text-[13px] sm:text-[14px] text-[#1F1F1F]/80 leading-[1.7] font-light max-w-2xl mx-auto">
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
