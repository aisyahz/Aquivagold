import { useState, useEffect } from "react";
import { Product } from "./types";

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomerJourneys from "./components/CustomerJourneys";
import About from "./components/About";
import Collection from "./components/Collection";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import WhatsAppCTA from "./components/WhatsAppCTA";
import StickyWhatsApp from "./components/StickyWhatsApp";
import Footer from "./components/Footer";
import ProductDetailModal from "./components/ProductDetailModal";
import LeadPopup from "./components/LeadPopup";
import AgentPage from "./components/AgentPage";

export default function App() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [leadFormFlow, setLeadFormFlow] = useState<"buy" | "consult">("consult");

  // Custom state-based path routing for /agent
  const [currentView, setCurrentView] = useState<"home" | "agent">(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname === "/agent" ? "agent" : "home";
    }
    return "home";
  });

  const navigateTo = (view: "home" | "agent") => {
    setCurrentView(view);
    if (typeof window !== "undefined") {
      const newPath = view === "agent" ? "/agent" : "/";
      window.history.pushState({}, "", newPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(window.location.pathname === "/agent" ? "agent" : "home");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
      
      {/* Floating Translucent Header with routing capabilities */}
      <Header
        onOpenConsultation={() => handleOpenConsultation("consult", "")}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {currentView === "home" ? (
        <>
          {/* Section 1: Hero Section Banner */}
          <Hero onOpenConsultation={() => handleOpenConsultation("consult", "")} />

          {/* Section 2: Three Main Customer Journeys */}
          <CustomerJourneys
            onGoToProducts={() => {
              const el = document.getElementById("collection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            onOpenConsultation={() => handleOpenConsultation("consult", "")}
            onGoToAgent={() => navigateTo("agent")}
          />

          {/* About Section story block */}
          <About />

          {/* Section 3: Featured Products (Horizontal Alternating list showing only key 3 products) */}
          <Collection
            onSelectProduct={handleSelectProduct}
            onOpenConsultation={(productTitle) => handleOpenConsultation("buy", productTitle)}
          />

          {/* 4 Brand Virtues grid */}
          <WhyChooseUs />

          {/* Section 4: Customer voice / Reviews block (Testimonials) */}
          <Reviews />

          {/* Section 5: Frequently Asked Questions (FAQ) */}
          <FAQ />

          {/* Section 6: Welcoming Luxury WhatsApp CTA Section */}
          <WhatsAppCTA onOpenConsult={() => handleOpenConsultation("consult", "")} />
        </>
      ) : (
        /* Dedicated /agent Page view */
        <AgentPage onBackToHome={() => navigateTo("home")} />
      )}

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
