import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-24 bg-[#0B2822] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-panel p-12 text-center rounded-2xl border border-[#FF5C00]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#FF5C00]/30">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white mb-8">
              Nuestra Misión
            </h2>
            
            <p className="text-xl md:text-2xl text-[#F5F6FA] leading-relaxed font-roboto font-light">
              "Democratizar el acceso a tecnología de punta para la protección ambiental. Creemos que la prevención es la herramienta más efectiva. Trabajamos para que cada comunidad tenga las herramientas para defender su territorio."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;