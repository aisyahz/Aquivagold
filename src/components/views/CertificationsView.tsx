import React, { useState } from "react";
import { 
  FileText, 
  Award, 
  ShieldCheck, 
  FlaskConical, 
  X, 
  CheckCircle, 
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import halalMestiImage from "../../assets/images/halal mesti.jpeg";
import kkmImage from "../../assets/images/kkm.jpeg";
import labReportImage from "../../assets/images/lab test report.jpeg";
import labReport1Image from "../../assets/images/lab test report 1.jpeg";
import labReport2Image from "../../assets/images/lab test report 2.jpeg";

interface DocumentDetail {
  id: string;
  title: string;
  badge: string;
  desc: string;
  importance: string;
  refNo: string;
  img: string;
}

export default function CertificationsView() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentDetail | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const docList: DocumentDetail[] = [
    {
      id: "halal_mesti",
      title: "HALAL & MESTI",
      badge: "Kebersihan & Syarak",
      desc: "Pensijilan berkaitan yang menunjukkan komitmen terhadap standard pengeluaran dan pematuhan yang ditetapkan.",
      importance: "Memberikan ketenangan rohani dan jaminan keselamatan rantaian pemprosesan kepada setiap pengamal.",
      refNo: "Ref: Halal / MeSTI Compliance Status",
      img: halalMestiImage
    },
    {
      id: "kkm",
      title: "KKM Related Documentation",
      badge: "Dokumentasi & Kelulusan KKM",
      desc: "Dokumentasi berkaitan yang boleh dirujuk untuk tujuan maklumat dan keyakinan pelanggan.",
      importance: "Mematuhi kriteria kebersihan, pendaftaran bahan mineral dan herba yang sihat mengikut ketetapan nasional.",
      refNo: "Ref: KKM Registered Status Portfolio",
      img: kkmImage
    },
    {
      id: "lab_report",
      title: "Laporan Makmal",
      badge: "COA Analisis Bebas Kimia",
      desc: "Laporan analisis makmal yang berkaitan dengan produk Aquiva Gold Black Millenia.",
      importance: "Membuktikan kesucian botani cecair tulen daripada radikal bebas, steroid berbahaya, dan logam berat.",
      refNo: "COA No: Lab Test / Ref-1 (COA)",
      img: labReportImage
    },
    {
      id: "lab_report_1",
      title: "Laporan Makmal Tambahan",
      badge: "Sijil Penapisan COA 2",
      desc: "Maklumat tambahan berkaitan analisis dan dokumentasi sokongan.",
      importance: "Pengesahan kandungan mikrobiologi dan jaminan jangka hayat yang selamat dan stabil secara mikroskopik.",
      refNo: "COA No: Lab Test / Ref-2 (COA)",
      img: labReport1Image
    },
    {
      id: "lab_report_2",
      title: "Laporan Makmal Tambahan",
      badge: "Sijil Penapisan COA 3",
      desc: "Dokumentasi tambahan untuk rujukan pelanggan.",
      importance: "Memastikan integriti bahan terapeutik botani dalam setiap kelompok botol Black Millenia Water dipantau ketat.",
      refNo: "COA No: Lab Test / Ref-3 (COA)",
      img: labReport2Image
    }
  ];

  const handleOpenDoc = (doc: DocumentDetail) => {
    setSelectedDoc(doc);
    setZoomLevel(1); // reset zoom
  };

  return (
    <div className="space-y-32 pb-24">
      
      {/* 1. HERO SECTION (Premium corporate style) */}
      <section className="bg-[#FAF8F1] py-24 border-b border-[#C8A75B]/15 text-center max-w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#C8A75B]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C8A75B]/5 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-4 relative z-10">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">INTEGRITI DAN KETELUSAN</span>
          <h1 className="font-serif text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] text-[#1F1F1F] font-bold tracking-tight leading-tight">
            Pensijilan &amp; Bukti
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#1F1F1F]/60 max-w-2xl mx-auto leading-[1.8] font-light">
            Komitmen Aquiva Gold terhadap kualiti, keselamatan dan dokumentasi yang boleh dirujuk oleh pelanggan. Kami mengamalkan pematuhan penuh tanpa tuntutan perubatan palsu demi melahirkan ketenangan minda yang hakiki.
          </p>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
        </div>
      </section>

      {/* 2. DOCUMENT LIST CARDS (5 Interactive Premium Cards) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16" id="document-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {docList.map((doc, idx) => {
            return (
              <div 
                key={doc.id}
                className="bg-white border-2 border-[#C8A75B]/15 hover:border-[#C8A75B] rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between text-left hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Real Image Card with sleek overlay & preview indicators */}
                  <div className="relative w-full aspect-[4/3] rounded-[1.5rem] border border-[#C8A75B]/20 overflow-hidden bg-stone-50 group-hover:border-[#C8A75B]/50 transition-all duration-500 shadow-xs p-1">
                    <img 
                      src={doc.img} 
                      alt={doc.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-[1.25rem] transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Magnify Overlay */}
                    <div 
                      onClick={() => handleOpenDoc(doc)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer rounded-[1.25rem]"
                    >
                      <div className="bg-white/95 text-black p-3.5 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 size={18} className="text-[#C8A75B]" />
                      </div>
                    </div>
                    
                    {/* Golden luxury inner-border */}
                    <div className="absolute inset-3.5 rounded-[1.1rem] border border-dashed border-white/20 pointer-events-none group-hover:border-white/40 transition-colors" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="inline-block bg-[#FAF8F1] border border-[#C8A75B]/20 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#C8A75B] px-3.5 py-1.5 rounded-lg">
                        {doc.badge}
                      </span>
                      <span className="font-mono text-[9px] text-[#1F1F1F]/40 font-semibold uppercase">{doc.refNo.split(":")[0]}</span>
                    </div>

                    <h3 className="font-serif text-[22px] font-bold text-[#1F1F1F] group-hover:text-[#C8A75B] transition-colors leading-snug">
                      {doc.title}
                    </h3>
                    
                    <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/80 leading-[1.8] font-light min-h-[54px] line-clamp-3">
                      {doc.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#EFEAE2] mt-8 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenDoc(doc)}
                    className="cursor-pointer text-[12px] sm:text-[13px] uppercase tracking-widest font-extrabold text-[#C8A75B] hover:text-[#1F1F1F] transition-colors flex items-center gap-2"
                  >
                    <span>Lihat Dokumen</span>
                    <span>&rarr;</span>
                  </button>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#1F1F1F]/30 font-bold">TERPINDAH</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SAFETY & AUTHENTICITY PHILOSOPHY SECTION */}
      <section className="bg-[#FAF8F1] py-24 border-y border-[#C8A75B]/15 max-w-full">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-left space-y-16">
          
          <div className="text-center space-y-4">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-[#C8A75B] font-bold block">TUNTUTAN ETIKA PERNIAGAAN</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-[#1F1F1F] font-bold text-center leading-tight">MENGAPA DOKUMENTASI PENTING?</h2>
            <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="space-y-4 bg-white p-8 rounded-2xl border border-[#C8A75B]/10 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F1] border border-[#C8A75B]/30 flex items-center justify-center text-[#C8A75B] text-[16px] font-bold font-serif">
                01
              </div>
              <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F1F1F]">Membina Kepercayaan</h4>
              <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                Membuktikan kejujuran dan ketelusan syarikat dalam penyediaan produk bermutu tinggi tanpa manipulasi maklumat pemasaran.
              </p>
            </div>

            <div className="space-y-4 bg-white p-8 rounded-2xl border border-[#C8A75B]/10 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F1] border border-[#C8A75B]/30 flex items-center justify-center text-[#C8A75B] text-[16px] font-bold font-serif">
                02
              </div>
              <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F1F1F]">Komitmen Kualiti</h4>
              <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                Pemenuhan audit pihak berkuasa tempatan membuktikan kami sanggup berbelanja lebih demi pematuhan rantaian penghasilan terbaik.
              </p>
            </div>

            <div className="space-y-4 bg-white p-8 rounded-2xl border border-[#C8A75B]/10 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F1] border border-[#C8A75B]/30 flex items-center justify-center text-[#C8A75B] text-[16px] font-bold font-serif">
                03
              </div>
              <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F1F1F]">Keputusan Diyakini</h4>
              <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                Ejen dan pengguna sedia ada boleh membuat keputusan pemilikan secara bijak bersandarkan hujah dokumentasi saintifik rasmi.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FINAL ENQUIRY CTA */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-[#1F1F1F] text-white rounded-[3rem] border border-[#C8A75B]/25 p-10 sm:p-16 text-center max-w-3xl mx-auto space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A75B]/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-serif text-[26px] sm:text-[30px] text-white font-medium leading-tight">Ada Pertanyaan Berkenaan Dokumen?</h3>
          <p className="font-sans text-[15px] sm:text-[17px] text-white/70 max-w-xl mx-auto font-light leading-[1.8]">
            Jika anda usahawan korporat, ahli farmis atau perunding kesihatan bertauliah yang mahu mengakses fail COA lengkap dwi-bahasa rasmi kami, sila hubungi pentadbiran perhubungan awam.
          </p>

          <a
            href="https://wa.me/601139900920?text=Hi%20Aquiva%20Gold%2C%20saya%20ingin%20bertanya%20mengenai%20dokumen%20pensijilan%20syarikat."
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex h-[54px] sm:h-[58px] px-10 bg-[#C8A75B] hover:bg-white hover:text-[#1F1F1F] text-[#1F1F1F] text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all duration-300 rounded-md items-center justify-center shadow-lg"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>

      {/* 5. DYNAMIC MODAL PREVIEW (With Zoom and high elegance parameters) */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 28 }}
              className="bg-[#FAF8F1] border-2 border-[#C8A75B]/60 rounded-[2.5rem] p-6 sm:p-10 max-w-2xl w-full shadow-2xl relative text-left my-8"
            >
              <button 
                onClick={() => setSelectedDoc(null)}
                className="absolute top-6 right-6 p-2 text-stone-600 hover:text-black cursor-pointer rounded-full bg-white/80 hover:bg-white shadow-xs transition-colors z-20"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#C8A75B] block">
                    {selectedDoc.badge}
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] text-[#1F1F1F] font-bold leading-tight pr-8">
                    {selectedDoc.title}
                  </h3>
                  <div className="font-mono text-[11px] sm:text-[12px] text-[#1F1F1F]/60 bg-white border border-[#C8A75B]/20 px-3.5 py-1.5 rounded-lg inline-block font-semibold">
                    {selectedDoc.refNo}
                  </div>
                </div>

                {/* Secure certificate image container with zoom effect */}
                <div className="relative border border-[#C8A75B]/25 p-1 bg-white rounded-2xl shadow-inner max-h-[480px] overflow-hidden select-none group/modal-img flex justify-center items-center">
                  <div className="absolute inset-3 border border-dashed border-[#C8A75B]/15 pointer-events-none z-10" />
                  
                  {/* Floating Magnification Tools */}
                  <div className="absolute bottom-5 right-5 z-20 flex gap-2">
                    <button 
                      onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2))}
                      className="p-2 bg-white/90 border border-stone-200 text-stone-800 rounded-lg hover:bg-white transition-all cursor-pointer shadow-xs"
                      title="Zoom In"
                    >
                      <ZoomIn size={16} />
                    </button>
                    <button 
                      onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                      className="p-2 bg-white/90 border border-stone-200 text-stone-800 rounded-lg hover:bg-white transition-all cursor-pointer shadow-xs"
                      title="Zoom Out"
                    >
                      <ZoomOut size={16} />
                    </button>
                    <button 
                      onClick={() => setZoomLevel(1)}
                      className="p-2 bg-white/90 border border-stone-200 text-stone-800 rounded-lg hover:bg-white transition-all cursor-pointer shadow-xs text-xs font-mono font-bold"
                      title="Reset Zoom"
                    >
                      1:1
                    </button>
                  </div>

                  {/* Document Image with zoom inline style */}
                  <div className="w-full h-full overflow-auto max-h-[400px] flex items-center justify-center p-2 bg-stone-100/55 rounded-xl">
                    <img 
                      src={selectedDoc.img} 
                      alt={selectedDoc.title} 
                      referrerPolicy="no-referrer"
                      style={{ transform: `scale(${zoomLevel})` }}
                      className="max-h-[380px] object-contain transition-transform duration-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]/40 block">Perjalanan &amp; Butiran Kualiti</span>
                    <p className="text-[14px] sm:text-[15px] text-[#1F1F1F]/80 leading-[1.8] font-light">{selectedDoc.desc}</p>
                  </div>
                  <div className="space-y-1 pt-3.5 border-t border-[#EFEAE2]">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C8A75B] block">Kepentingan Bagi Pengguna</span>
                    <p className="text-[14px] sm:text-[15px] text-[#1F1F1F]/75 font-medium leading-[1.8]">{selectedDoc.importance}</p>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => {
                      const msg = `Hi AquivaGold, boleh saya mohon rujukan dokumen penuh *${selectedDoc.title}* (${selectedDoc.refNo}) untuk semakan lanjut?`;
                      window.open(`https://wa.me/601139900920?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
                    }}
                    className="cursor-pointer w-full h-[54px] bg-black hover:bg-stone-800 text-white text-[13px] sm:text-[14px] uppercase tracking-wider font-bold transition-all rounded-xl text-center flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>MOHON SALINAN PDF</span>
                  </button>
                  <button 
                    onClick={() => setSelectedDoc(null)}
                    className="cursor-pointer w-full h-[54px] border-2 border-stone-300 hover:border-black text-stone-700 hover:text-black text-[13px] sm:text-[14px] uppercase tracking-wider font-bold transition-all rounded-xl text-center flex items-center justify-center"
                  >
                    Tutup Semakan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
