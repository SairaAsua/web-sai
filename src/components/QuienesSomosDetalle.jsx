import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const QuienesSomosDetalle = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('aboutUsDetail.title')} - SAI</title>
        <meta name="description" content="Información detallada sobre la iniciativa SAI, el equipo de AlterMundi y nuestra tecnología de detección de incendios." />
      </Helmet>

      <div className="min-h-screen bg-[#0B2822] text-[#F5F6FA] pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/quienes-somos')}
            className="flex items-center gap-2 text-[#FF5C00] hover:text-white transition-colors mb-10 font-montserrat font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('aboutUsDetail.back')}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold font-montserrat text-white leading-tight">
              {t('aboutUsDetail.title')} <span className="text-[#FF5C00]">{t('aboutUsDetail.titleHighlight')}</span>
            </h1>

            <div className="space-y-6 text-lg text-[#F5F6FA]/90 font-roboto leading-relaxed text-justify">
              <p>
                <strong className="text-white">{t('aboutUsDetail.p1_bold')}</strong> {t('aboutUsDetail.p1_text')} <strong>{t('aboutUsDetail.p1_bold2')}</strong> {t('aboutUsDetail.p1_end')}
              </p>

              <p>{t('aboutUsDetail.p2')}</p>

              <p>{t('aboutUsDetail.p3')}</p>

              <div className="bg-[#F5F6FA]/5 p-6 rounded-xl border-l-4 border-[#FF5C00] my-8">
                <p className="italic">
                  {t('aboutUsDetail.p4')}
                </p>
              </div>

              <p>{t('aboutUsDetail.p5')}</p>

              <p>{t('aboutUsDetail.p6')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default QuienesSomosDetalle;