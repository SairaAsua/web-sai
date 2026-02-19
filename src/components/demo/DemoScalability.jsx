import React from 'react';
import { motion } from 'framer-motion';
import { Server, Camera, Wifi, Globe, Cpu, Database } from 'lucide-react';

const DemoScalability = () => {
    const nodes = [
        { name: 'Nodo Rancherita', angle: 0, distance: 140 },
        { name: 'Nodo Malagueño', angle: 60, distance: 140 },
        { name: 'Nodo Villa Carlos Paz', angle: 120, distance: 140 },
        { name: 'Nodo Alta Gracia', angle: 180, distance: 140 },
        { name: 'Nodo Cosquín', angle: 240, distance: 140 },
        { name: 'Nodo Río Ceballos', angle: 300, distance: 140 },
    ];

    const features = [
        { icon: <Cpu className="w-5 h-5" />, title: 'Operación Autónoma', desc: 'Cada nodo procesa IA localmente sin depender de conectividad' },
        { icon: <Camera className="w-5 h-5" />, title: '4 Cámaras por Nodo', desc: 'Cobertura 360° con análisis continuo independiente' },
        { icon: <Globe className="w-5 h-5" />, title: 'Expansión Regional', desc: 'Arquitectura preparada para cubrir múltiples municipios' },
        { icon: <Database className="w-5 h-5" />, title: 'Datos Centralizados', desc: 'Dashboard unificado para gestión de todos los nodos' },
    ];

    return (
        <section id="demo-scalability" className="relative py-20 px-4 overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#FF5C00]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#00FF9D]/5 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
                        <Wifi className="w-3 h-3" /> ARQUITECTURA
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white">
                        Escalabilidad <span className="text-purple-400">Regional</span>
                    </h2>
                    <p className="text-[#F5F6FA]/60 mt-4 text-lg max-w-2xl mx-auto">
                        Red distribuida de nodos inteligentes conectados a un servidor central
                    </p>
                </motion.div>

                {/* Network diagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-16"
                >
                    <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px]">
                        {/* Central server */}
                        <motion.div
                            animate={{ boxShadow: ['0 0 20px rgba(255,92,0,0.3)', '0 0 40px rgba(255,92,0,0.5)', '0 0 20px rgba(255,92,0,0.3)'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF5C00] to-[#FF8C00] flex flex-col items-center justify-center text-white z-10 shadow-xl"
                        >
                            <Server className="w-8 h-8 mb-1" />
                            <span className="text-[8px] font-mono font-bold tracking-wider">SERVIDOR</span>
                            <span className="text-[7px] font-mono opacity-70">CENTRAL</span>
                        </motion.div>

                        {/* Node connections and nodes */}
                        {nodes.map((node, i) => {
                            const angleRad = (node.angle * Math.PI) / 180;
                            const x = Math.cos(angleRad) * node.distance;
                            const y = Math.sin(angleRad) * node.distance;

                            return (
                                <React.Fragment key={i}>
                                    {/* Connection line */}
                                    <svg
                                        className="absolute top-1/2 left-1/2"
                                        style={{ transform: 'translate(-50%, -50%)', width: '100%', height: '100%', overflow: 'visible' }}
                                    >
                                        <motion.line
                                            x1="0"
                                            y1="0"
                                            x2={x}
                                            y2={y}
                                            stroke="url(#lineGradient)"
                                            strokeWidth="1.5"
                                            strokeDasharray="4,4"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.15, duration: 0.8 }}
                                        />
                                        {/* Animated pulse along line */}
                                        <motion.circle
                                            r="3"
                                            fill="#FF5C00"
                                            animate={{
                                                cx: [0, x],
                                                cy: [0, y],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.4,
                                                ease: 'linear',
                                            }}
                                        />
                                        <defs>
                                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#FF5C00" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="#FF5C00" stopOpacity="0.2" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Node */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
                                        className="absolute"
                                        style={{
                                            top: `calc(50% + ${y}px)`,
                                            left: `calc(50% + ${x}px)`,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <div className="group relative">
                                            <div className="w-14 h-14 rounded-xl bg-[#0a1f1a] border border-[#00FF9D]/30 flex flex-col items-center justify-center text-[#00FF9D] hover:border-[#00FF9D]/60 hover:bg-[#00FF9D]/5 transition-all cursor-pointer">
                                                <Camera className="w-5 h-5 mb-0.5" />
                                                <span className="text-[6px] font-mono opacity-70">4 CAM</span>
                                            </div>
                                            {/* Tooltip */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                                <span className="px-2 py-1 rounded bg-black/80 text-white text-[10px] font-mono border border-white/10">
                                                    {node.name}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="glass-panel rounded-xl p-6 border border-white/5 group hover:border-purple-500/20 transition-all"
                        >
                            <div className="inline-flex p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-4 group-hover:bg-purple-500/20 transition-colors">
                                {f.icon}
                            </div>
                            <h3 className="text-white font-bold font-montserrat text-sm mb-2">{f.title}</h3>
                            <p className="text-white/50 text-sm">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DemoScalability;
