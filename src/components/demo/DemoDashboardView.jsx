import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertTriangle, MapPin, Clock, Camera, Shield, ChevronRight } from 'lucide-react';

const DemoDashboardView = () => {
    const [confirmed, setConfirmed] = useState(false);
    const [selectedAction, setSelectedAction] = useState(null);
    const [activeThumb, setActiveThumb] = useState(1);

    const handleConfirm = () => {
        setConfirmed(true);
        setSelectedAction('confirm');
    };

    const handleFalse = () => {
        setSelectedAction('false');
    };

    const handleEscalar = () => {
        setSelectedAction('escalar');
    };

    const scrollToMap = () => {
        document.getElementById('demo-map')?.scrollIntoView({ behavior: 'smooth' });
    };

    const thumbnails = [
        { time: '07:54', hasDetection: false, img: '/demo/sai-execution-180900.webp' },
        { time: '07:56', hasDetection: true, img: '/demo/sai-execution-181014.webp' },
        { time: '07:57', hasDetection: true, img: '/demo/sai-execution-181018.webp' },
        { time: '07:59', hasDetection: true, img: '/demo/sai-execution-181023.webp' },
        { time: '14:20', hasDetection: true, img: '/demo/sai-execution-426036.webp' },
        { time: '14:22', hasDetection: true, img: '/demo/sai-execution-426129.webp' },
        { time: '14:25', hasDetection: false, img: '/demo/sai-execution-426324.webp' },
    ];

    return (
        <section id="demo-dashboard" className="relative py-20 px-4">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/30 text-[#FF5C00] text-xs font-mono mb-4">
                        <Camera className="w-3 h-3" /> VISTA DEL DASHBOARD
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white">
                        Análisis del <span className="text-[#FF5C00]">Evento</span>
                    </h2>
                    <p className="text-[#F5F6FA]/60 mt-4 text-lg max-w-2xl mx-auto">
                        Vista simulada del panel de control donde los operadores analizan las detecciones
                    </p>
                </motion.div>

                {/* Dashboard mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel-heavy rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/30"
                >
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-[#0a1f1a]/50">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-white/40 text-xs font-mono">SAI Dashboard — Detalles de Ejecución</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-xs font-mono bg-green-500/20 text-green-400 border border-green-500/30">● Success</span>
                            <span className="text-white/30 text-xs font-mono">ID: 268289</span>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        {/* Main image area */}
                        <div className="flex-1 p-4 lg:p-6">
                            {/* Alert level bar */}
                            <div className="flex items-center justify-between mb-4 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                                <span className="text-white/60 text-xs font-mono">Nivel de Alerta</span>
                                <span className="px-4 py-1 rounded bg-[#FF5C00] text-white text-xs font-bold tracking-wider">HIGH</span>
                            </div>

                            {/* Main camera image — real detection photo */}
                            <div className="relative aspect-video bg-[#0a1f1a] rounded-xl overflow-hidden border border-white/5 group">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={thumbnails[activeThumb].img}
                                        src={thumbnails[activeThumb].img}
                                        alt={`Detección SAI — ${thumbnails[activeThumb].time}`}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </AnimatePresence>

                                {/* Camera info overlay */}
                                <div className="absolute top-3 right-3 text-white/50 font-mono text-[10px] bg-black/40 px-2 py-1 rounded">
                                    cam3 — La Rancherita
                                </div>

                                {/* Image counter */}
                                <div className="absolute top-3 left-3 text-white/50 font-mono text-[10px] bg-black/40 px-2 py-1 rounded">
                                    {activeThumb + 1} / {thumbnails.length}
                                </div>

                                {/* Zoom controls */}
                                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 rounded-lg px-2 py-1">
                                    <button className="text-white/60 hover:text-white text-xs px-1">🔍</button>
                                    <span className="text-white/40 text-xs font-mono">Fit</span>
                                    <button className="text-white/60 hover:text-white text-xs px-1">🔎</button>
                                </div>
                            </div>

                            {/* Timeline strip */}
                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/50 text-xs font-mono">Línea Temporal</span>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FF5C00]/10 text-[#FF5C00] text-[10px] font-mono border border-[#FF5C00]/20">
                                        <AlertTriangle className="w-3 h-3" /> Detección persistente
                                    </span>
                                </div>
                                <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                                    {thumbnails.map((thumb, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveThumb(i)}
                                            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${activeThumb === i
                                                ? 'border-[#FF5C00] shadow-lg shadow-[#FF5C00]/20'
                                                : 'border-white/10 hover:border-white/30'
                                                }`}
                                        >
                                            <img
                                                src={thumb.img}
                                                alt={`Detección ${thumb.time}`}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            {thumb.hasDetection && (
                                                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                            )}
                                            <div className="absolute bottom-1 left-1 text-white/60 font-mono text-[8px] bg-black/40 px-1 rounded">
                                                {thumb.time}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Side panel */}
                        <div className="lg:w-80 xl:w-96 border-t lg:border-t-0 lg:border-l border-white/5 p-4 lg:p-6 space-y-4">
                            {/* Detection status */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-xl border border-white/10 p-3 text-center bg-white/5">
                                    <p className="text-white/50 text-[10px] font-mono mb-1">🔥 Fuego</p>
                                    <p className="text-green-400 font-bold text-sm">LIMPIO</p>
                                </div>
                                <div className="rounded-xl border border-[#FF5C00]/30 p-3 text-center bg-[#FF5C00]/5">
                                    <p className="text-white/50 text-[10px] font-mono mb-1">💨 Humo</p>
                                    <p className="text-[#FF5C00] font-bold text-sm">DETECTADO</p>
                                    <p className="text-white/40 text-[10px] mt-0.5">77% confianza</p>
                                </div>
                            </div>

                            {/* Total detections */}
                            <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/10 bg-white/5">
                                <span className="text-white/70 text-sm flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-[#FF5C00]" /> Detecciones Totales
                                </span>
                                <span className="text-white font-bold text-xl font-mono">1</span>
                            </div>

                            {/* Detection status */}
                            <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/10 bg-white/5">
                                <span className="text-white/70 text-sm">📡 Detección Válida</span>
                                <button
                                    onClick={handleFalse}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${selectedAction === 'false'
                                        ? 'bg-yellow-500 text-black'
                                        : 'bg-[#FF5C00]/20 text-[#FF5C00] hover:bg-[#FF5C00]/30 border border-[#FF5C00]/30'
                                        }`}
                                >
                                    {selectedAction === 'false' ? 'Marcado' : 'Marcar Falso'}
                                </button>
                            </div>

                            {/* Device info */}
                            <div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 space-y-2">
                                <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-2">Info del Dispositivo</p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/50 flex items-center gap-2"><Camera className="w-3 h-3" /> Cámara</span>
                                    <span className="text-white font-mono text-xs">cam3</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/50 flex items-center gap-2"><MapPin className="w-3 h-3" /> Ubicación</span>
                                    <span className="text-white font-mono text-xs">La Rancherita</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/50 flex items-center gap-2"><Clock className="w-3 h-3" /> Procesamiento</span>
                                    <span className="text-white font-mono text-xs">135.95ms</span>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="space-y-2 pt-2">
                                <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider">Acciones</p>

                                <button
                                    onClick={handleConfirm}
                                    disabled={confirmed}
                                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${confirmed
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-default'
                                        : 'bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white hover:scale-[1.02] active:scale-[0.98]'
                                        }`}
                                >
                                    <Check className="w-4 h-4" />
                                    {confirmed ? 'Evento Confirmado ✓' : 'Confirmar Evento'}
                                </button>

                                <button
                                    onClick={handleFalse}
                                    className={`w-full py-3 rounded-xl font-bold text-sm border transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] ${selectedAction === 'false'
                                        ? 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400'
                                        : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                                        }`}
                                >
                                    <X className="w-4 h-4" />
                                    Marcar como Falso Positivo
                                </button>

                                <button
                                    onClick={handleEscalar}
                                    className={`w-full py-3 rounded-xl font-bold text-sm border transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] ${selectedAction === 'escalar'
                                        ? 'border-red-500/30 bg-red-500/10 text-red-400'
                                        : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                                        }`}
                                >
                                    <AlertTriangle className="w-4 h-4" />
                                    Escalar a Bomberos
                                </button>

                                <button
                                    onClick={scrollToMap}
                                    className="w-full py-3 rounded-xl font-bold text-sm border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <MapPin className="w-4 h-4" />
                                    Ver en Mapa
                                    <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Confirmation toast */}
                    <AnimatePresence>
                        {confirmed && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="mx-6 mb-6"
                            >
                                <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400">
                                    <div className="p-2 rounded-full bg-green-500/20">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Evento confirmado</p>
                                        <p className="text-green-400/70 text-xs">Notificación enviada a autoridades — 16/02/2026 23:37</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Escalation toast */}
                    <AnimatePresence>
                        {selectedAction === 'escalar' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="mx-6 mb-6"
                            >
                                <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                                    <div className="p-2 rounded-full bg-red-500/20">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Evento escalado a Bomberos</p>
                                        <p className="text-red-400/70 text-xs">Protocolo de emergencia activado — Bomberos notificados</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoDashboardView;
