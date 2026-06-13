import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Droplet, 
  Sparkles, 
  Calendar, 
  Heart, 
  HelpCircle, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle,
  Wind,
  Plus
} from "lucide-react";

import essenceImage from "../../assets/images/Essence.jpeg";
import sprayImage from "../../assets/images/spray.jpeg";
import dropImage from "../../assets/images/Drop.jpeg";

interface ProductsViewProps {
  onOpenConsultation: (flow?: "buy" | "consult", productTitle?: string) => void;
}

export default function ProductsView({ onOpenConsultation }: ProductsViewProps) {
  
  const scrollToProduct = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleWhatsAppProduct = (product: string) => {
    const message = `Hi AquivaGold, saya ingin membuat pesanan atau mendapatkan konsultasi lanjut berkaitan produk *${product}*.`;
    window.open(`https://wa.me/601139900920?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-32 pb-24">
      
      {/* HERO BANNER SECTION */}
      <section className="relative bg-[#FAF8F1] py-24 border-b border-[#C8A75B]/15 text-center max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">KATALOG RAWATAN TERBAIK</span>
          <h1 className="font-serif text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
            Koleksi Produk Black Millenia
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#1F1F1F]/70 max-w-2xl mx-auto leading-[1.8]">
            Terokai rangkaian produk premium Aquiva Gold Black Millenia yang direka untuk melengkapkan keperluan penjagaan diri secara optimum dan melahirkan ketenangan harian anda.
          </p>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />

          {/* Quick jump navigation tag pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            {["BMW Essence", "BMW Spray", "BMW Drop"].map((name, i) => (
              <button
                key={i}
                onClick={() => scrollToProduct(name.toLowerCase().replace(" ", "-"))}
                className="cursor-pointer px-6 py-3 bg-white hover:bg-[#F6F3EE] hover:border-[#C8A75B] border border-[#1F1F1F]/15 text-[#1F1F1F] text-[13px] sm:text-[14px] uppercase tracking-wider font-bold rounded-full transition-all duration-300 shadow-sm"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PRODUCTS LISTING */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-36">
        
        {/* 1. BMW ESSENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="bmw-essence">
          {/* Image visual left */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A75B]/10 to-transparent rounded-3xl filter blur-xl pointer-events-none" />
            <div className="w-full">
              <div className="relative w-full aspect-square rounded-[2rem] border-2 border-[#C8A75B]/30 overflow-hidden shadow-2xl bg-white p-1.5 group/img-view">
                <img 
                  src={essenceImage} 
                  alt="BMW Essence" 
                  className="w-full h-full object-cover rounded-[1.75rem] transition-transform duration-700 group-hover/img-view:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-[1.75rem]" />
                <div className="absolute bottom-6 left-8 text-left z-10">
                  <span className="text-[11px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">EKSKLUSIF & HALAL</span>
                  <h4 className="font-serif text-white text-[18px] font-semibold leading-tight">BMW Essence Terapi Mandian</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Content details right */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="space-y-3">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-[#C8A75B] font-bold block">MEMULIHKAN KETENANGAN MINDA</span>
              <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[48px] text-[#1F1F1F] font-bold tracking-tight leading-tight">BMW Essence</h2>
              <p className="font-sans text-[15px] sm:text-[17px] uppercase tracking-wider text-[#1F1F1F]/60 font-semibold">Terapi Mandian Premium &bull; RM 390</p>
            </div>

            <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[19px] text-[#1F1F1F]/80 leading-[1.8] font-light">
              BMW Essence merangkumi pati pati botani gred terkawal yang ditala khusus untuk ritual spa harian bertaraf tinggi. Ia membangkitkan aromaterapi tulen yang menenangkan ketegangan fizikal murni anda.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-4 bg-[#FBF8F1] border border-[#C8A75B]/15 p-6 sm:p-8 rounded-2xl shadow-xs">
                <span className="text-[12px] sm:text-[13px] uppercase tracking-wider text-[#C8A75B] font-bold block">Manfaat Utama</span>
                <ul className="space-y-3 text-[15px] sm:text-[16px] text-[#1F1F1F]/75">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Mempromosikan tidur mendalam</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Melembutkan tekstur luaran tubuh</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Aromaterapi semulajadi yang mewah</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 bg-[#FBF8F1] border border-[#C8A75B]/15 p-6 sm:p-8 rounded-2xl shadow-xs">
                <span className="text-[12px] sm:text-[13px] uppercase tracking-wider text-[#C8A75B] font-bold block">Cara Penggunaan</span>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                  Titiskan 8-12 titis ke air mandian suam. Rendam bertenang dan hirup wap herba berkesan selama 15-20 minit rukun relaksasi.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <span className="text-[12px] uppercase tracking-wider text-[#1F1F1F]/50 font-bold block">Siapa Sesuai Guna</span>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/70 leading-relaxed">Individu yang mahu ritual mandian tenang &amp; melegakan keletihan harian.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[12px] uppercase tracking-wider text-[#1F1F1F]/50 font-bold block">Penyimpanan</span>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/70 leading-relaxed">Simpan di tempat kering suhu bilik, hindari panahan matahari terus.</p>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleWhatsAppProduct("BMW Essence")}
                className="cursor-pointer flex-1 h-[54px] sm:h-[58px] bg-[#1F1F1F] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md shadow-md flex items-center justify-center text-center"
              >
                Pesan Melalui WhatsApp
              </button>
              <button
                onClick={() => onOpenConsultation("buy", "BMW Essence")}
                className="cursor-pointer h-[54px] sm:h-[58px] px-8 bg-white border-2 border-[#C8A75B]/40 hover:border-[#C8A75B] text-[#C8A75B] hover:text-[#1F1F1F] text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md flex items-center justify-center text-center"
              >
                Konsultasi Produk
              </button>
            </div>
          </div>
        </div>

        {/* 2. BMW SPRAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="bmw-spray">
          {/* Content details left on desktop */}
          <div className="lg:col-span-7 text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-[#C8A75B] font-bold block">PERLINDUNGAN KELENGKAPAN WAJAH</span>
              <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[48px] text-[#1F1F1F] font-bold tracking-tight leading-tight">BMW Spray</h2>
              <p className="font-sans text-[15px] sm:text-[17px] uppercase tracking-wider text-[#1F1F1F]/60 font-semibold">Penyegar Kulit Premium &bull; RM 280</p>
            </div>

            <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[19px] text-[#1F1F1F]/80 leading-[1.8] font-light">
              Formula ultra-ringan BMW Spray memberikan semburan partikel halus menembusi lapisan kulit luar untuk memulihkan sensasi penghidratan berterusan. Sesuai digunakan sepanjang hari.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-4 bg-[#FBF8F1] border border-[#C8A75B]/15 p-6 sm:p-8 rounded-2xl shadow-xs">
                <span className="text-[12px] sm:text-[13px] uppercase tracking-wider text-[#C8A75B] font-bold block">Manfaat Utama</span>
                <ul className="space-y-3 text-[15px] sm:text-[16px] text-[#1F1F1F]/75">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Penghidratan pantas zon kering</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Meresap tanpa rasa melekit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Mengekalkan kestabilan solekan semula jadi</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 bg-[#FBF8F1] border border-[#C8A75B]/15 p-6 sm:p-8 rounded-2xl shadow-xs">
                <span className="text-[12px] sm:text-[13px] uppercase tracking-wider text-[#C8A75B] font-bold block">Cara Penggunaan</span>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                  Semburkan jarak 15-20cm secara bulatan lembut dari wajah. Boleh digunakan setiap beberapa jam untuk perlindungan tambahan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <span className="text-[12px] uppercase tracking-wider text-[#1F1F1F]/50 font-bold block">Siapa Sesuai Guna</span>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/70 leading-relaxed">Semua jenis kulit, terutamanya yang kerap berada di bilik berhawa dingin.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[12px] uppercase tracking-wider text-[#1F1F1F]/50 font-bold block">Penyimpanan</span>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/70 leading-relaxed">Simpan dalam suhu terkawal. Jauhkan daripada jangkauan haba langsung.</p>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleWhatsAppProduct("BMW Spray")}
                className="cursor-pointer flex-1 h-[54px] sm:h-[58px] bg-[#1F1F1F] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md shadow-md flex items-center justify-center text-center"
              >
                Pesan Melalui WhatsApp
              </button>
              <button
                onClick={() => onOpenConsultation("buy", "BMW Spray")}
                className="cursor-pointer h-[54px] sm:h-[58px] px-8 bg-white border-2 border-[#C8A75B]/40 hover:border-[#C8A75B] text-[#C8A75B] hover:text-[#1F1F1F] text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md flex items-center justify-center text-center"
              >
                Konsultasi Produk
              </button>
            </div>
          </div>

          {/* Image visual right */}
          <div className="lg:col-span-5 relative group order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A75B]/10 to-transparent rounded-3xl filter blur-xl pointer-events-none" />
            <div className="w-full">
              <div className="relative w-full aspect-square rounded-[2rem] border-2 border-[#C8A75B]/30 overflow-hidden shadow-2xl bg-white p-1.5 group/img-view">
                <img 
                  src={sprayImage} 
                  alt="BMW Spray" 
                  className="w-full h-full object-cover rounded-[1.75rem] transition-transform duration-700 group-hover/img-view:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-[1.75rem]" />
                <div className="absolute bottom-6 left-8 text-left z-10">
                  <span className="text-[11px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">PENGALAMAN PREMIUM</span>
                  <h4 className="font-serif text-white text-[18px] font-semibold leading-tight">BMW Spray Penyegar Wajah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BMW DROP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="bmw-drop">
          {/* Image visual left */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A75B]/10 to-transparent rounded-3xl filter blur-xl pointer-events-none" />
            <div className="w-full">
              <div className="relative w-full aspect-square rounded-[2rem] border-2 border-[#C8A75B]/30 overflow-hidden shadow-2xl bg-white p-1.5 group/img-view">
                <img 
                  src={dropImage} 
                  alt="BMW Drop" 
                  className="w-full h-full object-cover rounded-[1.75rem] transition-transform duration-700 group-hover/img-view:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-[1.75rem]" />
                <div className="absolute bottom-6 left-8 text-left z-10">
                  <span className="text-[11px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">FORMULA BOTANI</span>
                  <h4 className="font-serif text-white text-[18px] font-semibold leading-tight">BMW Drop Titisan Kesejahteraan</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Content details right */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="space-y-3">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-[#C8A75B] font-bold block">NUTRISI LUAR BIASA</span>
              <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[48px] text-[#1F1F1F] font-bold tracking-tight leading-tight">BMW Drop</h2>
              <p className="font-sans text-[15px] sm:text-[17px] uppercase tracking-wider text-[#1F1F1F]/60 font-semibold">Suplemen Kesejahteraan Premium &bull; RM 480</p>
            </div>

            <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[19px] text-[#1F1F1F]/80 leading-[1.8] font-light">
              Titisan premium BMW Drop dirumus untuk menyokong metabolisme harian dan kesejahteraan organik seluruh tubuh anda bagi gaya hidup sihat aktif yang cemerlang.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-4 bg-[#FBF8F1] border border-[#C8A75B]/15 p-6 sm:p-8 rounded-2xl shadow-xs">
                <span className="text-[12px] sm:text-[13px] uppercase tracking-wider text-[#C8A75B] font-bold block">Manfaat Utama</span>
                <ul className="space-y-3 text-[15px] sm:text-[16px] text-[#1F1F1F]/75">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Mengekalkan stamina bersih tubuh</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Titisan pekat botani premium</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Menyokong kesejahteraan dalaman</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 bg-[#FBF8F1] border border-[#C8A75B]/15 p-6 sm:p-8 rounded-2xl shadow-xs">
                <span className="text-[12px] sm:text-[13px] uppercase tracking-wider text-[#C8A75B] font-bold block">Cara Penggunaan</span>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                  Titiskan 3 hingga 5 titis menggunakan pipet emas ke dalam segelas air mineral atau minuman kegemaran anda setiap pagi.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <span className="text-[12px] uppercase tracking-wider text-[#1F1F1F]/50 font-bold block">Siapa Sesuai Guna</span>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/70 leading-relaxed">Individu aktif yang mengutamakan kelengkapan nutrien organik terpelihara.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[12px] uppercase tracking-wider text-[#1F1F1F]/50 font-bold block">Penyimpanan</span>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/70 leading-relaxed">Letakkan di tempat terlindung sejuk. Tutup rapat penutup botol setiap kali pemakaian.</p>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleWhatsAppProduct("BMW Drop")}
                className="cursor-pointer flex-1 h-[54px] sm:h-[58px] bg-[#1F1F1F] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md shadow-md flex items-center justify-center text-center"
              >
                Pesan Melalui WhatsApp
              </button>
              <button
                onClick={() => onOpenConsultation("buy", "BMW Drop")}
                className="cursor-pointer h-[54px] sm:h-[58px] px-8 bg-white border-2 border-[#C8A75B]/40 hover:border-[#C8A75B] text-[#C8A75B] hover:text-[#1F1F1F] text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md flex items-center justify-center text-center"
              >
                Konsultasi Produk
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* MATRIX COMPARISON TABLE */}
      <section className="bg-white py-24 border-y border-[#C8A75B]/15 max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center space-y-16">
          <div className="space-y-4">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.25em] text-[#C8A75B] font-bold block">RUJUKAN PERBANDINGAN SILANG</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[50px] text-[#1F1F1F] font-semibold tracking-tight">
              Essence vs Spray vs Drop
            </h2>
            <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
          </div>

          <div className="overflow-x-auto rounded-[1.5rem] border border-[#C8A75B]/25">
            <table className="w-full text-left font-sans text-[15px] sm:text-[16px] border-collapse min-w-[850px] bg-white">
               <thead>
                 <tr className="bg-[#FAF8F1] border-b border-[#C8A75B]/20">
                   <th className="p-6 uppercase tracking-wider font-bold text-[#1F1F1F]/70 w-1/4">Ciri Utama</th>
                   <th className="p-6 uppercase tracking-wider font-bold text-[#C8A75B]">BMW Essence</th>
                   <th className="p-6 uppercase tracking-wider font-bold text-[#C8A75B]">BMW Spray</th>
                   <th className="p-6 uppercase tracking-wider font-bold text-[#C8A75B]">BMW Drop</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-[#EFEAE2]/60 text-[#1F1F1F]/80">
                 <tr className="hover:bg-[#FAF8F1]/10">
                   <td className="p-6 font-bold bg-[#FAF8F1]/20">Tujuan Utama</td>
                   <td className="p-6">Relaksasi spiritual mandian &amp; teraputik</td>
                   <td className="p-6">Kesegaran luaran, hidrasi wajah &amp; tubuh</td>
                   <td className="p-6">Sokongan metabolik kesejahteraan harian</td>
                 </tr>
                 <tr className="hover:bg-[#FAF8F1]/10">
                   <td className="p-6 font-bold bg-[#FAF8F1]/20">Kekerapan Penggunaan</td>
                   <td className="p-6">Rendaman malam (2-3 kali seminggu)</td>
                   <td className="p-6">Semburan bebas sepanjang hari (harian)</td>
                   <td className="p-6">Campuran air mineral (setiap pagi)</td>
                 </tr>
                 <tr className="hover:bg-[#FAF8F1]/10">
                   <td className="p-6 font-bold bg-[#FAF8F1]/20">Kandungan Utama</td>
                   <td className="p-6">Pati botani pekat gred eksklusif</td>
                   <td className="p-6">Ekstrak partikel mikro herba segar</td>
                   <td className="p-6">Formulasi pelengkap tenaga nutrisi bersih</td>
                 </tr>
                 <tr className="hover:bg-[#FAF8F1]/10">
                   <td className="p-6 font-bold bg-[#FAF8F1]/20">Kaedah Serapan</td>
                   <td className="p-6">Wap pernafasan &amp; rendaman kulit</td>
                   <td className="p-6">Semburan titisan mikro wajah cepat</td>
                   <td className="p-6">Zon asimilasi sistem dalaman tubuh</td>
                 </tr>
               </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL INTERACTIVE ADVICE CALL */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-[#FAF8F1] border border-[#C8A75B]/25 rounded-[3rem] p-10 sm:p-16 text-center max-w-4xl mx-auto space-y-8 shadow-xs">
          <h3 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-[#1F1F1F]">
            Masih Ragu Tentang Pilihan Terbaik?
          </h3>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#1F1F1F]/70 leading-[1.8] max-w-2xl mx-auto font-light">
            Tidak pasti produk mana yang sesuai dengan rutin dan gaya hidup anda? Usah bimbang. Pasukan perunding kesihatan AquivaGold sedia membimbing anda secara peribadi percuma di talian sekarang.
          </p>

          <button
            onClick={() => onOpenConsultation("consult")}
            className="cursor-pointer h-[54px] sm:h-[58px] px-10 bg-[#1F1F1F] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md shadow-md inline-flex items-center justify-center"
          >
            Dapatkan Konsultasi Percuma Sekarang
          </button>
        </div>
      </section>

    </div>
  );
}
