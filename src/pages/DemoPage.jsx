import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import DemoIntro from '@/components/demo/DemoIntro';
import DemoTelegramAlert from '@/components/demo/DemoTelegramAlert';
import DemoDashboardView from '@/components/demo/DemoDashboardView';
import DemoMapView from '@/components/demo/DemoMapView';
import DemoImpact from '@/components/demo/DemoImpact';
import DemoMalagueno from '@/components/demo/DemoMalagueno';

import DemoClosing from '@/components/demo/DemoClosing';

const sections = [
    { id: 'demo-intro', label: 'Inicio', number: '01' },
    { id: 'demo-alert', label: 'Alerta', number: '02' },
    { id: 'demo-dashboard', label: 'Dashboard', number: '03' },
    { id: 'demo-map', label: 'Mapa', number: '04' },
    { id: 'demo-impact', label: 'Impacto', number: '05' },
    { id: 'demo-malagueno', label: 'Tu Ciudad', number: '06' },
    { id: 'demo-closing', label: 'Cierre', number: '07' },
];

const DemoPage = () => {
    const [activeSection, setActiveSection] = useState('demo-intro');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 600);

            // Determine active section
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i].id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3) {
                        setActiveSection(sections[i].id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>DEMO – Sistema de Alerta de Incendios (SAI)</title>
                <meta name="description" content="Demo interactiva del Sistema de Alerta de Incendios. Monitoreo inteligente en tiempo real para municipios. Simulación completa del flujo operativo." />
            </Helmet>

            {/* Side navigation - desktop only */}
            <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-1">
                {sections.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className="group flex items-center gap-3 py-1.5 transition-all"
                    >
                        <span className={`text-[10px] font-mono transition-all duration-300 ${activeSection === s.id
                            ? 'opacity-100 text-[#FF5C00] translate-x-0'
                            : 'opacity-0 text-white/50 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                            }`}>
                            {s.label}
                        </span>
                        <div className={`transition-all duration-300 rounded-full ${activeSection === s.id
                            ? 'w-3 h-3 bg-[#FF5C00] shadow-lg shadow-[#FF5C00]/30'
                            : 'w-1.5 h-1.5 bg-white/20 group-hover:bg-white/40'
                            }`} />
                    </button>
                ))}
            </nav>

            {/* Main content */}
            <div className="bg-[#0B2822] min-h-screen">
                <DemoIntro />

                {/* Divider */}
                <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-[#FF5C00]/30 to-transparent" />

                <DemoTelegramAlert />

                <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <DemoDashboardView />

                <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                <DemoMapView />

                <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

                <DemoImpact />

                <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-[#00FF9D]/30 to-transparent" />

                <DemoMalagueno />

                <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-[#FF5C00]/30 to-transparent" />

                <DemoClosing />
            </div>

            {/* Scroll to top button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-20 right-6 z-40 p-3 rounded-xl bg-white/10 border border-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all backdrop-blur-md"
                        aria-label="Volver arriba"
                    >
                        <ChevronUp className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default DemoPage;
