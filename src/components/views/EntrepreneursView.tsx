import React from "react";
import { 
  Users, 
  HelpCircle, 
  TrendingUp, 
  BookOpen, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  DollarSign, 
  Briefcase,
  ShieldCheck
} from "lucide-react";

export default function EntrepreneursView() {

  const handleWhatsAppJoin = (role: string, desc: string) => {
    const text = `Salam Aquiva Gold, saya ingin bertanya dan mendapatkan bimbingan lanjut mengenai peluang sebagai *${role}* (${desc}). Boleh jelaskan syarat dan langkah seterusnya? Terima kasih.`;
    window.location.href = `https://wa.me/601139900920?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* HERO BANNER */}
      <section className="bg-[#FAF8F1] py-12 border-b border-[#C8A75B]/15 text-center max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-3">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">PROGRAM RAKAN NIAGA PREMIUM</span>
          <h1 className="font-serif text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-[#1F1F1F] font-bold tracking-tight leading-tight">
            Sertai Ekosistem Usahawan AquivaGold
          </h1>
          <p className="font-sans text-[13px] sm:text-[14px] text-[#1F1F1F]/60 max-w-2xl mx-auto leading-[1.7] font-normal">
            Bina kemahiran pemasaran digital dan kembangkan perniagaan runcit secara selamat tanpa tekanan. Dapatkan bimbingan telus langkah demi langkah untuk menyebarkan kebaikan produk botani premium di kawasan anda.
          </p>
          <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
        </div>
      </section>

      {/* DETAILED DECISION GUIDANCE & ANTI-MLM CLARITY */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-white border border-[#C8A75B]/25 rounded-2xl p-6 md:p-8 shadow-sm max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C8A75B]/15 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C8A75B] font-bold">ETIKA PERNIAGAAN ADIL</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 mt-1">Sistem Telus Semata-mata &bull; 100% Bebas MLM</h2>
            </div>
            <div className="bg-[#FAF8F1] border border-[#C8A75B]/20 py-1.5 px-3.5 rounded-lg flex items-center gap-2">
              <ShieldCheck className="text-[#C8A75B] shrink-0" size={18} />
              <span className="text-xs font-bold text-neutral-900">Tiada Yuran Keahlian Paksaan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-[14px] sm:text-[15px] text-neutral-800 font-normal leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-neutral-900">Bagaimana Cara Kami Berbeza?</h3>
              <p>
                Rangkaian perniagaan AquivaGold dibina berasaskan 
                <strong> urus niaga jual-beli runcit tulen</strong>. Kami menentang sebarang unsur skim cepat kaya, konsep upline-downline, atau penetapan kuota bulanan wajib yang membebankan rakan niaga. Semua keuntungan diperoleh telus daripada margin jualan runcit atau diskaun borong langsung produk fizikal.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-neutral-900">Panduan Membuat Keputusan</h3>
              <p>
                Jika anda <strong>pemula tanpa modal</strong>, pakej <strong>Dropship Sifar Risiko</strong> adalah pilihan terbaik untuk belajar kemahiran asas. Bagi anda yang mempunyai pasaran runcit sedia ada (pemilik spa, farmasi komuniti, atau butik kecantikan), pakej <strong>Ejen Berdaftar</strong> membolehkan agihan stok fizikal tempatan dengan harga borong yang bersesuaian dengan matlamat anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN US CARDS */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="font-serif text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-[#1F1F1F] font-bold tracking-tight leading-tight">Mengapa Rakan Niaga Memilih Kami?</h2>
          <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "Produk Premium Sah", desc: "Produk eksklusif dengan botol kaca premium, mempamerkan kualiti kemewahan yang tinggi.", icon: Briefcase },
            { title: "Bahan Media Lengkap", desc: "Akses bahan grafik profesional harian serta video promosi sedia digunakan.", icon: Sparkles },
            { title: "Permintaan Tulen", desc: "Keperluan harian botani tanpa bahan kimia berbahaya yang diperlukan pasaran.", icon: TrendingUp },
            { title: "Modul Latihan Praktikal", desc: "Latihan rundingan pelanggan menggunakan panduan bertulis mesra pemula.", icon: BookOpen },
            { title: "Struktur Sangat Jelas", desc: "Tiada skim tersembunyi. Keuntungan dinilai murni merujuk usaha jualan runcit tulen.", icon: DollarSign }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#FBF8F1] border border-[#C8A75B]/15 rounded-2xl p-5 sm:p-6 text-left flex flex-col justify-between hover:border-[#C8A75B] hover:shadow-sm transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="text-[#C8A75B] p-3 bg-white inline-block rounded-xl border border-[#C8A75B]/10">
                  <item.icon size={24} />
                </div>
                <h3 className="font-serif text-[17px] sm:text-[18px] font-black text-neutral-900">{item.title}</h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-neutral-800 leading-[1.8] font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP OPTIONS (Dropship Pemula vs Affiliate Content vs Agent Berdaftar vs Stockist Eksklusif) */}
      <section className="bg-[#FAF8F1] py-12 border-y border-[#C8A75B]/15 max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-widest text-[#C8A75B] font-bold block">PILIHAN PENYERTAAN CARA ANDA</span>
            <h2 className="font-serif text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-[#1F1F1F] font-bold tracking-tight leading-tight">4 Pilihan Program Usahawan</h2>
            <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            
            {/* AFFILIATE */}
            <div className="bg-white border border-[#C8A75B]/20 hover:border-[#C8A75B] rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="space-y-5">
                <div className="border-b border-[#EFEAE2] pb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">PROGRAM CONTENT</span>
                  <h3 className="font-serif text-[17px] sm:text-[18px] font-black text-[#1F1F1F]">Affiliate</h3>
                  <p className="text-[13px] sm:text-[14px] text-neutral-800 mt-1.5 font-normal leading-relaxed">Sesuai untuk pencipta kandungan media sosial yang ingin berkongsi pautan rujukan digital secara pasif.</p>
                </div>

                <ul className="space-y-2.5 font-sans text-[13px] sm:text-[14px] text-neutral-800 font-normal">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Hanya kongsikan pautan rujukan anda.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Laporan komisen automatik dari sistem.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Tiada syarat pegangan atau urusan logistik.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppJoin("Affiliate", "Program Content Tanpa Modal")}
                className="cursor-pointer w-full h-[48px] bg-white border border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-white text-[13px] sm:text-[14px] uppercase tracking-wider font-bold transition-all rounded-lg mt-6 text-center flex items-center justify-center font-sans shadow-sm"
              >
                Sertai Affiliate
              </button>
            </div>

            {/* DROPSHIP */}
            <div className="bg-white border-2 border-[#C8A75B]/20 hover:border-[#C8A75B] rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="space-y-5">
                <div className="border-b border-[#EFEAE2] pb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">PROGRAM PEMULA</span>
                  <h3 className="font-serif text-[17px] sm:text-[18px] font-black text-[#1F1F1F]">Dropship</h3>
                  <p className="text-[13px] sm:text-[14px] text-neutral-800 mt-1.5 font-normal leading-relaxed">Sesuai untuk memulakan jualan runcit santai tanpa mengambil risiko modal pegangan stok fizikal.</p>
                </div>

                <ul className="space-y-2.5 font-sans text-[13px] sm:text-[14px] text-neutral-800 font-normal">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span><strong>Sifar Pegangan Stok:</strong> Kami membungkus &amp; menghantar terus.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span><strong>Margin Runcit Jelas:</strong> Keuntungan murni terus dari jualan unit anda.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Akses visual kempen beriben satin premium percuma.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppJoin("Dropship", "Pakej Pemula Tanpa Risiko")}
                className="cursor-pointer w-full h-[48px] bg-white border border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-white text-[13px] sm:text-[14px] uppercase tracking-wider font-bold transition-all rounded-lg mt-6 text-center flex items-center justify-center font-sans shadow-sm"
              >
                Daftar Dropship
              </button>
            </div>

            {/* REGISTERED AGENT */}
            <div className="bg-white border-2 border-[#C8A75B]/40 hover:border-[#C8A75B] rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-md transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-[#C8A75B] text-white text-[8px] uppercase tracking-widest font-black px-2 py-0.5 rounded">
                TERPOPULAR
              </div>
              
              <div className="space-y-5">
                <div className="border-b border-[#EFEAE2] pb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">PROGRAM PERTUMBUHAN</span>
                  <h3 className="font-serif text-[17px] sm:text-[18px] font-black text-[#1F1F1F]">Ejen Berdaftar</h3>
                  <p className="text-[13px] sm:text-[14px] text-neutral-800 mt-1.5 font-normal leading-relaxed">Sesuai untuk individu atau usahawan kecantikan yang bersedia memasarkan rujukan fizikal tempatan.</p>
                </div>

                <ul className="space-y-2.5 font-sans text-[13px] sm:text-[14px] text-neutral-800 font-normal">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span><strong>Harga Borong Rendah:</strong> Struktur potongan harga borong langsung yang kompetitif.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span><strong>Agihan Wilayah Teratur:</strong> Perlindungan agihan kawasan terpilih.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Webinar berkala eksklusif bimbingan produk spa.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppJoin("Ejen Berdaftar", "Pakej Borong Tempatan")}
                className="cursor-pointer w-full h-[48px] bg-[#1F1F1F] hover:bg-[#333333] text-white text-[13px] sm:text-[14px] uppercase tracking-wider font-bold transition-all rounded-lg mt-6 text-center flex items-center justify-center font-sans shadow-lg"
              >
                Sertai Ejen
              </button>
            </div>

            {/* EXCLUSIVE STOCKIST */}
            <div className="bg-white border border-[#C8A75B]/20 hover:border-[#C8A75B] rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="space-y-5">
                <div className="border-b border-[#EFEAE2] pb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">PROGRAM WILAYAH</span>
                  <h3 className="font-serif text-[17px] sm:text-[18px] font-black text-[#1F1F1F]">Stokis Eksklusif</h3>
                  <p className="text-[13px] sm:text-[14px] text-neutral-800 mt-1.5 font-normal leading-relaxed">Seterusnya bagi pengedar runcit besar atau pemilik rangkaian kedai yang memegang hak penuh negeri.</p>
                </div>

                <ul className="space-y-2.5 font-sans text-[13px] sm:text-[14px] text-neutral-800 font-normal">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span><strong>Diskaun Borong Maksimum:</strong> Margin keuntungan pengedaran terbesar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span><strong>Rujukan Leads Automatik:</strong> Setiap pertanyaan tempatan akan disalurkan terus.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#C8A75B] shrink-0 mt-0.5" />
                    <span>Sokongan pengiklanan berbayar bersama rasmi HQ.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppJoin("Stokis Negeri", "Hak Eksklusif Pengedaran Wilayah")}
                className="cursor-pointer w-full h-[48px] bg-white border border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-white text-[13px] sm:text-[14px] uppercase tracking-wider font-bold transition-all rounded-lg mt-6 text-center flex items-center justify-center font-sans shadow-sm"
              >
                Sertai Stokis
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* STEPS TO JOIN */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-widest text-[#C8A75B] font-bold block">MEMULAKAN LANGKAH MUDAH</span>
          <h2 className="font-serif text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-[#1F1F1F] font-bold tracking-tight leading-tight">4 Langkah Memulakan Secara Selamat</h2>
          <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Klik Pertanyaan WhatsApp", p: "Pilah mana-mana butang mengikut minat peranan anda di atas untuk berbual secara terus dan santai bersama kakitangan pendaftaran kami." },
            { step: "02", title: "Dapatkan Dokumen Bimbingan", p: "HQ berkongsi risalah maklumat borong, pelan perniagaan bertulis, serta menyemak ketersediaan zon kawasan agihan anda." },
            { step: "03", title: "Mula Hebahan Selamat", p: "Gunakan kemudahan visual harian dan bahan teks perundingan yang disediakan untuk dikongsikan bersama rangkaian kenalan rapat anda." },
            { step: "04", title: "Urus Pesanan Selamat", p: "Terima pesanan runcit, uruskan butiran penghantaran dengan sokongan logistik selamat HQ, dan kumpulkan keuntungan murni anda." }
          ].map((item, idx) => (
             <div key={idx} className="bg-white border border-[#C8A75B]/20 rounded-2xl p-6 text-left space-y-3 relative shadow-sm hover:border-[#C8A75B] transition-all duration-300">
               <div className="font-serif text-[28px] sm:text-[34px] font-black text-[#C8A75B]/35">{item.step}</div>
               <h3 className="font-serif text-[17px] sm:text-[18px] font-black text-neutral-900">{item.title}</h3>
               <p className="text-[13px] sm:text-[14px] text-neutral-800 leading-[1.7] font-normal">{item.p}</p>
             </div>
          ))}
        </div>
      </section>

      {/* ENTREPRENEUR FAQS */}
      <section className="bg-[#FAF8F1] py-12 border-y border-[#C8A75B]/15 max-w-full">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-left space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-widest text-[#C8A75B] font-bold block">SOALAN LAZIM RAKAN NIAGA</span>
            <h2 className="font-serif text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-center text-[#1F1F1F] font-bold leading-tight">FAQ Sistem Perniagaan</h2>
            <div className="w-16 h-[1.5px] bg-[#C8A75B] mx-auto mt-3" />
          </div>

          <div className="space-y-5">
            {[
              { q: "Adakah terdapat yuran sembunyi atau yuran tahunan?", a: "Tiada yuran pendaftaran tersembunyi, syarat paksaan pembelian bulanan, atau kos tahunan dalam program Dropship atau Ejen kami. Kerjasama dirumus murni atas aktiviti perdagangan produk botani." },
              { q: "Bagaimanakan sistem penghantaran dropship diuruskan?", a: "Selepas menerima bayaran runcit langsung daripada pelanggan, anda hanya perlu menyerahkan pesanan kepada kami. HQ akan membungkus dan mengepos terus item di bawah nama anda." },
              { q: "Adakah produk sedia ada diiktiraf?", a: "Ya, kami melampirkan dokumentasi rujukan, laporan ujian makmal, serta jaminan tiada campuran logam berat berbahaya bagi memastikan keyakinan runcit rakan niaga disandarkan hujah yang kukuh." },
              { q: "Saya tiada pengalaman berniaga, adakah saya boleh berjaya?", a: "Hasil bergantung sepenuhnya kepada usaha dan konsistensi anda. Kami menyediakan template teks dan modul bimbingan harian yang sangat mesra pengguna di mana anda hanya perlu kongsikan bersama kenalan." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#C8A75B]/15 p-5 sm:p-6 rounded-2xl space-y-2 px text-left shadow-sm hover:border-[#C8A75B] transition-all duration-300">
                <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-neutral-900 flex items-center gap-3.5 leading-snug">
                  <CheckCircle size={16} className="text-[#C8A75B] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-[13px] sm:text-[14px] text-neutral-800 font-normal pl-7 leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL JOIN CTA */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-[#1F1F1F] text-white border border-[#C8A75B]/25 rounded-2xl p-5 sm:p-8 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="font-serif text-[16px] sm:text-[18px] text-white font-bold leading-tight">Ulang Langkah Usahawan Secara Selamat</h3>
          <p className="font-sans text-[12px] sm:text-[13px] text-neutral-300 max-w-xl mx-auto font-normal leading-[1.6]">
            Sertai perjalanan perdagangan telus bersama keluarga niaga AquivaGold hari ini. Kami komited membantu membina kemahiran niaga runcit anda.
          </p>

          <button
            onClick={() => handleWhatsAppJoin("Pendaftaran Fleksibel", "Klik Pertanyaan Am")}
            className="cursor-pointer inline-flex h-[48px] sm:h-[52px] px-8 bg-[#C8A75B] hover:bg-white hover:text-[#1F1F1F] text-[#1F1F1F] text-[14px] sm:text-[15px] uppercase tracking-wider font-extrabold transition-all duration-300 rounded-lg items-center justify-center shadow-lg"
          >
            Hubungi HQ Melalui WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
}
