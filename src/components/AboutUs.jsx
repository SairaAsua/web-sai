import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const images = [
  "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/432943948daf804d4c3f9c75d37a9e94.jpg",
  "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/a99215e22a3106180139226245522ea5.jpg",
  "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/1376c9fec071ea4671cf875b900ab540.jpg",
  "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/b189a5f8307b221a03cb076b1d96f227.jpg",
  "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/730526e1ac40d2fcb9515c16e2c1f5a7.jpg",
  "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/364d2ef45386c31487c1643d20ecf38b.jpg",
  "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/044ef0dabd9970863c30a3be938a60b2.jpg",
  "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/26d5f65fa2913d47d8bb5cc5432aae2f.jpg",
  "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/1aa11020391405276389ceeadbd20f04.jpg"
];

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0B2822]">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Equipo SAI ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#00FF9D]/20 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-white mb-6 drop-shadow-2xl tracking-tight">
            {t('aboutUs.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-[#F5F6FA] font-light font-roboto leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-lg">
            {t('aboutUs.description')}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/quienes-somos-detalle')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FF5C00] text-white font-bold text-lg rounded-full hover:bg-[#E04F00] transition-all shadow-xl hover:shadow-[#FF5C00]/30 border-2 border-transparent hover:border-white/20"
          >
            {t('aboutUs.readMore')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 w-2 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;