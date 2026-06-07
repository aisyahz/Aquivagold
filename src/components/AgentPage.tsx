import React, { useState } from "react";
import { ShieldCheck, ArrowRight, CheckCircle2, DollarSign, BookOpen, Users, HelpCircle, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

interface AgentPageProps {
  onBackToHome: () => void;
}

export default function AgentPage({ onBackToHome }: AgentPageProps) {
  const [activeTab, setActiveTab] = useState<"dropship" | "agent" | "stokis">("dropship");

  // WhatsApp helper for specific program
  const handleRegisterWhatsApp = (program: string) => {
    const greeting = "Hi Aquvia Gold,\n\n";
    const body = `Saya berminat untuk menyertai Program *${program}* Aquvia Gold.\n\nBoleh saya tahu cara pendaftaran dan maklumat lanjut?\n\n`;
    const footer = "Terima kasih.";
    const fullMessage = greeting + body + footer;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/601139900920?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const programs = {
    dropship: {
      title: "Program Dropship",
      badge: "Kemasukan Mudah & Tanpa Modal",
      earnings: "RM 500 - RM 2,000+ Sebulan (Komisyen 10% - 15%)",
      desc: "Sesuai untuk suri rumah, pekerja yang ingin pendapatan sampingan, atau pemula yang tidak mahu memegang stok.",
      benefits: [
        "Sifar Modal — Tidak perlu membeli atau menyimpan sebarang stok.",
        "Bahan Pemasaran Disediakan — Gambar, video promosi & testimoni sedia diguna.",
        "Penghantaran Diuruskan — Kami hantar produk terus kepada pelanggan anda.",
        "Latihan Asas Percuma — Bimbingan cara menjual di WhatsApp & media sosial."
      ],
      requirements: [
        "Warganegara Malaysia berumur 18 tahun ke atas.",
        "Mempunyai telefon pintar dan aplikasi WhatsApp yang aktif.",
        "Komited untuk mempromosikan produk secara konsisten."
      ],
      faq: [
        {
          q: "Adakah saya perlu membayar apa-apa yuran pendaftaran?",
          a: "Tidak, yuran pendaftaran dropship adalah PERCUMA sepenuhnya untuk masa terhad."
        },
        {
          q: "Bagaimanakah sistem komisyen berfungsi?",
          a: "Anda mengambil tempahan daripada pelanggan pada harga penuh, hantarkan bahagian harga dropship kepada kami, dan anda terus simpan baki sebagai keuntungan bersih."
        }
      ]
    },
    agent: {
      title: "Program Agent",
      badge: "Peluang Pendapatan Progresif",
      earnings: "RM 2,000 - RM 8,000+ Sebulan (Keuntungan Kasar 25% - 35%)",
      desc: "Sesuai untuk usahawan mikro, pekerja swasta, pesara, atau sesiapa sahaja yang bersedia untuk menyimpan sedikit stok bagi keuntungan yang lebih tinggi.",
      benefits: [
        "Keuntungan Lumayan — Diskaun borong eksklusif yang membolehkan margin tinggi.",
        "Bahan Marketing Premium — Akses eksklusif ke folder kreatif resolusi tinggi.",
        "Sistem Sokongan Rapat — Bimbingan langsung cara penutupan jualan (closing), teknik hantaran WhatsApp, dan pengiklanan.",
        "Hadiah & Insentif — Layak menerima bonus bulanan dan anugerah berdasarkan prestasi jualan."
      ],
      requirements: [
        "Modal permulaan rendah (pembelian minimum stok permulaan berkelayakan).",
        "Mempunyai minat mendalam dalam industri kesihatan & kesejahteraan diri.",
        "Sedia dibimbing dan aktif menyertai sesi taklimat mingguan."
      ],
      faq: [
        {
          q: "Berapakah pembelian minimum untuk menjadi Agent?",
          a: "Anda hanya perlu membuat pembelian minimum 5 unit produk pilihan pada harga borong agent untuk pengaktifan akaun."
        },
        {
          q: "Adakah kawasan jualan saya dihadkan?",
          a: "Tidak, anda bebas mempromosikan produk di seluruh Malaysia termasuk Sabah & Sarawak secara atas talian atau bersemuka."
        }
      ]
    },
    stokis: {
      title: "Program Stokis",
      badge: "Usahawan Elit & Hak Wilayah",
      earnings: "RM 8,000 - RM 25,000+ Sebulan (Margin Keuntungan Maksimum 40%+)",
      desc: "Direka khas untuk pemilik Spa, klinik kesejahteraan, atau usahawan berpengalaman yang bersedia mendominasi pasaran wilayah mereka.",
      benefits: [
        "Margin Keuntungan Tertinggi — Akses harga kilang terus dengan pulangan ROI maksimum.",
        "Rujukan Pelanggan — Kami sedia menyalurkan senarai ejen dan pelanggan berdekatan wilayah anda terus kepada anda.",
        "Bahan Iklan Eksklusif — Bahan kreatif tersuai dengan penstrukturan nama anda sebagai stokis utama wilayah.",
        "Rundingan Strategik — Akses bimbingan 1-on-1 terus daripada pihak pengurusan Aquvia Gold."
      ],
      requirements: [
        "Bersedia membuat pembelian stok secara bulk (borong skala besar) mengikut kuota wilayah.",
        "Mempunyai tempat penyimpanan stok yang sesuai dan selamat.",
        "Boleh menguruskan penghantaran atau sistem pengumpulan ejen kecil di bawah anda."
      ],
      faq: [
        {
          q: "Adakah kuota Stokis dalam sesebuah kawasan dihadkan?",
          a: "Ya, kami mengehadkan bilangan stokis bagi setiap daerah/wilayah dalam Malaysia untuk mengelakkan persaingan tidak sihat dan menjaga kebajikan anda."
        },
        {
          q: "Adakah terdapat dokumen perjanjian rasmi?",
          a: "Ya, setiap pelantikan Stokis akan disertakan dengan kontrak bertulis rasmi yang sah bagi menjamin hak pengedaran premium anda."
        }
      ]
    }
  };

  const selectedPrg = programs[activeTab];

  return (
    <div className="bg-[#FAF8F3] min-h-screen pt-28 pb-20 text-charcoal font-sans" id="agent-container">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Navigation Indicator & Back Button (Large for easy clicking) */}
        <button
          onClick={onBackToHome}
          className="group mb-8 inline-flex items-center space-x-2 text-xs md:text-sm uppercase tracking-widest text-[#C9A227] font-semibold hover:text-charcoal transition-colors duration-300 cursor-pointer min-h-[44px] px-3 border border-stone/20 rounded-md bg-white/40"
          id="back-to-home-btn"
        >
          <ArrowLeft size={16} className="text-gold transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Kembali ke Laman Utama</span>
        </button>

        {/* Dynamic Premium Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold block mb-2">
            Peluang Keusahawanan Elit
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal mb-4">
            Sertai Keluarga Niaga <br className="hidden sm:inline" />
            <span className="italic font-light text-gold text-2xl sm:text-3xl md:text-4xl block mt-1">Aquvia Gold Malaysia</span>
          </h1>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mb-4" />
          <p className="text-xs md:text-sm text-charcoal-light font-light max-w-xl mx-auto leading-relaxed">
            Mulakan perniagaan murni berasaskan inovasi kesihatan dan kesejahteraan semula jadi premium. Bebas skim MLM, bimbingan terus usahawan sebenar & telus.
          </p>
        </div>

        {/* Large, Easy-to-Tap Program Tab Selector (Responsive for older users) */}
        <div className="grid grid-cols-3 gap-2.5 max-w-2xl mx-auto mb-10" id="program-tabs">
          {(Object.keys(programs) as Array<keyof typeof programs>).map((key) => {
            const prg = programs[key];
            const isTabActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-4 px-2 md:px-4 text-center border rounded-xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center min-h-[70px] ${
                  isTabActive
                    ? "bg-charcoal border-gold text-white shadow-md scale-[1.02]"
                    : "bg-white/60 border-stone/50 hover:border-gold/60 text-charcoal hover:bg-white"
                }`}
                id={`tab-program-${key}`}
              >
                <span className="text-xs uppercase tracking-widest font-bold">
                  {key === "dropship" ? "Dropship" : key === "agent" ? "Agent" : "Stokis"}
                </span>
                <span className={`text-[9px] mt-1 font-light tracking-wide uppercase ${isTabActive ? "text-gold" : "text-charcoal-light/70"}`}>
                  {key === "dropship" ? "Sifar Modal" : key === "agent" ? "Untung Sederhana" : "Eksklusif Wilayah"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dedicated Program Section Container with Glassmorphism */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel bg-[#FAF8F3]/90 border border-gold/30 rounded-2xl shadow-xl p-6 md:p-10 space-y-8 luxury-shadow relative overflow-hidden"
          id="active-program-card"
        >
          {/* Accent Gold Corner Sparkle line */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />

          {/* Section 1: Intro Summary */}
          <div className="border-b border-stone/30 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-left">
              <span className="text-[10px] bg-[#EFEAE2] text-[#C9A227] font-semibold uppercase tracking-widest px-3 py-1 rounded font-display inline-block mb-2">
                {selectedPrg.badge}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal">
                {selectedPrg.title}
              </h2>
              <p className="text-xs md:text-sm text-charcoal-light font-light max-w-xl mt-1.5 leading-relaxed">
                {selectedPrg.desc}
              </p>
            </div>

            {/* Income Potential Badge */}
            <div className="bg-[#FAF8F3] border border-gold/40 rounded-xl p-4 text-left md:text-right shrink-0 max-w-sm flex items-center space-x-3 md:space-x-4 md:flex-row-reverse">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <DollarSign size={20} className="text-gold" />
              </div>
              <div className="md:mr-2">
                <span className="text-[9px] text-charcoal-light block uppercase tracking-wider font-semibold">Anggaran Pendapatan Sebulan</span>
                <span className="font-serif text-lg md:text-xl font-bold text-charcoal">{selectedPrg.earnings}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Split Grid (Benefits & Requirements) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Kelebihan (Benefits) */}
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-2 text-gold">
                <CheckCircle2 size={18} />
                <h3 className="font-serif text-base font-semibold uppercase tracking-wider text-charcoal">
                  Kelebihan Eksklusif Anda
                </h3>
              </div>
              <ul className="space-y-3">
                {selectedPrg.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs md:text-sm text-charcoal-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Syarat-syarat (Requirements) */}
            <div className="space-y-4 text-left border-t md:border-t-0 md:border-l border-stone/30 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center space-x-2 text-gold">
                <ShieldCheck size={18} />
                <h3 className="font-serif text-base font-semibold uppercase tracking-wider text-charcoal">
                  Syarat Kelayakan
                </h3>
              </div>
              <ul className="space-y-3">
                {selectedPrg.requirements.map((req, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs md:text-sm text-charcoal-light leading-relaxed">
                    <CheckCircle2 size={14} className="text-gold shrink-0 mt-1" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: WhatsApp Action Call */}
          <div className="bg-[#EFEAE2]/30 p-6 rounded-xl border border-stone/50 text-center space-y-4">
            <p className="text-xs md:text-sm text-charcoal font-medium max-w-lg mx-auto">
              Sedia menjana pendapatan bersama kami? Klik butang di bawah untuk membuka perbualan WhatsApp terus ke pengurus niaga kami. Kami akan membimbing anda langkah-demi-langkah.
            </p>
            <button
              onClick={() => handleRegisterWhatsApp(selectedPrg.title)}
              className="cursor-pointer inline-flex items-center justify-center space-x-2 py-3.5 px-8 bg-charcoal hover:bg-charcoal-light text-white text-xs md:text-sm uppercase tracking-widest font-bold rounded shadow-lg transition-all duration-300 min-h-[46px]"
              id={`register-whatsapp-${activeTab}`}
            >
              <span>Daftar {selectedPrg.title} Sekarang</span>
              <ArrowRight size={14} className="text-gold" />
            </button>
            <span className="block text-[10px] text-charcoal-light/60">
              ⚡ Tiada sebarang borang rumit. Rundingan mesra dilesenkan terus oleh ibu pejabat.
            </span>
          </div>

          {/* Section 4: Program FAQs Accordion */}
          <div className="border-t border-stone/30 pt-6 space-y-4 text-left">
            <div className="flex items-center space-x-2 text-gold">
              <HelpCircle size={18} />
              <h3 className="font-serif text-base font-semibold uppercase tracking-wider text-charcoal">
                Soalan Lazim Program
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedPrg.faq.map((f, i) => (
                <div key={i} className="bg-white/40 p-4 border border-stone/30 rounded-lg space-y-1">
                  <span className="font-serif text-xs md:text-sm font-semibold text-charcoal block">
                    Q: {f.q}
                  </span>
                  <p className="text-xs text-charcoal-light font-light leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Global Support / Guidance Footer Banner */}
        <div className="mt-12 bg-[#FAF8F3] border border-dashed border-gold/40 rounded-xl p-6 text-center space-y-3">
          <h4 className="font-serif text-base font-semibold text-charcoal">
            Hubungi Penyelia Jualan Kami
          </h4>
          <p className="text-xs text-charcoal-light font-light max-w-md mx-auto">
            Masih kurang pasti pilihan program mana yang serasi dengan matlamat kewangan serta masa anda? Hubungi talian bantuan niaga kami untuk cadangan terbaik.
          </p>
          <button
            onClick={() => handleRegisterWhatsApp("Pertanyaan Am Usahawan")}
            className="cursor-pointer text-xs uppercase tracking-widest font-bold text-[#C9A227] hover:text-charcoal transition-all inline-flex items-center space-x-1 underline min-h-[44px]"
            id="general-partner-inquiry"
          >
            <span>Bincang Alternatif Lain</span>
            <ArrowRight size={12} className="no-underline text-gold" />
          </button>
        </div>

      </div>
    </div>
  );
}
