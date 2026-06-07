import { MessageSquareCode, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface StickyWhatsAppProps {
  onClick: () => void;
}

export default function StickyWhatsApp({ onClick }: StickyWhatsAppProps) {
  return (
    <div className="fixed bottom-6 right-6 z-30 select-none pointer-events-none" id="sticky-whatsapp-container">
      <motion.button
        onClick={onClick}
        className="pointer-events-auto cursor-pointer animate-gold-pulse relative flex items-center justify-between p-3 md:p-3.5 glass-panel border-2 border-[#C9A227] shadow-xl hover:bg-white text-left max-w-xs transition-colors duration-300"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        id="sticky-whatsapp-btn"
      >
        {/* Subtle background luxury star ornament */}
        <div className="absolute top-1 right-2 opacity-15">
          <Sparkles size={8} className="text-gold" />
        </div>

        {/* Left Side: Text */}
        <div className="mr-4 space-y-0.5 pr-2">
          <span className="block text-[9px] uppercase tracking-wider text-charcoal-light font-semibold">
            Perlukan Bantuan?
          </span>
          <span className="block text-xs font-serif font-bold text-charcoal flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-ping mr-1" />
            <span>Hubungi Kami</span>
          </span>
        </div>

        {/* Right Side: Round Icon */}
        <div className="p-2 bg-[#FAF8F3] border border-stone rounded-full flex items-center justify-center text-[#C9A227]">
          {/* Using custom clean message icon targeting aesthetic luxury */}
          <MessageSquareCode size={16} />
        </div>
      </motion.button>
    </div>
  );
}
