import React, { useState } from "react";
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  ShoppingBag, 
  Truck, 
  Users, 
  Sparkles,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  id: string;
  category: "produk" | "pembelian" | "usahawan";
  question: string;
  answer: string;
}

export default function FAQView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"semua" | "produk" | "pembelian" | "usahawan">("semua");
  const [openId, setOpenId] = useState<string | null>(null);

  const faqsList: FAQItem[] = [
    // Produk
    {
      id: "p1",
      category: "produk",
      question: "Apakah sebenarnya kebaikan Black Millenia Water (BMW)?",
      answer: "Black Millenia Water (BMW) diformulasikan daripada ekstrak botani semulajadi tulen untuk menyokong rutin penjagaan diri harian anda. Ia melengkapkan hidrasi serta merta secara semulajadi tanpa kimia tambahan tegar."
    },
    {
      id: "p2",
      category: "produk",
      question: "Adakah terdapat sebarang kesan sampingan berbahaya?",
      answer: "Tidak. Rangkaian produk AQUIVA GOLD melepasi ujian analisis analitis makmal bebas bertauliah (COA) bagi mengesahkan ia sifar kandungan merkuri, paraben, sebatian steroid, atau logam pencemaran berat."
    },
    {
      id: "p3",
      category: "produk",
      question: "Siapa yang paling sesuai mengamalkan Black Millenia Water (BMW) Drop?",
      answer: "Black Millenia Water (BMW) Drop sesuai untuk individu dewasa aktif yang mengutamakan kelengkapan sokongan kesihatan dalaman berasaskan herba herba premium semula jadi terpelihara."
    },
    // Pembelian & Penghantaran
    {
      id: "d1",
      category: "pembelian",
      question: "Bagaimanakah sistem tempahan rasmi ini dijalankan?",
      answer: "Melalui talian rundingan butik WhatsApp rasmi syarikat. Klik mana-mana pautan di laman ini, dan perunding peribadi akan melayani perihal bungkusan hiasan, pengesahan alamat, dan pautan invois selamat."
    },
    {
      id: "d2",
      category: "pembelian",
      question: "Berapa lamakah tempoh penghantaran bungkusan kurier?",
      answer: "Kurier ekspres mengambil masa kurang 24 jam untuk sekitar Kuala Lumpur dan Selangor selepas kelulusan tempoh semakan, manakala kawasan semenanjung lain serta Sabah Sarawak mengambil masa 2-3 hari bekerja."
    },
    {
      id: "d3",
      category: "pembelian",
      question: "Adakah kurier disertakan perlindungan insurans premium?",
      answer: "Ya, setiap kotak hadiah bertali satin AQUIVA GOLD Black Millenia Water (BMW) dibungkus rapi dalam lapisan pelindung sekunder tebal, lengkap dengan pengesahan digital insurans melingkari nilai kargo."
    },
    // Program Rakan Niaga
    {
      id: "u1",
      category: "usahawan",
      question: "Apakah kelayakan untuk menyertai program usahawan Dropship?",
      answer: "Tiada syarat berat. Program pemula Dropship kami adalah sepenuhnya sifar komitmen simpan stok. Sesuai untuk usahawan rumah, pelajar, atau pengamal media sosial yang mahu menambah keuntungan harian."
    },
    {
      id: "u2",
      category: "usahawan",
      question: "Bolehkah saya menaik taraf daripada Dropship kepada Stokis?",
      answer: "Sangat dialu-alukan. Pihak pentadbiran agensi kami menilai prestasi jualan dwi-bulanan, dan sedia mencadangkan kuota agihan stokis wilayah berdiskaun tinggi diletakkan di bawah pengurusan anda."
    },
    {
      id: "u3",
      category: "usahawan",
      question: "Adakah bahan grafik pengiklanan dikemas kini?",
      answer: "Ya, saluran Telegram Rakan Niaga kami dikemas kini setiap pagi dengan video, testimoni dipercayai, risalah makmal bertauliah, dan hantaran poster bersesuaian dengan reka bentuk kempen semasa."
    }
  ];

  // Filtering based on Search & Category tabs
  const filteredFaqs = faqsList.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "semua" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-10 pb-12">
      
      {/* HERO BANNER */}
      <section className="bg-[#FAF8F5] py-12 sm:py-14 border-b border-[#B58D20]/15 text-center max-w-full">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 space-y-2.5">
          <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">PUSAT BANTUAN LAYANAN</span>
          <h1 className="text-h1 text-[#1A1A1A]">
            Soalan Lazim (FAQ)
          </h1>
          <p className="text-body text-[#4A4A4A] max-w-2xl mx-auto">
            Mencari maklum balas pantas? Kami telah mengumpulkan soalan ringkas yang sering dikongsikan oleh ejen dan pelanggan butik kami yang bernilai tinggi.
          </p>
          <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
        </div>
      </section>

      {/* FILTER SEARCH CRITERIA */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="bg-white border border-[#B58D20]/20 p-5 rounded-xl space-y-5 max-w-4xl mx-auto">
          
          {/* Real-time search filter bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" size={16} />
            <input
              type="text"
              placeholder="Cari soalan anda di sini..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#B58D20]/20 focus:border-[#B58D20] focus:outline-none rounded-lg text-xs sm:text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 font-medium"
            />
          </div>

          {/* Categorized Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "semua", label: "Semua Kategori", icon: Award },
              { id: "produk", label: "Rangkaian Produk", icon: Sparkles },
              { id: "pembelian", label: "Cara Beli & Kurier", icon: ShoppingBag },
              { id: "usahawan", label: "Program Rakan Niaga", icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as any);
                  setOpenId(null);
                }}
                className={`cursor-pointer px-4 py-1.5 rounded-full border text-[10px] uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  activeCategory === tab.id
                    ? "bg-[#1A1A1A] text-white border-transparent"
                    : "bg-white text-[#1A1A1A]/60 border-[#B58D20]/20 hover:border-[#B58D20] hover:text-[#1A1A1A]"
                }`}
              >
                <tab.icon size={10} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ACCORDION INTERFACE ZONE */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 space-y-3.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white border border-[#B58D20]/15 rounded-xl overflow-hidden transition-all duration-300 shadow-xs hover:border-[#B58D20]/45"
              >
                {/* Accordion header line */}
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="cursor-pointer w-full p-4 text-left flex items-start justify-between gap-4.5"
                >
                  <div className="flex gap-2.5">
                    <HelpCircle className="text-[#B58D20] shrink-0 mt-0.5" size={16} />
                    <span className="font-serif text-sm sm:text-[15px] font-bold text-[#1A1A1A]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    size={15} 
                    className={`text-[#B58D20] transition-transform duration-300 shrink-0 mt-1 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                {/* Smooth slider element */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-4 pb-4 pt-0.5 border-t border-[#EFEAE2] text-xs sm:text-[13px] text-[#4A4A4A] leading-relaxed font-normal pl-9 bg-[#FAF8F5]/45">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 space-y-1.5">
            <p className="font-serif text-base text-[#1A1A1A]/50 font-bold">Tiada Soalan Menepati Carian Anda</p>
            <p className="text-xs text-[#1A1A1A]/40 max-w-xs mx-auto">Cuba gunakan kata kunci ringkas alternatif seperti &lsquo;bateri&rsquo; atau &lsquo;penghantaran&rsquo;.</p>
          </div>
        )}
      </section>

      {/* FOOTER CALL FOR SUPPORT */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="bg-[#1A1A1A] text-white border border-[#B58D20]/25 rounded-xl p-6 text-center max-w-2xl mx-auto space-y-5 shadow-xl">
          <h3 className="font-serif text-base sm:text-xl text-white font-medium">Masih Mempunyai Sebarang Musykil?</h3>
          <p className="font-sans text-[12.5px] sm:text-[13px] text-neutral-300 max-w-md mx-auto font-normal leading-relaxed">
            Jika panduan ringkas di atas masih tidak menjawab pertanyaan tersendiri anda, hubungi perunding butik utama kami secara peribadi harian talian.
          </p>

          <a
            href="https://wa.me/60176087696?text=Hi%20AQUIVA%20GOLD%2C%20saya%20mempunyai%20soalan%20berkenaan%20Koleksi%20Black%20Millenia."
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex h-[44px] px-6 bg-[#B58D20] hover:bg-white hover:text-[#1A1A1A] text-white hover:border-[#B58D20] text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-lg items-center justify-center shadow-lg pb-0.5"
          >
            HUBUNGI SAYA DI WHATSAPP
          </a>
        </div>
      </section>

    </div>
  );
}
