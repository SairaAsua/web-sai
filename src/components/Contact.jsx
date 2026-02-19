import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0B2822] relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF5C00]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#25D366]/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Heading Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-6">
              {t('contact.title') || "Contacto"}
            </h2>
            <p className="text-xl md:text-2xl text-[#F5F6FA]/80 font-roboto leading-relaxed max-w-3xl mx-auto">
              Para más información sobre SAI y para sumarte a nuestra preventa, contactáte con nosotros a través de nuestros canales
            </p>
          </motion.div>

          {/* Primary Channels - Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/5493547469632"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl bg-[#0F352E] border border-[#25D366]/20 p-8 md:p-12 flex flex-col items-center justify-center gap-6 text-center shadow-lg transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(37,211,102,0.3)] hover:border-[#25D366]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 rounded-full bg-[#25D366] text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">WhatsApp</h3>
                <p className="text-[#F5F6FA]/60 text-lg mb-6">Chat directo e inmediato</p>
                <span className="inline-flex items-center gap-2 text-[#25D366] font-bold uppercase tracking-wider text-sm border-b-2 border-transparent group-hover:border-[#25D366] pb-1 transition-all">
                  Iniciar Conversación <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:contact@sainet.info"
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl bg-[#0F352E] border border-[#FF5C00]/20 p-8 md:p-12 flex flex-col items-center justify-center gap-6 text-center shadow-lg transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(255,92,0,0.3)] hover:border-[#FF5C00]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 rounded-full bg-[#FF5C00] text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">Email</h3>
                <p className="text-[#F5F6FA]/60 text-lg mb-6">Consultas detalladas</p>
                <span className="inline-flex items-center gap-2 text-[#FF5C00] font-bold uppercase tracking-wider text-sm border-b-2 border-transparent group-hover:border-[#FF5C00] pb-1 transition-all">
                  Enviar Correo <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

          </div>

          {/* Secondary Information */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {/* Phone */}
            <a 
              href="tel:+5493547469632"
              className="flex items-center gap-5 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#FF5C00]/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-[#FF5C00]/10 text-[#FF5C00] group-hover:bg-[#FF5C00] group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-mono text-[#F5F6FA]/50 uppercase tracking-widest mb-1">Llámanos</p>
                <p className="text-xl font-bold text-white group-hover:text-[#FF5C00] transition-colors">
                  +54 9 3547 469632
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-5 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-3 rounded-lg bg-[#F5F6FA]/10 text-[#F5F6FA]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-mono text-[#F5F6FA]/50 uppercase tracking-widest mb-1">Ubicación</p>
                <p className="text-xl font-bold text-white">
                  Córdoba, Argentina
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;