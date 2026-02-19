import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Smartphone, Wifi, Battery, Signal } from 'lucide-react';

const DemoTelegramAlert = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [surveyAnswer, setSurveyAnswer] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered) {
                    setHasTriggered(true);
                    setTimeout(() => setShowMessage(true), 800);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasTriggered]);

    const scrollToDashboard = () => {
        document.getElementById('demo-dashboard')?.scrollIntoView({ behavior: 'smooth' });
    };

    const currentTime = '23:36';
    const date = '16/02/2026';

    return (
        <section id="demo-alert" ref={sectionRef} className="relative min-h-screen flex items-center justify-center py-20 px-4">
            {/* Background pulse effect */}
            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 0.3, 0], scale: [0.5, 2, 3] }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="w-64 h-64 bg-red-500/20 rounded-full" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-4">
                        <Bell className="w-3 h-3" /> SIMULACIÓN DE ALERTA
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white">
                        Recepción de <span className="text-red-400">Alerta</span>
                    </h2>
                    <p className="text-[#F5F6FA]/60 mt-4 text-lg max-w-2xl mx-auto">
                        Así recibe el operador la notificación cuando el sistema detecta un posible foco de incendio
                    </p>
                </motion.div>

                {/* Phone Mockup */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotateX: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-[380px]"
                    >
                        {/* Phone frame */}
                        <div className="relative bg-[#1a1a2e] rounded-[3rem] p-3 shadow-2xl shadow-black/50 border border-white/10">
                            {/* Phone notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a2e] rounded-b-2xl z-20" />

                            {/* Phone screen */}
                            <div className="bg-[#0e1621] rounded-[2.5rem] overflow-hidden relative">
                                {/* Status bar */}
                                <div className="flex items-center justify-between px-8 py-3 pt-8 text-white/60 text-xs">
                                    <span className="font-mono">{currentTime}</span>
                                    <div className="flex items-center gap-1">
                                        <Signal className="w-3 h-3" />
                                        <Wifi className="w-3 h-3" />
                                        <Battery className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* Telegram-style header */}
                                <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5 bg-[#17212b]">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                                        🔥
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold text-sm">SAI Alertas</p>
                                        <p className="text-[#6c7883] text-xs">bot • en línea</p>
                                    </div>
                                    <Smartphone className="w-5 h-5 text-[#6c7883]" />
                                </div>

                                {/* Chat area */}
                                <div className="px-4 py-6 min-h-[420px] flex flex-col justify-end gap-3">
                                    {/* Previous message */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hasTriggered ? 1 : 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="self-start max-w-[85%]"
                                    >
                                        <div className="bg-[#182533] rounded-2xl rounded-tl-md px-4 py-2.5 text-sm">
                                            <p className="text-[#aaaaaa] text-xs">✅ Sistema operativo — Sin detecciones en las últimas 6h</p>
                                            <p className="text-[#6c7883] text-[10px] text-right mt-1">17:30</p>
                                        </div>
                                    </motion.div>

                                    {/* Alert message */}
                                    <AnimatePresence>
                                        {showMessage && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                                                className="self-start max-w-[90%]"
                                            >
                                                <div className="bg-[#182533] rounded-2xl rounded-tl-md px-4 py-3 border-l-4 border-red-500 shadow-lg shadow-red-500/10">
                                                    <div className="space-y-2 text-sm text-white/90">
                                                        <p className="text-red-400 font-bold text-base">🚨 SAI – POSIBLE FOCO DE INCENDIO</p>
                                                        <div className="space-y-1 text-[13px]">
                                                            <p>📍 <span className="text-white/70">Nodo:</span> <strong>La Rancherita</strong></p>
                                                            <p>🧭 <span className="text-white/70">Cámara:</span> <strong>Norte</strong></p>
                                                            <p>🕒 <span className="text-white/70">{date} – {currentTime}</span></p>
                                                            <p>🎯 <span className="text-white/70">Confianza IA:</span> <strong className="text-[#FF5C00]">0.78</strong></p>
                                                        </div>

                                                        {/* Real detection photo */}
                                                        <div className="rounded-lg overflow-hidden border border-white/10 mt-2">
                                                            <img
                                                                src="/demo/sai-execution-181023.webp"
                                                                alt="Detección de humo — Ejecución 181023"
                                                                className="w-full h-auto"
                                                            />
                                                        </div>

                                                        {/* POSITIVO / NEGATIVO survey */}
                                                        <div className="pt-2 border-t border-white/10">
                                                            <p className="text-white/50 text-[11px] mb-2">¿Es un foco real?</p>
                                                            <div className="flex gap-2">
                                                                <button
                                                                    onClick={() => setSurveyAnswer('positivo')}
                                                                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${surveyAnswer === 'positivo'
                                                                            ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                                                                            : 'bg-white/5 text-white/60 border border-white/10 hover:bg-green-500/10 hover:text-green-400'
                                                                        }`}
                                                                >
                                                                    ✅ POSITIVO
                                                                </button>
                                                                <button
                                                                    onClick={() => setSurveyAnswer('negativo')}
                                                                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${surveyAnswer === 'negativo'
                                                                            ? 'bg-red-500/30 text-red-400 border border-red-500/50'
                                                                            : 'bg-white/5 text-white/60 border border-white/10 hover:bg-red-500/10 hover:text-red-400'
                                                                        }`}
                                                                >
                                                                    ❌ NEGATIVO
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* Dashboard link */}
                                                        <div className="pt-2 border-t border-white/10">
                                                            <button
                                                                onClick={scrollToDashboard}
                                                                className="text-[#5ebbf7] text-sm hover:underline transition-all flex items-center gap-1"
                                                            >
                                                                🔗 Ver evento en Dashboard →
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className="text-[#6c7883] text-[10px] text-right mt-2">{currentTime}</p>
                                                </div>

                                                {/* Notification badge */}
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.3, type: 'spring' }}
                                                    className="mt-2 flex items-center gap-2"
                                                >
                                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-[10px] font-mono">
                                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                                        ALERTA ACTIVA
                                                    </span>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Input bar */}
                                <div className="flex items-center gap-2 px-4 py-3 border-t border-white/5 bg-[#17212b]">
                                    <div className="flex-1 bg-[#242f3d] rounded-full px-4 py-2 text-sm text-[#6c7883]">
                                        Mensaje...
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-[#3390ec] flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Glow effect behind phone */}
                        {showMessage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute -inset-4 bg-gradient-to-b from-red-500/10 via-transparent to-transparent rounded-[4rem] -z-10 blur-xl"
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DemoTelegramAlert;
