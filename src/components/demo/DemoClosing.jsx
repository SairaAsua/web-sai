import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, ExternalLink } from 'lucide-react';

const DemoClosing = () => {
    const navigate = useNavigate();

    return (
        <section id="demo-closing" className="relative py-24 px-4 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF5C00]/5 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF5C00]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="inline-flex p-5 rounded-2xl bg-[#FF5C00]/10 border border-[#FF5C00]/20 mb-8"
                    >
                        <Shield className="w-10 h-10 text-[#FF5C00]" />
                    </motion.div>

                    {/* Main statement */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-montserrat text-white leading-tight mb-6">
                        El SAI ya está{' '}
                        <span className="text-[#00FF9D]">funcionando</span>.
                    </h2>

                    <div className="max-w-2xl mx-auto space-y-4 mb-12">
                        <p className="text-xl text-[#F5F6FA]/80">
                            Un <strong className="text-white">sistema operativo real</strong> detectando focos en{' '}
                            <strong className="text-[#FF5C00]">Córdoba, Argentina</strong>.
                        </p>
                    </div>

                    {/* Stats summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-6 md:gap-10 px-8 py-5 rounded-2xl glass-panel border border-white/5 mb-12"
                    >
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold font-mono text-[#FF5C00]">24/7</div>
                            <div className="text-white/40 text-xs font-mono mt-1">Monitoreo</div>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold font-mono text-[#00FF9D]">+30km</div>
                            <div className="text-white/40 text-xs font-mono mt-1">Alcance</div>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold font-mono text-blue-400">&lt;3min</div>
                            <div className="text-white/40 text-xs font-mono mt-1">Detección</div>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => navigate('/contacto')}
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white font-bold font-montserrat text-lg rounded-xl shadow-lg shadow-[#FF5C00]/20 hover:shadow-[#FF5C00]/40 transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10">Solicitar Reunión</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00] to-[#FF8C00] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>

                        <button
                            onClick={() => window.open('https://sai.altermundi.net', '_blank')}
                            className="inline-flex items-center gap-2 px-6 py-4 border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all font-montserrat"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Visitar sitio SAI
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoClosing;
