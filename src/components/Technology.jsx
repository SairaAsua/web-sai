import React from 'react';
import { motion } from 'framer-motion';
import { Github, Cpu, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Technology = () => {
  const { t } = useLanguage();

  return (
    <section id="technology" className="py-24 bg-[#0B2822] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2822] via-[#2D3436] to-[#0B2822] opacity-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#F5F6FA 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="container mx-auto px-4 relative z-10 space-y-24">
        {/* Red Neuronal SAINet Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-8">
              {t('technology.title')} <br/>
              <span className="text-[#FF5C00]">{t('technology.subtitle')}</span>
            </h2>
            
            <p className="text-lg text-[#F5F6FA]/80 mb-6 leading-relaxed font-roboto">
              {t('technology.description')}
            </p>
            
            <div className="flex gap-4 mb-8">
               <div className="flex flex-col gap-1 border-l-2 border-[#FF5C00] pl-4">
                 <span className="text-2xl font-bold font-mono text-white">{t('technology.recall')}</span>
                 <span className="text-xs text-[#F5F6FA]/60 font-mono">{t('technology.dataset')}</span>
               </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="glass-panel hover:bg-[#F5F6FA]/10 text-white gap-2 border-[#F5F6FA]/20 font-mono"
                onClick={() => window.open('https://github.com/AlterMundi/sai-sainet-latest', '_blank')}
              >
                <Github className="w-5 h-5" />
                {t('technology.checkpointBtn')}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glass-panel hover:bg-[#F5F6FA]/10 text-white gap-2 border-[#F5F6FA]/20 font-mono"
                onClick={() => window.open('https://github.com/ultralytics/ultralytics', '_blank')}
              >
                <Github className="w-5 h-5" />
                {t('technology.yoloBtn')}
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel p-8 rounded-lg shadow-2xl relative overflow-hidden group border-[#FF5C00]/20">
              <div className="absolute top-0 right-0 p-4 opacity-50">
                 <Cpu className="w-12 h-12 text-[#FF5C00]" />
              </div>

              <div className="bg-[#081F1A] rounded p-6 font-mono text-sm shadow-inner border border-[#F5F6FA]/5">
                <div className="flex items-center justify-between mb-4 border-b border-[#F5F6FA]/10 pb-2">
                   <span className="text-[#F5F6FA]/50">SAInet_inference.py</span>
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500" />
                     <div className="w-2 h-2 rounded-full bg-yellow-500" />
                     <div className="w-2 h-2 rounded-full bg-green-500" />
                   </div>
                </div>
                <pre className="text-[#FF5C00] overflow-x-auto text-xs md:text-sm">
{`from ultralytics import YOLO

model = YOLO("SAINet6.1")

for _ in model.predict(
    source="sai_cam",
    classes=[Smoke],        
    conf=0.30,
    project="SAI",
    name="SAI_predicts",
    imgsz=864,
    iou=0.4
    stream=True,        
):`}
                </pre>
              </div>
            </div>
            
            {/* Tech Decoration Corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#FF5C00]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#FF5C00]" />
          </motion.div>
        </div>

        {/* Dataset SAINetset Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-8">
              Dataset <br/>
              <span className="text-[#FF5C00]">SAINetset</span>
            </h2>
            
            <p className="text-lg text-[#F5F6FA]/80 mb-6 leading-relaxed font-roboto">
              Dataset público para entrenar detección de humo del SAI (YOLO labels).
            </p>

            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="glass-panel hover:bg-[#F5F6FA]/10 text-white gap-2 border-[#F5F6FA]/20 font-mono"
                onClick={() => window.open('https://huggingface.co/datasets/SAINetset/SAINetset_v8.0', '_blank')}
              >
                <Database className="w-5 h-5" />
                ABRIR DATASET
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel p-4 rounded-lg shadow-2xl relative overflow-hidden group border-[#FF5C00]/20">
              <img 
                src="https://images.unsplash.com/photo-1583268921016-514d0a038478"
                alt="SAINetset Dataset Visualization"
                loading="lazy"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            
            {/* Tech Decoration Corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#FF5C00]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#FF5C00]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;