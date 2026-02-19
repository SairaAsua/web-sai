import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Camera, Cpu, Database, Activity } from 'lucide-react';

const InteractiveIndex = () => {
    const navigate = useNavigate();
    const [hoveredNode, setHoveredNode] = useState(null);

    const nodes = [
        {
            id: 'alarma',
            label: 'Alarma',
            icon: <Activity className="w-6 h-6" />,
            description: 'Sistema de detección temprana',
            path: '/como-funciona', // Mapping to How It Works for now
            x: 20,
            y: 30,
            color: '#FF5C00'
        },
        {
            id: 'camara',
            label: 'Cámara',
            icon: <Camera className="w-6 h-6" />,
            description: 'Monitoreo visual inteligente',
            path: '/tecnologia', // Mapping to Technology
            x: 80,
            y: 30,
            color: '#00FF9D'
        },
        {
            id: 'nodo',
            label: 'Nodo SAI',
            icon: <Shield className="w-6 h-6" />,
            description: 'Unidad de procesamiento autónoma',
            path: '/nodos-sai',
            x: 50,
            y: 50,
            color: '#00FFFF'
        },
        {
            id: 'tecnologia',
            label: 'Tecnología',
            icon: <Cpu className="w-6 h-6" />,
            description: 'Sensores y algoritmos avanzados',
            path: '/tecnologia',
            x: 20,
            y: 70,
            color: '#FF00E5'
        },
        {
            id: 'dataset',
            label: 'Data Set',
            icon: <Database className="w-6 h-6" />,
            description: 'Base de conocimientos compartida',
            path: '/blog', // Mapping to Blog/News as a data source proxy
            x: 80,
            y: 70,
            color: '#FFFF00'
        }
    ];

    return (
        <div className="relative w-full h-screen bg-[#0B2822] overflow-hidden flex items-center justify-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0F352E] via-[#0B2822] to-[#05110E]" />

            {/* Central Visual */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center"
            >
                {/* Main Central Image */}
                {/* Main Central Video */}
                <motion.div
                    className="relative w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="max-h-[80vh] w-full object-contain drop-shadow-[0_0_50px_rgba(0,255,157,0.3)]"
                    >
                        <source src="/images/sai_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

                {/* Interactive Nodes */}
                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        className="absolute cursor-pointer"
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + Math.random() * 0.5 }}
                        whileHover={{ scale: 1.2, zIndex: 50 }}
                        onClick={() => navigate(node.path)}
                        onHoverStart={() => setHoveredNode(node)}
                        onHoverEnd={() => setHoveredNode(null)}
                    >
                        {/* Pulse Effect */}
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-20`} style={{ backgroundColor: node.color }}></div>

                        {/* Node Icon */}
                        <div
                            className="relative w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-300"
                            style={{
                                borderColor: hoveredNode?.id === node.id ? node.color : 'rgba(255,255,255,0.2)',
                                boxShadow: hoveredNode?.id === node.id ? `0 0 30px ${node.color}40` : 'none'
                            }}
                        >
                            <div style={{ color: node.color }}>
                                {node.icon}
                            </div>
                        </div>

                        {/* Label - visible on hover or always if preferred */}
                        <AnimatePresence>
                            {hoveredNode?.id === node.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    className="absolute top-20 left-1/2 -translate-x-1/2 w-48 text-center"
                                >
                                    <div className="bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-xl">
                                        <h3 className="text-white font-bold font-montserrat text-lg mb-1" style={{ color: node.color }}>{node.label}</h3>
                                        <p className="text-gray-300 text-xs font-light">{node.description}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>

            {/* Navigation Instruction */}
            <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
                <p className="text-white/30 text-sm font-mono tracking-[0.2em] uppercase">
                    Navegación Interactiva &bull; Use las flechas para explorar
                </p>
            </div>
        </div>
    );
};

export default InteractiveIndex;
