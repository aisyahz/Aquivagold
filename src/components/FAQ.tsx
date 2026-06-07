import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GENERAL_FAQS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-[#EFEAE2]/30 border-y border-stone/20" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold block mb-2">
            Soalan Lazim
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-4">
            Soalan Lazim
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </div>

        {/* FAQs Accordion Container */}
        <div className="space-y-4 text-left">
          {GENERAL_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel transition-colors duration-300 rounded-xs luxury-shadow"
              >
                {/* Header CTA Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-serif text-sm md:text-base font-semibold text-charcoal group-hover:text-gold transition-colors duration-200">
                    {faq.question}
                  </span>
                  
                  <span className="ml-4 shrink-0 p-1.5 bg-[#FAF8F3] border border-stone rounded-full transition-colors group-hover:bg-[#FAF8F3] group-hover:border-gold">
                    {isOpen ? (
                      <Minus size={14} className="text-gold" />
                    ) : (
                      <Plus size={14} className="text-charcoal-light group-hover:text-gold" />
                    )}
                  </span>
                </button>

                {/* Body Content with slide animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      id={`faq-panel-${faq.id}`}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-stone/20 text-xs md:text-sm text-charcoal-light font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Callout */}
        <div className="mt-12 p-6 glass-panel luxury-shadow text-center space-y-3">
          <HelpCircle size={20} className="text-gold mx-auto" />
          <h4 className="font-serif text-sm font-semibold text-charcoal">
            Perlukan Bantuan Khusus?
          </h4>
          <p className="text-xs text-charcoal-light font-light max-w-md mx-auto">
            Penasihat kesejahteraan dan penjagaan kulit mewah kami sedia membantu secara dalam talian menerusi WhatsApp untuk memberikan rundingan produk eksklusif bersesuaian dengan keperluan anda.
          </p>
        </div>

      </div>
    </section>
  );
}
