import React, { useState } from "react";
import { 
  FileText, 
  Award, 
  ShieldCheck, 
  FlaskConical, 
  MapPin, 
  X, 
  CheckCircle, 
  Library, 
  Layers,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DocumentDetail {
  id: string;
  title: string;
  badge: string;
  desc: string;
  importance: string;
  refNo: string;
}

export default function CertificationsView() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentDetail | null>(null);

  const docList: DocumentDetail[] = [
    {
      id: "ssm",
      title: "Pendaftaran SSM Syarikat",
      badge: "Syarikat Berdaftar Sah",
      desc: "Dokumen pendaftaran penuh rasmi di bawah Akta Syarikat Malaysia (Suruhanjaya Syarikat Malaysia) bagi menjamin kesahan operasi perniagaan Aquiva Gold secara telus.",
      importance: "Memastikan syarikat beroperasi secara sah mengikut ketetapan undang-undang komersial tanah air.",
      refNo: "Reg No: 202401xxxx33"
    },
    {
      id: "address",
      title: "Company Profile & Address Verification",
      badge: "Pejabat & Premis Rasmi",
      desc: "Profil korporat rasmi bersama butiran lokasi pejabat berpusat yang sah bagi memudahkan pelanggan berkunjung atau menghubungi wakil pengurusan bila-bila masa.",
      importance: "Menghapuskan keraguan ejen dan pengguna dengan membuktikan kewujudan fizikal fizikal syarikat yang mantap.",
      refNo: "HQ Address: Bukit Damansara, KL"
    },
    {
      id: "halal",
      title: "Sijil HALAL Pihak Berkuasa",
      badge: "Standard Bahan Suci",
      desc: "Rujukan dokumen pematuhan bahan herba botani yang dipastikan 100% bebas daripada unsur haram, najis, atau proses penyediaan syubhah mengikut piawaian pensijilan diiktiraf.",
      importance: "Memberikan keyakinan spiritual tanpa waswas kepada penganut beragama Islam di seluruh nusantara.",
      refNo: "Halal Ref: JAKIM/12xx8"
    },
    {
      id: "mesti",
      title: "Pensijilan Pengilangan MeSTI",
      badge: "Kebersihan & Keselamatan",
      desc: "Garis panduan standard kebersihan (Makanan Selamat Tanggungjawab Industri) yang menapis rantaian pemprosesan cecair botani agar sentiasa sanitari diredai.",
      importance: "Menolak pencemaran bakteria asing sepanjang siri pembotolan dan penyimpanan kilang bertaraf ISO.",
      refNo: "MeSTI Ref: KKM/xxxx12"
    },
    {
      id: "lab",
      title: "Laporan Ujian Analisis Makmal",
      badge: "Lab Test Report Penuh",
      desc: "Siri ujian saintifik bebas daripada makmal bertauliah (COA) yang mengesahkan bahawa Black Millenia Water bebas daripada plumbum, merkuri, sebatian steroid keras mahupun racun kulat pengawet hiasan.",
      importance: "Membuktikan keselamatan cecair botani tulen secara klinikal khusus untuk pemeliharaan kulit muka dan tubuh fizikal harian.",
      refNo: "Lab Report No: COA/2026/099A"
    }
  ];

  return (
    <div className="space-y-32 pb-24">
      
      {/* HERO SECTION */}
      <section className="bg-[#FAF8F1] py-24 border-b border-[#C8A75B]/15 text-center max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-4">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">INTEGRITI DAN KETELUSAN</span>
          <h1 className="font-serif text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
            Pensijilan &amp; Bukti Rasmi
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#1F1F1F]/60 max-w-2xl mx-auto leading-[1.8]">
            Kepercayaan anda adalah maruah kami. Kami menyediakan senarai dokumentasi lengkap bagi membuktikan komitmen tinggi dan standard kawalan kualiti yang mutlak terhadap Aquiva Gold.
          </p>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
        </div>
      </section>

      {/* DOCUMENT LIST CARDS */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {docList.map((doc, idx) => {
            const Icon = idx % 3 === 0 ? FileText : idx % 3 === 1 ? ShieldCheck : FlaskConical;
            return (
              <div 
                key={doc.id}
                className="bg-white border-2 border-[#C8A75B]/15 hover:border-[#C8A75B] rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between text-left hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-5">
                  <div className="text-[#C8A75B] mb-5 p-4 bg-[#FAF8F1] inline-block rounded-2xl border border-[#C8A75B]/10 group-hover:bg-[#C8A75B] group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#1F1F1F] group-hover:text-[#C8A75B] transition-colors leading-tight">
                    {doc.title}
                  </h3>
                  <span className="inline-block bg-[#FAF8F1] border border-[#C8A75B]/20 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#C8A75B] px-3 py-1.5 rounded-md">
                    {doc.badge}
                  </span>
                  <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/80 leading-[1.8] font-light mt-3 line-clamp-4">
                    {doc.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EFEAE2] mt-8">
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="cursor-pointer text-[12px] sm:text-[13px] uppercase tracking-widest font-bold text-[#C8A75B] hover:text-[#1F1F1F] transition-colors flex items-center gap-2 w-full text-left"
                  >
                    <span>Lihat Butiran Dokumen</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY THESE DOCUMENTS ARE ESSENTIAL */}
      <section className="bg-[#FAF8F1] py-24 border-y border-[#C8A75B]/15 max-w-full">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-left space-y-16">
          
          <div className="text-center space-y-4">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-[#C8A75B] font-bold block">TUNTUTAN ETIKA PERNIAGAAN</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-[#1F1F1F] font-bold text-center leading-tight">Kenapa Dokumen Ini Penting?</h2>
            <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C8A75B]/30 flex items-center justify-center text-[#C8A75B] text-[16px] font-bold font-serif shadow-sm">
                01
              </div>
              <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F1F1F]">Membina Kepercayaan</h4>
              <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                Membuktikan kejujuran dan ketelusan syarikat dalam penyediaan produk bermutu tinggi tanpa manipulasi maklumat pemasaran.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C8A75B]/30 flex items-center justify-center text-[#C8A75B] text-[16px] font-bold font-serif shadow-sm">
                02
              </div>
              <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F1F1F]">Komitmen Kualiti</h4>
              <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                Pemenuhan audit pihak berkuasa tempatan membuktikan kami sanggup berbelanja lebih demi pematuhan rantaian penghasilan terbaik.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C8A75B]/30 flex items-center justify-center text-[#C8A75B] text-[16px] font-bold font-serif shadow-sm">
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

      {/* FINAL DIRECT CTA */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-[#1F1F1F] text-white rounded-[3rem] border border-[#C8A75B]/25 p-10 sm:p-16 text-center max-w-3xl mx-auto space-y-8 shadow-2xl">
          <h3 className="font-serif text-[26px] sm:text-[30px] text-white font-medium leading-tight">Ada Pertanyaan Berkenaan Dokumen?</h3>
          <p className="font-sans text-[15px] sm:text-[17px] text-white/70 max-w-xl mx-auto font-light leading-[1.8]">
            Jika anda usahawan korporat, ahli farmis atau perunding kesihatan bertauliah yang mahu mengakses fail COA dwi-bahasa rasmi kami, sila hubungi pentadbiran.
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

      {/* DYNAMIC SHOWCASE MODAL FOR CERTIFICATES */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1F1F1F]/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-[#FAF8F1] border-2 border-[#C8A75B]/60 rounded-[2rem] p-8 sm:p-10 max-w-lg w-full shadow-2xl relative text-left"
            >
              <button 
                onClick={() => setSelectedDoc(null)}
                className="absolute top-6 right-6 p-2 text-[#1F1F1F]/50 hover:text-[#1F1F1F] cursor-pointer rounded-full hover:bg-white/60 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-[#C8A75B]">
                    PORT ALAMAT RASMI DOKUMEN
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] text-[#1F1F1F] font-bold leading-snug">
                    {selectedDoc.title}
                  </h3>
                  <div className="font-mono text-[11px] sm:text-[12px] text-[#1F1F1F]/50 font-semibold bg-white/50 border border-[#C8A75B]/15 px-3 py-1 rounded inline-block">
                    {selectedDoc.refNo}
                  </div>
                </div>

                {/* Simulated secure certificate preview visual */}
                <div className="border border-[#C8A75B]/25 p-6 bg-white rounded-2xl relative overflow-hidden select-none">
                  <div className="absolute inset-2 border border-dashed border-[#C8A75B]/15" />
                  {/* Watermark logo decoration */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none text-[#C8A75B]">
                    <Layers size={130} />
                  </div>
                  
                  <div className="relative z-10 text-center space-y-3 py-6">
                    <CheckCircle size={38} className="text-[#C8A75B] mx-auto block" />
                    <span className="block text-[11px] uppercase font-bold tracking-widest text-[#1F1F1F]">Aquiva Gold Security Standard</span>
                    <p className="text-[10px] text-[#1F1F1F]/50 max-w-xs mx-auto leading-normal">Siri fail ini disahsahkan secara teratur bagi mewakili rujukan audit kualiti terpelihara.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]/40 block">Penerangan Penuh</span>
                    <p className="text-[14px] sm:text-[15px] text-[#1F1F1F]/80 leading-[1.8] font-light">{selectedDoc.desc}</p>
                  </div>
                  <div className="space-y-1 pt-3 border-t border-[#EFEAE2]">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C8A75B] block">Kepentingan Bagi Pengguna</span>
                    <p className="text-[14px] sm:text-[15px] text-[#1F1F1F]/75 font-medium leading-[1.8]">{selectedDoc.importance}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => {
                      const msg = `Hi AquivaGold, boleh saya mohon rujukan dokumen penuh *${selectedDoc.title}* (${selectedDoc.refNo}) untuk semakan lanjut?`;
                      window.open(`https://wa.me/601139900920?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
                    }}
                    className="cursor-pointer w-full h-[54px] bg-[#1F1F1F] hover:bg-[#333333] text-white text-[14px] sm:text-[15px] uppercase tracking-widest font-bold transition-all rounded-md text-center flex items-center justify-center shadow-md"
                  >
                    Mohon Salinan PDF (WhatsApp)
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
