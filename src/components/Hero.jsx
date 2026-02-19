import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import CyberForestBackground from '@/components/CyberForestBackground';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 lg:pt-32">
      {/* Dynamic Cyber Forest Background */}
      <CyberForestBackground />

      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[#0B2822] opacity-60" />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/22c3294aaed1732088dcfcd72c5c341f.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(30%)'
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(245, 246, 250, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 246, 250, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat text-white leading-none mb-6 tracking-tight">
              {t('hero.title')}
              <span className="text-2xl md:text-4xl lg:text-5xl font-normal text-[#F5F6FA]/80 block mt-4 leading-tight">
                {t('hero.subtitle')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#F5F6FA]/80 mb-10 max-w-xl mx-auto lg:mx-0 font-roboto leading-relaxed border-l-4 border-[#FF5C00] pl-6 text-left">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white font-montserrat font-bold px-8 py-6 text-lg"
                onClick={() => navigate('/contacto')}
              >
                {t('hero.requestDemo')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#F5F6FA]/20 text-[#F5F6FA] hover:bg-[#F5F6FA]/10 font-mono py-6 text-lg"
                onClick={() => navigate('/demo')}
              >
                Ver Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Detection Frame */}
            <div className="relative rounded-lg overflow-hidden border border-[#FF5C00]/30 shadow-2xl shadow-[#0B2822]/50 group">
              <img
                src="https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/22c3294aaed1732088dcfcd72c5c341f.jpg"
                alt="Detección de Humo IA"
                className="w-full h-auto object-cover filter brightness-90 contrast-110"
              />

              {/* UI Overlay - Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2822]/80 via-transparent to-[#0B2822]/40" />

              {/* Data Overlay */}
              <div className="absolute top-4 left-4 font-mono text-xs text-[#F5F6FA]/80">
                <p>CAM_ID: NODE_04_SIERRAS</p>
                <p>LAT: -31.4167 S</p>
                <p>LNG: -64.1833 W</p>
              </div>

              <div className="absolute top-4 right-4 font-mono text-xs text-[#FF5C00] animate-pulse">
                ● {t('hero.rec')}
              </div>

              {/* Real detection text */}
              <div className="absolute top-16 left-4 right-4 text-center">
                <p className="text-white/90 font-mono text-sm bg-[#FF5C00]/20 px-4 py-2 rounded border border-[#FF5C00]/40 inline-block">
                  {t('hero.detectionReal')}
                </p>
              </div>

              {/* Bottom Alert Panel */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded border border-[#FF5C00]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FF5C00]/20 p-2 rounded">
                    <Crosshair className="w-5 h-5 text-[#FF5C00]" />
                  </div>
                  <div>
                    <p className="text-[#FF5C00] font-bold font-mono text-xs tracking-wider">{t('hero.alertConfirmed')}</p>
                    <p className="text-white text-sm font-roboto">{t('hero.smokeDetected')}</p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-[#F5F6FA]/60 font-mono text-xs">{t('hero.certainty')}</p>
                  <p className="text-white font-bold font-mono text-xl">0.75%</p>
                </div>
              </div>
            </div>

            {/* Decorative Tech Elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#F5F6FA]/10 rounded-tr-3xl" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#F5F6FA]/10 rounded-bl-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;