import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('header.inicio'), path: '/' },
    { label: t('header.tecnologia'), path: '/tecnologia' },
    { label: t('header.comoFunciona'), path: '/como-funciona' },
    { label: t('header.nodosSai'), path: '/nodos-sai' },
    { label: t('header.mapa'), path: '/mapa' },
    { label: t('header.quienesSomos'), path: '/quienes-somos' },
    { label: t('header.blog'), path: '/blog' },
    { label: t('header.contacto'), path: '/contacto' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-panel-heavy shadow-2xl py-2' : 'bg-gradient-to-b from-[#0B2822] to-transparent py-4'
        }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#FF5C00]"
        style={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link
              to="/"
              className="flex items-center gap-3 group flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#0B2822] rounded-lg"
            >
              <div className="w-10 h-10 bg-[#FF5C00] rounded-lg flex items-center justify-center shadow-lg shadow-[#FF5C00]/20">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-montserrat tracking-tight text-white leading-none">
                  SAI
                </span>
                <span className="text-[10px] font-mono text-[#F5F6FA]/70 uppercase tracking-wider">
                  Sistema de Alerta
                </span>
              </div>
            </Link>

          </div>

          <nav className="w-full lg:w-auto overflow-x-auto hide-scrollbar border-y lg:border-none border-[#F5F6FA]/10 py-2 lg:py-0">
            <div className="flex items-center gap-1 min-w-max px-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#0B2822] ${isActive
                      ? 'text-[#FF5C00]'
                      : 'text-[#F5F6FA]/70 hover:text-[#FF5C00] hover:bg-[#F5F6FA]/5'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-lg"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 font-roboto">{item.label}</span>
                  </Link>
                );
              })}
              <div className="ml-2">
                <LanguageToggle />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;