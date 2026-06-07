import { useState } from "react";
import { Product } from "./types";

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Collection from "./components/Collection";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import StickyWhatsApp from "./components/StickyWhatsApp";
import Footer from "./components/Footer";
import ProductDetailModal from "./components/ProductDetailModal";
import LeadPopup from "./components/LeadPopup";

export default function App() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [leadFormFlow, setLeadFormFlow] = useState<"buy" | "consult">("consult");

  // Set selected product to null and trigger consultation pop window
  const handleOpenConsultation = (flow: "buy" | "consult" = "consult", productTitle: string = "") => {
    setLeadFormFlow(flow);
    setPreselectedProduct(productTitle);
    setIsLeadFormOpen(true);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="bg-[#FAF8F3] text-charcoal font-sans relative min-h-screen selection:bg-gold selection:text-white" id="main-layout-container">
      
      {/* Floating Translucent Header */}
      <Header onOpenConsultation={() => handleOpenConsultation("consult", "")} />

      {/* Hero Section Banner */}
      <Hero onOpenConsultation={() => handleOpenConsultation("consult", "")} />

      {/* About Section story block */}
      <About />

      {/* Horizontal Alternating Product cards list */}
      <Collection
        onSelectProduct={handleSelectProduct}
        onOpenConsultation={(productTitle) => handleOpenConsultation("buy", productTitle)}
      />

      {/* 4 Brand Virtues grid */}
      <WhyChooseUs />

      {/* Customer voice / Reviews block */}
      <Reviews />

      {/* Frequently Asked Questions accordion lines */}
      <FAQ />

      {/* Footer information bar */}
      <Footer onOpenConsultation={() => handleOpenConsultation("consult", "")} />

      {/* Persistent floating pulsing support trigger in the corner */}
      <StickyWhatsApp onClick={() => handleOpenConsultation("consult", "")} />

      {/* Modals & Popups layout */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenConsultation={(title) => {
          setSelectedProduct(null);
          handleOpenConsultation("buy", title);
        }}
      />

      <LeadPopup
        isOpen={isLeadFormOpen}
        onClose={() => {
          setIsLeadFormOpen(false);
          setPreselectedProduct("");
        }}
        preselectedProduct={preselectedProduct}
        initialFlow={leadFormFlow}
      />

    </div>
  );
}
