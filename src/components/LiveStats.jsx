import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, Thermometer, Wind, Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LiveStats = () => {
    const { t } = useLanguage();
    const [stats, setStats] = useState({
        temp: 24,
        humidity: 45,
        wind: 12,
        aiCertainty: 0.98,
        status: 'Monitoring'
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                ...prev,
                temp: prev.temp + (Math.random() - 0.5) * 0.5,
                humidity: prev.humidity + (Math.random() - 0.5) * 1,
                wind: Math.max(0, prev.wind + (Math.random() - 0.5) * 2),
                aiCertainty: 0.95 + Math.random() * 0.04
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const statItems = [
        { icon: <Thermometer className="w-5 h-5" />, label: t('liveStats.temp') || 'Temperatura', value: `${stats.temp.toFixed(1)}°C` },
        { icon: <Wind className="w-5 h-5" />, label: t('liveStats.wind') || 'Viento', value: `${stats.wind.toFixed(1)} km/h` },
        { icon: <Eye className="w-5 h-5" />, label: t('liveStats.certainty') || 'Certeza IA', value: `${(stats.aiCertainty * 100).toFixed(1)}%` },
        { icon: <ShieldCheck className="w-5 h-5" />, label: t('liveStats.status') || 'Estado', value: stats.status, color: 'text-[#00FF9D]' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {statItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col items-center text-center group hover:border-[#FF5C00]/30 transition-colors"
                >
                    <div className={`mb-3 p-2 rounded-lg bg-white/5 ${item.color || 'text-[#FF5C00]'} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[#F5F6FA]/50 font-mono mb-1">
                        {item.label}
                    </div>
                    <div className="text-xl font-bold font-mono text-white">
                        {item.value}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default LiveStats;
