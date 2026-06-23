import React, { useState, useEffect } from "react";
import { Product } from "./types";

// Layout & Global Components
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyWhatsApp from "./components/StickyWhatsApp";
import LeadPopup from "./components/LeadPopup";
import TrustStrip from "./components/TrustStrip";
import ComboDealPopup from "./components/ComboDealPopup";

// Sub View Pages (8 Pages)
import HomeView from "./components/views/HomeView";
import ProductsView from "./components/views/ProductsView";
import AdvantagesView from "./components/views/AdvantagesView";
import TestimonialsView from "./components/views/TestimonialsView";
import CertificationsView from "./components/views/CertificationsView";
import EntrepreneursView from "./components/views/EntrepreneursView";
import AboutView from "./components/views/AboutView";
import FAQView from "./components/views/FAQView";

export default function App() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState("");
  const [leadFormFlow, setLeadFormFlow] = useState<"buy" | "consult">("consult");

  // State-based view router covering all of the 8 pages
  const [currentView, setCurrentView] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.replace(/^\/+/g, "");
      if (path && ["home", "koleksi", "kelebihan", "testimoni", "pensijilan", "usahawan", "tentang-kami", "faq"].includes(path)) {
        return path;
      }
    }
    return "home";
  });

  const navigateTo = (view: string) => {
    setCurrentView(view);
    if (typeof window !== "undefined") {
      const newPath = view === "home" ? "/" : `/${view}`;
      window.history.pushState({}, "", newPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/+/g, "");
      if (path && ["home", "koleksi", "kelebihan", "testimoni", "pensijilan", "usahawan", "tentang-kami", "faq"].includes(path)) {
        setCurrentView(path);
      } else {
        setCurrentView("home");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleOpenConsultation = (flow: "buy" | "consult" = "consult", productTitle: string = "") => {
    setLeadFormFlow(flow);
    setPreselectedProduct(productTitle);
    setIsLeadFormOpen(true);
  };

  // Rendering logic selector
  const renderViewContent = () => {
    switch (currentView) {
      case "koleksi":
        return <ProductsView onOpenConsultation={handleOpenConsultation} />;
      case "kelebihan":
        return <AdvantagesView onNavigate={navigateTo} />;
      case "testimoni":
        return <TestimonialsView />;
      case "pensijilan":
        return <CertificationsView />;
      case "usahawan":
        return <EntrepreneursView />;
      case "tentang-kami":
        return <AboutView />;
      case "faq":
        return <FAQView />;
      case "home":
      default:
        return (
          <HomeView 
            onNavigate={navigateTo} 
            onOpenConsultation={handleOpenConsultation} 
          />
        );
    }
  };

  return (
    <div className="bg-[#F6F3EE] text-[#1F1F1F] font-sans relative min-h-screen selection:bg-[#C8A75B] selection:text-white" id="main-layout-container">
      
      {/* Top scrolling announcement banner */}
      <AnnouncementBar />

      {/* Floating Translucent Header with elegant navigation */}
      <Header
        onOpenConsultation={() => handleOpenConsultation("consult", "")}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {/* Main content viewport block styled with comfortable top padding, adjusted for the responsive AnnouncementBar height */}
      <main className="pt-[112px] sm:pt-[116px] lg:pt-[124px] min-h-[calc(100vh-400px)]">
        {renderViewContent()}
      </main>

      {/* Trust factors compliance strip */}
      <TrustStrip />

      {/* Footer information bar */}
      <Footer 
        onOpenConsultation={() => handleOpenConsultation("consult", "")} 
        onNavigate={navigateTo}
      />

      {/* Persistent floating pulsing support trigger in the corner */}
      <StickyWhatsApp onClick={() => handleOpenConsultation("consult", "")} />

      {/* Modals & Lead popup form */}
      <LeadPopup
        isOpen={isLeadFormOpen}
        onClose={() => {
          setIsLeadFormOpen(false);
          setPreselectedProduct("");
        }}
        preselectedProduct={preselectedProduct}
        initialFlow={leadFormFlow}
      />

      {/* Specialty 230626 Landing Combo Deal Modal */}
      <ComboDealPopup currentView={currentView} />

    </div>
  );
}
