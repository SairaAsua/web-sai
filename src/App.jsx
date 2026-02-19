import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Technology from '@/components/Technology';
import InteractiveMap from '@/components/InteractiveMap';
import AboutUs from '@/components/AboutUs';
import QuienesSomosDetalle from '@/components/QuienesSomosDetalle';
import News from '@/components/News';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import PresentationSlide from '@/components/PresentationSlide';
import SaiNodes from '@/components/SaiNodes';
import Terms from '@/components/Terms';
import { Toaster } from '@/components/ui/toaster';
import SaiPage from '@/pages/SaiNewPage';
import DemoPage from '@/pages/DemoPage';
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation';

function App() {
  return (
    <LanguageProvider>
      <Helmet>
        <html lang="es" />
        <title>SAI - Sistema de alerta temprana de incendios</title>
        <meta name="description" content="Detección temprana de focos de incendio utilizando Inteligencia Artificial. Nodos con Vigilancia autónoma 24/7." />
      </Helmet>
      <KeyboardNav />
      <ScrollToTop />
      <div className="min-h-screen bg-[#0B2822] flex flex-col font-roboto text-[#F5F6FA]">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF5C00] focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>

        <Header />

        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/tecnologia" element={<Technology />} />
            <Route path="/nodos-sai" element={<SaiNodes />} />
            <Route path="/mapa" element={<InteractiveMap />} />
            <Route path="/quienes-somos" element={<AboutUs />} />
            <Route path="/quienes-somos-detalle" element={<QuienesSomosDetalle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/presentacion" element={<PresentationSlide />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/sai" element={<SaiPage />} />
            <Route path="/demo" element={<DemoPage />} />
          </Routes>
        </main>

        <Footer />
        <Toaster />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/5493547469632"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0B2822]"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>
    </LanguageProvider>
  );
}

// Helper component to use the hook since it needs to be inside Router context, 
// and App is already inside Router in main.jsx. But wait, App IS inside BrowserRouter in main.jsx.
// However, to keep it clean, I'll just use it directly in App or create a small wrapper if needed.
// Actually, App is inside BrowserRouter, so I can use the hook directly in App component.
const KeyboardNav = () => {
  useKeyboardNavigation();
  return null;
};

export default App;