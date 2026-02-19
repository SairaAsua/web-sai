import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F6FA]/5 border border-[#F5F6FA]/10 hover:border-[#FF5C00]/50 hover:bg-[#FF5C00]/10 transition-all group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
      role="button"
    >
      <Globe className="w-4 h-4 text-[#F5F6FA]/70 group-hover:text-[#FF5C00] transition-colors" />
      <div className="flex gap-1 font-mono text-sm">
        <span className={`transition-all ${language === 'en' ? 'text-[#FF5C00] font-bold' : 'text-[#F5F6FA]/50'}`}>
          EN
        </span>
        <span className="text-[#F5F6FA]/30">|</span>
        <span className={`transition-all ${language === 'es' ? 'text-[#FF5C00] font-bold' : 'text-[#F5F6FA]/50'}`}>
          ES
        </span>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;