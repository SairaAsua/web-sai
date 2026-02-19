import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Radio, ChevronDown } from 'lucide-react';

const DemoIntro = () => {
    const scrollToAlert = () => {
        document.getElementById('demo-alert')?.scrollIntoView({ behavior: 'smooth' });
    };

    const features = [
        { icon: <Eye className="w-6 h-6" />, title: 'Visión Artificial', desc: 'Detección automática de humo y fuego con IA' },
        { icon: <Radio className="w-6 h-6" />, title: 'Monitoreo 24/7', desc: 'Vigilancia continua sin intervención humana' },
        { icon: <Shield className="w-6 h-6" />, title: 'Alerta Temprana', desc: 'Notificación inmediata a autoridades municipales' },
    ];

    return (
        <section id="demo-intro" className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 92, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 92, 0, 0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#FF5C00]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF5C00]/30 bg-[#FF5C00]/10 text-[#FF5C00] text-sm font-mono tracking-wider">
                        <span className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse" />
                        DEMO INTERACTIVA
                    </span>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-center mb-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat text-white leading-tight">
                        Sistema de Alerta
                        <span className="block text-[#FF5C00]">de Incendios</span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-xl md:text-2xl text-[#F5F6FA]/70 font-light mb-12 max-w-3xl mx-auto"
                >
                    Monitoreo Inteligente en Tiempo Real para Municipios
                </motion.p>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <div className="glass-panel rounded-2xl p-8 border border-white/5">
                        <p className="text-[#F5F6FA]/80 text-lg leading-relaxed text-center">
                            El <strong className="text-white">Sistema de Alerta de Incendios (SAI)</strong> es una plataforma
                            de detección temprana de incendios forestales basada en inteligencia artificial,
                            cámaras panorámicas y monitoreo automatizado en tiempo real.
                        </p>
                        <p className="text-[#F5F6FA]/60 text-base leading-relaxed text-center mt-4">
                            Actualmente operativo en <strong className="text-[#00FF9D]">Córdoba, Argentina</strong>,
                            donde ha detectado múltiples focos reales, incluyendo eventos a más de
                            <strong className="text-[#FF5C00]"> 30 km</strong> de distancia.
                        </p>
                    </div>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
                >
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="glass-panel rounded-xl p-6 border border-white/5 text-center group hover:border-[#FF5C00]/30 transition-all duration-300"
                        >
                            <div className="inline-flex p-3 rounded-xl bg-[#FF5C00]/10 text-[#FF5C00] mb-4 group-hover:bg-[#FF5C00]/20 transition-colors">
                                {f.icon}
                            </div>
                            <h3 className="text-white font-bold font-montserrat mb-2">{f.title}</h3>
                            <p className="text-[#F5F6FA]/60 text-sm">{f.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center"
                >
                    <button
                        onClick={scrollToAlert}
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white font-bold font-montserrat text-lg rounded-xl shadow-lg shadow-[#FF5C00]/20 hover:shadow-[#FF5C00]/40 transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">🔥 Simular Alerta en Vivo</span>
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00] to-[#FF8C00] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoIntro;
