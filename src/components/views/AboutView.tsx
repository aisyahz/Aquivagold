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
    <div className="space-y-32 pb-24">
      
      {/* HERO BANNER */}
      <section className="relative bg-[#FAF8F1] py-24 border-b border-[#C8A75B]/15 text-center max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-4">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">MENGENALI WARISAN BRAND</span>
          <h1 className="font-serif text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] text-[#1F1F1F] font-bold tracking-tight leading-tight">
            Tentang Aquiva Gold
          </h1>
          <p className="font-sans text-[14px] sm:text-[15px] text-neutral-800 max-w-2xl mx-auto leading-[1.8] font-normal">
            Menelusuri sejarah penubuhan syarikat, prinsip kemurnian botani murni, dan falsafah kesejahteraan bertaraf butik ultra-premium yang memacu legasi kami.
          </p>
          <div className="w-20 h-[2px] bg-[#C8A75B] mx-auto mt-4" />
        </div>
      </section>

      {/* CORE BRAND STORY AND VISUAL */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Brand profile placeholder left */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#C8A75B]/5 rounded-[2.5rem] filter blur-xl pointer-events-none" />
            
            {/* Elegant luxury presentation of building preview */}
            <div className="relative z-10 w-full max-w-md mx-auto">
              <PlaceholderImage label="PEJABAT HQ BUKIT DAMANSARA" type="building" aspect="aspect-[4/5] rounded-[2rem]" />
              
              <div className="absolute -bottom-6 -right-6 bg-white border border-[#C8A75B]/25 p-6 rounded-2xl hidden sm:flex items-center gap-4 shadow-md max-w-xs text-left z-20">
                <div className="text-[#C8A75B]"><MapPin size={28} /></div>
                <div>
                  <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-[#1F1F1F]">Pusat Pentadbiran</h4>
                  <p className="text-[13px] text-neutral-700 mt-1">Bukit Damansara, Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Text details right */}
          <div className="lg:col-span-11 xl:col-span-7 text-left space-y-8">
            <span className="text-[12px] sm:text-[14px] uppercase tracking-[0.25em] text-[#C8A75B] font-bold block">CERITA DI SEBALIK NAMA</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] text-[#1F1F1F] font-bold tracking-tight leading-tight">Kisah Pengasasan Kami</h2>
            
            <p className="font-sans text-[14px] sm:text-[15px] text-neutral-800 leading-[1.8] font-normal">
              Aquiva Gold Black Millenia diasaskan atas dedikasi mendalam terhadap penemuan rahsia alam semula jadi yang berkesan menyokong kesejahteraan rohani dan jasmani. Menyedari bahawa lambakan pengeluaran kosmetik dan terapi moden dipenuhi aromatik tiruan sintetik keras yang membebankan sistem metabolisme tubuh, pengasas kami memulakan ekspedisi saintifik botani harian untuk menapis intisari cecair yang paling suci.
            </p>

            <p className="font-sans text-[14px] sm:text-[15px] text-neutral-800 leading-[1.8] font-normal">
              Melalui gabungan siri pembersihan berkala dan teknologi ekstraksi sejuk, lahirlah rangkaian <strong>Black Millenia Water</strong>—penulisan semula kepada falsafah penjagaan kesihatan butik premium yang telus, diyakini laporan analisis COA makmal penuh, bebas daripada paraben keras, merkuri logam, ataupun toksik.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#EFEAE2]">
              <div className="space-y-2">
                <span className="text-[12px] sm:text-[14px] uppercase tracking-widest text-[#C8A75B] font-bold block">VISI SYARIKAT</span>
                <p className="text-[13px] sm:text-[14px] text-neutral-800 leading-[1.8] font-normal">
                  Menjadi peneraju butik penjagaan diri gred premium yang dihormati di seluruh Asia Tenggara menjelang tahun 2030 melalui pembuktian integriti dokumen saintifik yang telus.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[12px] sm:text-[14px] uppercase tracking-widest text-[#C8A75B] font-bold block">MISI UTAMA</span>
                <p className="text-[13px] sm:text-[14px] text-neutral-800 leading-[1.8] font-normal">
                  Menawarkan bimbingan rundingan kesihatan peribadi dwi-bahasa berkualiti tinggi bagi membantu setiap individu melengkapkan gaya hidup sihat yang teratur.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TIMELINE OF LUXURY */}
      <section className="bg-[#FAF8F1] py-24 border-y border-[#C8A75B]/15 max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center space-y-16">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">PERJALANAN LEGASI</span>
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
              Garis Masa Kemajuan
            </h2>
            <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
          </div>

          <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:left-4 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#C8A75B]/20">
            
            {[
              { year: "2024", title: "Idea Pengasasan & Pendaftaran", desc: "Syarikat mendaftar sah di bawah Suruhanjaya Syarikat Malaysia (SSM) (Akan dikemaskini) dan memulakan perolehan herba botani perintis." },
              { year: "2025", title: "Pematuhan Garis Panduan & Makmal Teratur", desc: "Selesai laporan analisis COA makmal bertauliah melepasi 100% standard penapisan kimia logam berat. Siasatan premis sanitari pengilangan dijalankan secara teliti dan patuh syariah." },
              { year: "2026", title: "Pelancaran Rangkaian Black Millenia", desc: "Melahirkan trio premium: Black Millenia Essence, Black Millenia Spray, dan Black Millenia Drop. Pusat khidmat nasihat peribadi dibuka di pusat digital Bukit Damansara, KL." }
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-0 flex flex-col sm:grid sm:grid-cols-2 gap-4 text-left sm:even:text-right even:flex-row-reverse">
                
                {/* Timeline node icon */}
                 <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#C8A75B] z-10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-[#C8A75B] rounded-full" />
                </div>

                <div className={idx % 2 === 0 ? "sm:pr-12" : "sm:col-start-2 sm:pl-12"}>
                  <span className="font-serif text-[22px] sm:text-[24px] font-bold text-[#C8A75B] block">{milestone.year}</span>
                  <h4 className="font-serif text-[17px] sm:text-[18px] font-black text-[#1F1F1F] mt-1">{milestone.title}</h4>
                   <p className="text-[13px] sm:text-[14px] text-neutral-800 mt-1.5 font-normal leading-[1.8]">{milestone.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CORE BRAND VALUES */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-16">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">PILAR FAHAMAN KAMI</span>
          <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
            Nilai Teras Jenama
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {[
            { title: "Ketelusan Mutlak", desc: "Berkongsi laporan makmal bertauliah tanpa berlindung di sebalik rahsia sintetik komersial." },
            { title: "Kelestarian Ekologi", desc: "Herba dipetik secara etika, botol kaca mesra alam kitar semula." },
            { title: "Keamanan Holistik", desc: "Mendedikasikan usaha murni bagi mengembalikan kualiti kesejahteraan mental dan fizikal anda." },
            { title: "Piawaian Diiktiraf", desc: "Mematuhi rantaian akreditasi SSM, HALAL, dan pengilangan MeSTI bertauliah negara." }
          ].map((v, i) => (
            <div key={i} className="bg-white border border-[#C8A75B]/20 p-8 sm:p-10 rounded-[2rem] text-left hover:border-[#C8A75B] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F1] border border-[#C8A75B]/15 text-[#C8A75B] flex items-center justify-center font-bold mb-6 font-serif text-[15px]">
                {i + 1}
              </div>
              <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1F1F1F]">{v.title}</h4>
              <p className="text-[13px] sm:text-[14px] text-neutral-800 mt-3 leading-[1.8] font-normal">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFICIAL ADDRESS & CONTACT DETAILS */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="bg-[#1F1F1F] text-white rounded-[3rem] border border-[#C8A75B]/30 p-10 sm:p-16 text-center lg:text-left shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">PANGKALAN OPERASI UTAMA</span>
              <h3 className="font-serif text-[26px] sm:text-[30px] text-white font-medium leading-tight">Ibu Pejabat Aquiva Gold</h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-neutral-200 font-normal leading-[1.8]">
                Operasi pendaftaran dan pemantauan kualiti kami berpangkalan di kompleks butik korporat Bukit Damansara, Kuala Lumpur. Hubungi kami sekiranya anda memerlukan bimbingan penjejakan surat kurier berdaftar khas.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-5 text-[14px] sm:text-[15px] font-semibold text-white/80">
                <div className="flex items-center gap-2.5">
                  <MapPin size={20} className="text-[#C8A75B]" />
                  <span>Bukit Damansara, KL, Malaysia</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={20} className="text-[#C8A75B]" />
                  <span>Syarikat SSM: Akan dikemaskini</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
              <a
                href="https://wa.me/601139900920?text=Hi%20AquivaGold%2C%20saya%20ingin%20mengunjungi%20atau%20hubungi%20pejabat%20HQ."
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-full sm:w-auto h-[54px] sm:h-[58px] px-8 bg-[#C8A75B] hover:bg-white hover:text-[#1F1F1F] text-[#1F1F1F] text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md text-center flex items-center justify-center shadow-lg"
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
