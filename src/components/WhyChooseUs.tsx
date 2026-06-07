import { ShieldCheck, Leaf, Sparkles, Award } from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

export default function WhyChooseUs() {
  // Map string to Lucide React component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="text-gold" size={24} />;
      case "Leaf":
        return <Leaf className="text-gold" size={24} />;
      case "Sparkles":
        return <Sparkles className="text-gold" size={24} />;
      case "Award":
        return <Award className="text-gold" size={24} />;
      default:
        return <Sparkles className="text-gold" size={24} />;
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[#EFEAE2]/30 border-b border-stone/20" id="why-choose">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold block mb-2">
            Kenapa Memilih Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-4">
            Keistimewaan Aquvia Gold
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </div>

        {/* 4 Luxury Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 glass-panel hover:border-gold hover:bg-white/80 transition-all duration-500 text-left flex flex-col justify-between min-h-[220px] luxury-shadow hover:-translate-y-1"
            >
              <div>
                {/* Icon wrapper with neat pulsing glow */}
                <div className="p-3 bg-beige/40 rounded-full w-fit mb-6 group-hover:bg-[#C9A227]/10 transition-colors duration-300">
                  {getIcon(item.iconName)}
                </div>
                
                <h3 className="font-serif text-base font-semibold text-charcoal mb-3">
                  {item.title}
                </h3>
                
                <p className="text-xs text-charcoal-light font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Little corner aesthetic indicator */}
              <div className="flex justify-end pt-4">
                <span className="text-[10px] font-mono text-gold opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  // {idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
