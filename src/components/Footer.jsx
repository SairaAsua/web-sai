import React from 'react';
import { Flame, Mail, Phone, MessageCircle, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#081F1A] border-t border-[#F5F6FA]/10 pt-16 pb-8 font-roboto text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
         
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded-lg">
              <div className="w-8 h-8 bg-[#FF5C00] rounded flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-montserrat text-white">
                SAI
              </span>
            </Link>
            <p className="text-[#F5F6FA]/60 leading-relaxed mb-6 font-light">
              {t('footer.brandDesc')}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold font-montserrat mb-6 uppercase tracking-wider text-xs">{t('footer.headings.contact')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:sai@altermundi.net" className="flex items-center gap-3 text-[#F5F6FA]/70 hover:text-[#FF5C00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded">
                  <Mail className="w-4 h-4" />
                  <span>sai@altermundi.net</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5493547469632" className="flex items-center gap-3 text-[#F5F6FA]/70 hover:text-[#FF5C00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded">
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('contact.info.whatsappValue')}</span>
                </a>
              </li>
              <li>
                <a href="tel:+5493547469632" className="flex items-center gap-3 text-[#F5F6FA]/70 hover:text-[#FF5C00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono">+54 9 3547 469632</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold font-montserrat mb-6 uppercase tracking-wider text-xs">{t('footer.headings.explore')}</h4>
            <ul className="space-y-3">
              <li><Link to="/como-funciona" className="text-[#F5F6FA]/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded">{t('footer.links.howItWorks')}</Link></li>
              <li><Link to="/tecnologia" className="text-[#F5F6FA]/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded">{t('footer.links.tech')}</Link></li>
              <li><Link to="/mapa" className="text-[#F5F6FA]/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded">{t('footer.links.map')}</Link></li>
              <li>
                <a 
                  href="https://github.com/AlterMundi/sai-cam" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[#F5F6FA]/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded"
                >
                  <Github className="w-4 h-4" />
                  <span>{t('footer.links.github')}</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://huggingface.co/datasets/SAINetset/SAINetset_v8.0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[#F5F6FA]/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded"
                >
                  <Github className="w-4 h-4" />
                  <span>Dataset (Hugging Face)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Sobre Nosotros Column */}
          <div>
            <h4 className="text-white font-bold font-montserrat mb-6 uppercase tracking-wider text-xs">{t('footer.headings.about')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/quienes-somos" 
                  className="text-[#F5F6FA]/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded"
                >
                  {t('footer.links.whoWeAre')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-[#F5F6FA]/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded"
                >
                  {t('footer.links.blog')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F5F6FA]/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F5F6FA]/40">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <Link to="/terminos" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded">{t('footer.links.terms')}</Link>
            <a href="https://github.com/AlterMundi/sai-cam" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:ring-offset-2 focus:ring-offset-[#081F1A] rounded">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;