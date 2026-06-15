import React from "react";
import { 
  MessageSquare, 
  Play, 
  Star, 
  Quote, 
  Smartphone, 
  Sparkles, 
  CheckCircle,
  ThumbsUp
} from "lucide-react";

export default function TestimonialsView() {

  const handleWhatsAppTesti = () => {
    const text = "Hi Aquiva Gold, saya ingin bertanya lebih lanjut mengenai maklum balas kejayaan pelanggan bekenaan penskillan Black Millenia.";
    window.open(`https://wa.me/601139900920?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-32 pb-24">
      
      {/* HERO SECTION */}
      <section className="bg-[#FAF8F1] py-24 border-b border-[#C8A75B]/15 text-center max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-4">
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-[#C8A75B] font-bold block">PENGALAMAN NYATA</span>
          <h1 className="font-serif text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] text-[#1F1F1F] font-medium tracking-tight leading-tight">
            Testimoni &amp; Maklum Balas Pelanggan
          </h1>
          <p className="font-sans text-[14px] sm:text-[15px] text-[#1F1F1F]/60 max-w-2xl mx-auto leading-[1.8]">
            Membina kepercayaan tulen melalui ulasan ikhlas dan kisah perjalanan harian yang dikongsikan bersesuaian dengan keselesaan emosi serta tubuh fizikal masing-masing.
          </p>
          <div className="w-20 h-[1.5px] bg-[#C8A75B] mx-auto mt-4" />
        </div>
      </section>

      {/* CORE EXPERIENCES / CUSTOMER JOURNEYS */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-8">
          <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-[#1F1F1F] font-medium tracking-tight leading-tight">Perjalanan Konsultasi Menyeluruh</h2>
          <p className="text-[13px] sm:text-[14px] text-[#1F1F1F]/60 select-none">Bagaimana bimbingan peribadi tuntas kami melengkapkan rutin harian pelanggan secara terperinci.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              author: "Zarina Abdullah",
              age: "37 Tahun",
              location: "Kuala Lumpur",
              before: "Rutin harian yang kelam-kabut menyebabkan saya sering berasa letih, lesu, dan tidak fokus terhadap kualiti kulit wajah harian.",
              after: "Selepas dibimbing perunding melalui kaedah semburan BMW Spray setiap pagi, saya kembali merasai kesegaran murni yang sangat menenangkan emosi bekerja saya."
            },
            {
              author: "Marcus Lim",
              age: "42 Tahun",
              location: "Bukit Damansara",
              before: "Sukar meluangkan masa yang berkualiti untuk diri sendiri di sebalik jadual tugasan pejabat korporat yang sangat padat.",
              after: "Bermula dengan 8 titis BMW Essence dalam air rendaman suam, bilik mandi utama saya berubah menjadi zon relaksasi terapeutik yang luar biasa mewah."
            },
            {
              author: "Elena Petrova",
              age: "29 Tahun",
              location: "Mont Kiara",
              before: "Merasai keperluan untuk mendapatkan pelengkap gaya hidup organik yang telus, diuji makmal, dan bukan sekadar produk wangi sintetik kosong.",
              after: "Pihak khidmat pelanggan berkongsi laporan analitik penuh, dan saya mengamalkan BMW Drop ke dalam teh saya. Hasil fizikal terasa sungguh harmoni."
            }
          ].map((journey, idx) => (
            <div 
              key={idx}
              className="bg-white border-2 border-[#C8A75B]/15 rounded-[2rem] p-8 sm:p-10 text-left flex flex-col justify-between hover:border-[#C8A75B] hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex justify-between items-start border-b border-[#EFEAE2] pb-4">
                  <div>
                    <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1F1F1F]">{journey.author}</h4>
                    <span className="text-[12px] text-[#C8A75B] uppercase tracking-wider font-semibold block leading-none mt-1.5">
                      {journey.age} &bull; {journey.location}
                    </span>
                  </div>
                  <div className="flex text-[#C8A75B] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C8A75B" className="text-[#C8A75B]" />
                    ))}
                  </div>
                </div>

                {/* Journey block comparison */}
                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-[11px] sm:text-[12px] text-[#1F1F1F]/40 uppercase tracking-widest font-bold block">Sebelum Konsultasi</span>
                    <p className="text-[14px] sm:text-[15px] text-[#1F1F1F]/70 italic leading-[1.8] font-light">
                      &ldquo;{journey.before}&rdquo;
                    </p>
                  </div>
                  <div className="space-y-2 bg-[#FAF8F1] p-5 rounded-2xl border-l-4 border-[#C8A75B]">
                    <span className="text-[11px] sm:text-[12px] text-[#C8A75B] uppercase tracking-widest font-bold block">Pengalaman Selepas Pemakaian</span>
                    <p className="text-[13px] sm:text-[14px] text-[#1F1F1F]/90 leading-[1.8] font-medium">
                      &ldquo;{journey.after}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#EFEAE2] mt-8 flex items-center gap-2.5 text-emerald-600 text-[12px] sm:text-[13px] uppercase tracking-widest font-bold">
                <CheckCircle size={18} />
                <span>Pengguna Disahkan Sahih</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* MULTIMEDIA PLACEHOLDERS */}
      <section className="bg-[#FAF8F1] py-24 border-y border-[#C8A75B]/15 max-w-full">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Playable Video Testimonial Placeholder */}
            <div className="space-y-6 text-left">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.25em] text-[#C8A75B] font-bold block">BUKTI VIDEO EKSKLUSIF</span>
              <h3 className="font-serif text-[24px] sm:text-[28px] md:text-[30px] text-[#1F1F1F] font-semibold tracking-tight leading-tight">Klip Video Temu Bual Santai</h3>
              <p className="text-[13px] sm:text-[14px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                Perbualan terbuka secara santai bersama pengasas dan pengamal gaya hidup berpengaruh berkongsi bagaimana integriti produk kami menjadi teras penjagaan diri mereka.
              </p>

              <div className="relative aspect-video rounded-[2rem] bg-slate-900 overflow-hidden border border-[#C8A75B]/20 flex items-center justify-center group shadow-md">
                {/* Visual design cover backdrop overlay */}
                <div className="absolute inset-0 bg-stone-950/45 group-hover:bg-stone-950/30 transition-all duration-300" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#000000_100%)] opacity-70" />
                
                {/* Centered play ring */}
                <div className="relative z-10 w-20 h-20 rounded-full border-2 border-[#C8A75B]/50 flex items-center justify-center bg-white/10 group-hover:scale-110 group-hover:border-[#C8A75B] transition-all duration-500 cursor-pointer shadow-xs">
                  <Play size={24} className="text-[#C8A75B] fill-[#C8A75B] ml-1.5" />
                </div>

                <div className="absolute bottom-6 left-8 z-10 text-left">
                  <span className="font-serif text-white text-[15px] sm:text-[16px] font-bold block">Sembang Santai Bersama Tokoh Premium</span>
                  <span className="text-[10px] sm:text-[11px] text-[#C8A75B] uppercase tracking-wider font-semibold block mt-1">Datin Sophia L. &bull; Langkawi Spa Resort</span>
                </div>
              </div>
            </div>

            {/* Social Media Review App UI mockup placeholder */}
            <div className="space-y-6 text-left">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.25em] text-[#C8A75B] font-bold block">TANGKAPAN SKRIN KOMUNITI</span>
              <h3 className="font-serif text-[24px] sm:text-[28px] md:text-[30px] text-[#1F1F1F] font-semibold tracking-tight leading-tight">Ulasan WhatsApp &amp; Facebook</h3>
              <p className="text-[13px] sm:text-[14px] text-[#1F1F1F]/75 leading-[1.8] font-light">
                Kebahagiaan dan kejutan gembira yang diterima terus ke telefon pejabat rasmi kami daripada ribuan pelanggan yang diredai ketenangan.
              </p>

              <div className="bg-white border border-[#C8A75B]/20 rounded-[2rem] p-8 sm:p-10 space-y-6 shadow-sm">
                
                {/* Chat item 1 */}
                <div className="flex gap-4 items-start border-b border-[#EFEAE2] pb-5">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[14px] shrink-0">W</div>
                  <div className="space-y-1.5">
                    <span className="font-bold text-[#1F1F1F] text-[13px] sm:text-[14px]">Chat WhatsApp Masuk (011-xxxx0920)</span>
                    <p className="text-[14px] sm:text-[15px] text-[#1F1F1F]/70 italic leading-[1.8] font-light">
                      &ldquo;Assalamualaikum sis, cuma nak khabar kotak hadiah bertali satin semalam dah selamat mendarat di pejabat. Rekaan botol hitam kaca berkristal itu sangat cantik dan rasa sungguh berprestij di meja saya...&rdquo;
                    </p>
                  </div>
                </div>

                {/* Chat item 2 */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[14px] shrink-0">F</div>
                  <div className="space-y-1.5">
                    <span className="font-bold text-[#1F1F1F] text-[13px] sm:text-[14px]">Maklum Balas Hantaran Facebook</span>
                    <p className="text-[14px] sm:text-[15px] text-[#1F1F1F]/70 italic leading-[1.8] font-light">
                      &ldquo;Khidmat rundingan tersuai yang telus. Bantuan pemilihan produk sangat cepat dan tidak memaksa beli. Saya cadangkan BMW Spray untuk sesiapa yang gemar kesegaran luar tanpa bau sintetik...&rdquo;
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL TARGET CTA */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-white border border-[#C8A75B]/25 rounded-[2.5rem] p-10 sm:p-16 text-center max-w-3xl mx-auto space-y-8 shadow-xl">
          <h3 className="font-serif text-[26px] sm:text-[30px] text-[#1F1F1F] font-semibold leading-tight">Ingin Pengalaman Istimewa Seperti Mereka?</h3>
          <p className="font-sans text-[13px] sm:text-[14px] text-[#1F1F1F]/70 leading-[1.8] font-light max-w-xl mx-auto">
            Mulakan konsultasi percubaan peribadi percuma bersama pakar teraputik bertaraf lima bintang kami melalui WhatsApp untuk melengkapkan pelan penjagaan diri tersuai anda.
          </p>

          <button
            onClick={handleWhatsAppTesti}
            className="cursor-pointer h-[54px] sm:h-[58px] px-10 bg-[#1F1F1F] hover:bg-[#333333] text-white text-[15px] sm:text-[16px] uppercase tracking-wider font-bold transition-all rounded-md inline-flex items-center justify-center shadow-lg"
          >
            Saya Mahu WhatsApp Sekarang
          </button>
        </div>
      </section>

    </div>
  );
}
