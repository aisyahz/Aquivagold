import React, { useState, useEffect } from "react";
import { X, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    additionalNotes: "",
  });

  // Flow 2 Form State
  const [consultForm, setConsultForm] = useState({
    fullName: "",
    phoneNumber: "",
    additionalNotes: "",
  });

  const [consultTopics, setConsultTopics] = useState<Record<string, boolean>>({
    "Penjagaan Kulit": false,
    "Keselesaan Wanita": false,
    "Keselesaan Lelaki": false,
    "Kesejahteraan Harian": false,
    "Kesihatan Dalaman": false,
    "Tidak Pasti": false,
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setConsultForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const toggleTopic = (topic: string) => {
    setConsultTopics((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const name = activeFlow === "buy" ? buyForm.fullName : consultForm.fullName;
    const phone = activeFlow === "buy" ? buyForm.phoneNumber : consultForm.phoneNumber;

    if (!name.trim()) {
      newErrors.fullName = "Nama Penuh diperlukan untuk pendaftaran";
    }

    if (!phone.trim()) {
      newErrors.phoneNumber = "Nombor Telefon diperlukan untuk dihubungi";
    } else {
      const sanitizedPhone = phone.replace(/[\s-]/g, "");
      if (sanitizedPhone.length < 8 || !/^\+?[0-9]+$/.test(sanitizedPhone)) {
        newErrors.phoneNumber = "Sila isi nombor telefon yang sah";
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
      const greetingHeader = "Hi AquivaGold,\n\n";
      const nameLine = `Nama: ${buyForm.fullName}\n`;
      const phoneLine = `Telefon: ${buyForm.phoneNumber}\n`;
      const interestLine = `Produk / Minat: ${buyForm.productInterested}\n`;
      const noteLine = buyForm.additionalNotes.trim()
        ? `Mesej:\n${buyForm.additionalNotes}\n\n`
        : "";
      const footerText = "Boleh saya dapatkan maklumat harga dan cara penggunaan?\n\nTerima kasih.";

      fullMessage = greetingHeader + nameLine + phoneLine + interestLine + noteLine + footerText;
    } else {
      // Flow 2 Consultation WhatsApp message
      const selectedTopics = Object.entries(consultTopics)
        .filter(([_, checked]) => checked)
        .map(([topic]) => `- ${topic}`)
        .join("\n");

      const greetingHeader = "Hi AquivaGold,\n\n";
      const nameLine = `Nama: ${consultForm.fullName}\n`;
      const phoneLine = `Telefon: ${consultForm.phoneNumber}\n`;
      const interestLine = "Produk / Minat: Konsultasi Percuma\n";
      const topicsLine = selectedTopics
        ? `Topik Perbincangan:\n${selectedTopics}\n`
        : "";
      const noteLine = consultForm.additionalNotes.trim()
        ? `Mesej:\n${consultForm.additionalNotes}\n\n`
        : "";
      const footerText = "Mohon cadangan yang sesuai.\n\nTerima kasih.";

      fullMessage = greetingHeader + nameLine + phoneLine + interestLine + topicsLine + noteLine + footerText;
    }

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/601139900920?text=${encodedMessage}`;

    setIsSubmitting(false);
    onClose();
    window.location.href = whatsappUrl;
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
                AQUIVAGOLD
              </span>
              
              {activeFlow === "buy" ? (
                <>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
                    Tempahan &amp; Pertanyaan Produk
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-light font-light max-w-sm mx-auto mt-2 leading-relaxed">
                    Sila isi butiran mudah berikut. Perunding sah kami akan segera melayani pesanan premium anda menerusi WhatsApp.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
                    Konsultasi Percuma
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-light font-light max-w-sm mx-auto mt-2 leading-relaxed">
                    Tidak pasti produk yang sesuai? Pasukan butik berpengalaman kami sedia membantu anda memilih produk yang bersesuaian.
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
                Beli Produk
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
                Perlukan Konsultasi?
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
                  Nama Penuh <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="cth. Datin Sophia"
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
                  Nombor Telefon <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="cth. 012-3456789"
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

              {/* FLOW 1 Specfic: Product Selection Dropdown */}
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
                    <option value="Black Millenia Spray">Black Millenia Spray (RM 280)</option>
                    <option value="Black Millenia Essence">Black Millenia Essence (RM 390)</option>
                    <option value="Black Millenia Drop">Black Millenia Drop (RM 480)</option>
                    <option value="Saya Tidak Pasti">Saya Tidak Pasti</option>
                  </select>
                </div>
              )}

              {/* FLOW 2 Specific: Large checkable grid options */}
              {activeFlow === "consult" && (
                <div className="space-y-2">
                  <span className="block text-xs md:text-sm font-semibold uppercase tracking-wider text-charcoal">
                    Apakah yang anda ingin bincangkan?
                  </span>
                  
                  {/* Grid of highly clickable checklist selections */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {Object.keys(consultTopics).map((topic) => {
                      const isChecked = consultTopics[topic];
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => toggleTopic(topic)}
                          className={`flex items-center space-x-3 p-3 text-left border rounded-md cursor-pointer transition-all duration-300 select-none min-h-[46px] ${
                            isChecked
                              ? "bg-gold/15 border-gold shadow-xs"
                              : "bg-white/60 border-stone/50 hover:border-gold/50"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all duration-150 ${
                            isChecked ? "bg-gold border-gold text-white" : "border-stone-400 bg-white"
                          }`}>
                            {isChecked && <Check size={14} strokeWidth={3} />}
                          </div>
                          <span className="text-xs md:text-sm font-medium text-charcoal">
                            {topic}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Optional Textarea field - Larger size */}
              <div>
                <label 
                  htmlFor="additionalNotes" 
                  className="block text-xs md:text-sm font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                >
                  {activeFlow === "buy" ? "Mesej Tambahan (Pilihan)" : "Terangkan keadaan anda (Pilihan)"}
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  placeholder={
                    activeFlow === "buy" 
                      ? "Sila berikan maklumat tambahan di sini jika ada..." 
                      : "Sila kongsi kebimbangan kesihatan atau soalan anda kepada kami secara mesra..."
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
                className="w-full mt-3 cursor-pointer py-4 px-6 bg-charcoal hover:bg-charcoal-light text-white uppercase text-sm tracking-widest font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 rounded-md min-h-[50px]"
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
                    <span>{activeFlow === "buy" ? "WhatsApp Sekarang" : "Dapatkan Konsultasi"}</span>
                  </>
                )}
              </button>

              {/* Security Badges / Assurance */}
              <div className="text-center pt-1.5 border-t border-stone/20">
                <span className="text-[11px] text-charcoal-light/70 text-center block leading-relaxed">
                  🛡️ Kurasi Rundingan &amp; Penghantaran yang Selamat. Bebas MLM, perunding peribadi mesra.
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
