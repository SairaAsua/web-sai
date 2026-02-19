import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Target, AlertTriangle, Radar, Clock, Flame } from 'lucide-react';

const mockData = {
    '30': {
        detected: 12,
        confirmed: 9,
        falsePositives: 3,
        maxDistance: '28 km',
        avgTime: '< 3 min',
        chart: [
            { name: 'Sem 1', Detectados: 4, Confirmados: 3 },
            { name: 'Sem 2', Detectados: 2, Confirmados: 1 },
            { name: 'Sem 3', Detectados: 3, Confirmados: 3 },
            { name: 'Sem 4', Detectados: 3, Confirmados: 2 },
        ],
    },
    '90': {
        detected: 47,
        confirmed: 38,
        falsePositives: 9,
        maxDistance: '32 km',
        avgTime: '< 2.5 min',
        chart: [
            { name: 'Mes 1', Detectados: 18, Confirmados: 15 },
            { name: 'Mes 2', Detectados: 14, Confirmados: 11 },
            { name: 'Mes 3', Detectados: 15, Confirmados: 12 },
        ],
    },
    year: {
        detected: 156,
        confirmed: 128,
        falsePositives: 28,
        maxDistance: '34 km',
        avgTime: '< 2.8 min',
        chart: [
            { name: 'Ene', Detectados: 8, Confirmados: 6 },
            { name: 'Feb', Detectados: 5, Confirmados: 4 },
            { name: 'Mar', Detectados: 3, Confirmados: 2 },
            { name: 'Abr', Detectados: 2, Confirmados: 1 },
            { name: 'May', Detectados: 1, Confirmados: 1 },
            { name: 'Jun', Detectados: 1, Confirmados: 0 },
            { name: 'Jul', Detectados: 4, Confirmados: 3 },
            { name: 'Ago', Detectados: 12, Confirmados: 10 },
            { name: 'Sep', Detectados: 28, Confirmados: 24 },
            { name: 'Oct', Detectados: 42, Confirmados: 35 },
            { name: 'Nov', Detectados: 32, Confirmados: 27 },
            { name: 'Dic', Detectados: 18, Confirmados: 15 },
        ],
    },
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#0a1f1a] border border-white/10 rounded-lg px-3 py-2 shadow-xl">
                <p className="text-white/60 text-xs font-mono mb-1">{label}</p>
                {payload.map((p, i) => (
                    <p key={i} className="text-xs font-mono" style={{ color: p.color }}>
                        {p.name}: <strong>{p.value}</strong>
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const DemoImpact = () => {
    const [period, setPeriod] = useState('90');
    const data = mockData[period];

    const statCards = [
        { icon: <Flame className="w-5 h-5" />, label: 'Eventos Detectados', value: data.detected, color: 'text-[#FF5C00]', bgColor: 'bg-[#FF5C00]/10' },
        { icon: <Target className="w-5 h-5" />, label: 'Confirmados', value: data.confirmed, color: 'text-green-400', bgColor: 'bg-green-500/10' },
        { icon: <AlertTriangle className="w-5 h-5" />, label: 'Falsos Positivos', value: data.falsePositives, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10' },
        { icon: <Radar className="w-5 h-5" />, label: 'Distancia Máxima', value: data.maxDistance, color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
        { icon: <Clock className="w-5 h-5" />, label: 'Tiempo Promedio', value: data.avgTime, color: 'text-purple-400', bgColor: 'bg-purple-500/10' },
    ];

    const periods = [
        { key: '30', label: '30 días' },
        { key: '90', label: '90 días' },
        { key: 'year', label: 'Año actual' },
    ];

    return (
        <section id="demo-impact" className="relative py-20 px-4">
            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono mb-4">
                        <TrendingUp className="w-3 h-3" /> IMPACTO TERRITORIAL
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white">
                        Resultados <span className="text-green-400">Operativos</span>
                    </h2>
                    <p className="text-[#F5F6FA]/60 mt-4 text-lg max-w-2xl mx-auto">
                        Métricas simuladas basadas en el rendimiento real del sistema en Córdoba
                    </p>
                </motion.div>

                {/* Period selector */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
                        {periods.map((p) => (
                            <button
                                key={p.key}
                                onClick={() => setPeriod(p.key)}
                                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${period === p.key
                                        ? 'bg-[#FF5C00] text-white shadow-lg shadow-[#FF5C00]/20'
                                        : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    {statCards.map((card, i) => (
                        <motion.div
                            key={`${period}-${i}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-panel rounded-xl p-5 border border-white/5 text-center group hover:border-[#FF5C00]/20 transition-all"
                        >
                            <div className={`inline-flex p-2.5 rounded-xl ${card.bgColor} ${card.color} mb-3 group-hover:scale-110 transition-transform`}>
                                {card.icon}
                            </div>
                            <div className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-2">{card.label}</div>
                            <motion.div
                                key={`${period}-${i}-val`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.05 + 0.1, type: 'spring' }}
                                className={`text-2xl font-bold font-mono ${card.color}`}
                            >
                                {card.value}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel-heavy rounded-2xl p-6 border border-white/5"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-white font-bold font-montserrat text-lg">Detectados vs Confirmados</h3>
                        <span className="text-white/40 text-xs font-mono">Datos simulados</span>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data.chart} barCategoryGap="20%">
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                            <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} fontFamily="monospace" />
                            <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} fontFamily="monospace" />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend
                                wrapperStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                                iconType="circle"
                            />
                            <Bar dataKey="Detectados" fill="#FF5C00" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Confirmados" fill="#00FF9D" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoImpact;
