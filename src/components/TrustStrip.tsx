import React from "react";
import { ShieldCheck, Award, Sparkles, HeartHandshake } from "lucide-react";

export default function TrustStrip() {
  const trustPoints = [
    {
      icon: <ShieldCheck className="text-[#C8A75B] shrink-0" size={24} />,
      title: "Jaminan Piawaian MeSTI KKM",
      desc: "Dikilangkan mengikut piawaian kebersihan Program Jaminan Keselamatan Makanan (MeSTI) Kementerian Kesihatan Malaysia.",
    },
    {
      icon: <Award className="text-[#C8A75B] shrink-0" size={24} />,
      title: "Pensijilan Halal Dipercayai",
      desc: "Diproses secara suci dan bersih sepenuhnya di bawah pematuhan garis panduan standard Halal yang ketat.",
    },
    {
      icon: <Sparkles className="text-[#C8A75B] shrink-0" size={24} />,
      title: "Ujian Makmal Bebas (Heavy Metal Free)",
      desc: "Laporan analisis makmal menunjukkan siri ujian saringan sifar pencemaran logam berat & 100% bebas kimia terlarang.",
    },
    {
      icon: <HeartHandshake className="text-[#C8A75B] shrink-0" size={24} />,
      title: "Kualiti Warisan Premium",
      desc: "Formulasi herba terpilih bertaraf eksklusif yang mengekalkan amalan tradisi kesejahteraan tanpa sebarang bahan pengawet.",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] border-t border-b border-[#C8A75B]/20 py-10" id="trust-strip-footer">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => (
            <div 
              key={idx} 
              className="flex gap-4 items-start p-4 hover:bg-white/60 rounded-xl transition-all duration-300"
            >
              <div className="p-2.5 bg-[#C8A75B]/10 rounded-lg">
                {point.icon}
              </div>
              <div className="space-y-1.5 text-left">
                <h4 className="font-sans font-bold text-[13.5px] uppercase tracking-wider text-[#1F1F1F]">
                  {point.title}
                </h4>
                <p className="font-sans text-[12px] text-[#1F1F1F]/70 leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
