import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Scale } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#0B2822] min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-[#F5F6FA]/5 rounded-2xl p-8 md:p-12 border border-[#F5F6FA]/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#F5F6FA]/10">
            <div className="w-16 h-16 bg-[#FF5C00] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF5C00]/20">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat">
                {t('terms.title')}
              </h1>
              <p className="text-[#F5F6FA]/60 mt-2">
                {t('terms.lastUpdate')}
              </p>
            </div>
          </div>

          <div className="space-y-8 text-[#F5F6FA]/80 font-roboto leading-relaxed text-justify">

            <section>
              <p className="mb-6">
                {t('terms.intro.p1')}
              </p>
              <p className="mb-6">
                <strong>{t('terms.intro.contact')}</strong><br />
                {t('terms.intro.writeUs')} <a href="mailto:info@altermundi.net" className="text-[#FF5C00] hover:underline">info@altermundi.net</a>.
              </p>
              <p className="mb-6">
                <strong>{t('terms.intro.hq')}</strong><br />
                {t('terms.intro.hqAddr')}
              </p>
              <p>
                {t('terms.intro.accept')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s1.title')}
              </h2>
              <p>
                {t('terms.sections.s1.text')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s2.title')}
              </h2>
              <p className="mb-4">
                {t('terms.sections.s2.text')}
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#FF5C00]">
                <li>{t('terms.sections.s2.l1')}</li>
                <li>{t('terms.sections.s2.l2')}</li>
                <li>{t('terms.sections.s2.l3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s3.title')}
              </h2>
              <p className="mb-4 bg-[#FF5C00]/10 p-4 rounded-lg border border-[#FF5C00]/20">
                {t('terms.sections.s3.text')}
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#FF5C00]">
                <li>{t('terms.sections.s3.l1')}</li>
                <li>{t('terms.sections.s3.l2')}</li>
                <li>{t('terms.sections.s3.l3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s4.title')}
              </h2>
              <p className="mb-4">
                {t('terms.sections.s4.text')}
              </p>
              <p>
                {t('terms.sections.s4.note')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s5.title')}
              </h2>
              <p className="mb-4">
                {t('terms.sections.s5.text')}
              </p>
              <p className="mb-4">
                {t('terms.sections.s5.repos')}<br />
                <a href="https://github.com/AlterMundi/sai-sainet-latest" className="text-[#FF5C00] hover:underline">https://github.com/AlterMundi/sai-sainet-latest</a><br />
                <a href="https://github.com/AlterMundi/sai-cam" className="text-[#FF5C00] hover:underline">https://github.com/AlterMundi/sai-cam</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s6.title')}
              </h2>
              <p className="mb-4">
                {t('terms.sections.s6.text')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s7.title')}
              </h2>
              <p>
                {t('terms.sections.s7.text')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s8.title')}
              </h2>
              <p>
                {t('terms.sections.s8.text')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s9.title')}
              </h2>
              <p>
                {t('terms.sections.s9.text')}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#FF5C00]" />
                {t('terms.sections.s10.title')}
              </h2>
              <p>
                {t('terms.sections.s10.text')} <a href="mailto:info@altermundi.net" className="text-[#FF5C00] hover:underline">info@altermundi.net</a>
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;