import { Star, ShieldCheck } from "lucide-react";
import { REVIEWS } from "../data";

export default function Reviews() {
  return (
    <section className="py-20 bg-[#FAF8F3]" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold block mb-2">
            Testimoni Pelanggan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-4">
            Kata Penghargaan
          </h2>
          <p className="text-xs md:text-sm text-charcoal-light font-light max-w-md mx-auto">
            Pecinta kemewahan dan pengamal gaya hidup eksklusif berkongsi maklum balas ikhlas mereka tentang Koleksi Black Millenia Water (BMW) kami.
          </p>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Reviews Cards Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-8 glass-panel text-left flex flex-col justify-between space-y-6 relative luxury-shadow hover:border-gold hover:bg-white/80 transition-all duration-300"
            >
              {/* Stars & Verification label */}
              <div className="flex items-center justify-between">
                <div className="flex text-gold space-x-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" />
                  ))}
                </div>
                
                <div className="flex items-center space-x-1 text-[9px] text-[#C9A227]/70 font-display font-medium uppercase tracking-wider">
                  <span>Maklum Balas</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-charcoal font-light italic leading-relaxed flex-1">
                "{review.text}"
              </p>

              {/* Author Footer info */}
              <div className="border-t border-stone/60 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-serif font-semibold text-charcoal block">
                    {review.author}
                  </span>
                  <span className="text-[10px] text-charcoal-light font-light uppercase tracking-wider">
                    {review.location}
                  </span>
                </div>
                
                <span className="text-[9px] text-charcoal-light/40 font-light font-mono">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global score indicator */}
        <div className="mt-12 p-4 glass-panel luxury-shadow max-w-sm mx-auto flex items-center justify-center space-x-4">
          <div className="text-left">
            <span className="font-serif text-2xl font-semibold text-charcoal">4.9 / 5.0</span>
            <span className="text-[10px] text-charcoal-light block uppercase tracking-wider">Skor Penilaian Terkumpul</span>
          </div>
          <div className="h-8 w-[1px] bg-stone/60" />
          <div className="flex text-gold space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
