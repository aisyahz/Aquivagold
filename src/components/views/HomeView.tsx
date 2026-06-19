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
import spaImage from "../../assets/images/spa_kerusi.png";

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenConsultation: (flow?: "buy" | "consult", productTitle?: string) => void;
}

export default function HomeView({ onNavigate, onOpenConsultation }: HomeViewProps) {
  // Quantities state for premium checkout
  const [quantities, setQuantities] = React.useState<Record<string, number>>({
    spray: 1,
    essence: 1,
    drop: 1,
    therapySet: 1
  });

  const getQuantity = (id: string) => quantities[id] || 1;
  const setQuantity = (id: string, qty: number) => {
    if (qty < 1) return;
    setQuantities(prev => ({ ...prev, [id]: qty }));
  };

  const getWhatsAppBuyLink = (title: string, priceStr: string, qty: number) => {
    const numeric = parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
    const total = (numeric * qty).toFixed(2).replace(/\.00$/, "");
    const qtyText = qty > 1 ? `${qty} unit ` : "";
    const totalText = qty > 1 ? ` (Jumlah keseluruhan: RM${total})` : "";
    
    return `https://wa.me/60172887123?text=${encodeURIComponent(
      `Hi AQUIVA GOLD, saya mahu membuat tempahan segera untuk ${qtyText}${title} (${priceStr}${qty > 1 ? '/unit' : ''})${totalText}. Boleh bantu saya dengan butiran pembayaran dan penghantaran?`
    )}`;
  };

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
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* Hero Wrapper to ensure seamless transition and shield from top-level space-y */}
      <div id="hero-wrapper" className="!mt-0 w-full">
        {/* 1A. MOBILE HERO SECTION (Optimized for 40+ readability, stacked vertically, premium style) */}
        <section 
          className="block md:hidden bg-[#FAF8F5] border-b border-[#B58D20]/20 pt-6 pb-8 px-6" 
          id="hero-mobile"
        >
          <div className="max-w-md mx-auto flex flex-col items-center justify-between gap-6 text-center">
            
            {/* 1. AQUIVA GOLD LOGO */}
            <div className="flex flex-col items-center text-center space-y-1" id="hero-mobile-logo">
              <span className="font-serif text-[16px] tracking-[0.2em] text-[#1A1A1A] font-black uppercase leading-none">
                AQUIVA GOLD
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B58D20] font-bold leading-none">
                Black Millenia Water (BMW)
              </span>
            </div>

            {/* 2. PRODUCT IMAGE (Visual focus, occupies approximately 40% of mobile viewport height) */}
            <div className="relative w-full h-[38vh] min-h-[220px] max-h-[340px] rounded-xl border border-[#B58D20]/20 overflow-hidden shadow-md" id="hero-mobile-img-container">
              <img 
                src={heroBanner} 
                alt="AQUIVA GOLD Black Millenia Water (BMW) Collection" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Luxury spa therapy positioning overlay badge */}
              <div className="absolute top-3 left-3 bg-[#1A1A1A]/95 backdrop-blur-md py-1.5 px-3 rounded-full border border-[#B58D20]/40 shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-[#B58D20] font-extrabold flex items-center gap-1.5 leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B58D20] animate-ping" />
                  Luxury Spa Therapy
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent h-14 pointer-events-none" />
            </div>

            {/* 3. HEADLINE (Maximum 2 lines, larger font, higher contrast) */}
            <h1 className="text-h2 text-[#1A1A1A] leading-tight tracking-tight px-1" id="hero-mobile-headline">
              Terapi Kesejahteraan <span className="text-[#B58D20]">Semula Jadi</span>
            </h1>

            {/* 4. SHORT DESCRIPTION (Premium wellness & Black Millenia collection) */}
            <p className="text-body text-[#4A4A4A] px-2" id="hero-mobile-description">
              Mewahkan rutin harian dengan pati botani tulen semula jadi AQUIVA GOLD Black Millenia Water (BMW) untuk kesegaran fizikal dan minda sejati.
            </p>

            {/* 5. CTA BUTTONS (Touch-safe, side-by-side to fit immediately on the screen) */}
            <div className="grid grid-cols-2 gap-3 w-full px-1 pt-1" id="hero-mobile-actions">
              <button
                onClick={() => onNavigate("koleksi")}
                className="cursor-pointer h-[48px] bg-[#B58D20] hover:bg-[#967316] active:scale-95 text-white uppercase tracking-wider font-extrabold text-[12px] transition-all duration-300 rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>KOLEKSI</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => onOpenConsultation("consult")}
                className="cursor-pointer h-[48px] bg-white hover:bg-[#FAF8F5] active:scale-95 text-[#1A1A1A] border border-[#1A1A1A]/30 uppercase tracking-wider font-extrabold text-[11px] transition-all duration-300 rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare size={13} className="text-[#B58D20]" />
                <span>KONSULTASI</span>
              </button>
            </div>

          </div>
        </section>

      {/* 1B. DESKTOP HERO SECTION (Dark luxury cinematic style - Text Left, Image Right) */}
      <section 
        className="hidden md:flex relative min-h-[660px] lg:min-h-[740px] w-full items-center justify-center overflow-hidden border-b border-[#B58D20]/20 pt-16 pb-8 lg:pt-20 lg:pb-10 bg-[#141414]" 
        id="hero-desktop"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.90) 45%, rgba(10,10,10,0.50) 80%, rgba(10,10,10,0.85) 100%), url('${heroBanner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Layered cinematic gold and bronze glow behind/around the product */}
        <div className="absolute top-[25%] right-[-10%] lg:right-[8%] w-[60vw] h-[60vw] lg:w-[45vw] lg:h-[45vw] rounded-full bg-gradient-to-tr from-[#B58D20]/25 to-transparent filter blur-[100px] lg:blur-[140px] pointer-events-none mix-blend-screen z-10 animate-pulse" />
        <div className="absolute top-[40%] right-[15%] w-[300px] h-[300px] rounded-full bg-[#B58D20]/15 filter blur-[80px] pointer-events-none mix-blend-color-dodge z-10" />
        <div className="absolute bottom-[5%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-[#B58D20]/5 filter blur-[120px] pointer-events-none" />

        {/* Backdrop gradients to make the edges solid dark */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#141414] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none z-10" />

        {/* Elegant subtle luxury water splash & premium wellness mood elements */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
          <svg className="w-full h-full text-[#B58D20]/20" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0,450 C250,550 550,320 850,480 C1150,640 1280,380 1440,420 L1440,800 L0,800 Z" 
              fill="currentColor" 
            />
            {/* Elegant tropical leaf abstract contour */}
            <path 
              d="M-50,100 C150,150 200,45M50,300 C300,100 200,400" 
              stroke="#B58D20" 
              strokeWidth="0.5" 
              strokeDasharray="4 8" 
              fill="none" 
            />
            {/* Golden glowing particles */}
            <circle cx="210" cy="150" r="1.5" fill="#B58D20" className="animate-pulse" />
            <circle cx="680" cy="180" r="1" fill="#B58D20" />
            <circle cx="1080" cy="110" r="2" fill="#B58D20" className="animate-pulse" />
            <circle cx="510" cy="480" r="1" fill="#B58D20" />
          </svg>
        </div>

        <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Desktop Left Column - Text Content */}
            <motion.div 
              className="col-span-12 md:col-span-7 flex flex-col items-start gap-5 sm:gap-6 text-left py-6 lg:py-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-[#B58D20]" />
                <span className="font-sans text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#B58D20] font-bold">
                  PENJAGAAN DIRI PREMIUM
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-h1 text-[#FAF8F5]"
              >
                Tingkatkan<br />
                Kesejahteraan Anda<br />
                <span className="text-[#B58D20] block mt-1 font-bold">
                  Secara Semula Jadi
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-body text-white/90 max-w-xl"
              >
                Koleksi premium AQUIVA GOLD Black Millenia Water (BMW) direka untuk individu yang menghargai penjagaan diri berkualiti, gaya hidup sihat dan kesejahteraan harian yang lebih bermakna.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
              >
                <button
                  onClick={() => onNavigate("koleksi")}
                  className="cursor-pointer group flex items-center justify-center gap-3 px-8 h-[48px] text-[14px] bg-[#B58D20] hover:bg-[#967316] border border-[#B58D20] hover:scale-[1.02] active:scale-[0.98] text-white uppercase tracking-wider font-bold transition-all duration-300 rounded-lg shadow-lg w-full sm:px-10"
                >
                  <span>LIHAT KOLEKSI</span>
                  <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenConsultation("consult")}
                  className="cursor-pointer group flex items-center justify-center gap-3 px-8 h-[48px] text-[14px] bg-transparent hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] border border-white/40 text-white uppercase tracking-wider font-bold transition-all duration-300 rounded-lg shadow-md w-full sm:px-10"
                >
                  <MessageSquare size={16} className="text-[#B58D20]" />
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
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl border border-[#B58D20]/30 overflow-hidden shadow-2xl bg-[#1D1D1C] p-1.5 group/hero-img">
                <img 
                  src={heroBanner} 
                  alt="AQUIVA GOLD Premium Spa Experience" 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover/hero-img:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none rounded-2xl" />
                <div className="absolute bottom-6 left-8 text-left z-10">
                  <span className="text-[11px] uppercase tracking-widest text-[#B58D20] font-bold block mb-1">EKSKLUSIF & HALAL</span>
                  <h4 className="font-serif text-white text-[18px] font-semibold leading-tight">Gaya Hidup Suci & Holistik</h4>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
      </div>

      {/* THREE SIMPLE STEPS SECTION */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#B58D20]/15 max-w-full !mt-0" id="three-steps">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center space-y-12">
          <div className="space-y-3">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">
              PANDUAN AMALAN RINGKAS
            </span>
            <h2 className="text-h2 text-[#1A1A1A]">
              Rutin Black Millenia Water (BMW) Dalam 3 Langkah
            </h2>
            <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-[#FAF8F5] border border-[#B58D20]/20 rounded-2xl p-6 lg:p-8 text-left space-y-4 hover:border-[#B58D20]/60 transition-all duration-300 shadow-sm relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#B58D20] font-extrabold font-mono">LANGKAH 01</span>
                <span className="font-serif italic text-[#B58D20]/20 text-4xl font-extrabold">01</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1A1A]">AQUIVA GOLD Black Millenia Water (BMW) Drop</h3>
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  Tambah ke dalam air minuman pagi anda
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FAF8F5] border border-[#B58D20]/20 rounded-2xl p-6 lg:p-8 text-left space-y-4 hover:border-[#B58D20]/60 transition-all duration-300 shadow-sm relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#B58D20] font-extrabold font-mono">LANGKAH 02</span>
                <span className="font-serif italic text-[#B58D20]/20 text-4xl font-extrabold">02</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1A1A]">AQUIVA GOLD Black Millenia Water (BMW) Spray</h3>
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  Sembur pada wajah & badan bila diperlukan
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FAF8F5] border border-[#B58D20]/20 rounded-2xl p-6 lg:p-8 text-left space-y-4 hover:border-[#B58D20]/60 transition-all duration-300 shadow-sm relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#B58D20] font-extrabold font-mono">LANGKAH 03</span>
                <span className="font-serif italic text-[#B58D20]/20 text-4xl font-extrabold">03</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-[18px] font-bold text-[#1A1A1A]">AQUIVA GOLD Black Millenia Water (BMW) Essence</h3>
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  Gunakan ketika mandian atau terapi wap
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PREMIUM SPA THERAPY INTRODUCTION (Pengalaman Spa Premium Di Rumah Anda) */}
      <section className="bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#B58D20]/15 max-w-full !mt-0" id="spa-therapy">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          {/* Split luxury layout (60% Left, 40% Right on large screens) */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: Cinematic Spa Image (60% width) - Made less tall and compact */}
            <div className="col-span-1 lg:col-span-6">
              <div className="relative w-full aspect-[4/3] lg:aspect-[4/3] rounded-2xl border border-[#B58D20]/25 overflow-hidden shadow-xl p-1.5 bg-white group">
                <img 
                   src={spaImage} 
                  alt="Traditional Malay Herbal Spa & Mandian Tangas Ritual" 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Steaming warm gold mist overlay */}
                <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#B58D20]/30 via-transparent to-transparent pointer-events-none rounded-xl mix-blend-color-burn" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition-colors duration-500 rounded-xl" />
                
                {/* Soft glow highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B58D20]/10 via-transparent to-white/5 pointer-events-none rounded-xl" />
                
                {/* Subtle outer soft lighting gradient */}
                <div className="absolute inset-3 sm:inset-4 rounded-xl border border-dashed border-white/20 pointer-events-none group-hover:border-[#B58D20]/30 transition-colors duration-500" />
                
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
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">
                  RITUAL PENJAGAAN HOLISTIK
                </span>
                
                <h2 className="text-h2 text-[#1A1A1A]">
                  Pengalaman Spa Premium Di Rumah Anda
                </h2>
                
                <p className="text-body text-[#4A4A4A]">
                  Siri Black Millenia Water (BMW) menyatukan khazanah botani tradisional dengan kemewahan bertaraf dunia. Diadun teliti sebagai sebahagian daripada ritual mandian tangas dan amalan penjagaan diri premium, formulasi ini melengkapkan rutin relaksasi anda untuk mencapai suasana spa eksklusif dalam keselesaan kediaman sendiri.
                </p>
              </div>

              {/* Luxury Glassmorphism Card */}
              <div className="bg-white border border-[#B58D20]/15 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
                
                {/* Row 1 */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-[#B58D20]/10">
                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-[#B58D20]/20 bg-[#FAF8F5] text-[#B58D20]">
                    <Wind size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A] flex items-center gap-1.5">
                      <span className="text-[#B58D20]">✦</span>
                      <span>Ritual Mandian Tangas Tradisional</span>
                    </h4>
                    <p className="font-sans text-[12px] text-[#4A4A4A] leading-relaxed font-light">
                      Melengkapkan amalan stim tangas herba klasik dengan kaedah moden demi keselesaan mutlak.
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-[#B58D20]/10">
                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-[#B58D20]/20 bg-[#FAF8F5] text-[#B58D20]">
                    <Sparkles size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A] flex items-center gap-1.5">
                      <span className="text-[#B58D20]">✦</span>
                      <span>Aroma Menenangkan & Relaksasi</span>
                    </h4>
                    <p className="font-sans text-[12px] text-[#4A4A4A] leading-relaxed font-light">
                      Mengandungi ekstrak aroma mewah untuk mencipta suasana relaksasi yang tenang dan mendalam.
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-[#B58D20]/10">
                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-[#B58D20]/20 bg-[#FAF8F5] text-[#B58D20]">
                    <Home size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A] flex items-center gap-1.5">
                      <span className="text-[#B58D20]">✦</span>
                      <span>Pengalaman Spa Dalam Privasi Rumah</span>
                    </h4>
                    <p className="font-sans text-[12px] text-[#4A4A4A] leading-relaxed font-light">
                      Menghadirkan aura terapeutik hotel bertaraf lima bintang terus ke ruang kediaman peribadi anda.
                    </p>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-[#B58D20]/20 bg-[#FAF8F5] text-[#B58D20]">
                    <Award size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A] flex items-center gap-1.5">
                      <span className="text-[#B58D20]">✦</span>
                      <span>Rutin Penjagaan Diri Premium</span>
                    </h4>
                    <p className="font-sans text-[12px] text-[#4A4A4A] leading-relaxed font-light">
                      Direka eksklusif untuk mereka yang mementingkan kesejahteraan holistik berpanjangan.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate("koleksi")}
                  className="cursor-pointer group relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden rounded-lg bg-[#1A1A1A] border border-[#B58D20]/30 transition-all duration-300 hover:border-[#B58D20] hover:shadow-md w-full sm:w-auto text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B58D20]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-sans text-[12px] uppercase tracking-[0.2em] font-medium text-[#FAF8F5] flex items-center gap-2.5">
                    <span>[ Ketahui Ritual Spa ]</span>
                    <ArrowRight size={13} className="text-[#B58D20] transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. WHY AQUIVA GOLD PREVIEW (Mengapa Memilih AQUIVA GOLD) */}
      <section className="bg-white py-16 lg:py-24 border-y border-[#B58D20]/15 max-w-full" id="why-preview">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">REVOLUSI PENJAGAAN DIRI</span>
            <h2 className="text-h2 text-[#1A1A1A]">
              Mengapa Memilih AQUIVA GOLD?
            </h2>
            <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                className="bg-[#FAF8F5] border border-[#B58D20]/20 rounded-2xl p-6 flex flex-col justify-between text-left min-h-[220px] hover:border-[#B58D20] hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="text-[#B58D20] group-hover:scale-105 transition-transform duration-300">
                    <card.icon size={28} />
                  </div>
                  <h3 className="font-serif text-[18px] font-bold text-[#1A1A1A]">{card.title}</h3>
                  <p className="font-sans text-[14px] text-[#4A4A4A] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
 
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("kelebihan")}
              className="cursor-pointer inline-flex items-center gap-2 text-[14px] sm:text-[15px] uppercase tracking-wider font-bold text-[#B58D20] hover:text-[#1A1A1A] transition-colors border-b-2 border-dashed border-[#B58D20] pb-1.5"
            >
              <span>Ketahui Kelebihan</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCT PREVIEW (Koleksi Black Millenia - Improved Cards) */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8 py-16 lg:py-24" id="collection-preview">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">RANGKAIAN EKSKLUSIF</span>
          <h2 className="text-h2 text-[#1A1A1A]">
            Koleksi Black Millenia Water (BMW)
          </h2>
          <p className="text-body text-[#4A4A4A] max-w-xl mx-auto">
            Rangkaian terapi harian yang disesuaikan secara berasingan mengikut gaya penjagaan kesihatan pilihan anda.
          </p>
          <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
        </div>

        {/* 3 Key Products Showcase with Actual Images & High-impact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
           {[
            {
              id: "spray",
              title: "Black Millenia Water (BMW) Spray",
              price: "RM 59.90",
              usage: "Sembur pada wajah & badan sepanjang hari untuk mendinginkan kulit.",
              desc: "Formula ringan tanpa alkohol yang menyegarkan semula kulit kering serta-merta bila-bila masa diperlukan.",
              img: sprayImage,
            },
            {
              id: "essence",
              title: "Black Millenia Water (BMW) Essence",
              price: "RM 69.90",
              usage: "Gunakan ketika mandian harian atau terapi ritual spa anda.",
              desc: "Sesuai dititiskan ke air mandian suam atau terapi wap herba bagi mewujudkan ketenangan spa eksklusif.",
              img: essenceImage,
            },
            {
              id: "drop",
              title: "Black Millenia Water (BMW) Drop",
              price: "RM 139.90",
              usage: "Titiskan 10-15 titis ke dalam 500ml air mineral setiap pagi.",
              desc: "Pati botani tulen untuk dicampur bersama minuman kegemaran bagi kelengkapan kesegaran fizikal berpanjangan.",
              img: dropImage,
            }
          ].map((prod) => (
            <div 
              key={prod.id}
              className="bg-[#FAF8F5] border border-[#B58D20]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-5">
                {/* Premium Golden Frame with Actual Image & Price Tag */}
                <div className="relative w-full aspect-square rounded-2xl border border-[#B58D20]/20 overflow-hidden shadow-xs group/img hover:border-[#B58D20]/60 transition-all duration-500 bg-white">
                  <img 
                    src={prod.img} 
                    alt={prod.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" 
                  />
                  {/* Price Tag badge */}
                  <div className="absolute top-3 right-3 bg-[#1A1A1A]/90 backdrop-blur-xs text-[#B58D20] text-xs font-bold font-mono py-1.5 px-3.5 rounded-full border border-[#B58D20]/30 shadow-md z-10">
                    Intro: {prod.price}
                  </div>
                  
                  {/* Subtle elegant gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-500" />
                  
                  {/* Golden frame outline inside the image borders */}
                  <div className="absolute inset-3 rounded-xl border border-dashed border-white/20 pointer-events-none group-hover/img:border-[#B58D20]/30 transition-colors duration-500" />
                </div>

                <div className="space-y-3.5 text-left">
                  <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1A1A1A]">{prod.title}</h3>
                  
                  {/* Intro Price row */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase text-[#4G4G4G] font-bold block">Harga Pengenalan:</span>
                    <span className="text-lg font-serif font-black text-[#B58D20]">{prod.price}</span>
                  </div>

                  {/* Simple Usage info directly on card */}
                  <div className="bg-white border-l-2 border-[#B58D20] p-3 rounded-r-lg">
                    <span className="text-[9px] uppercase tracking-wider text-[#B58D20] font-extrabold block mb-1">Cara Guna:</span>
                    <p className="font-sans text-[12px] text-[#1A1A1A] leading-relaxed font-semibold">
                      {prod.usage}
                    </p>
                  </div>

                  <p className="font-sans text-[13px] text-[#4A4A4A] leading-relaxed min-h-[40px] font-light">{prod.desc}</p>
                </div>

                {/* Premium Elegant Quantity Selector */}
                <div className="pt-4 border-t border-[#B58D20]/10">
                  <div className="flex items-center justify-between bg-white border border-[#B58D20]/20 p-2 rounded-xl">
                    <span className="font-bold text-[11px] tracking-wider uppercase text-stone-500 font-sans pl-1">Kuantiti</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(prod.id, Math.max(1, getQuantity(prod.id) - 1))}
                        className="w-8 h-8 rounded-full border border-[#B58D20]/30 flex items-center justify-center text-[#1A1A1A] hover:bg-[#B58D20] hover:text-white transition-all font-bold text-sm bg-white"
                        title="Kurangkan kuantiti"
                      >
                        -
                      </button>
                      <span className="font-serif text-[14px] font-bold text-[#1A1A1A] w-5 text-center select-none">{getQuantity(prod.id)}</span>
                      <button
                        onClick={() => setQuantity(prod.id, getQuantity(prod.id) + 1)}
                        className="w-8 h-8 rounded-full border border-[#B58D20]/30 flex items-center justify-center text-[#1A1A1A] hover:bg-[#B58D20] hover:text-white transition-all font-bold text-sm bg-white"
                        title="Tambah kuantiti"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-[#B58D20]/15 mt-4 grid grid-cols-2 gap-3">
                <a
                  href={getWhatsAppBuyLink(prod.title, prod.price, getQuantity(prod.id))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer h-[48px] bg-[#B58D20] hover:bg-[#967316] active:scale-95 text-white text-[12.5px] uppercase tracking-wider font-extrabold transition-all rounded-lg flex items-center justify-center gap-1 shadow-sm"
                  id={`buy-home-${prod.id}-btn`}
                >
                  BELI SEGERA
                </a>
                <button
                  onClick={() => onOpenConsultation("consult", prod.title)}
                  className="cursor-pointer h-[48px] bg-white hover:bg-[#FAF8F5] active:scale-95 border border-[#1A1A1A]/30 text-[#1A1A1A] text-[12.5px] uppercase tracking-wider font-extrabold transition-all rounded-lg flex items-center justify-center gap-1 shadow-sm"
                  id={`consult-home-${prod.id}-btn`}
                >
                  <MessageSquare size={13} className="text-[#B58D20]" />
                  <span>PERLUKAN BANTUAN?</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => onNavigate("koleksi")}
            className="cursor-pointer h-[48px] px-8 bg-transparent border-2 border-[#B58D20] text-[#B58D20] hover:bg-[#B58D20] hover:text-white text-[14px] sm:text-[15px] uppercase tracking-wider font-bold transition-all duration-300 rounded-lg inline-flex items-center justify-center"
          >
            Lihat Semua Koleksi
          </button>
        </div>
      </section>

      {/* 5. CERTIFICATION PREVIEW (HALAL & MESTI, KKM, Lab Report - Show 3 authentic preview cards) */}
      <section className="bg-[#FAF8F5] py-16 lg:py-24 border-y border-[#B58D20]/20 max-w-full" id="certifications-preview">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">KEBOLEHPERCAYAAN PENUH</span>
            <h2 className="text-h2 text-[#1A1A1A]">
              Komitmen Terhadap Kualiti
            </h2>
            <p className="text-body text-[#4A4A4A] max-w-xl mx-auto">
              Dokumentasi, pendaftaran rasmi dan kelulusan analisis saintifik bebas yang memupuk ketenangan jiwa dan ketelusan mutlak.
            </p>
            <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
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
                desc: "Laporan analisis makmal yang berkaitan dengan produk AQUIVA GOLD Black Millenia Water (BMW)." 
              }
            ].map((doc, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-[#B58D20]/15 rounded-2xl p-5 flex flex-col justify-between hover:border-[#B58D20] hover:shadow-md transition-all duration-300 group min-h-[380px]"
              >
                <div className="space-y-4">
                  {/* Premium Document Mini-Frame */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl border border-[#B58D20]/20 overflow-hidden bg-slate-50 group-hover:border-[#B58D20]/60 transition-all duration-500 shadow-sm p-1">
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
                    <span className="text-[9px] bg-[#FAF8F5] border border-[#B58D20]/20 text-[#B58D20] uppercase tracking-widest font-extrabold px-2 py-0.5 rounded inline-block">
                      {doc.label}
                    </span>
                    <h3 className="font-serif text-[17px] sm:text-[18px] font-bold text-[#1A1A1A] leading-tight group-hover:text-[#B58D20] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="font-sans text-[13px] text-[#4A4A4A] leading-relaxed font-light">
                      {doc.desc}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => onNavigate("pensijilan")}
                  className="cursor-pointer text-[12px] sm:text-[13px] uppercase tracking-widest font-extrabold text-[#B58D20] group-hover:text-[#1A1A1A] transition-colors mt-6 pt-4 border-t border-dashed border-[#B58D20]/20 text-left flex items-center justify-between w-full font-sans"
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
              className="cursor-pointer h-[48px] px-8 bg-[#1A1A1A] hover:bg-[#B58D20] hover:text-white text-white text-[14px] sm:text-[15px] uppercase tracking-wider font-bold transition-all duration-300 rounded-lg shadow-md inline-flex items-center justify-center animate-none"
            >
              Lihat Pensijilan &amp; Bukti
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED HOME THERAPY SET SECTION */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#B58D20]/15 max-w-full" id="home-therapy-set">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">PAKEJ EKSKLUSIF SPA DI RUMAH</span>
            <h2 className="text-h2 text-[#1A1A1A]">
              Set Terapi Rumah Lengkap &bull; Home Therapy Set
            </h2>
            <p className="text-body text-[#4A4A4A] max-w-xl mx-auto">
              Nikmati amalan mandian tangas herba berprestij bertaraf resort lima bintang secara selamat dan teratur di kediaman peribadi anda.
            </p>
            <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-2" />
          </div>

          <div className="bg-[#FAF8F5] border border-[#B58D20]/25 rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Bundle Visual */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#B58D20]/20 bg-[#161614] shadow-md flex items-center justify-center p-4">
                  <img 
                    src={spaImage} 
                    alt="AQUIVA GOLD Home Therapy Premium Bundle" 
                    className="w-full h-full object-cover opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-4 rounded-xl border border-dashed border-white/20 pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#B58D20] font-extrabold block">PAKEJ KOMPLET</span>
                    <h4 className="font-serif text-white text-lg font-bold">Resort Spa Suite Koleksi</h4>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-[#B58D20]/15 px-3 py-2 rounded-lg text-center shadow-xs">
                    <span className="text-[11px] font-sans font-bold text-[#1A1A1A] block">Kerusi Terapi</span>
                    <span className="text-[9px] text-[#B58D20] font-medium font-mono uppercase">Therapy Chair</span>
                  </div>
                  <div className="bg-white border border-[#B58D20]/15 px-3 py-2 rounded-lg text-center shadow-xs">
                    <span className="text-[11px] font-sans font-bold text-[#1A1A1A] block">Pakaian Belachu</span>
                    <span className="text-[9px] text-[#B58D20] font-medium font-mono uppercase">Spa Apparel</span>
                  </div>
                  <div className="bg-white border border-[#B58D20]/15 px-3 py-1.5 rounded-lg text-center shadow-xs">
                    <span className="text-[11px] font-sans font-bold text-[#1A1A1A] block">Steamer 1L</span>
                    <span className="text-[9px] text-[#B58D20] font-medium font-mono uppercase">1L Steam Unit</span>
                  </div>
                  <div className="bg-white border border-[#B58D20]/15 px-3 py-1.5 rounded-lg text-center shadow-xs">
                    <span className="text-[11px] font-sans font-bold text-red-700 block">2x Black Millenia Water (BMW) Essence</span>
                    <span className="text-[9px] text-red-500 font-extrabold font-mono uppercase">FREE GIFT</span>
                  </div>
                </div>
              </div>

              {/* Bundle Copy */}
              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-widest bg-[#B58D20]/15 text-[#B58D20] font-extrabold px-2.5 py-1 rounded inline-block">
                    PROMOSI PENGENALAN
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">AQUIVA GOLD Home Therapy Set</h3>
                  <p className="font-sans text-[13px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-light">
                    Lengkapi kediaman anda dengan rangkaian peralatan berkualiti tinggi dan kit titisan premium. Sesuai untuk melancarkan ritual mandi tangas herba tradisional kegunaan seisi keluarga dengan keselesaan optimum.
                  </p>
                </div>

                <ul className="space-y-2.5 font-sans text-[13px] text-[#2C2C2C]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold border border-emerald-100">✔</span>
                    <span><strong>Kerusi Terapi Khas</strong> (Kukuh & Selesa)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold border border-emerald-100">✔</span>
                    <span><strong>Pakaian Kain Belachu</strong> (Reka Bentuk Aromaterapi)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold border border-emerald-100">✔</span>
                    <span><strong>Unit Penjana Wap Steamer 1L</strong> (Operasi Selamat)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-[10px] font-bold border border-rose-100">★</span>
                    <span className="text-rose-700"><strong>PERCUMA: 2 Botol Black Millenia Water (BMW) Essence Premium</strong> (Khas Untuk Terapi)</span>
                  </li>
                </ul>

                <div className="bg-white border border-[#B58D20]/20 rounded-2xl p-4 flex justify-between items-center shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-bold">Harga Set Lengkap</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-black text-[#1A1A1A]">RM 650</span>
                      <span className="text-[11px] text-stone-300 line-through">RM 789.80</span>
                    </div>
                  </div>
                  <span className="text-[9px] border border-[#B58D20] text-[#B58D20] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
                    Jimat RM139.80
                  </span>
                </div>

                {/* Premium Elegant Quantity Selector for Home Therapy Set */}
                <div className="pt-2">
                  <div className="flex items-center justify-between bg-white border border-[#B58D20]/20 p-2.5 rounded-xl shadow-xs">
                    <span className="font-bold text-[11px] tracking-wider uppercase text-stone-500 font-sans pl-1">Kuantiti Set</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity("therapySet", Math.max(1, getQuantity("therapySet") - 1))}
                        className="w-8 h-8 rounded-full border border-[#B58D20]/30 flex items-center justify-center text-[#1A1A1A] hover:bg-[#B58D20] hover:text-white transition-all font-bold text-sm bg-white"
                        title="Kurangkan kuantiti"
                      >
                        -
                      </button>
                      <span className="font-serif text-[14px] font-bold text-[#1A1A1A] w-5 text-center select-none">{getQuantity("therapySet")}</span>
                      <button
                        onClick={() => setQuantity("therapySet", getQuantity("therapySet") + 1)}
                        className="w-8 h-8 rounded-full border border-[#B58D20]/30 flex items-center justify-center text-[#1A1A1A] hover:bg-[#B58D20] hover:text-[#1A1A1A] hover:border-[#B58D20] transition-all font-bold text-sm bg-white"
                        title="Tambah kuantiti"
                       >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={getWhatsAppBuyLink("Home Therapy Set", "RM 650", getQuantity("therapySet"))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer h-[48px] bg-[#B58D20] hover:bg-[#967316] active:scale-95 text-white font-sans text-[12px] uppercase tracking-wider font-extrabold transition-all duration-300 rounded-lg flex items-center justify-center gap-1 shadow-sm"
                    id="buy-home-therapy-btn"
                  >
                    <span>BELI SEGERA</span>
                    <ArrowRight size={13} />
                  </a>
                  <button
                    onClick={() => onOpenConsultation("consult", "Home Therapy Set")}
                    className="cursor-pointer h-[48px] bg-white hover:bg-[#FAF8F5] active:scale-95 border border-[#1A1A1A]/30 text-[#1A1A1A] font-sans text-[12px] uppercase tracking-wider font-extrabold transition-all rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
                    id="consult-home-therapy-btn"
                  >
                    <MessageSquare size={13} className="text-[#B58D20]" />
                    <span>PERLUKAN BANTUAN?</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIAL PREVIEW (Only 3 Testimonials) */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8 py-16 lg:py-24 font-sans" id="testimonials-preview">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">BUKTI SOSIAL</span>
          <h2 className="text-h2 text-[#1A1A1A]">
            Perjalanan Kesejahteraan Pelanggan
          </h2>
          <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
              className="bg-[#FAF8F5] border border-[#B58D20]/20 rounded-2xl p-6 text-left flex flex-col justify-between hover:border-[#B58D20]/45 hover:shadow-md transition-all duration-300 min-h-[220px]"
            >
              <p className="font-sans text-[13.5px] italic text-[#1A1A1A]/85 leading-relaxed">
                {item.text}
              </p>
              
              <div className="pt-4 border-t border-[#B58D20]/15 mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1A1A1A] to-[#B58D20] flex items-center justify-center text-white text-[12px] font-bold shadow">
                  {item.author[0]}
                </div>
                <div>
                  <h4 className="font-serif text-[14px] sm:text-[15px] font-bold text-[#1A1A1A]">{item.author}</h4>
                  <span className="text-[10px] sm:text-[11px] text-[#B58D20] font-semibold block leading-none mt-1">{item.role} &bull; {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("testimoni")}
            className="cursor-pointer h-[48px] px-8 bg-transparent border-2 border-[#B58D20] text-[#B58D20] hover:bg-[#B58D20] hover:text-white text-[14px] sm:text-[15px] uppercase tracking-wider font-bold transition-all duration-300 rounded-lg inline-flex items-center justify-center"
          >
            Lihat Semua Testimoni
          </button>
        </div>
      </section>

      {/* 7. ENTREPRENEUR PREVIEW (PROGRAM RAKAN NIAGA with agent-banner background) */}
      <section 
        className="relative text-white py-24 border-y border-[#B58D20]/20 max-w-full overflow-hidden bg-cover bg-center bg-no-repeat" 
        id="entrepreneur-preview"
        style={{
          backgroundImage: `linear-gradient(rgba(19, 19, 17, 0.88), rgba(27, 27, 24, 0.94)), url('${agentBanner}')`
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B58D20]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B58D20]/5 rounded-full filter blur-3xl pointer-events-none" />
 
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center lg:text-left relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block animate-none">PROGRAM RAKAN NIAGA</span>
              <h2 className="text-h2 text-white font-medium tracking-tight">
                Jana Pendapatan Bersama AQUIVA GOLD
              </h2>
              <p className="font-sans text-[13.5px] sm:text-[14px] text-white/85 max-w-3xl leading-relaxed">
                Sertai rangkaian usahawan kami ke tahap seterusnya. Sama ada secara Dropship yang fleksibel (tanpa simpan stok) atau sebagai Stokis Wilayah berpotensi ganjaran tinggi, kami menyediakan bimbingan visual penuh, bahan pengiklanan tersuai, dan rundingan berterusan.
              </p>
            </div>
 
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                onClick={() => onNavigate("usahawan")}
                className="cursor-pointer w-full sm:w-auto h-[54px] sm:h-[58px] px-10 bg-[#B58D20] hover:bg-[#967316] text-white text-[15px] uppercase tracking-wider font-bold transition-all duration-300 rounded-md shadow-lg flex items-center justify-center animate-none"
              >
                Sertai Sekarang
              </button>
            </div>
 
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (Perlukan Konsultasi?) */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8 py-16 lg:py-24" id="final-cta">
        <div className="bg-[#FAF8F5] border border-[#B58D20]/25 rounded-2xl p-8 sm:p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B58D20]/5 rounded-full filter blur-xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block font-sans">CADANGAN TERPERINCI</span>
            <h2 className="text-h2 text-[#1A1A1A]">
              Perlukan Konsultasi?
            </h2>
            <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
            <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-light max-w-2xl mx-auto">
              Pasukan terapeutik kami sedia membimbing anda mendapatkan maklumat lengkap mengenai khasiat botani, cara integrasi ke rutin sedia ada serta penyertaan ejen perniagaan.
            </p>
          </div>
 
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 max-w-lg mx-auto pt-4">
            <a
              href="https://wa.me/601139900920?text=Hi%20AQUIVA%20GOLD%2C%20boleh%20saya%20dapatkan%20konsultasi%20mengenai%20Koleksi%20Black%20Millenia%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-full sm:w-auto h-[54px] sm:h-[58px] px-10 bg-[#1A1A1A] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all text-center rounded-md flex items-center justify-center shadow-md"
            >
              WhatsApp Sekarang
            </a>
            <button
              onClick={() => onOpenConsultation("consult")}
              className="cursor-pointer w-full sm:w-auto h-[54px] sm:h-[58px] px-10 bg-white hover:bg-[#FAF8F5] border-2 border-[#B58D20]/40 text-[#1A1A1A] hover:text-[#B58D20] text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md shadow-xs flex items-center justify-center animate-none"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
