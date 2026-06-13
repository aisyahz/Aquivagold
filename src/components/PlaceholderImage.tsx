import React from "react";
import { 
  FileText, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  MapPin, 
  FlaskConical, 
  Users, 
  Leaf, 
  Droplets, 
  Compass, 
  Building
} from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  type?: "product" | "building" | "people" | "document" | "certificate" | "logo";
  className?: string;
  aspect?: string;
  imageUrl?: string;
}

export default function PlaceholderImage({ 
  label, 
  type = "product", 
  className = "", 
  aspect = "aspect-[4/3]",
  imageUrl
}: PlaceholderImageProps) {

  // Auto-resolve product labels to their corresponding image assets
  let finalImageUrl = imageUrl;
  if (!finalImageUrl) {
    const cleanLabel = label.toUpperCase().trim();
    if (cleanLabel === "BMW ESSENCE") {
      finalImageUrl = "/src/assets/images/Essence.jpeg";
    } else if (cleanLabel === "BMW SPRAY") {
      finalImageUrl = "/src/assets/images/spray.jpeg";
    } else if (cleanLabel === "BMW DROP") {
      finalImageUrl = "/src/assets/images/Drop.jpeg";
    }
  }

  // If there's an image URL, render it beautifully with custom luxury styling
  if (finalImageUrl) {
    return (
      <div className={`relative w-full ${aspect} rounded-[1.25rem] border border-[#C8A75B]/20 overflow-hidden shadow-xs group/img hover:border-[#C8A75B]/60 transition-all duration-500 bg-white ${className}`}>
        <img 
          src={finalImageUrl} 
          alt={label} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" 
        />
        {/* Subtle elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-500" />
        
        {/* Golden frame outline inside the image borders */}
        <div className="absolute inset-3 rounded-[0.9rem] border border-dashed border-white/20 pointer-events-none group-hover/img:border-[#C8A75B]/30 transition-colors duration-500" />
        
        {/* Floating micro label for prestige */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center bg-[#1F1F1F]/80 backdrop-blur-md border border-[#C8A75B]/30 px-3.5 py-2 rounded-xl text-left">
          <div>
            <span className="font-serif text-white text-[12px] tracking-wide block font-bold leading-none">
              {label}
            </span>
            <span className="font-sans text-[8px] text-[#C8A75B] uppercase tracking-[0.2em] block font-semibold mt-1 leading-none">
              Black Millenia Series
            </span>
          </div>
          <Sparkles size={12} className="text-[#C8A75B] shrink-0" />
        </div>
      </div>
    );
  }

  const renderIcon = () => {
    switch (type) {
      case "product":
        return <Droplets className="text-[#C8A75B] w-8 h-8 md:w-10 md:h-10" />;
      case "building":
        return <Building className="text-[#C8A75B] w-8 h-8 md:w-10 md:h-10" />;
      case "people":
        return <Users className="text-[#C8A75B] w-8 h-8 md:w-10 md:h-10" />;
      case "document":
        return <FileText className="text-[#C8A75B] w-8 h-8 md:w-10 md:h-10" />;
      case "certificate":
        return <Award className="text-[#C8A75B] w-8 h-8 md:w-10 md:h-10" />;
      case "logo":
        return <Compass className="text-[#C8A75B] w-8 h-8 md:w-10 md:h-10" />;
      default:
        return <Sparkles className="text-[#C8A75B] w-8 h-8 md:w-10 md:h-10" />;
    }
  };

  return (
    <div 
      className={`relative w-full ${aspect} bg-gradient-to-tr from-[#FAF8F3] via-[#EFEAE2] to-[#FAF8F3] rounded-[1.25rem] border border-[#C8A75B]/20 overflow-hidden flex flex-col items-center justify-center p-6 shadow-xs group hover:border-[#C8A75B]/40 transition-all duration-500 ${className}`}
    >
      {/* Decorative internal golden border outlining standard of design */}
      <div className="absolute inset-3 rounded-[0.9rem] border border-dashed border-[#C8A75B]/10 pointer-events-none group-hover:border-[#C8A75B]/25 transition-colors duration-500" />
      
      {/* Absolute elegant glowing background orb */}
      <div className="absolute w-24 h-24 bg-[#C8A75B]/5 rounded-full filter blur-xl group-hover:bg-[#C8A75B]/10 transition-colors duration-500" />
      
      {/* Centered Luxury Presentation */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
        <div className="p-3 bg-white/70 rounded-full border border-[#C8A75B]/15 shadow-xs group-hover:scale-105 transition-transform duration-300">
          {renderIcon()}
        </div>
        <div className="space-y-1 px-4">
          <span className="font-serif text-[#1F1F1F] text-xs sm:text-sm tracking-wide block font-semibold">
            {label}
          </span>
          <span className="font-sans text-[9px] text-[#C8A75B] uppercase tracking-[0.2em] block font-medium">
            AquivaGold Black Millenia
          </span>
        </div>
      </div>
      
      {/* Micro diagonal watermark */}
      <div className="absolute bottom-4 right-4 pointer-events-none opacity-20">
        <Sparkles size={11} className="text-[#C8A75B]" />
      </div>
    </div>
  );
}
