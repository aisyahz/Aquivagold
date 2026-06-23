import React, { useState, useEffect } from "react";
import { X, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MALAYSIAN_STATES } from "../data";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
  initialFlow?: "buy" | "consult";
}

export default function LeadPopup({
  isOpen,
  onClose,
  preselectedProduct = "",
  initialFlow = "consult"
}: LeadPopupProps) {
  const [activeFlow, setActiveFlow] = useState<"buy" | "consult">("consult");

  // Flow 1 Form State
  const [buyForm, setBuyForm] = useState({
    fullName: "",
    phoneNumber: "",
    productInterested: "Saya Tidak Pasti",
    state: "Selangor",
    additionalNotes: "",
  });

  // Flow 2 Form State
  const [consultForm, setConsultForm] = useState({
    fullName: "",
    phoneNumber: "",
    state: "Selangor",
    additionalNotes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize state when the popup opens
  useEffect(() => {
    if (isOpen) {
      setActiveFlow(initialFlow);
      setErrors({});
      setIsSubmitting(false);

      if (preselectedProduct) {
        setBuyForm((prev) => ({
          ...prev,
          productInterested: preselectedProduct,
        }));
        // If there is a preselected product, default to buy flow
        setActiveFlow("buy");
      } else {
        setBuyForm((prev) => ({
          ...prev,
          productInterested: "Saya Tidak Pasti",
        }));
      }
    }
  }, [isOpen, initialFlow, preselectedProduct]);

  const handleBuyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBuyForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleConsultChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setConsultForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const name = activeFlow === "buy" ? buyForm.fullName : consultForm.fullName;
    const phone = activeFlow === "buy" ? buyForm.phoneNumber : consultForm.phoneNumber;

    if (!name.trim()) {
      newErrors.fullName = "Sila isi Nama Panggilan / Penuh anda";
    }

    if (!phone.trim()) {
      newErrors.phoneNumber = "Sila isi Nombor Telefon / WhatsApp anda";
    } else {
      const sanitizedPhone = phone.replace(/[\s-]/g, "");
      if (sanitizedPhone.length < 8 || !/^\+?[0-9]+$/.test(sanitizedPhone)) {
        newErrors.phoneNumber = "Sila masukkan nombor telefon yang sah (cth: 0191234567)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    let fullMessage = "";

    if (activeFlow === "buy") {
      // Flow 1 Buy Product WhatsApp message
      // Pre-filled WhatsApp message including: Product, Name, Phone, State
      const greetingHeader = "Hi AQUIVA GOLD,\n\nSaya berminat untuk menempah produk berikut:\n\n";
      const productLine = `*Produk:* ${buyForm.productInterested}\n`;
      const nameLine = `*Nama:* ${buyForm.fullName}\n`;
      const phoneLine = `*Telefon:* ${buyForm.phoneNumber}\n`;
      const stateLine = `*Negeri Tinggal:* ${buyForm.state}\n`;
      const noteLine = buyForm.additionalNotes.trim()
        ? `*Nota Tambahan:* ${buyForm.additionalNotes}\n\n`
        : "";
      const footerText = "\nSila bantu saya uruskan pesanan ini melalui WhatsApp. Terima kasih!";

      fullMessage = greetingHeader + productLine + nameLine + phoneLine + stateLine + noteLine + footerText;
    } else {
      // Flow 2 Consultation WhatsApp message including: Product, Name, Phone, State
      const greetingHeader = "Hi AQUIVA GOLD,\n\nSaya ingin mendapatkan Sembang Rundingan Kesejahteraan Percuma:\n\n";
      const nameLine = `*Nama:* ${consultForm.fullName}\n`;
      const phoneLine = `*Telefon:* ${consultForm.phoneNumber}\n`;
      const stateLine = `*Negeri Tinggal:* ${consultForm.state}\n`;
      const noteLine = consultForm.additionalNotes.trim()
        ? `*Keadaan / Soalan Saya:* ${consultForm.additionalNotes}\n\n`
        : "";
      const footerText = "\nMohon maklum balas dan cadangan daripada perunding. Terima kasih.";

      fullMessage = greetingHeader + nameLine + phoneLine + stateLine + noteLine + footerText;
    }

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/601139900920?text=${encodedMessage}`;

    setIsSubmitting(false);
    onClose();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            id="popup-backdrop"
          />

          {/* Modal Card Layout */}
          <motion.div
            className="relative w-full max-w-lg overflow-y-auto max-h-[92vh] glass-panel bg-[#FAF8F3]/95 border-2 border-gold/40 rounded-xl shadow-2xl p-6 md:p-8 luxury-shadow"
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            id="popup-modal"
          >
            {/* Elegant Header Background Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-charcoal-light hover:text-gold hover:bg-beige transition-colors duration-200 cursor-pointer"
              aria-label="Tutup"
              id="close-popup-btn"
            >
              <X size={22} className="text-charcoal-light hover:text-gold" />
            </button>

            {/* Brand Header */}
            <div className="text-center mb-6 mt-1">
              <span className="font-display text-xs uppercase tracking-widest text-[#C9A227] font-semibold block mb-1">
                AQUIVA GOLD
              </span>
              
              {activeFlow === "buy" ? (
                <>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
                    Pesanan WhatsApp Mesra
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-light/80 font-light max-w-sm mx-auto mt-2 leading-relaxed">
                    Sila isi butiran mudah berikut. Pembantu butik kami sedia membantu menguruskan pesanan anda secara selamat, tertib, dan tenang menerusi WhatsApp.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
                    Rundingan &amp; Bimbingan Percuma
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-light/80 font-light max-w-sm mx-auto mt-2 leading-relaxed">
                    Sembang santai bersama Perunding Peribadi kami. 100% selesa, ramah, jujur, serta bebas dari sebarang paksaan membeli.
                  </p>
                </>
              )}
            </div>

            {/* Minimalist Tab Selector with Larger Tap Targets */}
            <div className="flex border-b border-stone/30 mb-6 gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveFlow("buy");
                  setErrors({});
                }}
                className={`flex-1 pb-3 text-xs md:text-sm uppercase tracking-widest font-semibold border-b-2 transition-all duration-300 cursor-pointer min-h-[44px] ${
                  activeFlow === "buy"
                    ? "border-gold text-charcoal font-bold"
                    : "border-transparent text-charcoal-light/40 hover:text-charcoal"
                }`}
              >
                Pesan Produk
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveFlow("consult");
                  setErrors({});
                }}
                className={`flex-1 pb-3 text-xs md:text-sm uppercase tracking-widest font-semibold border-b-2 transition-all duration-300 cursor-pointer min-h-[44px] ${
                  activeFlow === "consult"
                    ? "border-gold text-charcoal font-bold"
                    : "border-transparent text-charcoal-light/40 hover:text-charcoal"
                }`}
              >
                Sembang Rundingan
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5" id="customer-flow-form">
              
              {/* Common Fields: Full Name & Phone - Larger fonts and touch fields */}
              <div>
                <label 
                  htmlFor="fullName" 
                  className="block text-xs md:text-sm font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                >
                  Nama Panggilan / Nama Penuh <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="cth. Kak Sophia / Haji Ahmad"
                  value={activeFlow === "buy" ? buyForm.fullName : consultForm.fullName}
                  onChange={activeFlow === "buy" ? handleBuyChange : handleConsultChange}
                  className={`w-full px-4 py-3 bg-white/70 backdrop-blur-xs border text-base text-charcoal focus:outline-none transition-all duration-300 rounded-md min-h-[48px] ${
                    errors.fullName 
                      ? "border-red-400 focus:border-red-500" 
                      : "border-stone focus:border-gold focus:ring-2 focus:ring-gold/20"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="phoneNumber" 
                  className="block text-xs md:text-sm font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                >
                  Nombor Telefon / WhatsApp <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="cth. 019-1234567"
                  value={activeFlow === "buy" ? buyForm.phoneNumber : consultForm.phoneNumber}
                  onChange={activeFlow === "buy" ? handleBuyChange : handleConsultChange}
                  className={`w-full px-4 py-3 bg-white/70 backdrop-blur-xs border text-base text-charcoal focus:outline-none transition-all duration-300 rounded-md min-h-[48px] ${
                    errors.phoneNumber 
                      ? "border-red-400 focus:border-red-500" 
                      : "border-stone focus:border-gold focus:ring-2 focus:ring-gold/20"
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.phoneNumber}</p>
                )}
              </div>

              {/* State (Negeri) Selection Dropdown - Captured for both flow states */}
              <div>
                <label 
                  htmlFor="state" 
                  className="block text-xs md:text-sm font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                >
                  Negeri Kita <span className="text-stone-400 font-normal text-xs">(Pilihan)</span>
                </label>
                <select
                  id="state"
                  name="state"
                  value={activeFlow === "buy" ? buyForm.state : consultForm.state}
                  onChange={activeFlow === "buy" ? handleBuyChange : handleConsultChange}
                  className="w-full px-4 py-3 bg-white border border-stone text-base text-charcoal focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 rounded-md min-h-[48px]"
                >
                  {MALAYSIAN_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* FLOW 1 Specific: Product Selection Dropdown */}
              {activeFlow === "buy" && (
                <div>
                  <label 
                    htmlFor="productInterested" 
                    className="block text-xs md:text-sm font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                  >
                    Produk Pilihan <span className="text-gold">*</span>
                  </label>
                  <select
                    id="productInterested"
                    name="productInterested"
                    value={buyForm.productInterested}
                    onChange={handleBuyChange}
                    className="w-full px-4 py-3 bg-white border border-stone text-base text-charcoal focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 rounded-md min-h-[48px]"
                  >
                    <option value="Black Millenia Water (BMW) Spray">Black Millenia Water (BMW) Spray (I.P: RM 59.00)</option>
                    <option value="Black Millenia Water (BMW) Essence">Black Millenia Water (BMW) Essence (I.P: RM 65.00)</option>
                    <option value="Black Millenia Water (BMW) Drop">Black Millenia Water (BMW) Drop (I.P: RM 179.00)</option>
                    <option value="Home Therapy Set">Home Therapy Set (RM 650)</option>
                    <option value="Saya Tidak Pasti">Saya Tidak Pasti</option>
                  </select>
                </div>
              )}

              {/* FLOW 2 Specific: Consultation Benefits Infobox instead of small checkbox grids */}
              {activeFlow === "consult" && (
                <div className="bg-[#FAF8F1] border border-[#C8A75B]/20 rounded-xl p-4 md:p-5 space-y-3 shadow-xs">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#C8A75B] font-mono">
                    ✦ Manfaat Rundingan Percuma Anda:
                  </span>
                  <div className="space-y-2.5 text-left font-sans text-[12.5px] text-charcoal/80 leading-relaxed font-light">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#C8A75B] mt-0.5 text-xs">✔</span>
                      <div>
                        <strong>Bimbingan Khusus:</strong> Cadangan produk terbaik yang sesuai mengikut keperluan kesegaran fizikal &amp; kulit anda.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#C8A75B] mt-0.5 text-xs">✔</span>
                      <div>
                        <strong>Kakitangan Mesra:</strong> Perunding yang sopan, mesra-warga-emas, bersedia membantu dengan sangat bertenang dan aman.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#C8A75B] mt-0.5 text-xs">✔</span>
                      <div>
                        <strong>100% Bebas Komitmen:</strong> Sembang santai sepuasnya tanpa sebarang paksaan agresif atau kewajipan membeli.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Optional Textarea field - Larger size */}
              <div>
                <label 
                  htmlFor="additionalNotes" 
                  className="block text-xs md:text-sm font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                >
                  {activeFlow === "buy" ? "Mesej & Keperluan Penghantaran (Pilihan)" : "Soalan / Keadaan Kesihatan Anda (Pilihan)"}
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  placeholder={
                    activeFlow === "buy" 
                      ? "Tuliskan jika ada permintaan tarikh hantaran, atau biarkan kosong untuk bincang di WhatsApp..." 
                      : "Sila kongsi kebimbangan kesihatan atau soalan anda kepada kami secara mesra (cth: sengal sendi, kulit kering)..."
                  }
                  rows={2}
                  value={activeFlow === "buy" ? buyForm.additionalNotes : consultForm.additionalNotes}
                  onChange={activeFlow === "buy" ? handleBuyChange : handleConsultChange}
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-xs border border-stone text-base text-charcoal focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none rounded-md"
                />
              </div>

              {/* Action Submit CTA Button with Larger/Bolder text */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-3 cursor-pointer py-4 px-6 bg-charcoal hover:bg-charcoal-light text-white uppercase text-xs md:text-sm tracking-widest font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 rounded-md min-h-[50px]"
                id="submit-flow-btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Menghubungi Perunding...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} className="text-gold" />
                    <span>{activeFlow === "buy" ? "Hantar Pesanan Ke WhatsApp" : "Mula Sembang Rundingan"}</span>
                  </>
                )}
              </button>

              {/* Security Badges / Assurance */}
              <div className="text-center pt-3.5 border-t border-stone/20 space-y-2">
                <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-1 text-[11px] text-charcoal-light/85">
                  <span className="flex items-center gap-1 font-medium">🛡️ Data Peribadi Rahsia &amp; Selamat</span>
                  <span className="hidden md:inline text-stone-300">&bull;</span>
                  <span className="flex items-center gap-1 font-medium">🚫 Bebas MLM / Bebas Paksaan Membeli</span>
                </div>
                <p className="text-[10px] text-charcoal-light/60 font-light leading-relaxed max-w-sm mx-auto">
                  Butiran anda terpelihara sepenuhnya. Perunding peribadi kami komited melayani anda dengan penuh sopan, hormat, amanah, dan rasa rendah diri.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
