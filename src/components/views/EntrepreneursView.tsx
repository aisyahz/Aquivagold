import React from "react";
import { 
  Users, 
  HelpCircle, 
  TrendingUp, 
  BookOpen, 
  CheckCircle, 
  ArrowRight, 
  Gift, 
  Sparkles, 
  DollarSign, 
  Briefcase 
} from "lucide-react";

export default function EntrepreneursView() {

  const handleWhatsAppJoin = (role: string) => {
    const text = `Hi Aquiva Gold, saya berminat untuk menyertai program usahawan premium sebagai *${role}*. Boleh berikan maklumat pendaftaran?`;
    window.open(`https://wa.me/601139900920?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-32 pb-24">
      
      {/* HERO BANNER */}
      <section className="bg-[#FAF8F1] py-24 border-b border-[#C8A75B]/15 text-center max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-4">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">PELUANG RAKAN NIAGA</span>
          <h1 className="font-serif text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
            Sertai Usahawan Aquiva Gold
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#1F1F1F]/60 max-w-2xl mx-auto leading-[1.8]">
            Membina empayar perniagaan anda sendiri dengan menyandarkan jenama penjagaan diri paling eksklusif, dipandu langkah demi langkah oleh pelan pemasaran digital terkini.
          </p>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
        </div>
      </section>

      {/* WHY JOIN US CARDS */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-16">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-[#1F1F1F] font-medium tracking-tight leading-tight">Mengapa Sertai Rangkaian Kami?</h2>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {[
            { title: "Produk Premium Elit", desc: "Produk visual bertaraf antarabangsa, memudahkan proses pikat mata pandangan prospek.", icon: Briefcase },
            { title: "Sokongan Pemasaran", desc: "Video profesional sedia hantar, bahan grafik harian berkualiti tinggi percuma.", icon: Sparkles },
            { title: "Permintaan Pasaran", desc: "Keperluan harian organik tanpa bahan keras terus berkembang pesat dalam komuniti.", icon: TrendingUp },
            { title: "Bimbingan Pasukan", desc: "Latihan rundingan modul bertulis sedia digunapakai oleh sesiapa sahaja tanpa pengalaman.", icon: BookOpen },
            { title: "Peluang Berkembang", desc: "Struktur ganjaran adil bermula dari peruncit dropship hingga pemegang francais negeri.", icon: DollarSign }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#FBF8F1] border border-[#C8A75B]/15 rounded-[1.5rem] p-6 sm:p-8 text-left flex flex-col justify-between hover:border-[#C8A75B] hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="text-[#C8A75B] p-3 bg-white inline-block rounded-xl border border-[#C8A75B]/10">
                  <item.icon size={24} />
                </div>
                <h3 className="font-serif text-[16px] sm:text-[18px] font-bold text-[#1F1F1F]">{item.title}</h3>
                <p className="font-sans text-[14px] sm:text-[15px] text-[#1F1F1F]/70 leading-[1.8] font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP OPTIONS (Dropship vs Agent) */}
      <section className="bg-[#FAF8F1] py-24 border-y border-[#C8A75B]/15 max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-16">
          
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-[#C8A75B] font-bold block">PILIHAN PENYERTAAN SESUAI TAHAP</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-[#1F1F1F] font-medium tracking-tight leading-tight">Pilihan Pakej Niaga</h2>
            <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* DROPSHIP */}
            <div className="bg-white border-2 border-[#C8A75B]/15 hover:border-[#C8A75B] rounded-[2rem] p-10 sm:p-12 text-left flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                <div className="border-b border-[#EFEAE2] pb-6">
                  <span className="text-[12px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">PROGRAM PEMULA</span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#1F1F1F]">Dropship</h3>
                  <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/65 mt-2 font-light">Sesuai untuk memulakan jualan santai tanpa mengambil risiko stok.</p>
                </div>

                <ul className="space-y-4 font-sans text-[15px] sm:text-[16px] text-[#1F1F1F]/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-1" />
                    <span><strong>Sifar Simpan Stok:</strong> Kami membungkus &amp; menghantar terus ke alamat pelanggan anda.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-1" />
                    <span><strong>Keuntungan Mudah:</strong> Komisen jualan dikreditkan terus mengikut unit tempahan rasmi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-1" />
                    <span><strong>Bahan Iklan Disediakan:</strong> Akses penuh visual bertali satin premium sedia muat turun harian.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppJoin("Dropship")}
                className="cursor-pointer w-full h-[54px] bg-white border-2 border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-lg mt-10 text-center flex items-center justify-center shadow-sm"
              >
                Daftar Dropship Utama
              </button>
            </div>

            {/* AGENT */}
            <div className="bg-white border-2 border-[#C8A75B]/35 hover:border-[#C8A75B] rounded-[2rem] p-10 sm:p-12 text-left flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative">
              <div className="absolute top-6 right-6 bg-[#C8A75B] text-white text-[10px] sm:text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded">
                POPULAR
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-[#EFEAE2] pb-6">
                  <span className="text-[12px] uppercase tracking-widest text-[#C8A75B] font-bold block mb-1">PROGRAM PERTUMBUHAN</span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#1F1F1F]">Agent Berdaftar</h3>
                  <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/65 mt-2 font-light">Sesuai untuk membina perniagaan serantau yang serius dan aktif.</p>
                </div>

                <ul className="space-y-4 font-sans text-[15px] sm:text-[16px] text-[#1F1F1F]/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-1" />
                    <span><strong>Diskaun Borong Tinggi:</strong> Margin keuntungan besar serta ganjaran bonus tri-bulanan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-1" />
                    <span><strong>Binaan Pelanggan Setia:</strong> Diberikan hak pengedaran wilayah terpilih bagi melindungi pasaran.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C8A75B] shrink-0 mt-1" />
                    <span><strong>Sesi Bimbingan Peribadi:</strong> Webinar eksklusif bersama penceramah perwakilan rasmi jenama.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppJoin("Agent")}
                className="cursor-pointer w-full h-[54px] bg-[#1F1F1F] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-lg mt-10 text-center flex items-center justify-center shadow-lg"
              >
                Saya Mahu Menjadi Agent
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* STEPS TO JOIN */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-16">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-[#C8A75B] font-bold block">MEMULAKAN LANGKAH MUDAH</span>
          <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-[#1F1F1F] font-medium tracking-tight leading-tight">4 Langkah Memulakan Perniagaan</h2>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {[
            { step: "01", title: "Hubungi & Klik WhatsApp", p: "Tekan butang daftar untuk memulakan perbualan ringkas bersama perunding pendaftaran niaga kami." },
            { step: "02", title: "Dapatkan Bimbingan Profil", p: "Kami berkongsi visual pakej promosi, maklumat harga borong, dan jadual agihan wilayah secara teratur." },
            { step: "03", title: "Mula Pengiklanan Mudah", p: "Gunakan bahan visual harian, copywriters menarik, serta video premium di status media sosial anda." },
            { step: "04", title: "Bina Rangkaian Pelanggan", p: "Kumpul keuntungan, hantar butiran pesanan, dan mula membina rekod pelanggan setia yang konsisten." }
          ].map((item, idx) => (
             <div key={idx} className="bg-white border border-[#C8A75B]/20 rounded-[2rem] p-8 text-left space-y-4 relative shadow-sm hover:border-[#C8A75B] transition-all duration-300">
               <div className="font-serif text-[36px] sm:text-[42px] font-bold text-[#C8A75B]/35">{item.step}</div>
               <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1F1F1F]">{item.title}</h3>
               <p className="text-[14px] sm:text-[15px] text-[#1F1F1F]/70 leading-[1.8] font-light">{item.p}</p>
             </div>
          ))}
        </div>
      </section>

      {/* ENTREPRENEUR FAQS */}
      <section className="bg-[#FAF8F1] py-24 border-y border-[#C8A75B]/15 max-w-full">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-left space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-[#C8A75B] font-bold block">SOALAN USUR LAZIM RAKAN NIAGA</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-center text-[#1F1F1F] font-bold leading-tight">FAQ Usahawan AquivaGold</h2>
            <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            {[
              { q: "Adakah penyertaan Dropship dikenakan yuran bulanan?", a: "Tidak. Yuran pendaftaran Dropship adalah sifar dan tiada kos pegangan tahunan yang tersirat. Anda hanya perlu rajin mempromosikan produk sah." },
              { q: "Bagaimana cara saya mendapatkan bahan pemasaran berkualiti mewah?", a: "Sebaik sahaja pendaftaran anda diluluskan, anda akan dimasukkan ke dalam saluran Telegram Rasmi kami yang mengandungi beratus gambar beresolusi tinggi, reka bentuk poster, video peraga, serta bimbingan teks copywriting harian." },
              { q: "Adakah bimbingan diberikan sekiranya saya tidak pernah berniaga?", a: "Sudah tentu. Kami komited membimbing pemula. Ketua agensi kami akan berkongsi bimbingan peribadi bagaimana menukar rundingan pertama menjadi tempahan sahih." },
              { q: "Bagaimana pendaftaran rasmi disahkan?", a: "Sila klik mana-mana butang sertai di halaman ini untuk terus berhubung dengan kakitangan kami melalui WhatsApp bagi menjamin pengisian pangkalan data usahawan." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#C8A75B]/15 p-6 sm:p-8 rounded-[1.5rem] space-y-3 shadow-sm hover:border-[#C8A75B] transition-all duration-300">
                <h4 className="font-serif text-[16px] sm:text-[18px] font-bold text-[#1F1F1F] flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#C8A75B]" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-[15px] sm:text-[16px] text-[#1F1F1F]/70 font-light pl-7 leading-[1.8]">{faq.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL JOIN CTA */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-[#1F1F1F] text-white border border-[#C8A75B]/25 rounded-[3rem] p-10 sm:p-16 text-center max-w-3xl mx-auto space-y-8 shadow-2xl">
          <h3 className="font-serif text-[26px] sm:text-[30px] text-white font-medium leading-tight">Mulakan Langkah Niaga Selamat Anda</h3>
          <p className="font-sans text-[15px] sm:text-[17px] text-white/70 max-w-xl mx-auto font-light leading-[1.8]">
            Sertai keluarga besar kami hari ini dan mulakan perkongsian kesejahteraan premium ini bersama rangkaian kenalan berdekatan anda.
          </p>

          <button
            onClick={() => handleWhatsAppJoin("Pemula")}
            className="cursor-pointer inline-flex h-[54px] sm:h-[58px] px-10 bg-[#C8A75B] hover:bg-white hover:text-[#1F1F1F] text-[#1F1F1F] text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all duration-300 rounded-md items-center justify-center shadow-lg"
          >
            Sertai Sekarang Melalui WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
}
