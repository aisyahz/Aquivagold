import { ArrowRight, Eye, Check } from "lucide-react";
import { motion } from "motion/react";
import { Product } from "../types";
import { PRODUCTS } from "../data";

interface CollectionProps {
  onSelectProduct: (product: Product) => void;
  onOpenConsultation: (productTitle : string) => void;
}

export default function Collection({ onSelectProduct, onOpenConsultation }: CollectionProps) {
  return (
    <section id="collection" className="scroll-mt-12">
      {/* Editorial Collection Header */}
      <div className="py-16 bg-[#FAF8F3] text-center border-b border-stone/20">
        <div className="max-w-2xl mx-auto px-6">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold block mb-2">
            Pameran Apotekari Mewah
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-4">
            Koleksi Black Millenia
          </h2>
          <p className="text-xs md:text-sm text-charcoal-light font-light leading-relaxed">
            Disimpan dengan rapi di dalam botol kaca hitam ultraungu legap untuk memelihara ketulenan bahan aktifnya. Temui formulasi eksklusif yang dirumus khusus untuk penyegaran botani semula jadi, terapi hidro deria, serta rutin harian yang lengkap.
          </p>
        </div>
      </div>

      {/* Alternating Product Sections */}
      <div className="divide-y divide-stone/20">
        {PRODUCTS.map((product, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={product.id}
              className={`py-16 md:py-24 ${product.bgClass} transition-colors duration-500`}
              id={`collection-item-${product.id}`}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Photo Wrapper: Alternates Left and Right on Desktop */}
                  <div
                    className={`col-span-1 lg:col-span-6 flex justify-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <motion.div
                      className="relative w-full max-w-md aspect-square glass-panel select-none overflow-hidden group luxury-shadow transition-shadow duration-300"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Premium Badge tag */}
                      <span className="absolute top-4 left-4 z-10 bg-charcoal text-white text-[9px] uppercase tracking-widest px-2.5 py-1 font-medium font-display">
                        Julat Khas: RM 200 - RM 500
                      </span>

                      {/* Main Product image with luxury hover scale */}
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain p-6 md:p-10 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Subtle hover overlay to prompt details trigger */}
                      <div
                        onClick={() => onSelectProduct(product)}
                        className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                      >
                        <span className="glass-panel text-[10px] uppercase tracking-widest text-[#2B2B2B] font-semibold px-4 py-2.5 shadow-xs flex items-center space-x-1">
                          <Eye size={12} className="text-gold" />
                          <span>Terokai Butiran Mewah</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Copy Details: Alternates Right and Left */}
                  <div
                    className={`col-span-1 lg:col-span-6 text-left space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="font-display text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#C9A227] font-semibold">
                        {product.category}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
                        {product.title}
                      </h3>
                      <div className="w-12 h-[1px] bg-gold" />
                    </div>

                    <p className="text-sm text-charcoal-light font-light leading-relaxed">
                      {product.description}
                    </p>

                    {/* Benefits Checklist with Custom Clean Layout (Aesop Style) */}
                    <div>
                      <span className="text-[11px] font-display uppercase tracking-widest text-[#2B2B2B] font-medium block mb-3">
                        Kelebihan Utama Formulasi
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {product.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-center text-xs text-charcoal font-light">
                            <span className="mr-2 w-4 h-4 rounded-full bg-gold/10 flex items-center justify-center text-[#C9A227] shrink-0">
                              <Check size={10} />
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Active Price Anchor */}
                    <div className="pt-2 flex items-center space-x-3">
                      <span className="text-xs uppercase tracking-widest text-[#2B2B2B] font-light">Anggaran Nilai Devosi:</span>
                      <span className="font-serif text-xl font-medium text-charcoal">{product.price}</span>
                      <span className="text-[10px] uppercase tracking-wider text-charcoal-light/60"> / Sebotol</span>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="cursor-pointer py-3.5 px-6 bg-charcoal hover:bg-charcoal-light text-white text-xs uppercase tracking-widest font-semibold font-display shadow-xs flex items-center space-x-2 transition-colors duration-300"
                        id={`view-details-${product.id}`}
                      >
                        <span>Lihat Butiran</span>
                        <ArrowRight size={14} className="text-gold" />
                      </button>

                      <button
                        onClick={() => onOpenConsultation(product.title)}
                        className="cursor-pointer py-3.5 px-6 bg-transparent border border-gold hover:bg-gold hover:text-white text-[#C9A227] text-xs uppercase tracking-widest font-semibold flex items-center space-x-2 transition-all duration-300"
                        id={`order-${product.id}`}
                      >
                        <span>Beli Sekarang</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
