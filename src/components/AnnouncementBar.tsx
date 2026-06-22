import React, { useEffect, useState } from "react";

export default function AnnouncementBar() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const announcementText = "🔥 HARGA PROMOSI PENGENALAN TERHAD! PENGHANTARAN SELURUH MALAYSIA 🇲🇾 DAPATKAN SEKARANG SEBELUM KEMBALI ASAL (RUGI BESAR KALAU KORANG TERLEPAS!) 🔥";

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        .animate-marquee-track {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div 
        className="w-full bg-[#111111] border-b border-[#B58D20]/25 h-[36px] sm:h-[40px] flex items-center overflow-hidden relative select-none z-50 bg-gradient-to-r from-stone-900 via-[#111111] to-stone-900"
        id="announcement-bar"
      >
        {prefersReducedMotion ? (
          // Accessible statically centered text on mobile/desktop for user preference
          <div className="w-full flex justify-center items-center px-4">
            <span className="text-[#B58D20] text-[9.5px] sm:text-[11px] font-sans uppercase tracking-[0.1em] font-extrabold text-center truncate">
              {announcementText}
            </span>
          </div>
        ) : (
          // Infinite marquee with smooth continuous translation on all screens including mobile
          <div className="w-full whitespace-nowrap flex items-center overflow-hidden">
            <div className="animate-marquee-track flex items-center shrink-0">
              {[...Array(4)].map((_, idx) => (
                <span 
                  key={`track1-${idx}`} 
                  className="mx-4 sm:mx-8 text-[#B58D20] text-[10px] sm:text-[11.5px] font-sans uppercase tracking-[0.14em] font-extrabold flex items-center gap-2 sm:gap-4 shrink-0"
                >
                  <span className="w-1.5 h-1.5 bg-[#B58D20] rounded-full opacity-60 shrink-0" />
                  <span>{announcementText}</span>
                </span>
              ))}
            </div>
            <div className="animate-marquee-track flex items-center shrink-0" aria-hidden="true">
              {[...Array(4)].map((_, idx) => (
                <span 
                  key={`track2-${idx}`} 
                  className="mx-4 sm:mx-8 text-[#B58D20] text-[10px] sm:text-[11.5px] font-sans uppercase tracking-[0.14em] font-extrabold flex items-center gap-2 sm:gap-4 shrink-0"
                >
                  <span className="w-1.5 h-1.5 bg-[#B58D20] rounded-full opacity-60 shrink-0" />
                  <span>{announcementText}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
