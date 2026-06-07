import { Sparkles, Compass, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const qualities = [
    {
      icon: <Sparkles className="text-gold" size={18} />,
      title: "Formulasi Eksklusif",
      desc: "Bahan-bahan yang dirumuskan secara teliti untuk memberikan kepuasan sensori yang mewah setiap kali disentuh."
    },
    {
      icon: <Compass className="text-gold" size={18} />,
      title: "Detik Penjagaan Diri",
      desc: "Direka untuk membantu anda memupuk rutin harian yang tenang, membina ketenteraman minda yang mendalam."
    },
    {
      icon: <ShieldCheck className="text-gold" size={18} />,
      title: "Keaslian Sebenar",
      desc: "Bebas daripada skim MLM mahupun pembungkusan klinikal yang agresif. Hanya sains gaya hidup premium dan tulen."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F0E6] relative border-y border-stone/20" id="about">
      {/* Decorative background watermark / leaf frame */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 pointer-events-none z-0 overflow-hidden">
        <span className="font-serif text-[18vw] text-gold font-light absolute right-[-5vw] bottom-[-5vw] select-none">
          AQUVIA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Typography Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="font-display text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
                Warisan Kami
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">
              Mengenai Aquvia Gold
            </h2>

            {/* Core Message Paragraph with High-End Styling */}
            <div className="space-y-4 text-charcoal-light font-light leading-relaxed text-sm md:text-base">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#C9A227] first-letter:font-medium">
                Aquvia Gold komited untuk membawakan produk penjagaan diri dan kesejahteraan diri premium yang direka khas untuk gaya hidup moden. Koleksi Black Millenia kami menggabungkan formulasi eksklusif dengan pengalaman mewah, bagi membantu anda menikmati detik kesegaran, ketenangan, dan ritual penjagaan diri tersuai yang sebenar.
              </p>
              <p>
                Kami percaya bahawa penjagaan harian tidak seharusnya kelihatan seperti preskripsi perubatan atau suplemen klinikal yang membosankan. Sebaliknya, kami mengangkat ritual penjagaan diri anda agar setaraf dengan ketenangan mendalam di pusat spa mewah kegemaran anda.
              </p>
            </div>

            {/* Quote Block */}
            <blockquote className="border-l-2 border-gold pl-6 py-2 italic font-serif text-charcoal text-base md:text-lg text-opacity-80">
              "Kesejahteraan diri bukanlah sekadar tugasan harian yang perlu diselesaikan; ia adalah ritual eksklusif untuk menghargai kehadiran diri anda sendiri."
            </blockquote>
          </div>

          {/* Highlights Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 glass-panel space-y-6 luxury-shadow">
              <span className="font-serif text-xs uppercase tracking-widest text-[#2B2B2B] font-medium block border-b border-stone/40 pb-3">
                Etos Jenama
              </span>
              
              <div className="space-y-6">
                {qualities.map((q, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-2 bg-[#FAF8F3] border border-stone rounded-full mt-0.5">
                      {q.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="font-serif text-sm font-medium text-charcoal">
                        {q.title}
                      </h4>
                      <p className="text-xs text-charcoal-light font-light mt-1 leading-relaxed">
                        {q.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
