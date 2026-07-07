import React from "react";
import { 
  Award, 
  MapPin, 
  Compass, 
  Eye, 
  CheckCircle, 
  BookOpen, 
  Sparkles, 
  Heart,
  Calendar,
  Layers,
  Check
} from "lucide-react";
import PlaceholderImage from "../PlaceholderImage";

export default function AboutView() {
  
  return (
    <div className="space-y-12 pb-12">
      
      {/* HERO BANNER */}
      <section className="relative bg-[#FAF8F5] py-12 sm:py-14 border-b border-[#B58D20]/15 text-center max-w-full">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 space-y-2.5">
          <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">MENGENALI WARISAN BRAND</span>
          <h1 className="text-h1 text-[#1A1A1A]">
            Tentang AQUIVA GOLD
          </h1>
          <p className="text-body text-[#4A4A4A] max-w-2xl mx-auto">
            Menelusuri sejarah penubuhan syarikat, prinsip kemurnian botani murni, dan falsafah kesejahteraan bertaraf butik ultra-premium yang memacu legasi kami.
          </p>
          <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
        </div>
      </section>

      {/* CORE BRAND STORY AND VISUAL */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Brand profile placeholder left */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#B58D20]/5 rounded-3xl filter blur-xl pointer-events-none" />
            
            {/* Elegant luxury presentation of botanical spa preview */}
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm mx-auto">
              <PlaceholderImage 
                label="Aura Kesejahteraan Botani" 
                imageUrl="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2400&q=80" 
                aspect="aspect-[4/5] rounded-xl" 
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#B58D20]/25 p-4 rounded-xl hidden sm:flex items-center gap-3.5 shadow-md max-w-xs text-left z-20">
                <div className="text-[#B58D20]"><Sparkles size={24} /></div>
                <div>
                  <h4 className="font-serif text-[14px] sm:text-[15px] font-bold text-[#1A1A1A]">Ritual Kesejahteraan</h4>
                  <p className="text-[12px] text-[#4A4A4A] mt-0.5">Estetika kemewahan semulajadi diyakini ramai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Text details right */}
          <div className="lg:col-span-11 xl:col-span-7 text-left space-y-5">
            <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.25em] text-[#B58D20] font-bold block">CERITA DI SEBALIK NAMA</span>
            <h2 className="text-h2 text-[#1A1A1A]">Kisah Pengasasan Kami</h2>
            
            <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-normal">
              AQUIVA GOLD Black Millenia diasaskan atas dedikasi mendalam terhadap penemuan rahsia alam semula bagi membantu menyokong kesejahteraan rohani dan jasmani yang seimbang. Menyedari bahawa lambakan pengeluaran kosmetik dan terapi moden dipenuhi aromatik tiruan sintetik keras yang membebankan sistem metabolisme tubuh, pengasas kami memulakan ekspedisi saintifik botani harian untuk menapis intisari cecair yang paling suci.
            </p>

            <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-normal">
              Melalui gabungan siri pembersihan berkala dan teknologi ekstraksi sejuk, lahirlah rangkaian <strong>Black Millenia Water (BMW)</strong>—penulisan semula kepada falsafah penjagaan kesihatan butik premium yang telus, diyakini laporan analisis COA makmal penuh, bebas daripada paraben keras, merkuri logam, ataupun toksik.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-[#EFEAE2]">
              <div className="space-y-1.5">
                <span className="text-[11.5px] sm:text-[13px] uppercase tracking-widest text-[#B58D20] font-bold block">VISI SYARIKAT</span>
                <p className="text-[12.5px] sm:text-[13px] text-[#4A4A4A] leading-relaxed font-normal">
                  Menjadi peneraju butik penjagaan diri gred premium yang dihormati di seluruh Asia Tenggara menjelang tahun 2030 melalui pembuktian integriti dokumen saintifik yang telus.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11.5px] sm:text-[13px] uppercase tracking-widest text-[#B58D20] font-bold block">MISI UTAMA</span>
                <p className="text-[12.5px] sm:text-[13px] text-[#4A4A4A] leading-relaxed font-normal">
                  Menawarkan bimbingan rundingan kesihatan peribadi dwi-bahasa berkualiti tinggi bagi membantu setiap individu melengkapkan gaya hidup sihat yang teratur.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TIMELINE OF LUXURY */}
      <section className="bg-[#FAF8F5] py-10 sm:py-14 lg:py-16 border-y border-[#B58D20]/15 max-w-full">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center space-y-10">
          <div className="max-w-xl mx-auto space-y-2.5">
            <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">PERJALANAN LEGASI</span>
            <h2 className="text-h2 text-[#1A1A1A]">
              Garis Masa Kemajuan
            </h2>
            <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
          </div>

          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:left-4 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#B58D20]/20">
            
            {[
              { year: "2024", title: "Idea Pengasasan & Pendaftaran", desc: "Syarikat mendaftar sah di bawah Suruhanjaya Syarikat Malaysia (SSM) (Akan dikemaskini) dan memulakan perolehan herba botani perintis." },
              { year: "2025", title: "Pematuhan Garis Panduan & Makmal Teratur", desc: "Selesai laporan analisis COA makmal bertauliah melepasi 100% standard penapisan kimia logam berat. Siasatan premis sanitari pengilangan dijalankan secara teliti dan patuh syariah." },
              { year: "2026", title: "Pelancaran Rangkaian Black Millenia", desc: "Melahirkan trio premium: Black Millenia Water (BMW) Essence, Black Millenia Water (BMW) Spray, dan Black Millenia Water (BMW) Drop. Pusat khidmat nasihat peribadi dibuka di pusat digital Bukit Damansara, KL." }
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-10 sm:pl-0 flex flex-col sm:grid sm:grid-cols-2 gap-3 text-left sm:even:text-right even:flex-row-reverse">
                
                {/* Timeline node icon */}
                 <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-5.5 h-5.5 rounded-full bg-white border-2 border-[#B58D20] z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#B58D20] rounded-full" />
                </div>

                <div className={idx % 2 === 0 ? "sm:pr-10" : "sm:col-start-2 sm:pl-10"}>
                  <span className="font-serif text-[16px] sm:text-[18px] font-bold text-[#B58D20] block">{milestone.year}</span>
                  <h4 className="font-serif text-[14px] sm:text-[15px] font-black text-[#1A1A1A] mt-0.5">{milestone.title}</h4>
                   <p className="text-[12.5px] sm:text-[13px] text-[#4A4A4A] mt-1 font-normal leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CORE BRAND VALUES */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2.5">
          <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">PILAR FAHAMAN KAMI</span>
          <h2 className="text-h2 text-[#1A1A1A]">
            Nilai Teras Jenama
          </h2>
          <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-2.5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Ketelusan Mutlak", desc: "Berkongsi laporan makmal bertauliah tanpa berlindung di sebalik rahsia sintetik komersial." },
            { title: "Kelestarian Ekologi", desc: "Herba dipetik secara etika, botol kaca mesra alam kitar semula." },
            { title: "Keamanan Holistik", desc: "Mendedikasikan usaha murni bagi mengembalikan kualiti kesejahteraan mental dan fizikal anda." },
            { title: "Piawaian Diiktiraf", desc: "Mematuhi rantaian akreditasi SSM, HALAL, dan pengilangan MeSTI bertauliah negara." }
          ].map((v, i) => (
            <div key={i} className="bg-white border border-[#B58D20]/20 p-5 sm:p-6 rounded-xl text-left hover:border-[#B58D20] hover:shadow-md transition-all duration-300">
              <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-[#B58D20]/15 text-[#B58D20] flex items-center justify-center font-bold mb-3 font-serif text-[13px]">
                {i + 1}
              </div>
              <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-[#1A1A1A]">{v.title}</h4>
              <p className="text-[12.5px] sm:text-[13px] text-[#4A4A4A] mt-2 leading-relaxed font-normal">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFICIAL ADDRESS & CONTACT DETAILS */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="bg-[#1A1A1A] text-white rounded-xl p-5 sm:p-7 md:p-8 text-center lg:text-left shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3.5">
              <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">PANGKALAN OPERASI UTAMA</span>
              <h3 className="font-serif text-[17px] sm:text-[20px] text-white font-medium leading-tight">Ibu Pejabat AQUIVA GOLD</h3>
              <p className="font-sans text-[12.5px] sm:text-[13px] text-neutral-200 font-normal leading-relaxed">
                Operasi pendaftaran dan pemantauan kualiti kami berpangkalan di kompleks butik korporat Bukit Damansara, Kuala Lumpur. Hubungi kami sekiranya anda memerlukan bimbingan penjejakan surat kurier berdaftar khas.
              </p>
              
              <div className="pt-1.5 flex flex-col sm:flex-row gap-4 text-[13px] sm:text-[14px] font-semibold text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-[#B58D20]" />
                  <span>Bukit Damansara, KL, Malaysia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#B58D20]" />
                  <span>Syarikat SSM: Akan dikemaskini</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
              <a
                href="https://wa.me/60176087696?text=Hi%20AQUIVA%20GOLD%2C%20saya%20ingin%20mengunjungi%20atau%20hubungi%20pejabat%20HQ."
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-full sm:w-auto h-[46px] sm:h-[50px] px-6 bg-[#B58D20] hover:bg-white hover:text-[#1A1A1A] text-white hover:border-[#B58D20] text-[13.5px] sm:text-[14px] uppercase tracking-wider font-bold transition-all rounded-md text-center flex items-center justify-center shadow-lg pb-0.5"
              >
                Hubungi Pentadbiran
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
