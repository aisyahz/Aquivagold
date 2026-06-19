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
    const text = "Hi AQUIVA GOLD, saya ingin bertanya lebih lanjut mengenai maklum balas kejayaan pelanggan bekenaan amalan Black Millenia Water (BMW).";
    window.open(`https://wa.me/601139900920?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* HERO SECTION */}
      <section className="bg-[#FAF8F5] py-16 border-b border-[#B58D20]/15 text-center max-w-full">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 space-y-3">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">PENGALAMAN NYATA</span>
          <h1 className="text-h1 text-[#1A1A1A]">
            Testimoni &amp; Maklum Balas Pelanggan
          </h1>
          <p className="text-body text-[#4A4A4A] max-w-2xl mx-auto">
            Membina kepercayaan tulen melalui ulasan ikhlas dan kisah perjalanan harian yang dikongsikan bersesuaian dengan keselesaan emosi serta tubuh fizikal masing-masing.
          </p>
          <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
        </div>
      </section>

      {/* CORE EXPERIENCES / CUSTOMER JOURNEYS */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-6">
          <h2 className="text-h2 text-[#1A1A1A]">Perjalanan Konsultasi Menyeluruh</h2>
          <p className="text-body text-[#4A4A4A] select-none">Bagaimana bimbingan peribadi tuntas kami melengkapkan rutin harian pelanggan secara terperinci.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              author: "Zarina Abdullah",
              age: "37 Tahun",
              location: "Kuala Lumpur",
              before: "Rutin harian yang kelam-kabut menyebabkan saya sering berasa letih, lesu, dan tidak fokus terhadap kualiti kulit wajah harian.",
              after: "Selepas dibimbing perunding melalui kaedah semburan Black Millenia Water (BMW) Spray setiap pagi, saya kembali merasai kesegaran murni yang sangat menenangkan emosi bekerja saya."
            },
            {
              author: "Marcus Lim",
              age: "42 Tahun",
              location: "Bukit Damansara",
              before: "Sukar meluangkan masa yang berkualiti untuk diri sendiri di sebalik jadual tugasan pejabat korporat yang sangat padat.",
              after: "Bermula dengan 8 titis Black Millenia Water (BMW) Essence dalam air rendaman suam, bilik mandi utama saya berubah menjadi zon relaksasi terapeutik yang luar biasa mewah."
            },
            {
              author: "Elena Petrova",
              age: "29 Tahun",
              location: "Mont Kiara",
              before: "Merasai keperluan untuk mendapatkan pelengkap gaya hidup organik yang telus, diuji makmal, dan bukan sekadar produk wangi sintetik kosong.",
              after: "Pihak khidmat pelanggan berkongsi laporan analitik penuh, dan saya mengamalkan Black Millenia Water (BMW) Drop ke dalam teh saya. Hasil fizikal terasa sungguh harmoni."
            }
          ].map((journey, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#B58D20]/20 rounded-2xl p-5 sm:p-6 text-left flex flex-col justify-between hover:border-[#B58D20] hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex justify-between items-start border-b border-[#EFEAE2] pb-3">
                  <div>
                    <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-[#1A1A1A]">{journey.author}</h4>
                    <span className="text-[11px] text-[#B58D20] uppercase tracking-wider font-semibold block leading-none mt-1">
                      {journey.age} &bull; {journey.location}
                    </span>
                  </div>
                  <div className="flex text-[#B58D20] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#B58D20" className="text-[#B58D20]" />
                    ))}
                  </div>
                </div>

                {/* Journey block comparison */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-[11px] text-[#1A1A1A]/40 uppercase tracking-widest font-bold block">Sebelum Konsultasi</span>
                    <p className="font-sans text-[13px] sm:text-[13.5px] text-[#4A4A4A] italic leading-relaxed font-light">
                      &ldquo;{journey.before}&rdquo;
                    </p>
                  </div>
                  <div className="space-y-1.5 bg-[#FAF8F5] p-4 rounded-xl border-l-4 border-[#B58D20]">
                    <span className="text-[10px] sm:text-[11px] text-[#B58D20] uppercase tracking-widest font-bold block">Pengalaman Selepas Pemakaian</span>
                    <p className="font-sans text-[12.5px] sm:text-[13px] text-[#1A1A1A] leading-relaxed font-medium">
                      &ldquo;{journey.after}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EFEAE2] mt-6 flex items-center gap-2 text-neutral-400 text-[11px] sm:text-[12px] uppercase tracking-widest font-bold">
                <Quote size={14} />
                <span>Rujukan Pengalaman</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* MULTIMEDIA PLACEHOLDERS */}
      <section className="bg-[#FAF8F5] py-16 lg:py-24 border-y border-[#B58D20]/15 max-w-full">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Playable Video Testimonial Placeholder */}
            <div className="space-y-4 text-left">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#B58D20] font-bold block">BUKTI VIDEO EKSKLUSIF</span>
              <h3 className="font-serif text-[18px] sm:text-[22px] text-[#1A1A1A] font-bold tracking-tight leading-tight">Klip Video Temu Bual Santai</h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#4A4A4A] leading-relaxed font-light">
                Perbualan terbuka secara santai bersama pengasas dan pengamal gaya hidup berpengaruh berkongsi bagaimana integriti produk kami menjadi teras penjagaan diri mereka.
              </p>

              <div className="relative aspect-video rounded-2xl bg-[#1A1A1A] overflow-hidden border border-[#B58D20]/20 flex items-center justify-center group shadow-md">
                {/* Visual design cover backdrop overlay */}
                <div className="absolute inset-0 bg-stone-950/45 group-hover:bg-stone-950/30 transition-all duration-300" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#000000_100%)] opacity-70" />
                
                {/* Centered play ring */}
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#B58D20]/50 flex items-center justify-center bg-white/10 group-hover:scale-105 group-hover:border-[#B58D20] transition-all duration-500 cursor-pointer shadow-xs">
                  <Play size={20} className="text-[#B58D20] fill-[#B58D20] ml-1" />
                </div>

                <div className="absolute bottom-4 left-6 z-10 text-left">
                  <span className="font-serif text-white text-[13.5px] sm:text-[14.5px] font-bold block">Sembang Santai Bersama Tokoh Premium</span>
                  <span className="text-[10px] text-[#B58D20] uppercase tracking-wider font-semibold block mt-0.5">Datin Sophia L. &bull; Langkawi Spa Resort</span>
                </div>
              </div>
            </div>

            {/* Social Media Review App UI mockup placeholder */}
            <div className="space-y-4 text-left">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#B58D20] font-bold block">TANGKAPAN SKRIN KOMUNITI</span>
              <h3 className="font-serif text-[18px] sm:text-[22px] text-[#1A1A1A] font-bold tracking-tight leading-tight">Ulasan WhatsApp &amp; Facebook</h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#4A4A4A] leading-relaxed font-light">
                Kebahagiaan dan kejutan gembira yang diterima terus ke telefon pejabat rasmi kami daripada ribuan pelanggan yang diredai ketenangan.
              </p>

              <div className="bg-white border border-[#B58D20]/20 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
                
                {/* Chat item 1 */}
                <div className="flex gap-3 items-start border-b border-[#EFEAE2] pb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[12px] shrink-0">W</div>
                  <div className="space-y-1">
                    <span className="font-bold text-[#1A1A1A] text-[12.5px] sm:text-[13px]">Chat WhatsApp Masuk (011-xxxx0920)</span>
                    <p className="text-[13px] sm:text-[13.5px] text-[#4A4A4A] italic leading-relaxed font-light">
                      &ldquo;Assalamualaikum sis, cuma nak khabar kotak hadiah bertali satin semalam dah selamat mendarat di pejabat. Rekaan botol hitam kaca berkristal itu sangat cantik dan rasa sungguh berprestij di meja saya...&rdquo;
                    </p>
                  </div>
                </div>

                {/* Chat item 2 */}
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[12px] shrink-0">F</div>
                  <div className="space-y-1">
                    <span className="font-bold text-[#1A1A1A] text-[12.5px] sm:text-[13px]">Maklum Balas Hantaran Facebook</span>
                    <p className="text-[13px] sm:text-[13.5px] text-[#4A4A4A] italic leading-relaxed font-light">
                      &ldquo;Khidmat rundingan tersuai yang telus. Bantuan pemilihan produk sangat cepat dan tidak memaksa beli. Saya cadangkan Black Millenia Water (BMW) Spray untuk sesiapa yang gemar kesegaran luar tanpa bau sintetik...&rdquo;
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL TARGET CTA */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="bg-white border border-[#B58D20]/25 rounded-2xl p-6 sm:p-10 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h3 className="font-serif text-[18px] sm:text-[22px] text-[#1A1A1A] font-bold leading-tight">Ingin Pengalaman Istimewa Seperti Mereka?</h3>
          <p className="font-sans text-[13px] sm:text-[13.5px] text-[#4A4A4A] leading-relaxed font-light max-w-xl mx-auto">
            Mulakan konsultasi percubaan peribadi percuma bersama pakar teraputik bertaraf lima bintang kami melalui WhatsApp untuk melengkapkan pelan penjagaan diri tersuai anda.
          </p>

          <button
            onClick={handleWhatsAppTesti}
            className="cursor-pointer h-[48px] sm:h-[52px] px-8 bg-[#1A1A1A] hover:bg-[#333333] text-white text-[14px] sm:text-[15px] uppercase tracking-wider font-bold transition-all duration-300 rounded-lg inline-flex items-center justify-center shadow-lg"
          >
            Saya Mahu WhatsApp Sekarang
          </button>
        </div>
      </section>

    </div>
  );
}
