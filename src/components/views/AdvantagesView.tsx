import React from "react";
import { 
  ShieldCheck, 
  Leaf, 
  Award, 
  Check, 
  Cpu, 
  Workflow, 
  FileCheck, 
  HeartHandshake, 
  HelpCircle,
  Gem,
  Compass
} from "lucide-react";

interface AdvantagesViewProps {
  onNavigate: (view: string) => void;
}

export default function AdvantagesView({ onNavigate }: AdvantagesViewProps) {
  
  return (
    <div className="space-y-16 pb-16">
      
      {/* HERO BANNER */}
      <section className="bg-[#FAF8F5] py-16 border-b border-[#B58D20]/15 text-center max-w-full">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 space-y-3">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-[#B58D20] font-bold block">INOVASI KESEJAHTERAAN</span>
          <h1 className="text-h1 text-[#1A1A1A]">
            Kelebihan Black Millenia Water
          </h1>
          <p className="text-body text-[#4A4A4A] max-w-2xl mx-auto">
            Menyelami intipati kemurnian sejati dan keistimewaan pemprosesan rantaian terkawal yang menetapkan standard baharu bagi penjagaan diri bertaraf global.
          </p>
          <div className="w-16 h-[1.5px] bg-[#B58D20] mx-auto mt-3" />
        </div>
      </section>

      {/* CORE DETAILS SECTIONS */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10 text-left">
        
        {/* 1. Apa Itu Black Millenia Water (BMW)? */}
        <div className="space-y-3 border-b border-[#EFEAE2] pb-6">
          <div className="inline-flex items-center gap-2 text-[#B58D20]">
            <Compass size={20} />
            <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1A1A1A]">1. Apa Itu Black Millenia Water (BMW)?</h2>
          </div>
          <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-light">
            Black Millenia Water (BMW) ialah air botani semula jadi yang diekstrak menggunakan kaedah pembersihan khusus bagi melahirkan cecair yang bebas daripada bendasing kimia tegar. Dirumuskan untuk <strong className="font-semibold text-[#B58D20]">menyokong rutin penjagaan diri</strong> yang eksklusif, ia berfungsi as medium penghidratan natural yang membawa kelembutan tulen kepada tubuh. Setiap titisan direka untuk melengkapkan keperluan keseimbangan fizikal harian agar kelihatan sihat, bertenaga, dan berseri pasif tanpa bergantung kepada bahan aktif keras yang menjejaskan metabolisme semulajadi kulit.
          </p>
        </div>

        {/* 2. Sumber Premium */}
        <div className="space-y-3 border-b border-[#EFEAE2] pb-6">
          <div className="inline-flex items-center gap-2 text-[#B58D20]">
            <Leaf size={20} />
            <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1A1A1A]">2. Sumber Organik Premium</h2>
          </div>
          <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-light">
            Sajian kebaikan premium kami bertitik tolak daripada integrasi flora liar berharga tinggi dan spora herba terpilih yang dipetik dari zon biosfera terpelihara secara etikal. Tiada racun perosak komersial digunakan dalam kitaran tumbubuhan herba bagi memastikan pati yang terhasil adalah tulen, kaya dengan agen pelindung ekologi semula jadi, serta bebas daripada sebarang saki-baki toksin pengeluaran industri massa.
          </p>
        </div>

        {/* 3. Teknologi Moden */}
        <div className="space-y-3 border-b border-[#EFEAE2] pb-6">
          <div className="inline-flex items-center gap-2 text-[#B58D20]">
            <Cpu size={20} />
            <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1A1A1A]">3. Teknologi Ekstraksi Moden</h2>
          </div>
          <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-light">
            Mengekalkan kestabilan molekul semulajadi adalah cabaran terbesar herba botani. Di AQUIVA GOLD, kami memanipulasikan algoritma pemancaran gelombang mikro sejuk yang unik untuk menapis herba tanpa mengenakan haba lampau tegar. Hasilnya, nutrien aktif yang sensitif terhadap suhu kekal terpelihara sepenuhnya di dalam cecair jernih, sedia <strong className="font-semibold text-[#1A1A1A]">membantu melengkapkan gaya hidup sihat</strong> anda di setiap helaian semburan mikro harian.
          </p>
        </div>

        {/* 4. Proses Penghasilan Terkawal */}
        <div className="space-y-3 border-b border-[#EFEAE2] pb-6">
          <div className="inline-flex items-center gap-2 text-[#B58D20]">
            <Workflow size={20} />
            <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1A1A1A]">4. Proses Penghasilan Terkawal</h2>
          </div>
          <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-light">
            Setiap kelompok (batch) Black Millenia diproses dalam persekitaran makmal kedap sanitari terkawal. Dari proses pembotolan kaca hitam mat hitam premium sehinggalah pemasangan penyedut emas berpipet halus, juruteknik kami menggunakan protokol pemantauan berterusan bagi mengurangkan pendedahan kepada bakteria udara luar. Ini adalah tanda kualiti kompromi tahap sifar jenama elit.
          </p>
        </div>

        {/* 5. Kualiti, Keselamatan & Had Wording */}
        <div className="space-y-3 border-b border-[#EFEAE2] pb-6">
          <div className="inline-flex items-center gap-2 text-[#B58D20]">
            <ShieldCheck size={20} />
            <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1A1A1A]">5. Kualiti &amp; Keselamatan Tertinggi</h2>
          </div>
          <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-light">
            Rangkaian formulasi Black Millenia Water (BMW) adalah sepenuhnya <strong className="font-semibold text-[#1A1A1A]">direka untuk pengalaman premium</strong>. Kami komited untuk memberikan ketelusan penuh kepada pengguna tanpa menggunakan sebarang publisiti melebih-lebih (exaggerated medical claims) yang tidak berasas dari segi perundangan sedia ada nasional.
          </p>
          <div className="bg-[#FAF8F5] border border-[#B58D20]/25 p-4 sm:p-5 rounded-xl mt-3 text-[12px] sm:text-[12.5px] italic text-[#4A4A4A]/80 leading-relaxed font-semibold">
            Nota Penting: Produk kami berfungsi sebagai agen pelengkap kesejahteraan luaran dan dalaman bagi mengekalkan keharmonian natural tubuh, dan hasil yang diperoleh adalah tertakluk sepenuhnya kepada kesesuaian tindak balas fizikal individu tersendiri. Tiada dakwaan penyembuhan penyakit kronik diuar-uarkan.
          </div>
        </div>

        {/* 6. Disokong Dokumentasi */}
        <div className="space-y-3 border-b border-[#EFEAE2] pb-6">
          <div className="inline-flex items-center gap-2 text-[#B58D20]">
            <FileCheck size={20} />
            <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1A1A1A]">6. Disokong Dokumentasi Lengkap</h2>
          </div>
          <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-relaxed font-light">
            Kekuatan AQUIVA GOLD bertumpu kepada pembuktian berasaskan fakta berdokumen sah. Rantaian produk kami dilengkapkan dengan sijil Suruhanjaya Syarikat Malaysia (SSM), laporan makmal bertauliah dari institusi bebas bebas kimia berbahaya, pematuhan garis panduan kebersihan pihak berkuasa tempatan, serta sijil gred pendaftaran syarikat yang menyakinkan khalayak umum.
          </p>
        </div>

        {/* 7. Kenapa Pelanggan Memilih AQUIVA GOLD? */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-[#B58D20]">
            <HeartHandshake size={20} />
            <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1A1A1A]">7. Mengapa Pelanggan Setia Memilih Kami?</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Layanan butik konsultasi satu-ke-satu yang mesra.",
              "Bukan minyak wangi tiruan, aroma botani asli menenangkan.",
              "Setiap kotak penghantaran dilapisi kad premium bertali satin hiasan.",
              "Sifar sebatian steroid, merkuri, plumbum, atau logam berat tercemar.",
              "Sokongan penuh daripada pengasas untuk jaminan keaslian botol.",
              "Sesuai dijadikan hantaran elit majlis eksklusif korporat."
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#FAF8F5] p-4 border border-[#B58D20]/15 rounded-xl text-[12.5px] sm:text-[13px] leading-relaxed text-[#4A4A4A]/90">
                <Check size={16} className="text-[#B58D20] shrink-0 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* FOOTER CTA ZONE */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="bg-[#1A1A1A] text-white rounded-2xl border border-[#B58D20]/20 p-6 sm:p-8 text-center space-y-4 max-w-3xl mx-auto shadow-xl">
          <h3 className="font-serif text-[16px] sm:text-[18px] font-bold text-white leading-tight">Temui Penjagaan Sempurna Khusus Anda</h3>
          <p className="font-sans text-[12px] sm:text-[13px] text-white/70 max-w-lg mx-auto font-light leading-relaxed">
            Miliki kesegaran tulen murni yang ditala eksklusif hanya untuk memanjakan deria minda dan tubuh badan anda.
          </p>

          <button
            onClick={() => onNavigate("koleksi")}
            className="cursor-pointer h-[48px] sm:h-[52px] px-8 bg-[#B58D20] hover:bg-white hover:text-[#1A1A1A] text-white hover:border-[#B58D20] text-[14px] sm:text-[15px] uppercase tracking-wider font-bold transition-all duration-300 rounded-lg inline-flex items-center justify-center shadow-lg"
          >
            Ketahui Produk Yang Sesuai Untuk Anda
          </button>
        </div>
      </section>

    </div>
  );
}
