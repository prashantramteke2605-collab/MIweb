import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "sonner";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

import HomePage from "@/pages/HomePage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";

import "@/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomCursor />
        <NoiseOverlay />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case/:slug" element={<CaseStudyPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
        
        <Toaster
          position="bottom-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#0a0a12",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.08)",
            },
          }}
        />
      </BrowserRouter>
      
      {/* Vercel Web Analytics Component */}
      <Analytics />
    </div>
  );
}

export default App;